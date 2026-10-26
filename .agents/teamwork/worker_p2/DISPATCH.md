# DISPATCH

## 2026-10-26T00:20:02Z
From: b63a6c37-72a1-4436-9631-2613368ee8ff
To: worker_p2

You are Worker P2.
Your working directory is: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p2`

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

MANDATORY INSTRUCTIONS:
1. Read `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md` (section `## 2026-10-25T23:29:44Z`).
2. Read `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\orchestrator_2\BACKLOG_TAREAS_EJECUTABLES.md` (Bloque III: FICHA-CRO-06, FICHA-CRO-07, FICHA-CRO-08, FICHA-CRO-09, FICHA-PERF-01, FICHA-SEO-05).
3. Read `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p2\context.md`.
4. Implement all 6 tasks:
   - `FICHA-CRO-06`: Flexible phone validation in `components/LiquidGlassForm.jsx`, `components/CorporateInlineForm.jsx`, `components/Modals.jsx` allowing `+`, digits, and spaces with `maxLength="16"`.
   - `FICHA-CRO-07`: Pre-fill contextual message in empty WhatsApp links in `app/contratar-mago-madrid/page.jsx` and `app/contacto/DigitalCard.jsx`.
   - `FICHA-CRO-08`: In `components/CorporateLogosBar.jsx`, curate B2B logos to show verified corporate clients (`Movistar Estudiantes`, `Alcampo`, `Ahorramás`, `Grupo Index`, `Zeppelin TV`, `Catering Senescal`, `Makaa Eventos`) and remove political/party entities.
   - `FICHA-CRO-09`: In `app/empresas/page.jsx` and `app/empresas/mago-cenas-empresa-madrid/page.jsx`, add the verified Movistar Estudiantes corporate testimonial and accessible visual Google Reviews reputation badge (`4.9 ★ en Google Reviews (+50 opiniones reales)` linking to Google Maps). STRICT ZERO AggregateRating in JSON-LD.
   - `FICHA-PERF-01`: In `next.config.js`, enable AVIF format (`formats: ['image/avif', 'image/webp']`). Archive or remove unused dead code `components/BusinessSchema.jsx`.
   - `FICHA-SEO-05`: In `content/blog/ideas-cenas-empresa-madrid-originales.md` and `content/blog/cenas-empresa-originales-madrid-ideas-magia.md`, differentiate content and headings (first: venues/restaurants, second: entertainment/magic) and add strong contextual internal links to `/empresas/mago-cenas-empresa-madrid`.
5. Run all required build & test verification commands:
   - `git grep -i "aggregaterating"` (must return 0 matches)
   - `git grep -n "34680650993"` (must return 0 matches)
   - `npm run build` (must exit 0, 140 static routes)
   - `node tests/e2e-pipeline.test.mjs` (must pass 100%)
   - `npm run seo:pipeline:check` (must pass)
6. Document all changes and verification outputs in `.agents/teamwork/worker_p2/handoff.md`.
7. Send a message to orchestrator when completed.
