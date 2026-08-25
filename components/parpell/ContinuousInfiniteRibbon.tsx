"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Video,
  Sparkles,
  Search,
  CheckCircle2,
  Zap,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Star,
  Layers,
  Award,
} from "lucide-react";

export function ContinuousInfiniteRibbon() {
  const items = [
    {
      icon: Bot,
      shape: "rounded-full",
      tag: "ChatGPT & Perplexity",
      label: "Top 1 en Recomendación",
      accent: "from-emerald-500/20 to-emerald-900/10 border-emerald-500/30 text-emerald-300",
    },
    {
      icon: Video,
      shape: "rounded-2xl",
      tag: "Cámara de Cine",
      label: "1 Día de Rodaje al Mes",
      accent: "from-[#9E5C6A]/25 to-[#9E5C6A]/5 border-[#9E5C6A]/40 text-[#F7EBED]",
    },
    {
      icon: Search,
      shape: "rounded-3xl",
      tag: "Google Maps & GEO",
      label: "Dominancia de Zona",
      accent: "from-blue-500/20 to-blue-900/10 border-blue-500/30 text-blue-300",
    },
    {
      icon: Smartphone,
      shape: "rounded-xl",
      tag: "Formato Vertical",
      label: "Gancho en 3 Segundos",
      accent: "from-purple-500/20 to-purple-900/10 border-purple-500/30 text-purple-300",
    },
    {
      icon: Zap,
      shape: "rounded-full",
      tag: "Copiloto Comercial",
      label: "Respuesta en <2 Min",
      accent: "from-amber-500/20 to-amber-900/10 border-amber-500/30 text-amber-300",
    },
    {
      icon: ShieldCheck,
      shape: "rounded-2xl",
      tag: "2 Socios Fundadores",
      label: "Cero Intermediarios",
      accent: "from-rose-500/20 to-rose-900/10 border-rose-500/30 text-rose-300",
    },
    {
      icon: TrendingUp,
      shape: "rounded-3xl",
      tag: "Recurrencia & LTV",
      label: "+Facturación Anual",
      accent: "from-teal-500/20 to-teal-900/10 border-teal-500/30 text-teal-300",
    },
  ];

  // Duplicate for seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="w-full relative py-6 overflow-hidden select-none pointer-events-auto">
      {/* Left and Right ambient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#080306] via-[#080306]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#080306] via-[#080306]/80 to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-4 pr-4"
        >
          {duplicatedItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.06, y: -2 }}
                className={`apple-glass bg-gradient-to-br ${item.accent} ${item.shape} px-4 py-2.5 border shadow-xl flex items-center gap-3 shrink-0 cursor-default transition-all group`}
              >
                {/* Icon Container with subtle rotating glow */}
                <div className="w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider opacity-75 leading-none mb-0.5">
                    {item.tag}
                  </span>
                  <span className="text-xs font-bold text-white whitespace-nowrap leading-tight">
                    {item.label}
                  </span>
                </div>

                <Sparkles className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity ml-1" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
