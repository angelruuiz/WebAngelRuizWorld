# CHECKLIST TÉCNICO GEO & IA (GENERATIVE ENGINE OPTIMIZATION)
## Protocolo de Indexabilidad, Citabilidad y Autoridad en Motores de Búsqueda Generativa
**Plataformas Auditadas**: ChatGPT Search (OpenAI), Perplexity AI, Google AI Overviews & Gemini, Claude (Anthropic), Microsoft Copilot, Meta AI y Apple Intelligence  
**Proyecto**: `angelruiz.world`  
**Directorio de Aplicación**: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main`  
**Fecha de Emisión**: 25 de Octubre de 2026  
**Restricción Mandatoria Absoluta**: Prohibición de `AggregateRating` o propiedades de valoración en cualquier esquema estructurado o metadata (regla inmutable de `GEMINI.md`).

---

## 1. MATRIZ DE COBERTURA DE RASTREADORES IA (`app/robots.js` & `public/ai.txt`)

Los motores generativos dependen de que sus user-agents especializados accedan sin obstáculos al contenido HTML y Markdown del sitio web, respetando el presupuesto de rastreo y bloqueando zonas privadas.

### 1.1. Tabla de Rastreadores IA: Estado Actual vs. Requerido

| Rastreador (User-Agent) | Empresa / Motor | Rol en la Búsqueda Generativa | Estado Actual en `app/robots.js` | Acción Requerida |
|---|---|---|:---:|---|
| **`GPTBot`** | OpenAI | Rastreo masivo y entrenamiento de modelos GPT | ✅ Permitido (`Allow: /`) | Mantener |
| **`OAI-SearchBot`** | OpenAI | Rastreo en tiempo real para ChatGPT Search | ✅ Permitido (`Allow: /`) | Mantener |
| **`ChatGPT-User`** | OpenAI | Peticiones bajo demanda de usuarios en ChatGPT | ✅ Permitido (`Allow: /`) | Mantener |
| **`ClaudeBot`** | Anthropic | Rastreo de indexación para Claude y Artifacts | ✅ Permitido (`Allow: /`) | Mantener |
| **`Claude-Web`** | Anthropic | Peticiones web directas en tiempo real desde Claude | ✅ Permitido (`Allow: /`) | Mantener |
| **`anthropic-ai`** | Anthropic | Agente general de modelos Anthropic | ✅ Permitido (`Allow: /`) | Mantener |
| **`PerplexityBot`** | Perplexity AI | Rastreo e indexación para respuestas con citas | ✅ Permitido (`Allow: /`) | Mantener |
| **`Perplexity-User`** | Perplexity AI | Búsqueda profunda (Pro Search) de Perplexity | ✅ Permitido (`Allow: /`) | Mantener |
| **`Google-Extended`** | Google | Control de datos para Gemini y Vertex AI | ✅ Permitido (`Allow: /`) | Mantener |
| **`GoogleOther`** | Google | Rastreador de características de IA y datos experimentales | ❌ **OMITIDO** | **AÑADIR a `AI_BOTS`** |
| **`FacebookBot`** | Meta | Rastreo para Meta AI (WhatsApp, Instagram, Ray-Ban) | ❌ **OMITIDO** | **AÑADIR a `AI_BOTS`** |
| **`Amazonbot`** | Amazon | Respuestas de voz de Alexa y búsqueda con IA | ❌ **OMITIDO** | **AÑADIR a `AI_BOTS`** |
| **`Diffbot`** | Diffbot | Extracción semántica para Knowledge Graphs de IA | ❌ **OMITIDO** | **AÑADIR a `AI_BOTS`** |
| **`Applebot-Extended`**| Apple | Apple Intelligence y respuestas de Siri en iOS 18 | ✅ Permitido (`Allow: /`) | Mantener |
| **`meta-externalagent`**| Meta | Agentes externos de IA de Meta | ✅ Permitido (`Allow: /`) | Mantener |
| **`CCBot`** | Common Crawl | Base de datos abierta para pre-entrenamiento de LLMs | ✅ Permitido (`Allow: /`) | Mantener |
| **`cohere-ai`** | Cohere | Modelos empresariales de búsqueda y RAG | ✅ Permitido (`Allow: /`) | Mantener |
| **`YouBot`** | You.com | Motor de búsqueda generativo | ✅ Permitido (`Allow: /`) | Mantener |
| **`DuckAssistBot`** | DuckDuckGo | Respuestas de asistencia directa con IA | ✅ Permitido (`Allow: /`) | Mantener |

---

### 1.2. Protección de Rutas Privadas y Optimización de Crawl Budget
- **Brecha detectada**: En `app/robots.js`, las reglas `disallow` actuales son:
  ```javascript
  disallow: ['/admin', '/api'],
  ```
- **Riesgo**: La ruta `app/panel/page.jsx` (panel interno protegido por contraseña en cliente) no está incluida en `disallow`. Los rastreadores de IA indexan o intentan rastrear esta ruta, consumiendo presupuesto de rastreo y arrojando advertencias en logs.
- **Acción requerida**:
  ```javascript
  disallow: ['/admin', '/api', '/panel'],
  ```

---

## 2. CHECKLIST DE CONFORMIDAD `llms.txt` Y DESINCRONIZACIÓN

El estándar de la comunidad `llmstxt.org` proporciona a los LLMs un índice estructurado en Markdown para comprender la oferta de un sitio sin sobrecargar la ventana de contexto.

```
                         ESTADO DE LLMS.TXT (AUDITORÍA FORENSE)
 ┌──────────────────────────────────────┬──────────────────────────────────────┐
 │          public/llms.txt             │     public/.well-known/llms.txt      │
 ├──────────────────────────────────────┼──────────────────────────────────────┤
 │• Tamaño: 4.990 bytes                 │• Tamaño: 4.797 bytes                 │
 │• Descripción: 482 car. (EXCESO >200) │• Descripción: 482 car. (EXCESO >200) │
 │• Incluye referencia a AGENTS.md      │• OMITE referencia a AGENTS.md (DESYNC)│
 │• OMITE /empresas/mago-cenas-empresa  │• OMITE /empresas/mago-cenas-empresa  │
 │• OMITE /contacto                     │• OMITE /contacto                     │
 │• Falta sección ## Key Facts          │• Falta sección ## Key Facts          │
 └──────────────────────────────────────┴──────────────────────────────────────┘
