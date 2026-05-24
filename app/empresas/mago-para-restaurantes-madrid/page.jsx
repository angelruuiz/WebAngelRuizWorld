import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
    title: 'Mago para Restaurantes en Madrid | Atrae y Fideliza Clientes',
    description: 'Destaca tu local contratando un mago para restaurantes en Madrid. Magia de mesa en mesa para amenizar esperas, atraer cenas de grupo y fidelizar clientes.',
    alternates: {
        canonical: 'https://angelruiz.world/empresas/mago-para-restaurantes-madrid',
    },
    keywords: 'mago para restaurantes madrid, magia en restaurantes madrid, ilusionista restaurantes madrid, entretenimiento para restaurantes, cenas con espectaculo madrid, fidelizar clientes restaurante, mago hosteleria',
    openGraph: {
        title: 'Mago para Restaurantes y Hostelería en Madrid | Ángel Ruiz',
        description: 'Aumenta el ticket medio y la fidelización de tus clientes con magia de mesa en mesa. El entretenimiento perfecto para restaurantes en Madrid.',
        images: [{ url: '/images/foto-spring-cartas.webp' }],
    }
};

export default function RestaurantPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mago para Restaurantes en Madrid",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Madrid",
        "description": "Servicio de mago ilusionista para restaurantes en Madrid. Magia de proximidad de mesa en mesa para amenizar esperas, fidelizar comensales y aportar valor añadido a cenas de empresa y eventos en el local.",
        "serviceType": "Hospitality Entertainment",
        "url": "https://angelruiz.world/empresas/mago-para-restaurantes-madrid"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Cómo funciona la magia en un restaurante?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La magia para restaurantes funciona mediante el formato de 'Magia de Cerca' o 'Table Hopping'. Me acerco de mesa en mesa entre los platos o en la sobremesa, ofreciendo micro-shows exclusivos de 5-10 minutos a cada grupo de comensales. No requiere escenario ni interrumpe el servicio de camareros."
                }
            },
            {
                "@type": "Question",
                "name": "¿Interfiere el mago con el trabajo de los camareros?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "En absoluto. Mi experiencia trabajando en hostelería me permite 'leer la sala'. Sé perfectamente cuándo acercarme a una mesa (normalmente mientras esperan el primer plato o antes del postre) y me aparto inmediatamente cuando los camareros llegan con la comida, facilitando su labor."
                }
            },
            {
                "@type": "Question",
                "name": "¿Es rentable contratar un mago para mi restaurante en Madrid?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, es una inversión con retorno directo. Un mago para restaurantes ayuda a que los tiempos de espera en cocina pasen volando (reduciendo quejas), fomenta que los clientes pidan más consumiciones de sobremesa (aumentando el ticket medio) y genera un boca a boca espectacular que atrae nuevas reservas."
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
            { "@type": "ListItem", "position": 3, "name": "Mago Restaurantes", "item": "https://angelruiz.world/empresas/mago-para-restaurantes-madrid" }
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
                                src="/images/foto-spring-cartas.webp"
                                alt="Mago actuando en un restaurante en Madrid"
                                width={800}
                                height={1000}
                                className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                             <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Fidelización en Hostelería | Magia de Mesa en Mesa
                             </p>
                             <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Mago para Restaurantes en Madrid
                             </h1>

                             <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                 <p className="border-l-2 border-amber-500 pl-4 py-1">
                                    <span className="text-amber-400 font-bold underline decoration-amber-500/30 text-lg">Diferencia tu local de la competencia y convierte una cena normal en una experiencia gastronómica inolvidable.</span>
                                </p>
                                 <p>
                                    La hostelería en la capital es altamente competitiva. Ofrecer buena comida ya no es suficiente; los clientes buscan <strong>experiencias</strong>. Contratar un <strong className="text-amber-400">mago para restaurantes en Madrid</strong> es una de las estrategias de marketing en el local más efectivas para sorprender a los comensales, generar reseñas positivas y garantizar que vuelvan a reservar.
                                </p>

                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">01</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Ameniza las Esperas</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Los retrasos en cocina desaparecen cuando los clientes están asombrados y riendo con un juego de magia en sus propias manos.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">02</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Aumenta el Ticket</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Un ambiente animado en la sobremesa invita a pedir más postres, cafés y copas, rentabilizando tu negocio rápidamente.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    A través de la modalidad <em>Table Hopping</em> (magia de mesa en mesa), me desplazo discretamente entre los grupos. Si estás organizando jornadas gastronómicas, cenas de empresa, o simplemente quieres darle un valor premium a los fines de semana en tu local, un <strong>ilusionista profesional</strong> es el gancho perfecto. Trabajo en colaboración total con el maître y el equipo de sala.
                                </p>

                                <p className="bg-white/5 p-4 rounded-lg italic text-slate-300">
                                    "Desde que introdujimos los jueves mágicos en el restaurante, tenemos lleno absoluto. Las reseñas en Google mencionando al mago no paran de crecer."
                                </p>

                            </div>

                            <div className="mt-12">
                                <ContactButtonClient label="Consultar Tarifas para Hostelería" />
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <section className="border-t border-white/5 pt-16 mb-8 mt-12">
                        <h2 className="text-2xl font-[Cinzel] text-white mb-10 text-center uppercase tracking-widest">Preguntas Frecuentes sobre Magia en Restaurantes</h2>
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
