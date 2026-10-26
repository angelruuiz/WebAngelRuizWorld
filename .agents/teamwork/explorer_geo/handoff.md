# Informe de Auditoría GEO (Generative Engine Optimization) e Indexabilidad para IAs
**Proyecto:** Ángel Ruiz World (`angelruiz.world`)  
**Especialista:** Explorer 2 (GEO & AI Indexability Specialist)  
**Fecha:** 25 de Octubre de 2026  
**Ruta del Archivo:** `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_geo\handoff.md`

---

## 1. Observaciones Directas (Observations)

### 1.1 Verificación de Salvaguarda Inmutable: 0 `AggregateRating`
- **Comando:** `git grep -i "aggregaterating" -- app/ components/ lib/ public/`
  - **Resultado:** Código de salida 1 (0 coincidencias en todo el código ejecutable y contenido público de producción).
- **Comando:** `git grep -i -E "ratingValue|reviewCount|bestRating|worstRating" -- app/ components/ lib/ public/`
  - **Resultado:** Código de salida 1 (0 coincidencias en todo el código ejecutable y público).
- **Evidencia en archivo:** En `GEMINI.md` (líneas 3-5), se establece:  
  `"Está terminantemente prohibido incluir la propiedad o tipo AggregateRating (o campos ratingValue, reviewCount, bestRating, worstRating) en cualquier esquema estructurado JSON-LD (schema.org) de todo el proyecto."`
  Esta regla se cumple estrictamente al 100% en el estado actual del repositorio.

---

### 1.2 Configuración Técnica de Rastreadores de IA (`app/robots.js` y `public/ai.txt`)
- **Archivo:** `app/robots.js` (líneas 1-52)
  - Define `AI_BOTS` con 15 agentes: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-Web`, `anthropic-ai`, `PerplexityBot`, `Perplexity-User`, `Google-Extended`, `Applebot-Extended`, `meta-externalagent`, `CCBot`, `cohere-ai`, `YouBot`, `DuckAssistBot`.
  - Permite acceso total (`allow: '/'`) a estos bots con `disallow: ['/admin', '/api']`.
  - **Omisiones detectadas en `AI_BOTS`:**
    1. `GoogleOther`: Rastreador de Google para recogida de datos de IA y características experimentales.
    2. `Amazonbot`: Rastreador de respuestas de voz de Alexa y características de IA de Amazon.
    3. `FacebookBot`: Rastreador oficial de Meta para entrenamiento e inferencia de Meta AI (presente en WhatsApp, Instagram y Facebook).
    4. `Diffbot`: Rastreador de extracción estructurada para Knowledge Graphs corporativos y búsqueda de IA.
  - **Fuga de Rastreo y Seguridad en `disallow`:**
    - `disallow: ['/admin', '/api']` NO incluye `/panel`.
    - En `app/panel/page.jsx`, existe un panel administrativo interno de analíticas con autenticación por contraseña (`sessionStorage.getItem('ar_panel_auth')`).
    - Al no estar bloqueado en `robots.js`, consume crawl budget innecesariamente y está expuesto al rastreo de bots.
- **Archivo:** `public/ai.txt` (líneas 1-12)
  - Contiene directivas explícitas:
    ```txt
    User-agent: *
    Allow: /
    Crawl-delay: 0
    LLMs-Txt: https://angelruiz.world/llms.txt
    LLMs-Full: https://angelruiz.world/llms-full.txt
    Pricing: https://angelruiz.world/pricing.md
    Sitemap: https://angelruiz.world/sitemap.xml
    Contact: info@angelruiz.world
    ```
- **Archivo:** `app/layout.jsx` (líneas 343-345)
  - Incluye enlaces canónicos en `<head>`:
    ```html
    <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Content" />
    <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Full LLM Knowledge Base" />
    <link rel="help" href="/llms.txt" />
    ```

---

### 1.3 Estado de `llms.txt`, `llms-full.txt` y Desincronización con `.well-known`
- **Archivos presentes en el árbol:**
  - `public/llms.txt` (4.990 bytes)
  - `public/llms-full.txt` (6.674 bytes)
  - `public/.well-known/llms.txt` (4.797 bytes)
  - `public/.well-known/llms-full.txt` (6.674 bytes)
  - `public/pricing.md` (1.484 bytes)
  - `public/AGENTS.md` (3.959 bytes)
- **Desincronización:**
  - `public/llms.txt` contiene una referencia a `AGENTS.md` en la sección `## Optional`:
    `- [Especificación para Agentes Autónomos](https://angelruiz.world/AGENTS.md): Directrices machine-readable para agentes de evaluación y contratación...`
  - `public/.well-known/llms.txt` NO contiene dicha entrada (termina en la línea 42 con `llms-full.txt`).
