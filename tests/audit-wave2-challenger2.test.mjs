/**
 * tests/audit-wave2-challenger2.test.mjs
 *
 * Empirical Adversarial Challenger 2 Test Suite for Wave 2 Deliverables:
 * - Adversarial parsing and verification of snippet lengths in MATRIZ_RESCATE_SERP.md
 * - Inviolable check for zero AggregateRating across all deliverables in orchestrator_2
 * - Structural and integrity checks for CHECKLIST_GEO_AI.md, BACKLOG_TAREAS_EJECUTABLES.md, etc.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const ORCHESTRATOR_DIR = path.join(PROJECT_ROOT, '.agents', 'teamwork', 'orchestrator_2');

describe('Challenger 2 - Wave 2 Empirical Verification', () => {

  describe('1. Adversarial Parsing of MATRIZ_RESCATE_SERP.md Snippets', () => {
    const matrixPath = path.join(ORCHESTRATOR_DIR, 'MATRIZ_RESCATE_SERP.md');

    it('File MATRIZ_RESCATE_SERP.md exists and is readable', () => {
      assert.ok(fs.existsSync(matrixPath), 'MATRIZ_RESCATE_SERP.md must exist in orchestrator_2');
      const stat = fs.statSync(matrixPath);
      assert.ok(stat.size > 1000, 'File size should be substantial');
    });

    it('All proposed snippet titles must be <= 60 characters and descriptions <= 155 characters', () => {
      const content = fs.readFileSync(matrixPath, 'utf8');
      const rows = content.split('\n').filter(line => line.startsWith('| **'));
      assert.ok(rows.length >= 10, `Expected at least 10 prioritized queries, found ${rows.length}`);

      const titleRegex = /\*\*Title[^*]*\*\*:\s*`([^`]+)`/g;
      const descRegex = /\*\*Desc[^*]*\*\*:\s*`([^`]+)`/g;

      let totalTitlesChecked = 0;
      let totalDescsChecked = 0;
      const issues = [];
      const inspectedSnippets = [];

      rows.forEach((row, idx) => {
        // Handle escaped pipes \| inside markdown cells
        const safeRow = row.replace(/\\\|/g, '__ESCAPED_PIPE__');
        const rawCols = safeRow.split('|').map(s => s.trim().replace(/__ESCAPED_PIPE__/g, '|'));
        const cols = rawCols.slice(1, -1);

        const rowId = cols[0];
        const query = cols[1];
        const optCell = cols[6]; // Column 6 is "Snippet Optimizado Propuesto"

        assert.ok(optCell, `Row ${rowId} (${query}) must have column 6 for proposed snippet`);

        const titles = [...optCell.matchAll(titleRegex)].map(m => m[1]);
        const descs = [...optCell.matchAll(descRegex)].map(m => m[1]);

        assert.ok(titles.length > 0, `Row ${rowId} (${query}) must have at least one proposed title in column 6. Found: ${optCell}`);
        assert.ok(descs.length > 0, `Row ${rowId} (${query}) must have at least one proposed description in column 6. Found: ${optCell}`);

        titles.forEach(t => {
          totalTitlesChecked++;
          const len = t.length;
          inspectedSnippets.push({ row: rowId, type: 'Title', len, text: t });
          if (len > 60) {
            issues.push(`Title exceeds 60 chars (length=${len} > 60): "${t}" in row ${rowId}`);
          }
        });

        descs.forEach(d => {
          totalDescsChecked++;
          const len = d.length;
          inspectedSnippets.push({ row: rowId, type: 'Desc', len, text: d });
          if (len > 155) {
            issues.push(`Description exceeds 155 chars (length=${len} > 155): "${d}" in row ${rowId}`);
          }
          if (len < 100) {
            issues.push(`Description is suspiciously short (length=${len} < 100): "${d}" in row ${rowId}`);
          }
        });
      });

      console.log(`Inspected snippets summary (${totalTitlesChecked} titles, ${totalDescsChecked} descriptions):`);
      inspectedSnippets.forEach(s => {
        console.log(`  [Row ${s.row}] ${s.type} (${s.len} chars): "${s.text}"`);
      });

      if (issues.length > 0) {
        console.error('Snippet length violations:', issues);
      }
      assert.equal(issues.length, 0, `Found snippet length violations: ${JSON.stringify(issues)}`);
    });
  });

  describe('2. Inviolable Zero AggregateRating Guarantee across all Deliverables and Schemas', () => {
    const deliverableFiles = [
      'MATRIZ_RESCATE_SERP.md',
      'CHECKLIST_GEO_AI.md',
      'BACKLOG_TAREAS_EJECUTABLES.md',
      'INFORME_AUDITORIA_360.md',
      'SCOPE.md'
    ];

    it('Zero AggregateRating mentions or recommendations in orchestrator_2 deliverables', () => {
      const violations = [];

      for (const filename of deliverableFiles) {
        const filePath = path.join(ORCHESTRATOR_DIR, filename);
        if (!fs.existsSync(filePath)) {
          violations.push(`File missing: ${filename}`);
          continue;
        }
        const text = fs.readFileSync(filePath, 'utf8');

        const lines = text.split('\n');
        lines.forEach((line, lineNo) => {
          if (/"@type":\s*"AggregateRating"/i.test(line) ||
              /"ratingValue"/i.test(line) ||
              /"reviewCount"/i.test(line) ||
              /"bestRating"/i.test(line) ||
              /"worstRating"/i.test(line)) {
            violations.push(`${filename}:${lineNo + 1} contains schema rating property: ${line.trim()}`);
          }
        });
      }

      assert.equal(violations.length, 0, `Schema rating violations found: ${JSON.stringify(violations)}`);
    });

    it('Site-wide source code has 0 occurrences of AggregateRating, ratingValue, reviewCount in app/, components/, lib/, public/', () => {
      const targetDirs = ['app', 'components', 'lib', 'public'];
      const forbiddenTokens = ['AggregateRating', 'ratingValue', 'reviewCount', 'bestRating', 'worstRating'];
      const sourceViolations = [];

      function scanDir(dir) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            scanDir(fullPath);
          } else if (/\.(jsx?|tsx?|json|html|md)$/i.test(entry.name)) {
            const content = fs.readFileSync(fullPath, 'utf8');
            for (const token of forbiddenTokens) {
              if (content.toLowerCase().includes(token.toLowerCase())) {
                sourceViolations.push(`${fullPath} contains forbidden token: ${token}`);
              }
            }
          }
        }
      }

      targetDirs.forEach(d => scanDir(path.join(PROJECT_ROOT, d)));
      assert.equal(sourceViolations.length, 0, `Found source violations: ${JSON.stringify(sourceViolations)}`);
    });
  });

  describe('3. BACKLOG_TAREAS_EJECUTABLES.md Structural & Content Integrity', () => {
    const backlogPath = path.join(ORCHESTRATOR_DIR, 'BACKLOG_TAREAS_EJECUTABLES.md');

    it('Contains at least 10 actionable task cards with required fields', () => {
      assert.ok(fs.existsSync(backlogPath), 'BACKLOG_TAREAS_EJECUTABLES.md must exist');
      const text = fs.readFileSync(backlogPath, 'utf8');

      // Count task cards (format: "### [FICHA-...] ...")
      const taskHeaders = text.match(/###\s*\[FICHA-[^\]]+\]/g) || [];
      console.log(`Found ${taskHeaders.length} task cards in backlog: ${taskHeaders.join(', ')}`);
      assert.ok(taskHeaders.length >= 10, `Expected at least 10 tasks, found ${taskHeaders.length}`);

      // Verify each task contains:
      // - Archivo Afectado
      // - Problema
      // - Cambio
      // - Impacto
      // - Criterio de Verificación
      assert.match(text, /Archivos?\s+Afectados?/i);
      assert.match(text, /Problema Detectado/i);
      assert.match(text, /C[oó]digo\s*\/\s*Cambio Exacto Propuesto/i);
      assert.match(text, /Impacto Estimado/i);
      assert.match(text, /M[eé]todo de Verificaci[oó]n|Criterio de Verificaci[oó]n/i);
    });
  });

  describe('4. CHECKLIST_GEO_AI.md Completeness', () => {
    const checklistPath = path.join(ORCHESTRATOR_DIR, 'CHECKLIST_GEO_AI.md');

    it('Contains verification for robots.txt, llms.txt, AI crawlers, and citations', () => {
      assert.ok(fs.existsSync(checklistPath), 'CHECKLIST_GEO_AI.md must exist');
      const text = fs.readFileSync(checklistPath, 'utf8');

      assert.match(text, /robots\.txt/i);
      assert.match(text, /llms\.txt/i);
      assert.match(text, /GPTBot|ClaudeBot|PerplexityBot/i);
      assert.match(text, /Citabilidad/i);
    });
  });

});
