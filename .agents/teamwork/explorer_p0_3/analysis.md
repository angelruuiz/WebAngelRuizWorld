# INFORME DE ANÁLISIS TÉCNICO: FICHA-SEO-01 Y FICHA-SEO-02

**Agente**: Explorer P0-3  
**Fecha**: 2026-10-25T23:36:00Z  
**Archivo Investigado**: `app/empresas/page.jsx`  
**Foco Estratégico**: Cenas de Empresa, Eventos Corporativos B2B y Desambiguación SEO Q4 en Madrid  

---

## 1. RESUMEN EJECUTIVO

Se ha completado la inspección técnica exhaustiva de `app/empresas/page.jsx` para resolver los dos problemas prioritarios de SEO On-Page identificados en el Plan de Choque 360° (P0):
1. **FICHA-SEO-01 (Línea 344)**: El anchor text exacto `"mago para cenas de empresa"` apuntaba erróneamente a la ruta de restaurantes (`/empresas/mago-para-restaurantes-madrid`), privando a la sublanding de alta conversión `/empresas/mago-cenas-empresa-madrid` de PageRank interno directo.
2. **FICHA-SEO-02 (Líneas 15–34)**: La metadata del hub B2B contenía `"y Cenas"` en el título (69 caracteres, superando el límite de visualización en SERP), la keyword canibalizadora `"mago cenas empresa madrid"`, y descripciones que competían directamente con la sublanding especializada de cenas. Se formula el ajuste para fijar el título en 57 caracteres (óptimo ≤ 60), optimizar la descripción a 147 caracteres (óptimo ≤ 155) y sincronizar OpenGraph y Twitter cards.
3. **Guardrail AggregateRating**: Se ha verificado que `app/empresas/page.jsx` cuenta con **0 ocurrencias** de `AggregateRating`, `ratingValue`, `reviewCount`, `bestRating` o `worstRating`, cumpliendo de forma estricta con la regla de proyecto `GEMINI.md`.

---

## 2. INVESTIGACIÓN DETALLADA: FICHA-SEO-01

### 2.1 Ubicación Exacta y Código Actual
- **Archivo**: `app/empresas/page.jsx`
- **Línea**: 344
- **Contexto (Líneas 341–346)**:
```jsx
                                <div className="rounded-2xl bg-slate-950/50 p-6 border border-white/10 backdrop-blur-md">
                                    <p className="mb-2"><strong className="text-amber-400 uppercase tracking-widest text-xs">Versatilidad:</strong></p>
                                    <p>
                                        Ideal como <Link href="/empresas/mago-para-restaurantes-madrid" className="text-amber-400 hover:underline">mago para cenas de empresa</Link>, <Link href="/empresas/mago-ferias-congresos-madrid" className="text-amber-400 hover:underline">dinamizador en IFEMA</Link> o facilitador de <Link href="/empresas/mago-team-building-madrid" className="text-amber-400 hover:underline">team building</Link>. El ilusionismo profesional garantiza una interacción fluida y networking natural, rompiendo el hielo entre directivos y empleados con impactos visuales inolvidables.
                                    </p>
                                </div>
```

### 2.2 Diagnóstico del Problema
- El texto ancla `"mago para cenas de empresa"` tiene una intención transaccional directa y de alto valor comercial en Q4 (Navidad y cenas corporativas).
- Al dirigir dicho enlace a `/empresas/mago-para-restaurantes-madrid`, el gráfico interno de enlaces envía señales contradictorias a Google: asocia una búsqueda de cenas corporativas a una landing de restaurantes/hostelería.
- La sublanding dedicada `/empresas/mago-cenas-empresa-madrid` queda sin este enlace contextual clave dentro del cuerpo de texto explicativo del Hub.

### 2.3 Solución Propuesta y Diffs

#### Opción Recomendada (Alineada con Backlog Aprobado)
Corrige el destino del anchor `"mago para cenas de empresa"` hacia `/empresas/mago-cenas-empresa-madrid` y, simultáneamente, añade un enlace explícito a `/empresas/mago-para-restaurantes-madrid` con el anchor semántico `"magia en restaurantes"`. De este modo, no se pierde el enlazado interno hacia el servicio de restaurantes y se cubren los 4 servicios corporativos de forma transparente.

