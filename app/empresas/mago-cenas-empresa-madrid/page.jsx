import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
    title: 'Mago para Cenas de Empresa en Madrid | Animación Exclusiva',
    description: 'Transforma la cena de Navidad o celebración de tu empresa en Madrid con magia de cerca. Entretenimiento premium para restaurantes y reservados VIP.',
    alternates: {
        canonical: 'https://angelruiz.world/empresas/mago-cenas-empresa-madrid',
    },
    openGraph: {
        title: 'Mago para Cenas de Empresa en Madrid | Ángel Ruiz',
        description: 'Entretenimiento exclusivo para cenas de empresa en restaurantes y espacios de Madrid. Magia que une equipos y rompe el hielo.',
        images: [{ url: '/images/mago-empresas-madrid-angel-ruiz.svg' }],
    }
};

export default function CenasEmpresaPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mago para Cenas de Empresa en Madrid",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Comunidad de Madrid",
        "description": "Servicio de magia de cerca e ilusionismo exclusivo para amenizar cenas de empresa, eventos de Navidad y reuniones corporativas en Madrid.",
        "serviceType": "Entertainment",
        "url": "https://angelruiz.world/empresas/mago-cenas-empresa-madrid"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Empresas", "item": "https://angelruiz.world/empresas" },
            { "@type": "ListItem", "position": 3, "name": "Cenas de Empresa Madrid", "item": "https://angelruiz.world/empresas/mago-cenas-empresa-madrid" }
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
                                alt="Cenas de empresa en Madrid con Ángel Ruiz"
                                width={800}
                                height={1000}
                                className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                             <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Animación Corporativa Premium
                             </p>
                             <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Mago para Cenas de Empresa en Madrid
                             </h1>

                             <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                 <p className="border-l-2 border-amber-500 pl-4 py-1">
                                    <span className="text-amber-400 font-bold underline decoration-amber-500/30 text-lg">El ingrediente secreto para que la cena anual de tu empresa sea recordada durante años.</span>
                                </p>
                                 <p>
                                    Las <strong>cenas de empresa en Madrid</strong> (especialmente las cenas de Navidad o cierres de trimestre) a menudo caen en la rutina. Los empleados se sientan con los mismos compañeros de siempre y el ambiente puede tardar en arrancar. Contratar a un <Link href="/empresas" className="text-amber-400 hover:underline font-bold">mago corporativo</Link> es la solución más elegante para romper el hielo y garantizar el éxito de la velada.
                                </p>

                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">01</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Durante el Cóctel</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Magia itinerante mientras llegan los invitados, ideal para fomentar el networking inicial.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">02</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Mesa a Mesa</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Micromagia de alto impacto entre platos, sin interrumpir el servicio del restaurante.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Opero habitualmente en los <strong>restaurantes con salones privados más exclusivos del centro de Madrid, el Barrio de Salamanca y los ejes empresariales de la A-6 (Las Rozas, Pozuelo)</strong>. La <u>cartomagia y el mentalismo</u> generan un tema de conversación inmediato, integrando a directivos y empleados en una experiencia compartida de asombro absoluto.
                                </p>

                                <p className="bg-white/5 p-4 rounded-lg italic text-slate-300">
                                    "La cena de Navidad de este año iba a ser como las demás, pero la intervención de Ángel le dio un giro espectacular. Todo el mundo en la oficina seguía hablando del truco del anillo semanas después."
                                </p>

                            </div>

                            <div className="mt-12">
                                <ContactButtonClient label="Consultar Fechas (Plazas Limitadas)" />
                            </div>
                        </div>
                    </div>
                </section>
                </main>
            </NavFooterClient>
        </>
    );
}
