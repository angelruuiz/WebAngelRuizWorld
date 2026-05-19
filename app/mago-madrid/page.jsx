import Image from 'next/image';
import Link from 'next/link';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Mago en Madrid | Ángel Ruiz · Ilusionista Profesional para Eventos',
    description: 'Ángel Ruiz, mago profesional en Madrid. Ilusionismo de cerca para bodas, empresas y eventos privados en toda la Comunidad de Madrid. 31 reseñas · 5 estrellas.',
    alternates: {
        canonical: 'https://angelruiz.world/mago-madrid',
    },
    openGraph: {
        title: 'Mago en Madrid | Ángel Ruiz · Ilusionista Profesional',
        description: 'El mago de referencia en Madrid para bodas exclusivas y eventos corporativos. Magia de cerca, mentalismo y cartomagia de autor.',
        images: [{ url: '/images/foto-bio.webp' }],
    }
};

export default function MagoMadridPage() {
    const schema = {
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
                    "addressLocality": "Madrid",
                    "addressRegion": "Comunidad de Madrid",
                    "addressCountry": "ES"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "31"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Madrid"
                }
            },
            {
                "@type": "Service",
                "@id": "https://angelruiz.world/mago-madrid/#service",
                "name": "Mago en Madrid",
                "provider": { "@type": "Person", "name": "Ángel Ruiz" },
                "areaServed": "Madrid",
                "description": "Servicio profesional de ilusionismo y magia de cerca para eventos en Madrid capital y Comunidad de Madrid.",
                "serviceType": "Entertainment",
                "url": "https://angelruiz.world/mago-madrid"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
                    { "@type": "ListItem", "position": 2, "name": "Mago Madrid", "item": "https://angelruiz.world/mago-madrid" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "¿Cuánto cuesta contratar un mago en Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "El precio varía según el tipo de evento. Para eventos privados y bodas en Madrid, el rango habitual de un mago profesional premium es de 400€ a 900€. Para eventos corporativos y ferias, se presupuesta por jornada desde 600€." } },
                    { "@type": "Question", "name": "¿Qué tipo de magia es mejor para un evento en Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "La magia de cerca (close-up) es la más demandada en Madrid para cócteles, bodas y cenas de empresa. Se realiza a centímetros del espectador sin necesidad de escenario, creando momentos de asombro íntimos y memorables." } },
                    { "@type": "Question", "name": "¿Te desplazas a cualquier zona de Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Cubro Madrid capital, la zona noroeste (Las Rozas, Pozuelo, Majadahonda), la Sierra de Madrid y los centros de convenciones como IFEMA. Mi base en Torrelodones me permite una logística ágil a cualquier punto de la Comunidad." } }
                ]
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main>
                <section className="pt-24 pb-16 px-6 max-w-6xl mx-auto relative z-10">
                    <Breadcrumbs />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
                        <div className="relative md:sticky md:top-32 h-auto rounded-2xl overflow-hidden border border-slate-800 shadow-xl order-2 md:order-1 group bg-slate-900/50">
                            <Image
                                src="/images/foto-bio.webp"
                                alt="Ángel Ruiz mago profesional en Madrid"
                                width={800}
                                height={1000}
                                className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                            <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Ilusionismo Profesional | Comunidad de Madrid
                            </p>
                            <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Mago en Madrid
                            </h1>

                            <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                <p className="border-l-2 border-amber-500 pl-4 py-1">
                                    <span className="text-amber-400 font-bold underline decoration-amber-500/30 text-lg">El ilusionista de referencia en Madrid para quienes buscan asombro real, no trucos genéricos.</span>
                                </p>
                                <p>
                                    Si buscas un <strong className="text-amber-400 font-bold">mago en Madrid</strong> que vaya más allá del entretenimiento convencional, has llegado al lugar correcto. Soy Ángel Ruiz, ilusionista profesional formado en la prestigiosa <strong>Escuela de Dani DaOrtiz</strong>, con más de 10 años transformando eventos en experiencias que tus invitados recordarán durante años.
                                </p>
                                <p>
                                    Mi especialidad es la <strong className="text-amber-400">magia de cerca</strong> (close-up): cartomagia de autor y mentalismo que suceden a centímetros de los ojos del espectador. Sin escenario, sin grandes producciones. Solo técnica pura, psicología y un asombro imposible de explicar.
                                </p>

                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">01</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Bodas y Cócteles</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Magia itinerante que rompe el hielo y une a los invitados.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">02</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Empresas e IFEMA</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Marketing experiencial y captación de leads en stands y congresos.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Opero desde mi base en la <strong>Sierra de Madrid</strong> (Torrelodones), lo que me permite cubrir con agilidad logística tanto <strong>Madrid centro</strong> (Barrio de Salamanca, Castellana, Retiro) como las zonas empresariales del <strong>eje A-6</strong> (Las Rozas, Pozuelo, Majadahonda) y los grandes centros de convenciones como <strong>IFEMA</strong>.
                                </p>

                                <p className="bg-white/5 p-4 rounded-lg italic text-slate-300">
                                    "31 reseñas de 5 estrellas en Google. Empresas como Movistar Estudiantes ya confían en mi magia para sus eventos corporativos."
                                </p>
                            </div>

                            <div className="mt-12">
                                <ContactButtonClient label="Solicitar Presupuesto en Madrid" />
                            </div>
                        </div>
                    </div>

                    {/* Servicios en Madrid */}
                    <div className="max-w-5xl mx-auto py-16 border-t border-white/5">
                        <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white uppercase tracking-widest text-center mb-12">
                            Servicios de Magia en Madrid
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href="/empresas" className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all group">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3 group-hover:text-white transition-colors">Empresas y Corporativo</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">Cenas de empresa, ferias en IFEMA, team building y eventos de marca en Madrid.</p>
                                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mt-4 block">Ver servicios →</span>
                            </Link>
                            <Link href="/particulares/bodas" className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all group">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3 group-hover:text-white transition-colors">Bodas Exclusivas</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">Magia de cóctel y mentalismo para el día más importante. Fincas de Madrid y Sierra.</p>
                                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mt-4 block">Ver bodas →</span>
                            </Link>
                            <Link href="/particulares/eventos" className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all group">
                                <h3 className="text-amber-400 font-bold text-lg font-[Cinzel] mb-3 group-hover:text-white transition-colors">Eventos Privados</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">Cumpleaños, comuniones, aniversarios y fiestas privadas en toda la Comunidad.</p>
                                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mt-4 block">Ver eventos →</span>
                            </Link>
                        </div>
                    </div>

                    {/* Cobertura geográfica */}
                    <div className="max-w-5xl mx-auto py-16 border-t border-white/5">
                        <h2 className="text-2xl font-[Cinzel] text-white uppercase tracking-widest text-center mb-8">Cobertura en la Comunidad de Madrid</h2>
                        <p className="text-slate-400 text-sm text-center max-w-3xl mx-auto mb-10">
                            Además de Madrid capital, mantengo una presencia constante en la <strong className="text-white">Sierra de Madrid</strong> y los municipios del noroeste, donde soy el mago local de referencia.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link href="/mago-sierra-madrid" className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-slate-950 transition-all">Sierra de Madrid</Link>
                            <Link href="/mago-torrelodones" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-bold uppercase tracking-widest hover:border-amber-500/30 transition-all">Torrelodones</Link>
                            <Link href="/mago-las-rozas" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-bold uppercase tracking-widest hover:border-amber-500/30 transition-all">Las Rozas</Link>
                            <Link href="/mago-pozuelo" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-bold uppercase tracking-widest hover:border-amber-500/30 transition-all">Pozuelo</Link>
                            <Link href="/mago-majadahonda" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-bold uppercase tracking-widest hover:border-amber-500/30 transition-all">Majadahonda</Link>
                            <Link href="/mago-boadilla" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-bold uppercase tracking-widest hover:border-amber-500/30 transition-all">Boadilla</Link>
                            <Link href="/mago-galapagar" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-bold uppercase tracking-widest hover:border-amber-500/30 transition-all">Galapagar</Link>
                            <Link href="/mago-villalba" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-bold uppercase tracking-widest hover:border-amber-500/30 transition-all">Villalba</Link>
                            <Link href="/mago-el-escorial" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-bold uppercase tracking-widest hover:border-amber-500/30 transition-all">El Escorial</Link>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="border-t border-white/5 pt-16 mt-8 max-w-4xl mx-auto">
                        <h2 className="text-2xl font-[Cinzel] text-white mb-12 text-center uppercase tracking-widest">Preguntas Frecuentes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-amber-400 font-bold mb-3 text-sm">¿Cuánto cuesta contratar un mago en Madrid?</h3>
                                <p className="text-slate-400 text-xs leading-relaxed text-justify">El precio varía según el tipo de evento. Para eventos privados y bodas en Madrid, el rango habitual de un mago profesional premium es de 400€ a 900€. Para eventos corporativos y ferias, se presupuesta por jornada desde 600€.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-amber-400 font-bold mb-3 text-sm">¿Qué tipo de magia es mejor para un evento en Madrid?</h3>
                                <p className="text-slate-400 text-xs leading-relaxed text-justify">La magia de cerca (close-up) es la más demandada en Madrid para cócteles, bodas y cenas de empresa. Se realiza a centímetros del espectador sin necesidad de escenario.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-amber-400 font-bold mb-3 text-sm">¿Te desplazas a cualquier zona de Madrid?</h3>
                                <p className="text-slate-400 text-xs leading-relaxed text-justify">Sí. Cubro Madrid capital, la zona noroeste (Las Rozas, Pozuelo, Majadahonda), la Sierra de Madrid y los centros de convenciones como IFEMA.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-amber-400 font-bold mb-3 text-sm">¿Puedo personalizar el espectáculo?</h3>
                                <p className="text-slate-400 text-xs leading-relaxed text-justify">Cada actuación es diseñada a medida. Puedo integrar mensajes corporativos, adaptar el tono al protocolo de su empresa o crear momentos especiales para los novios en una boda.</p>
                            </div>
                        </div>
                    </div>
                </section>
                </main>
            </NavFooterClient>
        </>
    );
}
