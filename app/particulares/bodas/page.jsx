"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import { ContactFormModal } from '@/components/Modals';
import { CheckCircle2 } from '@/components/Icons';
import Chatbot from '@/components/Chatbot';

export default function BodasDetailPage() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    
    return (
        <div className="bg-slate-950 min-h-screen text-slate-200">
            <MagicCursor />
            <ParticleBackground />
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                        <p className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4 drop-shadow-md">Especialista en Bodas</p>
                        <h1 className="text-5xl md:text-8xl font-[Cinzel] text-white mb-8 border-b-2 border-amber-500 pb-4 font-bold">Bodas</h1>
                        
                        <div className="space-y-6 text-white text-base md:text-lg font-medium leading-relaxed text-justify">
                            <p><span className="text-amber-400 font-bold">Personaliza tu boda de la forma más mágica.</span> Me encargaré de acompañarte en vuestro día para hacer del cóctel o del banquete un momento único.</p>
                            
                            <p>Si me quieres durante el cóctel, <span className="text-white font-bold italic underline decoration-amber-500/50">me infiltraré entre tus invitados como uno más</span> e iré realizando mini-shows de magia por grupos. Si me quieres durante el banquete, amenizaré las esperas entre plato y plato y romperé el hielo con tus invitados para que participen activamente.</p>
                            
                            <p>Tu gran día merece un toque de distinción que tus invitados no olviden jamás. Como <strong className="text-amber-400">mago de bodas en Madrid</strong>, me especializo en crear esos instantes de asombro que sirven para romper el hielo y conectar a familiares y amigos que acaban de conocerse.</p>
                            
                            <p>La magia durante el cóctel es la opción más demandada. Mientras los novios realizan su sesión fotográfica, yo me encargo de que el ritmo no decaiga, moviéndome entre los grupos con efectos de <strong className="text-amber-400 italic underline decoration-amber-500/30">ilusionismo de impacto</strong> que ocurren directamente en las manos de los asistentes. No es solo un espectáculo, es una herramienta social que genera risas, conversaciones y un ambiente eléctrico.</p>
                            
                            <p>Además de la recepción, ofrezco intervenciones personalizadas durante el banquete o incluso un show central antes del baile. Cada boda es única, por lo que adapto mi repertorio para que encaje con el estilo de vuestro enlace, ya sea una celebración íntima o un gran evento de gala. Mi objetivo es que, cuando la gente recuerde vuestro enlace, mencione lo increíble que fue ese momento en el que lo imposible ocurrió frente a sus ojos.</p>

                            <p className="italic text-amber-500/90 font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4">Magia adulta y participación intensa. Como uno de los ilusionistas con más trayectoria en celebraciones exclusivas, te garantizo un éxito total. Los presupuestos varían según la ubicación de la ceremonia. ¡Contáctame y hablamos!</p>
                        </div>

                        <div className="mt-12 flex justify-start">
                            <button onClick={() => setIsContactOpen(true)} className="px-10 py-4 bg-amber-500 text-slate-950 font-bold rounded-full uppercase tracking-widest hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 transform hover:-translate-y-1">Reservar Fecha</button>
                        </div>
                    </motion.div>

                    <div className="relative md:sticky md:top-32 h-[450px] md:h-[500px] rounded-3xl overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                         <Image src="/images/foto-bio-2.png" alt="Mago de bodas en Madrid Angel Ruiz ilusionista profesional para cócteles y banquetes" fill className="object-cover" priority />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                    </div>
                </div>
            </main>

            <Footer onOpenContact={() => setIsContactOpen(true)} />
            <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <Chatbot />
        </div>
    );
}
