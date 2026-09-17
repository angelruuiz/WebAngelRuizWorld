'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import Link from 'next/link'

interface Stage {
  id: number
  number: string
  category: string
  title: string
  highlight: string
  highlightLabel: string
  summary: string
  cta: string
}

const stages: Stage[] = [
  {
    id: 1,
    number: '01',
    category: 'El Contexto',
    title: 'El Reto del Mercado',
    highlight: '0€ en Ads',
    highlightLabel: 'Tráfico 100% Orgánico',
    summary:
      'El sector de eventos en Madrid está copado por grandes empresas con presupuestos de miles de euros. Usé ingenio técnico para competir sin gastar un euro.',
    cta: 'Ver resultados',
  },
  {
    id: 2,
    number: '02',
    category: 'Estrategia',
    title: 'Datos vs Fuerza Bruta',
    highlight: 'Top 3',
    highlightLabel: 'Posicionamiento Local',
    summary:
      'En vez de saturar de palabras clave, estructuré los datos para que Google y las IAs entiendan con total precisión el servicio y su ubicación.',
    cta: 'Ver estructura',
  },
  {
    id: 3,
    number: '03',
    category: 'Rendimiento',
    title: 'Código Limpio y Rápido',
    highlight: '100/100',
    highlightLabel: 'Google PageSpeed',
    summary:
      'Sin plantillas sobrecargadas ni dependencias innecesarias. Una web ultraligera que carga al instante y que enamora al algoritmo de Google.',
    cta: 'Ver métricas',
  },
  {
    id: 4,
    number: '04',
    category: 'Prácticas FCT',
    title: 'Mi Objetivo: Las FCT',
    highlight: 'ASIR + DAM',
    highlightLabel: 'Disponibilidad Inmediata',
    summary:
      'Graduado en ASIR y terminando 2º de DAM. Busco una empresa donde seguir aprendiendo, aportar valor real y ganarme mi puesto.',
    cta: 'Contactar',
  },
]

