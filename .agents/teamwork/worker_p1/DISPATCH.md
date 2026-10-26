## 2026-10-25T23:59:19Z
You are Worker P1.
Your working directory is: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p1`

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

MANDATORY INSTRUCTIONS:
1. Read `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md` (section `## 2026-10-25T23:29:44Z`).
2. Read `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p1\context.md`.
3. Consult the detailed explorer handoffs and diffs:
   - `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p1_1\handoff.md` and `analysis.md` (FICHA-GEO-01, FICHA-GEO-02, FICHA-SEO-04)
   - `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p1_2\handoff.md` and `analysis.md` (FICHA-GEO-03, FICHA-GEO-04, FICHA-GEO-05)
   - `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p1_3\handoff.md` and `analysis.md` (FICHA-CRO-03, FICHA-CRO-04, FICHA-CRO-05)
4. Implement all 9 tasks:
   - `FICHA-GEO-01`: In `app/robots.js`, add `GoogleOther`, `Amazonbot`, `FacebookBot`, `Diffbot` to `AI_BOTS`, and add `'/panel'` to all 3 `disallow` arrays.
   - `FICHA-GEO-02`: In `public/llms.txt` and `public/.well-known/llms.txt`, write the complete, synchronized content (blockquote < 200 chars, Cenas landing, Contact, Pricing, Key Facts table, Contact info; 100% byte identical).
   - `FICHA-SEO-04`: In `app/sitemap.js`, replace `/particulares` with `/contacto` (priority 0.75, image `/images/foto-bio.webp`, monthly).
   - `FICHA-GEO-03`: In `app/layout.jsx`, add `"founder": { "@id": "https://angelruiz.world/#person" }` in `#organization`, add 13 Wikidata Q-IDs to `areaServed`, and clean the Google `sameAs` URL.
   - `FICHA-GEO-04`: In the 6 B2B pages (`app/empresas/mago-cenas-empresa-madrid/page.jsx`, `app/empresas/mago-ferias-congresos-madrid/page.jsx`, `app/empresas/mago-team-building-madrid/page.jsx`, `app/empresas/mago-para-restaurantes-madrid/page.jsx`, `app/empresas/mago-conferenciante-madrid/page.jsx`, `app/mago-madrid/page.jsx`), unify `provider` with `@type: "Person"`, `@id: "https://angelruiz.world/#person"`, `name: "Ángel Ruiz"`, `url: "https://angelruiz.world/sobre-mi"`.
   - `FICHA-GEO-05`: In `app/empresas/mago-cenas-empresa-madrid/page.jsx`, insert the GEO extractable fact sheet & formats table before the FAQs section.
   - `FICHA-CRO-03`: In `components/CorporateInlineForm.jsx` and `components/Modals.jsx`, update inputs/selects/textareas to `text-base sm:text-sm` (16px on mobile) to eliminate iOS Safari auto-zoom.
   - `FICHA-CRO-04`: In `components/HomeClient.jsx`, connect mobile hero buttons to dispatch `'open-booking-drawer'`, and in `components/Navbar.jsx`, add the companion event listener for `'open-booking-drawer'` to set `setIsBookingDrawerOpen(true)`.
   - `FICHA-CRO-05`: In `components/HomeClient.jsx`, update the Hero badge to the Q4 seasonal notice: `🟢 Campaña Cenas de Empresa & Navidad · Últimas Fechas Q4`.
5. Absolute rule from GEMINI.md: ZERO occurrences of `AggregateRating`, `ratingValue`, or `reviewCount` in any schema or meta tags.
6. Run all required build & test verification commands:
   - `git grep -i "aggregaterating"` (must return 0 matches)
   - `git grep -n "34680650993"` (must return 0 matches)
   - `npm run build` (must exit 0, 140 static routes)
   - `node tests/e2e-pipeline.test.mjs` (must pass 100%)
   - `npm run seo:pipeline:check` (must pass)
7. Document all changes, command results, and verification in `.agents/teamwork/worker_p1/handoff.md`.
8. Send a message to orchestrator when completed.
