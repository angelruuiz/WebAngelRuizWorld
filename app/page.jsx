import Link from 'next/link';
import HomeClient, { PerpetualCard } from '@/components/HomeClient';
import QuickEventSelector from '@/components/QuickEventSelector';
import CorporateLogosBar from '@/components/CorporateLogosBar';

export const metadata = {
    title: { absolute: 'Mago en Madrid | Ángel Ruiz · Bodas y Empresas' },
    description: '¿Quieres un evento del que todos sigan hablando? Ilusionismo de autor y magia de cerca en Madrid. Presupuesto express en 2h.',
    alternates: {
        canonical: 'https://angelruiz.world',
    },
    openGraph: {
        url: 'https://angelruiz.world',
        title: 'Mago en Madrid | Ángel Ruiz · Bodas y Empresas',
        description: '¿Quieres un evento del que todos sigan hablando? Ilusionismo de autor y magia de cerca en Madrid. Presupuesto express en 2h.',
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
        title: 'Mago en Madrid | Ángel Ruiz · Bodas y Empresas',
        description: '¿Quieres un evento del que todos sigan hablando? Ilusionismo de autor y magia de cerca en Madrid. Presupuesto express en 2h.',
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

            <section className="pt-4 sm:pt-8 pb-28 sm:pb-32 px-4 md:px-8 bg-surface-0 text-gold-50 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-[1400px] mx-auto relative pt-4 sm:pt-8">
                    
                    {/* Selector Rápido de Eventos (Bodas / Empresas / Particulares) */}
                    <QuickEventSelector />

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 relative">
                        {/* Intro Section - Span 7 */}
                        <PerpetualCard className="md:col-span-7 flex flex-col justify-start">
                            <h2 className="text-white font-[Cinzel] text-xl sm:text-2xl md:text-4xl uppercase tracking-wider text-left mb-2 sm:mb-4">
                                Ángel Ruiz | Mago e Ilusionista en Madrid
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg opacity-85 italic text-left text-gold-100 mb-4 sm:mb-6">
                                Referente en magia para bodas y empresas con un estilo exclusivo.
                            </p>

                            {/* Píldoras de credenciales */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-[11px] font-semibold">
                                    <span>🎓</span> Formación Escuela Dani DaOrtiz
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px]">
                                    <span>♠️</span> Cartomagia de autor
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px]">
                                    <span>🤝</span> Trato directo sin comisiones
                                </span>
                            </div>
                            
                            <div className="pt-5 sm:pt-6 border-t border-white/10 space-y-4 sm:space-y-5">
                                <p className="text-xs uppercase tracking-[0.25em] font-bold text-amber-400 text-left">
                                    Experiencia Certificada y Formación de Élite
                                </p>
                                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gold-50/90">
                                    Ángel Ruiz se ha consolidado como uno de los <strong className="text-amber-400">ilusionistas de referencia en Madrid</strong>, formado en la prestigiosa <u>Escuela de Magia de Dani DaOrtiz</u>. Esta formación de élite se traduce en una especialización en cartomagia de autor y un estilo propio que lo distancia del ilusionismo convencional. Su enfoque se centra en la <u>magia de cerca (close-up) de alta calidad</u>, donde el milagro ocurre literalmente a escasos centímetros del espectador.
                                </p>
                                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gold-50/90">
                                    En un mercado saturado de agencias, mi propuesta ofrece la distinción de un <strong>especialista</strong>. Mi magia no solo ejecuta trucos; se trata de <strong>diseñar atmósferas de asombro inteligente</strong>. Ya sea en un cóctel de bienvenida o en una cena de gala corporativa, mi trabajo bajo el sello de la cartomagia de autor asegura que tu celebración sea recordada por su sofisticación y verdadera imposibilidad.
                                </p>
                            </div>
                        </PerpetualCard>

                        {/* Accordions - Span 5 (Ambos cerrados por defecto en móvil para evitar saturar de texto) */}
                        <PerpetualCard className="md:col-span-5 flex flex-col justify-start">
                            <div className="space-y-4 text-xs md:text-sm">
                                <details className="group border-b border-white/10 pb-4 cursor-pointer">
                                    <summary className="list-none text-gold-50 font-bold flex justify-between items-center group-open:text-amber-400 transition-colors py-3 uppercase tracking-wider text-xs">
                                        ¿Por qué contratar un mago profesional para tu evento?
                                        <span className="text-amber-400 group-open:rotate-180 transition-transform duration-200">↓</span>
                                    </summary>
                                    <div className="mt-3 text-gold-100/80 leading-relaxed space-y-3 p-4 sm:p-5 bg-surface-1 rounded-xl border border-white/5">
                                        <p><strong>Cuanto cuesta contratar un mago</strong> en Madrid puede variar, pero contar con un <strong>mago profesional</strong> con trayectoria no es solo añadir un número de entretenimiento; es transformar radicalmente la percepción de tus invitados sobre el evento. El ilusionismo moderno sirve para:</p>
                                        <ul className="space-y-2 list-none">
                                            <li><span className="text-amber-400 mr-2">✦</span> <strong>Networking Natural:</strong> Facilitamos que personas que no se conocen comiencen a interactuar tras vivir una imposibilidad compartida.</li>
                                            <li><span className="text-amber-400 mr-2">✦</span> <strong>Eliminar tiempos muertos:</strong> La magia es ideal para cubrir transiciones en banquetes o recepciones.</li>
                                            <li><span className="text-amber-400 mr-2">✦</span> <strong>Refuerzo de Marca:</strong> En eventos de empresa, podemos integrar tu mensaje corporativo dentro de los propios efectos mágicos.</li>
                                        </ul>
                                    </div>
                                </details>

                                <details className="group border-b border-transparent pb-3 cursor-pointer text-gold-100/80 mt-2">
                                    <summary className="list-none text-gold-50 font-bold flex justify-between items-center group-open:text-amber-400 transition-colors py-3 uppercase tracking-wider text-xs">
                                        Cobertura en Madrid y Zona Noroeste
                                        <span className="text-amber-400 group-open:rotate-180 transition-transform duration-200">↓</span>
                                    </summary>
                                    <div className="mt-3 leading-relaxed space-y-3 p-4 sm:p-5 bg-surface-1 rounded-xl border border-white/5">
                                        <p>Si buscas un <strong>mago profesional en la sierra de Madrid</strong>, Angel Ruiz ofrece total disponibilidad y conocimiento de los espacios locales más exclusivos. Opero desde mi base en el noroeste, lo que garantiza una logística impecable.</p>
                                        <div className="pt-2">
                                            <p className="mb-2 text-[10px] text-amber-400 uppercase font-bold tracking-widest">Servicio Local en Municipios Clave:</p>
                                            <div className="flex flex-wrap gap-x-4 gap-y-2.5 text-xs uppercase font-semibold text-gold-100/70">
                                                {[
                                                    { href: "/mago-torrelodones", name: "Torrelodones", primary: true },
                                                    { href: "/mago-sierra-madrid", name: "Sierra de Madrid" },
                                                    { href: "/mago-las-rozas", name: "Las Rozas" },
                                                    { href: "/mago-boadilla", name: "Boadilla del Monte" },
                                                    { href: "/mago-villalba", name: "Collado Villalba" },
                                                    { href: "/mago-galapagar", name: "Galapagar" },
                                                    { href: "/mago-pozuelo", name: "Pozuelo de Alarcón" },
                                                    { href: "/mago-majadahonda", name: "Majadahonda" },
                                                    { href: "/mago-las-matas", name: "Las Matas" },
                                                    { href: "/mago-el-escorial", name: "El Escorial" },
                                                    { href: "/mago-alcorcon", name: "Alcorcón" },
                                                    { href: "/mago-leganes", name: "Leganés" },
                                                    { href: "/mago-mostoles", name: "Móstoles" },
                                                    { href: "/mago-getafe", name: "Getafe" },
                                                    { href: "/mago-alcobendas", name: "Alcobendas" },
                                                ].map((city) => (
                                                    <a 
                                                        key={city.href}
                                                        href={city.href} 
                                                        className={`hover:text-amber-400 transition-colors inline-block ${city.primary ? 'text-amber-400 underline decoration-amber-500/30' : ''}`}
                                                    >
                                                        {city.name}
                                                    </a>
                                                ))}
                                            </div>
                                            <p className="mt-4 text-xs opacity-70 leading-relaxed italic border-t border-white/10 pt-3">
                                                Especialista en <strong>fincas para bodas</strong> y eventos residenciales VIP en urbanizaciones como La Finca, Somosaguas y Monterrozas.
                                            </p>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </PerpetualCard>

                        {/* Features block - Span 4 x3 */}
                        <PerpetualCard className="md:col-span-12 lg:col-span-4 flex flex-col justify-start">
                            <h2 className="text-white font-[Cinzel] text-lg sm:text-xl uppercase tracking-tight mb-3 border-b border-white/10 pb-3">Mago para Bodas en Madrid</h2>
                            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gold-50/80">
                                La figura del ilusionista durante el cóctel transforma la espera en el momento más memorable de la celebración. Mi magia de cerca rompe el hielo de forma elegante, uniendo a familias y amigos bajo un mismo sentimiento de asombro y alegría.
                            </p>
                            <Link href="/particulares/bodas" className="mt-5 inline-flex items-center text-amber-400 text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">
                                Ver Mago para Bodas en Madrid →
                            </Link>
                        </PerpetualCard>

                        <PerpetualCard className="md:col-span-12 lg:col-span-4 flex flex-col justify-start">
                            <h3 className="text-white font-[Cinzel] text-lg sm:text-xl uppercase tracking-tight mb-3 border-b border-white/10 pb-3">Ilusionismo para Empresas</h3>
                            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gold-50/80">
                                Las marcas líderes buscan formas innovadoras de conectar. Como <strong className="text-amber-400">mago para empresas en Madrid</strong>, ofrezco desde presentaciones de producto mágicas hasta entretenimiento premium para convenciones y cenas de empresa de alto nivel.
                            </p>
                            <Link href="/empresas" className="mt-5 inline-flex items-center text-amber-400 text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">
                                Ver Mago para Empresas en Madrid →
                            </Link>
                        </PerpetualCard>

                        <PerpetualCard className="md:col-span-12 lg:col-span-4 flex flex-col justify-start">
                            <h3 className="text-white font-[Cinzel] text-lg sm:text-xl uppercase tracking-tight mb-3 border-b border-white/10 pb-3">Experto en Magia en Madrid</h3>
                            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gold-50/80">
                                Reconocido como un <strong className="text-amber-400">experto en magia en Madrid</strong>, aporto años de experiencia y técnica refinada (Escuela DaOrtiz) en especialidades como <Link href="/mago-close-up-madrid" className="text-amber-400 hover:text-white underline decoration-amber-500/30">magia de cerca</Link> para garantizar el éxito de tu evento, con puntualidad y excelencia técnica en toda la Comunidad.
                            </p>
                        </PerpetualCard>

                        {/* SEO Why Trust - Span 8 */}
                        <PerpetualCard className="md:col-span-12 lg:col-span-8 flex flex-col justify-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-[Cinzel] text-white mb-6 uppercase tracking-wider text-left">Por qué confiar en un Experto en Magia</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm md:text-base text-gold-50/90 leading-relaxed text-justify">
                                <p>
                                    En el sector de los eventos, la diferencia entre un entretenimiento genérico y una experiencia verdaderamente inolvidable radica en la profesionalidad del ilusionista. Mi trayectoria me permite no solo ejecutar ilusiones imposibles, sino leer al público, gestionar el ritmo del evento e interactuar con la máxima elegancia.
                                </p>
                                <p>
                                    Ya sea en una <Link href="/particulares/bodas" className="text-amber-400 hover:underline inline-block font-semibold">boda donde conectar con familias diversas</Link>, o en un <Link href="/empresas" className="text-amber-400 hover:underline inline-block font-semibold">evento corporativo que representa la imagen de tu marca</Link>, la profesionalidad está garantizada. Más de 10 años de experiencia y +50 reseñas de 5 estrellas avalan mi compromiso con el asombro de calidad.
                                </p>
                            </div>
                        </PerpetualCard>

                        {/* CTA - Span 4 */}
                        <PerpetualCard className="md:col-span-12 lg:col-span-4 flex flex-col justify-between items-start text-left !bg-amber-500/10 border-amber-500/20 shadow-[inset_0_1px_0_rgba(255,191,0,0.1)]">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-[Cinzel] text-white mb-4 uppercase tracking-wider">¿Hablamos del asombro que merece tu próximo evento?</h2>
                                <p className="text-xs sm:text-sm md:text-base text-gold-50/90 leading-relaxed mb-6">
                                    Cada actuación es personalizada. No busco simplemente "hacer trucos", busco entender la dinámica de tu celebración para aportar el máximo valor posible a través del <strong>ilusionismo profesional</strong>. <u>La magia es el lenguaje universal del asombro</u>, déjame hablarlo para tus invitados. Si quieres consultar tarifas, visita la sección para <Link href="/contratar-mago-madrid" className="text-amber-400 hover:underline font-bold">contratar mago Madrid</Link>.
                                </p>
                            </div>
                            <Link href="/mago-sierra-madrid" className="group inline-block bg-white text-surface-0 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.97] transition-all uppercase tracking-wider text-xs">
                                <span>Ver Cobertura Local →</span>
                            </Link>
                        </PerpetualCard>
                        
                        {/* Marquee Especialidades - Span 12 full width */}
                        <PerpetualCard className="md:col-span-12 !p-0 mt-4 sm:mt-8">
                            <div className="py-6 sm:py-8 overflow-hidden bg-surface-1/50">
                                <h2 className="text-center font-bold text-amber-400 uppercase tracking-[0.35em] text-[10px] md:text-xs mb-6 sm:mb-8 animate-pulse">Especialidades de Ilusionismo Premium</h2>
                                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
                                    <div className="flex shrink-0 items-center justify-around gap-8 sm:gap-12 min-w-full animate-marquee py-1">
                                        {[
                                            'Ángel Ruiz Madrid',
                                            'Mago para Bodas',
                                            'Mago para Empresas',
                                            'Ilusionismo de Gala',
                                            'Magia para Cóctel',
                                            'Espectáculos VIP Madrid',
                                            'Team Building Mágico',
                                            'Eventos Exclusivos'
                                        ].map((spec, idx) => (
                                            <span key={`spec-1-${idx}`} className="flex items-center gap-4 sm:gap-6 text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-amber-400 whitespace-nowrap">
                                                <span>{spec}</span>
                                                <span className="text-amber-500/40 text-[10px]">✦</span>
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex shrink-0 items-center justify-around gap-8 sm:gap-12 min-w-full animate-marquee py-1" aria-hidden="true">
                                        {[
                                            'Ángel Ruiz Madrid',
                                            'Mago para Bodas',
                                            'Mago para Empresas',
                                            'Ilusionismo de Gala',
                                            'Magia para Cóctel',
                                            'Espectáculos VIP Madrid',
                                            'Team Building Mágico',
                                            'Eventos Exclusivos'
                                        ].map((spec, idx) => (
                                            <span key={`spec-2-${idx}`} className="flex items-center gap-4 sm:gap-6 text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-amber-400 whitespace-nowrap">
                                                <span>{spec}</span>
                                                <span className="text-amber-500/40 text-[10px]">✦</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </PerpetualCard>

                    </div>
                </div>
            </section>
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
