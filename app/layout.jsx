import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://angelruiz.world'),
  title: {
    default: 'Angel Ruiz | Magia y Mago Profesional en Madrid para Eventos',
    template: '%s | Angel Ruiz Magia'
  },
  description: 'Angel Ruiz, mago profesional experto en magia en Madrid para bodas y eventos VIP. Ilusionismo de cerca exclusivo para una experiencia única. Reserva ahora.',
  keywords: ['Mago Madrid', 'Ilusionista en Madrid', 'Mago para bodas Madrid', 'Magia para empresas Madrid', 'Mago para eventos corporativos', 'Magia de cerca Madrid', 'Angel Ruiz', 'Espectáculo de magia Madrid', 'Contratar mago Madrid', 'Mago ilusionista Madrid', 'Mago para comuniones Madrid'],
  authors: [{ name: 'Angel Ruiz' }],
  creator: 'Angel Ruiz',
  publisher: 'Angel Ruiz',
  icons: {
    icon: '/icon.jpg',
    apple: '/icon.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://angelruiz.world',
    title: 'Angel Ruiz | Ilusionista Profesional',
    description: 'Mago e ilusionista profesional especializado en magia de cerca exclusiva para eventos corporativos, bodas y celebraciones.',
    siteName: 'Angel Ruiz Magia',
    images: [{
      url: '/images/foto-bio.png',
      width: 1200,
      height: 630,
      alt: 'Angel Ruiz Ilusionista Profesional en plena actuación'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angel Ruiz | Magia & Ilusionismo',
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
  name: 'Angel Ruiz | Mago e Ilusionista Profesional',
  alternateName: 'Angel Ruiz Magia',
  description: 'Mago e ilusionista profesional en Madrid. Especialista en magia de cerca exclusiva para eventos corporativos, bodas de lujo y fiestas privadas.',
  url: 'https://angelruiz.world',
  logo: 'https://angelruiz.world/icon.jpg',
  image: 'https://angelruiz.world/images/foto-bio.png',
  priceRange: '€€€',
  telephone: '+34648055636',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madrid',
    addressRegion: 'Comunidad de Madrid',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.416775,
    longitude: -3.703790,
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
    { '@type': 'City', name: 'Collado Villalba' },
    { '@type': 'City', name: 'El Escorial' },
    { '@type': 'City', name: 'San Lorenzo de El Escorial' },
    { '@type': 'City', name: 'Hoyo de Manzanares' },
    { '@type': 'City', name: 'Las Matas' }
  ],
  sameAs: [
    'https://www.instagram.com/angellruuizz',
    'https://twitter.com/angellruuizz'
  ],
  knowsAbout: ['Magia de Cerca', 'Ilusionismo Profesional', 'Magia Corporativa', 'Mentalismo', 'Entretenimiento para Bodas'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased min-h-screen selection:bg-amber-500/30 selection:text-amber-200">
        <Script 
          src="https://cdn.trustindex.io/loader.js?5feeac5690002876db7628d0fd2" 
          strategy="lazyOnload" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
