# MATRIZ ESTRATÉGICA DE RESCATE SERP (POSICIONES 11–20)
## Plan de Choque Q4: Cenas de Empresa, Eventos Corporativos y Navidad en Madrid
**Proyecto**: `angelruiz.world`  
**Objetivo**: Escalar las consultas transaccionales de alto valor comercial desde el "purgatorio de página 2" (posiciones 11 a 20) al Top 3 de Google España antes del cierre de contrataciones navideñas.  
**Garantía Inviolable**: Cumplimiento del 100% de la directiva de `GEMINI.md` (**0 menciones o usos de `AggregateRating`** en snippets o datos estructurados).

---

## 1. INTRODUCCIÓN Y DIAGNÓSTICO DEL "PURGATORIO DE PÁGINA 2"

En el sector de eventos de Madrid, **el 91.5% de los clics orgánicos se concentran en la primera página de Google**, y más del **58% en las tres primeras posiciones orgánicas**.

La auditoría de `angelruiz.world` ha detectado que una decena de consultas transaccionales con intención de compra directa e inmediata (directores de compras, comités de empresa y planners de agencias) se encuentran estancadas entre las posiciones **11 y 18**.

### Las tres causas raíz del estancamiento:
1. **Canibalización de Intención**: El hub principal (`/empresas`) y la sublanding (`/empresas/mago-cenas-empresa-madrid`) compiten entre sí con títulos y keywords casi idénticos sobre "cenas de empresa", dividiendo las señales de ranking de Google.
2. **Desvío de Autoridad Interna**: El enlace más relevante de la web para la consulta en `app/empresas/page.jsx:344` apunta por error a `/empresas/mago-para-restaurantes-madrid`, privando de link equity a la landing especializada.
3. **Snippets Truncados y Bajo CTR**: Títulos de hasta 74 caracteres que se cortan en pantallas de smartphones, ocultando el valor diferencial (contratación directa de artista, tarifas oficiales, fechas Q4).

---

## 2. MATRIZ MAESTRA DE RESCATE SERP (CONSULTAS PRIORITARIAS Q4)

A continuación se detalla la matriz estratégica completa con diagnósticos exhaustivos, snippets optimizados dentro de los umbrales de Google (Título ≤ 60 car. y Descripción ≤ 155 car.) y la estrategia de enlazado interno con textos ancla exactos:

