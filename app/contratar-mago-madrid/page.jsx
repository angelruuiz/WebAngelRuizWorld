import Image from 'next/image';
import Link from 'next/link';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Contratar Mago en Madrid ✨ Precios y Guía 2024 | Ángel Ruiz',
    description: 'Guía completa para contratar mago en Madrid. Precios, tipos de magia (close-up, escenario) y proceso de contratación con Ángel Ruiz, ilusionista premium.',
    alternates: {
        canonical: 'https://angelruiz.world/contratar-mago-madrid',
    },
    openGraph: {
        title: 'Contratar Mago en Madrid ✨ Guía y Precios | Ángel Ruiz',
        description: 'Todo lo que necesitas saber para contratar un ilusionista en Madrid para bodas, empresas o eventos privados. Presupuesto sin compromiso.',
        images: [{ url: '/images/foto-bio.png' }],
    }
};

export default function ContratarMagoMadridPage() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfessionalService",
                "@id": "https://angelruiz.world/#organization",
                "name": "Ángel Ruiz | Mago e Ilusionista",
                "url": "https://angelruiz.world",
                "image": "https://angelruiz.world/images/foto-bio.png",
                "telephone": "+34648055636",
                "priceRange": "400€ - 900€",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Madrid",
                    "addressRegion": "Comunidad de Madrid",
                    "addressCountry": "ES"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "39"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Madrid"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { 
                        "@type": "Question", 
                        "name": "¿Cuánto cuesta contratar un mago en Madrid?", 
                        "acceptedAnswer": { 
                            "@type": "Answer", 
                            "text": "El precio para contratar un mago en Madrid varía entre 400€ y 900€ para eventos sociales como bodas o fiestas privadas. Para eventos corporativos y ferias, la tarifa base suele partir de 600€ por jornada, dependiendo del formato y los requerimientos técnicos." 
                        } 
                    },
                    { 
                        "@type": "Question", 
                        "name": "¿Cuál es el mejor momento para contratar un ilusionista en una boda?", 
                        "acceptedAnswer": { 
                            "@type": "Answer", 
                            "text": "El mejor momento es durante el cóctel de bienvenida o en la sobremesa. La magia de cerca rompe el hielo entre invitados que no se conocen y crea una atmósfera de asombro perfecta para iniciar la celebración." 
                        } 
                    },
                    { 
                        "@type": "Question", 
                        "name": "¿Con cuánta antelación debo reservar?", 
                        "acceptedAnswer": { 
                            "@type": "Answer", 
                            "text": "Para bodas y eventos en temporada alta (mayo a septiembre, y diciembre), se recomienda contratar con 3 a 6 meses de antelación para asegurar disponibilidad." 
                        } 
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main>
                <section className="pt-24 pb-16 px-6 max-w-6xl mx-auto relative z-10">
                    <Breadcrumbs />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
                        <div className="relative md:sticky md:top-32 h-auto rounded-2xl overflow-hidden border border-slate-800 shadow-xl order-2 md:order-1 group bg-slate-900/50">
                            <Image
                                src="/images/foto-bio.png"
                                alt="Ángel Ruiz - Contratar mago en Madrid"
                                width={800}
                                height={1000}
                                className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                            <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Guía de Contratación | Precios y Servicios
                            </p>
                            <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Contratar Mago en Madrid
                            </h1>

                            <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                {/* AI-SEO Answer Block */}
                                <div className="bg-slate-900/80 border-l-4 border-amber-500 p-5 rounded-r-lg shadow-lg">
                                    <p className="font-semibold">
                                        <strong className="text-amber-400">Contratar a un mago en Madrid</strong> cuesta habitualmente entre 400€ y 900€ para eventos privados, y desde 600€ por jornada para empresas. La opción más demandada es la <strong className="text-amber-400">magia de cerca (close-up)</strong>, que garantiza un impacto inolvidable a centímetros de los espectadores, ideal para cócteles y cenas corporativas.
                                    </p>
                                </div>

                                <p>
                                    Si estás organizando un evento y quieres asegurar su éxito, <strong className="text-amber-400">contratar un ilusionista en Madrid</strong> es una de las decisiones más efectivas. Soy Ángel Ruiz, mago profesional formado en la Escuela de Dani DaOrtiz, especializado en magia de cerca, cartomagia y mentalismo.
                                </p>

                                <div className="my-8">
                                    <h3 className="text-xl font-[Cinzel] text-amber-400 mb-4 border-b border-white/10 pb-2">¿Por qué incluir magia en tu evento?</h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 items-start">
                                            <span className="text-amber-500 mt-1">✓</span>
                                            <span><strong>Retención de marca:</strong> Según datos del sector de eventos corporativos, el entretenimiento interactivo como el ilusionismo aumenta la retención del mensaje hasta en un 40%.</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-amber-500 mt-1">✓</span>
                                            <span><strong>Rompehielos perfecto:</strong> Ideal para bodas y cócteles donde los invitados aún no se conocen.</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-amber-500 mt-1">✓</span>
                                            <span><strong>Flexibilidad total:</strong> La magia de cerca no requiere escenario, luces especiales ni sonido. Se adapta a cualquier espacio en Madrid y la Sierra.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-10">
                                    <ContactButtonClient label="Consultar Disponibilidad y Precios" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Precios y Comparativa */}
                    <div className="max-w-5xl mx-auto py-16 border-t border-white/5">
                        <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white uppercase tracking-widest text-center mb-10">
                            Formatos y Precios de Referencia
                        </h2>
                        <p className="text-slate-300 text-sm text-center mb-12 max-w-3xl mx-auto">
                            Cada evento es único. Estos son los formatos más habituales para contratar un ilusionista en Madrid, con tarifas estimadas para ayudarte a planificar tu presupuesto.
                        </p>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-amber-500/30">
                                        <th className="py-4 px-6 text-amber-400 font-[Cinzel] uppercase text-sm">Formato de Evento</th>
                                        <th className="py-4 px-6 text-amber-400 font-[Cinzel] uppercase text-sm">Ideal para...</th>
                                        <th className="py-4 px-6 text-amber-400 font-[Cinzel] uppercase text-sm">Duración</th>
                                        <th className="py-4 px-6 text-amber-400 font-[Cinzel] uppercase text-sm">Inversión Estimada</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 text-white font-medium">Magia para Bodas (Cóctel)</td>
                                        <td className="py-4 px-6 text-slate-300 text-sm">Fincas, restaurantes, enlaces</td>
                                        <td className="py-4 px-6 text-slate-300 text-sm">1.5 - 2 horas</td>
                                        <td className="py-4 px-6 text-amber-500 font-bold">Desde 450€</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 text-white font-medium">Eventos Corporativos</td>
                                        <td className="py-4 px-6 text-slate-300 text-sm">Cenas de empresa, team building</td>
                                        <td className="py-4 px-6 text-slate-300 text-sm">2 horas</td>
                                        <td className="py-4 px-6 text-amber-500 font-bold">Desde 600€</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 text-white font-medium">Ferias (ej. IFEMA)</td>
                                        <td className="py-4 px-6 text-slate-300 text-sm">Stands, captación de leads</td>
                                        <td className="py-4 px-6 text-slate-300 text-sm">Jornada completa</td>
                                        <td className="py-4 px-6 text-amber-500 font-bold">A consultar</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Proceso de Contratación */}
                    <div className="max-w-4xl mx-auto py-16 border-t border-white/5">
                        <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white uppercase tracking-widest text-center mb-12">
                            El Proceso de Contratación
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5 text-center">
                                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/30 text-amber-400 font-bold text-xl">1</div>
                                <h3 className="text-white font-[Cinzel] font-bold mb-3">Contacto</h3>
                                <p className="text-slate-400 text-xs">Cuéntame la fecha, lugar en Madrid y tipo de evento. Te responderé en menos de 24 horas.</p>
                            </div>
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5 text-center">
                                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/30 text-amber-400 font-bold text-xl">2</div>
                                <h3 className="text-white font-[Cinzel] font-bold mb-3">Propuesta</h3>
                                <p className="text-slate-400 text-xs">Diseñaré una propuesta a medida (close-up, salón) ajustada a tus invitados y presupuesto.</p>
                            </div>
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5 text-center">
                                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/30 text-amber-400 font-bold text-xl">3</div>
                                <h3 className="text-white font-[Cinzel] font-bold mb-3">Reserva</h3>
                                <p className="text-slate-400 text-xs">Formalizamos la fecha. Nos coordinaremos con el espacio del evento para que todo salga perfecto.</p>
                            </div>
                        </div>
                        
                        <div className="mt-12 text-center">
                            <p className="text-slate-300 italic mb-6">"Como mago profesional, me encargo de todo para que tú solo tengas que disfrutar del evento." - Ángel Ruiz</p>
                            <ContactButtonClient label="Solicitar Presupuesto Ahora" />
                        </div>
                    </div>

                    {/* FAQ Section con Details (AI-SEO) */}
                    <div className="border-t border-white/5 pt-16 mt-8 max-w-4xl mx-auto">
                        <h2 className="text-2xl font-[Cinzel] text-white mb-10 text-center uppercase tracking-widest">Preguntas Frecuentes sobre Contratación</h2>
                        
                        <div className="space-y-4">
                            <details className="group bg-slate-900/40 border border-white/10 rounded-xl [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer text-amber-400 font-bold text-sm">
                                    ¿Cuánto cuesta contratar un mago en Madrid?
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-400 text-xs leading-relaxed">
                                    El precio para contratar un mago en Madrid varía entre 400€ y 900€ para eventos sociales como bodas o fiestas privadas. Para eventos corporativos y ferias, la tarifa base suele partir de 600€ por jornada, dependiendo del formato y los requerimientos técnicos.
                                </div>
                            </details>

                            <details className="group bg-slate-900/40 border border-white/10 rounded-xl [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer text-amber-400 font-bold text-sm">
                                    ¿Cuál es el mejor momento para contratar un ilusionista en una boda?
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-400 text-xs leading-relaxed">
                                    El mejor momento es durante el cóctel de bienvenida o en la sobremesa. La magia de cerca rompe el hielo entre invitados que no se conocen y crea una atmósfera de asombro perfecta para iniciar la celebración antes de la comida o cena.
                                </div>
                            </details>

                            <details className="group bg-slate-900/40 border border-white/10 rounded-xl [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer text-amber-400 font-bold text-sm">
                                    ¿Con cuánta antelación debo reservar?
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-400 text-xs leading-relaxed">
                                    Para bodas y eventos en temporada alta (de mayo a septiembre, y durante el mes de diciembre para cenas de empresa), se recomienda contratar con 3 a 6 meses de antelación para asegurar disponibilidad. Para otras fechas, 1 mes suele ser suficiente.
                                </div>
                            </details>
                            
                            <details className="group bg-slate-900/40 border border-white/10 rounded-xl [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer text-amber-400 font-bold text-sm">
                                    ¿Te desplazas fuera de Madrid capital?
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-400 text-xs leading-relaxed">
                                    Sí, ofrezco servicios en toda la Comunidad de Madrid. Mi base está en Torrelodones, lo que me permite acceder rápidamente tanto al centro de Madrid como a zonas como Las Rozas, Majadahonda, Pozuelo, y toda la Sierra de Madrid sin costes adicionales significativos de desplazamiento.
                                </div>
                            </details>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                         <div className="flex flex-wrap justify-center gap-3">
                            <Link href="/mago-madrid" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-bold uppercase tracking-widest hover:border-amber-500/30 transition-all">Mago en Madrid</Link>
                            <Link href="/empresas" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-bold uppercase tracking-widest hover:border-amber-500/30 transition-all">Magia para Empresas</Link>
                            <Link href="/particulares/bodas" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-bold uppercase tracking-widest hover:border-amber-500/30 transition-all">Magia para Bodas</Link>
                        </div>
                    </div>
                </section>
                </main>
            </NavFooterClient>
        </>
    );
}
