# Reviewer P1-2 Task Assignment

Working Directory: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\reviewer_p1_2`

Scope of Review: Phase 2 (P1 Tasks) Independent Review & Mobile/GEO Quality
- Worker handoff: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p1\handoff.md`

Objectives:
1. Independently review UX/UI responsiveness on mobile:
   - Check input font-size >= 16px to prevent iOS Safari auto-zoom.
   - Verify mobile Hero button dispatch of `open-booking-drawer` and Navbar listener.
   - Verify Q4 seasonal urgency badge in Home Hero.
2. Review GEO/AI enhancements:
   - Verify SHA256 match between `public/llms.txt` and `public/.well-known/llms.txt`.
   - Verify sitemap has `/contacto` and no 307 redirecting `/particulares`.
   - Verify Wikidata Q-IDs in layout.jsx.
3. Verify zero occurrences of `AggregateRating`, `ratingValue`, or `reviewCount`.
4. Run `npm run seo:pipeline:check` and `npm run build`.
5. Deliver verdict: `APPROVE` or `REQUEST_CHANGES` in `.agents/teamwork/reviewer_p1_2/handoff.md`.
