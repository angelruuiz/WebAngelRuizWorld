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
                {/* Valor Corporativo */}
                <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div className="relative md:sticky md:top-32 h-[450px] md:h-[500px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl order-2 md:order-1">
                            <Image src="/images/foto-bio.png" alt="Mago Corporativo Angel Ruiz" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 md:order-2">
                            <h2 className="text-4xl md:text-7xl font-[Cinzel] text-white mb-8 border-b-2 border-amber-500 pb-4 font-bold">Empresas</h2>
                            
                            <div className="space-y-6 text-white text-base md:text-lg font-medium leading-relaxed text-justify">
                                <p><span className="text-amber-400 font-bold">Magia personalizada para empresas y marcas de gran prestigio internacional.</span> Sorprende a tus equipos con una actividad innovadora y haz que se involucren al 100%.</p>
                                
                                <p><span className="text-white font-bold italic underline decoration-amber-500/50">Me infiltraré como un empleado más</span>, evitando así modificar el transcurso del evento. Hipnosis, mentalismo, robos... Entretenimiento fresco y moderno, esa es la clave para que tus equipos participen.</p>
                                
                                <p className="text-amber-500/90 italic font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4">Un cóctel, una cena de empresa, un congreso, un desayuno... Cualquier ocasión con un algo de magia cambiará por completo la perspectiva del evento.</p>
                            </div>
                        </motion.div>
                    </div>
                </section>


            </main>

            <Footer onOpenContact={() => setIsContactOpen(true)} />
            <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <Chatbot />
        </div>
    );
}