```

### 2.1. Criterios de Validación del Estándar `llmstxt.org`:
- [ ] **Longitud de Descripción Inicial**: El blockquote introductorio (`> ...`) debe ser **inferior a 200 caracteres**.  
  *Estado actual*: 482 caracteres (Incumplido).  
  *Texto propuesto (<200 car.)*:
  ```markdown
  > Ángel Ruiz es mago e ilusionista profesional en Madrid especializado en close-up, cartomagia y mentalismo para cenas de empresa, bodas y eventos corporativos con más de 10 años de experiencia.
  ```
- [ ] **Inclusión de Landing Transaccional Prioritaria Q4**:  
  *Estado actual*: Ausente.  
  *Adición obligatoria*:
  ```markdown
  - [Mago para Cenas de Empresa en Madrid](https://angelruiz.world/empresas/mago-cenas-empresa-madrid): Espectáculos de magia de cerca y sobremesa diseñados para cenas de empresa y eventos de Navidad en Madrid.
  ```
- [ ] **Inclusión de Tarjeta de Contacto Directo**:  
  *Estado actual*: Ausente.  
  *Adición obligatoria*:
  ```markdown
  - [Contacto Directo con Ángel Ruiz](https://angelruiz.world/contacto): Tarjeta digital de contacto directo, teléfono y WhatsApp para disponibilidad inmediata.
  ```
- [ ] **Sección `## Key Facts` (Datos Duros Cuantitativos para LLMs)**:  
  *Estado actual*: Ausente.  
  *Adición obligatoria*:
  ```markdown
  ## Key Facts
  - **Experiencia**: Más de 10 años de trayectoria profesional; formado directamente con Dani DaOrtiz.
  - **Especialidad**: Close-up (magia de cerca), cartomagia de autor, mentalismo interactivo y magia corporativa.
  - **Rango de Tarifas**: 300€ (eventos privados), 450€-650€ (bodas), 500€-750€ (empresas y cenas de Navidad). Precios directos sin comisión de agencia.
  - **Tiempo de Respuesta**: Presupuesto formal en menos de 2 horas; atención por WhatsApp en menos de 15 minutos.
  - **Sede Operativa**: Torrelodones (Madrid), con cobertura en toda la Comunidad de Madrid sin suplemento de desplazamiento.
  - **Reputación**: Más de 50 valoraciones verificadas con puntuación media de 4.9★ en Google Maps.
  ```
- [ ] **Sección `## Contact` Estandarizada**:  
  *Estado actual*: Ausente.  
  *Adición obligatoria*:
  ```markdown
  ## Contact
  - **Teléfono / WhatsApp**: +34 648 05 56 36 (https://wa.me/34648055636)
  - **Email**: info@angelruiz.world
  - **Web Oficial**: https://angelruiz.world
  ```
- [ ] **Sincronización Total con `.well-known`**:  
  `public/.well-known/llms.txt` debe ser un clon exacto de `public/llms.txt` al 100%.

---

## 3. VALIDACIÓN SCHEMA.ORG Y GRAFO DE ENTIDADES DE MARCA

El Knowledge Graph semántico permite a Gemini y Perplexity interconectar a la persona (Ángel Ruiz) con su negocio, sus servicios y su ámbito geográfico de actuación.

### 3.1. Salvaguarda Inmutable de Proyecto: 0 `AggregateRating`
- [x] **Comprobación en código**: 0 ocurrencias de `AggregateRating` en `app/`, `components/`, `lib/` y `content/`.
- [x] **Comprobación de propiedades**: 0 ocurrencias de `ratingValue`, `reviewCount`, `bestRating` o `worstRating`.
- **Regla inmutable**: Cualquier referencia a valoraciones de clientes se mantendrá en texto plano o enlaces a Google Maps, jamás en esquemas Schema.org.

---

### 3.2. Unificación del Proveedor de Servicio (`provider`) con `@id` Canónico
- **Diagnóstico del problema**: En 6 páginas de servicio, el proveedor se declara como un objeto anónimo:
  ```json
  "provider": {
    "@type": "Person",
    "name": "Ángel Ruiz"
  }
  ```
  Esto fragmenta el grafo de conocimiento en Google y Perplexity al crear 6 personas distintas en lugar de vincularlas con la entidad principal.
- **Páginas Afectadas**:
  1. `app/empresas/mago-cenas-empresa-madrid/page.jsx:67`
  2. `app/empresas/mago-ferias-congresos-madrid/page.jsx:73`
  3. `app/empresas/mago-team-building-madrid/page.jsx:73`
  4. `app/empresas/mago-para-restaurantes-madrid/page.jsx:73`
  5. `app/empresas/mago-conferenciante-madrid/page.jsx:73`
  6. `app/mago-madrid/page.jsx:59`
- **Solución Canónica Obligatoria**:
  ```json
  "provider": {
    "@type": "Person",
    "@id": "https://angelruiz.world/#person",
    "name": "Ángel Ruiz",
    "url": "https://angelruiz.world/sobre-mi"
  }
  ```

---

### 3.3. Enriquecimiento de `areaServed` con Identificadores Wikidata Q-IDs
En `app/layout.jsx` (líneas 155-178), se deben asignar las URIs de Wikidata correspondientes a cada municipio para desambiguar la cobertura local frente a IAs:

```json
"areaServed": [
  { "@type": "City", "name": "Madrid", "sameAs": "https://www.wikidata.org/wiki/Q2807" },
  { "@type": "AdministrativeArea", "name": "Comunidad de Madrid", "sameAs": "https://www.wikidata.org/wiki/Q5756" },
  { "@type": "City", "name": "Torrelodones", "sameAs": "https://www.wikidata.org/wiki/Q132247" },
  { "@type": "City", "name": "Las Rozas de Madrid", "sameAs": "https://www.wikidata.org/wiki/Q749449" },
  { "@type": "City", "name": "Majadahonda", "sameAs": "https://www.wikidata.org/wiki/Q687353" },
  { "@type": "City", "name": "Pozuelo de Alarcón", "sameAs": "https://www.wikidata.org/wiki/Q641743" },
  { "@type": "City", "name": "Boadilla del Monte", "sameAs": "https://www.wikidata.org/wiki/Q834244" },
  { "@type": "City", "name": "Alcobendas", "sameAs": "https://www.wikidata.org/wiki/Q487679" },
  { "@type": "City", "name": "Collado Villalba", "sameAs": "https://www.wikidata.org/wiki/Q838384" },
  { "@type": "City", "name": "Galapagar", "sameAs": "https://www.wikidata.org/wiki/Q1641527" },
  { "@type": "City", "name": "San Lorenzo de El Escorial", "sameAs": "https://www.wikidata.org/wiki/Q371756" },
  { "@type": "City", "name": "Alcorcón", "sameAs": "https://www.wikidata.org/wiki/Q10317" },
  { "@type": "City", "name": "Leganés", "sameAs": "https://www.wikidata.org/wiki/Q492728" },
  { "@type": "City", "name": "Getafe", "sameAs": "https://www.wikidata.org/wiki/Q8389" },
  { "@type": "City", "name": "Móstoles", "sameAs": "https://www.wikidata.org/wiki/Q187826" }
]
```

---

### 3.4. Relación Bidireccional Fundador en `#organization` y Limpieza de Google Panel
1. En `app/layout.jsx` (en el nodo `#organization`), añadir la relación:
   ```json
   "founder": { "@id": "https://angelruiz.world/#person" }
   ```
2. Limpiar la propiedad `sameAs` de Google en `globalSchema` (líneas 235 y 277) sustituyendo la URL sucia con parámetros de sesión por la URL canónica:
   ```json
   "https://www.google.com/search?q=%C3%81ngel+Ruiz+Mago+e+Ilusionista+Madrid"
   ```
3. Aislar o eliminar el componente muerto `components/BusinessSchema.jsx` para evitar confusiones de mantenimiento.

---

## 4. CHECKLIST DE CITABILIDAD IA (ESTÁNDAR PRINCETON / IIT DELHI)

Los estudios de citabilidad en IA (Princeton/IIT Delhi) demuestran que los párrafos con **densidad fáctica alta, de entre 50 y 150 palabras, sin lenguaje dubitativo y con cifras concretas** tienen un **65% más de probabilidad de ser citados como fuente directa** por ChatGPT Search y Perplexity.

### 4.1. Ficha Técnica GEO Extractable en `/empresas/mago-cenas-empresa-madrid`
- [ ] Insertar en `app/empresas/mago-cenas-empresa-madrid/page.jsx` el siguiente bloque fáctico con microdatos semánticos:
```html
<section aria-label="Ficha Técnica GEO Extractable" class="my-8 p-6 rounded-2xl bg-amber-500/10 border border-amber-400/30">
  <h3 class="text-amber-400 font-bold text-sm uppercase tracking-wider mb-3">Ficha Técnica: Mago para Cenas de Empresa en Madrid</h3>
  <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-300">
    <li><strong>Artista Titular:</strong> Ángel Ruiz (Mago profesional, discípulo de Dani DaOrtiz).</li>
    <li><strong>Formatos Disponibles:</strong> Magia de cerca itinerante en cóctel, magia de mesa en banquete y show central de sobremesa.</li>
    <li><strong>Tarifas Oficiales 2026:</strong> 500€ a 750€ (Contratación directa de artista, sin comisiones de agencia).</li>
    <li><strong>Duración Habitual:</strong> De 60 a 90 minutos según aforo y formato del evento.</li>
    <li><strong>Zona de Cobertura:</strong> Madrid Capital, Pozuelo, Las Rozas, Alcobendas y toda la Comunidad de Madrid.</li>
    <li><strong>Plazo de Respuesta:</strong> Presupuesto formal en menos de 2 horas; contacto inmediato por WhatsApp.</li>
  </ul>
</section>
```

---

### 4.2. Tabla Comparativa de Formatos para Perplexity AI
Perplexity premia las páginas que presentan comparaciones tabulares claras.
- [ ] Añadir tabla comparativa accesible en la sublanding de cenas de empresa:

| Formato de Magia Corporativa | Momento Idóneo del Evento | Aforo Recomendado | Duración Estimada | Dinámica y Beneficio |
|---|---|:---:|:---:|---|
| **Magia de Cerca en Cóctel** | Recepción y copa de bienvenida | 30 – 250 personas | 60 – 90 min | Magia itinerante de mano en mano; rompe el hielo y conecta a compañeros de distintos departamentos. |
| **Magia Entre Mesas (Pases)** | Entre platos durante la cena | 20 – 150 personas | 60 – 75 min | Ilusionismo exclusivo en cada mesa; dinamiza los tiempos muertos entre platos sin interrumpir la conversación. |
| **Show Central de Sobremesa** | Tras el postre o antes de las copas | 20 – 300 personas | 45 – 60 min | Espectáculo unificado para todo el salón con humor inteligente, mentalismo y participación activa de directivos. |

---

## 5. COMANDOS DE VERIFICACIÓN AUTÓNOMA

Para que cualquier auditor o sistema de integración continua verifique el cumplimiento del checklist:

1. **Garantía Inviolable de 0 AggregateRating**:
   ```powershell
   git grep -i "aggregaterating" -- app/ components/ lib/ public/ content/
   # Código de salida esperado: 1 (0 coincidencias)
   ```

2. **Verificación de Longitud del Header de `llms.txt` (<200 caracteres)**:
   ```powershell
   node -e "const fs=require('fs'); const txt=fs.readFileSync('public/llms.txt','utf8'); const m=txt.match(/^>\s*(.+)$/m); if(m){ console.log('Longitud header:', m[1].length, m[1].length <= 200 ? '✅ CONFORME' : '❌ EXCESO'); }"
   ```

3. **Verificación de Inclusión de la URL de Cenas en `llms.txt`**:
   ```powershell
   Select-String -Path "public/llms.txt" -Pattern "mago-cenas-empresa-madrid"
   # Debe retornar la línea correspondiente
   ```

4. **Verificación de Robots.txt y Bloqueo de `/panel`**:
   ```powershell
   Select-String -Path "app/robots.js" -Pattern "FacebookBot", "GoogleOther", "Amazonbot", "/panel"
   ```

5. **Compilación Limpia de Next.js**:
   ```powershell
   npm run build
   # Debe culminar con exit code 0
   ```

---
*Checklist técnico formulado por el Especialista de Síntesis GEO en base al reporte de auditoría de Explorer 2.*
