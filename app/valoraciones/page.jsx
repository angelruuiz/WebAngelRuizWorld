import ValoracionesClient from '@/components/ValoracionesClient';

export const metadata = {
    title: { absolute: 'Opiniones y Reseñas | Ángel Ruiz, Mago en Madrid' },
    description: '32 reseñas verificadas de 5 estrellas. Lee las opiniones reales de clientes que contrataron a Ángel Ruiz como mago para bodas, empresas y eventos en Madrid.',
    alternates: {
        canonical: 'https://angelruiz.world/valoraciones',
    },
    openGraph: {
        url: 'https://angelruiz.world/valoraciones',
    },
};

export default function ValoracionesPage() {
    const reviewsData = [
        { text: "Contamos con Ángel para el campamento de verano de Movistar Estudiantes y fue un acierto absoluto. Se encargó de impartir talleres prácticos para enseñar magia a los alumnos y de realizar varios shows. Conectó de inmediato con los chavales, manteniéndolos súper concentrados y divirtiéndose un montón. Gran profesional.", author: "Movistar Estudiantes" },
        { text: "Buscábamos a alguien para el cóctel de nuestra boda y Ángel fue la mejor elección. Se mezclaba entre los grupos y la gente alucinaba. A mi suegra le hizo desaparecer un anillo que acabó dentro de una nuez cerrada. Aún hoy nuestros amigos nos preguntan por él.", author: "Sofía y David" },
        { text: "Vino a la comunión de Marcos. Yo pensaba que los niños iban a estar entretenidos, pero es que los adultos estábamos igual de flipados. Hizo un juego en nuestra mesa con unas cartas que firmamos y nos dejó sin palabras. Un mago que vale tanto para niños como para mayores.", author: "Familia de Marcos" },
        { text: "Estuvo en la inauguración de nuestra peña en Torrelodones. Nos dejó a todos locos. Cogió una baraja que teníamos nosotros, la mezcló un socio y sacó los cuatro ases de la nada. Es un lujo tener este nivel de magia en el pueblo.", author: "Peña 'La Escombrera' (Torrelodones)" },
        { text: "Para mi 50 cumpleaños organicé una cena en casa y Ángel fue la sorpresa. Estuvo pasando por los grupos en el jardín y en un momento dado hizo que una moneda firmada apareciera dentro de una lata de refresco cerrada. Todo el mundo me felicitó por llevarlo.", author: "Ana P. (Madrid Noroeste)" },
        { text: "Teníamos una cena con 50 directivos y necesitábamos romper el hielo. Ángel empezó con magia de cerca y acabó haciendo un número de mentalismo donde acertó la palabra que estaba pensando el CEO. Se nota que sabe moverse en eventos de empresa. Discreto, puntual y muy bueno.", author: "Carlos M. (Director Eventos)" },
        { text: "Vino a una cena privada que hicimos en una finca de Pozuelo. Mientras cenábamos, se acercaba a las mesas. A mi marido le hizo elegir una carta con la mente y la sacó del bolsillo de la chaqueta de otro invitado. Es de esos profesionales que no necesitan escenario para impresionarte.", author: "Patricia Ruiz" },
        { text: "Le contratamos para dinamizar nuestro stand en IFEMA. No solo hizo magia, sino que integró nuestro producto en los trucos. Consiguió que la gente se parara y nos dio pie a iniciar la venta. Un juego con tarjetas de visita hizo que mucha gente nos grabara. 100% recomendable para ferias.", author: "Miguel Jiménez (Marketing Manager)" },
        { text: "Se encargó de la magia en el cóctel de nuestra boda. Desde el principio nos aconsejó súper bien sobre los tiempos. Lo mejor fue ver a mis tíos, que son súper escépticos, persiguiéndole para que les hiciera más trucos. Eso no tiene precio.", author: "Laura García y Jorge" },
        { text: "He trabajado con muchos magos, pero la limpieza que tiene Ángel con las cartas es brutal. En un evento VIP de la productora, logró que cuatro personas eligieran una carta y todas aparecieron dentro de una cartera que llevaba yo. Su técnica es espectacular.", author: "Sergio Blanco (Productor)" },
        { text: "Para nuestro aniversario queríamos algo especial. Ángel consiguió que participáramos todos, incluso los más tímidos de la familia. Hizo un juego precioso con una foto antigua de mis abuelos que nos dejó emocionados. Fue un detalle que no olvidaremos.", author: "Carmen Martínez" },
        { text: "Vino a la convención anual en Boadilla. Nos hizo un número donde adivinó el destino de las próximas vacaciones del director comercial, que nadie sabía. Fue el tema de conversación del equipo durante semanas. Si tienes una empresa por la zona, ni lo dudes.", author: "Javier Soler" }
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
            "ratingCount": "32"
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
                            "image": "https://angelruiz.world/images/foto-bio.png",
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
                                "ratingCount": "32"
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
                            Contar con más de <strong className="text-white">31 valoraciones de 5 estrellas</strong> en plataformas independientes avala mi trayectoria como <strong>mago para empresas</strong> y bodas. Aquí puedes explorar testimonios detallados que reflejan la autenticidad de mi propuesta y la garantía de éxito para tu próxima celebración privada o corporativa.
                        </p>
                    </div>
                </div>
            </div>

            <ValoracionesClient reviewsData={reviewsData} />
        </>
    );
}

