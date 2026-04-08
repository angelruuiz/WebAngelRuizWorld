"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import { ContactFormModal } from '@/components/Modals';
import { Sparkles } from '@/components/Icons';
import Chatbot from '@/components/Chatbot';

export default function EventosDetailPage() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    
    return (
        <div className="bg-slate-950 min-h-screen text-slate-200">
            <MagicCursor />
            <ParticleBackground />
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="relative md:sticky md:top-32 h-[450px] md:h-[500px] rounded-3xl overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] order-2 md:order-1">
                         <Image src="/images/foto-bio.png" alt="Fiestas Privadas y Eventos Angel Ruiz" fill className="object-cover" priority />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                    </div>

                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="order-1 md:order-2">
                        <h3 className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4 drop-shadow-md">Celebraciones Únicas</h3>
                        <h1 className="text-5xl md:text-8xl font-[Cinzel] text-white mb-8 border-b-2 border-amber-500 pb-4 font-bold">Eventos</h1>
                        
                        <div className="space-y-6 text-white text-base md:text-lg font-medium leading-relaxed text-justify">
                            <p><span className="text-amber-400 font-bold">Añade algo diferente en tu celebración.</span> Aniversarios, bautizos, cenas entre amigos, cumpleaños... Convierto tu casa en un teatro de prestigio.</p>
                            
                            <p>Si tu celebración es multitudinaria podemos realizar <span className="text-white font-bold italic underline decoration-amber-500/50">magia de cóctel entre los invitados</span>; de esta forma el evento seguirá su curso mientras la magia sucede.</p>
                            
                            <p>Si sois un grupo reducido, puedo llevar a tu domicilio mi espectáculo del teatro Houdini, <span className="text-amber-400 font-bold font-['Playfair_Display'] italic">"Reina de corazones"</span>. El teatro en tu casa.</p>
                            
                            <p>Disfrutarás de un show familiar-adulto en el que prácticamente todos participaréis de una forma u otra. Un humor elegante y una buena dosis de emoción os harán flipar a lo grande, ¡te lo aseguro!</p>
                            
                            <p className="text-white italic pt-4">Verás cosas nunca vistas; magia moderna. anillos, monedas , cartas y algunos objetos no tan comunes, serán los culpables de trasladarte a un mundo increíble lleno de misterio, humor y mucha cara dura...</p>
                        </div>

                        <div className="mt-12 flex justify-start">
                            <button onClick={() => setIsContactOpen(true)} className="px-10 py-4 border-2 border-amber-500 text-amber-500 font-bold rounded-full uppercase tracking-widest hover:bg-amber-500 hover:text-slate-950 transition-all shadow-lg shadow-amber-500/10 transform hover:-translate-y-1">Consúltame</button>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer onOpenContact={() => setIsContactOpen(true)} />
            <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <Chatbot />
        </div>
    );
}
