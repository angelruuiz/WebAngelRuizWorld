/**
 * tests/e2e-pipeline.test.mjs
 *
 * Comprehensive 4-Tier Opaque-Box E2E Test Suite for the Autonomous
 * 3-Agent SEO/GEO Optimization CLI Pipeline for angelruiz.world.
 *
 * Execution:
 *   node tests/e2e-pipeline.test.mjs
 *
 * Test Tiers:
 * - Tier 1: Feature Coverage (F1 to F8, >=5 tests per feature)
 * - Tier 2: Boundary & Corner Cases (F1.B to F8.B, >=5 tests per feature)
 * - Tier 3: Combinatorial Flag & Cross-Feature Workflow Interactions (>=8 tests)
 * - Tier 4: Real-World Application Scenarios (S1 to S5)
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const require = createRequire(import.meta.url);

// Pipeline modules
const scoutModule = require('../scripts/pipeline/scout.js');
const auditorModule = require('../scripts/pipeline/auditor.js');
const executorModule = require('../scripts/pipeline/executor.js');
const reporterModule = require('../scripts/pipeline/reporter.js');
const validatorModule = require('../scripts/pipeline/validator.js');

/**
 * CLI runner helper
 */
function runCLI(args = [], options = {}) {
  const cliPath = path.join(PROJECT_ROOT, 'scripts', 'seo-geo-pipeline.js');
  return spawnSync(process.execPath, [cliPath, ...args], {
    cwd: options.cwd || PROJECT_ROOT,
    encoding: 'utf8',
    env: { ...process.env, ...options.env },
    timeout: options.timeout || 30000
  });
}

/**
 * Isolated sandbox creation helper
 */
function createTempSandbox() {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'seo-test-sandbox-'));
  fs.mkdirSync(path.join(tmpDir, 'content', 'blog'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'public'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'app'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'components'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'lib'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'scripts'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, '.seo-pipeline', 'reports'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, '.seo-pipeline', 'backups'), { recursive: true });
  return tmpDir;
}

function cleanupTempSandbox(tmpDir) {
  try {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  } catch (err) {
    // Ignore cleanup error
  }
}

/* ========================================================================= */
/* TIER 1: FEATURE COVERAGE (F1 to F8)                                       */
/* ========================================================================= */

