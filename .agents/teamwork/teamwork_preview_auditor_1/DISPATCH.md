# Task Assignment: Forensic Auditor (Integrity Verification)

## Context & Inputs
- Project Root: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main`
- Original Request: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md` (MANDATORY)
- Project Architecture: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\PROJECT.md`
- Working Directory: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_auditor_1`

## Objectives
1. Read `ORIGINAL_REQUEST.md` and `PROJECT.md`.
2. Perform comprehensive Forensic Integrity Verification across all newly written files:
   - `scripts/seo-geo-pipeline.js`
   - `scripts/pipeline/scout.js`
   - `scripts/pipeline/auditor.js`
   - `scripts/pipeline/executor.js`
   - `scripts/pipeline/reporter.js`
   - `scripts/pipeline/validator.js`
   - `tests/e2e-pipeline.test.mjs`
   - `package.json`
3. Audit for:
   - Authenticity: Ensure there are no dummy/facade implementations, no hardcoded test responses, and no mock bypasses in production logic.
   - Rule Compliance: Verify strict compliance with GEMINI.md (0 `AggregateRating` in JSON-LD schemas).
   - Execution Safety: Ensure the pipeline does not execute destructive actions without snapshots and rollback capabilities.
   - Clean Compilation: Verify `npm run build` succeeds cleanly.
4. Output your full audit evidence to `handoff.md` in your working directory. Conclude with a binary verdict: **CLEAN** or **INTEGRITY VIOLATION**.


## 2026-10-06T23:27:50Z
You are Forensic Auditor. Your task is defined in:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_auditor_1\DISPATCH.md

Read C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md and PROJECT.md first.
Perform forensic integrity verification on all code, tests, and configuration. Ensure authentic implementation, 0 AggregateRating compliance in schema.org JSON-LD, and clean compilation.
Conclude with binary verdict CLEAN or INTEGRITY VIOLATION in handoff.md and notify me via send_message.
