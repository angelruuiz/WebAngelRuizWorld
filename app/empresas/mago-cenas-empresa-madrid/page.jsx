import React from 'react';
import NavFooterClient from '@/components/NavFooterClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import FAQItem from '@/components/FAQItem';
import CorporateInlineForm from '@/components/CorporateInlineForm';

export const metadata = {
  title: { absolute: 'Mago para Cenas de Empresa en Madrid | Ángel Ruiz' },
  description: 'La cena de empresa que tu equipo recordará todo el año. Magia de cerca personalizada con la marca de tu empresa en Madrid. 42 reseñas 5★. Solicita presupuesto.',
  keywords: ['mago cenas empresa madrid', 'mago para cena empresa madrid', 'mago cena navidad empresa madrid', 'contratar mago cena empresa', 'entretenimiento cenas empresa madrid', 'mago corporativo madrid', 'animacion cenas empresa madrid', 'mago para eventos de empresa madrid'],
  alternates: {
    canonical: 'https://angelruiz.world/empresas/mago-cenas-empresa-madrid',
  },
  openGraph: {
    url: 'https://angelruiz.world/empresas/mago-cenas-empresa-madrid',
    title: 'Mago para Cenas de Empresa en Madrid | Ángel Ruiz',
    description: 'Transforma la cena de empresa en Madrid en un evento memorable con magia de cerca corporativa. 42 reseñas 5⭐.',
    images: [{ url: '/images/evento-angel-ruiz-magia.webp', width: 1200, height: 630 }],
  },
};

const faqs = [
  { name: '¿Cuánto cuesta contratar un mago para una cena de empresa en Madrid?', acceptedAnswer: { text: 'Para cenas de empresa en Madrid, las tarifas parten desde 350€ para magia de cóctel y desde 400€ para espectáculos de sobremesa. Para formatos combinados o grandes grupos (+50 personas), solicita presupuesto personalizado.' } },
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
      "name": "Ángel Ruiz | Mago e Ilusionista",
      "url": "https://angelruiz.world",
      "telephone": "+34648055636",
      "priceRange": "€€€",
      "address": { "@type": "PostalAddress", "addressLocality": "Madrid", "addressRegion": "Comunidad de Madrid", "addressCountry": "ES" }
    },
    {
      "@type": "Service",
      "name": "Mago para Cenas de Empresa en Madrid",
      "provider": { "@type": "Person", "name": "Ángel Ruiz" },
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
        </div>
      </header>

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
