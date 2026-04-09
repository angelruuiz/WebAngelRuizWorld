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
        images: [{ url: '/images/foto-bio.png' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago para Eventos Privados en Madrid | Angel Ruiz',
        description: 'Lleva el asombro a tu propia fiesta con Angel Ruiz.',
        images: ['/images/foto-bio.png'],
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

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "¿La magia es adecuada para todas las edades?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, Angel adapta su repertorio según el público. Para eventos familiares, el show combina efectos visuales impactantes que fascinan tanto a niños como a adultos." } },
            { "@type": "Question", "name": "¿Qué espacio se necesita para la actuación?", "acceptedAnswer": { "@type": "Answer", "text": "La magia de cerca no requiere escenario. Se puede realizar de pie durante un cóctel o pasando por las mesas, adaptándose totalmente a la comodidad de su salón o jardín." } },
            { "@type": "Question", "name": "¿Cuánto dura el espectáculo?", "acceptedAnswer": { "@type": "Answer", "text": "Normalmente la intervención dura entre 60 y 90 minutos, dependiendo del número de invitados y el tipo de evento, para asegurar que todos vivan la experiencia de cerca." } }
        ]
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} 
            />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
            />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-24 pb-16 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">

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
                                Si prefieres contar conmigo durante el <strong>banquete</strong>, amenizaré las esperas entre plato y plato con magia en las mesas, adaptándome al ritmo de la cocina. Como <strong className="text-amber-400">ilusionista para eventos en Madrid</strong>, complemento la gastronomía con un entretenimiento de primer nivel que respeta la elegancia del evento en las fincas más exclusivas, desde el centro de la capital hasta <strong>El Escorial o Majadahonda</strong>.
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

                <section className="border-t border-white/5 pt-16 mt-16">
                    <h2 className="text-2xl font-[Cinzel] text-white mb-12 text-center uppercase tracking-widest">Preguntas Frecuentes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {faqSchema.mainEntity.map((faq, index) => (
                            <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-amber-400 font-bold mb-3 text-sm">{faq.name}</h3>
                                <p className="text-slate-400 text-xs leading-relaxed text-justify">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </NavFooterClient>
        </>
    );
}
