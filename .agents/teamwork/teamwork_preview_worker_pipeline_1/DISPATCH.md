# Task Assignment: Worker 1 (3-Agent SEO/GEO Pipeline Implementation)

## Context & Inputs
- Project Root: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main`
- Original Request: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md` (MANDATORY)
- Project Architecture & Interfaces: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\PROJECT.md`
- Survey Architecture Blueprint: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_explorer_survey_3\handoff.md`
- Codebase Survey: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_explorer_survey_1\handoff.md`
- SEO/GEO Assets Survey: Read `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_explorer_survey_2\handoff.md`
- Working Directory: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_worker_pipeline_1`

## Mandatory Integrity Warning (INVIOLABLE)
> DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Exclusive Write Ownership
You own and may ONLY modify or create the following files:
- `scripts/seo-geo-pipeline.js`
- `scripts/pipeline/scout.js`
- `scripts/pipeline/auditor.js`
- `scripts/pipeline/executor.js`
- `scripts/pipeline/reporter.js`
- `scripts/pipeline/validator.js`
- `package.json` (add scripts `"seo:pipeline": "node scripts/seo-geo-pipeline.js"`, `"seo:pipeline:dry": "node scripts/seo-geo-pipeline.js --dry-run"`, `"seo:pipeline:check": "node scripts/seo-geo-pipeline.js --check"`)
DO NOT write to any test files or other application source files without snapshotting.

## Implementation Requirements

### 1. CLI Orchestrator (`scripts/seo-geo-pipeline.js`)
- Executable via `node scripts/seo-geo-pipeline.js` or `npm run seo:pipeline`.
- Command line arguments parsing:
  - `--dry-run` / `--report-only`: Scout + Audit + Generate report in `.seo-pipeline/reports/` without mutating code.
  - `--auto-apply`: Scout + Audit + Apply approved changes + Validate + Generate report.
  - `--interactive`: Prompt before applying approved changes.
  - `--check`: Run checks and return exit code 0 if healthy.
  - `--verbose`: Detailed console logs.
  - `--help` / `-h`: Usage documentation.
- Use clean, modern Node.js standard libraries (`fs`, `path`, `child_process`, `readline`, `crypto`) and `gray-matter`.

### 2. Agent 1: Opportunity Scout (`scripts/pipeline/scout.js`)
Implement 6 concrete detector modules:
1. `detectMetadataOpportunities()`: Checks titles, descriptions, branding duplicates (`| Ángel Ruiz`), lengths across blog posts and pages.
2. `detectSchemaOpportunities()`: Checks for schema health, missing SpeakableSpecification, price ranges, and enforcer flagging any `AggregateRating`.
3. `detectGeoLlmsOpportunities()`: Compares sitemap routes with `public/llms.txt` and `public/llms-full.txt` to sync missing high-value URLs and AI citation hooks.
4. `detectFaqOpportunities()`: Identifies blog posts missing `faq:` in frontmatter or having <2 FAQs, preparing high-intent wedding/corporate Q&A pairs.
5. `detectMadridGeoOpportunities()`: Identifies opportunities to enrich local Madrid entity anchors (venues, fincas, Pozuelo, Majadahonda, Las Rozas, IFEMA) in relevant posts.
6. `detectInterlinkingOpportunities()`: Checks for missing topic cluster internal links (e.g. `🔮 Sigue leyendo`) linking back to `/particulares/bodas`, `/empresas`, `/contratar-mago-madrid`.

### 3. Agent 2: Business Auditor & Critical Filter (`scripts/pipeline/auditor.js`)
- Implement 5 Hard Veto Gates:
  1. `VETO_AGGREGATE_RATING`: Instant rejection if `AggregateRating`, `ratingValue`, `reviewCount` is present or proposed.
  2. `VETO_TRACKER_COOKIE`: Instant rejection if third-party cookies, tracking scripts, or analytics pixels are involved.
  3. `VETO_PERFORMANCE_DEGRADATION`: Instant rejection if change harms load time or adds heavy runtime assets.
  4. `VETO_ZERO_COMMERCIAL_INTENT`: Instant rejection if targeting non-commercial or hobbyist queries.
  5. `VETO_NON_MADRID_GEOGRAPHY`: Instant rejection if targeting areas outside Community of Madrid.
