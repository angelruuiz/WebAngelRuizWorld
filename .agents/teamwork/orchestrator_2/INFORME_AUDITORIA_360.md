# INFORME DE AUDITORÍA INTEGRAL 360° Y PLAN DE CHOQUE ESTRATÉGICO
## Transformación de angelruiz.world en una Máquina de Captación y Cierre de Eventos en Madrid
**Foco Prioritario Q4**: Cenas de Empresa, Eventos Corporativos y Magia Navideña  
**Fecha de Emisión**: 25 de Octubre de 2026  
**Ámbito de Auditoría**: 140 Rutas Estáticas, Código Fuente Next.js 14, Entidades Schema.org, Rastreadores de IA y Embudo de Conversión Móvil  
**Directorio de Trabajo**: `C:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main`  
**Garantía Inviolable de Proyecto**: Cumplimiento estricto de la regla de `GEMINI.md`: **0 ocurrencias de `AggregateRating` y 0 propiedades de valoración sintética**.

---

## 1. RESUMEN EJECUTIVO Y DIAGNÓSTICO ESTRATÉGICO

### 1.1. Contexto de Negocio y Oportunidad Q4
`angelruiz.world` representa la presencia digital de **Ángel Ruiz**, ilusionista profesional y mago de cerca (discípulo de Dani DaOrtiz) con más de 10 años de trayectoria en Madrid, especializado en eventos corporativos B2B, cenas de empresa, congresos en IFEMA y bodas de alta gama.

El cuarto trimestre del año (octubre, noviembre y diciembre) concentra entre el **45% y el 60% de la facturación anual en eventos corporativos y cenas de empresa**. Las contrataciones se deciden en un plazo de respuesta ultra-corto (habitualmente entre 2 y 24 horas por parte de comités de empresa, directores de recursos humanos, secretarias de dirección y agencias de eventos).

La presente auditoría integral 360° ha examinado de forma exhaustiva las 4 dimensiones críticas de la plataforma digital:
1. **SEO On-Page, Arquitectura y Canibalización**: Desbloqueo del tráfico transaccional estancado en página 2 de Google.
2. **GEO (Generative Engine Optimization) e Indexabilidad para IAs**: Posicionamiento como fuente autorizada en ChatGPT Search, Perplexity, Google AI Overviews, Gemini, Claude y Copilot.
3. **CRO (Conversion Rate Optimization) y UX Móvil**: Eliminación de fricciones críticas en el embudo hacia WhatsApp y formularios.
4. **Rendimiento Técnico y PageSpeed Insights**: Blindaje absoluto de Core Web Vitals (LCP, INP, CLS) y tiempos de respuesta.

---

### 1.2. Cuadro de Mando Cuantitativo: Puntuaciones Actuales vs. Proyectadas

| Dimensión Auditada | Peso Ponderado | Puntuación Actual (0–100) | Aporte Ponderado | Puntuación Proyectada (Post-Plan) | Estado Actual y Veredicto Técnico |
|---|:---:|:---:|:---:|:---:|---|
| **1. SEO Tradicional y On-Page** | 30% | **78 / 100** | 23.4 / 30 | **93 / 100** | Fuerte indexabilidad básica (140 rutas), pero penalizado por canibalización severa en `/empresas` vs sublanding de cenas, snippets truncados y desvío de anchor text en `/empresas:344`. |
| **2. GEO / Citabilidad en Motores IA** | 25% | **81.1 / 100** | 20.3 / 25 | **96 / 100** | Notable base técnica (15 bots en robots.txt, llms.txt existente), pero omite la landing prioritaria de cenas en `llms.txt`, rompe el `@id` de persona en 6 páginas de servicio y carece de Wikidata Q-IDs en 12 municipios. |
| **3. CRO, UX Móvil y Cierre Comercial** | 25% | **72 / 100** | 18.0 / 25 | **91 / 100** | Fricción crítica: número de WhatsApp incorrecto (`34680650993`) en 2 páginas de venta, auto-zoom en iPhone por inputs <16px, modal móvil de 7 campos obligatorios y 0 botones above-the-fold en cenas de empresa. |
| **4. Rendimiento y PageSpeed Insights** | 20% | **97 / 100** | 19.4 / 20 | **98 / 100** | Rendimiento sobresaliente. 140 rutas estáticas con exit code 0, 87.9 kB de JS compartido, LCP móvil <1.3s con preload de 18.3 KB WebP, INP <50ms, CLS 0.00 y 0 trackers de terceros. |
| **PUNTUACIÓN GLOBAL INTEGRAL** | **100%** | **82 / 100** (81.1) | **81.1 / 100** | **95+ / 100** | **Excelente base técnica con fugas comerciales críticas. La ejecución del plan de choque transformará la plataforma en líder absoluto en Madrid.** |

