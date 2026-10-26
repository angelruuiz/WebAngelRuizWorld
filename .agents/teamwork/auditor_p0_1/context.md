# Forensic Auditor P0-1 Task Assignment

Working Directory: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\auditor_p0_1`

Scope of Forensic Audit: Phase 1 (P0 Tasks) Integrity & Guardrail Verification
- Worker handoff: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p0\handoff.md`
- Codebase: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main`
- Absolute Guardrail: ZERO `AggregateRating`, `ratingValue`, or `reviewCount` in any JSON-LD schema or meta tags (`GEMINI.md`).

Objectives:
1. Conduct forensic integrity audit of all modified files (`app/empresas/page.jsx`, `app/particulares/bodas/page.jsx`, `app/empresas/mago-cenas-empresa-madrid/page.jsx`).
2. Run exhaustive static and runtime checks for:
   - Prohibited schema keywords: `AggregateRating`, `ratingValue`, `reviewCount`, `bestRating`, `worstRating`.
   - Hardcoded fake tests or dummy mockups circumventing real functionality.
   - Any fabrication of verification outputs.
3. Verify that `npm run build` runs genuinely and generates 140 static routes.
4. Deliver verdict: `CLEAN` or `INTEGRITY VIOLATION` in `.agents/teamwork/auditor_p0_1/handoff.md`.
