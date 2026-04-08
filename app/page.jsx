"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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
        <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
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
        <section className="py-12 bg-slate-950/80 border-y border-white/5 overflow-hidden relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-xs font-bold tracking-[0.3em] text-amber-500 uppercase mb-10 font-[Cinzel]">Empresas que han vivido la experiencia</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {brands.map((brand, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 flex flex-col items-center">
                            <Image src={brand.logo} alt={brand.name} width={120} height={48} className="h-12 md:h-16 w-auto object-contain drop-shadow-lg" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};



const ServiceCard = ({ title, shortDesc, icon: Icon, delay, bgClass, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={onClick} className="relative group h-[400px] w-full cursor-pointer flex flex-col">
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
            <div className="text-center mb-12"><h2 className="text-3xl md:text-5xl font-[Cinzel] text-white">El Arte de lo Imposible</h2></div>
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

const Reviews = () => {
    const [selectedReview, setSelectedReview] = useState(null);
    const reviewsData = [
        { text: "Contratamos a Ángel para dirigir un taller de magia para nuestro campus y la experiencia superó todas las expectativas.", author: "Movistar Estudiantes" },
        { text: "Contratamos a Ángel para nuestra boda y fue la clave para que el cóctel fuera espectacular. La magia de cerca que hace es de otro nivel.", author: "Sofía y David" },
        { text: "Ángel transformó la comunión de nuestro sobrino en algo verdaderamente excepcional.", author: "Comunión de Marcos" },
        { text: "Ángel fue el que inauguró nuestra peña, ¡y lo hizo a lo grande! Nos dejó a todos clavados en el asiento.", author: "Peña 'La Escombrera' (Torrelodones)" },
        { text: "Un espectáculo de magia de salón impecable para la fiesta de cumpleaños.", author: "Ana P. (Fiesta Privada)" },
        { text: "Una experiencia absolutamente mágica. Hizo que nuestra cena de empresa se convirtiera en un evento único.", author: "Carlos M. (Cena de Empresa)" }
    ];
    const ParallaxReview = ({ children, baseVelocity = 5 }) => {
        const baseX = useMotionValue(0);
        const { scrollY } = useScroll();
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
        const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
        const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
        const directionFactor = useRef(1);
        useAnimationFrame((t, delta) => {
            let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
            if (velocityFactor.get() < 0) directionFactor.current = -1; else if (velocityFactor.get() > 0) directionFactor.current = 1;
            moveBy += directionFactor.current * moveBy * velocityFactor.get();
            baseX.set(baseX.get() + moveBy);
        });
        return (<div className="flex flex-nowrap gap-8 overflow-hidden py-10"><motion.div style={{ x }} className="flex flex-nowrap gap-8">{children}{children}{children}{children}</motion.div></div>);
    };
    return (
        <section id="reviews" className={`py-16 relative overflow-hidden bg-slate-950/50 ${selectedReview ? 'z-50' : 'z-10'}`}>
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-4 flex items-center justify-center gap-3"><span className="w-8 h-[1px] bg-amber-500"></span> LA VOZ DE NUESTROS CLIENTES <span className="w-8 h-[1px] bg-amber-500"></span></h2>
                <h3 className="text-2xl md:text-4xl font-[Cinzel] text-white">La mejor prueba de un evento inolvidable.</h3>
                <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-sm font-light">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>Haz click en una reseña para leerla completa</span>
                </div>
            </div>
            <ParallaxReview baseVelocity={-1}>
                {reviewsData.map((review, index) => (
                    <motion.div key={index} className="w-[85vw] md:w-[450px] flex-shrink-0 bg-slate-900/40 border border-slate-800 backdrop-blur-md p-8 rounded-xl relative group hover:border-amber-500/30 transition-colors cursor-pointer" whileHover={{ scale: 1.02, y: -5 }} onClick={() => setSelectedReview(review)}>
                        <Quote className="w-8 h-8 text-amber-500/20 absolute top-6 right-6" />
                        <div className="mb-4"><div className="flex gap-1 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />))}</div></div>
                        <p className="text-slate-300 font-light italic mb-6 leading-relaxed line-clamp-4">"{review.text}"</p>
                        <div className="flex items-center gap-3 mt-auto"><div className="w-8 h-[1px] bg-amber-500/50" /><p className="text-white font-[Cinzel] text-sm font-bold uppercase">{review.author}</p></div>
                    </motion.div>
                ))}
            </ParallaxReview>
            <MagicModal isOpen={!!selectedReview} onClose={() => setSelectedReview(null)}>
                {selectedReview && (
                    <div className="p-8 md:p-14 text-center">
                        <Quote className="w-10 h-10 md:w-12 md:h-12 text-amber-500/40 mx-auto mb-4" />
                        <p className="text-lg md:text-2xl font-light italic text-slate-200 leading-relaxed mb-6">"{selectedReview.text}"</p>
                        <div className="w-16 h-[2px] bg-amber-500/50 mx-auto mb-6" />
                        <div className="flex flex-col items-center gap-2"><div className="flex gap-1 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />))}</div><h4 className="text-white font-[Cinzel] text-base font-bold uppercase">{selectedReview.author}</h4></div>
                        <button onClick={() => setSelectedReview(null)} className="w-full mt-10 py-3 bg-slate-900 border border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-all uppercase tracking-[0.2em] font-bold text-xs rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.1)]">Cerrar Reseña</button>
                    </div>
                )}
            </MagicModal>
        </section>
    );
};

const EmotionalSection = () => {
    return (
        <section className="py-24 relative z-10 overflow-hidden flex items-center justify-center min-h-[50vh]">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-80">
                    <source src="/cambio-carta.mp4" type="video/mp4" />
                    <div className="w-full h-full bg-slate-950"></div>
                </video>
                <div className="absolute inset-0 bg-slate-950/50" />
            </div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: "-20%" }} transition={{ duration: 1 }}>
                    <p className="text-xl md:text-4xl font-[Cinzel] text-slate-200 leading-tight mb-8 drop-shadow-lg">"La gente olvidará lo que dijiste, olvidará lo que hiciste, pero <span className="text-amber-400">nunca olvidará cómo les hiciste sentir</span>."</p>
                    <p className="text-slate-500 uppercase tracking-widest text-xs md:text-sm">— Angel Ruiz</p>
                </motion.div>
            </div>
        </section>
    );
};

export default function App() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    
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
                <TrustedBrands />
                <Services selectedService={selectedService} setSelectedService={setSelectedService} disabled={isChatOpen} />
                <Reviews />
                <EmotionalSection />
            </main>

            <Footer onOpenContact={() => setIsContactOpen(true)} />

            <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            
            <Chatbot hidden={!!selectedService || isContactOpen} isOpenExternal={isChatOpen} setIsOpenExternal={setIsChatOpen} />
        </div>
    );
}
