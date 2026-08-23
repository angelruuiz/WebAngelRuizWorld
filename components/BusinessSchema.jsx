

export default function BusinessSchema({ rating = null }) {
  const business = {
    "@type": "ProfessionalService",
    "@id": "https://angelruiz.world/#organization",
    "name": "Ángel Ruiz | Mago e Ilusionista",
    "alternateName": "Ángel Ruiz Magia",
    "description": "Mago e ilusionista profesional en Madrid. Especialista en magia de cerca exclusiva para eventos corporativos, bodas de lujo y fiestas privadas.",
    "url": "https://angelruiz.world",
    "logo": "https://angelruiz.world/icon.webp",
    "image": "https://angelruiz.world/images/foto-bio.webp",
    "priceRange": "400€ - 900€",
    "telephone": "+34648055636",
    "founder": { "@id": "https://angelruiz.world/#person" },
    "slogan": "Magia de cerca de alto impacto para eventos en Madrid",
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
      { "@type": "City", "name": "Collado Villalba" },
      { "@type": "City", "name": "Galapagar" },
      { "@type": "City", "name": "El Escorial" },
      { "@type": "City", "name": "Alcobendas" },
      { "@type": "City", "name": "Alcorcón" },
      { "@type": "City", "name": "Leganés" },
      { "@type": "City", "name": "Móstoles" },
      { "@type": "City", "name": "Getafe" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Espectáculos de magia en Madrid",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Mago para bodas en Madrid", "url": "https://angelruiz.world/particulares/bodas" },
          "priceSpecification": { "@type": "PriceSpecification", "minPrice": 400, "maxPrice": 900, "priceCurrency": "EUR" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Mago para eventos de empresa en Madrid", "url": "https://angelruiz.world/empresas" },
          "priceSpecification": { "@type": "PriceSpecification", "minPrice": 600, "priceCurrency": "EUR" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Mago Conferenciante para Empresas en Madrid", "url": "https://angelruiz.world/empresas/mago-conferenciante-madrid" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Magia para team building", "url": "https://angelruiz.world/empresas/mago-team-building-madrid" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Mago para ferias y congresos (IFEMA)", "url": "https://angelruiz.world/empresas/mago-ferias-congresos-madrid" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Magia para restaurantes (table hopping)", "url": "https://angelruiz.world/empresas/mago-para-restaurantes-madrid" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Mago para comuniones, cumpleaños y fiestas privadas", "url": "https://angelruiz.world/particulares" },
          "priceSpecification": { "@type": "PriceSpecification", "minPrice": 400, "maxPrice": 900, "priceCurrency": "EUR" }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/angellruuiz",
      "https://www.tiktok.com/@angellruuiz",
      "https://www.youtube.com/@angellruuiz",
      "https://twitter.com/angellruuizz"
    ],
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
        "reviewBody": "El mejor mago que se haya visto en mucho tiempo, muy amable, divertidísimo y súper profesional. 100% recomendado para bodas y empresas."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Marcos Hernández Piñero" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Contraté a Ángel para un evento y nos encantó. Desde el primer momento estuvo súper cercano y creó un ambiente increíble. Repetiríamos sin dudarlo."
      }
    ]
  };

  if (rating) {
    business.aggregateRating = rating;
  }

  const person = {
    "@type": "Person",
    "@id": "https://angelruiz.world/#person",
    "name": "Ángel Ruiz",
    "jobTitle": "Mago e ilusionista profesional, Mago Conferenciante y Keynote Speaker Corporativo",
    "description": "Mago e ilusionista profesional en Madrid especializado en magia de cerca (close-up), conferencias motivacionales para empresas (mago conferenciante) y mentalismo. Formado en la escuela de Dani DaOrtiz.",
    "url": "https://angelruiz.world/sobre-mi",
    "image": "https://angelruiz.world/images/foto-bio.webp",
    "telephone": "+34648055636",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Escuela de Magia Dani DaOrtiz",
      "url": "https://gkaps.com"
    },
    "worksFor": { "@id": "https://angelruiz.world/#organization" },
    "knowsAbout": ["Mago conferenciante", "Conferencias motivacionales", "Magia de cerca", "Close-up Magic", "Cartomagia", "Mentalismo", "Magia para bodas", "Magia corporativa", "Team building con magia", "Ilusionismo profesional"],
    "homeLocation": { "@type": "Place", "name": "Torrelodones, Madrid, España" },
    "sameAs": [
      "https://www.instagram.com/angellruuiz",
      "https://www.tiktok.com/@angellruuiz",
      "https://www.youtube.com/@angellruuiz",
      "https://twitter.com/angellruuizz"
    ]
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [business, person]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
