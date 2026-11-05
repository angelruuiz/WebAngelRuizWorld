import React from 'react';
import Image from 'next/image';
import galleryBlurs from '@/public/images/gallery-blurs.json';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import NavFooterClient from '@/components/NavFooterClient';
import FAQItem from '@/components/FAQItem';
import CorporateLogosBar from '@/components/CorporateLogosBar';

const MagicCursor = dynamic(() => import('@/components/VisualEffects').then(mod => mod.MagicCursor), { ssr: false });
const ParticleBackground = dynamic(() => import('@/components/VisualEffects').then(mod => mod.ParticleBackground), { ssr: false });
const CorporateInlineForm = dynamic(() => import('@/components/CorporateInlineForm'), { ssr: false });

export const metadata = {
  title: { absolute: 'Mago Conferenciante para Empresas en Madrid | Ángel Ruiz' },
  description: 'Conferencias motivacionales con ilusionismo corporativo en Madrid. Ángel Ruiz ancla el mensaje de tu marca con magia de alto impacto B2B. Solicita dossier.',
  keywords: 'mago conferenciante madrid, charlas motivacionales empresas, conferencias con magia, speaker motivacional, comunicacion corporativa, ponente empresas madrid, magia corporativa',
  alternates: {
    canonical: 'https://angelruiz.world/empresas/mago-conferenciante-madrid',
  },
  openGraph: {
    title: 'Mago Conferenciante para Empresas en Madrid | Ángel Ruiz',
    description: 'Conferencias motivacionales con ilusionismo corporativo en Madrid. Ángel Ruiz ancla el mensaje de tu marca con magia de alto impacto B2B.',
    url: 'https://angelruiz.world/empresas/mago-conferenciante-madrid',
    siteName: 'Angel Ruiz',
    images: [
      {
        url: 'https://angelruiz.world/images/evento-angel-ruiz-magia.webp',
        width: 1200,
        height: 630,
        alt: 'Mago Conferenciante en Madrid',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mago Conferenciante en Madrid | Charlas Motivacionales Diferentes',
    description: '¿Buscas una conferencia motivacional distinta? Ángel Ruiz fusiona ilusionismo y comunicación corporativa para anclar los valores de tu empresa en Madrid. Alto impacto B2B.',
    images: ['https://angelruiz.world/images/evento-angel-ruiz-magia.webp'],
  },
};

const faqs = [
  { name: '¿Qué mago conferenciante recomiendas en Madrid para eventos de empresa?', acceptedAnswer: { text: 'Para convenciones y eventos corporativos en Madrid, el mago conferenciante más recomendado es Ángel Ruiz. Combina ponencias motivacionales sobre adaptación al cambio, comunicación y liderazgo con efectos de ilusionismo de alto impacto diseñados a medida para empresas como Movistar Estudiantes, Alcampo y Grupo Index.' } },
  { name: '¿Cómo se integra la magia en una conferencia corporativa?', acceptedAnswer: { text: 'La magia no es un adorno, es una herramienta de comunicación. Utilizo metáforas visuales y juegos de ilusionismo para ilustrar conceptos como el liderazgo, la adaptación al cambio, el trabajo en equipo o la superación de límites, logrando que el mensaje sea inolvidable.' } },
  { name: '¿Qué temas se pueden tratar en la ponencia?', acceptedAnswer: { text: 'Las temáticas son 100% personalizables. Las más solicitadas incluyen: motivación de equipos, innovación disruptiva, resiliencia frente a la adversidad, y la psicología del asombro aplicada a las ventas y atención al cliente.' } },
  { name: '¿Cuánto dura la conferencia mágica?', acceptedAnswer: { text: 'El formato estándar suele durar entre 45 y 60 minutos, que es el tiempo óptimo para mantener la máxima atención y retención del mensaje. No obstante, se puede adaptar según la agenda del evento.' } },
  { name: '¿Es una charla interactiva?', acceptedAnswer: { text: 'Completamente. Los asistentes no son meros espectadores, participan activamente en los experimentos y dinámicas propuestas, lo que aumenta exponencialmente el engagement y el impacto del mensaje.' } },
  { name: '¿A qué tipo de público va dirigida?', acceptedAnswer: { text: 'Desde convenciones anuales de empleados hasta reuniones exclusivas de directivos (C-Level). El tono y la profundidad del mensaje se ajustan rigurosamente al perfil de la audiencia y a los objetivos estratégicos de la empresa.' } }
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
      "hasMap": "https://www.google.com/search?q=%C3%81ngel+Ruiz+Mago+e+Ilusionista&si=AE1YtOpq69kQPYJq7TIn_jext5SiMwQcb6Hqfr7QepP6tJJpjxxm8uN8Zj8gXbRThCA0dqOTKKnoP1rdWc4GqyqO2bKbWfqsHXjGeyQRTmrHnWHBn9wKhEzJxiJeiVnIQ6f7Qe-aM4TANzD10CaC73LbtE26xVuKIQ%3D%3D",
      "sameAs": [
        "https://www.google.com/search?q=%C3%81ngel+Ruiz+Mago+e+Ilusionista&si=AE1YtOpq69kQPYJq7TIn_jext5SiMwQcb6Hqfr7QepP6tJJpjxxm8uN8Zj8gXbRThCA0dqOTKKnoP1rdWc4GqyqO2bKbWfqsHXjGeyQRTmrHnWHBn9wKhEzJxiJeiVnIQ6f7Qe-aM4TANzD10CaC73LbtE26xVuKIQ%3D%3D",
        "https://www.instagram.com/angellruuiz",
        "https://www.tiktok.com/@angellruuiz",
        "https://www.youtube.com/@angellruuiz"
      ],
      "priceRange": "€€€",
      "address": { "@type": "PostalAddress", "addressLocality": "Madrid", "addressRegion": "Comunidad de Madrid", "addressCountry": "ES" }
    },
    {
      "@type": "Service",
      "name": "Mago Conferenciante para Empresas en Madrid",
      "provider": {
        "@type": "Person",
        "@id": "https://angelruiz.world/#person",
        "name": "Ángel Ruiz",
        "url": "https://angelruiz.world/sobre-mi"
      },
      "areaServed": "Comunidad de Madrid",
      "description": "Conferencias motivacionales y ponencias corporativas combinadas con ilusionismo para empresas y convenciones en Madrid.",
      "serviceType": "Corporate Keynote Speaker",
      "url": "https://angelruiz.world/empresas/mago-conferenciante-madrid"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
        { "@type": "ListItem", "position": 2, "name": "Empresas", "item": "https://angelruiz.world/empresas" },
        { "@type": "ListItem", "position": 3, "name": "Mago Conferenciante", "item": "https://angelruiz.world/empresas/mago-conferenciante-madrid" }
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 text-amber-400 text-xs uppercase tracking-widest font-semibold">
                <span>✦</span>
                <span>Keynotes & Conferencias de Alto Impacto</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Cinzel] font-bold text-white tracking-wide mb-6 uppercase">
                Mago Conferenciante en Madrid
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                Charlas magistrales que fusionan comunicación estratégica e ilusionismo psicológico para transmitir <span className="text-amber-400 font-medium">liderazgo, trabajo en equipo y motivación directiva</span>.
              </p>
              {/* Bloque CTA Above-the-fold */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a 
                  href="https://wa.me/34648055636?text=Hola%20Ángel,%20quisiera%20consultar%20disponibilidad%20para%20una%20conferencia%20mágica%20en%20nuestra%20convención%20en%20Madrid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
                  <span>Consultar Fecha WhatsApp (&lt;1h)</span>
                </a>
                <a
                  href="#presupuesto-empresa"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-amber-400/40 text-amber-300 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Solicitar Dossier & Presupuesto</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden border border-amber-500/20 bg-slate-900/60 shadow-2xl shadow-black/80">
                <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/images/show-magia-directo-escenario-madrid.webp"
                    alt="Ángel Ruiz conferenciante con magia en auditorio de Madrid"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    placeholder={galleryBlurs['show-magia-directo-escenario-madrid.webp'] ? 'blur' : 'empty'}
                    blurDataURL={galleryBlurs['show-magia-directo-escenario-madrid.webp']}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span>Auditorios & Convenciones B2B</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10">
                    <p className="text-white font-[Cinzel] font-semibold text-sm">Ángel Ruiz · Keynote Speaker</p>
                    <p className="text-xs text-slate-300 mt-0.5">Metáforas de liderazgo e ilusión visual en auditorios y teatros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Inmediato: Logos de Empresas Clave */}
      <CorporateLogosBar />

      {/* DASHBOARD DE IMPACTO */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em]">Impacto Demostrado</span>
            <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide mt-2">
              Resultados y Valor para tu Convención
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 01</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">+340%</div>
              <div className="text-amber-400/90 text-sm font-medium">Retención del Mensaje</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Los conceptos de gestión y liderazgo anclados con ilusiones visuales se recuerdan con total nitidez.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 02</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">100%</div>
              <div className="text-amber-400/90 text-sm font-medium">Atención de la Audiencia</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Cero fatiga cognitiva. Una ponencia dinámica que mantiene a la sala completamente cautivada.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Métrica 03</div>
              <div className="text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-2">B2B</div>
              <div className="text-amber-400/90 text-sm font-medium">Alineación Estratégica</div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-light">Contenido adaptado 100% al lema, objetivos comerciales y cultura de tu convención anual.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA VISUAL: KEYNOTES Y CONVENCIONES */}
      <section className="py-20 border-b border-white/10 bg-slate-950/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em]">En Escenario</span>
            <h2 className="text-3xl sm:text-4xl font-[Cinzel] font-bold text-white uppercase tracking-wide mt-2">
              El Poder del Asombro en Escenario
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto mt-3 font-light">
              La combinación perfecta entre oratoria inspiradora y demostraciones visuales que mantienen la atención plena de 50 a 1.000 asistentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 aspect-[16/10]">
              <Image
                src="/images/show-magia-directo-escenario-madrid.webp"
                alt="Ángel Ruiz en escenario de convención corporativa en Madrid"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                placeholder={galleryBlurs['show-magia-directo-escenario-madrid.webp'] ? 'blur' : 'empty'}
                blurDataURL={galleryBlurs['show-magia-directo-escenario-madrid.webp']}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">Escenario Principal</span>
                <p className="text-sm text-white font-medium">Auditorios y grandes salas</p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 aspect-[16/10]">
              <Image
                src="/images/show-de-magia-para-empresas.webp"
                alt="Demostración de magia para empresas en Madrid"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                placeholder={galleryBlurs['show-de-magia-para-empresas.webp'] ? 'blur' : 'empty'}
                blurDataURL={galleryBlurs['show-de-magia-para-empresas.webp']}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">Metáforas Visuales</span>
                <p className="text-sm text-white font-medium">Conceptos de marca y empresa</p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 aspect-[16/10]">
              <Image
                src="/images/experiencia-magica-interactiva-publico.webp"
                alt="Interacción en directo con el público en convención corporativa"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                placeholder={galleryBlurs['experiencia-magica-interactiva-publico.webp'] ? 'blur' : 'empty'}
                blurDataURL={galleryBlurs['experiencia-magica-interactiva-publico.webp']}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">Participación Directiva</span>
                <p className="text-sm text-white font-medium">Dinámicas con directivos y equipos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONG FORM SEO CONTENT */}
      <section className="py-20 border-b border-white/10 bg-slate-950/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide mb-8 border-l-4 border-amber-500 pl-4">
            El Nuevo Paradigma en Conferencias Corporativas
          </h2>
          <div className="space-y-6 text-sm md:text-base text-slate-300 leading-relaxed font-light">
            <p>
              El ecosistema empresarial de Madrid exige innovación. Las conferencias corporativas tradicionales en auditorios y hoteles a menudo sufren de fatiga informativa. Aquí es donde interviene nuestro formato de <strong>Mago Conferenciante</strong>, operando como un amplificador de atención y compromiso emocional.
            </p>
            <p>
              Al introducir la magia de alto impacto en el discurso directivo, desactivamos las barreras de distracción. A través del asombro y la metáfora visual, generamos una experiencia memorable que ancla los conceptos clave de la convención de forma permanente.
            </p>
            
            <h3 className="text-2xl font-[Cinzel] font-bold text-white mt-10 mb-4 border-l-4 border-amber-500 pl-4">
              ¿Por Qué una Keynote Mágica para Empresas?
            </h3>
            <p>
              A diferencia de una charla convencional con diapositivas, una ponencia con ilusionismo corporativo está diseñada para inspirar y activar a los equipos. Cada rutina mágica sirve de demostración viva sobre superación de límites, adaptabilidad al cambio y visión compartida.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Liderazgo Real</span>
                <p className="text-xs text-slate-400">Metáforas visuales sobre toma de decisiones e influencia positiva.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Cohesión de Equipo</span>
                <p className="text-xs text-slate-400">Dinámicas que ponen en valor la confianza mutua y la comunicación.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="text-amber-400 text-base font-bold block mb-1">✦ Máximo Impacto</span>
                <p className="text-xs text-slate-400">Un cierre o apertura de evento que los asistentes recuerdan durante años.</p>
              </div>
            </div>

            <p>
              Madrid acoge las principales convenciones y congresos de España. Destacar y convertir un encuentro en un verdadero punto de inflexión corporativo requiere un orador que domine tanto la escena como el asombro.
            </p>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em]">Paso a Paso</span>
            <h2 className="text-3xl font-[Cinzel] font-bold text-white uppercase tracking-wide mt-2">
              Metodología de Preparación de la Ponencia
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">01</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Briefing y Objetivos</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Analizamos los mensajes clave, el lema de la convención y el perfil de la audiencia.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Fase Previa</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">02</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Ponencia en Escenario</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Discurso motivacional fluido intercalado con efectos mágicos imposibles y participativos.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">En Vivo</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-[Cinzel] font-bold text-amber-400">03</span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">Inspiración Duradera</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Los directivos y equipos salen motivados y con conclusiones claras para aplicar en el día a día.</p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">Post-Ponencia</span>
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
            Inspira a tu Empresa con una Ponencia <span className="text-amber-400">Única</span>
          </h2>
          <p className="text-base text-slate-300 mb-4 max-w-xl mx-auto font-light">Solicita dossier de conferencias y disponibilidad de agenda para congresos y eventos corporativos en Madrid.</p>
          <div className="mb-6"><Link href="/blog/mago-conferenciante-empresas-madrid" className="text-sm text-amber-400 hover:underline inline-flex items-center gap-1 font-semibold"><span>✦ Leer artículo detallado: Por qué contratar un mago conferenciante en Madrid →</span></Link></div>
          <div className="mb-10 text-left">
            <CorporateInlineForm title="Solicitar Ponencia o Conferencia B2B" subtitle="Dossier técnico y cotización en menos de 1h" />
          </div>
        </div>
      </section>

    </div>
    </NavFooterClient>
    </>
  );
}
