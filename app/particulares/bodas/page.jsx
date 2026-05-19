import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Mago para Bodas en Madrid | Ilusionismo Elegante y Exclusivo',
    description: 'Ángel Ruiz, experto en magia de cerca para bodas en Madrid y la Sierra. Transforma tu cóctel en una experiencia inolvidable. Consulta disponibilidad.',
    alternates: {
        canonical: 'https://angelruiz.world/particulares/bodas',
    },
    openGraph: {
        title: 'Mago para Bodas en Madrid | Ángel Ruiz | Mago e Ilusionista',
        description: 'La magia perfecta para tu cóctel de boda. Conecta a tus invitados y crea recuerdos inolvidables.',
        images: [{ url: '/images/foto-bio.webp' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago para Bodas en Madrid | Angel Ruiz',
        description: 'Momentos imposibles para el día más importante de tu vida.',
        images: ['/images/foto-bio.webp'],
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
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "bestRating": "5",
                                "worstRating": "1",
                                "ratingCount": "31"
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
                                    Ángel Ruiz, <strong className="text-amber-400">experto en magia en Madrid</strong> y referente de la <strong>magia en la Sierra</strong>, se especializa en crear momentos de asombro que actúan como el hilo conductor perfecto para su enlace. Una boda es una celebración de emociones, y no hay nada que conecte mejor a familias y amigos que la vivencia compartida de lo imposible.
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
                                    Como <strong className="text-amber-400">mago para bodas en Madrid</strong>, formado bajo la mentoría directa de <strong>Dani DaOrtiz</strong>, mi propuesta se aleja del espectáculo genérico para centrarse en la <u>exclusividad de la Cartomagia de autor</u>. Los milagros ocurren en las propias manos de sus invitados, respetando en todo momento el flujo del evento y aportando ese toque purista y sofisticado que requieren las fincas más exclusivas de la capital.
                                </p>

                                <p>
                                    Al ser <strong>mago torrelodones</strong> y de toda la zona noroeste, ofrezco una cobertura excepcional en <strong>Las Rozas, Pozuelo, El Escorial y Majadahonda</strong>. Mi conocimiento de los espacios y wedding planners locales garantiza una coordinación impecable sin complicaciones logísticas para los novios.
                                </p>
                            </div>

                            <div className="mt-12 flex justify-start">
                                <ContactButtonClient label="Consultar Disponibilidad Bodas" />
                            </div>
                        </div>

                        <div className="relative md:sticky md:top-32 h-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
                            <Image
                                src="/images/boda-magia-madrid.webp"
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

                    {/* SECCIÓN: Cómo Funciona */}
                    <div className="max-w-5xl mx-auto py-16 border-t border-white/5">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white uppercase tracking-widest">
                                ¿Cómo funciona la magia en una boda?
                            </h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                                Un proceso sencillo pensado para que tú solo tengas que disfrutar de tu gran día.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5 text-center">
                                <div className="text-amber-500 font-bold text-2xl mb-2">1</div>
                                <h3 className="text-white font-bold text-sm mb-2">Contacto</h3>
                                <p className="text-slate-400 text-xs">Me cuentas la fecha, el lugar y el estilo de tu boda. Te asesoro sin compromiso.</p>
                            </div>
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5 text-center">
                                <div className="text-amber-500 font-bold text-2xl mb-2">2</div>
                                <h3 className="text-white font-bold text-sm mb-2">Propuesta a Medida</h3>
                                <p className="text-slate-400 text-xs">Diseño una intervención adaptada a tu timing: cóctel, banquete o ambos.</p>
                            </div>
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5 text-center">
                                <div className="text-amber-500 font-bold text-2xl mb-2">3</div>
                                <h3 className="text-white font-bold text-sm mb-2">Coordinación</h3>
                                <p className="text-slate-400 text-xs">Me coordino con tu wedding planner o el responsable de la finca para una logística perfecta.</p>
                            </div>
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5 text-center">
                                <div className="text-amber-500 font-bold text-2xl mb-2">4</div>
                                <h3 className="text-white font-bold text-sm mb-2">El Gran Día</h3>
                                <p className="text-slate-400 text-xs">Llego puntual, con elegancia discreta, y hago que tus invitados vivan algo inolvidable.</p>
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN: Momentos Clave */}
                    <div className="max-w-5xl mx-auto py-16 border-t border-white/5">
                        <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white uppercase tracking-widest text-center mb-12">
                            Los 3 Momentos Clave para la Magia en tu Boda
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-900/40 p-8 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3">El Cóctel de Bienvenida</h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                                    Es el <strong className="text-white">momento estrella</strong> para la magia de cerca. Mientras los invitados toman sus primeros aperitivos, me muevo entre los grupos realizando efectos imposibles con cartas y objetos cotidianos.
                                </p>
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    Resultado: rompe el hielo entre familias que no se conocen, elimina los silencios incómodos y convierte la espera en puro entretenimiento. Ideal para <strong>bodas en fincas de Madrid</strong> con cócteles al aire libre.
                                </p>
                            </div>
                            <div className="bg-slate-900/40 p-8 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3">Entre Platos del Banquete</h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                                    La magia <strong className="text-white">mesa a mesa</strong> durante la cena es elegante y no interrumpe la conversación. Los invitados ven la magia a centímetros de sus ojos mientras esperan entre platos.
                                </p>
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    Es un formato íntimo y sofisticado, perfecto para bodas que buscan un toque de <strong>entretenimiento premium</strong> sin cortar el flujo del servicio de catering.
                                </p>
                            </div>
                            <div className="bg-slate-900/40 p-8 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3">La Fiesta y Postcena</h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                                    Mientras suena la música, la <strong className="text-white">magia de salón</strong> puede ser el momento central de la velada. Un show breve de 15-20 minutos que aglutina a todos los invitados antes de abrir pista.
                                </p>
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    Es el broche perfecto para bodas que quieren un <strong>espectáculo de magia para bodas</strong> con protagonismo visual y mucha participación de los novios.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN: Cobertura geográfica */}
                    <div className="max-w-5xl mx-auto py-16 border-t border-white/5">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white uppercase tracking-widest">
                                Cobertura para Bodas en Madrid
                            </h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                                Desde mi base en Torrelodones, cubro bodas en toda la Comunidad de Madrid con logística ágil y sin sorpresas.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3">Fincas de la Sierra</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Conozco las principales fincas de bodas en <strong>Torrelodones, El Escorial, Galapagar y Collado Villalba</strong>. Coordinación perfecta para magia al aire libre durante el cóctel en entornos rurales.
                                </p>
                            </div>
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3">Zona Noroeste</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Cobertura inmediata en <strong>Las Rozas, Majadahonda, Pozuelo y Boadilla</strong>. Entretenimiento premium para enlaces exclusivos en entornos residenciales y hoteles de la A-6.
                                </p>
                            </div>
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3">Madrid Centro</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Etiqueta impecable para bodas cosmopolitas en <strong>hoteles del centro, Barrio de Salamanca y Retiro</strong>. Magia de cerca de alto impacto visual sin interrumpir el ritmo del banquete.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN: Testimonio */}
                        <div className="text-center space-y-4 py-8">
                            <p className="text-amber-500 font-bold uppercase tracking-widest text-xs">Testimonio Destacado:</p>
                            <p className="text-lg text-white font-[Cinzel] italic max-w-2xl mx-auto">
                                "Ángel hizo que el cóctel volara. Nuestros invitados todavía nos preguntan cómo hizo aquello con las cartas. Fue el toque elegante que buscábamos."
                            </p>
                            <p className="text-slate-500 text-[10px] uppercase">— Novios en Finca de Torrelodones, 2025</p>
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