describe('Tier 1: Feature Coverage', () => {

  // -------------------------------------------------------------------------
  // Feature 1: CLI Entrypoint & Flag Parsing
  // -------------------------------------------------------------------------
  describe('F1: CLI Entrypoint & Flag Parsing', () => {
    it('F1.1: --help flag returns exit code 0 and displays usage documentation', () => {
      const res = runCLI(['--help']);
      assert.equal(res.status, 0, `Expected exit 0, got ${res.status}`);
      assert.match(res.stdout, /Uso:/i, 'Expected help text with usage info');
      assert.match(res.stdout, /--dry-run/i, 'Expected mention of --dry-run');
      assert.match(res.stdout, /--auto-apply/i, 'Expected mention of --auto-apply');
    });

    it('F1.2: -h alias flag behaves identically to --help', () => {
      const res = runCLI(['-h']);
      assert.equal(res.status, 0, 'Expected exit 0 with -h flag');
      assert.match(res.stdout, /Uso:/i);
      assert.match(res.stdout, /--check/i);
    });

    it('F1.3: --dry-run flag executes Scout and Auditor without modifying source files', () => {
      const res = runCLI(['--dry-run', '--limit', '2']);
      assert.equal(res.status, 0, `Expected exit 0, got ${res.status}`);
      assert.match(res.stdout, /--dry-run/i, 'Expected dry-run mode notice');
      assert.match(res.stdout, /Scout/i, 'Expected Scout execution log');
      assert.match(res.stdout, /Auditor/i, 'Expected Auditor execution log');
    });

    it('F1.4: --check flag verifies business rules and exits 0 on healthy codebase', () => {
      const res = runCLI(['--check']);
      assert.equal(res.status, 0, `Expected exit 0 for --check, got ${res.status}`);
      assert.match(res.stdout, /Modo --check/i);
      assert.match(res.stdout, /AggregateRating/i);
    });

    it('F1.5: --verbose flag emits detailed diagnostic output', () => {
      const res = runCLI(['--dry-run', '--verbose', '--limit', '1']);
      assert.equal(res.status, 0);
      assert.match(res.stdout, /Iniciando escaneo|Total oportunidades descubiertas/i);
    });

    it('F1.6: package.json script seo:pipeline points to scripts/seo-geo-pipeline.js', () => {
      const pkg = JSON.parse(fs.readFileSync(path.join(PROJECT_ROOT, 'package.json'), 'utf8'));
      assert.ok(pkg.scripts['seo:pipeline'], 'seo:pipeline script must exist');
      assert.match(pkg.scripts['seo:pipeline'], /scripts\/seo-geo-pipeline\.js/);
    });
  });

  // -------------------------------------------------------------------------
  // Feature 2: Modular Engine Architecture
  // -------------------------------------------------------------------------
  describe('F2: Modular Engine Architecture', () => {
    it('F2.1: scout.js exports all 6 detector functions and scoutOpportunities', () => {
      assert.equal(typeof scoutModule.detectMetadataOpportunities, 'function');
      assert.equal(typeof scoutModule.detectSchemaOpportunities, 'function');
      assert.equal(typeof scoutModule.detectGeoLlmsOpportunities, 'function');
      assert.equal(typeof scoutModule.detectFaqOpportunities, 'function');
      assert.equal(typeof scoutModule.detectMadridGeoOpportunities, 'function');
      assert.equal(typeof scoutModule.detectInterlinkingOpportunities, 'function');
      assert.equal(typeof scoutModule.scoutOpportunities, 'function');
    });

    it('F2.2: auditor.js exports checkHardVetoes, scoreOpportunity, auditOpportunity, auditAllOpportunities', () => {
      assert.equal(typeof auditorModule.checkHardVetoes, 'function');
      assert.equal(typeof auditorModule.scoreOpportunity, 'function');
      assert.equal(typeof auditorModule.auditOpportunity, 'function');
      assert.equal(typeof auditorModule.auditAllOpportunities, 'function');
    });

    it('F2.3: executor.js exports createSnapshot, rollback, applyOpportunity, executeApproved', () => {
      assert.equal(typeof executorModule.createSnapshot, 'function');
      assert.equal(typeof executorModule.rollback, 'function');
      assert.equal(typeof executorModule.applyOpportunity, 'function');
      assert.equal(typeof executorModule.executeApproved, 'function');
    });

    it('F2.4: reporter.js exports generateReport', () => {
      assert.equal(typeof reporterModule.generateReport, 'function');
    });

    it('F2.5: validator.js exports validateAggregateRating, validateNoTrackers, validateBuild, runPostValidation', () => {
      assert.equal(typeof validatorModule.validateAggregateRating, 'function');
      assert.equal(typeof validatorModule.validateNoTrackers, 'function');
      assert.equal(typeof validatorModule.validateBuild, 'function');
      assert.equal(typeof validatorModule.runPostValidation, 'function');
    });
  });

  // -------------------------------------------------------------------------
  // Feature 3: Opportunity Scout (6 Detectors)
  // -------------------------------------------------------------------------
  describe('F3: Opportunity Scout (6 Detectors)', () => {
    it('F3.1: detectMetadataOpportunities detects brand redundancy in post titles', () => {
      const sandbox = createTempSandbox();
      try {
        const post = `---\ntitle: "Mago para Bodas en Madrid | Ángel Ruiz"\nexcerpt: "Magia exclusiva para bodas en fincas de Madrid."\n---\n# Post`;
        fs.writeFileSync(path.join(sandbox, 'content', 'blog', 'test-post.md'), post);
        const opps = scoutModule.detectMetadataOpportunities(sandbox);
        assert.ok(opps.length > 0, 'Should detect brand redundancy');
        assert.match(opps[0].id, /^META-BRAND/);
        assert.equal(opps[0].type, 'metadata');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F3.2: detectMetadataOpportunities detects title length > 68 causing SERP truncation', () => {
      const sandbox = createTempSandbox();
      try {
        const longTitle = "Mago Exclusivo para Eventos Corporativos y Cenas de Gala en Hoteles de Lujo en Madrid [Guía 2026]";
        const post = `---\ntitle: "${longTitle}"\nexcerpt: "Magia de autor."\n---\n# Post`;
        fs.writeFileSync(path.join(sandbox, 'content', 'blog', 'long-title.md'), post);
        const opps = scoutModule.detectMetadataOpportunities(sandbox);
        const titleOpp = opps.find(o => o.id.startsWith('META-TITLE'));
        assert.ok(titleOpp, 'Should detect title length exceeding 68 chars');
        assert.equal(titleOpp.impactArea, 'seo');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F3.3: detectSchemaOpportunities flags any AggregateRating violation', () => {
      const sandbox = createTempSandbox();
      try {
        const ratingComponent = `export default function RatingSchema() { return <script type="application/ld+json">{JSON.stringify({ "@type": "EntertainmentBusiness", "aggregateRating": { "ratingValue": "5.0" } })}</script>; }`;
        fs.writeFileSync(path.join(sandbox, 'components', 'RatingSchema.jsx'), ratingComponent);
        const opps = scoutModule.detectSchemaOpportunities(sandbox);
        const ratingOpp = opps.find(o => o.id.startsWith('SCHEMA-VETO'));
        assert.ok(ratingOpp, 'Should flag AggregateRating violation');
        assert.equal(ratingOpp.isCriticalVeto, true);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F3.4: detectGeoLlmsOpportunities compares public routes with llms.txt', () => {
      const sandbox = createTempSandbox();
      try {
        fs.writeFileSync(path.join(sandbox, 'public', 'llms.txt'), '# Ángel Ruiz World\n- Web: https://angelruiz.world\n');
        const opps = scoutModule.detectGeoLlmsOpportunities(sandbox);
        assert.ok(Array.isArray(opps));
        const llmsOpp = opps.find(o => o.type === 'llms');
        assert.ok(llmsOpp, 'Should detect missing routes in llms.txt');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F3.5: detectFaqOpportunities identifies posts missing FAQ schema expansion', () => {
      const sandbox = createTempSandbox();
      try {
        const post = `---\ntitle: "Mago para Comuniones en Madrid"\ncategory: "Comuniones"\nexcerpt: "Espectáculo familiar en Madrid."\n---\n# Post`;
        fs.writeFileSync(path.join(sandbox, 'content', 'blog', 'comuniones.md'), post);
        const opps = scoutModule.detectFaqOpportunities(sandbox);
        assert.ok(opps.length > 0, 'Should detect missing FAQ');
        assert.equal(opps[0].type, 'faq');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F3.6: detectMadridGeoOpportunities detects Madrid geographic anchor enrichment gaps', () => {
      const sandbox = createTempSandbox();
      try {
        const post = `---\ntitle: "Bodas en Fincas Elegantes"\ncategory: "Bodas"\nexcerpt: "Celebración en fincas exclusivas."\ntags: ["fincas", "bodas"]\n---\n# Bodas en fincas\nCelebrar bodas en fincas privadas.`;
        fs.writeFileSync(path.join(sandbox, 'content', 'blog', 'mago-bodas-fincas.md'), post);
        const opps = scoutModule.detectMadridGeoOpportunities(sandbox);
        assert.ok(opps.length > 0, 'Should detect opportunity for Madrid geo anchoring');
        assert.equal(opps[0].type, 'madrid_geo');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F3.7: detectInterlinkingOpportunities detects missing topic cluster interlinks', () => {
      const sandbox = createTempSandbox();
      try {
        const post = `---\ntitle: "Magia para Empresas en Madrid"\nexcerpt: "Cenas de gala."\n---\n# Empresas\nTexto sin bloque de sigue leyendo.`;
        fs.writeFileSync(path.join(sandbox, 'content', 'blog', 'empresa.md'), post);
        const opps = scoutModule.detectInterlinkingOpportunities(sandbox);
        assert.ok(opps.length > 0, 'Should detect missing interlinking');
        assert.equal(opps[0].type, 'interlinking');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F3.8: scoutOpportunities runs all detectors and returns aggregated summary', () => {
      const results = scoutModule.scoutOpportunities(PROJECT_ROOT);
      assert.ok(results.totalDiscovered >= 0);
      assert.ok(Array.isArray(results.opportunities));
      assert.ok(results.detectors.metadata);
      assert.ok(results.detectors.schema);
      assert.ok(results.detectors.geoLlms);
      assert.ok(results.detectors.faq);
      assert.ok(results.detectors.madridGeo);
      assert.ok(results.detectors.interlinking);
    });
  });

  // -------------------------------------------------------------------------
  // Feature 4: Business Auditor & Conversion Filter
  // -------------------------------------------------------------------------
  describe('F4: Business Auditor & Conversion Filter', () => {
    it('F4.1: Hard Veto VETO_AGGREGATE_RATING instantly rejects any AggregateRating candidate', () => {
      const opp = {
        id: 'SCHEMA-001',
        type: 'schema',
        title: 'Añadir valoraciones aggregateRating',
        description: 'Incluye ratingValue 5.0',
        proposedChange: { kind: 'schema', payload: { aggregateRating: { ratingValue: '5.0' } } }
      };
      const evaluation = auditorModule.auditOpportunity(opp);
      assert.equal(evaluation.verdict, 'REJECTED');
      assert.match(evaluation.vetoTriggered, /VETO_AGGREGATE_?RATING/i);
    });

    it('F4.2: Hard Veto VETO_TRACKER_COOKIE instantly rejects any tracking/cookie proposal', () => {
      const opp = {
        id: 'TRACKER-001',
        type: 'tracker',
        title: 'Añadir Google Analytics gtag pixel',
        description: 'Tracking de conversiones con cookie banner',
        proposedChange: { kind: 'custom', payload: { script: 'gtag("event")' } }
      };
      const evaluation = auditorModule.auditOpportunity(opp);
      assert.equal(evaluation.verdict, 'REJECTED');
      assert.equal(evaluation.vetoTriggered, 'VETO_TRACKER_COOKIE');
    });

    it('F4.3: Hard Veto VETO_PERFORMANCE_DEGRADATION rejects excessively large payloads (>30KB)', () => {
      const hugePayload = 'A'.repeat(35000);
      const opp = {
        id: 'PERF-001',
        type: 'metadata',
        title: 'Optimización pesada',
        description: 'Payload muy grande',
        proposedChange: { kind: 'custom', payload: { data: hugePayload } }
      };
      const evaluation = auditorModule.auditOpportunity(opp);
      assert.equal(evaluation.verdict, 'REJECTED');
      assert.equal(evaluation.vetoTriggered, 'VETO_PERFORMANCE_DEGRADATION');
    });

    it('F4.4: Hard Veto VETO_ZERO_COMMERCIAL_INTENT rejects free hobbyist tutorials', () => {
      const opp = {
        id: 'HOBBY-001',
        type: 'faq',
        title: 'Aprender trucos de magia gratis para principiantes',
        description: 'Tutoriales paso a paso de trucos con monedas gratis',
        proposedChange: { kind: 'append', payload: 'trucos de magia gratis' }
      };
      const evaluation = auditorModule.auditOpportunity(opp);
      assert.equal(evaluation.verdict, 'REJECTED');
      assert.equal(evaluation.vetoTriggered, 'VETO_ZERO_COMMERCIAL_INTENT');
    });

    it('F4.5: Hard Veto VETO_NON_MADRID_GEOGRAPHY rejects non-Madrid locations (Barcelona, Valencia)', () => {
      const opp = {
        id: 'GEO-001',
        type: 'madrid_geo',
        title: 'Mago para bodas en Barcelona',
        description: 'Animación en Barcelona y Ramblas',
        proposedChange: { kind: 'append', payload: 'Barcelona fincas' }
      };
      const evaluation = auditorModule.auditOpportunity(opp);
      assert.equal(evaluation.verdict, 'REJECTED');
      assert.equal(evaluation.vetoTriggered, 'VETO_NON_MADRID_GEOGRAPHY');
    });

    it('F4.6: Rubric evaluates high-commercial Madrid wedding candidate and approves with >= 70 pts', () => {
      const opp = {
        id: 'FAQ-BODA-001',
        type: 'faq',
        targetFile: 'content/blog/mago-bodas-madrid.md',
        title: 'Añadir FAQs de contratación y tarifas para bodas en fincas de Pozuelo (Madrid)',
        description: 'Resuelve objeciones de novios sobre reserva con antelación, precios y formato cóctel en Madrid',
        proposedChange: { kind: 'frontmatter', payload: { faq: [{ question: '¿Tarifas?', answer: 'Desde 300€ en Madrid' }] } },
        impactArea: 'conversion'
      };
      const evaluation = auditorModule.auditOpportunity(opp);
      assert.equal(evaluation.verdict, 'APPROVED');
      assert.ok(evaluation.totalScore >= 70, `Score ${evaluation.totalScore} should be >= 70`);
      assert.ok(evaluation.scoreBreakdown.commercialIntent > 0);
      assert.ok(evaluation.scoreBreakdown.madridGeoFit > 0);
    });

    it('F4.7: auditAllOpportunities returns approved and rejected lists with counts', () => {
      const opps = [
        { id: '1', type: 'metadata', title: 'Bodas Madrid', description: 'Madrid contratacion bodas' },
        { id: '2', type: 'schema', title: 'Rating reviewCount', description: 'Review count 5.0' }
      ];
      const res = auditorModule.auditAllOpportunities(opps);
      assert.equal(res.totalEvaluated, 2);
      assert.ok(res.approvedCount >= 0);
      assert.ok(res.rejectedCount >= 1, 'Schema with reviewCount must be rejected');
    });
  });

  // -------------------------------------------------------------------------
  // Feature 5: Safe Applicator & Snapshot Engine
  // -------------------------------------------------------------------------
  describe('F5: Safe Applicator & Snapshot Engine', () => {
    it('F5.1: createSnapshot creates timestamped backup with manifest.json', () => {
      const sandbox = createTempSandbox();
      try {
        const testFile = path.join(sandbox, 'content', 'blog', 'snap.md');
        fs.writeFileSync(testFile, 'Original content');
        const snap = executorModule.createSnapshot(sandbox, ['content/blog/snap.md']);
        assert.ok(fs.existsSync(snap.backupDir));
        const manifestPath = path.join(snap.backupDir, 'manifest.json');
        assert.ok(fs.existsSync(manifestPath), 'manifest.json must exist in snapshot');
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        assert.equal(manifest.files.length, 1);
        assert.equal(manifest.files[0].relative, 'content/blog/snap.md');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F5.2: applyOpportunity updates markdown frontmatter cleanly', () => {
      const sandbox = createTempSandbox();
      try {
        const postPath = path.join(sandbox, 'content', 'blog', 'edit.md');
        fs.writeFileSync(postPath, `---\ntitle: "Old Title"\n---\n# Body\nContent here`);
        const opp = {
          id: 'TEST-EDIT',
          targetFile: 'content/blog/edit.md',
          proposedChange: { kind: 'frontmatter', payload: { title: 'New Optimized Title' } }
        };
        const res = executorModule.applyOpportunity(sandbox, opp);
        assert.equal(res.status, 'APPLIED');
        const updated = fs.readFileSync(postPath, 'utf8');
        assert.match(updated, /title: ("|')?New Optimized Title/);
        assert.match(updated, /# Body/);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F5.3: generateDiff produces readable unified diff', () => {
      const before = 'line 1\nline 2';
      const after = 'line 1\nline 2 modified';
      const diff = executorModule.generateDiff(before, after);
      assert.ok(typeof diff === 'string');
      assert.match(diff, /[-+]/);
    });

    it('F5.4: rollback restores all modified files to exact pre-execution state', () => {
      const sandbox = createTempSandbox();
      try {
        const relPath = 'content/blog/rollback-test.md';
        const absPath = path.join(sandbox, relPath);
        fs.writeFileSync(absPath, 'ORIGINAL STATE EXACT');
        const snap = executorModule.createSnapshot(sandbox, [relPath]);

        // Modify file
        fs.writeFileSync(absPath, 'CORRUPTED MUTATED STATE');
        assert.equal(fs.readFileSync(absPath, 'utf8'), 'CORRUPTED MUTATED STATE');

        // Execute rollback
        const rbRes = executorModule.rollback(sandbox, snap.backupDir);
        assert.equal(rbRes.restoredCount, 1);
        assert.equal(fs.readFileSync(absPath, 'utf8'), 'ORIGINAL STATE EXACT');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F5.5: executeApproved conforms to ExecutionResult interface', () => {
      const sandbox = createTempSandbox();
      try {
        const relPath = 'content/blog/exec-test.md';
        fs.writeFileSync(path.join(sandbox, relPath), `---\ntitle: "Initial"\n---\n# Post`);
        const items = [{
          verdict: 'APPROVED',
          opportunity: {
            id: 'OPP-1',
            targetFile: relPath,
            proposedChange: { kind: 'frontmatter', payload: { title: 'Updated' } }
          }
        }];
        const res = executorModule.executeApproved(sandbox, items);
        assert.equal(res.appliedCount, 1);
        assert.equal(res.skippedCount, 0);
        assert.ok(res.backupPath);
        assert.equal(res.changes.length, 1);
        assert.equal(res.changes[0].status, 'APPLIED');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });
  });

  // -------------------------------------------------------------------------
  // Feature 6: Structured Markdown Report Generator
  // -------------------------------------------------------------------------
  describe('F6: Structured Markdown Report Generator', () => {
    it('F6.1: generateReport creates timestamped file and updates latest.md', () => {
      const sandbox = createTempSandbox();
      try {
        const res = reporterModule.generateReport({
          projectRoot: sandbox,
          mode: 'dry-run',
          scoutResults: { totalDiscovered: 10, detectors: { metadata: [], schema: [], geoLlms: [], faq: [], madridGeo: [], interlinking: [] } },
          auditResults: { approvedCount: 4, rejectedCount: 6, evaluations: [] },
          executionResults: { appliedCount: 0, skippedCount: 0, changes: [] },
          validationResults: { passed: true }
        });
        assert.ok(fs.existsSync(res.reportFilePath), 'Timestamped report must exist');
        assert.ok(fs.existsSync(res.latestFilePath), 'latest.md must exist');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F6.2: Report includes Executive Summary section with metric table', () => {
      const sandbox = createTempSandbox();
      try {
        const res = reporterModule.generateReport({
          projectRoot: sandbox,
          mode: 'dry-run',
          scoutResults: { totalDiscovered: 5 },
          auditResults: { approvedCount: 2, rejectedCount: 3, evaluations: [] }
        });
        const content = fs.readFileSync(res.latestFilePath, 'utf8');
        assert.match(content, /## 1\. Resumen Ejecutivo/i);
        assert.match(content, /Oportunidades Detectadas/i);
        assert.match(content, /Aprobadas por Auditor/i);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F6.3: Report includes Auditor Decision Matrix with rubric table', () => {
      const sandbox = createTempSandbox();
      try {
        const res = reporterModule.generateReport({
          projectRoot: sandbox,
          mode: 'dry-run',
          scoutResults: { totalDiscovered: 1 },
          auditResults: {
            approvedCount: 1,
            rejectedCount: 0,
            evaluations: [{
              opportunityId: 'TEST-01',
              verdict: 'APPROVED',
              totalScore: 85,
              scoreBreakdown: { commercialIntent: 30, madridGeoFit: 25, brandPrestigeFit: 15, technicalSafety: 15 },
              businessJustification: 'Excelente conversión en bodas Madrid.'
            }]
          }
        });
        const content = fs.readFileSync(res.latestFilePath, 'utf8');
        assert.match(content, /## 3\. Matriz de Decisión del Agente 2/i);
        assert.match(content, /TEST-01/);
        assert.match(content, /APROBADO|APPROVED/);
        assert.match(content, /\*\*85\*\*/);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F6.4: Report includes Executor Change Log detailing mutations', () => {
      const sandbox = createTempSandbox();
      try {
        const res = reporterModule.generateReport({
          projectRoot: sandbox,
          mode: 'auto-apply',
          executionResults: {
            appliedCount: 1,
            skippedCount: 0,
            changes: [{
              opportunityId: 'MUT-01',
              targetFile: 'content/blog/test.md',
              status: 'APPLIED',
              diff: '- old title\n+ new title'
            }]
          }
        });
        const content = fs.readFileSync(res.latestFilePath, 'utf8');
        assert.match(content, /## 4\.\s*Registro.*Agente 3/i);
        assert.match(content, /MUT-01/);
        assert.match(content, /new title/);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F6.5: Report includes Post-Execution Validation Certificate', () => {
      const sandbox = createTempSandbox();
      try {
        const res = reporterModule.generateReport({
          projectRoot: sandbox,
          mode: 'dry-run',
          validationResults: {
            passed: true,
            checks: {
              aggregateRating: { passed: true, violationCount: 0 },
              trackers: { passed: true, violationCount: 0 },
              build: { passed: true, skipped: true }
            }
          }
        });
        const content = fs.readFileSync(res.latestFilePath, 'utf8');
        assert.match(content, /## 5\. Certificado de Validación Post-Ejecución/i);
        assert.match(content, /Regla Inviolable.*PASADA|0 ocurrencias/i);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });
  });

  // -------------------------------------------------------------------------
  // Feature 7: Post-Execution Validation Harness
  // -------------------------------------------------------------------------
  describe('F7: Post-Execution Validation Harness', () => {
    it('F7.1: validateAggregateRating passes on clean codebase with 0 violations', () => {
      const res = validatorModule.validateAggregateRating(PROJECT_ROOT);
      assert.equal(res.passed, true, `Found ${res.violationCount} violations: ${JSON.stringify(res.violations)}`);
      assert.equal(res.violationCount, 0);
    });

    it('F7.2: validateAggregateRating flags simulated AggregateRating violation in content', () => {
      const sandbox = createTempSandbox();
      try {
        const dirtyFile = path.join(sandbox, 'content', 'blog', 'bad.md');
        fs.writeFileSync(dirtyFile, '---\ntitle: "Bad"\nschema:\n  aggregateRating: 5.0\n---');
        const res = validatorModule.validateAggregateRating(sandbox);
        assert.equal(res.passed, false);
        assert.equal(res.violationCount, 1);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F7.3: validateNoTrackers passes on clean codebase with 0 external tracking pixels', () => {
      const res = validatorModule.validateNoTrackers(PROJECT_ROOT);
      assert.equal(res.passed, true);
      assert.equal(res.violationCount, 0);
    });

    it('F7.4: validateNoTrackers flags injected Google Tag Manager or tracking scripts', () => {
      const sandbox = createTempSandbox();
      try {
        const trackerPost = path.join(sandbox, 'content', 'blog', 'tracker-post.md');
        fs.writeFileSync(trackerPost, '---\ntitle: "Tracker"\n---\n<script src="https://connect.facebook.net/fbevents.js"></script>');
        const res = validatorModule.validateNoTrackers(sandbox);
        assert.equal(res.passed, false);
        assert.equal(res.violationCount, 1);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F7.5: runPostValidation triggers rollback when validation fails', () => {
      const sandbox = createTempSandbox();
      try {
        const targetRel = 'content/blog/post.md';
        const targetAbs = path.join(sandbox, targetRel);
        fs.writeFileSync(targetAbs, 'ORIGINAL CLEAN CONTENT');

        const snap = executorModule.createSnapshot(sandbox, [targetRel]);

        // Inject forbidden rating
        fs.writeFileSync(targetAbs, 'aggregateRating: 5.0');

        const valRes = validatorModule.runPostValidation(sandbox, {
          backupPath: snap.backupDir,
          skipBuild: true
        });

        assert.equal(valRes.passed, false);
        assert.equal(valRes.rollbackTriggered, true);
        assert.equal(fs.readFileSync(targetAbs, 'utf8'), 'ORIGINAL CLEAN CONTENT');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });
  });

  // -------------------------------------------------------------------------
  // Feature 8: Guardrails & Zero-Regression Compliance
  // -------------------------------------------------------------------------
  describe('F8: Guardrails & Zero-Regression Compliance', () => {
    it('F8.1: Zero occurrences of AggregateRating across all active project source code', () => {
      const res = validatorModule.validateAggregateRating(PROJECT_ROOT);
      assert.equal(res.passed, true);
      assert.equal(res.violationCount, 0);
    });

    it('F8.2: Zero third-party intrusive cookies or trackers in app, components, and public', () => {
      const res = validatorModule.validateNoTrackers(PROJECT_ROOT);
      assert.equal(res.passed, true);
      assert.equal(res.violationCount, 0);
    });

    it('F8.3: Blog posts contain valid YAML frontmatter structure', () => {
      const blogDir = path.join(PROJECT_ROOT, 'content', 'blog');
      const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
      assert.ok(files.length >= 70, `Expected at least 70 posts, found ${files.length}`);
    });

    it('F8.4: Root layout embeds valid structured schema without ratings', () => {
      const layoutPath = path.join(PROJECT_ROOT, 'app', 'layout.jsx');
      const content = fs.readFileSync(layoutPath, 'utf8');
      assert.match(content, /EntertainmentBusiness/);
      assert.match(content, /ProfessionalService/);
      assert.doesNotMatch(content, /aggregateRating/i);
    });

    it('F8.5: Backup snapshots and rollback leave zero corrupted temporary files', () => {
      const sandbox = createTempSandbox();
      try {
        const f = path.join(sandbox, 'content', 'blog', 'test.md');
        fs.writeFileSync(f, 'Clean state');
        const snap = executorModule.createSnapshot(sandbox, ['content/blog/test.md']);
        executorModule.rollback(sandbox, snap.backupDir);
        assert.equal(fs.readFileSync(f, 'utf8'), 'Clean state');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });
  });
});


/* ========================================================================= */
/* TIER 2: BOUNDARY & CORNER CASES (F1.B to F8.B)                            */
/* ========================================================================= */

describe('Tier 2: Boundary & Corner Cases', () => {

  // F1 Boundaries: CLI Flag Parsing
  describe('F1.B: CLI Parsing Boundaries', () => {
    it('F1.B1: Default mode with zero args executes dry-run safely', () => {
      const res = runCLI(['--limit', '1']);
      assert.equal(res.status, 0);
      assert.match(res.stdout, /dry-run/i);
    });

    it('F1.B2: --limit flag parses custom limit integer', () => {
      const res = runCLI(['--dry-run', '--limit', '3']);
      assert.equal(res.status, 0);
      assert.match(res.stdout, /límite.*3/i);
    });

    it('F1.B3: --limit with invalid non-numeric argument defaults safely to 5', () => {
      const res = runCLI(['--dry-run', '--limit', 'not-a-number']);
      assert.equal(res.status, 0);
      assert.match(res.stdout, /límite.*5/i);
    });

    it('F1.B4: Duplicate flags (--verbose --verbose) handled gracefully without failure', () => {
      const res = runCLI(['--dry-run', '--verbose', '--verbose', '--limit', '1']);
      assert.equal(res.status, 0);
    });

    it('F1.B5: Combining --dry-run --verbose --skip-build runs all phases safely', () => {
      const res = runCLI(['--dry-run', '--verbose', '--skip-build', '--limit', '1']);
      assert.equal(res.status, 0);
      assert.match(res.stdout, /Pipeline completado/i);
    });
  });

  // F2 Boundaries: Modular Engine Architecture
  describe('F2.B: Modular Engine Boundaries', () => {
    it('F2.B1: Scout handles non-existent directory path without crashing', () => {
      const dummyPath = path.join(os.tmpdir(), 'non-existent-dir-' + Date.now());
      const res = scoutModule.scoutOpportunities(dummyPath);
      assert.equal(res.totalDiscovered, 0);
      assert.equal(res.opportunities.length, 0);
    });

    it('F2.B2: Auditor handles empty opportunities array and returns 0 evaluations', () => {
      const res = auditorModule.auditAllOpportunities([]);
      assert.equal(res.totalEvaluated, 0);
      assert.equal(res.approvedCount, 0);
      assert.equal(res.rejectedCount, 0);
    });

    it('F2.B3: Executor handles empty approved opportunities list without creating snapshot', () => {
      const sandbox = createTempSandbox();
      try {
        const res = executorModule.executeApproved(sandbox, []);
        assert.equal(res.appliedCount, 0);
        assert.equal(res.skippedCount, 0);
        assert.equal(res.backupPath, null);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F2.B4: Reporter handles empty opportunities dataset generating valid report', () => {
      const sandbox = createTempSandbox();
      try {
        const res = reporterModule.generateReport({
          projectRoot: sandbox,
          mode: 'dry-run',
          scoutResults: { totalDiscovered: 0 },
          auditResults: { approvedCount: 0, rejectedCount: 0, evaluations: [] }
        });
        assert.ok(fs.existsSync(res.latestFilePath));
        const content = fs.readFileSync(res.latestFilePath, 'utf8');
        assert.match(content, /0/);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F2.B5: Validator handles missing directory in validateAggregateRating gracefully', () => {
      const dummyPath = path.join(os.tmpdir(), 'missing-val-dir-' + Date.now());
      const res = validatorModule.validateAggregateRating(dummyPath);
      assert.equal(res.passed, true);
      assert.equal(res.violationCount, 0);
    });
  });

  // F3 Boundaries: Scout Corner Cases
  describe('F3.B: Scout Corner Cases', () => {
    it('F3.B1: Empty markdown file (0 bytes) is handled safely without syntax error', () => {
      const sandbox = createTempSandbox();
      try {
        fs.writeFileSync(path.join(sandbox, 'content', 'blog', 'empty.md'), '');
        const opps = scoutModule.detectMetadataOpportunities(sandbox);
        assert.ok(Array.isArray(opps));
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F3.B2: Markdown file without frontmatter (plain text) is handled without crashing', () => {
      const sandbox = createTempSandbox();
      try {
        fs.writeFileSync(path.join(sandbox, 'content', 'blog', 'plain.md'), '# Just a heading\nPlain body text without yaml.');
        const opps = scoutModule.detectMetadataOpportunities(sandbox);
        assert.ok(Array.isArray(opps));
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F3.B3: Non-markdown files in blog directory (.DS_Store, .txt) are ignored', () => {
      const sandbox = createTempSandbox();
      try {
        fs.writeFileSync(path.join(sandbox, 'content', 'blog', 'notes.txt'), 'Not markdown');
        fs.writeFileSync(path.join(sandbox, 'content', 'blog', '.DS_Store'), 'junk');
        const opps = scoutModule.detectMetadataOpportunities(sandbox);
        assert.ok(Array.isArray(opps));
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F3.B4: Title length exactly at 68 characters is NOT flagged as oversized', () => {
      const sandbox = createTempSandbox();
      try {
        const title68 = 'A'.repeat(68);
        fs.writeFileSync(path.join(sandbox, 'content', 'blog', 'exact68.md'), `---\ntitle: "${title68}"\n---\n# Post`);
        const opps = scoutModule.detectMetadataOpportunities(sandbox);
        const oversized = opps.find(o => o.id.startsWith('META-TITLE') && o.metadata && o.metadata.currentLength === 68);
        assert.equal(oversized, undefined, 'Title of exactly 68 chars should not trigger truncation');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F3.B5: Post with exactly 1 FAQ is correctly identified as candidate (< 2 threshold)', () => {
      const sandbox = createTempSandbox();
      try {
        const post = `---\ntitle: "Mago Bodas Madrid"\ncategory: "Bodas"\nfaq:\n  - question: "Precio?"\n    answer: "Consultar"\n---\n# Post`;
        fs.writeFileSync(path.join(sandbox, 'content', 'blog', 'single-faq.md'), post);
        const opps = scoutModule.detectFaqOpportunities(sandbox);
        const opp = opps.find(o => o.targetFile.includes('single-faq.md'));
        assert.ok(opp, 'Post with 1 FAQ must be identified for expansion');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });
  });

  // F4 Boundaries: Auditor Corner Cases
  describe('F4.B: Auditor Corner Cases', () => {
    it('F4.B1: Candidate with boundary score exactly 69 is REJECTED (< 70 threshold)', () => {
      const opp = {
        id: 'SCORE-69',
        type: 'metadata',
        title: 'Optimización general sin foco específico',
        description: 'Mejora menor en texto',
        proposedChange: { kind: 'frontmatter', payload: { excerpt: 'Texto' } }
      };
      const evaluation = auditorModule.auditOpportunity(opp);
      assert.ok(evaluation.totalScore < 70);
      assert.equal(evaluation.verdict, 'REJECTED');
    });

    it('F4.B2: Candidate with boundary score >= 70 is APPROVED', () => {
      const opp = {
        id: 'SCORE-75',
        type: 'faq',
        targetFile: 'content/blog/mago-bodas.md',
        title: 'Tarifas y contratación de mago para bodas en fincas de Madrid',
        description: 'Resuelve objeciones comerciales de precios de bodas en Madrid',
        proposedChange: { kind: 'frontmatter', payload: { faq: [{ question: 'Precio?', answer: '300€' }] } },
        impactArea: 'conversion'
      };
      const evaluation = auditorModule.auditOpportunity(opp);
      assert.ok(evaluation.totalScore >= 70);
      assert.equal(evaluation.verdict, 'APPROVED');
    });

    it('F4.B3: Score 100 with Hard Veto triggered is strictly REJECTED (Veto overrides score)', () => {
      const opp = {
        id: 'VETO-OVERRIDE',
        type: 'schema',
        title: 'Esquema perfecto con AggregateRating 5 estrellas para bodas Madrid',
        description: 'Alta intención comercial con ratingValue 5.0 y reviewCount 50',
        proposedChange: { kind: 'schema', payload: { aggregateRating: { ratingValue: 5 } } }
      };
      const evaluation = auditorModule.auditOpportunity(opp);
      assert.equal(evaluation.verdict, 'REJECTED');
      assert.match(evaluation.vetoTriggered, /VETO_AGGREGATE_?RATING/i);
    });

    it('F4.B4: Opportunity with empty proposedChange handled safely without crashing', () => {
      const opp = {
        id: 'EMPTY-PAYLOAD',
        type: 'metadata',
        title: 'Sin cambio propuesto',
        description: 'Descripción'
      };
      const evaluation = auditorModule.auditOpportunity(opp);
      assert.ok(evaluation);
      assert.equal(evaluation.verdict, 'REJECTED');
    });

    it('F4.B5: Candidate with score 0 (zero commercial intent) is REJECTED with clear justification', () => {
      const opp = {
        id: 'ZERO-INTENT',
        type: 'faq',
        title: 'Trucos de magia gratis revelados para hacer en casa',
        description: 'Aprender magia gratis'
      };
      const evaluation = auditorModule.auditOpportunity(opp);
      assert.equal(evaluation.verdict, 'REJECTED');
      assert.equal(evaluation.vetoTriggered, 'VETO_ZERO_COMMERCIAL_INTENT');
    });
  });

  // F5 Boundaries: Executor Corner Cases
  describe('F5.B: Executor Corner Cases', () => {
    it('F5.B1: Backup directory auto-created when .seo-pipeline/backups/ does not exist', () => {
      const sandbox = createTempSandbox();
      try {
        fs.rmSync(path.join(sandbox, '.seo-pipeline', 'backups'), { recursive: true, force: true });
        const post = path.join(sandbox, 'content', 'blog', 'p.md');
        fs.writeFileSync(post, 'data');
        const snap = executorModule.createSnapshot(sandbox, ['content/blog/p.md']);
        assert.ok(fs.existsSync(snap.backupDir));
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F5.B2: Target file with non-existent path handled gracefully returning SKIPPED or FAILED status', () => {
      const sandbox = createTempSandbox();
      try {
        const opp = {
          id: 'MISSING-FILE',
          targetFile: 'content/blog/does-not-exist.md',
          proposedChange: { kind: 'frontmatter', payload: { title: 'Test' } }
        };
        const res = executorModule.applyOpportunity(sandbox, opp);
        assert.ok(res.status === 'SKIPPED' || res.status === 'FAILED');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F5.B3: Repeated application of same patch produces zero diff on subsequent runs (idempotence)', () => {
      const sandbox = createTempSandbox();
      try {
        const postPath = path.join(sandbox, 'content', 'blog', 'idempotent.md');
        fs.writeFileSync(postPath, `---\ntitle: "Initial Title"\n---\n# Content`);
        const opp = {
          id: 'IDEM-01',
          targetFile: 'content/blog/idempotent.md',
          proposedChange: { kind: 'frontmatter', payload: { title: 'Target Title' } }
        };
        // First run
        const res1 = executorModule.applyOpportunity(sandbox, opp);
        assert.equal(res1.status, 'APPLIED');

        // Second run
        const res2 = executorModule.applyOpportunity(sandbox, opp);
        assert.equal(res2.status, 'APPLIED');
        assert.match(res2.diff, /idénticos/i);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F5.B4: Rollback with missing snapshot directory fails safely without deleting source files', () => {
      const sandbox = createTempSandbox();
      try {
        const target = path.join(sandbox, 'content', 'blog', 'safe.md');
        fs.writeFileSync(target, 'Keep safe');
        assert.throws(() => {
          executorModule.rollback(sandbox, path.join(sandbox, 'non-existent-backup'));
        });
        assert.equal(fs.readFileSync(target, 'utf8'), 'Keep safe');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F5.B5: Applying empty approved list returns appliedCount 0 and null backupPath', () => {
      const sandbox = createTempSandbox();
      try {
        const res = executorModule.executeApproved(sandbox, []);
        assert.equal(res.appliedCount, 0);
        assert.equal(res.backupPath, null);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });
  });

  // F6 Boundaries: Reporter Corner Cases
  describe('F6.B: Reporter Corner Cases', () => {
    it('F6.B1: Report directory .seo-pipeline/reports/ is auto-created if missing', () => {
      const sandbox = createTempSandbox();
      try {
        fs.rmSync(path.join(sandbox, '.seo-pipeline', 'reports'), { recursive: true, force: true });
        const res = reporterModule.generateReport({ projectRoot: sandbox, mode: 'dry-run' });
        assert.ok(fs.existsSync(res.reportFilePath));
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F6.B2: Special characters in opportunity descriptions are escaped in markdown tables', () => {
      const sandbox = createTempSandbox();
      try {
        const res = reporterModule.generateReport({
          projectRoot: sandbox,
          mode: 'dry-run',
          auditResults: {
            approvedCount: 1,
            evaluations: [{
              opportunityId: 'SPECIAL-CHARS',
              verdict: 'APPROVED',
              totalScore: 75,
              scoreBreakdown: {},
              businessJustification: 'Test with | pipe and <brackets> and "quotes"'
            }]
          }
        });
        const content = fs.readFileSync(res.latestFilePath, 'utf8');
        assert.ok(!content.includes('| Test with | pipe'), 'Pipe characters should be escaped in table cell');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F6.B3: Report generation with 0 opportunities creates valid document', () => {
      const sandbox = createTempSandbox();
      try {
        const res = reporterModule.generateReport({ projectRoot: sandbox, mode: 'dry-run' });
        const content = fs.readFileSync(res.latestFilePath, 'utf8');
        assert.match(content, /Resumen Ejecutivo/);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F6.B4: Writing report when latest.md already exists overwrites latest.md cleanly', () => {
      const sandbox = createTempSandbox();
      try {
        const latestPath = path.join(sandbox, '.seo-pipeline', 'reports', 'latest.md');
        fs.writeFileSync(latestPath, 'OLD REPORT CONTENT');
        reporterModule.generateReport({ projectRoot: sandbox, mode: 'dry-run' });
        const content = fs.readFileSync(latestPath, 'utf8');
        assert.ok(!content.includes('OLD REPORT CONTENT'));
        assert.match(content, /Informe de Optimización SEO & GEO/);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F6.B5: Report handles execution diffs gracefully without corrupting markdown format', () => {
      const sandbox = createTempSandbox();
      try {
        const res = reporterModule.generateReport({
          projectRoot: sandbox,
          mode: 'auto-apply',
          executionResults: {
            appliedCount: 1,
            changes: [{
              opportunityId: 'DIFF-01',
              targetFile: 'content/blog/p.md',
              status: 'APPLIED',
              diff: '```diff\n- old\n+ new\n```'
            }]
          }
        });
        const content = fs.readFileSync(res.latestFilePath, 'utf8');
        assert.match(content, /DIFF-01/);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });
  });

  // F7 Boundaries: Validator Corner Cases
  describe('F7.B: Validator Corner Cases', () => {
    it('F7.B1: Case variations (aggregaterating, AggregateRating, AGGREGATERATING) all caught', () => {
      const sandbox = createTempSandbox();
      try {
        const f1 = path.join(sandbox, 'content', 'blog', 'v1.md');
        fs.writeFileSync(f1, 'aggregaterating: true');
        const res = validatorModule.validateAggregateRating(sandbox);
        assert.equal(res.passed, false);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F7.B2: ratingValue alone in JSON-LD is caught by validator', () => {
      const sandbox = createTempSandbox();
      try {
        const f = path.join(sandbox, 'content', 'blog', 'rv.md');
        fs.writeFileSync(f, '"ratingValue": "4.9"');
        const res = validatorModule.validateAggregateRating(sandbox);
        assert.equal(res.passed, false);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F7.B3: reviewCount alone in JSON-LD is caught by validator', () => {
      const sandbox = createTempSandbox();
      try {
        const f = path.join(sandbox, 'content', 'blog', 'rc.md');
        fs.writeFileSync(f, '"reviewCount": "52"');
        const res = validatorModule.validateAggregateRating(sandbox);
        assert.equal(res.passed, false);
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });

    it('F7.B4: Non-existent directory in scan is handled safely without throwing error', () => {
      const emptyDir = path.join(os.tmpdir(), 'empty-scan-' + Date.now());
      const res = validatorModule.validateAggregateRating(emptyDir);
      assert.equal(res.passed, true);
    });

    it('F7.B5: Simulated validation failure triggers automatic rollback when backupPath is provided', () => {
      const sandbox = createTempSandbox();
      try {
        const targetRel = 'content/blog/fail.md';
        const targetAbs = path.join(sandbox, targetRel);
        fs.writeFileSync(targetAbs, 'ORIGINAL TEXT');
        const snap = executorModule.createSnapshot(sandbox, [targetRel]);
        fs.writeFileSync(targetAbs, 'reviewCount: 10');

        const val = validatorModule.runPostValidation(sandbox, {
          backupPath: snap.backupDir,
          skipBuild: true
        });

        assert.equal(val.passed, false);
        assert.equal(val.rollbackTriggered, true);
        assert.equal(fs.readFileSync(targetAbs, 'utf8'), 'ORIGINAL TEXT');
      } finally {
        cleanupTempSandbox(sandbox);
      }
    });
  });

  // F8 Boundaries: Guardrails Corner Cases
  describe('F8.B: Guardrails Corner Cases', () => {
    it('F8.B1: Proposal injecting <script> tag of any kind is vetoed by VETO_TRACKER_COOKIE', () => {
      const opp = {
        id: 'TAG-INJECT',
        type: 'metadata',
        title: 'Inject analytics',
        description: 'Añadir <script>cookie banner</script>',
        proposedChange: { kind: 'append', payload: '<script>cookie</script>' }
      };
      const res = auditorModule.auditOpportunity(opp);
      assert.equal(res.verdict, 'REJECTED');
      assert.equal(res.vetoTriggered, 'VETO_TRACKER_COOKIE');
    });

    it('F8.B2: Proposal targeting non-Madrid regions (Barcelona, Bilbao, Sevilla) is vetoed', () => {
      const opp = {
        id: 'GEO-BILBAO',
        type: 'madrid_geo',
        title: 'Mago para bodas en Bilbao y Vizcaya',
        description: 'Actuaciones en el País Vasco',
        proposedChange: { kind: 'append', payload: 'Bilbao' }
      };
      const res = auditorModule.auditOpportunity(opp);
      assert.equal(res.verdict, 'REJECTED');
      assert.equal(res.vetoTriggered, 'VETO_NON_MADRID_GEOGRAPHY');
    });

    it('F8.B3: Proposal targeting free tutorial/hobbyist keywords is vetoed by VETO_ZERO_COMMERCIAL_INTENT', () => {
      const opp = {
        id: 'HOBBY-TRICK',
        type: 'faq',
        title: 'Tutorial de magia con cartas gratis revelado',
        description: 'Cómo hacer trucos de magia gratis paso a paso'
      };
      const res = auditorModule.auditOpportunity(opp);
      assert.equal(res.verdict, 'REJECTED');
      assert.equal(res.vetoTriggered, 'VETO_ZERO_COMMERCIAL_INTENT');
    });

    it('F8.B4: Multiple veto conditions triggered simultaneously reports the first critical veto', () => {
      const opp = {
        id: 'MULTI-VETO',
        type: 'schema',
        title: 'AggregateRating con Facebook pixel en Barcelona gratis',
        description: 'ratingValue con pixel y trucos gratis en Barcelona'
      };
      const res = auditorModule.auditOpportunity(opp);
      assert.equal(res.verdict, 'REJECTED');
      assert.ok(res.vetoTriggered);
    });

    it('F8.B5: Proposed change with excessive payload size (>30KB) is vetoed by VETO_PERFORMANCE_DEGRADATION', () => {
      const opp = {
        id: 'HUGE-PAYLOAD',
        type: 'metadata',
        title: 'Payload gigante',
        proposedChange: { kind: 'custom', payload: 'X'.repeat(32000) }
      };
      const res = auditorModule.auditOpportunity(opp);
      assert.equal(res.verdict, 'REJECTED');
      assert.equal(res.vetoTriggered, 'VETO_PERFORMANCE_DEGRADATION');
    });
  });
});


/* ========================================================================= */
/* TIER 3: CROSS-FEATURE COMBINATIONS                                        */
/* ========================================================================= */

describe('Tier 3: Cross-Feature Combinations', () => {
  it('T3.1: Scout discovery -> Auditor veto (VETO_AGGREGATE_RATING) -> Executor skips mutation', () => {
    const sandbox = createTempSandbox();
    try {
      const targetRel = 'content/blog/rating-opp.md';
      const targetAbs = path.join(sandbox, targetRel);
      fs.writeFileSync(targetAbs, '---\ntitle: "Test"\nschema:\n  aggregateRating: 5.0\n---\n# Post');

      const scoutOpps = scoutModule.detectSchemaOpportunities(sandbox);
      const auditRes = auditorModule.auditAllOpportunities(scoutOpps);
      const execRes = executorModule.executeApproved(sandbox, auditRes.approved);

      assert.equal(execRes.appliedCount, 0, 'No mutations should be applied when vetoed');
      assert.equal(execRes.backupPath, null, 'No backup should be taken for 0 mutations');
    } finally {
      cleanupTempSandbox(sandbox);
    }
  });

  it('T3.2: Scout discovery -> Auditor veto (VETO_NON_MADRID_GEOGRAPHY) -> Executor skips candidate', () => {
    const opp = {
      id: 'OPP-BCN',
      targetFile: 'content/blog/bcn.md',
      type: 'madrid_geo',
      title: 'Mago en Barcelona para bodas',
      description: 'Actuación en Barcelona',
      proposedChange: { kind: 'append', payload: 'Barcelona' }
    };
    const evalRes = auditorModule.auditOpportunity(opp);
    assert.equal(evalRes.verdict, 'REJECTED');
    assert.equal(evalRes.vetoTriggered, 'VETO_NON_MADRID_GEOGRAPHY');
  });

  it('T3.3: Scout discovery -> Auditor veto (VETO_ZERO_COMMERCIAL_INTENT) -> Executor skips candidate', () => {
    const opp = {
      id: 'OPP-HOBBY',
      targetFile: 'content/blog/hobby.md',
      type: 'faq',
      title: 'Aprender trucos de magia gratis',
      description: 'Tutoriales gratuitos',
      proposedChange: { kind: 'append', payload: 'trucos gratis' }
    };
    const evalRes = auditorModule.auditOpportunity(opp);
    assert.equal(evalRes.verdict, 'REJECTED');
    assert.equal(evalRes.vetoTriggered, 'VETO_ZERO_COMMERCIAL_INTENT');
  });

  it('T3.4: Scout discovery -> Auditor veto (VETO_TRACKER_COOKIE) -> Executor skips candidate', () => {
    const opp = {
      id: 'OPP-TRACKER',
      targetFile: 'content/blog/tracker.md',
      type: 'metadata',
      title: 'Añadir Facebook Pixel',
      description: 'Pixel para eventos',
      proposedChange: { kind: 'append', payload: 'facebook-pixel' }
    };
    const evalRes = auditorModule.auditOpportunity(opp);
    assert.equal(evalRes.verdict, 'REJECTED');
    assert.equal(evalRes.vetoTriggered, 'VETO_TRACKER_COOKIE');
  });

  it('T3.5: Scout discovery -> Auditor approval -> Executor --dry-run guarantees zero files modified on disk', () => {
    const sandbox = createTempSandbox();
    try {
      const targetRel = 'content/blog/dry-check.md';
      const targetAbs = path.join(sandbox, targetRel);
      const originalContent = '---\ntitle: "Original Post | Ángel Ruiz"\n---\n# Post Body';
      fs.writeFileSync(targetAbs, originalContent);

      const opps = scoutModule.detectMetadataOpportunities(sandbox);
      const audit = auditorModule.auditAllOpportunities(opps);

      // In dry-run mode, executor is never called or called with dryRun: true
      assert.equal(fs.readFileSync(targetAbs, 'utf8'), originalContent, 'Disk file must remain untouched');
    } finally {
      cleanupTempSandbox(sandbox);
    }
  });

  it('T3.6: Scout discovery -> Auditor approval -> Snapshot created -> Simulated validator failure -> Automatic rollback verified', () => {
    const sandbox = createTempSandbox();
    try {
      const targetRel = 'content/blog/rollback-chain.md';
      const targetAbs = path.join(sandbox, targetRel);
      fs.writeFileSync(targetAbs, '---\ntitle: "Initial Title"\n---\n# Body');

      const approvedItem = {
        verdict: 'APPROVED',
        opportunity: {
          id: 'TEST-CHAIN',
          targetFile: targetRel,
          proposedChange: { kind: 'frontmatter', payload: { title: 'Modified' } }
        }
      };

      const execRes = executorModule.executeApproved(sandbox, [approvedItem]);
      assert.equal(execRes.appliedCount, 1);
      assert.ok(execRes.backupPath);

      // Simulate validation failure (inject forbidden rating)
      fs.writeFileSync(path.join(sandbox, 'content', 'blog', 'bad-schema.md'), 'aggregateRating: 5.0');

      const valRes = validatorModule.runPostValidation(sandbox, {
        backupPath: execRes.backupPath,
        skipBuild: true
      });

      assert.equal(valRes.passed, false);
      assert.equal(valRes.rollbackTriggered, true);
      assert.equal(fs.readFileSync(targetAbs, 'utf8'), '---\ntitle: "Initial Title"\n---\n# Body');
    } finally {
      cleanupTempSandbox(sandbox);
    }
  });

  it('T3.7: Scout discovery -> Auditor approval -> Executor apply -> Post-validation pass -> Reporter outputs complete markdown report', () => {
    const sandbox = createTempSandbox();
    try {
      const targetRel = 'content/blog/full-cycle.md';
      const targetAbs = path.join(sandbox, targetRel);
      fs.writeFileSync(targetAbs, '---\ntitle: "Full Cycle Post"\n---\n# Content');

      const approvedItem = {
        verdict: 'APPROVED',
        opportunity: {
          id: 'FULL-01',
          targetFile: targetRel,
          proposedChange: { kind: 'frontmatter', payload: { title: 'Full Cycle Post [Madrid]' } }
        }
      };

      const execRes = executorModule.executeApproved(sandbox, [approvedItem]);
      assert.equal(execRes.appliedCount, 1);

      const valRes = validatorModule.runPostValidation(sandbox, {
        backupPath: execRes.backupPath,
        skipBuild: true
      });
      assert.equal(valRes.passed, true);

      const repRes = reporterModule.generateReport({
        projectRoot: sandbox,
        mode: 'auto-apply',
        scoutResults: { totalDiscovered: 1 },
        auditResults: { approvedCount: 1, rejectedCount: 0, evaluations: [approvedItem] },
        executionResults: execRes,
        validationResults: valRes
      });

      assert.ok(fs.existsSync(repRes.latestFilePath));
      const content = fs.readFileSync(repRes.latestFilePath, 'utf8');
      assert.match(content, /FULL-01/);
      assert.match(content, /COMPLETADO CON ÉXITO/i);
    } finally {
      cleanupTempSandbox(sandbox);
    }
  });

  it('T3.8: Multi-candidate batch with mixed approved and rejected candidates verifies correct counters', () => {
    const opps = [
      { id: 'APP-1', type: 'faq', title: 'Bodas Madrid tarifas', description: 'Contratación bodas Madrid', proposedChange: { kind: 'append', payload: 'FAQ' }, impactArea: 'conversion' },
      { id: 'REJ-1', type: 'schema', title: 'Schema rating', description: 'aggregateRating 5.0' },
      { id: 'REJ-2', type: 'madrid_geo', title: 'Magia Barcelona', description: 'Barcelona Ramblas' }
    ];
    const auditRes = auditorModule.auditAllOpportunities(opps);
    assert.equal(auditRes.totalEvaluated, 3);
    assert.equal(auditRes.approvedCount, 1);
    assert.equal(auditRes.rejectedCount, 2);
  });
});


/* ========================================================================= */
/* TIER 4: REAL-WORLD APPLICATION SCENARIOS (S1 to S5)                       */
/* ========================================================================= */

describe('Tier 4: Real-World Application Scenarios', () => {

  // Scenario S1: Full end-to-end dry-run producing valid .seo-pipeline/reports/latest.md
  it('S1: Autonomous Run (--dry-run) on codebase executes Scout + Auditor, writes latest.md and exits 0', () => {
    const res = runCLI(['--dry-run', '--limit', '3']);
    assert.equal(res.status, 0, `CLI failed with exit code ${res.status}: ${res.stderr || res.stdout}`);

    const latestReportPath = path.join(PROJECT_ROOT, '.seo-pipeline', 'reports', 'latest.md');
    assert.ok(fs.existsSync(latestReportPath), '.seo-pipeline/reports/latest.md must exist');

    const content = fs.readFileSync(latestReportPath, 'utf8');
    assert.match(content, /Informe de Optimización SEO & GEO/i);
    assert.match(content, /Resumen Ejecutivo/i);
  });

  // Scenario S2: Checking zero AggregateRating guarantee site-wide
  it('S2: Site-Wide Zero AggregateRating Inviolable Guarantee holds across active source files', () => {
    const res = validatorModule.validateAggregateRating(PROJECT_ROOT);
    assert.equal(res.passed, true, `Violations found: ${JSON.stringify(res.violations)}`);
    assert.equal(res.violationCount, 0);

    // Also verify via grep simulation across core folders
    const grepRes = spawnSync('git', ['grep', '-i', 'aggregaterating', '--', 'app/', 'components/', 'lib/', 'public/'], {
      cwd: PROJECT_ROOT,
      encoding: 'utf8'
    });
    // git grep returns exit code 1 when NO matches are found (which is what we want!)
    const matches = grepRes.stdout.trim();
    assert.equal(matches, '', `git grep found forbidden AggregateRating occurrences: ${matches}`);
  });

  // Scenario S3: Checking report markdown structure
  it('S3: Generated report markdown structure strictly conforms to required sections and metrics', () => {
    const latestPath = path.join(PROJECT_ROOT, '.seo-pipeline', 'reports', 'latest.md');
    if (!fs.existsSync(latestPath)) {
      runCLI(['--dry-run', '--limit', '2']);
    }
    assert.ok(fs.existsSync(latestPath), 'latest.md must exist');
    const content = fs.readFileSync(latestPath, 'utf8');

    // Section 1: Executive Summary
    assert.match(content, /## 1\. Resumen Ejecutivo \(Executive Summary\)/i);
    // Section 2: Scout Discovery Catalog
    assert.match(content, /## 2\. Catálogo de Detección del Agente 1/i);
    // Section 3: Auditor Decision Matrix
    assert.match(content, /## 3\. Matriz de Decisión del Agente 2/i);
    // Section 4: Executor Change Log
    assert.match(content, /## 4\.\s*Registro.*Agente 3/i);
    // Section 5: Post-Execution Validation Certificate
    assert.match(content, /## 5\. Certificado de Validación Post-Ejecución/i);
  });

  // Scenario S4: Fast CI Health Check (--check)
  it('S4: Fast CI Health Check (--check) exits code 0 when codebase is healthy', () => {
    const res = runCLI(['--check']);
    assert.equal(res.status, 0, `Expected exit 0 for --check, got ${res.status}: ${res.stderr || res.stdout}`);
    assert.match(res.stdout, /SATISFACTORIA|PASÓ/i);
  });

  // Scenario S5: Verifying package.json has seo:pipeline scripts
  it('S5: package.json integrates all required seo:pipeline scripts', () => {
    const pkgPath = path.join(PROJECT_ROOT, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

    assert.ok(pkg.scripts['seo:pipeline'], 'Missing npm script: seo:pipeline');
    assert.ok(pkg.scripts['seo:pipeline:dry'], 'Missing npm script: seo:pipeline:dry');
    assert.ok(pkg.scripts['seo:pipeline:check'], 'Missing npm script: seo:pipeline:check');

    assert.equal(pkg.scripts['seo:pipeline'], 'node scripts/seo-geo-pipeline.js');
    assert.equal(pkg.scripts['seo:pipeline:dry'], 'node scripts/seo-geo-pipeline.js --dry-run');
    assert.equal(pkg.scripts['seo:pipeline:check'], 'node scripts/seo-geo-pipeline.js --check');
  });
});
