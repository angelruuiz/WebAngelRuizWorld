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
    let galleryImageData  = '/multiplicar-galeria/foto galeria.jpeg'; // Precargada por defecto
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

    // Inicializar imágenes por defecto
    trickImageData = createDefaultTrickImage();
    showPreview(previewTrick, trickImageData);
    showPreview(previewGallery, galleryImageData);

    // ===== CONSTRUCTOR DE LA CUADRÍCULA DE 500 FOTOS =====
    function buildMultipliedGrid() {
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
    }

    // ===== ANIMACIÓN DE ZOOM MORPHING ESTILO iOS 18 =====
    function openPhotoViewer(cell) {
        if (isAnimatingPhoto || viewerOpen) return;
        isAnimatingPhoto = true;
        viewerOpen = true;
        activeCell = cell;

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

        // 3. Activar el contenedor de pantalla completa pero con la foto invisible
        viewerImg.style.opacity = '0';
        viewerImg.style.transform = 'none';
        state3.classList.add('active');
        state3.classList.remove('in');
        state3.style.backgroundColor = 'transparent';

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

        // Desvanecer fondo negro y controles
        state3.classList.remove('in');
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
                    state3.style.backgroundColor = '';
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

    // ===== ESTADO 0: INPUTS DE ARCHIVOS =====
    inputTrick.addEventListener('change', (e) => {
        const f = e.target.files[0];
        if (!f) return;
        readFileAsDataURL(f, (data) => {
            trickImageData = data;
            gridBuilt = false;
            showPreview(previewTrick, data);
        });
    });

    inputGallery.addEventListener('change', (e) => {
        const f = e.target.files[0];
        if (!f) return;
        readFileAsDataURL(f, (data) => {
            galleryImageData = data;
            showPreview(previewGallery, data);
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

    bindUniversalTap(btnArm, (e) => {
        if (e.preventDefault) e.preventDefault();
        gridBuilt = false;
        viewerOpen = false;
        isAnimatingPhoto = false;
        state3.classList.remove('active', 'in');
        state3.style.backgroundColor = '';
        zoomProxyContainer.style.display = 'none';
        if (activeCell) {
            activeCell.style.opacity = '1';
            activeCell = null;
        }
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

        // --- SHOCK 1: PRIMER TOQUE EN CUALQUIER PARTE ---
        if (!photoRevealed) {
            photoRevealed = true;
            revealTimestamp = now;
            addedPhoto.classList.add('visible');
            return; // Termina el primer shock: la foto aparece en su celda
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

    // ===== GESTO NATIVO iOS: DESLIZAR HACIA ABAJO PARA CERRAR LA FOTO =====
    let viewerTouchStartY = 0;
    let viewerTouchStartX = 0;
    let viewerIsDragging = false;

    state3.addEventListener('touchstart', (e) => {
        if (!viewerOpen || isAnimatingPhoto) return;
        // No interceptar clics en botones de acción
        if (e.target.closest('#viewer-back') || e.target.closest('.viewer-action-btn') || e.target.closest('.glass-icon-btn')) {
            return;
        }
        if (e.touches && e.touches.length === 1) {
            viewerTouchStartX = e.touches[0].clientX;
            viewerTouchStartY = e.touches[0].clientY;
            viewerIsDragging = false;
        }
    }, { passive: true });

    state3.addEventListener('touchmove', (e) => {
        if (!viewerOpen || isAnimatingPhoto) return;
        if (!e.touches || e.touches.length !== 1) return;

        const dy = e.touches[0].clientY - viewerTouchStartY;
        const dx = Math.abs(e.touches[0].clientX - viewerTouchStartX);

        // Deslizar verticalmente hacia abajo
        if (dy > 8 && dy > dx) {
            viewerIsDragging = true;
            const progress = Math.min(dy / 280, 1);
            const scale = Math.max(1 - progress * 0.22, 0.78);
            viewerImg.style.transition = 'none';
            viewerImg.style.transform = `translateY(${dy}px) scale(${scale})`;
            state3.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(1 - progress * 0.75, 0.2)})`;
        }
    }, { passive: true });

    state3.addEventListener('touchend', (e) => {
        if (!viewerOpen || isAnimatingPhoto || !viewerIsDragging) return;
        viewerIsDragging = false;

        const dy = e.changedTouches && e.changedTouches.length > 0
            ? (e.changedTouches[0].clientY - viewerTouchStartY)
            : 0;

        if (dy > 70) {
            // Umbral superado: cerrar la foto hacia su celda original
            viewerImg.style.transition = 'none';
            closePhotoViewer();
        } else {
            // Rebotar a posición original suavemente
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
    });

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
