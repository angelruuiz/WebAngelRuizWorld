import ClasesClient from '@/components/ClasesClient';

export const metadata = {
    title: { absolute: 'Clases de Magia 1 a 1 Online | Aprende con Ángel Ruiz' },
    description: 'Aprende cartomagia y magia de cerca en clases particulares 1 a 1 online con Ángel Ruiz. Desde la técnica base hasta montar tu show y hablar en público.',
    alternates: {
        canonical: 'https://angelruiz.world/clases',
    },
    openGraph: {
        url: 'https://angelruiz.world/clases',
        title: 'Clases de Magia 1 a 1 Online | Ángel Ruiz Mago',
        description: 'Clases particulares de cartomagia y magia de cerca 1 a 1 online. Cualquier nivel, técnica, psicología del engaño y puesta en escena.',
        images: [{ url: '/images/cartomagia-close-up-reina-corazones-angel-ruiz.webp', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Clases de Magia 1 a 1 Online | Ángel Ruiz Mago',
        description: 'Clases particulares de cartomagia y magia de cerca 1 a 1 online. Cualquier nivel, técnica, psicología del engaño y puesta en escena.',
        images: ['/images/cartomagia-close-up-reina-corazones-angel-ruiz.webp'],
    },
};

export default function ClasesPage() {
    const courseSchema = {
        "@type": "Course",
        "@id": "https://angelruiz.world/clases/#course",
        "name": "Clases de Magia y Cartomagia 1 a 1 Online",
        "description": "Formación particular individual online en cartomagia de autor, manipulación, psicología del engaño, hablar en público y montaje de espectáculos de magia.",
        "provider": {
            "@type": "Person",
            "@id": "https://angelruiz.world/#person",
            "name": "Ángel Ruiz",
            "jobTitle": "Mago e Ilusionista Profesional",
            "url": "https://angelruiz.world/sobre-mi"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "courseWorkload": "Sesiones individuales 1 a 1 personalizadas",
            "inLanguage": "es-ES"
        }
    };

    const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Clases de Magia", "item": "https://angelruiz.world/clases" }
        ]
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        courseSchema,
                        breadcrumbSchema
                    ]
                }) }} 
            />
            <ClasesClient />
        </>
    );
}
