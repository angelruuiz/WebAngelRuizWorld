"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let lenisInstance: any;
    let rafId: number;

    (async () => {
      const Lenis = (await import("lenis")).default;
      lenisInstance = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
      });

      (window as any).__parpellLenis = lenisInstance;

      function raf(time: number) {
        lenisInstance.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    })();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
      delete (window as any).__parpellLenis;
    };
  }, []);

  return null;
}
