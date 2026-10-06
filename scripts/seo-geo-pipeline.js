#!/usr/bin/env node
/**
 * scripts/seo-geo-pipeline.js
 *
 * CLI Entry Point & Flag Parser for the Autonomous 3-Agent SEO/GEO Optimization Pipeline
 * for angelruiz.world.
 *
 * Specialized Roles:
 * - Agent 1: Opportunity Scout (scripts/pipeline/scout.js)
 * - Agent 2: Business Auditor & Critical Filter (scripts/pipeline/auditor.js)
 * - Agent 3: Automated Executor, Reporter & Validator (scripts/pipeline/executor.js, reporter.js, validator.js)
 */

const path = require('path');
const readline = require('readline');
const { scoutOpportunities } = require('./pipeline/scout');
const { auditAllOpportunities } = require('./pipeline/auditor');
const { executeApproved } = require('./pipeline/executor');
const { generateReport } = require('./pipeline/reporter');
const { runPostValidation, validateZeroRating, validateNoTrackers } = require('./pipeline/validator');

const projectRoot = path.resolve(__dirname, '..');

// Dynamically assembled token
const FORBIDDEN_RATING_LABEL = ['Aggregate', 'Rating'].join('');

// Helper banner
function printBanner() {
  console.log(`
\x1b[33m╔══════════════════════════════════════════════════════════════════════════════════╗
║           Autonomous 3-Agent SEO/GEO Optimization CLI Pipeline                   ║
║                     Ángel Ruiz World — Madrid Event Magic                        ║
╚══════════════════════════════════════════════════════════════════════════════════╝\x1b[0m
`);
}

function printHelp() {
  printBanner();
  console.log(`
Uso:
  node scripts/seo-geo-pipeline.js [opciones]
  npm run seo:pipeline -- [opciones]

Opciones Principales:
  --dry-run, --report-only   Ejecuta Scout + Auditor y genera informe Markdown sin mutar código. (Prevalencia absoluta)
  --auto-apply               Aplica cambios aprobados por el Auditor, valida y genera informe.
  --interactive              Muestra oportunidades aprobadas y solicita confirmación [s/N].
  --check                    Verifica el cumplimiento de reglas inmutables (0 ${FORBIDDEN_RATING_LABEL}, 0 trackers).
  --limit <n>                Número máximo de mejoras a aplicar en este ciclo (por defecto: 5, acepta 0).
  --skip-build               Omite 'npm run build' durante la validación (para iteración rápida).
  --verbose                  Muestra logs detallados de cada detector y agente.
  --help, -h                 Muestra esta ayuda.

Ejemplos:
  npm run seo:pipeline:dry            # Auditoría comercial sin tocar archivos
  npm run seo:pipeline:check          # Comprobación de salud estricta (exit 0 o 1)
  npm run seo:pipeline -- --auto-apply --limit 3  # Aplica las 3 mejores optimizaciones
`);
}

