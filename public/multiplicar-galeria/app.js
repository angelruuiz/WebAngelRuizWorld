/* ================================================================
   iOS 18 Photos Magic App — 500 Photos Infinite Scroll
   
   SECUENCIA MÁGICA:
   1. State 0: Configuración.
   2. State 1: Galería normal (la captura real del iPhone).
      ↳ PRIMER TOQUE (en cualquier parte):
        ¡SHOCK 1! La foto elegida APARECE en el hueco libre exacto.
      ↳ SEGUNDO TOQUE (esquina superior izquierda):
        ¡SHOCK 2! La galería se convierte en 500 fotos idénticas.
        El usuario puede DESLIZAR HACIA ARRIBA demostrando que
        toda la galería no tiene otra cosa que esa foto.
   3. Toque en cualquier foto (sin arrastrar) → State 3 (Visor a pantalla completa).
   4. Toque en "< Fototeca" → Vuelve a la galería de 500 fotos.
   5. Reset secreto: Triple toque en la zona superior → Vuelve al Setup.
   ================================================================ */
(() => {
    'use strict';

    // ===== CONSTANTES Y ESTADO =====
    const NUM_CELLS = 500; // 500 fotos para scroll infinito
    const SECRET_CORNER_SIZE = 140; // px en la esquina superior izquierda

    let trickImageData    = null;
    let galleryImageData  = '/multiplicar-galeria/foto buena.jpeg'; // Precargada por defecto
    let gridBuilt         = false;
    let photoRevealed     = false;
    let gridMultiplied    = false;
    let revealTimestamp   = 0;
    let lastTapTimestamp  = 0;

    // ===== ELEMENTOS DEL DOM =====
    const allStates             = document.querySelectorAll('.state');
    const deviceFrame           = document.getElementById('device-frame');
    const state3                = document.getElementById('state-3');
    const zoomProxyContainer    = document.getElementById('zoom-proxy-container');
    const zoomProxyImg          = document.getElementById('zoom-proxy-img');
    const inputTrick            = document.getElementById('input-trick');
    const inputGallery          = document.getElementById('input-gallery');
    const previewTrick          = document.getElementById('preview-trick');
    const previewGallery        = document.getElementById('preview-gallery');
    const btnArm                = document.getElementById('btn-arm');
    const galleryWrapper        = document.getElementById('gallery-wrapper');
    const imgGallery            = document.getElementById('img-gallery');
    const addedPhoto            = document.getElementById('added-photo');
    const addedPhotoImg         = document.getElementById('added-photo-img');
    const multipliedGrid        = document.getElementById('multiplied-grid');
    const multipliedScrollTrack = document.getElementById('multiplied-scroll-track');
    const floatingHeader        = document.getElementById('floating-header');
    const floatingTabbar        = document.getElementById('floating-tabbar');
    const photosSubtitle        = document.getElementById('photos-subtitle');
    const triggerZone           = document.getElementById('trigger-zone');
    const viewerBack            = document.getElementById('viewer-back');
    const viewerImg             = document.getElementById('viewer-img');
    const inputOffset           = document.getElementById('input-offset');
    const offsetValLabel        = document.getElementById('offset-val-label');

    let activeCell              = null;
    let isAnimatingPhoto        = false;
    let viewerOpen              = false;

    // ===== IMAGEN DE MUESTRA POR DEFECTO =====
    function createDefaultTrickImage() {
        const canvas = document.createElement('canvas');
        canvas.width = 600;
        canvas.height = 600;
        const ctx = canvas.getContext('2d');
        // Fondo blanco puro sin bordes negros
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, 600, 600);
        // Sutil borde interior gris muy suave
        ctx.strokeStyle = '#E5E5EA';
        ctx.lineWidth = 4;
        ctx.strokeRect(2, 2, 596, 596);
        // As de Corazones
        ctx.fillStyle = '#E02424';
        ctx.font = 'bold 84px -apple-system, sans-serif';
        ctx.fillText('A', 40, 100);
        ctx.fillText('♥', 40, 175);
        ctx.fillText('A', 510, 520);
        ctx.fillText('♥', 510, 445);
        ctx.font = 'bold 240px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('♥', 300, 305);
        return canvas.toDataURL('image/jpeg', 0.95);
    }

    // ===== FUNCIÓN DE COMPRESIÓN Y OPTIMIZACIÓN RÁPIDA DE IMÁGENES =====
    function compressAndOptimizeImage(file, maxDim, quality, cb) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                let w = img.width;
                let h = img.height;
                if (w > maxDim || h > maxDim) {
                    if (w > h) {
                        h = Math.round(h * (maxDim / w));
                        w = maxDim;
                    } else {
                        w = Math.round(w * (maxDim / h));
                        h = maxDim;
                    }
                }
                const canvas = document.createElement('canvas');
                canvas.width = w;
                canvas.height = h;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, w, h);
                const optimized = canvas.toDataURL('image/jpeg', quality);
                cb(optimized);
            };
            img.onerror = () => cb(e.target.result);
            img.src = e.target.result;
        };
        reader.onerror = () => cb(null);
        reader.readAsDataURL(file);
    }

    // Inicializar imagen (desde localStorage si existe para funcionar 100% offline)
    try {
        const savedTrick = localStorage.getItem('magic_trick_image');
        trickImageData = savedTrick || createDefaultTrickImage();
    } catch (e) {
        trickImageData = createDefaultTrickImage();
    }

    showPreview(previewTrick, trickImageData);
    showPreview(previewGallery, galleryImageData);

    // ===== CONSTRUCTOR ULTRA-RÁPIDO CON RECICLAJE DE NODOS DE LA CUADRÍCULA =====
    function buildMultipliedGrid() {
        const existingImgs = multipliedScrollTrack.querySelectorAll('.multiplied-cell img');
        if (existingImgs.length === NUM_CELLS) {
            // Reciclaje instantáneo en memoria (3 ms) sin tocar el DOM
            for (let i = 0; i < NUM_CELLS; i++) {
                existingImgs[i].src = trickImageData;
            }
            gridBuilt = true;
            return;
        }

        multipliedScrollTrack.innerHTML = '';
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < NUM_CELLS; i++) {
            const cell = document.createElement('div');
            cell.className = 'multiplied-cell';
            const img = document.createElement('img');
            img.src = trickImageData;
            img.alt = '';
            img.draggable = false;
            cell.appendChild(img);
            fragment.appendChild(cell);
        }

        multipliedScrollTrack.appendChild(fragment);
        gridBuilt = true;
    }

    // Pre-construir la cuadrícula en segundo plano al arrancar la app (0 ms de espera después)
    buildMultipliedGrid();

    // ===== SISTEMA DE ZOOM Y PANEO INTERACTIVO (PINCH, DOUBLE-TAP Y WHEEL) =====
    let currentScale = 1;
    let currentPanX  = 0;
    let currentPanY  = 0;
    const MIN_ZOOM   = 1;
    const MAX_ZOOM   = 3.5;

    function applyViewerTransform(animate = false, duration = 280) {
        if (animate) {
            viewerImg.style.transition = `transform ${duration}ms cubic-bezier(0.32, 0.72, 0, 1)`;
        } else {
            viewerImg.style.transition = 'none';
        }
        viewerImg.style.transform = `translate3d(${currentPanX}px, ${currentPanY}px, 0) scale(${currentScale})`;
    }

    function clampPan() {
        if (currentScale <= 1) {
            currentPanX = 0;
            currentPanY = 0;
            return;
        }
        const frameRect = deviceFrame.getBoundingClientRect();
        const maxPanX = Math.max(0, (frameRect.width * (currentScale - 1)) / 2);
        const maxPanY = Math.max(0, (frameRect.height * (currentScale - 1)) / 2);

        currentPanX = Math.max(-maxPanX, Math.min(maxPanX, currentPanX));
        currentPanY = Math.max(-maxPanY, Math.min(maxPanY, currentPanY));
    }

    function resetViewerZoom(animate = true) {
        currentScale = 1;
        currentPanX = 0;
        currentPanY = 0;
        applyViewerTransform(animate);
        if (animate) {
            setTimeout(() => {
                if (currentScale === 1) {
                    viewerImg.style.transition = '';
                    viewerImg.style.transform = 'none';
                }
            }, 290);
        } else {
            viewerImg.style.transition = '';
            viewerImg.style.transform = 'none';
        }
    }

    // ===== ANIMACIÓN DE ZOOM MORPHING ESTILO iOS 18 =====
    function openPhotoViewer(cell) {
        if (isAnimatingPhoto || viewerOpen) return;
        isAnimatingPhoto = true;
        viewerOpen = true;
        activeCell = cell;

        resetViewerZoom(false);

        // Cargar imagen en visor y proxy
        zoomProxyImg.src = trickImageData;
        viewerImg.src = trickImageData;

        // 1. Posición y dimensiones de la celda pulsada en el viewport relativo
        const frameRect = deviceFrame.getBoundingClientRect();
        const cellRect = cell.getBoundingClientRect();

        const startX = cellRect.left - frameRect.left;
        const startY = cellRect.top - frameRect.top;
        const startW = cellRect.width;
        const startH = cellRect.height;

        // Ocultar la celda pulsada para que la transición sea limpia
        cell.style.opacity = '0';

        // 2. Colocar el proxy exactamente en la celda
        zoomProxyContainer.style.transition = 'none';
        zoomProxyContainer.style.left = startX + 'px';
        zoomProxyContainer.style.top = startY + 'px';
        zoomProxyContainer.style.width = startW + 'px';
        zoomProxyContainer.style.height = startH + 'px';
        zoomProxyContainer.style.borderRadius = '0px';
        zoomProxyContainer.style.display = 'block';

        // 3. Activar inmediatamente el fondo negro sólido para tapar la cuadrícula
        viewerImg.style.opacity = '0';
        viewerImg.style.transform = 'none';
        state3.style.transition = 'none';
        state3.style.backgroundColor = '#000000';
        state3.classList.add('active');
        state3.classList.remove('in');

        // 4. Medir dónde queda centrada la foto final en el visor
        requestAnimationFrame(() => {
            const finalImgRect = viewerImg.getBoundingClientRect();
            let finalX = finalImgRect.left - frameRect.left;
            let finalY = finalImgRect.top - frameRect.top;
            let finalW = finalImgRect.width;
            let finalH = finalImgRect.height;

            // Fallback de seguridad si aún no está renderizado
            if (finalW <= 0 || finalH <= 0) {
                finalW = frameRect.width;
                finalH = frameRect.width;
                finalX = 0;
                finalY = Math.max(0, (frameRect.height - finalH) / 2);
            }

            // 5. Iniciar la animación fluida idéntica al iPhone
            requestAnimationFrame(() => {
                const easeCurve = 'cubic-bezier(0.32, 0.72, 0, 1)';
                zoomProxyContainer.style.transition = `left 330ms ${easeCurve}, top 330ms ${easeCurve}, width 330ms ${easeCurve}, height 330ms ${easeCurve}`;
                zoomProxyContainer.style.left = finalX + 'px';
                zoomProxyContainer.style.top = finalY + 'px';
                zoomProxyContainer.style.width = finalW + 'px';
                zoomProxyContainer.style.height = finalH + 'px';

                // Fade-in de fondo negro y controles del visor
                state3.classList.add('in');

                setTimeout(() => {
                    viewerImg.style.opacity = '1';
                    zoomProxyContainer.style.display = 'none';
                    isAnimatingPhoto = false;
                }, 340);
            });
        });
    }

    function closePhotoViewer() {
        if (isAnimatingPhoto || !viewerOpen) return;
        isAnimatingPhoto = true;

        resetViewerZoom(false);

        const frameRect = deviceFrame.getBoundingClientRect();
        const currentImgRect = viewerImg.getBoundingClientRect();

        const currX = currentImgRect.left - frameRect.left;
        const currY = currentImgRect.top - frameRect.top;
        const currW = currentImgRect.width;
        const currH = currentImgRect.height;

        let targetX = currX;
        let targetY = currY;
        let targetW = currW;
        let targetH = currH;

        if (activeCell) {
            const cellRect = activeCell.getBoundingClientRect();
            targetX = cellRect.left - frameRect.left;
            targetY = cellRect.top - frameRect.top;
            targetW = cellRect.width;
            targetH = cellRect.height;
        }

        // Colocar el proxy exactamente donde está la foto ampliada
        zoomProxyContainer.style.transition = 'none';
        zoomProxyContainer.style.left = currX + 'px';
        zoomProxyContainer.style.top = currY + 'px';
        zoomProxyContainer.style.width = currW + 'px';
        zoomProxyContainer.style.height = currH + 'px';
        zoomProxyContainer.style.display = 'block';

        // Ocultar foto fija
        viewerImg.style.opacity = '0';
        viewerImg.style.transform = 'none';

        // Desvanecer fondo negro y controles suavemente hacia la cuadricula
        state3.classList.remove('in');
        state3.style.transition = 'background-color 280ms cubic-bezier(0.32, 0.72, 0, 1)';
        state3.style.backgroundColor = 'transparent';

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const easeCurve = 'cubic-bezier(0.32, 0.72, 0, 1)';
                zoomProxyContainer.style.transition = `left 300ms ${easeCurve}, top 300ms ${easeCurve}, width 300ms ${easeCurve}, height 300ms ${easeCurve}`;
                zoomProxyContainer.style.left = targetX + 'px';
                zoomProxyContainer.style.top = targetY + 'px';
                zoomProxyContainer.style.width = targetW + 'px';
                zoomProxyContainer.style.height = targetH + 'px';

                setTimeout(() => {
                    zoomProxyContainer.style.display = 'none';
                    if (activeCell) {
                        activeCell.style.opacity = '1';
                        activeCell = null;
                    }
                    state3.classList.remove('active');
                    state3.style.backgroundColor = '#000000';
                    state3.style.transition = '';
                    viewerImg.style.opacity = '1';
                    viewerOpen = false;
                    isAnimatingPhoto = false;
                }, 310);
            });
        });
    }

    // ===== DETECCIÓN INTELIGENTE DE TAP VS SCROLL EN 500 FOTOS =====
    let isScrollDragging = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let touchHandled = false;

    multipliedGrid.addEventListener('touchstart', (e) => {
        isScrollDragging = false;
        if (e.touches && e.touches.length > 0) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchStartTime = Date.now();
        }
    }, { passive: true });

    multipliedGrid.addEventListener('touchmove', (e) => {
        if (!e.touches || e.touches.length === 0) return;
        const dx = Math.abs(e.touches[0].clientX - touchStartX);
        const dy = Math.abs(e.touches[0].clientY - touchStartY);
        if (dx > 10 || dy > 10) {
            isScrollDragging = true; // El usuario está deslizando la galería
        }
    }, { passive: true });

    multipliedGrid.addEventListener('touchend', (e) => {
        const tapDuration = Date.now() - touchStartTime;
        // Si no se arrastró y fue un toque breve (< 350ms), es un TAP
        if (!isScrollDragging && tapDuration < 350) {
            const cell = e.target.closest('.multiplied-cell');
            if (cell) {
                touchHandled = true;
                setTimeout(() => { touchHandled = false; }, 400);
                openPhotoViewer(cell); // Abre con zoom cinematográfico de iOS
            }
        }
    });

    // Soporte para clics de ratón en PC
    multipliedGrid.addEventListener('click', (e) => {
        if (touchHandled) return;
        const cell = e.target.closest('.multiplied-cell');
        if (cell) {
            openPhotoViewer(cell);
        }
    });

    // ===== MÁQUINA DE ESTADOS =====
    function setState(n) {
        if (n !== 3) {
            allStates.forEach(s => s.classList.remove('active'));
        }

        switch (n) {
            case 0:
                document.getElementById('state-0').classList.add('active');
                viewerOpen = false;
                isAnimatingPhoto = false;
                state3.classList.remove('active', 'in');
                state3.style.backgroundColor = '';
                zoomProxyContainer.style.display = 'none';
                if (activeCell) {
                    activeCell.style.opacity = '1';
                    activeCell = null;
                }
                break;

            case 1:
                // Galería normal con captura de iPhone
                document.getElementById('state-1').classList.add('active');
                photoRevealed = false;
                gridMultiplied = false;
                revealTimestamp = 0;
                viewerOpen = false;
                isAnimatingPhoto = false;
                state3.classList.remove('active', 'in');
                zoomProxyContainer.style.display = 'none';
                if (activeCell) {
                    activeCell.style.opacity = '1';
                    activeCell = null;
                }
                addedPhoto.classList.remove('visible');
                multipliedGrid.classList.remove('active');
                floatingHeader.classList.remove('visible');
                floatingTabbar.classList.remove('visible');
                addedPhotoImg.src = trickImageData;
                imgGallery.src = galleryImageData;
                if (!gridBuilt) {
                    buildMultipliedGrid();
                    gridBuilt = true;
                }
                break;

            case 2:
                // Galería multiplicada: 500 fotos con scroll
                document.getElementById('state-1').classList.add('active');
                gridMultiplied = true;
                multipliedGrid.classList.add('active');
                floatingHeader.classList.add('visible');
                floatingTabbar.classList.add('visible');
                photosSubtitle.textContent = NUM_CELLS + ' ítems';

                // Posicionar el scroll abajo del todo para arrancar como la galería real
                requestAnimationFrame(() => {
                    multipliedGrid.scrollTop = multipliedGrid.scrollHeight;
                });
                break;

            case 3:
                // Si se llama directamente a State 3
                if (multipliedScrollTrack.firstElementChild) {
                    openPhotoViewer(multipliedScrollTrack.firstElementChild);
                }
                break;
        }
    }

    // ===== UTILIDADES =====
    function readFileAsDataURL(file, cb) {
        const r = new FileReader();
        r.onload = (e) => cb(e.target.result);
        r.onerror = () => cb(null);
        r.readAsDataURL(file);
    }

    function showPreview(container, dataURL) {
        container.textContent = '';
        if (!dataURL) return;
        const img = document.createElement('img');
        img.src = dataURL;
        img.alt = '';
        img.draggable = false;
        container.appendChild(img);
    }

    // ===== DESPACHADOR UNIVERSAL DE TAP =====
    function bindUniversalTap(element, callback) {
        let touchHandled = false;

        element.addEventListener('touchstart', (e) => {
            touchHandled = true;
            callback(e);
        }, { passive: false });

        element.addEventListener('pointerdown', (e) => {
            if (e.pointerType === 'mouse') {
                callback(e);
            }
        });

        element.addEventListener('click', (e) => {
            if (touchHandled) {
                touchHandled = false;
                return;
            }
            callback(e);
        });
    }

    // =================================================================
    //  MANEJO DE EVENTOS
    // =================================================================

    // ===== ESTADO 0: INPUTS DE ARCHIVOS CON COMPRESIÓN Y PRE-ARMADO INSTANTÁNEO =====
    inputTrick.addEventListener('change', (e) => {
        const f = e.target.files[0];
        if (!f) return;
        compressAndOptimizeImage(f, 960, 0.85, (optimized) => {
            if (!optimized) return;
            trickImageData = optimized;
            try {
                localStorage.setItem('magic_trick_image', optimized);
            } catch (err) {}
            showPreview(previewTrick, optimized);
            addedPhotoImg.src = optimized;
            viewerImg.src = optimized;
            zoomProxyImg.src = optimized;
            // Pre-construir / actualizar la cuadrícula de 500 fotos en segundo plano AHORA
            buildMultipliedGrid();
        });
    });

    inputGallery.addEventListener('change', (e) => {
        const f = e.target.files[0];
        if (!f) return;
        compressAndOptimizeImage(f, 1200, 0.88, (optimized) => {
            if (!optimized) return;
            galleryImageData = optimized;
            try {
                localStorage.setItem('magic_gallery_image', optimized);
            } catch (err) {}
            showPreview(previewGallery, optimized);
            imgGallery.src = optimized;
        });
    });

    // ===== CALIBRACIÓN DE ALTURA VERTICAL (POR DEFECTO 52px PARA DESPEJAR LA HORA) =====
    const savedOffset = localStorage.getItem('gallery_top_offset') || '52';
    if (inputOffset && offsetValLabel) {
        inputOffset.value = savedOffset;
        offsetValLabel.textContent = savedOffset + 'px';
        document.documentElement.style.setProperty('--gallery-top-offset', savedOffset + 'px');

        inputOffset.addEventListener('input', (e) => {
            const val = e.target.value;
            offsetValLabel.textContent = val + 'px';
            document.documentElement.style.setProperty('--gallery-top-offset', val + 'px');
            localStorage.setItem('gallery_top_offset', val);
        });
    }

    // ARMAR TRUCO: RESPUESTA EN 0 MILISEGUNDOS (YA PRE-CONSTRUIDO)
    bindUniversalTap(btnArm, (e) => {
        if (e.preventDefault) e.preventDefault();
        viewerOpen = false;
        isAnimatingPhoto = false;
        state3.classList.remove('active', 'in');
        state3.style.backgroundColor = '#000000';
        zoomProxyContainer.style.display = 'none';
        if (activeCell) {
            activeCell.style.opacity = '1';
            activeCell = null;
        }
        // Como la cuadrícula ya fue pre-construida en segundo plano, el cambio es instantáneo
        setState(1);
    });

    // ===== ESTADO 1: GALERÍA (PRIMER Y SEGUNDO SHOCK) =====
    function handleGalleryTap(e) {
        if (gridMultiplied) return; // Si ya está multiplicada, el scroll gestiona los toques

        if (e.preventDefault) e.preventDefault();

        const now = Date.now();
        if (now - lastTapTimestamp < 180) return;
        lastTapTimestamp = now;

        // Obtener coordenadas relativas al marco de la galería
        const rect = galleryWrapper.getBoundingClientRect();
        let clientX = 0;
        let clientY = 0;

        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else if (e.changedTouches && e.changedTouches.length > 0) {
            clientX = e.changedTouches[0].clientX;
            clientY = e.changedTouches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const relX = clientX - rect.left;
        const relY = clientY - rect.top;

        // --- SHOCK 1: PRIMER TOQUE EN CUALQUIER PARTE (CAMBIO INSTANTÁNEO SIN ANIMACIÓN) ---
        if (!photoRevealed) {
            photoRevealed = true;
            revealTimestamp = now;
            addedPhoto.classList.add('visible');
            return; // Termina el primer shock: la última foto cambia al instante
        }

        // --- SHOCK 2: SEGUNDO TOQUE EN LA ESQUINA SUPERIOR IZQUIERDA ---
        if (now - revealTimestamp < 300) return;

        const isTopLeftCorner = (relX >= 0 && relX <= SECRET_CORNER_SIZE && relY >= 0 && relY <= SECRET_CORNER_SIZE);

        if (isTopLeftCorner && !gridMultiplied) {
            // ¡SE TRANSFORMA EN 500 FOTOS CON SCROLL!
            setState(2);
        }
    }

    bindUniversalTap(galleryWrapper, handleGalleryTap);
    bindUniversalTap(triggerZone, handleGalleryTap);

    // ===== ESTADO 3: BOTÓN VOLVER (ANIMACIÓN DE SALIDA TIPO iOS) =====
    bindUniversalTap(viewerBack, (e) => {
        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
        closePhotoViewer();
    });

    // ===== GESTOS EN EL VISOR: PINCH-TO-ZOOM, DOBLE TAP, PANEO Y DRAG TO DISMISS =====
    let touchMode          = 'none'; // 'pinch', 'pan', 'drag_dismiss', 'maybe_tap'
    let singleTouchStartX  = 0;
    let singleTouchStartY  = 0;
    let panStartOffsetX    = 0;
    let panStartOffsetY    = 0;

    let pinchStartDist     = 0;
    let pinchStartScale    = 1;

    let lastTapTime        = 0;
    let lastTapX           = 0;
    let lastTapY           = 0;

    state3.addEventListener('touchstart', (e) => {
        if (!viewerOpen || isAnimatingPhoto) return;
        // Evitar interceptar clics en botones de acción o volver
        if (e.target.closest('#viewer-back') || e.target.closest('.viewer-action-btn') || e.target.closest('.glass-icon-btn')) {
            return;
        }

        if (e.touches.length === 2) {
            // GESTO DE 2 DEDOS: PELLIZCAR PARA HACER ZOOM (PINCH-TO-ZOOM)
            touchMode = 'pinch';
            pinchStartDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            pinchStartScale = currentScale;
            viewerImg.style.transition = 'none';
        } else if (e.touches.length === 1) {
            const touch = e.touches[0];
            singleTouchStartX = touch.clientX;
            singleTouchStartY = touch.clientY;
            panStartOffsetX = currentPanX;
            panStartOffsetY = currentPanY;

            if (currentScale > 1.05) {
                touchMode = 'pan';
                viewerImg.style.transition = 'none';
            } else {
                touchMode = 'maybe_tap';
            }
        }
    }, { passive: false });

    state3.addEventListener('touchmove', (e) => {
        if (!viewerOpen || isAnimatingPhoto) return;

        if (touchMode === 'pinch' && e.touches.length === 2) {
            if (e.cancelable) e.preventDefault();
            const currentDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            if (pinchStartDist > 0) {
                let scale = pinchStartScale * (currentDist / pinchStartDist);
                // Resistencia elástica fuera de rango
                if (scale < 0.85) {
                    scale = 0.85 + (scale - 0.85) * 0.25;
                } else if (scale > 4.2) {
                    scale = 4.2 + (scale - 4.2) * 0.25;
                }
                currentScale = scale;
                applyViewerTransform(false);
            }
        } else if (touchMode === 'pan' && e.touches.length === 1) {
            if (e.cancelable) e.preventDefault();
            const touch = e.touches[0];
            const dx = touch.clientX - singleTouchStartX;
            const dy = touch.clientY - singleTouchStartY;
            currentPanX = panStartOffsetX + dx;
            currentPanY = panStartOffsetY + dy;
            clampPan();
            applyViewerTransform(false);
        } else if ((touchMode === 'maybe_tap' || touchMode === 'drag_dismiss') && e.touches.length === 1) {
            const touch = e.touches[0];
            const dy = touch.clientY - singleTouchStartY;
            const dx = Math.abs(touch.clientX - singleTouchStartX);

            if (dy > 8 && dy > dx) {
                touchMode = 'drag_dismiss';
                if (e.cancelable) e.preventDefault();
                const progress = Math.min(dy / 280, 1);
                const scale = Math.max(1 - progress * 0.22, 0.78);
                viewerImg.style.transition = 'none';
                viewerImg.style.transform = `translate3d(0, ${dy}px, 0) scale(${scale})`;
                state3.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(1 - progress * 0.75, 0.2)})`;
            }
        }
    }, { passive: false });

    state3.addEventListener('touchend', (e) => {
        if (!viewerOpen || isAnimatingPhoto) return;

        if (touchMode === 'pinch') {
            if (e.touches.length < 2) {
                touchMode = 'none';
                if (currentScale < 1) {
                    resetViewerZoom(true);
                } else if (currentScale > MAX_ZOOM) {
                    currentScale = MAX_ZOOM;
                    clampPan();
                    applyViewerTransform(true, 280);
                } else {
                    clampPan();
                    applyViewerTransform(true, 240);
                }
            }
        } else if (touchMode === 'pan') {
            touchMode = 'none';
            clampPan();
            applyViewerTransform(true, 240);
        } else if (touchMode === 'drag_dismiss') {
            touchMode = 'none';
            const dy = e.changedTouches && e.changedTouches.length > 0
                ? (e.changedTouches[0].clientY - singleTouchStartY)
                : 0;

            if (dy > 70) {
                viewerImg.style.transition = 'none';
                closePhotoViewer();
            } else {
                const snapEase = 'cubic-bezier(0.32, 0.72, 0, 1)';
                viewerImg.style.transition = `transform 0.24s ${snapEase}`;
                viewerImg.style.transform = 'none';
                state3.style.transition = `background-color 0.24s ${snapEase}`;
                state3.style.backgroundColor = '#000000';
                setTimeout(() => {
                    viewerImg.style.transition = '';
                    state3.style.transition = '';
                }, 250);
            }
        } else if (touchMode === 'maybe_tap') {
            // DETECTAR DOBLE TOQUE (DOUBLE-TAP TO ZOOM)
            touchMode = 'none';
            const now = Date.now();
            const touch = e.changedTouches && e.changedTouches.length > 0 ? e.changedTouches[0] : null;

            if (touch) {
                const distFromLastTap = Math.hypot(touch.clientX - lastTapX, touch.clientY - lastTapY);
                if (now - lastTapTime < 320 && distFromLastTap < 35) {
                    // ¡DOBLE TOQUE RÁPIDO: ZOOM IN / ZOOM OUT!
                    lastTapTime = 0;
                    if (currentScale > 1.05) {
                        resetViewerZoom(true);
                    } else {
                        currentScale = 2.2;
                        const frameRect = deviceFrame.getBoundingClientRect();
                        const tapRelX = touch.clientX - frameRect.left - frameRect.width / 2;
                        const tapRelY = touch.clientY - frameRect.top - frameRect.height / 2;
                        currentPanX = -tapRelX * (currentScale - 1) * 0.6;
                        currentPanY = -tapRelY * (currentScale - 1) * 0.6;
                        clampPan();
                        applyViewerTransform(true, 300);
                    }
                    return;
                }
                lastTapTime = now;
                lastTapX = touch.clientX;
                lastTapY = touch.clientY;
            }
        }
    });

    // Soporte para zoom con rueda del ratón y doble clic en ordenadores
    const viewerBody = document.querySelector('.viewer-body');
    if (viewerBody) {
        viewerBody.addEventListener('wheel', (e) => {
            if (!viewerOpen) return;
            e.preventDefault();
            const delta = e.deltaY * -0.0025;
            currentScale = Math.min(MAX_ZOOM, Math.max(1, currentScale + delta));
            if (currentScale <= 1) {
                resetViewerZoom(false);
            } else {
                clampPan();
                applyViewerTransform(false);
            }
        }, { passive: false });

        viewerBody.addEventListener('dblclick', (e) => {
            if (!viewerOpen) return;
            if (currentScale > 1.05) {
                resetViewerZoom(true);
            } else {
                currentScale = 2.2;
                clampPan();
                applyViewerTransform(true, 300);
            }
        });
    }

    // ===== RESET SECRETO: TRIPLE TAP EN LA ESQUINA SUPERIOR DERECHA =====
    let resetCount = 0;
    let resetTimer = null;
    galleryWrapper.addEventListener('touchstart', (e) => {
        const rect = galleryWrapper.getBoundingClientRect();
        const touch = e.touches[0];
        const relX = touch.clientX - rect.left;
        const relY = touch.clientY - rect.top;

        // Esquina superior derecha (donde está el botón Seleccionar)
        if (relX > rect.width - 120 && relY < 100) {
            resetCount++;
            clearTimeout(resetTimer);
            resetTimer = setTimeout(() => { resetCount = 0; }, 600);
            if (resetCount >= 3) {
                resetCount = 0;
                gridBuilt = false;
                setState(0);
            }
        }
    }, { passive: true });

    // ===== PREVENCIÓN DE GESTOS NO DESEADOS =====
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('dblclick', (e) => e.preventDefault());
    document.addEventListener('gesturestart', (e) => e.preventDefault());
    document.addEventListener('gesturechange', (e) => e.preventDefault());
    document.addEventListener('gestureend', (e) => e.preventDefault());

    // ===== SERVICE WORKER =====
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').catch(() => {});
        });
    }

})();
