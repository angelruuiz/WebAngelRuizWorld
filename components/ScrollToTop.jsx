"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Garantiza que cualquier navegación entre páginas (especialmente al volver al Inicio)
 * aterrice siempre en la parte superior absoluta (0, 0), evitando que el navegador
 * restaure la posición de scroll previa a mitad de pantalla.
 */
export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // 1. Scroll instantáneo inmediato al cambiar de ruta
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

        // 2. Microtick tras el montaje del DOM de la nueva página
        const raf = requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        });

        // 3. Respaldo a 60ms por si hay hidratación o carga de imágenes que afecten el scroll
        const timer = setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, 60);

        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(timer);
        };
    }, [pathname]);

    return null;
}