| # | Consulta Objetivo (Query) | Vol. Q4 Est. | Pos. Actual | URL Canónica Objetivo | Snippet Actual (Problema Detectado) | Snippet Optimizado Propuesto (Title ≤ 60 car. / Desc ≤ 155 car.) | Estrategia de Enlazado Interno y Anchor Texts Exactos | Acción sobre Canibalización / Consolidación |
|:---:|---|:---:|:---:|---|---|---|---|---|
| **1** | `mago cenas empresa madrid` | 500 – 1.000 | **12 – 14** | `/empresas/mago-cenas-empresa-madrid` | **Title (74 car.)**: `Mago para Cenas de Empresa en Madrid 2026 \| Fiestas y Navidad · Ángel Ruiz`<br>*(Truncado en móvil en "Navidad...").*<br>**Desc (164 car.)**: *Demasiado larga, sin llamada de urgencia.* | **Title (54 car.)**: `Mago para Cenas de Empresa en Madrid \| Cenas y Navidad`<br>**Desc (148 car.)**: `Mago profesional para cenas de empresa en Madrid y fiestas de Navidad. Magia de cerca cóctel y sobremesa. Fechas limitadas Q4. ¡Presupuesto express en 2h!` | • Corregir enlace en `/empresas:344` con anchor exacto: `[mago para cenas de empresa]`.<br>• Enlazar desde los 10 posts de cenas de blog con anchor: `[mago para cenas de empresa en Madrid]`.<br>• Enlazar desde `/mago-madrid` en sección B2B. | Retirar la palabra "Cenas" de los metadatos de `/empresas`. La sublanding se convierte en la única autoridad absoluta del dominio para esta intención. |
| **2** | `mago cena navidad empresa madrid` | 400 – 800 | **13 – 15** | `/empresas/mago-cenas-empresa-madrid` | Canibalizado por el artículo `content/blog/mago-fiestas-navidad-cenas-madrid.md`. | **Title (54 car.)**: `Mago para Cenas de Navidad de Empresa en Madrid [2026]`<br>**Desc (154 car.)**: `Ilusionismo corporativo para cenas de Navidad en Madrid. Magia de cerca y show de sobremesa. Reserva directa de artista. Consulta fechas y disponibilidad.` | • Añadir banner destacado H2 en el post de blog `mago-fiestas-navidad-cenas-madrid.md` con enlace a `/empresas/mago-cenas-empresa-madrid` y anchor: `[reserva tu mago para cenas de Navidad en Madrid]`. | El post de blog pasa a actuar como satélite informacional de captación con embudo directo hacia la landing de contratación. |
| **3** | `mago eventos corporativos madrid` | 450 – 850 | **11 – 13** | `/empresas` | **Title (69 car.)**: `Mago para Empresas en Madrid \| Magia Corporativa y Cenas · Ángel Ruiz`<br>*(Solapa cenas y se corta).*<br>**Desc (158 car.)**: *Excede límite.* | **Title (57 car.)**: `Mago para Empresas en Madrid \| Eventos Corporativos y B2B`<br>**Desc (155 car.)**: `Mago para empresas en Madrid: convenciones, kick-offs, team building y ferias. Ilusionismo corporativo de alto impacto. Solicita presupuesto express en 2h.` | • Enlazar desde la Home en la sección corporativa con anchor: `[Mago para Eventos Corporativos en Madrid]`.<br>• Enlazar desde el menú de navegación (`Navbar.jsx`) como pilar B2B. | Limpiar el título y meta de `/empresas` enfocándolo 100% a convención, congreso, kick-off y eventos B2B de marca, cediendo las cenas a la sublanding. |
| **4** | `precio mago cena de empresa madrid` / `cuanto cuesta mago cena empresa` | 250 – 450 | **12 – 16** | `/blog/presupuesto-mago-cena-de-empresa-madrid-cuanto-cuesta` | **Title (88 car.)**: `¿Cuánto Cuesta un Mago para una Cena de Empresa en Madrid? Tarifas y Presupuestos Reales`<br>*(Corte severo).* | **Title (59 car.)**: `¿Cuánto Cuesta un Mago para Cena de Empresa en Madrid? 2026`<br>**Desc (150 car.)**: `Tarifas oficiales: mago para cenas de empresa en Madrid desde 500€ a 750€. Cóctel, sobremesa y packs completos sin agencias. Presupuesto online en 2h.` | • Insertar botón destacado en la tabla de precios del post hacia `/empresas/mago-cenas-empresa-madrid` con anchor: `[Contratar espectáculo para cena de empresa en Madrid]`. | Canalizar el tráfico informativo de precios hacia el cierre directo en WhatsApp o formulario en la sublanding de cenas. |
| **5** | `cenas de empresa originales madrid` | 400 – 900 | **14 – 17** | `/blog/cenas-empresa-originales-madrid-ideas-magia` | Canibalizado por `ideas-cenas-empresa-madrid-originales.md` (dos artículos idénticos en el blog compitiendo). | **Title (57 car.)**: `Cenas de Empresa Originales en Madrid: 7 Ideas Únicas 2026`<br>**Desc (151 car.)**: `Descubre 7 ideas originales para cenas de empresa y Navidad en Madrid: magia de cerca en mesas, catas a ciegas y team building. Consejos y tarifas reales.` | • Desde el artículo consolidado, insertar enlace contextual a `/empresas/mago-cenas-empresa-madrid` con anchor: `[idea original: magia de cerca para cenas de empresa]`. | Redirigir canónicamente o reconvertir `ideas-cenas-empresa-madrid-originales.md` hacia espacios/restaurantes, unificando la fuerza en una sola URL. |
| **6** | `animacion cenas navidad empresas madrid` | 200 – 400 | **15 – 18** | `/blog/espectaculo-animacion-cenas-navidad-empresas-madrid` | **Title (84 car.)**: `Espectáculo para Cenas de Navidad en Madrid: Animación Original para Empresas (2026)`<br>*(Corte severo).* | **Title (56 car.)**: `Animación y Espectáculos para Cenas de Navidad en Madrid`<br>**Desc (149 car.)**: `Magia y animación de cóctel para cenas de Navidad corporativas en Madrid. Tarifas de 500€ a 750€ sin intermediarios. ¡Reserva antes de agotar fechas!` | • Enlazar bidireccionalmente con `/empresas/mago-cenas-empresa-madrid` mediante anchor contextual: `[espectáculos de magia para cenas de empresa en Madrid]`. | Fortalece el cluster temático de entretenimiento navideño para empresas. |
| **7** | `mago conferenciante empresas madrid` | 150 – 350 | **13 – 16** | `/empresas/mago-conferenciante-madrid` | Duplicidad de ruta estática entre `/empresas/mago-conferenciante-madrid` y `/blog/mago-conferenciante-empresas-madrid`. | **Title (55 car.)**: `Mago Conferenciante en Madrid \| Keynotes de Empresa B2B`<br>**Desc (149 car.)**: `Conferencias motivacionales y magia corporativa en Madrid. Ángel Ruiz ancla el mensaje de tu marca con ilusionismo B2B de alto impacto. Pide dossier.` | • Enlazar desde `/empresas` en la sección de formatos.<br>• Añadir canonical en `/blog/mago-conferenciante-empresas-madrid` hacia la URL `/empresas/mago-conferenciante-madrid`. | Eliminar la canibalización entre blog y landing transaccional unificando la URL canónica. |
| **8** | `mago team building madrid` | 200 – 450 | **12 – 15** | `/empresas/mago-team-building-madrid` | **Title (60 car.)**: `Mago para Team Building en Madrid \| Dinámicas · Ángel Ruiz` | **Title (56 car.)**: `Mago para Team Building en Madrid \| Dinámicas y Empresas`<br>**Desc (147 car.)**: `Dinámicas de team building con magia en Madrid. Fomenta cohesión, comunicación y trabajo en equipo de forma sorprendente. Solicita propuesta en 2h.` | • Enlazar desde `/empresas` con anchor: `[dinámicas de team building con magia en Madrid]`.<br>• Enlazar desde los artículos de blog sobre cohesión de equipos y cenas de empresa. | Captación en Q4 para jornadas de balance anual y kick-offs de inicio de año en empresas. |
| **9** | `mago cenas empresa las rozas` / `mago empresas pozuelo` | 150 – 300 | **14 – 19** | `/mago-las-rozas` y `/mago-pozuelo` | Las landings locales solo posicionan términos genéricos y de particulares, sin contenido específico para parques empresariales. | **Title Las Rozas (41 car.)**: `Mago en Las Rozas \| Empresas y Cenas 2026`<br>**Desc Las Rozas (151 car.)**: `Magia corporativa para cenas de empresa y eventos en Las Rozas. Más de 10 años de experiencia. Sin costes de desplazamiento. Presupuesto directo en 2h.`<br>**Title Pozuelo (41 car.)**: `Mago en Pozuelo \| Empresas y Eventos 2026`<br>**Desc Pozuelo (148 car.)**: `Magia corporativa para cenas de empresa y eventos en Pozuelo de Alarcón (La Finca y Ática). Sin costes de desplazamiento. Presupuesto directo en 2h.` | • Añadir bloque en `lib/locations.js` para Las Rozas (Európolis) y Pozuelo (La Finca / Ática) con enlace a `/empresas/mago-cenas-empresa-madrid`. | Permite capturar las búsquedas de cenas en los dos hubs corporativos con mayor renta de la Comunidad de Madrid. |
| **10** | `mago fin de ano empresa madrid` | 150 – 250 | **16 – 20** | `/blog/coctel-fin-de-ano-empresa-madrid-ideas-animacion` | **Title (75 car.)**: `Cóctel de Fin de Año de Empresa en Madrid: Ideas de Animación e Ilusionismo` | **Title (57 car.)**: `Cóctel de Fin de Año para Empresas en Madrid: Ideas Magia`<br>**Desc (149 car.)**: `Animación para cóctel de fin de año y tardeo de empresa en Madrid. Magia de proximidad para despedir el año con impacto y energía. Presupuesto en 2h.` | • Enlazar al final del post hacia `/empresas/mago-cenas-empresa-madrid` con anchor: `[contratar mago para el cóctel de fin de año de empresa]`. | Captación de última hora (noviembre/diciembre) para eventos de tardeo y cierres de ejercicio empresarial. |
| **11** | `mago para ferias ifema madrid` | 200 – 400 | **12 – 15** | `/empresas/mago-ferias-congresos-madrid` | **Title (63 car.)**: `Mago para Ferias y Congresos en Madrid \| IFEMA · Ángel Ruiz`<br>*(Ligeramente largo).* | **Title (56 car.)**: `Mago para Ferias y Congresos en IFEMA Madrid \| B2B 2026`<br>**Desc (152 car.)**: `Atracción de leads y dinamización de stands en IFEMA Madrid. Magia personalizada con el producto y mensaje de tu empresa. Solicita propuesta express en 2h.` | • Enlazar desde `/empresas` con anchor: `[mago dinamizador de stands en IFEMA Madrid]`.<br>• Enlazar desde el hub transaccional `/mago-madrid`. | Canaliza contrataciones B2B previas a congresos y convenciones de otoño/invierno. |
| **12** | `espectaculo magia para empresas madrid` | 300 – 500 | **13 – 16** | `/empresas` | Compite con el home (`/`) y `/mago-madrid` por la consulta genérica de espectáculo corporativo. | **Title (57 car.)**: `Espectáculo de Magia para Empresas en Madrid \| Ángel Ruiz`<br>**Desc (152 car.)**: `Ilusionismo corporativo en Madrid: magia de escena, mentalismo y cóctel interactivo. Más de 10 años en eventos B2B. Solicita presupuesto sin compromiso.` | • Enlazar desde el footer y el menú de servicios con anchor: `[espectáculos de magia para empresas en Madrid]`. | Consolidar `/empresas` como la página de referencia para espectáculos corporativos completos. |

