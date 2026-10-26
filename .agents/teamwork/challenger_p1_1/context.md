# Challenger P1-1 Task Assignment

Working Directory: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\challenger_p1_1`

Scope of Challenge: Empirical Verification of Phase 2 (P1 Tasks)
- Worker handoff: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p1\handoff.md`

Objectives:
1. Empirically verify:
   - `public/llms.txt` and `public/.well-known/llms.txt` SHA256 match and header length < 200 chars.
   - `robots.txt` output in `.next` contains the 4 new AI bots and `Disallow: /panel`.
   - `sitemap.xml` output in `.next` contains `/contacto` and excludes `/particulares`.
   - All 6 B2B pages declare `provider` with `@id: "https://angelruiz.world/#person"`.
   - `app/layout.jsx` contains the 13 Wikidata Q-IDs and clean Google sameAs.
   - Inputs/selects in `CorporateInlineForm.jsx` and `Modals.jsx` have font-size >= 16px on mobile.
2. Verify 0 AggregateRating site-wide.
3. Deliver verdict: `CONFIRMED` or `DISPROVEN` in `.agents/teamwork/challenger_p1_1/handoff.md`.
