"use client";
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import { MagicModal, ContactFormModal } from '@/components/Modals';
import { Star, Quote, CheckCircle2, Sparkles } from '@/components/Icons';
import Chatbot from '@/components/Chatbot';

const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const TrustedBrands = () => {
    const brands = [
        { name: "Movistar Estudiantes", logo: "/images/logo-movistar.png" },
        { name: "Peña La Escombrera Torrelodones", logo: "/images/logo-escombrera.png" },
        { name: "Colegio Gondomar Galapagar", logo: "/images/logo-gondomar.png" },
        { name: "Catering Senescal Torrelodones", logo: "/images/logo-senescal.png" },
        { name: "Alcampo", logo: "/images/logo-alcampo.png" },
        { name: "Ahorramás", logo: "/images/logo-ahorramas.png" }
    ];
    return (
        <section className="py-24 bg-slate-950/80 border-y border-white/5 overflow-hidden relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-4 flex items-center justify-center gap-3"><span className="w-8 h-[1px] bg-amber-500"></span> CLIENTES CORPORATIVOS <span className="w-8 h-[1px] bg-amber-500"></span></h2>
                    <h3 className="text-3xl md:text-5xl font-[Cinzel] text-white">Empresas que confían en la magia</h3>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {brands.map((brand, index) => (
                        <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-700 flex flex-col items-center">
                            <Image src={brand.logo} alt={brand.name} width={150} height={60} className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl filter brightness-110" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ReviewsGrid = () => {
    const [selectedReview, setSelectedReview] = useState(null);
    const reviewsData = [
        { text: "Contratamos a Ángel para dirigir un taller de magia para nuestro campus y la experiencia superó todas las expectativas.", author: "Movistar Estudiantes" },
        { text: "Contratamos a Ángel para nuestra boda y fue la clave para que el cóctel fuera espectacular. La magia de cerca que hace es de otro nivel.", author: "Sofía y David" },
        { text: "Ángel transformó la comunión de nuestro sobrino en algo verdaderamente excepcional.", author: "Comunión de Marcos" },
        { text: "Ángel fue el que inauguró nuestra peña, ¡y lo hizo a lo grande! Nos dejó a todos clavados en el asiento.", author: "Peña 'La Escombrera' (Torrelodones)" },
        { text: "Un espectáculo de magia de salón impecable para la fiesta de cumpleaños.", author: "Ana P. (Fiesta Privada)" },
        { text: "Una experiencia absolutamente mágica. Hizo que nuestra cena de empresa se convirtiera en un evento único.", author: "Carlos M. (Cena de Empresa)" },
        { text: "Buscábamos el mejor mago para bodas en Madrid y Ángel fue todo un acierto. Su magia de cóctel dejó a todos los invitados fascinados.", author: "Laura G. (Boda Real)" },
        { text: "Como ilusionista para eventos corporativos es brillante. Capacidad única para integrar nuestra marca en sus efectos de mentalismo.", author: "TechCorp Solutions" },
        { text: "La mejor magia de cerca profesional que he visto. Ideal para cenas privadas donde quieres sorprender a clientes VIP.", author: "Restaurante Gourmet" },
        { text: "Un show de magia para comuniones y cumpleaños que divierte tanto a niños como a adultos. Muy recomendado.", author: "Familia Rodríguez" }
    ];

    return (
        <section id="reviews" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-4 flex items-center justify-center gap-3"><span className="w-8 h-[1px] bg-amber-500"></span> TESTIMONIOS REALES <span className="w-8 h-[1px] bg-amber-500"></span></h2>
                <h3 className="text-4xl md:text-7xl font-[Cinzel] text-white font-bold mb-6">Lo que dicen de la experiencia</h3>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">Cientos de clientes han vivido momentos imposibles. Aquí algunas de sus historias.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviewsData.map((review, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-900/40 border border-slate-800 backdrop-blur-md p-8 rounded-2xl relative group hover:border-amber-500/30 transition-all cursor-pointer h-full flex flex-col"
                        onClick={() => setSelectedReview(review)}
                    >
                        <Quote className="w-10 h-10 text-amber-500/10 absolute top-6 right-6" />
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />))}
                        </div>
                        <p className="text-slate-200 font-medium italic mb-8 leading-relaxed text-lg flex-grow">"{review.text}"</p>
                        <div className="flex items-center gap-3 mt-auto pt-6 border-t border-slate-800">
                             <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold">{review.author[0]}</div>
                             <p className="text-white font-[Cinzel] text-sm font-bold uppercase tracking-widest">{review.author}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <MagicModal isOpen={!!selectedReview} onClose={() => setSelectedReview(null)}>
                {selectedReview && (
                    <div className="p-8 md:p-14 text-center">
                        <Quote className="w-10 h-10 md:w-16 md:h-16 text-amber-500/40 mx-auto mb-6" />
                        <p className="text-xl md:text-3xl font-light italic text-white leading-relaxed mb-8">"{selectedReview.text}"</p>
                        <div className="w-24 h-[2px] bg-amber-500/50 mx-auto mb-8" />
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex gap-1 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />))}</div>
                            <h4 className="text-white font-[Cinzel] text-xl font-bold uppercase tracking-widest">{selectedReview.author}</h4>
                        </div>
                        <button onClick={() => setSelectedReview(null)} className="w-full mt-12 py-4 bg-amber-500 text-slate-950 font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg shadow-amber-500/20">Cerrar</button>
                    </div>
                )}
            </MagicModal>
        </section>
    );
};

export default function ValoracionesPage() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    
    return (
        <div className="bg-slate-950 min-h-screen text-slate-200">
            <MagicCursor />
            <ParticleBackground />
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main className="pb-24">
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-24">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-80">
                            <source src="/cambio-carta.mp4" type="video/mp4" />
                            <div className="w-full h-full bg-slate-950"></div>
                        </video>
                        <div className="absolute inset-0 bg-slate-950/60" />
                    </div>
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
                            <p className="text-xl md:text-5xl font-[Cinzel] text-slate-100 leading-tight mb-8 drop-shadow-2xl">"La gente olvidará lo que dijiste, olvidará lo que hiciste, pero <span className="text-amber-400 font-bold">nunca olvidará cómo les hiciste sentir</span>."</p>
                            <p className="text-slate-400 uppercase tracking-widest text-xs md:text-sm font-bold">— Angel Ruiz</p>
                        </motion.div>
                    </div>
                </section>

                <ReviewsGrid />
                <TrustedBrands />

                {/* Call to action */}
                <section className="py-24 px-6 max-w-4xl mx-auto text-center relative z-10">
                    <div className="bg-slate-900/50 border border-slate-800 p-12 rounded-3xl backdrop-blur-xl">
                        <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white mb-6 font-bold">¿Quieres que tu evento sea el siguiente en recibir estas críticas?</h2>
                        <p className="text-slate-400 text-xl mb-10 font-light">Reserva tu fecha y asegura un impacto garantizado en tus invitados.</p>
                        <button onClick={() => setIsContactOpen(true)} className="px-12 py-5 bg-amber-500 text-slate-950 font-bold rounded-full uppercase tracking-widest hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20">Contactar Ahora</button>
                    </div>
                </section>
            </main>

            <Footer onOpenContact={() => setIsContactOpen(true)} />
            <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <Chatbot />
        </div>
    );
}
