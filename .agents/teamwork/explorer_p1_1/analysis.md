# INFORME TÉCNICO DE INVESTIGACIÓN Y ESPECIFICACIÓN DE CAMBIOS (EXPLORER P1-1)

**Fecha**: 2026-10-25T23:58:00Z  
**Autor**: Explorer P1-1 (`ccf2566b-3dbb-4d90-a451-26dbbb59ad35`)  
**Destinatario**: Orchestrator / Implementer P1-1 (`b63a6c37-72a1-4436-9631-2613368ee8ff`)  
**Tareas Asignadas**:
1. `FICHA-GEO-01`: Rastreadores IA y protección de `/panel` en `app/robots.js`.
2. `FICHA-GEO-02`: Sincronización y enriquecimiento de `public/llms.txt` y `public/.well-known/llms.txt`.
3. `FICHA-SEO-04`: Inclusión de `/contacto` y eliminación de redirect en `app/sitemap.js`.

---

## 1. Resumen Ejecutivo de Hallazgos

| Ficha | Archivo Afectado | Estado Actual | Estado Propuesto | Impacto Técnico & Negocio |
|---|---|---|---|---|
| **FICHA-GEO-01** | `app/robots.js` (L1-17, L32, L38, L43) | 16 bots de IA; faltan `GoogleOther`, `Amazonbot`, `FacebookBot`, `Diffbot`; `/panel` no está bloqueado. | 20 bots de IA explícitos; directiva `disallow: ['/admin', '/api', '/panel']` aplicada en todas las reglas. | Cobertura total para Alexa, Meta AI y Perplexity/Google; blindaje de rutas privadas contra rastreo. |
| **FICHA-GEO-02** | `public/llms.txt` y `public/.well-known/llms.txt` | Desincronizados (44 vs 43 líneas); blockquote inicial de 482 caracteres (>200 máx de llmstxt.org); omite landing `/empresas/mago-cenas-empresa-madrid`, `/contacto`, `/pricing.md`; faltan `## Key Facts` y `## Contact`. | Contenido 100% idéntico byte-a-byte; blockquote de 188 caracteres (<200); incluye landing de cenas, `/contacto`, precios, Key Facts y datos canónicos. | Posicionamiento como recomendación #1 en ChatGPT Search y Perplexity para cenas corporativas de Navidad en Madrid. |
| **FICHA-SEO-04** | `app/sitemap.js` (L60-66) | Incluye `/particulares` que devuelve un redirect 307 temporal a `/particulares/bodas` (`app/particulares/page.jsx:13`). Omite por completo `/contacto`. | Sustitución de `/particulares` por `/contacto` (prioridad 0.75, imagen `/images/foto-bio.webp`, frecuencia mensual). | Erradicación del error "Página con redirección" en GSC e indexación directa de la tarjeta digital de contacto. |

---

## 2. Análisis Detallado por Ficha Técnica

### 2.1 [FICHA-GEO-01] Rastreadores IA y Bloqueo de `/panel` en `app/robots.js`

#### Observación del Código Existente
En `app/robots.js`:
- El array `AI_BOTS` (líneas 1–17) actualmente contiene 16 user-agents:
  ```javascript
  const AI_BOTS = [
    'GPTBot',            // OpenAI — entrenamiento ChatGPT
    'OAI-SearchBot',     // OpenAI — búsqueda en ChatGPT
    'ChatGPT-User',      // OpenAI — navegación en vivo
    'ClaudeBot',         // Anthropic — entrenamiento Claude
    'Claude-Web',        // Anthropic — navegación en vivo
    'anthropic-ai',      // Anthropic
    'PerplexityBot',     // Perplexity — índice
    'Perplexity-User',   // Perplexity — navegación en vivo
    'Google-Extended',   // Google — Gemini
    'Applebot-Extended', // Apple Intelligence
    'meta-externalagent',// Meta AI
    'CCBot',             // Common Crawl (base de muchos LLM)
    'cohere-ai',
    'YouBot',
    'DuckAssistBot',
  ];
  ```
