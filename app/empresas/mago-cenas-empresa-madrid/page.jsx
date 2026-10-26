import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import NavFooterClient from '@/components/NavFooterClient';
import FAQItem from '@/components/FAQItem';
import CorporateLogosBar from '@/components/CorporateLogosBar';
import ChristmasUrgencyBanner from '@/components/ChristmasUrgencyBanner';

const MagicCursor = dynamic(() => import('@/components/VisualEffects').then(mod => mod.MagicCursor), { ssr: false });
const ParticleBackground = dynamic(() => import('@/components/VisualEffects').then(mod => mod.ParticleBackground), { ssr: false });
const CorporateInlineForm = dynamic(() => import('@/components/CorporateInlineForm'), { ssr: false });

export const metadata = {
  title: { absolute: 'Mago para Cenas de Empresa en Madrid | Cenas y Navidad' },
  description: 'Mago profesional para cenas de empresa en Madrid y fiestas de Navidad. Magia de cerca cóctel y sobremesa. Fechas limitadas Q4. ¡Presupuesto express en 2h!',
  keywords: ['mago para cenas de empresa', 'mago para cenas de empresa en madrid', 'mago cenas empresa madrid', 'mago para cena empresa madrid', 'mago cena navidad empresa madrid', 'contratar mago cena empresa', 'entretenimiento cenas empresa madrid', 'mago corporativo madrid', 'animacion cenas empresa madrid', 'mago para eventos de empresa madrid', 'cenas de empresa originales madrid'],
  alternates: {
    canonical: 'https://angelruiz.world/empresas/mago-cenas-empresa-madrid',
  },
  openGraph: {
    url: 'https://angelruiz.world/empresas/mago-cenas-empresa-madrid',
    title: 'Mago para Cenas de Empresa en Madrid | Fiestas y Navidad · Ángel Ruiz',
    description: 'Transforma la cena de empresa o fiesta de Navidad en Madrid en un evento memorable con magia de cerca corporativa. Pide presupuesto en 2h.',
    images: [{ url: '/images/evento-angel-ruiz-magia.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mago para Cenas de Empresa en Madrid | Fiestas y Navidad · Ángel Ruiz',
    description: 'Magia de cerca personalizada para cenas de empresa y eventos de Navidad en Madrid. Presupuesto en 2h.',
    images: ['/images/evento-angel-ruiz-magia.webp'],
  },
};

const faqs = [
  { name: '¿Cuánto cuesta contratar un mago para una cena de empresa en Madrid?', acceptedAnswer: { text: 'Para cenas de empresa y eventos corporativos en Madrid, las tarifas se sitúan entre 500€ y 750€ según el formato (cóctel de networking, magia por mesas o espectáculo de sobremesa) y número de asistentes. Para eventos de gran envergadura o jornadas completas, solicita presupuesto personalizado.' } },
  { name: '¿Qué diferencia hay entre magia para cena de empresa y un animador de eventos?', acceptedAnswer: { text: 'Un mago corporativo como Ángel Ruiz no solo entretiene: integra el mensaje de tu empresa en los efectos mágicos, fomentando el networking y dejando una impresión duradera de tu marca. Un animador genérico no puede ofrecer esa personalización ni ese nivel de impacto.' } },
  { name: '¿Cómo se integra el mago en la agenda de la cena de empresa?', acceptedAnswer: { text: 'Diseñamos la intervención según tu agenda: magia de cerca durante el cóctel (perfecto para romper el hielo), pases de mesa durante la cena, o un espectáculo central de 20-35 min durante la sobremesa. También podemos combinar formatos para máximo impacto.' } },
  { name: '¿Se puede personalizar el espectáculo con la marca de la empresa?', acceptedAnswer: { text: 'Totalmente. Integramos el logo, eslóganes, productos o mensajes clave de tu empresa en los efectos de ilusionismo. Los asistentes vivirán la magia de la marca de forma literal y memorable.' } },
  { name: '¿Es adecuado para públicos de alto nivel (C-Level) en Madrid?', acceptedAnswer: { text: 'Sí, está diseñado específicamente para ello. El estilo de Ángel Ruiz es sofisticado, con humor inteligente y un respeto absoluto al protocolo corporativo. Ha actuado para directivos de empresas como Movistar Estudiantes con total éxito.' } },
  { name: '¿Con cuánta antelación debo reservar el mago para la cena de empresa?', acceptedAnswer: { text: 'Para cenas de Navidad en Madrid, se recomienda reservar con 2-3 meses de antelación (octubre-noviembre), ya que noviembre y diciembre son los meses con más demanda. Para otras fechas, 3-4 semanas suele ser suficiente.' } },
  { name: '¿El mago actúa en toda la Comunidad de Madrid para eventos corporativos?', acceptedAnswer: { text: 'Sí. Ángel Ruiz cubre toda la Comunidad de Madrid para cenas de empresa: Madrid capital, La Moraleja, Alcobendas, Las Rozas, Pozuelo de Alarcón, Majadahonda, y todos los principales núcleos empresariales del área metropolitana.' } },
  { name: '¿Pueden realizar la presentación en inglés para empresas multinacionales?', acceptedAnswer: { text: 'Sí, trabajamos en entornos corporativos multinacionales con inglés fluido y profesional, garantizando un impacto equivalente al de las actuaciones en castellano.' } }
];

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://angelruiz.world/#organization",
      "name": "Ángel Ruiz Mago e Ilusionista",
      "url": "https://angelruiz.world",
      "telephone": "+34648055636",
      "hasMap": "https://www.google.com/search?sca_esv=8001b418ab72b965&sxsrf=APpeQnttxDfKRtR6fpA2h7bYkWycKzmRVQ:1792418000314&q=%C3%81ngel+Ruiz+Mago+e+Ilusionista&si=APenkKmVGdgpMPDQZoEWS8RIAhsqXAKlNLP0B8DNkkiU9KPI0V2U8InyxO1tqoaWpGS1_Q7QhAgSRC07fbiiZx9SpnZjJDB5UXzd7BX6d41IdchYfOedo3rQx0et86krTkaw35SJ_yeQYQ3kpruL6sC1m1bAx0aXbA%3D%3D&sa=X&sqi=2&ved=2ahUKEwjJ6smxncaXAxWUXUEAHQovEbYQ_coHegQIKxAB&biw=1658&bih=797&dpr=1.16",
      "sameAs": [
        "https://www.google.com/search?sca_esv=8001b418ab72b965&sxsrf=APpeQnttxDfKRtR6fpA2h7bYkWycKzmRVQ:1792418000314&q=%C3%81ngel+Ruiz+Mago+e+Ilusionista&si=APenkKmVGdgpMPDQZoEWS8RIAhsqXAKlNLP0B8DNkkiU9KPI0V2U8InyxO1tqoaWpGS1_Q7QhAgSRC07fbiiZx9SpnZjJDB5UXzd7BX6d41IdchYfOedo3rQx0et86krTkaw35SJ_yeQYQ3kpruL6sC1m1bAx0aXbA%3D%3D&sa=X&sqi=2&ved=2ahUKEwjJ6smxncaXAxWUXUEAHQovEbYQ_coHegQIKxAB&biw=1658&bih=797&dpr=1.16",
        "https://www.instagram.com/angellruuiz",
        "https://www.tiktok.com/@angellruuiz",
        "https://www.youtube.com/@angellruuiz"
      ],
      "priceRange": "€€€",
      "address": { "@type": "PostalAddress", "addressLocality": "Madrid", "addressRegion": "Comunidad de Madrid", "addressCountry": "ES" }
    },
    {
      "@type": "Service",
      "name": "Mago para Cenas de Empresa en Madrid",
      "provider": {
        "@type": "Person",
        "@id": "https://angelruiz.world/#person",
        "name": "Ángel Ruiz",
        "url": "https://angelruiz.world/sobre-mi"
      },
      "areaServed": "Comunidad de Madrid",
      "description": "Espectáculo de magia corporativa para cenas de empresa en Madrid. Personalizable con marca, logotipos y mensajes de empresa.",
      "serviceType": "Corporate Entertainment",
      "url": "https://angelruiz.world/empresas/mago-cenas-empresa-madrid"
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.name, "acceptedAnswer": { "@type": "Answer", "text": f.acceptedAnswer.text } }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
        { "@type": "ListItem", "position": 2, "name": "Mago para Empresas", "item": "https://angelruiz.world/empresas" },
        { "@type": "ListItem", "position": 3, "name": "Mago Cenas de Empresa Madrid", "item": "https://angelruiz.world/empresas/mago-cenas-empresa-madrid" }
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
            <span>Experiencias Exclusivas para Cenas Corporativas</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Cinzel] font-bold text-white tracking-wide mb-6 uppercase">
            Mago para Cenas de Empresa en Madrid
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
            Convierte la cena de empresa en un evento memorable. Ilusionismo corporativo de alta gama que fomenta el <span className="text-amber-400 font-medium">networking natural, rompe el hielo y refuerza el orgullo de marca</span>.
          </p>
          {/* Bloque CTA Above-the-fold */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="https://wa.me/34648055636?text=Hola%20Ángel,%20quisiera%20consultar%20disponibilidad%20y%20tarifas%20para%20nuestra%20cena%20de%20empresa%20en%20Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
              <span>Consultar Disponibilidad WhatsApp (&lt;15 min)</span>
            </a>
            <a
              href="#presupuesto-empresa"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-amber-400/40 text-amber-300 font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Ver Tarifas y Presupuesto Online</span>
            </a>
          </div>
        </div>
      </header>

      {/* Social Proof Inmediato: Logos de Empresas Clave */}
      <CorporateLogosBar />

      {/* Banner de Urgencia Campaña de Navidad Q4 */}
      <div className="max-w-6xl mx-auto px-6">
        <ChristmasUrgencyBanner />
      </div>

      {/* DASHBOARD DE IMPACTO */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em]">Impacto Demostrado</span>
            <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide mt-2">
              Resultados y Valor para tu Marca
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 01</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">+340%</div>
              <div className="text-amber-400/90 text-sm font-medium">Retención del Mensaje</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Los mensajes clave integrados en ilusiones se graban en la memoria a largo plazo de los asistentes.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 02</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">x3</div>
              <div className="text-amber-400/90 text-sm font-medium">Conexión y Networking</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Interacción fluida que elimina barreras jerárquicas y conecta a directivos y empleados con humor inteligente.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 03</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">100%</div>
              <div className="text-amber-400/90 text-sm font-medium">Personalización de Marca</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">El show se adapta 100% a los valores, eslóganes y momentos clave de la celebración de tu empresa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LONG FORM SEO CONTENT */}
      <section className="py-20 border-b border-white/10 bg-slate-950/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide mb-8 border-l-4 border-amber-500 pl-4">
            El Nuevo Paradigma en Eventos Corporativos
          </h2>
          <div className="space-y-6 text-sm md:text-base text-slate-300 leading-relaxed font-light">
            <p>
              El ecosistema empresarial de Madrid exige innovación. Los eventos corporativos tradicionales ya no generan el mismo impacto. Los asistentes están expuestos a una sobreinformación constante, lo que hace que los mensajes clave de tu empresa se pierdan. Aquí es donde interviene nuestro servicio de <strong>Mago para Cenas de Empresa</strong>, operando como un catalizador de atención y entusiasmo.
            </p>
            <p>
              Al introducir la magia de alto impacto en el entorno corporativo, desactivamos los filtros de resistencia del cliente o empleado. A través del asombro, generamos una emoción positiva que ancla tu marca y tu mensaje en la memoria del espectador de forma permanente.
            </p>
            
            <h3 className="text-2xl font-[Cinzel] font-bold text-white mt-10 mb-4 border-l-4 border-amber-500 pl-4">
              ¿Por Qué Elegir Ilusionismo Corporativo de Alta Gama?
            </h3>
            <p>
              A diferencia de la magia convencional o de entretenimiento infantil, el ilusionismo corporativo está diseñado específicamente para cumplir objetivos de empresa. No se trata solo de sorprender, sino de <strong>comunicar</strong>. Cada rutina está diseñada bajo principios psicológicos para transmitir confianza, innovación y liderazgo en el mercado madrileño.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Atención Total</span>
                <p className="text-xs text-slate-400">Rompemos el hielo en entornos fríos o altamente competitivos.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Nivel C-Suite</span>
                <p className="text-xs text-slate-400">Experiencias sofisticadas que demuestran estatus y exclusividad.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Recuerdo Positivo</span>
                <p className="text-xs text-slate-400">Tu marca se convierte en la facilitadora de un momento inolvidable.</p>
              </div>
            </div>

            <p>
              La ciudad de Madrid alberga algunos de los eventos, ferias (como IFEMA) y convenciones más importantes de Europa. Destacar en este entorno requiere más que una cena convencional. Convertimos tu <em>cena de empresa</em> en el momento más esperado y comentado del año.
            </p>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA DE ACTIVACIÓN */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em]">Paso a Paso</span>
            <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide mt-2">
              Metodología de Trabajo para Empresas
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">01</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Alineación y Objetivos</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Estudiamos los objetivos, la audiencia y el mensaje central del evento de tu empresa.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Fase Previa</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">02</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Puesta en Escena Impecable</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Actuación elegante de magia de cerca o sobremesa con respeto absoluto al protocolo corporativo.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Evento en Vivo</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">03</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Impacto y Memoria</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Los asistentes asocian la emoción y el asombro con tu marca durante meses.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Post-Evento</span>
            </div>
          </div>
        </div>
      </section>

      {/* FICHA TÉCNICA GEO EXTRACTABLE Y FORMATOS */}
      <section aria-label="Ficha Técnica y Formatos de Cenas de Empresa en Madrid" className="py-12 border-b border-white/10 bg-slate-950/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-6 md:p-8 rounded-2xl bg-amber-500/10 border border-amber-400/30">
            <h3 className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>⚡ Ficha Técnica: Ilusionismo para Cenas de Empresa y Navidad</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-300">
              <div><strong className="text-white">Artista:</strong> Ángel Ruiz (Discípulo de Dani DaOrtiz, +10 años exp.).</div>
              <div><strong className="text-white">Tarifas Oficiales:</strong> 500€ – 750€ (Directo de artista, sin comisión).</div>
              <div><strong className="text-white">Formatos:</strong> Cóctel Networking, Pases por Mesa y Show de Sobremesa.</div>
              <div><strong className="text-white">Duración:</strong> 60 a 90 minutos adaptables al ritmo del banquete.</div>
              <div><strong className="text-white">Zona de Cobertura:</strong> Madrid Capital y municipios (Las Rozas, Pozuelo, Alcobendas).</div>
              <div><strong className="text-white">Presupuesto Express:</strong> Respuesta formal por WhatsApp en &lt;15 min o email en &lt;2h.</div>
            </div>

            {/* Tabla Comparativa de Formatos para Cenas */}
            <div className="mt-8 pt-6 border-t border-amber-400/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-3 font-semibold">
                ✦ Formatos de Ilusionismo para Cenas Corporativas
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-white/10 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-white/5 text-amber-400 uppercase tracking-wider text-[11px]">
                      <th className="px-4 py-3 font-medium">Formato</th>
                      <th className="px-4 py-3 font-medium">Momento Óptimo</th>
                      <th className="px-4 py-3 font-medium">Duración</th>
                      <th className="px-4 py-3 font-medium">Impacto en Asistentes</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300 font-light divide-y divide-white/5">
                    <tr>
                      <td className="px-4 py-3 text-white font-medium">Cóctel de Bienvenida</td>
                      <td className="px-4 py-3">Recepción y copa inicial</td>
                      <td className="px-4 py-3">45–60 min</td>
                      <td className="px-4 py-3">Rompe el hielo y conecta grupos</td>
                    </tr>
                    <tr className="bg-white/[0.02]">
                      <td className="px-4 py-3 text-white font-medium">Magia en Mesas (Close-Up)</td>
                      <td className="px-4 py-3">Entre platos o sobremesa</td>
                      <td className="px-4 py-3">60–90 min</td>
                      <td className="px-4 py-3">Asombro interactivo a centímetros</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-white font-medium">Show de Sobremesa</td>
                      <td className="px-4 py-3">Café / brindis final</td>
                      <td className="px-4 py-3">30–45 min</td>
                      <td className="px-4 py-3">Cierre unificado y mentalismo corporativo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS Y REPUTACIÓN CORPORATIVA */}
      <section aria-label="Testimonios y Valoraciones de Clientes Corporativos" className="py-12 border-b border-white/10 bg-slate-950/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl bg-amber-500/5 border border-amber-500/20 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h3 className="text-xs text-amber-400 font-bold uppercase tracking-widest flex items-center gap-2">
                <span>⭐⭐⭐⭐⭐</span>
                <span>Valoraciones de Clientes Corporativos</span>
              </h3>
              <a
                href="https://www.google.com/search?q=%C3%81ngel+Ruiz+Mago+e+Ilusionista+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-amber-400/30 text-amber-300 text-xs font-semibold hover:bg-amber-400/10 hover:border-amber-400/60 transition-colors w-fit"
                aria-label="Ver 4.9 estrellas en Google Reviews (+50 opiniones reales) en Google Maps"
              >
                <span className="text-amber-400 font-bold">4.9 ★</span>
                <span>en Google Reviews (+50 opiniones reales)</span>
                <span className="text-slate-400 text-[10px]">↗</span>
              </a>
            </div>
            <blockquote className="mb-6 border-b border-white/10 pb-6">
              <p className="italic text-slate-200 mb-3 leading-relaxed">
                "Contamos con Ángel para los eventos de Movistar Estudiantes y el resultado fue extraordinario: profesionalidad absoluta, cercanía y una magia que dejó a todo el mundo boquiabierto."
              </p>
              <footer className="text-xs text-amber-400/90 font-bold">— Movistar Estudiantes</footer>
            </blockquote>
            <blockquote>
              <p className="italic text-slate-200 mb-3 leading-relaxed">
                "Ángel Ruiz transformó nuestra cena anual de empresa. Su magia de cerca entre plato y plato es elegante, participativa e inteligente. Logró conectar a departamentos enteros que apenas se hablaban. Una experiencia corporativa impecable."
              </p>
              <footer className="text-xs text-amber-400/90 font-bold">— HR Manager, Multinacional Consultoría</footer>
            </blockquote>
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

      {/* GUIAS Y RECURSOS RELACIONADOS */}
      <section className="py-12 border-t border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-[Cinzel] font-bold text-white mb-6 uppercase tracking-wider text-center">
            Guías y Consejos para tu Cena de Empresa en Madrid
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/espectaculo-animacion-cenas-navidad-empresas-madrid" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-colors block">
              <span className="text-amber-400 text-xs font-mono block mb-1">Especial 2026</span>
              <strong className="text-white text-sm block">Espectáculo para Cenas de Navidad en Madrid</strong>
              <span className="text-slate-400 text-xs">Comparativa de formatos y animación para empresas →</span>
            </Link>
            <Link href="/blog/cenas-empresa-pequenas-madrid-animacion-magia" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-colors block">
              <span className="text-amber-400 text-xs font-mono block mb-1">Equipos 10 a 30 pax</span>
              <strong className="text-white text-sm block">Cenas de Empresa Pequeñas y Departamentos</strong>
              <span className="text-slate-400 text-xs">Magia íntima en mesa sin montajes complejos →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="presupuesto-empresa" className="py-20 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-[Cinzel] font-bold text-white uppercase tracking-wide mb-4">
            Diseñemos una Cena de Empresa <span className="text-amber-400">Inolvidable</span>
          </h2>
          <p className="text-base text-slate-300 mb-8 max-w-xl mx-auto font-light">Solicita propuesta personalizada y consulta disponibilidad de fechas para tu evento corporativo en Madrid.</p>
          <div className="mb-10 text-left">
            <CorporateInlineForm title="Solicitar Propuesta para Cena de Empresa" subtitle="Presupuesto a medida y disponibilidad en menos de 24h" />
          </div>
        </div>
      </section>

    </div>
    </NavFooterClient>
    </>
  );
}
