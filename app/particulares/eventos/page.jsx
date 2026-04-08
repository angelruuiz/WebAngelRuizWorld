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

                        <div className="space-y-4 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                            <p>
                                <span className="text-amber-400 font-bold">
                                    Añade algo diferente en tu próxima celebración familiar o social.
                                </span>{' '}
                                Aniversarios, bautizos, cenas entre amigos, cumpleaños especiales... Como{' '}
                                <strong className="text-amber-400">
                                    mago para eventos privados en Madrid
                                </strong>
                                e ilusionista versátil, mi objetivo es convertir cualquier espacio en un teatro itinerante de prestigio donde lo imposible ocurre a escasos centímetros de tus ojos. Mis servicios de <strong>eventos Madrid</strong> están diseñados para quienes buscan un toque de distinción y sorpresa que rompa con lo convencional.
                            </p>

                            <p>
                                Si buscas un <strong>mago profesional en Torrelodones</strong>, Las Rozas o Pozuelo, ofrezco un show diseñado específicamente para entornos íntimos. A diferencia de los grandes escenarios, la magia de cerca (close-up) se vive de tú a tú. Es participativa, directa y extremadamente potente, ya que el milagro sucede en las manos de tus invitados. Es el complemento ideal para fiestas de 40 o 50 cumpleaños, aniversarios de boda o celebraciones privadas en urbanizaciones de la zona noroeste.
                            </p>

                            <p>
                                Si tu celebración es multitudinaria podemos realizar{' '}
                                <span className="text-white font-bold italic underline decoration-amber-500/50">
                                    magia de cóctel entre los invitados
                                </span>
                                . Esta modalidad es perfecta para eventos dinámicos donde la gente se mueve libremente por el jardín o el salón. El <strong>mago de cerca Madrid</strong> recorre los diferentes grupos, realizando efectos visuales de alto impacto que sirven como catalizador para la diversión y el asombro. Es una forma excelente de asegurar que el ritmo de la fiesta nunca decaiga.
                            </p>

                            <p>
                                Si sois un grupo reducido y preferís una experiencia más focalizada, puedo llevar a tu domicilio mi espectáculo{' '}
                                <span className="text-amber-400 font-bold italic">
                                    "La Reina de Corazones"
                                </span>
                                . Imagina tener el teatro en tu propia casa, sin necesidad de escenario ni equipamiento especial. Es una sesión de ilusionismo de salón donde todos los asistentes se sientan alrededor para disfrutar de una historia llena de misterio, humor inteligente y proezas físicas imposibles.
                            </p>

                            <p>
                                Me especializo en{' '}
                                <strong className="text-amber-400">
                                    magia de cerca para fiestas y eventos privados en Madrid
                                </strong>
                                , ofreciendo un espectáculo familiar-adulto que cautiva por igual a diferentes generaciones. Mis rutinas no solo incluyen cartomagia de alto nivel, sino también mentalismo que desafía la lógica y efectos con objetos prestados. El éxito de contratar un <strong>ilusionista en Torrelodones o Majadahonda</strong> reside en la capacidad de adaptar el tono del show a la personalidad de vuestro grupo de amigos.
                            </p>

                            <p>
                                Mi enfoque combina una técnica depurada con un{' '}
                                <strong className="text-amber-400 italic">
                                    entusiasmo contagioso
                                </strong>
                                . No se trata solo de ver trucos; es participar en una experiencia emocional colectiva. Ya sea en el salón de un restaurante exclusivo de El Escorial, en un cortijo en Galapagar o en un loft en el centro de Madrid, mi magia profesional está diseñada para funcionar en cualquier entorno, garantizando risas y caras de asombro que se comentarán durante semanas.
                            </p>

                            <p>
                                Como <strong>ilusionista especializado en la zona noroeste</strong>, entiendo perfectamente el tipo de exigencia de mis clientes. Buscan calidad, discreción y, sobre todo, un entretenimiento que esté a la altura de su celebración. Por eso, además de los efectos mágicos, cuido aspectos fundamentales como la puntualidad, la imagen impecable y la capacidad de conectar con públicos de cualquier edad y perfil.
                            </p>

                            <p className="italic text-amber-500/90 font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4 text-sm md:text-base">
                                Verás cosas nunca vistas: magia moderna, cercana y muy participativa. 
                                Disponible con total flexibilidad para <strong>eventos en Torrelodones, Las Rozas, Majadahonda, Pozuelo de Alarcón, El Escorial, Boadilla del Monte</strong> y el resto de la Comunidad de Madrid. ¡Haz que tu próxima fiesta sea legendaria con el toque mágico de Angel Ruiz!
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
