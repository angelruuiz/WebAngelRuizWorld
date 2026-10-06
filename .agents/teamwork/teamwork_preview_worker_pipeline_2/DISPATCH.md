# Task Assignment: Worker 2 (CLI Flag Edge Cases Remediation)

## Context & Inputs
- Project Root: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main`
- Original Request: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md` (MANDATORY)
- Project Architecture: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\PROJECT.md`
- Challenger 1 Feedback: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_challenger_1\handoff.md`
- Working Directory: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_worker_pipeline_2`

## Mandatory Integrity Warning (INVIOLABLE)
> DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Remediation Objectives in `scripts/seo-geo-pipeline.js`
1. **Fix `--dry-run` vs `--auto-apply` Precedence**:
   Ensure that whenever `--dry-run` or `--report-only` is provided, it ALWAYS guarantees 0 file mutations.
   If both `--dry-run` and `--auto-apply` are passed, `--dry-run` MUST take absolute precedence (safety override) or print an error and refuse to apply mutations. `shouldApply` must NEVER be true when `--dry-run` or `--report-only` is in `args`.
2. **Fix `--limit 0` Handling**:
   Ensure `parsedLimit >= 0` is accepted so that `--limit 0` sets `limit = 0` (applying 0 items) without defaulting to 5.
3. **Ensure Clean Working Tree**:
   Make sure all git working tree files are clean (`git status --short`).
4. **Run Verification Commands**:
   - `node tests/e2e-pipeline.test.mjs` (must pass 99/99)
   - `node tests/adversarial-challenger-1.test.mjs` (must pass 21/21)
   - `node scripts/seo-geo-pipeline.js --dry-run --auto-apply --skip-build` (must mutate 0 files)
   - `node scripts/seo-geo-pipeline.js --limit 0` (must respect limit 0)
   - `git grep -i "aggregaterating" -- app/ components/ lib/ public/ scripts/` (0 matches)
   - `npm run build` (exit code 0)

Write your complete results to `handoff.md` in your working directory and notify me when done via `send_message`.

## 2026-10-06T23:36:42Z
You are Worker 2. Your task is defined in:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_worker_pipeline_2\DISPATCH.md

You MUST read C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md first.
DO NOT CHEAT. All implementations must be genuine.

Fix the two CLI flag edge cases identified by Challenger 1 in `scripts/seo-geo-pipeline.js`:
1. Enforce absolute precedence of `--dry-run` / `--report-only` over `--auto-apply` so that 0 mutations ever occur when `--dry-run` is present.
2. Fix `--limit 0` parsing so that `limit = 0` is respected (applying 0 items) instead of defaulting to 5.
Ensure git working tree is clean.
Verify with all test suites (`e2e-pipeline.test.mjs`, `adversarial-challenger-1.test.mjs`), `git grep` 0 AggregateRating check, and `npm run build`.
Write your completion report to `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_worker_pipeline_2\handoff.md` and notify me via send_message.