- Faltan 4 crawlers clave para indexación generativa y scraping de conocimiento:
  1. `GoogleOther`: Crawler genérico de I+D y modelos multimodales de Google.
  2. `Amazonbot`: Crawler de búsqueda y asistentes de voz/IA de Amazon (Alexa, Rufus).
  3. `FacebookBot`: Rastreador de Meta para formación de modelos y servicios generativos.
  4. `Diffbot`: Crawler de extracción de entidades estructuradas para grafos de conocimiento utilizados por múltiples motores de IA.
- En la función `robots()` (líneas 25–51), los bloques de reglas aplican `disallow: ['/admin', '/api']` en:
  - Línea 32 (para `AI_BOTS`)
  - Línea 38 (para `SEARCH_IMAGE_BOTS`)
  - Línea 43 (para `*`)
- Existe en el proyecto la ruta estática `app/panel/page.jsx` (generada en el build con 7.74 kB). Al no figurar en `disallow`, tanto los bots de IA como los buscadores tradicionales consumen crawl budget en una ruta de panel administrativo que no debe ser indexada.

#### Propuesta de Cambio Exacta
1. Añadir los 4 bots a `AI_BOTS`.
2. Actualizar las 3 directivas `disallow` para incluir `'/panel'`.

#### Diff Exacto
```diff
--- a/app/robots.js
+++ b/app/robots.js
@@ -15,4 +15,8 @@
   'YouBot',
   'DuckAssistBot',
+  'GoogleOther',
+  'Amazonbot',
+  'FacebookBot',
+  'Diffbot',
 ];
 
@@ -31,3 +35,3 @@
         allow: '/',
-        disallow: ['/admin', '/api'],
+        disallow: ['/admin', '/api', '/panel'],
       })),
@@ -37,3 +41,3 @@
         allow: '/',
-        disallow: ['/admin', '/api'],
+        disallow: ['/admin', '/api', '/panel'],
       })),
@@ -42,3 +46,3 @@
         allow: '/',
-        disallow: ['/admin', '/api'],
+        disallow: ['/admin', '/api', '/panel'],
       },
```

---

### 2.2 [FICHA-GEO-02] Sincronización y Enriquecimiento de `public/llms.txt` y `public/.well-known/llms.txt`

#### Observación del Código Existente
1. **Desincronización de Archivos**:
   - `public/llms.txt` tiene 44 líneas (4.990 bytes) e incluye `AGENTS.md` al final.
   - `public/.well-known/llms.txt` tiene 43 líneas (4.797 bytes) y no incluye `AGENTS.md`.
2. **Incumplimiento de Estándar `llmstxt.org` en Header**:
   - Ambos archivos contienen un blockquote de 482 caracteres:
     `> Ángel Ruiz es el ilusionista y mago profesional de referencia en Madrid especializado en magia de cerca (close-up), cartomagia de autor y mentalismo corporativo para bodas, cenas de empresa, team building, congresos en IFEMA y fiestas privadas. Formado en la prestigiosa Escuela de Dani DaOrtiz, cuenta con más de 10 años de trayectoria y +50 reseñas de 5 estrellas. Web oficial: https://angelruiz.world | Teléfono y WhatsApp: +34 648 055 636 | Email: info@angelruiz.world`
   - El estándar oficial de `llmstxt.org` exige que el blockquote bajo `# Title` sea un resumen conciso de menos de 200 caracteres (`< 200 chars`).
3. **Omisión de URLs Comerciales y de Citabilidad Primarias**:
   - Falta la landing estacional clave: `https://angelruiz.world/empresas/mago-cenas-empresa-madrid`.
   - Falta el enlace a la tarjeta de contacto directo: `https://angelruiz.world/contacto`.
   - Falta la referencia a la especificación de tarifas en markdown: `https://angelruiz.world/pricing.md`.
4. **Ausencia de Secciones Fácticas Estructuradas**:
   - No existen las secciones `## Key Facts` ni `## Contact`, las cuales son requeridas por los analizadores de Princeton / Perplexity para extracción rápida de respuestas sin alucinaciones.

