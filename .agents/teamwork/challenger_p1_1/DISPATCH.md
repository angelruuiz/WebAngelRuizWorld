## 2026-10-26T00:10:41Z

You are Challenger P1-1.
Your working directory is: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\challenger_p1_1`

MANDATORY INSTRUCTIONS:
1. Read `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\ORIGINAL_REQUEST.md` (section `## 2026-10-25T23:29:44Z`).
2. Read `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p1\handoff.md`.
3. Read `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\challenger_p1_1\context.md`.
4. Empirically verify:
   - `public/llms.txt` and `public/.well-known/llms.txt` SHA256 match and header length < 200 chars.
   - `robots.txt` output contains the 4 new AI bots and `Disallow: /panel`.
   - `sitemap.xml` output contains `/contacto` and excludes `/particulares`.
   - All 6 B2B pages declare `provider` with `@id: "https://angelruiz.world/#person"`.
   - `app/layout.jsx` contains the 13 Wikidata Q-IDs and clean Google sameAs.
   - Inputs/selects in `CorporateInlineForm.jsx` and `Modals.jsx` have font-size >= 16px on mobile.
5. Verify 0 AggregateRating site-wide.
6. Issue verdict: `CONFIRMED` or `DISPROVEN` in `.agents/teamwork/challenger_p1_1/handoff.md`.
7. Send message to orchestrator.
