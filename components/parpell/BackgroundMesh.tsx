"use client";

import React, { useEffect, useRef, useState } from "react";

export function BackgroundMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ));

    if (isMobileDevice) {
      setIsMobile(true);
      return;
    }

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

    // Ultra-lightweight particle constellation for desktop
    const particleCount = 20;
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
        alpha: Math.random() * 0.3 + 0.1,
      });
    }

    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState === "visible";
      if (isTabVisible) {
        cancelAnimationFrame(animationFrameId);
        render(0);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let lastFrameTime = 0;
    const frameBudget = 33; // ~30fps is plenty for slow particles

    const render = (timestamp: number = 0) => {
      if (!isTabVisible) return;

      animationFrameId = requestAnimationFrame(render);

      // Throttle to ~30fps
      if (timestamp - lastFrameTime < frameBudget) return;
      lastFrameTime = timestamp;

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
    };

    render(0);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isMobile) {
    return (
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#080306]"
        style={{
          contain: "strict",
        }}
      >
        {/* Clean, zero-CPU CSS ambient glow for mobile */}
        <div className="absolute -top-20 left-1/4 w-72 h-72 bg-[#9E5C6A]/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-1/2 -right-10 w-64 h-64 bg-[#6E3844]/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#9E5C6A]/10 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{
        contain: "strict",
        transform: "translate3d(0,0,0)",
        willChange: "transform",
      }}
    >
      {/* GPU Accelerated Ambient Wine Gradients */}
      <div
        className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(158,92,106,0.25), rgba(110,56,68,0.10), transparent)",
        }}
      />
      <div
        className="absolute top-1/3 -right-20 w-[550px] h-[550px] rounded-full pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(110,56,68,0.25), rgba(158,92,106,0.10), transparent)",
        }}
      />
      <div
        className="absolute -bottom-32 left-1/3 w-[650px] h-[650px] rounded-full pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(158,92,106,0.20), rgba(74,36,46,0.15), transparent)",
        }}
      />

      {/* Lightweight canvas particle constellation */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60 pointer-events-none" />

      {/* Radial vignette mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#080306_85%)] opacity-90 pointer-events-none" />
    </div>
  );
}
