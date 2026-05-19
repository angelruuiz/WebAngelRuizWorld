import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
    title: 'Actividades de Team Building en Madrid | Taller de Magia para Empresas',
    description: 'Fomenta el trabajo en equipo con una actividad de Team Building única en Madrid. Talleres de magia corporativa y dinámicas de grupo con el ilusionista Ángel Ruiz.',
    alternates: {
        canonical: 'https://angelruiz.world/empresas/mago-team-building-madrid',
    },
    openGraph: {
        title: 'Team Building Original en Madrid: Magia para Empresas | Ángel Ruiz',
        description: 'Mejora el clima laboral y la cohesión de tu equipo mediante talleres de magia e ilusionismo. Una experiencia formativa y muy divertida.',
        images: [{ url: '/images/mago-empresas-madrid-angel-ruiz.svg' }],
    }
};

export default function TeamBuildingPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Actividad de Team Building: Magia para Empresas",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Madrid",
        "description": "Dinámicas de grupo, coaching e incentivos de empresa basados en el ilusionismo y la magia para mejorar habilidades de comunicación y cohesión de equipos en Madrid.",
        "serviceType": "Corporate Training & Entertainment",
        "url": "https://angelruiz.world/empresas/mago-team-building-madrid"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Empresas", "item": "https://angelruiz.world/empresas" },
            { "@type": "ListItem", "position": 3, "name": "Team Building Madrid", "item": "https://angelruiz.world/empresas/mago-team-building-madrid" }
        ]
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }} 
            />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main>
                <section className="pt-24 pb-16 px-6 max-w-6xl mx-auto relative z-10">
                    <Breadcrumbs />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
                        <div className="relative md:sticky md:top-32 h-auto rounded-2xl overflow-hidden border border-slate-800 shadow-xl order-2 md:order-1 group bg-slate-900/50">
                            <Image
                                src="/images/evento-angel-ruiz-magia.webp"
                                alt="Team Building de Magia para Empresas en Madrid"
                                width={800}
                                height={1000}
                                className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                             <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                RRHH e Incentivos | Dinámicas Originales
                             </p>
                             <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Team Building de Magia en Madrid
                             </h1>

                             <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                 <p className="border-l-2 border-amber-500 pl-4 py-1">
                                    <span className="text-amber-400 font-bold underline decoration-amber-500/30 text-lg">Mucho más que un espectáculo: una experiencia formativa y participativa.</span>
                                </p>
                                 <p>
                                    Atrás quedaron las aburridas dinámicas de grupo. Las empresas modernas y departamentos de RRHH en <strong>Madrid</strong> buscan actividades de incentivo que saquen a los empleados de su zona de confort fomentando el compañerismo. Un <Link href="/empresas" className="text-amber-400 hover:underline font-bold">taller de ilusionismo corporativo</Link> es la herramienta perfecta para lograr cohesión, risas y aprendizaje lateral.
                                </p>

                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">01</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Comunicación</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">La magia requiere empatía y claridad verbal, habilidades críticas para las ventas y atención al cliente.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">02</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Pensamiento Lateral</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Estimula la resolución creativa de problemas enseñando a ver los desafíos desde ángulos imposibles.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Ya sea en las propias oficinas de su empresa, en hoteles de <strong>Madrid Centro</strong> o en entornos naturales de la <strong>Sierra Noroeste</strong>, diseño sesiones adaptables donde sus empleados no solo ven magia de alto nivel, sino que <u>aprenden a ejecutar efectos seleccionados</u> trabajando en equipo.
                                </p>

                                <p className="bg-white/5 p-4 rounded-lg italic text-slate-300">
                                    "El taller de magia fue un soplo de aire fresco. Ver a nuestro equipo financiero colaborando con los comerciales para lograr un truco de cartomagia no tuvo precio."
                                </p>

                            </div>

                            <div className="mt-12">
                                <ContactButtonClient label="Solicitar Dossier de Team Building" />
                            </div>
                        </div>
                    </div>
                </section>
                </main>
            </NavFooterClient>
        </>
    );
}