```diff
--- a/app/empresas/page.jsx
+++ b/app/empresas/page.jsx
@@ -344,1 +344,1 @@
-                                        Ideal como <Link href="/empresas/mago-para-restaurantes-madrid" className="text-amber-400 hover:underline">mago para cenas de empresa</Link>, <Link href="/empresas/mago-ferias-congresos-madrid" className="text-amber-400 hover:underline">dinamizador en IFEMA</Link> o facilitador de <Link href="/empresas/mago-team-building-madrid" className="text-amber-400 hover:underline">team building</Link>. El ilusionismo profesional garantiza una interacción fluida y networking natural, rompiendo el hielo entre directivos y empleados con impactos visuales inolvidables.
+                                        Ideal como <Link href="/empresas/mago-cenas-empresa-madrid" className="text-amber-400 hover:underline">mago para cenas de empresa</Link>, <Link href="/empresas/mago-ferias-congresos-madrid" className="text-amber-400 hover:underline">dinamizador en IFEMA</Link>, <Link href="/empresas/mago-para-restaurantes-madrid" className="text-amber-400 hover:underline">magia en restaurantes</Link> o facilitador de <Link href="/empresas/mago-team-building-madrid" className="text-amber-400 hover:underline">team building</Link>. El ilusionismo profesional garantiza una interacción fluida y networking natural, rompiendo el hielo entre directivos y empleados con impactos visuales inolvidables.
```

#### Opción Mínima (Reemplazo Directo 1 a 1)
En caso de preferir no alterar la estructura sintáctica de la frase, simplemente sustituir la URL de destino:
```diff
--- a/app/empresas/page.jsx
+++ b/app/empresas/page.jsx
@@ -344,1 +344,1 @@
-                                        Ideal como <Link href="/empresas/mago-para-restaurantes-madrid" className="text-amber-400 hover:underline">mago para cenas de empresa</Link>, <Link href="/empresas/mago-ferias-congresos-madrid" className="text-amber-400 hover:underline">dinamizador en IFEMA</Link> o facilitador de <Link href="/empresas/mago-team-building-madrid" className="text-amber-400 hover:underline">team building</Link>. El ilusionismo profesional garantiza una interacción fluida y networking natural, rompiendo el hielo entre directivos y empleados con impactos visuales inolvidables.
+                                        Ideal como <Link href="/empresas/mago-cenas-empresa-madrid" className="text-amber-400 hover:underline">mago para cenas de empresa</Link>, <Link href="/empresas/mago-ferias-congresos-madrid" className="text-amber-400 hover:underline">dinamizador en IFEMA</Link> o facilitador de <Link href="/empresas/mago-team-building-madrid" className="text-amber-400 hover:underline">team building</Link>. El ilusionismo profesional garantiza una interacción fluida y networking natural, rompiendo el hielo entre directivos y empleados con impactos visuales inolvidables.
```

---

## 3. INVESTIGACIÓN DETALLADA: FICHA-SEO-02

### 3.1 Ubicación Exacta y Código Actual
- **Archivo**: `app/empresas/page.jsx`
- **Líneas**: 15–34
- **Código Actual**:
```jsx
export const metadata = {
    title: { absolute: 'Mago para Empresas en Madrid | Magia Corporativa y Cenas · Ángel Ruiz' },
    description: 'Mago profesional para empresas en Madrid. Ilusionismo corporativo para cenas de empresa, team building y eventos de marca. ¡Presupuesto express en 2h!',
    keywords: ['mago para empresas madrid', 'mago para empresas', 'mago empresas', 'mago eventos corporativos madrid', 'mago cenas empresa madrid', 'mago team building madrid', 'mago conferenciante madrid', 'contratar mago empresa madrid', 'ilusionista corporativo madrid', 'mejor mago empresas madrid', 'mago para eventos de empresa madrid', 'mago eventos empresariales', 'magia para empresas', 'mago corporativo premium madrid'],
    alternates: {
        canonical: 'https://angelruiz.world/empresas',
    },
    openGraph: {
        url: 'https://angelruiz.world/empresas',
        title: 'Mago para Empresas en Madrid | Magia Corporativa y Cenas · Ángel Ruiz',
        description: 'Mago profesional para empresas en Madrid. Ilusionismo corporativo para cenas de empresa, team building y eventos de marca. ¡Presupuesto express en 2h!',
        images: [{ url: '/images/evento-angel-ruiz-magia.webp', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago para Empresas en Madrid | Magia Corporativa y Cenas · Ángel Ruiz',
        description: 'Especialista en magia corporativa para cenas y convenciones en Madrid. Presupuesto directo en 2h.',
        images: ['/images/evento-angel-ruiz-magia.webp'],
    },
};
```

