"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import { ContactFormModal } from '@/components/Modals';
import { Sparkles, Heart, Users, CheckCircle2, Star, GlassWater } from '@/components/Icons';
import Chatbot from '@/components/Chatbot';

export default function ParticularesPage() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [hoverSide, setHoverSide] = useState(null);
    
    return (
        <div className="bg-slate-950 min-h-screen text-slate-200">
            <MagicCursor />
            <ParticleBackground />
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main>
                {/* Hero Split Selection */}
                <section className="relative h-screen flex flex-col md:flex-row overflow-hidden border-b border-slate-800">
                    {/* Left: Bodas */}
                    <div 
                        onMouseEnter={() => setHoverSide('left')}
                        onMouseLeave={() => setHoverSide(null)}
                        className={`relative flex-1 flex items-center justify-center transition-all duration-700 ease-in-out overflow-hidden group border-r border-slate-800/50 ${hoverSide === 'right' ? 'md:flex-[0.5] grayscale' : 'md:flex-[1.5]'}`}
                    >
                        <Image 
                            src="/images/foto-bio-2.png" 
                            alt="Magia para Bodas" 
                            fill 
                            className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent md:bg-gradient-to-b md:from-transparent md:to-slate-950/90" />
                        
                        <div className="relative z-10 text-center p-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-4"
                            >
                                <Heart className="w-12 h-12 text-amber-500 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                                <h2 className="text-4xl md:text-7xl font-[Cinzel] font-bold text-white uppercase tracking-tighter">Bodas</h2>
                                <p className="text-slate-100 max-w-xs mx-auto font-medium text-lg leading-relaxed">Momentos inolvidables para el día más importante.</p>
                                <div className="pt-6">
                                    <a href="#bodas-detail" className="inline-block border-2 border-amber-500 px-8 py-3 rounded-full text-amber-500 font-bold uppercase tracking-widest text-xs hover:bg-amber-500 hover:text-slate-950 transition-all">Saber más</a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Celebraciones */}
                    <div 
                        onMouseEnter={() => setHoverSide('right')}
                        onMouseLeave={() => setHoverSide(null)}
                        className={`relative flex-1 flex items-center justify-center transition-all duration-700 ease-in-out overflow-hidden group ${hoverSide === 'left' ? 'md:flex-[0.5] grayscale' : 'md:flex-[1.5]'}`}
                    >
                        <Image 
                            src="/images/foto-bio.png" 
                            alt="Celebraciones Familiares" 
                            fill 
                            className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-slate-950/80 via-transparent to-transparent md:bg-gradient-to-b md:from-transparent md:to-slate-950/90" />

                        <div className="relative z-10 text-center p-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-4"
                            >
                                <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                                <h2 className="text-4xl md:text-7xl font-[Cinzel] font-bold text-white uppercase tracking-tighter">EVENTOS</h2>
                                <p className="text-slate-100 max-w-xs mx-auto font-medium text-lg leading-relaxed">Magia para cumpleaños, comuniones y fiestas privadas.</p>
                                <div className="pt-6">
                                    <a href="#eventos-detail" className="inline-block border-2 border-amber-500 px-8 py-3 rounded-full text-amber-500 font-bold uppercase tracking-widest text-xs hover:bg-amber-500 hover:text-slate-950 transition-all">Saber más</a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Bodas Section Detail */}
                <section id="bodas-detail" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
                            <h3 className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4">Especialista en Bodas</h3>
                            <h2 className="text-4xl md:text-6xl font-[Cinzel] text-white mb-8 border-b-2 border-amber-500 pb-4">Pack de Bodas</h2>
                            <div className="space-y-6 text-white text-xl font-medium leading-loose text-justify">
                                <p><span className="text-amber-400 font-bold">Personaliza tu boda de la forma más mágica.</span> Me encargaré de acompañarte en vuestro día para hacer del cóctel o del banquete un momento único.</p>
                                
                                <p>Si me quieres durante el cóctel, <span className="text-white font-bold italic">me infiltraré entre tus invitados como uno más</span> e iré realizando mini-shows de magia por grupos. Si me quieres durante el banquete, amenizaré las esperas entre plato y plato y romperé el hielo con tus invitados para que participen activamente.</p>
                                
                                <p>Este tipo de magia, llamada <span className="text-amber-400 font-bold">"magia de cóctel"</span> es dinámica, fresca y participativa. No tiene nada que ver con el mago "cliché" de cuerdas, pañuelos, palomas... Olvídate de todo eso. Mi estilo es moderno, muy definido y elegante. Magia con teléfonos, monedas, carteras, robo de relojes, cartas, mentalismo, hipnosis...</p>
                                
                                <p className="bg-slate-900/50 p-6 rounded-xl border border-amber-500/20 italic">Magia adulta y participación intensa. Los presupuestos varían según la ubicación de la ceremonia. ¡Contáctame y hablamos!</p>
                            </div>
                        </motion.div>
                        <div className="relative md:sticky md:top-32 h-[500px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                             <Image src="/images/foto-bio-2.png" alt="Magia en Bodas" fill className="object-cover" />
                        </div>
                    </div>
                </section>

                {/* Eventos Familiares Detail */}
                <section id="eventos-detail" className="py-24 bg-slate-900/40 relative z-10 border-y border-slate-800">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                            <div className="relative md:sticky md:top-32 h-[500px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl order-2 md:order-1">
                                <Image src="/images/foto-bio.png" alt="Magia en Fiestas Privadas" fill className="object-cover" />
                            </div>
                            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 md:order-2">
                                <h3 className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4">Eventos Familiares</h3>
                                <h2 className="text-4xl md:text-6xl font-[Cinzel] text-white mb-8 border-b-2 border-amber-500 pb-4">Celebraciones</h2>
                                <div className="space-y-6 text-white text-xl font-medium leading-loose text-justify">
                                    <p><span className="text-amber-400 font-bold">Añade algo diferente en tu celebración.</span> Aniversarios, bautizos, cenas entre amigos, cumpleaños... Convierto tu casa en un teatro de prestigio.</p>
                                    
                                    <p>Si tu celebración es multitudinaria podemos realizar <span className="text-white font-bold italic">magia de cóctel entre los invitados</span>; de esta forma el evento seguirá su curso mientras la magia sucede.</p>
                                    
                                    <p>Si sois un grupo reducido, puedo llevar a tu domicilio mi espectáculo del teatro Houdini, <span className="text-amber-400 font-bold font-['Playfair_Display'] italic">"El Rey de Trébol"</span>. El teatro en tu casa.</p>
                                    
                                    <p>Disfrutarás de un show familiar-adulto en el que prácticamente todos participaréis de una forma u otra. Un humor elegante y una buena dosis de emoción os harán flipar a lo grande, ¡te lo aseguro!</p>
                                    
                                    <p className="text-slate-200 indent-8">Verás cosas nunca vistas; magia moderna. anillos, monedas , cartas y algunos objetos no tan comunes, serán los culpables de trasladarte a un mundo increíble lleno de misterio, humor y mucha cara dura...</p>
                                </div>
                            </motion.div>
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
