"use client";

import React, { useState } from "react";
import { SpotlightCard } from "./SpotlightCard";
import { BookOpen, Search } from "lucide-react";

export function DictionarySection() {
  const [search, setSearch] = useState("");

  const dictionary = [
    { word: "Automatización", def: "Un sistema que hace solo una tarea repetitiva, sin que nadie tenga que estar delante." },
    { word: "Copiloto de ventas", def: "Una IA que ayuda al vendedor a preparar su trabajo. No le sustituye." },
    { word: "CRM", def: "Agenda inteligente de clientes: quién es cada uno, qué pidió, cuándo hay que volver a llamarle." },
    { word: "Cross-selling", def: "Venderle al cliente otra cosa distinta de lo que ya compró." },
    { word: "Datos estructurados (Schema)", def: "Etiquetas invisibles dentro de una web que le explican a una máquina qué es cada cosa." },
    { word: "Embudo (funnel)", def: "El camino desde que alguien te descubre hasta que te compra." },
    { word: "Engagement", def: "Cuánta gente reacciona a lo que publicas: comenta, guarda, comparte." },
    { word: "Gancho (hook)", def: "La primera frase de un vídeo. Decide si te siguen viendo o no." },
    { word: "GEO / LLMO", def: "Trabajo para que las inteligencias artificiales recomienden un negocio." },
    { word: "Google Business Profile", def: "La ficha de un negocio en Google y en Google Maps." },
    { word: "Lead", def: "Una persona interesada que ha dejado sus datos. Todavía no es cliente." },
    { word: "Lead magnet", def: "Un regalo útil (guía, plantilla, descuento) que se da a cambio del contacto." },
    { word: "LLM", def: "El motor de inteligencia artificial que hay dentro de ChatGPT, Gemini o Claude." },
    { word: "LTV", def: "Todo el dinero que un cliente deja a lo largo de los años." },
    { word: "Retainer", def: "Cuota mensual fija por un servicio continuo. Como una suscripción." },
    { word: "ROI", def: "Cuánto ganas comparado con lo que te gastaste." },
    { word: "SEO", def: "El conjunto de técnicas para salir alto en Google sin pagar anuncios." },
    { word: "Up-selling", def: "Venderle al cliente la versión mejor y más cara." },
    { word: "Vertical", def: "Vídeo grabado en formato móvil, de pie, a pantalla completa." },
  ];

  const filtered = dictionary.filter(
    (item) =>
      item.word.toLowerCase().includes(search.toLowerCase()) ||
      item.def.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="diccionario" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      {/* Centered Header */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-mono text-[#9E5C6A] mb-5 border border-[#9E5C6A]/30">
          <span>11 · DICCIONARIO PARPELL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4F2] leading-tight">
          Todas las palabras raras del documento, juntas y en orden.
        </h2>
        <p className="mt-4 text-xs sm:text-sm text-[#F8F4F2]/70 max-w-lg mx-auto">
          Porque creemos en la claridad antes que en la jerga.
        </p>

        {/* Centered Search Bar */}
        <div className="mt-8 relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar término (ej. GEO, Schema, CRM...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[#140B0F]/90 border border-white/[0.1] text-xs text-[#F8F4F2] placeholder:text-zinc-500 focus:outline-none focus:border-[#9E5C6A] shadow-lg"
          />
        </div>
      </div>

      {/* Bento Grid Dictionary Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
        {filtered.map((item, idx) => (
          <SpotlightCard key={item.word} className="p-5 bg-[#2B1A20]/50" delay={idx < 6 ? idx * 0.05 : 0}>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-[#9E5C6A] font-mono mb-1.5">
                {item.word}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#F8F4F2]/80 leading-relaxed">
                {item.def}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
