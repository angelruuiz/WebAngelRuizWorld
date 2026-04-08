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





const SEOContent = () => {
    return (
        <section className="py-24 px-6 bg-slate-950 text-slate-400 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto relative">
                <h2 className="text-white font-[Cinzel] text-3xl md:text-4xl mb-12 uppercase tracking-widest text-center">Referente de la Magia en Madrid</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-base leading-relaxed text-slate-400/80">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-amber-500 font-[Cinzel] text-xl mb-4 uppercase">El impacto de un Mago Profesional</h3>
                            <p>Contratar un <strong className="text-amber-500/80">mago en Madrid</strong> no es solo añadir un número de entretenimiento; es transformar la atmósfera de un evento. Angel Ruiz se ha consolidado como uno de los ilusionistas más solicitados para celebraciones exclusivas, gracias a una propuesta que fusiona la elegancia clásica con el dinamismo de la magia moderna. Su enfoque se centra en la <Link href="/particulares" className="text-amber-400 hover:underline font-bold">magia de cerca (close-up)</Link>, donde los imposibles ocurren a centímetros de los ojos de los asistentes, creando un vínculo emocional único.</p>
                        </div>

                        <div>
                            <h3 className="text-amber-500 font-[Cinzel] text-xl mb-4 uppercase">Especialista en Bodas Inolvidables</h3>
                            <p>En el sector nupcial, la figura del <Link href="/particulares/bodas" className="text-amber-400 hover:underline font-bold">mago para bodas en Madrid</Link> se ha vuelto esencial para esos momentos de transición, como el cóctel de bienvenida. Angel actúa con una psicología refinada, detectando los grupos de invitados que aún no se conocen para romper el hielo a través del asombro compartido. Su magia no interrumpe; fluye con el evento, asegurando que el ritmo nunca decaiga mientras los novios realizan su reportaje fotográfico o circulan entre las mesas durante el banquete.</p>
                        </div>

                        <div>
                            <h3 className="text-amber-500 font-[Cinzel] text-xl mb-4 uppercase">Magia para Empresas y Branding</h3>
                            <p>Como <Link href="/empresas" className="text-amber-400 hover:underline font-bold">mago para empresas en Madrid</Link>, Angel Ruiz entiende que cada marca tiene un mensaje. Sus presentaciones corporativas están diseñadas para integrar valores, logotipos o productos en las ilusiones, convirtiendo un simple aperitivo de networking o una cena de gala en una potente herramienta de marketing experiencial. Multinacionales y pymes confían en su profesionalidad para dejar una huella imborrable en sus clientes y empleados.</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-amber-500 font-[Cinzel] text-xl mb-4 uppercase">Trayectoria e Innovación</h3>
                            <p>Con más de una década de experiencia y habiendo pasado por los escenarios más prestigiosos de la capital española, Angel Ruiz combina técnicas de <strong className="text-amber-500/80">mentalismo psicológico</strong>, cartomagia de alto nivel e hipnosis ligera. Este abanico de habilidades le permite adaptarse a cualquier perfil de público. Si quieres conocer más sobre su evolución artística, puedes <Link href="/sobre-mi" className="text-amber-400 hover:underline font-bold">consultar su biografía completa</Link>.</p>
                        </div>

                        <div>
                            <h3 className="text-amber-500 font-[Cinzel] text-xl mb-4 uppercase">¿Por qué elegir a Angel Ruiz?</h3>
                            <p>La diferencia reside en los detalles. No se trata solo de trucos, sino de la experiencia completa. Las <Link href="/valoraciones" className="text-amber-400 hover:underline font-bold">opiniones de otros clientes</Link> avalan un servicio de cinco estrellas que prioriza la calidad. En un mercado saturado, Angel destaca por un estilo fresco, lejos de los clichés caducos, ofreciendo una imagen premium acorde con los eventos más exigentes.</p>
                        </div>

                        <div>
                            <h3 className="text-amber-500 font-[Cinzel] text-xl mb-4 uppercase">Consejos para tu Evento Mágico</h3>
                            <p>Organizar un espectáculo requiere planificación. Angel asesora personalmente a cada cliente sobre el mejor momento para la magia (cóctel, entre platos o show central) y las condiciones ideales de luz y sonido para que el impacto sea máximo. Madrid ofrece sedes increíbles, desde fincas rústicas hasta hoteles de lujo en la Gran Vía, y Angel tiene la versatilidad de brillar en cada una de ellas, llevando su maleta de misterios a donde sea que se celebre lo imposible.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-12 border-t border-white/5">
                    <p className="text-center font-bold text-amber-500/60 uppercase tracking-[0.4em] text-[10px] mb-8">Especialidades de Ilusionismo Premium</p>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] uppercase tracking-[0.2em] font-light opacity-40">
                        <span className="hover:opacity-100 transition-opacity">Mago de Cerca Madrid</span>
                        <span className="hover:opacity-100 transition-opacity">Mentalismo Profesional</span>
                        <span className="hover:opacity-100 transition-opacity">Magia para Bodas</span>
                        <span className="hover:opacity-100 transition-opacity">Eventos de Empresa</span>
                        <span className="hover:opacity-100 transition-opacity">Ilusionismo de Gala</span>
                        <span className="hover:opacity-100 transition-opacity">Magia para Cóctel</span>
                        <span className="hover:opacity-100 transition-opacity">Mago para Congresos</span>
                        <span className="hover:opacity-100 transition-opacity">Espectáculos VIP Madrid</span>
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-16">
                    <div className="space-y-6">
                        <h3 className="text-white font-[Cinzel] text-xl uppercase tracking-widest">Preguntas Frecuentes</h3>
                        <p className="text-sm opacity-60 italic">Resolviendo tus dudas para un evento perfecto en Madrid.</p>
                    </div>
                    <div className="space-y-8 text-sm">
                        <details className="group border-b border-white/5 pb-4 cursor-pointer">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors">
                                ¿Con cuánta antelación debo reservar?
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <p className="mt-4 text-slate-400 leading-relaxed">Para asegurar disponibilidad, especialmente en temporadas de bodas (mayo-octubre) y eventos de empresa (diciembre), se recomienda contactar con al menos 3 a 6 meses de antelación. No obstante, consulta tu fecha aunque sea de última hora por si hubiera un hueco en la agenda.</p>
                        </details>
                        <details className="group border-b border-white/5 pb-4 cursor-pointer">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors">
                                ¿Qué duración tienen las actuaciones?
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <p className="mt-4 text-slate-400 leading-relaxed">La magia de cóctel suele durar entre 1 y 2 horas, dependiendo del número de invitados. Los shows de salón o escenario tienen una duración aproximada de 45 a 60 minutos. Cada servicio es adaptable según las necesidades del guion de tu evento.</p>
                        </details>
                        <details className="group border-b border-white/5 pb-4 cursor-pointer">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors">
                                ¿Te desplazas fuera de Madrid capital?
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <p className="mt-4 text-slate-400 leading-relaxed">Sí, realizo espectáculos de magia en todas las localidades de la Comunidad de Madrid y provincias limítrofes como Segovia, Toledo o Guadalajara. Para eventos nacionales a gran escala, consultad condiciones de desplazamiento.</p>
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
