import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground, FadeIn } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQItem from '@/components/FAQItem';
import Link from 'next/link';

export const metadata = {
    title: { absolute: 'Mago para Despedidas de Soltera en Madrid 2026 | Ángel Ruiz' },
    description: '¿Buscas mago para despedida de soltera en Madrid? Ángel Ruiz ofrece magia de cerca e ilusionismo sorprendente para despedidas de soltera y soltero. Diversión garantizada. ⭐⭐⭐⭐⭐',
    keywords: ['mago despedidas soltera madrid', 'mago para despedida de soltera madrid', 'ilusionista despedida soltera', 'entretenimiento despedida soltera madrid', 'mago despedida soltero madrid', 'contratar mago despedida soltera'],
    alternates: {
        canonical: 'https://angelruiz.world/particulares/despedidas-soltera-madrid',
    },
    openGraph: {
        url: 'https://angelruiz.world/particulares/despedidas-soltera-madrid',
        title: 'Mago para Despedidas de Soltera en Madrid 2026 | Ángel Ruiz',
        description: 'Sorprende a la futura novia (o novio) con magia de cerca en su despedida. Experiencia única e irrepetible en Madrid.',
        images: [{ url: '/images/foto-bio.webp', width: 1200, height: 630 }],
    },
};

const faqSchema = {
    mainEntity: [
        { "@type": "Question", "name": "¿Qué tipo de magia funciona mejor en una despedida de soltera en Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "La magia de cerca o close-up es perfecta para despedidas de soltera. Me muevo entre el grupo realizando efectos sorprendentes e interactivos que generan carcajadas, asombro y momentos que todas recordaréis. No necesito escenario ni montajes: solo vuestras ganas de pasarlo bien." } },
        { "@type": "Question", "name": "¿Puedes hacer un número especial para la novia?", "acceptedAnswer": { "@type": "Answer", "text": "¡Es lo más divertido! Diseño un efecto especial personalizado para la protagonista: algo que la sorprenda completamente y que el grupo disfrute a lo grande. Puede ser un momento íntimo y emocionante o un efecto cómico que haga reír a todas, según prefiera el grupo." } },
        { "@type": "Question", "name": "¿Cuánto cuesta contratar un mago para una despedida de soltera en Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "Para despedidas de soltera el precio suele estar entre 200€ y 400€ dependiendo de la duración y el número de participantes. Para grupos de 10-20 personas, 1 hora suele ser suficiente. Solicita presupuesto sin compromiso." } },
        { "@type": "Question", "name": "¿Actúas en apartamentos, restaurantes o bares de Madrid para despedidas?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, me adapto a cualquier espacio: apartamentos alquilados para la ocasión, restaurantes en Madrid centro, barcos en el Manzanares o cualquier local de Madrid. La magia de cerca no necesita escenario." } },
        { "@type": "Question", "name": "¿Con cuánta antelación debo reservar el mago para la despedida?", "acceptedAnswer": { "@type": "Answer", "text": "Para despedidas de soltera en Madrid recomiendo reservar con 2-3 semanas de antelación como mínimo. Para fechas de temporada alta (primavera y otoño, cuando hay más bodas), intenta reservar con un mes o más." } }
    ]
};

export default function DespedidasSolteraMadridPage() {
    const schemaJson = {
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
                "@type": "Service",
                "@id": "https://angelruiz.world/particulares/despedidas-soltera-madrid/#service",
                "name": "Mago para Despedidas de Soltera en Madrid",
                "provider": { "@type": "Person", "name": "Ángel Ruiz" },
                "areaServed": "Comunidad de Madrid",
                "description": "Espectáculo de magia de cerca para despedidas de soltera y soltero en Madrid. Interactivo, sorprendente y personalizado para la protagonista.",
                "serviceType": "Entertainment",
                "url": "https://angelruiz.world/particulares/despedidas-soltera-madrid"
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqSchema.mainEntity
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
                    { "@type": "ListItem", "position": 2, "name": "Particulares", "item": "https://angelruiz.world/particulares" },
                    { "@type": "ListItem", "position": 3, "name": "Despedidas de Soltera", "item": "https://angelruiz.world/particulares/despedidas-soltera-madrid" }
                ]
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-32 pb-32 px-6 max-w-7xl mx-auto font-sans">
                    <Breadcrumbs />

                    {/* Hero */}
                    <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center mb-24">
                        <FadeIn className="flex-1 space-y-8" y={40}>
                            <div className="inline-block px-4 py-2 rounded-full border border-[#d4a853]/30 bg-[#d4a853]/5">
                                <span className="text-[#d4a853] text-xs font-semibold tracking-widest uppercase">
                                    Despedidas de Soltera en Madrid
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-[Cinzel] text-white font-bold leading-[1.1] tracking-tight">
                                Mago para <br /><span className="text-[#d4a853] italic font-light">Despedidas</span><br /> de Soltera
                            </h1>
                            <p className="text-lg text-slate-300 leading-relaxed max-w-xl font-light">
                                Que la futura novia (o novio) viva algo que nunca olvidará. La magia de cerca de Ángel Ruiz transforma cualquier despedida en Madrid en una experiencia extraordinaria llena de risas, asombro y momentos únicos que todo el grupo recordará para siempre.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-slate-300 text-xs">✨ Efecto especial para la protagonista</div>
                                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-slate-300 text-xs">🎭 Magia interactiva para el grupo</div>
                                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-slate-300 text-xs">📍 Toda la Comunidad de Madrid</div>
                            </div>
                            <div className="pt-4">
                                <ContactButtonClient label="Reservar Mago para Despedida" />
                            </div>
                        </FadeIn>

                        <FadeIn className="flex-1 relative w-full aspect-[4/5] lg:aspect-[3/4]" delay={0.2}>
                            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                                <Image
                                    src="/images/foto-bio.webp"
                                    alt="Ángel Ruiz mago para despedidas de soltera en Madrid"
                                    fill
                                    className="object-cover object-top hover:scale-105 transition-transform duration-[2s] ease-out"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Por qué magia */}
                    <FadeIn y={30} className="py-24 border-t border-white/5">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white mb-8 text-center">¿Por qué un Mago en tu Despedida de Soltera?</h2>
                            <p className="text-slate-300 font-light text-lg leading-relaxed">
                                Las despedidas de soltera en Madrid son cada vez más elaboradas y originales. Ya no basta con una cena y una noche de fiesta. Las novias del siglo XXI buscan experiencias que sorprendan de verdad, que generen conversación y que se conviertan en un recuerdo especial antes del gran día. Un mago profesional como Ángel Ruiz es la opción más impactante y diferente que puedes añadir a la celebración.
                            </p>
                            <p className="text-slate-300 font-light text-lg leading-relaxed">
                                La <strong className="text-white">magia de cerca</strong> de Ángel es íntima, interactiva y perfectamente adaptada al ambiente festivo de una despedida. No es un show formal en escenario: es magia que sucede literalmente en las manos de la novia y sus amigas, que provoca reacciones explosivas, que crea momentos de asombro compartido que querrás tener en fotos y vídeos.
                            </p>

                            {/* Servicios */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                                {[
                                    { title: "Efecto Especial para la Novia", desc: "Un número diseñado exclusivamente para la protagonista. Algo que la sorprenda completamente y que todo el grupo disfrute a lo grande." },
                                    { title: "Magia Interactiva en Grupo", desc: "Me muevo entre todas las participantes creando efectos increíbles que suceden en sus propias manos. Nadie se queda sin vivirlo." },
                                    { title: "Sin Escenario, Sin Límites", desc: "La magia de cerca funciona en cualquier espacio: restaurantes, apartamentos, bares, barcos o el local que hayáis elegido en Madrid." }
                                ].map((item, idx) => (
                                    <div key={idx} className="h-full bg-transparent border border-white/5 p-8 rounded-3xl text-center hover:bg-white/[0.02] transition-colors">
                                        <h4 className="text-white font-medium mb-3 text-lg font-[Cinzel]">{item.title}</h4>
                                        <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Precios orientativos */}
                    <FadeIn y={30} className="py-24 border-t border-white/5">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-[Cinzel] text-white mb-8 text-center">Precios Orientativos</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 rounded-3xl bg-[#111111]/80 border border-white/5">
                                    <h3 className="text-[#d4a853] font-[Cinzel] text-xl mb-3">Sesión Express (45 min)</h3>
                                    <p className="text-3xl font-bold text-white mb-2">Desde 200€</p>
                                    <p className="text-slate-400 text-sm">Ideal para grupos de 8-15 personas. Efectos en grupo y un momento especial para la novia.</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-[#111111]/80 border border-[#d4a853]/30">
                                    <h3 className="text-[#d4a853] font-[Cinzel] text-xl mb-3">Sesión Completa (1-1,5h)</h3>
                                    <p className="text-3xl font-bold text-white mb-2">Desde 300€</p>
                                    <p className="text-slate-400 text-sm">Para grupos más grandes o cuando queréis más tiempo de magia. Incluye número exclusivo personalizado.</p>
                                </div>
                            </div>
                            <p className="text-slate-500 text-xs text-center mt-6">Precios orientativos. Solicita presupuesto personalizado sin compromiso.</p>
                        </div>
                    </FadeIn>

                    {/* FAQ */}
                    <div className="py-24 border-t border-white/5">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-[Cinzel] text-white mb-8">Preguntas Frecuentes</h2>
                            <div className="space-y-4">
                                {faqSchema.mainEntity.map((faq, index) => (
                                    <FAQItem key={index} faq={faq} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Links relacionados */}
                    <div className="py-12 border-t border-white/5">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-[Cinzel] text-white mb-6">También te puede interesar</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Link href="/particulares/bodas" className="block p-6 rounded-2xl bg-[#111111]/80 border border-white/5 hover:border-[#d4a853]/30 transition-all">
                                    <h3 className="text-white font-medium mb-2">Mago para Bodas en Madrid</h3>
                                    <p className="text-slate-400 text-sm">Después de la despedida, la boda. Descubre cómo la magia transforma el cóctel y el banquete.</p>
                                </Link>
                                <Link href="/blog/cuanto-cuesta-mago-boda-madrid" className="block p-6 rounded-2xl bg-[#111111]/80 border border-white/5 hover:border-[#d4a853]/30 transition-all">
                                    <h3 className="text-white font-medium mb-2">¿Cuánto cuesta un mago para una boda?</h3>
                                    <p className="text-slate-400 text-sm">Guía completa de precios y formatos para bodas en Madrid 2026.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </NavFooterClient>
        </>
    );
}
