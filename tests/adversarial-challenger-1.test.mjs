/**
 * tests/adversarial-challenger-1.test.mjs
 *
 * Adversarial Challenger 1 Test Suite:
 * Stress-testing CLI flags, edge cases, snapshot creation, rollback resilience,
 * and the inviolable zero-mutation invariant under --dry-run.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const require = createRequire(import.meta.url);

const scoutModule = require('../scripts/pipeline/scout.js');
const auditorModule = require('../scripts/pipeline/auditor.js');
const executorModule = require('../scripts/pipeline/executor.js');
const reporterModule = require('../scripts/pipeline/reporter.js');
const validatorModule = require('../scripts/pipeline/validator.js');

function runCLI(args = [], options = {}) {
  const cliPath = path.join(PROJECT_ROOT, 'scripts', 'seo-geo-pipeline.js');
  return spawnSync(process.execPath, [cliPath, ...args], {
    cwd: options.cwd || PROJECT_ROOT,
    encoding: 'utf8',
    env: {
      ...process.env,
      NODE_PATH: path.join(PROJECT_ROOT, 'node_modules'),
      ...options.env
    },
    input: options.input,
    timeout: options.timeout || 15000
  });
}

function getSha256(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

function hashFile(filePath) {
  return getSha256(fs.readFileSync(filePath));
}

function createSandbox() {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'challenger1-sandbox-'));
  fs.mkdirSync(path.join(tmpDir, 'content', 'blog'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'public'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'app'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'components'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'lib'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'scripts', 'pipeline'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, '.seo-pipeline', 'reports'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, '.seo-pipeline', 'backups'), { recursive: true });

  // Copy pipeline scripts to sandbox
  const pipelineSrc = path.join(PROJECT_ROOT, 'scripts', 'pipeline');
  for (const f of fs.readdirSync(pipelineSrc)) {
    fs.copyFileSync(path.join(pipelineSrc, f), path.join(tmpDir, 'scripts', 'pipeline', f));
  }
  fs.copyFileSync(
    path.join(PROJECT_ROOT, 'scripts', 'seo-geo-pipeline.js'),
    path.join(tmpDir, 'scripts', 'seo-geo-pipeline.js')
  );

  return tmpDir;
}

function cleanupSandbox(tmpDir) {
  try {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  } catch (e) {
    // ignore
  }
}

/* ========================================================================= */
/* SUITE 1: CLI FLAG COMBINATIONS & EDGE CASES                               */
/* ========================================================================= */
describe('Challenger 1 - Suite 1: CLI Flag Combinations & Edge Cases', () => {

  it('ADV-CLI-1.1: --check on pristine repository exits 0 with zero violations', () => {
    const res = runCLI(['--check']);
    assert.equal(res.status, 0, `Expected exit 0, got ${res.status}. Output: ${res.stderr || res.stdout}`);
    assert.match(res.stdout, /CERO OCURRENCIAS/i);
    assert.match(res.stdout, /CERO TRACKERS/i);
    assert.match(res.stdout, /SATISFACTORIA/i);
  });

  it('ADV-CLI-1.2: --check in isolated sandbox with AggregateRating violation exits 1', () => {
    const sb = createSandbox();
    try {
      // Inject forbidden rating keyword
      fs.writeFileSync(
        path.join(sb, 'content', 'blog', 'bad-post.md'),
        '---\ntitle: "Bad"\n---\n{"@type": "AggregateRating", "ratingValue": "5.0"}\n'
      );
      const res = spawnSync(process.execPath, [path.join(sb, 'scripts', 'seo-geo-pipeline.js'), '--check'], {
        cwd: sb,
        encoding: 'utf8',
        env: {
          ...process.env,
          NODE_PATH: path.join(PROJECT_ROOT, 'node_modules')
        }
      });
      assert.equal(res.status, 1, `Expected exit 1 for AggregateRating violation, got ${res.status}`);
      assert.match(res.stdout, /INFRACCIONES ENCONTRADAS/i);
    } finally {
      cleanupSandbox(sb);
    }
  });

  it('ADV-CLI-1.3: --check in isolated sandbox with tracker script violation exits 1', () => {
    const sb = createSandbox();
    try {
      // Inject forbidden tracker script
      fs.writeFileSync(
        path.join(sb, 'public', 'bad-script.html'),
        '<script src="https://www.googletagmanager.com/gtag/js"></script>'
      );
      const res = spawnSync(process.execPath, [path.join(sb, 'scripts', 'seo-geo-pipeline.js'), '--check'], {
        cwd: sb,
        encoding: 'utf8',
        env: {
          ...process.env,
          NODE_PATH: path.join(PROJECT_ROOT, 'node_modules')
        }
      });
      assert.equal(res.status, 1, `Expected exit 1 for tracker violation, got ${res.status}`);
      assert.match(res.stdout, /INFRACCIONES ENCONTRADAS/i);
    } finally {
      cleanupSandbox(sb);
    }
  });

  it('ADV-CLI-1.4: Unknown / invalid flags do not crash and safely default to dry-run (exit 0)', () => {
    const invalidFlags = [
      ['--invalid-flag'],
      ['--foo', '--bar'],
      ['-z'],
      ['--unknown-command', '--dry-run'],
      ['']
    ];

    for (const flags of invalidFlags) {
      const res = runCLI(flags);
      assert.equal(res.status, 0, `Expected exit 0 for unknown flags ${flags.join(' ')}, got ${res.status}`);
      assert.match(res.stdout, /dry-run/i, `Expected dry-run mode for unknown flags ${flags.join(' ')}`);
    }
  });

  it('ADV-CLI-1.5: Limit flag parsing boundary behaviors (--limit 1, --limit 0, --limit -5, --limit abc)', () => {
    // --limit 1 should parse limit 1
    const res1 = runCLI(['--limit', '1']);
    assert.equal(res1.status, 0);
    assert.match(res1.stdout, /L\u00edmite de lote: 1/i);

    // --limit 0: ParsedLimit >= 0 is accepted and sets limit to 0
    const res0 = runCLI(['--limit', '0']);
    assert.equal(res0.status, 0);
    assert.match(res0.stdout, /L\u00edmite de lote: 0/i, 'Confirms --limit 0 sets batch limit to 0');

    // --limit -5: Negative limit defaults safely to 5
    const resNeg = runCLI(['--limit', '-5']);
    assert.equal(resNeg.status, 0);
    assert.match(resNeg.stdout, /L\u00edmite de lote: 5/i);

    // --limit without value at the end of args
    const resEnd = runCLI(['--limit']);
    assert.equal(resEnd.status, 0);
    assert.match(resEnd.stdout, /L\u00edmite de lote: 5/i);

    // --limit with non-numeric string
    const resNaN = runCLI(['--limit', 'invalid_number']);
    assert.equal(resNaN.status, 0);
    assert.match(resNaN.stdout, /L\u00edmite de lote: 5/i);
  });

  it('ADV-CLI-1.6: Flag conflict verification: --dry-run takes absolute precedence over --auto-apply with 0 mutations', () => {
    const sb = createSandbox();
    try {
      fs.writeFileSync(
        path.join(sb, 'content', 'blog', 'boda-madrid.md'),
        '---\ntitle: "Mago Bodas"\ndate: "2026-10-06"\nexcerpt: "Boda exclusiva en finca de Madrid"\ncategory: "Bodas"\ntags: ["bodas"]\n---\nTexto de boda en Madrid.\n'
      );
      fs.writeFileSync(
        path.join(sb, 'public', 'llms.txt'),
        '# LLMs\n'
      );

      const beforeContent = fs.readFileSync(path.join(sb, 'content', 'blog', 'boda-madrid.md'), 'utf8');

      // Run with BOTH --dry-run AND --auto-apply AND --skip-build
      const res = spawnSync(process.execPath, [
        path.join(sb, 'scripts', 'seo-geo-pipeline.js'),
        '--dry-run',
        '--auto-apply',
        '--skip-build'
      ], {
        cwd: sb,
        encoding: 'utf8',
        env: {
          ...process.env,
          NODE_PATH: path.join(PROJECT_ROOT, 'node_modules')
        }
      });

      // Verify dry-run mode reported: dry-run has absolute precedence!
      assert.match(res.stdout, /Modo de ejecuci\u00f3n activo: --dry-run/i);
      assert.equal(res.status, 0);

      // Verify ZERO file mutations occurred on disk
      const afterContent = fs.readFileSync(path.join(sb, 'content', 'blog', 'boda-madrid.md'), 'utf8');
      assert.equal(afterContent, beforeContent, 'Expected file to remain unmutated when --dry-run is present with --auto-apply');
    } finally {
      cleanupSandbox(sb);
    }
  });

  it('ADV-CLI-1.7: Interactive mode rejection prompt cancels execution without mutating code', () => {
    const res = runCLI(['--interactive'], { input: 'n\n' });
    assert.equal(res.status, 0);
    assert.match(res.stdout, /Operaci\u00f3n cancelada/i);
  });
});