---

## 3. TOPOLOGÍA DE ENLAZADO INTERNO (ARQUITECTURA HUB & SPOKE Q4)

Para transferir la máxima autoridad temática y conseguir que Google reconozca unívocamente la relevancia de cada página sin canibalización, se implementa el modelo **Hub & Spoke Corporativo**:

```
                       ┌───────────────────────────────┐
                       │        HOME (angelruiz.world) │
                       └───────────────┬───────────────┘
                                       │ (Anchor: "Mago para Eventos Corporativos")
                                       ▼
                       ┌───────────────────────────────┐
                       │       HUB CORPORATIVO B2B     │
                       │           (/empresas)         │
                       └───────┬───────────────┬───────┘
                               │               │
        ┌──────────────────────┘               └──────────────────────┐
        │ (Anchor EXACTO en :344)                                     │ (Anchors específicos)
        │ "mago para cenas de empresa"                                │ Team building / IFEMA
        ▼                                                             ▼
┌─────────────────────────────────────────┐               ┌─────────────────────────┐
│     SPOKE TRANSACCIONAL PRIORITARIO     │               │   SUB-SPOKES SERVICIOS  │
│   (/empresas/mago-cenas-empresa-madrid) │               │   - /mago-team-building │
└───────▲─────────────────────────▲───────┘               │   - /mago-ferias-ifema  │
        │                         │                       │   - /mago-conferenciante│
        │                         │                       └─────────────────────────┘
        │ Anchor: "mago para      │ Anchor: "contratar
        │ cenas de empresa en     │ espectáculo para cena
        │ Madrid"                 │ de empresa"
┌───────┴─────────────────┐ ┌─────┴─────────────────┐
│ BLOG SPOKE INFORMATIVO  │ │ BLOG SPOKE TARIFAS    │
│ - cenas-navidad-madrid  │ │ - presupuesto-mago-   │
│ - cenas-originales      │ │   cena-empresa-madrid │
│ - animacion-navidad     │ │   -cuanto-cuesta      │
└─────────────────────────┘ └───────────────────────┘
```

