"use client";

import React from "react";
import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";
import { Cpu, Terminal, Sparkles, Zap, Shield, Globe, Database, Code, CheckCircle } from "lucide-react";

export function VibeStackSection() {
  const stackCategories = [
    {
      category: "Frontend & Render Engine",
      items: [
        { name: "Next.js 15", desc: "React 19 & Hybrid SSR", icon: Globe },
        { name: "Tailwind CSS v4", desc: "Liquid Glass System", icon: Sparkles },
        { name: "Framer Motion", desc: "Real Spring Physics", icon: Zap },
        { name: "TypeScript", desc: "Zero-defect type safety", icon: Code },
      ],
    },
    {
      category: "AI & Autonomous Systems",
      items: [
        { name: "Claude 3.7 / OpenAI", desc: "Intelligent Reasoning", icon: Cpu },
        { name: "Custom AI Agents", desc: "Background automations", icon: Terminal },
        { name: "Vector Databases", desc: "Semantic memory & RAG", icon: Database },
        { name: "Realtime Streaming", desc: "Sub-100ms response", icon: Zap },
      ],
    },
    {
      category: "Infraestructura & Edge",
      items: [
        { name: "Vercel / Cloudflare Edge", desc: "Global CDN distribution", icon: Globe },
        { name: "Supabase / PostgreSQL", desc: "Realtime data sync", icon: Database },
        { name: "Enterprise Security", desc: "End-to-end encryption", icon: Shield },
        { name: "CI/CD Automations", desc: "Continuous deployment", icon: CheckCircle },
      ],
    },
  ];

  return (
    <section id="stack" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-pill text-xs font-mono text-cyan-300 mb-4 border border-cyan-500/20">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>VIBE CODING STACK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          La tecnología que impulsa <span className="text-shimmer">nuestra magia.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
          No usamos plantillas lentas ni herramientas obsoletas. Construimos sobre los pilares del desarrollo de software contemporáneo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stackCategories.map((cat) => (
          <SpotlightCard
            key={cat.category}
            className="p-6 border-white/[0.08] hover:border-violet-500/30 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-violet-300 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                {cat.category}
              </h3>

              <div className="space-y-4">
                {cat.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all flex items-center gap-3.5"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white">{item.name}</h4>
                        <p className="text-[11px] text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
