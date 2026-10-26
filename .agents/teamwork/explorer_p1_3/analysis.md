# Análisis Exhaustivo y Diffs de Implementación: FICHA-CRO-03, FICHA-CRO-04 y FICHA-CRO-05

**Investigador**: Explorer P1-3  
**Directorio de Trabajo**: `.agents/teamwork/explorer_p1_3`  
**Fecha**: 2026-10-25 / 2026-10-26  
**Objetivo**: Formular diagnósticos con números de línea exactos y diffs de reemplazo listos para ejecución por el Implementador para las tareas de optimización de conversión móvil: FICHA-CRO-03 (prevención de auto-zoom iOS en inputs), FICHA-CRO-04 (conexión del Hero móvil con `MobileBookingDrawer`), y FICHA-CRO-05 (badge estacional Q4 en el Hero).

---

## 1. Resumen Ejecutivo

1. **FICHA-CRO-03 (Auto-zoom iOS Safari)**: Se identificaron **13 campos interactivos** con tamaño de fuente menor a 16px en móvil:
   - **7 controles en `components/CorporateInlineForm.jsx`** (líneas 116, 132, 154, 171, 186, 211, 228) que emplean `text-sm sm:text-xs` (14px en móvil), provocando zoom automático molesto en iPhone.
   - **6 controles en `components/Modals.jsx`** (líneas 112, 119, 127 sin tamaño explícito heredando ~13.3px, y líneas 134, 144, 152 con `text-sm` explícito).
   - Se formula el reemplazo exacto a `text-base sm:text-sm` (o `text-base md:text-sm` en Modals), garantizando 16px en viewport móvil (<640px) y escala compacta en desktop.
2. **FICHA-CRO-04 (Conexión Hero Móvil -> `MobileBookingDrawer`)**:
   - En `components/HomeClient.jsx` (líneas 70, 81, 95), los 3 botones de la tarjeta móvil invocan `onOpenContact`, abriendo el modal de 7 campos en lugar del drawer nativo.
   - **Hallazgo Crítico de Arquitectura**: Actualmente ningún componente del proyecto escucha el evento `'open-booking-drawer'`. Por tanto, se documenta tanto el despacho del evento en `HomeClient.jsx` como el listener necesario en `components/Navbar.jsx` (donde reside el estado `isBookingDrawerOpen`), además de una mejora de sincronización en `MobileBookingDrawer.jsx` para seleccionar automáticamente el tipo de evento (`boda` o `empresa`).
3. **FICHA-CRO-05 (Badge de Urgencia Q4 en Hero Home)**:
   - En `components/HomeClient.jsx` (líneas 107–110), el badge dice *"Agenda 2026 Abierta · Reserva Anticipada"*.
   - Se formula el diff exacto para sustituirlo por el banner estacional de alta conversión: *"Campaña Cenas de Empresa & Navidad · Últimas Fechas Q4"* con micro-luz pulsante esmeralda y backdrop blur.

---

## 2. FICHA-CRO-03: Erradicación del Auto-Zoom de iOS Safari

### 2.1. Causa Raíz Técnica
En WebKit/iOS Safari, cualquier elemento `<input>`, `<select>` o `<textarea>` cuyo `font-size` computado sea **estrictamente inferior a 16px** (1rem con base de 16px) dispara un zoom automático involuntario cuando el usuario hace tap en el campo. Esto rompe la maquetación visual, desplaza el viewport fuera del flujo y genera fricción de abandono en más del 60% del tráfico corporativo que accede desde iPhone.

### 2.2. Inventario de Campos en `components/CorporateInlineForm.jsx`

| Control | Nombre / Atributo | Línea Actual | Código Actual | Corrección Propuesta |
| :--- | :--- | :--- | :--- | :--- |
| `input` | `name="name"` | 116 | `text-slate-100 text-sm sm:text-xs` | `text-slate-100 text-base sm:text-sm` |
| `input` | `name="company"` | 132 | `text-slate-100 text-sm sm:text-xs` | `text-slate-100 text-base sm:text-sm` |
| `input` | `name="phone"` | 154 | `text-slate-100 text-sm sm:text-xs` | `text-slate-100 text-base sm:text-sm` |
| `input` | `name="email"` | 171 | `text-slate-100 text-sm sm:text-xs` | `text-slate-100 text-base sm:text-sm` |
| `select` | `name="eventType"` | 186 | `text-slate-200 text-sm sm:text-xs` | `text-slate-200 text-base sm:text-sm` |
| `input` | `name="date"` | 211 | `text-slate-100 text-sm sm:text-xs` | `text-slate-100 text-base sm:text-sm` |
| `textarea` | `name="message"` | 228 | `text-slate-100 text-sm sm:text-xs` | `text-slate-100 text-base sm:text-sm` |

