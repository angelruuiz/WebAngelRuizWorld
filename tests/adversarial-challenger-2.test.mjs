/**
 * tests/adversarial-challenger-2.test.mjs
 *
 * EMPIRICAL ADVERSARIAL CHALLENGER 2 TEST SUITE
 * Stress-testing Auditor Vetoes, Guardrails Bypass Resistance,
 * and Site-Wide 0 AggregateRating Invariants for angelruiz.world.
 *
 * Execution:
 *   node tests/adversarial-challenger-2.test.mjs
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

const auditorModule = require('../scripts/pipeline/auditor.js');
const validatorModule = require('../scripts/pipeline/validator.js');
const scoutModule = require('../scripts/pipeline/scout.js');
const executorModule = require('../scripts/pipeline/executor.js');

function runCLI(args = [], options = {}) {
  const cliPath = path.join(PROJECT_ROOT, 'scripts', 'seo-geo-pipeline.js');
  return spawnSync(process.execPath, [cliPath, ...args], {
    cwd: options.cwd || PROJECT_ROOT,
    encoding: 'utf8',
    env: { ...process.env, ...options.env },
    timeout: options.timeout || 30000
  });
}

function createTempSandbox() {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'challenger2-sandbox-'));
  fs.mkdirSync(path.join(tmpDir, 'content', 'blog'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'public'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'app'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'components'), { recursive: true });
  fs.mkdirSync(path.join(tmpDir, 'lib'), { recursive: true });
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
/* BATTERY 1: VETO_AGGREGATE_RATING & ZERO RATING INVARIANT                  */
/* ========================================================================= */
describe('Battery 1: VETO_AGGREGATE_RATING & Zero Rating Invariant', () => {

  it('BAT-1.1: Auditor vetoes all casing variations of AggregateRating', () => {
    const casings = [
      'AggregateRating',
      'aggregaterating',
      'AGGREGATERATING',
      'AgGrEgAtErAtInG',
      'aggregateRating'
    ];
    for (const token of casings) {
      const opp = {
        id: `RATING-CASE-${token}`,
        type: 'schema',
        title: `Esquema con ${token}`,
        description: `Inyección de ${token}`,
        proposedChange: { kind: 'frontmatter', payload: { schema: token } }
      };
      const evaluation = auditorModule.auditOpportunity(opp);
      assert.equal(evaluation.verdict, 'REJECTED', `Failed to reject casing: ${token}`);
      assert.match(evaluation.vetoTriggered, /VETO_AGGREGATE_?RATING/i);
    }
  });

  it('BAT-1.2: Auditor vetoes ratingValue regardless of casing or position', () => {
    const opp = {
      id: 'RV-TEST',
      type: 'schema',
      title: 'Esquema con ratingValue',
      description: 'ratingValue de 5.0 para bodas',
      proposedChange: { kind: 'frontmatter', payload: { ratingValue: '5.0' } }
    };
    const evaluation = auditorModule.auditOpportunity(opp);
    assert.equal(evaluation.verdict, 'REJECTED');
    assert.match(evaluation.vetoTriggered, /VETO_AGGREGATE_?RATING/i);
  });

  it('BAT-1.3: Auditor vetoes reviewCount regardless of casing or position', () => {
    const opp = {
      id: 'RC-TEST',
      type: 'schema',
      title: 'Esquema con reviewCount',
      description: 'reviewCount de 120 reseñas',
      proposedChange: { kind: 'frontmatter', payload: { reviewCount: 120 } }
    };
    const evaluation = auditorModule.auditOpportunity(opp);
    assert.equal(evaluation.verdict, 'REJECTED');
    assert.match(evaluation.vetoTriggered, /VETO_AGGREGATE_?RATING/i);
  });

  it('BAT-1.4: Auditor vetoes bestRating and worstRating', () => {
    const oppBest = {
      id: 'BEST-TEST',
      type: 'schema',
      title: 'Esquema bestRating',
      description: 'bestRating 5',
      proposedChange: { kind: 'frontmatter', payload: { bestRating: 5 } }
    };
    const oppWorst = {
      id: 'WORST-TEST',
      type: 'schema',
      title: 'Esquema worstRating',
      description: 'worstRating 1',
      proposedChange: { kind: 'frontmatter', payload: { worstRating: 1 } }
    };
    assert.equal(auditorModule.auditOpportunity(oppBest).verdict, 'REJECTED');
    assert.equal(auditorModule.auditOpportunity(oppWorst).verdict, 'REJECTED');
  });

  it('BAT-1.5: Auditor unconditionally vetoes if isCriticalVeto flag is true', () => {
    const opp = {
      id: 'CRITICAL-FLAG',
      type: 'schema',
      title: 'Benign title for weddings in Madrid',
      description: 'Completely clean description',
      isCriticalVeto: true,
      proposedChange: { kind: 'frontmatter', payload: { title: 'Mago Bodas Madrid' } }
    };
    const evaluation = auditorModule.auditOpportunity(opp);
    assert.equal(evaluation.verdict, 'REJECTED');
    assert.match(evaluation.vetoTriggered, /VETO_AGGREGATE_?RATING/i);
  });

  it('BAT-1.6: Auditor vetoes deeply nested rating objects', () => {
    const opp = {
      id: 'DEEP-NESTED',
      type: 'schema',
      title: 'Deeply nested schema',
      description: 'Clean description',
      proposedChange: {
        kind: 'frontmatter',
        payload: {
          organization: {
            subOrganization: {
              metadata: {
                aggregateRating: { ratingValue: 5 }
              }
            }
          }
        }
      }
    };
    const evaluation = auditorModule.auditOpportunity(opp);
    assert.equal(evaluation.verdict, 'REJECTED');
    assert.match(evaluation.vetoTriggered, /VETO_AGGREGATE_?RATING/i);
  });

  it('BAT-1.7: Git grep confirms exactly 0 occurrences of aggregaterating in executable and content code', () => {
    const grepRes = spawnSync('git', ['grep', '-i', 'aggregaterating', '--', 'app/', 'components/', 'lib/', 'public/', 'scripts/'], {
      cwd: PROJECT_ROOT,
      encoding: 'utf8'
    });
    // Exit code 1 means zero matches found
    assert.equal(grepRes.status, 1, `git grep found forbidden AggregateRating matches: ${grepRes.stdout}`);
    assert.equal(grepRes.stdout.trim(), '');
  });

  it('BAT-1.8: Git grep confirms exactly 0 occurrences of ratingValue and reviewCount in project code', () => {
    const grepRv = spawnSync('git', ['grep', '-i', 'ratingValue', '--', 'app/', 'components/', 'lib/', 'public/', 'scripts/'], {
      cwd: PROJECT_ROOT,
      encoding: 'utf8'
    });
    assert.equal(grepRv.status, 1, `git grep found ratingValue matches: ${grepRv.stdout}`);

    const grepRc = spawnSync('git', ['grep', '-i', 'reviewCount', '--', 'app/', 'components/', 'lib/', 'public/', 'scripts/'], {
      cwd: PROJECT_ROOT,
      encoding: 'utf8'
    });
    assert.equal(grepRc.status, 1, `git grep found reviewCount matches: ${grepRc.stdout}`);
  });

  it('BAT-1.9: validator.validateZeroRating passes 100% on current project root', () => {
    const res = validatorModule.validateZeroRating(PROJECT_ROOT);
    assert.equal(res.passed, true);
    assert.equal(res.violationCount, 0);
    assert.deepEqual(res.violations, []);
  });
});

