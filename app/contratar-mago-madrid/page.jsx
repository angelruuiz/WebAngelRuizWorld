import Image from 'next/image';
import FAQItem from '@/components/FAQItem';
import Link from 'next/link';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: { absolute: '¿Cuánto Cuesta un Mago en Madrid? Tarifas 2026' },
    description: 'Tarifas reales desde 300€ para contratar un mago en Madrid. Precios para bodas y empresas sin agencias. Respuesta en 2h.',
    keywords: ['contratar mago madrid', 'contratar mago madrid precio', 'precio mago madrid', 'cuanto cuesta un mago en madrid', 'mago profesional madrid', 'ilusionista madrid precios', 'mago para eventos madrid', 'mago para fiestas privadas madrid'],
    alternates: {
        canonical: 'https://angelruiz.world/contratar-mago-madrid',
    },
    openGraph: {
        title: '¿Cuánto Cuesta un Mago en Madrid? Tarifas 2026',
        description: 'Todo lo que necesitas saber para contratar un ilusionista en Madrid para bodas o empresas. Precios directos sin comisiones.',
        images: [{ url: '/images/foto-bio.webp' }],
    }
};

export default function ContratarMagoMadridPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { 
                "@type": "Question", 
                "name": "¿Cuánto cuesta contratar un mago en Madrid? (Precios 2026)", 
                "acceptedAnswer": { 
                    "@type": "Answer", 
                    "text": "El precio mago boda 2026 y fiestas privadas varía entre 300€ y 900€. Si necesitas saber el precio mago cena empresa o evento corporativo, la tarifa base suele partir de 400€ por jornada, dependiendo del formato y requerimientos. El presupuesto se personaliza siempre." 
                } 
            },
            { 
                "@type": "Question", 
                "name": "¿Cuál es el mejor momento para contratar un ilusionista en una boda?", 
                "acceptedAnswer": { 
                    "@type": "Answer", 
                    "text": "El mejor momento es durante el cóctel de bienvenida o en la sobremesa. La magia de cerca rompe el hielo entre invitados que no se conocen y crea una atmósfera de asombro perfecta para iniciar la celebración, todo a escasos centímetros de los invitados." 
                } 
            },
            { 
                "@type": "Question", 
                "name": "¿Con cuánta antelación debo reservar?", 
                "acceptedAnswer": { 
                    "@type": "Answer", 
                    "text": "Para bodas y eventos corporativos en temporada alta (mayo a septiembre, y diciembre), se recomienda contratar con 3 a 6 meses de antelación para asegurar disponibilidad y poder diseñar la estructura del evento adecuadamente." 
                } 
            },
            {
                "@type": "Question",
                "name": "¿Qué formatos de ilusionismo ofreces al contratarte?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ofrezco magia de cerca (micromagia y cartomagia en formato cóctel o por mesas) y magia de salón (para todo el grupo a la vez). Se puede combinar ambas disciplinas dependiendo de la estructura del evento, asegurando el máximo impacto emocional."
                }
            },
            {
                "@type": "Question",
                "name": "¿Realizas magia para público internacional en inglés?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, realizo presentaciones de magia e ilusionismo tanto en español como en inglés, perfecto para eventos corporativos en IFEMA, ferias internacionales y bodas con invitados extranjeros en Madrid."
                }
            },
            {
                "@type": "Question",
                "name": "¿Se requiere equipo técnico o escenario para contratar un mago?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para el formato de Magia de Cerca (Close-Up) no se requiere ningún tipo de infraestructura, escenario ni sonido. Es un formato totalmente adaptable y versátil. Para el show de salón sí se requiere un pequeño espacio escénico y sonido para audiencias de más de 40 personas."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué incluye el servicio de contratación?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El servicio incluye la asesoría inicial para estructurar el evento, la personalización de la rutina si es para empresas (incorporando mensajes o logotipos), y la ejecución milimétrica del show de magia en el evento, garantizando una técnica depurada y control de atención total."
                }
            },
            {
                "@type": "Question",
                "name": "¿Hay que pagar señal para reservar? ¿Y si llueve?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, se requiere una señal en concepto de reserva para bloquear la fecha (especialmente en temporada alta). En caso de lluvia, la magia de cerca es totalmente adaptable a interiores, por lo que el show nunca se cancela por este motivo."
                }
            }
        ]
    };

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
                "priceRange": "300€ - 900€",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Madrid",
                    "addressRegion": "Comunidad de Madrid",
                    "addressCountry": "ES"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Madrid"
                }
            },
            faqSchema
        ]
    };

    const faqs = faqSchema.mainEntity;

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto selection:bg-emerald-500/30">
                    <Breadcrumbs />
                    
                    {/* HERO BENTO */}
                    <div className="mt-16 flex flex-col items-center text-center mb-24">
                        <p className="font-mono text-emerald-400 text-xs tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            Protocolo de Contratación
                        </p>
                        <h1 className="text-5xl md:text-7xl font-[Cinzel] text-white font-bold leading-none mb-8 tracking-tight">
                            CONTRATAR <br/> ILUSIONISTA
                        </h1>
                        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-12">
                            Asegura la disponibilidad para tu evento en Madrid. Desde Magia de Cerca y Sleight of Hand hasta magia de salón corporativa de alto impacto. Una experiencia de técnica depurada y misdirection profesional.
                        </p>
                    </div>

                    {/* METODOLOGIA DE TRABAJO (PROCESS CARDS) */}
                    <section className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-[Cinzel] text-white font-bold mb-4">El Proceso: De la Idea a la Ejecución</h2>
                            <p className="text-slate-400">Cómo organizamos el ilusionismo para que sea perfecto.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { step: '01', title: 'PARÁMETROS', desc: 'Analizamos las necesidades. Define el formato (Close-up o Magia de Salón), la fecha, el lugar en Madrid y el volumen de espectadores para determinar la mejor aproximación mágica.' },
                                { step: '02', title: 'CALIBRACIÓN', desc: 'Diseño y personalización de la rutina técnica adaptada a la arquitectura del evento. Si es corporativo, integramos mensajes de marca usando juegos interactivos.' },
                                { step: '03', title: 'EJECUCIÓN', desc: 'Despliegue del ilusionista en el evento con precisión absoluta. Control de la atención y asombro a centímetros de distancia, logrando el máximo impacto emocional.' }
                            ].map((item) => (
                                <div key={item.step} className="bg-zinc-900/40 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] p-8 rounded-[2rem] hover:-translate-y-2 hover:bg-zinc-800/50 transition-all duration-500 ease-out group">
                                    <div className="text-emerald-500/20 font-mono text-5xl font-bold mb-4 group-hover:text-emerald-500/40 transition-colors">
                                        {item.step}
                                    </div>
                                    <h3 className="text-white font-[Cinzel] font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* BENEFICIOS / TRUST BLOCKS */}
                    <section className="mb-24 bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-[Cinzel] text-white font-bold mb-6">Por qué elegir a un especialista</h2>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    Contratar a un mago en Madrid no se trata solo de ver trucos, se trata de experimentar <strong>arte en tiempo real</strong>. Especialista en cartomagia de la escuela de DaOrtiz, ofrezco un nivel de ilusionismo que desafía el intelecto.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { title: 'Cero Infraestructura Requerida', desc: 'El close-up fluye entre los invitados.' },
                                        { title: 'Rompehielos Garantizado', desc: 'El mejor método para unir a desconocidos.' },
                                        { title: 'Ilusionismo Interactivo', desc: 'La magia ocurre en sus propias manos.' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <span className="text-emerald-500 font-mono mt-1">{"//"}</span>
                                            <div>
                                                <strong className="text-white text-sm block">{item.title}</strong>
                                                <span className="text-slate-500 text-sm">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-zinc-950/50 p-8 rounded-[2rem] border border-white/5">
                                <p className="text-lg text-slate-300 italic mb-6">"El control sobre el grupo y la técnica impecable transformaron por completo la dinámica de nuestro evento de empresa. Fue el tema de conversación durante semanas."</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 font-bold">HR</div>
                                    <div>
                                        <p className="text-white text-sm font-bold">Directora de RRHH</p>
                                        <p className="text-slate-500 text-xs">Empresa Tecnológica en Madrid</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* EXTENSIVE FAQS */}
                    <section className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-[Cinzel] text-white font-bold mb-4">Preguntas Frecuentes al Contratar</h2>
                            <p className="text-slate-400">Todo lo que necesitas saber antes de asegurar tu fecha en Madrid.</p>
                        </div>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} faq={faq} />
                            ))}
                        </div>
                    </section>

                    {/* CONTACT BAR */}
                    <div className="bg-gradient-to-r from-emerald-900/20 to-zinc-900/40 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl font-[Cinzel] text-white font-bold mb-2">Precios Mago Madrid 2026: desde 300€</h2>
                            <p className="text-slate-400 text-sm max-w-lg mb-4">
                                Tarifas base desde 300€ (Particulares) y 400€ (Corporativo). El presupuesto exacto se compila tras evaluar las variables de tu evento. Rellena el formulario o contacta por WhatsApp para un diseño a medida.
                            </p>
                            <p className="text-amber-500 text-xs font-bold uppercase tracking-widest animate-pulse">
                                Temporada alta: disponibilidad limitada
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 items-end active:scale-[0.97] transition-transform duration-200 shrink-0">
                            <ContactButtonClient label="INICIAR CONTACTO" />
                            <a href="https://wa.me/34648055636" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-2 transition-colors">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Consultar disponibilidad ahora
                            </a>
                        </div>
                    </div>
                </main>
            </NavFooterClient>
        </>
    );
}
