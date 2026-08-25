"use client";

import React from "react";
import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";
import { Compass, Cpu, Rocket, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export function EcosystemSection() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Vibe Framing",
      description: "Entendemos la esencia de tu marca y definimos una arquitectura visual y técnica de impacto.",
      icon: Compass,
      tags: ["Análisis de Mercado", "Design Moodboard", "Tech Spec"],
      gradient: "from-violet-500/20 to-transparent",
    },
    {
      num: "02",
      title: "Liquid Glass Prototyping",
      description: "Diseñamos interfaces en alta fidelidad con animaciones y microinteracciones reales antes de codificar.",
      icon: Cpu,
      tags: ["Figma Systems", "Interactive Demos", "UX Dynamics"],
      gradient: "from-cyan-500/20 to-transparent",
    },
    {
      num: "03",
      title: "Hyper-Speed Vibe Coding",
      description: "Desarrollo ágil con el stack más moderno del mundo: Next.js, Tailwind v4 y pipelines potenciados por IA.",
      icon: Rocket,
      tags: ["Zero Legacy Code", "120 FPS Physics", "Clean Architecture"],
      gradient: "from-indigo-500/20 to-transparent",
    },
    {
      num: "04",
      title: "Edge Global Launch",
      description: "Despliegue distribuido en servidores Edge ultrarrápidos con monitorización y métricas en tiempo real.",
      icon: ShieldCheck,
      tags: ["Global CDN", "SEO 100/100", "Zero Downtime"],
      gradient: "from-emerald-500/20 to-transparent",
    },
  ];

  return (
    <section id="ecosistema" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-pill text-xs font-mono text-cyan-300 mb-4 border border-cyan-500/20">
          <Rocket className="w-3.5 h-3.5 text-cyan-400" />
          <span>PROCESO DE CREACIÓN</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Del concepto a producción a <span className="text-shimmer">velocidad luz.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
          Eliminamos la burocracia tradicional de las agencias antiguas. Trabajamos de forma directa, iterativa y obsesionada con la perfección.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <SpotlightCard
              key={step.num}
              className="relative p-6 border-white/[0.08] hover:border-violet-500/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black font-mono text-zinc-600 group-hover:text-violet-400 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-white/[0.06]">
                {step.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-[11px] text-zinc-300">
                    <CheckCircle2 className="w-3 h-3 text-violet-400" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
