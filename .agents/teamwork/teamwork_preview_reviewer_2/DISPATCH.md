# Task Assignment: Reviewer 2 (Business Logic, Guardrails & Report Review)

## Context & Inputs
- Project Root: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main`
- Original Request: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md` (MANDATORY)
- Project Architecture: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\PROJECT.md`
- Test Ready Report: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\TEST_READY.md`
- Worker 1 Handoff: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_worker_pipeline_1\handoff.md`
- Working Directory: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_reviewer_2`

## Objectives
1. Read `ORIGINAL_REQUEST.md` and `PROJECT.md`.
2. Review the business logic, conversion rubric, guardrails, and generated reports:
   - Scout detector rules: ensure all 6 modules target real high-intent opportunities (weddings, corporate, pricing, Madrid entities).
   - Auditor rubric: check the 5 Hard Vetoes and 100-point scoring weights. Verify that justifications are meaningful and conversion-focused.
   - Guardrails: verify strict 0 `AggregateRating` in code, 0 third-party trackers, and preservation of luxury aesthetic.
   - Report structure: inspect `.seo-pipeline/reports/latest.md` for complete before/after tables, metrics, and validation certificates.
3. Run verification commands:
   - `git grep -i "aggregaterating" -- app/ components/ lib/ public/ scripts/` (must return 0)
   - `npm run seo:pipeline:check`
   - `npm run build`
4. Write your complete review to `handoff.md` in your working directory. Conclude with an unambiguous verdict: **APPROVE** or **REQUEST_CHANGES**.


## 2026-10-06T23:27:50Z
You are Reviewer 2. Your task is defined in:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_reviewer_2\DISPATCH.md

Read C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md and PROJECT.md first.
Review business logic, 5 Hard Vetoes, Madrid conversion rubric, guardrails compliance (0 AggregateRating, 0 trackers), and generated Markdown report.
Conclude with verdict APPROVE or REQUEST_CHANGES in handoff.md and notify me via send_message.
