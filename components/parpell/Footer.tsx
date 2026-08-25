"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { ParpellLogo } from "./ParpellLogo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#140B0F] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col justify-between gap-10">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ParpellLogo size={32} />
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-[#F8F4F2] text-sm uppercase">
                PARPELL
              </span>
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#9E5C6A] -mt-0.5">
                Brand & Growth Orchestrator
              </span>
            </div>
          </div>

          <p className="text-xs font-mono text-[#F7EBED]/70">
            Dossier de presentación · España · Documento para leer sin prisa
          </p>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] hover:bg-[#9E5C6A]/20 text-zinc-400 hover:text-[#F8F4F2] flex items-center justify-center transition-all"
            title="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-white/[0.06] text-xs">
          <div>
            <h4 className="font-bold text-[#F8F4F2] mb-3 font-mono text-[11px] uppercase text-[#9E5C6A]">
              Estructura
            </h4>
            <ul className="space-y-2 text-[#F8F4F2]/75">
              <li><a href="#problema" className="hover:text-[#9E5C6A] transition-colors">01 El problema</a></li>
              <li><a href="#areas" className="hover:text-[#9E5C6A] transition-colors">02 Qué es Parpell</a></li>
              <li><a href="#marca" className="hover:text-[#9E5C6A] transition-colors">03 Nuestra marca</a></li>
              <li><a href="#geo" className="hover:text-[#9E5C6A] transition-colors">09 Por qué el GEO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#F8F4F2] mb-3 font-mono text-[11px] uppercase text-[#9E5C6A]">
              Las 3 Áreas
            </h4>
            <ul className="space-y-2 text-[#F8F4F2]/75">
              <li><a href="#areas" className="hover:text-[#9E5C6A] transition-colors">Área 1 — Visibilidad IA & Local</a></li>
              <li><a href="#areas" className="hover:text-[#9E5C6A] transition-colors">Área 2 — Contenido que Convierte</a></li>
              <li><a href="#areas" className="hover:text-[#9E5C6A] transition-colors">Área 3 — Máquina de Ventas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#F8F4F2] mb-3 font-mono text-[11px] uppercase text-[#9E5C6A]">
              Metodología
            </h4>
            <ul className="space-y-2 text-[#F8F4F2]/75">
              <li><a href="#como-trabajamos" className="hover:text-[#9E5C6A] transition-colors">07 Cómo trabajamos</a></li>
              <li><a href="#quienes-somos" className="hover:text-[#9E5C6A] transition-colors">08 Quiénes somos</a></li>
              <li><a href="#diccionario" className="hover:text-[#9E5C6A] transition-colors">11 Diccionario Parpell</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#F8F4F2] mb-3 font-mono text-[11px] uppercase text-[#9E5C6A]">
              Contacto
            </h4>
            <ul className="space-y-2 text-[#F8F4F2]/75">
              <li><a href="#contacto" className="hover:text-[#9E5C6A] transition-colors">12 Siguiente paso (30 min)</a></li>
              <li className="text-zinc-500">Un interlocutor, todo conectado.</li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F4F2]/60">
          <p>© {new Date().getFullYear()} Parpell. Brand & Growth Orchestrator.</p>
          <p className="font-mono text-[11px] text-[#9E5C6A]">
            Que la IA te recomiende · Que el contenido te haga elegible · Que tu equipo venda
          </p>
        </div>

      </div>
    </footer>
  );
}
