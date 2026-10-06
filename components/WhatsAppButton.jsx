"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { WhatsApp } from './Icons';
import { trackEvent } from '@/lib/tracker';

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
                setIsVisible(rect.bottom <= 100 || window.scrollY > 200);
            } else {
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

    // Mensaje dinámico e hiper-contextual según la página que esté leyendo el usuario
    let waMessage = 'Hola Ángel, quisiera consultar disponibilidad y tarifas para mi evento en Madrid';

    if (pathname.includes('/bodas') || pathname.includes('boda')) {
        waMessage = '¡Hola Ángel! Nos casamos y nos gustaría consultar disponibilidad y fechas para nuestra boda en Madrid';
    } else if (pathname.includes('/empresas') || pathname.includes('navidad') || pathname.includes('cenas') || pathname.includes('conferenciante')) {
        waMessage = 'Hola Ángel, quisiera consultar disponibilidad y presupuesto para una cena de empresa / evento corporativo';
    } else if (pathname.includes('/comuniones') || pathname.includes('comunion')) {
        waMessage = 'Hola Ángel, me gustaría consultar disponibilidad y presupuesto para una comunión familiar en Madrid';
    } else if (pathname.includes('/cumpleanos') || pathname.includes('cumple')) {
        waMessage = 'Hola Ángel, me gustaría consultar disponibilidad para una fiesta de cumpleaños de adultos en Madrid';
    } else if (pathname.includes('/restaurantes')) {
        waMessage = 'Hola Ángel, me gustaría consultar disponibilidad para magia en restaurantes / cenas temáticas';
    } else if (pathname.startsWith('/mago-') && !pathname.includes('close-up') && !pathname.includes('madrid')) {
        const slug = pathname.replace('/mago-', '').replace(/-/g, ' ');
        const city = slug.charAt(0).toUpperCase() + slug.slice(1);
        waMessage = `Hola Ángel, organizamos un evento en ${city} y nos gustaría consultar fechas y tarifas`;
    } else if (pathname.startsWith('/blog')) {
        waMessage = 'Hola Ángel, he leído tu artículo en el blog y me gustaría consultar disponibilidad y presupuesto para mi fecha';
    }

    const waUrl = `https://wa.me/34648055636?text=${encodeURIComponent(waMessage)}`;

    const handleClick = () => {
        trackEvent('whatsapp_click', {
            path: pathname,
            message: waMessage
        });
    };

    return (
        <aside aria-label="Contacto directo por WhatsApp" className="relative z-[120]">
            <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className={`fab-whatsapp group fixed hidden md:flex md:bottom-8 md:right-8 bg-[#25D366] hover:bg-[#20ba5a] text-white w-14 h-14 rounded-full items-center justify-center shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110 active:scale-95 ${
                    isVisible
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                        : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
                }`}
                aria-label="Contactar por WhatsApp directamente con Ángel Ruiz"
            >
                {/* Badge flotante de estado en tiempo real */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-950"></span>
                </span>

                <WhatsApp className="w-7 h-7 text-white drop-shadow-sm" />

                {/* Micro-píldora visible en desktop y hover */}
                <span className="hidden md:flex items-center absolute right-[4.25rem] bg-slate-950/95 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full whitespace-nowrap border border-emerald-500/30 shadow-2xl backdrop-blur-md transition-all duration-200 group-hover:border-emerald-400/60">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2 inline-block" />
                    <span>WhatsApp Express <strong className="text-emerald-400 font-bold">(&lt;2h)</strong></span>
                </span>
            </a>
        </aside>
    );
}