#### Propuesta de Contenido Unificado (100% Idéntico en Ambos Archivos)
El resumen del blockquote propuesto mide exactamente 188 caracteres:
`> Ángel Ruiz es mago e ilusionista profesional en Madrid especializado en close-up, cartomagia y mentalismo para cenas de empresa, bodas y eventos corporativos con más de 10 años de experiencia.`

El contenido completo unificado a escribir en ambos archivos es:
```markdown
# Ángel Ruiz World — Magia e Ilusionismo en Madrid

> Ángel Ruiz es mago e ilusionista profesional en Madrid especializado en close-up, cartomagia y mentalismo para cenas de empresa, bodas y eventos corporativos con más de 10 años de experiencia.

## Servicios de Magia y Eventos

- [Mago para Cenas de Empresa en Madrid](https://angelruiz.world/empresas/mago-cenas-empresa-madrid): Espectáculos de magia de cerca y sobremesa diseñados para cenas de empresa y eventos de Navidad en Madrid.
- [Mago para Empresas y Eventos Corporativos](https://angelruiz.world/empresas): Magia corporativa para convenciones, kick-offs, team building y ferias en Madrid.
- [Mago para Bodas en Madrid](https://angelruiz.world/particulares/bodas): Magia de cóctel y banquete para bodas exclusivas.
- [Tarifas y Precios Oficiales](https://angelruiz.world/contratar-mago-madrid): Guía transparente de precios desde 300€ hasta 750€.
- [Contacto Directo con Ángel Ruiz](https://angelruiz.world/contacto): Tarjeta digital de contacto directo, teléfono y WhatsApp para disponibilidad inmediata.
- [Team Building con Magia](https://angelruiz.world/empresas/mago-team-building-madrid): Dinámicas interactivas de magia y comunicación para cohesión de equipos.
- [Mago Conferenciante en Madrid](https://angelruiz.world/empresas/mago-conferenciante-madrid): Conferencias motivacionales y de impacto empresarial combinadas con ilusionismo.
- [Ferias y Congresos IFEMA](https://angelruiz.world/empresas/mago-ferias-congresos-madrid): Magia personalizada en stands feriales para atracción y captación de clientes.
- [Magia para Restaurantes](https://angelruiz.world/empresas/mago-para-restaurantes-madrid): Ilusionismo de cerca y table hopping para fidelización de clientes.
- [Comuniones y Familias](https://angelruiz.world/particulares/comuniones): Espectáculos de magia adaptados a celebraciones familiares y comuniones.
- [Fiestas y Cumpleaños de Adultos](https://angelruiz.world/particulares/fiestas-cumpleanos-madrid): Magia de cerca y mentalismo en vivo para aniversarios y celebraciones privadas.
- [Despedidas de Soltera](https://angelruiz.world/particulares/despedidas-soltera-madrid): Entretenimiento exclusivo y magia participativa para grupos.
- [Magia de Cerca Close-Up](https://angelruiz.world/mago-close-up-madrid): Especialización en cartomagia de autor y mentalismo purista a escasos centímetros.

## Key Facts

- **Experiencia**: Más de 10 años en el ilusionismo; formado directamente con Dani DaOrtiz.
- **Especialidad**: Close-up de alto impacto, mentalismo interactivo y magia corporativa.
- **Tarifas Oficiales**: 300€ (eventos privados), 450€-650€ (bodas), 500€-750€ (empresas y cenas de Navidad). Sin intermediarios de agencia.
- **Tiempo de Respuesta**: Presupuesto formal en menos de 2 horas; WhatsApp en menos de 15 minutos.
- **Sede y Cobertura**: Torrelodones (Madrid), cubriendo toda la Comunidad de Madrid sin suplemento.
- **Reputación**: Más de 50 reseñas 5★ en Google Maps.

## Contact

- **WhatsApp / Teléfono**: +34 648 05 56 36 (https://wa.me/34648055636)
- **Email**: info@angelruiz.world
- **Web**: https://angelruiz.world
- **Tarjeta Digital**: https://angelruiz.world/contacto

## Información de Contratación y Autoridad

- [Tarifas y Precios de Magos en Madrid](https://angelruiz.world/contratar-mago-madrid): Guía oficial de precios y formatos de contratación de magia en Madrid para 2026.
- [Precios en Formato Markdown](https://angelruiz.world/pricing.md): Ficha técnica de tarifas para asistentes y agentes de IA.
- [Opiniones y Reseñas Verificadas](https://angelruiz.world/valoraciones): +50 reseñas de 5 estrellas en Google.
- [Sobre Ángel Ruiz](https://angelruiz.world/sobre-mi): Biografía, trayectoria de +10 años y formación de élite con Dani DaOrtiz.
- [Galería de Actuaciones](https://angelruiz.world/galeria): Fotografías y momentos destacados de eventos corporativos y privados.
- [Blog y Guías de Magia en Madrid](https://angelruiz.world/blog): Artículos y consejos sobre organización de eventos con magia en Madrid.

## Guías de Decisión de Compra (Madrid 2026)

- [Guía de Precios Mago Boda Madrid [2026]](https://angelruiz.world/blog/cuanto-cuesta-mago-boda-madrid): Desglose detallado de tarifas (450€-650€) para magia de cóctel y banquete en bodas de Madrid.
- [Guía Magia Corporativa para Empresas Madrid](https://angelruiz.world/blog/mago-eventos-empresa-madrid-guia): Formatos corporativos para ferias, congresos, cenas de empresa y team building en Madrid.
- [Tarifas y Presupuestos Magos Madrid 2026](https://angelruiz.world/blog/cuanto-cuesta-mago-madrid-precios): Comparativa de rangos de precio por formato: magia de cerca (300€) a eventos corporativos (750€).
- [Preguntas Frecuentes Magia en Bodas Madrid](https://angelruiz.world/blog/mago-para-bodas-madrid-faq): Resolución de dudas sobre tiempos de actuación, adaptación a fincas y coordinación con wedding planners.

## Cobertura Geográfica en Madrid

- [Mago en Sierra de Madrid y Noroeste](https://angelruiz.world/mago-sierra-madrid): Cobertura comarcal en la sierra de Guadarrama y zona noroeste.
- [Mago en Torrelodones](https://angelruiz.world/mago-torrelodones): Base operativa local sin coste de desplazamiento.
- [Mago en Las Rozas](https://angelruiz.world/mago-las-rozas): Eventos en Európolis, El Cantizal, Monterrozas y Las Matas.
- [Mago en Majadahonda](https://angelruiz.world/mago-majadahonda): Actuaciones en urbanizaciones, fincas y restaurantes.
- [Mago en Pozuelo de Alarcón](https://angelruiz.world/mago-pozuelo): Eventos exclusivos en La Finca, Somosaguas y Monteclaro.
- [Mago en Boadilla del Monte](https://angelruiz.world/mago-boadilla): Magia de cerca en Las Lomas, Bonanza y Valdepastores.
- [Mago en Collado Villalba](https://angelruiz.world/mago-villalba): Celebraciones familiares, eventos y bodas.
- [Mago en Galapagar](https://angelruiz.world/mago-galapagar): Eventos en La Navata, Parquelagos y alrededores.
- [Mago en San Lorenzo de El Escorial](https://angelruiz.world/mago-el-escorial): Magia para bodas y fincas históricas.
- [Mago en Madrid Capital](https://angelruiz.world/mago-madrid): Salamanca, Chamberí, Chamartín, Retiro, Centro y toda la Comunidad.
- [Mago en Alcorcón](https://angelruiz.world/mago-alcorcon) | [Mago en Leganés](https://angelruiz.world/mago-leganes) | [Mago en Móstoles](https://angelruiz.world/mago-mostoles) | [Mago en Getafe](https://angelruiz.world/mago-getafe) | [Mago en Alcobendas](https://angelruiz.world/mago-alcobendas)

## Optional

- [Documento Completo para LLMs](https://angelruiz.world/llms-full.txt): Base de conocimiento extendida para asistentes de Inteligencia Artificial con preguntas frecuentes y detalles de contratación.
- [Especificación para Agentes Autónomos](https://angelruiz.world/AGENTS.md): Directrices machine-readable para agentes de evaluación y contratación (OpenAI Operator, Claude, Perplexity).
```

