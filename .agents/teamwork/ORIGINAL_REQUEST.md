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


## 2026-10-25T22:26:56Z

Auditoría integral 360° y plan de choque para transformar angelruiz.world en una máquina de captación y cierre de contrataciones de eventos (con foco prioritario en Cenas de Empresa, Eventos Corporativos y Navidad en Madrid), maximizando el posicionamiento en Google, la citabilidad en motores de IA (ChatGPT Search, Perplexity, Gemini, Claude, Copilot) y la tasa de conversión a WhatsApp sin degradar las métricas de rendimiento de PageSpeed Insights.

Working directory: c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main
Integrity mode: development

## Requirements

### R1. Auditoría SEO On-Page, Palabras Clave y Canibalización (Foco Q4 Cenas de Empresa)
Auditar la arquitectura completa del sitio (140 rutas estáticas: landings corporativas, bodas, particulares, blog y sedes locales en Madrid). Identificar canibalizaciones de palabras clave (especialmente entre `/empresas`, `/empresas/mago-cenas-empresa-madrid` y los artículos de blog), rescatar consultas estancadas en el "purgatorio de página 2" (posiciones 11–20 con alto volumen) y diseñar la optimización de snippets (títulos y descripciones) para disparar el CTR.

### R2. Dominio GEO (Generative Engine Optimization) e Indexabilidad para IAs
Evaluar y auditar la citabilidad del contenido para respuestas en ChatGPT Search, Perplexity, Google AI Overviews y Gemini. Verificar la configuración técnica de rastreadores de IA (robots.txt, llms.txt, sitemaps), consistencia de entidades de marca y esquemas estructurados Schema.org exhaustivos.

### R3. Auditoría de Conversión (CRO), UX Móvil y Psicología de Cierre
Analizar el embudo de contratación desde la primera impresión hasta el contacto directo. Evaluar la fricción en dispositivos móviles, la claridad de tarifas y propuestas de valor, la efectividad de los botones de WhatsApp/formularios y la integración de elementos de prueba social y urgencia estacional para maximizar presupuestos solicitados.

### R4. Salvaguarda Técnica de Rendimiento y Google PageSpeed Insights
Evaluar la arquitectura de carga, Core Web Vitals (LCP, INP, CLS), tiempos de respuesta, scripts bloqueantes y optimización de recursos gráficos. Cualquier mejora o recomendación debe garantizar que las puntuaciones de rendimiento y velocidad de carga no se penalicen.

### R5. Backlog de Tareas Priorizadas para Agentes de Implementación
Consolidar los hallazgos en un plan de acción estructurado por fichas de tarea listas para ejecución (archivo afectado, problema detectado, cambio exacto propuesto, impacto estimado en negocio y criterio de verificación).

## Acceptance Criteria

### Restricciones Críticas e Integridad
- [ ] **PROHIBICIÓN ESTRICTA**: Cero uso de `AggregateRating` o propiedades de valoración (`ratingValue`, `reviewCount`) en cualquier esquema JSON-LD o recomendación (regla obligatoria de proyecto).
- [ ] El build de producción de Next.js (`npm run build`) debe compilar de forma limpia (Code 0) y sin errores de tipos o linting.
- [ ] Cero regresiones en tiempos de carga y Core Web Vitals de Google PageSpeed Insights.

### Entregables de la Auditoría
- [ ] **Informe de Auditoría Consolidado**: Diagnóstico por categorías con puntuaciones cuantitativas (0–100) en SEO Tradicional, GEO / Citabilidad IA, CRO y Rendimiento.
- [ ] **Matriz de Rescate SERP**: Listado priorizado de palabras clave transaccionales (posiciones 11–20) con propuesta de ajuste de snippet y enlazado interno para escalarlas a página 1.
- [ ] **Checklist GEO & AI**: Validación técnica de robots.txt para bots de IA, estado de llms.txt y recomendaciones de citabilidad con citas verificables.
- [ ] **Backlog de Tareas Ejecutables**: Mínimo 10 fichas de tarea técnicas ordenadas por impacto/esfuerzo, listas para que agentes de desarrollo y contenido puedan implementarlas directamente.


## 2026-10-25T23:29:44Z

Implementación integral y por fases de las 20 fichas técnicas del Plan de Choque 360° en angelruiz.world (definidas en `.agents/teamwork/orchestrator_2/BACKLOG_TAREAS_EJECUTABLES.md`), convirtiendo la web en una máquina de contrataciones con foco en Cenas de Empresa y Navidad en Madrid, sin degradar PageSpeed Insights ni infringir la prohibición de AggregateRating.

Working directory: c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main
Integrity mode: development

## Requirements

