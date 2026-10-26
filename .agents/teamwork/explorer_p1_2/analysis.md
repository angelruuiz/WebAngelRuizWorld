# Análisis Técnico y Especificación de Cambios — Bloque P1 (GEO-03, GEO-04, GEO-05)

**Agente**: Explorer P1-2 (`explorer_p1_2`)  
**Fecha**: 2026-10-25T23:55:00Z  
**Alcance**:
1. `FICHA-GEO-03`: Enriquecimiento semántico de entidades con Wikidata Q-IDs, enlace `founder` en `#organization` y saneamiento de `sameAs` de Google en `app/layout.jsx`.
2. `FICHA-GEO-04`: Unificación del `@id` canónico de Persona (`https://angelruiz.world/#person`) en las 6 landings B2B de servicios.
3. `FICHA-GEO-05`: Inserción de Ficha Técnica GEO Extractable y Tabla Comparativa de Formatos para Cenas de Empresa en `app/empresas/mago-cenas-empresa-madrid/page.jsx`.

---

## 1. FICHA-GEO-03: Enriquecimiento Semántico en `app/layout.jsx`

### 1.1. Diagnóstico Actual
- **Ubicación**: `app/layout.jsx:96-108`, `app/layout.jsx:155-178`, `app/layout.jsx:234-240`, `app/layout.jsx:276-282`.
- **Problemas Identificados**:
  1. El nodo `#organization` (`EntertainmentBusiness`, `ProfessionalService`) carece del atributo `"founder"`, impidiendo vincular bidireccionalmente la entidad empresarial con el ilusionista creador (`#person`), que ya declara `"worksFor": { "@id": "https://angelruiz.world/#organization" }`.
  2. En `areaServed` (líneas 155–178), Madrid (`Q2807`) y Comunidad de Madrid (`Q5756`) poseen `sameAs` con Wikidata, pero los 12 municipios clave de alto poder adquisitivo (Torrelodones, Las Rozas, Majadahonda, Pozuelo, Boadilla, Alcobendas, Collado Villalba, Galapagar, San Lorenzo de El Escorial, Alcorcón, Leganés, Getafe) y Móstoles figuran como cadenas planas sin URI de entidad Wikidata.
  3. Las URLs de Google Search en `sameAs` (línea 235 en `#organization` y línea 277 en `#person`) contienen tokens de sesión y parámetros efímeros dinámicos (`sca_esv`, `sxsrf`, `biw`, `bih`, etc.) en lugar de la URI limpia y canónica de la búsqueda de entidad de marca.
  4. **Verificación de Regla Mandatoria**: Cero menciones de `AggregateRating` confirmadas con búsqueda grep.

### 1.2. Mapeo Canónico de Entidades Wikidata (Áreas Servidas)
| Municipio / Entidad | Q-ID Wikidata | URI Canónica `sameAs` |
|---|---|---|
| Madrid | Q2807 | `https://www.wikidata.org/wiki/Q2807` (Existente) |
| Comunidad de Madrid | Q5756 | `https://www.wikidata.org/wiki/Q5756` (Existente) |
| Torrelodones | Q132247 | `https://www.wikidata.org/wiki/Q132247` |
| Las Rozas de Madrid | Q749449 | `https://www.wikidata.org/wiki/Q749449` |
| Majadahonda | Q687353 | `https://www.wikidata.org/wiki/Q687353` |
| Pozuelo de Alarcón | Q641743 | `https://www.wikidata.org/wiki/Q641743` |
| Boadilla del Monte | Q834244 | `https://www.wikidata.org/wiki/Q834244` |
| Alcobendas | Q487679 | `https://www.wikidata.org/wiki/Q487679` |
| Collado Villalba | Q838384 | `https://www.wikidata.org/wiki/Q838384` |
| Galapagar | Q1641527 | `https://www.wikidata.org/wiki/Q1641527` |
| San Lorenzo de El Escorial | Q371756 | `https://www.wikidata.org/wiki/Q371756` |
| Alcorcón | Q10317 | `https://www.wikidata.org/wiki/Q10317` |
| Leganés | Q492728 | `https://www.wikidata.org/wiki/Q492728` |
| Getafe | Q8389 | `https://www.wikidata.org/wiki/Q8389` |
| Móstoles | Q187826 | `https://www.wikidata.org/wiki/Q187826` |

