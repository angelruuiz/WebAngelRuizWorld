import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';

export const metadata = {
    title: 'Mago para Eventos Privados y Fiestas en Madrid | Angel Ruiz',
    description: 'Sorprende a tus invitados con magia de cerca y mentalismo en tus fiestas privadas, cumpleaños o aniversarios en Madrid. Espectáculo adaptado a tu domicilio.',
    alternates: {
        canonical: '/particulares/eventos',
    },
    openGraph: {
        title: 'Mago para Eventos Privados en Madrid | Angel Ruiz',
        description: 'Magia de cerca y mentalismo para tus celebraciones privadas. Un espectáculo inolvidable en la comodidad de tu casa.',
        images: [{ url: '/images/foto-bio-2.png' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago para Eventos Privados en Madrid | Angel Ruiz',
        description: 'Lleva el asombro a tu propia fiesta con Angel Ruiz.',
        images: ['/images/foto-bio-2.png'],
    },
};

export default function EventosDetailPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Magia para Eventos Privados en Madrid",
        "provider": {
            "@type": "Person",
            "name": "Angel Ruiz"
        },
        "description": "Show de magia para fiestas, cumpleaños y reuniones privadas en la Comunidad de Madrid.",
        "areaServed": "Madrid"
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} 
            />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-24 pb-16 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    <div>
                        <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                            Celebraciones Únicas
                        </p>
                        <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-4 border-b border-amber-500/50 pb-2 font-bold leading-tight">
                            Mago para Eventos
                        </h1>

                        <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                            <p>
                                <span className="text-amber-400 font-bold">Añade algo diferente en tu próxima celebración familiar o social.</span>{' '}
                                Aniversarios, bautizos o cenas entre amigos... Como <strong className="text-amber-400">mago para eventos privados en Madrid</strong>, convierto cualquier salón en un teatro itinerante donde lo imposible ocurre a escasos centímetros. Mis servicios de <strong>eventos Madrid</strong> están diseñados para quienes buscan distinción y un asombro que rompa con lo convencional.
                            </p>

                            <p>
                                Si buscas un <strong>mago profesional en Torrelodones</strong>, Las Rozas o Pozuelo, ofrezco un show diseñado específicamente para entornos íntimos. La magia de cerca (close-up) es participativa, directa y extremadamente potente, el complemento ideal para 50 cumpleaños o celebraciones privadas. Puedes elegir entre magia de cóctel itinerante o mi sesión exclusiva <strong>"La Reina de Corazones"</strong> para grupos reducidos a domicilio.
                            </p>

                            <p>
                                Mi enfoque como <strong>ilusionista en Torrelodones o Majadahonda</strong> combina técnica depurada con un entusiasmo contagioso. No se trata solo de trucos, sino de crear una sensación de éxito y asombro que tus invitados comentarán durante semanas. Calidad, discreción y elegancia garantizadas en cada intervención mágica.
                            </p>

                            <p className="italic text-amber-500/90 font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4 text-sm md:text-base">
                                Magia moderna, cercana y muy participativa. Disponible con total flexibilidad en la zona noroeste y toda la Comunidad de Madrid. ¡Haz que tu próxima fiesta sea legendaria!
                            </p>
                        </div>

                        <div className="mt-12 flex justify-start">
                            <ContactButtonClient label="Consúltame sin compromiso" />
                        </div>
                    </div>

                    <div className="relative md:sticky md:top-32 h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                        <Image
                            src="/images/fiesta-eventos-madrid.webp"
                            alt="Mago para eventos privados en Madrid Ángel Ruiz ilusionista especializado en cumpleaños y fiestas"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                    </div>
                </div>
            </main>
        </NavFooterClient>
        </>
    );
}
