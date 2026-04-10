import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';

export const metadata = {
    title: 'Mago para Bodas en Madrid | Angel Ruiz Ilusionista',
    description: 'Haz que tu cóctel y banquete de boda sean inolvidables con magia de cerca exclusiva. Angel Ruiz, mago experto en bodas en Madrid y alrededores.',
    alternates: {
        canonical: '/particulares/bodas',
    },
    openGraph: {
        title: 'Mago para Bodas en Madrid | Angel Ruiz',
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
        "name": "Magia para Bodas en Madrid",
        "provider": {
            "@type": "Person",
            "name": "Angel Ruiz"
        },
        "description": "Servicio de ilusionismo y magia de cerca para cócteles y banquetes de boda en la Comunidad de Madrid.",
        "areaServed": "Madrid"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
                        <div>
                            <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Especialista en Bodas | Sierra de Madrid
                            </p>
                            <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-4 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Mago para Bodas
                            </h1>

                            <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                <p>
                                    <span className="text-amber-400 font-bold underline decoration-amber-500/30">Personaliza tu boda de la forma más mágica.</span>{' '}
                                    Ángel Ruiz, mago profesional experto en <strong>eventos Madrid</strong> de lujo y <strong className="text-amber-400">ilusionismo en la Sierra</strong>, se encargará de hacer del cóctel o del banquete un momento único. El asombro sucede a escasos centímetros de los invitados, eliminando tiempos muertos y rompiendo el hielo al instante.
                                </p>

                                {/* Mini Features Grid para no aburrir */}
                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">01</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Cóctel de Bienvenida</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Magia itinerante para romper el hielo.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">02</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Entre Platos</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Amenización elegante durante el banquete.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Como <strong className="text-amber-400">ilusionista para bodas en Madrid</strong>, complemento la gastronomía con un entretenimiento que respeta la elegancia del evento en las fincas más exclusivas, desde la capital hasta <strong>El Escorial o Majadahonda</strong>.
                                </p>

                                <p>
                                    Al ser <strong>mago para bodas en Torrelodones</strong> (mi base de operaciones), cubro toda la zona noroeste con cercanía total: <strong>Las Rozas, Pozuelo, Boadilla y Villalba</strong>. Sin complicaciones logísticas para ti.
                                </p>
                            </div>

                            <div className="mt-12 flex justify-start">
                                <ContactButtonClient label="Consultar Disponibilidad Bodas" />
                            </div>
                        </div>

                        <div className="relative md:sticky md:top-32 h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
                            <Image
                                src="/images/boda-magia-madrid.jpg"
                                alt="Mago de bodas en Madrid Angel Ruiz realizando magia de cerca en una finca de la sierra de Madrid"
                                fill
                                className="object-cover object-top group-hover:scale-110 transition-transform duration-[3s]"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-[10px] text-amber-500 font-bold uppercase tracking-widest mb-1">Impacto Real</p>
                                <p className="text-white font-[Cinzel] text-sm italic">"Una experiencia inolvidable para vuestros invitados"</p>
                            </div>
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
            </main>
        </NavFooterClient>
        </>
    );
}
