# INFORME DE ANÁLISIS TÉCNICO: FICHA-CRO-02 Y FICHA-SEO-03
**Explorador**: Explorer P0-2  
**Fecha**: 2026-10-25T23:36:00Z  
**Archivo Principal Investigado**: `app/empresas/mago-cenas-empresa-madrid/page.jsx`  
**Directorio de Trabajo**: `.agents/teamwork/explorer_p0_2`  

---

## 1. RESUMEN EJECUTIVO

Se ha completado la inspección técnica exhaustiva de `app/empresas/mago-cenas-empresa-madrid/page.jsx` para preparar la ejecución inmediata del bloque P0 (FICHA-CRO-02 y FICHA-SEO-03):
1. **FICHA-CRO-02 (Hero Above-The-Fold CTA)**: La cabecera carece de elementos interactivos de conversión en el primer viewport (líneas 97–111). Se define la inserción exacta del bloque dual (CTA Primario WhatsApp + CTA Secundario de anclaje) inmediatamente tras la línea 109.  
   - **Hallazgo Crítico adicional**: La sección inferior con el formulario (`<CorporateInlineForm />`) en la línea 282 no posee el atributo `id="presupuesto-empresa"`, por lo que el botón secundario no funcionaría sin añadir dicho `id`. Se incluye la corrección coordinada.
2. **FICHA-SEO-03 (Longitud de Snippet SERP)**: Los metadatos actuales exceden los límites máximos de visualización en las SERPs de Google (Título = 74 caracteres vs. máx. 60; Descripción = 158 caracteres vs. máx. 155). Se verifican los nuevos textos: Título = 54 caracteres (≤ 60), Descripción = 154 caracteres (≤ 155), garantizando visualización al 100% sin truncamiento en móvil y escritorio.
3. **Guardrail Inviolable GEMINI.md (0 AggregateRating)**: Se auditó todo el archivo y los esquemas JSON-LD. Se confirma **cero coincidencias** de `AggregateRating`, `ratingValue`, `reviewCount`, `bestRating` o `worstRating`. El archivo cumple estrictamente las reglas de proyecto.

---

## 2. INVESTIGACIÓN DETALLADA FICHA-CRO-02: HERO ABOVE-THE-FOLD

### 2.1. Diagnóstico del Estado Actual
- **Ubicación en código**: `app/empresas/mago-cenas-empresa-madrid/page.jsx`, líneas 97–111:
  ```jsx
  97:       <header className="relative pt-32 pb-20 border-b border-white/10 overflow-hidden">
  98:         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-950 to-slate-950"></div>
  99:         <div className="max-w-6xl mx-auto px-6 relative z-10">
  100:           <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 text-amber-400 text-xs uppercase tracking-widest font-semibold">
  101:             <span>✦</span>
  102:             <span>Experiencias Exclusivas para Cenas Corporativas</span>
  103:           </div>
  104:           <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Cinzel] font-bold text-white tracking-wide mb-6 uppercase">
  105:             Mago para Cenas de Empresa en Madrid
  106:           </h1>
  107:           <p className="text-lg md:text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
  108:             Convierte la cena de empresa en un evento memorable. Ilusionismo corporativo de alta gama que fomenta el <span className="text-amber-400 font-medium">networking natural, rompe el hielo y refuerza el orgullo de marca</span>.
  109:           </p>
  110:         </div>
  111:       </header>
  ```
- **Fricción Detectada**:
  - Tras el párrafo (línea 109), el contenedor `div` se cierra directamente sin ningún botón de llamada a la acción.
  - El primer elemento interactivo es el banner de urgencia en la línea 118 (`ChristmasUrgencyBanner`), situado a más de 750px de altura vertical tras la barra de logotipos (`CorporateLogosBar`), fuera de la vista en viewports móviles (375x667 o 390x844).
  - El usuario que busca contratar de forma rápida debe hacer scroll prolongado, provocando rebote antes de contactar.

