"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import { ContactFormModal } from '@/components/Modals';
import { Sparkles, Heart } from '@/components/Icons';

export default function ParticularesSelectorPage() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [hoverSide, setHoverSide] = useState(null);
    
    return (
        <div className="bg-slate-950 min-h-screen text-slate-200 overflow-hidden">
            <MagicCursor />
            <ParticleBackground />
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main>
                {/* Hero Split Selection - FULL PAGE */}
                <h1 className="sr-only">Magia para Particulares - Selección de Servicios</h1>
                <section className="relative h-screen flex flex-col md:flex-row overflow-hidden">
                    {/* Left: Bodas */}
                    <Link 
                        href="/particulares/bodas"
                        onMouseEnter={() => setHoverSide('left')}
                        onMouseLeave={() => setHoverSide(null)}
                        className={`relative flex-1 flex items-center justify-center transition-all duration-1000 ease-in-out overflow-hidden group border-r border-slate-800/50 ${hoverSide === 'right' ? 'md:flex-[0.5] grayscale' : 'md:flex-[1.5]'}`}
                    >
                        <Image 
                            src="/images/boda-magia-madrid.jpg" 
                            alt="Magia para Bodas" 
                            fill 
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent md:bg-gradient-to-b md:from-transparent md:to-slate-950/90" />
                        
                        <div className="relative z-10 text-center p-6 mt-16 md:mt-0">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-4"
                            >
                                <Heart className="w-12 h-12 text-amber-500 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                                <h2 className="text-5xl md:text-8xl font-[Cinzel] font-bold text-white uppercase tracking-tighter drop-shadow-2xl">Bodas</h2>
                                <p className="text-slate-100 max-w-xs mx-auto font-medium text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">Momentos inolvidables para el día más importante.</p>
                                <div className="pt-6">
                                    <span className="inline-block border-2 border-amber-500 px-8 py-3 rounded-full text-amber-500 font-bold uppercase tracking-widest text-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">Ver Detalles</span>
                                </div>
                            </motion.div>
                        </div>
                        
                        {/* Interactive glow */}
                        <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full" />
                    </Link>

                    {/* Right: Eventos */}
                    <Link 
                        href="/particulares/eventos"
                        onMouseEnter={() => setHoverSide('right')}
                        onMouseLeave={() => setHoverSide(null)}
                        className={`relative flex-1 flex items-center justify-center transition-all duration-1000 ease-in-out overflow-hidden group ${hoverSide === 'left' ? 'md:flex-[0.5] grayscale' : 'md:flex-[1.5]'}`}
                    >
                        <Image 
                            src="/images/fiesta-eventos-madrid.webp" 
                            alt="Celebraciones Familiares" 
                            fill 
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-slate-950/80 via-transparent to-transparent md:bg-gradient-to-b md:from-transparent md:to-slate-950/90" />

                        <div className="relative z-10 text-center p-6 mt-16 md:mt-0">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-4"
                            >
                                <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                                <h2 className="text-5xl md:text-8xl font-[Cinzel] font-bold text-white uppercase tracking-tighter drop-shadow-2xl">EVENTOS</h2>
                                <p className="text-slate-100 max-w-xs mx-auto font-medium text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">Magia para cumpleaños, comuniones y fiestas privadas.</p>
                                <div className="pt-6">
                                    <span className="inline-block border-2 border-amber-500 px-8 py-3 rounded-full text-amber-500 font-bold uppercase tracking-widest text-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">Ver Detalles</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Interactive glow */}
                        <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full" />
                    </Link>
                </section>
            </main>

        </div>
    );
}
