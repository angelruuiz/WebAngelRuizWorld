import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Mago para Bodas en Madrid | Magia de Cerca y Cóctel Inolvidable',
    description: '¿Buscas un mago para tu boda en Madrid? Sorprende a tus invitados con magia de cerca exclusiva durante el cóctel y banquete. ¡Reserva tu fecha y haz tu boda única!',
    alternates: {
        canonical: 'https://angelruiz.world/particulares/bodas',
    },
    openGraph: {
        title: 'Mago para Bodas en Madrid | Ángel Ruiz | Mago e Ilusionista',
        description: 'La magia perfecta para tu cóctel de boda. Conecta a tus invitados y crea recuerdos inolvidables.',
        images: [{ url: '/images/foto-bio.png' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago para Bodas en Madrid | Angel Ruiz',
        description: 'Momentos imposibles para el día más importante de tu vida.',
        images: ['/images/foto-bio.png'],
    },
};

export default function BodasDetailPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Magia de cerca para bodas",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Comunidad de Madrid",
        "description": "Servicio de ilusionismo y magia de cerca para bodas.",
        "serviceType": "Wedding Entertainment",
        "url": "https://angelruiz.world/particulares/bodas"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "¿Cuál es el mejor momento para la magia en una boda?", "acceptedAnswer": { "@type": "Answer", "text": "El cóctel de bienvenida es el momento estrella para la magia de cerca, ya que ayuda a romper el hielo entre los invitados. También es muy efectiva durante el banquete para amenizar las esperas entre platos." } },
            { "@type": "Question", "name": "¿Qué tipo de magia se realiza?", "acceptedAnswer": { "@type": "Answer", "text": "Me especializo en magia de cerca (Close-up) y magia itinerante. Son efectos impactantes realizados con cartas, monedas y objetos de los invitados, a escasos centímetros de sus ojos." } },
            { "@type": "Question", "name": "¿Te desplazas fuera de Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, cubro eventos en toda España, aunque mi actividad principal se centra en la Comunidad de Madrid y la zona noroeste (Torrelodones, Las Rozas, Majadahonda)." } }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Mago Sierra Madrid", "item": "https://angelruiz.world/mago-sierra-madrid" },
            { "@type": "ListItem", "position": 3, "name": "Bodas", "item": "https://angelruiz.world/particulares/bodas" }
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
                            "image": "https://angelruiz.world/images/foto-bio.png",
                            "telephone": "+34648055636",
                            "priceRange": "€€€",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Zona Noroeste",
                                "addressLocality": "Torrelodones",
                                "addressRegion": "Comunidad de Madrid",
                                "postalCode": "28250",
                                "addressCountry": "ES"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1",
                                "ratingCount": "20"
                            }
                        },
                        {
                            ...serviceSchema,
                            "@type": "Service",
                            "@id": "https://angelruiz.world/particulares/bodas/#service"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
                        <div>
                            <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Especialista en Bodas | Sierra de Madrid
                            </p>
                            <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Mago para Bodas en Madrid
                            </h1>

                            <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                <p className="border-l-2 border-amber-500 pl-4 py-1">
                                    <span className="text-amber-400 font-bold underline decoration-amber-500/30 text-lg">Haga que el día más importante de su vida sea también el más sorprendente para sus invitados.</span>
                                </p>
                                <p>
                                    Ángel Ruiz, ilusionista profesional experto en <strong>eventos de lujo en Madrid</strong> y referente de la <strong>magia en la Sierra</strong>, se especializa en crear momentos de asombro que actúan como el hilo conductor perfecto para su enlace. Una boda es una celebración de emociones, y no hay nada que conecte mejor a familias y amigos que la vivencia compartida de lo imposible.
                                </p>

                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">01</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Cóctel & Bienvenida</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Magia itinerante para romper el hielo entre grupos.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">02</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Magia de Banquete</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Intervenciones elegantes durante el servicio de mesa.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Como <strong className="text-amber-400">ilusionista para bodas en Madrid</strong>, formado bajo la mentoría directa de <strong>Dani DaOrtiz</strong>, mi propuesta se aleja del espectáculo genérico para centrarse en la <u>exclusividad de la Cartomagia de autor</u>. Los milagros ocurren en las propias manos de sus invitados, respetando en todo momento el flujo del evento y aportando ese toque purista y sofisticado que requieren las fincas más exclusivas de la capital.
                                </p>

                                <p>
                                    Al ser <strong>mago para bodas en Torrelodones</strong>, ofrezco una cobertura excepcional en toda la zona noroeste: <strong>Las Rozas, Pozuelo, El Escorial y Majadahonda</strong>. Mi conocimiento de los espacios y wedding planners locales garantiza una coordinación impecable sin complicaciones logísticas para los novios.
                                </p>
                            </div>

                            <div className="mt-12 flex justify-start">
                                <ContactButtonClient label="Consultar Disponibilidad Bodas" />
                            </div>
                        </div>

                        <div className="relative md:sticky md:top-32 h-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
                            <Image
                                src="/images/boda-magia-madrid.jpg"
                                alt="Mago de bodas en Madrid Angel Ruiz realizando magia de cerca en una finca de la sierra de Madrid"
                                fill
                                className="object-cover object-top group-hover:scale-110 transition-transform duration-[3s]"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-[10px] text-amber-500 font-bold uppercase tracking-widest mb-1">Impacto Emocional</p>
                                <p className="text-white font-[Cinzel] text-sm italic">"Un recuerdo que sus invitados guardarán para siempre"</p>
                            </div>
                        </div>
                    </div>

                    {/* BLOQUE ADICIONAL DE CONTENIDO SEO PARA BODAS */}
                    <div className="max-w-4xl mx-auto space-y-16 py-16 border-t border-white/5">
                        <section className="space-y-8">
                            <h2 className="text-3xl font-[Cinzel] text-white text-center uppercase tracking-widest border-b border-amber-500/30 pb-4">El Valor Añadido de la Magia en su Enlace</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <h3 className="text-amber-400 font-bold text-xl font-[Cinzel]">Networking Emocional: Rompiendo el Hielo</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed text-justify">
                                        En el <strong className="text-white">cóctel de bienvenida</strong>, es común que los grupos de invitados (familia del novio, amigos de la novia, compañeros de trabajo) permanezcan aislados. Como <strong>mago itinerante en Madrid</strong>, me infiltro entre los grupos de forma orgánica. Al generar un milagro compartido, se crea un tema de conversación inmediato que une a personas que no se conocían, facilitando una atmósfera mucho más vibrante y cohesionada.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-amber-400 font-bold text-xl font-[Cinzel]">Magia de Mesa: Amenización del Banquete</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed text-justify">
                                        El banquete puede tener momentos de espera entre platos que rompen el ritmo de la celebración. Mi intervención de <strong className="text-white">magia de mesa a mesa</strong> está diseñada para ser breve, impactante y extremadamente respetuosa. Actuamos en los intervalos precisos, asegurando que el asombro sea el aderezo perfecto para la propuesta gastronómica de su boda, sin interrumpir el servicio.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-amber-400 font-bold text-xl font-[Cinzel]">Exclusividad y Estilo Personalizado</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed text-justify">
                                        No hay dos bodas iguales. Mi enfoque como <strong>mago para bodas VIP</strong> es la personalización. Podemos crear efectos específicos que involucren la historia de los novios o que utilicen elementos significativos del enlace. El objetivo es que la magia no sea un parche, sino una pieza fundamental del engranaje estético y emocional de su gran día.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-amber-400 font-bold text-xl font-[Cinzel]">Fotografías de Asombro Real</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed text-justify">
                                        La magia regala a sus fotógrafos momentos de <strong className="text-white">expresiones auténticas</strong>. Las caras de sorpresa, las risas espontáneas y los gestos de incredulidad de sus seres queridos capturados en imagen son el testimonio visual de que su boda fue, literalmente, mágica. Es un valor añadido que perdura en su álbum de recuerdos.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-slate-900/50 p-8 md:p-12 rounded-[2rem] border border-amber-500/20 shadow-2xl space-y-8">
                            <h2 className="text-2xl font-[Cinzel] text-white mb-6 uppercase tracking-widest text-center">Un Profesional de Confianza para el "Sí, Quiero"</h2>
                            <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed text-justify">
                                <p>
                                    Entiendo la presión que conlleva organizar una boda y la importancia de contar con proveedores que sean una solución, no un problema adicional. Como <strong className="text-amber-400">ilusionista profesional en Madrid</strong>, garantizo una etiqueta impecable y un trato exquisito con todos sus invitados, desde los más pequeños hasta los mayores.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                                    <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"><span className="text-amber-500">✓</span> <strong>Discreción y Elegancia:</strong> Etiqueta adaptada al código de vestimenta de su boda.</li>
                                    <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"><span className="text-amber-500">✓</span> <strong>Adaptabilidad Total:</strong> Actuamos tanto en interiores como en exteriores (jardines, fincas).</li>
                                    <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"><span className="text-amber-500">✓</span> <strong>Experiencia en Fincas Local:</strong> Conocemos el funcionamiento de las mejores fincas de la Sierra y el Noroeste.</li>
                                    <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"><span className="text-amber-500">✓</span> <strong>Reserva Garantizada:</strong> Contratos claros y comunicación directa hasta el gran día.</li>
                                </ul>
                                <p className="pt-4 border-t border-white/5">
                                    Operamos habitualmente en entornos exclusivos como <strong>Las Rozas de Madrid, Majadahonda, y Pozuelo de Alarcón</strong>, además de desplazamos a cualquier punto de la geografía española para enlaces de destino. Confíe en un mago local con proyección nacional para asegurar el éxito rotundo del entretenimiento en su boda.
                                </p>
                            </div>
                        </section>

                        <div className="text-center space-y-4">
                            <p className="text-amber-500 font-bold uppercase tracking-widest text-xs">Testimonio Destacado:</p>
                            <p className="text-lg text-white font-[Cinzel] italic max-w-2xl mx-auto">
                                "Ángel hizo que el cóctel volara. Nuestros invitados todavía nos preguntan cómo hizo aquello con las cartas. Fue el toque elegante que buscábamos."
                            </p>
                            <p className="text-slate-500 text-[10px] uppercase">— Novios en Finca de Torrelodones, 2025</p>
                        </div>
                    </div>

                {/* FAQ Section */}
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
                {/* Related Blog Posts Section */}
                <section className="border-t border-white/5 pt-16 mt-16 pb-8">
                    <h2 className="text-2xl font-[Cinzel] text-white mb-10 text-center uppercase tracking-widest">Consejos para tu Boda</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a href="/blog/cuanto-cuesta-mago-boda-madrid" className="group bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-all">
                            <p className="text-amber-500 text-[10px] uppercase font-bold tracking-tighter mb-2">Precios y Tarifas</p>
                            <h3 className="text-white font-[Cinzel] text-sm group-hover:text-amber-400 transition-colors">¿Cuánto cuesta un mago para boda?</h3>
                        </a>
                        <a href="/blog/ideas-originales-entretenimiento-bodas-madrid" className="group bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-all">
                            <p className="text-amber-500 text-[10px] uppercase font-bold tracking-tighter mb-2">Ideas Creativas</p>
                            <h3 className="text-white font-[Cinzel] text-sm group-hover:text-amber-400 transition-colors">10 Ideas para entretener invitados</h3>
                        </a>
                        <a href="/blog/mago-para-bodas-madrid-faq" className="group bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-all">
                            <p className="text-amber-500 text-[10px] uppercase font-bold tracking-tighter mb-2">Guía Completa</p>
                            <h3 className="text-white font-[Cinzel] text-sm group-hover:text-amber-400 transition-colors">Mago para bodas: La Guía Definitiva</h3>
                        </a>
                    </div>
                </section>
            </main>
        </NavFooterClient>
        </>
    );
}