- Implement 4-Dimension Rubric (0 to 100 points):
  - Commercial Booking Intent (0–35 pts)
  - Madrid Geographic & Venue Fit (0–25 pts)
  - Brand Prestige & Luxury Aesthetic Fit (0–20 pts)
  - Technical Safety & Zero-Risk (0–20 pts)
- Decision Logic:
  - `APPROVED` if Total Score >= 70 AND all 5 Hard Vetoes pass.
  - `REJECTED` if Total Score < 70 OR any Hard Veto fails.
  - Include detailed `businessJustification` explaining the commercial rationale for both approvals and rejections.

### 4. Agent 3: Automated Executor & Reporter (`scripts/pipeline/executor.js`, `reporter.js`, `validator.js`)
- `executor.js`:
  - Pre-execution backup snapshot under `.seo-pipeline/backups/<TIMESTAMP>/`.
  - Idempotent modifiers for Markdown frontmatter, markdown content, `llms.txt`, and schema definitions.
  - Automatic rollback on validation failure.
- `reporter.js`:
  - Generates comprehensive Markdown report in `.seo-pipeline/reports/seo-geo-report-<TIMESTAMP>.md` and updates `.seo-pipeline/reports/latest.md`.
  - Includes: Executive Summary, Discovered Opportunities catalog, Auditor Decision Matrix (table with scores, breakdown, vetoes, justifications), Executor Change Log with before/after diffs, and Post-Execution Validation Certificate.
- `validator.js`:
  - Strict zero `AggregateRating` check (`git grep -i "aggregaterating"` 0 matches in code).
  - Next.js build compilation verification (`npm run build` exit code 0).
  - Triggers automatic rollback if any validation fails.

## Verification Requirements
- Execute `node scripts/seo-geo-pipeline.js --help`
- Execute `node scripts/seo-geo-pipeline.js --dry-run`
- Execute `node scripts/seo-geo-pipeline.js --check`
- Execute `git grep -i "aggregaterating" -- app/ components/ lib/ public/ scripts/` (must return 0)
- Execute `npm run build` (must exit code 0)
- Write full findings, test outputs, and commands to `handoff.md` in your working directory.


## 2026-10-06T23:10:28Z
[Message] timestamp=2026-10-06T23:10:28Z sender=08b8e31e-84e7-4083-be28-6f9ff0b89a5e priority=MESSAGE_PRIORITY_HIGH
You are Worker 1. Your task is defined in:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_worker_pipeline_1\DISPATCH.md

You MUST read C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md first.
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Implement the complete 3-agent SEO/GEO optimization pipeline:
- `scripts/seo-geo-pipeline.js` (CLI entry point & flag parsing)
- `scripts/pipeline/scout.js` (Agent 1: Opportunity Scout with 6 detectors)
- `scripts/pipeline/auditor.js` (Agent 2: Business Auditor with 5 Hard Vetoes & 100 pt rubric)
- `scripts/pipeline/executor.js` (Agent 3: Safe applicator with snapshots and rollbacks)
- `scripts/pipeline/reporter.js` (Agent 3: Markdown report generator in .seo-pipeline/reports/)
- `scripts/pipeline/validator.js` (Agent 3: Post-execution validator with 0 AggregateRating check and clean build check)
- `package.json` (add "seo:pipeline" scripts)

Verify your implementation (`--help`, `--dry-run`, `--check`, `git grep` 0 AggregateRating, `npm run build`), write full results to `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\teamwork_preview_worker_pipeline_1\handoff.md`, and notify me when done via send_message.
