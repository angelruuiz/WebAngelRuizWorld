import React from 'react';
import NavFooterClient from '@/components/NavFooterClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import FAQItem from '@/components/FAQItem';

export const metadata = {
  title: { absolute: 'Mago para Cenas de Empresa en Madrid 2026 | Ángel Ruiz | Ilusionismo Corporativo' },
  description: '¿Buscas mago para la cena de empresa en Madrid? Ángel Ruiz transforma cenas de Navidad, fin de año y eventos corporativos en experiencias inolvidables. ⭐⭐⭐⭐⭐ 39 reseñas. Solicita presupuesto.',
  keywords: ['mago cenas empresa madrid', 'mago para cena empresa madrid', 'mago cena navidad empresa madrid', 'contratar mago cena empresa', 'entretenimiento cenas empresa madrid', 'mago corporativo madrid', 'animacion cenas empresa madrid'],
  alternates: {
    canonical: 'https://angelruiz.world/empresas/mago-cenas-empresa-madrid',
  },
  openGraph: {
    url: 'https://angelruiz.world/empresas/mago-cenas-empresa-madrid',
    title: 'Mago para Cenas de Empresa en Madrid 2026 | Ángel Ruiz',
    description: 'Transforma la cena de empresa en Madrid en un evento memorable con magia de cerca corporativa. 39 reseñas 5⭐.',
    images: [{ url: '/images/evento-angel-ruiz-magia.webp', width: 1200, height: 630 }],
  },
};