### 2.2. Diseño e Inserción del Bloque Dual de Conversión
- **Punto de Inserción**: Inmediatamente tras la línea 109, antes del cierre `</div>` de la línea 110.
- **Estructura del Componente**:
  - Contenedor flexible con `mt-8 flex flex-wrap items-center gap-4`.
  - **CTA Primario (WhatsApp Directo)**:
    - Enlace: `https://wa.me/34648055636?text=Hola%20Ángel,%20quisiera%20consultar%20disponibilidad%20y%20tarifas%20para%20nuestra%20cena%20de%20empresa%20en%20Madrid`
    - Número: `34648055636` (número oficial verificado).
    - Mensaje contextual: pre-rellenado específico para cenas de empresa y tarifas en Madrid.
    - Atributos: `target="_blank" rel="noopener noreferrer"`.
    - Estilos: Gradiente esmeralda (`from-emerald-500 to-green-600`), texto blanco en negrita, icono SVG inline de WhatsApp, micro-compromiso de SLA de respuesta rápida `(<15 min)`.
  - **CTA Secundario (Anclaje a Formulario/Tarifas)**:
    - Enlace: `#presupuesto-empresa`.
    - Estilos: Glassmorphism oscuro con borde dorado (`bg-white/10 border border-amber-400/40 text-amber-300`), efecto hover a tono con la estética de lujo del sitio.
    - Etiqueta: `Ver Tarifas y Presupuesto Online`.

### 2.3. Hallazgo Crítico: Identificador de Ancla Faltante
- En la línea 282:
  ```jsx
  281:       {/* CALL TO ACTION */}
  282:       <section className="py-20 border-t border-white/10 relative overflow-hidden">
  ```
- La sección que contiene `<CorporateInlineForm />` carece de `id="presupuesto-empresa"`. Sin este atributo, el clic en el botón secundario `#presupuesto-empresa` no provocaría ningún scroll en el navegador.
- **Acción requerida**: Asignar `id="presupuesto-empresa"` en la línea 282:
  ```jsx
  <section id="presupuesto-empresa" className="py-20 border-t border-white/10 relative overflow-hidden">
  ```

---

## 3. INVESTIGACIÓN DETALLADA FICHA-SEO-03: LONGITUDES DE METADATOS SERP

### 3.1. Diagnóstico del Estado Actual
- **Ubicación en código**: `app/empresas/mago-cenas-empresa-madrid/page.jsx`, líneas 13–16:
  ```javascript
  13: export const metadata = {
  14:   title: { absolute: 'Mago para Cenas de Empresa en Madrid 2026 | Fiestas y Navidad · Ángel Ruiz' },
  15:   description: '¿Buscando mago para la cena de empresa en Madrid? Magia de cerca cóctel y banquete. Fechas limitadas Navidad 2026. Presupuesto directo por WhatsApp en 15 min.',
  16:   keywords: ['mago para cenas de empresa', 'mago para cenas de empresa en madrid', ...],
  ```

### 3.2. Mediciones Exactas de Caracteres
Ejecución de cálculo programático (`node`):

| Campo | Texto Actual | Longitud Actual | Límite Máx. Google | Estado Actual |
|---|---|:---:|:---:|:---:|
| **Title** | `Mago para Cenas de Empresa en Madrid 2026 \| Fiestas y Navidad · Ángel Ruiz` | **74 chars** | 60 chars (~600px) | ❌ **TRUNCADO** (+14 chars) |
| **Description** | `¿Buscando mago para la cena de empresa en Madrid? Magia de cerca cóctel y banquete. Fechas limitadas Navidad 2026. Presupuesto directo por WhatsApp en 15 min.` | **158 chars** | 155 chars | ❌ **TRUNCADO** (+3 chars) |

### 3.3. Medición de los Textos Optimizados Propuestos

| Campo | Texto Propuesto | Longitud Propuesta | Límite Máx. Google | Cumplimiento |
|---|---|:---:|:---:|:---:|
| **Title** | `Mago para Cenas de Empresa en Madrid \| Cenas y Navidad` | **54 chars** | ≤ 60 chars |  **ÓPTIMO** (-6 chars margen) |
| **Description** | `Mago profesional para cenas de empresa en Madrid y fiestas de Navidad. Magia de cerca cóctel y sobremesa. Fechas limitadas Q4. ¡Presupuesto express en 2h!` | **154 chars** | ≤ 155 chars |  **ÓPTIMO** (-1 char margen) |

### 3.4. Impacto SEO & CTR
- **Title (54 caracteres)**: Mantiene el keyword principal exacto en posición frontal (`Mago para Cenas de Empresa en Madrid`), añade el vector secundario de alta intención (`Cenas y Navidad`) y encaja limpiamente en el snippet móvil sin puntos suspensivos (`...`).
- **Description (154 caracteres)**: Condensa la propuesta de valor sin preguntas retóricas que diluyen relevancia, cita los dos momentos clave de servicio ("cóctel y sobremesa"), introduce el gatillo de escasez ("Fechas limitadas Q4") y la llamada a la acción con SLA ("¡Presupuesto express en 2h!").
- **Nota OpenGraph / Twitter**: En las líneas 22 y 28, los títulos actuales miden 69 caracteres. Aunque los motores de búsqueda se guían por `metadata.title`, mantener sincronizados o preservar los títulos sociales es seguro.

