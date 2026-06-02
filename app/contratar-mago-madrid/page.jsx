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

                <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto selection:bg-emerald-500/30">
                    <Breadcrumbs />
                    
                    <div className="mt-16 flex flex-col items-center text-center">
                        <p className="font-mono text-emerald-400 text-xs tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            Protocolo de Contratación
                        </p>
                        <h1 className="text-5xl md:text-7xl font-[Cinzel] text-white font-bold leading-none mb-8 tracking-tight">
                            CONTRATAR <br/> ILUSIONISTA
                        </h1>
                        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-12">
                            Asegura la disponibilidad para tu evento en Madrid. Desde Magia de Cerca y Sleight of Hand hasta Mentalismo corporativo de alto impacto.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Process Cards - Liquid Glass & Microinteractions */}
                        {[
                            { step: '01', title: 'PARÁMETROS', desc: 'Define formato (Close-up / Mentalismo), fecha y volumen de espectadores.' },
                            { step: '02', title: 'CALIBRACIÓN', desc: 'Diseño de la rutina técnica adaptada a la arquitectura del evento.' },
                            { step: '03', title: 'EJECUCIÓN', desc: 'Despliegue del ilusionista en el evento con precisión absoluta.' }
                        ].map((item) => (
                            <div key={item.step} className="bg-zinc-900/40 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] p-8 rounded-[2rem] hover:-translate-y-2 hover:bg-zinc-800/50 transition-all duration-500 ease-out group">
                                <div className="text-emerald-500/20 font-mono text-5xl font-bold mb-4 group-hover:text-emerald-500/40 transition-colors">
                                    {item.step}
                                </div>
                                <h3 className="text-white font-[Cinzel] font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl font-[Cinzel] text-white font-bold mb-2">Especificaciones Técnicas</h2>
                            <p className="text-slate-400 text-sm max-w-lg">
                                Tarifas base de contratación desde 400€ (Particulares) y 600€ (Corporativo). El presupuesto exacto se compila tras evaluar las variables del evento.
                            </p>
                        </div>
                        <div className="active:scale-[0.97] transition-transform duration-200 shrink-0">
                            <ContactButtonClient label="INICIAR CONTACTO" />
                        </div>
                    </div>
                </main>
            </NavFooterClient>
        </>
    );
}
