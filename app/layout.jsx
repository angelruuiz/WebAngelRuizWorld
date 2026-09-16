import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://angelruiz.world'),
  title: {
    default: 'Mago en Madrid | Ángel Ruiz · Bodas y Empresas',
    template: '%s | Ángel Ruiz'
  },
  description: '¿Buscas asombro inolvidable? Ilusionismo de autor para bodas, empresas y eventos exclusivos en Madrid. Trato directo sin agencias. Presupuesto express en 2h.',
  keywords: ['mago madrid', 'mago en madrid', 'contratar mago madrid', 'mago profesional madrid', 'ilusionista madrid', 'magia de cerca madrid', 'mago cenas empresa madrid', 'mago comuniones madrid', 'mago team building madrid', 'mago close-up madrid', 'Ángel Ruiz mago'],
  authors: [{ name: 'Ángel Ruiz | Mago e Ilusionista' }],
  creator: 'Ángel Ruiz | Mago e Ilusionista',
  publisher: 'Ángel Ruiz | Mago e Ilusionista',
  icons: {
    icon: '/icon.webp',
    apple: '/icon.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    title: 'Mago en Madrid | Ángel Ruiz | Ilusionista para Bodas y Empresas',
    description: '¿Buscas asombro inolvidable? Magia de cerca y mentalismo de impacto para bodas, empresas y eventos en Madrid. Solicita presupuesto directo.',
    siteName: 'Ángel Ruiz | Mago e Ilusionista',
    images: [{
      url: '/images/foto-bio.webp',
      width: 1200,
      height: 630,
      alt: 'Ángel Ruiz Ilusionista Profesional en plena actuación'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mago en Madrid | Ángel Ruiz | Ilusionista para Bodas y Empresas',
    description: '¿Buscas asombro inolvidable? Magia de cerca y mentalismo de impacto para bodas, empresas y eventos en Madrid.',
    images: ['/images/foto-bio.webp'],
    site: '@angellruuizz',
    creator: '@angellruuizz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
    themeColor: '#020617',
};


import NewsletterForm from '@/components/NewsletterForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import dynamic from 'next/dynamic';
const NewsletterModal = dynamic(() => import('@/components/NewsletterModal'), { ssr: false });
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), { ssr: false });
const AnalyticsLoader = dynamic(() => import('@/components/AnalyticsLoader'), { ssr: false });
const DeferredStyles = dynamic(() => import('@/components/DeferredStyles'), { ssr: false });

import { Cinzel, Cormorant_Garamond, Outfit } from 'next/font/google';

const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EntertainmentBusiness", "ProfessionalService"],
      "@id": "https://angelruiz.world/#organization",
      "name": "Ángel Ruiz | Mago para Bodas y Empresas en Madrid",
      "alternateName": [
        "Ángel Ruiz Mago",
        "Ángel Ruiz Ilusionista",
        "Angel Ruiz World",
        "Mago Ángel Ruiz Madrid"
      ],
      "url": "https://angelruiz.world",
      "logo": "https://angelruiz.world/images/logo-pequeno.webp",
      "image": "https://angelruiz.world/images/foto-bio.webp",
      "telephone": "+34648055636",
      "email": "info@angelruiz.world",
      "priceRange": "400€ - 900€",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer, Bizum",
      "hasMap": "https://maps.google.com/?q=Torrelodones,+Comunidad+de+Madrid",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Calle Real",
        "addressLocality": "Torrelodones",
        "postalCode": "28250",
        "addressRegion": "Comunidad de Madrid",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.5765,
        "longitude": -3.9298
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "22:00"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Madrid",
          "sameAs": "https://www.wikidata.org/wiki/Q2807"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Comunidad de Madrid",
          "sameAs": "https://www.wikidata.org/wiki/Q5756"
        },
        { "@type": "City", "name": "Torrelodones" },
        { "@type": "City", "name": "Las Rozas de Madrid" },
        { "@type": "City", "name": "Majadahonda" },
        { "@type": "City", "name": "Pozuelo de Alarcón" },
        { "@type": "City", "name": "Boadilla del Monte" },
        { "@type": "City", "name": "Alcobendas" },
        { "@type": "City", "name": "Collado Villalba" },
        { "@type": "City", "name": "Galapagar" },
        { "@type": "City", "name": "San Lorenzo de El Escorial" },
        { "@type": "City", "name": "Alcorcón" },
        { "@type": "City", "name": "Leganés" },
        { "@type": "City", "name": "Getafe" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catálogo de Espectáculos y Servicios de Magia",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mago para Bodas en Madrid (Cóctel y Banquete)",
              "url": "https://angelruiz.world/particulares/bodas"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": 400,
              "maxPrice": 900,
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mago para Eventos de Empresa y Cenas Corporativas",
              "url": "https://angelruiz.world/empresas"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": 600,
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mago Conferenciante y Keynote Speaker Corporativo",
              "url": "https://angelruiz.world/empresas/mago-conferenciante-madrid"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Magia para Fiestas Privadas, Cumpleaños y Celebraciones",
              "url": "https://angelruiz.world/particulares/eventos"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": 400,
              "maxPrice": 800,
              "priceCurrency": "EUR"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.instagram.com/angellruuiz",
        "https://www.tiktok.com/@angellruuiz",
        "https://www.youtube.com/@angellruuiz",
        "https://twitter.com/angellruuizz"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://angelruiz.world/#website",
      "url": "https://angelruiz.world",
      "name": "Ángel Ruiz | Mago e Ilusionista en Madrid",
      "description": "Web oficial de Ángel Ruiz, mago profesional en Madrid para bodas, empresas y eventos privados.",
      "inLanguage": "es",
      "publisher": { "@id": "https://angelruiz.world/#organization" }
    },
    {
      "@type": "Person",
      "@id": "https://angelruiz.world/#person",
      "name": "Ángel Ruiz",
      "jobTitle": "Mago e ilusionista profesional",
      "url": "https://angelruiz.world/sobre-mi",
      "image": "https://angelruiz.world/images/foto-bio.webp",
      "telephone": "+34648055636",
      "email": "info@angelruiz.world",
      "worksFor": { "@id": "https://angelruiz.world/#organization" },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Escuela de Magia de Dani DaOrtiz",
        "url": "https://gkaps.com"
      },
      "knowsAbout": [
        "Magia de cerca",
        "Close-up Magic",
        "Cartomagia de autor",
        "Mentalismo e ilusionismo psicológico",
        "Magia para bodas",
        "Magia corporativa",
        "Mago conferenciante",
        "Team building con magia"
      ],
      "sameAs": [
        "https://www.instagram.com/angellruuiz",
        "https://www.tiktok.com/@angellruuiz",
        "https://www.youtube.com/@angellruuiz",
        "https://twitter.com/angellruuizz"
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cinzel.variable} ${cormorant.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <link rel="preload" as="image" href="/images/hero-angel-ruiz-mobile-2026.webp" media="(max-width: 767px)" type="image/webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/hero-angel-ruiz-2026.webp" media="(min-width: 768px)" type="image/webp" fetchPriority="high" />
      </head>
      <body className="antialiased min-h-screen selection:bg-amber-500/30 selection:text-amber-200 font-sans">

        {children}
        <WhatsAppButton />
        <DeferredStyles />
        <NewsletterModal />
        <CookieBanner />
        <Analytics />
        <AnalyticsLoader />
      </body>
    </html>
  );
}