### 1.3. Propuesta de Cambio / Diff Exacto (`app/layout.jsx`)
```diff
--- a/app/layout.jsx
+++ b/app/layout.jsx
@@ -98,2 +98,3 @@
       "@id": "https://angelruiz.world/#organization",
+      "founder": { "@id": "https://angelruiz.world/#person" },
       "name": "Ángel Ruiz Mago e Ilusionista",
@@ -166,12 +167,13 @@
-        { "@type": "City", "name": "Torrelodones" },
-        { "@type": "City", "name": "Las Rozas de Madrid" },
-        { "@type": "City", "name": "Majadahonda" },
-        { "@type": "City", "name": "Pozuelo de Alarcón" },
-        { "@type": "City", "name": "Boadilla del Monte" },
-        { "@type": "City", "name": "Alcobendas" },
-        { "@type": "City", "name": "Collado Villalba" },
-        { "@type": "City", "name": "Galapagar" },
-        { "@type": "City", "name": "San Lorenzo de El Escorial" },
-        { "@type": "City", "name": "Alcorcón" },
-        { "@type": "City", "name": "Leganés" },
-        { "@type": "City", "name": "Getafe" }
+        { "@type": "City", "name": "Torrelodones", "sameAs": "https://www.wikidata.org/wiki/Q132247" },
+        { "@type": "City", "name": "Las Rozas de Madrid", "sameAs": "https://www.wikidata.org/wiki/Q749449" },
+        { "@type": "City", "name": "Majadahonda", "sameAs": "https://www.wikidata.org/wiki/Q687353" },
+        { "@type": "City", "name": "Pozuelo de Alarcón", "sameAs": "https://www.wikidata.org/wiki/Q641743" },
+        { "@type": "City", "name": "Boadilla del Monte", "sameAs": "https://www.wikidata.org/wiki/Q834244" },
+        { "@type": "City", "name": "Alcobendas", "sameAs": "https://www.wikidata.org/wiki/Q487679" },
+        { "@type": "City", "name": "Collado Villalba", "sameAs": "https://www.wikidata.org/wiki/Q838384" },
+        { "@type": "City", "name": "Galapagar", "sameAs": "https://www.wikidata.org/wiki/Q1641527" },
+        { "@type": "City", "name": "San Lorenzo de El Escorial", "sameAs": "https://www.wikidata.org/wiki/Q371756" },
+        { "@type": "City", "name": "Alcorcón", "sameAs": "https://www.wikidata.org/wiki/Q10317" },
+        { "@type": "City", "name": "Leganés", "sameAs": "https://www.wikidata.org/wiki/Q492728" },
+        { "@type": "City", "name": "Getafe", "sameAs": "https://www.wikidata.org/wiki/Q8389" },
+        { "@type": "City", "name": "Móstoles", "sameAs": "https://www.wikidata.org/wiki/Q187826" }
       ],
@@ -235,1 +237,1 @@
-        "https://www.google.com/search?sca_esv=8001b418ab72b965&sxsrf=APpeQnttxDfKRtR6fpA2h7bYkWycKzmRVQ:1792418000314&q=%C3%81ngel+Ruiz+Mago+e+Ilusionista&si=APenkKmVGdgpMPDQZoEWS8RIAhsqXAKlNLP0B8DNkkiU9KPI0V2U8InyxO1tqoaWpGS1_Q7QhAgSRC07fbiiZx9SpnZjJDB5UXzd7BX6d41IdchYfOedo3rQx0et86krTkaw35SJ_yeQYQ3kpruL6sC1m1bAx0aXbA%3D%3D&sa=X&sqi=2&ved=2ahUKEwjJ6smxncaXAxWUXUEAHQovEbYQ_coHegQIKxAB&biw=1658&bih=797&dpr=1.16",
+        "https://www.google.com/search?q=%C3%81ngel+Ruiz+Mago+e+Ilusionista+Madrid",
@@ -277,1 +279,1 @@
-        "https://www.google.com/search?sca_esv=8001b418ab72b965&sxsrf=APpeQnttxDfKRtR6fpA2h7bYkWycKzmRVQ:1792418000314&q=%C3%81ngel+Ruiz+Mago+e+Ilusionista&si=APenkKmVGdgpMPDQZoEWS8RIAhsqXAKlNLP0B8DNkkiU9KPI0V2U8InyxO1tqoaWpGS1_Q7QhAgSRC07fbiiZx9SpnZjJDB5UXzd7BX6d41IdchYfOedo3rQx0et86krTkaw35SJ_yeQYQ3kpruL6sC1m1bAx0aXbA%3D%3D&sa=X&sqi=2&ved=2ahUKEwjJ6smxncaXAxWUXUEAHQovEbYQ_coHegQIKxAB&biw=1658&bih=797&dpr=1.16",
+        "https://www.google.com/search?q=%C3%81ngel+Ruiz+Mago+e+Ilusionista+Madrid",
```

