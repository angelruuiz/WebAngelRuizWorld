# BRIEFING — 2026-10-25T23:44:00Z

## Mission
Implement Phase 1 (P0) critical tasks in angelruiz.world: FICHA-CRO-01, FICHA-CRO-02, FICHA-SEO-01, FICHA-SEO-02, FICHA-SEO-03 with 100% build pass, 0 AggregateRating violations, and full test suite verification.

## 🔒 My Identity
- Archetype: worker
- Roles: implementer, qa, specialist
- Working directory: c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p0
- Original parent: b63a6c37-72a1-4436-9631-2613368ee8ff
- Milestone: Phase 1 (P0) Implementation

## 🔒 Key Constraints
- Strict prohibition: ZERO instances of `AggregateRating`, `ratingValue`, or `reviewCount` in any JSON-LD schema or meta tag.
- WhatsApp number unification: replace `34680650993` with `34648055636`.
- Minimal change principle: only modify required files and lines, preserve existing styles and comments.
- Verification: clean Next.js build (exit 0, 140 static routes), `tests/e2e-pipeline.test.mjs` (100% pass), `npm run seo:pipeline:check`.

## Current Parent
- Conversation ID: b63a6c37-72a1-4436-9631-2613368ee8ff
- Updated: 2026-10-25T23:44:00Z

## Task Summary
- **What to build**:
  - `FICHA-CRO-01`: Unify WhatsApp number to `34648055636` in `app/empresas/page.jsx:266` and `app/particulares/bodas/page.jsx:225`.
  - `FICHA-CRO-02`: Add dual above-the-fold CTA in `app/empresas/mago-cenas-empresa-madrid/page.jsx` and add `id="presupuesto-empresa"` to section at line 282.
  - `FICHA-SEO-01`: Fix anchor text in `app/empresas/page.jsx:344` pointing "mago para cenas de empresa" to `/empresas/mago-cenas-empresa-madrid` and keep "magia en restaurantes" pointing to `/empresas/mago-para-restaurantes-madrid`.
  - `FICHA-SEO-02`: Disambiguate B2B Hub metadata in `app/empresas/page.jsx` (Title <= 60 chars, Desc <= 155 chars, remove cannibalizing keyword, sync OG/Twitter).
  - `FICHA-SEO-03`: Optimize SERP snippet in `app/empresas/mago-cenas-empresa-madrid/page.jsx` (Title <= 60 chars, Desc <= 155 chars).
- **Success criteria**: All 5 tasks implemented cleanly, 0 AggregateRating matches, 0 old WhatsApp matches, Next.js build passes cleanly, E2E tests pass 100%.

## Change Tracker
- **Files modified**:
  - `app/empresas/page.jsx`: Updated metadata (FICHA-SEO-02), WhatsApp number (FICHA-CRO-01), anchor text (FICHA-SEO-01)
  - `app/particulares/bodas/page.jsx`: Updated WhatsApp number (FICHA-CRO-01)
  - `app/empresas/mago-cenas-empresa-madrid/page.jsx`: Added dual CTA block & section id (FICHA-CRO-02), updated metadata snippet (FICHA-SEO-03)
  - `tests/verify-p0.mjs`: Added automated regression verification script for P0 tasks
- **Build status**: PASS (Next.js build exited 0, 140/140 static routes)
- **Pending issues**: None

## Quality Status
- **Build/test result**: PASS
  - `git grep -n "34680650993"` in code: 0 matches
  - `git grep -i "aggregaterating"` in schemas/code: 0 matches
  - `npm run build`: Exit 0 (140 static routes)
  - `node tests/e2e-pipeline.test.mjs`: 99/99 passed (0 failures)
  - `npm run seo:pipeline:check`: Passed with 0 violations
  - `node tests/verify-p0.mjs`: All assertions passed
- **Lint status**: Clean (Next.js build validation passed)
- **Tests added/modified**: `tests/verify-p0.mjs` created and passing

## Loaded Skills
- None explicitly loaded for this run.

## Artifact Index
- `.agents/teamwork/worker_p0/DISPATCH.md` — Incoming task prompt
- `.agents/teamwork/worker_p0/context.md` — Task definition and explorer paths
- `.agents/teamwork/worker_p0/progress.md` — Liveness and step tracking
- `.agents/teamwork/worker_p0/handoff.md` — Final deliverable report
