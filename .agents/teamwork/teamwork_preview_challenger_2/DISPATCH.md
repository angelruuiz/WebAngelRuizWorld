# Task Assignment: Challenger 2 (Auditor Veto & Adversarial Guardrails Verification)

## Context & Inputs
- Project Root: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main`
- Original Request: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md` (MANDATORY)
- Project Architecture: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\PROJECT.md`
- Test Ready Report: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\TEST_READY.md`
- Working Directory: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_challenger_2`

## Objectives
1. Read `ORIGINAL_REQUEST.md` and `PROJECT.md`.
2. Adversarially challenge the Business Auditor and Guardrails:
   - Verify that attempts to inject `AggregateRating`, `ratingValue`, or `reviewCount` are unconditionally vetoed by `VETO_AGGREGATE_RATING`.
   - Verify that non-Madrid locations (e.g. Barcelona, Valencia) are vetoed by `VETO_NON_MADRID_GEOGRAPHY`.
   - Verify that hobbyist/free magic queries are vetoed by `VETO_ZERO_COMMERCIAL_INTENT`.
   - Verify that third-party trackers or cookies are vetoed by `VETO_TRACKER_COOKIE`.
   - Run `git grep -i "aggregaterating" -- app/ components/ lib/ public/ scripts/` and confirm 0 occurrences.
3. Write your findings to `handoff.md` in your working directory. Conclude with an unambiguous verdict: **APPROVE** or **REQUEST_CHANGES**.


## 2026-10-06T23:27:50Z
You are Challenger 2. Your task is defined in:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_challenger_2\DISPATCH.md

Read C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md and PROJECT.md first.
Adversarially challenge Auditor vetoes (AggregateRating, trackers, geography, commercial intent) and verify site-wide 0 AggregateRating holds 100%.
Conclude with verdict APPROVE or REQUEST_CHANGES in handoff.md and notify me via send_message.
