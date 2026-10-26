# BRIEFING — 2026-10-25T23:57:30Z

## Mission
Investigate and draft concrete code changes for FICHA-GEO-03, FICHA-GEO-04, and FICHA-GEO-05 (Schema graph organization/person unification, 12 Wikidata Q-IDs, clean sameAs, Person canonical @id across 6 B2B pages, and GEO extractable fact sheet + formats table in mago-cenas-empresa-madrid).

## 🔒 My Identity
- Archetype: explorer
- Roles: Read-only investigation, analyze problems, synthesize findings, produce structured reports
- Working directory: c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p1_2
- Original parent: b63a6c37-72a1-4436-9631-2613368ee8ff
- Milestone: Sprint GEO-03/04/05 Investigation & Diff Drafting

## 🔒 Key Constraints
- Read-only investigation — do NOT implement directly in project code
- Strict 0 AggregateRating check across all JSON-LD schemas
- Only write metadata, reports, and proposals to own directory (.agents/teamwork/explorer_p1_2/)
- Provide exact line numbers and concrete replacement diffs

## Current Parent
- Conversation ID: b63a6c37-72a1-4436-9631-2613368ee8ff
- Updated: 2026-10-25T23:57:30Z

## Investigation State
- **Explored paths**:
  - `app/layout.jsx`: `#organization` founder `@id`, `areaServed` 12 Wikidata Q-IDs + Móstoles, clean Google `sameAs`. Strict 0 AggregateRating verified.
  - 6 B2B Service pages (`mago-cenas-empresa-madrid`, `mago-ferias-congresos-madrid`, `mago-team-building-madrid`, `mago-para-restaurantes-madrid`, `mago-conferenciante-madrid`, `mago-madrid`): all currently use isolated `{ "@type": "Person", "name": "Ángel Ruiz" }`. Unification to `@id: "https://angelruiz.world/#person"` drafted.
  - `app/empresas/mago-cenas-empresa-madrid/page.jsx`: Line 259-261 identified as exact insertion point for GEO fact sheet & formats comparison table before FAQs.
- **Key findings**: Complete line-level precision and ready-to-apply diffs formulated without touching source code.
- **Unexplored areas**: None within the scope of GEO-03, GEO-04, and GEO-05.

## Key Decisions Made
- All diffs strictly comply with zero `AggregateRating` guardrail.
- Responsive table and fact sheet designed with standard JSX entities to avoid parsing issues.

## Artifact Index
- DISPATCH.md — Incoming task assignments
- BRIEFING.md — Persistent working memory and status
- context.md — Background task context from orchestrator
- analysis.md — Full technical analysis and exact code diffs
- handoff.md — 5-component handoff report for builder/orchestrator
- progress.md — Heartbeat and execution status
