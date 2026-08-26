"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

interface ComparisonRow {
  feature: string;
  highlight?: boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Rodajes presenciales con cámara de cine y etalonaje en DaVinci Resolve",
  },
  {
    feature: "GEO: Visibilidad y recomendación nº1 en ChatGPT y motores de IA",
    highlight: true,
  },
  {
    feature: "Desarrollo y automatizaciones a medida (sin plantillas genéricas)",
  },
  {
    feature: "Cupo estrictamente limitado de clientes simultáneos",
  },
  {
    feature: "Todo el material audiovisual y cuentas son 100% de tu propiedad",
  },
  {
    feature: "Auditorías y seguimiento de posicionamiento real en IA cada mes",
  },
];

export function ParpellComparisonTable() {
  return (
    <motion.section
      id="comparativa"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 text-center select-none"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[340px] bg-gradient-to-tr from-[#9E5C6A]/20 via-[#C27A8A]/10 to-transparent rounded-full blur-[130px] -z-10 pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-14">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#9E5C6A] block mb-3">
          ¿Por qué elegirnos?
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
          La diferencia entre delegar y liderar.
        </h2>
        <p className="text-xs sm:text-base text-zinc-300 max-w-lg mx-auto leading-relaxed">
          No somos una fábrica de contenidos en masa. Trabajamos mano a mano para conseguir resultados tangibles.
        </p>
      </div>

      {/* Comparison Table Container (Parpell Dark Obsidian & Glass Luxury Palette) */}
      <div className="w-full max-w-3xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-white/[0.10] bg-[#0E0511]">
        {/* Dark Obsidian Header */}
        <div className="bg-[#17081A] px-4 sm:px-8 py-3.5 sm:py-5 flex items-center justify-between border-b border-white/[0.08]">
          <div className="w-3/5 sm:w-7/12 text-left">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
              PROPUESTA DE VALOR
            </span>
          </div>

          <div className="w-1/5 sm:w-2.5/12 text-center flex justify-center">
            <span className="inline-block px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold tracking-wider text-[#E598A8] bg-[#9E5C6A]/25 border border-[#9E5C6A]/40 uppercase font-mono shadow-[0_0_15px_rgba(158,92,106,0.3)] whitespace-nowrap">
              PARPELL
            </span>
          </div>

          <div className="w-1/5 sm:w-2.5/12 text-center flex justify-center">
            <span className="text-[9px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold leading-tight block">
              <span className="hidden sm:inline">AGENCIA GENERALISTA</span>
              <span className="sm:hidden">OTRAS</span>
            </span>
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/[0.06] text-left">
          {comparisonData.map((row, idx) => (
            <div
              key={idx}
              className={`px-4 sm:px-8 py-3.5 sm:py-4.5 flex items-center justify-between transition-colors ${
                row.highlight
                  ? "bg-[#9E5C6A]/12 hover:bg-[#9E5C6A]/20"
                  : "bg-transparent hover:bg-white/[0.03]"
              }`}
            >
              {/* Feature Title */}
              <div className="w-3/5 sm:w-7/12 text-left pr-2 sm:pr-4">
                <span className={`text-[11px] sm:text-sm font-medium leading-snug block ${
                  row.highlight ? "text-white font-semibold" : "text-zinc-200"
                }`}>
                  {row.feature}
                </span>
              </div>

              {/* Parpell Column (Checkmark) */}
              <div className="w-1/5 sm:w-2.5/12 text-center flex justify-center items-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#9E5C6A]/25 border border-[#9E5C6A]/50 flex items-center justify-center text-[#F3B0BE] shadow-[0_0_12px_rgba(158,92,106,0.35)] shrink-0">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                </div>
              </div>

              {/* General Agency Column (Dash) */}
              <div className="w-1/5 sm:w-2.5/12 text-center flex justify-center items-center">
                <span className="text-zinc-600 font-bold text-sm sm:text-base leading-none select-none">
                  —
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Card Foot */}
        <div className="bg-[#140718] px-4 sm:px-8 py-4 sm:py-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-left flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#9E5C6A] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">
                Garantía de exclusividad zonal y cupo cerrado
              </span>
              <span className="text-[10px] sm:text-[11px] text-zinc-400 font-normal">
                Evaluamos si tu negocio encaja antes de iniciar cualquier colaboración.
              </span>
            </div>
          </div>

          <a
            href="#contacto"
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#9E5C6A] hover:bg-[#854b57] shadow-lg shadow-[#9E5C6A]/30 transition-all flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>Hablar con los 2 socios</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