const snippetJSON = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Magia & Eventos Madrid",
  "geo": {
    "latitude": 40.4168,
    "longitude": -3.7038
  },
  "areaServed": "Madrid Capital"
}`

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 240,
      damping: 22,
    },
  },
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: 0.2 },
  },
}

export default function CvSeoPage() {
  const [activeModal, setActiveModal] = useState<number | null>(null)
  const [selectedStage, setSelectedStage] = useState<number>(1)
  const [copiedCode, setCopiedCode] = useState<boolean>(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 1800)
  }

  return (
    <main className="relative w-full min-h-screen lg:h-screen lg:overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-7 cv-seo-hud-grid bg-[#070b14] gap-6 lg:gap-2">
      {/* Ambient Lighting Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[240px] bg-[#d4af37]/10 rounded-full blur-[140px]" />
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-[#1e293b]/50 rounded-full blur-[130px]" />
        <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-[#d4af37]/[0.12] rounded-full blur-[130px]" />
      </div>

      {/* TOP NAVBAR */}
      <header className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <Link href="/" className="font-sans text-sm font-semibold text-white tracking-tight hover:text-[#f3d078] transition-colors">
              Ángel Ruiz
            </Link>
          </div>
          <span className="hidden sm:inline-block cv-seo-font-mono text-xs text-[#f3d078] bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/10">
            Téc. ASIR & 2º DAM
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden sm:inline-flex items-center text-xs cv-seo-font-mono text-slate-400 hover:text-[#f3d078] transition-colors"
          >
            angelruiz.world ↗
          </Link>
          <button
            onClick={() => setActiveModal(4)}
            className="group px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#d4af37] hover:brightness-110 text-[#070b14] cv-seo-font-mono text-xs font-bold tracking-wide transition-all shadow-[0_0_16px_rgba(212,175,55,0.25)] flex items-center gap-1.5"
          >
            <span>Contacto FCT</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 text-center max-w-3xl mx-auto pt-1 pb-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs cv-seo-font-mono text-[#f3d078] mb-3 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          <span>Caso de Estudio • Estudiante 2º DAM & ASIR</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          David contra Goliat:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3d078] via-[#e5c158] to-[#fff1ca]">
            Mi experimento SEO
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto mt-3 font-sans leading-relaxed font-light">
          Cómo un estudiante posicionó su web en un sector dominado por grandes empresas y anuncios en menos de 1 año. Y por qué busco mis prácticas contigo.
        </p>
      </section>

      {/* 4 CARDS GRID */}
      <section className="relative z-10 w-full max-w-7xl mx-auto my-auto py-2">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stages.map((stage) => (
            <motion.div key={stage.id} variants={cardVariants}>
              <div
                onClick={() => setActiveModal(stage.id)}
                onMouseEnter={() => setSelectedStage(stage.id)}
                className={`cv-seo-liquid-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer group relative overflow-hidden min-h-[380px] lg:h-[410px] border transition-all duration-300 ${
                  selectedStage === stage.id
                    ? 'border-[#d4af37]/50 shadow-[0_12px_36px_rgba(212,175,55,0.15)] bg-slate-900/60'
                    : 'border-white/[0.08] hover:border-[#d4af37]/40 bg-slate-950/40'
                }`}
              >
                {/* Subtle top indicator */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="cv-seo-font-mono text-xs font-semibold tracking-wider text-[#d4af37] px-2.5 py-0.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/25">
                      {stage.number}
                    </span>
                    <span className="text-xs cv-seo-font-mono text-slate-400">
                      {stage.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#f3d078] transition-colors leading-snug">
                    {stage.title}
                  </h3>
                </div>

                {/* Centerpiece Stat Box */}
                <div className="my-4 py-4 px-4 rounded-xl bg-white/[0.02] border border-white/[0.06] group-hover:border-[#d4af37]/20 group-hover:bg-[#d4af37]/[0.03] transition-all text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3d078] to-[#d4af37] font-sans tracking-tight">
                    {stage.highlight}
                  </div>
                  <div className="text-xs cv-seo-font-mono text-slate-400 mt-1">
                    {stage.highlightLabel}
                  </div>
                </div>

                {/* Bottom Summary & CTA */}
                <div>
                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans line-clamp-3 mb-4 font-light">
                    {stage.summary}
                  </p>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs cv-seo-font-mono text-[#f3d078] group-hover:text-white transition-colors">
                    <span className="font-medium">{stage.cta}</span>
                    <span className="text-sm transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center font-sans text-xs text-slate-400/80 mt-5 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          <span>Haz clic en cualquiera de las tarjetas para ver los datos y el proceso en detalle</span>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto pt-4 pb-2 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 font-sans">
        <div className="flex items-center gap-2">
          <span className="text-slate-500">© {new Date().getFullYear()} Ángel Ruiz</span>
          <span>•</span>
          <span className="text-slate-400 cv-seo-font-mono text-[11px]">Madrid, España</span>
          <span>•</span>
          <a
            href="mailto:angellruuizgarcia@gmail.com"
            className="text-[#f3d078] hover:underline cv-seo-font-mono text-[11px]"
          >
            angellruuizgarcia@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs cv-seo-font-mono text-slate-400">
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setActiveModal(1)}>01. Mercado</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setActiveModal(2)}>02. Estrategia</span>
          <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setActiveModal(3)}>03. Rendimiento</span>
          <span className="hover:text-[#f3d078] cursor-pointer transition-colors font-medium text-[#f3d078]" onClick={() => setActiveModal(4)}>04. FCT</span>
        </div>
      </footer>

      {/* INTERACTIVE MODALS */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveModal(null)} />

            <motion.div
              className="relative z-10 w-full max-w-2xl cv-seo-liquid-card rounded-2xl p-6 sm:p-7 border border-[#d4af37]/45 shadow-2xl max-h-[92vh] overflow-y-auto cv-seo-custom-scroll bg-[#0a0f1d]/95"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-[#d4af37]/10 hover:bg-[#d4af37]/20 border border-[#d4af37]/30 flex items-center justify-center text-[#f3d078] hover:text-white transition-colors"
              >
                ✕
              </button>

              {/* MODAL 1 */}
              {activeModal === 1 && (
                <div className="space-y-6 font-sans">
                  <div className="flex items-center gap-3">
                    <span className="text-xs cv-seo-font-mono font-bold px-2.5 py-1 rounded-full bg-[#d4af37]/15 text-[#f3d078] border border-[#d4af37]/30">
                      01
                    </span>
                    <div>
                      <span className="text-xs cv-seo-font-mono uppercase text-[#d4af37] tracking-wider block">
                        El Reto del Mercado
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Competir contra gigantes con 0€ en anuncios
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    En el sector de eventos en Madrid, las grandes agencias pagan más de 3€ por cada clic en Google Ads. Como estudiante sin ese presupuesto, mi única opción fue el ingenio técnico: construir una web extremadamente bien estructurada para que Google la colocara en las primeras posiciones de forma gratuita.
                  </p>

                  <div className="rounded-2xl p-5 bg-white/[0.02] border border-white/[0.08] space-y-3">
                    <div className="text-xs cv-seo-font-mono text-[#f3d078] tracking-wide uppercase">
                      Resultados reales en Google Search Console (3 meses)
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-slate-400 text-xs block mb-1">Clics conseguidos</span>
                        <span className="text-2xl font-bold text-white font-sans">93</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-slate-400 text-xs block mb-1">Impresiones</span>
                        <span className="text-2xl font-bold text-[#f3d078] font-sans">6,52K</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-slate-400 text-xs block mb-1">Ratio de clics</span>
                        <span className="text-2xl font-bold text-white font-sans">1,4%</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-slate-400 text-xs block mb-1">Posición media</span>
                        <span className="text-2xl font-bold text-[#d4af37] font-sans">8,3</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => setActiveModal(2)}
                      className="px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-[#d4af37]/20 text-[#f3d078] hover:text-white border border-white/10 hover:border-[#d4af37]/40 cv-seo-font-mono text-xs font-semibold flex items-center gap-2 transition-all"
                    >
                      <span>Siguiente: Estrategia de Datos</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              )}

              {/* MODAL 2 */}
              {activeModal === 2 && (
                <div className="space-y-6 font-sans">
                  <div className="flex items-center gap-3">
                    <span className="text-xs cv-seo-font-mono font-bold px-2.5 py-1 rounded-full bg-[#d4af37]/15 text-[#f3d078] border border-[#d4af37]/30">
                      02
                    </span>
                    <div>
                      <span className="text-xs cv-seo-font-mono uppercase text-[#d4af37] tracking-wider block">
                        Estrategia
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Hacer que Google y las IAs entiendan el negocio
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    En lugar de saturar la página de palabras clave repetitivas, implementé microdatos estructurados (Schema JSON-LD). De este modo, cuando los rastreadores de Google o las inteligencias artificiales leen la web, saben exactamente qué servicio se ofrece, en qué coordenadas de Madrid opera y cómo clasificarlo en el mapa local.
                  </p>

                  <div className="rounded-2xl p-4 bg-slate-950/70 border border-white/[0.08] cv-seo-font-mono text-xs">
                    <div className="flex justify-between items-center pb-2.5 border-b border-white/[0.08] text-slate-300">
                      <span className="text-[11px] text-[#f3d078]">Estructura de datos implementada</span>
                      <button
                        onClick={() => copyToClipboard(snippetJSON)}
                        className="text-[#070b14] bg-[#d4af37] hover:bg-[#f3d078] px-3 py-1 rounded-full text-xs font-bold transition-all shadow-[0_0_10px_rgba(212,175,55,0.2)]"
                      >
                        {copiedCode ? '✓ Copiado' : 'Copiar'}
                      </button>
                    </div>
                    <pre className="text-[#fbe7b2] pt-3 text-xs overflow-x-auto leading-relaxed">
                      <code>{snippetJSON}</code>
                    </pre>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      onClick={() => setActiveModal(1)}
                      className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white cv-seo-font-mono text-xs transition-colors"
                    >
                      ← Anterior
                    </button>
                    <button
                      onClick={() => setActiveModal(3)}
                      className="px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-[#d4af37]/20 text-[#f3d078] hover:text-white border border-white/10 hover:border-[#d4af37]/40 cv-seo-font-mono text-xs font-semibold flex items-center gap-2 transition-all"
                    >
                      <span>Siguiente: Rendimiento</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              )}

              {/* MODAL 3 */}
              {activeModal === 3 && (
                <div className="space-y-6 font-sans">
                  <div className="flex items-center gap-3">
                    <span className="text-xs cv-seo-font-mono font-bold px-2.5 py-1 rounded-full bg-[#d4af37]/15 text-[#f3d078] border border-[#d4af37]/30">
                      03
                    </span>
                    <div>
                      <span className="text-xs cv-seo-font-mono uppercase text-[#d4af37] tracking-wider block">
                        Rendimiento
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        100/100 en Google PageSpeed
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    A Google le encanta la velocidad. Para lograr la máxima puntuación, evité gestores de contenido pesados y plugins lentos. Desarrollé una web limpia, con imágenes optimizadas y compresión en servidor que carga de forma instantánea.
                  </p>

                  <div className="rounded-2xl p-5 bg-white/[0.02] border border-white/[0.08] space-y-4">
                    <div className="text-xs cv-seo-font-mono text-[#f3d078] uppercase tracking-wide">
                      Puntuación oficial de Google PageSpeed Insights
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="w-11 h-11 mx-auto rounded-full border-2 border-emerald-400 flex items-center justify-center text-emerald-400 font-bold text-sm mb-1.5 shadow-[0_0_12px_rgba(52,211,153,0.25)]">
                          100
                        </div>
                        <span className="text-slate-300 text-xs font-medium">Rendimiento</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="w-11 h-11 mx-auto rounded-full border-2 border-emerald-400 flex items-center justify-center text-emerald-400 font-bold text-sm mb-1.5 shadow-[0_0_12px_rgba(52,211,153,0.25)]">
                          100
                        </div>
                        <span className="text-slate-300 text-xs font-medium">Accesibilidad</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="w-11 h-11 mx-auto rounded-full border-2 border-emerald-400 flex items-center justify-center text-emerald-400 font-bold text-sm mb-1.5 shadow-[0_0_12px_rgba(52,211,153,0.25)]">
                          100
                        </div>
                        <span className="text-slate-300 text-xs font-medium">Buenas Prácticas</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="w-11 h-11 mx-auto rounded-full border-2 border-emerald-400 flex items-center justify-center text-emerald-400 font-bold text-sm mb-1.5 shadow-[0_0_12px_rgba(52,211,153,0.25)]">
                          100
                        </div>
                        <span className="text-slate-300 text-xs font-medium">SEO</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      onClick={() => setActiveModal(2)}
                      className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white cv-seo-font-mono text-xs transition-colors"
                    >
                      ← Anterior
                    </button>
                    <button
                      onClick={() => setActiveModal(4)}
                      className="px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-[#d4af37]/20 text-[#f3d078] hover:text-white border border-white/10 hover:border-[#d4af37]/40 cv-seo-font-mono text-xs font-semibold flex items-center gap-2 transition-all"
                    >
                      <span>Siguiente: Propuesta FCT</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              )}

              {/* MODAL 4 */}
              {activeModal === 4 && (
                <div className="space-y-6 font-sans">
                  <div className="flex items-center gap-3">
                    <span className="text-xs cv-seo-font-mono font-bold px-2.5 py-1 rounded-full bg-[#d4af37]/15 text-[#f3d078] border border-[#d4af37]/30">
                      04
                    </span>
                    <div>
                      <span className="text-xs cv-seo-font-mono uppercase text-[#d4af37] tracking-wider block">
                        Prácticas FCT
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        ¿Por qué busco mis prácticas contigo?
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    Ya soy técnico ASIR y este año finalizo 2º de DAM. Todo este experimento lo he desarrollado por pura curiosidad y ganas de aprender, pero ahora quiero aplicar esta misma iniciativa y compromiso en proyectos de una empresa real, aportando desde el primer día y ganándome el puesto para continuar en el equipo.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                      <span className="text-xs cv-seo-font-mono text-slate-400 uppercase block mb-1.5">Perfil Académico</span>
                      <span className="text-white font-medium block text-sm">Técnico Superior ASIR (Titulado)</span>
                      <span className="text-[#f3d078] font-medium block text-sm">2º DAM (Listo para FCT)</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                      <span className="text-xs cv-seo-font-mono text-slate-400 uppercase block mb-1.5">Tecnologías Clave</span>
                      <span className="text-white block text-sm">Java, Spring Boot, React, SQL</span>
                      <span className="text-[#fbe7b2] block text-sm">Linux, WPO, SEO Técnico</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-r from-[#d4af37]/15 via-[#e5c158]/10 to-transparent border border-[#d4af37]/35 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-sm font-semibold text-white block">
                        ¿Hablamos sobre las prácticas FCT?
                      </span>
                      <span className="text-xs text-slate-300">
                        Disponible para incorporación inmediata en Madrid o remoto.
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <Link
                        href="/"
                        className="flex-1 sm:flex-none text-center px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 text-xs cv-seo-font-mono border border-white/10 transition-colors"
                      >
                        Ver mi web ↗
                      </Link>
                      <a
                        href="mailto:angellruuizgarcia@gmail.com"
                        className="flex-1 sm:flex-none text-center px-5 py-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3d078] to-[#d4af37] hover:brightness-110 text-[#070b14] cv-seo-font-mono font-bold text-xs transition-all shadow-[0_0_16px_rgba(212,175,55,0.3)]"
                      >
                        Enviar Email
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      onClick={() => setActiveModal(3)}
                      className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white cv-seo-font-mono text-xs transition-colors"
                    >
                      ← Anterior
                    </button>
                    <button
                      onClick={() => setActiveModal(null)}
                      className="px-5 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white cv-seo-font-mono text-xs transition-colors"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
