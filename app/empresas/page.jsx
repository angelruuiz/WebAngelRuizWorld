import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';

export const metadata = {
    title: 'Magia para Empresas en Madrid | Eventos Corporativos y Team Building',
    description: 'Eleva el nivel de tu evento de empresa con magia corporativa de alto impacto. Angel Ruiz, ilusionista para congresos, cenas y presentaciones en Madrid.',
    alternates: {
        canonical: '/empresas',
    },
    openGraph: {
        title: 'Magia para Empresas en Madrid | Angel Ruiz',
        description: 'Eleva el nivel de tu evento corporativo con magia de alto impacto. Especialista en cenas de empresa, congresos y team building.',
        images: [{ url: '/images/mago-empresas-madrid-angel-ruiz.svg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Magia para Empresas en Madrid | Angel Ruiz',
        description: 'Eleva tu evento con el mejor ilusionista corporativo de Madrid.',
        images: ['/images/mago-empresas-madrid-angel-ruiz.svg'],
    },
};

export default function EmpresasPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Magia para Empresas en Madrid",
        "provider": {
            "@type": "Person",
            "name": "Angel Ruiz"
        },
        "description": "Servicios de ilusionismo corporativo para cenas de empresa, ferias y lanzamientos de marca en Madrid.",
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

                <main>
                <section className="pt-24 pb-16 px-6 max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        <div className="relative md:sticky md:top-32 h-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl order-2 md:order-1">
                            <Image
                                src="/images/curriculum.png"
                                alt="Angel Ruiz - Especialista en Magia para Empresas en Madrid y Eventos Corporativos"
                                fill
                                className="object-cover transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                            <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight">
                                Mago para Empresas
                            </h1>

                             <div className="space-y-4 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                <p>
                                    <span className="text-amber-400 font-bold">
                                        Magia corporativa diseñada para fortalecer la imagen de tu marca y la cohesión de tu equipo en Madrid.
                                    </span>{' '}
                                    Angel Ruiz se especializa en transformar convenciones ordinarias en experiencias extraordinarias. Sorprende a tus empleados, clientes y socios con una actividad de ilusionismo innovadora que fomenta el asombro compartido y hace que se involucren al 100% en la cultura de tu compañía.
                                </p>

                                <p>
                                    En un entorno empresarial tan competitivo como el actual, destacar es fundamental. Como experto en <strong>eventos Madrid</strong> corporativos, ofrezco soluciones personalizadas que van desde la magia de cóctel itinerante hasta presentaciones de producto donde el ilusionismo sirve como vehículo para el mensaje de marketing. Si buscas un impactante <strong>mago para empresas en Torrelodones</strong> o Las Rozas, mi propuesta combina elegancia, humor inteligente y un profesionalismo impecable.
                                </p>

                                <p>
                                    Como{' '}
                                    <strong className="text-amber-400">
                                        mago para eventos de empresa
                                    </strong>
                                    , me integro de forma orgánica en la dinámica de tu jornada —ya sea en cenas de gala, ferias comerciales o sesiones de team building— elevando la energía general del público. He colaborado con entidades de prestigio y grandes corporaciones en la capital, garantizando un servicio de <strong>mago de cerca Madrid</strong> que respeta escrupulosamente el protocolo y los objetivos de comunicación de cada cliente. 
                                </p>

                                <p>
                                    La magia de cerca (o close-up) es especialmente efectiva en recepciones y cócteles de networking. Permite romper las barreras sociales de forma instantánea, facilitando que los asistentes interactúen entre sí mientras viven lo imposible a escasos centímetros de sus ojos. Es una herramienta potente de Relaciones Públicas que deja una huella imborrable en la memoria de los invitados, asociando tu marca con sensaciones de éxito, innovación y creatividad.
                                </p>

                                <p>
                                    Además, mi disponibilidad se extiende a toda la zona noroeste de la comunidad. Si tu oficina se encuentra en <strong>Majadahonda, Pozuelo o el parque empresarial de Las Rozas</strong>, puedo ofrecerte una propuesta de entretenimiento flexible y sin complicaciones logísticas. Entiendo las necesidades de las empresas modernas y por ello ofrezco facturación inmediata, puntualidad británica y un show adaptable a diferentes espacios, desde salas de juntas hasta grandes auditorios.
                                </p>

                                <p>
                                    No se trata solo de trucos, sino de crear una atmósfera donde lo imposible parezca real. Como <strong>ilusionista corporativo en Madrid</strong>, diseño cada intervención para que sea coherente con el tono de vuestra reunión, ya sea buscando un enfoque más lúdico para una fiesta navideña o un tono más sofisticado para una exclusiva cena con inversores en <strong>Boadilla del Monte o Aravaca</strong>.
                                </p>

                                <p className="text-amber-500/90 italic font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4 text-sm md:text-base">
                                    Diferencia tu próximo evento corporativo en Torrelodones o Madrid capital con una propuesta de magia exclusiva que genere "engagement" real. Con más de una década de experiencia en el sector business, te garantizo un éxito total y un retorno en forma de sonrisas y admiración de tu equipo. ¡Contáctame hoy mismo para recibir un presupuesto a medida y elevar el nivel de vuestra próxima convención!
                                </p>

                                <p className="text-white/60 text-xs mt-8">
                                    Servicios disponibles en: Madrid Centro, Torrelodones, Pozuelo de Alarcón, Majadahonda, Las Rozas de Madrid, Boadilla del Monte, Alcobendas, San Sebastián de los Reyes y toda la zona del Corredor del Henares. Especialista en Magia Corporativa y Eventos de Marca.
                                </p>
                            </div>

                            <div className="mt-12">
                                <ContactButtonClient label="Solicitar Presupuesto Corporativo" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </NavFooterClient>
        </>
    );
}
