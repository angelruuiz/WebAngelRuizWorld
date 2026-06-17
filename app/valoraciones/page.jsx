import ValoracionesClient from '@/components/ValoracionesClient';

export const metadata = {
    title: { absolute: 'Opiniones y Reseñas | Ángel Ruiz, Mago en Madrid' },
    description: 'Descubre por qué Ángel Ruiz es el mago mejor valorado en Madrid. 42 reseñas verificadas de 5 estrellas en eventos, bodas y empresas. Lee testimonios reales.',
    alternates: {
        canonical: 'https://angelruiz.world/valoraciones',
    },
    openGraph: {
        url: 'https://angelruiz.world/valoraciones',
        title: 'Opiniones y Reseñas | Ángel Ruiz, Mago en Madrid',
        description: '42 reseñas verificadas de 5 estrellas. Lee las opiniones reales de clientes que contrataron a Ángel Ruiz como mago para bodas, empresas y eventos en Madrid.',
    },
    twitter: {
        card: 'summary',
        title: 'Opiniones y Reseñas | Ángel Ruiz, Mago en Madrid',
        description: 'Descubre por qué Ángel Ruiz es el mago mejor valorado en Madrid. Lee testimonios reales.',
    },
};

export default function ValoracionesPage() {
    const reviewsData = [
        { text: "He tenido la suerte de ver a muchos magos, pero lo que hace este es simplemente otro nivel. No es solo la técnica que es impecable, es la forma en la que conecta contigo desde el primer minuto. Cada truco está cuidado al detalle, pero lo realmente impresionante es cómo consigue que te olvides de que estás viendo magia... hasta que te deja completamente descolocado. Si buscas una experiencia diferente, de esas que recuerdas y comentas después, este es sin duda el mejor mago que puedes ver ahora mismo. Brutal.", author: "Jorge García-Alba" },
        { text: "El mejor mago que se haya visto en mucho tiempo, muy amable, divertidisimo y super profesional. Os lo recomiendo para cualquier evento que tengáis.", author: "Alejandra Alcalá Pereira" },
        { text: "Una pasada. Un chico con muchísimo talento y muy divertido. Me dejó boquiabierto durante todo el show. Tiene un carisma arrollador y se nota que disfruta cada segundo en escena.", author: "Rafael Montero Martín" },
        { text: "El trato de ángel fue espectacular , se nota que le encanta lo que hace y es un gran profesional de ello , esperando la ocasión para volver a contactar con él", author: "ivan GT" },
        { text: "Contraté a Ángel para un evento y la verdad es que nos encantó. Desde el primer momento estuvo súper cercano con la gente y creó un ambiente muy divertido. Los trucos nos dejaron con la boca abierta y todavía seguimos hablando de alguno de ellos. Además, se nota que le gusta lo que hace y eso se transmite muchísimo. Sin duda, repetiríamos con él.", author: "Marcos Hernández Piñero" },
        { text: "Uno de los mejores magos, espectacular, y su simpatía lo mejor, gracias por entretenernos tan bien y dejarnos con la boca abierta.", author: "Marisol Bravo Flores" },
        { text: "Es un crack!! Le encanta lo que hace. En uno de sus trucos me tocó 'ayudar' y mas bien, permítanme la expresión: 'me la metió doblada'. Fue una autentica pasada! Pronto volveré a verle.", author: "Juan Manuel Fernandez" },
        { text: "Una experiencia única e increíble. Angel es cercano, habla con el público como si lo conociera de toda la vida y siempre tiene alguna broma preparada. Vamos, que no solo hace magia (no fuimos capaces de pillarle ni uno) también hace que te lo pases genial. REPETIRÍA SIN DUDA ALGUNA. Un gran profesional.", author: "María Fernandez Rodríguez" },
        { text: "Contamos con la compañía de Ángel en la inauguración de la Peña y la verdad que fue una pasada. Transmite que lo que hace le apasiona y por eso se le ve tan tranquilo haciendo los trucos que nos dejaron boquiabiertos. Además, interactúa mucho con el publico, así que eso hace que los espectadores flipen mucho mas. Volveremos a llamarle sin ninguna duda!!!", author: "Peña La Escombrera" },
        { text: "Nos encantó su actuación en Las Rozas , a nuestro parecer el mejor mago emergente de Madrid, su habilidad es impresionante!! No dudamos de que lo recomendaremos a nuestros amigos!", author: "Daniel Martín-Delgado" }
    ];



    const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Valoraciones", "item": "https://angelruiz.world/valoraciones" }
        ]
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
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": breadcrumbSchema.itemListElement
                        },
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
                                "ratingCount": "42"
                            },
                            "review": reviewsData.map(r => ({
                                "@type": "Review",
                                "reviewBody": r.text,
                                "author": {
                                    "@type": "Person",
                                    "name": r.author
                                },
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "5"
                                }
                            }))
                        }
                    ]
                }) }} 
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
                            Contar con más de <strong className="text-white">42 valoraciones de 5 estrellas</strong> en plataformas independientes avala mi trayectoria como <strong>mago para empresas</strong> y bodas. Aquí puedes explorar testimonios detallados que reflejan la autenticidad de mi propuesta y la garantía de éxito para tu próxima celebración privada o corporativa.
                        </p>
                    </div>
                </div>
            </div>

            <ValoracionesClient reviewsData={reviewsData} />
        </>
    );
}