/* ========================================================================= */
/* SUITE 2: CRYPTOGRAPHIC ZERO-MUTATION INVARIANT UNDER --dry-run            */
/* ========================================================================= */
describe('Challenger 1 - Suite 2: Cryptographic Zero-Mutation Invariant Under --dry-run', () => {

  it('ADV-MUT-2.1: --dry-run mutates ZERO source/content/config files on disk', () => {
    // Gather all tracked source and content files
    const dirsToWatch = ['content', 'public', 'app', 'components', 'lib', 'scripts'];
    const filesToHash = [];

    function collectFiles(dir) {
      const fullDir = path.join(PROJECT_ROOT, dir);
      if (!fs.existsSync(fullDir)) return;
      const entries = fs.readdirSync(fullDir, { withFileTypes: true });
      for (const ent of entries) {
        const fullPath = path.join(fullDir, ent.name);
        if (ent.isDirectory()) {
          collectFiles(path.relative(PROJECT_ROOT, fullPath));
        } else if (/\.(jsx?|tsx?|json|md|txt|mjs|css)$/.test(ent.name)) {
          filesToHash.push(fullPath);
        }
      }
    }

    for (const d of dirsToWatch) {
      collectFiles(d);
    }
    filesToHash.push(path.join(PROJECT_ROOT, 'package.json'));

    assert.ok(filesToHash.length > 50, `Expected at least 50 files to monitor, got ${filesToHash.length}`);

    // Compute hashes BEFORE running CLI
    const preHashes = new Map();
    for (const f of filesToHash) {
      preHashes.set(f, hashFile(f));
    }

    // Run CLI in default dry-run mode
    const runRes = runCLI(['--dry-run', '--verbose']);
    assert.equal(runRes.status, 0);

    // Compute hashes AFTER running CLI
    const mutatedFiles = [];
    for (const f of filesToHash) {
      const postHash = hashFile(f);
      if (postHash !== preHashes.get(f)) {
        mutatedFiles.push(path.relative(PROJECT_ROOT, f));
      }
    }

    assert.equal(
      mutatedFiles.length,
      0,
      `VIOLATION: --dry-run modified files on disk: ${mutatedFiles.join(', ')}`
    );
  });

  it('ADV-MUT-2.2: Default execution with no flags mutates ZERO files outside .seo-pipeline/reports/', () => {
    const testFile = path.join(PROJECT_ROOT, 'public', 'llms.txt');
    const hashBefore = hashFile(testFile);

    const runRes = runCLI([]);
    assert.equal(runRes.status, 0);

    const hashAfter = hashFile(testFile);
    assert.equal(hashBefore, hashAfter, 'public/llms.txt was unexpectedly mutated in default mode');
  });
});

