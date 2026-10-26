# BRIEFING — 2026-10-25T22:40:00Z

## Mission
Auditoría integral GEO (Generative Engine Optimization) e Indexabilidad para IAs para angelruiz.world, abarcando citabilidad para LLMs, robots.txt/crawlers de IA, llms.txt, sitemaps, grafos de conocimiento/entidades y esquemas Schema.org sin AggregateRating.

## 🔒 My Identity
- Archetype: explorer
- Roles: GEO Specialist, AI Citability Auditor, Schema & Technical Knowledge Graph Analyst
- Working directory: C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_geo
- Original parent: 97be7b5b-b5b9-43bf-b001-9a99e3b60fee
- Milestone: Explorer 2 GEO Audit

## 🔒 Key Constraints
- Read-only investigation — do NOT implement production changes directly
- PROHIBICIÓN ESTRICTA: Cero uso o recomendación de AggregateRating o propiedades de valoración (ratingValue, reviewCount, bestRating, worstRating) en esquemas JSON-LD o contenidos (regla inmutable de GEMINI.md).
- Preserve high-end visual aesthetics, zero invasive cookies/trackers.

## Current Parent
- Conversation ID: 97be7b5b-b5b9-43bf-b001-9a99e3b60fee
- Updated: 2026-10-25T22:40:00Z

## Investigation State
- **Explored paths**: `app/robots.js`, `public/llms.txt`, `public/.well-known/llms.txt`, `public/ai.txt`, `public/AGENTS.md`, `public/pricing.md`, `app/sitemap.js`, `app/layout.jsx`, `app/page.jsx`, `components/LocationPageTemplate.jsx`, `components/BusinessSchema.jsx`, `app/empresas/mago-cenas-empresa-madrid/page.jsx`, `app/empresas/page.jsx`, `app/contratar-mago-madrid/page.jsx`, `app/mago-madrid/page.jsx`, `app/sobre-mi/page.jsx`, `app/valoraciones/page.jsx`, `app/contacto/page.jsx`, `app/blog/[slug]/page.jsx`, `app/panel/page.jsx`.
- **Key findings**:
  1. Strict 0 `AggregateRating` verified across all production code.
  2. Quantitative GEO Score: **81.1 / 100** (Solid baseline with immediate 96+/100 upside).
  3. Technical crawlers: `robots.js` allows 15 bots, but lacks `GoogleOther`, `Amazonbot`, `FacebookBot`, and leaves `/panel` unprotected in `disallow`.
  4. `llms.txt`: Out of sync with `.well-known/llms.txt`, header blockquote is 482 chars (spec says <200 chars), omits `/empresas/mago-cenas-empresa-madrid` and `/contacto`.
  5. Sitemap: `app/sitemap.js` omits `/contacto`.
  6. Schema.org / Entities: Anonymous `provider` on 6 commercial subpages (missing `@id: https://angelruiz.world/#person`); 12 municipalities in `areaServed` lack Wikidata `sameAs` Q-IDs; `#organization` lacks `founder` link; `BusinessSchema.jsx` is dead/orphan code.
  7. Citability: "Ficha Técnica GEO Extractable" missing on `/empresas/mago-cenas-empresa-madrid`.
- **Unexplored areas**: None within the assigned GEO scope. Investigation is 100% complete.

## Key Decisions Made
- Framed 6 concrete, actionable technical task cards in `handoff.md` (GEO-1 through GEO-6) for direct implementer execution.

## Artifact Index
- DISPATCH.md — Task dispatch and assignment
- BRIEFING.md — Persistent context & identity
- progress.md — Liveness heartbeat and investigation progress
- handoff.md — Complete structured 5-component report
