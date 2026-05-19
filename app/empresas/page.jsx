import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Mago para Empresas en Madrid | Eventos Corporativos VIP',
    description: 'Ángel Ruiz, ilusionista profesional para eventos corporativos en Madrid. Magia elegante para cenas de empresa, congresos e IFEMA. Solicita dossier premium.',
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
        title: 'Mago para Empresas en Madrid | Ángel Ruiz',
        description: 'El mejor mago para eventos corporativos en Madrid. Sorprende a tus clientes y empleados.',
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

                        <div className="relative md:sticky md:top-32 h-auto rounded-2xl overflow-hidden border border-slate-800 shadow-xl order-2 md:order-1 group bg-slate-900/50">
                            <Image
                                src="/images/evento-angel-ruiz-magia.webp"
                                alt="Ángel Ruiz mago para empresas Madrid - Evento Real"
                                width={800}
                                height={1000}
                                className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
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
                                    Al buscar un <strong className="text-amber-400">mago para empresas en Madrid</strong>, la logística y puntualidad son claves. Como experto operando desde la zona noroeste, cubro toda la comunidad con agilidad logística, garantizando un servicio integral que incluye desde la gestión de la atmósfera mágica hasta la coordinación con otros proveedores de su evento corporativo.
                                </p>
                            </div>

                            <div className="mt-12">
                                <ContactButtonClient label="Solicitar Dossier Corporativo" />
                            </div>
                        </div>
                    </div>

                    {/* BLOQUE ESPECIALIZACIÓN MADRID - CONCISO Y ELEGANTE */}
                    <div className="max-w-5xl mx-auto py-16 border-t border-white/5">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white uppercase tracking-widest">
                                Referencia en Eventos Corporativos en Madrid
                            </h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
                                Especializados en aportar distinción y asombro a las citas empresariales más exigentes de la capital y sus centros de negocios.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3">IFEMA y Ferias</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Convierte tu stand en un imán de clientes. Magia corporativa diseñada para atraer atención, transmitir el mensaje de marca y captar leads en los grandes congresos de Madrid.
                                </p>
                            </div>
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3">Hoteles del Centro</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Elegancia y protocolo para presentaciones y cenas de gala en el corazón financiero (Paseo de la Castellana). Magia de cóctel que dinamiza el networking entre directivos.
                                </p>
                            </div>
                            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3">Fincas y Periferia</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Agilidad logística total en el eje A-6 (Pozuelo, Las Rozas) y fincas de la Sierra. Jornadas de Team Building donde el ilusionismo fomenta la cohesión de equipos.
                                </p>
                            </div>
                        </div>
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
