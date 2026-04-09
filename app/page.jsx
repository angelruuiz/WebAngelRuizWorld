import HomeClient from '@/components/HomeClient';
import { motion } from 'framer-motion';

export const metadata = {
    title: 'Angel Ruiz | Mago en Torrelodones e Ilusionista en Madrid',
    description: 'Ilusionista experto en Magia de Cerca en Madrid y Torrelodones. Especialista en Bodas, Eventos Corporativos y Fiestas VIP en Las Rozas y Majadahonda. Más de 10 años de experiencia.',
    alternates: {
        canonical: '/',
    },
};

const SEOContent = () => {
    return (
        <section className="pt-0 pb-16 px-6 bg-slate-950 text-slate-400 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto relative">
                <div className="pt-8 overflow-hidden">
                    <h2 className="text-center font-bold text-amber-500 uppercase tracking-[0.5em] text-[10px] md:text-xs mb-8 animate-pulse">Especialidades de Ilusionismo Premium</h2>
                    {/* Marquee optimization: Text is now directly in HTML for SEO */}
                    <div className="relative flex overflow-hidden py-4 border-y border-amber-500/10">
                        <div className="flex gap-x-12 whitespace-nowrap animate-marquee">
                            <div className="flex gap-x-12 text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-amber-400">
                                <span>Mago de Cerca Madrid</span>
                                <span>Mentalismo Profesional</span>
                                <span>Magia para Bodas</span>
                                <span>Eventos de Empresa</span>
                                <span>Ilusionismo de Gala</span>
                                <span>Magia para Cóctel</span>
                                <span>Mago para Congresos</span>
                                <span>Espectáculos VIP Madrid</span>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/5 pt-8">
                    <div className="space-y-4 text-justify">
                        <h2 className="text-white font-[Cinzel] text-lg md:text-xl uppercase tracking-widest text-left">Mago e Ilusionista en Madrid</h2>
                        <p className="text-xs opacity-60 italic text-left">Referente del ilusionismo exclusivo para eventos inolvidables.</p>
                        <div className="pt-6 border-t border-white/5">
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500 mb-2 text-left">Experiencia Certificada</p>
                            <p className="text-xs leading-relaxed text-slate-500">
                                Angel Ruiz se ha consolidado como uno de los ilusionistas más modernos de la capital, fusionando elegancia y caos en cada evento. Como <strong>mago para bodas en Madrid</strong> e ilusionista corporativo, su enfoque se centra en la <strong>magia de cerca</strong> (close-up), donde el milagro ocurre a escasos centímetros del espectador.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4 text-xs">
                        <details className="group border-b border-white/5 pb-2 cursor-pointer">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors py-2 uppercase tracking-widest text-[10px]">
                                ¿Por qué contratar un mago profesional?
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-2 text-slate-400 leading-relaxed space-y-2">
                                <p>Contratar un mago en Madrid no es solo añadir un número de entretenimiento; es transformar la atmósfera de un evento. Se crea un vínculo emocional único a través de la magia de cerca, ideal para romper el hielo en cócteles y cenas.</p>
                                <p>Angel Ruiz combina elegancia clásica con dinamismo moderno, asegurando que los invitados vivan momentos imposibles directamente en sus manos.</p>
                            </div>
                        </details>

                        <details className="group border-b border-white/5 pb-2 cursor-pointer text-slate-400">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors py-2 uppercase tracking-widest text-[10px]">
                                Magia especializada para Bodas
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-2 leading-relaxed space-y-2">
                                <p>En el sector nupcial, la figura del <strong>mago para bodas en Madrid</strong> es esencial para cubrir los tiempos de espera, como el cóctel de bienvenida o el banquete.</p>
                                <p>La magia itinerante permite que familiares y amigos que no se conocen conecten instantáneamente a través del asombro, haciendo que tu boda sea recordada durante años.</p>
                            </div>
                        </details>

                        <details className="group border-b border-white/5 pb-2 cursor-pointer text-slate-400">
                            <summary className="list-none text-slate-200 font-bold flex justify-between items-center group-open:text-amber-500 transition-colors py-2 uppercase tracking-widest text-[10px]">
                                Cobertura en Torrelodones y Zona Noroeste
                                <span className="text-amber-500 group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <div className="mt-2 leading-relaxed space-y-2">
                                <p>Si buscas un <strong>mago profesional en Torrelodones y el norte de Madrid</strong>, Angel Ruiz ofrece total disponibilidad en la zona noroeste. Especializado en <strong>eventos Madrid</strong> de alto standing, su servicio de ilusionismo se desplaza habitualmente a localidades cercanas.</p>
                                <p>Disponible para actuaciones y eventos privados en <strong>Las Rozas, Majadahonda, El Escorial, Galapagar, Pozuelo de Alarcón y Boadilla del Monte</strong>. La cercanía permite ofrecer soluciones de <strong>mago de cerca Madrid</strong> con mayor flexibilidad horaria para cenas privadas, comuniones y fiestas exclusivas en estas zonas residenciales.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function Home() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Ángel Ruiz | Mago e Ilusionista",
        "url": "https://angelruiz.world",
        "logo": "https://angelruiz.world/images/foto-bio.png",
        "image": "https://angelruiz.world/images/foto-bio.png",
        "description": "Ilusionista profesional especializado en Magia de Cerca y Magia de Cóctel en Madrid y Torrelodones.",
        "telephone": "+34648055636",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madrid",
            "addressRegion": "Madrid",
            "addressCountry": "ES"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.4168",
            "longitude": "-3.7038"
        },
        "sameAs": [
            "https://www.instagram.com/angelruizmagia/",
            "https://www.facebook.com/angelruizmagia/"
        ]
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
            />
            <HomeClient seoContent={<SEOContent />} />
        </>
    );
}
