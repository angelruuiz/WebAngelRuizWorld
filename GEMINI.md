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
  - `FAQPage`
  - `Article` / `BlogPosting`
  - **SIN** `aggregateRating`.
