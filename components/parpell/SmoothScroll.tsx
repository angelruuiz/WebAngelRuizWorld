"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Ensure standard OS cursor is active on HTML & Body in Parpell
    document.documentElement.classList.add("parpell-html");
    document.body.classList.add("parpell-active");
    const prevBodyCursor = document.body.style.cursor;
    const prevHtmlCursor = document.documentElement.style.cursor;
    document.body.style.cursor = "default";
    document.documentElement.style.cursor = "default";

    // Disable smooth scroll interception on mobile / touch devices for native responsiveness
    const isTouchOrMobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 ||
        "ontouchstart" in window ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ));

    if (isTouchOrMobile) {
      return () => {
        document.documentElement.classList.remove("parpell-html");
        document.body.classList.remove("parpell-active");
        document.body.style.cursor = prevBodyCursor;
        document.documentElement.style.cursor = prevHtmlCursor;
      };
    }

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
      document.documentElement.classList.remove("parpell-html");
      document.body.classList.remove("parpell-active");
      document.body.style.cursor = prevBodyCursor;
      document.documentElement.style.cursor = prevHtmlCursor;
      if (rafId) cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
      delete (window as any).__parpellLenis;
    };
  }, []);

  return null;
}
