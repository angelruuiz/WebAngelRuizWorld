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
                                src="/images/foto-bio.png"
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
                                        Magia corporativa personalizada para empresas y marcas en Madrid.
                                    </span>{' '}
                                    Sorprende a tus equipos con una actividad de ilusionismo innovadora y
                                    haz que se involucren al 100% en la cultura de tu compañía a través
                                    del asombro compartido.
                                </p>

                                <p>
                                    Como{' '}
                                    <strong className="text-amber-400">
                                        mago para eventos de empresa en Madrid
                                    </strong>
                                    ,{' '}
                                    <span className="text-white font-bold italic underline decoration-amber-500/50">
                                        me infiltro como un empleado más
                                    </span>{' '}
                                    o como un invitado sorpresa, evitando modificar el transcurso natural
                                    del evento pero elevando el ánimo general. Mi especialidad es el
                                    dinamismo: mentalismo, robos imposibles e{' '}
                                    <strong className="text-amber-500">ilusionismo corporativo</strong> de
                                    vanguardia. Esta es la clave para que tus equipos participen y conecten
                                    de forma orgánica.
                                </p>

                                <p>
                                    Ya sea en la inauguración de una sede, un congreso internacional o un
                                    desayuno de networking en Madrid, el impacto de la magia refuerza el
                                    mensaje de tu marca. La versatilidad de mis efectos me permite integrar
                                    logos, conceptos de empresa o productos específicos, convirtiendo el
                                    entretenimiento en un canal de comunicación de alto impacto y máxima
                                    recordación.
                                </p>

                                <p>
                                    He colaborado con empresas de referencia como{' '}
                                    <strong className="text-amber-400">Movistar Estudiantes</strong> y
                                    participado en eventos corporativos para marcas de primer nivel en la
                                    Comunidad de Madrid. Cada actuación se diseña desde cero adaptada a
                                    los valores, el sector y el público de cada empresa.
                                </p>

                                <p>
                                    Servicios de{' '}
                                    <strong className="text-amber-400">magia para empresas en Madrid</strong>:
                                    cenas de empresa, cócteles corporativos, congresos, convenciones de
                                    ventas, team building, lanzamientos de producto, ferias y stands,
                                    desayunos de networking y eventos de fin de año. Disponible en toda
                                    la Comunidad de Madrid y con desplazamiento a nivel nacional.
                                </p>

                                <p className="text-amber-500/90 italic font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4">
                                    Un cóctel, una cena de empresa, un congreso, un desayuno... Cualquier
                                    ocasión con un toque de magia cambiará por completo la perspectiva del
                                    evento, asegurando un clima de innovación y exclusividad que recordarán
                                    durante meses.
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
