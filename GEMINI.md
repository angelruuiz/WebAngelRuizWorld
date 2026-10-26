# Reglas de Proyecto y Memoria Permanente — Ángel Ruiz World

## 1. PROHIBICIÓN ESTRICTA: NUNCA USAR `AggregateRating`
- **REGLA MANDATORIA**: Está terminantemente prohibido incluir la propiedad o tipo `AggregateRating` (o campos `ratingValue`, `reviewCount`, `bestRating`, `worstRating`) en cualquier esquema estructurado JSON-LD (`schema.org`) de todo el proyecto.
- **MOTIVO**: Ha generado penalizaciones y problemas graves de indexación en Google Search Console.
- **ESQUEMAS PERMITIDOS PARA SEO Y GEO**:
  - `EntertainmentBusiness` y `ProfessionalService` (con `geo`, `address`, `areaServed`, `hasOfferCatalog`, `openingHoursSpecification`, `sameAs`).
  - `WebSite`
  - `Person`
  - `Service`
  - `BreadcrumbList`
  - `Article` / `BlogPosting`
  - **SIN** `aggregateRating`.

## 2. PROHIBICIÓN ESTRICTA: NUNCA USAR `FAQPage` EN JSON-LD
- **REGLA MANDATORIA**: Está terminantemente prohibido incluir el esquema estructurado `@type: "FAQPage"` en cualquier bloque JSON-LD (`schema.org`) de todo el proyecto.
- **MOTIVO**: Provoca penalizaciones recurrentes por "campos duplicados" en Google Search Console al compartir preguntas similares entre múltiples páginas (localidades de Madrid, posts del blog y páginas de servicios comerciales). Además, Google eliminó oficialmente los rich snippets de FAQ para sitios comerciales.
- **DIRECTIVA DE FAQS**: Las preguntas y respuestas frecuentes deben mantenerse SIEMPRE como contenido semántico visible en HTML (acordeones y listas legibles para usuarios y motores de IA como ChatGPT, Perplexity y Gemini), pero NUNCA en marcado estructurado JSON-LD `FAQPage`.
