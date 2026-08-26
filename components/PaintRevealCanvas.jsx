'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';

/**
 * PaintRevealCanvas — Componente de cliente en Next.js (React)
 * 
 * Efecto de "pintado por cursor" elegante, minimalista y orgánico (estilo itsdeesha.framer.website):
 * - Dos capas superpuestas idénticas: capa base (apagada / monocromo) y capa revelada (color / contraste).
 * - Máscara alfa en un <canvas> oculto (blanco = visible, transparente = oculto).
 * - Pincel radial difuminado con interpolación entre eventos mousemove.
 * - Desvanecimiento continuo progresivo (fade-out tipo aguada/acuarela).
 * - Actualización fluida a 60fps sincronizada con requestAnimationFrame.
 * - Detección de puntero fino (desktop) y fallback limpio en móviles.
 * 
 * @param {Object} props
 * @param {React.ReactNode} [props.baseContent] - Contenido de la capa base (escala de grises / apagada)
 * @param {React.ReactNode} [props.revealContent] - Contenido de la capa revelada (color vivo / gradiente)
 * @param {React.ReactNode} [props.children] - Contenido por defecto (se duplicará si no se pasa revealContent)
 * @param {number} [props.brushSize=110] - Diámetro del pincel en píxeles (80–140px recomendado)
 * @param {number} [props.fadeSpeed=0.018] - Velocidad de desvanecimiento del rastro (0.01–0.03)
 * @param {string} [props.className=''] - Clases CSS del contenedor principal
 * @param {React.CSSProperties} [props.style={}] - Estilos en línea del contenedor
 * @param {string} [props.mobileFallback='reveal'] - Comportamiento en móvil ('reveal' | 'base' | 'half')
 */
