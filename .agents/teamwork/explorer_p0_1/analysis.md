# Análisis de Investigación: Unificación de WhatsApp Oficial (FICHA-CRO-01)

**Agente**: Explorer P0-1  
**Fecha**: 2026-10-25T23:35:00Z  
**Objetivo**: Búsqueda exhaustiva y determinación de diffs exactos para erradicar el número secundario `34680650993` (`680650993`) y unificar todos los puntos de contacto al número oficial `34648055636` (+34 648 05 56 36).

---

## 1. Resumen Ejecutivo de Hallazgos

Se ejecutó un rastreo integral en todo el repositorio (`AngelRuizWorld-main`) buscando cualquier variante de formato (`680650993`, `34680650993`, `680 65`, `650993`, enlaces `wa.me`, esquemas `telephone`, enlaces `tel:`, etc.).

### Resultado del Rastreo Global
- **Ocurrencias del número secundario (`34680650993`) encontradas**: **Exactamente 2** en código fuente activo.
  1. `app/empresas/page.jsx` — Línea 266
  2. `app/particulares/bodas/page.jsx` — Línea 225
- **Ocurrencias en otros componentes y páginas inspeccionadas**:
  - `app/contacto/page.jsx`: Utiliza `+34648055636` en Schema JSON-LD y delega la interfaz a `DigitalCard.jsx`.
  - `app/contacto/DigitalCard.jsx`: Utiliza `https://wa.me/34648055636` (Línea 180) y texto visible `648 055 636` (Línea 191).
  - `app/api/vcard/route.js`: Utiliza `+34648055636` (Línea 11).
  - `app/mago-close-up-madrid/page.jsx`: Utiliza `+34648055636` en esquemas `EntertainmentBusiness` (Línea 117) y `Person` (Línea 181). El botón de contacto interactivo utiliza `ContactButtonClient` -> `ContactFormModal` (`components/Modals.jsx:183`), que ya enlaza a `34648055636`.
  - `components/WhatsAppButton.jsx`: Utiliza `34648055636` (Línea 66).
  - `components/Navbar.jsx`: Utiliza `34648055636` (Línea 202).
  - `components/Footer.jsx`: Utiliza `34648055636` (Línea 23) y `tel:+34648055636` (Línea 90).
  - `components/MobileBookingDrawer.jsx`: Utiliza `34648055636` (Líneas 103, 244).
  - `components/LiquidGlassForm.jsx`: Utiliza `34648055636` (Línea 250).
  - `components/CorporateInlineForm.jsx`: Utiliza `34648055636` (Línea 266).
  - `components/ChristmasUrgencyBanner.jsx`: Utiliza `34648055636` (Línea 14).
  - `public/llms.txt` y `public/llms-full.txt`: Referencian exclusivamente `+34 648 055 636`.
  - `public/AGENTS.md`: Referencia `+34 648 055 636` y `https://wa.me/34648055636`.

---

## 2. Detalle de Archivos Afectados y Diffs Propuestos

### Caso 1: `app/empresas/page.jsx`
- **Ubicación**: Línea 266 (sección de Cobertura B2B y solicitud de propuesta inmediata).
- **Contexto**: CTA directo para clientes corporativos de alto ticket (presupuestos de 500€ a 750€+).
- **Código actual**:
  ```jsx
  265:                                 <a 
  266:                                     href="https://wa.me/34680650993?text=Hola%20Ángel,%20solicitamos%20presupuesto%20para%20un%20evento%20de%20empresa" 
  267:                                     target="_blank" 
  268:                                     rel="noopener noreferrer"
  269:                                     className="inline-flex items-center gap-2 text-amber-400 hover:text-white transition-colors font-medium whitespace-nowrap self-start sm:self-auto"
  270:                                 >
  271:                                     <span>Solicitar propuesta B2B inmediata</span>
  272:                                     <span>→</span>
  273:                                 </a>
  ```
- **Diff exacto propuesto**:
  ```diff
  --- a/app/empresas/page.jsx
  +++ b/app/empresas/page.jsx
  @@ -266,1 +266,1 @@
  -                                    href="https://wa.me/34680650993?text=Hola%20Ángel,%20solicitamos%20presupuesto%20para%20un%20evento%20de%20empresa" 
  +                                    href="https://wa.me/34648055636?text=Hola%20Ángel,%20solicitamos%20presupuesto%20para%20un%20evento%20de%20empresa" 
  ```

---

