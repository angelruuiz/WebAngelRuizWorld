import Image from 'next/image';
import FAQItem from '@/components/FAQItem';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground, FadeIn } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: { absolute: 'Mago para Bodas en Madrid 2026 | Precios y Guía | Ángel Ruiz' },
    description: '¿Buscas mago para tu boda en Madrid? Ángel Ruiz transforma el cóctel y banquete en momentos mágicos inolvidables. Especialista en fincas del noroeste. ⭐⭐⭐⭐⭐ 39 reseñas. Consulta disponibilidad.',
    keywords: ['mago para bodas madrid', 'mago bodas madrid', 'contratar mago boda madrid', 'mago coctel boda madrid', 'ilusionista bodas madrid', 'mago para bodas precio madrid', 'mago boda noroeste madrid', 'entretenimiento bodas madrid', 'mago para mi boda madrid'],
    alternates: {
        canonical: 'https://angelruiz.world/particulares/bodas',
    },
    openGraph: {
        url: 'https://angelruiz.world/particulares/bodas',
        title: 'Mago para Bodas en Madrid 2026 | Ángel Ruiz | Ilusionista Profesional',
        description: 'Transforma el cóctel y el banquete de tu boda en Madrid en una experiencia mágica e inolvidable. +10 años, 39 reseñas 5⭐. Solicita disponibilidad.',
        images: [{ url: '/images/boda-magia-madrid.webp', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago para Bodas en Madrid 2026 | Ángel Ruiz',
        description: 'Magia de cerca para bodas en Madrid. Transforma el cóctel en el momento más recordado del día.',
        images: ['/images/boda-magia-madrid.webp'],
    },
};

export default function BodasDetailPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Magia de cerca para bodas",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Comunidad de Madrid",
        "description": "Servicio de ilusionismo y magia de cerca para bodas.",
        "serviceType": "Wedding Entertainment",
        "url": "https://angelruiz.world/particulares/bodas"
    };

    const faqSchema = {
        "mainEntity": [
            { "@type": "Question", "name": "¿Cuál es el mejor momento para la magia en una boda?", "acceptedAnswer": { "@type": "Answer", "text": "El cóctel de bienvenida es el momento estrella para la magia de cerca, ya que ayuda a romper el hielo entre los invitados. También es muy efectiva durante el banquete para amenizar las esperas entre platos." } },
            { "@type": "Question", "name": "¿Qué tipo de magia se realiza?", "acceptedAnswer": { "@type": "Answer", "text": "Me especializo en magia de cerca (Close-up) y magia itinerante. Son efectos impactantes realizados con cartas, monedas y objetos de los invitados, a escasos centímetros de sus ojos." } },
            { "@type": "Question", "name": "¿Cuáles son las mejores fincas para bodas en Madrid donde actúas?", "acceptedAnswer": { "@type": "Answer", "text": "Trabajo habitualmente en las fincas más exclusivas y bonitas de Madrid y la Sierra, adaptando mi magia de cerca a entornos al aire libre y cócteles elegantes. Si buscas las mejores fincas para bodas en Madrid, te recomiendo contactarme para asesorarte sobre espacios donde el ilusionismo encaja a la perfección." } },
            { "@type": "Question", "name": "¿Te desplazas fuera de Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, cubro eventos en toda España, aunque mi actividad principal se centra en la Comunidad de Madrid y la zona noroeste (Torrelodones, Las Rozas, Majadahonda)." } },
            { "@type": "Question", "name": "¿Con cuánta antelación debo contratar al mago para mi boda?", "acceptedAnswer": { "@type": "Answer", "text": "Lo ideal es reservar con al menos 3 a 6 meses de antelación, especialmente si tu boda es en temporada alta (mayo a octubre). Las fechas más demandadas se reservan rápido, así que cuanto antes me contactes, más fácil será garantizar disponibilidad para tu día." } },
            { "@type": "Question", "name": "¿Cuánto tiempo dura la actuación en una boda?", "acceptedAnswer": { "@type": "Answer", "text": "La duración habitual es de 1 hora y media a 2 horas, aunque se adapta al formato de tu boda. Si solo quieres magia durante el cóctel, con 1 hora suele ser suficiente. Si prefieres cubrir también parte del banquete, ampliamos a 2 horas para que todos los invitados disfruten de la experiencia." } },
            { "@type": "Question", "name": "¿Puedes coordinar con el wedding planner o el catering?", "acceptedAnswer": { "@type": "Answer", "text": "Por supuesto, es algo que hago siempre. Me pongo en contacto con tu wedding planner, con el maître o con el responsable de la finca para coordinar los tiempos de mi actuación. Así me aseguro de no interrumpir momentos clave como el corte de tarta, los discursos o el primer baile. La coordinación previa es parte esencial de mi servicio." } },
            { "@type": "Question", "name": "¿Actúas en fincas fuera de Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, actúo en toda España. Mi zona principal de trabajo es la Comunidad de Madrid y la Sierra noroeste (Torrelodones, Las Rozas, El Escorial, Majadahonda), pero me desplazo sin problema a fincas en Toledo, Segovia, Ávila o cualquier otra provincia. El desplazamiento se gestiona de forma transparente para que no tengas que preocuparte por nada." } },
            { "@type": "Question", "name": "¿La magia es apta para todos los invitados, incluidos niños?", "acceptedAnswer": { "@type": "Answer", "text": "Totalmente. Mi magia de cerca es visual, participativa y apta para todas las edades. Los niños disfrutan tanto como los adultos, y de hecho suelen ser los más expresivos cuando ven un efecto imposible. No utilizo nada que pueda resultar incómodo o inapropiado: es magia elegante, cercana y pensada para que todo el mundo se lleve un recuerdo especial de tu boda." } }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Mago Sierra Madrid", "item": "https://angelruiz.world/mago-sierra-madrid" },
            { "@type": "ListItem", "position": 3, "name": "Bodas", "item": "https://angelruiz.world/particulares/bodas" }
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
                            "priceRange": "€€€",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Zona Noroeste",
                                "addressLocality": "Torrelodones",
                                "addressRegion": "Comunidad de Madrid",
                                "postalCode": "28250",
                                "addressCountry": "ES"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1",
                                "ratingCount": "39"
                            }
                        },
                        {
                            ...serviceSchema,
                            "@type": "Service",
                            "@id": "https://angelruiz.world/particulares/bodas/#service"
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
                    <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center mb-24">
                        <FadeIn className="flex-1 space-y-8" y={40}>
                            <div className="inline-block px-4 py-2 rounded-full border border-[#d4a853]/30 bg-[#d4a853]/5">
                                <span className="text-[#d4a853] text-xs font-semibold tracking-widest uppercase">
                                    Bodas en Madrid y Sierra
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-[Cinzel] text-white font-bold leading-[1.1] tracking-tight">
                                El Día Más <br/><span className="text-[#d4a853] italic font-light">Especial</span>
                            </h1>
                            <p className="text-lg text-slate-300 leading-relaxed max-w-xl font-light">
                                Recuerdos inolvidables construidos en el momento perfecto. La magia de Ángel Ruiz aporta esas emociones de asombro y elegancia que convierten un cóctel de boda en una experiencia legendaria para todos tus invitados. Un día inolvidable merece detalles a la altura.
                            </p>
                            <div className="pt-4">
                                <ContactButtonClient label="Solicitar Disponibilidad" />
                            </div>
                        </FadeIn>
                        
                        <FadeIn className="flex-1 relative w-full aspect-[4/5] lg:aspect-[3/4]" delay={0.2}>
                            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                                <Image
                                    src="/images/boda-magia-madrid.webp"
                                    alt="Mago de bodas en Madrid Angel Ruiz creando recuerdos inolvidables"
                                    fill
                                    className="object-cover object-top hover:scale-105 transition-transform duration-[2s] ease-out"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Storytelling Emocional */}
                    <FadeIn y={30} className="py-24 border-t border-white/5">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white mb-8 text-center">El miedo al silencio: Que ningún invitado se aburra</h2>
                            <p className="text-slate-300 font-light text-lg leading-relaxed text-justify">
                                Has pasado meses planificando cada detalle: las flores, el menú, la música, la finca perfecta. Pero hay algo que a menudo escapa al control de los novios: los tiempos muertos. Ese momento durante el cóctel o entre platos en el que los grupos que no se conocen se quedan en silencio, mirando sus teléfonos, esperando a que ocurra algo. Es el gran temor de cualquier pareja: que sus invitados se aburran en su día más especial.
                            </p>
                            <p className="text-slate-300 font-light text-lg leading-relaxed text-justify">
                                Aquí es donde la magia interviene no como un simple espectáculo, sino como un <strong className="text-white font-normal">catalizador social</strong>. Una sorpresa elegante que irrumpe en el momento exacto. Imagina a ese grupo de compañeros de trabajo que apenas conocen a la familia, estallando en carcajadas y gritos de asombro porque una carta ha desaparecido en sus propias manos. De repente, tienen un tema de conversación. De repente, el hielo se ha roto. De repente, tu boda pasa de ser "una boda más" a ser <em>la boda</em> de la que hablarán durante años. Magia familiar y sofisticada que une a las personas.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Timeline del Evento */}
                    <FadeIn y={30} className="py-24 border-t border-white/5">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-[Cinzel] text-white mb-6">Timeline del Evento: El Asombro Paso a Paso</h2>
                            <p className="text-slate-400 font-light text-base max-w-2xl mx-auto">
                                Descubre cómo la magia se integra orgánicamente en cada fase de tu celebración para garantizar un día inolvidable.
                            </p>
                        </div>

                        <div className="space-y-12 max-w-5xl mx-auto">
                            {/* Recepción */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#111111]/80 rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group">
                                <div className="md:col-span-3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                                    <span className="text-[#d4a853] font-[Cinzel] text-xl block mb-2">Fase 1</span>
                                    <h3 className="text-2xl font-[Cinzel] text-white">La Recepción</h3>
                                </div>
                                <div className="md:col-span-9">
                                    <p className="text-slate-300 font-light leading-relaxed text-justify">
                                        Mientras los invitados van llegando a la finca y vosotros quizá estáis terminando la sesión de fotos, el ambiente puede sentirse un poco frío. Empiezo a acercarme a los primeros grupos con pequeños milagros visuales. Magia rápida, directa, que despierta sonrisas y genera la primera sorpresa del día.
                                    </p>
                                </div>
                            </div>

                            {/* Cóctel */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#111111]/80 rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a853]/5 rounded-full blur-[80px] -mr-20 -mt-20 transition-opacity group-hover:opacity-100 opacity-50" />
                                <div className="md:col-span-3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                                    <span className="text-[#d4a853] font-[Cinzel] text-xl block mb-2">Fase 2</span>
                                    <h3 className="text-2xl font-[Cinzel] text-white">El Cóctel</h3>
                                </div>
                                <div className="md:col-span-9 relative z-10">
                                    <p className="text-slate-300 font-light leading-relaxed text-justify">
                                        El momento estrella. Me muevo ágilmente entre los invitados, realizando magia de cerca (Close-up). Las reacciones son explosivas. El sonido de los aplausos y las risas se contagia por todo el jardín. Es el momento perfecto para crear recuerdos inolvidables y fotografías llenas de emoción espontánea.
                                    </p>
                                </div>
                            </div>

                            {/* Banquete */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#111111]/80 rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group">
                                <div className="md:col-span-3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                                    <span className="text-[#d4a853] font-[Cinzel] text-xl block mb-2">Fase 3</span>
                                    <h3 className="text-2xl font-[Cinzel] text-white">El Banquete</h3>
                                </div>
                                <div className="md:col-span-9">
                                    <p className="text-slate-300 font-light leading-relaxed text-justify">
                                        Intervenciones sutiles mesa a mesa entre plato y plato. Me coordino con el maître para no entorpecer el servicio. Magia elegante y participación colectiva en la mesa para mantener la energía alta y evitar los clásicos bajones de ritmo durante la comida.
                                    </p>
                                </div>
                            </div>

                            {/* Sobremesa */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#111111]/80 rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group">
                                <div className="md:col-span-3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                                    <span className="text-[#d4a853] font-[Cinzel] text-xl block mb-2">Fase 4</span>
                                    <h3 className="text-2xl font-[Cinzel] text-white">La Sobremesa</h3>
                                </div>
                                <div className="md:col-span-9">
                                    <p className="text-slate-300 font-light leading-relaxed text-justify">
                                        Justo antes del baile, un efecto especial dedicado exclusivamente a los novios. Un momento íntimo, cargado de emoción y significado, que servirá de puente perfecto hacia la fiesta. Una sorpresa que atesoraréis para siempre.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Experiencia Section */}
                    <div className="py-24 border-t border-white/5">
                        <FadeIn y={20} className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-[Cinzel] text-white mb-6">Tranquilidad y Exclusividad</h2>
                            <p className="text-slate-300 font-light text-lg leading-relaxed">
                                Un servicio diseñado para que el día de tu boda solo tengas que disfrutar. Me coordino directamente con tu wedding planner o la finca para asegurar que cada momento ocurra en su tiempo exacto.
                            </p>
                        </FadeIn>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {[
                                { title: "Cero Estrés", desc: "Coordinación total con catering y planners. No tienes que preocuparte por nada logístico." },
                                { title: "Zona Noroeste", desc: "Desplazamiento incluido a las mejores fincas de Madrid, Torrelodones y la Sierra." },
                                { title: "Magia Premium", desc: "Formado bajo la tutela de los mejores ilusionistas, con un estilo elegante y no invasivo." }
                            ].map((item, idx) => (
                                <FadeIn key={idx} delay={idx * 0.15} y={20}>
                                    <div className="h-full bg-transparent border border-white/5 p-8 rounded-3xl text-center hover:bg-white/[0.02] transition-colors">
                                        <h4 className="text-white font-medium mb-3 text-xl">{item.title}</h4>
                                        <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    {/* FAQ & Blog Section */}
                    <div className="py-24 border-t border-white/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <FadeIn>
                                <h2 className="text-3xl font-[Cinzel] text-white mb-8">Preguntas Frecuentes</h2>
                                <div className="space-y-4">
                                    {faqSchema.mainEntity.map((faq, index) => (
                                <FAQItem key={index} faq={faq} />
                            ))}
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <h2 className="text-3xl font-[Cinzel] text-white mb-8">Inspiración para tu Enlace</h2>
                                <div className="space-y-6">
                                    <a href="/blog/cuanto-cuesta-mago-boda-madrid" className="block p-8 rounded-3xl bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-white/5 hover:border-[#d4a853]/30 transition-all">
                                        <span className="text-[#d4a853] text-[10px] uppercase tracking-widest mb-3 block">Transparencia</span>
                                        <h3 className="text-white text-xl mb-2">¿Cuánto cuesta un mago para boda?</h3>
                                        <p className="text-slate-400 font-light text-sm">Guía completa de precios y formatos en Madrid.</p>
                                    </a>
                                    <a href="/blog/ideas-originales-entretenimiento-bodas-madrid" className="block p-8 rounded-3xl bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-white/5 hover:border-[#d4a853]/30 transition-all">
                                        <span className="text-[#d4a853] text-[10px] uppercase tracking-widest mb-3 block">Ideas Creativas</span>
                                        <h3 className="text-white text-xl mb-2">10 Ideas de Entretenimiento</h3>
                                        <p className="text-slate-400 font-light text-sm">Sorprende a tus invitados con detalles únicos.</p>
                                    </a>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </main>
        </NavFooterClient>
        </>
    );
}

