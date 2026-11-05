import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import FAQItem from '@/components/FAQItem';
import NavFooterClient from '@/components/NavFooterClient';
import Breadcrumbs from '@/components/Breadcrumbs';

const ContactButtonClient = dynamic(() => import('@/components/ContactButtonClient'), { ssr: false });
const MagicCursor = dynamic(() => import('@/components/VisualEffects').then(mod => mod.MagicCursor), { ssr: false });
const ParticleBackground = dynamic(() => import('@/components/VisualEffects').then(mod => mod.ParticleBackground), { ssr: false });
const BioCarousel = dynamic(() => import('@/components/BioCarousel'), { ssr: false });
import galleryBlurs from '@/public/images/gallery-blurs.json';

export const metadata = {
    title: { absolute: 'Mago Cartomago en Madrid | Cartomagia · Ángel Ruiz' },
    description: 'Especialista en cartomagia de autor en Madrid, formado con Dani DaOrtiz. Magia con cartas a centímetros de tus ojos. Presupuesto express en menos de 1h.',
    keywords: [
        'mago cartomagia madrid',
        'cartomago madrid',
        'mago con cartas madrid',
        'cartomagia de autor madrid',
        'mago dani daortiz',
        'magia con cartas para eventos madrid',
        'ilusionista cartas madrid',
        'mago close up cartas madrid'
    ],
    alternates: {
        canonical: 'https://angelruiz.world/mago-cartomagia-madrid',
    },
    openGraph: {
        url: 'https://angelruiz.world/mago-cartomagia-madrid',
        title: 'Mago Cartomago en Madrid | Cartomagia · Ángel Ruiz',
        description: 'Especialista en cartomagia de autor en Madrid, formado con Dani DaOrtiz. Magia con cartas a centímetros de tus ojos. Presupuesto express en menos de 1h.',
        images: [{ url: '/images/foto-bio.webp', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago Cartomago en Madrid | Cartomagia · Ángel Ruiz',
        description: 'Especialista en cartomagia de autor en Madrid, formado con Dani DaOrtiz. Magia con cartas a centímetros de tus ojos.',
        images: ['/images/foto-bio.webp'],
    },
};

const cartomagiaGalleryImages = [
    {
        src: '/images/cartomagia-de-cerca-angel-ruiz.webp',
        alt: 'Primer plano de cartomagia y manipulación experta de baraja por Ángel Ruiz',
        title: 'Técnica Purista',
        tag: 'Manipulación',
        caption: 'Control milimétrico de la baraja a escasos centímetros de los ojos del espectador.',
        aspect: 'aspect-[4/5]',
        blurDataURL: galleryBlurs['/images/cartomagia-de-cerca-angel-ruiz.webp']
    },
    {
        src: '/images/cartomagia-angel-ruiz.webp',
        alt: 'Espectadora firmando la carta durante una experiencia de cartomagia de autor en Madrid',
        title: 'Cartas Firmadas de Recuerdo',
        tag: '100% Interactivo',
        caption: 'Los asistentes firman el naipe elegido, que luego conservan como prueba de lo imposible.',
        aspect: 'aspect-[4/5]',
        blurDataURL: galleryBlurs['/images/cartomagia-angel-ruiz.webp']
    },
    {
        src: '/images/sesion-cartomagia-teatro-angel-ruiz.webp',
        alt: 'Ángel Ruiz en la mesa de magia de cerca teatral en directo con espectadores',
        title: 'Sesión de Mesa Íntima',
        tag: 'Club Privado',
        caption: 'La atmósfera secreta y elegante de los reservados privados de magia de salón.',
        aspect: 'aspect-[4/5]',
        blurDataURL: galleryBlurs['/images/sesion-cartomagia-teatro-angel-ruiz.webp']
    },
    {
        src: '/images/mago-cartomagia-interactiva-publico-madrid.webp',
        alt: 'Ángel Ruiz extendiendo la baraja de cartas a los asistentes durante una sesión interactiva de magia de cerca en Madrid',
        title: 'Pases Itinerantes en Cóctel',
        tag: 'Walk-Around',
        caption: 'De corrillo en corrillo en recepciones y cócteles, rompiendo el hielo al instante.',
        aspect: 'aspect-[4/5]',
        blurDataURL: galleryBlurs['/images/mago-cartomagia-interactiva-publico-madrid.webp']
    },
    {
        src: '/images/ilusionista-profesional-madrid.webp',
        alt: 'Detalle de carta elegida y firmada en tapete de magia de cerca en Madrid',
        title: 'Detalle en Tapete Close-Up',
        tag: 'Psicología',
        caption: 'Sin aparatos comerciales ni trucos de cámara: 52 cartulinas y psicología pura.',
        aspect: 'aspect-[4/5]',
        blurDataURL: galleryBlurs['/images/ilusionista-profesional-madrid.webp']
    },
    {
        src: '/images/mago-rooftop-eventos-privados-madrid.webp',
        alt: 'Ángel Ruiz realizando magia de cerca con baraja de cartas para invitados en un evento exclusivo en rooftop con vistas en Madrid',
        title: 'Eventos Exclusivos en Madrid',
        tag: 'Bodas & Empresas',
        caption: 'Ilusionismo de autor en las fincas, hoteles y rooftops más selectos de la capital.',
        aspect: 'aspect-[4/5]',
        blurDataURL: galleryBlurs['/images/mago-rooftop-eventos-privados-madrid.webp']
    }
];

const cartomagiaFaqs = [
    {
        name: "¿Qué diferencia a un especialista en cartomagia de un mago generalista?",
        acceptedAnswer: {
            text: "Un cartomago dedica años al dominio profundo de la baraja, la psicología y la naturalidad del movimiento. En lugar de utilizar accesorios voluminosos o aparatos comerciales, la cartomagia de autor convierte 52 cartulinas en milagros visuales imposibles sucediendo directamente en las manos de los invitados."
        }
    },
    {
        name: "¿Qué influencia tiene la formación con Dani DaOrtiz en tu estilo?",
        acceptedAnswer: {
            text: "Dani DaOrtiz es considerado mundialmente uno de los grandes revolucionarios de la cartomagia contemporánea. Formarme en su escuela me inculcó la búsqueda de la máxima libertad para el espectador, la ausencia total de tensión aparente y la creación de un asombro genuino donde todo parece suceder por pura casualidad."
        }
    },
    {
        name: "¿Se necesita una mesa o tapete para realizar cartomagia en un evento?",
        acceptedAnswer: {
            text: "No necesariamente. La cartomagia para eventos se adapta a dos modalidades: en cócteles se realiza 'in the hands' (itinerante de pie, sin requerir apoyo), mientras que en cenas sentadas o sobremesas privadas se puede emplear un tapete profesional para una sesión de mesa exclusiva de autor."
        }
    },
    {
        name: "¿Los invitados pueden tocar y mezclar la baraja?",
        acceptedAnswer: {
            text: "Absolutamente. De hecho, es uno de los pilares de la experiencia: que los asistentes tomen las cartas, mezclen a su voluntad, firmen naipes y comprueben que no hay trampa técnica ni barajas trucadas convencionales."
        }
    },
    {
        name: "¿Para qué tipo de eventos en Madrid es más recomendada la cartomagia?",
        acceptedAnswer: {
            text: "Es perfecta para cócteles de bodas exclusivas, cenas de empresa, reuniones de comités directivos, fiestas privadas en chalets y celebraciones donde se busca un entretenimiento sofisticado, interactivo e intelectualmente estimulante."
        }
    }
];

export default function MagoCartomagiaMadridPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Mago Cartomagia Madrid", "item": "https://angelruiz.world/mago-cartomagia-madrid" }
        ]
    };

    const businessSchema = {
        "@type": ["EntertainmentBusiness", "ProfessionalService"],
        "@id": "https://angelruiz.world/#organization",
        "name": "Ángel Ruiz Mago e Ilusionista",
        "alternateName": ["Ángel Ruiz | Especialista en Cartomagia", "Ángel Ruiz | Mago en Madrid"],
        "description": "Especialista en cartomagia de autor en Madrid. Discípulo de Dani DaOrtiz con más de 10 años de experiencia en bodas de lujo, eventos corporativos y fiestas privadas.",
        "url": "https://angelruiz.world",
        "logo": "https://angelruiz.world/icon.webp",
        "image": "https://angelruiz.world/images/foto-bio.webp",
        "priceRange": "450€ - 750€",
        "telephone": "+34648055636",
        "founder": { "@id": "https://angelruiz.world/#person" },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Torrelodones",
            "addressRegion": "Comunidad de Madrid",
            "postalCode": "28250",
            "addressCountry": "ES"
        },
        "areaServed": [
            { "@type": "City", "name": "Madrid" },
            { "@type": "City", "name": "Las Rozas" },
            { "@type": "City", "name": "Pozuelo de Alarcón" },
            { "@type": "City", "name": "Majadahonda" },
            { "@type": "City", "name": "Torrelodones" },
            { "@type": "City", "name": "Boadilla del Monte" }
        ]
    };

    const serviceSchema = {
        "@type": "Service",
        "name": "Cartomagia de Autor en Madrid",
        "serviceType": "Entertainment Service",
        "provider": { "@id": "https://angelruiz.world/#organization" },
        "areaServed": {
            "@type": "State",
            "name": "Comunidad de Madrid"
        },
        "description": "Espectáculos y pases exclusivos de cartomagia y magia de cerca para bodas, recepciones corporativas y celebraciones privadas en Madrid.",
        "url": "https://angelruiz.world/mago-cartomagia-madrid"
    };

    const schemaGraph = {
        "@context": "https://schema.org",
        "@graph": [breadcrumbSchema, businessSchema, serviceSchema]
    };

    return (
        <>
            <link rel="preload" as="image" href="/images/foto-bio.webp" type="image/webp" fetchPriority="high" />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
            />
            <MagicCursor />
            <ParticleBackground />

            <NavFooterClient>
                <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-amber-500 selection:text-black">
                    {/* HERO SECTION */}
                    <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/5">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-black to-black pointer-events-none" />
                        
                        <div className="max-w-6xl mx-auto px-6 relative z-10">
                            <Breadcrumbs items={[
                                { label: 'Inicio', href: '/' },
                                { label: 'Mago en Madrid', href: '/mago-madrid' },
                                { label: 'Cartomagia Madrid' }
                            ]} />

                            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                                {/* COLUMNA TEXTO */}
                                <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span>Formación Escuela Dani DaOrtiz · Cartomagia de Autor</span>
                                </div>

                                <h1 className="font-[Cinzel] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide leading-[1.1] mb-6">
                                    Mago Cartomago en Madrid | <span className="text-[#d4a853] block sm:inline">Cartomagia de Autor</span>
                                </h1>

                                <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8">
                                    52 cartas, tus propias manos y un asombro imposible a 30 centímetros de tus ojos. Especialista en <strong>cartomagia contemporánea para eventos exclusivos, bodas y cenas de empresa</strong> en toda la Comunidad de Madrid.
                                </p>

                                <div className="flex flex-wrap items-center gap-4">
                                    <a
                                        href="https://wa.me/34648055636?text=Hola%20Ángel,%20quisiera%20consultar%20disponibilidad%20y%20tarifas%20para%20cartomagia%20en%20Madrid"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-emerald-500/25 active:scale-95 transition-all flex items-center gap-2"
                                    >
                                        <span>Consultar por WhatsApp (&lt;1h)</span>
                                    </a>
                                    <Link
                                        href="/contratar-mago-madrid"
                                        className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-amber-400/30 text-amber-300 font-bold text-xs uppercase tracking-widest rounded-full transition-all"
                                    >
                                        Ver Tarifas Oficiales
                                    </Link>
                                </div>

                                <div className="flex items-center gap-6 mt-8 text-xs text-slate-400">
                                    <span className="flex items-center gap-1.5">
                                        <span className="text-amber-400 font-bold">★★★★★</span>
                                        <span>+60 opiniones reales en Google</span>
                                    </span>
                                    <span>•</span>
                                    <span>Trato directo sin intermediarios</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span className="hidden sm:inline">Presupuesto en menos de 1h</span>
                                </div>
                            </div>

                            {/* COLUMNA FOTO BIO */}
                            <div className="lg:col-span-5 relative">
                                <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                                    <div className="absolute -inset-2 bg-gradient-to-tr from-amber-600/30 via-amber-500/10 to-purple-600/25 rounded-3xl blur-2xl pointer-events-none" />
                                    
                                    <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-900/80 group">
                                        <BioCarousel 
                                            aspectRatio="aspect-[4/5]"
                                            alt="Ángel Ruiz - Mago especialista en cartomagia de autor en Madrid"
                                            interval={2500}
                                            priority
                                        />
                                        
                                        <div className="absolute bottom-4 left-4 right-4 z-10 px-4 py-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-amber-400/20 flex items-center justify-between shadow-lg">
                                            <div>
                                                <p className="text-sm font-bold text-white font-[Cinzel] tracking-wide">Ángel Ruiz</p>
                                                <p className="text-[11px] text-amber-400 font-medium">Cartomagia de Autor · Madrid</p>
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
                        </div>
                    </header>

                    {/* SECCIÓN: EL VALOR DE LA CARTOMAGIA DE AUTOR */}
                    <section className="py-20 max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] block">
                                    Diferencial de Autor
                                </span>
                                <h2 className="text-3xl md:text-4xl font-[Cinzel] font-bold text-white tracking-wide">
                                    ¿Por qué la Cartomagia es el Formato más Impactante para tus Invitados?
                                </h2>
                                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                                    Cualquier persona puede comprar un truco en una tienda de magia. Pero la verdadera <strong>cartomagia de autor</strong> se basa en una combinación milimétrica de psicología, lectura del comportamiento humano, desvío de la atención (*misdirection*) y una técnica invisible forjada durante más de una década.
                                </p>
                                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                                    Bajo la tutela de la prestigiosa escuela de <strong>Dani DaOrtiz</strong>, mi estilo rechaza las rutinas mecánicas y las cajas trucadas. Todo sucede de manera orgánica, caótica y natural, haciendo que el espectador sienta que el milagro es irrepetible e imposible de descifrar.
                                </p>
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="text-2xl font-[Cinzel] font-bold text-[#d4a853] mb-1">100%</div>
                                        <div className="text-xs text-slate-400">Participativo en manos de los asistentes</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="text-2xl font-[Cinzel] font-bold text-[#d4a853] mb-1">0</div>
                                        <div className="text-xs text-slate-400">Trucos de cámara o pantallas intermedias</div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 bg-slate-900/60 p-8 shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-3xl pointer-events-none" />
                                <h3 className="text-xl font-[Cinzel] font-bold text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-4">
                                    Formatos de Cartomagia para Eventos
                                </h3>
                                <ul className="space-y-5">
                                    <li className="flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                                            01
                                        </span>
                                        <div>
                                            <h4 className="text-white font-semibold text-sm">Cartomagia de Cóctel (Walk-Around)</h4>
                                            <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                                                Pases dinámicos de 5 a 10 minutos de corrillo en corrillo durante la copa de bienvenida en bodas y recepciones de empresa.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                                            02
                                        </span>
                                        <div>
                                            <h4 className="text-white font-semibold text-sm">Sesión Íntima de Salón / Club Secreto</h4>
                                            <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                                                Para grupos reducidos de 15 a 40 personas. Todos se sientan alrededor de una mesa o reservado privado viviendo una sesión completa de cartomagia de autor.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="w-8 h-8 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                                            03
                                        </span>
                                        <div>
                                            <h4 className="text-white font-semibold text-sm">Magia de Cerca en Banquete (Mesa en Mesa)</h4>
                                            <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                                                Intervención sutil entre platos o durante los cafés para dinamizar sobremesas en restaurantes y fincas de Madrid.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* SECCIÓN GALERÍA DE CARTOMAGIA EN VIVO */}
                    <section className="py-20 border-t border-white/5 bg-gradient-to-b from-[#07090e] via-slate-950/80 to-[#07090e]">
                        <div className="max-w-6xl mx-auto px-6">
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                                <div>
                                    <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                                        En Directo y Sin Trucos de Cámara
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-[Cinzel] font-bold text-white tracking-wide">
                                        Cartomagia en Primer Plano
                                    </h2>
                                    <p className="text-slate-400 text-sm md:text-base mt-2 max-w-2xl font-light leading-relaxed">
                                        Momentos reales capturados en bodas de lujo, recepciones corporativas y sesiones privadas en Madrid. 52 cartas y el asombro sucediendo directamente en las manos de tus invitados.
                                    </p>
                                </div>
                                <Link
                                    href="/galeria"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-400/40 text-amber-300 font-bold text-xs uppercase tracking-widest transition-all self-start md:self-end group"
                                >
                                    <span>Ver Galería Completa</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cartomagiaGalleryImages.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 bg-slate-900/60 shadow-xl transition-all duration-500 flex flex-col justify-end"
                                    >
                                        <div className={`relative w-full ${img.aspect} overflow-hidden bg-neutral-900`}>
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                placeholder={img.blurDataURL ? "blur" : "empty"}
                                                blurDataURL={img.blurDataURL}
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                                            <div className="absolute top-3 left-3 z-10">
                                                <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[10px] font-semibold uppercase tracking-wider">
                                                    {img.tag}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                                                <h3 className="text-white font-[Cinzel] font-bold text-base mb-1 group-hover:text-amber-300 transition-colors">
                                                    {img.title}
                                                </h3>
                                                <p className="text-slate-300 text-xs font-light leading-relaxed">
                                                    {img.caption}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Banner inferior dentro de la sección de galería */}
                            <div className="mt-12 p-8 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="space-y-1 text-center md:text-left">
                                    <p className="text-white font-[Cinzel] text-lg font-bold">
                                        ¿Quieres que tus invitados vivan esta misma experiencia de cerca?
                                    </p>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Fechas limitadas por temporada de bodas y eventos corporativos en Madrid. Consulta disponibilidad sin compromiso.
                                    </p>
                                </div>
                                <a
                                    href="https://wa.me/34648055636?text=Hola%20Ángel,%20he%20visto%20las%20fotos%20de%20cartomagia%20y%20me%20gustaría%20consultar%20tu%20disponibilidad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-emerald-500/20 transition-all shrink-0 active:scale-95 flex items-center gap-2"
                                >
                                    <span>Consultar por WhatsApp (&lt;1h)</span>
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* SECCIÓN PRECIOS Y TARIFAS */}
                    <section className="py-16 bg-slate-950/60 border-y border-white/5">
                        <div className="max-w-6xl mx-auto px-6 text-center">
                            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                                Tarifas Claras y Directas
                            </span>
                            <h2 className="text-3xl md:text-4xl font-[Cinzel] font-bold text-white mb-4">
                                ¿Cuánto Cuesta Contratar a un Cartomago en Madrid?
                            </h2>
                            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-light mb-12">
                                Sin presupuestos opacos ni comisiones de agencia. Cotización directa del artista con factura oficial y seguro de responsabilidad civil.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                                <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
                                    <div>
                                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">Particulares / Cumpleaños</span>
                                        <h3 className="text-2xl font-[Cinzel] font-bold text-white mb-2">Desde 300€</h3>
                                        <p className="text-xs text-slate-400 mb-6">Sesión completa para celebraciones de adultos, restaurantes y domicilios privados en Madrid.</p>
                                        <ul className="text-xs text-slate-300 space-y-2 mb-6">
                                            <li>✦ 60 - 75 min de magia interactiva</li>
                                            <li>✦ Cartas firmadas de recuerdo</li>
                                            <li>✦ Desplazamiento incluido en Madrid</li>
                                        </ul>
                                    </div>
                                    <Link href="/particulares/fiestas-cumpleanos-madrid" className="text-xs font-bold text-amber-400 hover:underline">
                                        Ver detalles de cumpleaños →
                                    </Link>
                                </div>

                                <div className="p-8 rounded-2xl bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 transition-all flex flex-col justify-between relative shadow-xl">
                                    <div className="absolute -top-3 right-6 px-3 py-1 bg-amber-500 text-black font-bold text-[10px] uppercase tracking-wider rounded-full">
                                        Formato Estrella
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">Cóctel de Bodas</span>
                                        <h3 className="text-2xl font-[Cinzel] font-bold text-white mb-2">Desde 450€</h3>
                                        <p className="text-xs text-slate-400 mb-6">Pase itinerante de autor durante la copa de recepción en las mejores fincas de Madrid y Sierra.</p>
                                        <ul className="text-xs text-slate-300 space-y-2 mb-6">
                                            <li>✦ 60 - 90 min de magia de cerca</li>
                                            <li>✦ Rompe el hielo entre invitados</li>
                                            <li>✦ Efecto exclusivo para los novios</li>
                                        </ul>
                                    </div>
                                    <Link href="/particulares/bodas" className="text-xs font-bold text-amber-400 hover:underline">
                                        Ver opciones para bodas →
                                    </Link>
                                </div>

                                <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
                                    <div>
                                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">Empresas & Cenas</span>
                                        <h3 className="text-2xl font-[Cinzel] font-bold text-white mb-2">500€ – 750€</h3>
                                        <p className="text-xs text-slate-400 mb-6">Networking para cócteles corporativos, pases de mesa y cenas de Navidad o Fin de Año.</p>
                                        <ul className="text-xs text-slate-300 space-y-2 mb-6">
                                            <li>✦ Personalización con valores de marca</li>
                                            <li>✦ Facturación profesional directa</li>
                                            <li>✦ Formato en español o inglés</li>
                                        </ul>
                                    </div>
                                    <Link href="/empresas/mago-cenas-empresa-madrid" className="text-xs font-bold text-amber-400 hover:underline">
                                        Ver cenas de empresa →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECCIÓN PREGUNTAS FRECUENTES (HTML SEMÁNTICO) */}
                    <section className="py-20 max-w-4xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                                Dudas Habituales
                            </span>
                            <h2 className="text-3xl font-[Cinzel] font-bold text-white">
                                Preguntas Frecuentes sobre Cartomagia en Madrid
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {cartomagiaFaqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    faq={faq}
                                />
                            ))}
                        </div>
                    </section>

                    {/* CALL TO ACTION FINAL */}
                    <section className="py-20 border-t border-white/10 bg-gradient-to-b from-transparent to-amber-950/20 text-center">
                        <div className="max-w-3xl mx-auto px-6">
                            <h2 className="text-3xl md:text-5xl font-[Cinzel] font-bold text-white mb-4">
                                Diseñemos el Asombro de Tu Próximo Evento
                            </h2>
                            <p className="text-slate-300 text-sm md:text-base font-light mb-8">
                                Cuéntame los detalles de tu celebración y recibirás un presupuesto a medida y confirmación de disponibilidad en menos de 1 hora.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://wa.me/34648055636?text=Hola%20Ángel,%20quisiera%20consultar%20disponibilidad%20para%20un%20show%20de%20cartomagia%20en%20Madrid"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-xl shadow-green-500/25 active:scale-95 transition-all"
                                >
                                    Escribir por WhatsApp (&lt;1h)
                                </a>
                                <Link
                                    href="/contacto"
                                    className="px-8 py-4 bg-white text-slate-900 font-bold text-xs uppercase tracking-widest rounded-full hover:bg-slate-200 transition-all"
                                >
                                    Formulario de Contacto
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </NavFooterClient>
        </>
    );
}
