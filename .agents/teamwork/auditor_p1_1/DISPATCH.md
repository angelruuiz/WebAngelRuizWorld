## 2026-10-26T00:10:41Z

You are Forensic Auditor P1-1.
Your working directory is: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\auditor_p1_1`

MANDATORY INSTRUCTIONS:
1. Read `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md` (section `## 2026-10-25T23:29:44Z`).
2. Read `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p1\handoff.md`.
3. Read `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\auditor_p1_1\context.md`.
4. Perform forensic integrity checks on all modified files and the whole repository:
   - Check GEMINI.md strict constraint: zero occurrences of `AggregateRating`, `ratingValue`, `reviewCount`, `bestRating`, `worstRating`.
   - Detect any fake tests, dummy implementations, or circumvented requirements.
   - Verify that `npm run build` runs genuinely and generates 140 static routes.
5. Issue strict binary verdict: `CLEAN` or `INTEGRITY VIOLATION` in `.agents/teamwork/auditor_p1_1/handoff.md`.
6. Send message to orchestrator.
