import React from 'react';
import NavFooterClient from '@/components/NavFooterClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import FAQItem from '@/components/FAQItem';
import CorporateInlineForm from '@/components/CorporateInlineForm';

export const metadata = {
  title: { absolute: 'Mago para Team Building en Madrid | Dinámicas · Ángel Ruiz' },
  description: 'Fomenta la cohesión de equipos y el liderazgo con un Team Building diferente en Madrid. Dinámicas basadas en ilusionismo corporativo.',
  keywords: 'team building madrid, dinamicas de empresa madrid, mago team building madrid, actividades empresas madrid, ilusionismo corporativo, cohesion equipos, magia para empresas',
  alternates: {
    canonical: 'https://angelruiz.world/empresas/mago-team-building-madrid',
  },
  openGraph: {
    title: 'Mago para Team Building en Madrid | Dinámicas de Empresa',
    description: 'Fomenta la cohesión de equipos y el liderazgo con un Team Building diferente en Madrid. Dinámicas basadas en ilusionismo corporativo.',
    url: 'https://angelruiz.world/empresas/mago-team-building-madrid',
    siteName: 'Angel Ruiz',
    images: [
      {
        url: 'https://angelruiz.world/images/evento-angel-ruiz-magia.webp',
        width: 1200,
        height: 630,
        alt: 'Mago para Team Building en Madrid',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mago para Team Building en Madrid | Dinámicas de Empresa',
    description: 'Fomenta la cohesión de equipos y el liderazgo con un Team Building diferente en Madrid. Dinámicas basadas en ilusionismo corporativo.',
    images: ['https://angelruiz.world/images/evento-angel-ruiz-magia.webp'],
  },
};

const faqs = [
  { name: '¿En qué consiste el Team Building con magia?', acceptedAnswer: { text: 'Es una dinámica interactiva donde los empleados aprenden juegos de ilusionismo y participan en desafíos mágicos en equipo. Fomenta la comunicación, la resolución de problemas y la cohesión.' } },
  { name: '¿Qué habilidades fomenta la magia en los equipos de trabajo?', acceptedAnswer: { text: 'La magia requiere empatía, presentación efectiva, pensamiento lateral y trabajo en equipo. Los participantes desarrollan habilidades de liderazgo y soft skills sin darse cuenta.' } },
  { name: '¿Pueden participar grupos grandes de empleados?', acceptedAnswer: { text: 'Sí, adaptamos el taller y la sesión de team building según el tamaño de la empresa. Desde grupos reducidos de directivos hasta grandes convenciones de empleados divididos por equipos.' } },
  { name: '¿Hacéis actividades de Team Building fuera de Madrid?', acceptedAnswer: { text: 'Principalmente operamos en Madrid, pero nos desplazamos a nivel nacional para convenciones y retiros de empresa si el evento lo requiere.' } },
  { name: '¿Se requiere algún material especial o escenario?', acceptedAnswer: { text: 'No, nosotros aportamos todo el material mágico necesario para cada participante (cartas, monedas, accesorios). Solo necesitamos un espacio diáfano o mesas grupales para trabajar.' } }
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
      "name": "Mago para Team Building en Madrid",
      "provider": { "@type": "Person", "name": "Ángel Ruiz" },
      "areaServed": "Comunidad de Madrid",
      "description": "Actividades y talleres de magia corporativa para team building, liderazgo y cohesión de equipos de trabajo en Madrid.",
      "serviceType": "Corporate Team Building Entertainment",
      "url": "https://angelruiz.world/empresas/mago-team-building-madrid"
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
        { "@type": "ListItem", "position": 3, "name": "Team Building", "item": "https://angelruiz.world/empresas/mago-team-building-madrid" }
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
            <span>Talleres & Dinámicas de Cohesión de Equipos</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Cinzel] font-bold text-white tracking-wide mb-6 uppercase">
            Mago para Team Building en Madrid
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
            Experiencias inmersivas donde la magia se convierte en el vehículo para fomentar la <span className="text-amber-400 font-medium">confianza, el pensamiento lateral, la colaboración y la motivación entre equipos</span>.
          </p>
        </div>
      </header>

      {/* DASHBOARD DE IMPACTO */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em]">Impacto en Equipos</span>
            <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide mt-2">
              Resultados y Cohesión para tu Empresa
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 01</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">+85%</div>
              <div className="text-amber-400/90 text-sm font-medium">Cohesión y Confianza</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Dinámicas conjuntas que derriban barreras interdepartamentales y fortalecen los vínculos interpersonales.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 02</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">100%</div>
              <div className="text-amber-400/90 text-sm font-medium">Participación Activa</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Nadie es un mero espectador; todos los integrantes aprenden y ejecutan desafíos sorprendentes.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 03</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">ROI</div>
              <div className="text-amber-400/90 text-sm font-medium">Ambiente y Rendimiento</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Mejora tangible del clima laboral reflejada en una comunicación interna más ágil y constructiva.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LONG FORM SEO CONTENT */}
      <section className="py-20 border-b border-white/10 bg-slate-950/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide mb-8 border-l-4 border-amber-500 pl-4">
            Team Building con Magia: Innovación y Liderazgo
          </h2>
          <div className="space-y-6 text-sm md:text-base text-slate-300 leading-relaxed font-light">
            <p>
              Las actividades tradicionales de team building a menudo resultan repetitivas. Nuestro formato de <strong>Mago para Team Building en Madrid</strong> propone un reto totalmente diferente: adentrarse en los secretos de la percepción, el asombro y la colaboración a través del ilusionismo interactivo.
            </p>
            <p>
              Aprender los principios del mentalismo y la magia despierta el pensamiento lateral, la empatía y la capacidad de resolución de problemas en un ambiente sumamente divertido y distendido.
            </p>
            
            <h3 className="text-2xl font-[Cinzel] font-bold text-white mt-10 mb-4 border-l-4 border-amber-500 pl-4">
              ¿Por Qué Magia para la Cohesión de Equipos?
            </h3>
            <p>
              La magia obliga a mirar los retos desde ángulos inesperados. Cuando un equipo comprende cómo se crea una ilusión, descubre que los objetivos aparentemente "imposibles" se alcanzan mediante coordinación meticulosa, confianza y comunicación precisa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Pensamiento Lateral</span>
                <p className="text-xs text-slate-400">Nuevas perspectivas para superar obstáculos y resolver retos complejos.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Confianza Colectiva</span>
                <p className="text-xs text-slate-400">Actividades colaborativas donde el éxito depende del sincronismo grupal.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Desconexión y Recarga</span>
                <p className="text-xs text-slate-400">Una experiencia lúdica inolvidable que recarga la motivación de los equipos.</p>
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
              Metodología del Taller de Team Building
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">01</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Espectáculo Inicial Inspirador</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Demostración de alto impacto para romper el hielo y conectar a todos los asistentes.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Apertura</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">02</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Taller Práctico por Grupos</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Los participantes aprenden secretos, ensayan técnicas y presentan sus propias ilusiones.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Dinámica</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">03</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Conclusiones y Conexión</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Debriefing donde se vinculan las lecciones del taller con los retos reales de la empresa.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Cierre</span>
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
            Impulsa la Unión de tu <span className="text-amber-400">Equipo</span>
          </h2>
          <p className="text-base text-slate-300 mb-8 max-w-xl mx-auto font-light">Diseñamos dinámicas de team building a medida para grupos de 10 a más de 200 personas en Madrid.</p>
          <div className="mb-10 text-left">
            <CorporateInlineForm title="Solicitar Taller o Dinámica de Team Building" subtitle="Personalización según el número de participantes y objetivos" />
          </div>
        </div>
      </section>

    </div>
    </NavFooterClient>
    </>
  );
}
