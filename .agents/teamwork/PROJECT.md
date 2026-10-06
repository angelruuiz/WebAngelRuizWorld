# Project: Autonomous 3-Agent SEO/GEO Optimization CLI Pipeline for angelruiz.world

## Architecture
The pipeline is an autonomous 3-agent CLI system designed for continuous discovery, critical business auditing, safe automated modification, and rigorous validation of SEO and GEO enhancements for `angelruiz.world`.

```
                        ┌───────────────────────────────┐
                        │      CLI Entry Point          │
                        │ (scripts/seo-geo-pipeline.js) │
                        └───────────────┬───────────────┘
                                        │
                                        ▼
    ┌───────────────────────────────────────────────────────────────────────┐
    │ AGENT 1: OPPORTUNITY SCOUT (scripts/pipeline/scout.js)                │
    │ Scans codebase across 6 detector modules:                             │
    │ 1. Metadata & Titles     2. Schema Health (0 AggregateRating)         │
    │ 3. GEO & llms.txt Sync   4. FAQ Gaps & Rich Schemas                   │
    │ 5. Madrid Geo Entities   6. Topic Cluster Interlinking                │
    └───────────────────────────────────┬───────────────────────────────────┘
                                        │
                                        ▼
    ┌───────────────────────────────────────────────────────────────────────┐
    │ AGENT 2: BUSINESS AUDITOR (scripts/pipeline/auditor.js)               │
    │ Filters opportunities through Ángel Ruiz's Madrid event business:     │
    │ - 5 Hard Veto Gates (0 AggregateRating, 0 Trackers, Perf, Madrid, ROI)│
    │ - 4-Dimension Rubric (Commercial 35, Madrid 25, Luxury 20, Safety 20) │
    │ - Verdict: APPROVED (Score >= 70 & Veto Pass) vs REJECTED             │
    │ - Explicit business justification for every decision                  │
    └───────────────────────────────────┬───────────────────────────────────┘
                                        │
                                        ▼
    ┌───────────────────────────────────────────────────────────────────────┐
    │ AGENT 3: AUTOMATED EXECUTOR & REPORTER (scripts/pipeline/)            │
    │ 1. executor.js: Safe snapshot backups, idempotent file mutations,     │
    │    and automatic rollback on validation failure                       │
    │ 2. reporter.js: Generates full Markdown proposal/execution reports    │
    │    in .seo-pipeline/reports/ with before/after diffs & metrics        │
    │ 3. validator.js: Post-execution harness verifying:                    │
    │    - Zero AggregateRating occurrences (git grep / regex)              │
    │    - Next.js build compilation (npm run build exit code 0)            │
    │    - Revert on failure                                                │
    └───────────────────────────────────────────────────────────────────────┘
```

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| F1 | CLI Orchestrator Entrypoint | Executable `scripts/seo-geo-pipeline.js` supporting `--dry-run`, `--auto-apply`, `--interactive`, `--check`, `--verbose`, `--help`. Integration with `package.json` script `npm run seo:pipeline`. | M1 | Survey |
| F2 | Pipeline Modular Engine Architecture | Clean CommonJS modules in `scripts/pipeline/` (`scout.js`, `auditor.js`, `executor.js`, `reporter.js`, `validator.js`) utilizing Node standard libraries and `gray-matter`. | M1 | Survey |
| F3 | Opportunity Scout (6 Detectors) | Multi-vector scanner: metadata/titles, schema health, GEO `llms.txt` sync, FAQ gaps, Madrid semantic entities, and topic cluster interlinking across 74 blog posts and landing pages. | M1 | Survey |
| F4 | Business Auditor & Conversion Filter | Evaluates opportunities against Ángel Ruiz's Madrid magic events business with 5 Hard Veto Gates and a 100-point rubric. Generates strict APPROVED/REJECTED decisions with commercial justifications. | M1 | Survey |
| F5 | Safe Applicator & Snapshot Engine | Pre-execution backup snapshots in `.seo-pipeline/backups/`, idempotent modifications to frontmatter, markdown, `llms.txt`, and schemas, with automatic rollback. | M1 | Survey |
| F6 | Structured Markdown Report Generator | Produces timestamped before/after diff reports in `.seo-pipeline/reports/` and updates `latest.md`, detailing evaluated, approved, and rejected opportunities with justifications and validation certificate. | M1 | Survey |
| F7 | Post-Execution Validation Harness | Automated checks: strict zero `AggregateRating` validation (`git grep -i "aggregaterating"` 0 matches in code) + clean Next.js build verification (`npm run build` exit code 0). Automatic rollback if failed. | M1 | Survey |
| F8 | Guardrails & Zero-Regression Compliance | Inviolable enforcement: 0 AggregateRating in schemas, 0 third-party cookies or intrusive trackers, 100% preservation of luxury dark/gold aesthetic and Core Web Vitals. | M1 | Survey |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | 3-Agent SEO/GEO Pipeline Implementation | Complete pipeline implementation: `scripts/seo-geo-pipeline.js`, `scripts/pipeline/*.js`, and `package.json` script `seo:pipeline`. | None | DONE |
| M_TEST | Requirement-Driven Opaque-Box E2E Test Suite | Comprehensive 4-tier test harness in `tests/e2e-pipeline.test.mjs` and publication of `TEST_READY.md`. | M1 | DONE |
| M_FINAL | Full Integration, 100% E2E Test Pass & Coverage Hardening | Run all E2E test tiers, pass 100% tests, adversarial hardening, and final verification report. | M1, M_TEST | DONE |

