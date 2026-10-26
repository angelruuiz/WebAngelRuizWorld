# Reviewer P1-1 Task Assignment

Working Directory: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\reviewer_p1_1`

Scope of Review: Phase 2 (P1 Tasks) Code & Build Verification
- Worker handoff: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p1\handoff.md`
- Original Request: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md` (section `## 2026-10-25T23:29:44Z`)
- Backlog: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\orchestrator_2\BACKLOG_TAREAS_EJECUTABLES.md`

Objectives:
1. Review all code changes across:
   - `app/robots.js` (crawlers and /panel)
   - `public/llms.txt` & `public/.well-known/llms.txt` (sync and content)
   - `app/sitemap.js` (/contacto and removal of /particulares)
   - `app/layout.jsx` (founder @id, Wikidata Q-IDs, clean Google sameAs)
   - 6 B2B pages (provider Person @id unification)
   - `app/empresas/mago-cenas-empresa-madrid/page.jsx` (GEO fact sheet & formats table)
   - `components/CorporateInlineForm.jsx` & `components/Modals.jsx` (16px font-size on mobile)
   - `components/HomeClient.jsx`, `components/Navbar.jsx`, `components/MobileBookingDrawer.jsx` (booking drawer events and Q4 urgency badge)
2. Verify that ZERO `AggregateRating` exists anywhere in the codebase.
3. Run `npm run build` and `node tests/e2e-pipeline.test.mjs`.
4. Deliver verdict: `APPROVE` or `REQUEST_CHANGES` in `.agents/teamwork/reviewer_p1_1/handoff.md`.