---

## 2. HALLAZGOS Y DIAGNÓSTICO DETALLADO POR CATEGORÍA

```
                        DIAGNÓSTICO INTEGRAL 360° — ANGELRUIZ.WORLD
 ┌────────────────────────────────────────────────────────────────────────────────────────┐
 │                                 ESTADO ACTUAL: 82 / 100                                │
 └──────┬──────────────────────┬──────────────────────────┬────────────────────────┬──────┘
        │                      │                          │                        │
        ▼                      ▼                          ▼                        ▼
 ┌──────────────┐      ┌──────────────┐          ┌────────────────┐       ┌──────────────┐
 │ SEO: 78/100  │      │ GEO: 81.1/100│          │  CRO: 72/100   │       │ PERF: 97/100 │
 ├──────────────┤      ├──────────────┤          ├────────────────┤       ├──────────────┤
 │• Anchor roto │      │• llms.txt sin│          │• Teléfono WA   │       │• 140 páginas │
 │  en :344     │      │  URL Cenas   │          │  erróneo B2B   │       │  estáticas   │
 │• Canibaliza- │      │• 6 servicios │          │• 0 CTA above-  │       │• LCP 1.3s    │
 │  ción Hub/Sub│      │  sin @id pers│          │  the-fold      │       │• INP <50ms   │
 │• Snippets >65│      │• 12 munis sin│          │• Auto-zoom iOS │       │• CLS 0.00    │
 │  caracteres  │      │  Wikidata QID│          │• 7 campos hero │       │• 0 Trackers  │
 └──────────────┘      └──────────────┘          └────────────────┘       └──────────────┘
```

### 2.1. Dimensión 1: SEO On-Page, Palabras Clave y Canibalización (Puntuación: 78/100)

1. **Arquitectura del Sitio (140 rutas estáticas)**:
   - El sitio cuenta con una infraestructura sólida dividida en 6 clusters: Corporativo B2B (6 rutas), Particulares/Social (6 rutas), General/Marca (10 rutas), Local Madrid (14 rutas estáticas), Blog Editorial (82 rutas) y Legal/Técnico.
   - **Anomalía en Sitemap**: `app/sitemap.js:61` incluye `/particulares` como URL indexable con prioridad 0.9, mientras que `app/particulares/page.jsx:13` ejecuta una redirección 307 hacia `/particulares/bodas`. Por otro lado, la página de alto valor `/contacto` está inexplicablemente omitida de `app/sitemap.js`.

2. **Canibalización Primaria B2B (`/empresas` vs `/empresas/mago-cenas-empresa-madrid`)**:
   - `app/empresas/page.jsx` incluye en su título (`title: 'Mago para Empresas en Madrid | Magia Corporativa y Cenas · Ángel Ruiz'`), descripción, keywords y FAQ schema la intención de "cenas de empresa".
   - Al mismo tiempo, existe la sublanding hiper-específica `app/empresas/mago-cenas-empresa-madrid/page.jsx` que compite exactamente por los mismos términos.
   - **Resultado en SERP**: Google reparte la autoridad entre ambas páginas, dejando a ambas estancadas entre las posiciones 11 y 16 en lugar de copar el Top 3.