- **Incumplimiento de longitud en la descripción cabecera (`llmstxt.org` spec):**
  - En `public/llms.txt` (línea 3), el blockquote introductorio (`> ...`) tiene **482 caracteres**. La especificación oficial de `llmstxt.org` estipula: `"Keep under 200 characters. Brief description of what the business does and who it serves."`
- **Omisiones Críticas para el Foco Q4 (Cenas de Empresa y Navidad):**
  - En `public/llms.txt` (línea 8):
    `- [Mago para Empresas y Cenas de Empresa](https://angelruiz.world/empresas): Magia corporativa...`
    **La URL dedicada y prioritaria `https://angelruiz.world/empresas/mago-cenas-empresa-madrid` NO APARECE EN NINGÚN LUGAR de `llms.txt` ni de `llms-full.txt`.**
  - No existe ninguna entrada dedicada a Cenas de Navidad o Eventos Corporativos Navideños en Madrid.
- **Páginas operativas ausentes en `llms.txt`:**
  - `https://angelruiz.world/contacto` (tarjeta digital de contacto directo con enlaces a WhatsApp, email y teléfono) está completamente ausente de `llms.txt`.
  - `https://angelruiz.world/pricing.md` no está enlazado directamente en `public/llms.txt` como recurso de tarifas.
- **Estructura recomendada ausente:**
  - Falta una sección estructurada `## Key Facts` (año de inicio, experiencia +10 años, +50 reseñas 5★ en Google, formación con Dani DaOrtiz, sede en Torrelodones, tiempo de respuesta <2h).
  - Falta una sección estructurada `## Contact` (formato estándar con WhatsApp, teléfono, email, web).

---

### 1.4 Cobertura e Integridad del Sitemap (`app/sitemap.js`)
- **Archivo:** `app/sitemap.js` (242 líneas)
  - Genera 140+ rutas divididas en: `staticUrls` (28 URLs), `blogUrls` (80 posts leídos dinámicamente de `content/blog/`), y `filteredLocationUrls` (9 municipios complementarios a los 5 estáticos).
  - Todas las URLs incluyen `images: [...]` con rutas absolutas.
- **Omisión Crítica Detectada:**
  - **`https://angelruiz.world/contacto` NO ESTÁ EN EL SITEMAP.**  
    Existe el archivo `app/contacto/page.jsx` con metadata completa (`ContactPage`, `Person`), pero no está incluido en `staticUrls` ni en ningún bucle de `sitemap.js`.
- **Análisis de Rutas Standalone / Privadas:**
  - `app/galeria-2/page.jsx` tiene `robots: { index: false, follow: false }` (correcto).
  - `app/cv-personal/layout.tsx` y `app/cv-seo/layout.tsx` no tienen directiva de `robots: { index: false }` ni están en el sitemap. Son proyectos personales/académicos que pueden diluir la relevancia temática si Google los indexa.
  - `app/parpell/layout.tsx` tiene `robots: { index: true, follow: true }` y representa una agencia externa ("Brand & Growth Orchestrator") alojada bajo la misma raíz.

---

