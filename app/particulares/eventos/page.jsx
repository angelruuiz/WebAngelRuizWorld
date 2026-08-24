import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: { absolute: 'Mago para Eventos Privados en Madrid | Fiestas · Ángel Ruiz' },
    description: 'Espectáculos de magia close-up para eventos privados en Madrid. Cumpleaños, comuniones, aniversarios y fiestas particulares. Ángel Ruiz, mago profesional en Torrelodones.',
    alternates: {
        canonical: 'https://angelruiz.world/particulares/eventos',
    },
    openGraph: {
        title: 'Mago para Eventos Privados en Madrid | Ángel Ruiz | Mago e Ilusionista',
        description: 'Magia de cerca y de salón para tus celebraciones privadas. Un espectáculo inolvidable en la comodidad de tu casa.',
        images: [{ url: '/images/foto-bio.webp' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago para Eventos Privados en Madrid | Ángel Ruiz | Mago e Ilusionista',
        description: 'Lleva el asombro a tu propia fiesta con Ángel Ruiz.',
        images: ['/images/foto-bio.webp'],
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
        "mainEntity": [
            { "@type": "Question", "name": "¿La magia es adecuada para todas las edades?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, Angel adapta su repertorio según el público. Para eventos familiares, el show combina efectos visuales impactantes que fascinan tanto a niños como a adultos." } },
            { "@type": "Question", "name": "¿Qué espacio se necesita para la actuación?", "acceptedAnswer": { "@type": "Answer", "text": "La magia de cerca no requiere escenario. Se puede realizar de pie durante un cóctel o pasando por las mesas, adaptándose totalmente a la comodidad de tu salón o jardín." } },
            { "@type": "Question", "name": "¿Cuánto dura el espectáculo?", "acceptedAnswer": { "@type": "Answer", "text": "Normalmente la intervención dura entre 60 y 90 minutos, dependiendo del número de invitados y el tipo de evento, para asegurar que todos vivan la experiencia de cerca." } },
            { "@type": "Question", "name": "¿Puedo contratar a Ángel para una fiesta sorpresa?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutamente. Las fiestas sorpresa son el escenario perfecto para el ilusionismo. El factor sorpresa inicial se potencia cuando el regalo de cumpleaños es un asombro imposible." } },
            { "@type": "Question", "name": "¿Realizas eventos fuera de la capital?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, me desplazo a toda la Comunidad de Madrid, incluyendo Torrelodones, Las Rozas, Majadahonda, Pozuelo, y otros municipios." } },
            { "@type": "Question", "name": "¿Qué se necesita por parte del anfitrión?", "acceptedAnswer": { "@type": "Answer", "text": "Prácticamente nada. Ángel lleva todo lo necesario en su maletín. No necesitas focos, sonido ni escenarios si se trata de magia itinerante." } },
            { "@type": "Question", "name": "¿Se pueden personalizar algunos trucos?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, en eventos privados a menudo podemos integrar elementos personales del homenajeado o mensajes específicos para hacer el momento aún más memorable." } },
            { "@type": "Question", "name": "¿Cómo se realiza el pago?", "acceptedAnswer": { "@type": "Answer", "text": "Generalmente se solicita una pequeña señal para reservar la fecha y el resto se abona el día del evento. Todo se realiza con la máxima transparencia y mediante factura profesional." } }
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "ProfessionalService",
                            "@id": "https://angelruiz.world/#organization",
                            "name": "Ángel Ruiz | Mago e Ilusionista",
                            "url": "https://angelruiz.world",
                            "image": "https://angelruiz.world/images/foto-bio.webp",
                            "telephone": "+34648055636",
                            "priceRange": "€€€",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Zona Noroeste",
                                "addressLocality": "Torrelodones",
                                "addressRegion": "Comunidad de Madrid",
                                "postalCode": "28250",
                                "addressCountry": "ES"
                            }
                        },
                        {
                            ...serviceSchema,
                            "@type": "Service",
                            "@id": "https://angelruiz.world/particulares/eventos/#service"
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": faqSchema.mainEntity
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

                <main className="relative z-10 pt-24 pb-16 px-6 max-w-6xl mx-auto">
                    <Breadcrumbs />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20 mt-8">

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
                                    Al ser <strong>mago para eventos en Torrelodones</strong>, cubro toda la zona noroeste con cercanía y profesionalidad total: <strong>Las Rozas, Pozuelo, Boadilla y Villalba</strong>. Sin complicaciones y con la garantía de un experto local para tu día inolvidable.
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
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                                className="object-cover object-top"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                        </div>
                    </div>

                    {/* Storytelling Emocional */}
                    <section className="border-t border-white/5 pt-16 mt-16 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-[Cinzel] text-white mb-8 text-center">El antídoto contra las fiestas previsibles</h2>
                        <div className="space-y-6 text-slate-300 text-lg font-light leading-relaxed text-justify">
                            <p>
                                Organizar un evento privado —ya sea un 40 cumpleaños, una fiesta de graduación o un aniversario de bodas de plata— conlleva una presión enorme. Quieres que la comida esté perfecta, que la música encaje y que la gente se mezcle. Pero a menudo te encuentras siendo más un 'productor de eventos' que un verdadero anfitrión, preocupado constantemente por si todos lo están pasando bien o si hay silencios incómodos.
                            </p>
                            <p>
                                ¿Qué pasa cuando los grupos de amigos no se mezclan? ¿Qué pasa cuando después de cenar la energía decae y la gente empieza a mirar el reloj? Aquí es donde el ilusionismo se convierte en el salvavidas de tu evento. La magia rompe el hielo de forma elegante e inmediata. Al ver un imposible en sus propias manos, las personas no pueden evitar gritar de sorpresa, reír y comentarlo con el que tienen al lado. Magia familiar y para adultos que elimina barreras.
                            </p>
                            <p>
                                Imagina poder relajarte en tu propia fiesta, con una copa en la mano, sabiendo que tus invitados están viviendo algo extraordinario y que el éxito del evento está completamente asegurado. Esa es la verdadera tranquilidad que aporta la magia profesional.
                            </p>
                        </div>
                    </section>

                    {/* Timeline del Evento */}
                    <section className="border-t border-white/5 pt-16 mt-16">
                        <h2 className="text-3xl font-[Cinzel] text-white mb-12 text-center uppercase tracking-widest">Timeline de la Experiencia</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[40px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50" />
                                <span className="text-amber-500 font-[Cinzel] text-xl font-bold mb-4 block">Fase 01</span>
                                <h3 className="text-white text-xl font-bold mb-3 uppercase font-[Cinzel]">Recepción</h3>
                                <p className="text-slate-400 font-light text-sm leading-relaxed text-justify">
                                    Los invitados llegan, algunos no conocen a nadie. Me acerco, realizo pequeños trucos visuales rápidos e impactantes. La primera sonrisa del evento se enciende, el ambiente se relaja y la charla comienza a fluir de forma natural.
                                </p>
                            </div>
                            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[40px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50" />
                                <span className="text-amber-500 font-[Cinzel] text-xl font-bold mb-4 block">Fase 02</span>
                                <h3 className="text-white text-xl font-bold mb-3 uppercase font-[Cinzel]">El Clímax</h3>
                                <p className="text-slate-400 font-light text-sm leading-relaxed text-justify">
                                    El momento de mayor intensidad. Ya sea con un pase de magia itinerante durante el cóctel que va in crescendo, o con un show de salón para todos a la vez donde el homenajeado es la estrella de un efecto magia imposible.
                                </p>
                            </div>
                            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[40px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50" />
                                <span className="text-amber-500 font-[Cinzel] text-xl font-bold mb-4 block">Fase 03</span>
                                <h3 className="text-white text-xl font-bold mb-3 uppercase font-[Cinzel]">El Cierre</h3>
                                <p className="text-slate-400 font-light text-sm leading-relaxed text-justify">
                                    Un efecto dedicado, una sorpresa emotiva para que los anfitriones se lleven el mejor recuerdo. La energía queda en el punto más alto, dejando paso a la música o a la continuación de la fiesta de forma inmejorable.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="border-t border-white/5 pt-16 mt-16">
                        <h2 className="text-3xl font-[Cinzel] text-white mb-12 text-center uppercase tracking-widest">Preguntas Frecuentes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {faqSchema.mainEntity.map((faq, index) => (
                                <div key={index} className="bg-slate-900/40 p-8 rounded-xl border border-white/10 hover:border-amber-500/20 transition-colors">
                                    <h3 className="text-amber-400 font-bold mb-3 text-lg">{faq.name}</h3>
                                    <p className="text-slate-400 font-light text-sm leading-relaxed text-justify">{faq.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    {/* Related Blog Posts Section */}
                    <section className="border-t border-white/5 pt-16 mt-16 pb-8">
                        <h2 className="text-3xl font-[Cinzel] text-white mb-10 text-center uppercase tracking-widest">Inspiración para tu Fiesta</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <a href="/blog/ideas-entretenimiento-fiestas-privadas-madrid" className="group bg-slate-900/40 p-8 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-all">
                                <p className="text-amber-500 text-[10px] uppercase font-bold tracking-tighter mb-2">Entretenimiento</p>
                                <h3 className="text-white font-[Cinzel] text-lg group-hover:text-amber-400 transition-colors">Ideas de entretenimiento para fiestas privadas en Madrid</h3>
                            </a>
                            <a href="/blog/mago-para-cumpleanos-adultos-50-anos-madrid" className="group bg-slate-900/40 p-8 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-all">
                                <p className="text-amber-500 text-[10px] uppercase font-bold tracking-tighter mb-2">Cumpleaños y Celebraciones</p>
                                <h3 className="text-white font-[Cinzel] text-lg group-hover:text-amber-400 transition-colors">Mago para cumpleaños de adultos: 40, 50 y 60 años</h3>
                            </a>
                        </div>
                    </section>
                </main>
        </NavFooterClient>
        </>
    );
}

