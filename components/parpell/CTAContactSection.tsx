"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";
import { Sparkles, Send, CheckCircle2, MessageSquare, Mail, Calendar, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

export function CTAContactSection() {
  const [selectedService, setSelectedService] = useState("Landing / Web App");
  const [budgetRange, setBudgetRange] = useState("1.5k€ - 3k€");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.7 },
      colors: ["#8b5cf6", "#06b6d4", "#ec4899", "#10b981"],
    });

    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-cyan-500/20 blur-[130px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Pitch & Value */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-pill text-xs font-mono text-violet-300 border border-violet-500/20">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>EMPIEZA HOY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            ¿Listo para llevar tu marca al <span className="text-shimmer">siguiente nivel?</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Cuéntanos tu visión. Diseñamos y desarrollamos soluciones a medida con el estándar más alto de la industria digital.
          </p>

          <div className="space-y-3 pt-2">
            {[
              "Propuesta técnica y presupuesto en menos de 24h",
              "Desarrollo ágil sin fricción ni burocracia",
              "Soporte directo con los desarrolladores y diseñadores",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Quick Direct Contacts */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <Mail className="w-4 h-4 text-violet-400" />
              <span>contacto@parpell.agency</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Agenda llamada de 15 min</span>
            </div>
          </div>
        </div>

        {/* Right Column: Liquid Glass Interactive Form */}
        <div className="lg:col-span-7">
          <SpotlightCard className="p-8 sm:p-10 border-white/[0.12] bg-[#080910]/85 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">¡Mensaje recibido con éxito!</h3>
                <p className="text-zinc-400 text-sm max-w-md">
                  Hemos registrado los detalles de tu proyecto. El equipo de Parpell te responderá en menos de 24 horas.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-medium text-zinc-300 bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-all"
                >
                  Enviar otra consulta
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2.5">
                    1. ¿QUÉ SERVICIO NECESITAS?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "Landing / Web App",
                      "IA & Automatización",
                      "Rediseño Premium",
                      "E-Commerce",
                      "SaaS MVP",
                      "Consultoría Vibe",
                    ].map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setSelectedService(srv)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium transition-all text-left truncate ${
                          selectedService === srv
                            ? "bg-violet-600/30 text-cyan-300 border border-cyan-500/40 shadow-inner"
                            : "bg-white/[0.02] text-zinc-400 border border-white/[0.06] hover:bg-white/[0.05]"
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selection */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2.5">
                    2. RANGO DE PRESUPUESTO ESTIMADO
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["< 1.5k€", "1.5k€ - 3k€", "3k€ - 6k€+"].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudgetRange(b)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium transition-all text-center ${
                          budgetRange === b
                            ? "bg-violet-600/30 text-cyan-300 border border-cyan-500/40"
                            : "bg-white/[0.02] text-zinc-400 border border-white/[0.06] hover:bg-white/[0.05]"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      NOMBRE / EMPRESA
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Alex García"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      CORREO ELECTRÓNICO
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@tuempresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    DETALLES DEL PROYECTO O IDEA
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos brevemente qué te gustaría construir o solucionar..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group relative flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-xl shadow-violet-600/30 transition-all duration-300 active:scale-[0.99]"
                >
                  <span>Enviar Consulta de Proyecto</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