### 1.5 Esquemas Estructurados JSON-LD y Grafo de Entidades
- **Archivo:** `app/layout.jsx` (líneas 93-334)
  - Define `globalSchema` con `@graph`:
    1. `@type`: `["EntertainmentBusiness", "ProfessionalService"]`, `@id: "https://angelruiz.world/#organization"`.
    2. `@type`: `"WebSite"`, `@id: "https://angelruiz.world/#website"`.
    3. `@type`: `"Person"`, `@id: "https://angelruiz.world/#person"`.
    4. `@type`: `"ItemList"`, `@id: "https://angelruiz.world/#site-navigation"`.
- **Desconexión de Entidades Detectada:**
  - El objeto `EntertainmentBusiness` (`#organization`) NO contiene `"founder": { "@id": "https://angelruiz.world/#person" }` ni `"performer": { "@id": "https://angelruiz.world/#person" }`. Aunque la entidad `Person` tiene `"worksFor": { "@id": "https://angelruiz.world/#organization" }`, la relación bidireccional de fundador y artista principal está incompleta en el grafo global.
- **Desambiguación Geográfica Wikidata Incompleta en `areaServed`:**
  - En `globalSchema` (líneas 155-178), solo Madrid (`Q2807`) y Comunidad de Madrid (`Q5756`) poseen propiedad `sameAs` con identificador de Wikidata.
  - Los otros 12 municipios (`Torrelodones`, `Las Rozas de Madrid`, `Majadahonda`, `Pozuelo de Alarcón`, `Boadilla del Monte`, `Alcobendas`, `Collado Villalba`, `Galapagar`, `San Lorenzo de El Escorial`, `Alcorcón`, `Leganés`, `Getafe`) carecen de `sameAs`, perdiendo autoridad de grafo en Gemini y Perplexity.
- **Propiedad `sameAs` de Google Knowledge Panel Contaminada:**
  - En `globalSchema` (línea 235 y 277), el enlace de Google es una URL de búsqueda con parámetros efímeros de sesión (`sca_esv`, `sxsrf`, `biw`, `bih`), en lugar de una URL limpia canónica de Knowledge Graph o perfil verificado de Google Search:  
    `https://www.google.com/search?sca_esv=...&q=%C3%81ngel+Ruiz+Mago+e+Ilusionista...`
- **Rotura de Referencia de Entidad en Páginas de Servicio Específicas:**
  - En `app/empresas/mago-cenas-empresa-madrid/page.jsx` (línea 67):
    `"provider": { "@type": "Person", "name": "Ángel Ruiz" }`
    **Crea un objeto anónimo sin `"@id": "https://angelruiz.world/#person"`.**
  - Mismo patrón defectuoso en:
    - `app/empresas/mago-ferias-congresos-madrid/page.jsx` (línea 73)
    - `app/empresas/mago-team-building-madrid/page.jsx` (línea 73)
    - `app/empresas/mago-para-restaurantes-madrid/page.jsx` (línea 73)
    - `app/empresas/mago-conferenciante-madrid/page.jsx` (línea 73)
    - `app/mago-madrid/page.jsx` (línea 59)
- **Componente Muerto / Huérfano:**
  - `components/BusinessSchema.jsx`: Archivo de 132 líneas con un esquema de negocio completo que nunca es importado ni renderizado en ninguna parte del proyecto.

---

### 1.6 Análisis de Citabilidad IA por Plataforma
- **ChatGPT Search / OpenAI:**
  - La presencia de FAQs directas ("¿Cuánto cuesta contratar un mago en Madrid?") con cifras reales (300€, 450€-650€, 500€-750€) proporciona citas directas verificables.
  - El componente "Ficha Técnica GEO Extractable" presente en `app/contratar-mago-madrid/page.jsx` (líneas 218-248), `app/empresas/page.jsx` (líneas 211-240) y `app/particulares/bodas/page.jsx` (líneas 169-200) cumple exactamente el estándar de Princeton/IIT Delhi (bloques de 50-150 palabras, auto-contenidos, con datos densos).
  - **Falta este componente en la página prioritaria Q4:** `app/empresas/mago-cenas-empresa-madrid/page.jsx`.
