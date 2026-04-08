"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';

const MagicalCarousel = () => {
    const images = ["/images/foto-bio.png", "/images/foto-bio-2.png"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => { 
            setIndex((prev) => (prev + 1) % images.length); 
        }, 5000);
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
                        className="object-cover rounded-3xl"
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

                <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
                    <section className="mb-24">
                        <div className="max-w-4xl">
                            <p className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4 drop-shadow-md">
                                Ilusionismo de Proximidad en la Sierra
                            </p>
                            <h1 className="text-5xl md:text-8xl font-[Cinzel] text-white mb-8 border-b-2 border-amber-500 pb-4 font-bold leading-tight">
                                Mago en Torrelodones: Angel Ruiz
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 font-medium italic underline decoration-amber-500/30">
                                La magia de cerca más exclusiva para tus bodas, eventos privados y convenciones de empresa en la zona noroeste de Madrid.
                            </p>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
                        <div className="space-y-8 text-white text-lg leading-relaxed text-justify">
                            <h2 className="text-3xl font-[Cinzel] text-amber-500 font-bold mb-6">Tu Ilusionista de Confianza en el Noroeste</h2>
                            <p>
                                Angel Ruiz se ha convertido en el ilusionista de referencia para quienes buscan un <strong>mago en Torrelodones</strong> que aporte ese toque de distinción y asombro real. Al ser vecino del municipio, Angel no solo conoce a la perfección el entorno, sino que vive y respira el ambiente de la zona noroeste, lo que le permite ofrecer una disponibilidad y cercanía que otros artistas no pueden igualar. Su especialización en la magia de cerca y de cóctel lo sitúa como la opción ideal para eventos donde la elegancia y la interacción directa son primordiales. No se trata simplemente de realizar trucos, sino de crear una atmósfera eléctrica donde el asombro ocurre literalmente a escasos centímetros de los ojos de los asistentes.
                            </p>
                            <p>
                                Al trabajar localmente, Angel puede coordinar cada detalle de forma directa, eliminando las barreras logísticas de los grandes desplazamientos y asegurando que la magia llegue a tiempo y con la máxima energía a cada rincón de nuestro pueblo. Es el mago que tus amigos y vecinos ya recomiendan por su profesionalismo y ese estilo moderno que fusiona la técnica clásica con un enfoque joven y dinámico. La cercanía geográfica se traduce en una flexibilidad única, permitiendo reuniones previas presenciales para que cada detalle del show encaje perfectamente con la visión del organizador.
                            </p>
                        </div>
                        <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                            <MagicalCarousel />
                        </div>
                    </section>               </section>

                    <section className="mb-24 space-y-12">
                        <h2 className="text-4xl font-[Cinzel] text-white text-center mb-16 border-b border-white/10 pb-6">Servicios de Magia en Torrelodones</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
                                <h3 className="text-2xl font-bold text-amber-400 mb-6 font-[Cinzel]">Mago para bodas en Torrelodones</h3>
                                <p className="text-slate-300 text-justify text-base">
                                    El cóctel de bienvenida es el momento crítico donde se define la energía de una boda. Como experto en ilusionismo nupcial local, Angel se encarga de romper el hielo entre tus invitados mientras recorre los grupos con efectos imposibles. Al conocer de primera mano las fincas y espacios de celebración más emblemáticos de Torrelodones y sus alrededores, la integración del show es total, aportando un valor añadido que tus familiares y amigos recordarán durante años como el momento más impactante del enlace.
                                </p>
                            </div>

                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
                                <h3 className="text-2xl font-bold text-amber-400 mb-6 font-[Cinzel]">Mago para eventos de empresa noroeste</h3>
                                <p className="text-slate-300 text-justify text-base">
                                    Las empresas situadas en el eje de la A-6 buscan experiencias que refuercen su imagen de marca sin complicaciones logísticas. Angel Ruiz ofrece un servicio de magia corporativa sofisticado, ideal para cenas de gala, ferias y sesiones de team building en la zona noroeste de Madrid. Su capacidad para conectar con clientes de alto perfil y equipos directivos lo convierte en un aliado estratégico para cualquier convención, garantizando que el mensaje de vuestra compañía se asocie con sensaciones de éxito e innovación.
                                </p>
                            </div>

                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors">
                                <h3 className="text-2xl font-bold text-amber-400 mb-6 font-[Cinzel]">Magia para celebraciones y fiestas</h3>
                                <p className="text-slate-300 text-justify text-base">
                                    Contar con un <strong>mago en Torrelodones</strong> de confianza marca la diferencia entre una reunión común y una tarde legendaria. Angel adapta su repertorio de mentalismo y cartomagia de salón para que todos los presentes, independientemente de su edad, participen activamente del misterio. Al ser un servicio directo y de proximidad, el trato es mucho más personalizado, permitiendo diseñar momentos mágicos específicos para el protagonista del evento en la comodidad de su propia casa o local privado.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-amber-500/5 p-12 rounded-3xl border border-amber-500/20 mb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-[Cinzel] text-white font-bold">Cobertura en la Sierra Madrileña</h2>
                                <p className="text-slate-300 text-justify leading-relaxed">
                                    Aunque el epicentro de su actividad se encuentra en <strong>Torrelodones</strong>, el servicio de Angel Ruiz se extiende con naturalidad por toda la <strong>zona noroeste de Madrid</strong>, ofreciendo una cobertura integral sin las demoras habituales de Madrid centro. Es habitual verle actuar en localidades vecinas como <strong>Las Rozas y Majadahonda</strong>, donde el perfil de los eventos demanda una magia de alta calidad y elegancia. Asimismo, mantiene una presencia constante en <strong>Galapagar y Colmenarejo</strong>, así como en los entornos históricos de <strong>El Escorial</strong>, donde el ilusionismo encaja perfectamente con el ambiente señorial que desprenden sus fincas.
                                </p>
                                <p className="text-slate-300 text-justify leading-relaxed">
                                    La disponibilidad se amplía también a <strong>Collado Villalba, Hoyo de Manzanares y Alpedrete</strong>, cubriendo todo el corredor de la sierra. Gracias a esta proximidad geográfica, Angel puede atender solicitudes en <strong>Villanueva de la Cañada, Cercedilla y Los Molinos</strong> con gran flexibilidad horaria, asegurando que cualquier rincón de nuestra comarca pueda disfrutar de un ilusionismo moderno, cercano y sin sorpresas logísticas de larga distancia. Contar con un artista de esta zona garantiza un compromiso mayor con el éxito del evento local.
                                </p>
                            </div>
                            <div className="space-y-8">
                                <h2 className="text-3xl font-[Cinzel] text-white font-bold">Por qué elegir a un Mago Local</h2>
                                <p className="text-slate-300 text-justify leading-relaxed">
                                    La principal ventaja de contar con **Angel Ruiz como tu mago en Torrelodones** es la confianza que otorga trabajar con alguien que realmente conoce el terreno. Al residir en la zona, Angel tiene una relación directa con los gerentes de los mejores restaurantes y fincas locales, facilitando una coordinación técnica impecable que ahorra tiempo y preocupaciones a los organizadores. La ausencia de costes de desplazamiento elevados permite invertir el presupuesto 100% en la calidad artística de la actuación, lo que redunda en un show mucho más potente y cuidado.
                                </p>
                                <p className="text-slate-300 text-justify leading-relaxed">
                                    Además, el trato de tú a tú, sin agencias intermediarias de por medio, asegura que cada detalle sea discutido directamente con el artista. Esta cercanía no solo se traduce en una respuesta más rápida ante cualquier duda o cambio de última hora, sino en una implicación personal mucho más profunda con el éxito de cada celebración que se lleva a cabo en nuestra comunidad. Es el valor de la seguridad local combinado con la excelencia de un ilusionismo de primer nivel internacional que no necesita viajar desde lejos.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="text-center py-24 bg-slate-900/50 rounded-[4rem] border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                        <div className="relative z-10 max-w-3xl mx-auto px-6">
                            <h2 className="text-4xl md:text-6xl font-[Cinzel] text-white mb-8 font-bold">¿Hacemos que lo imposible ocurra en Torrelodones?</h2>
                            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                                Si quieres que tu próximo evento sea verdaderamente inolvidable, no busques más. Estoy a un paso de ti y listo para diseñar una experiencia mágica a medida de tus necesidades. Contacta conmigo hoy mismo para consultar disponibilidad y hablemos de cómo podemos dejar a tus invitados con la boca abierta. La magia de calidad empieza con una conversación cercana. ¡Escríbeme y hagamos que lo imposible ocurra en tu celebración!
                            </p>
                            <div className="flex justify-center scale-125">
                                <ContactButtonClient label="Contratar Mago en Torrelodones" />
                            </div>
                        </div>
                    </section>
                </main>
            </NavFooterClient>
        </>
    );
}
