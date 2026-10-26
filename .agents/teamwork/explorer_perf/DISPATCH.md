# Dispatch: Explorer 4 (Salvaguarda Técnica de Rendimiento & PageSpeed Insights)

## Context & Assignment
- Role: Performance & Core Web Vitals Specialist
- Working directory: C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_perf
- Target Scope: Requirement R4 (Salvaguarda Técnica de Rendimiento y PageSpeed Insights)

## Mission
1. Auditar la arquitectura técnica y de carga de Next.js: `next.config.js`, `app/layout.jsx`, optimización de fuentes (`@next/font`), Tailwind CSS y dependencias en `package.json`.
2. Analizar el impacto de scripts, animaciones (Framer Motion, CSS, etc.) y componentes de cliente (`"use client"`) vs Server Components en Core Web Vitals (LCP, INP, CLS).
3. Auditar la carga y optimización de recursos gráficos: componentes `next/image`, formatos (WebP/AVIF), dimensiones fijadas para evitar CLS, lazy loading vs `priority` en imágenes hero.
4. Identificar cualquier script bloqueante, analítica innecesaria o cookies/trackers de terceros (recordando la regla: cero cookies ni trackers intrusivos).
5. Proponer salvaguardas y directrices técnicas claras para que cualquier cambio propuesto en SEO, GEO o CRO no degrade los tiempos de carga ni penalice las métricas de Google PageSpeed Insights.

## Constraints
- PROHIBICIÓN ESTRICTA: Cero uso o mención de `AggregateRating`.
- No alterar negativamente el diseño premium ni agregar trackers de terceros.
- Escribe tu informe detallado en `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_perf\handoff.md`.


## 2026-10-25T22:31:07Z
From: 97be7b5b-b5b9-43bf-b001-9a99e3b60fee (Parent Orchestrator)
Content:
You are Explorer 4: Salvaguarda Técnica de Rendimiento & PageSpeed Insights Specialist for angelruiz.world.
Your working directory is:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_perf

Read the authoritative user request at:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md (specifically the latest request under `## 2026-10-25T22:26:56Z`).
Read your task assignment at:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_perf\DISPATCH.md
Also inspect:
- `next.config.js`
- `app/layout.jsx`
- `package.json`
- `components/` and `public/` assets (images, fonts, third-party scripts)

Your tasks:
1. Audit the Next.js loading architecture, bundle sizes, client vs server components (`"use client"` vs Server Components), and potential blocking resources.
2. Audit Core Web Vitals risks:
   - LCP: Hero image loading strategy (`priority`, fetchpriority, formats webp/avif, sizing).
   - INP / FID: Main-thread execution time, event handlers, animation heavy scripts (Framer Motion, GSAP, CSS).
   - CLS: Dimension attributes on media, font-display swap vs optional, layout shifts in headers/widgets.
3. Audit third-party scripts and cookies: ensure zero intrusive trackers or unnecessary external payloads exist.
4. Formulate quantitative Rendimiento / PageSpeed Insights score (0-100) based on code architecture.
5. Define technical guardrails and checklist to guarantee that any new SEO, GEO or CRO feature introduces 0 performance regressions and builds cleanly (`npm run build` code 0).

MANDATORY CONSTRAINT:
PROHIBICIÓN ESTRICTA: Cero uso o recomendación de `AggregateRating` o propiedades de valoración en esquemas JSON-LD o contenidos (regla de GEMINI.md).

Output:
Write your complete structured investigation report to:
`C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_perf\handoff.md`.
Communicate back to orchestrator via `send_message` when done.
