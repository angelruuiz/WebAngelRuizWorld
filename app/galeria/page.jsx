import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import NavFooterClient from '@/components/NavFooterClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import GalleryGrid from '@/components/GalleryGrid';

const MagicCursor = dynamic(() => import('@/components/VisualEffects').then(mod => mod.MagicCursor), { ssr: false });
const ParticleBackground = dynamic(() => import('@/components/VisualEffects').then(mod => mod.ParticleBackground), { ssr: false });

export const metadata = {
    title: { absolute: 'Galería | Magia en Eventos y Bodas · Ángel Ruiz' },
    description: 'Fotos reales de actuaciones de Ángel Ruiz como mago en Madrid. Eventos corporativos, bodas exclusivas y magia close-up. +10 años de experiencia.',
    keywords: ['fotos mago madrid', 'galeria mago madrid', 'imagenes magia madrid', 'mago eventos madrid fotos'],
    alternates: {
        canonical: 'https://angelruiz.world/galeria',
    },
    openGraph: {
        url: 'https://angelruiz.world/galeria',
        title: 'Galería de Eventos Reales | Fotos de Magia en Madrid · Ángel Ruiz',
        description: 'Fotos reales de actuaciones de Ángel Ruiz como mago en Madrid. Eventos corporativos, bodas exclusivas y magia close-up.',
        images: [{ url: '/images/evento-angel-ruiz-magia.webp', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Galería de Eventos Reales | Fotos de Magia en Madrid',
        description: 'Fotos reales de actuaciones de Ángel Ruiz como mago en Madrid.',
        images: ['/images/evento-angel-ruiz-magia.webp'],
    },
};

const images = [
    {
        src: '/images/evento-angel-ruiz-magia.webp',
        alt: 'El ilusionista Ángel Ruiz realizando un espectáculo de magia corporativa para empresas en Madrid',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/mago-bodas-cocktail-exterior-madrid.webp',
        alt: 'Ángel Ruiz compartiendo risas y asombro con invitadas durante una sesión de magia de cerca en exteriores',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/angel-ruiz-mago-corporativo.webp',
        alt: 'El mago Ángel Ruiz interactuando de cerca con asistentes en un evento corporativo',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/espectaculo-magia-madrid.webp',
        alt: 'Impresionante momento de gran formato en un espectáculo de magia en vivo en Madrid',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/show-magia-directo-escenario-madrid.webp',
        alt: 'Grabación en directo de una sesión de magia e ilusionismo en el escenario',
        aspect: 'aspect-[2/3]'
    },
    {
        src: '/images/magia-corporativa-angel-ruiz.webp',
        alt: 'Magia de cerca premium por Ángel Ruiz cautivando a invitados en un evento exclusivo',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/angel-ruiz-mago-madrid.webp',
        alt: 'Retrato profesional del mago Ángel Ruiz durante una actuación en Madrid',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/ilusionista-cocktail-jardin-madrid.webp',
        alt: 'Magia de cerca en cóctel al aire libre con Ángel Ruiz entregando una carta a una asistente',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/mago-profesional-madrid.webp',
        alt: 'Actuación en directo de Ángel Ruiz como mago profesional en la capital',
        aspect: 'aspect-[2/3]'
    },
    {
        src: '/images/reacciones-magia-empresas.webp',
        alt: 'Caras de asombro y aplausos durante un espectáculo de magia para empresas',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/cartomagia-de-cerca-angel-ruiz.webp',
        alt: 'Primer plano de cartomagia y manipulación experta de baraja por Ángel Ruiz',
        aspect: 'aspect-[2/3]'
    },
    {
        src: '/images/mago-para-empresas-en-madrid.webp',
        alt: 'Ángel Ruiz amenizando una convención con magia para empresas en Madrid',
        aspect: 'aspect-video',
        position: 'object-[center_25%]'
    },
    {
        src: '/images/ilusionista-madrid-closeup.webp',
        alt: 'Invitada sonriendo ante la magia close-up del ilusionista madrileño Ángel Ruiz',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/mago-para-eventos-empresa-madrid.webp',
        alt: 'Presentación impactante del mago Ángel Ruiz en un evento de empresa en Madrid',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/magia-al-aire-libre-eventos-madrid.webp',
        alt: 'Espectáculo de magia en vivo al aire libre para invitados en un evento exclusivo en Madrid',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/cartomagia-angel-ruiz.webp',
        alt: 'Primer plano de las manos de Ángel Ruiz realizando cartomagia de autor de cerca',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/mago-bodas-madrid-eventos.webp',
        alt: 'Magia romántica y elegante durante el cóctel de una boda exclusiva en Madrid',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/mago-madrid-evento-privado.webp',
        alt: 'Ángel Ruiz sorprendiendo a un grupo reducido en un evento privado en Madrid',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/sesion-cartomagia-teatro-angel-ruiz.webp',
        alt: 'Ángel Ruiz en la mesa de magia de cerca teatral en directo con espectadores',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/magia-comuniones-madrid.webp',
        alt: 'El mago Ángel Ruiz realizando trucos de magia infantil y familiar en una comunión en Madrid',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/magia-cocktail-empresa-madrid.webp',
        alt: 'El ilusionista Ángel Ruiz realizando magia de cóctel entre los invitados de una empresa en Madrid',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/angel-ruiz-evento.webp',
        alt: 'Mesa rodeada de espectadores durante una demostración de magia de salón por Ángel Ruiz',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/ilusionista-profesional-madrid.webp',
        alt: 'El ilusionista profesional Ángel Ruiz posando con su baraja de cartas en Madrid',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/experiencia-magica-interactiva-publico.webp',
        alt: 'Participación activa del público en un experimento de ilusionismo y mentalismo en Madrid',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/mejor-mago-eventos-corporativos.webp',
        alt: 'Momentos de participación del público en un show de magia para eventos corporativos',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/mago-para-bodas-en-madrid.webp',
        alt: 'Detalle de un truco de magia especial para los novios durante una boda en Madrid',
        aspect: 'aspect-video'
    },
    {
        src: '/images/magia-eventos-cocktail.webp',
        alt: 'Invitados riendo durante una sesión de magia interactiva en un cóctel',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/ilusionista-eventos-madrid-fotos.webp',
        alt: 'Ángel Ruiz demostrando su habilidad como ilusionista profesional en un evento madrileño',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/mago-profesional-eventos-madrid.webp',
        alt: 'Invitados asombrados viendo de cerca la magia profesional de Ángel Ruiz en Madrid',
        aspect: 'aspect-[4/5]'
    },
    {
        src: '/images/evento-empresa-mago-angel-ruiz.webp',
        alt: 'Efecto de ilusionismo visual en una gala corporativa para empresas en Madrid',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/mago-empresas-madrid-eventos.webp',
        alt: 'Actuación dinámica de magia de salón para una cena de empresa en Madrid',
        aspect: 'aspect-[2/3]'
    },
    {
        src: '/images/ilusionista-eventos-empresa-madrid.webp',
        alt: 'Momento mágico que conecta a los empleados durante un evento de empresa en Madrid',
        aspect: 'aspect-[3/2]'
    },
    {
        src: '/images/angel-ruiz-mago-profesional-madrid.webp',
        alt: 'Perfil del mago madrileño Ángel Ruiz interactuando con su audiencia',
        aspect: 'aspect-[2/3]'
    },
    {
        src: '/images/angel-ruiz-mago-eventos-madrid.webp',
        alt: 'Espectáculo de magia elegante y exclusiva por Ángel Ruiz en Madrid',
        aspect: 'aspect-[3/2]'
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

            <main className="pt-24 pb-safe-bottom md:pb-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
                <Breadcrumbs />
                
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-[#d4a853] uppercase tracking-widest text-[10px] font-bold mb-2">Portfolio Visual</p>
                    <h1 className="text-3xl md:text-6xl font-[Cinzel] text-white mb-6 uppercase tracking-wider">
                        Galería de <span className="text-[#d4a853]">Asombro</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4a853] to-transparent mx-auto rounded-full mb-8"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-accent">
                        Una selección de momentos capturados en mis últimos eventos. 
                        Donde la elegancia de la cartomagia se encuentra con la emoción del público.
                    </p>
                </div>

                {/* Pinterest-style Mosaic Layout - Always 2 columns on mobile now */}
                <GalleryGrid images={images} />

                <section className="mt-20 md:mt-24 text-center">
                    <h2 className="text-xl md:text-2xl font-[Cinzel] text-white mb-8 uppercase tracking-widest">¿Quieres que tu evento sea el próximo?</h2>
                    <Link 
                        href="/#contacto" 
                        className="btn-glass inline-block"
                    >
                        Solicitar Disponibilidad
                    </Link>
                </section>
            </main>
        </NavFooterClient>
        </>
    );
}
