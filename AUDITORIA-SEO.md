# Auditoría SEO — angelruiz.world

**Fecha**: 11 junio 2026 · **Páginas analizadas**: ~45 (30 estáticas + 20 posts blog vía template)
**Puntuación global**: 78/100 — Buena base, con errores críticos puntuales y trabajo pendiente fuera de la web (SEO local off-page).

---

## 🔴 Críticos (arreglar ya)

### 1. Enlace roto en el menú: `/mago-mentalista-madrid` → 404
La carpeta `app/mago-mentalista-madrid/` está **vacía**. El Navbar enlaza a esa ruta desde TODAS las páginas (`components/Navbar.jsx:245`). Un 404 enlazado sitewide desperdicia crawl budget y autoridad.
**Fix**: crear la página (keyword valiosa: "mago mentalista madrid", "mentalista para eventos madrid") o quitar el enlace hasta tenerla.

### 2. CTAs rotos: `/contacto` → 404 en 5 páginas de empresas
El botón principal de contacto apunta a `/contacto`, que no existe, en:
- `app/empresas/mago-cenas-empresa-madrid/page.jsx:232`
- `app/empresas/mago-conferenciante-madrid/page.jsx:183`
- `app/empresas/mago-ferias-congresos-madrid/page.jsx:183`
- `app/empresas/mago-para-restaurantes-madrid/page.jsx:183`
- `app/empresas/mago-team-building-madrid/page.jsx:183`

Estás perdiendo conversiones de las páginas corporativas más importantes. **Fix**: apuntar a WhatsApp o a la sección de contacto real.

### 3. Títulos con marca duplicada (template + título de página)
El template del layout añade `| Ángel Ruiz | Mago Madrid` a títulos que ya incluyen `| Ángel Ruiz`. Resultado real en producción:
> "Guía para Contratar un Mago en Madrid (Precios y Consejos) 2026 | Ángel Ruiz | Ángel Ruiz | Mago Madrid" (~100 caracteres; Google corta a ~60)

Afecta a todas las páginas que no usan `title: { absolute: ... }` (contratar-mago-madrid, blog/mago-conferenciante-empresas-madrid, páginas de localidad, etc.).
**Fix**: quitar `| Ángel Ruiz` de los títulos de página, o usar `absolute` como ya haces en `/empresas`.

---

## 🟡 Avisos (deberías arreglar)

4. **Sitemap incompleto**: faltan `/particulares` (página hub), `/dossier` y `/blog/mago-conferenciante-empresas-madrid` (es página hardcodeada, no .md, así que `getSortedPostsData()` no la incluye).
5. **AggregateRating solo en 1 página**: el schema con 39 reseñas ⭐5 solo se inyecta en `/mago-close-up-madrid`. Añádelo (con las reseñas visibles en página) al menos en home, `/valoraciones`, `/empresas` y `/particulares/bodas` — las estrellas en el SERP suben el CTR mucho.
6. **OG/Twitter genéricos en home**: "Angel Ruiz | Mago e Ilusionista" sin keyword "Mago en Madrid". La twitter:description heredada aparece en páginas internas.
7. **Canonicals inconsistentes**: mezcla de absolutos y relativos. Funciona por `metadataBase`, pero unifícalo a relativo.
8. **Título de `/contratar-mago-madrid` indexado con "2024"** en Google (la página ya dice 2026). Pide reindexación en Search Console tras corregir el punto 3.

---

## 🟢 Oportunidades (esto es lo que te lleva al top 3)

Tu SEO on-page ya está al ~80%. Lo que decide el top 3 en "mago para X madrid" es sobre todo **fuera del código**:

### A. Google Business Profile (lo más importante)
Para búsquedas locales, el "local pack" (mapa + 3 fichas) aparece ANTES que los resultados web. Si no tienes ficha de Google Business optimizada (categoría "Mago", zona de servicio Madrid, fotos, las 39 reseñas EN GOOGLE, posts semanales), no existes en el top 3 real. Las reseñas de Trustindex no cuentan ahí.

### B. Estar donde Google ya posiciona a otros
El top 10 actual de "mago para bodas madrid" lo dominan directorios: Celebrents, Cronoshare, Partfy, Bodas.net, magosmadrid.com. Crear perfil en esos directorios = aparecer en la primera página aunque sea con su web, y te dan backlinks.

### C. Backlinks locales
Competidores como David Blanco o Iván Mora rankean por autoridad de dominio. Consigue enlaces de: fincas de bodas con las que trabajas (ya tienes el post "mejores fincas bodas madrid"), wedding planners, blogs de eventos, prensa local de la sierra.

### D. Páginas que faltan (keywords sin cubrir)
- `mago-mentalista-madrid` (¡ya enlazada en el menú!)
- `particulares/aniversarios-madrid` — "mago para aniversarios" solo se menciona de pasada
- Considera páginas de localidad para el sur/este si quieres ampliar (ya tienes alcorcón, leganés, móstoles, getafe ✓)

### E. Search Console
Verifica que está configurado, vigila qué keywords ya te dan impresiones en posiciones 4-15 y refuerza esas páginas primero (victorias rápidas).

---

## ✅ Lo que ya está bien

- Metadata completa y única en TODAS las páginas (title, description, OG, canonical)
- Schema ProfessionalService + FAQ + BreadcrumbList bien implementados
- robots.js y sitemap.js correctos; noindex en galeria-2 y privacidad ✓
- 14 páginas de localidad + páginas por servicio (bodas, comuniones, cumpleaños, despedidas, cenas empresa, team building, restaurantes, ferias) — arquitectura excelente
- 20 posts de blog orientados a keywords transaccionales
- Todas las imágenes con alt, 1 solo H1 por página, next/image, lang="es"
- Footer con enlazado interno keyword-rich ("Mago para Bodas Madrid", etc.)

---

## Plan de acción priorizado

| # | Acción | Impacto | Esfuerzo |
|---|--------|---------|----------|
| 1 | Arreglar `/contacto` (5 CTAs rotos) | Alto (conversión) | 10 min |
| 2 | Crear o desenlazar `/mago-mentalista-madrid` | Alto | 1-2 h |
| 3 | Corregir títulos duplicados (template) | Alto (CTR) | 30 min |
| 4 | Google Business Profile + migrar reseñas a Google | **Muy alto** (local pack) | continuo |
| 5 | AggregateRating en páginas clave | Medio-alto (CTR) | 30 min |
| 6 | Completar sitemap | Medio | 10 min |
| 7 | Perfiles en directorios (Bodas.net, Celebrents, Cronoshare, Partfy) | Alto | 2-3 h |
| 8 | Campaña de backlinks locales (fincas, planners) | Alto | continuo |
| 9 | Página aniversarios + revisar Search Console | Medio | 2 h |
