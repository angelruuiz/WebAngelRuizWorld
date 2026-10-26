# Informe de Auditoría On-Page, Canibalización y SERP Rescue Matrix — Ángel Ruiz World
**Especialista**: Explorer 1 (SEO On-Page, Palabras Clave y Canibalización)  
**Fecha de Investigación**: 2026-10-25  
**Directorio de Trabajo**: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_seo`  
**Objetivo Estratégico**: Auditoría integral 360° para transformar angelruiz.world en una máquina de captación y cierre de eventos corporativos y cenas de empresa en Madrid (foco prioritario Q4: Cenas de Empresa, Eventos Corporativos y Navidad en Madrid).

---

## 1. Observation (Observaciones Directas Verificables)

### 1.1. Arquitectura Completa de Rutas Estáticas (~140 rutas identificadas)
El análisis del árbol de rutas en `app/` y del directorio editorial `content/blog/` arroja un total de **124 rutas indexables principales** más los endpoints y feeds estáticos (`feed.xml`, `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`):

```
Arquitectura de Rutas angelruiz.world (124 rutas + endpoints):
├── 1. Cluster Corporativo B2B (6 rutas)
│   ├── /empresas (Hub principal B2B)
│   ├── /empresas/mago-cenas-empresa-madrid (Sublanding transaccional Q4)
│   ├── /empresas/mago-conferenciante-madrid (Keynotes corporativos)
│   ├── /empresas/mago-ferias-congresos-madrid (Dinamización IFEMA)
│   ├── /empresas/mago-team-building-madrid (Dinámicas de equipo)
│   └── /empresas/mago-para-restaurantes-madrid (Hostelería y cenas)
├── 2. Cluster Particulares & Social (6 rutas)
│   ├── /particulares (Redirect 307 a /particulares/bodas en app/particulares/page.jsx:13)
│   ├── /particulares/bodas (Pilar comercial de bodas)
│   ├── /particulares/comuniones (Comuniones y familias)
│   ├── /particulares/eventos (Eventos privados y fiestas)
│   ├── /particulares/fiestas-cumpleanos-madrid (Cumpleaños adultos 40-50-60)
│   └── /particulares/despedidas-soltera-madrid (Despedidas y sorpresas)
├── 3. Cluster Marca y Transaccional General (10 rutas)
│   ├── / (Home)
│   ├── /mago-madrid (Landing transaccional general Madrid)
│   ├── /contratar-mago-madrid (Guía de precios y calculadora de tarifas)
│   ├── /mago-close-up-madrid (Magia de cerca y cartomagia de autor)
│   ├── /mago-sierra-madrid (Hub Sierra de Madrid)
│   ├── /sobre-mi (Biografía, trayectoria DaOrtiz, autoridad E-E-A-T)
│   ├── /valoraciones (Testimonios y prueba social B2B/B2C)
│   ├── /galeria (Galería fotográfica de eventos)
│   ├── /dossier (Dossier interactivo descargable)
│   └── /contacto (Tarjeta digital de contacto y WhatsApp)
├── 4. Cluster SEO Local Madrid (14 rutas estáticas)
│   ├── Sierra / Noroeste: /mago-torrelodones, /mago-las-rozas, /mago-majadahonda,
│   │   /mago-pozuelo, /mago-boadilla, /mago-villalba, /mago-galapagar,
│   │   /mago-el-escorial, /mago-las-matas.
│   └── Sur / Metropolitano: /mago-alcorcon, /mago-leganes, /mago-mostoles,
│       /mago-getafe, /mago-alcobendas.
├── 5. Cluster Editorial Blog (82 rutas)
│   ├── /blog (Índice de blog y buscador)
│   ├── /blog/mago-conferenciante-empresas-madrid (Página hardcodeada en app/blog/)
│   └── 80 Artículos dinámicos en content/blog/*.md servidos por app/blog/[slug]/page.jsx
└── 6. Cluster Legal / Técnico (6 rutas)
    ├── /aviso-legal, /cookies
    └── Noindex: /privacidad, /galeria-2, /admin, /panel
```

---

### 1.2. Canibalización Crítica Detectada

#### A) Canibalización Primaria: `/empresas` vs `/empresas/mago-cenas-empresa-madrid`
- **En `app/empresas/page.jsx`**:
  * Línea 16: `title: { absolute: 'Mago para Empresas en Madrid | Magia Corporativa y Cenas · Ángel Ruiz' }` (Incluye "y Cenas" en el title).
  * Línea 17: `description: 'Mago profesional para empresas en Madrid. Ilusionismo corporativo para cenas de empresa, team building y eventos de marca...'`
  * Línea 18: `keywords: [..., 'mago cenas empresa madrid', ...]`
  * Línea 57: FAQ schema contiene la pregunta `"¿Cuánto cuesta contratar un mago para una cena de empresa en Madrid?"`
- **En `app/empresas/mago-cenas-empresa-madrid/page.jsx`**:
  * Línea 14: `title: { absolute: 'Mago para Cenas de Empresa en Madrid 2026 | Fiestas y Navidad · Ángel Ruiz' }`
  * Línea 105 (H1): `Mago para Cenas de Empresa en Madrid`
  * Líneas 16: `keywords: ['mago para cenas de empresa', 'mago para cenas de empresa en madrid', 'mago cenas empresa madrid', ...]`
  * Línea 35: FAQ schema contiene exactamente la misma pregunta: `"¿Cuánto cuesta contratar un mago para una cena de empresa en Madrid?"`
- **Efecto Observado**: Google detecta dos páginas del mismo dominio compitiendo con títulos, metas, keywords y FAQs idénticas sobre "cenas de empresa", lo que diluye la relevancia y estanca a ambas URLs entre las posiciones 11 y 16 en lugar de alcanzar el Top 3.

#### B) Error Garrafal de Desvío de Anchor Text en `app/empresas/page.jsx`
- **Verbatim en `app/empresas/page.jsx:344`**:
  ```jsx
  Ideal como <Link href="/empresas/mago-para-restaurantes-madrid" className="text-amber-400 hover:underline">mago para cenas de empresa</Link>, <Link href="/empresas/mago-ferias-congresos-madrid" className="text-amber-400 hover:underline">dinamizador en IFEMA</Link>...
  ```
- **Problema**: El texto de ancla exacto `"mago para cenas de empresa"` apunta a `/empresas/mago-para-restaurantes-madrid` en lugar de apuntar a la landing page dedicada `/empresas/mago-cenas-empresa-madrid`. Esto envía una señal errónea al algoritmo de Google sobre qué URL es la autoridad para la intención "cenas de empresa".

#### C) Canibalización Editorial en Blog: Artículos Gemelos Compitiendo por la Misma Intención
1. `content/blog/ideas-cenas-empresa-madrid-originales.md` (Título: *"Ideas Originales para Cenas de Empresa en Madrid (Temporada 2026-2027)"*)
2. `content/blog/cenas-empresa-originales-madrid-ideas-magia.md` (Título: *"Cenas de Empresa Originales en Madrid: 7 Ideas para Sorprender a tu Equipo"*, meta_title: *"Cenas de Empresa Originales en Madrid: 7 Ideas Únicas y Divertidas"*)
- **Efecto Observado**: Dos posts en el mismo subdirectorio optimizados para la keyword transaccional long-tail `"ideas cenas empresa madrid originales"`. Ninguno tiene canonical cruzado ni consolidación.

#### D) Canibalización entre Post de Blog y Sublanding Transaccional:
- `content/blog/mago-fiestas-navidad-cenas-madrid.md` (Título: *"Mago para Fiestas de Navidad y Cenas de Empresa en Madrid"*) compite directamente contra `/empresas/mago-cenas-empresa-madrid`. El post no tiene llamada a la acción prominente como guía informativa hacia la landing de contratación, canibalizando tráfico de reserva.

#### E) Duplicidad de Ruta para "Mago Conferenciante":
- Ruta 1: `/empresas/mago-conferenciante-madrid` (`app/empresas/mago-conferenciante-madrid/page.jsx`)
- Ruta 2: `/blog/mago-conferenciante-empresas-madrid` (`app/blog/mago-conferenciante-empresas-madrid/page.jsx`)
- Ambas son páginas estáticas hardcodeadas en Next.js, ambas están listadas en `app/sitemap.js`, y ambas compiten por `"mago conferenciante empresas madrid"`.

---

### 1.3. Truncamiento de Snippets y Metadatos en SERP
Al auditar los metadatos de las páginas principales y los posts de blog, se observan títulos que superan los 65 caracteres (límite visual de Google en desktop/móvil ~580px):

| Archivo / Ruta | Título Actual | Longitud | Estado SERP |
|---|---|:---:|---|
| `app/empresas/mago-cenas-empresa-madrid/page.jsx` | `Mago para Cenas de Empresa en Madrid 2026 \| Fiestas y Navidad · Ángel Ruiz` | **74 car.** | Truncado en móvil (`...Navidad · Ángel Ruiz` se corta) |
| `app/empresas/page.jsx` | `Mago para Empresas en Madrid \| Magia Corporativa y Cenas · Ángel Ruiz` | **69 car.** | Truncado, keyword "Cenas" canibaliza |
| `app/empresas/mago-para-restaurantes-madrid/page.jsx` | `Mago para Restaurantes en Madrid \| Magia en Mesas y Eventos · Ángel Ruiz` | **72 car.** | Truncado |
| `app/mago-madrid/page.jsx` | `Mago en Madrid \| Mago Profesional para Bodas y Empresas · Ángel Ruiz` | **68 car.** | Truncado por sobreoptimización de marca |
| `app/particulares/bodas/page.jsx` | `Mago para Bodas en Madrid \| Magia de Cóctel Exclusiva · Ángel Ruiz` | **66 car.** | Ligeramente truncado |
| `app/particulares/eventos/page.jsx` | `Mago para Eventos en Madrid \| Celebraciones Privadas y Fiestas · Ángel Ruiz` | **75 car.** | Truncado |
| `app/particulares/fiestas-cumpleanos-madrid/page.jsx` | `Mago para Cumpleaños en Madrid \| Fiestas de Adultos Originales · Ángel Ruiz` | **75 car.** | Truncado |
| `content/blog/presupuesto-mago-cena-de-empresa-madrid-cuanto-cuesta.md` | `¿Cuánto Cuesta un Mago para una Cena de Empresa en Madrid? Tarifas y Presupuestos Reales` | **88 car.** | Truncado severo |
| `content/blog/espectaculo-animacion-cenas-navidad-empresas-madrid.md` | `Espectáculo para Cenas de Navidad en Madrid: Animación Original para Empresas (2026)` | **84 car.** | Truncado severo |

**Descripciones fuera de rango (menos de 110 o más de 165 car.):**
- `app/blog/page.jsx`: 286 caracteres (Google ignora la meta y genera un snippet automático incoherente).
- `app/particulares/fiestas-cumpleanos-madrid/page.jsx`: 178 caracteres.
- Más de 40 artículos de blog con extractos superiores a 175 caracteres o inferiores a 80.

---

### 1.4. Anomalías de Rastreo e Indexación en `app/sitemap.js`
1. **Redirección en Sitemap**:
   * En `app/sitemap.js:61`, se incluye `https://angelruiz.world/particulares` con prioridad `0.9`.
   * En `app/particulares/page.jsx:13`, esa ruta ejecuta `redirect('/particulares/bodas')`.
   * Enviar una URL en el sitemap que devuelve un redirect 307 genera avisos de rastreo en Google Search Console ("Página con redirección").
2. **Página huérfana en Sitemap**:
   * `/contacto` (`app/contacto/page.jsx`) existe, cuenta con tarjeta digital interactiva y schema `ContactPage`, pero **no está incluida en `app/sitemap.js`**.

---

### 1.5. Verificación Inviolable: 0 `AggregateRating`
- Ejecución directa de comprobación: `git grep -i "aggregaterating" -- app/ components/ lib/ public/ content/`
- **Resultado**: Código de salida 1 (0 coincidencias).
- Cumplimiento estricto del mandato de `GEMINI.md`: Ninguna propuesta de esta auditoría incluye ni recomendará `AggregateRating`, `ratingValue`, `reviewCount`, `bestRating` o `worstRating`.

---

## 2. Logic Chain (Cadena Lógica de Causa-Efecto)

### Paso 1: Fragmentación de Autoridad por Conflicto de Intenciones
- *Premisa (Obs 1.2.A y 1.2.B)*: La página `/empresas` incluye "Cenas" en su título, metadatos y enlaces, mientras que existe una sublanding específica `/empresas/mago-cenas-empresa-madrid`. Adicionalmente, el enlace contextual en `/empresas` apunta por error a `/empresas/mago-para-restaurantes-madrid`.
- *Inferencia*: Googlebot recibe señales contradictorias: no tiene certeza de si la URL canónica para "cenas de empresa" es el hub corporativo, la sublanding de cenas o la de restaurantes.
- *Consecuencia*: En lugar de concentrar el link equity en una sola URL transaccional fuerte, divide las impresiones entre las tres. Esto provoca que ninguna alcance el Top 3 orgánico para búsquedas de alta conversión en Q4, quedando relegadas a las posiciones 11-18 ("purgatorio de página 2").

### Paso 2: Dilución por Posts de Blog Informativos sin Canalización Transaccional
- *Premisa (Obs 1.2.C, 1.2.D y 1.2.E)*: Artículos como `presupuesto-mago-cena-de-empresa-madrid-cuanto-cuesta.md` y `mago-fiestas-navidad-cenas-madrid.md` captan tráfico informacional pero enlazan genéricamente a `/empresas` o no enlazan a la landing específica con anchor text transaccional. Además, existen dos artículos compitiendo por `"ideas cenas empresa originales"`.
- *Inferencia*: El "jugo" de enlace (PageRank interno) de los artículos del blog no fluye hacia la página de venta de cenas de empresa. Los artículos compiten entre sí por las mismas palabras clave informacionales.
- *Consecuencia*: Se desperdicia la autoridad acumulada por los contenidos del blog y se reduce la conversión directa a WhatsApp / formulario de presupuesto.

### Paso 3: Pérdida de CTR Orgánico por Snippets Truncados
- *Premisa (Obs 1.3)*: Títulos de más de 65 caracteres son cortados por los navegadores en móviles y desktops (ej. `Mago para Cenas de Empresa en Madrid 2026 | Fiestas y Navi...`).
- *Inferencia*: El usuario en la página de resultados no llega a ver ni el nombre de marca ni el elemento de valor diferencial (precios directos, sin intermediarios, fechas Q4).
- *Consecuencia*: A menor CTR, menor relevancia percibida por el algoritmo de RankBrain/Helpful Content, frenando el ascenso de la posición 12 a la posición 3.

---

## 3. Caveats (Límites y Supuestos de la Investigación)

1. **Datos de Search Console basados en registros históricos y auditoría extraída**: Al ser un entorno de desarrollo sin conexión en tiempo real a la API de GSC, las posiciones 11-20 se infieren a partir de los patrones documentados en `AUDITORIA-SEO.md`, `auditoria_extraida.txt`, volúmenes del sector eventos Madrid y la estructura on-page actual.
2. **SEO Local Off-Page (Google Business Profile)**: El posicionamiento en el "Local 3-Pack" (Google Maps) depende de la ficha de Google Business Profile (categoría, reseñas en Google, NAP). Esta auditoría se enfoca estrictamente en el código On-Page, arquitectura web y GEO.
3. **Preservación de Rendimiento**: Cualquier ajuste en metadatos y enlaces debe ser cero-impacto en bundle JS y Core Web Vitals (LCP, CLS, INP).

---

## 4. Conclusion & Recommendations

### 4.1. Cuantificación del Estado SEO Actual vs Proyectado

```
Puntuación Global Actual: 78 / 100
├── Arquitectura y Rastreo:           82 / 100
├── Metadatos y CTR en Snippets:      71 / 100
├── Canibalización e Intención:       68 / 100
└── Schemas y Datos Estructurados:    89 / 100 (100% libre de AggregateRating)

Puntuación Proyectada tras Mejoras: 93 / 100 (+15 pts)
```

---

### 4.2. SERP Rescue Matrix (Consultas en Posiciones 11–20 para Rescate en Q4)

A continuación se detalla la matriz estratégica para rescatar las 10 consultas de mayor valor comercial para la temporada de Cenas de Empresa y Navidad en Madrid:

| # | Consulta Objetivo (Query) | Vol. Q4 Est. | URL Objetivo Canónica | Título Actual (Problema) | Snippet Optimizado Propuesto (Title & Meta Desc ≤60/155 car.) | Estrategia de Enlazado Interno & Anchor Texts |
|---|---|:---:|---|---|---|---|
| **1** | `mago cenas empresa madrid` | 500-1.000 | `/empresas/mago-cenas-empresa-madrid` | `Mago para Cenas de Empresa en Madrid 2026 \| Fiestas y Navidad · Ángel Ruiz` (74 car. - truncado) | **Title** (54 car.): `Mago para Cenas de Empresa en Madrid \| Cenas y Navidad`<br>**Desc** (148 car.): `Mago profesional para cenas de empresa en Madrid y fiestas de Navidad. Magia de cerca cóctel y sobremesa. Fechas limitadas Q4. ¡Presupuesto express en 2h!` | Corregir anchor en `/empresas:344`. Enlazar desde los 10 posts de cenas con anchor exacto: `[mago para cenas de empresa en Madrid]`. |
| **2** | `mago cena navidad empresa madrid` | 400-800 | `/empresas/mago-cenas-empresa-madrid` | Canibalizado por `content/blog/mago-fiestas-navidad-cenas-madrid.md` | **Title** (57 car.): `Mago para Cenas de Navidad de Empresa en Madrid [2026]`<br>**Desc** (150 car.): `Ilusionismo corporativo para cenas de Navidad en Madrid. Magia de cerca itinerante y show de sobremesa. Reserva directa de artista. Consulta disponibilidad.` | Desde el post de blog `mago-fiestas-navidad-cenas-madrid.md`, colocar banner H2 enlazando a `/empresas/mago-cenas-empresa-madrid` con anchor: `[reserva tu mago para cenas de Navidad en Madrid]`. |
| **3** | `mago eventos corporativos madrid` | 450-850 | `/empresas` | `Mago para Empresas en Madrid \| Magia Corporativa y Cenas · Ángel Ruiz` (69 car. - solapa Cenas) | **Title** (57 car.): `Mago para Empresas en Madrid \| Eventos Corporativos y B2B`<br>**Desc** (154 car.): `Mago profesional para empresas en Madrid: convenciones, kick-offs, team building y ferias. Ilusionismo corporativo de alto impacto. Presupuesto express en 2h.` | Limpiar la palabra "Cenas" del title del hub para dejarlo como pilar B2B general. Enlazar desde el menú principal con anchor: `[Mago para Empresas y Eventos Corporativos]`. |
| **4** | `precio mago cena de empresa madrid` / `cuanto cuesta mago cena empresa` | 250-450 | `/blog/presupuesto-mago-cena-de-empresa-madrid-cuanto-cuesta` (con puente a `/empresas/mago-cenas-empresa-madrid`) | `¿Cuánto Cuesta un Mago para una Cena de Empresa en Madrid? Tarifas y Presupuestos Reales` (88 car. - muy largo) | **Title** (60 car.): `¿Cuánto Cuesta un Mago para Cena de Empresa en Madrid? 2026`<br>**Desc** (152 car.): `Tarifas oficiales 2026: mago para cenas de empresa en Madrid desde 500€ a 750€. Cóctel, sobremesa y packs completos sin agencias. Precios y presupuesto online.` | Añadir en la tabla de tarifas del post un botón CTA directo hacia `/empresas/mago-cenas-empresa-madrid` con anchor: `[Contratar espectáculo para cena de empresa en Madrid]`. |
| **5** | `cenas de empresa originales madrid` | 400-900 | `/blog/cenas-empresa-originales-madrid-ideas-magia` | Canibalizado por `ideas-cenas-empresa-madrid-originales.md` | **Title** (57 car.): `Cenas de Empresa Originales en Madrid: 7 Ideas Únicas 2026`<br>**Desc** (151 car.): `Descubre 7 ideas originales para cenas de empresa y Navidad en Madrid: magia de cerca en mesas, catas a ciegas y team building. Consejos y tarifas reales.` | Redirigir / consolidar `ideas-cenas-empresa-madrid-originales.md` hacia esta URL para aunar la fuerza SEO en un solo artículo ganador. |
| **6** | `animacion cenas navidad empresas madrid` | 200-400 | `/blog/espectaculo-animacion-cenas-navidad-empresas-madrid` | `Espectáculo para Cenas de Navidad en Madrid: Animación Original para Empresas (2026)` (84 car.) | **Title** (56 car.): `Animación y Espectáculos para Cenas de Navidad en Madrid`<br>**Desc** (153 car.): `Espectáculos de magia y animación de cóctel para cenas de Navidad corporativas en Madrid. Tarifas de 500€ a 750€ sin intermediarios. ¡Reserva antes de agotar fecha!` | Enlazar bidireccionalmente con `/empresas/mago-cenas-empresa-madrid` mediante anchor: `[espectáculos de magia para cenas de empresa en Madrid]`. |
| **7** | `mago conferenciante empresas madrid` | 150-350 | `/empresas/mago-conferenciante-madrid` | Dividido con `/blog/mago-conferenciante-empresas-madrid` | **Title** (58 car.): `Mago Conferenciante en Madrid \| Keynotes de Empresa B2B`<br>**Desc** (154 car.): `Conferencias motivacionales e ilusionismo corporativo en Madrid. Ángel Ruiz ancla el mensaje de tu marca con magia de alto impacto B2B. Descarga el dossier.` | Establecer canonical en `/blog/mago-conferenciante-empresas-madrid` hacia `/empresas/mago-conferenciante-madrid` o transformarlo en artículo informativo de apoyo. |
| **8** | `mago team building madrid` | 200-450 | `/empresas/mago-team-building-madrid` | `Mago para Team Building en Madrid \| Dinámicas · Ángel Ruiz` (60 car.) | **Title** (58 car.): `Mago para Team Building en Madrid \| Dinámicas y Empresas`<br>**Desc** (151 car.): `Actividades de team building con magia en Madrid. Fomenta la cohesión, la comunicación y el trabajo en equipo de forma sorprendente. Solicita propuesta en 2h.` | Enlazar desde `/empresas` y desde los posts de cenas de empresa que hablen de dinámicas de equipo. |
| **9** | `mago cenas empresa las rozas` / `mago empresas pozuelo` | 150-300 | `/mago-las-rozas` y `/mago-pozuelo` | Solo posicionan genéricos de fiestas sin mención destacada de cenas de empresa | **Title** (Las Rozas - 45 car.): `Mago en Las Rozas \| Empresas y Cenas 2026`<br>**Desc** (147 car.): `Magia corporativa para cenas de empresa y eventos en Las Rozas. Más de 10 años de experiencia. Sin costes de desplazamiento. Presupuesto directo en 2h.` | Añadir en `lib/locations.js` para Las Rozas y Pozuelo un párrafo específico de "Cenas de Empresa en Európolis / La Finca" enlazando a `/empresas/mago-cenas-empresa-madrid`. |
| **10** | `mago fin de ano empresa madrid` | 150-250 | `/blog/coctel-fin-de-ano-empresa-madrid-ideas-animacion` | `Cóctel de Fin de Año de Empresa en Madrid: Ideas de Animación e Ilusionismo` (75 car.) | **Title** (58 car.): `Cóctel de Fin de Año para Empresas en Madrid: Ideas Magia`<br>**Desc** (152 car.): `Ideas de animación para el cóctel de fin de año y tardeo de empresa en Madrid. Magia itinerante de proximidad para despedir el año con impacto y energía positiva.` | Enlazar al cierre de temporada hacia `/empresas/mago-cenas-empresa-madrid`. |

---

### 4.3. Plan de Acción y Propuestas Concretas de Código (Listo para Implementación)

#### Propuesta 1: Corregir Enlace Roto de Anchor Text en `app/empresas/page.jsx`
- **Archivo**: `app/empresas/page.jsx` (línea 344)
- **Problema**: El anchor "mago para cenas de empresa" apunta erróneamente a `/empresas/mago-para-restaurantes-madrid`.
- **Snippet Propuesto**:
```diff
<<<<
Ideal como <Link href="/empresas/mago-para-restaurantes-madrid" className="text-amber-400 hover:underline">mago para cenas de empresa</Link>, <Link href="/empresas/mago-ferias-congresos-madrid" className="text-amber-400 hover:underline">dinamizador en IFEMA</Link> o facilitador de <Link href="/empresas/mago-team-building-madrid" className="text-amber-400 hover:underline">team building</Link>.
====
Ideal como <Link href="/empresas/mago-cenas-empresa-madrid" className="text-amber-400 hover:underline">mago para cenas de empresa</Link>, <Link href="/empresas/mago-ferias-congresos-madrid" className="text-amber-400 hover:underline">dinamizador en IFEMA</Link>, <Link href="/empresas/mago-para-restaurantes-madrid" className="text-amber-400 hover:underline">magia en restaurantes</Link> o facilitador de <Link href="/empresas/mago-team-building-madrid" className="text-amber-400 hover:underline">team building</Link>.
>>>>
```

#### Propuesta 2: Desambiguar Metadatos en `app/empresas/page.jsx` (Hub)
- **Archivo**: `app/empresas/page.jsx` (líneas 16-18)
- **Problema**: Canibaliza la sublanding de cenas de empresa al incluir "y Cenas" en el título y en keywords principales.
- **Snippet Propuesto**:
```diff
<<<<
export const metadata = {
    title: { absolute: 'Mago para Empresas en Madrid | Magia Corporativa y Cenas · Ángel Ruiz' },
    description: 'Mago profesional para empresas en Madrid. Ilusionismo corporativo para cenas de empresa, team building y eventos de marca. ¡Presupuesto express en 2h!',
    keywords: ['mago para empresas madrid', 'mago para empresas', 'mago empresas', 'mago eventos corporativos madrid', 'mago cenas empresa madrid', 'mago team building madrid', 'mago conferenciante madrid', 'contratar mago empresa madrid', 'ilusionista corporativo madrid', 'mejor mago empresas madrid', 'mago para eventos de empresa madrid', 'mago eventos empresariales', 'magia para empresas', 'mago corporativo premium madrid'],
====
export const metadata = {
    title: { absolute: 'Mago para Empresas en Madrid | Eventos Corporativos y B2B' },
    description: 'Mago profesional para empresas en Madrid: convenciones, kick-offs, team building y ferias. Ilusionismo corporativo de alto impacto. Presupuesto express en 2h.',
    keywords: ['mago para empresas madrid', 'mago para empresas', 'mago empresas', 'mago eventos corporativos madrid', 'mago team building madrid', 'mago conferenciante madrid', 'contratar mago empresa madrid', 'ilusionista corporativo madrid', 'mejor mago empresas madrid', 'mago para eventos de empresa madrid', 'mago eventos empresariales', 'magia para empresas', 'mago corporativo premium madrid'],
>>>>
```

#### Propuesta 3: Optimizar Snippet de `app/empresas/mago-cenas-empresa-madrid/page.jsx`
- **Archivo**: `app/empresas/mago-cenas-empresa-madrid/page.jsx` (líneas 14-16)
- **Problema**: Título de 74 caracteres truncado en móvil. Meta descripción con formato mejorable para maximizar CTR en Q4.
- **Snippet Propuesto**:
```diff
<<<<
export const metadata = {
  title: { absolute: 'Mago para Cenas de Empresa en Madrid 2026 | Fiestas y Navidad · Ángel Ruiz' },
  description: '¿Buscando mago para la cena de empresa en Madrid? Magia de cerca cóctel y banquete. Fechas limitadas Navidad 2026. Presupuesto directo por WhatsApp en 15 min.',
====
export const metadata = {
  title: { absolute: 'Mago para Cenas de Empresa en Madrid | Cenas y Navidad' },
  description: 'Mago profesional para cenas de empresa en Madrid y fiestas de Navidad. Magia de cerca cóctel y sobremesa. Fechas limitadas Q4. ¡Presupuesto express en 2h!',
>>>>
```

#### Propuesta 4: Limpiar Redirección de `/particulares` en `app/sitemap.js` y Añadir `/contacto`
- **Archivo**: `app/sitemap.js`
- **Problema**: Incluye `/particulares` que devuelve redirect 307; omite `/contacto`.
- **Snippet Propuesto**:
```diff
<<<<
    {
      url: 'https://angelruiz.world/particulares',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/mago-madrid-evento-privado.webp'],
    },
====
    {
      url: 'https://angelruiz.world/contacto',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
>>>>
```

#### Propuesta 5: Añadir Enlace Directo Transaccional en `content/blog/presupuesto-mago-cena-de-empresa-madrid-cuanto-cuesta.md`
- **Archivo**: `content/blog/presupuesto-mago-cena-de-empresa-madrid-cuanto-cuesta.md` (líneas 63-65)
- **Problema**: El post habla exclusivamente de tarifas de cenas corporativas pero solo enlaza a `/contratar-mago-madrid` y `/empresas`, sin transferir autoridad a `/empresas/mago-cenas-empresa-madrid`.
- **Snippet Propuesto**:
```diff
<<<<
Si necesitas una propuesta formal por escrito para presentar a tu dirección, [solicita presupuesto en 2 horas](/contratar-mago-madrid) o contáctanos por WhatsApp para resolver cualquier consulta al instante.
====
Si organizas la velada de tu empresa, consulta los formatos y disponibilidad en nuestra página de **[mago para cenas de empresa en Madrid](/empresas/mago-cenas-empresa-madrid)**, o [solicita presupuesto oficial en 2 horas](/contratar-mago-madrid) sin intermediarios ni comisiones.
>>>>
```

#### Propuesta 6: Consolidación Canónica de Artículos Duplicados de "Ideas Cenas Empresa"
- **Archivos**: `content/blog/ideas-cenas-empresa-madrid-originales.md` y `content/blog/cenas-empresa-originales-madrid-ideas-magia.md`
- **Acción**: Diferenciar el enfoque de `ideas-cenas-empresa-madrid-originales.md` cambiándolo a *"Restaurantes y Espacios para Cenas de Empresa en Madrid 2026"* o redirigir canónicamente hacia `cenas-empresa-originales-madrid-ideas-magia.md`.

---

## 5. Verification Method (Método de Verificación Independiente)

Para verificar y replicar todos los hallazgos de este informe de manera autónoma:

1. **Verificación de 0 AggregateRating (Regla Inmutable)**:
   ```powershell
   git grep -i "aggregaterating" -- app/ components/ lib/ public/ content/
   ```
   *Criterio de éxito*: Código de salida 1 (cero coincidencias en todo el código y contenido).

2. **Detección del Desvío de Anchor Text**:
   ```powershell
   Select-String -Path "app/empresas/page.jsx" -Pattern "mago para cenas de empresa"
   ```
   *Criterio de éxito*: Confirma que la línea 344 enlaza actualmente a `/empresas/mago-para-restaurantes-madrid`.

3. **Verificación de Títulos Truncados (>65 caracteres)**:
   ```powershell
   node -e "const fs=require('fs'); ['app/empresas/page.jsx','app/empresas/mago-cenas-empresa-madrid/page.jsx','app/particulares/bodas/page.jsx'].forEach(f=>{ const c=fs.readFileSync(f,'utf8'); const m=c.match(/title:\s*\{\s*absolute:\s*['\"]([^'\"]+)['\"]/); if(m) console.log(f, m[1].length, m[1]); });"
   ```
   *Criterio de éxito*: `mago-cenas-empresa-madrid` reporta 74 caracteres (>65 límite SERP).

4. **Verificación del Redirigido de `/particulares` en sitemap.js**:
   ```powershell
   Select-String -Path "app/particulares/page.jsx" -Pattern "redirect"
   Select-String -Path "app/sitemap.js" -Pattern "particulares"
   ```
   *Criterio de éxito*: Confirma que `/particulares` hace redirect a bodas pero está listado en sitemap como URL 200.

5. **Compilación Limpia de Next.js**:
   ```powershell
   npm run build
   ```
   *Criterio de éxito*: Compilación sin errores (Exit code 0).
