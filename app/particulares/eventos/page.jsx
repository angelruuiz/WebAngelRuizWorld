import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Mago para Eventos Privados Madrid | Cumpleaños, Comuniones y Celebraciones',
    description: 'Espectáculos de magia close-up para eventos privados en Madrid. Cumpleaños, comuniones, aniversarios y fiestas particulares. Ángel Ruiz, mago profesional en Torrelodones.',
    alternates: {
        canonical: '/particulares/eventos',
    },
    openGraph: {
        title: 'Mago para Eventos Privados en Madrid | Ángel Ruiz | Mago e Ilusionista',
        description: 'Magia de cerca y mentalismo para tus celebraciones privadas. Un espectáculo inolvidable en la comodidad de tu casa.',
        images: [{ url: '/images/foto-bio.png' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago para Eventos Privados en Madrid | Ángel Ruiz | Mago e Ilusionista',
        description: 'Lleva el asombro a tu propia fiesta con Ángel Ruiz.',
        images: ['/images/foto-bio.png'],
    },
};

export default function EventosDetailPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Magia para eventos privados",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Comunidad de Madrid",
        "description": "Espectáculos de magia close-up para eventos privados en Madrid.",
        "serviceType": "Private Event Entertainment",
        "url": "https://angelruiz.world/particulares/eventos"
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

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Particulares", "item": "https://angelruiz.world/particulares" },
            { "@type": "ListItem", "position": 3, "name": "Eventos", "item": "https://angelruiz.world/particulares/eventos" }
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
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
            />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-24 pb-16 px-6 max-w-6xl mx-auto">
                    <Breadcrumbs />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">

                    <div>
                        <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                            Celebraciones Únicas
                        </p>
                        <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-4 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                            Mago para Eventos
                        </h1>

                        <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                            <p>
                                <span className="text-amber-400 font-bold underline decoration-amber-500/30">Lleva tu celebración al siguiente nivel con un toque de asombro.</span>{' '}
                                Ángel Ruiz, ilusionista profesional experto en <strong>eventos Madrid</strong> y <strong className="text-amber-400">magia para fiestas privadas</strong>, se encargará de que tu reunión social sea recordada durante años. El asombro ocurre a escasos centímetros, creando una atmósfera de misterio y diversión inmejorable.
                            </p>

                            {/* Mini Features Grid para cohesión visual */}
                            <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                <div className="flex items-start gap-3">
                                    <div className="text-amber-500 font-bold">01</div>
                                    <div>
                                        <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Cóctel Mágico</h4>
                                        <p className="text-slate-400 text-[10px] leading-tight mt-1">Dinamización itinerante entre grupos.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-amber-500 font-bold">02</div>
                                    <div>
                                        <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Show de Salón</h4>
                                        <p className="text-slate-400 text-[10px] leading-tight mt-1">Espectáculo central muy participativo.</p>
                                    </div>
                                </div>
                            </div>

                            <p>
                                Como <strong className="text-amber-400">mago para cumpleaños y aniversarios</strong>, complemento cualquier evento con un entretenimiento que respeta la exclusividad de tu espacio, actuando en domicilios y fincas desde el centro de la capital hasta <strong>El Escorial o Majadahonda</strong>.
                            </p>

                            <p>
                                Al ser <strong>mago para eventos en Torrelodones</strong>, cubro toda la zona noroeste con cercanía y profesionalidad total: <strong>Las Rozas, Pozuelo, Boadilla y Villalba</strong>. Sin complicaciones y con la garantía de un experto local.
                            </p>
                        </div>

                        <div className="mt-12 flex justify-start">
                            <ContactButtonClient label="Solicitar Presupuesto Eventos" />
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