### R1. Fase 1: Implementación del Bloque P0 (Correcciones Críticas Inmediatas)
Ejecutar las 5 fichas críticas P0:
1. `FICHA-CRO-01`: Unificar el número oficial de WhatsApp a `34648055636` en todo el proyecto (sustituyendo `34680650993` en `app/contacto/page.jsx`, `app/mago-close-up-madrid/page.jsx` y componentes de contacto).
2. `FICHA-CRO-02`: Insertar CTA primario y secundario above-the-fold en `app/empresas/mago-cenas-empresa-madrid/page.jsx`.
3. `FICHA-SEO-01`: Corregir el enlace con anchor text desalineado en `app/empresas/page.jsx:344` apuntando directamente a `/empresas/mago-cenas-empresa-madrid`.
4. `FICHA-SEO-02`: Desambiguar y sincronizar metadatos en el hub B2B `app/empresas/page.jsx`.
5. `FICHA-SEO-03`: Ajustar longitudes exactas de snippets SERP en `app/empresas/mago-cenas-empresa-madrid/page.jsx` (Title <= 60 chars, Desc <= 155 chars).

### R2. Fase 2: Implementación del Bloque P1 (GEO, Citabilidad, Móvil y Sitemap)
Ejecutar las 9 fichas de prioridad alta P1:
1. `FICHA-GEO-01`: Ampliar directivas de rastreadores IA (GPTBot, PerplexityBot, ClaudeBot, Applebot-Extended) y bloquear `/panel` en `app/robots.js`.
2. `FICHA-GEO-02`: Sincronizar y enriquecer `public/llms.txt` y `.well-known/llms.txt` con la landing de cenas y tabla de datos canónicos.
3. `FICHA-SEO-04`: Añadir `/contacto` y limpiar redirecciones en `app/sitemap.js`.
4. `FICHA-GEO-03`: Vincular entidades de marca y persona con Wikidata Q-IDs en `app/layout.jsx`.
5. `FICHA-GEO-04`: Unificar el `@id` canónico `https://angelruiz.world/#person` en los 6 servicios B2B.
6. `FICHA-GEO-05`: Añadir ficha técnica extractable GEO y tabla de formatos en la landing de cenas.
7. `FICHA-CRO-03`: Corregir el auto-zoom de iOS Safari asegurando `font-size: 16px` (o `text-base`) en inputs y selectores móviles.
8. `FICHA-CRO-04`: Conectar el Hero móvil con `MobileBookingDrawer` para agilizar reservas de un toque.
9. `FICHA-CRO-05`: Integrar aviso estacional sutil Q4 en el Hero de la Home.

### R3. Fase 3: Implementación del Bloque P2 (Autoridad B2B, Performance y Editorial)
Ejecutar las 6 fichas de optimización media P2:
1. `FICHA-CRO-06`: Flexibilizar validación telefónica en formularios para aceptar prefijos internacionales `+`.
2. `FICHA-CRO-07`: Pre-llenar mensajes contextuales en enlaces de WhatsApp vacíos.
3. `FICHA-CRO-08`: Curar barra de logos B2B para máxima afinidad corporativa.
4. `FICHA-CRO-09`: Añadir testimonio verificado B2B y badge visual de reputación sin esquema AggregateRating.
5. `FICHA-PERF-01`: Activar formato AVIF en `next.config.js` y optimizar dependencias de imagen.
6. `FICHA-SEO-05`: Consolidar canibalización editorial y reforzar enlazado en posts de blog corporativos.

### R4. Verificación Continua y Cero Regresiones
Tras cada bloque de cambios:
1. Validar que `npm run build` compile con código 0 y 140 rutas estáticas generadas limpiamente.
2. Comprobar rigurosamente que no exista ninguna mención de `AggregateRating` en el proyecto.
3. Ejecutar los tests de regresión del pipeline (`tests/e2e-pipeline.test.mjs` y `npm run seo:pipeline:check`).

## Acceptance Criteria

### Integridad Absoluta
- [ ] **REGLA MANDATORIA**: Cero ocurrencias de `AggregateRating`, `ratingValue` o `reviewCount` en cualquier schema JSON-LD o meta-etiqueta de la aplicación.
- [ ] Compilación Next.js limpia (`npm run build`) con Exit Code 0 al finalizar cada una de las 3 fases.
- [ ] Cero regresiones en Core Web Vitals (LCP móvil < 1.4s, CLS = 0.000).

### Verificación Específica por Tareas
- [ ] El número `34680650993` no debe aparecer en ningún enlace `href` de WhatsApp del proyecto; todos deben utilizar `34648055636`.
- [ ] Todos los inputs de texto y selectores tienen tamaño de fuente >= 16px en viewport móvil (<640px).
- [ ] `robots.js` incluye reglas explícitas para rastreadores de IA principales y bloquea `/panel`.
- [ ] `llms.txt` incluye la URL de `https://angelruiz.world/empresas/mago-cenas-empresa-madrid` y datos de contacto actualizados.
- [ ] Todos los títulos y descripciones optimizados en `MATRIZ_RESCATE_SERP.md` cumplen estrictamente las longitudes máximas (Title <= 60 caracteres, Description <= 155 caracteres).
- [ ] Los 99/99 tests de `tests/e2e-pipeline.test.mjs` pasan exitosamente.
