"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Ensure standard cursor is active in Parpell
    document.body.classList.add("parpell-active");
    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "auto";

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
      document.body.classList.remove("parpell-active");
      document.body.style.cursor = prevCursor;
      if (rafId) cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
      delete (window as any).__parpellLenis;
    };
  }, []);

  return null;
}
