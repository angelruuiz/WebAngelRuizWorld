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
                            className="text-5xl md:text-8xl font-[Cinzel] font-bold text-white mb-6 uppercase tracking-tighter drop-shadow-2xl"
                        >
                            Magia para <span className="text-amber-400">Empresas</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-3xl text-slate-100 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
                        >
                            Impacto garantizado para tus eventos de marca y cenas de gala corporativas.
                        </motion.p>
                    </div>
                </section>

                {/* Valor Corporativo */}
                <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div className="relative md:sticky md:top-32 h-[500px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl order-2 md:order-1">
                            <Image src="/images/foto-bio.png" alt="Mago Corporativo Angel Ruiz" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 md:order-2">
                            <h3 className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4 drop-shadow-md">Soluciones Premium</h3>
                            <h2 className="text-4xl md:text-7xl font-[Cinzel] text-white mb-8 border-b-2 border-amber-500 pb-4 font-bold">Empresas</h2>
                            
                            <div className="space-y-6 text-white text-base md:text-lg font-medium leading-relaxed text-justify">
                                <p><span className="text-amber-400 font-bold">Magia personalizada para empresas y marcas de gran prestigio internacional.</span> Sorprende a tus equipos con una actividad innovadora y haz que se involucren al 100%.</p>
                                
                                <p><span className="text-white font-bold italic underline decoration-amber-500/50">Me infiltraré como un empleado más</span>, evitando así modificar el transcurso del evento. Hipnosis, mentalismo, robos... Entretenimiento fresco y moderno, esa es la clave para que tus equipos participen.</p>
                                
                                <p className="text-amber-500/90 italic font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4">Un cóctel, una cena de empresa, un congreso, un desayuno... Cualquier ocasión con un algo de magia cambiará por completo la perspectiva del evento.</p>

                                <ul className="space-y-4 pt-6">
                                    {[
                                        "Networking facilitado en cócteles",
                                        "Personalización con logo de marca",
                                        "Shows de salón para cenas de gala",
                                        "Atracción de leads en ferias y stands"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-white font-bold">
                                            <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20">
                                                <CheckCircle2 className="text-slate-950 w-4 h-4" />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Formatos para Empresas */}
                <section className="py-24 bg-slate-900/50 relative z-10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4 drop-shadow-md">Soluciones Flexibles</h2>
                            <h3 className="text-4xl md:text-6xl font-[Cinzel] text-white font-bold">Formatos de Show</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Cóctel Networking", desc: "Magia de cerca itinerante para facilitar la interacción entre asistentes.", icon: Users },
                                { title: "Cena de Gala", desc: "Show de salón central interactivo para toda la audiencia tras el banquete.", icon: Sparkles },
                                { title: "Ferias / Stands", desc: "Magia comercial diseñada para detener el tráfico y presentar productos.", icon: Star },
                                { title: "Team Building", desc: "Talleres de magia exclusivos para fomentar la cohesión de equipos.", icon: GlassWater }
                            ].map((s, i) => (
                                <div key={i} className="bg-slate-950/80 p-6 rounded-2xl border border-slate-700 hover:border-amber-500 transition-all group backdrop-blur-md">
                                    <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20">
                                        <s.icon className="text-slate-950 w-6 h-6" />
                                    </div>
                                    <h4 className="text-2xl font-[Cinzel] text-white mb-3 font-bold">{s.title}</h4>
                                    <p className="text-slate-100 text-base font-medium leading-relaxed">{s.desc}</p>
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
