# Forensic Auditor P1-1 Task Assignment

Working Directory: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\auditor_p1_1`

Scope of Forensic Audit: Phase 2 (P1 Tasks) Integrity Verification
- Worker handoff: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p1\handoff.md`
- Absolute Guardrail: ZERO `AggregateRating`, `ratingValue`, or `reviewCount` in any JSON-LD schema or meta tags (`GEMINI.md`).

Objectives:
1. Conduct forensic integrity audit of all files modified in Phase 2:
   - `app/robots.js`
   - `public/llms.txt` and `public/.well-known/llms.txt`
   - `app/sitemap.js`
   - `app/layout.jsx`
   - 6 B2B pages: `app/empresas/mago-cenas-empresa-madrid/page.jsx`, `app/empresas/mago-ferias-congresos-madrid/page.jsx`, `app/empresas/mago-team-building-madrid/page.jsx`, `app/empresas/mago-para-restaurantes-madrid/page.jsx`, `app/empresas/mago-conferenciante-madrid/page.jsx`, `app/mago-madrid/page.jsx`
   - `components/CorporateInlineForm.jsx`
   - `components/Modals.jsx`
   - `components/HomeClient.jsx`
   - `components/Navbar.jsx`
   - `components/MobileBookingDrawer.jsx`
2. Run exhaustive static and runtime checks for:
   - Prohibited schema keywords: `AggregateRating`, `ratingValue`, `reviewCount`, `bestRating`, `worstRating`.
   - Any fake tests, dummy mockups, or circumvented requirements.
3. Verify that `npm run build` runs genuinely and generates 140 static routes.
4. Deliver verdict: `CLEAN` or `INTEGRITY VIOLATION` in `.agents/teamwork/auditor_p1_1/handoff.md`.
