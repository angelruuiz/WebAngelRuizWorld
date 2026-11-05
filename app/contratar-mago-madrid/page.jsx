import dynamic from 'next/dynamic';
import Image from 'next/image';
import FAQItem from '@/components/FAQItem';
import Link from 'next/link';
import NavFooterClient from '@/components/NavFooterClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import CorporateLogosBar from '@/components/CorporateLogosBar';
import galleryBlurs from '@/public/images/gallery-blurs.json';

const ContactButtonClient = dynamic(() => import('@/components/ContactButtonClient'), { ssr: false });
const MagicCursor = dynamic(() => import('@/components/VisualEffects').then(mod => mod.MagicCursor), { ssr: false });
const ParticleBackground = dynamic(() => import('@/components/VisualEffects').then(mod => mod.ParticleBackground), { ssr: false });
const BioCarousel = dynamic(() => import('@/components/BioCarousel'), { ssr: false });

export const metadata = {
    title: { absolute: 'Contratar Mago en Madrid | Precios Directos y Tarifas 2026' },
    description: '¿Buscas contratar un mago en Madrid? Tarifas reales desde 300€ sin agencias ni comisiones para bodas, empresas y eventos. Presupuesto express en menos de 1h.',
    keywords: ['contratar mago madrid', 'contratar mago madrid precio', 'precio mago madrid', 'cuanto cuesta un mago en madrid', 'mago profesional madrid', 'ilusionista madrid precios', 'mago para eventos madrid', 'mago para fiestas privadas madrid'],
    alternates: {
        canonical: 'https://angelruiz.world/contratar-mago-madrid',
    },
    openGraph: {
        title: 'Contratar Mago en Madrid | Precios Directos y Tarifas 2026',
        description: 'Todo lo que necesitas saber para contratar un ilusionista en Madrid para bodas o empresas. Precios directos sin comisiones.',
        images: [{ url: '/images/foto-bio.webp' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contratar Mago en Madrid | Precios Directos y Tarifas 2026',
        description: '¿Buscas contratar un mago en Madrid? Tarifas reales desde 300€ sin comisiones para bodas, empresas y eventos. Presupuesto express en menos de 1h.',
        images: ['/images/foto-bio.webp']
    }
};

export default function ContratarMagoMadridPage() {
    const faqs = [
            { 
                "@type": "Question", 
                "name": "¿Cuánto cuesta contratar un mago en Madrid?", 
                "acceptedAnswer": { 
                    "@type": "Answer", 
                    "text": "El precio de un mago profesional en Madrid depende del tipo de evento: eventos privados y celebraciones particulares (comuniones, fiestas, aniversarios) desde 300€, bodas entre 450€ y 650€, y eventos de empresa o cenas corporativas desde 500€ hasta 750€. El presupuesto se personaliza sin intermediarios." 
                } 
            },
            { 
                "@type": "Question", 
                "name": "¿Cuál es el mejor momento para contratar un ilusionista en una boda?", 
                "acceptedAnswer": { 
                    "@type": "Answer", 
                    "text": "El mejor momento es durante el cóctel de bienvenida o en la sobremesa. La magia de cerca rompe el hielo entre invitados que no se conocen y crea una atmósfera de asombro perfecta para iniciar la celebración, todo a escasos centímetros de los invitados." 
                } 
            },
            { 
                "@type": "Question", 
                "name": "¿Con cuánta antelación debo contratar un mago para bodas o eventos de empresa en Madrid?", 
                "acceptedAnswer": { 
                    "@type": "Answer", 
                    "text": "Para bodas y eventos corporativos en temporada alta (mayo a septiembre, y diciembre), se recomienda contratar con 3 a 6 meses de antelación para asegurar disponibilidad y poder diseñar la estructura del evento adecuadamente." 
                } 
            },
            {
                "@type": "Question",
                "name": "¿Qué formatos de ilusionismo ofreces al contratarte?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ofrezco magia de cerca (micromagia y cartomagia en formato cóctel o por mesas) y magia de salón (para todo el grupo a la vez). Se puede combinar ambas disciplinas dependiendo de la estructura del evento, asegurando el máximo impacto emocional."
                }
            },
            {
                "@type": "Question",
                "name": "¿Realizas magia para público internacional en inglés?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, realizo presentaciones de magia e ilusionismo tanto en español como en inglés, perfecto para eventos corporativos en IFEMA, ferias internacionales y bodas con invitados extranjeros en Madrid."
                }
            },
            {
                "@type": "Question",
                "name": "¿Se requiere equipo técnico o escenario para contratar un mago?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para el formato de Magia de Cerca (Close-Up) no se requiere ningún tipo de infraestructura, escenario ni sonido. Es un formato totalmente adaptable y versátil. Para el show de salón sí se requiere un pequeño espacio escénico y sonido para audiencias de más de 40 personas."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué incluye el servicio de contratación?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El servicio incluye la asesoría inicial para estructurar el evento, la personalización de la rutina si es para empresas (incorporando mensajes o logotipos), y la ejecución milimétrica del show de magia en el evento, garantizando una técnica depurada y control de atención total."
                }
            },
            {
                "@type": "Question",
                "name": "¿Hay que pagar señal para reservar? ¿Y si llueve?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, se requiere una señal en concepto de reserva para bloquear la fecha (especialmente en temporada alta). En caso de lluvia, la magia de cerca es totalmente adaptable a interiores, por lo que el show nunca se cancela por este motivo."
                }
            }
        ];

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfessionalService",
                "@id": "https://angelruiz.world/#organization",
                "name": "Ángel Ruiz | Mago e Ilusionista",
                "url": "https://angelruiz.world",
                "image": "https://angelruiz.world/images/foto-bio.webp",
                "telephone": "+34648055636",
                "priceRange": "300€ - 750€",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Madrid",
                    "addressRegion": "Comunidad de Madrid",
                    "addressCountry": "ES"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Madrid"
                }
            },
            {
                "@type": "Service",
                "@id": "https://angelruiz.world/contratar-mago-madrid/#service",
                "name": "Contratación de Mago en Madrid — Ángel Ruiz",
                "serviceType": "Entertainment Services",
                "provider": { "@id": "https://angelruiz.world/#organization" },
                "areaServed": {
                    "@type": "AdministrativeArea",
                    "name": "Comunidad de Madrid"
                },
                "description": "Servicio profesional de ilusionismo de autor para bodas, empresas y celebraciones privadas en Madrid. Trato directo sin agencias intermediarias.",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Tarifas de Contratación de Magia en Madrid 2026",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Magia para Celebraciones Privadas y Fiestas de Adultos"
                            },
                            "priceSpecification": {
                                "@type": "PriceSpecification",
                                "price": 300,
                                "priceCurrency": "EUR"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Mago para Bodas (Cóctel y Banquete)"
                            },
                            "priceSpecification": {
                                "@type": "PriceSpecification",
                                "minPrice": 450,
                                "maxPrice": 650,
                                "priceCurrency": "EUR"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Mago para Eventos Corporativos y Cenas de Empresa"
                            },
                            "priceSpecification": {
                                "@type": "PriceSpecification",
                                "minPrice": 500,
                                "maxPrice": 750,
                                "priceCurrency": "EUR"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
                    { "@type": "ListItem", "position": 2, "name": "Contratar Mago Madrid", "item": "https://angelruiz.world/contratar-mago-madrid" }
                ]
            }
        ]
    };

    // faqs directly used in JSX

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto selection:bg-amber-500/30">
                    <Breadcrumbs />
                    
                    {/* HERO BENTO 2 COLUMNAS */}
                    <div className="mt-12 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        <div className="lg:col-span-7">
                            <p className="font-mono text-amber-400 text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                Protocolo de Contratación Directa
                            </p>
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-[Cinzel] text-white font-bold leading-[1.05] mb-6 tracking-tight">
                                CONTRATAR MAGO <br/><span className="text-[#d4a853]">EN MADRID</span>
                            </h1>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                                Asegura la disponibilidad para tu evento en Madrid. Desde Magia de Cerca y Sleight of Hand hasta magia de salón corporativa de alto impacto. Trato directo con el artista, sin intermediarios ni comisiones de agencia.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <a
                                    href="https://wa.me/34648055636?text=Hola%20Ángel,%20quisiera%20consultar%20disponibilidad%20y%20tarifas%20para%20contratar%20magia%20en%20Madrid"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-emerald-500/25 active:scale-95 transition-all flex items-center gap-2"
                                >
                                    <span>WhatsApp Directo (&lt;1h)</span>
                                </a>
                                <a
                                    href="#formatos-tarifas"
                                    className="px-7 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all"
                                >
                                    Ver Formatos & Tarifas
                                </a>
                            </div>

                            {/* Ficha Técnica GEO Extractable (Optimización para IA y Lectura Rápida) */}
                            <div className="w-full rounded-2xl bg-white/[0.03] border border-amber-500/30 p-5 backdrop-blur-xl text-left shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        Ficha Técnica de Contratación 2026
                                    </span>
                                    <span className="text-[11px] text-slate-400">Trato directo con Ángel Ruiz</span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                                    <div>
                                        <span className="text-slate-400 block mb-0.5">Tarifas Oficiales</span>
                                        <span className="text-white font-bold text-sm">300€ - 750€</span>
                                        <span className="text-[10px] text-amber-400 block">Sin comisiones</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-400 block mb-0.5">Respuesta</span>
                                        <span className="text-white font-bold text-sm">&lt; 1 Hora</span>
                                        <span className="text-[10px] text-slate-400 block">Presupuesto express</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-400 block mb-0.5">Especialización</span>
                                        <span className="text-white font-bold text-sm">Escuela DaOrtiz</span>
                                        <span className="text-[10px] text-slate-400 block">+10 años trayectoria</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-400 block mb-0.5">Cobertura</span>
                                        <span className="text-white font-bold text-sm">Toda Madrid</span>
                                        <span className="text-[10px] text-slate-400 block">Desplazamiento incl.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COLUMNA VISUAL BIO */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-amber-500/10 to-amber-600/20 rounded-3xl blur-2xl pointer-events-none" />
                                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-900/80 group">
                                    <BioCarousel 
                                        aspectRatio="aspect-[4/5]"
                                        alt="Ángel Ruiz - Ilusionista profesional en Madrid para contratación directa"
                                        interval={2500}
                                        priority
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 z-10 px-4 py-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-lg">
                                        <div>
                                            <p className="text-sm font-bold text-white font-[Cinzel]">Ángel Ruiz</p>
                                            <p className="text-[11px] text-amber-400 font-medium">Contratación Directa · Madrid</p>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            <span>Disponible</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SOCIAL PROOF CORPORATIVO */}
                    <CorporateLogosBar className="mb-20 rounded-3xl" />

                    {/* SECCIÓN FORMATOS CON FOTOGRAFÍA REAL */}
                    <section id="formatos-tarifas" className="mb-24">
                        <div className="text-center mb-12">
                            <span className="text-amber-400 text-xs font-mono uppercase tracking-[0.2em] block mb-2 font-bold">
                                Formatos Disponibles
                            </span>
                            <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white font-bold mb-4">
                                Elige la Experiencia para Tu Celebración
                            </h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-light">
                                Precios directos sin margen de intermediación. Incluye seguro de responsabilidad civil, desplazamiento en Madrid y personalización.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                            {/* 01: BODAS */}
                            <div className="group rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/50 bg-slate-900/60 shadow-xl transition-all duration-300 flex flex-col justify-between">
                                <div>
                                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900">
                                        <Image
                                            src="/images/mago-bodas-cocktail-exterior-madrid.webp"
                                            alt="Mago para cóctel de bodas en Madrid"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            placeholder="blur"
                                            blurDataURL={galleryBlurs['/images/mago-bodas-cocktail-exterior-madrid.webp']}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[10px] font-semibold uppercase tracking-wider">
                                            Bodas & Cóctel
                                        </span>
                                    </div>
                                    <div className="p-6 sm:p-7">
                                        <h3 className="text-xl font-[Cinzel] font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                                            Cóctel de Bodas
                                        </h3>
                                        <div className="text-2xl font-[Cinzel] font-bold text-amber-400 mb-3">
                                            Desde 450€
                                        </div>
                                        <p className="text-slate-400 text-xs leading-relaxed mb-4">
                                            Magia de cerca itinerante entre los grupos durante la copa de recepción. Rompe el hielo y crea momentos inolvidables.
                                        </p>
                                        <ul className="text-xs text-slate-300 space-y-1.5 mb-4">
                                            <li>✦ 60 - 90 min de magia interactiva</li>
                                            <li>✦ Número exclusivo para los novios</li>
                                            <li>✦ Coordinación con wedding planner</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                                    <Link href="/particulares/bodas" className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group-hover:gap-2 transition-all">
                                        <span>Ver detalles para bodas</span>
                                        <span>→</span>
                                    </Link>
                                </div>
                            </div>

                            {/* 02: EMPRESAS (REESTRUCTURADO SIN CORTE DE BADGE) */}
                            <div className="relative pt-3 flex flex-col">
                                <div className="absolute top-0 right-6 z-20 px-3.5 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider rounded-full shadow-lg shadow-amber-500/25">
                                    Más Solicitado B2B
                                </div>
                                <div className="group rounded-3xl overflow-hidden border border-amber-500/40 hover:border-amber-400 bg-slate-900/80 shadow-2xl transition-all duration-300 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900">
                                            <Image
                                                src="/images/mago-para-empresas-en-madrid.webp"
                                                alt="Magia para eventos de empresa en Madrid"
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                placeholder="blur"
                                                blurDataURL={galleryBlurs['/images/mago-para-empresas-en-madrid.webp']}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                                            <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[10px] font-semibold uppercase tracking-wider">
                                                Empresas & Cenas
                                            </span>
                                        </div>
                                        <div className="p-6 sm:p-7">
                                            <h3 className="text-xl font-[Cinzel] font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                                                Eventos Corporativos
                                            </h3>
                                            <div className="text-2xl font-[Cinzel] font-bold text-amber-400 mb-3">
                                                500€ – 750€
                                            </div>
                                            <p className="text-slate-400 text-xs leading-relaxed mb-4">
                                                Networking para cócteles de empresa, pases de mesa en cenas navideñas y dinamización en ferias y congresos.
                                            </p>
                                            <ul className="text-xs text-slate-300 space-y-1.5 mb-4">
                                                <li>✦ Personalización con valores de marca</li>
                                                <li>✦ Facturación oficial profesional</li>
                                                <li>✦ Presentación en español o inglés</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                                        <Link href="/empresas" className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group-hover:gap-2 transition-all">
                                            <span>Ver opciones corporativas</span>
                                            <span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* 03: CELEBRACIONES PRIVADAS */}
                            <div className="group rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/50 bg-slate-900/60 shadow-xl transition-all duration-300 flex flex-col justify-between">
                                <div>
                                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900">
                                        <Image
                                            src="/images/risas-reacciones-magia-restaurante-madrid.webp"
                                            alt="Magia en celebraciones privadas y cumpleaños en Madrid"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            placeholder="blur"
                                            blurDataURL={galleryBlurs['/images/risas-reacciones-magia-restaurante-madrid.webp']}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[10px] font-semibold uppercase tracking-wider">
                                            Cumpleaños & Fiestas
                                        </span>
                                    </div>
                                    <div className="p-6 sm:p-7">
                                        <h3 className="text-xl font-[Cinzel] font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                                            Celebraciones Privadas
                                        </h3>
                                        <div className="text-2xl font-[Cinzel] font-bold text-amber-400 mb-3">
                                            Desde 300€
                                        </div>
                                        <p className="text-slate-400 text-xs leading-relaxed mb-4">
                                            Cumpleaños de adultos (40, 50, 60 años), comuniones y aniversarios en restaurantes o a domicilio en Madrid.
                                        </p>
                                        <ul className="text-xs text-slate-300 space-y-1.5 mb-4">
                                            <li>✦ 50 - 75 min de asombro y risas</li>
                                            <li>✦ El homenajeado como protagonista</li>
                                            <li>✦ Desplazamiento incluido en Madrid</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                                    <Link href="/particulares/fiestas-cumpleanos-madrid" className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group-hover:gap-2 transition-all">
                                        <span>Ver fiestas y cumpleaños</span>
                                        <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* METODOLOGIA DE TRABAJO (PROCESS CARDS) */}
                    <section className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-[Cinzel] text-white font-bold mb-4">El Proceso: De la Idea a la Ejecución</h2>
                            <p className="text-slate-400">Cómo organizamos el ilusionismo para que sea perfecto.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { step: '01', title: 'PARÁMETROS', desc: 'Analizamos las necesidades. Define el formato (Close-up o Magia de Salón), la fecha, el lugar en Madrid y el volumen de espectadores para determinar la mejor aproximación mágica.' },
                                { step: '02', title: 'CALIBRACIÓN', desc: 'Diseño y personalización de la rutina técnica adaptada a la arquitectura del evento. Si es corporativo, integramos mensajes de marca usando juegos interactivos.' },
                                { step: '03', title: 'EJECUCIÓN', desc: 'Despliegue del ilusionista en el evento con precisión absoluta. Control de la atención y asombro a centímetros de distancia, logrando el máximo impacto emocional.' }
                            ].map((item) => (
                                <div key={item.step} className="bg-zinc-900/40 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] p-8 rounded-[2rem] hover:-translate-y-2 hover:bg-zinc-800/50 transition-all duration-500 ease-out group">
                                    <div className="text-amber-500/20 font-mono text-5xl font-bold mb-4 group-hover:text-amber-400/40 transition-colors">
                                        {item.step}
                                    </div>
                                    <h3 className="text-white font-[Cinzel] font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* BENEFICIOS / TRUST BLOCKS */}
                    <section className="mb-24 bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white font-bold mb-6">Por qué elegir a un especialista</h2>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    Contratar a un mago en Madrid no se trata solo de ver trucos, se trata de experimentar <strong>arte en tiempo real</strong>. Especialista en cartomagia de la escuela de DaOrtiz, ofrezco un nivel de ilusionismo que desafía el intelecto.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { title: 'Cero Infraestructura Requerida', desc: 'El close-up fluye entre los invitados.' },
                                        { title: 'Rompehielos Garantizado', desc: 'El mejor método para unir a desconocidos.' },
                                        { title: 'Ilusionismo Interactivo', desc: 'La magia ocurre en sus propias manos.' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <span className="text-amber-400 font-mono mt-1">{"//"}</span>
                                            <div>
                                                <strong className="text-white text-sm block">{item.title}</strong>
                                                <span className="text-slate-500 text-sm">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group bg-zinc-950">
                                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                                    <Image
                                        src="/images/reacciones-magia-empresas.webp"
                                        alt="Reacciones reales del público en espectáculo de magia corporativa en Madrid"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        placeholder="blur"
                                        blurDataURL={galleryBlurs['/images/reacciones-magia-empresas.webp']}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                                </div>
                                <div className="p-8 relative z-10 -mt-16 bg-slate-950/90 backdrop-blur-md rounded-b-[2.5rem] border-t border-white/10">
                                    <p className="text-sm md:text-base text-slate-200 italic mb-4 font-light">
                                        "El control sobre el grupo y la técnica impecable transformaron por completo la dinámica de nuestro evento de empresa. Fue el tema de conversación durante semanas."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-amber-500/20 border border-amber-500/40 rounded-full flex items-center justify-center text-amber-400 font-bold text-xs">
                                            HR
                                        </div>
                                        <div>
                                            <p className="text-white text-xs font-bold font-[Cinzel]">Directora de Personas & Cultura</p>
                                            <p className="text-slate-400 text-[10px]">Empresa Tecnológica en Madrid</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* GALERÍA DE ACTUACIONES REALES */}
                    <section className="mb-24">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                            <div>
                                <span className="text-amber-400 text-xs font-mono uppercase tracking-[0.2em] block mb-2 font-bold">
                                    En Vivo y en Directo
                                </span>
                                <h2 className="text-3xl md:text-4xl font-[Cinzel] text-white font-bold">
                                    Garantía de Asombro en Toda Madrid
                                </h2>
                                <p className="text-slate-400 text-sm max-w-xl mt-1 font-light">
                                    Imágenes reales de actuaciones en bodas, galas corporativas y cócteles exclusivos.
                                </p>
                            </div>
                            <Link 
                                href="/galeria"
                                className="text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-widest flex items-center gap-2 group transition-all"
                            >
                                <span>Explorar Galería Completa</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { src: '/images/evento-angel-ruiz-magia.webp', alt: 'Ángel Ruiz en evento corporativo de empresa en Madrid', tag: 'Corporativo' },
                                { src: '/images/ilusionista-cocktail-jardin-madrid.webp', alt: 'Magia de cerca en cóctel en jardín exterior en Madrid', tag: 'Cóctel & Fincas' },
                                { src: '/images/cartomagia-de-cerca-angel-ruiz.webp', alt: 'Manipulación experta de cartas en magia de cerca', tag: 'Cartomagia' },
                                { src: '/images/mago-rooftop-eventos-privados-madrid.webp', alt: 'Magia en evento privado exclusivo en rooftop de Madrid', tag: 'Rooftops & VIP' }
                            ].map((pic, idx) => (
                                <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-white/10 hover:border-amber-400/50 shadow-xl transition-all">
                                    <Image
                                        src={pic.src}
                                        alt={pic.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 640px) 50vw, 25vw"
                                        placeholder="blur"
                                        blurDataURL={galleryBlurs[pic.src]}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[10px] font-semibold uppercase tracking-wider">
                                        {pic.tag}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* GEO: Comparativa de Opciones de Contratación */}
                    <section className="mb-24">
                        <div className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white mb-6">
                                Contratar Directamente vs. Agencia: ¿Qué te Conviene?
                            </h2>
                            <p className="text-slate-300 font-light text-base leading-relaxed mb-6">
                                Muchos organizadores de eventos en Madrid dudan entre contratar al mago directamente o a través de una agencia. Esta tabla resume las diferencias clave:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left border border-white/10 rounded-2xl overflow-hidden">
                                    <thead>
                                        <tr className="bg-white/5 text-amber-400 uppercase tracking-wider text-xs">
                                            <th className="px-5 py-4 font-medium">Aspecto</th>
                                            <th className="px-5 py-4 font-medium">Contratación Directa</th>
                                            <th className="px-5 py-4 font-medium">A Través de Agencia</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-300 font-light">
                                        <tr className="border-t border-white/5">
                                            <td className="px-5 py-3 text-white font-medium">Precio</td>
                                            <td className="px-5 py-3 text-amber-400 font-medium">Sin comisiones (20-40% menos)</td>
                                            <td className="px-5 py-3">Incluye margen de agencia</td>
                                        </tr>
                                        <tr className="border-t border-white/5 bg-white/[0.02]">
                                            <td className="px-5 py-3 text-white font-medium">Comunicación</td>
                                            <td className="px-5 py-3 text-amber-400 font-medium">Directa con el artista</td>
                                            <td className="px-5 py-3">Intermediario (posibles malentendidos)</td>
                                        </tr>
                                        <tr className="border-t border-white/5">
                                            <td className="px-5 py-3 text-white font-medium">Personalización</td>
                                            <td className="px-5 py-3 text-amber-400 font-medium">Total (efectos a medida)</td>
                                            <td className="px-5 py-3">Limitada (paquetes estándar)</td>
                                        </tr>
                                        <tr className="border-t border-white/5 bg-white/[0.02]">
                                            <td className="px-5 py-3 text-white font-medium">Velocidad de respuesta</td>
                                            <td className="px-5 py-3 text-amber-400 font-medium">Presupuesto en menos de 1h</td>
                                            <td className="px-5 py-3">24-72h habitual</td>
                                        </tr>
                                        <tr className="border-t border-white/5">
                                            <td className="px-5 py-3 text-white font-medium">Garantía de profesional</td>
                                            <td className="px-5 py-3">Ves vídeos y reseñas del artista exacto</td>
                                            <td className="px-5 py-3">A veces envían sustituto</td>
                                        </tr>
                                        <tr className="border-t border-white/5 bg-white/[0.02]">
                                            <td className="px-5 py-3 text-white font-medium">Facturación</td>
                                            <td className="px-5 py-3">Factura oficial directa</td>
                                            <td className="px-5 py-3">Factura de la agencia</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-slate-500 text-xs font-light italic mt-3">
                                Ángel Ruiz trabaja sin intermediarios. Trato directo, presupuesto personalizado y sin sorpresas.
                            </p>
                        </div>
                    </section>

                    {/* EXTENSIVE FAQS */}
                    <section className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-[Cinzel] text-white font-bold mb-4">Preguntas Frecuentes al Contratar</h2>
                            <p className="text-slate-400">Todo lo que necesitas saber antes de asegurar tu fecha en Madrid.</p>
                        </div>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} faq={faq} />
                            ))}
                        </div>
                    </section>

                    {/* EVENT GUIDES */}
                    <section className="mb-20">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-[Cinzel] text-white font-bold mb-2">Guías y Consejos según tu Evento</h3>
                            <p className="text-slate-400 text-sm">Resuelve dudas sobre formatos, timing y reserva para tu fecha en Madrid.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                            <a href="/blog/espectaculo-animacion-cenas-navidad-empresas-madrid" className="p-5 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-amber-400/50 transition-colors block">
                                <span className="text-amber-400 text-[10px] font-mono uppercase tracking-wider block mb-1">Cenas Empresa</span>
                                <strong className="text-white text-sm block mb-1">Animación para Cenas de Navidad</strong>
                                <span className="text-slate-400 text-xs">Comparativa de espectáculos y timing →</span>
                            </a>
                            <a href="/blog/magia-restaurante-cumpleanos-adultos-madrid" className="p-5 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-amber-400/50 transition-colors block">
                                <span className="text-amber-400 text-[10px] font-mono uppercase tracking-wider block mb-1">Particulares</span>
                                <strong className="text-white text-sm block mb-1">Cumpleaños en Restaurantes</strong>
                                <span className="text-slate-400 text-xs">Magia de cerca en mesa y reservados →</span>
                            </a>
                            <a href="/blog/mago-bodas-2027-madrid-reserva-fechas" className="p-5 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-amber-400/50 transition-colors block">
                                <span className="text-amber-400 text-[10px] font-mono uppercase tracking-wider block mb-1">Bodas 2027</span>
                                <strong className="text-white text-sm block mb-1">Reserva Anticipada de Bodas</strong>
                                <span className="text-slate-400 text-xs">Fechas clave y tarifas congeladas →</span>
                            </a>
                            <a href="/blog/cenas-empresa-pequenas-madrid-animacion-magia" className="p-5 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-amber-400/50 transition-colors block">
                                <span className="text-amber-400 text-[10px] font-mono uppercase tracking-wider block mb-1">Equipos 10-30 pax</span>
                                <strong className="text-white text-sm block mb-1">Cenas de Empresa Pequeñas</strong>
                                <span className="text-slate-400 text-xs">Formato íntimo para departamentos →</span>
                            </a>
                        </div>
                    </section>

                    {/* CONTACT BAR */}
                    <div className="bg-gradient-to-r from-amber-950/20 to-zinc-900/40 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl font-[Cinzel] text-white font-bold mb-2">Precios Mago Madrid: desde 300€</h2>
                            <p className="text-slate-400 text-sm max-w-lg mb-4">
                                Tarifas transparentes sin intermediarios: 300€ (particulares y comuniones), desde 450€ hasta 650€ (bodas) y desde 500€ hasta 750€ (empresas y cenas corporativas). Presupuesto cerrado a medida en menos de 2 horas.
                            </p>
                            <p className="text-amber-500 text-xs font-bold uppercase tracking-widest animate-pulse">
                                Temporada alta: disponibilidad limitada
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 items-end active:scale-[0.97] transition-transform duration-200 shrink-0">
                            <ContactButtonClient label="INICIAR CONTACTO" />
                            <a href="https://wa.me/34648055636?text=Hola%20%C3%81ngel,%20he%20visto%20las%20tarifas%20en%20la%20web%20y%20quiero%20consultar%20disponibilidad." target="_blank" rel="noopener noreferrer" className="text-sm text-amber-400 hover:text-amber-300 font-bold flex items-center gap-2 transition-colors">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Consultar disponibilidad ahora
                            </a>
                        </div>
                    </div>
                </main>
            </NavFooterClient>
        </>
    );
}
