"use client";

import '../app/deferred.css';

/**
 * This component exists solely to load deferred (non-critical) CSS.
 * It's imported via next/dynamic with { ssr: false }, so the CSS
 * only loads on the client after hydration — not during SSR/first paint.
 * This eliminates render-blocking for non-critical styles.
 */
export default function DeferredStyles() {
    return null;
}
