import Image from 'next/image';
import Link from 'next/link';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground, FadeIn } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import BusinessSchema from '@/components/BusinessSchema';

export const metadata = {
    title: 'Mago para Comuniones en Madrid | Ángel Ruiz · Fiestas Infantiles',
    description: 'Ángel Ruiz, mago para comuniones en Madrid. Magia participativa, familiar y de alto impacto para hacer de su primera comunión un día inolvidable.',
    alternates: {
        canonical: 'https://angelruiz.world/particulares/comuniones',
    },
    openGraph: {
        title: 'Mago para Comuniones en Madrid | Ángel Ruiz',
        description: 'El mejor mago para comuniones y fiestas infantiles en Madrid. Espectáculos adaptados para toda la familia donde el niño es el gran protagonista.',
        images: [{ url: '/images/magia-comuniones-madrid.jpg' }],
    }
};

export default function MagoComunionesPage() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://angelruiz.world/particulares/comuniones/#service",
                "name": "Mago para Comuniones en Madrid",
                "provider": { "@type": "Person", "name": "Ángel Ruiz" },
                "areaServed": "Madrid",
                "description": "Espectáculo de magia profesional para primeras comuniones en Madrid. Entretenimiento premium para niños y adultos.",
                "serviceType": "Entertainment",
                "url": "https://angelruiz.world/particulares/comuniones"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
                    { "@type": "ListItem", "position": 2, "name": "Particulares", "item": "https://angelruiz.world/particulares" },
                    { "@type": "ListItem", "position": 3, "name": "Comuniones", "item": "https://angelruiz.world/particulares/comuniones" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "¿Cuánto dura el espectáculo del mago para comuniones?", "acceptedAnswer": { "@type": "Answer", "text": "La duración ideal de un espectáculo de magia para una primera comunión es de 50 a 60 minutos. Este tiempo es perfecto para mantener la atención de los niños y sorprender a los adultos sin que el ritmo decaiga." } },
                    { "@type": "Question", "name": "¿El espectáculo de magia es solo para los niños?", "acceptedAnswer": { "@type": "Answer", "text": "No. Mi enfoque como mago para comuniones en Madrid es crear un show 'familiar'. Los trucos son de alto nivel técnico (cartomagia y mentalismo adaptado) para que los adultos se asombren tanto o más que los pequeños." } },
                    { "@type": "Question", "name": "¿Te desplazas a restaurantes y fincas en Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, me desplazo a cualquier restaurante, finca, hotel o domicilio privado en toda la Comunidad de Madrid. Ya sea en Madrid capital, en la Sierra de Madrid o en los municipios del noroeste." } },
                    { "@type": "Question", "name": "¿El niño de la comunión participa en los trucos?", "acceptedAnswer": { "@type": "Answer", "text": "Por supuesto. El diseño del espectáculo garantiza que el homenajeado sea el gran protagonista. Participa en los efectos más importantes y se lleva recuerdos mágicos imposibles de olvidar." } }
                ]
            }
        ]
    };

    return (
        <>
            <BusinessSchema />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-32 pb-32 px-6 max-w-7xl mx-auto font-sans">
                    <Breadcrumbs />
                    
                    {/* Hero Section */}
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-32 mt-8">
                        <FadeIn className="flex-1 relative w-full aspect-[4/5] lg:aspect-square" delay={0.2} scale={0.95}>
                            <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-[#111111] shadow-2xl">
                                <Image
                                    src="/images/magia-comuniones-madrid.jpg"
                                    alt="Mago para comuniones en Madrid - Ángel Ruiz"
                                    fill
                                    className="object-cover transition-transform duration-[3s] ease-in-out hover:scale-110"
                                    priority
                                />
                                <div className="absolute inset-0 bg-[#d4a853]/10 mix-blend-overlay" />
                            </div>
                        </FadeIn>
                        
                        <FadeIn className="flex-1 space-y-8" y={40}>
                            <div className="inline-block px-4 py-2 rounded-full border border-[#d4a853]/30 bg-[#d4a853]/5">
                                <span className="text-[#d4a853] text-xs font-semibold tracking-widest uppercase">
                                    Primera Comunión
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-[Cinzel] text-white font-bold leading-[1.1] tracking-tight">
                                El Día de su <br/><span className="text-[#d4a853] italic font-light">Vida</span>
                            </h1>
                            <p className="text-lg text-slate-300 leading-relaxed font-light">
                                La Primera Comunión es un hito. Convierte su celebración en un evento memorable donde el homenajeado sea el auténtico protagonista y ayudante estrella de la magia.
                            </p>
                            
                            {/* AI-SEO Block stylizado */}
                            <div className="bg-[#111111]/80 rounded-3xl p-6 border border-white/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a853]/10 rounded-full blur-[40px] -mr-10 -mt-10" />
                                <h3 className="text-[#d4a853] font-bold text-sm mb-2 uppercase tracking-wide">¿Qué incluye el show?</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Un espectáculo de 60 minutos con ilusionismo visual, humor familiar y participación directa. Diseñado para mantener la atención de niños y sorprender a los adultos por igual.
                                </p>
                            </div>

                            <div className="pt-4">
                                <ContactButtonClient label="Solicitar Disponibilidad" />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Features Section - Minimalist Cards */}
                    <FadeIn y={30} className="py-24 border-t border-white/5">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-[Cinzel] text-white mb-6">Magia que Une a la Familia</h2>
                            <p className="text-slate-400 font-light text-base max-w-2xl mx-auto">
                                No es una simple animación infantil; es ilusionismo profesional adaptado para un público transversal.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { num: "01", title: "Protagonismo", desc: "El niño realiza la magia en sus propias manos." },
                                { num: "02", title: "Para Adultos", desc: "Trucos de alto impacto técnico y mentalismo." },
                                { num: "03", title: "A Domicilio", desc: "Actuaciones en restaurantes, fincas y chalets." }
                            ].map((feat, idx) => (
                                <div key={idx} className="bg-transparent border border-white/10 rounded-[2rem] p-10 hover:border-[#d4a853]/40 transition-colors group">
                                    <span className="text-[#d4a853] font-[Cinzel] text-xl block mb-4">{feat.num}.</span>
                                    <h3 className="text-white text-lg font-medium mb-3">{feat.title}</h3>
                                    <p className="text-slate-400 font-light text-sm">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* AI-SEO Comparison Table - Minimalist */}
                    <FadeIn y={30} className="py-24 border-t border-white/5 max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-[Cinzel] text-white">Mago Profesional vs. Animador</h2>
                        </div>
                        <div className="bg-[#111111]/50 rounded-[2rem] border border-white/5 p-8 overflow-hidden">
                            <div className="grid grid-cols-3 gap-4 mb-6 border-b border-white/10 pb-4">
                                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Característica</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Animador</div>
                                <div className="text-xs uppercase tracking-widest text-[#d4a853] font-bold">Mago Profesional</div>
                            </div>
                            {[
                                ["Público", "Solo infantil", "Toda la familia"],
                                ["Calidad de Magia", "Básica (Trucos comprados)", "Avanzada (Cartomagia / Mentalismo)"],
                                ["Rol del Niño", "Uno más del grupo", "Ayudante principal y estrella"]
                            ].map((row, idx) => (
                                <div key={idx} className="grid grid-cols-3 gap-4 py-4 border-b border-white/5 last:border-0">
                                    <div className="text-sm text-slate-300 font-medium">{row[0]}</div>
                                    <div className="text-sm text-slate-400 font-light">{row[1]}</div>
                                    <div className="text-sm text-white font-light">{row[2]}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* FAQ & Experto */}
                    <div className="py-24 border-t border-white/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                            <FadeIn>
                                <h2 className="text-2xl font-[Cinzel] text-white mb-8">Dudas Comunes</h2>
                                <div className="space-y-4">
                                    <details className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden cursor-pointer">
                                        <summary className="flex items-center justify-between p-6 text-white font-medium text-sm">
                                            <span>¿Cuánto dura el espectáculo?</span>
                                            <span className="text-[#d4a853] transition-transform group-open:rotate-180">↓</span>
                                        </summary>
                                        <div className="px-6 pb-6 text-slate-400 text-sm font-light leading-relaxed">
                                            Entre 50 y 60 minutos, el tiempo perfecto para mantener la atención máxima de los niños y asombrar a los adultos sin que decaiga el ritmo.
                                        </div>
                                    </details>
                                    <details className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden cursor-pointer">
                                        <summary className="flex items-center justify-between p-6 text-white font-medium text-sm">
                                            <span>¿Te desplazas fuera de Madrid centro?</span>
                                            <span className="text-[#d4a853] transition-transform group-open:rotate-180">↓</span>
                                        </summary>
                                        <div className="px-6 pb-6 text-slate-400 text-sm font-light leading-relaxed">
                                            Sí, cubro toda la Comunidad de Madrid, especialmente la zona Noroeste (Las Rozas, Majadahonda, Torrelodones) actuando en restaurantes, fincas y domicilios.
                                        </div>
                                    </details>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2} className="bg-gradient-to-br from-[#111111] to-[#0a0a0a] rounded-[2rem] p-10 border border-white/5 flex flex-col sm:flex-row gap-8 items-center">
                                <Image 
                                    src="/images/foto-bio.png"
                                    alt="Ángel Ruiz - Mago e Ilusionista Profesional"
                                    width={120}
                                    height={120}
                                    className="rounded-full border border-[#d4a853]/50 object-cover aspect-square"
                                />
                                <div>
                                    <h3 className="text-xl font-[Cinzel] text-white mb-2 uppercase">Garantía de Calidad</h3>
                                    <p className="text-slate-400 font-light text-sm leading-relaxed">
                                        Con más de 10 años de experiencia, Ángel Ruiz aplica la misma psicología y perfeccionismo técnico de sus shows corporativos para crear un espectáculo infantil donde los adultos no paran de reír ni de asombrarse.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </main>
            </NavFooterClient>
        </>
    );
}