/* ========================================================================= */
/* SUITE 3: SNAPSHOT CREATION & MANIFEST INTEGRITY                            */
/* ========================================================================= */
describe('Challenger 1 - Suite 3: Snapshot Creation & Manifest Integrity', () => {

  it('ADV-SNP-3.1: createSnapshot stores exact bit-for-bit file copies with verified SHA-256', () => {
    const sb = createSandbox();
    try {
      const file1 = path.join(sb, 'content', 'blog', 'test-post.md');
      const file2 = path.join(sb, 'public', 'llms.txt');
      const content1 = '---\ntitle: "Snapshot Test 1"\n---\nContenido único para hash 1.\n';
      const content2 = '# llms.txt\nSnapshot Test 2\n';
      fs.writeFileSync(file1, content1);
      fs.writeFileSync(file2, content2);

      const targetFiles = ['content/blog/test-post.md', 'public/llms.txt'];
      const snapshot = executorModule.createSnapshot(sb, targetFiles);

      assert.ok(fs.existsSync(snapshot.backupDir), 'Backup directory must exist');
      const manifestPath = path.join(snapshot.backupDir, 'manifest.json');
      assert.ok(fs.existsSync(manifestPath), 'manifest.json must exist');

      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      assert.equal(manifest.files.length, 2);

      for (const entry of manifest.files) {
        const origPath = path.join(sb, entry.relative);
        const backupPath = path.join(snapshot.backupDir, entry.backupRelative);

        assert.ok(fs.existsSync(backupPath), `Backup copy must exist for ${entry.relative}`);
        const origSha = getSha256(fs.readFileSync(origPath));
        const backupSha = getSha256(fs.readFileSync(backupPath));

        assert.equal(origSha, entry.sha256, 'Manifest SHA-256 must match original file');
        assert.equal(backupSha, entry.sha256, 'Backup copy SHA-256 must match manifest hash');
      }
    } finally {
      cleanupSandbox(sb);
    }
  });

  it('ADV-SNP-3.2: createSnapshot handles duplicate files in targetFiles without duplicating manifest entries', () => {
    const sb = createSandbox();
    try {
      const file1 = path.join(sb, 'content', 'blog', 'post.md');
      fs.writeFileSync(file1, '---\ntitle: "Duplicate Target Test"\n---\n');

      const targetFiles = [
        'content/blog/post.md',
        'content/blog/post.md',
        'content/blog/post.md'
      ];
      const snapshot = executorModule.createSnapshot(sb, targetFiles);
      const manifest = JSON.parse(fs.readFileSync(path.join(snapshot.backupDir, 'manifest.json'), 'utf8'));

      assert.equal(manifest.files.length, 1, 'Duplicate target files must be deduplicated in manifest');
    } finally {
      cleanupSandbox(sb);
    }
  });

  it('ADV-SNP-3.3: createSnapshot safely ignores non-existent target files without failing', () => {
    const sb = createSandbox();
    try {
      const targetFiles = ['non-existent-1.md', 'non-existent-2.txt'];
      const snapshot = executorModule.createSnapshot(sb, targetFiles);
      const manifest = JSON.parse(fs.readFileSync(path.join(snapshot.backupDir, 'manifest.json'), 'utf8'));

      assert.equal(manifest.files.length, 0, 'Non-existent files should be omitted from snapshot manifest');
      assert.ok(fs.existsSync(snapshot.backupDir), 'Backup dir should still be created');
    } finally {
      cleanupSandbox(sb);
    }
  });
});

