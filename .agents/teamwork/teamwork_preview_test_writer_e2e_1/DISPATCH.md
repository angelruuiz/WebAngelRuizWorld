# Task Assignment: Test Writer (Opaque-Box E2E Test Suite)

## Context & Inputs
- Project Root: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main`
- Original Request: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md` (MANDATORY)
- Project Architecture & Interfaces: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\PROJECT.md`
- Test Infrastructure Specification: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\TEST_INFRA.md`
- Working Directory: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_test_writer_e2e_1`

## Mandatory Integrity Warning (INVIOLABLE)
> DO NOT CHEAT. All tests must be genuine, independent, and opaque-box. DO NOT test against internal mocks that trivially pass. Tests must exercise the CLI and pipeline modules authentically.

## Exclusive Write Ownership
You own and may ONLY modify or create:
- `tests/e2e-pipeline.test.mjs` (and any fixtures in `tests/fixtures/`)
- `TEST_READY.md` (at project root)
DO NOT modify application source code in `app/`, `components/`, `lib/`, or `scripts/`.

## Test Suite Requirements
Build a comprehensive 4-Tier test suite in `tests/e2e-pipeline.test.mjs` executable via `node tests/e2e-pipeline.test.mjs`:
1. **Tier 1: Feature Coverage (≥5 tests per feature, F1-F8)**:
   - CLI help, CLI flag parsing, Scout detectors invocation, Auditor scoring, Executor snapshot creation, Reporter markdown output, Validator zero AggregateRating check, Validator build check.
2. **Tier 2: Boundary & Corner Cases (≥5 tests per feature)**:
   - Empty options, invalid flags, missing files, corrupted frontmatter, boundary scores (exactly 69 rejected, exactly 70 approved), zero opportunities discovered case, non-existent target files.
3. **Tier 3: Cross-Feature Combinations**:
   - Scout discovery → Auditor veto → Executor skip verification.
   - Scout discovery → Auditor approval → Executor dry-run (no file modified).
   - Hard Veto `VETO_AGGREGATE_RATING` triggered on simulated candidate.
   - Hard Veto `VETO_NON_MADRID_GEOGRAPHY` triggered on Barcelona candidate.
   - Automatic snapshot creation and validation rollback on simulated failure.
4. **Tier 4: Real-World Scenarios (S1-S5 from TEST_INFRA.md)**:
   - Scenario S1: Full end-to-end dry-run producing valid `.seo-pipeline/reports/latest.md`.
   - Scenario S2: Checking zero `AggregateRating` guarantee site-wide.
   - Scenario S3: Checking report markdown structure (contains Executive Summary, Auditor Matrix, Validation Certificate).
   - Scenario S4: Checking `--check` mode exits 0 when healthy.
   - Scenario S5: Verifying package.json has `"seo:pipeline"` script.

When all tests are implemented, execute the test suite, verify results, and generate `TEST_READY.md` at project root with the coverage summary table. Write your completion report to `handoff.md` in your working directory.


## 2026-10-06T23:10:28Z
You are Test Writer 1. Your task is defined in:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_test_writer_e2e_1\DISPATCH.md

You MUST read C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md first.
DO NOT CHEAT. All tests must be genuine, independent, and opaque-box. DO NOT test against internal mocks that trivially pass. Tests must exercise the CLI and pipeline modules authentically.

Build the comprehensive 4-Tier opaque-box test suite in `tests/e2e-pipeline.test.mjs` according to `TEST_INFRA.md`:
- Tier 1: Feature coverage (≥5 tests per feature, F1-F8)
- Tier 2: Boundary & corner cases (≥5 tests per feature)
- Tier 3: Combinatorial flag and workflow interactions
- Tier 4: Real-world application scenarios (S1-S5)

Execute the test suite, publish `TEST_READY.md` at project root with the coverage summary, write your completion report to `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_test_writer_e2e_1\handoff.md`, and notify me when done via send_message.
