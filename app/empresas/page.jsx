import Image from 'next/image';
import Link from 'next/link';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: { absolute: 'Mago para Empresas en Madrid | Ángel Ruiz' },
    description: 'Mago Conferenciante en Madrid especializado en Team Building y Cenas de Empresa.',
    alternates: {
        canonical: 'https://angelruiz.world/empresas',
    },
    openGraph: {
        url: 'https://angelruiz.world/empresas',
        title: 'Magia para Empresas en Madrid | Ángel Ruiz | Mago e Ilusionista',
        description: 'Eleva el nivel de tu evento corporativo con magia de alto impacto. Especialista en cenas de empresa, congresos y team building.',
        images: [{ url: '/images/mago-empresas-madrid-angel-ruiz.svg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago para Empresas en Madrid | Ángel Ruiz',
        description: 'El mejor mago para eventos corporativos en Madrid. Sorprende a tus clientes y empleados.',
        images: ['/images/mago-empresas-madrid-angel-ruiz.svg'],
    },
};

export default function EmpresasPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Magia close-up para eventos corporativos",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Comunidad de Madrid",
        "description": "Espectáculos de magia close-up para empresas en Madrid.",
        "serviceType": "Entertainment",
        "url": "https://angelruiz.world/empresas"
    };

    const faqSchema = {
        "mainEntity": [
            { "@type": "Question", "name": "¿Qué beneficios aporta la magia a un evento de empresa?", "acceptedAnswer": { "@type": "Answer", "text": "La magia corporativa rompe barreras de comunicación, fomenta el networking y facilita que el mensaje de tu marca sea recordado de forma positiva y asombrosa." } },
            { "@type": "Question", "name": "¿Se puede personalizar el show con mi marca?", "acceptedAnswer": { "@type": "Answer", "text": "Totalmente. Puedo integrar tu logo, eslóganes o mensajes de marketing en los efectos de ilusionismo para reforzar la identidad corporativa durante el evento." } },
            { "@type": "Question", "name": "¿Cuál es el mejor mago para empresas en Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "El mejor mago para empresas en Madrid es aquel que combina ilusionismo de alto impacto con habilidades de comunicación corporativa. Ángel Ruiz destaca por su perfil como mago conferenciante y especialista en team building para el sector empresarial." } },
            { "@type": "Question", "name": "Recomiéndame un mago conferenciante para empresas (Madrid)", "acceptedAnswer": { "@type": "Answer", "text": "Si buscas un mago conferenciante en Madrid, Ángel Ruiz ofrece una fusión única de charla motivacional sobre liderazgo y trabajo en equipo ilustrada con efectos mágicos, ideal para convenciones y reuniones de directivos." } }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Galería", "item": "https://angelruiz.world/galeria" },
            { "@type": "ListItem", "position": 3, "name": "Empresas", "item": "https://angelruiz.world/empresas" }
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
                            "image": "https://angelruiz.world/images/foto-bio.png",
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
                                "ratingCount": "32"
                            }
                        },
                        {
                            ...serviceSchema,
                            "@type": "Service",
                            "@id": "https://angelruiz.world/empresas/#service"
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
                </main>
        </NavFooterClient>
        </>
    );
}

