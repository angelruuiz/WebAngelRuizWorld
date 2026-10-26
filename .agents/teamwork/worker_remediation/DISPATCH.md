# Dispatch: Worker Remediation

## Assignment & Context
- Role: Audit Remediation Worker
- Working directory: C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_remediation

## Mission
1. Read the remediation report at:
   `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_remediation\handoff.md`
2. Apply the verified drop-in content from:
   `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_remediation\proposed_MATRIZ_RESCATE_SERP.md`
   to:
   `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\orchestrator_2\MATRIZ_RESCATE_SERP.md`
   (or run `node .agents/teamwork/explorer_remediation/generate-proposed.mjs`).
3. Run sequential verification:
   - Run `node --test tests/audit-wave2-challenger2.test.mjs` (must pass with 0 failures).
   - Run `node --test tests/e2e-pipeline.test.mjs` (all 99 tests must pass).
   - Run `npm run seo:pipeline:check` (must pass with 0 AggregateRating and 0 trackers).
   - Run `npm run build` sequentially in isolation (must succeed with Exit Code 0, generating all 140 static pages).
4. Verify that NO `AggregateRating` exists anywhere.
5. Write your handoff report to `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_remediation\handoff.md` and send message to orchestrator.

## Constraints
- MANDATORY INTEGRITY WARNING: DO NOT CHEAT. All implementations must be genuine.
- PROHIBICIÓN ESTRICTA: Cero uso de `AggregateRating` o propiedades de valoración.


## 2026-10-25T23:11:26Z
You are the Remediation Worker for angelruiz.world.
Your working directory is:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_remediation

Read the authoritative user request at:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md (specifically the latest request under `## 2026-10-25T22:26:56Z`).
Read your task assignment at:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_remediation\DISPATCH.md
Read the remediation handoff at:
C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_remediation\handoff.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

MANDATORY CONSTRAINT:
PROHIBICIÓN ESTRICTA: Cero uso o recomendación de `AggregateRating` o propiedades de valoración en esquemas JSON-LD o contenidos (regla de GEMINI.md).

Tasks:
1. Apply the verified drop-in content from `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_remediation\proposed_MATRIZ_RESCATE_SERP.md` over `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\orchestrator_2\MATRIZ_RESCATE_SERP.md`.
2. Run sequential verification:
   - `node --test tests/audit-wave2-challenger2.test.mjs`
   - `node --test tests/e2e-pipeline.test.mjs`
   - `npm run seo:pipeline:check`
   - `npm run build` (in isolation, verifying exit code 0 and 140 static routes)
3. Confirm zero `AggregateRating` occurrences.
4. Write your handoff report to:
   `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_remediation\handoff.md`
   and notify the orchestrator via `send_message`.