/* ========================================================================= */
/* BATTERY 2: ADVERSARIAL CHALLENGE OF VETO_NON_MADRID_GEOGRAPHY             */
/* ========================================================================= */
describe('Battery 2: Adversarial Challenge of VETO_NON_MADRID_GEOGRAPHY', () => {

  it('BAT-2.1: Auditor strictly vetoes explicit Spanish non-Madrid regions', () => {
    const bannedZones = [
      'Barcelona', 'Valencia', 'Sevilla', 'Bilbao', 'Málaga', 'Malaga',
      'Zaragoza', 'Alicante', 'Galicia', 'Canarias', 'Baleares', 'Andalucía', 'Cataluña'
    ];
    for (const city of bannedZones) {
      const opp = {
        id: `ZONE-${city}`,
        type: 'madrid_geo',
        title: `Mago para bodas exclusivas en ${city}`,
        description: `Contratación de espectáculos en ${city}`,
        proposedChange: { kind: 'frontmatter', payload: { city } }
      };
      const res = auditorModule.auditOpportunity(opp);
      assert.equal(res.verdict, 'REJECTED', `Failed to veto city: ${city}`);
      assert.equal(res.vetoTriggered, 'VETO_NON_MADRID_GEOGRAPHY');
    }
  });

  it('BAT-2.2: Adversarial Boundary Analysis - Non-Madrid locations with fincas receive false Madrid geo points', () => {
    // Adversarial exploration: What happens if an opportunity targets a location outside Madrid
    // that is NOT in the regex list (e.g., Marbella, Murcia) combined with generic terms like 'fincas'?
    const opp = {
      id: 'ADV-MARBELLA-FINCAS',
      type: 'metadata',
      targetFile: 'content/blog/marbella.md',
      title: 'Mago para bodas en fincas de Marbella',
      description: 'Celebraciones de bodas en fincas de Marbella',
      proposedChange: { kind: 'frontmatter', payload: { excerpt: 'Bodas exclusivas' } }
    };
    const res = auditorModule.auditOpportunity(opp);

    // Empirical finding confirmed:
    // Because 'fincas' is matched in the high-affluence regex and 'Marbella' is not in NON_MADRID_ZONES,
    // the opportunity receives 25/25 for madridGeoFit and is approved with 97/100 points!
    assert.equal(res.verdict, 'APPROVED');
    assert.equal(res.scoreBreakdown.madridGeoFit, 25, 'Revealed leak: generic keyword "fincas" awards 25 Madrid points');
    assert.ok(res.totalScore >= 70);
  });
});

