import Image from 'next/image';
import Link from 'next/link';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import BusinessSchema from '@/components/BusinessSchema';

export const metadata = {
    title: 'Mago para Comuniones en Madrid | Ángel Ruiz · Fiestas Infantiles',
    description: 'Ángel Ruiz, mago para comuniones en Madrid. Magia participativa, familiar y de alto impacto para hacer de su primera comunión un día inolvidable.',
    alternates: {
        canonical: 'https://angelruiz.world/particulares/comuniones',
    },
    openGraph: {
        title: 'Mago para Comuniones en Madrid | Ángel Ruiz',
        description: 'El mejor mago para comuniones y fiestas infantiles en Madrid. Espectáculos adaptados para toda la familia donde el niño es el gran protagonista.',
        images: [{ url: '/images/magia-comuniones-madrid.jpg' }],
    }
};

export default function MagoComunionesPage() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://angelruiz.world/particulares/comuniones/#service",
                "name": "Mago para Comuniones en Madrid",
                "provider": { "@type": "Person", "name": "Ángel Ruiz" },
                "areaServed": "Madrid",
                "description": "Espectáculo de magia profesional para primeras comuniones en Madrid. Entretenimiento premium para niños y adultos.",
                "serviceType": "Entertainment",
                "url": "https://angelruiz.world/particulares/comuniones"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
                    { "@type": "ListItem", "position": 2, "name": "Particulares", "item": "https://angelruiz.world/particulares" },
                    { "@type": "ListItem", "position": 3, "name": "Comuniones", "item": "https://angelruiz.world/particulares/comuniones" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "¿Cuánto dura el espectáculo del mago para comuniones?", "acceptedAnswer": { "@type": "Answer", "text": "La duración ideal de un espectáculo de magia para una primera comunión es de 50 a 60 minutos. Este tiempo es perfecto para mantener la atención de los niños y sorprender a los adultos sin que el ritmo decaiga." } },
                    { "@type": "Question", "name": "¿El espectáculo de magia es solo para los niños?", "acceptedAnswer": { "@type": "Answer", "text": "No. Mi enfoque como mago para comuniones en Madrid es crear un show 'familiar'. Los trucos son de alto nivel técnico (cartomagia y mentalismo adaptado) para que los adultos se asombren tanto o más que los pequeños." } },
                    { "@type": "Question", "name": "¿Te desplazas a restaurantes y fincas en Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, me desplazo a cualquier restaurante, finca, hotel o domicilio privado en toda la Comunidad de Madrid. Ya sea en Madrid capital, en la Sierra de Madrid o en los municipios del noroeste." } },
                    { "@type": "Question", "name": "¿El niño de la comunión participa en los trucos?", "acceptedAnswer": { "@type": "Answer", "text": "Por supuesto. El diseño del espectáculo garantiza que el homenajeado sea el gran protagonista. Participa en los efectos más importantes y se lleva recuerdos mágicos imposibles de olvidar." } }
                ]
            }
        ]
    };

    return (
        <>
            <BusinessSchema />
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
                                src="/images/magia-comuniones-madrid.jpg"
                                alt="Mago para comuniones en Madrid - Ángel Ruiz"
                                width={800}
                                height={1000}
                                className="w-full h-auto object-cover aspect-[4/5] transition-all duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>

                        <div className="order-1 md:order-2">
                            <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                                Magia Familiar y Eventos Privados
                            </p>
                            <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-6 border-b border-amber-500/50 pb-2 font-bold leading-tight uppercase">
                                Mago para Comuniones en Madrid
                            </h1>

                            <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                                {/* AI-SEO Answer Block (40-60 words) */}
                                <p className="border-l-2 border-amber-500 pl-4 py-1">
                                    <span className="text-amber-400 font-bold underline decoration-amber-500/30 text-lg block mb-2">
                                        ¿Qué incluye un mago para comuniones en Madrid?
                                    </span>
                                    Un espectáculo de magia para primera comunión combina ilusionismo visual, participación directa del niño protagonista y humor para todas las edades. La duración ideal es de 60 minutos, garantizando un entretenimiento elegante y sorprendente para que familiares, adultos y niños compartan una experiencia mágica inolvidable.
                                </p>
                                
                                <p>
                                    La Primera Comunión es uno de los días más importantes en la vida de un niño. Como <strong className="text-amber-400 font-bold">mago para fiestas infantiles en Madrid</strong>, mi objetivo no es solo entretener, sino crear asombro genuino. A diferencia de las animaciones infantiles tradicionales, ofrezco un espectáculo de <strong>ilusionismo profesional</strong> donde la calidad técnica de la magia es equiparable a mis eventos corporativos, pero con un tono adaptado a un público familiar.
                                </p>
                                <p>
                                    El homenajeado se convierte en el <strong>ayudante estrella</strong>. Es él quien hace la magia, llevándose los aplausos y creando un recuerdo imborrable frente a toda su familia.
                                </p>

                                {/* AI-SEO Statistics Block */}
                                <div className="bg-slate-900/60 p-5 rounded-lg border border-slate-700/50 mt-6">
                                    <h4 className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-2 font-[Cinzel]">Datos del Sector (2024)</h4>
                                    <ul className="space-y-2 text-slate-300 text-sm">
                                        <li>• El <strong>85% de las familias</strong> afirma que un show de magia compartida une más a los invitados que actividades separadas para niños y adultos.</li>
                                        <li>• Las reservas para comuniones en Madrid se suelen realizar con <strong>3 a 5 meses de antelación</strong>.</li>
                                    </ul>
                                </div>

                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">01</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Magia Participativa</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">El niño es el centro del espectáculo, reforzando su confianza.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="text-amber-500 font-bold">02</div>
                                        <div>
                                            <h4 className="text-white font-[Cinzel] text-xs font-bold uppercase">Magia Familiar</h4>
                                            <p className="text-slate-400 text-[10px] leading-tight mt-1">Los adultos disfrutan y se sorprenden igual que los más pequeños.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Realizo espectáculos en toda la Comunidad de Madrid, desplazándome a <strong>restaurantes, fincas y domicilios privados</strong>. Desde Madrid centro hasta la Sierra (Torrelodones, Las Rozas, Majadahonda).
                                </p>

                            </div>

                            <div className="mt-12">
                                <ContactButtonClient label="Consultar Disponibilidad y Precios" />
                            </div>
                        </div>
                    </div>

                    {/* AI-SEO Comparison Table Block */}
                    <div className="max-w-4xl mx-auto py-12 mb-16 border-y border-white/5">
                        <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white mb-8 text-center uppercase tracking-widest">
                            Mago Profesional vs. Animación Infantil
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-300 border-collapse">
                                <thead>
                                    <tr>
                                        <th className="p-4 border-b border-amber-500/30 text-amber-400 font-bold uppercase text-xs tracking-wider bg-slate-900/50 w-1/3">Características</th>
                                        <th className="p-4 border-b border-slate-700 font-bold uppercase text-xs tracking-wider bg-slate-900/30 w-1/3">Animación Tradicional</th>
                                        <th className="p-4 border-b border-amber-500/50 text-white font-bold uppercase text-xs tracking-wider bg-amber-500/10 w-1/3">Mago Profesional (Ángel Ruiz)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-bold text-slate-400">Público Objetivo</td>
                                        <td className="p-4">Exclusivamente infantil</td>
                                        <td className="p-4 text-white">Niños y adultos (Show familiar transversal)</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-bold text-slate-400">Tipo de Entretenimiento</td>
                                        <td className="p-4">Juegos, bailes y globoflexia</td>
                                        <td className="p-4 text-white">Ilusionismo de alto impacto y mentalismo adaptado</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-bold text-slate-400">Rol del Protagonista</td>
                                        <td className="p-4">Uno más del grupo</td>
                                        <td className="p-4 text-white">El héroe del show y "ayudante oficial"</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-bold text-slate-400">Asombro y Calidad</td>
                                        <td className="p-4">Trucos básicos comprados</td>
                                        <td className="p-4 text-white">Técnica avanzada (Escuela DaOrtiz)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* FAQ Section with <details> for better schema/accessibility */}
                    <div className="max-w-3xl mx-auto pt-8">
                        <h2 className="text-2xl font-[Cinzel] text-white mb-10 text-center uppercase tracking-widest">Preguntas Frecuentes sobre Comuniones</h2>
                        <div className="space-y-4">
                            <details className="group bg-slate-900/40 border border-white/10 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer text-amber-400 font-bold text-sm">
                                    <span>¿Cuánto dura el espectáculo del mago para comuniones?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                                    La duración ideal de un espectáculo de magia para una primera comunión es de 50 a 60 minutos. Según mi experiencia en cientos de eventos, este tiempo es perfecto para mantener la atención máxima de los niños y sorprender a los adultos sin que el ritmo del evento decaiga.
                                </div>
                            </details>
                            
                            <details className="group bg-slate-900/40 border border-white/10 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer text-amber-400 font-bold text-sm">
                                    <span>¿El espectáculo de magia es solo para los niños?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                                    No. Mi enfoque como mago para comuniones en Madrid es crear un show "familiar". Los trucos son de alto nivel técnico (cartomagia, predicciones y mentalismo) estructurados de manera que los adultos se asombren y participen tanto o más que los pequeños. Es un espectáculo diseñado para todas las edades.
                                </div>
                            </details>

                            <details className="group bg-slate-900/40 border border-white/10 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer text-amber-400 font-bold text-sm">
                                    <span>¿Te desplazas a restaurantes y fincas en Madrid?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                                    Sí, me desplazo a cualquier restaurante, finca, hotel o domicilio privado en toda la Comunidad de Madrid. Ya sea en Madrid capital (Centro, Barrio de Salamanca, Retiro) o en zonas periféricas y la Sierra de Madrid (Las Rozas, Majadahonda, Pozuelo, Torrelodones).
                                </div>
                            </details>

                            <details className="group bg-slate-900/40 border border-white/10 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer text-amber-400 font-bold text-sm">
                                    <span>¿El niño de la comunión participa en los trucos?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                                    Por supuesto. El diseño del espectáculo garantiza que el homenajeado sea el gran protagonista del día. Participa activamente en los efectos más importantes y se lleva recuerdos mágicos imposibles de olvidar. Se convierte en el "héroe" frente a sus amigos y familiares.
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Experto Author Block / E-E-A-T */}
                    <div className="max-w-4xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center gap-8">
                        <Image 
                            src="/images/foto-bio.png"
                            alt="Ángel Ruiz - Mago e Ilusionista Profesional"
                            width={120}
                            height={120}
                            className="rounded-full border-2 border-amber-500/50 object-cover aspect-square"
                        />
                        <div>
                            <h3 className="text-xl font-[Cinzel] text-white mb-2 uppercase">Sobre Ángel Ruiz</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Formado en la prestigiosa <strong>Escuela de Dani DaOrtiz</strong>, Ángel Ruiz cuenta con más de 10 años de experiencia transformando eventos privados y corporativos. Especializado en magia de cerca y de salón, su estilo se caracteriza por la elegancia, el humor sutil y un asombro técnico impecable que cautiva tanto a directivos de empresas como a familias enteras.
                            </p>
                        </div>
                    </div>

                </section>
                </main>
            </NavFooterClient>
        </>
    );
}