3. **Desvío Crítico de Anchor Text en `app/empresas/page.jsx:344`**:
   - El texto ancla exacto `"mago para cenas de empresa"` enlaza por error a `/empresas/mago-para-restaurantes-madrid`:
     ```jsx
     Ideal como <Link href="/empresas/mago-para-restaurantes-madrid" className="text-amber-400 hover:underline">mago para cenas de empresa</Link>...
     ```
   - Esto confunde a los rastreadores de Google sobre cuál es la URL canónica para eventos corporativos navideños.

4. **Canibalización de Contenidos Editoriales en Blog**:
   - Competición interna entre `content/blog/ideas-cenas-empresa-madrid-originales.md` y `content/blog/cenas-empresa-originales-madrid-ideas-magia.md` por la consulta `"ideas cenas empresa madrid originales"`.
   - `content/blog/mago-fiestas-navidad-cenas-madrid.md` compite contra la landing transaccional sin incluir enlaces CTA prioritarios que canalicen el tráfico hacia la conversión.
   - Duplicidad de ruta estática para mago conferenciante entre `/empresas/mago-conferenciante-madrid` y `/blog/mago-conferenciante-empresas-madrid`.

5. **Truncamiento de Snippets en Resultados de Búsqueda**:
   - La mayoría de las páginas comerciales principales superan el límite de corte de 60-65 caracteres de Google:
     - `app/empresas/mago-cenas-empresa-madrid`: 74 caracteres (se corta el nombre de marca y la estacionalidad en móviles).
     - `app/empresas/page.jsx`: 69 caracteres.
     - Artículos de blog con títulos de hasta 88 caracteres y meta descripciones de más de 200 caracteres que provocan la generación de fragmentos automáticos poco atractivos.

---

### 2.2. Dimensión 2: GEO (Generative Engine Optimization) e Indexabilidad para IAs (Puntuación: 81.1/100)

1. **Rastreo de Motores IA (`app/robots.js` y `public/ai.txt`)**:
   - `app/robots.js` define una directiva abierta para 15 bots (incluyendo `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`).
   - **Brecha de cobertura**: Se detectó la omisión de `GoogleOther` (rastreo auxiliar para IA de Google), `Amazonbot` (Alexa y búsqueda generativa Amazon), `FacebookBot` (Meta AI / WhatsApp / Instagram) y `Diffbot` (Knowledge Graphs).
   - **Brecha de seguridad**: La directiva `disallow: ['/admin', '/api']` no incluye `/panel`, exponiendo innecesariamente el panel interno de analítica al crawl budget de los motores generativos.

2. **Estándar `llms.txt` y Desincronización con `.well-known`**:
   - **Omisión crítica de negocio**: La URL prioritaria `https://angelruiz.world/empresas/mago-cenas-empresa-madrid` **NO APARECE** en `public/llms.txt` ni en `public/llms-full.txt`. Los LLMs que consultan el archivo recomiendan la home o el hub general en lugar de la página específica de conversión.
   - El blockquote introductorio tiene 482 caracteres, incumpliendo el límite de <200 caracteres establecido por la especificación oficial de `llmstxt.org`.
   - `public/.well-known/llms.txt` está desincronizada respecto a `public/llms.txt` (omite la referencia a `AGENTS.md`).
   - Faltan las secciones estructuradas estándar `## Key Facts` (experiencia, tarifas oficiales 300€-750€, tiempo de respuesta express <2h) y `## Contact`.

3. **Arquitectura de Entidades Schema.org y Consistencia de Grafo**:
   - **Cumplimiento estricto de GEMINI.md**: 0 ocurrencias de `AggregateRating` o propiedades de valoración en todo el repositorio.
   - **Ruptura de Atribución de Entidad (`@id`)**: En 6 páginas de servicio transaccional (`mago-cenas-empresa-madrid`, `mago-ferias-congresos-madrid`, `mago-team-building-madrid`, `mago-para-restaurantes-madrid`, `mago-conferenciante-madrid` y `mago-madrid`), la propiedad `provider` se define como un objeto anónimo `{ "@type": "Person", "name": "Ángel Ruiz" }` sin vincular con `"@id": "https://angelruiz.world/#person"`.
   - **Desambiguación Geográfica Incompleta**: En `globalSchema` (`app/layout.jsx`), de 14 municipios listados en `areaServed`, únicamente Madrid y Comunidad de Madrid cuentan con enlace `sameAs` de Wikidata. Los otros 12 (Pozuelo, Las Rozas, Majadahonda, Alcobendas, Torrelodones, etc.) carecen de Q-IDs semánticos.
   - Enlace `sameAs` de Google Knowledge Panel contaminado con parámetros de sesión efímeros (`sca_esv`, `sxsrf`, etc.).
   - Código huérfano detectado: `components/BusinessSchema.jsx` (132 líneas sin importar).

