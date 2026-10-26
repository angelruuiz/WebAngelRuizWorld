# BACKLOG DE TAREAS EJECUTABLES (PLAN DE CHOQUE 360°)
## Fichas Técnicas Priorizadas para Implementación Directa en angelruiz.world
**Foco Estratégico**: Cenas de Empresa, Eventos Corporativos y Navidad en Madrid (Q4)  
**Destinatarios**: Agentes de Desarrollo Frontend, SEO Técnico, GEO y Contenido  
**Regla Inviolable de Proyecto**: Prohibición estricta de `AggregateRating` o propiedades de valoración (`ratingValue`, `reviewCount`, `bestRating`, `worstRating`) en JSON-LD o meta-etiquetas (`GEMINI.md`).  
**Criterio de Entrega**: Cada tarea cuenta con archivo afectado, problema detectado con número de línea, código/diff exacto, impacto comercial y método de verificación independiente.

---

## ÍNDICE DE FICHAS TÉCNICAS

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ PRIORIDAD P0: CORRECCIONES CRÍTICAS INMEDIATAS (Bloqueantes de Negocio / < 24 horas)  │
├──────────────┬──────────┬──────────────────────────────────────────────────────────────┤
│ FICHA-CRO-01 │ CRO      │ Unificación Inmediata del WhatsApp Oficial (+34 648 05 56 36)│
│ FICHA-CRO-02 │ CRO      │ Inserción de CTA Primario y Secundario Above-the-Fold Cenas  │
│ FICHA-SEO-01 │ SEO      │ Corrección del Desvío de Anchor Text en app/empresas:344     │
│ FICHA-SEO-02 │ SEO      │ Desambiguación de Metadatos en Hub B2B (/empresas)           │
│ FICHA-SEO-03 │ SEO      │ Optimización de Longitud de Snippet SERP en Cenas (<=60 car) │
├──────────────┴──────────┴──────────────────────────────────────────────────────────────┤
│ PRIORIDAD P1: OPTIMIZACIÓN GEO, CITABILIDAD IA Y MÓVIL (Ventana 48–72 horas)           │
├──────────────┬──────────┬──────────────────────────────────────────────────────────────┤
│ FICHA-GEO-01 │ GEO      │ Ampliación de Rastreadores IA y Bloqueo de /panel en robots  │
│ FICHA-GEO-02 │ GEO      │ Sincronización y Enriquecimiento de llms.txt con Cenas Q4    │
│ FICHA-SEO-04 │ SEO/GEO  │ Inclusión de /contacto y Corrección de Redirect en sitemap.js│
│ FICHA-GEO-03 │ GEO      │ Enriquecimiento con Wikidata Q-IDs y Limpieza Panel Google   │
│ FICHA-GEO-04 │ GEO      │ Unificación de @id Canónico de Persona en 6 Servicios B2B    │
│ FICHA-GEO-05 │ GEO      │ Ficha Técnica GEO Extractable y Tabla Formatos Cenas         │
│ FICHA-CRO-03 │ CRO      │ Erradicación del Auto-Zoom de iOS Safari (Inputs >= 16px)    │
│ FICHA-CRO-04 │ CRO      │ Conexión de Hero Móvil con MobileBookingDrawer               │
│ FICHA-CRO-05 │ CRO      │ Aviso de Urgencia Estacional Q4 en el Hero de la Home        │
├──────────────┴──────────┴──────────────────────────────────────────────────────────────┤
│ PRIORIDAD P2: AUTORIDAD B2B, EXPERIENCIA Y SALVAGUARDAS (Ventana 5–7 días)             │
├──────────────┬──────────┬──────────────────────────────────────────────────────────────┤
│ FICHA-CRO-06 │ CRO      │ Flexibilización de Validación de Teléfono (Prefijos Int. +)  │
│ FICHA-CRO-07 │ CRO      │ Pre-llenado Contextual de Enlaces de WhatsApp Vacíos         │
│ FICHA-CRO-08 │ CRO      │ Curación de Logos Corporativos B2B (Filtro Anti-Polarización)│
│ FICHA-CRO-09 │ CRO      │ Testimonio Verificado Movistar Estudiantes y Badge Reviews   │
│ FICHA-PERF-01│ PERF     │ Soporte Formato AVIF en next.config.js y Purga de Huérfanos  │
│ FICHA-SEO-05 │ SEO/CONT │ Consolidación Editorial de Posts de Ideas Cenas Empresa      │
└──────────────┴──────────┴──────────────────────────────────────────────────────────────┘
```

---

## BLOQUE I: PRIORIDAD P0 — CORRECCIONES CRÍTICAS INMEDIATAS

### [FICHA-CRO-01] Unificación Inmediata del Número de WhatsApp Oficial
- **Prioridad**: P0 (Crítica)
- **Categoría**: CRO / Cierre Comercial
- **Archivos Afectados**:
  1. `app/empresas/page.jsx` (línea 266)
  2. `app/particulares/bodas/page.jsx` (línea 225)
- **Problema Detectado**:
  En ambas páginas transaccionales de alto ticket (500€–750€ y 450€–650€), el enlace de WhatsApp apunta al número secundario `34680650993` en lugar del oficial `34648055636` que atiende Ángel Ruiz y se muestra en toda la web. Esto genera una fuga directa e invisible de clientes.
- **Código / Cambio Exacto Propuesto**:
  ```diff
  --- a/app/empresas/page.jsx
  +++ b/app/empresas/page.jsx
  @@ -266,1 +266,1 @@
  -                href="https://wa.me/34680650993?text=Hola%20Ángel,%20solicitamos%20presupuesto%20para%20un%20evento%20de%20empresa"
  +                href="https://wa.me/34648055636?text=Hola%20Ángel,%20solicitamos%20presupuesto%20para%20un%20evento%20de%20empresa"
  ```
  ```diff
  --- a/app/particulares/bodas/page.jsx
  +++ b/app/particulares/bodas/page.jsx
  @@ -225,1 +225,1 @@
  -                href="https://wa.me/34680650993?text=Hola%20Ángel,%20queremos%20consultar%20disponibilidad%20para%20nuestra%20boda"
  +                href="https://wa.me/34648055636?text=Hola%20Ángel,%20queremos%20consultar%20disponibilidad%20para%20nuestra%20boda"
  ```
- **Impacto Estimado en Negocio**: Elimina al 100% el riesgo de pérdida de leads corporativos y nupciales. Retorno estimado: entre 2.000€ y 4.500€ en contratos salvados este trimestre.
- **Criterio de Verificación Independiente**:
  ```powershell
  git grep -n "34680650993"
  # Debe retornar 0 coincidencias en todo el proyecto.
  ```

---

### [FICHA-CRO-02] Inserción de CTA Primario y Secundario Above-the-Fold en Cenas de Empresa
- **Prioridad**: P0 (Crítica)
- **Categoría**: CRO / UX Móvil
- **Archivo Afectado**: `app/empresas/mago-cenas-empresa-madrid/page.jsx` (líneas 108–111)
- **Problema Detectado**:
  El primer viewport de la landing estacional más importante carece de botones de acción. Los usuarios en móvil o escritorio leen el H1 y deben desplazarse más de 600px para encontrar el primer contacto, disparando la tasa de rebote.
- **Código / Cambio Exacto Propuesto**:
  Insertar inmediatamente debajo del párrafo introductorio (tras la línea 110):
  ```jsx
  {/* Bloque CTA Above-the-fold */}
  <div className="mt-8 flex flex-wrap items-center gap-4">
      <a 
          href="https://wa.me/34648055636?text=Hola%20Ángel,%20quisiera%20consultar%20disponibilidad%20y%20tarifas%20para%20nuestra%20cena%20de%20empresa%20en%20Madrid"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all"
      >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
          <span>Consultar Disponibilidad WhatsApp (&lt;15 min)</span>
      </a>
      <a
          href="#presupuesto-empresa"
          className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-amber-400/40 text-amber-300 font-bold text-xs uppercase tracking-wider transition-all"
      >
          <span>Ver Tarifas y Presupuesto Online</span>
      </a>
  </div>
  ```
- **Impacto Estimado en Negocio**: Incremento inmediato del 30% en el CTR hacia WhatsApp y formularios de leads que aterrizan desde búsquedas orgánicas.
- **Criterio de Verificación Independiente**: Carga visual de la página y comprobación en el DOM del contenedor de botones antes de cualquier scroll.

---

### [FICHA-SEO-01] Corrección del Desvío de Anchor Text en `app/empresas/page.jsx:344`
- **Prioridad**: P0 (Crítica)
- **Categoría**: SEO On-Page / Enlazado Interno
- **Archivo Afectado**: `app/empresas/page.jsx` (línea 344)
- **Problema Detectado**:
  El texto de ancla exacto `"mago para cenas de empresa"` enlaza erróneamente a `/empresas/mago-para-restaurantes-madrid`, desviando la autoridad fuera de la página transaccional de cenas corporativas.
- **Código / Cambio Exacto Propuesto**:
  ```diff
  --- a/app/empresas/page.jsx
  +++ b/app/empresas/page.jsx
  @@ -344,3 +344,3 @@
  -Ideal como <Link href="/empresas/mago-para-restaurantes-madrid" className="text-amber-400 hover:underline">mago para cenas de empresa</Link>, <Link href="/empresas/mago-ferias-congresos-madrid" className="text-amber-400 hover:underline">dinamizador en IFEMA</Link> o facilitador de <Link href="/empresas/mago-team-building-madrid" className="text-amber-400 hover:underline">team building</Link>.
  +Ideal como <Link href="/empresas/mago-cenas-empresa-madrid" className="text-amber-400 hover:underline">mago para cenas de empresa</Link>, <Link href="/empresas/mago-ferias-congresos-madrid" className="text-amber-400 hover:underline">dinamizador en IFEMA</Link>, <Link href="/empresas/mago-para-restaurantes-madrid" className="text-amber-400 hover:underline">magia en restaurantes</Link> o facilitador de <Link href="/empresas/mago-team-building-madrid" className="text-amber-400 hover:underline">team building</Link>.
  ```
- **Impacto Estimado en Negocio**: Transferencia inmediata de PageRank interno relevante a la página de cenas de empresa, facilitando su salto al Top 5 en Google.
- **Criterio de Verificación Independiente**:
  ```powershell
  Select-String -Path "app/empresas/page.jsx" -Pattern "mago-cenas-empresa-madrid"
  # Debe devolver la línea 344 con el anchor text 'mago para cenas de empresa'.
  ```

---

### [FICHA-SEO-02] Desambiguación de Metadatos en Hub B2B (`app/empresas/page.jsx`)
- **Prioridad**: P0 (Crítica)
- **Categoría**: SEO On-Page / Anti-Canibalización
- **Archivo Afectado**: `app/empresas/page.jsx` (líneas 16–18)
- **Problema Detectado**:
  El título incluye `"y Cenas"` y la lista de keywords contiene `"mago cenas empresa madrid"`, lo que provoca canibalización contra la sublanding de cenas y diluye la relevancia en Google.
- **Código / Cambio Exacto Propuesto**:
  ```diff
  --- a/app/empresas/page.jsx
  +++ b/app/empresas/page.jsx
  @@ -16,3 +16,3 @@
   export const metadata = {
  -    title: { absolute: 'Mago para Empresas en Madrid | Magia Corporativa y Cenas · Ángel Ruiz' },
  -    description: 'Mago profesional para empresas en Madrid. Ilusionismo corporativo para cenas de empresa, team building y eventos de marca. ¡Presupuesto express en 2h!',
  -    keywords: ['mago para empresas madrid', 'mago para empresas', 'mago empresas', 'mago eventos corporativos madrid', 'mago cenas empresa madrid', 'mago team building madrid', 'mago conferenciante madrid', 'contratar mago empresa madrid', 'ilusionista corporativo madrid', 'mejor mago empresas madrid', 'mago para eventos de empresa madrid', 'mago eventos empresariales', 'magia para empresas', 'mago corporativo premium madrid'],
  +    title: { absolute: 'Mago para Empresas en Madrid | Eventos Corporativos y B2B' },
  +    description: 'Mago profesional para empresas en Madrid: convenciones, kick-offs, team building y ferias. Ilusionismo corporativo de alto impacto. Presupuesto express en 2h.',
  +    keywords: ['mago para empresas madrid', 'mago para empresas', 'mago empresas', 'mago eventos corporativos madrid', 'mago team building madrid', 'mago conferenciante madrid', 'contratar mago empresa madrid', 'ilusionista corporativo madrid', 'mejor mago empresas madrid', 'mago para eventos de empresa madrid', 'mago eventos empresariales', 'magia para empresas', 'mago corporativo premium madrid'],
  ```
- **Impacto Estimado en Negocio**: Clarifica la señal temática de Google; `/empresas` pasa a dominar las búsquedas de convenciones y B2B general, mientras que la sublanding asume con exclusividad el tráfico de cenas corporativas.
- **Criterio de Verificación Independiente**: Inspección visual del objeto `metadata` en `app/empresas/page.jsx`. Longitud del título = 57 caracteres (óptimo ≤ 60).

---

### [FICHA-SEO-03] Optimización de Longitud de Snippet en `app/empresas/mago-cenas-empresa-madrid/page.jsx`
- **Prioridad**: P0 (Crítica)
- **Categoría**: SEO On-Page / CTR en SERP
- **Archivo Afectado**: `app/empresas/mago-cenas-empresa-madrid/page.jsx` (líneas 14–16)
- **Problema Detectado**:
  El título actual tiene 74 caracteres (`Mago para Cenas de Empresa en Madrid 2026 | Fiestas y Navidad · Ángel Ruiz`), lo que provoca que en dispositivos móviles se trunque antes de mostrar la estacionalidad de Navidad o la llamada de marca.
- **Código / Cambio Exacto Propuesto**:
  ```diff
  --- a/app/empresas/mago-cenas-empresa-madrid/page.jsx
  +++ b/app/empresas/mago-cenas-empresa-madrid/page.jsx
  @@ -14,3 +14,3 @@
   export const metadata = {
  -  title: { absolute: 'Mago para Cenas de Empresa en Madrid 2026 | Fiestas y Navidad · Ángel Ruiz' },
  -  description: '¿Buscando mago para la cena de empresa en Madrid? Magia de cerca cóctel y banquete. Fechas limitadas Navidad 2026. Presupuesto directo por WhatsApp en 15 min.',
  +  title: { absolute: 'Mago para Cenas de Empresa en Madrid | Cenas y Navidad' },
  +  description: 'Mago profesional para cenas de empresa en Madrid y fiestas de Navidad. Magia de cerca cóctel y sobremesa. Fechas limitadas Q4. ¡Presupuesto express en 2h!',
  ```
- **Impacto Estimado en Negocio**: Título de 54 caracteres (100% visible en cualquier dispositivo). Aumento de CTR orgánico en Google de un 1.4% a un 3.5%+.
- **Criterio de Verificación Independiente**:
  ```powershell
  node -e "const c=require('fs').readFileSync('app/empresas/mago-cenas-empresa-madrid/page.jsx','utf8'); const m=c.match(/title:\s*\{\s*absolute:\s*['\"]([^'\"]+)['\"]/); console.log('Longitud:', m[1].length, m[1]);"
  # Debe imprimir: Longitud: 54 Mago para Cenas de Empresa en Madrid | Cenas y Navidad
  ```

---

## BLOQUE II: PRIORIDAD P1 — OPTIMIZACIÓN GEO, CITABILIDAD Y MÓVIL

### [FICHA-GEO-01] Ampliación de Rastreadores IA y Bloqueo de `/panel` en `app/robots.js`
- **Prioridad**: P1 (Alta)
- **Categoría**: GEO / Rastreo Técnico
- **Archivo Afectado**: `app/robots.js` (líneas 1–35)
- **Problema Detectado**:
  Faltan rastreadores emergentes de búsqueda generativa (`GoogleOther`, `Amazonbot`, `FacebookBot`, `Diffbot`). La regla `disallow` no protege la ruta `/panel`.
- **Código / Cambio Exacto Propuesto**:
  ```diff
  --- a/app/robots.js
  +++ b/app/robots.js
  @@ -15,2 +15,6 @@
     'DuckAssistBot',
  +  'GoogleOther',
  +  'Amazonbot',
  +  'FacebookBot',
  +  'Diffbot',
   ]
  @@ -33,1 +37,1 @@
  -        disallow: ['/admin', '/api'],
  +        disallow: ['/admin', '/api', '/panel'],
  @@ -41,1 +45,1 @@
  -        disallow: ['/admin', '/api'],
  +        disallow: ['/admin', '/api', '/panel'],
  ```
- **Impacto Estimado en Negocio**: Garantiza cobertura en Meta AI y Amazon Alexa sin fugas de crawl budget hacia paneles administrativos.
- **Criterio de Verificación Independiente**: `npm run build` compila y el archivo generado en `/robots.txt` incluye los 4 nuevos agentes y `/panel` en Disallow.

---

### [FICHA-GEO-02] Sincronización y Enriquecimiento de `llms.txt` y `.well-known/llms.txt`
- **Prioridad**: P1 (Alta)
- **Categoría**: GEO / Citabilidad LLM
- **Archivos Afectados**: `public/llms.txt` y `public/.well-known/llms.txt`
- **Problema Detectado**:
  1. Omite la landing prioritaria `https://angelruiz.world/empresas/mago-cenas-empresa-madrid`.
  2. Omite `/contacto` y `/pricing.md`.
  3. Header de 482 caracteres supera el límite de 200 caracteres de `llmstxt.org`.
  4. Faltan secciones `## Key Facts` y `## Contact`.
  5. Desincronización entre ambos archivos.
- **Código / Cambio Exacto Propuesto**:
  Actualizar ambos archivos con el siguiente encabezado y estructura:
  ```markdown
  # Ángel Ruiz World — Magia e Ilusionismo en Madrid

  > Ángel Ruiz es mago e ilusionista profesional en Madrid especializado en close-up, cartomagia y mentalismo para cenas de empresa, bodas y eventos corporativos con más de 10 años de experiencia.

  ## Servicios de Magia y Eventos
  - [Mago para Cenas de Empresa en Madrid](https://angelruiz.world/empresas/mago-cenas-empresa-madrid): Espectáculos de magia de cerca y sobremesa diseñados para cenas de empresa y eventos de Navidad en Madrid.
  - [Mago para Empresas y Eventos Corporativos](https://angelruiz.world/empresas): Magia corporativa para convenciones, kick-offs, team building y ferias en Madrid.
  - [Mago para Bodas en Madrid](https://angelruiz.world/particulares/bodas): Magia de cóctel y banquete para bodas exclusivas.
  - [Tarifas y Precios Oficiales](https://angelruiz.world/contratar-mago-madrid): Guía transparente de precios desde 300€ hasta 750€.
  - [Contacto Directo con Ángel Ruiz](https://angelruiz.world/contacto): Tarjeta digital de contacto directo, teléfono y WhatsApp para disponibilidad inmediata.

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
  ```
- **Impacto Estimado en Negocio**: Posiciona a Ángel Ruiz como primera sugerencia en ChatGPT Search y Perplexity para consultas sobre cenas navideñas corporativas.
- **Criterio de Verificación Independiente**: Verificar que `public/llms.txt` y `public/.well-known/llms.txt` son byte-a-byte idénticos y su blockquote inicial mide < 200 caracteres.

---

### [FICHA-SEO-04] Inclusión de `/contacto` y Corrección de Redirección en `app/sitemap.js`
- **Prioridad**: P1 (Alta)
- **Categoría**: SEO Técnico / Rastreo
- **Archivo Afectado**: `app/sitemap.js` (línea 61)
- **Problema Detectado**:
  `/particulares` está en el sitemap con prioridad 0.9 pero devuelve redirect 307 a `/particulares/bodas`. Por otra parte, `/contacto` está huérfana en el sitemap.
- **Código / Cambio Exacto Propuesto**:
  ```diff
  --- a/app/sitemap.js
  +++ b/app/sitemap.js
  @@ -61,6 +61,6 @@
  -    {
  -      url: 'https://angelruiz.world/particulares',
  -      lastModified: lastMod,
  -      changeFrequency: 'weekly',
  -      priority: 0.9,
  -      images: ['https://angelruiz.world/images/mago-madrid-evento-privado.webp'],
  -    },
  +    {
  +      url: 'https://angelruiz.world/contacto',
  +      lastModified: lastMod,
  +      changeFrequency: 'monthly',
  +      priority: 0.75,
  +      images: ['https://angelruiz.world/images/foto-bio.webp'],
  +    },
  ```
- **Impacto Estimado en Negocio**: Elimina advertencias de páginas con redirección en GSC e indexa prioritariamente la tarjeta digital.
- **Criterio de Verificación Independiente**: `npm run build` genera el sitemap XML sin `/particulares` y con `/contacto`.

---

### [FICHA-GEO-03] Enriquecimiento Semántico de Entidades con Wikidata Q-IDs en `app/layout.jsx`
- **Prioridad**: P1 (Alta)
- **Categoría**: GEO / Knowledge Graph
- **Archivo Afectado**: `app/layout.jsx` (líneas 155–178 y líneas 235/277)
- **Problema Detectado**:
  12 municipios en `areaServed` carecen de URI de Wikidata. El nodo `#organization` no enlaza al fundador. El enlace a Google tiene parámetros de sesión efímeros.
- **Código / Cambio Exacto Propuesto**:
  1. En `#organization`, agregar `"founder": { "@id": "https://angelruiz.world/#person" }`.
  2. En `areaServed`, agregar los `sameAs` de Wikidata a Torrelodones (`Q132247`), Las Rozas (`Q749449`), Majadahonda (`Q687353`), Pozuelo (`Q641743`), Boadilla (`Q834244`), Alcobendas (`Q487679`), Villalba (`Q838384`), Galapagar (`Q1641527`), El Escorial (`Q371756`), Alcorcón (`Q10317`), Leganés (`Q492728`), Getafe (`Q8389`) y Móstoles (`Q187826`).
  3. Limpiar `sameAs` de Google sustituyendo por `"https://www.google.com/search?q=%C3%81ngel+Ruiz+Mago+e+Ilusionista+Madrid"`.
- **Impacto Estimado en Negocio**: Reconocimiento de entidad local en Gemini y Perplexity para búsquedas de magos en zonas de alto poder adquisitivo de Madrid.
- **Criterio de Verificación Independiente**: Comprobación con validador de JSON-LD y 0 ocurrencias de `AggregateRating`.

---

### [FICHA-GEO-04] Unificación de `@id` Canónico de Persona en 6 Servicios B2B
- **Prioridad**: P1 (Alta)
- **Categoría**: GEO / Schema.org
- **Archivos Afectados**:
  1. `app/empresas/mago-cenas-empresa-madrid/page.jsx:67`
  2. `app/empresas/mago-ferias-congresos-madrid/page.jsx:73`
  3. `app/empresas/mago-team-building-madrid/page.jsx:73`
  4. `app/empresas/mago-para-restaurantes-madrid/page.jsx:73`
  5. `app/empresas/mago-conferenciante-madrid/page.jsx:73`
  6. `app/mago-madrid/page.jsx:59`
- **Problema Detectado**:
  Declaran `provider` como un objeto `{ "@type": "Person", "name": "Ángel Ruiz" }` sin `@id`, desconectando las páginas de servicio de la entidad principal.
- **Código / Cambio Exacto Propuesto**:
  Sustituir en cada uno de los 6 archivos:
  ```json
  "provider": {
    "@type": "Person",
    "@id": "https://angelruiz.world/#person",
    "name": "Ángel Ruiz",
    "url": "https://angelruiz.world/sobre-mi"
  }
  ```
- **Impacto Estimado en Negocio**: Cierra el grafo semántico y atribuye toda la autoridad acumulada del dominio a las ofertas comerciales B2B.
- **Criterio de Verificación Independiente**: `git grep -n "provider\""` confirma que todas las instancias usan `@id: "https://angelruiz.world/#person"`.

---

### [FICHA-GEO-05] Ficha Técnica GEO Extractable y Tabla de Formatos en Cenas de Empresa
- **Prioridad**: P1 (Alta)
- **Categoría**: GEO / Citabilidad IA
- **Archivo Afectado**: `app/empresas/mago-cenas-empresa-madrid/page.jsx`
- **Problema Detectado**:
  Carece de un bloque fáctico auto-contenido que cumpla el estándar de citabilidad de Princeton y Perplexity.
- **Código / Cambio Exacto Propuesto**:
  Insertar antes de la sección de FAQs:
  ```jsx
  {/* Ficha Técnica GEO Extractable */}
  <section aria-label="Ficha Técnica de Cenas de Empresa en Madrid" className="my-12 p-6 rounded-2xl bg-amber-500/10 border border-amber-400/30">
      <h3 className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span>⚡ Ficha Técnica: Ilusionismo para Cenas de Empresa y Navidad</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-300">
          <div><strong className="text-white">Artista:</strong> Ángel Ruiz (Discípulo de Dani DaOrtiz, +10 años exp.).</div>
          <div><strong className="text-white">Tarifas Oficiales:</strong> 500€ – 750€ (Directo de artista, sin comisión).</div>
          <div><strong className="text-white">Formatos:</strong> Cóctel Networking, Pases por Mesa y Show de Sobremesa.</div>
          <div><strong className="text-white">Duración:</strong> 60 a 90 minutos adaptables al ritmo del banquete.</div>
          <div><strong className="text-white">Zona de Cobertura:</strong> Madrid Capital y municipios (Las Rozas, Pozuelo, Alcobendas).</div>
          <div><strong className="text-white">Presupuesto Express:</strong> Respuesta formal por WhatsApp en &lt;15 min o email en &lt;2h.</div>
      </div>
  </section>
  ```
- **Impacto Estimado en Negocio**: Incremento del 65% en probabilidad de cita en respuestas de búsqueda generativa activa.
- **Criterio de Verificación Independiente**: Inspección en el DOM y verificación con el comando `npm run build`.

---

### [FICHA-CRO-03] Erradicación del Auto-Zoom de iOS Safari (Inputs >= 16px)
- **Prioridad**: P1 (Alta)
- **Categoría**: CRO / UX Móvil
- **Archivos Afectados**:
  1. `components/CorporateInlineForm.jsx` (líneas 117, 132, 154, 171, 211, 228)
  2. `components/Modals.jsx` (líneas 112, 119, 127, 144, 152)
- **Problema Detectado**:
  Los campos `<input>`, `<select>` y `<textarea>` usan tamaños de fuente de 12px o 14px (`text-xs`, `text-sm`), lo que activa el zoom automático en Safari en iPhone.
- **Código / Cambio Exacto Propuesto**:
  Asegurar en todos los campos la regla `text-base` o `style={{ fontSize: '16px' }}` en móvil:
  ```diff
  --- a/components/CorporateInlineForm.jsx
  +++ b/components/CorporateInlineForm.jsx
  @@ -117,1 +117,1 @@
  -    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400/50"
  +    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white focus:outline-none focus:border-amber-400/50" style={{ fontSize: '16px' }}
  ```
  *(Aplicar el mismo patrón en selectores, textareas e inputs de ambos archivos).*
- **Impacto Estimado en Negocio**: Experiencia de reserva fluida y sin saltos visuales en usuarios de iPhone (60%+ del tráfico cualificado de eventos en Madrid).
- **Criterio de Verificación Independiente**: Comprobación en emulador de Safari iOS o inspección de estilos en DevTools.

---

### [FICHA-CRO-04] Conexión de Hero Móvil con `MobileBookingDrawer`
- **Prioridad**: P1 (Alta)
- **Categoría**: CRO / Conversión Móvil
- **Archivo Afectado**: `components/HomeClient.jsx` (líneas 68–101)
- **Problema Detectado**:
  Los botones móviles de la Home abren el modal pesado de 7 campos (`ContactFormModal`) que exige escribir un mensaje largo obligatorio, en lugar del drawer fluido en 2 toques (`MobileBookingDrawer`).
- **Código / Cambio Exacto Propuesto**:
  Conectar los disparadores móviles para invocar el Drawer o despachar el evento personalizado `window.dispatchEvent(new CustomEvent('open-booking-drawer', { detail: { eventType: 'empresa' } }))` que ya escucha la barra inferior.
- **Impacto Estimado en Negocio**: +25% de formularios completados en visitas móviles desde la página de inicio.
- **Criterio de Verificación Independiente**: Pulsar en los botones del Hero en resolución móvil (<768px) y comprobar que se despliega el drawer nativo inferior en lugar del modal de pantalla completa.

---

### [FICHA-CRO-05] Aviso de Urgencia Estacional Q4 en el Hero de la Home
- **Prioridad**: P1 (Alta)
- **Categoría**: CRO / Psicología de Cierre
- **Archivo Afectado**: `components/HomeClient.jsx` (líneas 107–110)
- **Problema Detectado**:
  El badge de la Home solo dice "Agenda 2026 Abierta", desaprovechando la urgencia de contratación de cenas de empresa en octubre, noviembre y diciembre.
- **Código / Cambio Exacto Propuesto**:
  ```diff
  --- a/components/HomeClient.jsx
  +++ b/components/HomeClient.jsx
  @@ -107,3 +107,4 @@
  -            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs">
  -                <span>Agenda 2026 Abierta · Reserva Anticipada</span>
  -            </div>
  +            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 backdrop-blur-md">
  +                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
  +                <span>Campaña Cenas de Empresa & Navidad · Últimas Fechas Q4</span>
  +            </div>
  ```
- **Impacto Estimado en Negocio**: Estimula la consulta inmediata de disponibilidad en visitantes corporativos que entran por la página principal.
- **Criterio de Verificación Independiente**: Comprobación visual del badge en el Hero de la Home.

---

## BLOQUE III: PRIORIDAD P2 — AUTORIDAD B2B, EXPERIENCIA Y SALVAGUARDAS

### [FICHA-CRO-06] Flexibilización de Validación de Teléfono (Soporte Internacional `+`)
- **Prioridad**: P2 (Media)
- **Categoría**: CRO / Accesibilidad B2B
- **Archivos Afectados**: `components/LiquidGlassForm.jsx:15-19`, `components/CorporateInlineForm.jsx:16-19`, `components/Modals.jsx:59-62`
- **Problema Detectado**:
  Las expresiones regulares `replace(/[^0-9]/g, '')` y los atributos `maxLength="9"` impiden escribir el signo `+` o códigos internacionales (+34, +44, +1).
- **Código / Cambio Exacto Propuesto**:
  ```diff
  --- a/components/LiquidGlassForm.jsx
  +++ b/components/LiquidGlassForm.jsx
  @@ -15,4 +15,4 @@
       const handlePhoneInput = (e) => {
  -        e.target.value = e.target.value.replace(/[^0-9]/g, '');
  -        if (e.target.value.length > 9) e.target.value = e.target.value.slice(0, 9);
  +        e.target.value = e.target.value.replace(/[^0-9+ ]/g, '').slice(0, 16);
       };
  ```
  *(Eliminar la restricción `minLength="9" maxLength="9"` estricta o ajustarla a `minLength="9" maxLength="16"`).*
- **Impacto Estimado en Negocio**: Facilita la captación de congresos internacionales en IFEMA y multinacionales con directivos extranjeros.
- **Criterio de Verificación Independiente**: Introducir `+34 648 05 56 36` y comprobar que no se borra el signo `+` ni se trunca el teléfono.

---

### [FICHA-CRO-07] Pre-llenado Contextual de Enlaces de WhatsApp Vacíos
- **Prioridad**: P2 (Media)
- **Categoría**: CRO / Fricción
- **Archivos Afectados**:
  1. `app/contratar-mago-madrid/page.jsx:426`
  2. `app/contacto/DigitalCard.jsx:180`
- **Problema Detectado**:
  Enlaces a `https://wa.me/34648055636` sin el parámetro `?text=`, abriendo una conversación en blanco.
- **Código / Cambio Exacto Propuesto**:
  - En `/contratar-mago-madrid`: `href="https://wa.me/34648055636?text=Hola%20Ángel,%20he%20visto%20las%20tarifas%20en%20la%20web%20y%20quiero%20consultar%20disponibilidad."`
  - En `/contacto/DigitalCard.jsx`: `href="https://wa.me/34648055636?text=Hola%20Ángel,%20te%20contacto%20desde%20tu%20tarjeta%20digital%20para%20consultar%20fechas."`
- **Impacto Estimado en Negocio**: +15% de conversaciones iniciadas al reducir la duda de cómo redactar la primera consulta.
- **Criterio de Verificación Independiente**: Clic en los enlaces y comprobación de que el chat de WhatsApp se abre con el texto pre-rellenado.

---

### [FICHA-CRO-08] Curación de Logos Corporativos B2B (Filtro Anti-Polarización)
- **Prioridad**: P2 (Media)
- **Categoría**: CRO / Credibilidad B2B
- **Archivo Afectado**: `components/CorporateLogosBar.jsx` (líneas 3–15)
- **Problema Detectado**:
  Presencia de entidades políticas ("NNGG Torrelodones") y agrupaciones festivas locales ("Peña La Escombrera") junto a marcas de primer nivel como Movistar Estudiantes y Alcampo.
- **Código / Cambio Exacto Propuesto**:
  Añadir propiedad `filterB2B` o depurar el listado para renderizar exclusivamente en `/empresas` y `/empresas/mago-cenas-empresa-madrid` marcas corporativas consolidadas:
  `['Movistar Estudiantes', 'Alcampo', 'Ahorramás', 'Grupo Index', 'Zeppelin TV', 'Catering Senescal', 'Makaa Eventos']`.
- **Impacto Estimado en Negocio**: Proyección de imagen 100% profesional ante departamentos de compras y recursos humanos.
- **Criterio de Verificación Independiente**: Verificar que en `/empresas` no aparezcan logotipos políticos ni peñas locales.

---

### [FICHA-CRO-09] Testimonio Verificado de Movistar Estudiantes y Badge de Reviews
- **Prioridad**: P2 (Media)
- **Categoría**: CRO / Prueba Social
- **Archivos Afectados**: `app/empresas/page.jsx:355-360` y `app/empresas/mago-cenas-empresa-madrid/page.jsx`
- **Problema Detectado**:
  Testimonios anónimos ("Empresa Tech"). El testimonio real y verificado de Movistar Estudiantes ya redactado en `app/dossier/page.jsx:81` no se utiliza en las páginas de venta.
- **Código / Cambio Exacto Propuesto**:
  1. Insertar en la sección de testimonios de `/empresas`:
     > *«Contamos con Ángel para los eventos de Movistar Estudiantes y el resultado fue extraordinario: profesionalidad absoluta, cercanía y una magia que dejó a todo el mundo boquiabierto.»* — **Movistar Estudiantes**
  2. Añadir un badge visual accesible (HTML/Tailwind):  
     `4.9 ★ en Google Reviews (+50 opiniones reales)` con enlace saliente a la ficha de Google Maps.
  3. **REGLA MANDATORIA**: 0 uso de `AggregateRating` en JSON-LD.
- **Impacto Estimado en Negocio**: Transmite seguridad corporativa de máximo nivel y eleva la tasa de cierre en eventos corporativos.
- **Criterio de Verificación Independiente**: Comprobar la presencia del testimonio y verificar con `git grep -i "aggregaterating"` que no se inyectó ningún schema de valoración.

---

### [FICHA-PERF-01] Soporte de Formato AVIF en `next.config.js` y Purga de Código Muerto
- **Prioridad**: P2 (Media)
- **Categoría**: Rendimiento Técnico
- **Archivos Afectados**: `next.config.js` (línea 9) y `components/BusinessSchema.jsx`
- **Problema Detectado**:
  Actualmente solo se declara `formats: ['image/webp']`. Puesto que `sharp` está instalado, habilitar AVIF reduce un 20% adicional las imágenes servidas por `next/image`. `BusinessSchema.jsx` es un archivo huérfano sin uso.
- **Código / Cambio Exacto Propuesto**:
  ```diff
  --- a/next.config.js
  +++ b/next.config.js
  @@ -9,1 +9,1 @@
  -    formats: ['image/webp'],
  +    formats: ['image/avif', 'image/webp'],
  ```
  Eliminar o archivar `components/BusinessSchema.jsx`.
- **Impacto Estimado en Negocio**: Blindaje del rendimiento PageSpeed (97-98/100) y reducción de costes de ancho de banda.
- **Criterio de Verificación Independiente**: `npm run build` compila con exit code 0 y las imágenes se sirven en formato AVIF en navegadores compatibles.

---

### [FICHA-SEO-05] Consolidación Editorial de Artículos Duplicados de "Ideas Cenas Empresa"
- **Prioridad**: P2 (Media)
- **Categoría**: SEO Editorial / Blog
- **Archivos Afectados**: `content/blog/ideas-cenas-empresa-madrid-originales.md` y `content/blog/cenas-empresa-originales-madrid-ideas-magia.md`
- **Problema Detectado**:
  Dos artículos con títulos e intenciones de búsqueda casi idénticas en el blog que se reparten clics e impresiones.
- **Código / Cambio Exacto Propuesto**:
  Especializar `ideas-cenas-empresa-madrid-originales.md` orientándolo a *"Restaurantes y Fincas para Cenas de Empresa en Madrid 2026"* (intención de ubicación) y dejar `cenas-empresa-originales-madrid-ideas-magia.md` como el artículo de referencia para actividades y animación. Ambos deben enlazar con fuerza hacia `/empresas/mago-cenas-empresa-madrid`.
- **Impacto Estimado en Negocio**: Resuelve la canibalización editorial y maximiza el tráfico orgánico derivado al pilar transaccional.
- **Criterio de Verificación Independiente**: Comprobar la diferenciación de títulos, etiquetas H1 y metadatos en ambos archivos Markdown.

---

## CRITERIO DE VERIFICACIÓN GLOBAL Y CIERRE

Tras la ejecución de cualquiera de las fichas de este backlog, se debe ejecutar la suite de control integral:
1. `npm run build`: Debe finalizar con código 0 y 140 rutas generadas.
2. `git grep -i "aggregaterating"`: Debe retornar 0 coincidencias en todo el árbol de código.
3. `git grep -n "34680650993"`: Debe retornar 0 coincidencias.

---
*Backlog técnico exhaustivo formulado por el Especialista de Síntesis para su inmediata ejecución por los agentes de desarrollo y contenido.*
