import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://angelruiz.world'),
  title: {
    default: 'Angel Ruiz | Mago e Ilusionista',
    template: '%s | Angel Ruiz | Mago e Ilusionista'
  },
  description: 'Ángel Ruiz, mago profesional experto en magia en Madrid para bodas y eventos VIP. Ilusionismo de cerca exclusivo para una experiencia única. Reserva ahora.',
  keywords: ['Mago Madrid', 'Ilusionista en Madrid', 'Mago para bodas Madrid', 'Magia para empresas Madrid', 'Mago para eventos corporativos', 'Magia de cerca Madrid', 'Ángel Ruiz', 'Espectáculo de magia Madrid', 'Contratar mago Madrid', 'Mago ilusionista Madrid', 'Mago para comuniones Madrid'],
  authors: [{ name: 'Ángel Ruiz | Mago e Ilusionista' }],
  creator: 'Ángel Ruiz | Mago e Ilusionista',
  publisher: 'Ángel Ruiz | Mago e Ilusionista',
  icons: {
    icon: '/icon.jpg',
    apple: '/icon.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://angelruiz.world',
    title: 'Angel Ruiz | Mago e Ilusionista',
    description: 'Ángel Ruiz, mago e ilusionista profesional especializado en magia de cerca exclusiva para eventos corporativos, bodas y celebraciones.',
    siteName: 'Ángel Ruiz | Mago e Ilusionista',
    images: [{
      url: '/images/foto-bio.png',
      width: 1200,
      height: 630,
      alt: 'Ángel Ruiz Ilusionista Profesional en plena actuación'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angel Ruiz | Mago e Ilusionista',
    description: 'Ilusionista especializado en eventos exclusivos y magia de cerca.',
    images: ['/images/foto-bio.png'],
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

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://angelruiz.world',
  name: 'Ángel Ruiz | Mago e Ilusionista',
  alternateName: 'Ángel Ruiz Magia',
  description: 'Mago e ilusionista profesional en Madrid. Especialista en magia de cerca exclusiva para eventos corporativos, bodas de lujo y fiestas privadas.',
  url: 'https://angelruiz.world',
  logo: 'https://angelruiz.world/icon.jpg',
  image: 'https://angelruiz.world/images/foto-bio.png',
  priceRange: '€€€',
  telephone: '+34648055636',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Zona Noroeste',
    addressLocality: 'Torrelodones',
    addressRegion: 'Comunidad de Madrid',
    postalCode: '28250',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.5765,
    longitude: -3.9298,
  },
  areaServed: [
    { '@type': 'City', name: 'Madrid' },
    { '@type': 'City', name: 'Torrelodones' },
    { '@type': 'City', name: 'Las Rozas' },
    { '@type': 'City', name: 'Majadahonda' },
    { '@type': 'City', name: 'Pozuelo de Alarcón' },
    { '@type': 'City', name: 'Aravaca' },
    { '@type': 'City', name: 'Boadilla del Monte' },
    { '@type': 'City', name: 'Villalba' },
    { '@type': 'City', name: 'Galapagar' },
    { '@type': 'City', name: 'El Escorial' }
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    "name": "Servicios de Ilusionismo",
    "itemListElement": [
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Magia para Bodas Exclusive"
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Ilusionismo Corporativo y Empresas"
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Magia de Cerca (Close-up) para Eventos VIP"
            }
        }
    ]
  },

  sameAs: [
    'https://www.instagram.com/angellruuiz',
    'https://www.tiktok.com/@angellruuiz',
    'https://www.youtube.com/@angellruuiz',
    'https://twitter.com/angellruuiz'
  ],
  knowsAbout: ['Magia de Cerca', 'Ilusionismo Profesional', 'Magia Corporativa', 'Mentalismo', 'Entretenimiento para Bodas'],
};

import NewsletterForm from '@/components/NewsletterForm';
import dynamic from 'next/dynamic';
const NewsletterModal = dynamic(() => import('@/components/NewsletterModal'), { ssr: false });
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), { ssr: false });

import { Cinzel, Playfair_Display, Inter } from 'next/font/google';

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cinzel.variable} ${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.trustindex.io" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.tiktok.com" />
      </head>
      <body className="antialiased min-h-screen selection:bg-amber-500/30 selection:text-amber-200 font-sans">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        {children}
        <NewsletterModal />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