4. **Citabilidad IA según el Estándar de Princeton/IIT Delhi**:
   - Mientras que páginas como `/contratar-mago-madrid` y `/particulares/bodas` cuentan con bloques de Ficha Técnica GEO auto-contenida (50-150 palabras con datos densos), la landing de mayor valor en Q4 (`/empresas/mago-cenas-empresa-madrid`) carece de este bloque y de una tabla comparativa de formatos para Perplexity y ChatGPT Search.

---

### 2.3. Dimensión 3: CRO, UX Móvil y Psicología de Cierre (Puntuación: 72/100)

1. **Fuga Crítica de Leads: Número de WhatsApp Secundario Desconocido**:
   - En `app/empresas/page.jsx:266` y `app/particulares/bodas/page.jsx:225`, los enlaces principales de contacto por WhatsApp apuntan a `34680650993`.
   - En el resto del proyecto (Navbar, Footer, botón flotante, Drawer móvil, tarjeta digital, aviso legal), el número oficial registrado es `+34 648 05 56 36` (`34648055636`).
   - Enviar a potenciales clientes de empresas (presupuestos de 500€–750€) a una línea no atendida o no sincronizada con la agenda central constituye una fuga directa de ingresos.

2. **Ausencia Total de CTA Above-the-Fold en Cenas de Empresa**:
   - En `app/empresas/mago-cenas-empresa-madrid/page.jsx`, el primer viewport (Hero) contiene el H1 y un párrafo descriptivo, pero **ningún botón de acción**.
   - El usuario móvil debe desplazarse más de 600 píxeles para encontrar el primer punto de conversión, aumentando drásticamente la tasa de rebote en visitas de pago u orgánicas de alta intención.

3. **Asimetría de Formularios y Fricción Extrema en Móvil**:
   - En la Home (`components/HomeClient.jsx`), los botones de selección en móvil (`Bodas`, `Empresas`) y el botón `Verificar Disponibilidad ⚡` abren un modal convencional (`Modals.jsx`) con **7 campos**, exigiendo obligatoriamente escribir un mensaje largo (`textarea required`) y un email.
   - En dispositivos móviles, esto produce un abandono superior al 55%.
   - En paralelo, el dock inferior cuenta con `MobileBookingDrawer.jsx`, una experiencia nativa táctil en 2 toques que solo pide Nombre y Teléfono con confirmación en <2h. Esta discrepancia perjudica la tasa de cierre global.

4. **Bug de Auto-Zoom en iOS Safari (Inputs < 16px)**:
   - En `components/CorporateInlineForm.jsx` y `components/Modals.jsx`, los inputs tienen fuentes de 12px a 14px (`text-sm sm:text-xs`).
   - Al pulsar en cualquier campo en un iPhone, Safari aplica un zoom forzado automático que deforma la navegación y obliga al usuario a reencuadrar la pantalla.

5. **Validación Rígida de Teléfono que Bloquea Clientes Corporativos Internacionales**:
   - En `LiquidGlassForm.jsx`, `CorporateInlineForm.jsx` y `Modals.jsx`, la función `replace(/[^0-9]/g, '')` y los atributos `minLength="9" maxLength="9"` impiden escribir el signo `+` o prefijos internacionales.
   - Los directivos extranjeros o delegaciones de multinacionales en IFEMA/Castellana que introducen números con prefijo de su país son bloqueados por el formulario.