/* ========================================================================= */
/* SUITE 4: ROLLBACK RESILIENCE & RECOVERY HARNESS                           */
/* ========================================================================= */
describe('Challenger 1 - Suite 4: Rollback Resilience & Recovery Harness', () => {

  it('ADV-RLB-4.1: Rollback restores 100% exact pre-execution state after severe file corruption', () => {
    const sb = createSandbox();
    try {
      const rel1 = 'content/blog/post-a.md';
      const rel2 = 'content/blog/post-b.md';
      const file1 = path.join(sb, rel1);
      const file2 = path.join(sb, rel2);

      const orig1 = '---\ntitle: "Original Post A"\n---\nTexto A intacto.\n';
      const orig2 = '---\ntitle: "Original Post B"\n---\nTexto B intacto.\n';
      fs.writeFileSync(file1, orig1);
      fs.writeFileSync(file2, orig2);

      const hash1Before = getSha256(orig1);
      const hash2Before = getSha256(orig2);

      // 1. Create snapshot
      const snapshot = executorModule.createSnapshot(sb, [rel1, rel2]);

      // 2. Corrupt both files severely
      fs.writeFileSync(file1, 'CORRUPTED FILE 1 !!!');
      fs.writeFileSync(file2, ''); // Truncated to 0 bytes

      assert.notEqual(getSha256(fs.readFileSync(file1)), hash1Before);
      assert.notEqual(getSha256(fs.readFileSync(file2)), hash2Before);

      // 3. Perform rollback
      const rbRes = executorModule.rollback(sb, snapshot.backupDir);
      assert.equal(rbRes.success, true);
      assert.equal(rbRes.restoredCount, 2);

      // 4. Assert cryptographic identity
      assert.equal(getSha256(fs.readFileSync(file1)), hash1Before, 'File 1 must match pre-mutation SHA-256');
      assert.equal(getSha256(fs.readFileSync(file2)), hash2Before, 'File 2 must match pre-mutation SHA-256');
    } finally {
      cleanupSandbox(sb);
    }
  });

  it('ADV-RLB-4.2: Rollback restores files that were completely deleted from disk', () => {
    const sb = createSandbox();
    try {
      const rel = 'content/blog/deleted-post.md';
      const file = path.join(sb, rel);
      const originalContent = '---\ntitle: "Will Be Deleted"\n---\n';
      fs.writeFileSync(file, originalContent);
      const origSha = getSha256(originalContent);

      const snapshot = executorModule.createSnapshot(sb, [rel]);

      // Delete file from disk
      fs.unlinkSync(file);
      assert.ok(!fs.existsSync(file), 'File must be deleted');

      // Rollback
      const rbRes = executorModule.rollback(sb, snapshot.backupDir);
      assert.equal(rbRes.success, true);
      assert.equal(rbRes.restoredCount, 1);
      assert.ok(fs.existsSync(file), 'File must be restored');
      assert.equal(getSha256(fs.readFileSync(file)), origSha, 'Restored file must match original SHA-256');
    } finally {
      cleanupSandbox(sb);
    }
  });

  it('ADV-RLB-4.3: Rollback fails safely with descriptive error when manifest.json is missing', () => {
    const sb = createSandbox();
    try {
      const emptyBackupDir = path.join(sb, '.seo-pipeline', 'backups', 'empty-backup');
      fs.mkdirSync(emptyBackupDir, { recursive: true });

      assert.throws(() => {
        executorModule.rollback(sb, emptyBackupDir);
      }, /No se encontr\u00f3 el archivo de manifiesto/i);
    } finally {
      cleanupSandbox(sb);
    }
  });

  it('ADV-RLB-4.4: runPostValidation automatically triggers rollback and restores files upon rating violation', () => {
    const sb = createSandbox();
    try {
      const rel = 'content/blog/valid-post.md';
      const file = path.join(sb, rel);
      const originalContent = '---\ntitle: "Initial Post"\n---\nContenido original limpio.\n';
      fs.writeFileSync(file, originalContent);
      const origSha = getSha256(originalContent);

      // Snapshot
      const snapshot = executorModule.createSnapshot(sb, [rel]);

      // Simulate a bad executor mutation that injected AggregateRating
      fs.writeFileSync(
        file,
        '---\ntitle: "Mutated"\n---\n{"@type": "AggregateRating", "ratingValue": 4.9}\n'
      );

      // Run post validation with backupPath
      const valRes = validatorModule.runPostValidation(sb, {
        backupPath: snapshot.backupDir,
        skipBuild: true
      });

      assert.equal(valRes.passed, false, 'Validation must fail due to AggregateRating');
      assert.equal(valRes.rollbackTriggered, true, 'Rollback must be triggered');

      // Check that the file was restored to its clean original state
      const postSha = getSha256(fs.readFileSync(file));
      assert.equal(postSha, origSha, 'Post-rollback file must be restored to original clean state');
      assert.ok(!fs.readFileSync(file, 'utf8').includes('AggregateRating'), 'Forbidden rating must be gone');
    } finally {
      cleanupSandbox(sb);
    }
  });

  it('ADV-RLB-4.5: runPostValidation automatically triggers rollback and restores files upon tracker script violation', () => {
    const sb = createSandbox();
    try {
      const rel = 'public/test-page.html';
      const file = path.join(sb, rel);
      const originalContent = '<!DOCTYPE html><html><body>Página limpia</body></html>';
      fs.writeFileSync(file, originalContent);
      const origSha = getSha256(originalContent);

      const snapshot = executorModule.createSnapshot(sb, [rel]);

      // Inject tracker
      fs.writeFileSync(file, '<!DOCTYPE html><html><body><script src="https://hotjar.com/c/123.js"></script></body></html>');

      const valRes = validatorModule.runPostValidation(sb, {
        backupPath: snapshot.backupDir,
        skipBuild: true
      });

      assert.equal(valRes.passed, false);
      assert.equal(valRes.rollbackTriggered, true);
      assert.equal(getSha256(fs.readFileSync(file)), origSha);
    } finally {
      cleanupSandbox(sb);
    }
  });
});

