import Link from 'next/link';
import HomeClient from '@/components/HomeClient';
import QuickEventSelector from '@/components/QuickEventSelector';
import CorporateLogosBar from '@/components/CorporateLogosBar';
import ChristmasUrgencyBanner from '@/components/ChristmasUrgencyBanner';

export const metadata = {
    title: { absolute: 'Mago en Madrid: Magia de Cerca para Bodas y Empresas · Ángel Ruiz' },
    description: 'No es magia para niños: es asombro real a 20 cm de tus ojos para bodas exclusivas y eventos de empresa en Madrid. Trato directo sin agencias. Conoce a Ángel.',
    alternates: {
        canonical: 'https://angelruiz.world',
    },
    openGraph: {
        url: 'https://angelruiz.world',
        title: 'Mago en Madrid: Magia de Cerca para Bodas y Empresas · Ángel Ruiz',
        description: 'No es magia para niños: es asombro real a 20 cm de tus ojos para bodas exclusivas y eventos de empresa en Madrid. Trato directo sin agencias. Conoce a Ángel.',
        siteName: 'Ángel Ruiz | Mago e Ilusionista',
        locale: 'es_ES',
        type: 'website',
        images: [{
            url: '/images/foto-bio.webp',
            width: 1200,
            height: 630,
            alt: 'Ángel Ruiz - Mago e Ilusionista en Madrid'
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago en Madrid: Magia de Cerca para Bodas y Empresas · Ángel Ruiz',
        description: 'No es magia para niños: es asombro real a 20 cm de tus ojos para bodas exclusivas y eventos de empresa en Madrid. Trato directo sin agencias. Conoce a Ángel.',
        images: ['/images/foto-bio.webp'],
        site: '@angellruuizz',
        creator: '@angellruuizz',
    },
};

const SEOContent = () => {
    return (
        <>
            {/* Franja de Autoridad Inmediata tras el Hero */}
            <CorporateLogosBar />

            <div className="bg-surface-0 text-gold-50 relative overflow-hidden">
                {/* Sutil halo ambiental superior */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/[0.03] blur-[140px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6 sm:pt-10 pb-20 sm:pb-28">
                    
                    {/* Selector Rápido de Formato */}
                    <div className="mb-10 sm:mb-14">
                        <QuickEventSelector />
                    </div>

                    {/* Campaña de Urgencia Q4: Cenas de Empresa y Navidad */}
                    <div className="mb-14 sm:mb-20">
                        <ChristmasUrgencyBanner />
                    </div>

                    {/* ── SECCIÓN EDITORIAL: EL ARTE Y LA AUTORIDAD ── */}
                    <section aria-labelledby="seccion-ilusionismo-autor" className="mb-20 sm:mb-28">
                        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-b from-white/[0.03] via-white/[0.015] to-transparent border border-white/[0.08] backdrop-blur-sm">
                            <div className="max-w-3xl mb-8 sm:mb-10">
                                <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-bold text-amber-400 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                    <span>Ilusionismo de Autor · Escuela Dani DaOrtiz</span>
                                </p>
                                <h2 id="seccion-ilusionismo-autor" className="text-2xl sm:text-3xl md:text-4xl font-[Cinzel] font-bold text-white tracking-wide leading-tight mb-4">
                                    Asombro Inteligente para Celebraciones de Élite en Madrid
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-slate-300/90 leading-relaxed font-light">
                                    Especialista en magia de cerca (<em className="text-amber-300 not-italic font-normal">close-up</em>) y <Link href="/mago-cartomagia-madrid" className="text-amber-400 hover:underline">cartomagia de autor</Link>. Una experiencia de alta sofisticación diseñada para ocurrir a escasos centímetros de tus invitados, sin escenarios ni artificios.
                                </p>
                            </div>

                            {/* Credenciales de Prestigio */}
                            <div className="flex flex-wrap items-center gap-3 pb-8 mb-8 border-b border-white/[0.08]">
                                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-300 text-xs font-medium">
                                    <span className="text-amber-400 text-sm">✦</span> Formado con Dani DaOrtiz
                                </span>
                                <Link href="/mago-close-up-madrid" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-amber-400/40 text-slate-300 hover:text-amber-300 transition-all text-xs font-medium">
                                    <span className="text-slate-400 text-sm">♠</span> Magia de Cerca Close-Up
                                </Link>
                                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-medium">
                                    <span className="text-emerald-400 text-xs">●</span> Trato Directo Sin Intermediarios
                                </span>
                            </div>

                            {/* Narrativa y Métricas */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                                <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-300/90 leading-relaxed font-light">
                                    <p>
                                        En un mercado saturado de opciones genéricas, mi trabajo se aleja del entretenimiento convencional para centrarse en <strong className="text-white font-medium">diseñar atmósferas de imposibilidad compartida</strong>. La magia de cerca de autor actúa como un catalizador social natural: rompe el hielo entre invitados que no se conocen y convierte cócteles y sobremesas en momentos memorables.
                                    </p>
                                    <p>
                                        Cada pase está adaptado al perfil de tu celebración, con un estilo cercano, pícaro y 100% participativo donde los invitados no miran desde lejos: son los verdaderos protagonistas de cada imposible.
                                    </p>
                                </div>

                                <div className="lg:col-span-5 grid grid-cols-3 gap-3 p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/[0.06] text-center">
                                    <div className="space-y-1">
                                        <p className="text-xl sm:text-2xl font-[Cinzel] font-bold text-amber-400">+12</p>
                                        <p className="text-[11px] text-slate-400 uppercase tracking-wider">Años de Magia</p>
                                    </div>
                                    <div className="space-y-1 border-x border-white/[0.08]">
                                        <p className="text-xl sm:text-2xl font-[Cinzel] font-bold text-amber-400">5.0 ★</p>
                                        <p className="text-[11px] text-slate-400 uppercase tracking-wider">+60 Reseñas Google</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xl sm:text-2xl font-[Cinzel] font-bold text-amber-400">100%</p>
                                        <p className="text-[11px] text-slate-400 uppercase tracking-wider">Sin Escenario</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── SECCIÓN PILARES: BODAS & EMPRESAS ── */}
                    <section aria-label="Especialidades principales de magia en Madrid" className="mb-20 sm:mb-28">
                        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                            <p className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-bold mb-2">Formatos de Actuación</p>
                            <h2 className="text-2xl sm:text-3xl font-[Cinzel] font-bold text-white tracking-wide">
                                Diseñado para Dos Momentos Inolvidables
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {/* Pilar 1: Bodas */}
                            <div className="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:from-white/[0.06] hover:to-white/[0.02] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-[11px] uppercase tracking-wider font-semibold">
                                        <span>💍</span> Bodas Exclusivas
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-[Cinzel] font-bold text-white group-hover:text-amber-300 transition-colors">
                                        Magia para Bodas en Madrid
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-light">
                                        El cóctel de bienvenida es el instante perfecto para romper el hielo. Grupos reducidos de invitados experimentan milagros en sus propias manos, uniendo a familias y amigos en una risa y complicidad compartidas antes del banquete.
                                    </p>
                                </div>
                                <div className="pt-6 mt-6 border-t border-white/[0.08]">
                                    <Link href="/particulares/bodas" className="inline-flex items-center gap-2 text-amber-400 group-hover:text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors">
                                        <span>Descubrir Magia para Bodas</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Pilar 2: Empresas */}
                            <div className="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:from-white/[0.06] hover:to-white/[0.02] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-[11px] uppercase tracking-wider font-semibold">
                                        <span>🏢</span> Corporativo & Galas
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-[Cinzel] font-bold text-white group-hover:text-amber-300 transition-colors">
                                        Ilusionismo para Empresas y Eventos
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-light">
                                        Desde cenas de gala y celebraciones navideñas hasta convenciones y lanzamientos de producto. Entretenimiento de alto nivel con posibilidad de personalizar efectos con el mensaje de tu marca.
                                    </p>
                                </div>
                                <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <Link href="/empresas" className="inline-flex items-center gap-2 text-amber-400 group-hover:text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors">
                                        <span>Ver Servicios para Empresas</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                    <Link href="/empresas/mago-cenas-empresa-madrid" className="text-[11px] text-slate-400 hover:text-amber-300 transition-colors">
                                        Cenas de Navidad Q4 →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── SECCIÓN COBERTURA: MADRID & FINCAS DE ÉLITE ── */}
                    <section aria-labelledby="cobertura-madrid-titulo" className="mb-20 sm:mb-28">
                        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.06]">
                            <div className="max-w-2xl mb-6">
                                <p className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-bold mb-2">Disponibilidad Territorial</p>
                                <h2 id="cobertura-madrid-titulo" className="text-xl sm:text-2xl md:text-3xl font-[Cinzel] font-bold text-white tracking-wide mb-3">
                                    Cobertura en la Comunidad de Madrid y Fincas de Élite
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-light">
                                    Con base logística en la zona noroeste, Ángel Ruiz se desplaza habitualmente a las principales fincas para bodas, hoteles y espacios singulares de toda la región:
                                </p>
                            </div>

                            <div className="space-y-4 pt-2">
                                <div>
                                    <p className="text-[11px] uppercase font-bold tracking-wider text-amber-400/90 mb-2.5">
                                        Sierra de Madrid & Zona Noroeste:
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                                        {[
                                            { href: "/mago-torrelodones", name: "Torrelodones", highlight: true },
                                            { href: "/mago-sierra-madrid", name: "Sierra de Madrid", highlight: true },
                                            { href: "/mago-las-rozas", name: "Las Rozas" },
                                            { href: "/mago-majadahonda", name: "Majadahonda" },
                                            { href: "/mago-pozuelo", name: "Pozuelo de Alarcón" },
                                            { href: "/mago-boadilla", name: "Boadilla del Monte" },
                                            { href: "/mago-villalba", name: "Collado Villalba" },
                                            { href: "/mago-galapagar", name: "Galapagar" },
                                            { href: "/mago-el-escorial", name: "El Escorial" },
                                            { href: "/mago-las-matas", name: "Las Matas" },
                                        ].map((city) => (
                                            <Link 
                                                key={city.href}
                                                href={city.href} 
                                                className={"px-3 py-1 rounded-full transition-all " + (city.highlight ? "bg-amber-500/15 text-amber-300 border border-amber-400/30 font-medium" : "bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06]")}
                                            >
                                                {city.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <p className="text-[11px] uppercase font-bold tracking-wider text-amber-400/90 mb-2.5">
                                        Madrid Capital & Área Metropolitana:
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                                        {[
                                            { href: "/mago-madrid", name: "Madrid Centro", highlight: true },
                                            { href: "/mago-alcobendas", name: "Alcobendas" },
                                            { href: "/mago-alcorcon", name: "Alcorcón" },
                                            { href: "/mago-leganes", name: "Leganés" },
                                            { href: "/mago-mostoles", name: "Móstoles" },
                                            { href: "/mago-getafe", name: "Getafe" },
                                        ].map((city) => (
                                            <Link 
                                                key={city.href}
                                                href={city.href} 
                                                className={"px-3 py-1 rounded-full transition-all " + (city.highlight ? "bg-amber-500/15 text-amber-300 border border-amber-400/30 font-medium" : "bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06]")}
                                            >
                                                {city.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-xs text-slate-400/80 italic pt-3 border-t border-white/[0.06]">
                                    Especialista en celebraciones privadas en urbanizaciones residenciales VIP (La Finca, Somosaguas, Montepríncipe, Monterrozas) y fincas de eventos en la sierra noroeste.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ── SECCIÓN PREGUNTAS FRECUENTES (SEMÁNTICA LIMPIA) ── */}
                    <section aria-labelledby="faq-madrid-titulo" className="mb-16 sm:mb-20">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-10">
                                <p className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-bold mb-2">Transparencia y Proceso</p>
                                <h2 id="faq-madrid-titulo" className="text-2xl sm:text-3xl font-[Cinzel] font-bold text-white tracking-wide">
                                    Preguntas Frecuentes al Contratar
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <details className="group rounded-2xl p-5 sm:p-6 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] transition-all cursor-pointer">
                                    <summary className="list-none text-white font-semibold flex justify-between items-center group-open:text-amber-400 transition-colors text-sm sm:text-base">
                                        <span>¿Con cuánta antelación debo reservar la fecha?</span>
                                        <span className="text-amber-400 group-open:rotate-180 transition-transform duration-200 text-sm ml-4">↓</span>
                                    </summary>
                                    <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed pt-3 border-t border-white/[0.06] font-light">
                                        Para <Link href="/particulares/bodas" className="text-amber-400 hover:underline font-normal">bodas</Link> (temporada de mayo a octubre) y <Link href="/empresas/mago-cenas-empresa-madrid" className="text-amber-400 hover:underline font-normal">cenas de empresa navideñas</Link> (noviembre y diciembre), las fechas más cotizadas se cierran con varios meses de margen. Para eventos privados con menor antelación, consulta disponibilidad inmediata para comprobar agenda.
                                    </p>
                                </details>

                                <details className="group rounded-2xl p-5 sm:p-6 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] transition-all cursor-pointer">
                                    <summary className="list-none text-white font-semibold flex justify-between items-center group-open:text-amber-400 transition-colors text-sm sm:text-base">
                                        <span>¿Cómo se calcula el presupuesto y cuánto cuesta?</span>
                                        <span className="text-amber-400 group-open:rotate-180 transition-transform duration-200 text-sm ml-4">↓</span>
                                    </summary>
                                    <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed pt-3 border-t border-white/[0.06] font-light">
                                        El presupuesto depende de la fecha, la ubicación exacta y el formato seleccionado (<Link href="/mago-close-up-madrid" className="text-amber-400 hover:underline font-normal">magia de cerca en cóctel</Link> o dinamización entre platos en banquete). Al contratar directamente con el artista sin comisiones de agencia, obtienes una tarifa cerrada y transparente en menos de 1 hora.
                                    </p>
                                </details>

                                <details className="group rounded-2xl p-5 sm:p-6 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] transition-all cursor-pointer">
                                    <summary className="list-none text-white font-semibold flex justify-between items-center group-open:text-amber-400 transition-colors text-sm sm:text-base">
                                        <span>¿Qué requisitos técnicos o de espacio hacen falta?</span>
                                        <span className="text-amber-400 group-open:rotate-180 transition-transform duration-200 text-sm ml-4">↓</span>
                                    </summary>
                                    <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed pt-3 border-t border-white/[0.06] font-light">
                                        Cero complicaciones logísticas. El ilusionismo de cerca viaja en los bolsillos del artista. No necesitas tarima, altavoces ni iluminación especial; los efectos suceden de manera itinerante y autónoma en las manos de tus invitados en jardines, salones o restaurantes.
                                    </p>
                                </details>

                                <details className="group rounded-2xl p-5 sm:p-6 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] transition-all cursor-pointer">
                                    <summary className="list-none text-white font-semibold flex justify-between items-center group-open:text-amber-400 transition-colors text-sm sm:text-base">
                                        <span>¿Cuánto suele durar la intervención en cóctel o cena?</span>
                                        <span className="text-amber-400 group-open:rotate-180 transition-transform duration-200 text-sm ml-4">↓</span>
                                    </summary>
                                    <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed pt-3 border-t border-white/[0.06] font-light">
                                        En recepciones de cóctel suele oscilar entre 60 y 90 minutos de magia continua entre pequeños grupos. En banquetes o cenas sentadas, se dinamizan los tiempos de espera entre platos para mantener la energía del evento en todo momento.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    );
};

export default function Home() {
    const homeSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://angelruiz.world/#webpage",
                "url": "https://angelruiz.world",
                "name": "Mago en Madrid | Ángel Ruiz · Bodas y Empresas",
                "isPartOf": { "@id": "https://angelruiz.world/#website" },
                "about": { "@id": "https://angelruiz.world/#organization" },
                "description": "Ilusionismo de autor y magia de cerca para bodas, empresas y eventos exclusivos en Madrid. Trato directo sin agencias."
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://angelruiz.world/#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Inicio",
                        "item": "https://angelruiz.world"
                    }
                ]
            },
            {
                "@type": "VideoObject",
                "@id": "https://angelruiz.world/#video-show",
                "name": "Show de Magia en Directo en Madrid | Ángel Ruiz (El Badulaque)",
                "description": "Resumen en vivo del show de magia de cerca e ilusionismo profesional por Ángel Ruiz en El Badulaque.",
                "thumbnailUrl": "https://angelruiz.world/videos/show-badulaque-poster.webp",
                "uploadDate": "2026-09-16T22:00:00+02:00",
                "duration": "PT1M4S",
                "contentUrl": "https://angelruiz.world/videos/show-badulaque.mp4",
                "embedUrl": "https://angelruiz.world/#video-show",
                "inLanguage": "es-ES",
                "author": { "@id": "https://angelruiz.world/#person" },
                "publisher": { "@id": "https://angelruiz.world/#organization" }
            }
        ]
    };

    return (
        <>
            <link rel="preload" as="image" href="/images/hero-angel-ruiz-mobile-2026.webp" media="(max-width: 767px)" type="image/webp" fetchPriority="high" />
            <link rel="preload" as="image" href="/images/hero-angel-ruiz-2026.webp" media="(min-width: 768px)" type="image/webp" fetchPriority="high" />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} 
            />
            <HomeClient>
                <SEOContent />
            </HomeClient>
        </>
    );
}
