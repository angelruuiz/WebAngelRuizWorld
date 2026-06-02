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

                <main className="bg-[#0A0A0A] text-[#EAEAEA] font-mono selection:bg-amber-500 selection:text-black">
                    <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative z-10">
                        <Breadcrumbs />
                        
                        <div className="mt-16 border-t-2 border-b-2 border-[#EAEAEA] py-12 mb-16 relative">
                            <h1 className="text-5xl md:text-8xl font-sans font-black uppercase tracking-tighter text-[#EAEAEA] leading-[0.8] mix-blend-difference z-10 relative text-center">
                                TEAM BUILDING<br/><span className="text-amber-500">MAGIA</span> MADRID
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-5 flex flex-col gap-8">
                                <div className="border border-amber-500/30 bg-[#121212] p-8 h-full">
                                    <div className="text-amber-500 uppercase tracking-widest text-[10px] font-black mb-6 pb-2 border-b border-amber-500/30">
                                        &gt;&gt;&gt; RRHH_INCENTIVOS_PROTOCOL
                                    </div>
                                    <p className="text-sm leading-relaxed mb-6">
                                        Las corporaciones modernas en Madrid requieren dinámicas disruptivas. Nuestro <strong className="text-amber-500">taller de magia corporativo</strong> es un mecanismo de alto rendimiento para forzar el pensamiento lateral, estimular el <strong className="text-amber-500">engagement</strong> interdepartamental y consolidar equipos operativos cohesivos.
                                    </p>
                                    
                                    <div className="bg-[#0A0A0A] p-4 border border-[#EAEAEA]/10 mb-8">
                                        <div className="text-[10px] text-amber-500 uppercase tracking-widest mb-1">Métricas de Impacto / ROI</div>
                                        <div className="w-full bg-[#EAEAEA]/10 h-2 mt-2">
                                            <div className="bg-amber-500 h-2 w-[95%]"></div>
                                        </div>
                                        <div className="flex justify-between text-[10px] mt-1 text-[#EAEAEA]/60">
                                            <span>Incremento de Cohesión</span>
                                            <span>95%</span>
                                        </div>
                                    </div>

                                    <ContactButtonClient label="SOLICITAR DOSSIER DE CAPACITACIÓN" className="w-full bg-amber-500 text-black font-black rounded-none py-4 uppercase text-[10px] tracking-widest" />
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <div className="grid grid-cols-1 gap-px bg-amber-500/20 border border-amber-500/30">
                                    <div className="bg-[#0A0A0A] p-6 hover:bg-[#121212] transition-colors">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-sans font-black uppercase text-white">01. Magic Workshops</h3>
                                            <span className="text-amber-500 font-mono text-[10px] tracking-widest px-2 border border-amber-500">CORE</span>
                                        </div>
                                        <p className="text-xs text-[#EAEAEA]/70">Capacitación práctica. Los empleados ejecutan efectos trabajando en equipo, entrenando habilidades críticas de comunicación, oratoria y liderazgo táctico.</p>
                                    </div>

                                    <div className="bg-[#0A0A0A] p-6 hover:bg-[#121212] transition-colors">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-sans font-black uppercase text-white">02. Resolución de Problemas</h3>
                                            <span className="text-amber-500 font-mono text-[10px] tracking-widest px-2 border border-amber-500">STRATEGY</span>
                                        </div>
                                        <p className="text-xs text-[#EAEAEA]/70">Desmontaje de ilusiones como metáfora para el pensamiento crítico. Abordaje de desafíos corporativos desde ángulos imposibles para disolver bloqueos operativos.</p>
                                    </div>

                                    <div className="bg-[#0A0A0A] p-6 hover:bg-[#121212] transition-colors">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-sans font-black uppercase text-white">03. Show Personalizado</h3>
                                            <span className="text-amber-500 font-mono text-[10px] tracking-widest px-2 border border-amber-500">EXECUTION</span>
                                        </div>
                                        <p className="text-xs text-[#EAEAEA]/70">Espectáculo adaptado a mensajes clave corporativos. Ideal para convenciones de gran escala donde se requiere anclar la identidad de marca tras intensas jornadas de trabajo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24 border-t border-amber-500/30 pt-16">
                            <h2 className="text-2xl font-sans font-black text-amber-500 uppercase text-center mb-12 tracking-widest">
                                /// PREGUNTAS FRECUENTES ///
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EAEAEA]/10 border border-[#EAEAEA]/20">
                                {faqSchema.mainEntity.map((faq, index) => (
                                    <div key={index} className="bg-[#0A0A0A] p-8 hover:bg-[#121212] transition-colors">
                                        <h3 className="text-amber-500 font-black mb-4 text-sm font-sans uppercase">{faq.name}</h3>
                                        <p className="text-[#EAEAEA]/60 text-xs leading-relaxed">{faq.acceptedAnswer.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </section>
                </main>
            </NavFooterClient>
        </>
    );
}
