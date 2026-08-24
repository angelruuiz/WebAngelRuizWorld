import React from 'react';
import NavFooterClient from '@/components/NavFooterClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import FAQItem from '@/components/FAQItem';
import CorporateInlineForm from '@/components/CorporateInlineForm';

export const metadata = {
  title: { absolute: 'Mago para Ferias y Congresos en Madrid | IFEMA · Ángel Ruiz' },
  description: 'Atrae multitudes a tu stand corporativo. Ángel Ruiz, mago para ferias en IFEMA y congresos en Madrid. Generación de leads y alto impacto B2B con ilusionismo.',
  keywords: 'mago para ferias madrid, mago para stands, ilusionista ifema, mago corporativo ferias, captacion de leads feria, animacion stand madrid, mago congresos',
  alternates: {
    canonical: 'https://angelruiz.world/empresas/mago-ferias-congresos-madrid',
  },
  openGraph: {
    title: 'Mago para Ferias y Congresos en Madrid | IFEMA y Stands',
    description: 'Atrae multitudes a tu stand corporativo. Ángel Ruiz, mago para ferias en IFEMA y congresos en Madrid. Generación de leads y alto impacto B2B con ilusionismo.',
    url: 'https://angelruiz.world/empresas/mago-ferias-congresos-madrid',
    siteName: 'Angel Ruiz',
    images: [
      {
        url: 'https://angelruiz.world/images/evento-angel-ruiz-magia.webp',
        width: 1200,
        height: 630,
        alt: 'Mago para Ferias y Congresos en Madrid',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mago para Ferias y Congresos en Madrid | IFEMA y Stands',
    description: 'Atrae multitudes a tu stand corporativo. Ángel Ruiz, mago para ferias en IFEMA y congresos en Madrid. Generación de leads y alto impacto B2B con ilusionismo.',
    images: ['https://angelruiz.world/images/evento-angel-ruiz-magia.webp'],
  },
};

const faqs = [
  { name: '¿Cómo ayuda un mago a conseguir más clientes en una feria?', acceptedAnswer: { text: 'La magia funciona como un "parada-tráfico". Capta la atención de los asistentes que caminan por el pasillo, los agrupa en tu stand y rompe el hielo para que tu equipo comercial pueda cualificar el lead e iniciar el proceso de venta.' } },
  { name: '¿Se puede integrar mi producto en los juegos de magia?', acceptedAnswer: { text: 'Sí, esa es la clave del ilusionismo corporativo o Trade Show Magic. Puedo hacer aparecer merchandising, incorporar tu logo o usar los beneficios de tu producto/software como guion del efecto mágico.' } },
  { name: '¿Trabajas habitualmente en IFEMA?', acceptedAnswer: { text: 'Sí, tengo amplia experiencia trabajando en IFEMA y en los principales recintos feriales de Madrid y España, adaptándome a los diferentes tamaños de stand y flujos de público.' } },
  { name: '¿En qué idiomas realizas la presentación?', acceptedAnswer: { text: 'Realizo shows tanto en español como en inglés fluido, algo fundamental en ferias internacionales donde asisten visitantes de toda Europa y resto del mundo.' } },
  { name: '¿Cómo nos coordinamos con el equipo comercial del stand?', acceptedAnswer: { text: 'Trabajamos en sinergia. Yo me encargo de atraer, entretener e introducir el mensaje de la marca, y en el momento de máximo asombro (el "peak" emocional), realizo el traspaso fluido del grupo a vuestros comerciales.' } }
];

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://angelruiz.world/#organization",
      "name": "Ángel Ruiz | Mago e Ilusionista",
      "url": "https://angelruiz.world",
      "telephone": "+34648055636",
      "priceRange": "€€€",
      "address": { "@type": "PostalAddress", "addressLocality": "Madrid", "addressRegion": "Comunidad de Madrid", "addressCountry": "ES" }
    },
    {
      "@type": "Service",
      "name": "Mago para Ferias y Congresos en Madrid",
      "provider": { "@type": "Person", "name": "Ángel Ruiz" },
      "areaServed": "Comunidad de Madrid",
      "description": "Magia promocional para stands y ferias en IFEMA y recintos feriales de Madrid. Captación y cualificación de leads B2B.",
      "serviceType": "Trade Show Magic Entertainment",
      "url": "https://angelruiz.world/empresas/mago-ferias-congresos-madrid"
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.name, "acceptedAnswer": { "@type": "Answer", "text": f.acceptedAnswer.text } }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
        { "@type": "ListItem", "position": 2, "name": "Empresas", "item": "https://angelruiz.world/empresas" },
        { "@type": "ListItem", "position": 3, "name": "Ferias y Congresos", "item": "https://angelruiz.world/empresas/mago-ferias-congresos-madrid" }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
    <NavFooterClient>
      <MagicCursor />
    <div className="min-h-screen bg-surface-0 text-slate-300 font-sans selection:bg-amber-500/30">
      
      {/* HEADER LUXURY B2B */}
      <header className="relative pt-32 pb-20 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-950 to-slate-950"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 text-amber-400 text-xs uppercase tracking-widest font-semibold">
            <span>✦</span>
            <span>Dinamización de Stands & Ferias en Madrid</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Cinzel] font-bold text-white tracking-wide mb-6 uppercase">
            Mago para Ferias y Congresos en Madrid
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
            Convierte tu stand en el punto más concurrido de IFEMA. Atracción de público masiva, <span className="text-amber-400 font-medium">captación de leads cualificados y demostraciones de producto con magia visual</span>.
          </p>
        </div>
      </header>

      {/* DASHBOARD DE IMPACTO */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em]">Impacto en Stand</span>
            <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide mt-2">
              Resultados y Tráfico para tu Exposición
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 01</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">+300%</div>
              <div className="text-amber-400/90 text-sm font-medium">Tráfico al Stand</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Efectos visuales que detienen el paso en los pasillos de IFEMA y atraen a los asistentes a tu espacio.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 02</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">x3</div>
              <div className="text-amber-400/90 text-sm font-medium">Captación de Leads</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Pases de magia que facilitan el traspaso del visitante al equipo comercial sin sensación de venta forzada.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 03</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">100%</div>
              <div className="text-amber-400/90 text-sm font-medium">Personalización de Producto</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Apariciones y transformaciones personalizadas con el producto o mensaje de tu marca.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LONG FORM SEO CONTENT */}
      <section className="py-20 border-b border-white/10 bg-slate-950/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide mb-8 border-l-4 border-amber-500 pl-4">
            Dinamización de Stands en Ferias y Congresos
          </h2>
          <div className="space-y-6 text-sm md:text-base text-slate-300 leading-relaxed font-light">
            <p>
              El entorno de ferias en Madrid (FITUR, Fruit Attraction, SIMO, Salón Gourmet en IFEMA) es altamente competitivo. Cientos de empresas compiten por la atención del visitante en los mismos pabellones. Aquí es donde interviene nuestro servicio de <strong>Mago para Ferias y Congresos</strong>, actuando como un polo de atracción natural hacia tu expositor.
            </p>
            <p>
              Mediante presentaciones de corta duración e impacto fulgurante a escasos centímetros del público, detenemos a los decisores de compra y los introducimos en el ecosistema de tu marca.
            </p>
            
            <h3 className="text-2xl font-[Cinzel] font-bold text-white mt-10 mb-4 border-l-4 border-amber-500 pl-4">
              ¿Por Qué un Ilusionista en tu Stand de IFEMA?
            </h3>
            <p>
              A diferencia de folletos o azafatas convencionales, un ilusionista profesional genera un gancho interactivo irresistible. El visitante vive una experiencia sorprendente y, acto seguido, se siente receptivo y agradecido para escuchar la propuesta de valor de tu equipo comercial.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Atracción Visual</span>
                <p className="text-xs text-slate-400">Detenemos el flujo del pasillo y concentramos grupos frente a tu stand.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Cualificación Directa</span>
                <p className="text-xs text-slate-400">Filtramos y presentamos los contactos interesados directamente a tus comerciales.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Retorno Medible</span>
                <p className="text-xs text-slate-400">Incremento sustancial de tarjetas y registros recogidos por jornada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em]">Paso a Paso</span>
            <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide mt-2">
              Metodología de Activación en Feria
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">01</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Alineación con el Producto</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Adaptamos los trucos visuales al producto o software que tu marca presenta en la feria.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Pre-Feria</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">02</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Dinamización Continua</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Pases periódicos durante toda la jornada de feria para mantener el stand en máxima afluencia.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Jornada en Vivo</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">03</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Conversión Comercial</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Traspaso fluido y amigable de los prospectos a tu equipo de ventas.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Cierre y Leads</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide">
              Preguntas Frecuentes
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-[Cinzel] font-bold text-white uppercase tracking-wide mb-4">
            Maximiza el Tráfico de tu Stand en <span className="text-amber-400">IFEMA</span>
          </h2>
          <p className="text-base text-slate-300 mb-8 max-w-xl mx-auto font-light">Consulta disponibilidad por jornadas para ferias, congresos y exposiciones en Madrid.</p>
          <div className="mb-10 text-left">
            <CorporateInlineForm title="Solicitar Dinamización para Ferias o Stands" subtitle="Capta leads y maximiza el tráfico a tu stand en IFEMA y congresos" />
          </div>
        </div>
      </section>

    </div>
    </NavFooterClient>
    </>
  );
}