---

## 2. FICHA-GEO-04: Unificación del `@id` Canónico de Persona en 6 Servicios B2B

### 2.1. Diagnóstico Actual
Los 6 archivos inspeccionados declaran su nodo `provider` en el esquema de tipo `Service` como un objeto literal plano `{ "@type": "Person", "name": "Ángel Ruiz" }`, perdiendo la conexión semántica con el nodo maestro `@id: "https://angelruiz.world/#person"` definido en el layout raíz:

1. `app/empresas/mago-cenas-empresa-madrid/page.jsx` (línea 67)
2. `app/empresas/mago-ferias-congresos-madrid/page.jsx` (línea 73)
3. `app/empresas/mago-team-building-madrid/page.jsx` (línea 72)
4. `app/empresas/mago-para-restaurantes-madrid/page.jsx` (línea 72)
5. `app/empresas/mago-conferenciante-madrid/page.jsx` (línea 73)
6. `app/mago-madrid/page.jsx` (línea 59)

### 2.2. Objeto Canónico Unificado
```json
"provider": {
  "@type": "Person",
  "@id": "https://angelruiz.world/#person",
  "name": "Ángel Ruiz",
  "url": "https://angelruiz.world/sobre-mi"
}
```

### 2.3. Diffs Exactos por Archivo

#### Archivo 1: `app/empresas/mago-cenas-empresa-madrid/page.jsx`
```diff
--- a/app/empresas/mago-cenas-empresa-madrid/page.jsx
+++ b/app/empresas/mago-cenas-empresa-madrid/page.jsx
@@ -66,3 +66,8 @@
       "name": "Mago para Cenas de Empresa en Madrid",
-      "provider": { "@type": "Person", "name": "Ángel Ruiz" },
+      "provider": {
+        "@type": "Person",
+        "@id": "https://angelruiz.world/#person",
+        "name": "Ángel Ruiz",
+        "url": "https://angelruiz.world/sobre-mi"
+      },
       "areaServed": "Comunidad de Madrid",
```

#### Archivo 2: `app/empresas/mago-ferias-congresos-madrid/page.jsx`
```diff
--- a/app/empresas/mago-ferias-congresos-madrid/page.jsx
+++ b/app/empresas/mago-ferias-congresos-madrid/page.jsx
@@ -72,3 +72,8 @@
       "name": "Mago para Ferias y Congresos en Madrid",
-      "provider": { "@type": "Person", "name": "Ángel Ruiz" },
+      "provider": {
+        "@type": "Person",
+        "@id": "https://angelruiz.world/#person",
+        "name": "Ángel Ruiz",
+        "url": "https://angelruiz.world/sobre-mi"
+      },
       "areaServed": "Comunidad de Madrid",
```

#### Archivo 3: `app/empresas/mago-team-building-madrid/page.jsx`
```diff
--- a/app/empresas/mago-team-building-madrid/page.jsx
+++ b/app/empresas/mago-team-building-madrid/page.jsx
@@ -71,3 +71,8 @@
       "name": "Mago para Team Building en Madrid",
-      "provider": { "@type": "Person", "name": "Ángel Ruiz" },
+      "provider": {
+        "@type": "Person",
+        "@id": "https://angelruiz.world/#person",
+        "name": "Ángel Ruiz",
+        "url": "https://angelruiz.world/sobre-mi"
+      },
       "areaServed": "Comunidad de Madrid",
```

#### Archivo 4: `app/empresas/mago-para-restaurantes-madrid/page.jsx`
```diff
--- a/app/empresas/mago-para-restaurantes-madrid/page.jsx
+++ b/app/empresas/mago-para-restaurantes-madrid/page.jsx
@@ -71,3 +71,8 @@
       "name": "Mago para Restaurantes y Locales en Madrid",
-      "provider": { "@type": "Person", "name": "Ángel Ruiz" },
+      "provider": {
+        "@type": "Person",
+        "@id": "https://angelruiz.world/#person",
+        "name": "Ángel Ruiz",
+        "url": "https://angelruiz.world/sobre-mi"
+      },
       "areaServed": "Comunidad de Madrid",
```

