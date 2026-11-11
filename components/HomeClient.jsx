"use client";

import { useState, useEffect } from 'react';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import { Sparkles, WhatsApp } from '@/components/Icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
const ContactFormModal = dynamic(() => import('@/components/Modals').then(mod => mod.ContactFormModal), { ssr: false });
const VideoShowModal = dynamic(() => import('@/components/VideoShowModal'), { ssr: false });

import LiquidGlassForm from '@/components/LiquidGlassForm';

const HERO_SLIDES = [
    {
        desktop: '/images/hero-angel-ruiz-2026.webp',
        mobile: '/images/hero-angel-ruiz-mobile-2026.webp',
        alt: 'Ángel Ruiz, mago e ilusionista profesional en Madrid realizando cartomagia',
        objectPosition: 'object-[35%_top] md:object-[center_right] lg:object-right'
    },
    {
        desktop: '/images/hero-badulaque-angel-ruiz-2026.webp',
        mobile: '/images/hero-badulaque-angel-ruiz-mobile-2026.webp',
        alt: 'Ángel Ruiz en espectáculo de ilusionismo y magia de cerca en vivo en Madrid',
        objectPosition: 'object-[center_top] md:object-center lg:object-right'
    }
];

const HeroClient = ({ onOpenVideo, onOpenContact }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Reinicia el contador de 8s cada vez que cambia la diapositiva (automática o manualmente)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleOpenBooking = () => {
        if (typeof window !== 'undefined' && window.innerWidth < 1024) {
            window.dispatchEvent(new CustomEvent('open-booking-drawer', { detail: { eventType: 'boda' } }));
        } else {
            onOpenContact();
        }
    };

    return (
        <section className="relative min-h-[100dvh] flex flex-col justify-end lg:justify-center overflow-hidden z-10 pt-20 pb-28 sm:pb-32 lg:py-0">
            <div className="absolute inset-0 z-0 overflow-hidden">
                {HERO_SLIDES.map((slide, index) => {
                    const isActive = index === currentSlide;
                    return (
                        <div 
                            key={slide.desktop}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                isActive ? 'opacity-100 z-[1]' : 'opacity-0 z-0 pointer-events-none'
                            }`}
                            aria-hidden={!isActive}
                        >
                            <picture>
                                <source media="(min-width: 768px)" srcSet={slide.desktop} width={2560} height={1440} />
                                <img 
                                    src={slide.mobile} 
                                    alt={slide.alt} 
                                    className={`w-full h-full object-cover ${slide.objectPosition}`} 
                                    loading={index === 0 ? "eager" : "lazy"}
                                    fetchPriority={index === 0 ? "high" : "low"}
                                    decoding={index === 0 ? "sync" : "async"}
                                    width={640}
                                    height={960}
                                />
                            </picture>
                        </div>
                    );
                })}

                {/* Gradiente superior sutil para proteger la legibilidad del Navbar */}
                <div className='absolute inset-0 bg-gradient-to-b from-[#030712]/75 via-transparent to-[#030712] pointer-events-none z-10' />
                {/* Gradiente lateral para Desktop: oscurece suavemente la izquierda para el texto y deja libre a Ángel a la derecha */}
                <div className='hidden lg:block absolute inset-0 bg-gradient-to-r from-[#030712]/95 via-[#030712]/60 via-40% to-transparent pointer-events-none z-10' />
                {/* Gradiente inferior para Móvil */}
                <div className='lg:hidden absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 via-55% to-transparent pointer-events-none z-10' />
            </div>
            
            <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10 w-full max-w-7xl mx-auto">
                <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl flex flex-col items-start text-left">
                    {/* Semantic H1 for SEO + Instant LCP Paint */}
                    <h1 className="font-biro text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-normal mb-2 sm:mb-3 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] leading-[1] tracking-tight flex flex-col items-start select-none">
                        <span className="text-[#d4a853] block">Ángel</span>
                        <span className="text-white block">Ruiz</span>
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base font-normal tracking-[0.2em] uppercase text-amber-300/90 mb-3 sm:mb-4 font-sans">
                        Mago en Madrid · Magia de cerca y Cóctel
                    </p>
                    
                    {/* Propuesta de valor limpia y editorial */}
                    <p className="text-slate-300/90 text-xs sm:text-base md:text-lg leading-relaxed max-w-lg mb-3 sm:mb-4 font-light drop-shadow">
                        Magia de cerca, cara a cara y con ese punto pícaro que rompe el hielo al instante. Llevo <strong className="text-amber-300 font-semibold">+12 años haciendo magia</strong> participativa que sucede directamente en las manos de tus invitados, con risas y complicidad total.
                    </p>

                    {/* Prueba social verificada con Google Reviews */}
                    <a 
                        href="https://www.google.com/search?q=%C3%81ngel+Ruiz+Mago+e+Ilusionista&si=AE1YtOpq69kQPYJq7TIn_jext5SiMwQcb6Hqfr7QepP6tJJpjxxm8uN8Zj8gXbRThCA0dqOTKKnoP1rdWc4GqyqO2bKbWfqsHXjGeyQRTmrHnWHBn9wKhEzJxiJeiVnIQ6f7Qe-aM4TANzD10CaC73LbtE26xVuKIQ%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-black/40 hover:bg-amber-500/10 border border-white/10 hover:border-amber-400/40 transition-all text-xs text-slate-200 group backdrop-blur-md cursor-pointer mb-5"
                        aria-label="Ver reseñas 5 estrellas de Ángel Ruiz en Google Maps"
                    >
                        <span className="text-amber-400 font-bold tracking-widest">★★★★★ 5.0</span>
                        <span className="text-white/30">·</span>
                        <span className="text-slate-300 font-medium">+60 Reseñas Reales en Google Maps</span>
                        <span className="text-amber-400 text-xs group-hover:translate-x-0.5 transition-transform">↗</span>
                    </a>

                    {/* CTAs de Conversión */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-2 sm:mb-3">
                        <button
                            type="button"
                            onClick={handleOpenBooking}
                            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_30px_rgba(245,158,11,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                        >
                            <Sparkles className="w-4 h-4 text-slate-950" />
                            <span>Pedir Presupuesto</span>
                        </button>

                        <button
                            type="button"
                            onClick={onOpenVideo}
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl bg-slate-950/70 hover:bg-white/10 border border-white/15 hover:border-amber-400/50 text-slate-200 hover:text-white transition-all text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.5)] active:scale-95 cursor-pointer"
                        >
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <span>Ver Show en Directo <span className="text-amber-200/80 text-xs font-normal normal-case">(1 min)</span></span>
                        </button>
                    </div>

                    {/* Enlace WhatsApp directo (sólo desktop/tablet; en móvil ya está en el dock inferior fijo) */}
                    <a 
                        href="https://wa.me/34648055636?text=Hola%20Ángel,%20me%20gustaría%20consultar%20disponibilidad%20para%20un%20evento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-2 text-xs text-emerald-400/90 hover:text-emerald-300 transition-colors pt-1"
                    >
                        <WhatsApp className="w-3.5 h-3.5 text-emerald-400" />
                        <span>¿Prefieres WhatsApp directo? Escríbeme aquí</span>
                    </a>
                </div>
            </div>
            
            {/* Scroll indicator (Desktop) */}
            <div className='absolute bottom-3 xl:bottom-4 left-1/2 -translate-x-1/2 hidden lg:block pointer-events-none scale-90'>
                <div className='w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5 animate-pulse'>
                    <div className='w-1 h-2 rounded-full bg-[#d4a853]/60' />
                </div>
            </div>

            {/* Indicadores sutiles de diapositiva de fondo */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-10 z-20 flex items-center gap-2" aria-label="Control de imágenes de fondo">
                {HERO_SLIDES.map((_, idx) => (
                    <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Ver foto de fondo ${idx + 1}`}
                        className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
                            idx === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-white/30 hover:bg-white/60'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default function HomeClient({ children }) {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div className="bg-[var(--surface-0)] min-h-screen text-slate-200">
            <MagicCursor />
            <ParticleBackground />
            
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main>
                <HeroClient 
                    onOpenVideo={() => setIsVideoOpen(true)} 
                    onOpenContact={() => setIsContactOpen(true)}
                />
                
                {/* Contenido Server-Rendered directo */}
                <div className="w-full">
                    {children}
                </div>

                {/* Sección de Formulario dedicada en página (accesible también vía scroll) */}
                <section id="presupuesto-form" className="py-16 sm:py-24 px-4 sm:px-8 bg-surface-0 relative border-t border-white/5">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-bold mb-2">Presupuesto en menos de 1h</p>
                            <h2 className="font-[Cinzel] text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-3">
                                Pide Presupuesto Sin Compromiso
                            </h2>
                            <p className="text-sm text-slate-400 max-w-md mx-auto">
                                Cuéntame los detalles de tu evento y te enviaré una propuesta adaptada con disponibilidad y tarifas en menos de una hora.
                            </p>
                        </div>
                        <LiquidGlassForm />
                    </div>
                </section>
            </main>

            <Footer onOpenContact={() => setIsContactOpen(true)} />

            {isContactOpen && <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />}
            {isVideoOpen && <VideoShowModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} onOpenContact={() => setIsContactOpen(true)} />}
        </div>
    );
}

export const PerpetualCard = ({ children, className = "" }) => {
    return (
        <div 
            className={`p-5 sm:p-10 rounded-2xl sm:rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-amber-500/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,168,83,0.1)] transition-all duration-300 relative overflow-hidden group ${className}`}
        >
            <div 
                className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-500 will-change-[opacity]"
            />
            {children}
        </div>
    );
};