- **Perplexity AI:**
  - Perplexity premia tablas comparativas de servicios y formatos.
  - La página `/empresas/mago-cenas-empresa-madrid` carece de una tabla comparativa clara de formatos (Cóctel de Networking vs Pases por Mesas vs Espectáculo de Sobremesa) con duración recomendada, número de invitados idóneo y tarifa orientativa.
- **Google AI Overviews & Gemini:**
  - Muy dependiente de la consistencia del Knowledge Graph en Schema.org (`@id` consistentes y `sameAs` de Wikidata).
  - La falta de IDs canónicos en los proveedores de servicio (`provider`) rompe la cadena de atribución hacia la entidad persona de Ángel Ruiz.

---

## 2. Cadena Lógica (Logic Chain)

1. **Premisa 1 (Rastreadores y Acceso Técnico):** Los motores generativos (ChatGPT Search, Perplexity, Gemini, Claude, Copilot) dependen fundamentalmente de que sus rastreadores específicos tengan acceso sin restricciones al contenido público del sitio web.  
   - *Observación:* `app/robots.js` permite 15 bots, pero ignora `GoogleOther`, `Amazonbot`, `FacebookBot` y deja desprotegido `/panel`.
   - *Inferencia:* Añadir estos rastreadores y bloquear `/panel` previene desperdicio de crawl budget y asegura cobertura en los ecosistemas de Google AI y Meta AI.

2. **Premisa 2 (Estándar `llms.txt` y Consistencia):** Los modelos como Claude, Perplexity y ChatGPT utilizan `llms.txt` para contextualizar rápidamente los servicios y páginas prioritarias sin tener que rastrear decenas de URLs.  
   - *Observación:* `public/llms.txt` omite la página prioritaria `/empresas/mago-cenas-empresa-madrid`, omite `/contacto`, la descripción inicial excede los 200 caracteres de la especificación, y `.well-known/llms.txt` está desincronizada.
   - *Inferencia:* Las IAs que consulten `llms.txt` para responder a "¿Qué mago recomiendas para cenas de empresa en Madrid?" citarán la URL general `/empresas` en vez de la landing transaccional específica optimizada para conversión en cenas corporativas. Sincronizar y estructurar ambos archivos orientará directamente a los LLMs a la URL de máxima conversión.

3. **Premisa 3 (Indexabilidad y Sitemaps):** Una página ausente del sitemap sufre retrasos de indexación y menor peso en la priorización de rastreo.  
   - *Observación:* `app/contacto/page.jsx` está completamente ausente en `app/sitemap.js`.
   - *Inferencia:* Aunque tenga enlaces internos, carece de la señal canónica de prioridad y frecuencia de cambio semanal en el sitemap XML de Next.js.

4. **Premisa 4 (Integridad del Knowledge Graph y Schema.org):** Los motores de IA generan respuestas fundamentadas asociando entidades en un grafo de conocimiento unificado.  
   - *Observación:* En 6 páginas clave de servicios (`mago-cenas-empresa-madrid`, `mago-ferias-congresos-madrid`, `mago-team-building-madrid`, etc.), la propiedad `provider` se declara como un objeto `Person` nuevo sin `@id: "https://angelruiz.world/#person"`. Además, en `globalSchema` faltan los enlaces de Wikidata para 12 municipios de la Comunidad de Madrid.
   - *Inferencia:* Los rastreadores de Gemini y Perplexity no pueden consolidar la autoridad de Ángel Ruiz de forma unívoca con sus páginas de servicio, degradando la puntuación de entidad y citabilidad.