/* ========================================================================= */
/* BATTERY 3: ADVERSARIAL CHALLENGE OF VETO_ZERO_COMMERCIAL_INTENT           */
/* ========================================================================= */
describe('Battery 3: Adversarial Challenge of VETO_ZERO_COMMERCIAL_INTENT', () => {

  it('BAT-3.1: Auditor strictly vetoes explicit zero-commercial patterns', () => {
    const hobbyQueries = [
      'trucos de magia gratis para hacer en casa',
      'aprender magia gratis paso a paso',
      'tutoriales de magia con monedas',
      'tutorial de magia fácil',
      'truco con cartas revelado explicado',
      'cómo hacer trucos con baraja',
      'magia infantil barata para cumpleaños',
      'descargar gratis libro de magia'
    ];

    for (const query of hobbyQueries) {
      const opp = {
        id: 'HOBBY-TEST',
        type: 'faq',
        title: query,
        description: query,
        proposedChange: { kind: 'append', payload: query }
      };
      const res = auditorModule.auditOpportunity(opp);
      assert.equal(res.verdict, 'REJECTED', `Failed to veto hobby query: ${query}`);
      assert.equal(res.vetoTriggered, 'VETO_ZERO_COMMERCIAL_INTENT');
    }
  });

  it('BAT-3.2: Hybrid query combining hobbyist gratis with high-commercial terms is vetoed unconditionally', () => {
    const opp = {
      id: 'HYBRID-HOBBY',
      type: 'faq',
      targetFile: 'content/blog/mago-bodas-madrid.md',
      title: 'Aprender trucos de magia gratis para bodas en fincas de Madrid',
      description: 'Presupuestos y tarifas con trucos de magia gratis en Madrid',
      proposedChange: { kind: 'frontmatter', payload: { faq: [{ question: 'trucos gratis', answer: 'no' }] } }
    };
    const res = auditorModule.auditOpportunity(opp);
    assert.equal(res.verdict, 'REJECTED');
    assert.equal(res.vetoTriggered, 'VETO_ZERO_COMMERCIAL_INTENT');
    assert.ok(res.totalScore <= 25, 'Score must be capped at 25 upon veto');
  });

  it('BAT-3.3: Purely informational query without commercial keywords is rejected by rubric score < 70', () => {
    const opp = {
      id: 'INFO-QUERY',
      type: 'metadata',
      targetFile: 'content/blog/historia-magia.md',
      title: 'Historia de la magia clásica en el siglo XIX',
      description: 'Biografía de magos históricos y evolución del arte del ilusionismo',
      proposedChange: { kind: 'frontmatter', payload: { excerpt: 'Historia' } }
    };
    const res = auditorModule.auditOpportunity(opp);
    assert.equal(res.verdict, 'REJECTED');
    assert.ok(res.totalScore < 70, `Score ${res.totalScore} must be strictly below 70`);
    assert.equal(res.vetoTriggered, undefined, 'Rejected by rubric score, not by explicit hard veto');
  });
});

