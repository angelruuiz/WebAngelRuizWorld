import Image from 'next/image';
import FAQItem from '@/components/FAQItem';
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
        images: [{ url: '/images/IMG_20260531_162002.webp' }],
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
            },
            {
                "@type": "Question",
                "name": "¿Se requiere equipo técnico para un show de micromagia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "En absoluto. Una de las grandes ventajas de la micromagia y el close-up es la ausencia de escenarios y barreras. El ilusionista se desplaza entre los invitados de manera natural, realizando prestidigitación en cualquier entorno, ya sea de pie o en mesas."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué papel juega la misdirection en la magia de cerca?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La misdirection o control de atención es vital a distancias cortas. Consiste en guiar la mente del espectador para que perciba únicamente el efecto mágico, ocultando el método o técnica secreta a plena vista, logrando un engaño psicológico impecable."
                }
            },
            {
                "@type": "Question",
                "name": "¿Pueden participar los invitados en los juegos de ilusionismo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, el close-up es 100% interactivo. A diferencia de un show de escenario, el asombro ocurre en las propias manos de los asistentes. El público baraja, corta, firma cartas y experimenta la magia táctil en primera persona."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuánto tiempo dura un pase de magia de cerca?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para eventos corporativos o cócteles, trabajo en formato itinerante realizando pases de 7 a 15 minutos por grupo. La duración total del servicio suele ser de 1.5 a 2 horas, asegurando que todos los invitados experimenten el ilusionismo de alta calidad."
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

    const faqs = faqSchema.mainEntity;

    return (
        <>
            <BusinessSchema rating={{ "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "worstRating": "1", "ratingCount": "39" }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto selection:bg-amber-500/30">
                    <Breadcrumbs />
                    
                    {/* 1. HERO BENTO SECTION */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16 mb-24">
                        <div className="md:col-span-8 bg-zinc-950/40 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] p-10 md:p-16 flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div>
                                <p className="font-mono text-amber-500/80 text-xs tracking-[0.25em] uppercase mb-6 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                                    Ilusionismo de Proximidad
                                </p>
                                <h1 className="text-5xl md:text-7xl font-[Cinzel] text-white font-bold leading-[1.1] mb-6">
                                    MAGIA DE <br />CERCA
                                </h1>
                            </div>
                            <div className="max-w-md mt-12 md:mt-0">
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                                    Ejecución milimétrica a centímetros del espectador, ideal para <strong>bodas y cócteles</strong>. El <strong>Sleight of hand</strong> en su estado más puro, sin escenarios, sin barreras. Ilusionismo táctil para mentes exigentes en Madrid.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-4 relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] aspect-square md:aspect-auto group">
                            <Image
                                src="/images/IMG_20260531_162002.webp"
                                alt="Sleight of hand y micromagia en Madrid"
                                fill
                                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] mix-blend-luminosity group-hover:mix-blend-normal"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                        </div>
                    </div>

                    {/* 2. BENEFICIOS DEL CLOSE-UP */}
                    <section className="mb-24">
                        <div className="mb-12 md:mb-16">
                            <h2 className="text-4xl md:text-5xl font-[Cinzel] text-white font-bold mb-4">Mago Close-Up Madrid para Bodas y Eventos</h2>
                            <p className="text-slate-400 max-w-2xl leading-relaxed mb-4">
                                La micromagia elimina la cuarta pared en bodas y cócteles. El engaño se construye mediante la interacción psicológica y una prestidigitación impecable, aportando un toque exclusivo a tu celebración.
                            </p>
                            <p className="text-slate-400 max-w-2xl leading-relaxed">
                                Contratar un servicio de <strong>close-up en bodas Madrid</strong> garantiza que durante la recepción o el cóctel no haya momentos vacíos, manteniendo a todos los invitados asombrados y conectados.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: 'Rompehielos Social', desc: 'Conecta a los invitados al instante. Genera conversaciones y un ambiente distendido gracias al asombro compartido a centímetros de distancia.' },
                                { title: 'Cero Infraestructura', desc: 'Sin necesidad de iluminación especial, sonido ni escenarios. El mago se integra fluidamente en el evento, ideal para cócteles y recepciones.' },
                                { title: 'Impacto Perduradero', desc: 'Que un milagro ocurra en tus propias manos genera un recuerdo imborrable. El ilusionismo táctil es la experiencia más inmersiva.' }
                            ].map((beneficio, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] p-8 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                                        <span className="text-amber-400 font-mono text-sm">0{i+1}</span>
                                    </div>
                                    <h3 className="text-white font-[Cinzel] text-xl font-bold mb-3">{beneficio.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{beneficio.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. ESCUELA DAORTIZ Y CARTOMAGIA PURISTA */}
                    <section className="mb-24 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
                                <p className="font-mono text-amber-500 text-xs tracking-widest uppercase mb-4">Cartomagia Purista</p>
                                <h2 className="text-3xl md:text-4xl font-[Cinzel] text-white font-bold mb-6">Filosofía DaOrtiz</h2>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Formado bajo la influencia de Dani DaOrtiz, el enfoque no se basa en florituras visuales vacías, sino en la psicología del engaño. Utilizando una única baraja francesa y una técnica depurada, la estructura de cada rutina está diseñada para someter el cerebro del espectador a una cascada de asombro.
                                </p>
                                <p className="text-slate-400 leading-relaxed mb-8">
                                    El uso magistral de la misdirection, el timing y el forzaje psicológico crean la ilusión de libre albedrío. Tú tomas las decisiones, pero el mago ha escrito el final.
                                </p>
                                
                                <div className="active:scale-[0.97] transition-transform duration-200 origin-left inline-flex">
                                    <ContactButtonClient label="Reservar Exhibición" />
                                </div>
                            </div>
                            <div className="p-10 md:p-16 border-t md:border-t-0 md:border-l border-white/5 flex flex-col gap-6 justify-center bg-black/20">
                                <h3 className="text-white font-[Cinzel] text-xl font-bold">Arquitectura del Engaño</h3>
                                <ul className="space-y-4">
                                    {[
                                        { title: 'Técnica Invisible', desc: 'Enfiles y empalmes ejecutados en las sombras de la atención.' },
                                        { title: 'Control de Atención', desc: 'Dirección de la mirada para ocultar el método a plena luz.' },
                                        { title: 'Timing Perfecto', desc: 'Coreografía temporal entre la trampa y el momento de relajación.' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <span className="text-amber-500 font-mono mt-1">{"//"}</span>
                                            <div>
                                                <strong className="text-white text-sm block mb-1">{item.title}</strong>
                                                <span className="text-slate-500 text-sm">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 4. METODOLOGÍA DE TRABAJO */}
                    <section className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white font-bold mb-4">Protocolo Operativo</h2>
                            <p className="text-slate-400">Cómo se integra la magia de proximidad en tu evento. Puedes <a href="/contratar-mago-madrid" className="text-amber-500 hover:underline">ver tarifas</a> en la sección de contratación.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { step: 'FASE 1', title: 'Análisis del Entorno', desc: 'Evaluación del flujo de invitados, tipo de evento y distribución del espacio para determinar la estrategia de intervención.' },
                                { step: 'FASE 2', title: 'Infiltración', desc: 'Integración sutil entre los grupos. Abordajes orgánicos sin interrumpir conversaciones importantes, detectando momentos clave.' },
                                { step: 'FASE 3', title: 'Impacto Directo', desc: 'Ejecución de rutinas de alto calibre a centímetros de los ojos. El grupo se convierte en el centro del escenario.' }
                            ].map((metodo, i) => (
                                <div key={i} className="relative p-8 border border-white/5 rounded-[2rem] bg-zinc-950/50 hover:bg-white/[0.02] transition-colors group">
                                    <div className="text-amber-500/30 font-[Cinzel] text-4xl mb-4 group-hover:text-amber-500/60 transition-colors">
                                        {metodo.step}
                                    </div>
                                    <h3 className="text-white text-lg font-bold mb-3">{metodo.title}</h3>
                                    <p className="text-slate-400 text-sm">{metodo.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 5. TESTIMONIOS / TRUST BLOCKS */}
                    <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-amber-500/10 to-transparent p-10 md:p-12 rounded-[3rem] border border-amber-500/20">
                            <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white font-bold mb-8">El Valor de la Excelencia</h2>
                            <blockquote className="text-lg md:text-xl text-slate-300 leading-relaxed italic mb-8">
                                "La destreza técnica es asombrosa, pero lo verdaderamente espectacular es cómo maneja la atención del grupo. Nos tuvo completamente absortos durante todo el cóctel. Pura psicología aplicada al engaño."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                                <div>
                                    <p className="text-white font-bold">Director de Eventos</p>
                                    <p className="text-slate-400 text-sm">Agencia Corporativa Madrid</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center p-8">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-4xl md:text-5xl font-[Cinzel] text-white font-bold mb-2">10+</p>
                                    <p className="text-slate-400 text-sm">Años de perfeccionamiento en la disciplina del close-up.</p>
                                </div>
                                <div>
                                    <p className="text-4xl md:text-5xl font-[Cinzel] text-white font-bold mb-2">+50</p>
                                    <p className="text-slate-400 text-sm">Eventos corporativos y fiestas privadas en Madrid.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 6. EXTENSIVE FAQS (VISUAL) */}
                    <section className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-[Cinzel] text-white font-bold mb-10 text-center">Preguntas Frecuentes</h2>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} faq={faq} />
                            ))}
                        </div>
                    </section>

                </main>
            </NavFooterClient>
        </>
    );
}
