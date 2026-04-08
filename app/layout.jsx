import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  metadataBase: new URL('https://angelruiz.world'),
  title: {
    default: 'Angel Ruiz | Mago e Ilusionista en Madrid para Bodas y Eventos',
    template: '%s | Angel Ruiz Magia'
  },
  description: 'Angel Ruiz, ilusionista en Madrid experto en magia de cerca para eventos corporativos, bodas y fiestas VIP. Vive una experiencia única e inolvidable.',
  keywords: ['Mago Madrid', 'Ilusionista en Madrid', 'Mago para bodas Madrid', 'Magia para empresas Madrid', 'Mago para eventos corporativos', 'Magia de cerca Madrid', 'Angel Ruiz', 'Espectáculo de magia Madrid', 'Contratar mago Madrid', 'Mago ilusionista Madrid', 'Mago para comuniones Madrid'],
  authors: [{ name: 'Angel Ruiz' }],
  creator: 'Angel Ruiz',
  publisher: 'Angel Ruiz',
  icons: {
    icon: '/icon.jpg',
    apple: '/icon.jpg',
  },
  alternates: {
    canonical: '/',
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

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Angel Ruiz',
  jobTitle: 'Ilusionista y Mago Profesional',
  description: 'Ilusionista profesional especializado en Magia de Cerca y Magia de Cóctel para eventos corporativos, bodas y particulares VIP.',
  url: 'https://angelruiz.world',
  image: 'https://angelruiz.world/images/foto-bio.png',
  knowsAbout: ['Magia de Cerca', 'Ilusionismo', 'Magia para Eventos', 'Magia de Cóctel'],
  areaServed: {
    '@type': 'City',
    name: 'Madrid',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ES',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased min-h-screen selection:bg-amber-500/30 selection:text-amber-200">
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
