# Original User Request

## 2026-10-06T22:55:19Z

Build an autonomous 3-agent SEO/GEO optimization CLI pipeline for angelruiz.world that continuously discovers high-impact opportunities, strictly filters them through a business conversion lens, generates a proposal report, and automatically executes approved changes in the codebase.

Working directory: C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main
Integrity mode: development

## Requirements

### R1. Pipeline de 3 Roles Especializados (Scout → Auditor → Executor)
- **Agent 1 (Opportunity Scout)**: Analiza el proyecto web (arquitectura, metadatos, esquemas JSON-LD, contenido, interlinking, llms.txt, GEO AI citations) e identifica oportunidades concretas para ganar visibilidad en Google y motores generativos (ChatGPT, Perplexity, Gemini, Copilot).
- **Agent 2 (Business Auditor & Critical Filter)**: Evalúa cada oportunidad bajo una rúbrica implacable orientada al negocio de Ángel Ruiz (mago para bodas, empresas y eventos en Madrid). Descarta propuestas genéricas o infladas; solo aprueba aquellas con alta probabilidad de generar visitas que se conviertan en solicitudes de presupuesto y reservas.
- **Agent 3 (Automated Executor & Reporter)**: Para cada mejora aprobada por el Auditor, genera un informe Markdown estructurado con el antes/después y el impacto esperado. Seguidamente, aplica las modificaciones en el código fuente de forma limpia y precisa.

### R2. Reglas de Negocio Inmutables & Guardrails
- **PROHIBICIÓN ESTRICTA**: Cero uso de `AggregateRating` (o campos de rating en JSON-LD) bajo cualquier circunstancia (penalización severa en GSC).
- **Cero cookies o trackers intrusivos**: Prohibido introducir scripts de terceros o banners de cookies.
- **Preservación visual y de rendimiento**: No alterar negativamente el diseño premium oscuro/dorado ni degradar los tiempos de carga en móvil/desktop.

### R3. CLI / Script de Orquestación en Node.js
- Crear un orquestador ejecutable (ej. `scripts/seo-geo-pipeline.js` o comando npm asociado `npm run seo:pipeline`) que permita ejecutar el ciclo completo de los 3 agentes de manera interactiva o desatendida.
- Debe registrar un log histórico de auditorías y ejecuciones en `.seo-pipeline/reports/` con fecha, mejoras detectadas, descartadas con motivo, y cambios aplicados.
- Debe incluir validación post-ejecución automática (`npm run build` y verificación estricta de 0 `AggregateRating`).

## Acceptance Criteria

### Execution & Verification
- [ ] El script orquestador se ejecuta con `node scripts/seo-geo-pipeline.js` (o `npm run seo:pipeline`) sin errores de ejecución.
- [ ] El pipeline produce un informe estructurado previo en formato Markdown detallando las oportunidades analizadas, cuáles fueron aprobadas y cuáles rechazadas por el Agente Auditor con su justificación.
- [ ] Los cambios aplicados por el Agente Implementador respetan la prohibición de `AggregateRating` (0 ocurrencias verificables con `git grep -i "aggregaterating"`).
- [ ] El proyecto compila limpiamente (`npm run build` exit code 0) tras la ejecución de las mejoras.
- [ ] No se agregan librerías de cookies ni tracking de terceros.
