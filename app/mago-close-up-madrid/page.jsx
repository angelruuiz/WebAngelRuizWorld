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

                <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
                    <Breadcrumbs />
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16">
                        {/* Hero Bento Cell */}
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
                                    Ejecución milimétrica a centímetros del espectador. El <strong>Sleight of hand</strong> en su estado más puro, sin escenarios, sin barreras. Ilusionismo táctil para mentes exigentes.
                                </p>
                            </div>
                        </div>

                        {/* Image Cell */}
                        <div className="md:col-span-4 relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] aspect-square md:aspect-auto">
                            <Image
                                src="/images/foto-profesional-mirando-carta.webp"
                                alt="Sleight of hand en Madrid"
                                fill
                                className="object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] mix-blend-luminosity hover:mix-blend-normal"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                        </div>

                        {/* Data Cells */}
                        <div className="md:col-span-4 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] p-8 hover:-translate-y-1 transition-transform duration-300 ease-out">
                            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                                <span className="text-amber-400 font-mono text-sm">01</span>
                            </div>
                            <h2 className="text-white font-[Cinzel] text-xl font-bold mb-3">Sleight of Hand</h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Manipulación avanzada donde la técnica es indetectable. El engaño no está en las manos, sino en la arquitectura mental de la rutina.
                            </p>
                        </div>

                        <div className="md:col-span-8 bg-zinc-900/60 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] p-8 flex flex-col justify-center">
                            <h2 className="text-white font-[Cinzel] text-xl font-bold mb-4">Cartomagia Purista</h2>
                            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed mb-6">
                                Bajo la escuela de Dani DaOrtiz, el caos se convierte en un instrumento de control. Un enfoque donde el espectador cree tener el poder, mientras el ilusionista diseña el resultado final.
                            </p>
                            <div className="active:scale-[0.97] transition-transform duration-200 origin-left inline-flex">
                                <ContactButtonClient label="Solicitar Dossier Técnico" />
                            </div>
                        </div>
                    </div>
                </main>
            </NavFooterClient>
        </>
    );
}
