## 2026-10-25T23:38:20Z
You are Worker P0.
Your working directory is: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p0`

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

MANDATORY INSTRUCTIONS:
1. Read `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md` (section `## 2026-10-25T23:29:44Z`).
2. Read `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p0\context.md`.
3. Consult the detailed explorer handoff reports:
   - `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p0_1\handoff.md` (FICHA-CRO-01)
   - `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p0_2\handoff.md` (FICHA-CRO-02, FICHA-SEO-03)
   - `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p0_3\handoff.md` (FICHA-SEO-01, FICHA-SEO-02)
4. Implement all 5 tasks:
   - `FICHA-CRO-01`: Replace `34680650993` with `34648055636` in `app/empresas/page.jsx` (line 266) and `app/particulares/bodas/page.jsx` (line 225).
   - `FICHA-CRO-02`: In `app/empresas/mago-cenas-empresa-madrid/page.jsx`, insert the dual above-the-fold CTA block (Primary WhatsApp + Secondary anchor `href="#presupuesto-empresa"`) after line 109, and add `id="presupuesto-empresa"` to the `<section>` at line 282.
   - `FICHA-SEO-01`: In `app/empresas/page.jsx`, fix line 344 anchor text `"mago para cenas de empresa"` to point to `/empresas/mago-cenas-empresa-madrid` and keep `"magia en restaurantes"` link to `/empresas/mago-para-restaurantes-madrid`.
   - `FICHA-SEO-02`: In `app/empresas/page.jsx`, update metadata (lines 16-33) to Title: `'Mago para Empresas en Madrid | Eventos Corporativos y B2B'` (57 chars), update description (147 chars), remove `'mago cenas empresa madrid'` from keywords, and synchronize OpenGraph and Twitter cards.
   - `FICHA-SEO-03`: In `app/empresas/mago-cenas-empresa-madrid/page.jsx`, update metadata title to `'Mago para Cenas de Empresa en Madrid | Cenas y Navidad'` (54 chars) and description (154 chars).
5. Absolute constraint from GEMINI.md: ZERO occurrences of `AggregateRating`, `ratingValue`, or `reviewCount` in any schema or meta tags.
6. Run all required build & test verification commands:
   - `git grep -n "34680650993"` (must return 0 matches)
   - `git grep -i "aggregaterating"` (must return 0 matches)
   - `npm run build` (must exit 0, 140 static routes)
   - `node tests/e2e-pipeline.test.mjs` (must pass 100%)
   - `npm run seo:pipeline:check`
7. Document all changes made, command outputs, and verification in `.agents/teamwork/worker_p0/handoff.md`.
8. Send a message to orchestrator when completed.
