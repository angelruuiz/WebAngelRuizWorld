import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground, FadeIn } from '@/components/VisualEffects';
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
                            "image": "https://angelruiz.world/images/foto-bio.png",
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
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-32 mt-8">
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
                                Hacerse mayor no significa perder la capacidad de asombro. Regala una experiencia inolvidable con ilusionismo moderno y magia a domicilio en Madrid.
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
                                <p className="text-slate-300 font-light text-sm leading-relaxed mb-6">
                                    Ideal para cócteles, picoteos o barbacoas. Me muevo entre los grupos realizando efectos visuales a escasos centímetros. Dinamiza la fiesta sin acaparar la atención de todos a la vez.
                                </p>
                                <ul className="text-slate-400 text-sm space-y-3 font-light">
                                    <li className="flex gap-3"><span className="text-[#d4a853]">✓</span> No requiere espacio escénico</li>
                                    <li className="flex gap-3"><span className="text-[#d4a853]">✓</span> Efectos en manos de los asistentes</li>
                                </ul>
                            </div>
                            <div className="bg-[#111111]/50 border border-white/5 p-12 rounded-[2rem] hover:bg-[#111111] transition-colors group">
                                <h3 className="text-[#d4a853] font-[Cinzel] text-2xl mb-4">Show de Salón</h3>
                                <p className="text-slate-300 font-light text-sm leading-relaxed mb-6">
                                    El colofón perfecto tras la cena o antes de abrir regalos. Un espectáculo central de 30-45 minutos donde todos prestan atención al mismo tiempo y el cumpleañero es parte activa.
                                </p>
                                <ul className="text-slate-400 text-sm space-y-3 font-light">
                                    <li className="flex gap-3"><span className="text-[#d4a853]">✓</span> Homenajeado como centro de atención</li>
                                    <li className="flex gap-3"><span className="text-[#d4a853]">✓</span> Gran impacto visual y humor</li>
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
                                Llevo mi propia maleta con todo lo necesario. Tú no tienes que preocuparte de nada logístico, solo de disfrutar con tus invitados.
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
                        <h2 className="text-2xl font-[Cinzel] text-white mb-12 text-center">Preguntas Frecuentes</h2>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqSchema.mainEntity.map((faq, index) => (
                                <details key={index} className="group bg-[#111111]/50 border border-white/5 rounded-2xl overflow-hidden cursor-pointer">
                                    <summary className="flex items-center justify-between p-6 text-white font-medium text-sm">
                                        <span>{faq.name}</span>
                                        <span className="text-[#d4a853] transition-transform group-open:rotate-180">↓</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-400 text-sm font-light leading-relaxed">
                                        {faq.acceptedAnswer.text}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </FadeIn>
                </main>
            </NavFooterClient>
        </>
    );
}

