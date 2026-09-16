"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, WhatsApp } from '@/components/Icons';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
const ContactFormModal = dynamic(() => import('@/components/Modals').then(mod => mod.ContactFormModal), { ssr: false });
const VideoShowModal = dynamic(() => import('@/components/VideoShowModal'), { ssr: false });

import LiquidGlassForm from '@/components/LiquidGlassForm';

const HeroClient = ({ onOpenModal, onOpenVideo }) => {
    return (
        <section className="relative min-h-[100dvh] flex flex-col justify-end lg:justify-center overflow-hidden z-10 pt-20 pb-28 sm:pb-32 lg:py-0">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <picture>
                    <source media="(min-width: 768px)" srcSet="/images/hero-angel-ruiz-2026.webp" />
                    <img 
                        src="/images/hero-angel-ruiz-mobile-2026.webp" 
                        alt="Ángel Ruiz, mago e ilusionista profesional en Madrid" 
                        className="w-full h-full object-cover object-[25%_top] md:object-[center_right] lg:object-right" 
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        width={1920}
                        height={1080}
                    />
                </picture>
                {/* Gradiente superior para proteger el Navbar */}
                <div className='absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-transparent to-[#030712] lg:via-[#030712]/40' />
                {/* Gradiente lateral para Desktop */}
                <div className='hidden lg:block absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/40 to-transparent' />
                {/* Gradiente inferior para Móvil: deja el tercio superior limpio para la foto y el tercio inferior oscuro para textos y botones */}
                <div className='lg:hidden absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/85 via-50% to-transparent' />
            </div>
            
            <div className="px-5 sm:px-8 md:px-12 lg:px-16 relative z-10 w-full max-w-7xl mx-auto lg:scale-[0.90] lg:origin-center transition-transform">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Desktop: Formulario en Columna Izquierda (en móvil se oculta aquí para no crear scroll forzado) */}
                    <div className="hidden lg:block lg:col-span-5 w-full max-w-lg mx-auto lg:mx-0 z-20">
                        <LiquidGlassForm />
                    </div>

                    {/* Títulos y Marca Personal (En Desktop columna derecha, en Móvil centrado/adaptado con CTAs directos) */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left lg:pl-6">
                        {/* Seasonal urgency micro-badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-5 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Agenda 2026 Abierta · Reserva Anticipada</span>
                        </div>

                        {/* Semantic H1 for SEO + Instant LCP Paint */}
                        <h1 className="font-[Cinzel] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-wider drop-shadow-lg leading-none flex flex-col items-start">
                            <span className="text-[#d4a853] block mb-1">ANGEL</span>
                            <span className="text-white block">RUIZ</span>
                        </h1>
                        
                        <div className="my-1.5 sm:my-2 md:my-4">
                            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-slate-200 tracking-[0.12em] sm:tracking-[0.15em] uppercase border-l-4 border-[#d4a853]/50 py-2 sm:py-2.5 md:py-3 px-3.5 sm:px-4 md:px-6 inline-block backdrop-blur-md bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] text-left leading-relaxed font-accent rounded-r-xl">
                                Ilusionista profesional con más de <span className="font-[Cinzel] font-bold text-[#d4a853] text-sm sm:text-lg md:text-xl lg:text-3xl">10</span> años de experiencia
                            </p>
                        </div>
                        
                        <p className="hidden sm:block text-slate-400 text-xs sm:text-sm md:text-base font-light italic mt-2 md:mt-4 px-4 font-accent tracking-[0.08em] border-l border-white/20 pl-6">
                            "LA MAGIA QUE HACE QUE TU EVENTO SEA INOLVIDABLE."
                        </p>

                        {/* Botón Discreto: Ver Show en Directo */}
                        <div className="mt-3 sm:mt-5 flex flex-wrap items-center gap-3">
                            <button
                                type="button"
                                onClick={onOpenVideo}
                                className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-950/80 hover:bg-[#d4a853]/15 border border-[#d4a853]/40 hover:border-[#d4a853] text-[#d4a853] hover:text-white transition-all duration-300 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_15px_rgba(212,168,83,0.1)] active:scale-95 cursor-pointer text-xs sm:text-sm font-semibold tracking-wider uppercase"
                            >
                                <span>Ver Show en Directo <span className="opacity-70 text-[10px] sm:text-xs font-normal normal-case">(1 min)</span></span>
                            </button>
                        </div>

                        {/* Indicador de deslizamiento exclusivo para Móvil (PC intacto) */}
                        <div className="w-full mt-4 flex justify-center lg:hidden">
                            <a
                                id="hero-scroll-trigger"
                                href="#presupuesto-mobile"
                                className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-slate-950/70 border border-[#d4a853]/30 backdrop-blur-md active:scale-95 transition-transform shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                            >
                                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d4a853]">
                                    Desliza para solicitar información
                                </span>
                                <svg 
                                    className="w-3.5 h-3.5 text-[#d4a853] animate-bounce shrink-0" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                                </svg>
                            </a>
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

export default function HomeClient({ seoContent }) {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div className="bg-[var(--surface-0)] min-h-screen text-slate-200">
            <MagicCursor />
            <ParticleBackground />
            
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main>
                <HeroClient 
                    onOpenModal={() => setIsContactOpen(true)} 
                    onOpenVideo={() => setIsVideoOpen(true)} 
                />

                {/* Formulario visible en Móvil justo al hacer scroll */}
                <section id="presupuesto-mobile" className="lg:hidden px-4 py-10 bg-gradient-to-b from-[#030712] via-slate-950 to-transparent relative z-20">
                    <div className="max-w-lg mx-auto">
                        <LiquidGlassForm />
                    </div>
                </section>
                
                {/* Scroll Reveal Wrapper para el contenido SEO */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                    {seoContent}
                </motion.div>
            </main>

            <Footer onOpenContact={() => setIsContactOpen(true)} />

            <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <VideoShowModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} onOpenContact={() => setIsContactOpen(true)} />
        </div>
    );
}

export const PerpetualCard = ({ children, className = "" }) => {
    return (
        <motion.div 
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className={`p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] relative overflow-hidden group ${className}`}
        >
            <div 
                className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-500 will-change-[opacity]"
            />
            {children}
        </motion.div>
    );
};