### 3.2 Diagnóstico del Problema y Mediciones
1. **Longitud y Contenido del Título**:
   - Actual: `'Mago para Empresas en Madrid | Magia Corporativa y Cenas · Ángel Ruiz'`
   - Longitud actual: **69 caracteres** (se trunca en Google móvil/desktop tras ~60 caracteres).
   - Canibalización: Incluye `"y Cenas"`, compitiendo directamente con la sublanding `/empresas/mago-cenas-empresa-madrid`.
2. **Canibalización en Keywords**:
   - Contiene `'mago cenas empresa madrid'`, que debe ser propiedad exclusiva de la sublanding de cenas de empresa.
3. **Descripción**:
   - Actual: `'Mago profesional para empresas en Madrid. Ilusionismo corporativo para cenas de empresa, team building y eventos de marca. ¡Presupuesto express en 2h!'` (150 caracteres).
   - Menciona `"para cenas de empresa"`.
4. **Desincronización en OpenGraph y Twitter**:
   - Las secciones `openGraph` y `twitter` replican el título y la descripción antiguos con `"y Cenas"`. Si solo se tocan las líneas 16–18, las tarjetas sociales y los rastreadores enriquecidos seguirán mostrando metadatos con canibalización.

### 3.3 Medición Exacta de Caracteres Propuestos
- **Nuevo Título**: `'Mago para Empresas en Madrid | Eventos Corporativos y B2B'`
  - Longitud: **57 caracteres** (Cumple estrictamente `≤ 60 caracteres`).
- **Nueva Descripción (Ajustada para Snippet Óptimo)**:
  `'Mago para empresas en Madrid: convenciones, kick-offs, team building y ferias. Ilusionismo corporativo de alto impacto. ¡Presupuesto express en 2h!'`
  - Longitud: **147 caracteres** (Cumple estrictamente `≤ 155 caracteres`).
- **Nueva Descripción de Twitter**:
  `'Especialista en magia corporativa para eventos, convenciones y ferias en Madrid. Presupuesto directo en 2h.'`
  - Longitud: **107 caracteres**.

### 3.4 Diff Completo y Exacto para FICHA-SEO-02

