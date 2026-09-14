"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { WhatsApp } from './Icons';

export default function WhatsAppButton() {
    const pathname = usePathname() || '';
    const [isVisible, setIsVisible] = useState(pathname !== '/');

    useEffect(() => {
        // En páginas secundarias siempre está visible
        if (pathname !== '/') {
            setIsVisible(true);
            return;
        }

        // En el Home, mostrar la bola flotante de WhatsApp solo cuando el usuario haga scroll y sobrepase el Hero
        const checkVisibility = () => {
            const trigger = document.getElementById('hero-scroll-trigger');
            if (trigger && trigger.offsetHeight > 0) {
                const rect = trigger.getBoundingClientRect();
                // En móvil aparece cuando el indicador de deslizar sube o el usuario ya hace scroll
                setIsVisible(rect.bottom <= 100 || window.scrollY > 200);
            } else {
                // En desktop aparece tras hacer scroll para no solaparse con el hero
                setIsVisible(window.scrollY > 250);
            }
        };

        checkVisibility();
        window.addEventListener('scroll', checkVisibility, { passive: true });
        window.addEventListener('resize', checkVisibility, { passive: true });

        return () => {
            window.removeEventListener('scroll', checkVisibility);
            window.removeEventListener('resize', checkVisibility);
        };
    }, [pathname]);

    // No mostrar en rutas administrativas o API
    if (pathname.startsWith('/admin') || pathname.startsWith('/api')) {
        return null;
    }

    // Mensaje dinámico e inteligente según la página que esté leyendo el usuario
    let waMessage = 'Hola Ángel, quisiera consultar disponibilidad y presupuesto para un evento';

    if (pathname.includes('/bodas') || pathname.includes('boda')) {
        waMessage = '¡Hola Ángel! Nos casamos y nos gustaría consultar disponibilidad y presupuesto para nuestra boda';
    } else if (pathname.includes('/empresas') || pathname.includes('navidad') || pathname.includes('cenas') || pathname.includes('conferenciante')) {
        waMessage = 'Hola Ángel, quisiera consultar disponibilidad y tarifas para un evento de empresa / corporativo';
    } else if (pathname.includes('/comuniones') || pathname.includes('comunion')) {
        waMessage = 'Hola Ángel, me gustaría consultar disponibilidad y presupuesto para una comunión familiar';
    } else if (pathname.includes('/cumpleanos') || pathname.includes('cumple')) {
        waMessage = 'Hola Ángel, me gustaría consultar disponibilidad para una fiesta de cumpleaños privada';
    } else if (pathname.includes('/restaurantes')) {
        waMessage = 'Hola Ángel, me gustaría consultar disponibilidad para magia en restaurantes / cenas temáticas';
    } else if (pathname.startsWith('/mago-') && !pathname.includes('close-up') && !pathname.includes('madrid')) {
        const slug = pathname.replace('/mago-', '').replace(/-/g, ' ');
        const city = slug.charAt(0).toUpperCase() + slug.slice(1);
        waMessage = `Hola Ángel, organizamos un evento en ${city} y nos gustaría consultar fechas y tarifas`;
    } else if (pathname.startsWith('/blog')) {
        waMessage = 'Hola Ángel, he leído tu blog y me gustaría consultar disponibilidad y presupuesto para un evento';
    }

    const waUrl = `https://wa.me/34648055636?text=${encodeURIComponent(waMessage)}`;

    return (
        <aside aria-label="Contacto directo por WhatsApp" className="relative z-[120]">
            <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`fab-whatsapp group fixed bottom-24 right-5 md:bottom-8 md:right-8 bg-[#25D366] hover:bg-[#20ba5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 active:scale-95 ${
                    isVisible
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                        : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
                }`}
                aria-label="Contactar por WhatsApp directamente con Ángel Ruiz"
            >
                <WhatsApp className="w-7 h-7 text-white drop-shadow-sm" />

                {/* Tooltip en desktop al pasar el ratón */}
                <span className="hidden md:group-hover:flex items-center absolute right-[4.25rem] bg-slate-950/95 text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap border border-emerald-500/30 shadow-2xl backdrop-blur-md pointer-events-none transition-opacity duration-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2 inline-block" />
                    ¿Hablamos por WhatsApp?
                </span>
            </a>
        </aside>
    );
}
