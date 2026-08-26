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
  brushSize = 110,
  fadeSpeed = 0.018,
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

  // Dibujar una mancha abstracta, viva e irregular tipo aguada/acuarela
  const drawOrganicBlob = useCallback((ctx, x, y, baseRadius, angle = 0, speed = 0) => {
    if (!ctx) return;
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.translate(x, y);
    ctx.rotate(angle);

    // Deformación elástica según velocidad
    const stretch = Math.min(1.5, 1 + speed * 0.015);
    ctx.scale(stretch, 1 / Math.sqrt(stretch));

    // 1. Polígono orgánico multilobulado irregular
    const numPoints = 12;
    const points = [];
    const seed = Math.random() * 100;
    
    for (let i = 0; i < numPoints; i++) {
      const theta = (i / numPoints) * Math.PI * 2;
      const noise = Math.sin(theta * 3 + seed) * 0.3 + Math.cos(theta * 5 + seed * 1.5) * 0.2 + (Math.random() * 0.16 - 0.08);
      const r = baseRadius * (1 + noise);
      points.push({
        x: Math.cos(theta) * r,
        y: Math.sin(theta) * r
      });
    }

    // Trazo suavizado de curvas irregulares
    ctx.beginPath();
    ctx.moveTo((points[0].x + points[numPoints - 1].x) / 2, (points[0].y + points[numPoints - 1].y) / 2);
    for (let i = 0; i < numPoints; i++) {
      const p1 = points[i];
      const p2 = points[(i + 1) % numPoints];
      ctx.quadraticCurveTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
    }
    ctx.closePath();

    // Relleno degradado radial difuminado
    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, baseRadius * 1.35);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.35, 'rgba(255, 255, 255, 0.9)');
    grad.addColorStop(0.7, 'rgba(255, 255, 255, 0.4)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fill();

    // 2. Micro-salpicaduras y gotas líquidas satélite
    const numSatellites = Math.floor(Math.random() * 3) + 1;
    for (let s = 0; s < numSatellites; s++) {
      const sAngle = Math.random() * Math.PI * 2;
      const sDist = baseRadius * (0.75 + Math.random() * 0.55);
      const sRad = baseRadius * (0.12 + Math.random() * 0.22);
      const sx = Math.cos(sAngle) * sDist;
      const sy = Math.sin(sAngle) * sDist;

      const sGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, sRad);
      sGrad.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
      sGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.35)');
      sGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = sGrad;
      ctx.beginPath();
      ctx.arc(sx, sy, sRad, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }, []);

  // Interpolación de trazo continuo con rotación y variabilidad orgánica
  const interpolateStroke = useCallback((ctx, startX, startY, endX, endY, radius) => {
    const dist = Math.hypot(endX - startX, endY - startY);
    const angle = Math.atan2(endY - startY, endX - startX);
    const step = Math.max(10, radius * 0.25);
    const steps = Math.ceil(dist / step);

    for (let i = 0; i <= steps; i++) {
      const t = steps === 0 ? 1 : i / steps;
      const x = startX + (endX - startX) * t;
      const y = startY + (endY - startY) * t;
      const stepAngle = angle + (Math.random() * 0.5 - 0.25);
      const stepRad = radius * (0.85 + Math.random() * 0.3);
      drawOrganicBlob(ctx, x, y, stepRad, stepAngle, dist / (steps || 1));
    }
  }, [drawOrganicBlob]);

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
        interpolateStroke(ctx, state.lastX, state.lastY, x, y, radius);
      } else {
        drawOrganicBlob(ctx, x, y, radius, Math.random() * Math.PI * 2, 0);
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
      drawOrganicBlob(ctx, state.lastX, state.lastY, radius, Math.random() * Math.PI * 2, 0);
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
  }, [isDesktop, brushSize, fadeSpeed, drawBrushPoint, interpolateStroke]);

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
