# Storyboard - Promo Video Ángel Ruiz (25s Vertical Corporativo)

**Format:** 1080×1920 (Vertical, optimizado para Reels/TikTok/Shorts)
**Audio:** Underscore music + SFX (No narración)
**Music direction:** "Misteriosa pero a la vez enérgica". Inicia con sonido misterioso y rítmico (0-4s), rompe con base electrónica y arpegios dorados (4-20s) y resuelve en un acorde suspendido y atmosférico (20-25s).
**Style basis:** DESIGN.md (Fondos oscuros `#020617`, acentos dorados/ámbar `#F59E0B`, fuentes `Cinzel` e `Inter`).

---

## Asset Audit

### Contact sheet: capture/assets/contact-sheet.jpg
* `public/images/mago-empresas-madrid-angel-ruiz.svg`: **USE** en Beat 1 (Apertura) y Beat 6 (Cierre).
* `ngel-ruiz-mago-e-ilusionista-profesional.webp`: **USE** en Beat 5 (Autoridad/Magia de Autor).
* `pea-la-escombrera.webp`: **SKIP** (No encaja con el tono corporativo premium).
* `public/images/logo-grande.webp`: **SKIP** (Reemplazado por el SVG vectorial).

---

## Beat-by-Beat Storyboard

### BEAT 1 — LOGO INTRO (0:00–0:04)

* **Concept:** Establecer misterio. Un haz de luz dorada dibuja el monograma del mago en total oscuridad.
* **Shot Type:** Close-up
* **Camera Move:** Dolly out (scale 1.10 → 1.00)
* **Depth Strategy:** Fondo oscuro (`#020617`), resplandor circular ámbar detrás del monograma.
* **Visual description:** Las líneas del monograma se autodibujan en dorado. Un halo ámbar pulsa suavemente al completarse el dibujo.
* **Composition + Accents:**
  - **Composed:** Contenedor centrado con el logotipo vectorial. Animación de trazos vía CSS `stroke-dashoffset`.
* **SFX:** `sfx/impact-bass-2.mp3` desde t=0.0s, pico en t=2.5s; `sfx/whoosh-cinematic.mp3` en t=3.4s para transición.
* **Beat Timing:** Transition in: 0.0s · GSAP duration: 4.0s
* **Animation Sequence:**
  - 0.0s: Dibujado de trazos SVG (strokeDashoffset: 3686 → 0, 2.5s, power2.inOut).
  - 2.2s: El resplandor trasero se enciende y pulsa.
  - 3.5s: Desvanecimiento e inicio de transición (opacity: 1 → 0, scale: 1.0 → 1.1).

---

### BEAT 2 — THE HOOK (0:04–0:08)

* **Concept:** Lanzar la gran promesa enfocada al sector de empresas.
* **Shot Type:** Extreme close-up
* **Camera Move:** Dolly in (scale 1.00 → 1.08)
* **Depth Strategy:** Fondo oscuro con partículas doradas flotantes. Texto en primer plano en gran escala.
* **Visual description:** Las palabras aparecen secuencialmente de forma dinámica con un resplandor dorado.
* **Composition + Accents:**
  - **Composed:** Tipografía masiva de gran peso visual (`Inter`, font-weight: 900) con tuteo consistente.
* **Text Animations:**
  - `main-headline` ("La magia que hace que tu evento de empresa sea inolvidable."): `words-reveal-up`
* **SFX:** `sfx/impact-bass-1.mp3` en t=4.1s para marcar la fuerza del hook.
* **Beat Timing:** Transition in: 4.0s · GSAP duration: 4.0s
* **Animation Sequence:**
  - 0.2s: Revelado escalonado de las palabras en pantalla (y: 40px → 0px, opacity: 0 → 1).
  - 3.5s: Desplazamiento de salida rápido hacia la izquierda.

---

### BEAT 3 — CORPORATE FORMATS (0:08–0:12)

* **Concept:** Mostrar formatos de show específicos para empresas y completar la altura visual.
* **Shot Type:** Medium shot
* **Camera Move:** Parallax pan
* **Depth Strategy:** Tarjetas con sombreado y bordes iluminados en 3D en el plano medio. Subtítulos explicativos debajo de cada título para rellenar el espacio inferior.
* **Visual description:** Tres tarjetas elegantes se deslizan en cascada desde la derecha con un leve ángulo 3D.
* **Composition + Accents:**
  - **Composed:** 3 tarjetas con fondo semi-transparente, borde ámbar y descripciones corporativas:
    1. **Cenas de Gala:** *"Sofisticación y asombro para tus invitados VIP."*
    2. **Team Building:** *"Imposibilidades compartidas que unen a tu equipo."*
    3. **Presentaciones:** *"Lanzamientos memorables con alto impacto de marca."*
