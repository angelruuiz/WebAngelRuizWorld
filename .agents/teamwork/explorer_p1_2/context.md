# Explorer P1-2 Task Assignment

Working Directory: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p1_2`

Target Tasks:
1. **FICHA-GEO-03 (`app/layout.jsx`)**:
   - Inspect `#organization` node: add `"founder": { "@id": "https://angelruiz.world/#person" }`.
   - Inspect `areaServed`: check 12 Madrid municipalities and assign `sameAs` Wikidata Q-IDs (Torrelodones Q132247, Las Rozas Q749449, Majadahonda Q687353, Pozuelo Q641743, Boadilla Q834244, Alcobendas Q487679, Villalba Q838384, Galapagar Q1641527, El Escorial Q371756, Alcorcón Q10317, Leganés Q492728, Getafe Q8389, Móstoles Q187826).
   - Clean Google `sameAs`: `"https://www.google.com/search?q=%C3%81ngel+Ruiz+Mago+e+Ilusionista+Madrid"`.
   - Strict 0 AggregateRating check.
2. **FICHA-GEO-04 (6 B2B Service pages)**:
   - Check `provider` in JSON-LD across the 6 pages:
     1. `app/empresas/mago-cenas-empresa-madrid/page.jsx`
     2. `app/empresas/mago-ferias-congresos-madrid/page.jsx`
     3. `app/empresas/mago-team-building-madrid/page.jsx`
     4. `app/empresas/mago-para-restaurantes-madrid/page.jsx`
     5. `app/empresas/mago-conferenciante-madrid/page.jsx`
     6. `app/mago-madrid/page.jsx`
   - Formulate exact diff to unify `provider` with `@type: "Person"`, `@id: "https://angelruiz.world/#person"`, `name: "Ángel Ruiz"`, `url: "https://angelruiz.world/sobre-mi"`.
3. **FICHA-GEO-05 (`app/empresas/mago-cenas-empresa-madrid/page.jsx`)**:
   - Inspect placement before the FAQs section for the GEO extractable fact sheet & formats table.
   - Verify markup, styling, and absence of rating schemas.

Write findings to `analysis.md` and complete `handoff.md`.