## Interface Contracts

### Pipeline Coordinator ↔ Sub-Modules
```typescript
interface Opportunity {
  id: string;                     // e.g., "GEO-LLMS-001", "META-TITLE-002"
  type: string;                   // "metadata" | "schema" | "llms" | "faq" | "madrid_geo" | "interlinking"
  targetFile: string;             // relative path to file, e.g. "content/blog/post.md"
  title: string;                  // brief summary of opportunity
  description: string;            // detailed explanation
  proposedChange: {
    kind: "frontmatter" | "append" | "replace_block" | "custom";
    payload: any;                 // structured change data
  };
  impactArea: "seo" | "geo_ai" | "conversion";
}

interface AuditEvaluation {
  opportunityId: string;
  verdict: "APPROVED" | "REJECTED";
  totalScore: number;             // 0 to 100
  scoreBreakdown: {
    commercialIntent: number;     // max 35
    madridGeoFit: number;         // max 25
    brandPrestigeFit: number;     // max 20
    technicalSafety: number;      // max 20
  };
  vetoTriggered?: string;         // e.g., "VETO_AGGREGATE_RATING"
  businessJustification: string;
}

interface ExecutionResult {
  appliedCount: number;
  skippedCount: number;
  backupPath: string;
  changes: Array<{
    opportunityId: string;
    targetFile: string;
    beforeSnippet: string;
    afterSnippet: string;
    diff: string;
    status: "APPLIED" | "SKIPPED" | "FAILED";
  }>;
  validationPassed: boolean;
  rollbackTriggered: boolean;
}
```

## Code Layout
- `scripts/seo-geo-pipeline.js`: Main CLI executable entry point.
- `scripts/pipeline/scout.js`: Agent 1 Opportunity Scout.
- `scripts/pipeline/auditor.js`: Agent 2 Business Auditor & Rubric.
- `scripts/pipeline/executor.js`: Agent 3 Safe Applicator & Rollback.
- `scripts/pipeline/reporter.js`: Agent 3 Markdown Report Generator.
- `scripts/pipeline/validator.js`: Agent 3 Post-Execution Validator.
- `.seo-pipeline/reports/`: Generated historical and latest Markdown reports.
- `.seo-pipeline/backups/`: Pre-execution snapshot backups.
- `tests/e2e-pipeline.test.mjs`: Opaque-box E2E test suite.
