# Handoff Report — Explorer P1-3: Fichas CRO-03, CRO-04 y CRO-05

**Fecha**: 2026-10-25 / 2026-10-26  
**Emisor**: Explorer P1-3 (`.agents/teamwork/explorer_p1_3`)  
**Destinatario**: Parent Orchestrator (`b63a6c37-72a1-4436-9631-2613368ee8ff`) e Implementador  
**Tipo de Handoff**: Hard (Investigación completa con diffs concretos listos para aplicar)

---

## 1. Observation

### Obs 1: Inputs y Selectores con fuente < 16px en `components/CorporateInlineForm.jsx`
- Archivo: `components/CorporateInlineForm.jsx`
- Línea 116 (`name="name"`):
  ```jsx
  className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
  ```
- Línea 132 (`name="company"`):
  ```jsx
  className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 px-4 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
  ```
- Línea 154 (`name="phone"`):
  ```jsx
  className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
  ```
- Línea 171 (`name="email"`):
  ```jsx
  className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
  ```
- Línea 186 (`name="eventType"` select):
  ```jsx
  className="w-full bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 px-3.5 text-slate-200 text-sm sm:text-xs focus:outline-none transition-all appearance-none cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
  ```
- Línea 211 (`name="date"`):
  ```jsx
  className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all [color-scheme:dark] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
  ```
- Línea 228 (`name="message"` textarea):
  ```jsx
  className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 resize-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
  ```

### Obs 2: Inputs y Selectores en `components/Modals.jsx` (`ContactFormModal`)
- Archivo: `components/Modals.jsx`
- Línea 112 (`name="name"`):
  ```jsx
  <input required name="name" type="text" placeholder="Tu nombre" aria-label="Nombre completo para la reserva" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50" />
  ```
- Línea 119 (`name="phone"`):
  ```jsx
  <input required name="phone" type="tel" placeholder="600123456" aria-label="Número de teléfono de contacto" onInput={handlePhoneInput} minLength="9" maxLength="9" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50" />
  ```
- Línea 127 (`name="email"`):
  ```jsx
  <input required name="email" type="email" placeholder="tu@email.com" aria-label="Correo electrónico de contacto" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50" />
  ```
- Línea 134 (`name="eventType"` select):
  ```jsx
  <select name="eventType" aria-label="Selector del tipo de evento" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 px-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50 appearance-none cursor-pointer text-sm">
  ```
- Línea 144 (`name="date"`):
  ```jsx
  <input name="date" type="date" aria-label="Fecha estimada del evento" min={dateMin} className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50 [color-scheme:dark] text-sm" />
  ```
- Línea 152 (`name="message"` textarea):
  ```jsx
  <textarea required name="message" rows="4" aria-label="Detalles adicionales del evento que solicitas" placeholder="Cuéntame más detalles sobre lo que buscas..." className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50 resize-none text-sm"></textarea>
  ```

### Obs 3: Disparadores del Hero Móvil en `components/HomeClient.jsx`
- Archivo: `components/HomeClient.jsx`, líneas 68–101:
  - Línea 70 (Botón Bodas): `onClick={onOpenContact}`
  - Línea 81 (Botón Empresas): `onClick={onOpenContact}`
  - Línea 95 (Botón Primario "Verificar Disponibilidad"): `onClick={onOpenContact}`
- `onOpenContact` activa `isContactOpen = true` (línea 166), desplegando `ContactFormModal` (7 campos, no optimizado para conversión táctil rápida).

### Obs 4: Ausencia de Listener para `open-booking-drawer`
- Comando: `grep_search` con Query `open-booking-drawer` en todo el proyecto.
- Resultado: 0 coincidencias.
- En `components/Navbar.jsx`, el estado `isBookingDrawerOpen` controla el render de `<MobileBookingDrawer isOpen={isBookingDrawerOpen} onClose={() => setIsBookingDrawerOpen(false)} />` (líneas 224–227). El botón de la barra inferior (línea 185) solo tiene `onClick={() => setIsBookingDrawerOpen(true)}`, pero la ventana global no escucha ningún evento personalizado.

### Obs 5: Badge de Urgencia en Hero de `components/HomeClient.jsx`
- Archivo: `components/HomeClient.jsx`, líneas 107–110:
  ```jsx
  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-5 backdrop-blur-md">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <span>Agenda 2026 Abierta · Reserva Anticipada</span>
  </div>
  ```

---

## 2. Logic Chain