#### Archivo 5: `app/empresas/mago-conferenciante-madrid/page.jsx`
```diff
--- a/app/empresas/mago-conferenciante-madrid/page.jsx
+++ b/app/empresas/mago-conferenciante-madrid/page.jsx
@@ -72,3 +72,8 @@
       "name": "Mago Conferenciante para Empresas en Madrid",
-      "provider": { "@type": "Person", "name": "Ángel Ruiz" },
+      "provider": {
+        "@type": "Person",
+        "@id": "https://angelruiz.world/#person",
+        "name": "Ángel Ruiz",
+        "url": "https://angelruiz.world/sobre-mi"
+      },
       "areaServed": "Comunidad de Madrid",
```

#### Archivo 6: `app/mago-madrid/page.jsx`
```diff
--- a/app/mago-madrid/page.jsx
+++ b/app/mago-madrid/page.jsx
@@ -58,3 +58,8 @@
                 "name": "Mago en Madrid",
-                "provider": { "@type": "Person", "name": "Ángel Ruiz" },
+                "provider": {
+                    "@type": "Person",
+                    "@id": "https://angelruiz.world/#person",
+                    "name": "Ángel Ruiz",
+                    "url": "https://angelruiz.world/sobre-mi"
+                },
                 "areaServed": "Madrid",
```

---

## 3. FICHA-GEO-05: Ficha Técnica GEO Extractable y Tabla de Formatos

### 3.1. Diagnóstico Actual
- **Ubicación de Inserción**: `app/empresas/mago-cenas-empresa-madrid/page.jsx:260` (justo tras el cierre de la sección "Metodología de Activación" y antes de `{/* FAQ */}`).
- **Objetivo**: Proveer un bloque semántico auto-contenido estructurado con micro-datos factuales y tabla de formatos que responda directamente a las preguntas de búsqueda generativa (Perplexity, ChatGPT Search, Gemini, Claude).
- **Cumplimiento de Reglas**:
  - Cero esquemas de `AggregateRating` o valoraciones numéricas inventadas.
  - Formatos y tarifas 100% coherentes con `llms.txt`, `app/contratar-mago-madrid` y `app/empresas/page.jsx`.
  - Estilizado acorde al diseño Luxury Black & Gold del sitio (borde ámbar sutil, glassmorphism, responsive).

### 3.2. Bloque JSX Propuesto para Inserción
```jsx
      {/* FICHA TÉCNICA GEO EXTRACTABLE Y FORMATOS */}
      <section aria-label="Ficha Técnica y Formatos de Cenas de Empresa en Madrid" className="py-12 border-b border-white/10 bg-slate-950/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-6 md:p-8 rounded-2xl bg-amber-500/10 border border-amber-400/30">
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

            {/* Tabla Comparativa de Formatos para Cenas */}
            <div className="mt-8 pt-6 border-t border-amber-400/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-3 font-semibold">
                ✦ Formatos de Ilusionismo para Cenas Corporativas
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-white/10 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-white/5 text-amber-400 uppercase tracking-wider text-[11px]">
                      <th className="px-4 py-3 font-medium">Formato</th>
                      <th className="px-4 py-3 font-medium">Momento Óptimo</th>
                      <th className="px-4 py-3 font-medium">Duración</th>
                      <th className="px-4 py-3 font-medium">Impacto en Asistentes</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300 font-light divide-y divide-white/5">
                    <tr>
                      <td className="px-4 py-3 text-white font-medium">Cóctel de Bienvenida</td>
                      <td className="px-4 py-3">Recepción y copa inicial</td>
                      <td className="px-4 py-3">45–60 min</td>
                      <td className="px-4 py-3">Rompe el hielo y conecta grupos</td>
                    </tr>
                    <tr className="bg-white/[0.02]">
                      <td className="px-4 py-3 text-white font-medium">Magia en Mesas (Close-Up)</td>
                      <td className="px-4 py-3">Entre platos o sobremesa</td>
                      <td className="px-4 py-3">60–90 min</td>
                      <td className="px-4 py-3">Asombro interactivo a centímetros</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-white font-medium">Show de Sobremesa</td>
                      <td className="px-4 py-3">Café / brindis final</td>
                      <td className="px-4 py-3">30–45 min</td>
                      <td className="px-4 py-3">Cierre unificado y mentalismo corporativo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
```

