"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Link from 'next/link';

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
                        alt="Angel Ruiz Mago profesional"
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

export default function LocationPageTemplate({ location, allLocations }) {
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Ángel Ruiz | Mago en ${location.name}`,
        "image": "https://angelruiz.world/images/foto-bio.png",
        "url": `https://angelruiz.world/mago-${location.slug}`,
        "telephone": "+34648055636",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": location.name,
            "addressLocality": location.name,
            "addressRegion": "Madrid",
            "postalCode": location.zip,
            "addressCountry": "ES"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": location.lat,
            "longitude": location.lng
        },
        "description": location.description
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": `¿Ofreces servicios de mago en ${location.name} a domicilio?`, "acceptedAnswer": { "@type": "Answer", "text": `Sí, como mago profesional en ${location.name}, me desplazo a domicilios particulares para cumpleaños, cenas privadas y celebraciones familiares en zonas como ${location.neighborhoods}.` } },
            { "@type": "Question", "name": "¿En qué tipo de eventos trabajas?", "acceptedAnswer": { "@type": "Answer", "text": "Estoy especializado en magia de cerca para bodas, eventos corporativos y celebraciones exclusivas, adaptando mi repertorio a cada tipo de público y espacio." } },
            { "@type": "Question", "name": "¿Con cuánta antelación debo reservar?", "acceptedAnswer": { "@type": "Answer", "text": `Para eventos en ${location.name} y la zona noroeste, recomiendo reservar con al menos 2-4 semanas de antelación para garantizar disponibilidad en la fecha deseada.` } }
        ]
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} 
            />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
            />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-24 pb-16 px-6 max-w-6xl mx-auto">
                    <section className="mb-16">
                        <div className="max-w-3xl">
                            <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Ilusionismo de Proximidad en {location.name}
                            </p>
                            <h1 className="text-4xl md:text-6xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight">
                                {location.title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 font-medium italic">
                                Magia de cerca exclusiva para bodas, eventos y empresas.
                            </p>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
                        <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                            <h2 className="text-2xl font-[Cinzel] text-amber-500 font-bold mb-4">Magia Profesional en tu Ciudad</h2>
                            <p>
                                Angel Ruiz es el <strong>ilusionista en {location.name}</strong> que transformará tu próximo evento en algo inolvidable. Especializado en la magia de cerca más sofisticada, ofrece un espectáculo donde lo imposible sucede a escasos centímetros de los espectadores, ideal para romper el hielo y crear conexiones reales entre tus invitados.
                            </p>
                            <p>
                                Con una amplia trayectoria en la zona noroeste de Madrid, Angel conoce los mejores espacios de <strong>{location.name}</strong> y ofrece una logística impecable. Su estilo combina la elegancia del ilusionismo clásico con un ritmo moderno y participativo, asegurando el éxito en cenas de empresa, cócteles de boda o fiestas privadas de alta gama.
                            </p>
                        </div>
                        <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                            <MagicalCarousel />
                        </div>
                    </section>

                    <section className="mb-16 space-y-8">
                        <h2 className="text-3xl font-[Cinzel] text-white text-center mb-10 border-b border-white/10 pb-4">Servicios en {location.name}</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-colors">
                                <h3 className="text-xl font-bold text-amber-400 mb-4 font-[Cinzel]">Magia para Bodas</h3>
                                <p className="text-slate-400 text-justify text-xs leading-relaxed">
                                    Dinamizo el cóctel o el banquete en las fincas más exclusivas de la zona. Como experto en bodas, garantizo un entretenimiento elegante que integra a todos los invitados a través del asombro compartido.
                                </p>
                            </div>

                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-colors">
                                <h3 className="text-xl font-bold text-amber-400 mb-4 font-[Cinzel]">Eventos Corporativos</h3>
                                <p className="text-slate-400 text-justify text-xs leading-relaxed">
                                    Ilusionismo estratégico para empresas en {location.name}. Ideal para cenas de gala, team building y lanzamientos de producto, asociando tu marca con la innovación y el impacto positivo.
                                </p>
                            </div>

                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-colors">
                                <h3 className="text-xl font-bold text-amber-400 mb-4 font-[Cinzel]">Celebraciones VIP</h3>
                                <p className="text-slate-400 text-justify text-xs leading-relaxed">
                                    Lleva la magia de primer nivel directamente a tu casa o local privado en {location.name}. Un show participativo y personalizado que dejará a tus amigos y familiares sin palabras.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-slate-900/40 p-8 rounded-2xl border border-white/5 mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-[Cinzel] text-white font-bold">Otras Zonas de Actuación</h2>
                                <p className="text-slate-400 text-justify text-sm leading-relaxed">
                                    Además de {location.name}, Angel Ruiz ofrece cobertura total en toda la zona noroeste, incluyendo:
                                </p>
                                <div className="flex flex-wrap gap-2 text-xs">
                                    {allLocations.filter(l => l.slug !== location.slug).map(l => (
                                        <Link key={l.slug} href={`/mago-${l.slug}`} className="text-amber-500 hover:text-white transition-colors">
                                            {l.name}
                                        </Link>
                                    ))}
                                    <Link href="/mago-torrelodones" className="text-amber-500 hover:text-white transition-colors">
                                        Torrelodones
                                    </Link>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-[Cinzel] text-white font-bold">Ventaja Local</h2>
                                <p className="text-slate-400 text-justify text-sm leading-relaxed">
                                    Al contratar a un mago con presencia constante en la zona, aseguras una logística ágil y un conocimiento profundo de los mejores proveedores y locales para eventos de Madrid Norte.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="border-t border-white/5 pt-16 mb-16">
                        <h2 className="text-2xl font-[Cinzel] text-white mb-12 text-center uppercase tracking-widest">Preguntas Frecuentes ({location.name})</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {faqSchema.mainEntity.map((faq, index) => (
                                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <h3 className="text-amber-400 font-bold mb-3 text-sm">{faq.name}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed text-justify">{faq.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="text-center py-16 bg-slate-900/30 rounded-[3rem] border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                        <div className="relative z-10 max-w-2xl mx-auto px-6">
                            <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white mb-6 font-bold">¿Organizas algo en {location.name}?</h2>
                            <p className="text-base text-slate-300 mb-8 leading-relaxed">
                                No dejes el asombro al azar. Contacta conmigo para diseñar una experiencia mágica única en tu localidad.
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
