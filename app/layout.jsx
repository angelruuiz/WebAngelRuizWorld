import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://angelruiz.world'),
  title: {
    default: 'Mago en Madrid | Ángel Ruiz | Ilusionista para Bodas y Empresas',
    template: '%s | Ángel Ruiz | Mago Madrid'
  },
  description: 'Ángel Ruiz, mago profesional en Madrid para bodas, cenas de empresa y eventos privados. +10 años de experiencia, 39 reseñas ⭐⭐⭐⭐⭐. Magia de cerca y de salón. Solicita presupuesto.',
  keywords: ['mago madrid', 'mago en madrid', 'contratar mago madrid', 'mago para bodas madrid', 'mago para empresas madrid', 'mago profesional madrid', 'ilusionista madrid', 'magia de cerca madrid', 'mago cenas empresa madrid', 'mago comuniones madrid', 'mago team building madrid', 'mago close-up madrid', 'Ángel Ruiz mago'],
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
    description: 'Mago profesional en Madrid para bodas, cenas de empresa y eventos privados. +10 años de experiencia y 39 reseñas 5 estrellas. Solicita presupuesto.',
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
    description: 'Mago profesional en Madrid para bodas, cenas de empresa y eventos privados. +10 años de experiencia y 39 reseñas 5 estrellas.',
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
import dynamic from 'next/dynamic';
const NewsletterModal = dynamic(() => import('@/components/NewsletterModal'), { ssr: false });
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), { ssr: false });

import { Cinzel, Cormorant_Garamond, Outfit } from 'next/font/google';

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
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
      "knowsAbout": ["Magia de cerca", "Close-up", "Cartomagia", "Mentalismo", "Magia para bodas", "Magia corporativa"],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.trustindex.io" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.tiktok.com" />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-NWEPX8BGXB" />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NWEPX8BGXB');
          `
        }} />
      </head>
      <body className="antialiased min-h-screen selection:bg-amber-500/30 selection:text-amber-200 font-sans">

        {children}
        <NewsletterModal />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}

