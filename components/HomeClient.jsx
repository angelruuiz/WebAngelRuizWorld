"use client";

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
                    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }} 
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} 
                    transition={{ duration: 0.9, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }} 
                    style={{ display: 'inline-block' }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
};

const HeroClient = ({ onOpenModal }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.05]);
    
    return (
        <section className="relative h-[100dvh] flex items-center justify-start overflow-hidden z-10">
            <div className="absolute inset-0 z-0 overflow-hidden" style={{ aspectRatio: '16/9', width: '100%', height: '100%' }}>
                {/* Desktop: video */}
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
                {/* Mobile: imagen estática de alta calidad */}
                <div className="block md:hidden absolute inset-0">
                    <picture>
                        <source srcSet="/images/hero-poster.webp" type="image/webp" />
                        <img 
                            src="/images/hero-poster.webp" 
                            alt="Ángel Ruiz, mago e ilusionista profesional en Madrid" 
                            className="w-full h-full object-cover object-[50%_75%]" 
                            loading="eager"
                            width={1920}
                            height={1080}
                        />
                    </picture>
                </div>
                <div className='absolute inset-0 bg-gradient-to-b from-[#030712]/60 via-[#030712]/40 to-[#030712]' />
                <div className='absolute inset-0 bg-gradient-to-r from-[#030712]/80 via-[#030712]/30 to-transparent' />
            </div>
            
            <motion.div style={{ y: y1, opacity, scale }} className="text-left px-6 md:px-16 lg:px-24 relative z-10 flex flex-col items-start w-full max-w-7xl mx-auto">
                <h1 className="font-[Cinzel] text-5xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-8 tracking-wider drop-shadow-lg leading-none pointer-events-none flex flex-col items-start">
                    <span className="sr-only">Ángel Ruiz | Mago e Ilusionista en Madrid</span>
                    <span aria-hidden="true" className="text-[#d4a853] block mb-1"><SplitText text="ANGEL" /></span>
                    <span aria-hidden="true" className="text-white block"><SplitText text="RUIZ" /></span>
                </h1>
                
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 1 }} className="my-3 md:my-6">
                    <p className="text-sm sm:text-lg md:text-xl text-slate-200 tracking-[0.15em] uppercase border-l-4 border-[#d4a853]/50 py-3 md:py-4 px-5 md:px-8 inline-block backdrop-blur-md bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] text-left leading-relaxed font-accent rounded-r-xl">
                        Ilusionista profesional con más de <span className="font-[Cinzel] font-bold text-[#d4a853] text-sm sm:text-lg md:text-xl lg:text-3xl">10</span> años de experiencia
                    </p>
                </motion.div>
                
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1 }} className="text-slate-400 text-sm md:text-lg font-light italic mt-4 md:mt-6 px-4 font-accent tracking-[0.08em] border-l border-white/20 pl-6">
                    "LA MAGIA QUE HACE QUE TU EVENTO SEA INOLVIDABLE."
                </motion.p>
                
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8, duration: 1 }} className="mt-8 md:mt-10 w-full max-w-xs md:max-w-none md:w-auto animate-pulse-gold rounded-full">
                    <motion.button 
                        onClick={onOpenModal} 
                        whileHover={{ scale: 1.02 }} 
                        whileTap={{ scale: 0.97 }} 
                        transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                        className="relative group w-full md:w-auto px-8 md:px-12 py-5 md:py-4 bg-transparent overflow-hidden rounded-full cursor-pointer border border-[#d4a853]/30"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#d4a853] to-[#c9956b] opacity-90 group-hover:opacity-100 transition-opacity" />
                        <span className="relative flex items-center justify-center gap-3 text-slate-950 font-bold tracking-widest uppercase text-sm md:text-sm group-active:blur-[2px] group-active:opacity-80 transition-all duration-200 ease-out">
                            Contratar a Ángel Ruiz <Sparkles className="w-4 h-4" />
                        </span>
                        <div className="absolute inset-0 rounded-full blur-xl bg-amber-400/50 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.button>
                </motion.div>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 2.5 }}
                className='absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block'
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
            <motion.div 
                animate={{ opacity: [0.3, 0.5, 0.3] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none"
            />
            {children}
        </motion.div>
    );
};
