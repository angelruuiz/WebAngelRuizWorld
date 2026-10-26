# Dispatch Log

## 2026-10-25T23:30:52Z
You are the Project Orchestrator for the execution of the 20 technical cards of Plan de Choque 360° in angelruiz.world.

Your assigned working directory is:
`c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\orchestrator_3`

Authoritative User Request:
`c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md` (section `## 2026-10-25T23:29:44Z`).

Technical Backlog Reference:
`c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\orchestrator_2\BACKLOG_TAREAS_EJECUTABLES.md`
Complementary references:
`c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\orchestrator_2\MATRIZ_RESCATE_SERP.md`
`c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\orchestrator_2\CHECKLIST_GEO_AI.md`
`c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\orchestrator_2\INFORME_AUDITORIA_360.md`

MISSION & REQUIREMENTS:
Implement all 20 technical cards organized in 3 sequential phases:
- Phase 1 (P0 - Immediate Critical Fixes):
  1. `FICHA-CRO-01`: Unify WhatsApp number to 34648055636 project-wide (replace 34680650993 in app/contacto/page.jsx, app/mago-close-up-madrid/page.jsx and contact components).
  2. `FICHA-CRO-02`: Primary & secondary CTA above-the-fold in app/empresas/mago-cenas-empresa-madrid/page.jsx.
  3. `FICHA-SEO-01`: Fix misaligned anchor text link in app/empresas/page.jsx:344 directly pointing to /empresas/mago-cenas-empresa-madrid.
  4. `FICHA-SEO-02`: Disambiguate and sync metadata on B2B hub app/empresas/page.jsx.
  5. `FICHA-SEO-03`: Exact SERP snippet lengths for app/empresas/mago-cenas-empresa-madrid/page.jsx (Title <= 60 chars, Desc <= 155 chars).
  * Run verification (npm run build, check AggregateRating, run tests).

- Phase 2 (P1 - High Priority GEO, Citability, Mobile & Sitemap):
  1. `FICHA-GEO-01`: Extend AI crawlers directives (GPTBot, PerplexityBot, ClaudeBot, Applebot-Extended) & disallow /panel in app/robots.js.
  2. `FICHA-GEO-02`: Sync and enrich public/llms.txt and .well-known/llms.txt with dinner landing & canonical facts table.
  3. `FICHA-SEO-04`: Add /contacto & clean redirects in app/sitemap.js.
  4. `FICHA-GEO-03`: Link brand and person entities with Wikidata Q-IDs in app/layout.jsx.
  5. `FICHA-GEO-04`: Unify canonical @id https://angelruiz.world/#person across 6 B2B services.
  6. `FICHA-GEO-05`: Add GEO extractable fact sheet & formats table in dinners landing.
  7. `FICHA-CRO-03`: Fix iOS Safari auto-zoom by ensuring font-size >= 16px (text-base) on mobile inputs/selects.
  8. `FICHA-CRO-04`: Connect mobile Hero with MobileBookingDrawer for 1-tap bookings.
  9. `FICHA-CRO-05`: Subtle seasonal Q4 badge/notice in Home Hero.
  * Run verification (npm run build, check AggregateRating, run tests).

- Phase 3 (P2 - Medium Priority B2B Authority, Perf & Editorial):
  1. `FICHA-CRO-06`: Flexible international phone validation in forms (+ prefix).
  2. `FICHA-CRO-07`: Pre-fill contextual messages on empty WhatsApp links.
  3. `FICHA-CRO-08`: Curate B2B logo bar for corporate affinity.
  4. `FICHA-CRO-09`: Verified B2B testimonial & visual reputation badge without AggregateRating schema.
  5. `FICHA-PERF-01`: Enable AVIF format in next.config.js & optimize image loading.
  6. `FICHA-SEO-05`: Consolidate editorial cannibalization and strengthen internal linking in corporate blog posts.
  * Run verification (npm run build, check AggregateRating, run tests).

ABSOLUTE GUARDRAILS:
- STRICT PROHIBITION: Zero occurrences of `AggregateRating`, `ratingValue`, or `reviewCount` in any JSON-LD schema or meta tags (strict project rule in GEMINI.md).
- Clean Next.js build (`npm run build` exit code 0, 140 static routes).
- Pass tests in `tests/e2e-pipeline.test.mjs` and `npm run seo:pipeline:check`.
- Preserve design and performance metrics.

Maintain your `plan.md` and `progress.md` continuously in `.agents/teamwork/orchestrator_3/`.
When fully implemented and verified, send completion report with all evidence to Sentinel.
