import Link from 'next/link';
import Script from 'next/script';
import DigitalCard from './DigitalCard';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: { absolute: 'Contacto · Tarjeta Digital | Ángel Ruiz · Ilusionista' },
  description: 'Contacta con Ángel Ruiz, ilusionista profesional en Madrid. WhatsApp directo, llamada y presupuesto en menos de 2h para bodas y empresas.',
  alternates: {
    canonical: 'https://angelruiz.world/contacto',
  },
  openGraph: {
    url: 'https://angelruiz.world/contacto',
    title: 'Ángel Ruiz · Tarjeta de Contacto Digital (Ilusionista)',
    description: 'Conecta directamente con Ángel Ruiz para espectáculos de ilusionismo en bodas, empresas y eventos privados.',
    images: [{
      url: 'https://angelruiz.world/images/foto-bio.webp',
      width: 1200,
      height: 630,
      alt: 'Ángel Ruiz Ilusionista'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ángel Ruiz · Tarjeta de Contacto Digital (Ilusionista)',
    description: 'Tarjeta de contacto digital de Ángel Ruiz, ilusionista profesional.',
    images: ['https://angelruiz.world/images/foto-bio.webp'],
  },
};

export default function ContactoPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://angelruiz.world/contacto#webpage",
        "url": "https://angelruiz.world/contacto",
        "name": "Contacto Ángel Ruiz Ilusionista",
        "description": "Tarjeta de contacto digital y vías directas de comunicación con el ilusionista Ángel Ruiz.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Inicio",
              "item": "https://angelruiz.world"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contacto",
              "item": "https://angelruiz.world/contacto"
            }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": "https://angelruiz.world/#person",
        "name": "Ángel Ruiz",
        "jobTitle": "Ilusionista Profesional",
        "url": "https://angelruiz.world",
        "image": "https://angelruiz.world/images/foto-bio.webp",
        "telephone": "+34648055636",
        "email": "info@angelruiz.world",
        "sameAs": [
          "https://instagram.com/angellruuiz",
          "https://tiktok.com/@angellruuiz",
          "https://youtube.com/@angellruuiz",
          "https://x.com/angellruuizz"
        ]
      }
    ]
  };

  return (
    <main className="relative min-h-screen w-full bg-[#030508] text-slate-100 flex flex-col justify-between items-center px-4 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* STRUCTURED DATA JSON-LD */}
      <Script
        id="contacto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* ATMOSPHERIC BACKGROUND EFFECTS */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-amber-700/5 to-transparent rounded-full blur-[130px] opacity-70" />
        <div className="absolute top-12 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-12 right-1/4 w-80 h-80 bg-amber-400/5 rounded-full blur-[110px]" />
        
        {/* Subtle texture grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
      </div>

      {/* HEADER NAV / BACK BUTTON */}
      <header className="w-full max-w-lg pt-6 sm:pt-8 flex items-center justify-between z-20">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-amber-300 transition-all active:scale-95"
          aria-label="Volver a la página principal de Ángel Ruiz"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>angelruiz.world</span>
        </Link>

        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">
          Digital Pass
        </span>
      </header>

      {/* CENTER INTERACTIVE DIGITAL CARD */}
      <section className="flex-1 w-full max-w-lg flex items-center justify-center my-auto py-4 z-10">
        <DigitalCard />
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-lg pb-6 sm:pb-8 text-center text-xs text-slate-500 flex flex-col items-center gap-1.5 z-20">
        <p className="tracking-wide">
          © {new Date().getFullYear()} Ángel Ruiz · Todos los derechos reservados.
        </p>
        <p className="text-[11px] text-slate-600">
          Magia de cerca y eventos exclusivos en Madrid
        </p>
      </footer>

    </main>
  );
}
