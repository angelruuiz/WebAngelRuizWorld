import Image from 'next/image';
import Link from 'next/link';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import BusinessSchema from '@/components/BusinessSchema';

export const metadata = {
    title: 'Mago Close-Up Madrid | Magia de Cerca por Ángel Ruiz',
    description: 'Especialista en magia de cerca (close-up) en Madrid. Cartomagia purista e ilusionismo de alto impacto a centímetros de tus ojos. Formado por DaOrtiz.',
    alternates: {
        canonical: 'https://angelruiz.world/mago-close-up-madrid',
    },
    openGraph: {
        title: 'Mago Close-Up Madrid | Magia de Cerca',
        description: 'Especialista en magia de cerca (close-up) en Madrid. Cartomagia purista e ilusionismo de alto impacto a centímetros de tus ojos.',
        images: [{ url: '/images/foto-profesional-mirando-carta.webp' }],
    }
};

export default function MagoCloseUpMadridPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Qué es un mago close up o de magia de cerca?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Un mago close-up es un especialista en ilusionismo que actúa a escasos centímetros del público, sin necesidad de escenario. Se basa en cartomagia, numismagia y mentalismo, creando un impacto muy fuerte al suceder la magia en las propias manos del espectador."
                }
            },
            {
                "@type": "Question",
                "name": "¿Para qué eventos en Madrid es ideal la magia de cerca?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La magia de cerca es ideal para cócteles de bodas, cenas de empresa, eventos corporativos en IFEMA, fiestas privadas y restaurantes. Funciona perfectamente en formato itinerante (magia de grupos)."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuál es el estilo de cartomagia purista?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La cartomagia purista utiliza únicamente una baraja de cartas, técnica depurada y psicología, sin artificios ni cajas trucadas. Con más de 10 años de experiencia y formación bajo la escuela de Dani DaOrtiz, ofrezco este estilo directo y asombroso."
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Mago Close-Up Madrid", "item": "https://angelruiz.world/mago-close-up-madrid" }
        ]
    };

    return (
        <>
            <BusinessSchema rating={{ "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "worstRating": "1", "ratingCount": "32" }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-24 pb-16 px-6 max-w-6xl mx-auto">
                    <Breadcrumbs />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16 mt-8">
                        <div className="order-2 md:order-1 relative h-auto rounded-2xl overflow-hidden border border-slate-800 shadow-xl group bg-slate-900/50">
                            <Image
                                src="/images/foto-profesional-mirando-carta.webp"
                                alt="Mago Close-Up Madrid - Magia de cerca con cartas"
                                width={800}
                                height={1000}
                                className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                            <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Ilusionismo de Alta Proximidad
                            </p>
                            <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Mago Close-Up Madrid | Magia de Cerca
                            </h1>
                            
                            {/* AI-SEO Block: Clear definition in 40-60 words */}
                            <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                <div className="border-l-4 border-amber-500 pl-5 py-2 bg-amber-500/5 rounded-r-lg">
                                    <h2 className="text-xl font-[Cinzel] font-bold text-amber-400 mb-2">¿Qué es un Mago Close-Up?</h2>
                                    <p className="font-medium text-slate-200">
                                        Un mago close-up o de magia de cerca es un especialista en ilusionismo que realiza efectos a escasos centímetros del espectador, sin necesidad de escenario. Se basa en técnica pura, psicología y participación directa, generando el mayor nivel de asombro posible porque la magia sucede en las propias manos del público.
                                    </p>
                                </div>

                                <p>
                                    Soy Ángel Ruiz, <strong>mago close up en Madrid</strong> con más de 10 años de experiencia. Mi enfoque principal es la <strong className="text-amber-400">cartomagia purista</strong>, habiéndome formado en la prestigiosa escuela del maestro <strong>Dani DaOrtiz</strong>.
                                </p>
                                <p>
                                    A diferencia de los grandes espectáculos de escenario, la magia de cerca no permite trucajes de luces ni ángulos ciegos. Requiere años de ensayo, control absoluto de la atención y una técnica impecable. Es el formato más exclusivo y demandado para bodas premium y eventos corporativos en toda la Comunidad de Madrid.
                                </p>

                                <div className="mt-8 flex gap-4 items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 relative bg-slate-900">
                                        <Image src="/images/foto-bio.png" alt="Ángel Ruiz Mago" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-white font-[Cinzel] text-sm font-bold">Ángel Ruiz</p>
                                        <p className="text-amber-500/80 text-xs">Experto en Magia de Cerca</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <ContactButtonClient label="Contratar Mago de Cerca" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI-SEO Block: Comparison Table */}
                    <div className="max-w-4xl mx-auto py-12 mb-12 border-y border-white/5">
                        <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white text-center mb-8 uppercase tracking-widest">
                            Magia de Cerca vs. Magia de Escenario
                        </h2>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-300">
                                <thead className="text-xs text-amber-400 uppercase bg-slate-800/50">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 font-[Cinzel] font-bold rounded-tl-lg border-b border-white/10">Característica</th>
                                        <th scope="col" className="px-6 py-4 font-[Cinzel] font-bold border-b border-white/10">Magia Close-Up (De Cerca)</th>
                                        <th scope="col" className="px-6 py-4 font-[Cinzel] font-bold rounded-tr-lg border-b border-white/10">Magia de Escenario</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white/5 border-b border-white/5 hover:bg-white/10 transition-colors">
                                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">Distancia</th>
                                        <td className="px-6 py-4">A centímetros (en las manos del espectador)</td>
                                        <td className="px-6 py-4">A metros (visión frontal a distancia)</td>
                                    </tr>
                                    <tr className="bg-transparent border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">Elementos</th>
                                        <td className="px-6 py-4">Cartas, monedas, objetos cotidianos</td>
                                        <td className="px-6 py-4">Grandes aparatos, cajas, luces</td>
                                    </tr>
                                    <tr className="bg-white/5 border-b border-white/5 hover:bg-white/10 transition-colors">
                                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">Interacción</th>
                                        <td className="px-6 py-4">Directa y constante con todos los grupos</td>
                                        <td className="px-6 py-4">General y con voluntarios puntuales</td>
                                    </tr>
                                    <tr className="bg-transparent hover:bg-white/5 transition-colors">
                                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap rounded-bl-lg">Ideal para</th>
                                        <td className="px-6 py-4">Cócteles, cenas de empresa, mesas, networking</td>
                                        <td className="px-6 py-4">Teatros, finales de fiesta de gran aforo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* AI-SEO Block: Stats & Authoritative Details */}
                    <div className="max-w-5xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-slate-900/40 p-8 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all group">
                            <h3 className="text-xl font-[Cinzel] text-amber-400 mb-4 font-bold group-hover:text-amber-300 transition-colors">La Escuela de Dani DaOrtiz</h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-4 text-justify">
                                Estudiar bajo la influencia de Dani DaOrtiz (considerado uno de los mejores cartomagos del mundo) garantiza un estilo de <strong>magia de cerca</strong> orgánico, fluido e impredecible. La técnica se vuelve invisible, priorizando la psicología y la gestión de la atención (misdirection).
                            </p>
                            <p className="text-slate-300 text-sm leading-relaxed text-justify">
                                Esta escuela de cartomagia española es la más valorada a nivel internacional. En mi servicio de mago close up en Madrid, aplico estos principios para crear rutinas que son imposibles de reconstruir lógicamente por el espectador.
                            </p>
                        </div>
                        
                        <div className="bg-slate-900/40 p-8 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all group">
                            <h3 className="text-xl font-[Cinzel] text-amber-400 mb-4 font-bold group-hover:text-amber-300 transition-colors">Impacto del Close-Up en Eventos</h3>
                            <ul className="space-y-4 text-sm text-slate-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-amber-500 font-bold mt-1">✓</span>
                                    <span><strong>Rompehielos perfecto:</strong> Genera conversación inmediata entre invitados que no se conocen en bodas y eventos corporativos.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-amber-500 font-bold mt-1">✓</span>
                                    <span><strong>Flexibilidad total:</strong> No interrumpe el ritmo del evento (como la música en vivo o discursos); fluye entre los grupos de forma orgánica.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-amber-500 font-bold mt-1">✓</span>
                                    <span><strong>Alta retención:</strong> Según estudios de marketing experiencial, el ilusionismo de cerca aumenta la retención de marca en eventos de empresa e IFEMA.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* FAQ Section with details/summary for UI + Schema */}
                    <div className="max-w-3xl mx-auto py-12 mb-8">
                        <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white text-center mb-8 uppercase tracking-widest">
                            Preguntas Frecuentes sobre Magia de Cerca
                        </h2>
                        
                        <div className="space-y-4">
                            <details className="group bg-white/5 rounded-xl border border-white/10 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white">
                                    <h3 className="font-bold text-amber-400">¿Qué es un mago close up o de magia de cerca?</h3>
                                    <span className="relative size-5 shrink-0">
                                        <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                        <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed text-justify border-t border-white/5 pt-4 mt-2">
                                    <p>Un mago close-up es un especialista en ilusionismo que actúa a escasos centímetros del público, sin necesidad de escenario. Se basa en cartomagia, numismagia y mentalismo, creando un impacto muy fuerte al suceder la magia en las propias manos del espectador.</p>
                                </div>
                            </details>

                            <details className="group bg-white/5 rounded-xl border border-white/10 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white">
                                    <h3 className="font-bold text-amber-400">¿Para qué eventos en Madrid es ideal la magia de cerca?</h3>
                                    <span className="relative size-5 shrink-0">
                                        <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                        <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed text-justify border-t border-white/5 pt-4 mt-2">
                                    <p>La magia de cerca es ideal para cócteles de <Link href="/particulares/bodas" className="text-amber-500 hover:underline font-bold">bodas</Link>, cenas de <Link href="/empresas" className="text-amber-500 hover:underline font-bold">empresa</Link>, eventos corporativos en IFEMA, <Link href="/particulares/eventos" className="text-amber-500 hover:underline font-bold">fiestas privadas</Link> y restaurantes. Funciona perfectamente en formato itinerante, pasando por los diferentes grupos o mesas de forma natural.</p>
                                </div>
                            </details>

                            <details className="group bg-white/5 rounded-xl border border-white/10 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white">
                                    <h3 className="font-bold text-amber-400">¿Cuál es el estilo de cartomagia purista?</h3>
                                    <span className="relative size-5 shrink-0">
                                        <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                        <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed text-justify border-t border-white/5 pt-4 mt-2">
                                    <p>La cartomagia purista utiliza únicamente una baraja de cartas normal y corriente, técnica depurada y psicología, sin usar artificios ni cajas trucadas. Con más de 10 años de experiencia y formación bajo la escuela de Dani DaOrtiz, ofrezco este estilo directo y asombroso en mis sesiones de close-up en toda la Comunidad de Madrid.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </main>
            </NavFooterClient>
        </>
    );
}