const faqs = [
  { name: '¿Cuánto cuesta contratar un mago para una cena de empresa en Madrid?', acceptedAnswer: { text: 'Para cenas de empresa en Madrid, el precio de un mago profesional oscila entre 500€ y 900€ dependiendo del formato (cóctel de pie, magia de mesa o espectáculo central) y la duración. Para cenas de Navidad grandes (+50 personas), consulta presupuesto personalizado.' } },
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
      "address": { "@type": "PostalAddress", "addressLocality": "Madrid", "addressRegion": "Comunidad de Madrid", "addressCountry": "ES" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "worstRating": "1", "ratingCount": "39" }
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
    <div className="min-h-screen bg-[#0A0A0A] text-slate-300 font-sans selection:bg-amber-500/30">
      
      {/* HEADER B2B BRUTALIST */}
      <header className="relative pt-32 pb-20 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-[#0A0A0A] to-[#0A0A0A]"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="inline-block border border-amber-500/50 bg-amber-500/10 px-3 py-1 mb-6 text-amber-500 font-mono text-sm tracking-widest uppercase">
            [ STATUS: EVENTO_OPTIMIZADO ]
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 uppercase">
            Mago para Cenas de Empresa <br/> <span className="text-amber-500 block mt-2">ALTO IMPACTO MADRID</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-light font-mono leading-relaxed">
            No contratas magia. Contratas <span className="text-white font-medium">retención de marca, captación de leads y fidelización</span>. Intervenciones premium para el ecosistema corporativo de Madrid.
          </p>
        </div>
      </header>

      {/* DASHBOARD DE IMPACTO */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-amber-500 font-mono text-2xl">{"//"}</span>
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Dashboard de Impacto B2B</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 border border-white/10 bg-[#111111] hover:border-amber-500/50 transition-colors">
              <div className="text-amber-500 font-mono text-sm mb-4 uppercase tracking-widest">Métrica 01</div>
              <div className="text-5xl font-bold text-white mb-2">+340%</div>
              <div className="text-slate-400 font-mono text-sm">Retención del Mensaje</div>
              <p className="mt-4 text-sm text-slate-500">Los mensajes clave integrados en ilusiones se graban en la memoria a largo plazo de los asistentes.</p>
            </div>
            <div className="p-8 border border-white/10 bg-[#111111] hover:border-amber-500/50 transition-colors">
              <div className="text-amber-500 font-mono text-sm mb-4 uppercase tracking-widest">Métrica 02</div>
              <div className="text-5xl font-bold text-white mb-2">x3</div>
              <div className="text-slate-400 font-mono text-sm">Generación de Leads</div>
              <p className="mt-4 text-sm text-slate-500">Atracción masiva al stand en ferias y eventos, cualificación instantánea del prospecto B2B.</p>
            </div>
            <div className="p-8 border border-white/10 bg-[#111111] hover:border-amber-500/50 transition-colors">
              <div className="text-amber-500 font-mono text-sm mb-4 uppercase tracking-widest">Métrica 03</div>
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-slate-400 font-mono text-sm">Integración Corporativa</div>
              <p className="mt-4 text-sm text-slate-500">El show no es un parche. Es un vehículo de comunicación adaptado 100% a la cultura de tu empresa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LONG FORM SEO CONTENT */}
      <section className="py-24 border-b border-white/10 bg-[#0C0C0C]">
        <div className="max-w-4xl mx-auto px-6 prose prose-invert prose-amber max-w-none">
          <div className="font-mono text-amber-500 mb-8 border-l-2 border-amber-500 pl-4 py-1">
            [ DOCUMENTACIÓN TÉCNICA: CENA DE EMPRESA ]
          </div>
          
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight mb-8">El Nuevo Paradigma en Eventos Corporativos</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            El ecosistema empresarial de Madrid exige innovación. Los eventos corporativos tradicionales ya no generan el mismo ROI. Los asistentes están expuestos a una sobreinformación constante (fatiga cognitiva), lo que hace que los mensajes clave de tu empresa se pierdan. Aquí es donde interviene nuestro servicio de <strong>Mago para Cenas de Empresa</strong>, operando como un hackeo atencional.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            Al introducir la magia de alto impacto en el entorno corporativo, desactivamos los filtros de resistencia del cliente o empleado. A través del asombro, generamos un pico de dopamina que ancla tu marca y tu producto en la memoria del espectador de forma permanente.
          </p>
          
          <h3 className="text-2xl font-bold text-white mt-12 mb-6">¿Por qué un enfoque B2B?</h3>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            A diferencia de la magia convencional o de entretenimiento puro, el ilusionismo corporativo está diseñado arquitectónicamente para cumplir objetivos de negocio. No se trata solo de sorprender, sino de <strong>comunicar</strong>. Cada rutina está diseñada bajo principios psicológicos para transmitir confianza, innovación y liderazgo en el mercado madrileño y nacional.
          </p>
          <ul className="space-y-4 mb-8 text-slate-400 list-none pl-0">
            <li className="flex items-start"><span className="text-amber-500 mr-3">{"->"}</span> <span><strong>Captación de Atención:</strong> Rompemos el hielo en entornos fríos o altamente competitivos.</span></li>
            <li className="flex items-start"><span className="text-amber-500 mr-3">{"->"}</span> <span><strong>Fidelización C-Level:</strong> Experiencias sofisticadas que demuestran estatus y exclusividad.</span></li>
            <li className="flex items-start"><span className="text-amber-500 mr-3">{"->"}</span> <span><strong>Asociación Positiva:</strong> Tu marca se convierte en el facilitador de una experiencia memorable.</span></li>
          </ul>

          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            La ciudad de Madrid alberga algunos de los eventos, ferias (como IFEMA) y convenciones más importantes de Europa. Destacar en este ruido requiere más que un buen stand o una buena cena. Requiere una disrupción cognitiva. Convertimos tu <em>cena de empresa</em> en el epicentro del evento, el lugar donde se cierran los tratos y se genera el verdadero networking.
          </p>
          
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            Nuestro protocolo de actuación implica una inmersión previa en la cultura de tu empresa. Entendemos qué vendes, a quién se lo vendes y qué problema resuelves. Luego, traducimos esa propuesta de valor a un lenguaje visual, asombroso y altamente persuasivo que tu audiencia no podrá ignorar. El resultado no es un aplauso; es un aumento en el LTV (Life-Time Value) de tus clientes y un ambiente laboral fortalecido en tus equipos.
          </p>
        </div>
      </section>

      {/* METODOLOGÍA DE ACTIVACIÓN */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-amber-500 font-mono text-2xl">{"//"}</span>
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Metodología de Activación</h2>
          </div>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            
            {/* FASE 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-amber-500 bg-[#0A0A0A] text-amber-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(245,158,11,0.2)] z-10 font-mono text-sm">
                01
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 border border-white/10 bg-[#111111]">
                <div className="text-amber-500 font-mono text-sm mb-2">FASE DE AUDITORÍA Y ALINEACIÓN</div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase">Análisis Corporativo</h3>
                <p className="text-slate-400 text-sm">Estudiamos tus objetivos, tu audiencia y el mensaje central. Configuramos las metáforas visuales que alinearán el show con tu identidad de marca.</p>
              </div>
            </div>

            {/* FASE 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0A0A0A] text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-sm transition-colors group-hover:border-amber-500 group-hover:text-amber-500">
                02
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 border border-white/10 bg-[#111111]">
                <div className="text-slate-500 font-mono text-sm mb-2 group-hover:text-amber-500 transition-colors">FASE DE DESPLIEGUE</div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase">Ejecución en Entorno</h3>
                <p className="text-slate-400 text-sm">Implementación quirúrgica durante el evento. Actuamos como un catalizador social, elevando la energía de la sala y posicionando la marca en el centro de la atención.</p>
              </div>
            </div>

            {/* FASE 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0A0A0A] text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-sm transition-colors group-hover:border-amber-500 group-hover:text-amber-500">
                03
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 border border-white/10 bg-[#111111]">
                <div className="text-slate-500 font-mono text-sm mb-2 group-hover:text-amber-500 transition-colors">FASE DE RETORNO</div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase">Medición de Impacto</h3>
                <p className="text-slate-400 text-sm">El impacto se prolonga post-evento. Los asistentes recuerdan la experiencia, asocian el asombro con la empresa y los leads generados presentan un nivel de cualificación superior.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-16 text-center">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Preguntas Frecuentes <span className="text-amber-500">_FAQ</span></h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/5 mix-blend-screen"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-8">
            Inicializa tu <span className="text-amber-500">Siguiente Evento</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 font-mono">No dejes la retención de marca al azar. Despliega una estrategia de impacto asegurada.</p>
          <a href="https://wa.me/34648055636" className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-500 bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-black font-mono font-bold uppercase tracking-widest transition-all duration-300">
            [ SOLICITAR PROPUESTA B2B ]
          </a>
        </div>
      </section>

    </div>
    </NavFooterClient>
    </>
  );
}
