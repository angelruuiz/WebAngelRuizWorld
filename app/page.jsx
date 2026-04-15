import HomeClient from '@/components/HomeClient';
import { motion } from 'framer-motion';

export const metadata = {
    title: 'Ángel Ruiz · Mago close-up en Madrid | Bodas, Eventos y Empresas',
    description: 'Mago profesional en Madrid especializado en close-up para bodas, eventos corporativos y celebraciones privadas. Área de Torrelodones y toda la Comunidad de Madrid. Pide presupuesto sin compromiso.',
    alternates: {
        canonical: '/',
    },
};

const SEOContent = () => {
    return (
        <section className="pt-0 pb-24 px-6 bg-slate-950 text-slate-400 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto relative">
                <div className="pt-8 overflow-hidden">
                    <h2 className="text-center font-bold text-amber-500 uppercase tracking-[0.5em] text-[10px] md:text-xs mb-8 animate-pulse">Especialidades de Ilusionismo Premium</h2>
                    {/* Marquee optimization: Text is now directly in HTML for SEO */}
                    <div className="relative flex overflow-hidden py-4 border-y border-amber-500/10">
                        <div className="flex gap-x-12 whitespace-nowrap animate-marquee">
                            <div className="flex gap-x-12 text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-amber-400">
                                <span>Angel Ruiz Madrid</span>
                                <span>Mago para Bodas</span>
                                <span>Mago para Empresas</span>
                                <span>Mentalismo Profesional</span>
                                <span>Ilusionismo de Gala</span>
                                <span>Magia para Cóctel</span>
                                <span>Espectáculos VIP Madrid</span>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/5 pt-8">
                    <div className="space-y-6 text-justify">
                        <h2 className="text-white font-[Cinzel] text-xl md:text-2xl uppercase tracking-widest text-left">Angel Ruiz | Mago e Ilusionista en Madrid</h2>
                        <p className="text-sm opacity-60 italic text-left">Referente en magia para bodas y empresas con un estilo exclusivo.</p>
                        
                        <div className="pt-6 border-t border-white/5 space-y-4">
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500 mb-2 text-left">Experiencia Certificada</p>
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ángel Ruiz se ha consolidado como uno de los <strong className="text-amber-400">ilusionistas más modernos de la capital</strong>, fusionando elegancia y un "caos controlado" en cada evento. Como <strong>mago para bodas en Madrid</strong> e ilusionista de alto nivel para marcas, su enfoque se centra en la <u>magia de cerca (close-up)</u>. Esta disciplina permite que el milagro ocurra literalmente a escasos centímetros del espectador, rompiendo toda barrera lógica y creando una conexión emocional inmediata.
                            </p>
                            <p className="text-sm leading-relaxed text-slate-300">
                                En la era digital, el asombro analógico de calidad es un regalo de valor incalculable. Mi propuesta no se limita a ejecutar trucos; se trata de <strong>diseñar atmósferas</strong>. Ya sea en un cóctel de bienvenida, en una cena de gala o en una convención corporativa de gran formato, mi magia actúa como el catalizador perfecto para dinamizar a los invitados y asegurar que su celebración sea recordada por su originalidad y distinción.
                            </p>
                        </div>
                    </div>
                    
                    <div className="space-y-4 text-xs">
                        <details className="group border-b border-white/5 pb-2 cursor-pointer">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors py-2 uppercase tracking-widest text-[11px]">
                                ¿Por qué contratar un mago profesional para su evento?
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-2 text-slate-400 leading-relaxed space-y-3 p-4 bg-white/5 rounded-xl">
                                <p>Contratar un <strong>mago en Madrid</strong> con trayectoria profesional no es solo añadir un número de entretenimiento; es transformar radicalmente la percepción de sus invitados sobre el evento. El ilusionismo moderno sirve para:</p>
                                <ul className="space-y-2 list-none">
                                    <li><span className="text-amber-500 mr-2">✦</span> <strong>Networking Natural:</strong> Facilitamos que personas que no se conocen comiencen a interactuar tras vivir una imposibilidad compartida.</li>
                                    <li><span className="text-amber-500 mr-2">✦</span> <strong>Eliminar tiempos muertos:</strong> La magia es ideal para cubrir transiciones en banquetes o recepciones.</li>
                                    <li><span className="text-amber-500 mr-2">✦</span> <strong>Refuerzo de Marca:</strong> En eventos de empresa, podemos integrar su mensaje corporativo dentro de los propios efectos mágicos.</li>
                                </ul>
                            </div>
                        </details>

                        <details open className="group border-b border-white/5 pb-2 cursor-pointer text-slate-400">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors py-2 uppercase tracking-widest text-[11px]">
                                Cobertura Sierra de Madrid y Zona Noroeste
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-2 leading-relaxed space-y-4">
                                <p>Si busca un <strong>mago profesional en la sierra de Madrid</strong>, Angel Ruiz ofrece total disponibilidad y conocimiento de los espacios locales más exclusivos. Opero desde mi base en el noroeste, lo que garantiza una logística impecable.</p>
                                <div className="bg-white/5 p-5 rounded-xl border border-amber-500/10">
                                    <p className="mb-3 text-[10px] text-amber-500 uppercase font-bold tracking-widest">Servicio Local en Municipios Clave:</p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-3 text-[10px] uppercase font-bold text-slate-300">
                                        <a href="/mago-torrelodones" className="text-amber-400 hover:text-white transition-all underline decoration-amber-500/30">Torrelodones</a>
                                        <a href="/mago-sierra-madrid" className="hover:text-amber-400">Sierra de Madrid</a>
                                        <a href="/mago-las-rozas" className="hover:text-amber-400">Las Rozas</a>
                                        <a href="/mago-villalba" className="hover:text-amber-400">Collado Villalba</a>
                                        <a href="/mago-galapagar" className="hover:text-amber-400">Galapagar</a>
                                        <a href="/mago-pozuelo" className="hover:text-amber-400">Pozuelo de Alarcón</a>
                                        <a href="/mago-majadahonda" className="hover:text-amber-400">Majadahonda</a>
                                    </div>
                                    <p className="mt-4 text-[11px] opacity-70 leading-relaxed italic border-t border-white/5 pt-4">
                                        Especialista en <strong>fincas para bodas</strong> y eventos residenciales VIP en urbanizaciones como La Finca, Somosaguas y Monterrozas.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>

                {/* NUEVO BLOQUE DE CONTENIDO PARA INICIO */}
                <div className="mt-20 pt-16 border-t border-white/5 space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="space-y-4">
                            <h3 className="text-white font-[Cinzel] text-lg uppercase tracking-tight">Magia para Bodas Exclusivas</h3>
                            <p className="text-sm leading-relaxed text-slate-400">
                                El <strong className="text-amber-500">mago de bodas en Madrid</strong> es la figura que asegura que el cóctel de bienvenida no sea "solo una espera". Mi magia de cerca rompe el hielo de forma elegante, uniendo a familias y amigos bajo un mismo sentimiento de asombro y alegría.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-white font-[Cinzel] text-lg uppercase tracking-tight">Ilusionismo para Empresas</h3>
                            <p className="text-sm leading-relaxed text-slate-400">
                                Las marcas líderes buscan formas innovadoras de conectar. Como <strong className="text-amber-500">mago para empresas en Madrid</strong>, ofrezco desde presentaciones de producto mágicas hasta entretenimiento premium para convenciones y cenas de empresa de alto nivel.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-white font-[Cinzel] text-lg uppercase tracking-tight">Cruce de Caminos: Madrid y la Sierra</h3>
                            <p className="text-sm leading-relaxed text-slate-400">
                                Mi residencia en <strong>Torrelodones</strong> me permite ser el <u>mago de confianza</u> para quienes residen en la zona noroeste pero celebran sus hitos importantes en cualquier punto de la Comunidad de Madrid. Calidad, puntualidad y excelencia técnica.
                            </p>
                        </div>
                    </div>

                    <div className="bg-amber-500/5 p-8 md:p-12 rounded-[2rem] border border-white/5 text-center">
                        <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white mb-6 uppercase tracking-widest">¿Hablamos del asombro que merece su próximo evento?</h2>
                        <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                            Cada actuación es personalizada. No busco simplemente "hacer trucos", busco entender la dinámica de su celebración para aportar el máximo valor posible a través del <strong>ilusionismo profesional</strong>. <u>La magia es el lenguaje universal del asombro</u>, déjeme hablarlo para sus invitados.
                        </p>
                        <a href="/mago-sierra-madrid" className="inline-block bg-white text-slate-950 font-bold px-10 py-4 rounded-full hover:bg-amber-500 transition-colors uppercase tracking-[0.2em] text-xs">
                            Ver Cobertura Local →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function Home() {
    const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Ángel Ruiz | Magia de Cerca en Madrid",
        "description": "Video promocional de ilusionismo profesional y magia de cerca por Ángel Ruiz.",
        "thumbnailUrl": "https://angelruiz.world/images/foto-bio.png",
        "uploadDate": "2026-04-10",
        "duration": "PT1M0S",
        "contentUrl": "https://angelruiz.world/spring.mp4"
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} 
            />
            <HomeClient seoContent={<SEOContent />} />
        </>
    );
}
