# Scope: Auditoría Integral 360° y Plan de Choque angelruiz.world

## Architecture & Decomposition
Transformación de `angelruiz.world` en una máquina de captación y cierre de contrataciones de eventos (foco prioritario: Cenas de Empresa, Eventos Corporativos y Navidad en Madrid), maximizando SEO en Google, citabilidad en IAs (ChatGPT, Perplexity, Gemini, Claude, Copilot) y CRO a WhatsApp con 0 regresiones de rendimiento y estricto 0 AggregateRating.

```
                           ┌───────────────────────────────────────────────┐
                           │          Project Orchestrator (Orch 2)        │
                           └───────────────────────┬───────────────────────┘
                                                   │
        ┌──────────────────────────────────────────┴──────────────────────────────────────────┐
        │ PHASE 1: PARALLEL 360° EXPLORATION (Deep Technical Investigations)                  │
        ├─────────────────────────────┬─────────────────────────────┬─────────────────────────┤
        ▼                             ▼                             ▼                         ▼
  [Explorer 1: SEO]             [Explorer 2: GEO]             [Explorer 3: CRO]         [Explorer 4: Perf]
  - 140 static routes           - IA crawlers (robots.txt)    - Conversion funnel       - Next.js build & bundle
  - Cannibalization audit       - llms.txt & citability       - Mobile UX & friction    - CWV (LCP, INP, CLS)
  - SERP P2 rescue (11-20)      - Schema.org (0 rating)       - WhatsApp CTAs           - Image & font assets
  - Snippets & titles           - Brand entity graph          - Social proof & urgency  - Script blocking
        │                             │                             │                         │
        └─────────────────────────────┼─────────────────────────────┴─────────────────────────┘
                                      │
                                      ▼
        ┌─────────────────────────────────────────────────────────────────────────────────────┐
        │ PHASE 2: SYNTHESIS & ACTIONABLE BACKLOG (Worker Generation)                         │
        │ Deliverables:                                                                       │
        │ 1. INFORME_AUDITORIA_360.md (0-100 scores across 4 categories)                      │
        │ 2. MATRIZ_RESCATE_SERP.md (Priority keywords 11-20 with snippet/interlink fixes)    │
        │ 3. CHECKLIST_GEO_AI.md (AI bots, llms.txt, citability recommendations)             │
        │ 4. BACKLOG_TAREAS_EJECUTABLES.md (>= 10 detailed technical task cards)              │
        └─────────────────────────────────────┬───────────────────────────────────────────────┘
                                              │
                                              ▼
        ┌─────────────────────────────────────────────────────────────────────────────────────┐
        │ PHASE 3: VERIFICATION GATE (Reviewer, Challenger, Forensic Auditor)                 │
        │ - Reviewer: Verifies completeness, accuracy, actionable depth, no vague advice      │
        │ - Challenger: Validates Next.js build (`npm run build`), verifies code paths        │
        │ - Forensic Auditor: Strict 0 AggregateRating check, zero cheat/facade enforcement   │
        └─────────────────────────────────────────────────────────────────────────────────────┘
```

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| F1 | SEO On-Page, Keywords & Cannibalization | Full audit of ~140 routes, `/empresas` vs `/empresas/mago-cenas-empresa-madrid` vs blog, duplicate/truncated snippets, internal link architecture. | M1 | Survey |
| F2 | SERP Rescue Matrix (Positions 11–20) | Identification of high-intent queries stuck on page 2 (Madrid corporate/Christmas magic) with explicit snippet and internal linking action plan. | M1 | Survey |
| F3 | GEO & AI Search Citability | Citability audit for ChatGPT Search, Perplexity, Gemini, Copilot; `robots.txt`, `llms.txt`, knowledge graph entity clarity. | M2 | Survey |
| F4 | Schema.org Structured Data Audit | Validation of `ProfessionalService`, `FAQPage`, `BreadcrumbList`, etc. with STRICT ZERO `AggregateRating`. | M2 | Survey |
| F5 | CRO, Mobile UX & Closing Psychology | Mobile funnel friction, WhatsApp CTA hierarchy, seasonal urgency (Q4 Christmas/company dinners), social proof, pricing clarity. | M3 | Survey |
| F6 | Technical Performance & PageSpeed Insights | Next.js architecture, Core Web Vitals (LCP, INP, CLS), blocking scripts, image optimization, zero performance regressions. | M4 | Survey |
| F7 | Actionable Task Backlog (>=10 Cards) | At least 10 production-ready technical cards (file, issue, exact code/content fix, business impact, verification criteria). | M5 | Survey |
| F8 | Quality & Forensic Verification Gate | Full passing gate: Reviewer APPROVE, Challenger PASS, Forensic Auditor CLEAN (0 AggregateRating, clean Next.js build). | M6 | Survey |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Deep Explorations (SEO, GEO, CRO, Performance) | Dispatch parallel specialized explorers to audit code, routes, schema, CRO and performance. | None | DONE |
| M2 | Synthesis & Deliverables Formulation | Synthesize audit into 4 master documents: Audit Report, SERP Matrix, GEO Checklist, Task Backlog. | M1 | DONE |
| M3 | Rigorous Verification & Forensic Audit | Reviewer evaluation, Challenger verification (`npm run build`), Forensic Auditor (0 AggregateRating). | M2 | DONE |
| M4 | Final Delivery & Parent Handoff | Consolidate final report and submit to parent orchestrator. | M3 | IN_PROGRESS |

## Key Guardrails & Constraints
- ZERO `AggregateRating` under any circumstances (neither in schemas nor in recommendations).
- Clean Next.js build (`npm run build` exit code 0).
- Zero performance regressions.
