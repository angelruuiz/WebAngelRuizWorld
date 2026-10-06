# Task Assignment: Explorer 3 (3-Agent Pipeline Architecture & Engine Design)

## Context & Inputs
- Project Root: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main`
- Original Request: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md`
- Working Directory: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_explorer_survey_3`

## Objectives
1. Read `ORIGINAL_REQUEST.md` in full.
2. Propose concrete architecture and implementation design for the autonomous 3-agent pipeline:
   - CLI entry point: `scripts/seo-geo-pipeline.js` and `package.json` script `npm run seo:pipeline`. Command line flags (e.g. `--dry-run`, `--interactive`, `--auto-apply`, `--report-only`, `--check`).
   - Agent 1 (Opportunity Scout): Concrete detector modules for SEO/GEO opportunities (meta tags, schema enrichment, llms.txt, FAQ schema, semantic Madrid keywords, interlinking).
   - Agent 2 (Business Auditor & Critical Filter): Scoring model, rubric, and conversion criteria for Angel Ruiz's magic business (wedding, corporate, private in Madrid). Clear decision rules for ACCEPT / REJECT with detailed business justification.
   - Agent 3 (Automated Executor & Reporter): Safe patcher/applicator engine, markdown report generator with before/after diffs in `.seo-pipeline/reports/`, and post-execution validation harness (`npm run build` and strict `git grep -i "aggregaterating"` check).
3. Output your findings and recommendations into `handoff.md` in your working directory.


## 2026-10-06T22:57:22Z
You are Explorer 3. Your task is defined in:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_explorer_survey_3\DISPATCH.md

You MUST read C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md first.
Investigate and design the 3-agent pipeline architecture (scripts/seo-geo-pipeline.js, npm run seo:pipeline, Scout detection rules, Auditor business filter & conversion rubric, Executor & Reporter safe modification & Markdown report generation, and post-execution validation).
Write your complete findings to C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_explorer_survey_3\handoff.md
When done, notify me via send_message.
