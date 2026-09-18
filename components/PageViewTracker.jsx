"use client";

import { useEffect } from 'react';

export default function PageViewTracker() {
    useEffect(() => {
        // Registrar visita real de cualquier usuario de internet
        if (typeof window !== 'undefined') {
            try {
                fetch('/api/metrics', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        eventType: 'page_view',
                        referrer: document.referrer || '',
                        path: window.location.pathname,
                        timestamp: Date.now()
                    })
                }).catch(() => {});
            } catch (e) {}
        }
    }, []);

    return null;
}
