"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const MagicSpiral = ({ isVisible, onComplete }) => {
  const canvasRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(isVisible);
  const animationRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        onComplete?.();
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  useEffect(() => {
    if (!shouldRender || !isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let progress = 0;
    const particles = Array.from({ length: 40 }, () => ({
      x: 0,
      y: 0,
      angle: Math.random() * Math.PI * 2,
      velocity: 2 + Math.random() * 4,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 50
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      progress += 0.012;

      // Draw Spiral Lines
      const numLines = 16;
      ctx.lineWidth = 1.5;
      for (let i = 0; i < numLines; i++) {
        const startAngle = (i * (Math.PI * 2)) / numLines + (progress * 2);
        const radius = progress * (canvas.width * 0.8);
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(245, 158, 11, ${Math.max(0, 1 - progress * 1.5)})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#f59e0b';
        
        ctx.moveTo(centerX, centerY);
        const cp1x = centerX + Math.cos(startAngle) * (radius * 0.5);
        const cp1y = centerY + Math.sin(startAngle) * (radius * 0.5);
        ctx.quadraticCurveTo(cp1x, cp1y, centerX + Math.cos(startAngle + 0.5) * radius, centerY + Math.sin(startAngle + 0.5) * radius);
        ctx.stroke();
      }

      // Draw Particles
      particles.forEach(p => {
        if (progress * 100 > p.delay) {
          const pProgress = (progress * 100 - p.delay) / 100;
          const dist = pProgress * p.velocity * 300;
          const x = centerX + Math.cos(p.angle + pProgress * 2) * dist;
          const y = centerY + Math.sin(p.angle + pProgress * 2) * dist;
          
          ctx.beginPath();
          ctx.fillStyle = `rgba(251, 191, 36, ${Math.max(0, 1 - pProgress * 2)})`;
          ctx.arc(x, y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Central Glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, progress * 200);
      gradient.addColorStop(0, `rgba(245, 158, 11, ${Math.max(0, 0.4 - progress)})`);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, progress * 200, 0, Math.PI * 2);
      ctx.fill();

      if (progress < 2) {
        animationRef.current = requestAnimationFrame(render);
      }
    };

    render();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [shouldRender, isVisible]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0 bg-slate-950/80"
          />
        )}
      </AnimatePresence>

      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-10 w-full h-full"
      />
    </div>
  );
};

export default MagicSpiral;
