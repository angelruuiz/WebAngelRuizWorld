"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import { ContactFormModal } from '@/components/Modals';
import { Sparkles, Users, CheckCircle2, Star, GlassWater } from '@/components/Icons';

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
                            <Image src="/images/foto-bio.png" alt="Mago corporativo en Madrid Angel Ruiz ilusionista para empresas de prestigio y congresos" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 md:order-2">
                            <h1 className="text-4xl md:text-7xl font-[Cinzel] text-white mb-8 border-b-2 border-amber-500 pb-4 font-bold">Empresas</h1>
                            
                            <div className="space-y-6 text-white text-base md:text-lg font-medium leading-relaxed text-justify">
                                <p><span className="text-amber-400 font-bold">Magia personalizada para empresas y marcas de gran prestigio internacional en Madrid.</span> Sorprende a tus equipos con una actividad innovadora y haz que se involucren al 100% en la cultura de tu compañía a través del asombro.</p>
                                
                                <p><span className="text-white font-bold italic underline decoration-amber-500/50">Me infiltraré como un empleado más</span> o como un invitado sorpresa, evitando así modificar el trascurso natural del evento pero elevando el ánimo general. Mi especialidad es el dinamismo: hipnosis, mentalismo, robos imposibles y <strong className="text-amber-500">ilusionismo corporativo</strong> de vanguardia. Esta es la clave para que tus equipos participen y conecten de forma orgánica.</p>

                                <p>Ya sea en la inauguración de una sede, un congreso internacional o un desayuno de networking, el impacto de mi magia refuerza el mensaje de tu marca. La versatilidad de mis efectos me permite integrar logos, conceptos de empresa o productos específicos, convirtiendo el entretenimiento en un canal de comunicación de alto impacto.</p>
                                
                                <p className="text-amber-500/90 italic font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4">Un cóctel, una cena de empresa, un congreso, un desayuno... Cualquier ocasión con un algo de magia cambiará por completo la perspectiva del evento, asegurando un clima de innovación y exclusividad.</p>
                            </div>

                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-12">
                                <button onClick={() => setIsContactOpen(true)} className="px-10 py-5 bg-amber-500 text-slate-950 font-bold rounded-full uppercase tracking-widest hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 w-full md:w-auto">
                                    Solicitar Presupuesto Corporativo
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>


            </main>

            <Footer onOpenContact={() => setIsContactOpen(true)} />
            <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </div>
    );
}