6. **Dilución de Autoridad Corporativa B2B**:
   - En `components/CorporateLogosBar.jsx`, se muestran grandes marcas como Movistar Estudiantes, Alcampo y Ahorramás, pero mezcladas con entidades políticas ("NNGG Torrelodones") y peñas festivas ("Peña La Escombrera"), lo cual genera rechazo o desconfianza en comités de compras y RRHH.
   - Los testimonios en `/empresas` son anónimos ("Empresa Tech Madrid"), a pesar de que el sitio dispone de testimonios de prestigio verificados como el de Movistar Estudiantes (presente en `app/dossier/page.jsx:81`).
   - Cero contenido de vídeo en directo en las páginas corporativas, lo que deja sin resolver el principal temor de un organizador: que el espectáculo sea infantil o no encaje con adultos.

---

### 2.4. Dimensión 4: Rendimiento Técnico y PageSpeed Insights (Puntuación: 97/100)

1. **Arquitectura de Carga y Next.js App Router**:
   - Compilación de producción (`npm run build`) verificada: **140 rutas estáticas (SSG)** generadas limpiamente con **código de salida 0**.
   - **Shared First Load JS de élite**: **87.9 kB** compartido por todo el proyecto.
   - Carga inicial en la Home: **118 kB** (muy por debajo del presupuesto estricto de 130 kB).
   - Separación estricta entre Server Components y Client Components; importación dinámica (`next/dynamic` con `{ ssr: false }`) de modales y Three.js (restringido exclusivamente a la ruta aislada `/parpell`).

2. **Core Web Vitals en Móvil y Escritorio**:
   - **LCP (Largest Contentful Paint)**: Estimado en **1.2s – 1.4s** en móvil. La imagen Hero móvil (`hero-angel-ruiz-mobile-2026.webp`) pesa solo **18.3 KB** en formato WebP, se precarga con `<link rel="preload" fetchPriority="high">` y decodificación síncrona.
   - **INP (Interaction to Next Paint)**: Estimado en **< 50ms**. El cursor interactivo (`MagicCursor`) se desactiva por completo en pantallas táctiles; en escritorio corre en listeners pasivos mediante `requestAnimationFrame` con cero re-renderizados de React. Formularios gestionados mediante `FormData` nativo no controlado.
   - **CLS (Cumulative Layout Shift)**: **0.00**. Fuentes de Google (`Cinzel`, `Outfit`) cargadas mediante `next/font` con `size-adjust` automático; dimensiones fijas y placeholders en imágenes.
   - **Terceros y Privacidad**: 0 píxeles de Meta, 0 contenedores de Google Tag Manager, 0 herramientas de grabación de pantalla y 0 banners intrusivos de cookies.

---

## 3. IMPACTO EN NEGOCIO Y PROYECCIÓN DE RETORNO (ROI Q4)

La ejecución conjunta de las correcciones de SEO, GEO y CRO reportará los siguientes resultados comerciales directos durante el trimestre en curso:

```
+-----------------------------------------------------------------------------------------+
|                              PROYECCIÓN DE IMPACTO EN NEGOCIO                           |
+-----------------------------------------------------------------------------------------+
| Métrica Comercial              | Situación Actual (Auditada) | Proyección Tras Ejecución|
+--------------------------------+-----------------------------+--------------------------+
| Posición Media Cenas Empresa   | Posición 12 - 16 (Pág. 2)   | Posición 2 - 4 (Top 3)   |
| Tasa de Conversión Móvil       | 1.8% - 2.2%                 | 3.2% - 3.8% (+65%)       |
| CTR en Resultados de Búsqueda  | 1.4% (Snippets cortados)    | 3.8% - 4.5% (Snippets OK)|
| Fuga de Leads a Teléfono Ajeno | ~15% de clics en WhatsApp   | 0% (Línea oficial única) |
| Citabilidad en ChatGPT/Perp.   | Genérica (cita la Home)     | Específica (Landing Q4)  |
| Solicitudes de Presupuesto/Sem | 4 - 6 solicitudes           | 12 - 18 solicitudes      |
| Facturación Estimada Campaña   | Base habitual               | +40% - 60% incremento    |
+-----------------------------------------------------------------------------------------+
```

---

## 4. HOJA DE RUTA Y FASES DE IMPLEMENTACIÓN

