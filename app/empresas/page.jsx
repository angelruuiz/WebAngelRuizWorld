import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Mago para Eventos Corporativos Madrid · Ángel Ruiz | Close-up Profesional',
    description: 'Magia close-up para eventos de empresa en Madrid. Networking, presentaciones de producto, team building y convenciones. Presupuesto personalizado para tu evento corporativo.',
    alternates: {
        canonical: 'https://angelruiz.world/empresas',
    },
    openGraph: {
        title: 'Magia para Empresas en Madrid | Ángel Ruiz | Mago e Ilusionista',
        description: 'Eleva el nivel de tu evento corporativo con magia de alto impacto. Especialista en cenas de empresa, congresos y team building.',
        images: [{ url: '/images/mago-empresas-madrid-angel-ruiz.svg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Magia para Empresas en Madrid | Ángel Ruiz | Mago e Ilusionista',
        description: 'Eleva tu evento con el mejor ilusionista corporativo de Madrid.',
        images: ['/images/mago-empresas-madrid-angel-ruiz.svg'],
    },
};

export default function EmpresasPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Magia close-up para eventos corporativos",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Comunidad de Madrid",
        "description": "Espectáculos de magia close-up para empresas en Madrid.",
        "serviceType": "Entertainment",
        "url": "https://angelruiz.world/empresas"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "¿Qué beneficios aporta la magia a un evento de empresa?", "acceptedAnswer": { "@type": "Answer", "text": "La magia corporativa rompe barreras de comunicación, fomenta el networking y facilita que el mensaje de su marca sea recordado de forma positiva y asombrosa." } },
            { "@type": "Question", "name": "¿Se puede personalizar el show con mi marca?", "acceptedAnswer": { "@type": "Answer", "text": "Totalmente. Puedo integrar su logo, eslóganes o mensajes de marketing en los efectos de ilusionismo para reforzar la identidad corporativa durante el evento." } },
            { "@type": "Question", "name": "¿Para qué eventos empresariales es recomendable?", "acceptedAnswer": { "@type": "Answer", "text": "Es ideal para cenas de gala, ferias comerciales (para atraer público al stand), presentaciones de producto y jornadas de team building." } }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Galería", "item": "https://angelruiz.world/galeria" },
            { "@type": "ListItem", "position": 3, "name": "Empresas", "item": "https://angelruiz.world/empresas" }
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
                            "@id": "https://angelruiz.world/empresas/#service"
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

                <main>
                <section className="pt-24 pb-16 px-6 max-w-6xl mx-auto relative z-10">
                    <Breadcrumbs />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">

                        <div className="relative md:sticky md:top-32 h-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl order-2 md:order-1 group bg-slate-900/50">
                            <Image
                                src="/images/evento-angel-ruiz-magia.jpg"
                                alt="Ángel Ruiz mago para empresas Madrid - Evento Real"
                                width={800}
                                height={1000}
                                className="object-cover transition-all duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                             <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Soluciones Corporativas | Madrid Noroeste
                             </p>
                             <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Mago para Empresas en Madrid
                             </h1>

                             <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                 <p className="border-l-2 border-amber-500 pl-4 py-1">
                                    <span className="text-amber-400 font-bold underline decoration-amber-500/30 text-lg">Eleve el impacto de su marca con una experiencia de asombro diseñada a medida por profesionales.</span>
                                </p>
                                 <p>
                                    Angel Ruiz, reconocido <strong className="text-amber-400 font-bold">ilusionista corporativo en Madrid</strong> y formado en la prestigiosa <strong>Escuela DaOrtiz</strong>, ofrece un enfoque sofisticado que lo distancia de las agencias de ocio convencionales. Mi especialización en <u>Cartomagia de alta calidad</u> permite ofrecer una experiencia premium en vivo, posicionándome como una de las herramientas más potentes de marketing offline y fidelización para su empresa. No se trata solo de trucos, sino de una técnica refinada para captar la atención plena de sus invitados y asociar su marca a un recuerdo exclusivo y verdaderamente sorprendente.
                                </p>

                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">01</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Cóctel & Networking</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Magia de cerca para romper barreras entre invitados.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">02</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Presentaciones</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Reveal de productos con efectos visuales imposibles.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Si busca potenciar el <strong className="text-amber-400">engagement</strong> de sus clientes o la cohesión de sus equipos de trabajo, mi propuesta combina elegancia y humor inteligente. Me adapto con precisión al protocolo empresarial de las compañías más exigentes, operando habitualmente en el eje de la <strong>A-6</strong>, los parques empresariales de <strong>Las Rozas y Pozuelo</strong>, y los centros de convenciones de <strong>Madrid Centro</strong> e IFEMA.
                                </p>

                                <p className="bg-white/5 p-4 rounded-lg italic text-slate-300">
                                    "La magia corporativa no interrumpe el evento, lo potencia. Mi objetivo es ser el nexo que facilite las conversaciones y el networking de forma orgánica."
                                </p>

                                <p>
                                    Como <strong>mago para empresas en Torrelodones</strong>, cubro toda la zona noroeste con agilidad logística, garantizando puntualidad y un servicio integral que incluye desde la gestión de la atmósfera mágica hasta la coordinación con otros proveedores de su evento corporativo.
                                </p>
                            </div>

                            <div className="mt-12">
                                <ContactButtonClient label="Solicitar Dossier Corporativo" />
                            </div>
                        </div>
                    </div>

                    {/* BLOQUE ADICIONAL DE CONTENIDO SEO */}
                    <div className="max-w-4xl mx-auto space-y-16 py-16 border-t border-white/5">
                        <section className="space-y-8">
                            <h2 className="text-3xl font-[Cinzel] text-white text-center uppercase tracking-widest border-b border-amber-500/30 pb-4">Soluciones Específicas para su Empresa</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <h3 className="text-amber-400 font-bold text-xl font-[Cinzel]">1. Ferias, Congresos y Stands</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed text-justify">
                                        En un congreso masivo, captar la atención es el desafío número uno. Como <strong className="text-white">mago para stands en Madrid</strong>, utilizo el ilusionismo para generar "parada de tráfico". Mis efectos están diseñados no solo para entretener, sino para <u>integrar las ventajas competitivas de su producto</u> en la rutina mágica. Transformamos a un transeúnte en un lead cualificado en menos de 90 segundos a través del asombro dirigido.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-amber-400 font-bold text-xl font-[Cinzel]">2. Team Building y Soft Skills</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed text-justify">
                                        ¿Busca una dinámica diferente para su equipo? La magia es una herramienta excepcional para trabajar la <strong>comunicación asertiva</strong>, la resolución de problemas y la <u>flexibilidad mental</u>. Realizo talleres integradores donde, mientras aprenden técnicas de ilusionismo, los empleados refuerzan vínculos y descubren nuevas formas de ver una realidad empresarial compleja.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-amber-400 font-bold text-xl font-[Cinzel]">3. Cenas de Gala y Aniversarios</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed text-justify">
                                        El formato de <strong className="text-white">magia entre platos</strong> o de cóctel es la opción preferida para celebraciones anuales. Es un entretenimiento no invasivo que eleva la calidad percibida de la cena. Mis actuaciones en <strong>hoteles exclusivos del centro de Madrid</strong> y <strong>fincas del noroeste</strong> garantizan que la velada fluya con un dinamismo constante y sofisticado.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-amber-400 font-bold text-xl font-[Cinzel]">4. Presentaciones de Producto</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed text-justify">
                                        Haga que su nuevo lanzamiento aparezca literalmente de la nada. Colaboro con departamentos de marketing para crear <u>revelaciones de producto de alto impacto visual</u>, ideales para prensa y redes sociales. El ilusionismo moderno de Angel Ruiz asegura que el primer contacto de su cliente con el producto sea inolvidable.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-slate-900/50 p-8 md:p-12 rounded-[2rem] border border-amber-500/20 shadow-2xl space-y-8">
                            <h2 className="text-2xl font-[Cinzel] text-white mb-6 uppercase tracking-widest text-center">Profesionalidad al Servicio de su Organización</h2>
                            <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed text-justify">
                                <p>
                                    Contratar un <strong className="text-amber-400">mago profesional para empresas en Madrid</strong> implica mucho más que contratar a un artista; es contratar a un partner de confianza. Entiendo la importancia de la imagen de marca y la responsabilidad que conlleva actuar ante sus mejores clientes o directivos.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                                    <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"><span className="text-amber-500">✓</span> <strong>Facturación inmediata</strong> y gestión administrativa transparente.</li>
                                    <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"><span className="text-amber-500">✓</span> <strong>Seguro de Responsabilidad Civil</strong> propio para mayor tranquilidad.</li>
                                    <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"><span className="text-amber-500">✓</span> <strong>Capacidad de adaptación</strong> a protocolos de seguridad y etiqueta corporativa.</li>
                                    <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"><span className="text-amber-500">✓</span> <strong>Puntualidad británica</strong> y coordinación directa con su personal de eventos.</li>
                                </ul>
                                <p className="pt-4 border-t border-white/5">
                                    Operamos de forma recurrente en municipios del cinturón empresarial madrileño como <strong>Boadilla, Alcobendas y San Sebastián de los Reyes</strong>, además de nuestra base habitual como <strong>mago en la zona noroeste</strong>. Nuestra reputación se basa en la excelencia técnica y en un trato exquisitamente profesional en cada interacción.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-6 text-center">
                            <h2 className="text-2xl font-[Cinzel] text-white uppercase tracking-widest">¿Hacia dónde quiere elevar su próximo evento?</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto italic">
                                "Mi misión es que al día siguiente, el comentario en la oficina no sea sobre el catering, sino sobre la magia imposible que ocurrió ayer en la cena de empresa."
                            </p>
                        </section>
                    </div>

                    {/* FAQ Section */}
                    <div className="border-t border-white/5 pt-16 mt-16 max-w-4xl mx-auto">
                        <h2 className="text-2xl font-[Cinzel] text-white mb-12 text-center uppercase tracking-widest">Preguntas Frecuentes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {faqSchema.mainEntity.map((faq, index) => (
                                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <h3 className="text-amber-400 font-bold mb-3 text-sm">{faq.name}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed text-justify">{faq.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Related Blog Posts Section */}
                    <section className="border-t border-white/5 pt-16 mt-16 pb-8">
                        <h2 className="text-2xl font-[Cinzel] text-white mb-10 text-center uppercase tracking-widest">Estrategias para Eventos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <a href="/blog/mago-eventos-empresa-madrid-guia" className="group bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-all">
                                <p className="text-amber-500 text-[10px] uppercase font-bold tracking-tighter mb-2">Guía Corporativa</p>
                                <h3 className="text-white font-[Cinzel] text-sm group-hover:text-amber-400 transition-colors">Organizar un evento corporativo de éxito</h3>
                            </a>
                            <a href="/blog/magia-corporativa-madrid" className="group bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-all">
                                <p className="text-amber-500 text-[10px] uppercase font-bold tracking-tighter mb-2">Innovación</p>
                                <h3 className="text-white font-[Cinzel] text-sm group-hover:text-amber-400 transition-colors">Magia como herramienta de Marketing</h3>
                            </a>
                        </div>
                    </section>
                </section>
            </main>
        </NavFooterClient>
        </>
    );
}
