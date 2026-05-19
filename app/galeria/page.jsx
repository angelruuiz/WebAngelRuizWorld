import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Galería de Eventos Reales | Fotos de Magia en Madrid · Ángel Ruiz',
    description: 'Fotos reales de actuaciones de Ángel Ruiz como mago en Madrid. Eventos corporativos, bodas exclusivas y magia close-up. +10 años de experiencia.',
    alternates: {
        canonical: 'https://angelruiz.world/galeria',
    },
};

const images = [
    {
        src: '/images/evento-angel-ruiz-magia.webp',
        alt: 'Mago para empresas Angel Ruiz Madrid',
        aspect: 'aspect-[3/4]'
    },
    {
        src: '/images/angel-ruiz-evento.webp',
        alt: 'Evento de magia en Madrid Angel Ruiz',
        aspect: 'aspect-square'
    },
    {
        src: '/images/cartomagia-angel-ruiz.webp',
        alt: 'Cartomagia de cerca Angel Ruiz',
        aspect: 'aspect-[4/5]'
    },
    {
        src: '/images/evento-empresa-mago-angel-ruiz.webp',
        alt: 'Magia corporativa para empresas Madrid',
        aspect: 'aspect-video'
    },
    {
        src: '/images/mago-para-eventos-empresa-madrid.webp',
        alt: 'Mago para eventos de empresa Madrid',
        aspect: 'aspect-square'
    },
    {
        src: '/images/magia-corporativa-angel-ruiz.webp',
        alt: 'Magia corporativa premium Angel Ruiz',
        aspect: 'aspect-[4/3]'
    },
    {
        src: '/images/ilusionista-eventos-madrid-fotos.webp',
        alt: 'Ilusionista profesional en Madrid fotos',
        aspect: 'aspect-[3/4]'
    },
    {
        src: '/images/angel-ruiz-mago-madrid.webp',
        alt: 'Angel Ruiz mago profesional Madrid',
        aspect: 'aspect-square'
    },
    {
        src: '/images/mago-madrid-evento-privado.webp',
        alt: 'Mago para eventos privados en Madrid',
        aspect: 'aspect-[4/5]'
    },
    {
        src: '/images/ilusionista-madrid-closeup.webp',
        alt: 'Ilusionista Madrid close-up magia',
        aspect: 'aspect-[3/4]'
    },
    {
        src: '/images/mejor-mago-eventos-corporativos.webp',
        alt: 'El mejor mago para eventos corporativos',
        aspect: 'aspect-[4/5]'
    },
    {
        src: '/images/espectaculo-magia-madrid.webp',
        alt: 'Espectáculo de magia en Madrid',
        aspect: 'aspect-video'
    },
    {
        src: '/images/mago-para-bodas-en-madrid.webp',
        alt: 'Mago para bodas en Madrid Ángel Ruiz',
        aspect: 'aspect-video'
    },
    {
        src: '/images/mago-para-empresas-en-madrid.webp',
        alt: 'Mago para empresas en Madrid',
        aspect: 'aspect-video',
        position: 'object-[center_25%]'
    },
    {
        src: '/images/mago-profesional-madrid.webp',
        alt: 'Mago profesional Madrid',
        aspect: 'aspect-[2/3]'
    },
    {
        src: '/images/ilusionista-profesional-madrid.webp',
        alt: 'Ilusionista profesional Madrid',
        aspect: 'aspect-[4/3]'
    },
    {
        src: '/images/angel-ruiz-mago-profesional-madrid.webp',
        alt: 'Ángel Ruiz mago profesional Madrid',
        aspect: 'aspect-[3/4]'
    },
    {
        src: '/images/mago-bodas-madrid-eventos.webp',
        alt: 'Mago bodas Madrid eventos',
        aspect: 'aspect-[4/3]'
    },
    {
        src: '/images/mago-empresas-madrid-eventos.webp',
        alt: 'Mago empresas Madrid eventos',
        aspect: 'aspect-[2/3]'
    },
    {
        src: '/images/mago-profesional-eventos-madrid.webp',
        alt: 'Mago profesional para eventos en Madrid',
        aspect: 'aspect-[4/5]'
    },
    {
        src: '/images/ilusionista-eventos-empresa-madrid.webp',
        alt: 'Ilusionista eventos empresa Madrid',
        aspect: 'aspect-[4/3]'
    },
    {
        src: '/images/angel-ruiz-mago-eventos-madrid.webp',
        alt: 'Ángel Ruiz mago para eventos exclusivos en Madrid',
        aspect: 'aspect-[4/3]'
    }
];

export default function GaleriaPage() {
    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
                        { "@type": "ListItem", "position": 2, "name": "Galería", "item": "https://angelruiz.world/galeria" }
                    ]
                }) }} 
            />
            <NavFooterClient>
            <MagicCursor />
            <ParticleBackground />

            <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto relative z-10">
                <Breadcrumbs />
                
                <div className="text-center mb-16">
                    <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2">Portfolio Visual</p>
                    <h1 className="text-4xl md:text-6xl font-[Cinzel] text-white mb-6 uppercase tracking-wider">
                        Galería de <span className="text-amber-500">Asombro</span>
                    </h1>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Una selección de momentos capturados en mis últimos eventos. 
                        Donde la elegancia de la cartomagia se encuentra con la emoción del público.
                    </p>
                </div>

                {/* Pinterest-style Mosaic Layout */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, idx) => (
                        <div 
                            key={idx} 
                            className="relative overflow-hidden rounded-2xl border border-white/5 group bg-slate-900 break-inside-avoid shadow-2xl transition-all duration-500 hover:border-amber-500/30"
                        >
                            <div className={`relative w-full ${img.aspect}`}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className={`object-cover transition-transform duration-700 group-hover:scale-110 ${img.position || ''}`}
                                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                    priority={idx < 6}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <section className="mt-24 text-center">
                    <h2 className="text-2xl font-[Cinzel] text-white mb-8 uppercase tracking-widest">¿Quieres que tu evento sea el próximo?</h2>
                    <a 
                        href="/#contacto" 
                        className="inline-block bg-amber-500 text-slate-950 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-amber-500/20"
                    >
                        Solicitar Disponibilidad
                    </a>
                </section>
            </main>
        </NavFooterClient>
        </>
    );
}
