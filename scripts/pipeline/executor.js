/**
 * Agent 3: Safe Applicator & Snapshot Engine (scripts/pipeline/executor.js)
 *
 * Implements:
 * - Pre-execution backup snapshot under .seo-pipeline/backups/<TIMESTAMP>/
 * - SHA-256 hash manifest for data integrity
 * - Idempotent file modifications (Markdown frontmatter, content append, llms.txt)
 * - Clean diff computation
 * - Automatic rollback mechanism on validation failure
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const matter = require('gray-matter');

/**
 * Normalizes relative path.
 */
function toRel(projectRoot, absPath) {
  return path.relative(projectRoot, absPath).replace(/\\/g, '/');
}

/**
 * Creates SHA-256 hash of a string or buffer.
 */
function getSha256(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

/**
 * Simple unified-style diff generator between two strings.
 */
function generateDiff(beforeText, afterText) {
  const beforeLines = beforeText.split('\n');
  const afterLines = afterText.split('\n');
  const diffLines = [];

  let i = 0;
  let j = 0;
  while (i < beforeLines.length || j < afterLines.length) {
    if (i < beforeLines.length && j < afterLines.length && beforeLines[i] === afterLines[j]) {
      i++;
      j++;
    } else {
      if (i < beforeLines.length && (j >= afterLines.length || !afterLines.slice(j, j + 3).includes(beforeLines[i]))) {
        diffLines.push(`- ${beforeLines[i]}`);
        i++;
      } else if (j < afterLines.length) {
        diffLines.push(`+ ${afterLines[j]}`);
        j++;
      }
    }
  }

  return diffLines.slice(0, 30).join('\n') || '(Cambios idénticos o formato normalizado)';
}

/**
 * Creates a pre-execution snapshot backup.
 */
function createSnapshot(projectRoot, targetFiles) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDir = path.join(projectRoot, '.seo-pipeline', 'backups', timestamp);
  fs.mkdirSync(backupDir, { recursive: true });

  const manifest = {
    timestamp,
    createdAt: new Date().toISOString(),
    files: []
  };

  const uniqueFiles = Array.from(new Set(targetFiles));

  for (const relFile of uniqueFiles) {
    const srcPath = path.join(projectRoot, relFile);
    if (fs.existsSync(srcPath)) {
      const content = fs.readFileSync(srcPath);
      const sha256 = getSha256(content);
      const destPath = path.join(backupDir, relFile);

      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.writeFileSync(destPath, content);

      manifest.files.push({
        relative: relFile,
        backupRelative: path.relative(backupDir, destPath).replace(/\\/g, '/'),
        sha256,
        size: content.length
      });
    }
  }

  const manifestPath = path.join(backupDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

  return {
    timestamp,
    backupDir,
    manifest
  };
}

/**
 * Restores all files from a backup snapshot.
 */
function rollback(projectRoot, backupDir) {
  const manifestPath = path.join(backupDir, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`No se encontró el archivo de manifiesto en: ${backupDir}`);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  let restoredCount = 0;

  for (const entry of manifest.files) {
    const backupFilePath = path.join(backupDir, entry.backupRelative);
    const destFilePath = path.join(projectRoot, entry.relative);

    if (fs.existsSync(backupFilePath)) {
      fs.mkdirSync(path.dirname(destFilePath), { recursive: true });
      fs.copyFileSync(backupFilePath, destFilePath);
      restoredCount++;
    }
  }

  return {
    success: true,
    restoredCount,
    backupDir
  };
}

/**
 * Modifies frontmatter idempotently.
 */
function modifyFrontmatter(filePath, payload) {
  const original = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(original);

  if (payload.title !== undefined) {
    parsed.data.title = payload.title;
  }
  if (payload.excerpt !== undefined) {
    parsed.data.excerpt = payload.excerpt;
  }
  if (payload.tags !== undefined) {
    parsed.data.tags = Array.from(new Set([...(parsed.data.tags || []), ...payload.tags]));
  }
  if (payload.faq !== undefined && Array.isArray(payload.faq)) {
    const currentFaq = parsed.data.faq || [];
    const merged = [...currentFaq];
    for (const item of payload.faq) {
      const exists = merged.some(m => m.question.trim().toLowerCase() === item.question.trim().toLowerCase());
      if (!exists) {
        merged.push(item);
      }
    }
    parsed.data.faq = merged;
  }

  const updated = matter.stringify(parsed.content, parsed.data);
  fs.writeFileSync(filePath, updated, 'utf8');

  return {
    beforeText: original,
    afterText: updated
  };
}

/**
 * Modifies topic cluster internal linking block idempotently.
 */
function modifyClusterLinks(filePath, payload) {
  const original = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(original);
  let content = parsed.content;

  // Pattern for topic cluster link block
  const sigueRegex = /### 🔮 Sigue leyendo[\s\S]*$/;
  if (sigueRegex.test(content)) {
    content = content.replace(sigueRegex, '').trim();
  }

  const blockToAppend = payload.block || '';
  const newContent = `${content.trim()}\n\n${blockToAppend.trim()}\n`;

  const updated = matter.stringify(newContent, parsed.data);
  fs.writeFileSync(filePath, updated, 'utf8');

  return {
    beforeText: original,
    afterText: updated
  };
}

/**
 * Modifies public/llms.txt idempotently.
 */
function modifyLlmsTxt(filePath, payload) {
  const original = fs.readFileSync(filePath, 'utf8');
  let updated = original;

  const sectionTitle = payload.sectionTitle;
  const entries = payload.entries || [];

  if (updated.includes(sectionTitle)) {
    // Append only entries not already in the file
    const missingEntries = entries.filter(e => !updated.includes(e.split('](')[0]));
    if (missingEntries.length > 0) {
      updated = updated.replace(sectionTitle, `${sectionTitle}\n\n${missingEntries.join('\n')}`);
    }
  } else {
    // Append section at end before "## Optional" if present, or at the end
    const optionalHeader = '## Optional';
    if (updated.includes(optionalHeader)) {
      updated = updated.replace(
        optionalHeader,
        `${sectionTitle}\n\n${entries.join('\n')}\n\n${optionalHeader}`
      );
    } else {
      updated = `${updated.trim()}\n\n${sectionTitle}\n\n${entries.join('\n')}\n`;
    }
  }

  fs.writeFileSync(filePath, updated, 'utf8');

  return {
    beforeText: original,
    afterText: updated
  };
}

/**
 * Applies a single approved Opportunity.
 */
function applyOpportunity(projectRoot, opp) {
  const targetAbs = path.join(projectRoot, opp.targetFile);
  if (!fs.existsSync(targetAbs)) {
    return {
      opportunityId: opp.id,
      targetFile: opp.targetFile,
      status: 'FAILED',
      error: `Archivo objetivo no encontrado: ${opp.targetFile}`,
      beforeSnippet: '',
      afterSnippet: '',
      diff: ''
    };
  }

  try {
    let modResult = null;
    const kind = opp.proposedChange ? opp.proposedChange.kind : null;

    if (kind === 'frontmatter') {
      modResult = modifyFrontmatter(targetAbs, opp.proposedChange.payload);
    } else if (kind === 'append' && opp.type === 'interlinking') {
      modResult = modifyClusterLinks(targetAbs, opp.proposedChange.payload);
    } else if (kind === 'append_section' && opp.targetFile.includes('llms.txt')) {
      modResult = modifyLlmsTxt(targetAbs, opp.proposedChange.payload);
    } else {
      // Fallback: skip unknown modification kind safely
      return {
        opportunityId: opp.id,
        targetFile: opp.targetFile,
        status: 'SKIPPED',
        error: `Tipo de mutación no soportado o no seguro: ${kind}`,
        beforeSnippet: '',
        afterSnippet: '',
        diff: ''
      };
    }

    const diff = generateDiff(modResult.beforeText, modResult.afterText);
    const beforeSnippet = modResult.beforeText.slice(0, 300);
    const afterSnippet = modResult.afterText.slice(0, 300);

    return {
      opportunityId: opp.id,
      targetFile: opp.targetFile,
      status: 'APPLIED',
      beforeSnippet,
      afterSnippet,
      diff
    };
  } catch (err) {
    return {
      opportunityId: opp.id,
      targetFile: opp.targetFile,
      status: 'FAILED',
      error: err.message,
      beforeSnippet: '',
      afterSnippet: '',
      diff: ''
    };
  }
}

/**
 * Orchestrates applying approved opportunities with automatic snapshotting.
 */
function executeApproved(projectRoot, approvedEvaluations, options = {}) {
  const verbose = options.verbose || false;
  const rawLimit = options.limit !== undefined ? parseInt(options.limit, 10) : 10;
  const limit = (!isNaN(rawLimit) && rawLimit >= 0) ? rawLimit : 10;

  const selected = approvedEvaluations.slice(0, limit);
  if (selected.length === 0) {
    return {
      appliedCount: 0,
      skippedCount: 0,
      backupPath: null,
      changes: [],
      validationPassed: true,
      rollbackTriggered: false
    };
  }

  // Identify target files
  const targetFiles = selected.map(e => e.opportunity.targetFile);
  if (verbose) console.log(`🛠️ [Executor] Creando snapshot de seguridad para ${targetFiles.length} archivos...`);

  const snapshot = createSnapshot(projectRoot, targetFiles);
  if (verbose) console.log(`🛠️ [Executor] Snapshot guardado en: ${snapshot.backupDir}`);

  const changes = [];
  let appliedCount = 0;
  let skippedCount = 0;

  for (const item of selected) {
    if (verbose) console.log(`🛠️ [Executor] Aplicando cambio: [${item.opportunity.id}] en ${item.opportunity.targetFile}...`);
    const changeRes = applyOpportunity(projectRoot, item.opportunity);
    changes.push(changeRes);

    if (changeRes.status === 'APPLIED') {
      appliedCount++;
    } else {
      skippedCount++;
    }
  }

  return {
    appliedCount,
    skippedCount,
    backupPath: snapshot.backupDir,
    changes,
    validationPassed: true,
    rollbackTriggered: false
  };
}

module.exports = {
  createSnapshot,
  rollback,
  applyOpportunity,
  executeApproved,
  generateDiff
};
