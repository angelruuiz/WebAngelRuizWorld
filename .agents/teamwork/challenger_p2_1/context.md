# Challenger P2-1 Task Assignment

Working Directory: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\challenger_p2_1`

Scope of Challenge: Empirical Verification of Phase 3 (P2 Tasks)
- Worker handoff: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p2\handoff.md`

Objectives:
1. Empirically verify:
   - Phone regex handles international numbers with `+` prefix and spaces up to 16 characters.
   - WhatsApp links in `contratar-mago-madrid/page.jsx` and `contacto/DigitalCard.jsx` contain valid `?text=` parameters.
   - `CorporateLogosBar.jsx` contains only the 7 verified corporate brands and zero political entities.
   - Movistar Estudiantes testimonial exists on `/empresas` and `/empresas/mago-cenas-empresa-madrid`.
   - Visual reviews badge renders with link to Google Maps and zero AggregateRating in JSON-LD.
   - `next.config.js` includes `image/avif` in formats.
   - `components/BusinessSchema.jsx` does not exist on disk and causes no broken imports.
   - Blog posts have distinct H1/titles and link to `/empresas/mago-cenas-empresa-madrid`.
2. Verify 0 AggregateRating site-wide.
3. Deliver verdict: `CONFIRMED` or `DISPROVEN` in `.agents/teamwork/challenger_p2_1/handoff.md`.