export default function PaintRevealCanvas({
  baseContent,
  revealContent,
  children,
  brushSize = 140,
  fadeSpeed = 0.055,
  className = '',
  style = {},
  mobileFallback = 'reveal'
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const revealLayerRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Estados de control del pincel y animación
  const stateRef = useRef({
    lastX: null,
    lastY: null,
    isHovering: false,
    hasDrawn: false,
    needsUpdate: false,
    rafId: null,
    width: 0,
    height: 0
  });

  // Dibujar mancha orgánica suave
  const drawSmoothBlob = useCallback((ctx, x, y, r) => {
    if (!ctx) return;
    ctx.beginPath();
    const numPoints = 10;
    const points = [];
    for (let i = 0; i < numPoints; i++) {
      const theta = (i / numPoints) * Math.PI * 2;
      const noise = Math.sin(theta * 3 + 12) * 0.12 + Math.cos(theta * 2 + 5) * 0.08;
      const rad = r * (1 + noise);
      points.push({
        x: x + Math.cos(theta) * rad,
        y: y + Math.sin(theta) * rad
      });
    }
    ctx.moveTo((points[0].x + points[numPoints - 1].x) / 2, (points[0].y + points[numPoints - 1].y) / 2);
    for (let i = 0; i < numPoints; i++) {
      const p1 = points[i];
      const p2 = points[(i + 1) % numPoints];
      ctx.quadraticCurveTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
    }
    ctx.closePath();
    ctx.fill();
  }, []);

  // Dibujar cápsula/metaball líquida continua entre posiciones consecutivas
  const drawLiquidCapsule = useCallback((ctx, x0, y0, r0, x1, y1, r1) => {
    if (!ctx) return;
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#ffffff';

    const dx = x1 - x0;
    const dy = y1 - y0;
    const dist = Math.hypot(dx, dy);

    if (dist < 3) {
      drawSmoothBlob(ctx, x0, y0, r0);
      ctx.restore();
      return;
    }

    const angle = Math.atan2(dy, dx);
    const angleP = angle + Math.PI / 2;

    const sin = Math.sin(angleP);
    const cos = Math.cos(angleP);

    const p1x = x0 + cos * r0;
    const p1y = y0 + sin * r0;
    const p2x = x1 + cos * r1;
    const p2y = y1 + sin * r1;

    const p3x = x1 - cos * r1;
    const p3y = y1 - sin * r1;
    const p4x = x0 - cos * r0;
    const p4y = y0 - sin * r0;

    ctx.beginPath();
    ctx.arc(x0, y0, r0, angleP, angleP + Math.PI);
    ctx.lineTo(p3x, p3y);
    ctx.arc(x1, y1, r1, angleP + Math.PI, angleP);
    ctx.lineTo(p1x, p1y);
    ctx.closePath();
    ctx.fill();

    drawSmoothBlob(ctx, x1, y1, r1);

    ctx.restore();
  }, [drawSmoothBlob]);

  useEffect(() => {
    setIsMounted(true);
    // Detección de puntero fino (Desktop / Mouse preciso)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener?.('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener?.('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || !containerRef.current || !canvasRef.current || !revealLayerRef.current) {
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const revealLayer = revealLayerRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const state = stateRef.current;

    // Inicializar y redimensionar canvas
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      const w = Math.floor(rect.width);
      const h = Math.floor(rect.height);

      if (w !== state.width || h !== state.height) {
        state.width = canvas.width = w;
        state.height = canvas.height = h;
        // Limpiar a transparente al redimensionar
        ctx.clearRect(0, 0, w, h);
        state.needsUpdate = true;
      }
    };

    updateCanvasSize();
    const resizeObserver = new ResizeObserver(updateCanvasSize);
    resizeObserver.observe(container);

    const radius = brushSize / 2;

    // Bucle de animación a 60fps: desvanecimiento suave y actualización de mask-image
    const loop = () => {
      if (state.width > 0 && state.height > 0) {
        // Desvanecimiento suave progresivo tipo aguada
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = `rgba(0, 0, 0, ${Math.max(0.005, Math.min(0.1, fadeSpeed))})`;
        ctx.fillRect(0, 0, state.width, state.height);
        ctx.restore();

        // Actualizar máscara en el elemento revelado
        try {
          const maskUrl = `url(${canvas.toDataURL('image/png')})`;
          revealLayer.style.webkitMaskImage = maskUrl;
          revealLayer.style.maskImage = maskUrl;
        } catch (err) {
          // Captura silenciosa si el canvas está vacío
        }
      }

      state.rafId = requestAnimationFrame(loop);
    };

    state.rafId = requestAnimationFrame(loop);

    // Eventos de ratón
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (state.lastX !== null && state.lastY !== null) {
        drawLiquidCapsule(ctx, state.lastX, state.lastY, radius * 0.95, x, y, radius);
      } else {
        drawSmoothBlob(ctx, x, y, radius);
      }

      state.lastX = x;
      state.lastY = y;
      state.isHovering = true;
      state.hasDrawn = true;
    };

    const handleMouseLeave = () => {
      state.lastX = null;
      state.lastY = null;
      state.isHovering = false;
    };

    const handleMouseEnter = (e) => {
      const rect = container.getBoundingClientRect();
      state.lastX = e.clientX - rect.left;
      state.lastY = e.clientY - rect.top;
      drawSmoothBlob(ctx, state.lastX, state.lastY, radius);
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter, { passive: true });

    return () => {
      if (state.rafId) cancelAnimationFrame(state.rafId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);

      // Limpieza de máscara
      if (revealLayer) {
        revealLayer.style.webkitMaskImage = '';
        revealLayer.style.maskImage = '';
      }
    };
  }, [isDesktop, brushSize, fadeSpeed, drawSmoothBlob, drawLiquidCapsule]);

  // Contenido por defecto
  const baseEl = baseContent || children;
  const revealEl = revealContent || children;

  // Fallback visual en móviles / pantallas táctiles sin puntero fino
  const mobileRevealStyle = !isDesktop && isMounted ? {
    opacity: mobileFallback === 'reveal' ? 1 : mobileFallback === 'base' ? 0 : 0.5,
    pointerEvents: 'auto',
    WebkitMaskImage: 'none',
    maskImage: 'none'
  } : {};

  return (
    <div
      ref={containerRef}
      className={`paint-reveal-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        userSelect: 'none',
        ...style
      }}
    >
      {/* 1. Capa Base (Escala de grises / Apagada) */}
      <div
        className="paint-reveal-base-layer"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: 1
        }}
      >
        {baseEl}
      </div>

      {/* 2. Capa Revelada (Color / Alto contraste / Textura brillante) */}
      <div
        ref={revealLayerRef}
        className="paint-reveal-layer"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          ...mobileRevealStyle
        }}
      >
        {revealEl}
      </div>

      {/* 3. Canvas de Máscara Oculto (Offscreen buffer de alfa) */}
      <canvas
        ref={canvasRef}
        style={{
          display: 'none',
          position: 'absolute',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />
    </div>
  );
}
