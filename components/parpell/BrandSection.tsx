"use client";

import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { ParpellLogo } from "./ParpellLogo";
import { Eye, ShieldCheck, Check, X, Palette, Sparkles } from "lucide-react";

export function BrandSection() {
  const beliefs = [
    { title: "Claridad antes que jerga", desc: "Si hay que usar una palabra rara, se explica. Este documento es la prueba." },
    { title: "Enseñamos los números, buenos y malos", desc: "Un informe que solo trae buenas noticias no es un informe." },
    { title: "Pocos clientes, bien atendidos", desc: "No aceptamos más de los que podemos hacer bien." },
    { title: "No prometemos posiciones", desc: "Ni Google ni las IA nos pertenecen. Prometemos trabajo, método y transparencia." },
    { title: "El cliente es dueño de todo lo suyo", desc: "Cuentas, web, vídeos, datos. Si un día se va, se lo lleva entero." },
  ];

  const speechComparisons = [
    {
      yes: "«Vamos a hacer que ChatGPT te nombre cuando alguien pregunte por tu sector en tu zona.»",
      no: "«Orquestamos ecosistemas holísticos de crecimiento omnicanal.»",
    },
    {
      yes: "«Este mes no ha funcionado. Esto es lo que cambiamos.»",
      no: "«Los KPIs muestran una tendencia positiva en el engagement.»",
    },
    {
      yes: "«Esto no lo hacemos. Te paso a alguien que sí.»",
      no: "«Claro, eso también lo hacemos.»",
    },
  ];

  const palette = [
    { name: "Vino Parpell", code: "#9E5C6A", bg: "#9E5C6A", text: "#F8F4F2", label: "Color principal, acentos" },
    { name: "Vino profundo", code: "#6E3844", bg: "#6E3844", text: "#F8F4F2", label: "Sombras, 2º nivel" },
    { name: "Tinta ciruela", code: "#2B1A20", bg: "#2B1A20", text: "#F8F4F2", label: "Fondos oscuros" },
    { name: "Rosa niebla", code: "#F7EBED", bg: "#F7EBED", text: "#2B1A20", label: "Recuadros destacados" },
    { name: "Crema", code: "#F8F4F2", bg: "#F8F4F2", text: "#2B1A20", label: "Fondos suaves, respiro" },
    { name: "Malva", code: "#6E5A61", bg: "#6E5A61", text: "#F8F4F2", label: "Texto secundario" },
  ];

  return (
    <section id="marca" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      {/* Centered Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-mono text-[#9E5C6A] mb-5 border border-[#9E5C6A]/30">
          <span>03 · NUESTRA MARCA</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4F2] leading-tight">
          Qué significa el nombre, qué prometemos y cómo hablamos.
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
        
        {/* Bento 1: El Nombre */}
        <SpotlightCard className="p-8" delay={0.1}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                El Nombre
              </span>
              <Eye className="w-4 h-4 text-[#9E5C6A]" />
            </div>
            <h3 className="text-xl font-bold text-[#F8F4F2] mb-3">
              Viene de <em>parpadeo</em>
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F4F2]/80 leading-relaxed">
              Ese instante mínimo en el que alguien te ve, o no te ve. Hoy las decisiones se toman en ese instante: en la respuesta de una IA, en el primer segundo de un vídeo, en la primera frase de un correo.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/[0.08] text-xs font-semibold text-[#9E5C6A]">
            Nuestro trabajo es que, en ese parpadeo, estés tú.
          </div>
        </SpotlightCard>

        {/* Bento 2: El Símbolo */}
        <SpotlightCard className="p-8" delay={0.2}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                El Símbolo
              </span>
              <ParpellLogo size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#F8F4F2] mb-3">
              El Monograma
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F4F2]/80 leading-relaxed">
              La <strong>P</strong> de Parpell encajada dentro de una <strong>R</strong>. Construido con volumen y profundidad. No somos una capa de pintura sobre el negocio del cliente, somos estructura.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/[0.08] text-[11px] font-mono text-zinc-400">
            Una letra sostiene a la otra, como las 3 áreas.
          </div>
        </SpotlightCard>

        {/* Bento 3: Nuestra Promesa (Highlight) */}
        <SpotlightCard className="p-8 border-[#9E5C6A]/40 bg-[#2B1A20]/90" delay={0.3}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                Nuestra Promesa
              </span>
              <ShieldCheck className="w-5 h-5 text-[#9E5C6A]" />
            </div>
            <h3 className="text-lg font-bold text-[#F8F4F2] mb-3">
              Un solo interlocutor. Todo conectado.
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F4F2]/85 leading-relaxed">
              Sin excusas cruzadas. Nadie tiene que coordinar a cuatro proveedores ni traducir entre ellos. Se habla con nosotros y ya está.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/[0.08] text-xs font-mono text-[#F7EBED]">
            Cero intermediarios entre venta y ejecución.
          </div>
        </SpotlightCard>

        {/* Bento 4: En qué creemos (Span 2) */}
        <SpotlightCard className="md:col-span-2 p-8" delay={0.4}>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A] block mb-4">
              En qué creemos
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {beliefs.map((b) => (
                <div key={b.title} className="p-3.5 rounded-xl bg-[#140B0F]/60 border border-white/[0.05]">
                  <h4 className="text-xs font-bold text-[#F8F4F2] mb-1">{b.title}</h4>
                  <p className="text-[11px] text-[#F8F4F2]/75 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* Bento 5: Identidad Visual (Span 1) */}
        <SpotlightCard className="md:col-span-1 p-8" delay={0.5}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                Identidad Visual
              </span>
              <Palette className="w-4 h-4 text-[#9E5C6A]" />
            </div>
            <p className="text-xs text-[#F8F4F2]/80 leading-relaxed mb-4">
              Paleta propia que sale del logotipo. Una gama poco habitual que hace que se recuerde.
            </p>
            <div className="grid grid-cols-3 gap-1.5 mb-4">
              {palette.map((c) => (
                <div
                  key={c.name}
                  className="p-1.5 rounded-lg text-center flex flex-col justify-center border border-white/10"
                  style={{ backgroundColor: c.bg, color: c.text }}
                >
                  <span className="text-[9px] font-bold block truncate">{c.name}</span>
                  <span className="text-[8px] font-mono opacity-80">{c.code}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-zinc-400 font-mono pt-3 border-t border-white/[0.08]">
            Sin emojis en titulares · Sin mayúsculas gritadas
          </div>
        </SpotlightCard>

        {/* Bento 6: Cómo Hablamos (Span 3 Full Width) */}
        <SpotlightCard className="md:col-span-3 p-8" delay={0.6}>
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A]">
                Cómo Hablamos · Honestidad vs Jerga Vacía
              </span>
              <span className="text-xs font-mono text-zinc-400">Directos y claros</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {speechComparisons.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#140B0F]/70 border border-white/[0.06] space-y-3">
                  <div className="flex items-start gap-2 text-xs text-[#F8F4F2] font-medium">
                    <span className="text-[#9E5C6A] font-bold">✓</span>
                    <span>{item.yes}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[11px] text-zinc-500 line-through decoration-zinc-600">
                    <span>✗</span>
                    <span>{item.no}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}
