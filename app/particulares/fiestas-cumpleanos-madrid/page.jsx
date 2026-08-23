import Image from 'next/image';
import FAQItem from '@/components/FAQItem';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground, FadeIn } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: { absolute: 'Mago para Cumpleaños y Fiestas de Adultos en Madrid | Ángel Ruiz' },
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
            { "@type": "Question", "name": "¿Es mejor magia de cerca o de salón para una fiesta privada?", "acceptedAnswer": { "@type": "Answer", "text": "Depende de la estructura de tu fiesta. Si es un formato cóctel de pie, la magia itinerante funciona genial. Si todos están sentados o queréis un momento central tras la cena, la magia de salón de 30-45 minutos es el broche de oro perfecto." } },
            { "@type": "Question", "name": "¿Es posible adaptar los trucos a una sorpresa personalizada?", "acceptedAnswer": { "@type": "Answer", "text": "Totalmente. Muchos de mis clientes me contactan para fiestas sorpresa, y a menudo preparo efectos especiales donde aparece el regalo, un mensaje o un guiño a la profesión o aficiones del homenajeado." } },
            { "@type": "Question", "name": "¿Incluyes sonido e iluminación si es un jardín grande?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, para los shows de salón llevo mi propio equipo de sonido profesional que cubre perfectamente un jardín o salón amplio, asegurando que todos escuchen cada detalle de la actuación." } },
            { "@type": "Question", "name": "¿Pueden participar los niños si es una fiesta familiar?", "acceptedAnswer": { "@type": "Answer", "text": "Por supuesto. Aunque el tono del espectáculo esté pensado para los adultos que cumplen años, la magia tiene un lenguaje universal y los niños también se asombrarán y disfrutarán al máximo. Es magia familiar de calidad." } },
            { "@type": "Question", "name": "¿Hasta qué zonas te desplazas?", "acceptedAnswer": { "@type": "Answer", "text": "Me desplazo por toda la Comunidad de Madrid. Esto incluye Madrid centro, la zona noroeste (Las Rozas, Majadahonda, Torrelodones, Pozuelo), y también otras provincias limítrofes si el evento lo requiere." } },
            { "@type": "Question", "name": "¿Con cuánto tiempo de antelación debo avisar?", "acceptedAnswer": { "@type": "Answer", "text": "Para asegurar disponibilidad, recomiendo avisar con al menos 2-3 meses de antelación, especialmente si el cumpleaños se celebra en fin de semana durante los meses de primavera u otoño." } }
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

                <main className="relative z-10 pt-32 pb-32 px-6 max-w-7xl mx-auto font-sans">
                    <Breadcrumbs />
                    
                    {/* Hero Section */}
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-24 mt-8">
                        <FadeIn className="flex-1 space-y-8" y={40}>
                            <div className="inline-block px-4 py-2 rounded-full border border-[#d4a853]/30 bg-[#d4a853]/5">
                                <span className="text-[#d4a853] text-xs font-semibold tracking-widest uppercase">
                                    Eventos Exclusivos
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-[Cinzel] text-white font-bold leading-[1.1] tracking-tight">
                                Sorprende en <br/>tu <span className="text-[#d4a853] italic font-light">Cumpleaños</span>
                            </h1>
                            <p className="text-lg text-slate-300 leading-relaxed font-light">
                                Hacerse mayor no significa perder la capacidad de asombro. Regala una experiencia y un día inolvidable con ilusionismo moderno y magia a domicilio en Madrid.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                <div className="flex items-start gap-3">
                                    <div className="text-[#d4a853] font-[Cinzel] font-bold text-lg">01</div>
                                    <div>
                                        <h4 className="text-white text-xs font-bold uppercase tracking-wide">A Domicilio</h4>
                                        <p className="text-slate-400 text-[10px] leading-tight mt-1 font-light">Asombro en tu salón o jardín privado.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-[#d4a853] font-[Cinzel] font-bold text-lg">02</div>
                                    <div>
                                        <h4 className="text-white text-xs font-bold uppercase tracking-wide">Restaurantes</h4>
                                        <p className="text-slate-400 text-[10px] leading-tight mt-1 font-light">Adaptable a reservados y terrazas.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <ContactButtonClient label="Consultar Fechas" />
                            </div>
                        </FadeIn>

                        <FadeIn className="flex-1 relative w-full aspect-[4/5] lg:aspect-[3/4]" delay={0.2} scale={0.95}>
                            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src="/images/fiesta-eventos-madrid.webp"
                                    alt="Mago Ángel Ruiz realizando magia en un cumpleaños de adultos en Madrid"
                                    fill
                                    className="object-cover transition-transform duration-[4s] ease-out hover:scale-110"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/80 to-transparent" />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Storytelling Emocional */}
                    <FadeIn y={30} className="py-24 border-t border-white/5">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white mb-8 text-center">Cumplir 40 o 50 merece algo espectacular</h2>
                            <p className="text-slate-300 font-light text-lg leading-relaxed text-justify">
                                Cuando organizas un cambio de década —los famosos 40, 50 o 60 años— no quieres otra cena aburrida en un restaurante donde apenas hablas con los de las esquinas. Quieres que la gente ría, quieres que la gente se mezcle, y sobre todo, quieres sorprender a esa persona especial. El gran problema de estas fiestas suele ser el temido "bajón" post-cena, cuando los invitados ya han comido, han charlado y el ambiente comienza a decaer lentamente antes de que empiece la música o las copas.
                            </p>
                            <p className="text-slate-300 font-light text-lg leading-relaxed text-justify">
                                La magia irrumpe precisamente ahí para revitalizar la energía de la sala. Es la inyección de adrenalina y sorpresa que transforma una simple reunión en una fiesta épica. Al llevar magia a domicilio o al restaurante, consigues que la celebración sea sofisticada pero inmensamente divertida. Es magia de cerca que pone al homenajeado en el centro del escenario, haciéndole sentir la auténtica estrella de su día. Una dosis de asombro, humor elegante y magia familiar que borrará cualquier atisbo de aburrimiento.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Timeline del Evento */}
                    <FadeIn y={30} className="py-24 border-t border-white/5">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-[Cinzel] text-white mb-6">El Timeline de la Fiesta</h2>
                            <p className="text-slate-400 font-light text-base max-w-2xl mx-auto">
                                Así se integra el ilusionismo para que el ritmo de tu celebración nunca decaiga.
                            </p>
                        </div>

                        <div className="space-y-12 max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#111111]/80 rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group">
                                <div className="md:col-span-3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                                    <span className="text-[#d4a853] font-[Cinzel] text-xl block mb-2">Fase 1</span>
                                    <h3 className="text-2xl font-[Cinzel] text-white">Llegada / Cóctel</h3>
                                </div>
                                <div className="md:col-span-9">
                                    <p className="text-slate-300 font-light leading-relaxed text-justify">
                                        Empiezo rompiendo el hielo. Cuando la gente aún está con la primera copa y quizá no se conocen todos, mi magia actúa como un conector instantáneo. Risas y asombro compartidos que preparan a todos para disfrutar al máximo.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#111111]/80 rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a853]/5 rounded-full blur-[80px] -mr-20 -mt-20 transition-opacity group-hover:opacity-100 opacity-50" />
                                <div className="md:col-span-3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                                    <span className="text-[#d4a853] font-[Cinzel] text-xl block mb-2">Fase 2</span>
                                    <h3 className="text-2xl font-[Cinzel] text-white">El Clímax (Show Central)</h3>
                                </div>
                                <div className="md:col-span-9 relative z-10">
                                    <p className="text-slate-300 font-light leading-relaxed text-justify">
                                        Tras la cena o el picoteo, concentro la atención de todos en un espectáculo de salón. Es un show diseñado con humor inteligente donde el homenajeado o homenajeada participa de forma destacada, creando el momento cumbre del cumpleaños.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#111111]/80 rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group">
                                <div className="md:col-span-3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                                    <span className="text-[#d4a853] font-[Cinzel] text-xl block mb-2">Fase 3</span>
                                    <h3 className="text-2xl font-[Cinzel] text-white">El Regalo Mágico</h3>
                                </div>
                                <div className="md:col-span-9">
                                    <p className="text-slate-300 font-light leading-relaxed text-justify">
                                        Para cerrar, puedo integrar la aparición de vuestro regalo o dar un mensaje emotivo de parte de la familia mediante un efecto imposible. El final perfecto antes de abrir paso a las copas o la música.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Formatos Section */}
                    <FadeIn y={30} className="py-24 border-t border-white/5">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-[Cinzel] text-white mb-6">El Formato Perfecto</h2>
                            <p className="text-slate-400 font-light text-base max-w-2xl mx-auto">
                                Dos formas diferentes de vivir el asombro según el estilo de tu celebración.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[#111111]/50 border border-white/5 p-12 rounded-[2rem] hover:bg-[#111111] transition-colors group">
                                <h3 className="text-[#d4a853] font-[Cinzel] text-2xl mb-4">Magia Itinerante</h3>
                                <p className="text-slate-300 font-light text-sm leading-relaxed mb-6 text-justify">
                                    Ideal para cócteles, picoteos o barbacoas en chalets. Me muevo entre los grupos realizando efectos visuales a escasos centímetros. Dinamiza la fiesta sin acaparar la atención de todos a la vez, creando focos de sorpresa.
                                </p>
                                <ul className="text-slate-400 text-sm space-y-3 font-light">
                                    <li className="flex gap-3"><span className="text-[#d4a853]">✓</span> No requiere espacio escénico</li>
                                    <li className="flex gap-3"><span className="text-[#d4a853]">✓</span> Efectos en manos de los asistentes</li>
                                </ul>
                            </div>
                            <div className="bg-[#111111]/50 border border-white/5 p-12 rounded-[2rem] hover:bg-[#111111] transition-colors group">
                                <h3 className="text-[#d4a853] font-[Cinzel] text-2xl mb-4">Show de Salón</h3>
                                <p className="text-slate-300 font-light text-sm leading-relaxed mb-6 text-justify">
                                    El colofón perfecto tras la cena o antes de abrir regalos. Un espectáculo central de 45-60 minutos donde todos prestan atención al mismo tiempo y el cumpleañero es parte activa. Potente, emotivo y muy humorístico.
                                </p>
                                <ul className="text-slate-400 text-sm space-y-3 font-light">
                                    <li className="flex gap-3"><span className="text-[#d4a853]">✓</span> Homenajeado como centro de atención</li>
                                    <li className="flex gap-3"><span className="text-[#d4a853]">✓</span> Gran impacto visual y carcajadas</li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Zonas / Domicilio */}
                    <FadeIn y={30} className="py-24 border-t border-white/5">
                        <div className="bg-gradient-to-br from-[#111111] to-[#1a1814] rounded-[3rem] p-12 lg:p-20 border border-white/5 text-center max-w-5xl mx-auto relative overflow-hidden">
                            <div className="absolute inset-0 bg-[#d4a853]/5 mix-blend-overlay" />
                            <h2 className="text-3xl font-[Cinzel] text-white mb-6 relative z-10">Magia a Domicilio: Cero Complicaciones</h2>
                            <p className="text-slate-300 font-light text-lg max-w-2xl mx-auto leading-relaxed mb-10 relative z-10">
                                Llevo mi propia maleta con todo lo necesario (incluso sonido portátil si se requiere). Tú no tienes que preocuparte de nada logístico, solo de disfrutar con tus invitados del día.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center relative z-10">
                                {["Madrid Capital", "Las Rozas", "Majadahonda", "Pozuelo", "Boadilla", "Torrelodones", "La Moraleja"].map((zona) => (
                                    <span key={zona} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-light tracking-wide hover:border-[#d4a853]/50 transition-colors">
                                        {zona}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* FAQ */}
                    <FadeIn y={30} className="py-24 border-t border-white/5">
                        <h2 className="text-3xl font-[Cinzel] text-white mb-12 text-center">Preguntas Frecuentes</h2>
                        <div className="max-w-4xl mx-auto space-y-4">
                            {faqSchema.mainEntity.map((faq, index) => (
                                <FAQItem key={index} faq={faq} />
                            ))}
                        </div>
                    </FadeIn>
                </main>
            </NavFooterClient>
        </>
    );
}