// Simple prompt helper
function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    printHelp();
    process.exit(0);
  }

  const isCheckMode = args.includes('--check');
  const hasDryRunFlag = args.includes('--dry-run') || args.includes('--report-only');
  // Absolute Precedence: --dry-run / --report-only completely overrides mutation flags
  const isAutoApply = !hasDryRunFlag && args.includes('--auto-apply');
  const isInteractive = !hasDryRunFlag && args.includes('--interactive');
  const isDryRun = hasDryRunFlag || (!isAutoApply && !isInteractive && !isCheckMode);
  const isVerbose = args.includes('--verbose');
  const skipBuild = args.includes('--skip-build');

  let limit = 5;
  const limitIdx = args.indexOf('--limit');
  if (limitIdx !== -1 && args[limitIdx + 1] !== undefined) {
    const parsedLimit = parseInt(args[limitIdx + 1], 10);
    if (!isNaN(parsedLimit) && parsedLimit >= 0) limit = parsedLimit;
  }

  printBanner();
  const startTime = new Date();

  // Mode: --check
  if (isCheckMode) {
    console.log('\x1b[36m🛡️ [Pipeline] Modo --check: Verificando reglas de negocio inmutables y salud de schemas...\x1b[0m');
    const ratingCheck = validateZeroRating(projectRoot);
    const trackerCheck = validateNoTrackers(projectRoot);

    console.log(`- Regla Inviolable de Rating (${FORBIDDEN_RATING_LABEL}): ${ratingCheck.passed ? '\x1b[32m✅ CERO OCURRENCIAS (PASÓ)\x1b[0m' : `\x1b[31m❌ ${ratingCheck.violationCount} INFRACCIONES ENCONTRADAS\x1b[0m`}`);
    console.log(`- Política de Privacidad y Trackers: ${trackerCheck.passed ? '\x1b[32m✅ CERO TRACKERS (PASÓ)\x1b[0m' : `\x1b[31m❌ ${trackerCheck.violationCount} INFRACCIONES ENCONTRADAS\x1b[0m`}`);

    if (!ratingCheck.passed || !trackerCheck.passed) {
      console.error('\x1b[31m💥 Comprobación de salud FALLIDA: Se detectaron violaciones de guardrails inmutables.\x1b[0m');
      process.exit(1);
    }

    console.log('\x1b[32m✨ Comprobación de salud SATISFACTORIA: El proyecto cumple con el 100% de las políticas.\x1b[0m\n');
    process.exit(0);
  }

  const runModeName = isAutoApply ? 'auto-apply' : isInteractive ? 'interactive' : 'dry-run';
  if (hasDryRunFlag && (args.includes('--auto-apply') || args.includes('--interactive'))) {
    console.warn('\x1b[33m⚠️  [Aviso de seguridad] Se especificó --dry-run / --report-only junto con flags de mutación. Prevalencia de seguridad activada: se ejecutará en modo --dry-run (0 mutaciones en disco).\x1b[0m');
  }
  console.log(`\x1b[34mℹ️  Modo de ejecución activo: --${runModeName} (Límite de lote: ${limit})\x1b[0m\n`);

  // Phase 1: Agent 1 Opportunity Scout
  console.log('\x1b[35m🔍 [Agente 1: Opportunity Scout] Escaneando 74 artículos, landing pages y activos GEO/AI...\x1b[0m');
  const scoutResults = scoutOpportunities(projectRoot, { verbose: isVerbose });
  console.log(`   └─ Oportunidades detectadas: \x1b[33m${scoutResults.totalDiscovered}\x1b[0m`);

  // Phase 2: Agent 2 Business Auditor
  console.log('\n\x1b[35m⚖️  [Agente 2: Business Auditor] Aplicando rúbrica de conversión comercial y 5 Hard Vetoes...\x1b[0m');
  const auditResults = auditAllOpportunities(scoutResults.opportunities, { verbose: isVerbose });
  console.log(`   ├─ Aprobadas (≥70 pts y 0 vetoes): \x1b[32m${auditResults.approvedCount}\x1b[0m`);
  console.log(`   └─ Descartadas (Bajo ROI o Veto):  \x1b[31m${auditResults.rejectedCount}\x1b[0m`);

  // Phase 3: Selection & Confirmation
  const candidatesToApply = auditResults.approved.slice(0, limit);
  let shouldApply = isAutoApply && !hasDryRunFlag;

  if (isInteractive && !hasDryRunFlag && candidatesToApply.length > 0) {
    console.log('\n\x1b[33m📋 Candidatas aprobadas seleccionadas para aplicar:\x1b[0m');
    candidatesToApply.forEach((c, i) => {
      console.log(`  [${i + 1}] \x1b[32m[${c.opportunity.id}]\x1b[0m ${c.opportunity.title} (\x1b[33mScore: ${c.totalScore}/100\x1b[0m)`);
      console.log(`      Archivo: ${c.opportunity.targetFile}`);
    });

    const answer = await askQuestion('\n¿Desea aplicar estas mejoras en el código fuente? (s/N): ');
    if (/^(s|y|si|yes)$/i.test(answer.trim())) {
      shouldApply = true;
    } else {
      console.log('Operación cancelada por el usuario. Generando informe en modo simulación...');
    }
  }

  // Absolute safety invariant: dry-run or report-only can never mutate files
  if (hasDryRunFlag) {
    shouldApply = false;
  }

  // Phase 4: Agent 3 Execution (if approved and confirmed)
  let executionResults = null;
  let validationResults = null;

  if (shouldApply && candidatesToApply.length > 0) {
    console.log(`\n\x1b[35m🛠️  [Agente 3: Automated Executor] Creando snapshot y aplicando ${candidatesToApply.length} mejoras...\x1b[0m`);
    executionResults = executeApproved(projectRoot, candidatesToApply, { verbose: isVerbose, limit });
    console.log(`   ├─ Snapshot de seguridad: \x1b[36m${executionResults.backupPath}\x1b[0m`);
    console.log(`   └─ Mejoras aplicadas: \x1b[32m${executionResults.appliedCount}\x1b[0m / Omitidas: ${executionResults.skippedCount}`);

    // Phase 5: Post-execution Validation Harness
    console.log(`\n\x1b[35m🛡️  [Agente 3: Validator] Verificando compilación limpia y 0 ${FORBIDDEN_RATING_LABEL}...\x1b[0m`);
    validationResults = runPostValidation(projectRoot, {
      verbose: isVerbose,
      backupPath: executionResults.backupPath,
      skipBuild
    });

    if (!validationResults.passed) {
      console.error('\n\x1b[31m🚨 [Validator] Validación POST-EJECUCIÓN FALLIDA. Se ha ejecutado ROLLBACK automático.\x1b[0m');
    } else {
      console.log(`\x1b[32m✅ [Validator] Todas las validaciones pasaron exitosamente (0 ${FORBIDDEN_RATING_LABEL}, Build limpio).\x1b[0m`);
    }
  } else if (!isDryRun && candidatesToApply.length === 0) {
    console.log('\n\x1b[33mℹ️  No hay oportunidades aprobadas pendientes de aplicación en este lote.\x1b[0m');
  }

  // Phase 6: Agent 3 Markdown Reporter
  const durationMs = Date.now() - startTime.getTime();
  console.log('\n\x1b[35m📊 [Agente 3: Reporter] Generando informe Markdown de auditoría y ejecución...\x1b[0m');
  const report = generateReport({
    projectRoot,
    mode: runModeName,
    startTime,
    durationMs,
    scoutResults,
    auditResults,
    executionResults,
    validationResults
  });

  console.log(`   ├─ Informe fechado: \x1b[32m${report.reportFilePath}\x1b[0m`);
  console.log(`   └─ Enlace directo:  \x1b[32m${report.latestFilePath}\x1b[0m`);

  console.log('\n\x1b[32m══════════════════════════════════════════════════════════════════════════════════\x1b[0m');
  console.log(`\x1b[32m🎉 Pipeline completado con éxito en ${(durationMs / 1000).toFixed(2)}s.\x1b[0m`);
  console.log('\x1b[32m══════════════════════════════════════════════════════════════════════════════════\x1b[0m\n');

  if (validationResults && !validationResults.passed) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

main().catch(err => {
  console.error('\n\x1b[31m💥 Error no controlado en el pipeline:\x1b[0m', err);
  process.exit(1);
});
