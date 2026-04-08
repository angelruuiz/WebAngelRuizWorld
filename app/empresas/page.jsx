"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import { ContactFormModal } from '@/components/Modals';
import { Sparkles, Users, CheckCircle2, Star, GlassWater } from '@/components/Icons';
import Chatbot from '@/components/Chatbot';

export default function EmpresasPage() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    
    return (
        <div className="bg-slate-950 min-h-screen text-slate-200">
            <MagicCursor />
            <ParticleBackground />
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main>
                {/* Hero Empresas */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="w-full h-full bg-slate-900 absolute opacity-50" />
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-30">
                            <source src="/spring.webm" type="video/webm" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
                    </div>
                    
                    <div className="text-center px-4 relative z-10 max-w-4xl">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-[Cinzel] font-bold text-white mb-6 uppercase tracking-tighter"
                        >
                            Magia para <span className="text-amber-400">Empresas</span> y Marcas
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            Dinamiza tus eventos corporativos, presentaciones de producto o cenas de gala con un impacto garantizado.
                        </motion.p>
                    </div>
                </section>

                {/* Valor Corporativo */}
                <section className="py-24 px-6 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[450px] rounded-2xl overflow-hidden border border-slate-800 order-2 md:order-1">
                            <Image src="/images/foto-bio.png" alt="Mago Corporativo" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 md:order-2">
                            <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white mb-8">Más que un Espectáculo: Una Inversión</h2>
                            <div className="space-y-6 text-slate-300 text-lg font-light leading-relaxed">
                                <p>En un entorno empresarial, la magia no es solo entretenimiento; es una potente herramienta de networking y comunicación.</p>
                                <p>Ayudo a las marcas a transmitir mensajes, fidelizar clientes y generar un ambiente de equipo relajado y positivo a través de ilusiones inteligentes y sofisticadas.</p>
                                <ul className="space-y-4 pt-6">
                                    {[
                                        "Networking facilitado en cócteles de empresa",
                                        "Personalización de trucos con el logo o mensaje de marca",
                                        "Shows de salón para cenas de gala",
                                        "Magia en stands para atraer leads en ferias"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="text-amber-500 w-5 h-5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Formatos para Empresas */}
                <section className="py-24 bg-slate-900/30">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4">Soluciones Flexibles</h2>
                            <h3 className="text-3xl md:text-5xl font-[Cinzel] text-white">Formatos de Show</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Cóctel Networking", desc: "Magia de cerca itinerante para facilitar la interacción entre asistentes.", icon: Users },
                                { title: "Cena de Gala", desc: "Show de salón central interactivo para toda la audiencia tras el banquete.", icon: Sparkles },
                                { title: "Ferias / Stands", desc: "Magia comercial diseñada para detener el tráfico y presentar productos.", icon: Star },
                                { title: "Team Building", desc: "Talleres de magia exclusivos para fomentar la cohesión de equipos.", icon: GlassWater }
                            ].map((s, i) => (
                                <div key={i} className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group backdrop-blur-sm">
                                    <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <s.icon className="text-amber-400 w-5 h-5" />
                                    </div>
                                    <h4 className="text-lg font-[Cinzel] text-white mb-3">{s.title}</h4>
                                    <p className="text-slate-400 text-sm font-light leading-relaxed">{s.desc}</p>
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
