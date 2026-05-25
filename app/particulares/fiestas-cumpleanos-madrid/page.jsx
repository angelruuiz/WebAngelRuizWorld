import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Mago para Cumpleaños de Adultos y Fiestas Privadas en Madrid',
    description: 'Sorprende en tu fiesta de 40, 50 o 60 cumpleaños con Ángel Ruiz. Ilusionismo moderno, elegante y muy divertido para celebraciones de adultos en Madrid y a domicilio.',
    alternates: {
        canonical: 'https://angelruiz.world/particulares/fiestas-cumpleanos-madrid',
    },
    openGraph: {
        title: 'Mago para Cumpleaños y Fiestas de Adultos en Madrid | Ángel Ruiz',
        description: 'La magia perfecta para sorprender en tu cumpleaños. Experiencia exclusiva a domicilio o en restaurantes de Madrid.',
        images: [{ url: '/images/fiesta-eventos-madrid.webp' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago para Fiestas Privadas Madrid',
        description: 'Ilusionismo moderno para cumpleaños de 40 y 50 años.',
        images: ['/images/fiesta-eventos-madrid.webp'],
    },
};

export default function CumpleanosAdultosPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mago para Cumpleaños y Fiestas Privadas",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": {
            "@type": "State",
            "name": "Comunidad de Madrid"
        },
        "description": "Espectáculos de ilusionismo moderno y magia de cerca a domicilio para cumpleaños de adultos (40, 50, 60 años) y fiestas privadas en Madrid.",
        "serviceType": "Private Event Entertainment",
        "url": "https://angelruiz.world/particulares/fiestas-cumpleanos-madrid"
    };

    const faqSchema = {
        "mainEntity": [
            { "@type": "Question", "name": "¿El espectáculo es adecuado para un cumpleaños de adultos (40 o 50 años)?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutamente. Mi magia está diseñada para un público adulto y sofisticado. Mezclo impacto visual, psicología y un humor inteligente perfecto para hacer que el homenajeado se sienta especial." } },
            { "@type": "Question", "name": "¿Te desplazas a domicilio en Madrid o a restaurantes?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, realizo la mayor parte de estas actuaciones en chalets privados, salones de restaurantes y fincas en toda la Comunidad de Madrid, adaptándome al espacio disponible." } },
            { "@type": "Question", "name": "¿Es mejor magia de cerca o de salón para una fiesta privada?", "acceptedAnswer": { "@type": "Answer", "text": "Depende de la estructura de tu fiesta. Si es un formato cóctel de pie, la magia itinerante funciona genial. Si todos están sentados o queréis un momento central tras la cena, la magia de salón de 30-45 minutos es el broche de oro perfecto." } }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Particulares", "item": "https://angelruiz.world/particulares" },
            { "@type": "ListItem", "position": 3, "name": "Cumpleaños de Adultos y Fiestas", "item": "https://angelruiz.world/particulares/fiestas-cumpleanos-madrid" }
        ]
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "ProfessionalService",
                            "@id": "https://angelruiz.world/#organization",
                            "name": "Ángel Ruiz | Mago e Ilusionista",
                            "url": "https://angelruiz.world",
                            "image": "https://angelruiz.world/images/foto-bio.webp",
                            "telephone": "+34648055636",
                            "priceRange": "€€",
                            "address": {
                                "@type": "PostalAddress",
                                "addressRegion": "Comunidad de Madrid",
                                "addressCountry": "ES"
                            }
                        },
                        {
                            ...serviceSchema,
                            "@id": "https://angelruiz.world/particulares/fiestas-cumpleanos-madrid/#service"
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": faqSchema.mainEntity
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": breadcrumbSchema.itemListElement
                        }
                    ]
                }) }} 
            />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-24 pb-16 px-6 max-w-6xl mx-auto">
                    <Breadcrumbs />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
                        <div>
                            <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Magia a Domicilio y Restaurantes | Madrid
                            </p>
                            <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Mago para Cumpleaños de Adultos
                            </h1>

                            <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                <p className="border-l-2 border-amber-500 pl-4 py-1">
                                    <span className="text-amber-400 font-bold underline decoration-amber-500/30 text-lg">Hacerse mayor no significa perder la capacidad de asombro. Regala una experiencia inolvidable.</span>
                                </p>
                                <p>
                                    Celebrar un <strong>40, 50 o 60 cumpleaños</strong> es un hito importante. Cuando organizas una fiesta privada en Madrid, buscas que tus familiares y amigos pasen un rato excepcional y, sobre todo, que el homenajeado se sienta el centro de atención. Ahí es donde entra la magia.
                                </p>

                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">01</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">A Domicilio</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Llevo el asombro directo a tu salón o jardín privado.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">02</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Restaurantes</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Me adapto a reservados y terrazas sin interrumpir el servicio.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Como <strong className="text-amber-400">mago para fiestas privadas en Madrid</strong>, ofrezco un ilusionismo moderno y participativo. Lejos del tópico infantil, presento efectos de alto impacto, mentalismo y cartomagia purista con un toque de humor elegante. Lograremos que todos los asistentes compartan carcajadas y caras de incredulidad.
                                </p>

                                <p>
                                    Ofrezco desplazamiento incluido a cualquier punto de la <strong>Comunidad de Madrid</strong>, desde Madrid Capital hasta zonas exclusivas como La Moraleja, Pozuelo, Las Rozas, Majadahonda y toda la Sierra Noroeste.
                                </p>
                            </div>

                            <div className="mt-12 flex justify-start">
                                <ContactButtonClient label="Consultar Fechas y Presupuesto" />
                            </div>
                        </div>

                        <div className="relative md:sticky md:top-32 h-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
                            <Image
                                src="/images/fiesta-eventos-madrid.webp"
                                alt="Mago Ángel Ruiz realizando magia en un cumpleaños de adultos en Madrid"
                                fill
                                className="object-cover object-center group-hover:scale-110 transition-transform duration-[3s]"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-[10px] text-amber-500 font-bold uppercase tracking-widest mb-1">Diversión Garantizada</p>
                                <p className="text-white font-[Cinzel] text-sm italic">"Risas, incredulidad y un recuerdo que dura toda la vida"</p>
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN: Formatos del Show */}
                    <div className="max-w-5xl mx-auto py-16 border-t border-white/5">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white uppercase tracking-widest">
                                ¿Qué Formato Encaja Mejor en tu Fiesta?
                            </h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                                Dos formas diferentes de vivir el asombro según el estilo de tu celebración en Madrid.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-900/40 p-8 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3">La Magia Itinerante (Cóctel de Pie)</h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                                    Si has organizado un picoteo de pie, barbacoa o catering informal en el jardín, el formato "Close-up" es ideal. Me muevo por los diferentes grupos realizando efectos visuales de forma sorpresiva a muy poca distancia.
                                </p>
                                <ul className="text-slate-400 text-xs space-y-2">
                                    <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Dinamiza la fiesta sin acaparar a todos a la vez.</li>
                                    <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> No requiere de espacio escénico.</li>
                                    <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Efectos visuales suceden en manos de los asistentes.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900/40 p-8 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3">El Show Central (Tras la Cena)</h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                                    Ideal para después del postre y la tarta. Es un espectáculo de salón de 30-45 minutos donde todos prestan atención al mismo tiempo. Combina humor, ilusionismo y donde el cumpleañero toma parte activa (¡de forma divertida y respetuosa!).
                                </p>
                                <ul className="text-slate-400 text-xs space-y-2">
                                    <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> El homenajeado puede ser el centro de varios efectos.</li>
                                    <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Gran impacto visual para todo el público.</li>
                                    <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> El colofón perfecto antes de abrir los regalos o poner la música.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN: A Domicilio en Madrid */}
                    <div className="max-w-5xl mx-auto py-16 border-t border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white uppercase tracking-widest mb-6">
                                    Mago a Domicilio: Cero Complicaciones
                                </h2>
                                <p className="text-slate-300 text-sm leading-relaxed text-justify mb-4">
                                    Llevar el espectáculo a tu casa es una tendencia en alza en Madrid. Es íntimo, cómodo y tremendamente original. Ya sea en un chalet de <strong>Las Rozas, un ático en Madrid Centro, o un jardín en Boadilla</strong>, adapto mi material al entorno.
                                </p>
                                <p className="text-slate-300 text-sm leading-relaxed text-justify mb-6">
                                    Llevo mi propia maleta con todo lo necesario. Tú no tienes que preocuparte de nada logístico, simplemente avisar a la hora acordada y yo me encargo de hacer mi "aparición".
                                </p>
                                <ContactButtonClient label="Reserva tu Día Ahora" />
                            </div>
                            <div className="bg-slate-900/40 p-8 rounded-xl border border-white/5">
                                <h3 className="text-white font-[Cinzel] text-lg uppercase mb-4 text-center">Zonas de Actuación Habituales</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-amber-500">Madrid Capital</span>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300">Pozuelo de Alarcón</span>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300">Las Rozas</span>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300">Majadahonda</span>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300">Boadilla del Monte</span>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300">Torrelodones</span>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300">La Moraleja</span>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300">Galapagar</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <section className="border-t border-white/5 pt-16 mt-16">
                        <h2 className="text-2xl font-[Cinzel] text-white mb-12 text-center uppercase tracking-widest">Preguntas Frecuentes de la Contratación</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {faqSchema.mainEntity.map((faq, index) => (
                                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <h3 className="text-amber-400 font-bold mb-3 text-sm">{faq.name}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed text-justify">{faq.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </NavFooterClient>
        </>
    );
}
