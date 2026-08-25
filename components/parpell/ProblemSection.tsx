"use client";

import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { ArrowRight, Search, Bot, AlertCircle, Unlink } from "lucide-react";

export function ProblemSection() {
  return (
    <section id="problema" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      {/* Centered Section Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-mono text-[#9E5C6A] mb-5 border border-[#9E5C6A]/30">
          <span>01 · EL PROBLEMA QUE RESOLVEMOS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4F2] leading-tight">
          Hace diez años, la gente buscaba en Google y elegía. Hoy pasa algo distinto.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#F8F4F2]/70 max-w-xl mx-auto">
          La mayoría de negocios todavía no se ha enterado del cambio en las reglas del juego.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
        
        {/* Bento 1: Antes vs Ahora (Span 2) */}
        <SpotlightCard className="md:col-span-2 p-8" delay={0.1}>
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                El Cambio de Paradigma
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span>Google</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#9E5C6A]" />
                <span className="text-[#F8F4F2] font-semibold">Inteligencia Artificial</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Antes */}
              <div className="p-5 rounded-2xl bg-[#140B0F]/60 border border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2 font-semibold">
                  <Search className="w-3.5 h-3.5" />
                  <span>Antes · 10 enlaces</span>
                </div>
                <p className="text-xs sm:text-sm text-[#F8F4F2]/75 leading-relaxed">
                  Escribías <em>«dentista en Torrelodones»</em> en Google, salían diez enlaces azules, entrabas en tres, comparabas y decidías. Los negocios peleaban por aparecer en esa lista.
                </p>
              </div>

              {/* Ahora */}
              <div className="p-5 rounded-2xl bg-[#9E5C6A]/15 border border-[#9E5C6A]/30">
                <div className="flex items-center gap-2 text-xs font-mono text-[#9E5C6A] mb-2 font-bold">
                  <Bot className="w-3.5 h-3.5" />
                  <span>Ahora · 2 o 3 nombres</span>
                </div>
                <p className="text-xs sm:text-sm text-[#F8F4F2] leading-relaxed">
                  Le preguntan a una IA: <em>«¿cuál es el mejor dentista de Torrelodones para ortodoncia invisible?»</em>. Y la IA no da diez enlaces. <strong>Da dos o tres nombres. Y punto.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.08] text-[11px] font-mono text-zinc-400">
            Si no estás en la respuesta de la IA, para ese cliente no existes.
          </div>
        </SpotlightCard>

        {/* Bento 2: En Cristiano (Span 1, Highlight) */}
        <SpotlightCard className="md:col-span-1 p-8 bg-[#F7EBED] text-[#2B1A20] border-[#9E5C6A]/40" delay={0.2}>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#9E5C6A]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                En cristiano
              </span>
            </div>
            <p className="text-sm text-[#2B1A20] font-medium leading-relaxed mb-4">
              Google era un escaparate con veinte productos. La IA es un amigo que te dice «ve a este, es el bueno».
            </p>
          </div>
          <div className="pt-3 border-t border-[#9E5C6A]/20 text-xs text-[#6E5A61] font-semibold">
            Si tu negocio no es uno de esos dos o tres nombres, ni siquiera has llegado a competir.
          </div>
        </SpotlightCard>

        {/* Bento 3: El Segundo Problema (Span 1) */}
        <SpotlightCard className="md:col-span-1 p-8" delay={0.3}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                El Segundo Problema
              </span>
              <AlertCircle className="w-4 h-4 text-[#9E5C6A]" />
            </div>
            <h3 className="text-base font-bold text-[#F8F4F2] mb-3">
              Más viejo pero igual de caro
            </h3>
            <ul className="space-y-2.5 text-xs text-[#F8F4F2]/80 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#9E5C6A] font-bold">■</span>
                <span>Que te encuentren no sirve de nada si, cuando te miran, <strong>no ven motivos para elegirte.</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9E5C6A] font-bold">■</span>
                <span>Y que te elijan no sirve si <strong>nadie sabe cerrar la venta ni volver a llamar al cliente.</strong></span>
              </li>
            </ul>
          </div>
        </SpotlightCard>

        {/* Bento 4: El Resultado de 3 Proveedores (Span 2) */}
        <SpotlightCard className="md:col-span-2 p-8" delay={0.4}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                La Realidad del Mercado
              </span>
              <Unlink className="w-4 h-4 text-zinc-400" />
            </div>
            <p className="text-xs sm:text-sm text-[#F8F4F2]/85 leading-relaxed mb-4">
              La mayoría de negocios tiene esas tres piezas rotas o repartidas entre tres proveedores distintos que no se hablan entre ellos: uno lleva la web, otro graba vídeos y otro dice que hace «marketing». Nadie mira el conjunto.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#140B0F]/80 border border-[#9E5C6A]/25">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9E5C6A] block mb-1">
              El resultado
            </span>
            <p className="text-xs text-[#F8F4F2]/90 leading-relaxed">
              Se gasta dinero en piezas sueltas que no encajan. Y cuando algo no funciona, cada proveedor culpa al de al lado.
            </p>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}