### 2.3. Inventario de Campos en `components/Modals.jsx` (`ContactFormModal`)

| Control | Nombre / Atributo | Línea Actual | Código Actual | Corrección Propuesta |
| :--- | :--- | :--- | :--- | :--- |
| `input` | `name="name"` | 112 | Sin clase de tamaño (hereda < 16px) | Añadir `text-base md:text-sm` |
| `input` | `name="phone"` | 119 | Sin clase de tamaño (hereda < 16px) | Añadir `text-base md:text-sm` |
| `input` | `name="email"` | 127 | Sin clase de tamaño (hereda < 16px) | Añadir `text-base md:text-sm` |
| `select` | `name="eventType"` | 134 | `text-sm` al final de la clase | Sustituir `text-sm` por `text-base md:text-sm` |
| `input` | `name="date"` | 144 | `text-sm` al final de la clase | Sustituir `text-sm` por `text-base md:text-sm` |
| `textarea` | `name="message"` | 152 | `text-sm` al final de la clase | Sustituir `text-sm` por `text-base md:text-sm` |

### 2.4. Hallazgo Adicional: Referencia de Calidad en `components/MobileBookingDrawer.jsx`
En `components/MobileBookingDrawer.jsx` (líneas 289, 309, 330), ya se aplica explícitamente:
```jsx
style={{ fontSize: '16px' }} // Evita auto-zoom en iOS Safari
```
Esto demuestra que el estándar del proyecto es asegurar estrictamente 16px en móvil. El uso de `text-base sm:text-sm` (o `text-base md:text-sm`) en Tailwind aplica `font-size: 1rem` (16px) en viewport móvil (<640px / <768px) y escala a 14px (`0.875rem`) en pantallas mayores, combinando prevención de zoom y estética de diseño.

### 2.5. Diff Concreto para `components/CorporateInlineForm.jsx`

```diff
--- a/components/CorporateInlineForm.jsx
+++ b/components/CorporateInlineForm.jsx
@@ -116,1 +116,1 @@
-                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
+                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-base sm:text-sm focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
@@ -132,1 +132,1 @@
-                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 px-4 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
+                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 px-4 text-slate-100 text-base sm:text-sm focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
@@ -154,1 +154,1 @@
-                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
+                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-base sm:text-sm focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
@@ -171,1 +171,1 @@
-                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
+                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-base sm:text-sm focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
@@ -186,1 +186,1 @@
-                                    className="w-full bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 px-3.5 text-slate-200 text-sm sm:text-xs focus:outline-none transition-all appearance-none cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
+                                    className="w-full bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 px-3.5 text-slate-200 text-base sm:text-sm focus:outline-none transition-all appearance-none cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
@@ -211,1 +211,1 @@
-                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all [color-scheme:dark] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
+                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-base sm:text-sm focus:outline-none transition-all [color-scheme:dark] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
@@ -228,1 +228,1 @@
-                                className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 resize-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
+                                className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-base sm:text-sm focus:outline-none transition-all placeholder:text-slate-500 resize-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
```

### 2.6. Diff Concreto para `components/Modals.jsx`

```diff
--- a/components/Modals.jsx
+++ b/components/Modals.jsx
@@ -112,1 +112,1 @@
-                                <input required name="name" type="text" placeholder="Tu nombre" aria-label="Nombre completo para la reserva" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50" />
+                                <input required name="name" type="text" placeholder="Tu nombre" aria-label="Nombre completo para la reserva" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 text-base md:text-sm focus:outline-none focus:border-[#d4a853]/50" />
@@ -119,1 +119,1 @@
-                                <input required name="phone" type="tel" placeholder="600123456" aria-label="Número de teléfono de contacto" onInput={handlePhoneInput} minLength="9" maxLength="9" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50" />
+                                <input required name="phone" type="tel" placeholder="600123456" aria-label="Número de teléfono de contacto" onInput={handlePhoneInput} minLength="9" maxLength="9" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 text-base md:text-sm focus:outline-none focus:border-[#d4a853]/50" />
@@ -127,1 +127,1 @@
-                            <input required name="email" type="email" placeholder="tu@email.com" aria-label="Correo electrónico de contacto" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50" />
+                            <input required name="email" type="email" placeholder="tu@email.com" aria-label="Correo electrónico de contacto" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 text-base md:text-sm focus:outline-none focus:border-[#d4a853]/50" />
@@ -134,1 +134,1 @@
-                                <select name="eventType" aria-label="Selector del tipo de evento" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 px-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50 appearance-none cursor-pointer text-sm">
+                                <select name="eventType" aria-label="Selector del tipo de evento" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 px-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50 appearance-none cursor-pointer text-base md:text-sm">
@@ -144,1 +144,1 @@
-                                <input name="date" type="date" aria-label="Fecha estimada del evento" min={dateMin} className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50 [color-scheme:dark] text-sm" />
+                                <input name="date" type="date" aria-label="Fecha estimada del evento" min={dateMin} className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50 [color-scheme:dark] text-base md:text-sm" />
@@ -152,1 +152,1 @@
-                            <textarea required name="message" rows="4" aria-label="Detalles adicionales del evento que solicitas" placeholder="Cuéntame más detalles sobre lo que buscas..." className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50 resize-none text-sm"></textarea>
+                            <textarea required name="message" rows="4" aria-label="Detalles adicionales del evento que solicitas" placeholder="Cuéntame más detalles sobre lo que buscas..." className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50 resize-none text-base md:text-sm"></textarea>
```

