"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';

const MagicalCarousel = () => {
    const images = ["/images/foto-bio.png", "/images/foto-spring-cartas.png"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => { 
            setIndex((prev) => (prev + 1) % images.length); 
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1, filter: "brightness(1.1)" }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={images[index]}
                        alt="Angel Ruiz Mago profesional en Torrelodones"
                        fill
                        className="object-cover object-[center_10%] rounded-3xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 property-60 to-transparent pointer-events-none rounded-3xl" />
        </div>
    );
};

export default function MagoTorrelodonesPage() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Angel Ruiz Ilusionista - Mago en Torrelodones",
        "image": "https://angelruiz.world/images/foto-bio.png",
        "url": "https://angelruiz.world/mago-torrelodones",
        "telephone": "+34648055636",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Torrelodones",
            "addressLocality": "Torrelodones",
            "addressRegion": "Madrid",
            "postalCode": "28250",
            "addressCountry": "ES"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.5765",
            "longitude": "-3.9294"
        },
        "description": "Mago profesional en Torrelodones especializado en magia de cerca para bodas, eventos corporativos y fiestas privadas en la zona noroeste de Madrid."
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} 
            />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-24 pb-16 px-6 max-w-6xl mx-auto">
                    <section className="mb-16">
                        <div className="max-w-3xl">
                            <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Ilusionismo de Proximidad en la Sierra
                            </p>
                            <h1 className="text-4xl md:text-6xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight">
                                Mago en Torrelodones
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 font-medium italic">
                                Magia de cerca exclusiva para bodas, eventos y empresas.
                            </p>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
                        <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                            <h2 className="text-2xl font-[Cinzel] text-amber-500 font-bold mb-4">Experiencia Local en el Noroeste</h2>
                            <p>
                                Angel Ruiz es el <strong>mago en Torrelodones</strong> de referencia para eventos que buscan distinción. Como vecino del municipio, ofrece una disponibilidad y cercanía únicas, conociendo a la perfección los espacios locales. Su especialidad es la magia de cerca, donde lo imposible ocurre a centímetros de los ojos de tus invitados, creando una atmósfera eléctrica en cada mesa o rincón de tu celebración.
                            </p>
                            <p>
                                Trabajar localmente permite una coordinación directa, eliminando barreras logísticas de grandes desplazamientos. Angel fusiona técnica clásica con un estilo moderno y dinámico, asegurando que tu evento cuente con un profesional de confianza recomendado por los propios vecinos de la zona noroeste. Es la seguridad de contar con un ilusionista de primer nivel que vive y trabaja en tu propia comunidad.
                            </p>
                        </div>
                        <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                            <MagicalCarousel />
                        </div>
                    </section>

                    <section className="mb-16 space-y-8">
                        <h2 className="text-3xl font-[Cinzel] text-white text-center mb-10 border-b border-white/10 pb-4">Servicios en Torrelodones</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-colors">
                                <h3 className="text-xl font-bold text-amber-400 mb-4 font-[Cinzel]">Magia para Bodas</h3>
                                <p className="text-slate-400 text-justify text-xs leading-relaxed">
                                    Angel dinamiza el cóctel de bienvenida rompiendo el hielo entre invitados con efectos imposibles. Como experto local, se integra perfectamente en las fincas de Torrelodones, garantizando que tu boda sea recordada por su originalidad.
                                </p>
                            </div>

                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-colors">
                                <h3 className="text-xl font-bold text-amber-400 mb-4 font-[Cinzel]">Mago para Empresas</h3>
                                <p className="text-slate-400 text-justify text-xs leading-relaxed">
                                    Servicio de magia corporativa sofisticado para el eje de la A-6. Ideal para cenas de gala y team building en Torrelodones y Las Rozas, asociando tu marca con éxito e innovación mediante un ilusionismo moderno y profesional.
                                </p>
                            </div>

                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-colors">
                                <h3 className="text-xl font-bold text-amber-400 mb-4 font-[Cinzel]">Fiestas Privadas</h3>
                                <p className="text-slate-400 text-justify text-xs leading-relaxed">
                                    Transforma un cumpleaños o reunión de amigos en una tarde legendaria. Angel adapta su repertorio de mentalismo y cartomagia para grupos reducidos en Torrelodones, ofreciendo un trato directo, cercano y muy personal.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-slate-900/40 p-8 rounded-2xl border border-white/5 mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-[Cinzel] text-white font-bold">Cobertura Sierra</h2>
                                <p className="text-slate-400 text-justify text-sm leading-relaxed">
                                    Angel Ruiz ofrece cobertura integral en <strong>Torrelodones, Las Rozas, Majadahonda y Galapagar</strong>, sin los retrasos de Madrid centro. Su presencia es constante en El Escorial y zonas cercanas como Collado Villalba y Hoyo de Manzanares.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-[Cinzel] text-white font-bold">Ventaja Local</h2>
                                <p className="text-slate-400 text-justify text-sm leading-relaxed">
                                    Contratar un mago local asegura coordinación técnica impecable con restaurantes de la zona y ausencia de altos costes de desplazamiento. Es trato directo artista-cliente para una respuesta rápida y personalizada.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="text-center py-16 bg-slate-900/30 rounded-[3rem] border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                        <div className="relative z-10 max-w-2xl mx-auto px-6">
                            <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white mb-6 font-bold">¿Hablamos?</h2>
                            <p className="text-base text-slate-300 mb-8 leading-relaxed">
                                Estoy a un paso de ti. Contacta conmigo para diseñar una experiencia mágica a medida de tu evento en Torrelodones. ¡Sorprendamos juntos a tus invitados!
                            </p>
                            <div className="flex justify-center">
                                <ContactButtonClient label="Contratar Mago" />
                            </div>
                        </div>
                    </section>
                </main>
            </NavFooterClient>
        </>
    );
}
