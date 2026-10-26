# Worker P0 Task Assignment

Working Directory: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p0`

## Scope of Implementation (Phase 1 / P0)
You are assigned to implement the 5 critical tasks of Phase 1 (P0):
1. **FICHA-CRO-01**: Unify WhatsApp number to `34648055636`:
   - `app/empresas/page.jsx:266`: replace `34680650993` with `34648055636`.
   - `app/particulares/bodas/page.jsx:225`: replace `34680650993` with `34648055636`.
2. **FICHA-CRO-02**: Primary & Secondary CTA Above-The-Fold in `app/empresas/mago-cenas-empresa-madrid/page.jsx`:
   - Insert the dual CTA block after the introductory paragraph in the header (after line 109).
   - Add `id="presupuesto-empresa"` to the `<section>` at line 282 so the secondary anchor button scrolls to the corporate form.
3. **FICHA-SEO-01**: Anchor text fix in `app/empresas/page.jsx:344`:
   - Point `"mago para cenas de empresa"` directly to `/empresas/mago-cenas-empresa-madrid`.
   - Keep `"magia en restaurantes"` pointing to `/empresas/mago-para-restaurantes-madrid`.
4. **FICHA-SEO-02**: Disambiguation of B2B Hub metadata in `app/empresas/page.jsx`:
   - Title: `'Mago para Empresas en Madrid | Eventos Corporativos y B2B'` (57 chars).
   - Description: `'Mago para empresas en Madrid: convenciones, kick-offs, team building y ferias. Ilusionismo corporativo de alto impacto. ¡Presupuesto express en 2h!'` (147 chars).
   - Remove `'mago cenas empresa madrid'` from keywords.
   - Synchronize OpenGraph and Twitter cards.
5. **FICHA-SEO-03**: Optimize SERP snippet length in `app/empresas/mago-cenas-empresa-madrid/page.jsx`:
   - Title: `'Mago para Cenas de Empresa en Madrid | Cenas y Navidad'` (54 chars).
   - Description: `'Mago profesional para cenas de empresa en Madrid y fiestas de Navidad. Magia de cerca cóctel y sobremesa. Fechas limitadas Q4. ¡Presupuesto express en 2h!'` (154 chars).

## Explorer Handoffs to Consult:
- Explorer P0-1: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p0_1\handoff.md`
- Explorer P0-2: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p0_2\handoff.md`
- Explorer P0-3: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p0_3\handoff.md`

## Verification Requirements:
1. Run `git grep -n "34680650993"` (must return 0 matches).
2. Run `git grep -i "aggregaterating"` (must return 0 matches).
3. Run `npm run build` (must exit 0 with 140 static routes).
4. Run `node tests/e2e-pipeline.test.mjs` (must pass 100%).
5. Run `npm run seo:pipeline:check`.
6. Write a complete report to `.agents/teamwork/worker_p0/handoff.md`.