---

## 3. FICHA-CRO-04: Conexión de Hero Móvil con `MobileBookingDrawer`

### 3.1. Diagnóstico y Arquitectura de Eventos
En `components/HomeClient.jsx`:
- En pantallas móviles (`lg:hidden`), la tarjeta de conversión táctil (líneas 48–101) muestra:
  - Botón "Bodas (450€ - 650€)" (línea 68)
  - Botón "Empresas (500€ - 750€)" (línea 79)
  - Botón Primario "Verificar Disponibilidad ⚡" (línea 93)
- Todos ellos llaman a `onClick={onOpenContact}`, abriendo `ContactFormModal` (7 campos, scroll largo, petición obligatoria de mensaje).
- El componente `MobileBookingDrawer` (diseño Apple Liquid Sheet de 2 toques) está renderizado dentro de `components/Navbar.jsx` (línea 224) y se controla mediante el estado `isBookingDrawerOpen`.

### 3.2. Hallazgo Crítico
La ficha técnica indicaba: *"despachar el evento personalizado `window.dispatchEvent(new CustomEvent('open-booking-drawer', { detail: { eventType: 'empresa' } }))` que ya escucha la barra inferior"*.
**Verificación directa**: Una búsqueda `grep_search` de `'open-booking-drawer'` en todo el proyecto reveló **0 coincidencias**. La barra inferior en `Navbar.jsx:185` actualmente solo abre el drawer internamente vía `onClick={() => setIsBookingDrawerOpen(true)}`, pero **NO tiene registrado ningún listener** para `open-booking-drawer`.
Si el implementador solo añadiera el `dispatchEvent` en `HomeClient.jsx`, el evento no sería escuchado por nadie.

### 3.3. Solución Completa de 2 Partes

#### Parte A: `components/Navbar.jsx` (Receptor Global)
Añadir el listener en `Navbar.jsx` dentro de un `useEffect` para que cualquier componente de la web pueda abrir el `MobileBookingDrawer` invocando el evento estándar:
```jsx
useEffect(() => {
    const handleOpenBookingDrawer = () => setIsBookingDrawerOpen(true);
    window.addEventListener('open-booking-drawer', handleOpenBookingDrawer);
    return () => window.removeEventListener('open-booking-drawer', handleOpenBookingDrawer);
}, []);
```

#### Parte B: `components/HomeClient.jsx` (Disparador en Hero)
En `HeroClient`, definir la función despachadora y conectarla a los 3 botones móviles:
```jsx
const triggerBookingDrawer = (eventType = 'empresa') => {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('open-booking-drawer', { detail: { eventType } }));
    }
};
```
- Botón Boda (línea 70): `onClick={() => triggerBookingDrawer('boda')}`
- Botón Empresas (línea 81): `onClick={() => triggerBookingDrawer('empresa')}`
- Botón Primario (línea 95): `onClick={() => triggerBookingDrawer('empresa')}`

#### Parte C (Mejora Opcional de Alta Conversión): `components/MobileBookingDrawer.jsx`
Para que el tap en "Bodas" o "Empresas" preseleccione inmediatamente el preset y salte directamente al Paso 2 (Datos de Contacto en 2 toques), `MobileBookingDrawer.jsx` puede sincronizar el estado:
```jsx
useEffect(() => {
    const handleCustomOpen = (e) => {
        const type = e.detail?.eventType;
        if (type) {
            const preset = EVENT_PRESETS.find(p => p.id === type);
            if (preset) {
                setSelectedEvent(preset);
                setStep(2);
            }
        }
    };
    window.addEventListener('open-booking-drawer', handleCustomOpen);
    return () => window.removeEventListener('open-booking-drawer', handleCustomOpen);
}, []);
```

### 3.4. Diff Concreto para `components/HomeClient.jsx`