/* ========================================================================= */
/* SUITE 5: AUDITOR RUBRIC & HARD VETO EDGE CASES                            */
/* ========================================================================= */
describe('Challenger 1 - Suite 5: Auditor Rubric & Hard Veto Stress Testing', () => {

  it('ADV-AUD-5.1: Auditor blocks payload >30KB with VETO_PERFORMANCE_DEGRADATION even if score is 100', () => {
    const opp = {
      id: 'OPP-HUGE-001',
      type: 'metadata',
      targetFile: 'content/blog/test.md',
      title: 'Mago para bodas exclusivas en Madrid',
      description: 'Gran optimización con payload enorme',
      proposedChange: {
        kind: 'frontmatter',
        payload: {
          hugeData: 'x'.repeat(35000) // 35KB
        }
      },
      impactArea: 'conversion'
    };

    const res = auditorModule.auditOpportunity(opp);
    assert.equal(res.verdict, 'REJECTED');
    assert.equal(res.vetoTriggered, 'VETO_PERFORMANCE_DEGRADATION');
    assert.match(res.businessJustification, /l\u00edmite de peso seguro/i);
  });

  it('ADV-AUD-5.2: Auditor blocks non-Madrid locations (Valencia, Sevilla, Bilbao) with VETO_NON_MADRID_GEOGRAPHY', () => {
    const cities = ['Valencia', 'Sevilla', 'Bilbao', 'Málaga', 'Zaragoza'];
    for (const city of cities) {
      const opp = {
        id: `OPP-GEO-${city}`,
        type: 'metadata',
        targetFile: 'content/blog/test.md',
        title: `Mago para bodas en ${city}`,
        description: `Espectáculo en ${city}`,
        proposedChange: {
          kind: 'frontmatter',
          payload: { title: `Mago en ${city}` }
        },
        impactArea: 'conversion'
      };
      const res = auditorModule.auditOpportunity(opp);
      assert.equal(res.verdict, 'REJECTED', `City ${city} should have been rejected`);
      assert.equal(res.vetoTriggered, 'VETO_NON_MADRID_GEOGRAPHY');
    }
  });

  it('ADV-AUD-5.3: Auditor blocks zero commercial intent (gratis, truco, aprender) with VETO_ZERO_COMMERCIAL_INTENT', () => {
    const keywords = ['tutoriales de magia', 'aprender magia gratis', 'cómo hacer trucos'];
    for (const kw of keywords) {
      const opp = {
        id: 'OPP-FREE-001',
        type: 'metadata',
        targetFile: 'content/blog/test.md',
        title: `Cómo hacer ${kw}`,
        description: `Guía para ${kw}`,
        proposedChange: {
          kind: 'frontmatter',
          payload: { title: `Guía de ${kw}` }
        },
        impactArea: 'seo'
      };
      const res = auditorModule.auditOpportunity(opp);
      assert.equal(res.verdict, 'REJECTED');
      assert.equal(res.vetoTriggered, 'VETO_ZERO_COMMERCIAL_INTENT');
    }
  });

  it('ADV-AUD-5.4: Auditor approves high-commercial Madrid wedding/corporate opportunities with score >= 70', () => {
    const opp = {
      id: 'OPP-MADRID-WEDDING-001',
      type: 'metadata',
      targetFile: 'content/blog/mago-bodas-madrid.md',
      title: 'Mago para bodas de lujo en Madrid: Contratar espectáculo exclusivo para fincas',
      description: 'Optimización de metadatos para novios y wedding planners que buscan contratar mago para bodas en fincas de Madrid.',
      proposedChange: {
        kind: 'frontmatter',
        payload: {
          title: 'Mago para Bodas en Madrid | Ángel Ruiz Espectáculos Exclusivos',
          tags: ['mago bodas madrid', 'animacion bodas madrid', 'fincas madrid bodas']
        }
      },
      impactArea: 'conversion'
    };

    const res = auditorModule.auditOpportunity(opp);
    assert.equal(res.verdict, 'APPROVED');
    assert.ok(res.totalScore >= 70, `Expected score >= 70, got ${res.totalScore}`);
    assert.equal(res.vetoTriggered, undefined);
  });
});
