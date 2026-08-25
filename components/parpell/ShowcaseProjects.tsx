"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";
import { ExternalLink, Layers, ArrowUpRight, Sparkles, Activity, ShieldAlert, Zap } from "lucide-react";

export function ShowcaseProjects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "lumina",
      title: "Lumina AI Engine",
      category: "SaaS / AI Platform",
      categoryType: "ai",
      desc: "Plataforma de generación multimodal para creadores con microinteracciones fluidas y streaming en tiempo real.",
      metrics: ["+450% Conversión", "0.2s Latencia", "UI Liquid Glass"],
      gradient: "from-violet-600/30 via-indigo-600/20 to-transparent",
      accent: "text-violet-400",
      accentBorder: "border-violet-500/30",
    },
    {
      id: "synthex",
      title: "Synthex Fintech",
      category: "Fintech / Web3",
      categoryType: "fintech",
      desc: "Dashboard bancario futurista de alta seguridad con gráficos interactivos acelerados por GPU y feedback háptico visual.",
      metrics: ["$12M+ Transaccionados", "Lighthouse 100/100", "Zero Latency"],
      gradient: "from-cyan-600/30 via-teal-600/20 to-transparent",
      accent: "text-cyan-400",
      accentBorder: "border-cyan-500/30",
    },
    {
      id: "aurora",
      title: "Aurora Creative Labs",
      category: "E-Commerce / Luxury",
      categoryType: "luxury",
      desc: "Experiencia inmersiva para marca de moda de lujo con catálogo 3D interactivo y transiciones cinemáticas.",
      metrics: ["99.8% Satisfacción", "3D WebGL", "Global CDN"],
      gradient: "from-fuchsia-600/30 via-pink-600/20 to-transparent",
      accent: "text-fuchsia-400",
      accentBorder: "border-fuchsia-500/30",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categoryType === activeFilter);

  return (
    <section id="proyectos" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-pill text-xs font-mono text-fuchsia-300 mb-4 border border-fuchsia-500/20">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>PORTAFOLIO & CASOS DE ESTUDIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Resultados que hablan el <span className="text-shimmer">idioma del éxito.</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.08] rounded-full self-start md:self-auto">
          {[
            { label: "Todos", value: "all" },
            { label: "AI & SaaS", value: "ai" },
            { label: "Fintech", value: "fintech" },
            { label: "Luxury & Brand", value: "luxury" },
          ].map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === f.value
                  ? "bg-white/10 text-white shadow-sm border border-white/15"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <SpotlightCard
            key={proj.id}
            className="group relative flex flex-col justify-between overflow-hidden border-white/[0.08] hover:border-white/[0.2] transition-all duration-500"
          >
            {/* Ambient project glow */}
            <div
              className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b ${proj.gradient} blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
            />

            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  {proj.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {proj.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                {proj.desc}
              </p>
            </div>

            {/* Metrics Footer */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
              {proj.metrics.map((metric) => (
                <span
                  key={metric}
                  className="text-[11px] font-mono text-zinc-300 bg-black/40 border border-white/[0.06] px-2 py-1 rounded-md"
                >
                  {metric}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
