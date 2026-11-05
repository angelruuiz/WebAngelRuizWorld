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
      "name": "Mago para Team Building en Madrid",
      "provider": {
        "@type": "Person",
        "@id": "https://angelruiz.world/#person",
        "name": "Ángel Ruiz",
        "url": "https://angelruiz.world/sobre-mi"
      },
      "areaServed": "Comunidad de Madrid",
      "description": "Actividades y talleres de magia corporativa para team building, liderazgo y cohesión de equipos de trabajo en Madrid.",
      "serviceType": "Corporate Team Building Entertainment",
      "url": "https://angelruiz.world/empresas/mago-team-building-madrid"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 text-amber-400 text-xs uppercase tracking-widest font-semibold">
                <span>✦</span>
                <span>Talleres & Dinámicas de Cohesión de Equipos</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Cinzel] font-bold text-white tracking-wide mb-6 uppercase">
                Mago para Team Building en Madrid
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                Experiencias inmersivas donde la magia se convierte en el vehículo para fomentar la <span className="text-amber-400 font-medium">confianza, el pensamiento lateral, la colaboración y la motivación entre equipos</span>.
              </p>
              {/* Bloque CTA Above-the-fold */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a 
                  href="https://wa.me/34648055636?text=Hola%20Ángel,%20quisiera%20consultar%20disponibilidad%20para%20un%20taller%20o%20dinámica%20de%20Team%20Building%20con%20magia%20en%20Madrid"
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
                  <span>Ver Tarifas y Presupuesto</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden border border-amber-500/20 bg-slate-900/60 shadow-2xl shadow-black/80">
                <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/images/angel-ruiz-evento.webp"
                    alt="Ángel Ruiz liderando dinámica de magia y team building en Madrid"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    placeholder={galleryBlurs['angel-ruiz-evento.webp'] ? 'blur' : 'empty'}
                    blurDataURL={galleryBlurs['angel-ruiz-evento.webp']}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Dinámicas Interactivas de Equipo</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10">
                    <p className="text-white font-[Cinzel] font-semibold text-sm">Ángel Ruiz · Team Building</p>
                    <p className="text-xs text-slate-300 mt-0.5">Talleres prácticos, resolución de retos y cohesión participativa</p>
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

      {/* GALERÍA VISUAL: TEAM BUILDING EN ACCIÓN */}
      <section className="py-20 border-b border-white/10 bg-slate-950/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-[0.2em]">En Acción</span>
            <h2 className="text-3xl sm:text-4xl font-[Cinzel] font-bold text-white uppercase tracking-wide mt-2">
              Dinámicas que Conectan Personas
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto mt-3 font-light">
              Desafíos grupales donde el asombro y la colaboración derriban barreras y crean vínculos de confianza duraderos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 aspect-[16/10]">
              <Image
                src="/images/magia-cocktail-empresa-madrid.webp"
                alt="Dinámica de comunicación y trabajo en equipo con magia"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                placeholder={galleryBlurs['magia-cocktail-empresa-madrid.webp'] ? 'blur' : 'empty'}
                blurDataURL={galleryBlurs['magia-cocktail-empresa-madrid.webp']}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">Cooperación Directa</span>
                <p className="text-sm text-white font-medium">Resolución de retos en grupo</p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 aspect-[16/10]">
              <Image
                src="/images/angel-ruiz-evento.webp"
                alt="Pensamiento lateral e ilusión aplicada a dinámicas de empresa"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                placeholder={galleryBlurs['angel-ruiz-evento.webp'] ? 'blur' : 'empty'}
                blurDataURL={galleryBlurs['angel-ruiz-evento.webp']}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">Pensamiento Lateral</span>
                <p className="text-sm text-white font-medium">Desbloqueo de creatividad colectiva</p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 aspect-[16/10]">
              <Image
                src="/images/risas-reacciones-magia-restaurante-madrid.webp"
                alt="Clima de confianza y risas espontáneas en jornada de team building"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                placeholder={galleryBlurs['risas-reacciones-magia-restaurante-madrid.webp'] ? 'blur' : 'empty'}
                blurDataURL={galleryBlurs['risas-reacciones-magia-restaurante-madrid.webp']}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">Clima Positivo</span>
                <p className="text-sm text-white font-medium">Conexión humana fuera de la rutina</p>
              </div>
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