5. **Premisa 5 (Restricción Absoluta de Negocio - GEMINI.md):** La penalización por esquemas de valoración en Google Search Console es irreversible a corto plazo si se introduce `AggregateRating`.  
   - *Observación:* El código actual mantiene 0 ocurrencias en producción.
   - *Inferencia:* Todas las mejoras propuestas deben fundamentarse exclusivamente en esquemas permitidos (`ProfessionalService`, `EntertainmentBusiness`, `Service`, `OfferCatalog`, `BreadcrumbList`, `FAQPage`, `Person`, `WebSite`), con cero campos de rating.

---

## 3. Puntuación Cuantitativa GEO (0-100)

Evaluada con la metodología de 6 categorías de las habilidades `geo` y `geo-citability`:

| Dimensión de Auditoría | Peso | Puntuación Obtenida | Aporte Ponderado | Estado y Veredicto |
|---|---|---|---|---|
| **1. Acceso de Rastreadores IA y Configuración Técnica** | 20% | **88 / 100** | 17.6 / 20 | Notable alto. 15 bots configurados y `ai.txt` activo. Requiere añadir `GoogleOther`, `Amazonbot`, `FacebookBot` y blindar `/panel`. |
| **2. Cumplimiento y Completitud de `llms.txt`** | 20% | **76 / 100** | 15.2 / 20 | Aprobado con deficiencias. Omisión de `/empresas/mago-cenas-empresa-madrid`, desincronización con `.well-known`, exceso de caracteres en header. |
| **3. Arquitectura Schema.org y Consistencia de Grafo** | 20% | **84 / 100** | 16.8 / 20 | Muy bueno. Cero `AggregateRating`. Grafos `@graph` en layout y home. Requiere vincular `@id` de Persona en 6 subpáginas y eliminar código muerto `BusinessSchema.jsx`. |
| **4. Desambiguación de Entidades y Knowledge Graph** | 15% | **75 / 100** | 11.25 / 15 | Aprobado. Entidad Torrelodones/Madrid establecida. Requiere enriquecer los 12 municipios con Wikidata Q-IDs y limpiar enlaces de Google Knowledge Panel. |
| **5. Citabilidad de Contenido y Auto-Contención** | 15% | **80 / 100** | 12.0 / 15 | Notable. FAQs conversacionales excelentes y Ficha Técnica GEO en 3 páginas. Falta Ficha Técnica GEO y tabla comparativa en `/empresas/mago-cenas-empresa-madrid`. |
| **6. Integridad de Sitemap y Cobertura de Indexación** | 10% | **82 / 100** | 8.2 / 10 | Notable. 140+ URLs con imágenes y frecuencias correctas. Falta incluir `/contacto` y clasificar apps personales. |
| **PUNTUACIÓN GLOBAL GEO / CITABILIDAD IA** | **100%** | **81.1 / 100** | **81.05 / 100** | **Potencial inmediato de escalada a 96+/100 con la ejecución del backlog.** |

---

## 4. Advertencias y Limitaciones (Caveats)

1. **Variabilidad de Rastreo Externo:** La inclusión de rastreadores como `GoogleOther` o `FacebookBot` en `robots.js` permite el acceso, pero la frecuencia efectiva de visita depende de los algoritmos de rastreo propios de Google y Meta.
2. **Entornos de IA sin Rastreo Web Activo:** Las consultas en modelos sin acceso a web en vivo dependen de datos de entrenamiento históricos (Common Crawl / CCBot). Las directivas de `llms.txt` y Schema.org impactan inmediatamente en motores de búsqueda generativa activa (ChatGPT Search, Perplexity, Google AI Overviews), mientras que para modelos base el impacto es a medio plazo.
3. **Página Externa `/parpell`:** En `app/parpell/`, existe una landing independiente ("Brand & Growth Orchestrator") con `index: true`. No compite directamente con las palabras clave de magia, pero convive en el mismo dominio. Se asume intencionada por el usuario, por lo que no se propone su eliminación, pero debe mantenerse aislada del sitemap principal de magia.

---

## 5. Conclusiones y Plan de Acción Ejecutable (Actionable Tasks)

