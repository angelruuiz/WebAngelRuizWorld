"use client";

export default function BusinessSchema({ rating = null }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://angelruiz.world/#organization",
    "name": "Ángel Ruiz | Mago e Ilusionista",
    "alternateName": "Ángel Ruiz Magia",
    "description": "Mago e ilusionista profesional en Madrid. Especialista en magia de cerca exclusiva para eventos corporativos, bodas de lujo y fiestas privadas.",
    "url": "https://angelruiz.world",
    "logo": "https://angelruiz.world/icon.jpg",
    "image": "https://angelruiz.world/images/foto-bio.png",
    "priceRange": "€€€",
    "telephone": "+34648055636",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zona Noroeste",
      "addressLocality": "Torrelodones",
      "addressRegion": "Comunidad de Madrid",
      "postalCode": "28250",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.5765,
      "longitude": -3.9298
    },
    "areaServed": [
      { "@type": "City", "name": "Madrid" },
      { "@type": "City", "name": "Torrelodones" },
      { "@type": "City", "name": "Las Rozas" },
      { "@type": "City", "name": "Majadahonda" },
      { "@type": "City", "name": "Pozuelo de Alarcón" },
      { "@type": "City", "name": "Aravaca" },
      { "@type": "City", "name": "Boadilla del Monte" },
      { "@type": "City", "name": "Villalba" },
      { "@type": "City", "name": "Galapagar" },
      { "@type": "City", "name": "El Escorial" }
    ],
    "sameAs": [
      "https://www.instagram.com/angellruuiz",
      "https://www.tiktok.com/@angellruuiz",
      "https://www.youtube.com/@angellruuiz",
      "https://twitter.com/angellruuizz"
    ]
  };

  if (rating) {
    schema.aggregateRating = rating;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