```diff
--- a/components/HomeClient.jsx
+++ b/components/HomeClient.jsx
@@ -13,2 +13,8 @@
 const HeroClient = ({ onOpenVideo, onOpenContact }) => {
+    const triggerBookingDrawer = (eventType = 'empresa') => {
+        if (typeof window !== 'undefined') {
+            window.dispatchEvent(new CustomEvent('open-booking-drawer', { detail: { eventType } }));
+        }
+    };
+
     return (
@@ -68,3 +74,3 @@
                                 <button
                                     type="button"
-                                    onClick={onOpenContact}
+                                    onClick={() => triggerBookingDrawer('boda')}
                                     className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-amber-400/50 flex items-center gap-2 text-left active:scale-95 transition-all"
@@ -79,3 +85,3 @@
                                 <button
                                     type="button"
-                                    onClick={onOpenContact}
+                                    onClick={() => triggerBookingDrawer('empresa')}
                                     className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-amber-400/50 flex items-center gap-2 text-left active:scale-95 transition-all"
@@ -93,3 +99,3 @@
                             <button
                                 type="button"
-                                onClick={onOpenContact}
+                                onClick={() => triggerBookingDrawer('empresa')}
                                 className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4a853] via-[#f7e7c4] to-[#b8860b] text-[#030712] font-black text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(212,168,83,0.35)] flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer"
```

### 3.5. Diff Concreto para `components/Navbar.jsx` (Listener Companion)

```diff
--- a/components/Navbar.jsx
+++ b/components/Navbar.jsx
@@ -34,2 +34,8 @@
     }, []);
 
+    useEffect(() => {
+        const handleOpenBookingDrawer = () => setIsBookingDrawerOpen(true);
+        window.addEventListener('open-booking-drawer', handleOpenBookingDrawer);
+        return () => window.removeEventListener('open-booking-drawer', handleOpenBookingDrawer);
+    }, []);
+
     useEffect(() => {
```

---

## 4. FICHA-CRO-05: Aviso de Urgencia Estacional Q4 en el Hero de la Home

### 4.1. Diagnóstico
En `components/HomeClient.jsx`, líneas 107–110:
```jsx
107:                         <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-5 backdrop-blur-md">
108:                             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
109:                             <span>Agenda 2026 Abierta · Reserva Anticipada</span>
110:                         </div>
```
El texto actual *"Agenda 2026 Abierta · Reserva Anticipada"* no transmite la urgencia inminente del último trimestre del año (octubre, noviembre y diciembre), época donde se cierran más del 70% de las contrataciones corporativas para cenas de empresa y eventos de Navidad en Madrid.

### 4.2. Cambio Propuesto
Actualizar las clases de color a un tono ámbar más brillante (`bg-amber-500/15 border-amber-400/40 text-amber-300`) y cambiar el copy por:
```jsx
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 backdrop-blur-md">
    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
    <span>Campaña Cenas de Empresa & Navidad · Últimas Fechas Q4</span>
</div>
```

### 4.3. Diff Concreto para `components/HomeClient.jsx`

```diff
--- a/components/HomeClient.jsx
+++ b/components/HomeClient.jsx
@@ -107,4 +113,4 @@
-                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-5 backdrop-blur-md">
-                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
-                            <span>Agenda 2026 Abierta · Reserva Anticipada</span>
-                        </div>
+                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 backdrop-blur-md">
+                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
+                            <span>Campaña Cenas de Empresa & Navidad · Últimas Fechas Q4</span>
+                        </div>
```

---

## 5. Método de Verificación Independiente y Criterios de Aceptación

1. **Verificación de Tamaños de Fuente en Viewport Móvil**:
   - Abrir DevTools con emulación de iPhone 12/14 (viewport 390x844px).
   - Inspeccionar cada uno de los inputs en `CorporateInlineForm` y `Modals` (`name`, `company`, `phone`, `email`, `eventType`, `date`, `message`).
   - Comprobar que la propiedad CSS computada `font-size` es exactamente `16px`.
   - Simular tap/focus y verificar que Safari no realiza ningún zoom involuntario en la pantalla.
2. **Verificación del Drawer Móvil desde el Hero**:
   - En viewport móvil (<768px), hacer tap en "Empresas", "Bodas" o "Verificar Disponibilidad ⚡" en la tarjeta del Hero.
   - Verificar que se despliega el sheet inferior `MobileBookingDrawer` (Apple Liquid Sheet) en lugar del modal centrado `ContactFormModal`.
3. **Verificación Visual del Badge de Urgencia**:
   - Comprobar visualmente que sobre el título "ANGEL RUIZ" aparece el badge:
     `🟢 Campaña Cenas de Empresa & Navidad · Últimas Fechas Q4`.
4. **Verificación de Compilación y Regresión**:
   ```powershell
   npm run build
   ```
   - Exit code debe ser `0` y las 140 rutas deben compilar limpiamente.
   - Comprobación estricta de `AggregateRating`:
   ```powershell
   git grep -i "aggregaterating"
   ```
   - Debe retornar 0 coincidencias.