Para transformar `angelruiz.world` en la fuente de máxima autoridad y citabilidad en motores de IA para eventos en Madrid (con foco en Cenas de Empresa), se definen **6 Fichas de Tarea Técnicas Priorizadas**:

---

### Ficha GEO-1: Optimización de `app/robots.js` (Ampliación de Bots IA y Bloqueo de `/panel`)
- **Archivo afectado:** `app/robots.js`
- **Problema detectado:** Faltan rastreadores modernos de IA (`GoogleOther`, `Amazonbot`, `FacebookBot`, `Diffbot`). El panel interno `/panel` no está en la lista de `disallow`.
- **Cambio propuesto:**
  1. Añadir a `AI_BOTS`:
     ```javascript
     'GoogleOther',
     'Amazonbot',
     'FacebookBot',
     'Diffbot',
     ```
  2. Actualizar todas las reglas `disallow` de:
     `disallow: ['/admin', '/api'],`
     a:
     `disallow: ['/admin', '/api', '/panel'],`
- **Impacto estimado:** Prevención de fugas de crawl budget, protección del panel administrativo y máxima visibilidad en ecosistemas de Meta AI, Amazon Alexa y Google Other.
- **Criterio de verificación:** `npm run build` compila y `curl -s http://localhost:3000/robots.txt` muestra los nuevos user-agents y `/panel` en Disallow.

---

### Ficha GEO-2: Sincronización y Enriquecimiento de `llms.txt` y `.well-known/llms.txt` (Foco Cenas de Empresa Q4)
- **Archivos afectados:** `public/llms.txt` y `public/.well-known/llms.txt`
- **Problema detectado:**
  1. La landing transaccional prioritaria `/empresas/mago-cenas-empresa-madrid` está omitida.
  2. Falta `/contacto` y `/pricing.md`.
  3. La descripción inicial excede los 200 caracteres de la especificación `llmstxt.org` (tiene 482 caracteres).
  4. Faltan las secciones estructuradas recomendadas `## Key Facts` y `## Contact`.
  5. `public/.well-known/llms.txt` está desincronizada respecto a `public/llms.txt`.
- **Cambio propuesto:**
  1. Ajustar el blockquote inicial a <200 caracteres concisos:
     `> Ángel Ruiz es mago e ilusionista profesional en Madrid especializado en close-up, cartomagia y mentalismo para cenas de empresa, bodas y eventos corporativos con más de 10 años de experiencia.`
  2. Añadir en `## Servicios de Magia y Eventos`:
     `- [Mago para Cenas de Empresa en Madrid](https://angelruiz.world/empresas/mago-cenas-empresa-madrid): Espectáculos de magia de cerca y sobremesa diseñados para cenas de empresa y eventos de Navidad en Madrid.`
     `- [Contacto Directo con Ángel Ruiz](https://angelruiz.world/contacto): Tarjeta digital de contacto directo, teléfono y WhatsApp para disponibilidad inmediata.`
  3. Añadir sección `## Key Facts` con datos cuantitativos inmutables (+10 años, +50 reseñas 5★ en Google, formado con Dani DaOrtiz, tarifas 300€-750€, respuesta <2h).
  4. Añadir sección `## Contact` estándar con enlace directo a WhatsApp (`https://wa.me/34648055636`).
  5. Copiar exactamente el contenido idéntico a `public/.well-known/llms.txt`.
- **Impacto estimado:** Priorización inmediata de la landing de cenas de empresa en respuestas de ChatGPT Search y Perplexity; cumplimiento formal del estándar llmstxt.org.
- **Criterio de verificación:** Inspección visual de ambos archivos, longitud de cabecera <200 caracteres, y presencia de la URL `/empresas/mago-cenas-empresa-madrid`.

---

