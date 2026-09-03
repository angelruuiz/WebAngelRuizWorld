"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from '@/components/Icons';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
const ContactFormModal = dynamic(() => import('@/components/Modals').then(mod => mod.ContactFormModal), { ssr: false });

const SplitText = ({ text }) => {
    return (
        <span className="inline-block">
            {text.split("").map((char, index) => (
                <motion.span 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }} 
                    style={{ display: 'inline-block' }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
};

import LiquidGlassForm from '@/components/LiquidGlassForm';

const HeroClient = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden z-10 pt-24 pb-16 lg:py-0">
            <div className="absolute inset-0 z-0 overflow-hidden" style={{ aspectRatio: '16/9', width: '100%', height: '100%' }}>
                {/* Desktop: video solo en pantallas medianas/grandes */}
                <div className="hidden md:block absolute inset-0">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        preload="none"
                        poster="/images/hero-poster.webp"
                        className="w-full h-full object-cover"
                    >
                        <source src="/spring.webm" type="video/webm" />
                        <source src="/spring.mp4" type="video/mp4" />
                    </video>
                </div>
                {/* Mobile: poster optimizado de carga rápida */}
                <div className="block md:hidden absolute inset-0">
                    <picture>
                        <source srcSet="/images/hero-poster.webp" type="image/webp" />
                        <img 
                            src="/images/hero-poster.webp" 
                            alt="Ángel Ruiz, mago e ilusionista profesional en Madrid" 
                            className="w-full h-full object-cover object-[50%_75%]" 
                            loading="eager"
                            fetchPriority="high"
                            width={1920}
                            height={1080}
                        />
                    </picture>
                </div>
                <div className='absolute inset-0 bg-gradient-to-b from-[#030712]/60 via-[#030712]/40 to-[#030712]' />
                <div className='absolute inset-0 bg-gradient-to-r from-[#030712]/80 via-[#030712]/30 to-transparent' />
            </div>
            
            <div className="px-5 sm:px-8 md:px-12 lg:px-16 relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Títulos y CTA Principal */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        <h1 className="sr-only">Ángel Ruiz - Mago e Ilusionista en Madrid</h1>
                        <div className="font-[Cinzel] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-wider drop-shadow-lg leading-none pointer-events-none flex flex-col items-start" aria-hidden="true" role="presentation">
                            <span className="text-[#d4a853] block mb-1"><SplitText text="ANGEL" /></span>
                            <span className="text-white block"><SplitText text="RUIZ" /></span>
                        </div>
                        
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 1 }} className="my-2 md:my-4">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 tracking-[0.15em] uppercase border-l-4 border-[#d4a853]/50 py-2.5 md:py-3 px-4 md:px-6 inline-block backdrop-blur-md bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] text-left leading-relaxed font-accent rounded-r-xl">
                                Ilusionista profesional con más de <span className="font-[Cinzel] font-bold text-[#d4a853] text-sm sm:text-lg md:text-xl lg:text-3xl">10</span> años de experiencia
                            </p>
                        </motion.div>
                        
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1 }} className="text-slate-400 text-xs sm:text-sm md:text-base font-light italic mt-2 md:mt-4 px-4 font-accent tracking-[0.08em] border-l border-white/20 pl-6">
                            "LA MAGIA QUE HACE QUE TU EVENTO SEA INOLVIDABLE."
                        </motion.p>
                    </div>

                    {/* Right Column: Formulario Visible Liquid Glass */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="lg:col-span-5 w-full max-w-lg mx-auto lg:mx-0 z-20"
                    >
                        <LiquidGlassForm />
                    </motion.div>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 2.5 }}
                className='absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:block pointer-events-none'
            >
                <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className='w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5'
                >
                <div className='w-1 h-2 rounded-full bg-[#d4a853]/60' />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default function HomeClient({ seoContent }) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="bg-[var(--surface-0)] min-h-screen text-slate-200">
            <MagicCursor />
            <ParticleBackground />
            
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main>
                <HeroClient onOpenModal={() => setIsContactOpen(true)} />
                
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
