"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, Video, TrendingUp, Sparkles, ChevronDown } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { ParpellLogo } from "./ParpellLogo";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      {/* Top ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#9E5C6A]/20 via-[#6E3844]/20 to-[#2B1A20]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Top Monogram Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="p-3 rounded-3xl bg-[#2B1A20]/80 border border-[#9E5C6A]/30 shadow-2xl backdrop-blur-xl mb-4 hover:scale-105 transition-transform duration-500">
            <ParpellLogo size={64} />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill text-[11px] font-mono tracking-wider text-[#F7EBED] border border-[#9E5C6A]/30 shadow-lg">
            <span>DOSSIER DE PRESENTACIÓN</span>
            <span className="text-[#9E5C6A]">·</span>
            <span>ESPAÑA</span>
            <span className="text-[#9E5C6A]">·</span>
            <span className="text-[#9E5C6A] font-semibold">DOCUMENTO PARA LEER SIN PRISA</span>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-3 mb-8"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#F8F4F2] uppercase">
            PARPELL
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.3em] text-[#9E5C6A] font-semibold">
            Brand & Growth Orchestrator
          </p>
        </motion.div>

        {/* The 3 Core Pillars Stepped */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-2 mb-10 max-w-2xl"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#F8F4F2]">
            Que la inteligencia artificial te recomiende.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#9E5C6A]">
            Que el contenido te haga elegible.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#F8F4F2]">
            Que tu equipo lo convierta en ventas.
          </p>
        </motion.div>

        {/* Short Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl text-sm sm:text-base text-[#F8F4F2]/80 leading-relaxed font-normal mb-14"
        >
          <p className="font-semibold text-[#F8F4F2] text-base sm:text-lg mb-2">
            «Hacemos tres cosas: conseguimos que la inteligencia artificial recomiende tu negocio, producimos el contenido que hace que te elijan, y montamos el sistema comercial que convierte eso en ventas que se repiten.»
          </p>
          <p className="text-xs sm:text-sm text-[#F8F4F2]/60">
            No somos una agencia de publicidad clásica. No vendemos anuncios ni «gestión de redes sociales» a peso. Trabajamos sobre el recorrido completo del cliente de nuestro cliente.
          </p>
        </motion.div>

        {/* Bento Grid: 3 Areas Journey + En Cristiano Box */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5 text-left mb-8">
          
          {/* Bento Tile 1 */}
          <SpotlightCard className="p-6 md:p-8" delay={0.1}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-[#9E5C6A] uppercase tracking-wider font-bold">
                  Fase 01 · Te encuentran
                </span>
                <div className="w-8 h-8 rounded-xl bg-[#9E5C6A]/15 border border-[#9E5C6A]/30 flex items-center justify-center text-[#9E5C6A]">
                  <Search className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs italic text-[#F8F4F2]/60 mb-3">
                «¿Quién hace esto bien cerca de mí?»
              </p>
              <h3 className="text-lg font-bold text-[#F8F4F2] leading-snug">
                Área 1 — Visibilidad IA & Local
              </h3>
            </div>
            <a
              href="#areas"
              className="mt-6 text-xs font-semibold text-[#9E5C6A] hover:text-[#F8F4F2] flex items-center gap-1.5 transition-colors group"
            >
              <span>Ver detalles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </SpotlightCard>

          {/* Bento Tile 2 */}
          <SpotlightCard className="p-6 md:p-8" delay={0.2}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-[#9E5C6A] uppercase tracking-wider font-bold">
                  Fase 02 · Te eligen
                </span>
                <div className="w-8 h-8 rounded-xl bg-[#9E5C6A]/15 border border-[#9E5C6A]/30 flex items-center justify-center text-[#9E5C6A]">
                  <Video className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs italic text-[#F8F4F2]/60 mb-3">
                «De estos tres, ¿cuál me convence?»
              </p>
              <h3 className="text-lg font-bold text-[#F8F4F2] leading-snug">
                Área 2 — Contenido que Convierte
              </h3>
            </div>
            <a
              href="#areas"
              className="mt-6 text-xs font-semibold text-[#9E5C6A] hover:text-[#F8F4F2] flex items-center gap-1.5 transition-colors group"
            >
              <span>Ver detalles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </SpotlightCard>

          {/* Bento Tile 3 */}
          <SpotlightCard className="p-6 md:p-8" delay={0.3}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-[#9E5C6A] uppercase tracking-wider font-bold">
                  Fase 03 · Te compran y repiten
                </span>
                <div className="w-8 h-8 rounded-xl bg-[#9E5C6A]/15 border border-[#9E5C6A]/30 flex items-center justify-center text-[#9E5C6A]">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs italic text-[#F8F4F2]/60 mb-3">
                «Vale, ¿cómo lo contrato? ¿y el año que viene?»
              </p>
              <h3 className="text-lg font-bold text-[#F8F4F2] leading-snug">
                Área 3 — Máquina de Ventas
              </h3>
            </div>
            <a
              href="#areas"
              className="mt-6 text-xs font-semibold text-[#9E5C6A] hover:text-[#F8F4F2] flex items-center gap-1.5 transition-colors group"
            >
              <span>Ver detalles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </SpotlightCard>

          {/* Bento Tile 4 (Full Width: En Cristiano) */}
          <SpotlightCard className="md:col-span-3 p-8 bg-[#F7EBED] text-[#2B1A20] border-[#9E5C6A]/40 hover:border-[#9E5C6A]" delay={0.4}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#9E5C6A]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                  En cristiano · La analogía de la tienda
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#2B1A20] leading-relaxed mb-4">
                Imagina una tienda. El <strong>Área 1</strong> es el cartel en la calle principal para que la gente sepa que existes. El <strong>Área 2</strong> es el escaparate, que hace que quieran entrar. El <strong>Área 3</strong> es el vendedor de dentro, que atiende bien, cierra la venta y se acuerda de ti cuando vuelves. Casi todo el mundo trabaja solo una de las tres. <strong>Nosotros las tres, y en ese orden.</strong>
              </p>
            </div>
            <div className="pt-3 border-t border-[#9E5C6A]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#6E5A61] font-medium">
              <p>
                <strong>Por qué esto importa:</strong> el cartel más caro del mundo no salva un escaparate vacío, y el mejor escaparate no salva a un vendedor que no sabe vender.
              </p>
              <span className="font-mono text-[#9E5C6A] font-bold shrink-0">
                Las tres piezas o ninguna.
              </span>
            </div>
          </SpotlightCard>

        </div>

        {/* Scroll down indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-6 flex flex-col items-center text-[#F8F4F2]/40 text-xs font-mono"
        >
          <span>Desliza para explorar</span>
          <ChevronDown className="w-4 h-4 text-[#9E5C6A] mt-1" />
        </motion.div>

      </div>
    </section>
  );
}