1. **Premisa 1 (Safari iOS Auto-Zoom)**: Safari para iOS activa un comportamiento nativo de acercamiento (zoom in) sobre cualquier campo interactivo (`input`, `select`, `textarea`) con un `font-size` inferior a 16px. En Tailwind CSS, `text-sm` equivale a 14px (`0.875rem`) y `text-xs` equivale a 12px (`0.75rem`).
2. **Inferencia 1 (Obs 1 y Obs 2)**: Al tener `text-sm sm:text-xs` en `CorporateInlineForm.jsx` y `text-sm` (o valores heredados < 16px) en `Modals.jsx`, ambos formularios activan invariablemente el auto-zoom en iPhone. Modificar la clase base a `text-base` (16px) en viewport móvil y `sm:text-sm` (o `md:text-sm`) en desktop garantiza que el tamaño sea estrictamente >= 16px en pantallas móviles sin alterar la estética compacta en pantallas grandes.
3. **Premisa 2 (Fricción de Conversión en Hero Móvil)**: La tarjeta móvil en `HomeClient.jsx` fue diseñada para "Conversión en 1 toque" (línea 47). Sin embargo, al tener `onClick={onOpenContact}` (Obs 3), abre el modal de escritorio de 7 campos en lugar del `MobileBookingDrawer` (Apple Liquid Sheet en 2 toques).
4. **Inferencia 2 (Obs 3 y Obs 4)**: Para que los 3 botones del Hero móvil abran el drawer, deben disparar `window.dispatchEvent(new CustomEvent('open-booking-drawer', { detail: { eventType: 'empresa' } }))`. Pero debido a que actualmente no existe ningún listener para dicho evento (Obs 4), se debe agregar en `Navbar.jsx` un `useEffect` que escuche `'open-booking-drawer'` y active `setIsBookingDrawerOpen(true)`. De lo contrario, el despacho del evento sería silencioso y no funcional.
5. **Premisa 3 (Psicología de Cierre Estacional Q4)**: El último trimestre del año (Q4) concentra la mayor demanda corporativa para cenas de empresa y Navidad en Madrid.
6. **Inferencia 3 (Obs 5)**: Sustituir el badge pasivo *"Agenda 2026 Abierta"* por *"Campaña Cenas de Empresa & Navidad · Últimas Fechas Q4"* en `HomeClient.jsx:107-110` genera un estímulo de escasez y urgencia comercial inmediato en cada visitante corporativo que aterriza en la página principal.

---

## 3. Caveats

1. **Alcance de `style={{ fontSize: '16px' }}` vs Clases Tailwind**: Si se usa `style={{ fontSize: '16px' }}`, la propiedad inline prevalece sobre clases CSS responsivas como `sm:text-xs` o `sm:text-sm` en desktop. Por tanto, se recomienda la regla `text-base sm:text-sm` (Tailwind nativo), la cual aplica 16px estrictos en móvil y 14px en desktop, salvo que se desee forzar 16px globalmente.
2. **Formularios secundarios**: El componente `LiquidGlassForm.jsx` también posee `text-sm sm:text-xs`, pero en `HomeClient.jsx` se encuentra oculto en móvil (`hidden lg:block`). Se documenta en el análisis como referencia preventiva para el implementador.
3. **No se alteró código fuente**: Siguiendo la disciplina de agente Explorer (read-only), no se ha modificado ningún archivo fuera del directorio `.agents/teamwork/explorer_p1_3/`.

---

## 4. Conclusion

El diagnóstico para las tareas CRO-03, CRO-04 y CRO-05 está completamente concluido con precisión de línea y diffs verificados:
1. **FICHA-CRO-03**: Sustituir en `CorporateInlineForm.jsx` (líneas 116, 132, 154, 171, 186, 211, 228) la clase `text-sm sm:text-xs` por `text-base sm:text-sm`. En `Modals.jsx` (líneas 112, 119, 127, 134, 144, 152), añadir o sustituir por `text-base md:text-sm`.
2. **FICHA-CRO-04**: En `HomeClient.jsx` (líneas 70, 81, 95), sustituir `onOpenContact` por la llamada `triggerBookingDrawer('boda' | 'empresa')`. En `Navbar.jsx`, registrar el listener para `'open-booking-drawer'` que active `setIsBookingDrawerOpen(true)`.
3. **FICHA-CRO-05**: En `HomeClient.jsx` (líneas 107–110), sustituir el badge por la cápsula con *"Campaña Cenas de Empresa & Navidad · Últimas Fechas Q4"*.

Los diffs completos y validados se encuentran detallados en `.agents/teamwork/explorer_p1_3/analysis.md`.

---

## 5. Verification Method

Para verificar independientemente la correcta aplicación de estos cambios:
1. **Inspección de Estilos Móviles**:
   - Abrir DevTools con viewport iPhone (ancho < 640px).
   - Inspeccionar los campos de formulario en `CorporateInlineForm` y `Modals` (`name`, `company`, `phone`, `email`, `eventType`, `date`, `message`).
   - Comprobar en la pestaña *Computed* que `font-size` es exactamente `16px`.
2. **Verificación Funcional del Drawer**:
   - En resolución móvil (<768px), hacer tap en "Empresas", "Bodas" o "Verificar Disponibilidad ⚡" dentro del Hero.
   - Constatar que emerge el sheet inferior nativo `MobileBookingDrawer` en lugar del modal centrado `ContactFormModal`.
3. **Verificación Visual del Hero**:
   - Confirmar en la Home la presencia del badge estacional: `🟢 Campaña Cenas de Empresa & Navidad · Últimas Fechas Q4`.
4. **Verificación de Integridad y Build**:
   ```powershell
   npm run build
   git grep -i "aggregaterating"
   ```
   - El build debe finalizar con código 0 y las 140 páginas estáticas generadas.
   - `git grep -i "aggregaterating"` debe devolver 0 resultados.