```diff
--- a/app/empresas/page.jsx
+++ b/app/empresas/page.jsx
@@ -16,3 +16,3 @@
 export const metadata = {
-    title: { absolute: 'Mago para Empresas en Madrid | Magia Corporativa y Cenas · Ángel Ruiz' },
-    description: 'Mago profesional para empresas en Madrid. Ilusionismo corporativo para cenas de empresa, team building y eventos de marca. ¡Presupuesto express en 2h!',
-    keywords: ['mago para empresas madrid', 'mago para empresas', 'mago empresas', 'mago eventos corporativos madrid', 'mago cenas empresa madrid', 'mago team building madrid', 'mago conferenciante madrid', 'contratar mago empresa madrid', 'ilusionista corporativo madrid', 'mejor mago empresas madrid', 'mago para eventos de empresa madrid', 'mago eventos empresariales', 'magia para empresas', 'mago corporativo premium madrid'],
+    title: { absolute: 'Mago para Empresas en Madrid | Eventos Corporativos y B2B' },
+    description: 'Mago para empresas en Madrid: convenciones, kick-offs, team building y ferias. Ilusionismo corporativo de alto impacto. ¡Presupuesto express en 2h!',
+    keywords: ['mago para empresas madrid', 'mago para empresas', 'mago empresas', 'mago eventos corporativos madrid', 'mago team building madrid', 'mago conferenciante madrid', 'contratar mago empresa madrid', 'ilusionista corporativo madrid', 'mejor mago empresas madrid', 'mago para eventos de empresa madrid', 'mago eventos empresariales', 'magia para empresas', 'mago corporativo premium madrid'],
     alternates: {
         canonical: 'https://angelruiz.world/empresas',
     },
     openGraph: {
         url: 'https://angelruiz.world/empresas',
-        title: 'Mago para Empresas en Madrid | Magia Corporativa y Cenas · Ángel Ruiz',
-        description: 'Mago profesional para empresas en Madrid. Ilusionismo corporativo para cenas de empresa, team building y eventos de marca. ¡Presupuesto express en 2h!',
+        title: 'Mago para Empresas en Madrid | Eventos Corporativos y B2B',
+        description: 'Mago para empresas en Madrid: convenciones, kick-offs, team building y ferias. Ilusionismo corporativo de alto impacto. ¡Presupuesto express en 2h!',
         images: [{ url: '/images/evento-angel-ruiz-magia.webp', width: 1200, height: 630 }],
     },
     twitter: {
         card: 'summary_large_image',
-        title: 'Mago para Empresas en Madrid | Magia Corporativa y Cenas · Ángel Ruiz',
-        description: 'Especialista en magia corporativa para cenas y convenciones en Madrid. Presupuesto directo en 2h.',
+        title: 'Mago para Empresas en Madrid | Eventos Corporativos y B2B',
+        description: 'Especialista en magia corporativa para eventos, convenciones y ferias en Madrid. Presupuesto directo en 2h.',
         images: ['/images/evento-angel-ruiz-magia.webp'],
     },
 };
```

---

## 4. VERIFICACIÓN DE REGLAS DE PROYECTO (ZERO AGGREGATERATING)

Se ejecutó análisis programático de todas las propiedades prohibidas por la directriz `GEMINI.md`:
```
aggregaterating: 0
ratingvalue: 0
reviewcount: 0
bestrating: 0
worstrating: 0
```
- **Esquemas JSON-LD presentes en `app/empresas/page.jsx`**:
  - `ProfessionalService` (`https://angelruiz.world/#organization`)
  - `Service` (`https://angelruiz.world/empresas/#service`)
  - `FAQPage`
  - `BreadcrumbList`
- Ninguno de los esquemas contiene campos de rating ni invoca `AggregateRating`. El archivo es 100% compliant con las directrices de indexación limpia de Google.

---

## 5. COMANDOS DE VERIFICACIÓN INDEPENDIENTE PARA EL EJECUTOR

Para validar los cambios tras su aplicación en el codebase:

1. **Verificar el anchor text y la ruta de destino (FICHA-SEO-01)**:
   ```powershell
   Select-String -Path "app/empresas/page.jsx" -Pattern "mago-cenas-empresa-madrid"
   # Debe retornar la línea 344 con el anchor 'mago para cenas de empresa'.
   ```

2. **Verificar la longitud del título (FICHA-SEO-02)**:
   ```powershell
   node -e "const c=require('fs').readFileSync('app/empresas/page.jsx','utf8'); const m=c.match(/title:\s*\{\s*absolute:\s*['\"]([^'\"]+)['\"]/); console.log('Longitud:', m[1].length, m[1]);"
   # Salida esperada: Longitud: 57 Mago para Empresas en Madrid | Eventos Corporativos y B2B
   ```

3. **Verificar la eliminación de la keyword canibalizadora (FICHA-SEO-02)**:
   ```powershell
   node -e "const c=require('fs').readFileSync('app/empresas/page.jsx','utf8'); console.log('Canibalización presente:', c.includes('mago cenas empresa madrid'));"
   # Salida esperada: Canibalización presente: false
   ```

4. **Verificar la ausencia total de AggregateRating**:
   ```powershell
   git grep -i "aggregaterating" app/empresas/page.jsx
   # No debe arrojar ningún resultado (código de salida 1 en git grep = 0 matches).
   ```
