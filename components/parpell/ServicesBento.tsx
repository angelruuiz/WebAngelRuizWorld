"use client";

import React from "react";
import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";
import { Code2, Bot, Palette, Gauge, Sparkles, Database, Shield, Layers } from "lucide-react";

export function ServicesBento() {
  const services = [
    {
      icon: Code2,
      title: "Desarrollo Web Next-Gen",
      badge: "Frontend & Fullstack",
      description:
        "Creamos aplicaciones web y landing pages de nivel Silicon Valley. Rápidas, reactivas y con microinteracciones fluidas a 120 FPS.",
      features: ["Next.js App Router", "React 19 & TypeScript", "Animaciones con físicas reales", "SEO Técnico Avanzado"],
      colSpan: "md:col-span-2",
      gradient: "from-violet-500/20 via-indigo-500/10 to-transparent",
      accent: "text-violet-400",
    },
    {
      icon: Bot,
      title: "Inteligencia Artificial & Vibe Workflows",
      badge: "AI Native",
      description:
        "Integramos agentes inteligentes, LLMs y automatizaciones que multiplican la capacidad operativa de tu negocio.",
      features: ["Agentes Autónomos", "RAG & Knowledge Bases", "Integraciones API & Webhooks"],
      colSpan: "md:col-span-1",
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      accent: "text-cyan-400",
    },
    {
      icon: Palette,
      title: "Diseño de Producto & Liquid UI",
      badge: "Design System",
      description:
        "Estética inspirada en Apple: interfaces de cristal líquido, tipografías refinadas y jerarquía visual impecable.",
      features: ["Sistemas de Diseño en Figma", "Glassmorphism & 3D Web", "Experiencia de Usuario (UX)"],
      colSpan: "md:col-span-1",
      gradient: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
      accent: "text-fuchsia-400",
    },
    {
      icon: Gauge,
      title: "Rendimiento Extremo & Cloud Scale",
      badge: "Performance",
      description:
        "Arquitecturas serverless y edge computing con tiempos de carga inferiores a 300ms y disponibilidad del 99.99%.",
      features: ["Edge CDN Global", "Core Web Vitals 100/100", "Seguridad de Grado Empresarial", "Bases de Datos Distribuidas"],
      colSpan: "md:col-span-2",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      accent: "text-emerald-400",
    },
  ];

  return (
    <section id="servicios" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-pill text-xs font-mono text-violet-300 mb-4 border border-violet-500/20">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>CAPACIDADES & SERVICIOS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Lo que construimos no es común.{" "}
          <span className="text-shimmer">Es vanguardia pura.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
          Combinamos la elegancia estética del diseño moderno con la solidez de una ingeniería de software implacable.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <SpotlightCard
              key={service.title}
              className={`${service.colSpan} relative group overflow-hidden border-white/[0.08] hover:border-white/[0.18] flex flex-col justify-between`}
            >
              {/* Subtle background gradient glow */}
              <div
                className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${service.gradient} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}
              />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    <Icon className={`w-6 h-6 ${service.accent}`} />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Feature Tags */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                {service.features.map((feat) => (
                  <span
                    key={feat}
                    className="text-xs text-zinc-300 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-lg flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-400" />
                    {feat}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