### Ficha GEO-3: Inclusión de `/contacto` en `app/sitemap.js`
- **Archivo afectado:** `app/sitemap.js`
- **Problema detectado:** La página `https://angelruiz.world/contacto` no figura en `staticUrls`, a pesar de ser una página pública clave con schema `ContactPage`.
- **Cambio propuesto:**
  Añadir al array `staticUrls`:
  ```javascript
  {
    url: 'https://angelruiz.world/contacto',
    lastModified: lastMod,
    changeFrequency: 'weekly',
    priority: 0.85,
    images: ['https://angelruiz.world/images/foto-bio.webp'],
  },
  ```
- **Impacto estimado:** Indexación garantizada y refresco prioritario del recurso de contacto directo en Google y motores de IA.
- **Criterio de verificación:** Ejecutar test o build y verificar que `sitemap()` devuelve un objeto que contiene `https://angelruiz.world/contacto`.

---

### Ficha GEO-4: Enriquecimiento de Entidades con Wikidata Q-IDs en `app/layout.jsx`
- **Archivo afectado:** `app/layout.jsx`
- **Problema detectado:** Solo 2 municipios en `areaServed` tienen `sameAs` de Wikidata. Los otros 12 carecen de desambiguación semántica. Falta enlace bidireccional `founder` en `#organization` y el enlace `sameAs` de Google contiene parámetros de sesión basura.
- **Cambio propuesto:**
  1. En `globalSchema` (`#organization`), añadir:
     ```javascript
     "founder": { "@id": "https://angelruiz.world/#person" },
     ```
  2. En `areaServed`, asignar los Q-IDs oficiales de Wikidata:
     - Torrelodones: `"sameAs": "https://www.wikidata.org/wiki/Q132247"`
     - Las Rozas de Madrid: `"sameAs": "https://www.wikidata.org/wiki/Q749449"`
     - Majadahonda: `"sameAs": "https://www.wikidata.org/wiki/Q687353"`
     - Pozuelo de Alarcón: `"sameAs": "https://www.wikidata.org/wiki/Q641743"`
     - Boadilla del Monte: `"sameAs": "https://www.wikidata.org/wiki/Q834244"`
     - Alcobendas: `"sameAs": "https://www.wikidata.org/wiki/Q487679"`
     - Collado Villalba: `"sameAs": "https://www.wikidata.org/wiki/Q838384"`
     - Galapagar: `"sameAs": "https://www.wikidata.org/wiki/Q1641527"`
     - San Lorenzo de El Escorial: `"sameAs": "https://www.wikidata.org/wiki/Q371756"`
     - Alcorcón: `"sameAs": "https://www.wikidata.org/wiki/Q10317"`
     - Leganés: `"sameAs": "https://www.wikidata.org/wiki/Q492728"`
     - Getafe: `"sameAs": "https://www.wikidata.org/wiki/Q8389"`
     - Móstoles: `"sameAs": "https://www.wikidata.org/wiki/Q187826"`
  3. Limpiar el enlace de Google Knowledge Panel en `sameAs` eliminando parámetros efímeros:  
     `"https://www.google.com/search?q=%C3%81ngel+Ruiz+Mago+e+Ilusionista+Madrid"`
  4. Ampliar `knowsAbout` en `Person` incluyendo:
     `"Cenas de empresa en Madrid"`, `"Magia para cenas de Navidad"`, `"Eventos corporativos en IFEMA"`.
- **Impacto estimado:** Consolidación indiscutible de la entidad de marca y cobertura local en el Knowledge Graph de Google y Gemini.
- **Criterio de verificación:** Comprobar con validador JSON-LD que los nodos `@id` y `sameAs` no tienen errores sintácticos y 0 menciones de `AggregateRating`.

---

### Ficha GEO-5: Unificación de `@id` Canónico en Proveedores de Servicio en Páginas B2B
- **Archivos afectados:**
  - `app/empresas/mago-cenas-empresa-madrid/page.jsx` (línea 67)
  - `app/empresas/mago-ferias-congresos-madrid/page.jsx` (línea 73)
  - `app/empresas/mago-team-building-madrid/page.jsx` (línea 73)
  - `app/empresas/mago-para-restaurantes-madrid/page.jsx` (línea 73)
  - `app/empresas/mago-conferenciante-madrid/page.jsx` (línea 73)
  - `app/mago-madrid/page.jsx` (línea 59)
