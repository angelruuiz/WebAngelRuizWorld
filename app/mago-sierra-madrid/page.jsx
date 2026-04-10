"use client";
import { locations } from '@/lib/locations';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MagoSierraMadridHub() {
    // Combinamos las localizaciones de lib con Torrelodones para el grid
    const torrelodones = {
        slug: 'torrelodones',
        name: 'Torrelodones',
        description: 'Mago profesional en Torrelodones especializado en magia de cerca para bodas, eventos corporativos y fiestas privadas en la zona noroeste de Madrid.',
        title: 'Mago en Torrelodones'
    };

    const allSierraLocations = [torrelodones, ...locations];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mago en la Sierra de Madrid",
        "provider": {
            "@type": "Person",
            "name": "Angel Ruiz"
        },
        "areaServed": allSierraLocations.map(l => ({ "@type": "City", "name": l.name })),
        "description": "Mago profesional en la sierra de Madrid y zona noroeste. Ilusionismo exclusivo para bodas y eventos.",
        "telephone": "+34648055636",
        "url": "https://angelruiz.world/mago-sierra-madrid"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Mago Sierra Madrid", "item": "https://angelruiz.world/mago-sierra-madrid" }
        ]
    };

    const faqs = [
        { q: "¿Te desplazas a fincas de la sierra de Madrid?", a: "Sí, es mi especialidad. Me desplazo a cualquier finca, restaurante o domicilio particular en toda la Sierra de Guadarrama para ofrecer mis servicios de magia de cerca." },
        { q: "¿Cubres eventos en El Escorial y Collado Villalba?", a: "Sí, ofrezco cobertura total en Collado Villalba, El Escorial y San Lorenzo, garantizando puntualidad y proximidad." },
        { q: "¿Hay coste adicional por desplazamiento en la zona noroeste?", a: "No, al ser un mago local residente en la zona, el desplazamiento está incluido en el presupuesto para los municipios del noroeste y la sierra." },
        { q: "¿Qué tipo de eventos son más habituales en la sierra?", a: "Atiendo principalmente eventos familiares como cumpleaños y aniversarios en villas privadas, así como eventos de empresa y bodas en los espacios rurales exclusivos de la zona." }
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-24 pb-16 px-6 max-w-6xl mx-auto">
                    {/* SECCIÓN 1 — Hero */}
                    <section className="mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="max-w-3xl">
                                <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                    Expertos en Asombro Local
                                </p>
                                <h1 className="text-4xl md:text-6xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight">
                                    Mago en la Sierra de Madrid
                                </h1>
                                <p className="text-xl text-slate-300 font-medium italic mb-6">
                                    Ilusionismo exclusivo en el noroeste de Madrid
                                </p>
                                <div className="space-y-4 text-slate-400 leading-relaxed text-justify">
                                    <p>
                                        Si buscas un <strong>mago en la sierra de Madrid</strong> o un ilusionista en la zona noroeste que convierta tu celebración en un recuerdo imborrable, has llegado al lugar adecuado. El entorno de la <strong>sierra de Guadarrama</strong> y los municipios del eje de la <strong>zona A-6</strong> exigen un entretenimiento de alta gama que combine elegancia, cercanía y un asombro difícil de olvidar.
                                    </p>
                                    <div className="bg-amber-500/5 border-l-2 border-amber-500 p-6 rounded-r-xl italic">
                                        "Aunque mi residencia y estudio principal están en Torrelodones, me desplazo habitualmente para eventos en Galapagar, Collado Villalba, Las Rozas y toda la zona noroeste, garantizando un servicio local y de confianza."
                                    </div>
                                </div>
                            </div>
                            
                            {/* Mapa de Google Maps con zona rodeada */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative w-full h-[650px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group"
                            >
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160000.344476685!2d-3.91!3d40.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDMxJzEyLjAiTiAzwrA1NScwMC4wIlc!5e0!3m2!1ses!2ses!4v1712754890000!5m2!1ses!2ses" 
                                    className="w-full h-full grayscale invert opacity-70 contrast-125 border-0 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700 select-none pb-8" 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                
                                {/* Overlay de Círculo Sierra (Radar) - Tamaño Premium */}
                                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                    <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
                                        {/* Círculo de pulso animado */}
                                        <motion.div 
                                            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute inset-0 bg-amber-500/10 rounded-full blur-[80px]"
                                        />
                                        {/* Borde punteado de la zona */}
                                        <div className="absolute inset-0 border-2 border-dashed border-amber-500/25 rounded-full animate-[spin_120s_linear_infinite]" />
                                        <div className="absolute inset-16 border border-amber-500/5 rounded-full shadow-[0_0_50px_rgba(245,158,11,0.05)]" />
                                    </div>
                                </div>

                                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-3xl" />
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-950/90 backdrop-blur-xl px-6 py-3 rounded-full border border-amber-500/40 text-[11px] text-amber-400 font-bold uppercase tracking-[0.3em] whitespace-nowrap shadow-2xl">
                                    Área de Influencia: Sierra y Noroeste
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* SECCIÓN 2 — Grid de municipios */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-[Cinzel] text-white text-center mb-12 border-b border-white/10 pb-4 uppercase tracking-widest">Zonas de Actuación Preferente</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allSierraLocations.map((loc) => (
                                <Link key={loc.slug} href={`/mago-${loc.slug}`} className="group">
                                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-amber-500 transition-all h-full flex flex-col justify-between group-hover:bg-slate-900/40">
                                        <div>
                                            <h3 className="text-xl font-bold text-amber-400 mb-4 font-[Cinzel] group-hover:text-white transition-colors">{loc.name}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                                {loc.description}
                                            </p>
                                        </div>
                                        <div className="text-amber-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                            Ver Magia en {loc.name} <span>→</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* SECCIÓN 3 — Texto SEO */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24 py-12 border-y border-white/5">
                        <div className="space-y-6 text-slate-300 text-sm leading-relaxed text-justify">
                            <h2 className="text-2xl font-[Cinzel] text-white font-bold mb-4">La Ventaja de la Magia Local</h2>
                            <p>
                                Contratar un ilusionista local en la zona noroeste ofrece ventajas competitivas fundamentales. La cercanía permite una coordinación técnica impecable, eliminando los costes de desplazamiento y asegurando una respuesta rápida y flexible. Mi presencia es constante en municipios como <strong>Las Rozas</strong>, <strong>Villalba</strong> o <strong>Galapagar</strong>, lo que me permite conocer a fondo los mejores locales y proveedores de la zona.
                            </p>
                            <p>
                                Los ejes de la <strong>A-6</strong> y la <strong>M-40</strong> son mis rutas habituales hacia el asombro. Atiendo eventos en las <strong>fincas de la sierra</strong> y en los espacios rurales exclusivos del noroeste, donde la magia de cerca se integra de forma orgánica en cócteles al aire libre o cenas privadas de alta gama, elevando la experiencia de los invitados sin complicaciones logísticas.
                            </p>
                        </div>
                        <div className="space-y-6 text-slate-300 text-sm leading-relaxed text-justify">
                            <h2 className="text-2xl font-[Cinzel] text-white font-bold mb-4">Eventos a Medida en la Sierra</h2>
                            <p>
                                Desde una boda íntima bajo los pinos de <strong>El Escorial</strong> hasta un evento corporativo de gran impacto en una Business Park de la zona noroeste, cada actuación es personalizada. Mi magia está diseñada para adaptarse tanto a la tranquilidad de los entornos rurales como al dinamismo de las empresas tecnológicas que pueblan nuestro entorno.
                            </p>
                            <p>
                                No dejes el asombro al azar. Al elegir a un profesional que opera habitualmente en tu misma área geográfica, aseguras una elegancia y un nivel de detalle que solo quien vive y respira la cultura de la sierra de Madrid puede ofrecer.
                            </p>
                        </div>
                    </section>

                    {/* SECCIÓN 4 — FAQ */}
                    <section className="mb-24 max-w-4xl mx-auto">
                        <h2 className="text-2xl font-[Cinzel] text-white mb-12 text-center uppercase tracking-widest">Preguntas Frecuentes Sierra</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <h3 className="text-amber-400 font-bold mb-3 text-sm">{faq.q}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed text-justify">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SECCIÓN 5 — CTA */}
                    <section className="text-center py-16 bg-slate-900/30 rounded-[3rem] border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                        <div className="relative z-10 max-w-2xl mx-auto px-6">
                            <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white mb-6 font-bold uppercase">¿Hablamos de tu evento?</h2>
                            <p className="text-base text-slate-300 mb-8 leading-relaxed">
                                Sorprende a tus invitados con una experiencia única en la sierra. Consulta disponibilidad y presupuesto sin compromiso.
                            </p>
                            <div className="flex justify-center">
                                <ContactButtonClient label="Solicitar Presupuesto" />
                            </div>
                        </div>
                    </section>
                </main>
            </NavFooterClient>
        </>
    );
}
