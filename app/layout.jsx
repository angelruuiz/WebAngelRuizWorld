import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://angelruiz.world'),
  title: {
    default: 'Mago en Madrid | Ángel Ruiz | Ilusionista Profesional',
    template: '%s | Ángel Ruiz | Mago Madrid'
  },
  description: 'Ángel Ruiz, mago profesional experto en magia en Madrid para bodas y eventos VIP. Ilusionismo de cerca exclusivo para una experiencia única. Reserva ahora.',
  keywords: ['Mago Madrid', 'Ilusionista en Madrid', 'Mago para bodas Madrid', 'Magia para empresas Madrid', 'Mago para eventos corporativos', 'Magia de cerca Madrid', 'Ángel Ruiz', 'Espectáculo de magia Madrid', 'Contratar mago Madrid', 'Mago ilusionista Madrid', 'Mago para comuniones Madrid'],
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

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cinzel.variable} ${cormorant.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.trustindex.io" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.tiktok.com" />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-NWEPX8BGXB" />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-R1QMG6519N" />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NWEPX8BGXB');
            gtag('config', 'G-R1QMG6519N');
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