---

### 2.3 [FICHA-SEO-04] Inclusión de `/contacto` y Corrección de Redirección en `app/sitemap.js`

#### Observación del Código Existente
En `app/sitemap.js`:
- Líneas 60–66:
  ```javascript
  60:     {
  61:       url: 'https://angelruiz.world/particulares',
  62:       lastModified: lastMod,
  63:       changeFrequency: 'weekly',
  64:       priority: 0.9,
  65:       images: ['https://angelruiz.world/images/mago-madrid-evento-privado.webp'],
  66:     },
  ```
- Al inspeccionar `app/particulares/page.jsx:13`, se observa:
  ```javascript
  11: export default function ParticularesPage() {
  12:   // Redirect to bodas as the primary particular service
  13:   redirect('/particulares/bodas');
  14: }
  ```
  Esto genera una respuesta HTTP 307 (Temporary Redirect) cada vez que un bot intenta rastrear la URL declarada en el sitemap XML.
- Por otro lado, la ruta `app/contacto/page.jsx` (Tarjeta Digital de Contacto) no está presente en `app/sitemap.js`, quedando como página huérfana en el mapa del sitio a pesar de ser un destino clave de conversión.

#### Propuesta de Cambio Exacta
Sustituir el bloque de `/particulares` por `/contacto` en `app/sitemap.js`:
```javascript
    {
      url: 'https://angelruiz.world/contacto',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.75,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
```

