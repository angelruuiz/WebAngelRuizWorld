# Concrete Execution Plan: Plan de Choque 360° (20 Fichas Técnicas)

## Objective
Implement and verify all 20 technical cards of Plan de Choque 360° for angelruiz.world, focusing on corporate dinners and Christmas events in Madrid (Q4), maintaining strict compliance with the zero-AggregateRating rule, ensuring clean Next.js builds (140 static routes), and passing all E2E pipeline checks.

---

## Architecture & Phased Milestones

### Milestone 1: Phase 1 (P0 — Immediate Critical Fixes)
1. **FICHA-CRO-01**: Unify WhatsApp number to `34648055636` across project. Replace `34680650993` in `app/empresas/page.jsx`, `app/particulares/bodas/page.jsx`, `app/contacto/page.jsx`, `app/mago-close-up-madrid/page.jsx`, etc.
2. **FICHA-CRO-02**: Insert Primary & Secondary CTA above-the-fold in `app/empresas/mago-cenas-empresa-madrid/page.jsx`.
3. **FICHA-SEO-01**: Fix anchor text misdirection on `app/empresas/page.jsx:344` pointing to `/empresas/mago-cenas-empresa-madrid`.
4. **FICHA-SEO-02**: Disambiguate B2B hub metadata in `app/empresas/page.jsx` (remove "y Cenas" to prevent cannibalization).
5. **FICHA-SEO-03**: Optimize SERP snippet lengths for `app/empresas/mago-cenas-empresa-madrid/page.jsx` (Title <= 60 chars, Desc <= 155 chars).
- **Verification Gate**:
  - `npm run build` (exit code 0, 140 static routes).
  - `git grep -i "aggregaterating"` (0 occurrences).
  - `git grep -n "34680650993"` (0 occurrences).
  - `node tests/e2e-pipeline.test.mjs` & `npm run seo:pipeline:check`.
  - Subagents: Worker -> 2 Reviewers + Challenger + Auditor -> Gate Pass.

---

### Milestone 2: Phase 2 (P1 — High Priority GEO, Citability, Mobile & Sitemap)
1. **FICHA-GEO-01**: Extend AI crawlers (`GoogleOther`, `Amazonbot`, `FacebookBot`, `Diffbot`) & block `/panel` in `app/robots.js`.
2. **FICHA-GEO-02**: Synchronize and enrich `public/llms.txt` and `public/.well-known/llms.txt` with dinners landing and Key Facts table.
3. **FICHA-SEO-04**: Add `/contacto` and clean 307 redirect (`/particulares`) in `app/sitemap.js`.
4. **FICHA-GEO-03**: Semantic entity enrichment with Wikidata Q-IDs & Google panel URL cleanup in `app/layout.jsx`.
5. **FICHA-GEO-04**: Unify canonical Person `@id` `https://angelruiz.world/#person` across 6 B2B service pages.
6. **FICHA-GEO-05**: GEO extractable fact sheet & formats table in `app/empresas/mago-cenas-empresa-madrid/page.jsx`.
7. **FICHA-CRO-03**: Eradicate iOS Safari auto-zoom (ensure `fontSize >= 16px` / `text-base` in mobile inputs/selects).
8. **FICHA-CRO-04**: Connect mobile Hero triggers with `MobileBookingDrawer` in `components/HomeClient.jsx`.
9. **FICHA-CRO-05**: Subtle seasonal Q4 urgency notice/badge in Home Hero.
- **Verification Gate**:
  - `npm run build` (exit code 0, 140 static routes).
  - `git grep -i "aggregaterating"` (0 occurrences).
  - `node tests/e2e-pipeline.test.mjs` & `npm run seo:pipeline:check`.
  - Subagents: Worker -> 2 Reviewers + Challenger + Auditor -> Gate Pass.

---

### Milestone 3: Phase 3 (P2 — Medium Priority B2B Authority, Performance & Editorial)
1. **FICHA-CRO-06**: Flexible international phone validation (allow `+` prefix and lengths up to 16 chars).
2. **FICHA-CRO-07**: Pre-fill contextual message in empty WhatsApp links (`/contratar-mago-madrid`, `/contacto/DigitalCard.jsx`).
3. **FICHA-CRO-08**: Curate corporate B2B logos in `components/CorporateLogosBar.jsx` (filter out local political/party entities).
4. **FICHA-CRO-09**: Verified Movistar Estudiantes corporate testimonial & visual Google Reviews badge (0 AggregateRating).
5. **FICHA-PERF-01**: Enable AVIF format in `next.config.js` and purge dead code (`components/BusinessSchema.jsx`).
6. **FICHA-SEO-05**: Consolidate editorial cannibalization in corporate dinner blog posts.
- **Verification Gate**:
  - `npm run build` (exit code 0, 140 static routes).
  - `git grep -i "aggregaterating"` (0 occurrences).
  - `node tests/e2e-pipeline.test.mjs` & `npm run seo:pipeline:check`.
  - Subagents: Worker -> 2 Reviewers + Challenger + Auditor -> Gate Pass.

---

## Gate & Integrity Rules
- Zero tolerance for `AggregateRating` in JSON-LD or meta tags.
- Dispatch-only orchestrator: all file edits to source code, builds, and test runs are performed exclusively by subagents.
- Gate evaluation strictly requires: Reviewer approval, Challenger confirmation, and Auditor clean integrity verdict.