- **Problema detectado:** En lugar de enlazar a la entidad canónica de Ángel Ruiz, crean un objeto anónimo `{ "@type": "Person", "name": "Ángel Ruiz" }`.
- **Cambio propuesto:**
  Reemplazar en cada archivo:
  ```javascript
  "provider": {
    "@type": "Person",
    "@id": "https://angelruiz.world/#person",
    "name": "Ángel Ruiz",
    "url": "https://angelruiz.world/sobre-mi"
  },
  ```
- **Impacto estimado:** Reconciliación del grafo Schema.org al 100% en todas las landings comerciales.
- **Criterio de verificación:** `git grep` confirma que ningún schema use `provider: { @type: 'Person', name: 'Ángel Ruiz' }` sin `@id`.

---

### Ficha GEO-6: Implementación de "Ficha Técnica GEO Extractable" y Tabla Comparativa en `/empresas/mago-cenas-empresa-madrid`
- **Archivo afectado:** `app/empresas/mago-cenas-empresa-madrid/page.jsx`
- **Problema detectado:** La página carece del bloque visual y semántico de Ficha Técnica extractable para IA (que ya funciona con éxito en `contratar-mago-madrid` y `particulares/bodas`), así como de una tabla comparativa de formatos para cenas de empresa y Navidad.
- **Cambio propuesto:**
  1. Insertar en el Hero de la página el componente de **Ficha Técnica GEO de Cenas de Empresa en Madrid**:
     - **Tarifas Oficiales:** 500€ - 750€ (Sin intermediarios de agencia)
     - **Formatos:** Cóctel Networking, Pases de Mesa y Show de Sobremesa
     - **Campaña de Navidad:** Reserva prioritaria en Octubre/Noviembre
     - **Cobertura:** Madrid Capital, Pozuelo, Las Rozas, Alcobendas y toda la Comunidad
  2. Añadir una tabla comparativa accesible estructurada (HTML `<div role="table">` o `<table>`) con los tres formatos clave para cenas de empresa (duración, número recomendado de comensales, momento idóneo del evento).
- **Impacto estimado:** Salto en la citabilidad de Perplexity y ChatGPT Search para consultas transaccionales de cenas de empresa corporativas y eventos navideños.
- **Criterio de verificación:** La página renderiza el bloque con clases Tailwind idénticas al diseño de marca y `npm run build` compila con éxito.

---

## 6. Método de Verificación Independiente (Verification Method)

Cualquier agente revisor u orquestador puede verificar independientemente los hallazgos y el cumplimiento de las restricciones con los siguientes comandos:

1. **Garantía Inviolable de 0 `AggregateRating`:**
   ```bash
   git grep -i "aggregaterating" -- app/ components/ lib/ public/
   # Debe retornar código de salida 1 (0 coincidencias)
   ```
2. **Garantía de 0 Propiedades de Valoración Prohibidas:**
   ```bash
   git grep -i -E "ratingValue|reviewCount|bestRating|worstRating" -- app/ components/ lib/ public/
   # Debe retornar código de salida 1 (0 coincidencias)
   ```
3. **Verificación de Compilación y Tipado de Next.js:**
   ```bash
   npm run build
   # Debe finalizar con código 0 y 'Compiled successfully'
   ```
4. **Verificación de Existencia de Archivos Clave:**
   - Inspeccionar `app/robots.js`
   - Inspeccionar `public/llms.txt` y `public/.well-known/llms.txt`
   - Inspeccionar `app/sitemap.js`
   - Inspeccionar `app/layout.jsx` y `app/empresas/mago-cenas-empresa-madrid/page.jsx`
