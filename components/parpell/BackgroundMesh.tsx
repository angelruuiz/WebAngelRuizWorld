"use client";

import React, { useEffect, useRef } from "react";

export function BackgroundMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Ultra-lightweight particle constellation (25 particles, high performance 120fps)
    const particleCount = 25;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.35 + 0.15,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(194, 122, 138, ${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{
        contain: "strict",
        transform: "translate3d(0,0,0)",
        willChange: "transform",
      }}
    >
      {/* GPU Accelerated Ambient Wine Gradients (Zero Heavy Blur Lag) */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-radial from-[#9E5C6A]/25 via-[#6E3844]/10 to-transparent rounded-full pointer-events-none opacity-80" />
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-radial from-[#6E3844]/25 via-[#9E5C6A]/10 to-transparent rounded-full pointer-events-none opacity-70" />
      <div className="absolute -bottom-32 left-1/3 w-[650px] h-[650px] bg-radial from-[#9E5C6A]/20 via-[#4A242E]/15 to-transparent rounded-full pointer-events-none opacity-70" />

      {/* Lightweight canvas particle constellation */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60 pointer-events-none" />

      {/* Radial vignette mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#080306_85%)] opacity-90 pointer-events-none" />
    </div>
  );
}
