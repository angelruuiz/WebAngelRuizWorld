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

                <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto selection:bg-indigo-500/30">
                    <Breadcrumbs />
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-16">
                        {/* Lateral Title - Brutalist/Minimalist */}
                        <div className="md:col-span-3 flex flex-col justify-between order-2 md:order-1">
                            <p className="font-mono text-indigo-400 text-[10px] uppercase tracking-[0.3em] md:-rotate-180 md:writing-vertical-rl hidden md:block">
                                SISTEMA_MENTALISMO // V.2.0
                            </p>
                            <div className="mt-8 md:mt-0">
                                <div className="w-12 h-[1px] bg-indigo-500/50 mb-4 hidden md:block" />
                                <h1 className="text-4xl lg:text-5xl font-[Cinzel] text-white font-bold tracking-tight">
                                    MENTALISMO
                                </h1>
                                <p className="text-slate-500 text-xs uppercase tracking-widest mt-2">Lectura de Mente</p>
                            </div>
                        </div>

                        {/* Main Glass Panel */}
                        <div className="md:col-span-9 bg-zinc-950/60 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] rounded-3xl p-8 md:p-12 order-1 md:order-2">
                            <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-10 max-w-3xl">
                                El <strong className="text-white font-normal">Mentalismo</strong> no es un truco visual, es un hackeo de la percepción. Como ilusionista en Madrid, diseño experiencias basadas en psicología, sugestión y lectura de micro-expresiones.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:-translate-y-1 transition-transform duration-500">
                                    <h3 className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">Extracción de Datos</h3>
                                    <p className="text-slate-400 text-sm">
                                        Lectura de pensamientos, nombres o fechas que nunca han sido pronunciados. Acceso a información protegida mediante técnicas de persuasión.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:-translate-y-1 transition-transform duration-500">
                                    <h3 className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">Ingeniería de Elección</h3>
                                    <p className="text-slate-400 text-sm">
                                        El espectador siente que toma decisiones libres, cuando en realidad cada paso ha sido predeterminado por el ilusionista a través de sugestión.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-white/10 pt-8 gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border border-indigo-500/30 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                                        <Image src="/images/foto-bio.png" alt="Ángel Ruiz - Mentalista" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-bold">Ángel Ruiz</p>
                                        <p className="text-slate-500 text-xs">Ilusionista Especializado</p>
                                    </div>
                                </div>
                                <div className="active:scale-[0.97] transition-transform duration-150">
                                    <ContactButtonClient label="RESERVAR SESIÓN" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </NavFooterClient>
        </>
    );
}
