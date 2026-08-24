import React from 'react';
import NavFooterClient from '@/components/NavFooterClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import FAQItem from '@/components/FAQItem';
import CorporateInlineForm from '@/components/CorporateInlineForm';

export const metadata = {
  title: { absolute: 'Mago para Restaurantes en Madrid | Ángel Ruiz (Table Hopping)' },
  description: 'Fideliza a tus clientes y sube el ticket medio. Magia de cerca de mesa en mesa para restaurantes en Madrid. Ángel Ruiz: Ilusionista profesional.',
  keywords: 'mago para restaurantes, table hopping madrid, magia en mesas, mago para eventos en madrid, mago para locales de ocio, animacion restaurantes, ilusionista restaurantes',
  alternates: {
    canonical: 'https://angelruiz.world/empresas/mago-para-restaurantes-madrid',
  },
  openGraph: {
    title: 'Mago para Restaurantes en Madrid | Ángel Ruiz (Table Hopping)',
    description: 'Aumenta el ticket medio y fideliza a tus clientes. Mago para restaurantes y locales en Madrid especialista en Table Hopping (magia de mesa en mesa).',
    url: 'https://angelruiz.world/empresas/mago-para-restaurantes-madrid',
    siteName: 'Angel Ruiz',
    images: [
      {
        url: 'https://angelruiz.world/images/evento-angel-ruiz-magia.webp',
        width: 1200,
        height: 630,
        alt: 'Mago para Restaurantes en Madrid',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mago para Restaurantes en Madrid | Table Hopping',
    description: 'Aumenta el ticket medio y fideliza a tus clientes. Mago para restaurantes y locales en Madrid especialista en Table Hopping (magia de mesa en mesa).',
    images: ['https://angelruiz.world/images/evento-angel-ruiz-magia.webp'],
  },
};

const faqs = [
  { name: '¿Qué es el Table Hopping o Magia de Cerca en restaurantes?', acceptedAnswer: { text: 'Es un formato de magia itinerante donde el ilusionista se acerca de mesa en mesa para realizar pequeños shows de 5-10 minutos, amenizando las esperas y sorprendiendo a los comensales.' } },
  { name: '¿Interfiere la magia con el servicio de los camareros?', acceptedAnswer: { text: 'En absoluto. Como mago profesional con años de experiencia en hostelería, sé cuándo acercarme a la mesa y cuándo retirarme para asegurar que los platos se sirven a la temperatura perfecta sin interrumpir al personal.' } },
  { name: '¿Cómo beneficia a mi restaurante contratar un mago?', acceptedAnswer: { text: 'Aumenta el ticket medio, reduce la percepción del tiempo de espera entre platos, incrementa las propinas y genera reseñas positivas en Google y TripAdvisor debido a la experiencia única.' } },
  { name: '¿Se requiere un espacio o preparación especial?', acceptedAnswer: { text: 'No. El Table Hopping no necesita escenario ni equipos de sonido. Toda la magia ocurre directamente en las manos de los clientes y con objetos cotidianos o de pequeño tamaño.' } },
  { name: '¿Es un servicio puntual o puede ser regular?', acceptedAnswer: { text: 'Puede ser ambas cosas. Muchos restaurantes me contratan como evento puntual para San Valentín o Navidad, pero los mejores resultados de fidelización se obtienen al incluir el servicio un día fijo a la semana o al mes.' } }
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
      "name": "Mago para Restaurantes y Locales en Madrid",
      "provider": { "@type": "Person", "name": "Ángel Ruiz" },
      "areaServed": "Comunidad de Madrid",
      "description": "Magia de cerca itinerante de mesa en mesa (Table Hopping) para restaurantes, hoteles y locales de ocio en Madrid.",
      "serviceType": "Restaurant Entertainment Service",
      "url": "https://angelruiz.world/empresas/mago-para-restaurantes-madrid"
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
        { "@type": "ListItem", "position": 3, "name": "Restaurantes", "item": "https://angelruiz.world/empresas/mago-para-restaurantes-madrid" }
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
            <span>Magia de Mesa & Residencias en Madrid</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Cinzel] font-bold text-white tracking-wide mb-6 uppercase">
            Mago para Restaurantes en Madrid
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
            Eleva la experiencia gastronómica de tus comensales con <span className="text-amber-400 font-medium">magia de cerca íntima y elegante mesa a mesa</span>. Fidelización, reseñas positivas y diferenciación hostelera premium.
          </p>
        </div>
      </header>

      {/* DASHBOARD DE IMPACTO */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em]">Impacto en Sala</span>
            <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide mt-2">
              Valor y Fidelización para tu Local
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 01</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">+5★</div>
              <div className="text-amber-400/90 text-sm font-medium">Reseñas en Google & TripAdvisor</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Comensales encantados que comparten fotos y menciones espontáneas en redes y portales gastronómicos.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 02</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">x2</div>
              <div className="text-amber-400/90 text-sm font-medium">Fidelización y Repetición</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Los clientes reservan de nuevo y recomiendan el restaurante como una experiencia gastronómica completa.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 03</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">100%</div>
              <div className="text-amber-400/90 text-sm font-medium">Integración con el Servicio</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Timing perfecto con cocina y camareros para entretener tiempos de espera entre platos con delicadeza.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LONG FORM SEO CONTENT */}
      <section className="py-20 border-b border-white/10 bg-slate-950/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide mb-8 border-l-4 border-amber-500 pl-4">
            Magia de Cerca para Restaurantes de Alta Gama
          </h2>
          <div className="space-y-6 text-sm md:text-base text-slate-300 leading-relaxed font-light">
            <p>
              En la vibrante escena hostelera de Madrid, ofrecer una excelente cocina es imprescindible, pero la experiencia global es lo que convierte a un comensal en cliente fiel. Nuestro servicio de <strong>Mago para Restaurantes y Locales</strong> aporta un toque de distinción y sorpresa inolvidable.
            </p>
            <p>
              Acercándonos a las mesas en los momentos idóneos con la máxima educación y discreción, creamos momentos mágicos a escasos centímetros de las manos de tus clientes.
            </p>
            
            <h3 className="text-2xl font-[Cinzel] font-bold text-white mt-10 mb-4 border-l-4 border-amber-500 pl-4">
              ¿Por Qué Incorporar Magia en tu Restaurante?
            </h3>
            <p>
              La magia de sobremesa complementa el servicio sin interrumpir conversaciones privadas. Cada intervención se personaliza al perfil de cada mesa: parejas, familias, grupos de amigos o cenas de negocios.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Cero Tiempos Muertos</span>
                <p className="text-xs text-slate-400">Ameniza esperas de platos o sobremesas de forma sutil y elegante.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Presencia en Redes</span>
                <p className="text-xs text-slate-400">Los clientes graban y comparten momentos únicos en Instagram y TikTok.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Distinción y Marca</span>
                <p className="text-xs text-slate-400">Posiciona tu local en la memoria como un espacio donde ocurren cosas extraordinarias.</p>
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
              Metodología de Actuación en Sala
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">01</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Coordinación con Sala y Cocina</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Sincronización con el jefe de sala para respetar el ritmo de los pases culinarios.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Planificación</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">02</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Magia Mesa a Mesa</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Intervenciones breves (5-8 minutos por mesa) de alto impacto visual y tacto exquisito.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Servicio</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">03</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Fidelización Directa</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Comensales asombrados que despiden la velada con ganas de volver y recomendar.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Sobremesa</span>
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
            Transforma la Experiencia de tus <span className="text-amber-400">Comensales</span>
          </h2>
          <p className="text-base text-slate-300 mb-8 max-w-xl mx-auto font-light">Solicita propuesta para noches temáticas, eventos especiales o residencias semanales en tu restaurante.</p>
          <div className="mb-10 text-left">
            <CorporateInlineForm title="Solicitar Propuesta para Restaurante o Local" subtitle="Dinamización y animación de mesas a medida" />
          </div>
        </div>
      </section>

    </div>
    </NavFooterClient>
    </>
  );
}
