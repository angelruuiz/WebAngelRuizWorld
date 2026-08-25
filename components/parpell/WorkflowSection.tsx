"use client";

import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { FileText, Calendar, Clock, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function WorkflowSection() {
  const rules = [
    { title: "Compromiso de 6 meses", desc: "Trabajamos por cuota mensual. Este trabajo no da resultados en 3 semanas y no queremos venderlo como si los diera." },
    { title: "Todo es del cliente desde el día 1", desc: "Cuentas, dominio, web, vídeos, base de datos, informes. Si un día te vas, te lo llevas completo." },
    { title: "Un interlocutor, no un departamento", desc: "Se habla directamente con quien ejecuta." },
    { title: "Informe mensual con lo bueno y lo malo", desc: "Si un mes no ha funcionado, se dice con honestidad y se cambia." },
  ];

  return (
    <section id="como-trabajamos" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      {/* Centered Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-mono text-[#9E5C6A] mb-5 border border-[#9E5C6A]/30">
          <span>07 · CÓMO TRABAJAMOS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4F2] leading-tight">
          Tres fases. Nada empieza sin haber entendido el negocio primero.
        </h2>
      </div>

      {/* Bento Grid: 3 Phases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left mb-6">
        
        {/* Fase 1 */}
        <SpotlightCard className="p-8" delay={0.1}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                Fase 1 · Mes 1
              </span>
              <FileText className="w-4 h-4 text-[#9E5C6A]" />
            </div>
            <h3 className="text-xl font-bold text-[#F8F4F2] mb-3">Diagnóstico y plan</h3>
            <ul className="space-y-2.5 text-xs text-[#F8F4F2]/80 leading-relaxed mb-6">
              <li>■ Miramos qué hay: web, Google Maps, reseñas, redes y base de clientes.</li>
              <li>■ Preguntamos a las IA por tu sector y zona: tu foto del día cero.</li>
              <li>■ Definimos qué medimos y el objetivo del semestre.</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-white/[0.08] text-[11px] font-mono text-[#F7EBED]">
            <strong>Entregable:</strong> Documento con diagnóstico, plan y calendario.
          </div>
        </SpotlightCard>

        {/* Fase 2 */}
        <SpotlightCard className="p-8" delay={0.2}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                Fase 2 · Mes 2 en adelante
              </span>
              <Calendar className="w-4 h-4 text-[#9E5C6A]" />
            </div>
            <h3 className="text-xl font-bold text-[#F8F4F2] mb-3">Ejecución mensual</h3>
            <ul className="space-y-2 text-xs text-[#F8F4F2]/80 leading-relaxed mb-4">
              <li>■ <strong>Semana 1:</strong> Día de rodaje y guiones.</li>
              <li>■ <strong>Semana 2:</strong> Edición, publicación y automatizaciones.</li>
              <li>■ <strong>Semana 3:</strong> Trabajo técnico, Schema, ficha Google, correos.</li>
              <li>■ <strong>Semana 4:</strong> Medición e informe (reunión de 45 min).</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-white/[0.08] text-[11px] font-mono text-zinc-400">
            Cadencia continua y predecible.
          </div>
        </SpotlightCard>

        {/* Fase 3 */}
        <SpotlightCard className="p-8" delay={0.3}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                Fase 3 · Refuerzos
              </span>
              <Clock className="w-4 h-4 text-[#9E5C6A]" />
            </div>
            <h3 className="text-xl font-bold text-[#F8F4F2] mb-1">Refuerzos a medida</h3>
            <span className="text-[11px] text-zinc-400 block mb-4">(cuando hacen falta)</span>
            <ul className="space-y-2.5 text-xs text-[#F8F4F2]/80 leading-relaxed">
              <li>■ Formaciones a equipos comerciales en IA.</li>
              <li>■ Web nueva o rehecha si la actual no aguanta el trabajo técnico.</li>
              <li>■ Materiales descargables para captar contactos.</li>
            </ul>
          </div>
        </SpotlightCard>

        {/* Bento Full Width: Lo que NUNCA vas a tener que hacer */}
        <SpotlightCard className="md:col-span-3 p-8 bg-[#2B1A20]/90 border-[#9E5C6A]/30" delay={0.4}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A] block mb-1">
                Lo que nunca vas a tener que hacer
              </span>
              <p className="text-sm sm:text-base font-semibold text-[#F8F4F2] leading-snug">
                Coordinar proveedores, traducir entre técnicos, perseguir entregas o preguntarte quién tiene la culpa de qué.
              </p>
            </div>
            <span className="px-4 py-2 rounded-full bg-[#9E5C6A]/20 text-xs font-mono text-[#F7EBED] shrink-0 border border-[#9E5C6A]/40">
              Un interlocutor · Un informe · Una reunión al mes
            </span>
          </div>
        </SpotlightCard>

        {/* Bento 4 Rules Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
          {rules.map((r, i) => (
            <SpotlightCard key={r.title} className="p-5" delay={0.5 + i * 0.08}>
              <h4 className="text-xs font-bold text-[#F8F4F2] mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E5C6A]" />
                {r.title}
              </h4>
              <p className="text-[11px] text-[#F8F4F2]/75 leading-relaxed">{r.desc}</p>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
