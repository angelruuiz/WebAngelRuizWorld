# Worker P2 Task Assignment

Working Directory: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\worker_p2`

## Scope of Implementation: Phase 3 (P2 Tasks)
You are assigned to implement all 6 tasks of Phase 3 (P2):
1. **FICHA-CRO-06 (Flexible Phone Validation for International +)**:
   - In `components/LiquidGlassForm.jsx` (lines 15–19):
     Allow `+`, digits, and spaces: `e.target.value = e.target.value.replace(/[^0-9+ ]/g, '').slice(0, 16);`
     Update input constraints from `minLength="9" maxLength="9"` to `minLength="9" maxLength="16"`.
   - In `components/CorporateInlineForm.jsx` (lines 16–19 and phone input):
     Apply the same international phone regex and `maxLength="16"`.
   - In `components/Modals.jsx` (`ContactFormModal` phone input lines 59–62 and input):
     Apply the same international phone regex and `maxLength="16"`.
2. **FICHA-CRO-07 (Contextual Pre-filled WhatsApp URLs)**:
   - In `app/contratar-mago-madrid/page.jsx` (around line 426):
     Update `href="https://wa.me/34648055636"` to:
     `href="https://wa.me/34648055636?text=Hola%20Ángel,%20he%20visto%20las%20tarifas%20en%20la%20web%20y%20quiero%20consultar%20disponibilidad."`
   - In `app/contacto/DigitalCard.jsx` (around line 180):
     Update `href="https://wa.me/34648055636"` to:
     `href="https://wa.me/34648055636?text=Hola%20Ángel,%20te%20contacto%20desde%20tu%20tarjeta%20digital%20para%20consultar%20fechas."`
3. **FICHA-CRO-08 (Curated B2B Corporate Logo Bar)**:
   - In `components/CorporateLogosBar.jsx` (lines 3–15):
     Filter out local political/party entities ("NNGG Torrelodones", "Peña La Escombrera") and ensure it displays corporate clients:
     `['Movistar Estudiantes', 'Alcampo', 'Ahorramás', 'Grupo Index', 'Zeppelin TV', 'Catering Senescal', 'Makaa Eventos']`.
4. **FICHA-CRO-09 (Verified Corporate Testimonial & Visual Reviews Badge)**:
   - In `app/empresas/page.jsx` and `app/empresas/mago-cenas-empresa-madrid/page.jsx`:
     Insert verified Movistar Estudiantes corporate testimonial:
     *«Contamos con Ángel para los eventos de Movistar Estudiantes y el resultado fue extraordinario: profesionalidad absoluta, cercanía y una magia que dejó a todo el mundo boquiabierto.»* — **Movistar Estudiantes**
     Add accessible visual reputation badge in HTML/Tailwind:
     `4.9 ★ en Google Reviews (+50 opiniones reales)` linking to Google Maps (`https://www.google.com/search?q=%C3%81ngel+Ruiz+Mago+e+Ilusionista+Madrid`).
     **MANDATORY RULE**: ZERO `AggregateRating`, `ratingValue`, or `reviewCount` in JSON-LD.
5. **FICHA-PERF-01 (AVIF Format in next.config.js & Dead Code Purge)**:
   - In `next.config.js` (line 9):
     Update image formats to: `formats: ['image/avif', 'image/webp'],`
   - In `components/BusinessSchema.jsx`:
     Archive or delete this orphan unused file. Verify zero build impact.
6. **FICHA-SEO-05 (Consolidate Corporate Dinner Blog Posts)**:
   - Differentiate `content/blog/ideas-cenas-empresa-madrid-originales.md` towards "Restaurantes y Espacios para Cenas de Empresa en Madrid 2026" (venue/location intent).
   - Keep `content/blog/cenas-empresa-originales-madrid-ideas-magia.md` focused on entertainment, magic, and activities.
   - Ensure both posts have strong in-content contextual links pointing to `/empresas/mago-cenas-empresa-madrid`.

## Reference Backlog:
- `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\orchestrator_2\BACKLOG_TAREAS_EJECUTABLES.md` (Bloque III)

## Verification Requirements:
1. `git grep -i "aggregaterating"` -> 0 occurrences.
2. `git grep -n "34680650993"` -> 0 occurrences.
3. `npm run build` -> exit code 0 (140 static routes).
4. `node tests/e2e-pipeline.test.mjs` -> 99/99 passed (100%).
5. `npm run seo:pipeline:check` -> exit code 0.
6. Document all changes and verification in `.agents/teamwork/worker_p2/handoff.md`.
