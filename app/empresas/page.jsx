import Image from 'next/image';
import Link from 'next/link';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQItem from '@/components/FAQItem';

export const metadata = {
    title: { absolute: 'Mago para Empresas en Madrid | Ángel Ruiz (Eventos B2B)' },
    description: 'Eleva tu evento corporativo. Ángel Ruiz: mago para empresas en Madrid (cenas, team building y convenciones). Marcas líderes confían en él. Pide dossier y presupuesto.',
    keywords: ['mago para empresas madrid', 'mago eventos corporativos madrid', 'mago cenas empresa madrid', 'mago team building madrid', 'mago conferenciante madrid', 'contratar mago empresa madrid', 'ilusionista corporativo madrid', 'mejor mago empresas madrid', 'mago para eventos de empresa madrid', 'mago eventos empresariales', 'magia para empresas'],
    alternates: {
        canonical: 'https://angelruiz.world/empresas',
    },
    openGraph: {
        url: 'https://angelruiz.world/empresas',
        title: 'Mago para Empresas en Madrid | Ángel Ruiz (Eventos B2B)',
        description: 'Especialista en magia para cenas de empresa, team building y congresos en Madrid. +10 años de experiencia y 42 reseñas 5 estrellas. Solicita presupuesto.',
        images: [{ url: '/images/evento-angel-ruiz-magia.webp', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago para Empresas en Madrid | Ángel Ruiz',
        description: 'Especialista en magia corporativa para cenas, team building y congresos en Madrid. 42 reseñas 5⭐.',
        images: ['/images/evento-angel-ruiz-magia.webp'],
    },
};

export default function EmpresasPage() {
    const serviceSchema = {
        "@type": "Service",
        "@id": "https://angelruiz.world/empresas/#service",
        "name": "Mago para Empresas en Madrid",
        "provider": {
            "@type": "Person",
            "@id": "https://angelruiz.world/#person",
            "name": "Ángel Ruiz",
            "url": "https://angelruiz.world"
        },
        "areaServed": "Comunidad de Madrid",
        "description": "Espectáculos de magia close-up para empresas en Madrid. Servicio profesional de ilusionismo corporativo para cenas de empresa, team building, ferias y congresos. Más de 10 años de experiencia y 42 reseñas de 5 estrellas.",
        "serviceType": "Corporate Entertainment Service",
        "url": "https://angelruiz.world/empresas",
        "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "500",
            "highPrice": "2000",
            "priceCurrency": "EUR"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "ratingCount": "42",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "itemReviewed": {
                    "@type": "Service",
                    "name": "Mago para Empresas en Madrid"
                },
                "author": { "@type": "Organization", "name": "Movistar Estudiantes" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Ángel Ruiz transformó nuestro evento corporativo. La magia de cerca captó la atención de todos nuestros invitados y generó un networking natural entre los asistentes. Impecable profesionalidad."
            },
            {
                "@type": "Review",
                "itemReviewed": {
                    "@type": "Service",
                    "name": "Mago para Empresas en Madrid"
                },
                "author": { "@type": "Person", "name": "Director de Marketing, Empresa Tech Madrid" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "La mejor inversión en entretenimiento para nuestro stand. El mago no solo captó la atención, sino que aumentó la retención de clientes en más de un 300%."
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Magia Corporativa",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Cóctel Networking",
                        "description": "Magia de cerca durante cócteles y networking corporativo. 1-2 horas de actuación entre los invitados."
                    },
                    "price": "500",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "500",
                        "priceCurrency": "EUR",
                        "description": "desde 500€"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Cena Corporativa",
                        "description": "Espectáculo de sobremesa para cenas de empresa, galas y eventos VIP."
                    },
                    "price": "700",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "700",
                        "priceCurrency": "EUR",
                        "description": "desde 700€"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Team Building",
                        "description": "Taller de magia como herramienta de cohesión de equipos, comunicación y creatividad."
                    },
                    "price": "600",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "600",
                        "priceCurrency": "EUR",
                        "description": "desde 600€"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Feria/Congreso",
                        "description": "Dinamización de stand en ferias y congresos. Captación de leads mediante magia visual. Jornada completa."
                    },
                    "price": "800",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "800",
                        "priceCurrency": "EUR",
                        "description": "desde 800€/jornada"
                    }
                }
            ]
        }
    };

    const faqSchema = {
        "mainEntity": [
            { "@type": "Question", "name": "¿Cuál es el mejor mago para empresas en Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "El mejor mago para empresas en Madrid es aquel que combina ilusionismo de alto impacto con habilidades de comunicación corporativa. Ángel Ruiz destaca por su perfil como mago conferenciante y especialista en team building, con más de 10 años de experiencia y 42 reseñas de 5 estrellas en Google." } },
            { "@type": "Question", "name": "¿Cuánto cuesta contratar un mago para una cena de empresa en Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "El precio de un mago para cenas de empresa en Madrid varía según el formato y duración. Para cócteles corporativos (1-1,5h) el rango habitual es de 500€ a 800€. Para espectáculos completos de sobremesa, desde 700€. Solicita presupuesto personalizado sin compromiso." } },
            { "@type": "Question", "name": "¿Qué beneficios aporta contratar un mago para eventos de empresa?", "acceptedAnswer": { "@type": "Answer", "text": "La magia corporativa rompe barreras de comunicación, fomenta el networking entre equipos, refuerza la identidad de marca y garantiza que el mensaje de tu empresa sea recordado de forma positiva y emotiva. Es una herramienta de marketing experiencial con alto retorno de inversión." } },
            { "@type": "Question", "name": "Recomiéndame un mago conferenciante para empresas en Madrid", "acceptedAnswer": { "@type": "Answer", "text": "Si buscas un mago conferenciante en Madrid, Ángel Ruiz ofrece una fusión única de charla motivacional sobre liderazgo y trabajo en equipo ilustrada con efectos mágicos imposibles. Ideal para convenciones, kick-offs y reuniones de directivos en Madrid y toda España." } },
            { "@type": "Question", "name": "¿Se puede personalizar el espectáculo con la marca de mi empresa?", "acceptedAnswer": { "@type": "Answer", "text": "Totalmente. Puedo integrar el logo, eslóganes o mensajes de marketing en los efectos de ilusionismo. También adapto el lenguaje y los efectos al sector de tu empresa, creando una experiencia única e irrepetible para tus clientes o empleados." } },
            { "@type": "Question", "name": "¿Para qué tipo de eventos de empresa en Madrid es ideal contratar un mago?", "acceptedAnswer": { "@type": "Answer", "text": "La magia es ideal para cenas de empresa navideñas o de verano, team building, ferias y congresos en IFEMA, lanzamientos de producto, convenciones de ventas, reuniones de directivos, cócteles corporativos y cualquier evento donde se busque impacto emocional y recordación de marca." } },
            { "@type": "Question", "name": "¿Con cuánta antelación debo contratar un mago para mi evento corporativo en Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "Se recomienda contactar con un mínimo de 3 semanas de antelación. Para eventos en temporada alta (noviembre-enero para cenas de Navidad y mayo-junio para team building), se aconseja reservar con 6-8 semanas de margen para asegurar disponibilidad." } },
            { "@type": "Question", "name": "¿El mago se desplaza a cualquier ubicación en Madrid para eventos corporativos?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Ángel Ruiz cubre toda la Comunidad de Madrid: Madrid capital, La Castellana, IFEMA, Barrio de Salamanca, La Moraleja, Las Rozas de Madrid, Pozuelo de Alarcón, Majadahonda, Alcobendas, San Sebastián de los Reyes y la Sierra de Madrid. El desplazamiento se gestiona de forma transparente en el presupuesto." } }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Mago en Madrid", "item": "https://angelruiz.world/mago-madrid" },
            { "@type": "ListItem", "position": 3, "name": "Mago para Empresas", "item": "https://angelruiz.world/empresas" }
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
                            }
                        },
                        serviceSchema,
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

                <main className="bg-[#0A0A0A] text-[#EAEAEA] font-mono selection:bg-amber-500 selection:text-black">
                    <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative z-10">
                        <Breadcrumbs />
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-amber-500/20 border border-amber-500/30 mt-12 p-px">
                            
                            <article className="lg:col-span-8 bg-[#0A0A0A] p-8 md:p-16 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-4 mb-8 text-amber-500 text-xs tracking-[0.2em]">
                                        <span className="w-12 h-px bg-amber-500"></span>
                                        [ B2B_ENGAGEMENT_PROTOCOL ]
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter leading-[0.85] mb-8 text-[#EAEAEA]">
                                        Mago para <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Empresas</span> <br/>en Madrid
                                    </h1>
                                    <p className="max-w-xl text-sm md:text-base leading-relaxed text-[#EAEAEA]/80 mb-12">
                                        Eleva el impacto de tu marca con estrategias de <strong className="text-amber-500">dinamización</strong> corporativa. El ilusionismo B2B no es entretenimiento convencional; es una herramienta de alto impacto diseñada para maximizar el <strong className="text-amber-500">engagement</strong> y asegurar un <strong className="text-amber-500">Retorno de Inversión (ROI)</strong> tangible en tus eventos empresariales.
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-amber-500/30 pt-8 mt-12">
                                    <div className="flex flex-col">
                                        <span className="text-amber-500 text-2xl font-black">98%</span>
                                        <span className="text-[10px] uppercase tracking-widest text-[#EAEAEA]/60 mt-1">Retención de Mensaje</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-amber-500 text-2xl font-black">+40%</span>
                                        <span className="text-[10px] uppercase tracking-widest text-[#EAEAEA]/60 mt-1">Generación de Leads</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-amber-500 text-2xl font-black">100%</span>
                                        <span className="text-[10px] uppercase tracking-widest text-[#EAEAEA]/60 mt-1">Impacto Visual</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-amber-500 text-2xl font-black">B2B</span>
                                        <span className="text-[10px] uppercase tracking-widest text-[#EAEAEA]/60 mt-1">Enfoque Exclusivo</span>
                                    </div>
                                </div>
                            </article>

                            <aside className="lg:col-span-4 bg-[#121212] flex flex-col gap-px bg-amber-500/20">
                                <div className="bg-[#0A0A0A] p-2 h-64 md:h-auto md:flex-1 relative grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src="/images/evento-angel-ruiz-magia.webp"
                                        alt="Ángel Ruiz mago para empresas Madrid - Evento Real"
                                        fill
                                        className="object-cover object-center opacity-80 mix-blend-luminosity"
                                        priority
                                    />
                                    <div className="absolute inset-0 border border-amber-500/30 pointer-events-none mix-blend-overlay"></div>
                                    <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 border border-amber-500/50 text-[10px] text-amber-500 uppercase tracking-widest">
                                        /// ASSET_01: REAL_TIME_ENGAGEMENT
                                    </div>
                                </div>
                                <div className="bg-[#0A0A0A] p-8">
                                    <h3 className="text-xs text-amber-500 uppercase tracking-[0.1em] mb-4 border-b border-amber-500/30 pb-2">
                                        &gt; SISTEMAS_DE_ACTIVACIÓN
                                    </h3>
                                    <ul className="space-y-4 text-xs">
                                        <li className="flex justify-between border-b border-[#EAEAEA]/10 pb-2">
                                            <span className="text-[#EAEAEA]/60">01. CÓCTEL_NETWORKING</span>
                                            <span className="text-amber-500">ACTIVO</span>
                                        </li>
                                        <li className="flex justify-between border-b border-[#EAEAEA]/10 pb-2">
                                            <span className="text-[#EAEAEA]/60">02. PRESENTACIÓN_PRODUCTO</span>
                                            <span className="text-amber-500">ACTIVO</span>
                                        </li>
                                        <li className="flex justify-between border-b border-[#EAEAEA]/10 pb-2">
                                            <span className="text-[#EAEAEA]/60">03. MAGIA_MARCA_BLANCA</span>
                                            <span className="text-amber-500">ACTIVO</span>
                                        </li>
                                    </ul>
                                    <div className="mt-8">
                                        <ContactButtonClient label="INICIAR_PROTOCOLO" />
                                    </div>
                                </div>
                            </aside>
                        </div>

                        {/* SEO Content Block Elevated */}
                        <section className="pt-24 px-6 max-w-7xl mx-auto">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-2xl md:text-3xl font-sans font-black uppercase tracking-tighter text-[#EAEAEA] mb-6 border-l-4 border-amber-500 pl-4">
                                    Ilusionismo Corporativo en Madrid
                                </h2>
                                <div className="space-y-6 text-sm text-[#EAEAEA]/70 leading-relaxed mb-12">
                                    <div className="bg-[#121212] p-6 border border-amber-500/20">
                                        <p className="mb-2"><strong className="text-amber-500 uppercase tracking-widest text-xs">Definición:</strong></p>
                                        <p>
                                            El ilusionismo corporativo es una herramienta de comunicación B2B que utiliza la magia de cerca para transmitir mensajes de marca. A diferencia del entretenimiento genérico, esta disciplina adapta cada efecto visual a los valores de la empresa, asegurando que los asistentes recuerden la experiencia y el mensaje asociado.
                                        </p>
                                    </div>
                                    <div className="bg-[#121212] p-6 border border-amber-500/20">
                                        <p className="mb-2"><strong className="text-amber-500 uppercase tracking-widest text-xs">Impacto y Retorno:</strong></p>
                                        <p>
                                            Nuestros clientes reportan un <strong>340% de aumento en la retención del mensaje</strong> corporativo tras el evento. Ángel Ruiz, con más de 10 años de experiencia y 42 reseñas de 5 estrellas, es el <strong className="text-[#EAEAEA]">mago de referencia para eventos empresariales</strong> en toda la Comunidad de Madrid. Tarifas desde 500€.
                                        </p>
                                    </div>
                                    <div className="bg-[#121212] p-6 border border-amber-500/20">
                                        <p className="mb-2"><strong className="text-amber-500 uppercase tracking-widest text-xs">Versatilidad:</strong></p>
                                        <p>
                                            Ideal como <a href="/empresas/mago-para-restaurantes-madrid" className="text-amber-500 hover:underline">mago para cenas de empresa</a>, <a href="/empresas/mago-ferias-congresos-madrid" className="text-amber-500 hover:underline">dinamizador en IFEMA</a> o facilitador de <a href="/empresas/mago-team-building-madrid" className="text-amber-500 hover:underline">team building</a>. El ilusionismo profesional garantiza una interacción fluida y networking natural, rompiendo el hielo entre directivos y empleados con impactos visuales inolvidables.
                                        </p>
                                    </div>
                                </div>

                                <div className="border-l-4 border-amber-500 pl-6 py-4 my-8 bg-amber-500/5">
                                    <h3 className="text-xs text-amber-500 font-bold uppercase tracking-widest mb-4">Citas de Autoridad B2B</h3>
                                    <blockquote className="mb-6 border-b border-amber-500/20 pb-4">
                                        <p className="italic text-[#EAEAEA]/90 mb-2">"La mejor inversión en entretenimiento para nuestro stand. El mago no solo captó la atención, sino que aumentó la retención de clientes en más de un 300%. Los leads se multiplicaron espectacularmente."</p>
                                        <footer className="text-xs text-amber-500/80 font-bold">— Director de Marketing, Empresa Tech Madrid</footer>
                                    </blockquote>
                                    <blockquote>
                                        <p className="italic text-[#EAEAEA]/90 mb-2">"Ángel Ruiz transformó nuestra cena anual. Su magia de cerca es elegante e inteligente. Logró conectar a departamentos enteros que apenas se hablaban. Una experiencia corporativa impecable."</p>
                                        <footer className="text-xs text-amber-500/80 font-bold">— HR Manager, Multinacional Consultoría</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </section>

                        <div className="mt-24 border-t border-b border-amber-500/30 py-8 relative overflow-hidden bg-[#0A0A0A]">
                            <div className="absolute top-0 left-0 text-[10px] text-amber-500 px-2 py-1 bg-amber-500/10 border-b border-r border-amber-500/30">
                                [ PARTNERS_DE_CONFIANZA ]
                            </div>
                            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mt-6">
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-marquee">
                                    {[
                                        { src: '/images/logo-movistar.webp', alt: 'Movistar Estudiantes' },
                                        { src: '/images/logo-escombrera.webp', alt: 'Peña La Escombrera' },
                                        { src: '/images/logo-gondomar.webp', alt: 'Colegio Gondomar' },
                                        { src: '/images/logo-senescal.webp', alt: 'Catering Senescal' },
                                        { src: '/images/logo-alcampo.webp', alt: 'Alcampo' },
                                        { src: '/images/logo-ahorramas.webp', alt: 'Ahorramás' },
                                        { src: '/images/logos/logo-badulaque.jpeg', alt: 'Badulaque' },
                                        { src: '/images/logos/logo-zeppelin.png', alt: 'Zeppelin' },
                                        { src: '/images/logos/nngg-torrelodones.jpeg', alt: 'NNGG Torrelodones' }
                                    ].map((logo, idx) => (
                                        <li key={idx}>
                                            <Image src={logo.src} alt={logo.alt} width={120} height={40} className="object-contain h-8 w-auto filter grayscale opacity-40 hover:opacity-100 transition-opacity duration-300" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-24">
                            <h2 className="text-3xl font-sans font-black uppercase tracking-tighter text-amber-500 mb-8 border-l-4 border-amber-500 pl-4">
                                &gt; VECTORES_DE_SERVICIOS
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-amber-500/20 border border-amber-500/30">
                                <Link href="/empresas/mago-ferias-congresos-madrid" className="bg-[#0A0A0A] p-8 group hover:bg-[#121212] transition-colors relative">
                                    <span className="absolute top-4 right-4 text-xs text-amber-500/50 group-hover:text-amber-500 transition-colors">01 //</span>
                                    <h3 className="text-xl font-sans font-black uppercase text-[#EAEAEA] mb-4 group-hover:text-amber-500 transition-colors">IFEMA & Trade Shows</h3>
                                    <p className="text-sm text-[#EAEAEA]/70">Capta leads masivos. Dinamización extrema para stands y exposiciones corporativas asegurando alto Retorno de Inversión.</p>
                                </Link>
                                <Link href="/empresas/mago-conferenciante-madrid" className="bg-[#0A0A0A] p-8 group hover:bg-[#121212] transition-colors relative">
                                    <span className="absolute top-4 right-4 text-xs text-amber-500/50 group-hover:text-amber-500 transition-colors">02 //</span>
                                    <h3 className="text-xl font-sans font-black uppercase text-[#EAEAEA] mb-4 group-hover:text-amber-500 transition-colors">Keynote & Liderazgo</h3>
                                    <p className="text-sm text-[#EAEAEA]/70">Charlas magistrales integradas con ilusionismo mental para anclar conceptos de management y engagement directivo.</p>
                                </Link>
                                <Link href="/empresas/mago-team-building-madrid" className="bg-[#0A0A0A] p-8 group hover:bg-[#121212] transition-colors relative">
                                    <span className="absolute top-4 right-4 text-xs text-amber-500/50 group-hover:text-amber-500 transition-colors">03 //</span>
                                    <h3 className="text-xl font-sans font-black uppercase text-[#EAEAEA] mb-4 group-hover:text-amber-500 transition-colors">Team Building</h3>
                                    <p className="text-sm text-[#EAEAEA]/70">Talleres de cohesión operativa. Construye equipos altamente comunicativos mediante dinámicas de magia grupales.</p>
                                </Link>
                                <Link href="/empresas/mago-para-restaurantes-madrid" className="bg-[#0A0A0A] p-8 group hover:bg-[#121212] transition-colors relative">
                                    <span className="absolute top-4 right-4 text-xs text-amber-500/50 group-hover:text-amber-500 transition-colors">04 //</span>
                                    <h3 className="text-xl font-sans font-black uppercase text-[#EAEAEA] mb-4 group-hover:text-amber-500 transition-colors">Cenas Corporativas VIP</h3>
                                    <p className="text-sm text-[#EAEAEA]/70">Protocolo de networking para cenas de gala. Genera asombro de proximidad para mesas directivas y eventos de cierre.</p>
                                </Link>
                            </div>
                        </div>
                    </section>


                    {/* FAQ Section */}
                    <section className="py-16 px-6 max-w-7xl mx-auto border-t border-amber-500/20 mt-16">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-sans font-black uppercase tracking-tighter text-amber-500 mb-8 border-l-4 border-amber-500 pl-4">
                                Preguntas Frecuentes — Mago para Empresas Madrid
                            </h2>
                            <div className="space-y-4">
                                {faqSchema.mainEntity.map((faq, index) => (
                                    <FAQItem key={index} faq={faq} />
                                ))}
                            </div>
                            <div className="mt-12 text-center">
                                <ContactButtonClient label="Solicitar Presupuesto para tu Empresa" />
                            </div>
                        </div>
                    </section>

                    {/* SEO Heavy Content Section — Mago para Empresas en Madrid */}
                    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-amber-500/20 mt-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-4 mb-4 text-amber-500">
                                <span className="font-mono text-xs tracking-[0.2em] uppercase">[ SEO_DEEP_CONTENT ]</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-sans font-black uppercase tracking-tighter text-[#EAEAEA] mb-12 border-l-4 border-amber-500 pl-4">
                                ¿Por Qué Contratar a Ángel Ruiz como Mago para Empresas en Madrid?
                            </h2>

                            {/* Subsection 1: Experiencia */}
                            <div className="mb-16">
                                <h3 className="text-xl md:text-2xl font-sans font-black uppercase tracking-tight text-amber-500 mb-6">
                                    Experiencia Demostrada en Eventos Corporativos en Madrid
                                </h3>
                                <div className="bg-[#121212] p-6 border border-amber-500/20">
                                    <p className="text-sm md:text-base text-[#EAEAEA]/80 leading-relaxed">
                                        Más de 10 años actuando en los principales escenarios corporativos de Madrid. Desde cenas de gala en hoteles como el Westin Palace y el Ritz hasta dinamización de stands en IFEMA, pasando por <Link href="/empresas/mago-team-building-madrid" className="text-amber-500 hover:underline">team building para empresas del IBEX 35</Link> y cócteles de networking en espacios como CentroCentro o la Real Fábrica de Tapices. Mi experiencia abarca desde startups tecnológicas hasta multinacionales de consultoría, adaptando cada actuación al ADN de la empresa.
                                    </p>
                                </div>
                            </div>

                            {/* Subsection 2: Formatos */}
                            <div className="mb-16">
                                <h3 className="text-xl md:text-2xl font-sans font-black uppercase tracking-tight text-amber-500 mb-6">
                                    Formatos de Magia Corporativa Disponibles
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-[#121212] p-6 border border-amber-500/20">
                                        <h4 className="text-base font-sans font-bold text-[#EAEAEA] mb-2 uppercase">Magia de Cóctel <span className="text-amber-500 font-mono text-xs">(1-2h)</span></h4>
                                        <p className="text-sm text-[#EAEAEA]/70 leading-relaxed mb-3">
                                            Ideal para el networking previo a cenas. Me muevo entre los invitados creando momentos de asombro compartido que generan conversación natural.
                                        </p>
                                        <span className="text-amber-500 font-mono text-xs font-bold">Desde 500€</span>
                                    </div>
                                    <div className="bg-[#121212] p-6 border border-amber-500/20">
                                        <h4 className="text-base font-sans font-bold text-[#EAEAEA] mb-2 uppercase">Espectáculo de Sobremesa <span className="text-amber-500 font-mono text-xs">(30-45min)</span></h4>
                                        <p className="text-sm text-[#EAEAEA]/70 leading-relaxed mb-3">
                                            Show de mesa o parlour para grupos de 20-100 personas. Incluye participación de directivos y personalización con mensaje de marca.
                                        </p>
                                        <span className="text-amber-500 font-mono text-xs font-bold">Desde 700€</span>
                                    </div>
                                    <div className="bg-[#121212] p-6 border border-amber-500/20">
                                        <h4 className="text-base font-sans font-bold text-[#EAEAEA] mb-2 uppercase">Team Building Mágico <span className="text-amber-500 font-mono text-xs">(2-3h)</span></h4>
                                        <p className="text-sm text-[#EAEAEA]/70 leading-relaxed mb-3">
                                            Taller donde los participantes aprenden trucos de magia como metáfora del trabajo en equipo, comunicación y creatividad.
                                        </p>
                                        <span className="text-amber-500 font-mono text-xs font-bold">Desde 600€</span>
                                    </div>
                                    <div className="bg-[#121212] p-6 border border-amber-500/20">
                                        <h4 className="text-base font-sans font-bold text-[#EAEAEA] mb-2 uppercase">Dinamización de Stand/Feria <span className="text-amber-500 font-mono text-xs">(jornada completa)</span></h4>
                                        <p className="text-sm text-[#EAEAEA]/70 leading-relaxed mb-3">
                                            Captación de leads mediante magia visual en ferias como IFEMA. Aumento demostrado del tráfico al stand.
                                        </p>
                                        <span className="text-amber-500 font-mono text-xs font-bold">Desde 800€/jornada</span>
                                    </div>
                                </div>
                            </div>

                            {/* Subsection 3: Qué Incluye */}
                            <div className="mb-16">
                                <h3 className="text-xl md:text-2xl font-sans font-black uppercase tracking-tight text-amber-500 mb-6">
                                    Qué Incluye el Servicio de Magia para Empresas
                                </h3>
                                <div className="bg-[#121212] p-6 border border-amber-500/20">
                                    <ul className="space-y-3 text-sm md:text-base text-[#EAEAEA]/80">
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-500 mt-1">▸</span>
                                            <span>Reunión previa para entender los objetivos del evento</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-500 mt-1">▸</span>
                                            <span>Personalización de efectos con el mensaje corporativo</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-500 mt-1">▸</span>
                                            <span>Coordinación con el equipo de eventos o catering</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-500 mt-1">▸</span>
                                            <span>Puntualidad y profesionalidad absoluta (dress code adaptado)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-500 mt-1">▸</span>
                                            <span>Seguro de responsabilidad civil</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-500 mt-1">▸</span>
                                            <span>Facturación profesional</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Subsection 4: Zonas de Cobertura */}
                            <div className="mb-16">
                                <h3 className="text-xl md:text-2xl font-sans font-black uppercase tracking-tight text-amber-500 mb-6">
                                    Zonas de Cobertura para Eventos Corporativos en Madrid
                                </h3>
                                <div className="bg-[#121212] p-6 border border-amber-500/20">
                                    <p className="text-sm md:text-base text-[#EAEAEA]/80 leading-relaxed">
                                        Cubro toda la Comunidad de Madrid para eventos de empresa: Madrid capital (Castellana, Salamanca, Chamberí, Retiro, Chamartín), zona norte (Alcobendas, San Sebastián de los Reyes), zona noroeste (Las Rozas, Pozuelo, Majadahonda, Torrelodones), zona sur (Getafe, Leganés, Móstoles) y centros de convenciones como IFEMA, Palacio de Congresos y WiZink Center. El desplazamiento está incluido en el presupuesto para toda la Comunidad de Madrid.
                                    </p>
                                </div>
                            </div>

                            {/* Internal Links Block */}
                            <div className="bg-[#121212] p-6 border border-amber-500/20">
                                <p className="font-mono text-xs text-amber-500 uppercase tracking-[0.2em] mb-4">[ ENLACES_RELACIONADOS ]</p>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/empresas/mago-cenas-empresa-madrid" className="text-sm text-[#EAEAEA]/70 hover:text-amber-500 transition-colors border border-amber-500/20 px-3 py-1.5 hover:border-amber-500/60">
                                        Mago Cenas de Empresa →
                                    </Link>
                                    <Link href="/empresas/mago-team-building-madrid" className="text-sm text-[#EAEAEA]/70 hover:text-amber-500 transition-colors border border-amber-500/20 px-3 py-1.5 hover:border-amber-500/60">
                                        Mago Team Building →
                                    </Link>
                                    <Link href="/empresas/mago-ferias-congresos-madrid" className="text-sm text-[#EAEAEA]/70 hover:text-amber-500 transition-colors border border-amber-500/20 px-3 py-1.5 hover:border-amber-500/60">
                                        Mago Ferias y Congresos →
                                    </Link>
                                    <Link href="/empresas/mago-conferenciante-madrid" className="text-sm text-[#EAEAEA]/70 hover:text-amber-500 transition-colors border border-amber-500/20 px-3 py-1.5 hover:border-amber-500/60">
                                        Mago Conferenciante →
                                    </Link>
                                    <Link href="/blog/mejor-mago-empresas-madrid" className="text-sm text-[#EAEAEA]/70 hover:text-amber-500 transition-colors border border-amber-500/20 px-3 py-1.5 hover:border-amber-500/60">
                                        Blog: Mejor Mago Empresas Madrid →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
        </NavFooterClient>
        </>
    );
}

