"use client";
import { useEffect } from 'react';

export default function AnalyticsLoader() {
    useEffect(() => {
        const loadGA = () => {
            if (typeof window === 'undefined' || window.__gaLoaded) return;
            
            // Verificar consentimiento explícito antes de cargar
            const consent = localStorage.getItem('cookie_consent');
            const analyticsConsent = localStorage.getItem('cookie_analytics');
            const legacyAccepted = localStorage.getItem('cookies_accepted');

            const isAllowed = consent === 'accepted' || analyticsConsent === 'true' || (consent === null && legacyAccepted === 'true');
            if (!isAllowed) return;

            window.__gaLoaded = true;

            const script = document.createElement('script');
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-NWEPX8BGXB';
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-NWEPX8BGXB', {
                anonymize_ip: true
            });
        };

        // Comprobar si ya tiene consentimiento previo
        loadGA();

        // Escuchar actualizaciones dinámicas de consentimiento (cuando el usuario pulsa Aceptar)
        const handleConsentUpdate = (e) => {
            if (e.detail?.analytics) {
                loadGA();
            }
        };

        window.addEventListener('cookie_consent_updated', handleConsentUpdate);

        return () => {
            window.removeEventListener('cookie_consent_updated', handleConsentUpdate);
        };
    }, []);

    return null;
}
