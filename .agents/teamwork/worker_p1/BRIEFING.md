# BRIEFING — 2026-10-25T23:59:19Z

## Mission
Implement all 9 planned sprint tasks (FICHA-GEO-01 through 05, FICHA-SEO-04, FICHA-CRO-03 through 05) with 100% integrity, zero AggregateRating, clean build (140 static routes), and passing verification suites.

## 🔒 My Identity
- Archetype: worker
- Roles: implementer, qa, specialist
- Working directory: c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p1
- Original parent: b63a6c37-72a1-4436-9631-2613368ee8ff
- Milestone: Sprint 1 (P1) Implementation & Verification

## 🔒 Key Constraints
- PROHIBICIÓN ESTRICTA: NUNCA USAR `AggregateRating`, `ratingValue`, o `reviewCount` en ningún esquema JSON-LD o meta tag.
- ZERO occurrences of `AggregateRating` (git grep -i "aggregaterating" must return 0).
- ZERO occurrences of phone number without country prefix or obsolete formats (`git grep -n "34680650993"` must return 0).
- Keep `public/llms.txt` and `public/.well-known/llms.txt` 100% byte identical.
- Build must pass cleanly (`npm run build`, 140 static routes).
- Tests must pass cleanly (`node tests/e2e-pipeline.test.mjs`, `npm run seo:pipeline:check`).
- Minimal change principle: modify only target files, preserve unrelated logic and comments.

## Current Parent
- Conversation ID: b63a6c37-72a1-4436-9631-2613368ee8ff
- Updated: 2026-10-26T00:08:40Z

## Task Summary
- **What to build**: 9 tasks covering AI search bots in robots.js, full llms.txt synchronization, sitemap cleanup, layout organization schema enhancement (founder, 13 Wikidata Q-IDs, clean sameAs), B2B schema provider unification across 6 pages, GEO fact sheet on cenas de empresa, 16px iOS input zoom fix, mobile hero booking drawer event wiring, and Q4 seasonal notice hero badge.
- **Success criteria**: All 9 tasks implemented, all verification checks pass, handoff report generated.
- **Interface contracts**: PROJECT.md / SCOPE.md
- **Code layout**: Next.js App Router project in AngelRuizWorld-main

## Key Decisions Made
- [Initial]: Follow exact diff specifications established by explorers (explorer_p1_1, explorer_p1_2, explorer_p1_3).
- [Architecture]: Added global event listener for 'open-booking-drawer' in Navbar.jsx and preset synchronizer in MobileBookingDrawer.jsx to enable 1-touch mobile conversion from Hero.
- [GEO/Citability]: Enriched llms.txt (<200 char blockquote, structured Key Facts and Contact tables) and synced byte-for-byte to both root and .well-known.

## Artifact Index
- `.agents/teamwork/worker_p1/DISPATCH.md` — Assigned instructions
- `.agents/teamwork/worker_p1/BRIEFING.md` — Persistent agent memory
- `.agents/teamwork/worker_p1/progress.md` — Liveness & progress tracker
- `.agents/teamwork/worker_p1/handoff.md` — Final 5-component handoff report

## Change Tracker
- **Files modified**:
  - `app/robots.js`: Added GoogleOther, Amazonbot, FacebookBot, Diffbot to AI_BOTS; added /panel to all 3 disallow arrays.
  - `public/llms.txt` & `public/.well-known/llms.txt`: Complete unified content, SHA256 identical, <200 char summary.
  - `app/sitemap.js`: Replaced /particulares with /contacto (priority 0.75, monthly).
  - `app/layout.jsx`: Added founder @id to #organization, 13 Wikidata Q-IDs to areaServed, cleaned Google sameAs URLs.
  - `app/empresas/mago-cenas-empresa-madrid/page.jsx`: Canonical Person provider in schema; added GEO fact sheet & formats table.
  - `app/empresas/mago-ferias-congresos-madrid/page.jsx`: Canonical Person provider in schema.
  - `app/empresas/mago-team-building-madrid/page.jsx`: Canonical Person provider in schema.
  - `app/empresas/mago-para-restaurantes-madrid/page.jsx`: Canonical Person provider in schema.
  - `app/empresas/mago-conferenciante-madrid/page.jsx`: Canonical Person provider in schema.
  - `app/mago-madrid/page.jsx`: Canonical Person provider in schema.
  - `components/CorporateInlineForm.jsx`: Applied `text-base sm:text-sm` across all 7 form inputs/selects/textareas.
  - `components/Modals.jsx`: Applied `text-base md:text-sm` across all 6 form inputs/selects/textareas.
  - `components/HomeClient.jsx`: Connected mobile hero buttons to trigger 'open-booking-drawer'; updated Hero badge to Q4 seasonal notice.
  - `components/Navbar.jsx`: Added companion event listener for 'open-booking-drawer'.
  - `components/MobileBookingDrawer.jsx`: Added event listener to auto-select event preset and open step 2.
- **Build status**: PASS (Exit Code 0, 140/140 static routes compiled)
- **Pending issues**: None

## Quality Status
- **Build/test result**: PASS
  - `npm run build`: Exit 0 (140/140 routes static)
  - `node tests/e2e-pipeline.test.mjs`: 99/99 passed (100%)
  - `npm run seo:pipeline:check`: PASSED (0 ratings, 0 trackers)
  - `git grep -i "aggregaterating"`: 0 matches in source/content
  - `git grep -n "34680650993"`: 0 matches in source/content
- **Lint status**: PASS (Next.js build linting & type checks clean)
- **Tests added/modified**: Existing test suites verified against all changes

## Loaded Skills
- None
