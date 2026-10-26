# Forensic Auditor P2-1 Task Assignment

Working Directory: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\auditor_p2_1`

Scope of Forensic Audit: Phase 3 (P2 Tasks) & Project-Wide Final Integrity Certification
- Worker handoff: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p2\handoff.md`
- Absolute Guardrail: ZERO `AggregateRating`, `ratingValue`, or `reviewCount` in any JSON-LD schema or meta tags (`GEMINI.md`).

Objectives:
1. Conduct forensic integrity audit of all files modified in Phase 3:
   - `components/LiquidGlassForm.jsx`
   - `components/CorporateInlineForm.jsx`
   - `components/Modals.jsx`
   - `app/contratar-mago-madrid/page.jsx`
   - `app/contacto/DigitalCard.jsx`
   - `components/CorporateLogosBar.jsx`
   - `app/empresas/page.jsx`
   - `app/empresas/mago-cenas-empresa-madrid/page.jsx`
   - `next.config.js`
   - `content/blog/ideas-cenas-empresa-madrid-originales.md`
   - `content/blog/cenas-empresa-originales-madrid-ideas-magia.md`
2. Run exhaustive static and runtime checks across the ENTIRE repository for:
   - Prohibited schema keywords: `AggregateRating`, `ratingValue`, `reviewCount`, `bestRating`, `worstRating`.
   - Deprecated WhatsApp number: `34680650993`.
   - Any fake tests, dummy mockups, or circumvented requirements.
3. Verify that `npm run build` runs genuinely and generates 140 static routes.
4. Verify that `node tests/e2e-pipeline.test.mjs` passes 99/99 tests.
5. Deliver verdict: `CLEAN` or `INTEGRITY VIOLATION` in `.agents/teamwork/auditor_p2_1/handoff.md`.
