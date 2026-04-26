import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Galería de Magia | Ángel Ruiz · Mago e Ilusionista en Madrid',
    description: 'Explora los mejores momentos de los eventos de magia de Ángel Ruiz. Fotos reales de espectáculos corporativos, eventos privados y magia close-up en Madrid.',
    alternates: {
        canonical: 'https://angelruiz.world/galeria',
    },
};

const images = [
    {
        src: '/images/evento-angel-ruiz-magia.jpg',
        alt: 'Mago para empresas Angel Ruiz Madrid',
        aspect: 'aspect-[3/4]'
    },
    {
        src: '/images/angel-ruiz-evento.jpg',
        alt: 'Evento de magia en Madrid Angel Ruiz',
        aspect: 'aspect-square'
    },
    {
        src: '/images/cartomagia-angel-ruiz.jpg',
        alt: 'Cartomagia de cerca Angel Ruiz',
        aspect: 'aspect-[4/5]'
    },
    {
        src: '/images/evento-empresa-mago-angel-ruiz.jpg',
        alt: 'Magia corporativa para empresas Madrid',
        aspect: 'aspect-video'
    },
    {
        src: '/images/mago-para-eventos-empresa-madrid.jpg',
        alt: 'Mago para eventos de empresa Madrid',
        aspect: 'aspect-square'
    },
    {
        src: '/images/magia-corporativa-angel-ruiz.jpg',
        alt: 'Magia corporativa premium Angel Ruiz',
        aspect: 'aspect-[4/3]'
    },
    {
        src: '/images/ilusionista-eventos-madrid-fotos.jpg',
        alt: 'Ilusionista profesional en Madrid fotos',
        aspect: 'aspect-[3/4]'
    },
    {
        src: '/images/angel-ruiz-mago-madrid.jpg',
        alt: 'Angel Ruiz mago profesional Madrid',
        aspect: 'aspect-square'
    },
    {
        src: '/images/mago-madrid-evento-privado.jpg',
        alt: 'Mago para eventos privados en Madrid',
        aspect: 'aspect-[4/5]'
    },
    {
        src: '/images/ilusionista-madrid-closeup.jpg',
        alt: 'Ilusionista Madrid close-up magia',
        aspect: 'aspect-[3/4]'
    },
    {
        src: '/images/mejor-mago-eventos-corporativos.jpg',
        alt: 'El mejor mago para eventos corporativos',
        aspect: 'aspect-[4/5]'
    },
    {
        src: '/images/espectaculo-magia-madrid.jpg',
        alt: 'Espectáculo de magia en Madrid',
        aspect: 'aspect-video'
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
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <p className="text-amber-500 text-[10px] uppercase font-bold tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Evento Real</p>
                                    <h3 className="text-white font-[Cinzel] text-sm uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.alt}</h3>
                                </div>
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
