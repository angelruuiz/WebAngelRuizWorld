import Image from 'next/image';
import Link from 'next/link';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQItem from '@/components/FAQItem';
import CorporateInlineForm from '@/components/CorporateInlineForm';

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

                <main className="bg-surface-0 text-slate-200 selection:bg-amber-500 selection:text-black">
                    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
                        <Breadcrumbs />
                        
                        {/* Main Hero Card Luxury Glass */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
                            
                            <article className="lg:col-span-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 text-amber-400 text-xs uppercase tracking-widest font-semibold">
                                        <span>✦</span>
                                        <span>Magia Corporativa & Eventos B2B</span>
                                    </div>
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Cinzel] font-bold uppercase tracking-wide leading-tight mb-6 text-white">
                                        Mago para <span className="text-[#d4a853]">Empresas</span> en Madrid
                                    </h1>
                                    <p className="max-w-2xl text-base md:text-lg leading-relaxed text-slate-300 mb-8 font-light">
                                        Eleva el impacto de tu marca con estrategias de <strong className="text-amber-400">dinamización</strong> corporativa. El ilusionismo B2B no es entretenimiento convencional; es una herramienta de alto impacto diseñada para maximizar el <strong className="text-amber-400">engagement</strong> y asegurar un <strong className="text-amber-400">Retorno de Inversión (ROI)</strong> tangible en tus eventos empresariales.
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-8 mt-6">
                                    <div className="flex flex-col p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                        <span className="text-[#d4a853] text-2xl md:text-3xl font-[Cinzel] font-bold">98%</span>
                                        <span className="text-[11px] uppercase tracking-wider text-slate-400 mt-1 font-medium">Retención de Mensaje</span>
                                    </div>
                                    <div className="flex flex-col p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                        <span className="text-[#d4a853] text-2xl md:text-3xl font-[Cinzel] font-bold">+40%</span>
                                        <span className="text-[11px] uppercase tracking-wider text-slate-400 mt-1 font-medium">Generación de Leads</span>
                                    </div>
                                    <div className="flex flex-col p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                        <span className="text-[#d4a853] text-2xl md:text-3xl font-[Cinzel] font-bold">100%</span>
                                        <span className="text-[11px] uppercase tracking-wider text-slate-400 mt-1 font-medium">Impacto Visual</span>
                                    </div>
                                    <div className="flex flex-col p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                        <span className="text-[#d4a853] text-2xl md:text-3xl font-[Cinzel] font-bold">B2B</span>
                                        <span className="text-[11px] uppercase tracking-wider text-slate-400 mt-1 font-medium">Enfoque Exclusivo</span>
                                    </div>
                                </div>
                            </article>

                            <aside className="lg:col-span-4 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
                                <div className="w-full h-56 md:h-64 relative rounded-2xl overflow-hidden border border-white/10 mb-6">
                                    <Image
                                        src="/images/evento-angel-ruiz-magia.webp"
                                        alt="Ángel Ruiz mago para empresas Madrid - Evento Real"
                                        fill
                                        className="object-cover object-center"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40 text-[10px] text-amber-400 uppercase tracking-widest font-semibold">
                                        ✦ Experiencia en Vivo
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-[Cinzel] font-bold text-amber-400 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                                        Formatos Corporativos Clave
                                    </h3>
                                    <ul className="space-y-3 text-xs text-slate-300">
                                        <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                            <span>01. Cóctel & Networking</span>
                                            <span className="text-amber-400 font-semibold">Exclusivo</span>
                                        </li>
                                        <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                            <span>02. Presentación de Producto</span>
                                            <span className="text-amber-400 font-semibold">Impacto</span>
                                        </li>
                                        <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                            <span>03. Team Building & Cenas</span>
                                            <span className="text-amber-400 font-semibold">Personalizado</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <ContactButtonClient label="CONSULTAR DISPONIBILIDAD" />
                                    </div>
                                </div>
                            </aside>
                        </div>

                        {/* Servicios Corporativos Grid */}
                        <div className="mt-20">
                            <div className="text-center mb-10">
                                <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em]">Especialidades B2B</span>
                                <h2 className="text-3xl md:text-4xl font-[Cinzel] font-bold text-white uppercase tracking-wide mt-2">
                                    Servicios de Ilusionismo para Empresas
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Link href="/empresas/mago-ferias-congresos-madrid" className="group rounded-3xl bg-slate-950/60 hover:bg-slate-900/80 border border-white/10 hover:border-amber-400/50 p-8 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
                                    <div>
                                        <span className="text-xs text-amber-400 font-mono tracking-widest uppercase">01 / IFEMA & Ferias</span>
                                        <h3 className="text-xl font-[Cinzel] font-bold uppercase text-white mt-2 mb-3 group-hover:text-amber-400 transition-colors">Stands & Exposiciones</h3>
                                        <p className="text-sm text-slate-300 font-light leading-relaxed">Capta leads masivos y dinamiza tu espacio en ferias corporativas asegurando un alto retorno de inversión y recordación de marca.</p>
                                    </div>
                                    <span className="text-amber-400 text-xs uppercase font-bold tracking-wider mt-6 inline-flex items-center gap-2">Ver Servicio →</span>
                                </Link>
                                <Link href="/empresas/mago-conferenciante-madrid" className="group rounded-3xl bg-slate-950/60 hover:bg-slate-900/80 border border-white/10 hover:border-amber-400/50 p-8 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
                                    <div>
                                        <span className="text-xs text-amber-400 font-mono tracking-widest uppercase">02 / Keynote</span>
                                        <h3 className="text-xl font-[Cinzel] font-bold uppercase text-white mt-2 mb-3 group-hover:text-amber-400 transition-colors">Conferencias & Liderazgo</h3>
                                        <p className="text-sm text-slate-300 font-light leading-relaxed">Charlas magistrales integradas con ilusionismo psicológico para anclar conceptos de management, comunicación y liderazgo directivo.</p>
                                    </div>
                                    <span className="text-amber-400 text-xs uppercase font-bold tracking-wider mt-6 inline-flex items-center gap-2">Ver Servicio →</span>
                                </Link>
                                <Link href="/empresas/mago-team-building-madrid" className="group rounded-3xl bg-slate-950/60 hover:bg-slate-900/80 border border-white/10 hover:border-amber-400/50 p-8 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
                                    <div>
                                        <span className="text-xs text-amber-400 font-mono tracking-widest uppercase">03 / Dinámica de Equipo</span>
                                        <h3 className="text-xl font-[Cinzel] font-bold uppercase text-white mt-2 mb-3 group-hover:text-amber-400 transition-colors">Talleres de Team Building</h3>
                                        <p className="text-sm text-slate-300 font-light leading-relaxed">Talleres de cohesión y resolución creativa de problemas. Fomenta la comunicación y la empatía en tus equipos mediante dinámicas mágicas grupales.</p>
                                    </div>
                                    <span className="text-amber-400 text-xs uppercase font-bold tracking-wider mt-6 inline-flex items-center gap-2">Ver Servicio →</span>
                                </Link>
                                <Link href="/empresas/mago-para-restaurantes-madrid" className="group rounded-3xl bg-slate-950/60 hover:bg-slate-900/80 border border-white/10 hover:border-amber-400/50 p-8 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
                                    <div>
                                        <span className="text-xs text-amber-400 font-mono tracking-widest uppercase">04 / Galas & Cenas</span>
                                        <h3 className="text-xl font-[Cinzel] font-bold uppercase text-white mt-2 mb-3 group-hover:text-amber-400 transition-colors">Cenas de Empresa & Restaurantes</h3>
                                        <p className="text-sm text-slate-300 font-light leading-relaxed">Magia de cerca y de sobremesa para cenas de empresa y eventos VIP. Genera asombro de proximidad y rompe el hielo entre invitados de forma elegante.</p>
                                    </div>
                                    <span className="text-amber-400 text-xs uppercase font-bold tracking-wider mt-6 inline-flex items-center gap-2">Ver Servicio →</span>
                                </Link>
                            </div>
                        </div>

                        {/* Logos de Empresas / Marcas */}
                        <div className="mt-20 py-10 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl relative overflow-hidden">
                            <h3 className="text-center text-xs font-[Cinzel] font-bold text-amber-400 uppercase tracking-[0.3em] mb-6">
                                Empresas y Marcas que Confían en Ángel Ruiz
                            </h3>
                            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-marquee">
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

                        {/* Contenido SEO y Testimonios B2B */}
                        <section className="pt-20 max-w-4xl mx-auto">
                            <h2 className="text-3xl font-[Cinzel] font-bold uppercase tracking-wide text-white mb-6 border-l-4 border-amber-500 pl-4">
                                Ilusionismo Corporativo en Madrid
                            </h2>
                            <div className="space-y-6 text-sm text-slate-300 leading-relaxed mb-12">
                                <div className="rounded-2xl bg-slate-950/50 p-6 border border-white/10 backdrop-blur-md">
                                    <p className="mb-2"><strong className="text-amber-400 uppercase tracking-widest text-xs">Definición:</strong></p>
                                    <p>
                                        El ilusionismo corporativo es una herramienta de comunicación B2B que utiliza la magia de cerca para transmitir mensajes de marca. A diferencia del entretenimiento genérico, esta disciplina adapta cada efecto visual a los valores de la empresa, asegurando que los asistentes recuerden la experiencia y el mensaje asociado.
                                    </p>
                                </div>
                                <div className="rounded-2xl bg-slate-950/50 p-6 border border-white/10 backdrop-blur-md">
                                    <p className="mb-2"><strong className="text-amber-400 uppercase tracking-widest text-xs">Impacto y Retorno:</strong></p>
                                    <p>
                                        Nuestros clientes reportan un <strong>340% de aumento en la retención del mensaje</strong> corporativo tras el evento. Ángel Ruiz, con más de 10 años de experiencia y 42 reseñas de 5 estrellas, es el <strong className="text-white">mago de referencia para eventos empresariales</strong> en toda la Comunidad de Madrid. Tarifas desde 500€.
                                    </p>
                                </div>
                                <div className="rounded-2xl bg-slate-950/50 p-6 border border-white/10 backdrop-blur-md">
                                    <p className="mb-2"><strong className="text-amber-400 uppercase tracking-widest text-xs">Versatilidad:</strong></p>
                                    <p>
                                        Ideal como <Link href="/empresas/mago-para-restaurantes-madrid" className="text-amber-400 hover:underline">mago para cenas de empresa</Link>, <Link href="/empresas/mago-ferias-congresos-madrid" className="text-amber-400 hover:underline">dinamizador en IFEMA</Link> o facilitador de <Link href="/empresas/mago-team-building-madrid" className="text-amber-400 hover:underline">team building</Link>. El ilusionismo profesional garantiza una interacción fluida y networking natural, rompiendo el hielo entre directivos y empleados con impactos visuales inolvidables.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-amber-500/5 border border-amber-500/20 p-8 my-8">
                                <h3 className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <span>⭐⭐⭐⭐⭐</span>
                                    <span>Valoraciones de Clientes Corporativos</span>
                                </h3>
                                <blockquote className="mb-6 border-b border-white/10 pb-6">
                                    <p className="italic text-slate-200 mb-3 leading-relaxed">"La mejor inversión en entretenimiento para nuestro stand. El mago no solo captó la atención, sino que aumentó la retención de clientes en más de un 300%. Los leads se multiplicaron espectacularmente."</p>
                                    <footer className="text-xs text-amber-400/90 font-bold">— Director de Marketing, Empresa Tech Madrid</footer>
                                </blockquote>
                                <blockquote>
                                    <p className="italic text-slate-200 mb-3 leading-relaxed">"Ángel Ruiz transformó nuestra cena anual. Su magia de cerca es elegante e inteligente. Logró conectar a departamentos enteros que apenas se hablaban. Una experiencia corporativa impecable."</p>
                                    <footer className="text-xs text-amber-400/90 font-bold">— HR Manager, Multinacional Consultoría</footer>
                                </blockquote>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="py-16 max-w-4xl mx-auto border-t border-white/10 mt-12">
                            <h2 className="text-2xl md:text-3xl font-[Cinzel] font-bold uppercase tracking-wide text-white mb-8 border-l-4 border-amber-500 pl-4">
                                Preguntas Frecuentes — Mago para Empresas Madrid
                            </h2>
                            <div className="space-y-4">
                                {faqSchema.mainEntity.map((faq, index) => (
                                    <FAQItem key={index} faq={faq} />
                                ))}
                            </div>
                            <div className="mt-12">
                                <CorporateInlineForm />
                            </div>
                        </section>

                        {/* SEO Deep Content Section */}
                        <section className="py-16 max-w-4xl mx-auto border-t border-white/10 mt-8">
                            <h2 className="text-3xl font-[Cinzel] font-bold uppercase tracking-wide text-white mb-10 border-l-4 border-amber-500 pl-4">
                                ¿Por Qué Contratar a Ángel Ruiz como Mago para Empresas en Madrid?
                            </h2>

                            <div className="mb-12">
                                <h3 className="text-xl font-[Cinzel] font-bold uppercase tracking-tight text-amber-400 mb-4">
                                    Experiencia Demostrada en Eventos Corporativos en Madrid
                                </h3>
                                <div className="rounded-2xl bg-slate-950/50 p-6 border border-white/10 backdrop-blur-md">
                                    <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                                        Más de 10 años actuando en los principales escenarios corporativos de Madrid. Desde cenas de gala en hoteles como el Westin Palace y el Ritz hasta dinamización de stands en IFEMA, pasando por <Link href="/empresas/mago-team-building-madrid" className="text-amber-400 hover:underline">team building para empresas del IBEX 35</Link> y cócteles de networking en espacios como CentroCentro o la Real Fábrica de Tapices. Mi experiencia abarca desde startups tecnológicas hasta multinacionales de consultoría, adaptando cada actuación al ADN de la empresa.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h3 className="text-xl font-[Cinzel] font-bold uppercase tracking-tight text-amber-400 mb-4">
                                    Formatos de Magia Corporativa Disponibles
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="rounded-2xl bg-slate-950/50 p-6 border border-white/10 backdrop-blur-md">
                                        <h4 className="text-base font-bold text-white mb-1">Magia de Cóctel <span className="text-amber-400 text-xs">(1-2h)</span></h4>
                                        <p className="text-sm text-slate-300 leading-relaxed mb-3">
                                            Ideal para el networking previo a cenas. Me muevo entre los invitados creando momentos de asombro compartido que generan conversación natural.
                                        </p>
                                        <span className="text-amber-400 text-xs font-bold">Desde 500€</span>
                                    </div>
                                    <div className="rounded-2xl bg-slate-950/50 p-6 border border-white/10 backdrop-blur-md">
                                        <h4 className="text-base font-bold text-white mb-1">Espectáculo de Sobremesa <span className="text-amber-400 text-xs">(30-45min)</span></h4>
                                        <p className="text-sm text-slate-300 leading-relaxed mb-3">
                                            Show de mesa o parlour para grupos de 20-100 personas. Incluye participación de directivos y personalización con mensaje de marca.
                                        </p>
                                        <span className="text-amber-400 text-xs font-bold">Desde 700€</span>
                                    </div>
                                    <div className="rounded-2xl bg-slate-950/50 p-6 border border-white/10 backdrop-blur-md">
                                        <h4 className="text-base font-bold text-white mb-1">Team Building Mágico <span className="text-amber-400 text-xs">(2-3h)</span></h4>
                                        <p className="text-sm text-slate-300 leading-relaxed mb-3">
                                            Taller donde los participantes aprenden trucos de magia como metáfora del trabajo en equipo, comunicación y creatividad.
                                        </p>
                                        <span className="text-amber-400 text-xs font-bold">Desde 600€</span>
                                    </div>
                                    <div className="rounded-2xl bg-slate-950/50 p-6 border border-white/10 backdrop-blur-md">
                                        <h4 className="text-base font-bold text-white mb-1">Dinamización de Stand/Feria <span className="text-amber-400 text-xs">(jornada completa)</span></h4>
                                        <p className="text-sm text-slate-300 leading-relaxed mb-3">
                                            Captación de leads mediante magia visual en ferias como IFEMA. Aumento demostrado del tráfico al stand.
                                        </p>
                                        <span className="text-amber-400 text-xs font-bold">Desde 800€/jornada</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h3 className="text-xl font-[Cinzel] font-bold uppercase tracking-tight text-amber-400 mb-4">
                                    Qué Incluye el Servicio de Magia para Empresas
                                </h3>
                                <div className="rounded-2xl bg-slate-950/50 p-6 border border-white/10 backdrop-blur-md">
                                    <ul className="space-y-3 text-sm md:text-base text-slate-300">
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-400 mt-1">✦</span>
                                            <span>Reunión previa para entender los objetivos del evento</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-400 mt-1">✦</span>
                                            <span>Personalización de efectos con el mensaje corporativo</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-400 mt-1">✦</span>
                                            <span>Coordinación con el equipo de eventos o catering</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-400 mt-1">✦</span>
                                            <span>Puntualidad y profesionalidad absoluta (dress code adaptado)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-400 mt-1">✦</span>
                                            <span>Seguro de responsabilidad civil</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-400 mt-1">✦</span>
                                            <span>Facturación profesional</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h3 className="text-xl font-[Cinzel] font-bold uppercase tracking-tight text-amber-400 mb-4">
                                    Zonas de Cobertura para Eventos Corporativos en Madrid
                                </h3>
                                <div className="rounded-2xl bg-slate-950/50 p-6 border border-white/10 backdrop-blur-md">
                                    <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                                        Cubro toda la Comunidad de Madrid para eventos de empresa: Madrid capital (Castellana, Salamanca, Chamberí, Retiro, Chamartín), zona norte (Alcobendas, San Sebastián de los Reyes), zona noroeste (Las Rozas, Pozuelo, Majadahonda, Torrelodones), zona sur (Getafe, Leganés, Móstoles) y centros de convenciones como IFEMA, Palacio de Congresos y WiZink Center. El desplazamiento está incluido en el presupuesto para toda la Comunidad de Madrid.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-slate-950/50 p-6 border border-white/10 backdrop-blur-md">
                                <p className="text-xs text-amber-400 uppercase tracking-widest font-bold mb-4">Servicios Relacionados</p>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/empresas/mago-cenas-empresa-madrid" className="text-sm text-slate-300 hover:text-amber-400 transition-colors border border-white/10 hover:border-amber-400/50 rounded-xl px-4 py-2 bg-white/[0.02]">
                                        Mago Cenas de Empresa →
                                    </Link>
                                    <Link href="/empresas/mago-team-building-madrid" className="text-sm text-slate-300 hover:text-amber-400 transition-colors border border-white/10 hover:border-amber-400/50 rounded-xl px-4 py-2 bg-white/[0.02]">
                                        Mago Team Building →
                                    </Link>
                                    <Link href="/empresas/mago-ferias-congresos-madrid" className="text-sm text-slate-300 hover:text-amber-400 transition-colors border border-white/10 hover:border-amber-400/50 rounded-xl px-4 py-2 bg-white/[0.02]">
                                        Mago Ferias y Congresos →
                                    </Link>
                                    <Link href="/empresas/mago-conferenciante-madrid" className="text-sm text-slate-300 hover:text-amber-400 transition-colors border border-white/10 hover:border-amber-400/50 rounded-xl px-4 py-2 bg-white/[0.02]">
                                        Mago Conferenciante →
                                    </Link>
                                    <Link href="/blog/mejor-mago-empresas-madrid" className="text-sm text-slate-300 hover:text-amber-400 transition-colors border border-white/10 hover:border-amber-400/50 rounded-xl px-4 py-2 bg-white/[0.02]">
                                        Blog: Mejor Mago Empresas Madrid →
                                    </Link>
                                </div>
                        </div>
                    </section>
                </div>
            </main>
        </NavFooterClient>
        </>
    );
}

