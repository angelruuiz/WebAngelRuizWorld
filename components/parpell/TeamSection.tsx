"use client";

import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { Video, Code, ShieldCheck, HeartPulse, UserCheck } from "lucide-react";

export function TeamSection() {
  const tableData = [
    { area: "Área 1 — Visibilidad IA & Local", commercial: "Mensaje y textos", tech: "Todo lo demás" },
    { area: "Área 2 — Contenido que Convierte", commercial: "Guion, cámara, montaje, dirección", tech: "Automatizaciones y CRM" },
    { area: "Área 3 — Máquina de Ventas", commercial: "Estrategia, formación, cierre, email", tech: "Sistemas y datos" },
  ];

  return (
    <section id="quienes-somos" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      {/* Centered Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-mono text-[#9E5C6A] mb-5 border border-[#9E5C6A]/30">
          <span>08 · QUIÉNES SOMOS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4F2] leading-tight">
          Dos socios. Dos oficios que se complementan.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#F8F4F2]/75 max-w-xl mx-auto">
          Cero intermediarios entre quien vende y quien ejecuta.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-6">
        
        {/* Socio 1: Comercial & Contenido */}
        <SpotlightCard className="p-8" delay={0.1}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                Estrategia & Contenido
              </span>
              <div className="w-8 h-8 rounded-xl bg-[#9E5C6A]/15 border border-[#9E5C6A]/30 flex items-center justify-center text-[#9E5C6A]">
                <Video className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#F8F4F2] mb-2">
              Socio de estrategia comercial y contenido
            </h3>
            <p className="text-xs text-[#F8F4F2]/80 leading-relaxed mb-6">
              Director de marketing durante años en una empresa de aparatología médico-estética (ticket alto, decisión larga y competencia dura). Aprendió lo que separa una marca que genera consultas de una que solo genera «me gusta».
            </p>

            <ul className="space-y-2 text-xs text-[#F8F4F2]/85 mb-6">
              <li>■ <strong>Formador de equipos comerciales:</strong> Argumentarios, objeciones y cierre.</li>
              <li>■ <strong>Closer:</strong> Especialista en la conversación final donde se decide la venta.</li>
              <li>■ <strong>Filmmaker:</strong> Escribe el guion, graba y monta. Las tres cosas.</li>
              <li>■ <strong>Dirección de marca:</strong> El contenido sirve a la venta, no al revés.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-white/[0.08] text-[11px] font-mono text-[#F7EBED]">
            <strong>En Parpell:</strong> Áreas 2 y 3 completas.
          </div>
        </SpotlightCard>

        {/* Socio 2: Técnico */}
        <SpotlightCard className="p-8" delay={0.2}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                Ingeniería de Software
              </span>
              <div className="w-8 h-8 rounded-xl bg-[#9E5C6A]/15 border border-[#9E5C6A]/30 flex items-center justify-center text-[#9E5C6A]">
                <Code className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#F8F4F2] mb-2">
              Socio técnico
            </h3>
            <p className="text-xs text-[#F8F4F2]/80 leading-relaxed mb-6">
              Ingeniero de software. Construye, no configura plantillas. Es quien hace que la parte invisible funcione: la web, el código que las máquinas leen y los sistemas que trabajan solos.
            </p>

            <ul className="space-y-2 text-xs text-[#F8F4F2]/85 mb-6">
              <li>■ <strong>Desarrollo web:</strong> Orientado a conversión y velocidad real.</li>
              <li>■ <strong>GEO & SEO:</strong> Posicionamiento en IA con implementación técnica real.</li>
              <li>■ <strong>Schema & CRM:</strong> Datos estructurados y automatizaciones conectadas.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-white/[0.08] text-[11px] font-mono text-[#F7EBED]">
            <strong>En Parpell:</strong> Área 1 completa y toda la infraestructura técnica.
          </div>
        </SpotlightCard>

        {/* Bento 3: Ventaja Real */}
        <SpotlightCard className="p-6 md:p-8" delay={0.3}>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A] block mb-2">
            Por qué esto es una ventaja real
          </span>
          <p className="text-xs sm:text-sm text-[#F8F4F2]/85 leading-relaxed">
            En casi todas las agencias, quien te vende el proyecto no es quien lo hace. Aquí sí. La persona que se sienta contigo es la que va a coger la cámara, escribir el código o formar a tu equipo. Menos teléfono roto y presupuestos que se sostienen.
          </p>
        </SpotlightCard>

        {/* Bento 4: Especialización Médico-Estética */}
        <SpotlightCard className="p-6 md:p-8" delay={0.4}>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A] block mb-2">
            Sectores de ticket alto
          </span>
          <p className="text-xs sm:text-sm text-[#F8F4F2]/85 leading-relaxed">
            Uno de nosotros viene de dentro del sector médico-estético: clínicas, aparatología y tratamientos de alto valor. Sabemos cómo se decide y se cierra en entornos de decisión meditada. No hay que explicárnoslo desde cero.
          </p>
        </SpotlightCard>

        {/* Bento 5: Tabla Quién hace qué (Full Width) */}
        <SpotlightCard className="md:col-span-2 p-8" delay={0.5}>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A] block mb-4">
            Quién hace qué, en una tabla
          </span>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/[0.1] bg-[#140B0F]/70 text-[#9E5C6A] font-mono uppercase">
                  <th className="py-2.5 px-3">Área</th>
                  <th className="py-2.5 px-3">Socio comercial</th>
                  <th className="py-2.5 px-3">Socio técnico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {tableData.map((row) => (
                  <tr key={row.area} className="hover:bg-white/[0.02]">
                    <td className="py-3 px-3 font-semibold text-[#F8F4F2]">{row.area}</td>
                    <td className="py-3 px-3 text-[#F8F4F2]/80">{row.commercial}</td>
                    <td className="py-3 px-3 text-[#F8F4F2]/80">{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 rounded-xl bg-[#140B0F]/80 border border-white/[0.06] text-center text-xs text-zinc-400">
            Somos dos. Hay un límite de clientes que podemos llevar bien. Preferimos decir «ahora no puedo» a decir que sí y entregar tarde y mal.
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}
