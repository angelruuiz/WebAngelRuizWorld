import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
    title: 'Mago Conferenciante para Empresas en Madrid | Ángel Ruiz',
    description: 'Transforma tu próxima convención con conferencias mágicas corporativas. Ángel Ruiz fusiona ilusionismo profesional y comunicación empresarial en Madrid.',
    alternates: {
        canonical: 'https://angelruiz.world/empresas/mago-conferenciante-madrid',
    },
    openGraph: {
        title: 'Mago Conferenciante para Empresas en Madrid | Ángel Ruiz',
        description: 'Conferencias mágicas corporativas en Madrid. Transmite tu mensaje de empresa, motivación y trabajo en equipo a través del asombro del ilusionismo.',
        images: [{ url: '/images/mago-empresas-madrid-angel-ruiz.svg' }],
    }
};

export default function MagoConferenciantePage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mago Conferenciante - Conferencias Mágicas para Empresas",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Madrid",
        "description": "Conferencias corporativas impartidas por un ilusionista profesional. Fusión de magia y mensajes de empresa para eventos, kick-offs y convenciones en Madrid y España.",
        "serviceType": "Corporate Keynote Speaker",
        "url": "https://angelruiz.world/empresas/mago-conferenciante-madrid"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Empresas", "item": "https://angelruiz.world/empresas" },
            { "@type": "ListItem", "position": 3, "name": "Mago Conferenciante", "item": "https://angelruiz.world/empresas/mago-conferenciante-madrid" }
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
                                alt="Mago Conferenciante para Eventos de Empresa en Madrid"
                                width={800}
                                height={1000}
                                className="w-full h-auto transition-all duration-700 group-hover:scale-105 filter grayscale-[30%]"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                             <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Keynote Speaker | Magia Corporativa
                             </p>
                             <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Mago Conferenciante para Empresas
                             </h1>

                             <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                 <p className="border-l-2 border-amber-500 pl-4 py-1">
                                    <span className="text-amber-400 font-bold underline decoration-amber-500/30 text-lg">Mucho más que una charla. Una experiencia transformadora que ancla el mensaje corporativo a través de lo imposible.</span>
                                </p>
                                 <p>
                                    Cuando buscas un <strong>mago para empresas en Madrid</strong>, a menudo el objetivo va más allá del simple entretenimiento. En convenciones, kick-offs o presentaciones de estrategia, los directivos necesitan comunicar conceptos abstractos (adaptación al cambio, trabajo en equipo, innovación). Como <strong>mago conferenciante</strong>, utilizo el ilusionismo profesional como la metáfora visual definitiva para transmitir estos mensajes de forma que tu equipo jamás lo olvide.
                                </p>

                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">01</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Atención Absoluta</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">El cerebro no puede desconectar ante lo imposible. El 100% de la audiencia estará enfocada en la presentación.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">02</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Anclaje Emocional</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Vinculamos los valores de su marca a emociones positivas y de sorpresa, garantizando la retención del mensaje a largo plazo.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Las <strong>conferencias mágicas para empresas en España</strong> son el formato híbrido perfecto: el rigor e impacto de una keynote profesional sumado al asombro de un espectáculo de élite. Si te preguntas <em>"¿Cuál es el mejor mago para empresas en Madrid que ofrezca charlas de valor?"</em>, mi propuesta basada en años de estudio en comunicación y artes afines está diseñada exactamente para solucionar ese reto corporativo.
                                </p>

                                <p className="bg-white/5 p-4 rounded-lg italic text-slate-300">
                                    "La forma en que enlazó nuestros nuevos valores corporativos con los efectos de magia hizo que la directiva se pusiera en pie. La mejor convención que hemos tenido en años."
                                </p>

                            </div>

                            <div className="mt-12">
                                <ContactButtonClient label="Solicitar Propuesta de Conferencia" />
                            </div>
                        </div>
                    </div>
                </section>
                </main>
            </NavFooterClient>
        </>
    );
}
