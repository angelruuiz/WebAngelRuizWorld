import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
    title: 'Team Building Magia en Madrid | Talleres para Empresas',
    description: 'Fomenta el trabajo en equipo con un Team Building de magia único en Madrid. Talleres corporativos y dinámicas de grupo con el ilusionista Ángel Ruiz.',
    alternates: {
        canonical: 'https://angelruiz.world/empresas/mago-team-building-madrid',
    },
    keywords: 'team building magia, taller de magia para empresas, mago team building madrid, actividades team building originales, dinamicas de grupo madrid',
    openGraph: {
        title: 'Team Building Magia en Madrid: Ilusionismo para Empresas',
        description: 'Mejora el clima laboral y la cohesión de tu equipo mediante talleres de magia corporativa. Una experiencia formativa y muy divertida.',
        images: [{ url: '/images/mago-empresas-madrid-angel-ruiz.svg' }],
    }
};

export default function TeamBuildingPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Team Building Magia: Taller para Empresas",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Madrid",
        "description": "Dinámicas de grupo, coaching e incentivos de empresa basados en el ilusionismo y el team building con magia para mejorar habilidades de comunicación y cohesión de equipos en Madrid.",
        "serviceType": "Corporate Training & Entertainment",
        "url": "https://angelruiz.world/empresas/mago-team-building-madrid"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿En qué consiste un team building de magia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Un team building de magia es una actividad corporativa donde los empleados no solo disfrutan de un espectáculo de ilusionismo, sino que aprenden a realizar efectos mágicos en equipo. Fomenta la comunicación, la resolución de problemas y el pensamiento lateral de forma muy divertida."
                }
            },
            {
                "@type": "Question",
                "name": "¿Se puede hacer el team building de magia en nuestras oficinas de Madrid?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, el taller de magia para empresas es totalmente adaptable. Me desplazo con todo el material necesario a las oficinas de tu empresa en Madrid, o bien a hoteles, salas de reuniones o fincas donde estén realizando tu evento corporativo."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuántas personas pueden participar en la dinámica?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Las actividades de team building magia son ideales para grupos desde 10 hasta 100 personas. El formato se adapta en función del tamaño del grupo para garantizar que todos participen activamente y experimenten la magia de primera mano."
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Empresas", "item": "https://angelruiz.world/empresas" },
            { "@type": "ListItem", "position": 3, "name": "Team Building Magia", "item": "https://angelruiz.world/empresas/mago-team-building-madrid" }
        ]
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema]) }} 
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
                                alt="Team Building Magia para Empresas en Madrid"
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
                                Team Building con Magia en Madrid
                             </h1>

                             <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                 <p className="border-l-2 border-amber-500 pl-4 py-1">
                                    <span className="text-amber-400 font-bold underline decoration-amber-500/30 text-lg">Mucho más que un espectáculo: una experiencia formativa y participativa.</span>
                                </p>
                                 <p>
                                    Atrás quedaron las aburridas dinámicas de grupo. Las empresas modernas y departamentos de RRHH en <strong>Madrid</strong> buscan actividades de incentivo que saquen a los empleados de su zona de confort fomentando el compañerismo. Un <strong className="text-amber-400">team building de magia</strong> es la herramienta corporativa perfecta para lograr cohesión, risas y aprendizaje lateral de una forma inolvidable.
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
                                    Ya sea en las propias oficinas de tu empresa, en hoteles de <strong>Madrid Centro</strong> o en entornos naturales de la <strong>Sierra Noroeste</strong>, diseño sesiones de <Link href="/empresas" className="text-amber-400 hover:underline font-bold">talleres de magia corporativa</Link> donde tus empleados no solo ven magia de alto nivel, sino que <u>aprenden a ejecutar efectos seleccionados</u> trabajando en equipo. El <strong>team building magia</strong> rompe jerarquías y une a los departamentos.
                                </p>

                                <p className="bg-white/5 p-4 rounded-lg italic text-slate-300">
                                    "El taller de magia corporativa fue un soplo de aire fresco. Ver a nuestro equipo financiero colaborando con los comerciales para lograr un truco de cartomagia no tuvo precio."
                                </p>

                            </div>

                            <div className="mt-12">
                                <ContactButtonClient label="Solicitar Dossier de Team Building" />
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <section className="border-t border-white/5 pt-16 mb-8 mt-12">
                        <h2 className="text-2xl font-[Cinzel] text-white mb-10 text-center uppercase tracking-widest">Preguntas Frecuentes sobre el Team Building</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {faqSchema.mainEntity.map((faq, index) => (
                                <div key={index} className="bg-slate-900/40 p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-colors">
                                    <h3 className="text-amber-400 font-bold mb-3 text-sm">{faq.name}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed text-justify">{faq.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </section>
                </main>
            </NavFooterClient>
        </>
    );
}