### Caso 2: `app/particulares/bodas/page.jsx`
- **Ubicación**: Línea 225 (sección de Requisitos técnicos y consulta de fecha de boda).
- **Contexto**: CTA transaccional para parejas consultando disponibilidad nupcial (tickets de 450€ a 650€).
- **Código actual**:
  ```jsx
  224:                                 <a 
  225:                                     href="https://wa.me/34680650993?text=Hola%20Ángel,%20queremos%20consultar%20disponibilidad%20para%20nuestra%20boda" 
  226:                                     target="_blank" 
  227:                                     rel="noopener noreferrer"
  228:                                     className="inline-flex items-center gap-2 text-[#d4a853] hover:text-white transition-colors font-medium whitespace-nowrap self-start sm:self-auto"
  229:                                 >
  230:                                     <span>Consultar fecha por WhatsApp</span>
  231:                                     <span>→</span>
  232:                                 </a>
  ```
- **Diff exacto propuesto**:
  ```diff
  --- a/app/particulares/bodas/page.jsx
  +++ b/app/particulares/bodas/page.jsx
  @@ -225,1 +225,1 @@
  -                                    href="https://wa.me/34680650993?text=Hola%20Ángel,%20queremos%20consultar%20disponibilidad%20para%20nuestra%20boda" 
  +                                    href="https://wa.me/34648055636?text=Hola%20Ángel,%20queremos%20consultar%20disponibilidad%20para%20nuestra%20boda" 
  ```

---

## 3. Matriz de Auditoría de Vías de Contacto

| Archivo / Componente | Elemento | Número Detectado | Estado |
|---|---|---|---|
| `app/empresas/page.jsx` | Línea 266 (`<a href="https://wa.me/...">`) | `34680650993` | ⚠️ **Requiere Corrección** |
| `app/particulares/bodas/page.jsx` | Línea 225 (`<a href="https://wa.me/...">`) | `34680650993` | ⚠️ **Requiere Corrección** |
| `app/contacto/page.jsx` | Línea 66 (JSON-LD Person.telephone) | `+34648055636` | ✅ Correcto |
| `app/contacto/DigitalCard.jsx` | Línea 180 (WhatsApp Link) | `34648055636` | ✅ Correcto |
| `app/contacto/DigitalCard.jsx` | Línea 191 (Etiqueta visible) | `648 055 636` | ✅ Correcto |
| `app/api/vcard/route.js` | Línea 11 (`TEL;TYPE=...`) | `+34648055636` | ✅ Correcto |
| `app/mago-close-up-madrid/page.jsx` | Líneas 117, 181 (JSON-LD telephone) | `+34648055636` | ✅ Correcto |
| `app/mago-close-up-madrid/page.jsx` | Línea 293 (`ContactButtonClient`) | Abre modal con `34648055636` | ✅ Correcto |
| `components/WhatsAppButton.jsx` | Línea 66 (`waUrl`) | `34648055636` | ✅ Correcto |
| `components/Navbar.jsx` | Línea 202 (`waUrl`) | `34648055636` | ✅ Correcto |
| `components/Footer.jsx` | Líneas 23, 90 (`waUrl`, `tel:`) | `+34648055636` | ✅ Correcto |
| `components/MobileBookingDrawer.jsx`| Líneas 103, 244 (`waUrl`) | `34648055636` | ✅ Correcto |
| `components/LiquidGlassForm.jsx` | Línea 250 (`waUrl`) | `34648055636` | ✅ Correcto |
| `components/CorporateInlineForm.jsx`| Línea 266 (`waUrl`) | `34648055636` | ✅ Correcto |
| `components/ChristmasUrgencyBanner.jsx`| Línea 14 (`waUrl`) | `34648055636` | ✅ Correcto |
| `components/Modals.jsx` | Línea 183 (`waUrl`) | `34648055636` | ✅ Correcto |
| `public/llms.txt` | Línea 3 (Canal WhatsApp) | `+34 648 055 636` | ✅ Correcto |
| `public/llms-full.txt` | Línea 14 (Canal WhatsApp) | `+34 648 055 636` | ✅ Correcto |
| `public/AGENTS.md` | Línea 49 (Canal WhatsApp) | `+34 648 055 636` | ✅ Correcto |

---

## 4. Conclusión e Instrucción para el Ejecutor

La tarea de ejecución de `FICHA-CRO-01` requiere modificar estrictamente dos líneas en dos archivos clave (`app/empresas/page.jsx:266` y `app/particulares/bodas/page.jsx:225`). No existe ningún otro archivo en todo el proyecto que contenga el número secundario.
