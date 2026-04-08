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
        images: [{ url: '/images/curriculum.png' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Magia para Empresas en Madrid | Angel Ruiz',
        description: 'Eleva tu evento con el mejor ilusionista corporativo de Madrid.',
        images: ['/images/curriculum.png'],
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
                <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                        <div className="relative md:sticky md:top-32 h-[450px] md:h-[500px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl order-2 md:order-1">
                            <Image
                                src="/images/curriculum.png"
                                alt="Mago corporativo en Madrid Ángel Ruiz ilusionista para empresas eventos y congresos"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                            <h1 className="text-4xl md:text-7xl font-[Cinzel] text-white mb-8 border-b-2 border-amber-500 pb-4 font-bold">
                                Mago para Empresas en Madrid
                            </h1>

                            <div className="space-y-6 text-white text-base md:text-lg font-medium leading-relaxed text-justify">
                                <p>
                                    <span className="text-amber-400 font-bold">
                                        Magia corporativa diseñada para fortalecer la cohesión de tu equipo en Madrid.
                                    </span>{' '}
                                    Sorprende a tus empleados con una actividad de ilusionismo innovadora que fomenta el asombro compartido y haz que se involucren al 100% en la cultura de tu compañía.
                                </p>

                                <p>
                                    Como{' '}
                                    <strong className="text-amber-400">
                                        mago para eventos de empresa
                                    </strong>
                                    , me integro de forma orgánica en la dinámica de tu evento —ya sea en cócteles, cenas o convenciones— elevando la energía general. He colaborado con entidades de prestigio como{' '}
                                    <strong className="text-amber-400">Movistar Estudiantes</strong>, garantizando un servicio profesional adaptado a los valores de cada sector.
                                </p>

                                <p className="text-amber-500/90 italic font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4">
                                    Diferencia tu próximo evento con una propuesta de magia exclusiva. Éxito y asombro asegurados.
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
