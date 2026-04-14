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
        { text: "Contratamos a Ángel para dirigir un taller de magia para nuestro campus y la experiencia superó todas las expectativas.", author: "Movistar Estudiantes" },
        { text: "Contratamos a Ángel para nuestra boda y fue la clave para que el cóctel fuera espectacular. La magia de cerca que hace es de otro nivel.", author: "Sofía y David" },
        { text: "Ángel transformó la comunión de nuestro sobrino en algo verdaderamente excepcional.", author: "Comunión de Marcos" },
        { text: "Ángel fue el que inauguró nuestra peña, ¡y lo hizo a lo grande! Nos dejó a todos clavados en el asiento.", author: "Peña 'La Escombrera' (Torrelodones)" },
        { text: "Un espectáculo de magia de salón impecable para la fiesta de cumpleaños.", author: "Ana P." },
        { text: "Una experiencia absolutamente mágica. Hizo que nuestra cena de empresa se convirtiera en un evento único.", author: "Carlos M." },
        { text: "Buscábamos el mejor mago para bodas en Madrid y Ángel fue todo un acierto. Su magia de cóctel dejó a todos los invitados fascinados.", author: "Laura García" },
        { text: "Como ilusionista para eventos corporativos es brillante. Capacidad única para integrar nuestra marca en sus efectos de mentalismo.", author: "Miguel Jiménez" },
        { text: "La mejor magia de cerca profesional que he visto. Ideal para cenas privadas donde quieres sorprender a clientes VIP.", author: "Patricia Ruiz" },
        { text: "Un show de magia para comuniones y cumpleaños que divierte tanto a niños como a adultos. Muy recomendado.", author: "Javier Soler" },
        { text: "Es el mejor mago ilusionista de Madrid que hemos contratado. Elegancia, humor y una técnica impecable en cada juego.", author: "Carmen Martínez" },
        { text: "Si buscas magia elegante para eventos de alto standing, Ángel es el profesional adecuado. Impresionante su control de la atención.", author: "Sergio Blanco" }
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ángel Ruiz",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "bestRating": "5",
            "ratingCount": "24"
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
            <ValoracionesClient reviewsData={reviewsData} />
        </>
    );
}
