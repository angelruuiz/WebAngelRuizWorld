import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
    title: 'Mago para Ferias y Congresos en IFEMA Madrid | Atrae más Clientes',
    description: 'Multiplica la visibilidad de tu stand en IFEMA Madrid. Ángel Ruiz, ilusionista especializado en Trade Show Magic para captar leads y comunicar tu marca.',
    alternates: {
        canonical: 'https://angelruiz.world/empresas/mago-ferias-congresos-madrid',
    },
    openGraph: {
        title: 'Mago para Ferias en Madrid (IFEMA) | Ángel Ruiz',
        description: 'Trade Show Magic para congresos en Madrid. Capta la atención de los asistentes y transmite tu mensaje corporativo con ilusionismo.',
        images: [{ url: '/images/mago-empresas-madrid-angel-ruiz.svg' }],
    }
};

export default function FeriasCongresosPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Trade Show Magic - Mago para Ferias en IFEMA Madrid",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Madrid",
        "description": "Ilusionismo corporativo enfocado en ferias comerciales, congresos y exposiciones en IFEMA Madrid. Estrategias de captación de leads mediante magia.",
        "serviceType": "Marketing Event Entertainment",
        "url": "https://angelruiz.world/empresas/mago-ferias-congresos-madrid"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Empresas", "item": "https://angelruiz.world/empresas" },
            { "@type": "ListItem", "position": 3, "name": "Ferias IFEMA Madrid", "item": "https://angelruiz.world/empresas/mago-ferias-congresos-madrid" }
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
                                alt="Mago para Ferias Comerciales en IFEMA Madrid"
                                width={800}
                                height={1000}
                                className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                             <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Marketing Ferial | Trade Show Magic
                             </p>
                             <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Mago para Ferias e IFEMA en Madrid
                             </h1>

                             <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                 <p className="border-l-2 border-amber-500 pl-4 py-1">
                                    <span className="text-amber-400 font-bold underline decoration-amber-500/30 text-lg">Convierte tu stand en el mayor foco de atención de toda la feria.</span>
                                </p>
                                 <p>
                                    Asistir a un gran congreso en <strong>IFEMA Madrid</strong> requiere una inversión importante. Sin embargo, muchos expositores cometen el error de esperar pasivamente a que los clientes se acerquen. Como <Link href="/empresas" className="text-amber-400 hover:underline font-bold">mago corporativo especializado</Link>, utilizo la magia (Trade Show Magic) como un imán para captar tráfico, retener a la audiencia y cualificar leads antes de pasarlos a tu equipo comercial.
                                </p>

                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">01</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Atracción de Tráfico</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Freno a los asistentes en el pasillo, generando grupos frente a su exposición.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">02</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Mensaje de Marca</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Integro los beneficios de tu producto o eslóganes directamente dentro de los efectos visuales.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    El ilusionismo corporativo en <strong>ferias y congresos en Madrid</strong> no es simplemente "hacer trucos", es una herramienta de marketing B2B altamente efectiva. Presento tu producto de una manera imposible de ignorar, generando un recuerdo de marca imborrable y aumentando drásticamente el ROI de tu participación en el evento.
                                </p>

                                <p className="bg-white/5 p-4 rounded-lg italic text-slate-300">
                                    "No dimos abasto escaneando acreditaciones. Ángel conseguía reunir a decenas de personas en nuestro stand cada hora, entregándonos una audiencia ya fascinada y receptiva."
                                </p>

                            </div>

                            <div className="mt-12">
                                <ContactButtonClient label="Diseñar Estrategia para mi Stand" />
                            </div>
                        </div>
                    </div>
                </section>
                </main>
            </NavFooterClient>
        </>
    );
}
