import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Magia para Empresas en Madrid | Ángel Ruiz | Mago e Ilusionista',
    description: 'Eleva el nivel de tu evento de empresa con magia corporativa de alto impacto. Ángel Ruiz, ilusionista para congresos, cenas y presentaciones en Madrid.',
    alternates: {
        canonical: '/empresas',
    },
    openGraph: {
        title: 'Magia para Empresas en Madrid | Ángel Ruiz | Mago e Ilusionista',
        description: 'Eleva el nivel de tu evento corporativo con magia de alto impacto. Especialista en cenas de empresa, congresos y team building.',
        images: [{ url: '/images/mago-empresas-madrid-angel-ruiz.svg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Magia para Empresas en Madrid | Ángel Ruiz | Mago e Ilusionista',
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
            "name": "Ángel Ruiz | Mago e Ilusionista"
        },
        "description": "Servicios de ilusionismo corporativo para cenas de empresa, ferias y lanzamientos de marca en Madrid.",
        "areaServed": "Madrid"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "¿Qué beneficios aporta la magia a un evento de empresa?", "acceptedAnswer": { "@type": "Answer", "text": "La magia corporativa rompe barreras de comunicación, fomenta el networking y facilita que el mensaje de su marca sea recordado de forma positiva y asombrosa." } },
            { "@type": "Question", "name": "¿Se puede personalizar el show con mi marca?", "acceptedAnswer": { "@type": "Answer", "text": "Totalmente. Puedo integrar su logo, eslóganes o mensajes de marketing en los efectos de ilusionismo para reforzar la identidad corporativa durante el evento." } },
            { "@type": "Question", "name": "¿Para qué eventos empresariales es recomendable?", "acceptedAnswer": { "@type": "Answer", "text": "Es ideal para cenas de gala, ferias comerciales (para atraer público al stand), presentaciones de producto y jornadas de team building." } }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Mago Sierra Madrid", "item": "https://angelruiz.world/mago-sierra-madrid" },
            { "@type": "ListItem", "position": 3, "name": "Empresas", "item": "https://angelruiz.world/empresas" }
        ]
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} 
            />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
            />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
            />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main>
                <section className="pt-24 pb-16 px-6 max-w-6xl mx-auto relative z-10">
                    <Breadcrumbs />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">

                        <div className="relative md:sticky md:top-32 h-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl order-2 md:order-1 group bg-slate-900/50">
                            <Image
                                src="/images/mago-empresas-madrid-angel-ruiz.svg"
                                alt="Mago corporativo Angel Ruiz - Ilusionismo profesional para empresas en Madrid y zona noroeste"
                                fill
                                className="object-contain p-12 transition-all duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                             <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Soluciones Corporativas | Madrid Noroeste
                            </p>
                             <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Mago para Empresas
                            </h1>

                             <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                 <p>
                                    <span className="text-amber-400 font-bold underline decoration-amber-500/30">Transforma tus eventos corporativos con marketing experiencial de alto impacto.</span>{' '}
                                    Angel Ruiz, ilusionista profesional experto en <strong>eventos Madrid</strong> de lujo y <strong className="text-amber-400">comunicación estratégica</strong>, se encarga de que tu mensaje de marca perdure a través del asombro. Ideal para convenciones, cenas de gala y lanzamientos de producto.
                                </p>

                                {/* Mini Features Grid para cohesión visual */}
                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">01</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Cóctel & Networking</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Magia de cerca para romper barreras.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">02</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Magia de Escenario</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Show central para unir a toda la audiencia.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Si buscas potenciar el <strong className="text-amber-400">engagement</strong> de tus clientes, mi propuesta combina elegancia y humor inteligente, adaptándose al protocolo de las empresas más exigentes en el eje de la <strong>A-6</strong> y las áreas de negocios de <strong>Madrid Centro</strong>.
                                </p>

                                <p>
                                    Como <strong>mago para empresas en Torrelodones</strong>, cubro con total agilidad logística zonas clave como <strong>Las Rozas, Pozuelo, Majadahonda y Villalba</strong>. Calidad profesional garantizada para tu próxima cita corporativa.
                                </p>
                            </div>

                            <div className="mt-12">
                                <ContactButtonClient label="Solicitar Dossier para Empresas" />
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="border-t border-white/5 pt-16 mt-16 max-w-4xl mx-auto">
                        <h2 className="text-2xl font-[Cinzel] text-white mb-12 text-center uppercase tracking-widest">Preguntas Frecuentes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {faqSchema.mainEntity.map((faq, index) => (
                                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <h3 className="text-amber-400 font-bold mb-3 text-sm">{faq.name}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed text-justify">{faq.acceptedAnswer.text}</p>
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
