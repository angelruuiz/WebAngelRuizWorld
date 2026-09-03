"use client";
import { useEffect } from 'react';

export default function AnalyticsLoader() {
    useEffect(() => {
        const loadGA = () => {
            if (window.__gaLoaded) return;
            window.__gaLoaded = true;

            const script = document.createElement('script');
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-NWEPX8BGXB';
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-NWEPX8BGXB');
        };

        const events = ['scroll', 'touchstart', 'click', 'keydown'];
        const onInteract = () => {
            loadGA();
            events.forEach(e => window.removeEventListener(e, onInteract));
        };

        events.forEach(e => window.addEventListener(e, onInteract, { passive: true, once: true }));
        const timer = setTimeout(loadGA, 4000);

        return () => {
            events.forEach(e => window.removeEventListener(e, onInteract));
            clearTimeout(timer);
        };
    }, []);

    return null;
}