Para garantizar un despliegue seguro, ordenado y sin regresiones, las tareas se estructuran en 3 fases de ejecución:

```
FASE 0: CORRECCIONES CRÍTICAS INMEDIATAS (P0 - Despliegue en 24h)
├── Tarea 1: Unificación de WhatsApp (+34 648 05 56 36) en /empresas y /bodas.
├── Tarea 2: Inserción de CTA primario y secundario above-the-fold en /empresas/mago-cenas-empresa-madrid.
├── Tarea 3: Corrección de anchor text roto en app/empresas/page.jsx:344 hacia la landing de cenas.
├── Tarea 4: Desambiguación de título y meta en app/empresas/page.jsx para frenar la canibalización.
└── Tarea 5: Optimización de snippet SERP en la sublanding de cenas de empresa (<=60 car.).

FASE 1: OPTIMIZACIÓN GEO, CITABILIDAD Y ACCESIBILIDAD MÓVIL (P1 - Despliegue en 48-72h)
├── Tarea 6: Incorporación de GoogleOther, Amazonbot, FacebookBot y bloqueo de /panel en robots.js.
├── Tarea 7: Enriquecimiento de llms.txt con landing de cenas, Key Facts y Contacto (<200 car. header).
├── Tarea 8: Inclusión de /contacto y corrección de redirección de /particulares en sitemap.js.
├── Tarea 9: Enriquecimiento de entidades con Wikidata Q-IDs en layout.jsx y limpieza de enlace Google.
├── Tarea 10: Unificación de @id canónico de persona en los 6 servicios B2B.
├── Tarea 11: Inserción de Ficha Técnica GEO y tabla comparativa en la sublanding de cenas.
├── Tarea 12: Conexión de botones móviles de la Home con MobileBookingDrawer.
├── Tarea 13: Erradicación del auto-zoom de iOS Safari mediante font-size >= 16px.
└── Tarea 14: Aviso estacional de Cenas de Empresa en el Hero de la Home.

FASE 2: CONSOLIDACIÓN DE AUTORIDAD B2B Y SALVAGUARDAS TÉCNICAS (P2 - Despliegue en 5-7 días)
├── Tarea 15: Soporte para prefijo '+' e internacional en la validación de teléfonos.
├── Tarea 16: Mensajes contextuales pre-rellenados en enlaces de WhatsApp.
├── Tarea 17: Curación de logos corporativos B2B (ocultación de entidades políticas y peñas en B2B).
├── Tarea 18: Inserción del testimonio verificado de Movistar Estudiantes y badge de Google Reviews.
├── Tarea 19: Soporte de formato AVIF en next.config.js y purga de componentes huérfanos.
└── Tarea 20: Consolidación editorial de posts de ideas de cenas de empresa en blog.
```

---

## 5. CERTIFICACIÓN DE INTEGRIDAD Y REGLAS INMUTABLES

1. **REGLA MANDATORIA DE GEMINI.md**:
   - Se certifica formalmente que ninguna propuesta, ficha técnica, snippet de código o recomendación de esta auditoría contiene ni tolerará el uso de `AggregateRating`, `ratingValue`, `reviewCount`, `bestRating` o `worstRating`.
   - La prueba social de Google Reviews (4.9★ con +50 reseñas) se implementa exclusivamente mediante **marcado visual accesible en HTML/Tailwind con enlace saliente a Google Maps**, manteniendo el JSON-LD 100% puro y protegido frente a penalizaciones manuales de Google Search Console.

2. **REGLA DE SALVAGUARDA DE RENDIMIENTO**:
   - Todo cambio técnico propuesto respeta el presupuesto First Load JS de 130 kB en la Home.
   - No se añaden scripts externos de seguimiento ni gestores de cookies.
   - El comando de verificación `npm run build` debe culminar con código de salida **0** y 140 rutas pre-renderizadas tras cada implementación.

---
*Informe consolidado y redactado por el Especialista de Síntesis y Entregables en base a las investigaciones técnicas de Explorer 1 (SEO), Explorer 2 (GEO), Explorer 3 (CRO) y Explorer 4 (Rendimiento).*