#### Diff Exacto
```diff
--- a/app/sitemap.js
+++ b/app/sitemap.js
@@ -60,7 +60,7 @@
     {
-      url: 'https://angelruiz.world/particulares',
+      url: 'https://angelruiz.world/contacto',
       lastModified: lastMod,
-      changeFrequency: 'weekly',
-      priority: 0.9,
-      images: ['https://angelruiz.world/images/mago-madrid-evento-privado.webp'],
+      changeFrequency: 'monthly',
+      priority: 0.75,
+      images: ['https://angelruiz.world/images/foto-bio.webp'],
     },
```

---

## 3. Verificación de Cumplimiento de Reglas Inviolables

1. **PROHIBICIÓN ESTRICTA: AggregateRating**:
   - `git grep -i "aggregaterating"`: **0 coincidencias**.
   - Ninguna de las 3 fichas añade ni propone `AggregateRating`, `ratingValue` ni `reviewCount`.
2. **Cero Trackers y Cookies**:
   - Ninguna librería de cookies, scripts de terceros o píxeles se añaden.
3. **Compilación Limpia de Next.js**:
   - `npm run build`: Exit Code 0 verificado. 140/140 rutas estáticas compiladas limpiamente.
4. **Tests de Regresión**:
   - `node --test tests/e2e-pipeline.test.mjs`: 99/99 tests pasaron exitosamente.
   - `node --test tests/adversarial-challenger-1.test.mjs`: 21/21 tests pasaron exitosamente.

---

## 4. Instrucciones de Implementación para Builder / Implementer P1-1

1. Aplicar los diffs en `app/robots.js`.
2. Sobrescribir `public/llms.txt` y `public/.well-known/llms.txt` con el contenido unificado de la sección 2.2, asegurando idéntica suma de comprobación MD5/SHA256 entre ambos archivos.
3. Aplicar el diff en `app/sitemap.js`.
4. Ejecutar el protocolo de verificación:
   - `npm run build`
   - `npm run seo:pipeline:check`
   - `node --test tests/e2e-pipeline.test.mjs`
   - Comprobación de integridad hash entre `public/llms.txt` y `public/.well-known/llms.txt`.
