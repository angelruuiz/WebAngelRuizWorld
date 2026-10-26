# Worker P1 Task Assignment

Working Directory: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p1`

## Scope of Implementation (Phase 2 / P1)
You are assigned to implement all 9 tasks of Phase 2 (P1):
1. **FICHA-GEO-01 (`app/robots.js`)**:
   - Add `GoogleOther`, `Amazonbot`, `FacebookBot`, `Diffbot` to `AI_BOTS`.
   - Add `'/panel'` to all 3 disallow arrays.
2. **FICHA-GEO-02 (`public/llms.txt` & `public/.well-known/llms.txt`)**:
   - Update both files to be 100% byte-for-byte identical.
   - Header blockquote must be < 200 chars.
   - Include Cenas landing (`https://angelruiz.world/empresas/mago-cenas-empresa-madrid`), Contact, Pricing, Key Facts, and Contact sections.
3. **FICHA-SEO-04 (`app/sitemap.js`)**:
   - Replace redirecting `/particulares` entry with `/contacto` (priority 0.75, image `/images/foto-bio.webp`, changeFrequency monthly).
4. **FICHA-GEO-03 (`app/layout.jsx`)**:
   - Add `"founder": { "@id": "https://angelruiz.world/#person" }` in `#organization`.
   - Add 13 Wikidata Q-IDs in `areaServed`.
   - Clean Google `sameAs` link (remove ephemeral session parameters).
   - Strict 0 AggregateRating check.
5. **FICHA-GEO-04 (6 B2B Pages)**:
   - Unify `provider` in JSON-LD schemas to `{ "@type": "Person", "@id": "https://angelruiz.world/#person", "name": "Ángel Ruiz", "url": "https://angelruiz.world/sobre-mi" }` across:
     - `app/empresas/mago-cenas-empresa-madrid/page.jsx`
     - `app/empresas/mago-ferias-congresos-madrid/page.jsx`
     - `app/empresas/mago-team-building-madrid/page.jsx`
     - `app/empresas/mago-para-restaurantes-madrid/page.jsx`
     - `app/empresas/mago-conferenciante-madrid/page.jsx`
     - `app/mago-madrid/page.jsx`
6. **FICHA-GEO-05 (`app/empresas/mago-cenas-empresa-madrid/page.jsx`)**:
   - Insert GEO extractable fact sheet & formats comparison table before the FAQs section.
7. **FICHA-CRO-03 (`components/CorporateInlineForm.jsx` & `components/Modals.jsx`)**:
   - Ensure all inputs, selects, and textareas have font-size >= 16px on mobile (`text-base sm:text-sm` or `text-base md:text-sm`).
8. **FICHA-CRO-04 (`components/HomeClient.jsx` & `components/Navbar.jsx`)**:
   - Connect mobile hero buttons to dispatch `'open-booking-drawer'`.
   - Register listener in `components/Navbar.jsx` to open `MobileBookingDrawer`.
9. **FICHA-CRO-05 (`components/HomeClient.jsx`)**:
   - Update Hero badge to Q4 seasonal notice: `Campaña Cenas de Empresa & Navidad · Últimas Fechas Q4`.

## Explorer Handoffs to Consult:
- Explorer P1-1: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p1_1\handoff.md` and `analysis.md`
- Explorer P1-2: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p1_2\handoff.md` and `analysis.md`
- Explorer P1-3: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p1_3\handoff.md` and `analysis.md`

## Verification Requirements:
1. `git grep -i "aggregaterating"` -> 0 matches.
2. `git grep -n "34680650993"` -> 0 matches.
3. `npm run build` -> exit code 0 (140 static routes).
4. `node tests/e2e-pipeline.test.mjs` -> 99/99 passed.
5. `npm run seo:pipeline:check` -> exit code 0.
6. Write full report to `.agents/teamwork/worker_p1/handoff.md`.
