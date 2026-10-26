# Explorer P1-3 Task Assignment

Working Directory: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p1_3`

Target Tasks:
1. **FICHA-CRO-03 (iOS Safari Auto-Zoom Fix, font-size >= 16px)**:
   - Inspect `components/CorporateInlineForm.jsx` (inputs, selects, textareas).
   - Inspect `components/Modals.jsx` (inputs, selects, textareas).
   - Identify every input/select/textarea with `text-xs`, `text-sm`, or font-size < 16px.
   - Formulate exact replacements ensuring `text-base sm:text-sm` or `style={{ fontSize: '16px' }}` on mobile to prevent Safari iOS auto-zooming.
2. **FICHA-CRO-04 (`components/HomeClient.jsx`: Mobile Hero -> MobileBookingDrawer)**:
   - Inspect lines 68-101 in `components/HomeClient.jsx`.
   - Inspect how `MobileBookingDrawer` is invoked or listen to `open-booking-drawer`.
   - Formulate diff to connect mobile hero buttons to dispatch `window.dispatchEvent(new CustomEvent('open-booking-drawer', { detail: { eventType: 'empresa' } }))` or trigger the booking drawer in 2 taps instead of the 7-field heavy modal.
3. **FICHA-CRO-05 (`components/HomeClient.jsx`: Q4 Urgency Notice)**:
   - Inspect lines 105-115 in `components/HomeClient.jsx`.
   - Formulate exact diff to update badge from "Agenda 2026 Abierta" to:
     `<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 backdrop-blur-md">`
     `<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />`
     `<span>Campaña Cenas de Empresa & Navidad · Últimas Fechas Q4</span>`
     `</div>`

Write findings to `analysis.md` and complete `handoff.md`.
