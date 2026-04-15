import ValoracionesClient from '@/components/ValoracionesClient';

export const metadata = {
    title: 'Opiniones sobre Ángel Ruiz, Mago de Madrid · Reseñas reales de clientes',
    description: 'Lee las reseñas de quienes ya han contratado a Ángel Ruiz como mago en Madrid. Bodas, empresas y eventos privados. Descubre por qué repiten.',
    alternates: {
        canonical: '/valoraciones',
    },
};

export default function ValoracionesPage() {
    const reviewsData = [
        { text: "Contratamos a Ángel Ruiz para dinamizar un congreso corporativo de Movistar Estudiantes y la experiencia fue sencillamente transformadora. Su capacidad para integrar mensajes de equipo en sus efectos de magia de cerca es única. Un profesional impecable que entiende el protocolo empresarial a la perfección.", author: "Movistar Estudiantes" },
        { text: "Buscábamos algo diferente para el cóctel de nuestra boda en Madrid y Ángel fue la mejor decisión que pudimos tomar. La cara de asombro de nuestros invitados al ver la cartomagia a centímetros de sus manos no tenía precio. Elegante, puntual y un artista de los pies a la cabeza.", author: "Sofía y David" },
        { text: "Ángel transformó la comunión de nuestro hijo en un evento inolvidable tanto para niños como para adultos. Tiene un don especial para manejar al público y crear una atmósfera de misterio y diversión sin igual. El mejor mago de la sierra de Madrid sin duda.", author: "Familia de Marcos" },
        { text: "Como vecino de Torrelodones, ver a Ángel actuar en la inauguración de nuestra peña fue un orgullo. Su show de magia de salón es potente, dinámico y deja a todo el mundo con la boca abierta. Recomendado al 100% para cualquier evento local.", author: "Peña 'La Escombrera' (Torrelodones)" },
        { text: "Un espectáculo de ilusionismo moderno y sofisticado. Contraté sus servicios para mi fiesta de 50 aniversario y su magia de cerca fue el tema de conversación principal durante toda la noche. Un nivel técnico que rara vez se ve fuera de televisión.", author: "Ana P. (Madrid Noroeste)" },
        { text: "Organizar una cena de empresa para 50 directivos es un reto, pero Ángel lo hizo fácil. Su mentalismo y su trato exquisito elevaron la calidad del evento a otro nivel. Es mucho más que un mago; es un generador de experiencias memorables.", author: "Carlos M. (Director Eventos)" },
        { text: "Increíble cómo maneja la atención de todos. En nuestra cena privada en una finca de Pozuelo, Ángel Ruiz nos demostró por qué es un referente de la cartomagia española. Los juegos de cartas que realiza son sencillamente imposibles de explicar.", author: "Patricia Ruiz" },
        { text: "Elegancia, humor inteligente e impactos visuales brutales. Buscábamos un mago para empresas en Madrid y Ángel superó nuestras expectativas con un dossier personalizado y una ejecución técnica perfecta en el stand de IFEMA.", author: "Miguel Jiménez (Marketing Manager)" },
        { text: "Lo que más nos gustó de Ángel Ruiz fue su profesionalidad desde el primer contacto. Nos asesoró sobre el mejor momento para los shows en nuestra boda y el resultado fue un éxito rotundo. Un mago para bodas en Madrid de 10.", author: "Laura García y Jorge" },
        { text: "He visto a muchos ilusionistas, pero la limpieza de técnica de Ángel con las cartas es asombrosa. Sigue la escuela de los grandes y se nota en la fluidez de su magia. Ideal para eventos VIP donde se busca la máxima calidad.", author: "Sergio Blanco (Productor)" },
        { text: "Un show dinámico que mantuvo a toda la familia enganchada. Su capacidad para hacer participar a la gente de forma respetuosa y divertida es fantástica. Repetiremos sin duda en el próximo aniversario familiar.", author: "Carmen Martínez" },
        { text: "Si buscas asombre de calidad para tu empresa en Boadilla o Majadahonda, Ángel es la elección segura. Sus efectos de mentalismo y lectura de pensamiento dejaron a todo el equipo fascinado. Un profesional excepcional.", author: "Javier Soler" }
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Ángel Ruiz | Mago e Ilusionista",
        "@id": "https://angelruiz.world",
        "image": "https://angelruiz.world/images/foto-bio.png",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "bestRating": "5",
            "ratingCount": "20"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Valoraciones", "item": "https://angelruiz.world/valoraciones" }
        ]
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
            />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
            />
            
            <div className="bg-slate-950 pt-32 pb-8 px-6 text-center relative z-10">
                <div className="max-w-4xl mx-auto space-y-8 bg-white/5 p-10 rounded-[2.5rem] border border-white/5">
                    <h2 className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs">Calidad y Confianza Garantizada</h2>
                    <h3 className="text-white font-[Cinzel] text-3xl md:text-4xl uppercase px-4 leading-relaxed">¿Por qué confiar en la magia de <strong className="text-amber-400">Ángel Ruiz</strong>?</h3>
                    <div className="text-slate-400 text-sm md:text-base leading-relaxed text-justify space-y-4 font-light italic">
                        <p>
                            Las valoraciones de mis clientes no son solo palabras; son la base de mi <strong>reputación profesional como ilusionista</strong>. En cada evento en Madrid y la zona de la sierra, mi prioridad es la búsqueda de la <u>excelencia técnica y la satisfacción total del cliente</u>. Entiendo que un evento es un hito irrepetible, y por ello mi compromiso es con la puntualidad, la elegancia en el trato y, sobre todo, la entrega de un asombro de primer nivel.
                        </p>
                        <p>
                            Contar con más de <strong className="text-white">20 valoraciones de 5 estrellas</strong> en plataformas independientes avala mi trayectoria como <strong>mago para empresas</strong> y bodas. Aquí puedes explorar testimonios detallados que reflejan la autenticidad de mi propuesta y la garantía de éxito para tu próxima celebración privada o corporativa.
                        </p>
                    </div>
                </div>
            </div>

            <ValoracionesClient reviewsData={reviewsData} />
        </>
    );
}