### 3.3. Propuesta de Cambio / Diff Exacto (`app/empresas/mago-cenas-empresa-madrid/page.jsx`)
```diff
--- a/app/empresas/mago-cenas-empresa-madrid/page.jsx
+++ b/app/empresas/mago-cenas-empresa-madrid/page.jsx
@@ -259,2 +259,57 @@
       </section>
 
+      {/* FICHA TÉCNICA GEO EXTRACTABLE Y FORMATOS */}
+      <section aria-label="Ficha Técnica y Formatos de Cenas de Empresa en Madrid" className="py-12 border-b border-white/10 bg-slate-950/50">
+        <div className="max-w-4xl mx-auto px-6">
+          <div className="p-6 md:p-8 rounded-2xl bg-amber-500/10 border border-amber-400/30">
+            <h3 className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
+              <span>⚡ Ficha Técnica: Ilusionismo para Cenas de Empresa y Navidad</span>
+            </h3>
+            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-300">
+              <div><strong className="text-white">Artista:</strong> Ángel Ruiz (Discípulo de Dani DaOrtiz, +10 años exp.).</div>
+              <div><strong className="text-white">Tarifas Oficiales:</strong> 500€ – 750€ (Directo de artista, sin comisión).</div>
+              <div><strong className="text-white">Formatos:</strong> Cóctel Networking, Pases por Mesa y Show de Sobremesa.</div>
+              <div><strong className="text-white">Duración:</strong> 60 a 90 minutos adaptables al ritmo del banquete.</div>
+              <div><strong className="text-white">Zona de Cobertura:</strong> Madrid Capital y municipios (Las Rozas, Pozuelo, Alcobendas).</div>
+              <div><strong className="text-white">Presupuesto Express:</strong> Respuesta formal por WhatsApp en &lt;15 min o email en &lt;2h.</div>
+            </div>
+
+            {/* Tabla Comparativa de Formatos para Cenas */}
+            <div className="mt-8 pt-6 border-t border-amber-400/20">
+              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-3 font-semibold">
+                ✦ Formatos de Ilusionismo para Cenas Corporativas
+              </h4>
+              <div className="overflow-x-auto">
+                <table className="w-full text-xs text-left border border-white/10 rounded-xl overflow-hidden">
+                  <thead>
+                    <tr className="bg-white/5 text-amber-400 uppercase tracking-wider text-[11px]">
+                      <th className="px-4 py-3 font-medium">Formato</th>
+                      <th className="px-4 py-3 font-medium">Momento Óptimo</th>
+                      <th className="px-4 py-3 font-medium">Duración</th>
+                      <th className="px-4 py-3 font-medium">Impacto en Asistentes</th>
+                    </tr>
+                  </thead>
+                  <tbody className="text-slate-300 font-light divide-y divide-white/5">
+                    <tr>
+                      <td className="px-4 py-3 text-white font-medium">Cóctel de Bienvenida</td>
+                      <td className="px-4 py-3">Recepción y copa inicial</td>
+                      <td className="px-4 py-3">45–60 min</td>
+                      <td className="px-4 py-3">Rompe el hielo y conecta grupos</td>
+                    </tr>
+                    <tr className="bg-white/[0.02]">
+                      <td className="px-4 py-3 text-white font-medium">Magia en Mesas (Close-Up)</td>
+                      <td className="px-4 py-3">Entre platos o sobremesa</td>
+                      <td className="px-4 py-3">60–90 min</td>
+                      <td className="px-4 py-3">Asombro interactivo a centímetros</td>
+                    </tr>
+                    <tr>
+                      <td className="px-4 py-3 text-white font-medium">Show de Sobremesa</td>
+                      <td className="px-4 py-3">Café / brindis final</td>
+                      <td className="px-4 py-3">30–45 min</td>
+                      <td className="px-4 py-3">Cierre unificado y mentalismo corporativo</td>
+                    </tr>
+                  </tbody>
+                </table>
+              </div>
+            </div>
+          </div>
+        </div>
+      </section>
+
       {/* FAQ */}
```
