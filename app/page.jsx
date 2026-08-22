import HomeClient, { PerpetualCard } from '@/components/HomeClient';
import Image from 'next/image';

export const metadata = {
    title: { absolute: 'Mago en Madrid | Ángel Ruiz | Ilusionista para Bodas y Empresas 2026' },
    description: 'Ángel Ruiz, mago profesional en Madrid para bodas, cenas de empresa y eventos privados. +10 años de experiencia, alumno de DaOrtiz. 42 reseñas ⭐⭐⭐⭐⭐. Solicita presupuesto sin compromiso.',
    alternates: {
        canonical: 'https://angelruiz.world',
    },
    openGraph: {
        url: 'https://angelruiz.world',
        title: 'Ángel Ruiz | Mago e Ilusionista en Madrid para Eventos y Bodas',
        description: 'Ilusionista profesional en Madrid. Especialista en magia de cerca para bodas, cenas de empresa y eventos corporativos. +10 años, 42 reseñas 5 estrellas.',
    },
};

const SEOContent = () => {
    return (
        <section className="pt-0 pb-32 px-4 md:px-8 bg-surface-0 text-gold-50 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-[1400px] mx-auto relative pt-16">
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
                    {/* Intro Section - Span 7 */}
                    <PerpetualCard className="md:col-span-7 flex flex-col justify-start">
                        <h2 className="text-white font-[Cinzel] text-2xl md:text-4xl uppercase tracking-widest text-left mb-4">Angel Ruiz | Mago e Ilusionista en Madrid</h2>
                        <p className="text-base md:text-lg opacity-80 italic text-left text-gold-100 mb-8">Referente en magia para bodas y empresas con un estilo exclusivo.</p>
                        
                        <div className="pt-8 border-t border-white/10 space-y-6">
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-amber-500 mb-2 text-left">Experiencia Certificada y Formación de Élite</p>
                            <p className="text-sm md:text-base leading-relaxed text-gold-50/90">
                                Ángel Ruiz se ha consolidado como uno de los <strong className="text-amber-400">ilusionistas más modernos de la capital</strong> y como el <strong>mago para bodas en Madrid</strong> más solicitado, formado en la prestigiosa <u>Escuela de Magia de Dani DaOrtiz</u>. Esta formación de élite se traduce en una especialización en <strong>Cartomagia Purista</strong> y un "caos controlado" que lo distancia de los magos genéricos. Como experto <strong>mago para bodas en Madrid</strong> e ilusionista de alto nivel para marcas, su enfoque se centra en la <u>magia de cerca (close-up) de alta calidad</u>, donde el milagro ocurre literalmente a escasos centímetros del espectador.
                            </p>
                            <p className="text-sm md:text-base leading-relaxed text-gold-50/90">
                                En un mercado saturado de agencias, mi propuesta ofrece la distinción de un <strong>especialista</strong>. Mi magia no solo ejecuta trucos; se trata de <strong>diseñar atmósferas de asombro inteligente</strong>. Ya sea en un cóctel de bienvenida o en una cena de gala corporativa, mi trabajo bajo el sello de la cartomagia de autor asegura que tu celebración sea recordada por su sofisticación y verdadera imposibilidad.
                            </p>
                        </div>
                    </PerpetualCard>

                    {/* Accordions - Span 5 */}
                    <PerpetualCard className="md:col-span-5 flex flex-col justify-start">
                        <div className="space-y-4 text-xs md:text-sm">
                            <details className="group border-b border-white/10 pb-4 cursor-pointer">
                                <summary className="list-none text-gold-50 font-bold flex justify-between items-center group-open:text-amber-500 transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] py-4 uppercase tracking-widest text-xs">
                                    ¿Por qué contratar un mago profesional para tu evento?
                                    <span className="text-amber-500 group-open:rotate-180 transition-transform duration-[250ms] ease-[cubic-bezier(0.23,1,0.32,1)]">↓</span>
                                </summary>
                                <div className="mt-4 text-gold-100/80 leading-relaxed space-y-4 p-6 bg-surface-1 rounded-xl border border-white/5">
                                    <p><strong>Cuanto cuesta contratar un mago</strong> en Madrid puede variar, pero contar con un <strong>mago profesional</strong> con trayectoria no es solo añadir un número de entretenimiento; es transformar radicalmente la percepción de tus invitados sobre el evento. El ilusionismo moderno sirve para:</p>
                                    <ul className="space-y-2 list-none">
                                        <li><span className="text-amber-500 mr-2">✦</span> <strong>Networking Natural:</strong> Facilitamos que personas que no se conocen comiencen a interactuar tras vivir una imposibilidad compartida.</li>
                                        <li><span className="text-amber-500 mr-2">✦</span> <strong>Eliminar tiempos muertos:</strong> La magia es ideal para cubrir transiciones en banquetes o recepciones.</li>
                                        <li><span className="text-amber-500 mr-2">✦</span> <strong>Refuerzo de Marca:</strong> En eventos de empresa, podemos integrar tu mensaje corporativo dentro de los propios efectos mágicos.</li>
                                    </ul>
                                </div>
                            </details>

                            <details open className="group border-b border-transparent pb-4 cursor-pointer text-gold-100/80 mt-4">
                                <summary className="list-none text-gold-50 font-bold flex justify-between items-center group-open:text-amber-500 transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] py-4 uppercase tracking-widest text-xs">
                                    Cobertura Sierra de Madrid y Zona Noroeste
                                    <span className="text-amber-500 group-open:rotate-180 transition-transform duration-[250ms] ease-[cubic-bezier(0.23,1,0.32,1)]">↓</span>
                                </summary>
                                <div className="mt-2 leading-relaxed space-y-4">
                                    <p>Si buscas un <strong>mago profesional en la sierra de Madrid</strong>, Angel Ruiz ofrece total disponibilidad y conocimiento de los espacios locales más exclusivos. Opero desde mi base en el noroeste, lo que garantiza una logística impecable.</p>
                                    <div className="bg-surface-1 p-6 rounded-xl border border-white/5">
                                        <p className="mb-3 text-[10px] text-amber-500 uppercase font-bold tracking-widest">Servicio Local en Municipios Clave:</p>
                                        <div className="flex flex-wrap gap-x-6 gap-y-4 text-xs uppercase font-bold text-gold-100/70">
                                            <a href="/mago-torrelodones" className="text-amber-400 hover:text-white transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] inline-block underline decoration-amber-500/30">Torrelodones</a>
                                            <a href="/mago-sierra-madrid" className="hover:text-amber-400 transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] inline-block">Sierra de Madrid</a>
                                            <a href="/mago-las-rozas" className="hover:text-amber-400 transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] inline-block">Las Rozas</a>
                                            <a href="/mago-boadilla" className="hover:text-amber-400 transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] inline-block">Boadilla del Monte</a>
                                            <a href="/mago-villalba" className="hover:text-amber-400 transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] inline-block">Collado Villalba</a>
                                            <a href="/mago-galapagar" className="hover:text-amber-400 transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] inline-block">Galapagar</a>
                                            <a href="/mago-pozuelo" className="hover:text-amber-400 transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] inline-block">Pozuelo de Alarcón</a>
                                            <a href="/mago-majadahonda" className="hover:text-amber-400 transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] inline-block">Majadahonda</a>
                                            <a href="/mago-las-matas" className="hover:text-amber-400 transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] inline-block">Las Matas</a>
                                            <a href="/mago-el-escorial" className="hover:text-amber-400 transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] inline-block">El Escorial</a>
                                        </div>
                                        <p className="mt-6 text-xs opacity-70 leading-relaxed italic border-t border-white/10 pt-6">
                                            Especialista en <strong>fincas para bodas</strong> y eventos residenciales VIP en urbanizaciones como La Finca, Somosaguas y Monterrozas.
                                        </p>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </PerpetualCard>

                    {/* Features block - Span 4 x3 */}
                    <PerpetualCard className="md:col-span-12 lg:col-span-4 flex flex-col justify-start">
                        <h2 className="text-white font-[Cinzel] text-xl uppercase tracking-tight mb-4 border-b border-white/10 pb-4">Mago para Bodas en Madrid</h2>
                        <p className="text-sm md:text-base leading-relaxed text-gold-50/80">
                            El <strong className="text-amber-500">mago para bodas en Madrid</strong> es la figura que asegura que el cóctel de bienvenida no sea "solo una espera". Mi magia de cerca rompe el hielo de forma elegante, uniendo a familias y amigos bajo un mismo sentimiento de asombro y alegría.
                        </p>
                        <a href="/particulares/bodas" className="mt-6 inline-flex items-center text-amber-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-all duration-[160ms]">
                            Ver Mago para Bodas en Madrid →
                        </a>
                    </PerpetualCard>

                    <PerpetualCard className="md:col-span-12 lg:col-span-4 flex flex-col justify-start">
                        <h3 className="text-white font-[Cinzel] text-xl uppercase tracking-tight mb-4 border-b border-white/10 pb-4">Ilusionismo para Empresas</h3>
                        <p className="text-sm md:text-base leading-relaxed text-gold-50/80">
                            Las marcas líderes buscan formas innovadoras de conectar. Como <strong className="text-amber-500">mago para empresas en Madrid</strong>, ofrezco desde presentaciones de producto mágicas hasta entretenimiento premium para convenciones y cenas de empresa de alto nivel.
                        </p>
                        <a href="/empresas" className="mt-6 inline-flex items-center text-amber-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-all duration-[160ms]">
                            Ver Mago para Empresas en Madrid →
                        </a>
                    </PerpetualCard>

                    <PerpetualCard className="md:col-span-12 lg:col-span-4 flex flex-col justify-start">
                        <h3 className="text-white font-[Cinzel] text-xl uppercase tracking-tight mb-4 border-b border-white/10 pb-4">Experto en Magia en Madrid</h3>
                        <p className="text-sm md:text-base leading-relaxed text-gold-50/80">
                            Reconocido como un <strong className="text-amber-500">experto en magia en Madrid</strong>, aporto años de experiencia y técnica refinada (Escuela DaOrtiz) en especialidades como <a href="/mago-close-up-madrid" className="text-amber-400 hover:text-white underline decoration-amber-500/30">magia de cerca</a> para garantizar el éxito de tu evento, con puntualidad y excelencia técnica en toda la Comunidad.
                        </p>
                    </PerpetualCard>

                    {/* SEO Why Trust - Span 8 */}
                    <PerpetualCard className="md:col-span-12 lg:col-span-8 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-[Cinzel] text-white mb-8 uppercase tracking-widest text-left">Por qué confiar en un Experto en Magia</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base text-gold-50/90 leading-relaxed text-justify">
                            <p>
                                En el sector de los eventos, la diferencia entre un truco aficionado y una experiencia verdaderamente inolvidable radica en la figura del <strong className="text-amber-400">experto en magia en Madrid</strong>. Mi trayectoria me permite no solo ejecutar ilusiones imposibles, sino leer al público, gestionar el ritmo del evento e interactuar con la máxima elegancia.
                            </p>
                            <p>
                                Ya sea un <a href="/particulares/bodas" className="text-amber-500 hover:underline transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] inline-block">mago para bodas en Madrid</a> que debe conectar con familias diversas, o un <a href="/empresas" className="text-amber-500 hover:underline transition-all duration-[160ms] ease-out active:scale-[0.97] active:blur-[1px] inline-block">mago para empresas en Madrid</a> que representa la imagen de tu marca, la profesionalidad está garantizada. Más de 10 años de experiencia y decenas de valoraciones de 5 estrellas avalan mi compromiso con el asombro de calidad.
                            </p>
                        </div>
                    </PerpetualCard>

                    {/* CTA - Span 4 */}
                    <PerpetualCard className="md:col-span-12 lg:col-span-4 flex flex-col justify-between items-start text-left !bg-amber-500/10 border-amber-500/20 shadow-[inset_0_1px_0_rgba(255,191,0,0.1)]">
                        <div>
                            <h2 className="text-2xl font-[Cinzel] text-white mb-6 uppercase tracking-widest">¿Hablamos del asombro que merece tu próximo evento?</h2>
                            <p className="text-sm md:text-base text-gold-50/90 leading-relaxed mb-8">
                                Cada actuación es personalizada. No busco simplemente "hacer trucos", busco entender la dinámica de tu celebración para aportar el máximo valor posible a través del <strong>ilusionismo profesional</strong>. <u>La magia es el lenguaje universal del asombro</u>, déjame hablarlo para tus invitados. Si quieres consultar tarifas, visita la sección para <a href="/contratar-mago-madrid" className="text-amber-500 hover:underline font-bold">contratar mago Madrid</a>.
                            </p>
                        </div>
                        <a href="/mago-sierra-madrid" className="group inline-block bg-white text-surface-0 font-bold px-8 py-4 rounded-full hover:bg-amber-500 hover:scale-[1.02] active:scale-[0.97] transition-all duration-[160ms] ease-out uppercase tracking-[0.2em] text-xs">
                            <span className="block group-active:blur-[2px] transition-[filter] duration-200">Ver Cobertura Local →</span>
                        </a>
                    </PerpetualCard>
                    
                    {/* Marquee Especialidades - Span 12 full width */}
                    <PerpetualCard className="md:col-span-12 !p-0 mt-8">
                        <div className="py-8 overflow-hidden bg-surface-1/50 border-b border-white/5">
                            <h2 className="text-center font-bold text-amber-500 uppercase tracking-[0.5em] text-[10px] md:text-xs mb-8 animate-pulse">Especialidades de Ilusionismo Premium</h2>
                            <div className="relative flex overflow-hidden">
                                <div className="flex gap-x-12 whitespace-nowrap animate-marquee">
                                    <div className="flex gap-x-12 text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-amber-400">
                                        <span>Angel Ruiz Madrid</span>
                                        <span>Mago para Bodas</span>
                                        <span>Mago para Empresas</span>
                                        <span>Ilusionismo de Gala</span>
                                        <span>Magia para Cóctel</span>
                                        <span>Espectáculos VIP Madrid</span>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--surface-0)] to-transparent z-10 pointer-events-none" />
                                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--surface-0)] to-transparent z-10 pointer-events-none" />
                            </div>
                        </div>
                        
                        <div className="py-12 overflow-hidden">
                            <p className="text-xs text-center uppercase tracking-[0.2em] font-bold text-gold-200/60 mb-12">Empresas e instituciones que confían en mi ilusionismo corporativo</p>
                            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-marquee">
                                    {[
                                        { src: '/images/logo-movistar.webp', alt: 'Movistar Estudiantes' },
                                        { src: '/images/logo-escombrera.webp', alt: 'Peña La Escombrera' },
                                        { src: '/images/logo-gondomar.webp', alt: 'Colegio Gondomar' },
                                        { src: '/images/logo-senescal.webp', alt: 'Catering Senescal' },
                                        { src: '/images/logo-alcampo.webp', alt: 'Alcampo' },
                                        { src: '/images/logo-ahorramas.webp', alt: 'Ahorramás' },
                                        { src: '/images/logos/logo-badulaque.jpeg', alt: 'Badulaque' },
                                        { src: '/images/logos/logo-zeppelin.png', alt: 'Zeppelin' },
                                        { src: '/images/logos/nngg-torrelodones.jpeg', alt: 'NNGG Torrelodones' },
                                        { src: '/images/logo-movistar.webp', alt: 'Movistar Estudiantes' },
                                        { src: '/images/logo-escombrera.webp', alt: 'Peña La Escombrera' },
                                        { src: '/images/logo-gondomar.webp', alt: 'Colegio Gondomar' },
                                        { src: '/images/logo-senescal.webp', alt: 'Catering Senescal' },
                                        { src: '/images/logo-alcampo.webp', alt: 'Alcampo' },
                                        { src: '/images/logo-ahorramas.webp', alt: 'Ahorramás' },
                                        { src: '/images/logos/logo-badulaque.jpeg', alt: 'Badulaque' },
                                        { src: '/images/logos/logo-zeppelin.png', alt: 'Zeppelin' },
                                        { src: '/images/logos/nngg-torrelodones.jpeg', alt: 'NNGG Torrelodones' }
                                    ].map((logo, idx) => (
                                        <li key={idx} className="relative w-32 h-14 mx-12">
                                            <Image src={logo.src} alt={logo.alt} fill sizes="128px" className="object-contain filter brightness-110 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100" />
                                        </li>
                                    ))}
                                </ul>
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-marquee" aria-hidden="true">
                                    {[
                                        { src: '/images/logo-movistar.webp', alt: 'Movistar Estudiantes' },
                                        { src: '/images/logo-escombrera.webp', alt: 'Peña La Escombrera' },
                                        { src: '/images/logo-gondomar.webp', alt: 'Colegio Gondomar' },
                                        { src: '/images/logo-senescal.webp', alt: 'Catering Senescal' },
                                        { src: '/images/logo-alcampo.webp', alt: 'Alcampo' },
                                        { src: '/images/logo-ahorramas.webp', alt: 'Ahorramás' },
                                        { src: '/images/logos/logo-badulaque.jpeg', alt: 'Badulaque' },
                                        { src: '/images/logos/logo-zeppelin.png', alt: 'Zeppelin' },
                                        { src: '/images/logos/nngg-torrelodones.jpeg', alt: 'NNGG Torrelodones' },
                                        { src: '/images/logo-movistar.webp', alt: 'Movistar Estudiantes' },
                                        { src: '/images/logo-escombrera.webp', alt: 'Peña La Escombrera' },
                                        { src: '/images/logo-gondomar.webp', alt: 'Colegio Gondomar' },
                                        { src: '/images/logo-senescal.webp', alt: 'Catering Senescal' },
                                        { src: '/images/logo-alcampo.webp', alt: 'Alcampo' },
                                        { src: '/images/logo-ahorramas.webp', alt: 'Ahorramás' },
                                        { src: '/images/logos/logo-badulaque.jpeg', alt: 'Badulaque' },
                                        { src: '/images/logos/logo-zeppelin.png', alt: 'Zeppelin' },
                                        { src: '/images/logos/nngg-torrelodones.jpeg', alt: 'NNGG Torrelodones' }
                                    ].map((logo, idx) => (
                                        <li key={`copy-${idx}`} className="relative w-32 h-14 mx-12">
                                            <Image src={logo.src} alt={logo.alt} fill sizes="128px" className="object-contain filter brightness-110 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </PerpetualCard>

                </div>
            </div>
        </section>
    );
};






export default function Home() {
    const videoSchema = {
        "@type": "VideoObject",
        "name": "Ángel Ruiz | Magia de Cerca en Madrid",
        "description": "Video promocional de ilusionismo profesional y magia de cerca por Ángel Ruiz.",
        "thumbnailUrl": "https://angelruiz.world/images/foto-bio.webp",
        "uploadDate": "2026-04-10T10:00:00+02:00",
        "duration": "PT1M0S",
        "contentUrl": "https://angelruiz.world/spring.mp4"
    };

    const ratingSchema = {
        "@type": "ProfessionalService",
        "name": "Ángel Ruiz | Mago e Ilusionista",
        "url": "https://angelruiz.world",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "42"
        }
    };

    return (
        <>
            {/* Unificamos TODO en un solo bloque @graph para que Google no pueda ver duplicados */}
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [

                        {
                            "@type": "VideoObject",
                            ...videoSchema
                        },
                        {
                            "@type": "ProfessionalService",
                            "@id": "https://angelruiz.world/#organization",
                            "name": "Ángel Ruiz | Mago e Ilusionista",
                            "url": "https://angelruiz.world",
                            "telephone": "+34648055636",
                            "email": "info@angelruiz.world",
                            "description": "Mago e ilusionista profesional en Madrid. Especialista en magia de cerca para bodas, eventos corporativos y celebraciones privadas.",
                            "areaServed": ["Madrid", "Torrelodones", "Las Rozas", "Majadahonda", "Pozuelo de Alarcón", "Boadilla del Monte", "Galapagar", "Collado Villalba", "El Escorial", "Las Matas", "Alcobendas", "Alcorcón", "Leganés", "Getafe", "Móstoles"],
                            "aggregateRating": ratingSchema.aggregateRating,
                            "review": [
                                {
                                    "@type": "Review",
                                    "author": { "@type": "Person", "name": "Jorge García-Alba" },
                                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                                    "reviewBody": "He tenido la suerte de ver a muchos magos, pero lo que hace este es simplemente otro nivel. Cada truco está cuidado al detalle, la conexión con el público es brutal. Sin duda el mejor mago que puedes ver en Madrid."
                                },
                                {
                                    "@type": "Review",
                                    "author": { "@type": "Person", "name": "Alejandra Alcalá Pereira" },
                                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                                    "reviewBody": "El mejor mago que se haya visto en mucho tiempo, muy amable, divertidísimo y súper profesional. Os lo recomiendo para cualquier evento que tengáis."
                                }
                            ],
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Zona Noroeste",
                                "addressLocality": "Torrelodones",
                                "addressRegion": "Comunidad de Madrid",
                                "postalCode": "28250",
                                "addressCountry": "ES"
                            },
                            "sameAs": [
                                "https://instagram.com/angellruuiz",
                                "https://tiktok.com/@angellruuiz",
                                "https://youtube.com/@angellruuiz",
                                "https://facebook.com/angellruuiz"
                            ]
                        },
                        {
                            "@type": "Person",
                            "@id": "https://angelruiz.world/#person",
                            "name": "Ángel Ruiz",
                            "jobTitle": "Mago e Ilusionista Profesional",
                            "description": "Ilusionista profesional en Madrid especializado en magia de cerca, mentalismo y cartomagia de autor. Formado en la Escuela de Dani DaOrtiz.",
                            "alumniOf": {
                                "@type": "EducationalOrganization",
                                "name": "Escuela de Magia Dani DaOrtiz"
                            },
                            "worksFor": { "@id": "https://angelruiz.world/#organization" }
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "¿Por qué contratar un mago profesional para tu evento?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Contratar un mago profesional con trayectoria no es solo añadir un número de entretenimiento; es transformar radicalmente la percepción de tus invitados sobre el evento. El ilusionismo moderno sirve para: Networking Natural, Eliminar tiempos muertos, y Refuerzo de Marca."
                                    }
                                }
                            ]
                        }
                    ]
                }) }} 
            />
            <HomeClient seoContent={<SEOContent />} />
        </>
    );
}