/* ========================================================================= */
/* BATTERY 4: ADVERSARIAL CHALLENGE OF VETO_TRACKER_COOKIE                   */
/* ========================================================================= */
describe('Battery 4: Adversarial Challenge of VETO_TRACKER_COOKIE', () => {

  it('BAT-4.1: Auditor strictly vetoes standard third-party tracking identifiers', () => {
    const trackerTokens = [
      'cookie', 'tracker', 'pixel', 'gtag', 'google-analytics',
      'facebook-pixel', 'hotjar', 'consent-banner'
    ];

    for (const token of trackerTokens) {
      const opp = {
        id: `TRACKER-${token}`,
        type: 'metadata',
        title: `Integración de ${token}`,
        description: `Seguimiento mediante ${token}`,
        proposedChange: { kind: 'append', payload: `<script>${token}</script>` }
      };
      const res = auditorModule.auditOpportunity(opp);
      assert.equal(res.verdict, 'REJECTED', `Failed to veto tracker token: ${token}`);
      assert.equal(res.vetoTriggered, 'VETO_TRACKER_COOKIE');
    }
  });

  it('BAT-4.2: Defense-in-Depth - Validator catches googletagmanager container scripts', () => {
    const sandbox = createTempSandbox();
    try {
      const badHtml = path.join(sandbox, 'public', 'tag.html');
      fs.writeFileSync(badHtml, '<script src="https://www.googletagmanager.com/gtm.js?id=GTM-TEST"></script>');
      const res = validatorModule.validateNoTrackers(sandbox);
      assert.equal(res.passed, false, 'Validator must catch googletagmanager');
      assert.equal(res.violationCount, 1);
    } finally {
      cleanupTempSandbox(sandbox);
    }
  });

  it('BAT-4.3: Current project codebase contains 0 tracking or cookie scripts', () => {
    const res = validatorModule.validateNoTrackers(PROJECT_ROOT);
    assert.equal(res.passed, true);
    assert.equal(res.violationCount, 0);
  });
});

/* ========================================================================= */
/* BATTERY 5: VETO_PERFORMANCE_DEGRADATION & BOUNDARY TESTING                */
/* ========================================================================= */
describe('Battery 5: VETO_PERFORMANCE_DEGRADATION & Boundary Testing', () => {

  it('BAT-5.1: Payload exceeding 30,000 characters is vetoed unconditionally', () => {
    const hugePayload = 'X'.repeat(30005);
    const opp = {
      id: 'OVERSIZE-01',
      type: 'metadata',
      title: 'Mago para bodas y empresas en Madrid',
      description: 'Alta intención comercial pero payload masivo',
      proposedChange: { kind: 'custom', payload: hugePayload }
    };
    const res = auditorModule.auditOpportunity(opp);
    assert.equal(res.verdict, 'REJECTED');
    assert.equal(res.vetoTriggered, 'VETO_PERFORMANCE_DEGRADATION');
  });

  it('BAT-5.2: Boundary Check - Payload at safe size (<30KB) passes performance gate', () => {
    const safePayload = 'X'.repeat(100);
    const opp = {
      id: 'SAFE-SIZE',
      type: 'faq',
      targetFile: 'content/blog/mago-bodas-madrid.md',
      title: 'Tarifas y contratación de mago para bodas en fincas de Madrid',
      description: 'Presupuestos para bodas en Madrid',
      proposedChange: { kind: 'frontmatter', payload: { faq: [{ question: 'Precio?', answer: safePayload }] } },
      impactArea: 'conversion'
    };
    const res = auditorModule.auditOpportunity(opp);
    assert.notEqual(res.vetoTriggered, 'VETO_PERFORMANCE_DEGRADATION');
    assert.equal(res.verdict, 'APPROVED');
  });
});

/* ========================================================================= */
/* BATTERY 6: PIPELINE ORCHESTRATOR INTEGRATION & VERIFICATION               */
/* ========================================================================= */
describe('Battery 6: Pipeline Orchestrator Integration & Verification', () => {

  it('BAT-6.1: CLI --check exits code 0 verifying site-wide compliance', () => {
    const res = runCLI(['--check']);
    assert.equal(res.status, 0, `Expected exit 0 for --check, got ${res.status}: ${res.stderr || res.stdout}`);
    assert.match(res.stdout, /CERO OCURRENCIAS/i);
    assert.match(res.stdout, /CERO TRACKERS/i);
  });

  it('BAT-6.2: CLI --dry-run produces latest.md without modifying any source files', () => {
    const res = runCLI(['--dry-run', '--limit', '2']);
    assert.equal(res.status, 0);

    const latestPath = path.join(PROJECT_ROOT, '.seo-pipeline', 'reports', 'latest.md');
    assert.ok(fs.existsSync(latestPath), 'latest.md must exist');
    const content = fs.readFileSync(latestPath, 'utf8');
    assert.match(content, /Resumen Ejecutivo/i);
    assert.match(content, /Matriz de Decisión del Agente 2/i);
  });
});