---

## 4. AUDITORÍA DE SEGURIDAD Y REGLAS DE NEGOCIO (GEMINI.md)

### 4.1. Verificación Estricta de 0 AggregateRating
Se ejecutó un escaneo de patrones en el archivo:
- `aggregaterating`: **0 coincidencias**
- `ratingvalue`: **0 coincidencias**
- `reviewcount`: **0 coincidencias**
- `bestrating`: **0 coincidencias**
- `worstrating`: **0 coincidencias**

### 4.2. Análisis de Esquemas JSON-LD Existentes (líneas 45–86)
El objeto `schemaJson` contiene:
1. `ProfessionalService`:
   - `@id`: `"https://angelruiz.world/#organization"`
   - `telephone`: `"+34648055636"` (coincide con el número oficial)
   - `address`: PostalAddress (Madrid, ES)
   - `priceRange`: `"€€€"`
   - Sin propiedades de valoración.
2. `Service`:
   - `name`: `"Mago para Cenas de Empresa en Madrid"`
   - `provider`: `{ "@type": "Person", "name": "Ángel Ruiz" }`
   - Sin propiedades de valoración.
3. `FAQPage`:
   - Mapeado directo del array `faqs`. Sin valoraciones.
4. `BreadcrumbList`:
   - 3 niveles jerárquicos (Inicio → Empresas → Cenas). Sin valoraciones.

**Resultado**: El archivo cumple al 100% con la directiva inmutable de cero `AggregateRating`.

---

## 5. PROPUESTA DE CAMBIOS EXACTOS (DIFF PATCH)

Para que el agente ejecutor aplique los cambios con precisión absoluta:

```diff
--- a/app/empresas/mago-cenas-empresa-madrid/page.jsx
+++ b/app/empresas/mago-cenas-empresa-madrid/page.jsx
@@ -14,2 +14,2 @@
-  title: { absolute: 'Mago para Cenas de Empresa en Madrid 2026 | Fiestas y Navidad · Ángel Ruiz' },
-  description: '¿Buscando mago para la cena de empresa en Madrid? Magia de cerca cóctel y banquete. Fechas limitadas Navidad 2026. Presupuesto directo por WhatsApp en 15 min.',
+  title: { absolute: 'Mago para Cenas de Empresa en Madrid | Cenas y Navidad' },
+  description: 'Mago profesional para cenas de empresa en Madrid y fiestas de Navidad. Magia de cerca cóctel y sobremesa. Fechas limitadas Q4. ¡Presupuesto express en 2h!',
@@ -107,4 +107,24 @@
           <p className="text-lg md:text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
             Convierte la cena de empresa en un evento memorable. Ilusionismo corporativo de alta gama que fomenta el <span className="text-amber-400 font-medium">networking natural, rompe el hielo y refuerza el orgullo de marca</span>.
           </p>
+          {/* Bloque CTA Above-the-fold */}
+          <div className="mt-8 flex flex-wrap items-center gap-4">
+            <a 
+              href="https://wa.me/34648055636?text=Hola%20Ángel,%20quisiera%20consultar%20disponibilidad%20y%20tarifas%20para%20nuestra%20cena%20de%20empresa%20en%20Madrid"
+              target="_blank"
+              rel="noopener noreferrer"
+              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all"
+            >
+              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
+              <span>Consultar Disponibilidad WhatsApp (&lt;15 min)</span>
+            </a>
+            <a
+              href="#presupuesto-empresa"
+              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-amber-400/40 text-amber-300 font-bold text-xs uppercase tracking-wider transition-all"
+            >
+              <span>Ver Tarifas y Presupuesto Online</span>
+            </a>
+          </div>
         </div>
       </header>
@@ -282,1 +302,1 @@
-      <section className="py-20 border-t border-white/10 relative overflow-hidden">
+      <section id="presupuesto-empresa" className="py-20 border-t border-white/10 relative overflow-hidden">
```

---

## 6. CONCLUSIÓN Y RECOMENDACIÓN PARA EL EJECUTOR

1. El cambio no introduce componentes pesados de terceros ni dependencias JS cliente (`a` nativo con SVG inline).
2. No afecta métricas LCP ni introduce CLS (el bloque de botones se renderiza en el servidor con dimensiones estables).
3. Añadir el `id="presupuesto-empresa"` al section de la línea 282 garantiza que la experiencia del usuario sea coherente entre el CTA secundario y el formulario.
4. Las longitudes de metadatos quedan blindadas para los límites SERP (54 y 154 caracteres).
5. Se mantiene 0 AggregateRating sin ninguna excepción.
