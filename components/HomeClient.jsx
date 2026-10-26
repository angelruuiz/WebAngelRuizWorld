"use client";

import { useState } from 'react';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import { Sparkles } from '@/components/Icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
const ContactFormModal = dynamic(() => import('@/components/Modals').then(mod => mod.ContactFormModal), { ssr: false });
const VideoShowModal = dynamic(() => import('@/components/VideoShowModal'), { ssr: false });

import LiquidGlassForm from '@/components/LiquidGlassForm';

const HeroClient = ({ onOpenVideo, onOpenContact }) => {
    const triggerBookingDrawer = (eventType = 'empresa') => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('open-booking-drawer', { detail: { eventType } }));
        }
    };

    return (
        <section className="relative min-h-[100dvh] flex flex-col justify-end lg:justify-center overflow-hidden z-10 pt-20 pb-28 sm:pb-32 lg:py-0">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <picture>
                    <source media="(min-width: 768px)" srcSet="/images/hero-angel-ruiz-2026.webp" width={2560} height={1440} />
                    <img 
                        src="/images/hero-angel-ruiz-mobile-2026.webp" 
                        alt="Ángel Ruiz, mago e ilusionista profesional en Madrid" 
                        className="w-full h-full object-cover object-[25%_top] md:object-[center_right] lg:object-right" 
                        loading="eager"
                        fetchPriority="high"
                        decoding="sync"
                        width={640}
                        height={960}
                    />
                </picture>
                {/* Gradiente superior para proteger el Navbar */}
                <div className='absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-transparent to-[#030712] lg:via-[#030712]/40' />
                {/* Gradiente lateral para Desktop */}
                <div className='hidden lg:block absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/40 to-transparent' />
                {/* Gradiente inferior para Móvil */}
                <div className='lg:hidden absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/85 via-50% to-transparent' />
            </div>
            
            <div className="px-4 sm:px-8 md:px-12 lg:px-16 relative z-10 w-full max-w-7xl mx-auto lg:scale-[0.90] lg:origin-center transition-transform">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                    {/* Desktop: Formulario Completo tradicional en columna izquierda */}
                    <div id="presupuesto-form" className="hidden lg:block w-full max-w-lg mx-auto lg:mx-0 z-20 order-2 lg:order-1 lg:col-span-5 pt-2 lg:pt-0">
                        <LiquidGlassForm />
                    </div>

                    {/* Títulos y Marca Personal: limpio y visualmente ligero en móvil */}
                    <div className="w-full order-1 lg:order-2 lg:col-span-7 flex flex-col items-start text-left lg:pl-6">
                        {/* Micro-badge de autoridad */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-2 sm:mb-4 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Ilusionista en Madrid · Bodas & Empresas</span>
                        </div>

                        {/* Semantic H1 for SEO + Instant LCP Paint */}
                        <h1 className="font-[Cinzel] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 sm:mb-4 md:mb-6 tracking-wider drop-shadow-lg leading-none flex flex-col items-start">
                            <span className="text-[#d4a853] block mb-0.5 sm:mb-1">ANGEL</span>
                            <span className="text-white block">RUIZ</span>
                        </h1>
                        
                        <div className="my-1 sm:my-2 md:my-3 max-w-lg">
                            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-slate-200 tracking-[0.08em] sm:tracking-[0.15em] border-l-3 sm:border-l-4 border-[#d4a853]/60 py-1.5 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 inline-block backdrop-blur-md bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] text-left leading-relaxed font-accent rounded-r-xl">
                                Ilusionista profesional con más de <span className="font-[Cinzel] font-bold text-[#d4a853] text-sm sm:text-lg md:text-xl lg:text-3xl">10</span> años de experiencia
                            </p>
                        </div>

                        {/* Micro-prueba social en Móvil: situado aquí arriba para que nunca lo tape la barra de navegación inferior */}
                        <div className="lg:hidden flex items-center gap-2 my-2 text-[11px] text-slate-300">
                            <span className="text-amber-400 font-bold tracking-wider">★★★★★</span>
                            <span className="font-semibold text-white">Trato directo sin agencias</span>
                            <span className="text-white/30">•</span>
                            <span className="text-slate-300">Escuela DaOrtiz</span>
                        </div>
                        
                        <p className="hidden sm:block text-slate-400 text-xs sm:text-sm md:text-base font-light italic mt-2 md:mt-4 px-4 font-accent tracking-[0.08em] border-l border-white/20 pl-6">
                            "LA MAGIA QUE HACE QUE TU EVENTO SEA INOLVIDABLE."
                        </p>

                        {/* Acciones directas en Móvil: 2 botones concisos con margen generoso sobre la nav inferior */}
                        <div className="lg:hidden flex items-center gap-2.5 w-full max-w-sm mt-2 sm:mt-4">
                            <button
                                type="button"
                                onClick={() => triggerBookingDrawer('empresa')}
                                className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-[#d4a853] via-[#f7e7c4] to-[#b8860b] text-[#030712] font-black text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(212,168,83,0.35)] flex items-center justify-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
                            >
                                <span>Pedir Fecha</span>
                                <Sparkles className="w-3.5 h-3.5 text-[#030712]" />
                            </button>

                            <button
                                type="button"
                                onClick={onOpenVideo}
                                className="flex-1 py-3 px-3 rounded-xl bg-slate-950/75 border border-white/20 hover:border-amber-400/50 text-slate-200 font-bold text-xs uppercase tracking-wider backdrop-blur-md flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
                            >
                                <span>Ver Show</span>
                                <span className="text-[10px] text-amber-300 opacity-80">(1 min)</span>
                            </button>
                        </div>

                        {/* Botón Desktop: Ver Show en Directo */}
                        <div className="hidden lg:flex mt-5 items-center gap-3">
                            <button
                                type="button"
                                onClick={onOpenVideo}
                                className="inline-flex items-center px-5 py-2.5 rounded-full bg-slate-950/80 hover:bg-[#d4a853]/15 border border-[#d4a853]/40 hover:border-[#d4a853] text-[#d4a853] hover:text-white transition-all duration-300 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_15px_rgba(212,168,83,0.1)] active:scale-95 cursor-pointer text-xs sm:text-sm font-semibold tracking-wider uppercase"
                            >
                                <span>Ver Show en Directo <span className="opacity-70 text-xs font-normal normal-case">(1 min)</span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll indicator (Desktop) */}
            <div className='absolute bottom-3 xl:bottom-4 left-1/2 -translate-x-1/2 hidden lg:block pointer-events-none scale-90'>
                <div className='w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5 animate-pulse'>
                    <div className='w-1 h-2 rounded-full bg-[#d4a853]/60' />
                </div>
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
