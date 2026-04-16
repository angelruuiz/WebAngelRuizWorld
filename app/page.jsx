import HomeClient from '@/components/HomeClient';
import { motion } from 'framer-motion';

export const metadata = {
    title: 'Ángel Ruiz · Mago close-up en Madrid | Bodas, Eventos y Empresas',
    description: 'Mago profesional en Madrid especializado en close-up para bodas, eventos corporativos y celebraciones privadas en toda la Comunidad de Madrid. Pide presupuesto sin compromiso.',
    alternates: {
        canonical: 'https://angelruiz.world',
    },
};

const SEOContent = () => {
    return (
        <section className="pt-0 pb-24 px-6 bg-slate-950 text-slate-400 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto relative">
                <div className="pt-8 overflow-hidden">
                    <h2 className="text-center font-bold text-amber-500 uppercase tracking-[0.5em] text-[10px] md:text-xs mb-8 animate-pulse">Especialidades de Ilusionismo Premium</h2>
                    {/* Marquee optimization: Text is now directly in HTML for SEO */}
                    <div className="relative flex overflow-hidden py-4 border-y border-amber-500/10">
                        <div className="flex gap-x-12 whitespace-nowrap animate-marquee">
                            <div className="flex gap-x-12 text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-amber-400">
                                <span>Angel Ruiz Madrid</span>
                                <span>Mago para Bodas</span>
                                <span>Mago para Empresas</span>
                                <span>Mentalismo Profesional</span>
                                <span>Ilusionismo de Gala</span>
                                <span>Magia para Cóctel</span>
                                <span>Espectáculos VIP Madrid</span>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/5 pt-8">
                    <div className="space-y-6 text-justify">
                        <h2 className="text-white font-[Cinzel] text-xl md:text-2xl uppercase tracking-widest text-left">Angel Ruiz | Mago e Ilusionista en Madrid</h2>
                        <p className="text-sm opacity-60 italic text-left">Referente en magia para bodas y empresas con un estilo exclusivo.</p>
                        
                        <div className="pt-6 border-t border-white/5 space-y-4">
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500 mb-2 text-left">Experiencia Certificada y Formación de Élite</p>
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ángel Ruiz se ha consolidado como uno de los <strong className="text-amber-400">ilusionistas más modernos de la capital</strong>, formado en la prestigiosa <u>Escuela de Magia de Dani DaOrtiz</u>. Esta formación de élite se traduce en una especialización en <strong>Cartomagia Purista</strong> y un "caos controlado" que lo distancia de los magos genéricos. Como <strong>mago para bodas en Madrid</strong> e ilusionista de alto nivel para marcas, su enfoque se centra en la <u>magia de cerca (close-up) de alta calidad</u>, donde el milagro ocurre literalmente a escasos centímetros del espectador.
                            </p>
                            <p className="text-sm leading-relaxed text-slate-300">
                                En un mercado saturado de agencias, mi propuesta ofrece la distinción de un <strong>especialista</strong>. Mi magia no solo ejecuta trucos; se trata de <strong>diseñar atmósferas de asombro inteligente</strong>. Ya sea en un cóctel de bienvenida o en una cena de gala corporativa, mi trabajo bajo el sello de la cartomagia de autor asegura que su celebración sea recordada por su sofisticación y verdadera imposibilidad.
                            </p>
                        </div>
                    </div>
                    
                    <div className="space-y-4 text-xs">
                        <details className="group border-b border-white/5 pb-2 cursor-pointer">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors py-2 uppercase tracking-widest text-[11px]">
                                ¿Por qué contratar un mago profesional para su evento?
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-2 text-slate-400 leading-relaxed space-y-3 p-4 bg-white/5 rounded-xl">
                                <p>Contratar un <strong>mago en Madrid</strong> con trayectoria profesional no es solo añadir un número de entretenimiento; es transformar radicalmente la percepción de sus invitados sobre el evento. El ilusionismo moderno sirve para:</p>
                                <ul className="space-y-2 list-none">
                                    <li><span className="text-amber-500 mr-2">✦</span> <strong>Networking Natural:</strong> Facilitamos que personas que no se conocen comiencen a interactuar tras vivir una imposibilidad compartida.</li>
                                    <li><span className="text-amber-500 mr-2">✦</span> <strong>Eliminar tiempos muertos:</strong> La magia es ideal para cubrir transiciones en banquetes o recepciones.</li>
                                    <li><span className="text-amber-500 mr-2">✦</span> <strong>Refuerzo de Marca:</strong> En eventos de empresa, podemos integrar su mensaje corporativo dentro de los propios efectos mágicos.</li>
                                </ul>
                            </div>
                        </details>

                        <details open className="group border-b border-white/5 pb-2 cursor-pointer text-slate-400">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors py-2 uppercase tracking-widest text-[11px]">
                                Cobertura Sierra de Madrid y Zona Noroeste
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-2 leading-relaxed space-y-4">
                                <p>Si busca un <strong>mago profesional en la sierra de Madrid</strong>, Angel Ruiz ofrece total disponibilidad y conocimiento de los espacios locales más exclusivos. Opero desde mi base en el noroeste, lo que garantiza una logística impecable.</p>
                                <div className="bg-white/5 p-5 rounded-xl border border-amber-500/10">
                                    <p className="mb-3 text-[10px] text-amber-500 uppercase font-bold tracking-widest">Servicio Local en Municipios Clave:</p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-3 text-[10px] uppercase font-bold text-slate-300">
                                        <a href="/mago-torrelodones" className="text-amber-400 hover:text-white transition-all underline decoration-amber-500/30">Torrelodones</a>
                                        <a href="/mago-sierra-madrid" className="hover:text-amber-400">Sierra de Madrid</a>
                                        <a href="/mago-las-rozas" className="hover:text-amber-400">Las Rozas</a>
                                        <a href="/mago-boadilla" className="hover:text-amber-400">Boadilla del Monte</a>
                                        <a href="/mago-villalba" className="hover:text-amber-400">Collado Villalba</a>
                                        <a href="/mago-galapagar" className="hover:text-amber-400">Galapagar</a>
                                        <a href="/mago-pozuelo" className="hover:text-amber-400">Pozuelo de Alarcón</a>
                                        <a href="/mago-majadahonda" className="hover:text-amber-400">Majadahonda</a>
                                        <a href="/mago-las-matas" className="hover:text-amber-400">Las Matas</a>
                                        <a href="/mago-el-escorial" className="hover:text-amber-400">El Escorial</a>
                                    </div>
                                    <p className="mt-4 text-[11px] opacity-70 leading-relaxed italic border-t border-white/5 pt-4">
                                        Especialista en <strong>fincas para bodas</strong> y eventos residenciales VIP en urbanizaciones como La Finca, Somosaguas y Monterrozas.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>

                {/* NUEVO BLOQUE DE CONTENIDO PARA INICIO */}
                <div className="mt-20 pt-16 border-t border-white/5 space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="space-y-4">
                            <h3 className="text-white font-[Cinzel] text-lg uppercase tracking-tight">Magia para Bodas Exclusivas</h3>
                            <p className="text-sm leading-relaxed text-slate-400">
                                El <strong className="text-amber-500">mago de bodas en Madrid</strong> es la figura que asegura que el cóctel de bienvenida no sea "solo una espera". Mi magia de cerca rompe el hielo de forma elegante, uniendo a familias y amigos bajo un mismo sentimiento de asombro y alegría.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-white font-[Cinzel] text-lg uppercase tracking-tight">Ilusionismo para Empresas</h3>
                            <p className="text-sm leading-relaxed text-slate-400">
                                Las marcas líderes buscan formas innovadoras de conectar. Como <strong className="text-amber-500">mago para empresas en Madrid</strong>, ofrezco desde presentaciones de producto mágicas hasta entretenimiento premium para convenciones y cenas de empresa de alto nivel.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-white font-[Cinzel] text-lg uppercase tracking-tight">Cruce de Caminos: Madrid y la Sierra</h3>
                            <p className="text-sm leading-relaxed text-slate-400">
                                Mi base en la **zona noroeste** me permite ser el <u>mago de confianza</u> para quienes buscan exclusividad en cualquier punto de la Comunidad de Madrid. Calidad, puntualidad y excelencia técnica.
                            </p>
                        </div>
                    </div>

                    <div className="bg-amber-500/5 p-8 md:p-12 rounded-[2rem] border border-white/5 text-center">
                        <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white mb-6 uppercase tracking-widest">¿Hablamos del asombro que merece su próximo evento?</h2>
                        <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                            Cada actuación es personalizada. No busco simplemente "hacer trucos", busco entender la dinámica de su celebración para aportar el máximo valor posible a través del <strong>ilusionismo profesional</strong>. <u>La magia es el lenguaje universal del asombro</u>, déjeme hablarlo para sus invitados.
                        </p>
                        <a href="/mago-sierra-madrid" className="inline-block bg-white text-slate-950 font-bold px-10 py-4 rounded-full hover:bg-amber-500 transition-colors uppercase tracking-[0.2em] text-xs">
                            Ver Cobertura Local →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function Home() {
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Ángel Ruiz | Mago e Ilusionista",
        "image": "https://angelruiz.world/images/logo-grande.jpg",
        "@id": "https://angelruiz.world",
        "url": "https://angelruiz.world",
        "telephone": "+34648055636",
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Zona Noroeste",
            "addressLocality": "Torrelodones",
            "addressRegion": "Madrid",
            "postalCode": "28250",
            "addressCountry": "ES"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.5765,
            "longitude": -3.9298
        },
        "areaServed": [
            "Madrid", "Torrelodones", "Las Rozas", "Majadahonda", 
            "Pozuelo de Alarcón", "Boadilla del Monte", "Villalba", 
            "Galapagar", "El Escorial", "Guadarrama"
        ],
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Escuela de Magia de Dani DaOrtiz"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Ilusionismo",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Magia para Bodas Exclusive"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ilusionismo Corporativo y Empresas"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Magia de Cerca (Close-up) para Eventos VIP"
                    }
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "20"
        },
        "sameAs": [
            "https://instagram.com/angellruuiz",
            "https://tiktok.com/@angellruuiz",
            "https://youtube.com/@angellruuiz"
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Qué tipos de eventos cubre Ángel Ruiz?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ángel Ruiz está especializado en magia de cerca para bodas, eventos corporativos, cenas de gala y celebraciones privadas exclusivas en toda la Comunidad de Madrid."
                }
            },
            {
                "@type": "Question",
                "name": "¿Con cuánta antelación debo reservar un mago para mi boda?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para asegurar disponibilidad, especialmente en temporada alta de bodas (mayo-septiembre), se recomienda contactar con al menos 6 meses de antelación."
                }
            },
            {
                "@type": "Question",
                "name": "¿Se desplaza el mago a la Sierra de Madrid?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, Ángel Ruiz tiene su sede en Madrid y ofrece cobertura prioritaria en toda la Comunidad, incluyendo la Sierra de Guadarrama y la zona noroeste (Las Rozas, Majadahonda, Pozuelo, etc.)."
                }
            }
        ]
    };

    const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Ángel Ruiz | Magia de Cerca en Madrid",
        "description": "Video promocional de ilusionismo profesional y magia de cerca por Ángel Ruiz.",
        "thumbnailUrl": "https://angelruiz.world/images/foto-bio.png",
        "uploadDate": "2026-04-10",
        "duration": "PT1M0S",
        "contentUrl": "https://angelruiz.world/spring.mp4"
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} 
            />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
            />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} 
            />
            <HomeClient seoContent={<SEOContent />} />
        </>
    );
}
