"use client";

import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { Globe, Code, MessageSquare, Star, ShieldCheck } from "lucide-react";

export function GeoSection() {
  const levers = [
    {
      title: "1. Estar donde aprenden",
      desc: "Publicar y aparecer en los sitios de los que estos sistemas se alimentan: prensa local, blogs sectoriales, foros, Google Maps y directorios con reputación.",
      icon: Globe,
    },
    {
      title: "2. Hablarles en su idioma",
      desc: "Etiquetas técnicas dentro de tu web (Schema) que dicen sin ambigüedad qué eres, dónde estás, qué ofreces y en qué horario.",
      icon: Code,
    },
    {
      title: "3. Contenido pregunta-respuesta",
      desc: "Artículos escritos tal y como la gente pregunta, para que la máquina pueda extraer la respuesta limpia y citarte a ti.",
      icon: MessageSquare,
    },
    {
      title: "4. Reseñas que describen",
      desc: "Opiniones reales y detalladas valen mucho más que cinco estrellas sin texto: describen el servicio con palabras que la IA entiende.",
      icon: Star,
    },
  ];

  return (
    <section id="geo" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      {/* Centered Section Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-mono text-[#9E5C6A] mb-5 border border-[#9E5C6A]/30">
          <span>09 · POR QUÉ EL GEO NOS HACE DISTINTOS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4F2] leading-tight">
          Es lo más nuevo de todo lo que hacemos y donde menos competencia hay.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#F8F4F2]/75 max-w-2xl mx-auto leading-relaxed">
          Cuando le preguntas algo a una IA, no busca en ese instante como Google: contesta con lo que ha aprendido leyendo internet. La clave no es «¿cómo salgo el primero?» sino <strong>«¿cómo entro en lo que la máquina ha leído?»</strong>.
        </p>
      </div>

      {/* Bento Grid: 4 Levers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-6">
        {levers.map((lever, idx) => {
          const Icon = lever.icon;
          return (
            <SpotlightCard key={lever.title} className="p-8" delay={idx * 0.1}>
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#9E5C6A]/15 border border-[#9E5C6A]/30 flex items-center justify-center text-[#9E5C6A] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#F8F4F2] mb-2">{lever.title}</h3>
                <p className="text-xs sm:text-sm text-[#F8F4F2]/80 leading-relaxed">
                  {lever.desc}
                </p>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Lo Que No Prometemos */}
      <SpotlightCard className="p-8 border-[#9E5C6A]/30 bg-[#1C1015]/90 text-left" delay={0.4}>
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-[#9E5C6A]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
            Lo que no prometemos
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#F8F4F2]/85 leading-relaxed">
          No garantizamos aparecer el primero ni en Google ni en ninguna IA. Nadie que sea honesto lo hace: esos sistemas cambian sin avisar y no son nuestros. <strong>Prometemos método, trabajo constante y un informe mensual donde se ve exactamente si mejoramos o no.</strong>
        </p>
      </SpotlightCard>
    </section>
  );
}
