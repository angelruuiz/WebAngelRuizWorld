"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import { ContactFormModal } from '@/components/Modals';
import { Sparkles, Heart, CheckCircle2, Star } from '@/components/Icons';
import Chatbot from '@/components/Chatbot';

export default function BodasPage() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    
    return (
        <div className="bg-slate-950 min-h-screen text-slate-200">
            <MagicCursor />
            <ParticleBackground />
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main>
                {/* Hero Especial Bodas */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image 
                            src="/images/foto-bio-2.png" 
                            alt="Magia para Bodas" 
                            fill 
                            className="object-cover opacity-40 grayscale"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
                    </div>
                    
                    <div className="text-center px-4 relative z-10 max-w-4xl">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-[Cinzel] font-bold text-white mb-6"
                        >
                            Magia para <span className="text-amber-400">Bodas</span> Inolvidables
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            Haz que vuestro día especial sea aún más mágico con ilusiones que rompen el hielo y unen a vuestros invitados.
                        </motion.p>
                    </div>
                </section>

                {/* Por qué contratar magia en tu boda */}
                <section className="py-24 px-6 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
                            <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white mb-8">El Nexo Perfecto entre Invitados</h2>
                            <div className="space-y-6 text-slate-300 text-lg font-light leading-relaxed">
                                <p>El cóctel es el momento clave para que las familias se conozcan. La magia actúa como el catalizador ideal: genera conversación, risas y asombro compartido.</p>
                                <p>Mi estilo de magia de cerca está diseñado para ser elegante, no intrusivo y altamente participativo. No solo verán magia; vivirán milagros en sus propias manos.</p>
                                <ul className="space-y-4 pt-6">
                                    {[
                                        "Magia itinerante grupo a grupo",
                                        "Efecto exclusivo para los novios",
                                        "Fotografías místicas para el recuerdo",
                                        "Adaptado a cualquier estilo de boda"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="text-amber-500 w-5 h-5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden border border-slate-800">
                            <Image src="/images/foto-bio.png" alt="Mago en Bodas" fill className="object-cover" />
                        </div>
                    </div>
                </section>

                {/* Servicios Específicos de Bodas */}
                <section className="py-24 bg-slate-900/30">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4">Momentos Mágicos</h2>
                            <h3 className="text-3xl md:text-5xl font-[Cinzel] text-white">¿Cuándo sucede la magia?</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "El Cóctel", desc: "Magia de cerca mientras se sirven los canapés. Perfecto para romper el hielo entre invitados que no se conocen.", icon: Heart },
                                { title: "Banquete", desc: "Pequeñas intervenciones entre platos para mantener la energía alta sin interrumpir el servicio de mesa.", icon: Sparkles },
                                { title: "La Fiesta", desc: "Magia visual y directa para calentar motores antes del baile. Un show de alto impacto para cerrar el banquete.", icon: Star }
                            ].map((s, i) => (
                                <div key={i} className="bg-slate-950/50 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group">
                                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <s.icon className="text-amber-400 w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-[Cinzel] text-white mb-4">{s.title}</h4>
                                    <p className="text-slate-400 font-light leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer onOpenContact={() => setIsContactOpen(true)} />
            <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <Chatbot />
        </div>
    );
}
