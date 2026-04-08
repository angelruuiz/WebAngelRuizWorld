import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';

export const metadata = {
    title: 'Magia para Empresas en Madrid | Eventos Corporativos y Team Building',
    description: 'Eleva el nivel de tu evento de empresa con magia corporativa de alto impacto. Angel Ruiz, ilusionista para congresos, cenas y presentaciones en Madrid.',
    alternates: {
        canonical: '/empresas',
    },
    openGraph: {
        title: 'Magia para Empresas en Madrid | Angel Ruiz',
        description: 'Eleva el nivel de tu evento corporativo con magia de alto impacto. Especialista en cenas de empresa, congresos y team building.',
        images: [{ url: '/images/mago-empresas-madrid-angel-ruiz.svg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Magia para Empresas en Madrid | Angel Ruiz',
        description: 'Eleva tu evento con el mejor ilusionista corporativo de Madrid.',
        images: ['/images/mago-empresas-madrid-angel-ruiz.svg'],
    },
};

export default function EmpresasPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Magia para Empresas en Madrid",
        "provider": {
            "@type": "Person",
            "name": "Angel Ruiz"
        },
        "description": "Servicios de ilusionismo corporativo para cenas de empresa, ferias y lanzamientos de marca en Madrid.",
        "areaServed": "Madrid"
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} 
            />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main>
                <section className="pt-24 pb-16 px-6 max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        <div className="relative md:sticky md:top-32 h-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl order-2 md:order-1">
                            <Image
                                src="/images/mago-empresas-madrid-angel-ruiz.svg"
                                alt="Angel Ruiz - Logo Minimalista Vectorizado"
                                fill
                                className="object-contain p-12 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                            <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight">
                                Mago para Empresas
                            </h1>

                             <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                <p>
                                    <span className="text-amber-400 font-bold">Magia corporativa diseñada para fortalecer la imagen de tu marca y la cohesión de tu equipo en Madrid.</span>{' '}
                                    Angel Ruiz transforma convenciones ordinarias en experiencias extraordinarias. Sorprende a tus empleados y clientes con una actividad de ilusionismo innovadora que fomenta el asombro compartido y el engagement real con tu compañía.
                                </p>

                                <p>
                                    Como experto en <strong>eventos Madrid</strong> corporativos, ofrezco soluciones personalizadas: desde magia de cóctel itinerante hasta presentaciones de producto donde el ilusionismo refuerza tu mensaje de marketing. Si buscas un <strong>mago para empresas en Torrelodones</strong>, Las Rozas o Pozuelo, mi propuesta combina elegancia, humor inteligente y un profesionalismo que respeta escrupulosamente el protocolo business.
                                </p>

                                <p>
                                    La <strong>magia de cerca Madrid</strong> es la herramienta de RRPP definitiva para cenas de gala, ferias y sesiones de team building. Rompe las barreras sociales al instante, facilitando el networking mientras los asistentes viven lo imposible a escasos centímetros. Disponible en toda la zona noroeste con facturación inmediata y total flexibilidad logística.
                                </p>

                                <p className="text-amber-500/90 italic font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4 text-sm md:text-base">
                                    Diferencia tu próximo evento corporativo con una propuesta de magia exclusiva. Con más de una década de experiencia en el sector business, te garantizo un éxito total y un retorno en forma de admiración de tu equipo.
                                </p>
                            </div>

                            <div className="mt-12">
                                <ContactButtonClient label="Solicitar Presupuesto Corporativo" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </NavFooterClient>
        </>
    );
}