* **SFX:** `sfx/whoosh-short.mp3` en t=8.1s, 8.3s, 8.5s para acompañar la entrada.
* **Beat Timing:** Transition in: 8.0s · GSAP duration: 4.0s
* **Animation Sequence:**
  - 0.2s: Tarjeta 1 entra (x: 400px → 0px, rotationY: 20 → 0, 0.7s).
  - 0.4s: Tarjeta 2 entra.
  - 0.6s: Tarjeta 3 entra.
  - 3.5s: Compresión y salida vertical (y: 0px → -100px, opacity: 1 → 0).

---

### BEAT 4 — CORPORATE BENEFITS (0:12–0:16)

* **Concept:** Beneficios del ilusionismo inteligente explicados al detalle.
* **Shot Type:** Medium shot
* **Camera Move:** Push (scale 1.00 → 1.06)
* **Depth Strategy:** Panel completo en primer plano con subtítulos detallados para cubrir huecos en la base.
* **Visual description:** Un tablero de control de beneficios donde las filas se iluminan en color dorado de arriba a abajo.
* **Composition + Accents:**
  - **Composed:** Fila de beneficios con iconos de alta calidad, títulos grandes y explicaciones en formato de texto pequeño:
    - **Networking Natural:** *"El asombro compartido facilita que tus invitados conecten."*
    - **Refuerzo de Marca:** *"Mensajes corporativos integrados en los propios efectos."*
    - **Cero Tiempos Muertos:** *"Dinamismo constante en las transiciones y cócteles."*
* **SFX:** `sfx/click-soft.mp3` en t=12.5s, 12.9s, 13.3s.
* **Beat Timing:** Transition in: 12.0s · GSAP duration: 4.0s
* **Animation Sequence:**
  - 0.0s: El panel se desliza desde abajo.
  - 0.5s: Fila 1 se activa (fondo ámbar suave, texto a blanco, descripción se revela).
  - 0.9s: Fila 2 se activa.
  - 1.3s: Fila 3 se activa.
  - 3.6s: Salida de escena con deslizamiento descendente.

---

### BEAT 5 — ELITE CREDIBILITY (0:16–0:20)

* **Concept:** Presentar las credenciales profesionales del mago de cara a clientes exigentes.
* **Shot Type:** Close-up
* **Camera Move:** Dolly out (scale 1.12 → 1.00)
* **Depth Strategy:** Retrato en alta calidad de Ángel Ruiz en segundo plano con barrido de luz. Textos en tipografía serif premium en primer plano.
* **Visual description:** La imagen de fondo se desliza lentamente hacia la derecha. Textos elegantes emergen para avalar su experiencia de élite.
* **Composition + Accents:**
  - **Composed:** Imagen de fondo `ngel-ruiz-mago-e-ilusionista-profesional.webp` con máscara degradada oscura.
  - **Textos:** Eyebrow en dorado y descripción detallada en tipografía serif premium.
* **SFX:** `sfx/sparkle.mp3` en t=16.3s.
* **Beat Timing:** Transition in: 16.0s · GSAP duration: 4.0s
* **Animation Sequence:**
  - 0.0s: Deriva lenta de la imagen.
  - 0.3s: El título "MAGIA DE AUTOR" se desliza de izquierda a derecha.
  - 0.6s: El subtexto *"Formación de élite (Escuela DaOrtiz). Más de 10 años asombrando a grandes marcas"* aparece.
  - 3.6s: Swipe lateral para dar paso al final.

---

### BEAT 6 — OUTRO / CTA (0:20–0:25)

* **Concept:** Llamada a la acción clara e información de contacto, completando el lienzo inferior.
* **Shot Type:** Wide shot
* **Camera Move:** Dolly in (scale 1.00 → 1.05)
* **Depth Strategy:** Logotipo centrado, botón CTA en plano medio superior, datos de contacto y servicios en la base para rellenar huecos.
* **Visual description:** El monograma se redibuja, el botón "CONTRATAR AHORA" aparece rebotando y los datos de contacto y cobertura geográfica ocupan la base de la pantalla.
* **Composition + Accents:**
  - **Composed:** Botón pill dorado con resplandor fuerte. Caja de contacto con teléfono y web.
  - **Llenado de espacio:** Sección de cobertura *"SERVICIOS VIP PARA EMPRESAS · MADRID Y ZONA NOROESTE"* en tipografía mono de escala pequeña en la zona baja de la pantalla.
* **SFX:** `sfx/chime.mp3` en t=20.5s.
* **Beat Timing:** Transition in: 20.0s · GSAP duration: 5.0s
* **Animation Sequence:**
  - 0.0s: Redibujado veloz del logotipo (0.8s).
  - 0.4s: El botón de llamada a la acción emerge con rebote (scale: 0 → 1).
  - 0.8s: Información de contacto se desliza desde abajo.
  - 1.1s: Línea de cobertura/servicios inferiores se desvanece y acomoda en la base.
  - 1.5s: Bucle de pulsación en el botón CTA.
  - 4.5s: Fundido a negro final de toda la pantalla (0.5s).

---

## Production Architecture

```
videos/promo/
├── index.html                    root — Composición unificada de 25s
├── DESIGN.md                     brand reference (reglas visuales)
├── STORYBOARD.md                 THIS FILE — creative north star
└── capture/                      captured website data
```
