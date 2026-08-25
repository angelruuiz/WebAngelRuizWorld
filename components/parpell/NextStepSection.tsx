"use client";

import React, { useState } from "react";
import { SpotlightCard } from "./SpotlightCard";
import { ParpellLogo } from "./ParpellLogo";
import { CheckCircle2, ArrowRight, Clock, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

export function NextStepSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    web: "",
    sector: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.correo || !form.web) return;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#9E5C6A", "#6E3844", "#F7EBED", "#F8F4F2"],
    });

    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      {/* Centered Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-mono text-[#9E5C6A] mb-5 border border-[#9E5C6A]/30">
          <span>12 · SIGUIENTE PASO</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4F2] leading-tight">
          Una conversación de treinta minutos, sin compromiso y sin diapositivas.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#F8F4F2]/75 max-w-xl mx-auto">
          Antes de la llamada hacemos los deberes: preguntamos a las IA por tu sector y zona, y analizamos tu ficha de Google y tu web.
        </p>
      </div>

      {/* Bento Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left max-w-5xl mx-auto">
        
        {/* Bento Column 1: Call Details (Span 6) */}
        <SpotlightCard className="lg:col-span-6 p-8 sm:p-10" delay={0.1}>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A] mb-4">
              <Clock className="w-4 h-4" />
              <span>En la llamada te enseñamos 3 cosas</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-[#140B0F]/60 border border-white/[0.05]">
                <h4 className="text-xs font-bold text-[#F8F4F2] mb-1">1. Si sales o no sales</h4>
                <p className="text-xs text-[#F8F4F2]/75">Cuando alguien pregunta por lo tuyo, con capturas de pantalla reales de las IA.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#140B0F]/60 border border-white/[0.05]">
                <h4 className="text-xs font-bold text-[#F8F4F2] mb-1">2. Quién sale en tu lugar</h4>
                <p className="text-xs text-[#F8F4F2]/75">Y qué está haciendo bien para que la IA lo elija.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#140B0F]/60 border border-white/[0.05]">
                <h4 className="text-xs font-bold text-[#F8F4F2] mb-1">3. Qué haríamos los 3 primeros meses</h4>
                <p className="text-xs text-[#F8F4F2]/75">En orden y con fechas concretas de entrega.</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#2B1A20]/90 border border-[#9E5C6A]/30">
            <p className="text-xs text-[#F8F4F2]/80 italic">
              «Si después de eso no te encaja, te quedas con el diagnóstico igualmente. Nos parece justo.»
            </p>
          </div>
        </SpotlightCard>

        {/* Bento Column 2: Form (Span 6) */}
        <SpotlightCard className="lg:col-span-6 p-8 sm:p-10 border-white/[0.1] bg-[#2B1A20]/90" delay={0.2}>
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
              <ParpellLogo size={32} />
              <div>
                <h3 className="text-sm font-bold text-[#F8F4F2]">PARPELL</h3>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#9E5C6A] block">
                  Brand & Growth Orchestrator
                </span>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 flex items-center justify-center text-[#9E5C6A] mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#F8F4F2]">Datos recibidos</h4>
                <p className="text-xs text-[#F8F4F2]/80 leading-relaxed max-w-xs mx-auto">
                  Prepararemos tu diagnóstico con las IA y te contactaremos para agendar los 30 minutos.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                    NOMBRE
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre o empresa"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#140B0F]/90 border border-white/[0.08] text-xs text-[#F8F4F2] placeholder:text-zinc-600 focus:outline-none focus:border-[#9E5C6A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      CORREO
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@empresa.com"
                      value={form.correo}
                      onChange={(e) => setForm({ ...form, correo: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#140B0F]/90 border border-white/[0.08] text-xs text-[#F8F4F2] placeholder:text-zinc-600 focus:outline-none focus:border-[#9E5C6A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      TELÉFONO
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+34 600 000 000"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#140B0F]/90 border border-white/[0.08] text-xs text-[#F8F4F2] placeholder:text-zinc-600 focus:outline-none focus:border-[#9E5C6A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      SITIO WEB ACTUAL
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="www.tuweb.com"
                      value={form.web}
                      onChange={(e) => setForm({ ...form, web: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#140B0F]/90 border border-white/[0.08] text-xs text-[#F8F4F2] placeholder:text-zinc-600 focus:outline-none focus:border-[#9E5C6A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      SECTOR & CIUDAD
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Clínica Dental, Madrid"
                      value={form.sector}
                      onChange={(e) => setForm({ ...form, sector: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#140B0F]/90 border border-white/[0.08] text-xs text-[#F8F4F2] placeholder:text-zinc-600 focus:outline-none focus:border-[#9E5C6A]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full group mt-3 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-[#F8F4F2] bg-[#9E5C6A] hover:bg-[#854b57] shadow-lg shadow-[#9E5C6A]/25 transition-all"
                >
                  <span>Solicitar conversación de 30 minutos</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>

          <p className="text-[10px] text-zinc-400 text-center pt-3 border-t border-white/[0.06] mt-4 leading-relaxed">
            Este documento presenta la marca y su forma de trabajar. Las condiciones económicas se detallan en la propuesta personalizada de cada proyecto.
          </p>
        </SpotlightCard>

      </div>
    </section>
  );
}
