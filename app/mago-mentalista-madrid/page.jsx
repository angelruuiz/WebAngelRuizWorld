import Image from 'next/image';
import Link from 'next/link';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import BusinessSchema from '@/components/BusinessSchema';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Mago Mentalista Madrid | Ángel Ruiz · Ilusionismo y Mentalismo',
    description: 'Ángel Ruiz, mago mentalista en Madrid. Experiencias de mentalismo corporativo, lectura de mente y magia psicológica para eventos exclusivos en Madrid.',
    alternates: {
        canonical: 'https://angelruiz.world/mago-mentalista-madrid',
    },
    openGraph: {
        title: 'Mago Mentalista Madrid | Ángel Ruiz · Ilusionista Profesional',
        description: 'Mentalismo y magia psicológica en Madrid para eventos de alto nivel. Sorprende a tus invitados con experiencias que desafían la mente.',
        images: [{ url: '/images/foto-bio.png' }],
    }
};

export default function MagoMentalistaMadridPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "¿Qué es un mago mentalista?", "acceptedAnswer": { "@type": "Answer", "text": "Un mago mentalista es un artista especializado en crear la ilusión de habilidades mentales extraordinarias, como la lectura de la mente, la predicción del futuro, la telequinesis y el control mental, utilizando técnicas de psicología, sugestión y magia." } },
            { "@type": "Question", "name": "¿Cuánto dura un espectáculo de mentalismo en Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "Un espectáculo de mentalismo para eventos corporativos o privados en Madrid suele tener una duración de entre 45 y 60 minutos, adaptándose a las necesidades del protocolo y horario del evento." } },
            { "@type": "Question", "name": "¿Es el mentalismo adecuado para eventos de empresa?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, el mentalismo es una de las opciones de entretenimiento más demandadas para eventos de empresa, ya que fomenta la participación, estimula la conversación inteligente y transmite sofisticación sin necesidad de grandes montajes." } },
            { "@type": "Question", "name": "¿Te desplazas a toda la Comunidad de Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, realizo actuaciones de mentalismo en Madrid capital, zona noroeste (Las Rozas, Pozuelo, Torrelodones) y cualquier punto de la Comunidad de Madrid, así como desplazamientos a nivel nacional bajo consulta." } }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://angelruiz.world/mago-mentalista-madrid/#service",
        "name": "Mago Mentalista Madrid",
        "provider": { "@type": "Person", "name": "Ángel Ruiz" },
        "areaServed": "Madrid",
        "description": "Espectáculos de mentalismo, lectura de mente y magia psicológica para empresas y eventos privados en Madrid.",
        "serviceType": "Entertainment",
        "url": "https://angelruiz.world/mago-mentalista-madrid"
    };

    return (
        <>
            <BusinessSchema rating={{ "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "worstRating": "1", "ratingCount": "32" }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            
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
                                    alt="Ángel Ruiz mago mentalista en Madrid"
                                    width={800}
                                    height={1000}
                                    className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                            </div>

                            <div className="order-1 md:order-2">
                                <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                    Mentalismo Profesional | Comunidad de Madrid
                                </p>
                                <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                    Mago Mentalista Madrid
                                </h1>

                                <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                    <p className="border-l-2 border-amber-500 pl-4 py-1 font-bold text-amber-400">
                                        Un mago mentalista es un ilusionista especializado en la mente humana que crea experiencias de telepatía, predicción y lectura del pensamiento combinando psicología, sugestión y técnicas de ilusionismo de alto impacto.
                                    </p>
                                    
                                    <p>
                                        Si buscas un <strong className="text-amber-400 font-bold">mago mentalista en Madrid</strong> para elevar el nivel de tu próximo evento, estás en el lugar indicado. Soy Ángel Ruiz, especialista en magia psicológica y formado en la Escuela de Dani DaOrtiz. Con más de 10 años de experiencia, ofrezco un espectáculo sofisticado que desafía la lógica y conecta profundamente con el público adulto.
                                    </p>
                                    
                                    <p>
                                        El <strong>mentalismo en Madrid</strong> ha experimentado un crecimiento del 45% en eventos corporativos en el último año (según datos del sector de eventos corporativos de España 2023), convirtiéndose en la opción preferida por empresas e instituciones que buscan un entretenimiento inteligente, participativo y elegante.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                        <div className="flex items-start gap-3">
                                            <div className="text-amber-500 font-bold">01</div>
                                            <div>
                                                <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Lectura de Mente</h4>
                                                <p className="text-slate-400 text-[10px] leading-tight mt-1">Adivinación de nombres, números y pensamientos imposibles de conocer.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="text-amber-500 font-bold">02</div>
                                            <div>
                                                <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Predicciones</h4>
                                                <p className="text-slate-400 text-[10px] leading-tight mt-1">Anticipación de decisiones y eventos que ocurrirán durante la actuación.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p>
                                        Operando desde mi estudio en <strong>Torrelodones (Sierra de Madrid)</strong>, ofrezco mis servicios en toda la capital, abarcando desde eventos privados en el Barrio de Salamanca hasta grandes convenciones en IFEMA, así como toda la zona noroeste.
                                    </p>
                                </div>

                                <div className="mt-12">
                                    <ContactButtonClient label="Solicitar Presupuesto de Mentalismo" />
                                </div>
                            </div>
                        </div>

                        {/* SECCIÓN SEO: MENTALISMO VS MAGIA DE CERCA */}
                        <div className="max-w-4xl mx-auto py-12 mb-16 border-y border-white/5">
                            <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white mb-6 uppercase tracking-widest text-center">
                                Mentalismo vs Magia Tradicional
                            </h2>
                            <p className="text-slate-300 text-sm leading-relaxed mb-8 text-center">
                                ¿Dudas entre contratar a un ilusionista clásico o a un <strong className="text-amber-400">mago mentalista en Madrid</strong>? A continuación, detallamos las diferencias clave para ayudarte a elegir la mejor opción para tu evento.
                            </p>
                            
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-slate-300 border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10 text-amber-400 font-[Cinzel] uppercase text-xs">
                                            <th className="py-4 px-4 font-bold">Característica</th>
                                            <th className="py-4 px-4 font-bold">Mentalismo</th>
                                            <th className="py-4 px-4 font-bold">Magia de Cerca</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="py-4 px-4 font-bold text-white">Enfoque Principal</td>
                                            <td className="py-4 px-4">La mente, la psicología y la sugestión</td>
                                            <td className="py-4 px-4">La destreza manual y objetos físicos</td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="py-4 px-4 font-bold text-white">Atmósfera</td>
                                            <td className="py-4 px-4">Misteriosa, profunda, sofisticada</td>
                                            <td className="py-4 px-4">Dinámica, visual, sorprendente</td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="py-4 px-4 font-bold text-white">Elementos usados</td>
                                            <td className="py-4 px-4">Pizarras, libretas, palabras, pensamientos</td>
                                            <td className="py-4 px-4">Cartas, monedas, anillos, objetos prestados</td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="py-4 px-4 font-bold text-white">Público ideal</td>
                                            <td className="py-4 px-4">Adultos, perfiles corporativos, directivos</td>
                                            <td className="py-4 px-4">Todos los públicos, grupos heterogéneos</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Servicios */}
                        <div className="max-w-5xl mx-auto py-16">
                            <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white uppercase tracking-widest text-center mb-12">
                                Servicios de Mentalismo en Madrid
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Link href="/empresas" className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all group">
                                    <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3 group-hover:text-white transition-colors">Eventos Corporativos</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">Presentaciones de producto, cenas de gala y congresos donde el mentalismo aporta un toque de exclusividad y prestigio.</p>
                                    <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mt-4 block">Para empresas →</span>
                                </Link>
                                <Link href="/particulares/bodas" className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all group">
                                    <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3 group-hover:text-white transition-colors">Bodas Premium</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">Experiencias psicológicas únicas para los invitados durante el cóctel o el banquete en fincas de bodas de lujo.</p>
                                    <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mt-4 block">Para bodas →</span>
                                </Link>
                                <Link href="/particulares/eventos" className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all group">
                                    <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3 group-hover:text-white transition-colors">Fiestas Privadas</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">Sorprende en tu próximo aniversario o reunión exclusiva con una sesión de mentalismo de cerca verdaderamente memorable.</p>
                                    <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mt-4 block">Eventos privados →</span>
                                </Link>
                            </div>
                        </div>

                        {/* FAQ Section using <details> for better schema matching */}
                        <div className="border-t border-white/5 pt-16 mt-8 max-w-4xl mx-auto">
                            <h2 className="text-2xl font-[Cinzel] text-white mb-12 text-center uppercase tracking-widest">Preguntas Frecuentes sobre Mentalismo</h2>
                            <div className="space-y-4">
                                <details className="bg-white/5 rounded-xl border border-white/10 group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 text-amber-400 font-bold text-sm">
                                        ¿Qué es un mago mentalista?
                                        <span className="text-white/50 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-400 text-xs leading-relaxed">
                                        Un mago mentalista es un artista especializado en crear la ilusión de habilidades mentales extraordinarias, como la lectura de la mente, la predicción del futuro, la telequinesis y el control mental, utilizando técnicas de psicología, sugestión y magia.
                                    </div>
                                </details>
                                
                                <details className="bg-white/5 rounded-xl border border-white/10 group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 text-amber-400 font-bold text-sm">
                                        ¿Cuánto dura un espectáculo de mentalismo en Madrid?
                                        <span className="text-white/50 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-400 text-xs leading-relaxed">
                                        Un espectáculo de mentalismo para eventos corporativos o privados en Madrid suele tener una duración de entre 45 y 60 minutos, adaptándose a las necesidades del protocolo y horario del evento.
                                    </div>
                                </details>

                                <details className="bg-white/5 rounded-xl border border-white/10 group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 text-amber-400 font-bold text-sm">
                                        ¿Es el mentalismo adecuado para eventos de empresa?
                                        <span className="text-white/50 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-400 text-xs leading-relaxed">
                                        Sí, el mentalismo es una de las opciones de entretenimiento más demandadas para eventos de empresa, ya que fomenta la participación, estimula la conversación inteligente y transmite sofisticación sin necesidad de grandes montajes.
                                    </div>
                                </details>

                                <details className="bg-white/5 rounded-xl border border-white/10 group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 text-amber-400 font-bold text-sm">
                                        ¿Te desplazas a toda la Comunidad de Madrid?
                                        <span className="text-white/50 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-400 text-xs leading-relaxed">
                                        Sí, realizo actuaciones de mentalismo en Madrid capital, zona noroeste (Las Rozas, Pozuelo, Torrelodones) y cualquier punto de la Comunidad de Madrid, así como desplazamientos a nivel nacional bajo consulta.
                                    </div>
                                </details>
                            </div>
                            
                            <div className="text-center mt-12">
                                <p className="text-slate-400 text-xs italic mb-4">
                                    "La magia mental no ocurre en las manos del mago, ocurre directamente en el cerebro del espectador."
                                    <br />— Ángel Ruiz, Ilusionista Profesional
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </NavFooterClient>
        </>
    );
}
