import SobreMiClient from '@/components/SobreMiClient';
import Link from 'next/link';

export const metadata = {
    title: { absolute: 'Ángel Ruiz | Mago Profesional en Madrid (+12 Años)' },
    description: 'Conoce a Ángel Ruiz, mago profesional en Madrid formado con Dani DaOrtiz. Especialista en magia de cerca para bodas y empresas con +10 años de trayectoria (+12 años).',
    alternates: {
        canonical: 'https://angelruiz.world/sobre-mi',
    },
    openGraph: {
        url: 'https://angelruiz.world/sobre-mi',
        title: 'Ángel Ruiz, Mago Profesional en Madrid',
        description: 'Conoce a Ángel Ruiz, ilusionista especializado en magia de cerca para bodas y empresas.',
        images: [{ url: '/images/foto-bio.webp', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ángel Ruiz, Mago Profesional en Madrid',
        description: 'Conoce a Ángel Ruiz, ilusionista especializado en magia de cerca para bodas y empresas.',
        images: ['/images/foto-bio.webp'],
    },
};

export default function SobreMiPage() {
    const personSchema = {
        "@type": "Person",
        "@id": "https://angelruiz.world/#person",
        "name": "Ángel Ruiz",
        "jobTitle": "Mago e Ilusionista Profesional",
        "url": "https://angelruiz.world/sobre-mi",
        "image": "https://angelruiz.world/images/foto-bio.webp",
        "sameAs": [
            "https://instagram.com/angellruuiz",
            "https://tiktok.com/@angellruuiz",
            "https://youtube.com/@angellruuiz",
            "https://x.com/angellruuizz",
            "https://facebook.com/angellruuiz"
        ],
        "worksFor": {
            "@type": "ProfessionalService",
            "@id": "https://angelruiz.world/#organization",
            "name": "Ángel Ruiz | Mago e Ilusionista"
        },
        "knowsAbout": ["Magia de Cerca", "Cartomagia", "Ilusionismo Corporativo", "Magia para Bodas"],
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Escuela de Magia de Dani DaOrtiz",
            "url": "https://gkaps.com"
        },
        "areaServed": "Comunidad de Madrid"
    };

    const aboutPageSchema = {
        "@type": "AboutPage",
        "@id": "https://angelruiz.world/sobre-mi/#aboutpage",
        "url": "https://angelruiz.world/sobre-mi",
        "name": "Sobre Ángel Ruiz | Mago Profesional en Madrid",
        "description": "Biografía oficial, formación en la Escuela DaOrtiz y trayectoria de +12 años de Ángel Ruiz como ilusionista en Madrid.",
        "inLanguage": "es-ES",
        "mainEntity": {
            "@id": "https://angelruiz.world/#person"
        }
    };

    const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Sobre Mí", "item": "https://angelruiz.world/sobre-mi" }
        ]
    };

    return (
        <>
            <link rel="preload" as="image" href="/images/foto-bio.webp" type="image/webp" fetchPriority="high" />

        <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    aboutPageSchema,
                    personSchema,
                    breadcrumbSchema
                ]
            }) }} 
        />
        <SobreMiClient>
            <div className="space-y-7 text-slate-200 text-sm sm:text-base leading-relaxed">
                {/* Manifiesto / Cita personal */}
                <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-amber-400 border border-white/5 shadow-lg backdrop-blur-sm">
                    <p className="text-base sm:text-lg md:text-xl text-amber-300 font-[Cinzel] font-bold italic leading-snug">
                        "La magia de cerca no va de engañar a nadie: va de mirarnos a los ojos, romper el hielo con picardía y convertir a un grupo de desconocidos en cómplices."
                    </p>
                    <p className="text-xs uppercase tracking-widest text-slate-400 mt-3 font-medium">
                        — Ángel Ruiz · Mago e Ilusionista en Madrid
                    </p>
                </div>

                {/* Síntesis biográfica con SEO estratégico */}
                <div className="space-y-4 text-slate-300 font-light">
                    <p className="text-base sm:text-lg leading-relaxed text-slate-200">
                        Llevo <strong className="text-amber-300 font-semibold">+12 años haciendo magia</strong> como <Link href="/mago-madrid" className="text-amber-400 hover:underline font-medium">mago en Madrid</Link>. Mi estilo huye de los clichés de chistera y escenario: mi territorio natural es la <Link href="/mago-close-up-madrid" className="text-amber-400 hover:underline font-medium">magia de cerca (close-up)</Link> y cóctel, donde el asombro sucede a escasos centímetros de tus ojos y directamente en las manos de tus invitados.
                    </p>

                    <p className="leading-relaxed">
                        Me formé en la <strong>Escuela de Magia de Dani DaOrtiz</strong>, referente mundial indiscutible del ilusionismo con cartas. De esa formación absorbí un estilo directo, psicológico y desenfadado: <Link href="/mago-cartomagia-madrid" className="text-amber-400 hover:underline font-medium">cartomagia de autor</Link> con ritmo ágil, risas y ese toque pícaro que desarma la frialdad en cualquier celebración.
                    </p>
                </div>

                {/* 4 Señas de Identidad / Credenciales en Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-amber-400/30 transition-colors">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
                            ✦ Participativo y Pícaro
                        </span>
                        <p className="text-xs text-slate-300/90 leading-relaxed font-light">
                            Humor fino, complicidad e interacción continua. Rompo el hielo en cualquier cóctel haciendo partícipes a todos los invitados.
                        </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-amber-400/30 transition-colors">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
                            ✦ Bodas y Empresas
                        </span>
                        <p className="text-xs text-slate-300/90 leading-relaxed font-light">
                            Especializado en <Link href="/particulares/bodas" className="text-amber-400 hover:underline font-normal">magia para bodas</Link> y <Link href="/empresas" className="text-amber-400 hover:underline font-normal">eventos corporativos</Link> exclusivos que buscan una experiencia memorable.
                        </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-amber-400/30 transition-colors">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
                            ✦ Escuela DaOrtiz
                        </span>
                        <p className="text-xs text-slate-300/90 leading-relaxed font-light">
                            Técnica depurada en cartomagia de autor. Sin grandes aparatos ni humo: solo una baraja, psicología y máxima imposibilidad.
                        </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-amber-400/30 transition-colors">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
                            ✦ Madrid & Sierra Noroeste
                        </span>
                        <p className="text-xs text-slate-300/90 leading-relaxed font-light">
                            Con base en <Link href="/mago-torrelodones" className="text-amber-400 hover:underline font-normal">Torrelodones</Link>, me desplazo habitualmente a fincas, hoteles y salones de toda la Comunidad de Madrid.
                        </p>
                    </div>
                </div>

                {/* Métricas / Social Proof */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-6 text-xs text-slate-300">
                        <div>
                            <span className="text-amber-400 font-bold text-lg block font-[Cinzel]">+12 Años</span>
                            <span className="text-slate-400 text-[11px] uppercase tracking-wider">Haciendo Magia</span>
                        </div>
                        <div className="w-[1px] h-8 bg-white/10" />
                        <div>
                            <span className="text-amber-400 font-bold text-lg block font-[Cinzel]">5.0 ★★★★★</span>
                            <span className="text-slate-400 text-[11px] uppercase tracking-wider">+60 Reseñas Google</span>
                        </div>
                        <div className="w-[1px] h-8 bg-white/10" />
                        <div>
                            <span className="text-amber-400 font-bold text-lg block font-[Cinzel]">0% Intermediarios</span>
                            <span className="text-slate-400 text-[11px] uppercase tracking-wider">Trato Directo</span>
                        </div>
                    </div>
                </div>
            </div>
        </SobreMiClient>
        </>
    );
}

