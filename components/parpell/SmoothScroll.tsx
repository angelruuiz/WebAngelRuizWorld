"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Ensure standard high-performance native scrolling & crisp cursor in Parpell
    document.documentElement.classList.add("parpell-html");
    document.body.classList.add("parpell-active");
    const prevBodyCursor = document.body.style.cursor;
    const prevHtmlCursor = document.documentElement.style.cursor;
    document.body.style.cursor = "default";
    document.documentElement.style.cursor = "default";

    return () => {
      document.documentElement.classList.remove("parpell-html");
      document.body.classList.remove("parpell-active");
      document.body.style.cursor = prevBodyCursor;
      document.documentElement.style.cursor = prevHtmlCursor;
    };
  }, []);

  return null;
}
