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
                    initial={{ opacity: 0, y: 50, rotateX: -90 }} 
                    animate={{ opacity: 1, y: 0, rotateX: 0 }} 
                    transition={{ duration: 0.8, delay: index * 0.1, ease: "backOut" }} 
                    className="inline-block"
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
    
    return (
        <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden z-10">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="metadata"
                    className="w-full h-full object-cover"
                >
                    <source src="/spring.webm" type="video/webm" />
                    <source src="/spring.mp4" type="video/mp4" />
                    <div className="w-full h-full bg-slate-950"></div>
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/60 to-slate-950/90" />
            </div>
            
            <motion.div style={{ y: y1, opacity }} className="text-center px-6 relative z-10 flex flex-col items-center w-full">
                <h1 className="sr-only">Ángel Ruiz | Mago e Ilusionista en Madrid</h1>
                <div aria-hidden="true" className="font-[Cinzel] text-5xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-8 tracking-wider drop-shadow-lg leading-none pointer-events-none">
                    <span className="text-amber-400 block mb-1"><SplitText text="ANGEL" /></span>
                    <span className="text-white block"><SplitText text="RUIZ" /></span>
                </div>
                
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0, duration: 1 }} className="my-3 md:my-6">
                    <p className="text-xs sm:text-lg md:text-2xl text-slate-200 tracking-[0.08em] sm:tracking-[0.1em] uppercase border-y border-amber-500/30 py-3 md:py-4 px-5 md:px-8 inline-block backdrop-blur-sm bg-slate-900/30 text-center leading-relaxed font-[Playfair_Display] rounded-xl">
                        Ilusionista profesional con más de <span className="font-[Cinzel] font-bold text-sm sm:text-lg md:text-xl lg:text-3xl">10</span> años de experiencia
                    </p>
                </motion.div>
                
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1 }} className="text-slate-400 text-base md:text-xl font-light italic mt-4 md:mt-6 px-4">
                    "LA MAGIA ES EL ENGAÑO MÁS HONESTO."
                </motion.p>
                
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8, duration: 1 }} className="mt-8 md:mt-10 w-full max-w-xs md:max-w-none md:w-auto">
                    <motion.button 
                        animate={{ 
                            scale: [1, 1.03, 1], 
                            boxShadow: ["0px 0px 0px rgba(245,158,11,0)", "0px 0px 20px rgba(245,158,11,0.5)", "0px 0px 0px rgba(245,158,11,0)"] 
                        }} 
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                        onClick={onOpenModal} 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }} 
                        className="relative group w-full md:w-auto px-8 md:px-12 py-5 md:py-4 bg-transparent overflow-hidden rounded-full cursor-pointer"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-400 opacity-90 group-hover:opacity-100 transition-opacity" />
                        <span className="relative flex items-center justify-center gap-3 text-slate-950 font-bold tracking-widest uppercase text-sm md:text-sm">
                            Reservar Experiencia <Sparkles className="w-4 h-4" />
                        </span>
                        <div className="absolute inset-0 rounded-full blur-xl bg-amber-400/50 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.button>
                </motion.div>

                {/* Mobile scroll indicator */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 2.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden"
                >
                    <motion.div 
                        animate={{ y: [0, 8, 0] }} 
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
                    >
                        <div className="w-1 h-2 bg-amber-500/60 rounded-full" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default function HomeClient({ seoContent }) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="bg-slate-950 min-h-screen text-slate-200">
            <MagicCursor />
            <ParticleBackground />
            
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main>
                <HeroClient onOpenModal={() => setIsContactOpen(true)} />
                {seoContent}
            </main>

            <Footer onOpenContact={() => setIsContactOpen(true)} />

            <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </div>
    );
}