### Reglas de Enlazado Estricto:
1. **Regla de Oro del Anchor en `/empresas:344`**:
   - El enlace debe corregirse inmediatamente: sustituir `/empresas/mago-para-restaurantes-madrid` por `/empresas/mago-cenas-empresa-madrid`.
   - El texto ancla debe ser exactamente: `mago para cenas de empresa`.
2. **Puente Transaccional en Posts de Tarifas**:
   - Todo artículo que mencione precios de cenas corporativas debe insertar un botón de llamada a la acción hacia `/empresas/mago-cenas-empresa-madrid` antes de la tabla de precios y al final del texto.
3. **Consolidación de Canibalización en Blog**:
   - Redirigir canónicamente `content/blog/ideas-cenas-empresa-madrid-originales.md` hacia `content/blog/cenas-empresa-originales-madrid-ideas-magia.md` o especializarlo en *"Restaurantes y Salones para Cenas de Empresa en Madrid 2026"*.

---

## 4. CRITERIOS DE VERIFICACIÓN Y MÉTRICAS DE ÉXITO

1. **Longitud de Snippets**:
   - Ningún título debe superar los **60 caracteres**.
   - Ninguna meta descripción debe superar los **155 caracteres** ni bajar de los 130 caracteres.
2. **0 AggregateRating**:
   - Ningún snippet incluye estrellas artificiales en Schema.org ni en metadatos (verificación con `git grep -i "aggregaterating"`).
3. **Ascenso en SERP**:
   - Monitorización semanal de las 12 consultas: objetivo alcanzar el Top 5 en 14 días y el Top 3 en 30 días tras la reindexación en Google Search Console.

---
*Matriz estratégica de rescate SERP elaborada por el Agente de Síntesis e Implementación en base al informe forense de Explorer 1 (SEO).*
