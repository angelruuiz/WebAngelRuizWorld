"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame, AnimatePresence } from 'framer-motion';
import Chatbot from '@/components/Chatbot';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import { MagicModal, ContactFormModal } from '@/components/Modals';
import { Sparkles, GlassWater, Heart, Users, ArrowRight, Star, Quote, X, CheckCircle2, Calendar, Mail, Phone, MessageSquare, UserIcon } from '@/components/Icons';

const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const SplitText = ({ text }) => {
    return (<span className="inline-block">{text.split("").map((char, index) => (<motion.span key={index} initial={{ opacity: 0, y: 50, rotateX: -90 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 0.8, delay: index * 0.1, ease: "backOut" }} className="inline-block">{char === " " ? "\u00A0" : char}</motion.span>))}</span>);
};

const Hero = ({ onOpenModal }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    return (
        <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden z-10">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/spring.webm" type="video/webm" /><source src="/spring.mp4" type="video/mp4" />
                    <div className="w-full h-full bg-slate-950"></div>
                </video>
                <div className="absolute inset-0 bg-slate-950/70" />
            </div>
            <motion.div style={{ y: y1, opacity }} className="text-center px-4 relative z-10 flex flex-col items-center w-full">
                <h1 className="sr-only">Angel Ruiz - Ilusionista Profesional para Eventos y Bodas</h1>
                <p className="font-[Cinzel] text-5xl md:text-8xl font-bold mb-8 tracking-wider drop-shadow-lg leading-tight" aria-hidden="true">
                    <span className="text-amber-400 block mb-2"><SplitText text="ANGEL" /></span>
                    <span className="text-white block"><SplitText text="RUIZ" /></span>
                </p>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0, duration: 1 }} className="my-6">
                    <p className="text-lg md:text-2xl text-slate-200 tracking-[0.1em] uppercase border-y border-amber-500/30 py-4 px-4 md:px-8 inline-block backdrop-blur-sm bg-slate-900/20 text-center leading-relaxed font-[Playfair_Display]">
                        Ilusionista profesional con más de <span className="font-[Cinzel] font-bold text-lg md:text-xl lg:text-3xl">10</span> años de experiencia
                    </p>
                </motion.div>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1 }} className="text-slate-400 text-xl font-light italic mt-6">
                    "LA MAGIA ES EL ENGAÑO MÁS HONESTO."
                </motion.p>
                
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8, duration: 1 }} className="mt-10">
                    <motion.button animate={{ scale: [1, 1.03, 1], boxShadow: ["0px 0px 0px rgba(245,158,11,0)", "0px 0px 20px rgba(245,158,11,0.5)", "0px 0px 0px rgba(245,158,11,0)"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} onClick={onOpenModal} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group px-8 md:px-12 py-4 bg-transparent overflow-hidden rounded-full cursor-pointer">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-400 opacity-90 group-hover:opacity-100 transition-opacity" />
                        <span className="relative flex items-center justify-center gap-3 text-slate-950 font-bold tracking-widest uppercase text-xs md:text-sm">Reservar Experiencia <Sparkles className="w-4 h-4" /></span>
                        <div className="absolute inset-0 rounded-full blur-xl bg-amber-400/50 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};





const ServiceCard = ({ title, shortDesc, icon: Icon, delay, bgClass, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={onClick} className="relative group min-h-[350px] md:h-[400px] w-full cursor-pointer flex flex-col">
            <div className={`absolute inset-0 bg-gradient-to-br ${bgClass} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
            <div className="relative h-full w-full bg-slate-900/40 border border-slate-800/50 p-8 rounded-xl overflow-hidden group-hover:border-amber-500/30 flex flex-col justify-between">
                <div>
                    <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-all"><Icon className="w-8 h-8 text-amber-400" /></div>
                    <h3 className="text-2xl font-[Cinzel] font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{title}</h3>
                    <div className="w-12 h-[2px] bg-amber-500/50 mb-4 group-hover:w-full transition-all duration-500" />
                    <p className="text-slate-300 font-light mt-8 text-lg leading-relaxed">{shortDesc}</p>
                </div>
                <div className="flex items-center gap-2 text-amber-500 font-bold uppercase text-xs tracking-[0.2em] mt-auto group-hover:translate-x-2 transition-transform">
                    <span>Ver más</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </motion.div>
    );
};

const Services = ({ selectedService, setSelectedService, disabled }) => {
    const servicesData = [
        { id: 1, title: "Bodas Mágicas", shortDesc: "Rompe el hielo y conecta a tus invitados.", fullDesc: "Vuestro gran día merece un toque de distinción que lo haga verdaderamente inolvidable. La magia durante el cóctel actúa como el nexo perfecto entre vuestros invitados, creando una atmósfera de asombro que rompe el hielo al instante. Familias y amigos compartirán una experiencia imposible desde el primer minuto.", details: ["Magia itinerante grupo a grupo", "Duración ideal: Cóctel (1.5 - 2h)", "Efecto especial personalizado para los novios", "Recuerdo imposible para los invitados"], icon: Heart, bgClass: "from-pink-500/20 to-purple-500/20" },
        { id: 2, title: "Particulares & VIP", shortDesc: "Desde cenas íntimas hasta grandes fiestas privadas.", fullDesc: "Vive la magia en su estado más puro y exclusivo. Olvida los escenarios lejanos; aquí el milagro sucede justo delante de tus ojos e incluso en tus propias manos. Un espectáculo diseñado para la distancia corta, sin grandes cajas ni cortinas, solo habilidad pura e interacción constante para sorprender a los invitados más exigentes.", details: ["Show de Salón o Close-up (Magia de cerca)", "Duración flexible: 1 - 1.5 horas", "Participación activa de todos los asistentes", "Mentalismo y magia de alto impacto", "Adaptable a salón, jardín o reservado"], icon: Users, bgClass: "from-amber-500/20 to-orange-500/20" },
        { id: 3, title: "Hoteles & Empresas", shortDesc: "Eleva la experiencia de tu marca o local corporativo.", fullDesc: "La magia es una herramienta de comunicación potente capaz de reforzar el mensaje de tu marca y hacer que tu evento destaque. Ya sea para dinamizar una cena de empresa, atraer atención en un stand o crear un ambiente relajado para el networking, diseñamos ilusiones que conectan con tu audiencia y dejan huella.", details: ["Dinamización de Cenas de Empresa", "Magia promocional para marcas", "Duración adaptable al formato del evento", "Refuerzo de valores corporativos"], icon: GlassWater, bgClass: "from-blue-500/20 to-indigo-500/20" }
    ];
    return (
        <section id="services" className={`py-20 relative px-4 max-w-7xl mx-auto ${selectedService ? 'z-40' : 'z-10'} ${disabled ? 'pointer-events-none opacity-50' : ''}`}>
            <div className="text-center mb-12"><h2 className="text-3xl md:text-5xl font-[Cinzel] text-white">Servicios de Magia</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {servicesData.map((s, i) => <ServiceCard key={s.id} {...s} delay={i * 0.2} onClick={() => setSelectedService(s)} />)}
            </div>
            <MagicModal isOpen={!!selectedService} onClose={() => setSelectedService(null)}>
                {selectedService && (
                    <div className="p-8 md:p-12 text-left">
                        <div className="w-16 h-16 rounded-full bg-slate-800 border border-amber-500/30 flex items-center justify-center mb-6"><selectedService.icon className="w-8 h-8 text-amber-400" /></div>
                        <h3 className="text-3xl font-[Cinzel] text-white mb-4">{selectedService.title}</h3>
                        <p className="text-slate-300 font-light mb-8">{selectedService.fullDesc}</p>
                        <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800"><h4 className="text-amber-500 text-xs md:text-sm font-bold uppercase mb-4 flex items-center gap-2"><Sparkles className="w-4 h-4" /> Qué incluye la experiencia</h4><ul className="space-y-3">{selectedService.details.map((detail, i) => (<li key={i} className="flex items-start gap-3 text-slate-300 text-sm md:text-base"><CheckCircle2 className="w-5 h-5 text-amber-500/70 mt-0.5 flex-shrink-0" /><span>{detail}</span></li>))}</ul></div>
                        <button onClick={() => setSelectedService(null)} className="w-full mt-10 py-3 bg-slate-900 border border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-all uppercase tracking-[0.2em] font-bold text-xs rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.1)]">Cerrar Detalles</button>
                    </div>
                )}
            </MagicModal>
        </section>
    );
};





const SEOContent = () => {
    return (
        <section className="pt-0 pb-24 px-6 bg-slate-950 text-slate-400 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto relative">
                <div className="pt-12 overflow-hidden">
                    <h2 className="text-center font-bold text-amber-500 uppercase tracking-[0.5em] text-xs md:text-sm mb-12 animate-pulse">Especialidades de Ilusionismo Premium</h2>
                    <div className="relative flex overflow-hidden py-4 border-y border-amber-500/10">
                        <motion.div 
                            className="flex gap-x-16 whitespace-nowrap"
                            animate={{ x: [0, -1500] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-x-16 text-sm md:text-lg uppercase tracking-[0.3em] font-bold text-amber-400">
                                    <span className="hover:text-white transition-colors cursor-default drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">Mago de Cerca Madrid</span>
                                    <span className="hover:text-white transition-colors cursor-default drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">Mentalismo Profesional</span>
                                    <span className="hover:text-white transition-colors cursor-default drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">Magia para Bodas</span>
                                    <span className="hover:text-white transition-colors cursor-default drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">Eventos de Empresa</span>
                                    <span className="hover:text-white transition-colors cursor-default drop-shadow-[0_0_8_px_rgba(245,158,11,0.3)]">Ilusionismo de Gala</span>
                                    <span className="hover:text-white transition-colors cursor-default drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">Magia para Cóctel</span>
                                    <span className="hover:text-white transition-colors cursor-default drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">Mago para Congresos</span>
                                    <span className="hover:text-white transition-colors cursor-default drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">Espectáculos VIP Madrid</span>
                                </div>
                            ))}
                        </motion.div>
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-16">
                    <div className="space-y-6">
                        <h2 className="text-white font-[Cinzel] text-xl md:text-2xl uppercase tracking-widest">Información y Preguntas</h2>
                        <p className="text-sm opacity-60 italic">Todo lo que necesitas saber sobre el ilusionismo en Madrid.</p>
                        <div className="pt-8 border-t border-white/5">
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-amber-500 mb-4">Referente de la Magia</p>
                            <p className="text-sm leading-relaxed text-slate-500">Angel Ruiz se ha consolidado como uno de los ilusionistas más solicitados de la capital, fusionando elegancia y modernidad en cada evento.</p>
                        </div>
                    </div>
                    <div className="space-y-6 text-sm">
                        <details className="group border-b border-white/5 pb-4 cursor-pointer">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors py-2 uppercase tracking-widest text-[11px]">
                                ¿Cuál es el impacto de un Mago Profesional?
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-4 text-slate-400 leading-relaxed space-y-4">
                                <p>Contratar un mago en Madrid no es solo añadir un número de entretenimiento; es transformar la atmósfera de un evento. Se crea un vínculo emocional único a través de la magia de cerca.</p>
                                <p>Angel Ruiz combina elegancia clásica con dinamismo moderno, asegurando que los invitados vivan momentos imposibles directamente en sus manos.</p>
                            </div>
                        </details>

                        <details className="group border-b border-white/5 pb-4 cursor-pointer text-slate-400">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors py-2 uppercase tracking-widest text-[11px]">
                                ¿Por qué es clave en las Bodas?
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-4 leading-relaxed space-y-4">
                                <p>En el sector nupcial, la figura del mago para bodas en Madrid se ha vuelto esencial para esos momentos de transición, como el cóctel de bienvenida.</p>
                                <p>Angel actúa con una psicología refinada, detectando los grupos de invitados para romper el hielo a través del asombro compartido sin interrumpir el flujo natural de la celebración.</p>
                            </div>
                        </details>

                        <details className="group border-b border-white/5 pb-4 cursor-pointer text-slate-400">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors py-2 uppercase tracking-widest text-[11px]">
                                ¿Cómo ayuda a las Empresas?
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-4 leading-relaxed space-y-4">
                                <p>Como mago para empresas en Madrid, Angel Ruiz entiende que cada marca tiene un mensaje. Sus presentaciones integran valores, logos o productos en las ilusiones.</p>
                                <p>Es una potente herramienta de marketing experiencial que deja una huella imborrable en clientes y empleados durante cenas de gala o cenas de networking.</p>
                            </div>
                        </details>

                        <details className="group border-b border-white/5 pb-4 cursor-pointer text-slate-400">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors py-2 uppercase tracking-widest text-[11px]">
                                Detalles sobre Trayectoria e Innovación
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-4 leading-relaxed space-y-4">
                                <p>Con más de una década de experiencia en los escenarios más prestigiosos de la capital, Angel combina mentalismo psicológico, cartomagia e hipnosis ligera.</p>
                                <p>Este abanico de habilidades le permite adaptarse a cualquier perfil de público, ofreciendo una imagen premium y fresca acorde con los eventos más exigentes.</p>
                            </div>
                        </details>

                        <details className="group border-b border-white/5 pb-4 cursor-pointer text-slate-400">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors py-2 uppercase tracking-widest text-[11px]">
                                Consejos Técnicos para tu Evento
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-4 leading-relaxed space-y-4">
                                <p>Organizar un espectáculo requiere planificación. Angel asesora personalmente sobre el mejor momento para la magia (cóctel, entre platos o show central).</p>
                                <p>Se buscan las condiciones ideales de luz y sonido para que el impacto sea máximo, aprovechando las sedes increíbles que ofrece Madrid.</p>
                            </div>
                        </details>

                        <details className="group border-b border-white/5 pb-4 cursor-pointer text-slate-400">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors py-2 uppercase tracking-widest text-[11px]">
                                Reservas y Desplazamientos
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-4 leading-relaxed space-y-4">
                                <p>Se recomienda reservar con 3 a 6 meses de antelación. Angel se desplaza por toda la Comunidad de Madrid y provincias limítrofes.</p>
                                <p>Para eventos nacionales e internacionales, consultar condiciones específicas de contratación y logística.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function App() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "EntertainmentBusiness",
        "name": "Angel Ruiz Ilusionista",
        "url": "https://angelruiz.world",
        "image": "https://angelruiz.world/images/foto-bio.png",
        "description": "Ilusionista profesional especializado en Magia de Cerca y Magia de Cóctel para eventos corporativos, bodas y fiestas VIP.",
        "telephone": "+34648055636",
        "email": "angellruuiz@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "ES"
        },
        "sameAs": [
            "https://instagram.com/angellruuiz",
            "https://tiktok.com/@angellruuiz",
            "https://x.com/angellruuizz",
            "https://facebook.com/angellruuiz"
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.4168",
            "longitude": "-3.7038"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Magia",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Magia para Bodas",
                        "description": "Magia itinerante para el cóctel y banquete de bodas."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Eventos Corporativos",
                        "description": "Dinamización de cenas de empresa y eventos de marca."
                    }
                }
            ]
        }
    };

    return (
        <div className="bg-slate-950 min-h-screen text-slate-200">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <MagicCursor />
            <ParticleBackground />
            
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main>
                <Hero onOpenModal={() => setIsContactOpen(true)} />
                <SEOContent />
            </main>

            <Footer onOpenContact={() => setIsContactOpen(true)} />

            <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </div>
    );
}
