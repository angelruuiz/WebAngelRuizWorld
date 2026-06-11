import Image from 'next/image';
import Link from 'next/link';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground, FadeIn } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import BusinessSchema from '@/components/BusinessSchema';

export const metadata = {
    title: { absolute: 'Mago para Comuniones en Madrid | Ángel Ruiz · Fiestas Infantiles' },
    description: 'Ángel Ruiz, mago para comuniones en Madrid. Magia participativa, familiar y de alto impacto para hacer de su primera comunión un día inolvidable.',
    alternates: {
        canonical: 'https://angelruiz.world/particulares/comuniones',
    },
    openGraph: {
        title: 'Mago para Comuniones en Madrid | Ángel Ruiz',
        description: 'El mejor mago para comuniones y fiestas infantiles en Madrid. Espectáculos adaptados para toda la familia donde el niño es el gran protagonista.',
        images: [{ url: '/images/magia-comuniones-madrid.webp' }],
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
                    { "@type": "Question", "name": "¿El espectáculo de magia es solo para los niños?", "acceptedAnswer": { "@type": "Answer", "text": "No. Mi enfoque como mago para comuniones en Madrid es crear un show 'familiar'. Los trucos son de alto nivel técnico (cartomagia y magia de salón adaptada) para que los adultos se asombren tanto o más que los pequeños." } },
                    { "@type": "Question", "name": "¿Te desplazas a restaurantes y fincas en Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, me desplazo a cualquier restaurante, finca, hotel o domicilio privado en toda la Comunidad de Madrid. Ya sea en Madrid capital, en la Sierra de Madrid o en los municipios del noroeste." } },
                    { "@type": "Question", "name": "¿El niño de la comunión participa en los trucos?", "acceptedAnswer": { "@type": "Answer", "text": "Por supuesto. El diseño del espectáculo garantiza que el homenajeado sea el gran protagonista. Participa en los efectos más importantes y se lleva recuerdos mágicos imposibles de olvidar." } },
                    { "@type": "Question", "name": "¿Qué incluye el espectáculo de magia familiar?", "acceptedAnswer": { "@type": "Answer", "text": "El espectáculo incluye un equipo de sonido propio para asegurar la calidad en cualquier entorno, efectos visuales de gran formato, cartomagia, magia de salón adaptada y una gran dosis de humor inteligente y participativo." } },
                    { "@type": "Question", "name": "¿Con cuánta antelación debo reservar?", "acceptedAnswer": { "@type": "Answer", "text": "Las fechas de comuniones (mayo y junio) se llenan muy rápido. Lo ideal es reservar con al menos 4-5 meses de antelación para asegurar disponibilidad en la fecha y hora de la celebración." } },
                    { "@type": "Question", "name": "¿El mago necesita mucho espacio para actuar?", "acceptedAnswer": { "@type": "Answer", "text": "Me adapto a casi cualquier espacio. Para el show de salón o magia de escena solo necesito un pequeño rincón donde todos puedan verme cómodamente. Si es al aire libre en un jardín o finca, también cuento con equipo preparado para exteriores." } },
                    { "@type": "Question", "name": "¿Es posible hacer magia mesa por mesa durante la comida?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, la magia itinerante de cerca es una excelente opción si no queréis un show centralizado, aunque para comuniones siempre recomiendo el show de salón donde todos los invitados comparten la risa y la sorpresa simultáneamente con el homenajeado como estrella." } }
                ]
            }
        ]
    };

    return (
        <>
            <BusinessSchema rating={{ "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "worstRating": "1", "ratingCount": "39" }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-32 pb-32 px-6 max-w-7xl mx-auto font-sans">
                    <Breadcrumbs />
                    
                    {/* Hero Section */}
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-24 mt-8">
                        <FadeIn className="flex-1 relative w-full aspect-[4/5] lg:aspect-square" delay={0.2} scale={0.95}>
                            <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-[#111111] shadow-2xl">
                                <Image
                                    src="/images/magia-comuniones-madrid.webp"
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
                                La Primera Comunión es un hito irrepetible. Convierte su celebración en un evento memorable donde el homenajeado sea el auténtico protagonista y ayudante estrella de la magia. Asegúrate de brindarles un día inolvidable.
                            </p>
                            
                            {/* AI-SEO Block stylizado */}
                            <div className="bg-[#111111]/80 rounded-3xl p-6 border border-white/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a853]/10 rounded-full blur-[40px] -mr-10 -mt-10" />
                                <h3 className="text-[#d4a853] font-bold text-sm mb-2 uppercase tracking-wide">¿Qué incluye el show?</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Un espectáculo de 60 minutos con ilusionismo visual, humor familiar y participación directa. Diseñado para mantener la atención de niños y sorprender a los adultos por igual. Magia familiar de alto nivel.
                                </p>
                            </div>

                            <div className="pt-4">
                                <ContactButtonClient label="Solicitar Disponibilidad" />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Storytelling Emocional */}
                    <FadeIn y={30} className="py-24 border-t border-white/5">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white mb-8 text-center">Que su comunión no sea una comida aburrida</h2>
                            <p className="text-slate-300 font-light text-lg leading-relaxed text-justify">
                                Una comunión suele reunir a diferentes generaciones en torno a una mesa: abuelos, tíos, primos pequeños y, por supuesto, el protagonista del día. El mayor reto de estas celebraciones no es el menú, sino mantener la armonía y la diversión una vez que termina la comida. A menudo, los adultos quieren alargar la sobremesa conversando, mientras que los niños se aburren, se inquietan y reclaman atención. Ese choque de energías puede arruinar el recuerdo de un día que debería ser perfecto.
                            </p>
                            <p className="text-slate-300 font-light text-lg leading-relaxed text-justify">
                                Mi espectáculo de magia para comuniones actúa como un puente intergeneracional. Durante una hora, todos —desde el niño de 9 años hasta el abuelo de 80— prestan atención al mismo punto. Se ríen juntos, se sorprenden juntos y comparten una experiencia común. Ya no hay niños corriendo aburridos ni adultos mirando el reloj; hay una familia unida disfrutando del asombro y celebrando al protagonista de la fiesta. Es la diferencia entre una buena comida y un día inolvidable y mágico.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Timeline del Evento */}
                    <FadeIn y={30} className="py-24 border-t border-white/5">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-[Cinzel] text-white mb-6">Timeline del Evento: Cómo se desarrolla</h2>
                            <p className="text-slate-400 font-light text-base max-w-2xl mx-auto">
                                La estructura perfecta para mantener la atención de todos y hacer brillar al protagonista.
                            </p>
                        </div>

                        <div className="space-y-12 max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#111111]/80 rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group">
                                <div className="md:col-span-3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                                    <span className="text-[#d4a853] font-[Cinzel] text-xl block mb-2">Paso 1</span>
                                    <h3 className="text-2xl font-[Cinzel] text-white">El Cóctel / Recepción</h3>
                                </div>
                                <div className="md:col-span-9">
                                    <p className="text-slate-300 font-light leading-relaxed text-justify">
                                        Pequeñas intervenciones de magia de cerca mientras los familiares van llegando al restaurante o finca. Rompo el hielo, presento el asombro y empiezo a generar expectación sin requerir la atención completa de todo el salón.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#111111]/80 rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a853]/5 rounded-full blur-[80px] -mr-20 -mt-20 transition-opacity group-hover:opacity-100 opacity-50" />
                                <div className="md:col-span-3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                                    <span className="text-[#d4a853] font-[Cinzel] text-xl block mb-2">Paso 2</span>
                                    <h3 className="text-2xl font-[Cinzel] text-white">El Banquete</h3>
                                </div>
                                <div className="md:col-span-9 relative z-10">
                                    <p className="text-slate-300 font-light leading-relaxed text-justify">
                                        Durante la comida, dejo que los invitados disfruten del menú tranquilamente. Sin embargo, si noto que los más pequeños terminan rápido y empiezan a inquietarse, puedo realizar pequeñas dinámicas en su mesa para mantenerlos entretenidos.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#111111]/80 rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group">
                                <div className="md:col-span-3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                                    <span className="text-[#d4a853] font-[Cinzel] text-xl block mb-2">Paso 3</span>
                                    <h3 className="text-2xl font-[Cinzel] text-white">La Sobremesa (El Gran Show)</h3>
                                </div>
                                <div className="md:col-span-9">
                                    <p className="text-slate-300 font-light leading-relaxed text-justify">
                                        Justo antes de los regalos o el postre, cuando los adultos quieren relajarse. Monto un show de salón de 60 minutos donde el homenajeado se convierte en la estrella. Humo, música, efectos visuales y mucha risa. El cierre perfecto para la comunión.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

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
                                { num: "01", title: "Protagonismo", desc: "El niño realiza la magia en sus propias manos. Es la estrella del show." },
                                { num: "02", title: "Para Adultos", desc: "Trucos de alto impacto técnico y cartomagia de alto impacto que dejará boquiabiertos a tíos y abuelos." },
                                { num: "03", title: "A Domicilio", desc: "Actuaciones en restaurantes, fincas, salones comunitarios y chalets en todo Madrid." }
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
                                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Animador Infantil</div>
                                <div className="text-xs uppercase tracking-widest text-[#d4a853] font-bold">Mago Profesional</div>
                            </div>
                            {[
                                ["Público Principal", "Solo los niños más pequeños", "Toda la familia al completo"],
                                ["Calidad de Magia", "Básica (Cajas pintadas y trucos comprados)", "Avanzada (Cartomagia de autor)"],
                                ["Rol del Niño", "Uno más del grupo haciendo juegos", "Ayudante principal y estrella mágica"]
                            ].map((row, idx) => (
                                <div key={idx} className="grid grid-cols-3 gap-4 py-4 border-b border-white/5 last:border-0">
                                    <div className="text-sm text-slate-300 font-medium">{row[0]}</div>
                                    <div className="text-sm text-slate-400 font-light pr-4">{row[1]}</div>
                                    <div className="text-sm text-white font-light">{row[2]}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* FAQ & Experto */}
                    <div className="py-24 border-t border-white/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                            <FadeIn>
                                <h2 className="text-3xl font-[Cinzel] text-white mb-8">Dudas Comunes</h2>
                                <div className="space-y-4">
                                    {schema["@graph"].find(g => g["@type"] === "FAQPage").mainEntity.map((faq, index) => (
                                        <details key={index} className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden cursor-pointer">
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

                            <FadeIn delay={0.2} className="bg-gradient-to-br from-[#111111] to-[#0a0a0a] rounded-[2rem] p-10 border border-white/5 flex flex-col sm:flex-row gap-8 items-center sticky top-32">
                                <Image 
                                    src="/images/foto-bio.webp"
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
                                    <div className="mt-6">
                                        <ContactButtonClient label="Solicitar Presupuesto" />
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </main>
            </NavFooterClient>
        </>
    );
}
