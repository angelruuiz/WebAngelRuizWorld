# E2E Test Infra: Autonomous 3-Agent SEO/GEO Pipeline

## Test Philosophy
- **Requirement-driven & Opaque-box**: Derived directly from `ORIGINAL_REQUEST.md` and `PROJECT.md`. Tests exercise the CLI as an external caller (`node scripts/seo-geo-pipeline.js` and `npm run seo:pipeline`).
- **Methodology**: Category-Partition + Boundary Value Analysis (BVA) + Pairwise Combinations + Real-World Workloads.
- **Zero-Tolerance Enforcements**:
  1. Strict 0 `AggregateRating` in all outputs and active source files.
  2. Zero cookies or third-party tracking scripts added.
  3. Clean Next.js build compilation (`npm run build` exit code 0).
  4. Idempotent and reversible operations (snapshots and rollbacks).

## Feature Inventory Coverage Matrix
| # | Feature | Requirement Source | Tier 1 (Coverage) | Tier 2 (Boundary) | Tier 3 (Cross-Feature) | Tier 4 (Scenario) |
|---|---------|-------------------|:-----------------:|:-----------------:|:----------------------:|:-----------------:|
| F1 | CLI Entrypoint & Flag Parsing | ORIGINAL_REQUEST §R3 | 5 tests | 5 tests | ✓ | ✓ |
| F2 | Modular Engine Architecture | ORIGINAL_REQUEST §R1 | 5 tests | 5 tests | ✓ | ✓ |
| F3 | Opportunity Scout (6 Detectors) | ORIGINAL_REQUEST §R1 | 5 tests | 5 tests | ✓ | ✓ |
| F4 | Business Auditor & Conversion Filter | ORIGINAL_REQUEST §R1 | 5 tests | 5 tests | ✓ | ✓ |
| F5 | Safe Applicator & Snapshot Engine | ORIGINAL_REQUEST §R3 | 5 tests | 5 tests | ✓ | ✓ |
| F6 | Structured Markdown Report Generator | ORIGINAL_REQUEST §R1, R3 | 5 tests | 5 tests | ✓ | ✓ |
| F7 | Post-Execution Validation Harness | ORIGINAL_REQUEST §R3 | 5 tests | 5 tests | ✓ | ✓ |
| F8 | Guardrails & Zero-Regression | ORIGINAL_REQUEST §R2 | 5 tests | 5 tests | ✓ | ✓ |

## Test Architecture
- **Test Runner**: Node.js test runner / standalone ESM test runner script (`node tests/e2e-pipeline.test.mjs` or `npm test`).
- **Pass/Fail Semantics**: Process exit code 0 on all tests passed; exit code 1 on any assertion failure with detailed diagnostics.
- **Test Fixtures**: Isolated mock markdown files and temporary snapshot environments to verify dry-run, apply, rollback, and vetoes without polluting production content.

## Real-World Application Scenarios (Tier 4)
| # | Scenario | Features Exercised | Expected Outcome |
|---|----------|--------------------|------------------|
| S1 | Autonomous Run (`--auto-apply`) on clean codebase | F1, F2, F3, F4, F5, F6, F7, F8 | Scout discovers candidates, Auditor filters (approving valid Madrid conversion items and rejecting weak/vetoed ones), Executor safely applies changes, Validator runs 0 AggregateRating check + clean build, Markdown report generated in `.seo-pipeline/reports/`. |
| S2 | Dry-Run Proposal Mode (`--dry-run`) | F1, F3, F4, F6, F8 | Scout & Auditor run; full report written to `.seo-pipeline/reports/latest.md`; 0 files modified; exit code 0. |
| S3 | Hard Veto Trigger (`AggregateRating` injection attempt) | F3, F4, F7, F8 | Candidate with `AggregateRating` is instantly REJECTED with `VETO_AGGREGATE_RATING`. If forced, Executor/Validator triggers immediate rollback and exits with error. |
| S4 | Build Failure Simulated Rollback | F5, F7, F8 | An invalid change causing build error triggers automatic snapshot restoration, leaving all files in original state. |
| S5 | Verification Mode (`--check`) | F1, F4, F7, F8 | Fast CI health check verifying 0 AggregateRating and current SEO hygiene. |

## Coverage Thresholds
- Tier 1: ≥5 test cases per feature (40 tests minimum across 8 features)
- Tier 2: ≥5 boundary & corner cases per feature (40 tests minimum)
- Tier 3: Combinatorial flag and workflow interactions (≥8 tests)
- Tier 4: ≥5 realistic end-to-end workflow application scenarios
