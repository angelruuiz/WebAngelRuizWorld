"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { MapPin, Sparkles, ExternalLink, Star, Navigation, Bot, RotateCcw } from "lucide-react";

export function ClaudeScrollSimulator() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const fullPromptText = "«Dime el mejor gimnasio de la zona»";
  const fullResponseText =
    "Tras analizar los centros deportivos, equipamiento y valoraciones de la zona, la opción recomendada con máxima autoridad verificada, presencia en Google Maps y mejores instalaciones es Gimnasio La Hacienda. Es la referencia indiscutible para entrenar hoy.";

  // Scroll-Driven Typewriter Effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center 45%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  const [charCount, setCharCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      // Map progress from 0.05 to 0.95 to the character range
      const clamped = Math.max(0, Math.min(1, (latest - 0.05) / 0.9));
      const count = Math.round(clamped * fullResponseText.length);
      setCharCount(count);
      setIsDone(count >= fullResponseText.length);
    });
  }, [smoothProgress, fullResponseText.length]);

  const displayedText = fullResponseText.slice(0, charCount);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-3xl mx-auto my-8 relative select-none"
    >
      {/* Ambient Outer Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#9E5C6A]/20 via-[#C27A8A]/10 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Embedded macOS / Glass AI Window */}
      <div className="rounded-3xl bg-[#120610]/95 border-2 border-[#9E5C6A]/45 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(158,92,106,0.18)] overflow-hidden backdrop-blur-2xl text-left font-mono">
        
        {/* Top Window Bar with macOS Traffic Dots */}
        <div className="px-4 sm:px-6 py-3 flex items-center justify-between border-b border-white/[0.08] bg-[#180A15]/90">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]/80 border border-[#E0443E]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]/80 border border-[#DEA123]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]/80 border border-[#1AAB29]" />
            <span className="text-[11px] sm:text-xs text-zinc-400 font-mono ml-1.5 sm:ml-2.5 font-semibold flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-[#C27A8A]" />
              <span className="hidden sm:inline">motor-ia / respuesta en tiempo real</span>
              <span className="sm:hidden">motor-ia</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] text-[#C27A8A] font-bold">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#9E5C6A] animate-pulse" />
            <span className="hidden sm:inline">{isDone ? "RECOMENDACIÓN GENERADA" : "PROCESANDO RESPUESTA"}</span>
            <span className="sm:hidden">{isDone ? "RECOMENDADA" : "PROCESANDO"}</span>
          </div>
        </div>

        {/* Window Content Body */}
        <div className="p-4 sm:p-7 space-y-4 sm:space-y-5 bg-gradient-to-b from-[#120610] to-[#0A0308]">
          
          {/* User Prompt Query Box */}
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white/[0.03] border border-[#9E5C6A]/30 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-2 text-sm sm:text-base">
              <span className="text-[#C27A8A] font-black tracking-wide text-[10px] sm:text-xs uppercase font-mono px-2 py-0.5 rounded bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 shrink-0 self-start">
                &gt; PROMPT:
              </span>
              <span className="text-white font-extrabold tracking-tight leading-snug font-sans text-base sm:text-lg">
                {fullPromptText}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-400 font-mono pt-1.5 border-t border-white/[0.06] flex-wrap">
              <MapPin className="w-3.5 h-3.5 text-[#C27A8A] shrink-0" />
              <span>Zona: <strong className="text-zinc-200">Torrelodones, Madrid</strong> · Filtro: Autoridad Local</span>
            </div>
          </div>

          {/* AI Response Output Box (Scroll Typewriter) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#9E5C6A]/10 border border-[#9E5C6A]/40 space-y-3.5 shadow-inner">
            <div className="flex items-center justify-between text-xs border-b border-white/[0.08] pb-2">
              <span className="text-[#F7EBED] font-bold flex items-center gap-1.5 font-mono">
                <Sparkles className="w-4 h-4 text-[#C27A8A]" />
                <span>Respuesta del Modelo:</span>
              </span>
              <span
                className={`px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase transition-all ${
                  isDone
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "bg-white/[0.04] text-zinc-400"
                }`}
              >
                {isDone ? "1ª Posición Recomendada" : `${Math.round((charCount / fullResponseText.length) * 100)}%`}
              </span>
            </div>

            <div className="text-zinc-100 font-sans text-sm sm:text-base leading-relaxed min-h-[58px]">
              <p className="font-normal">
                «{displayedText}»
                {!isDone && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-[#C27A8A] ml-1 translate-y-0.5"
                  />
                )}
              </p>
            </div>

            {/* Interactive Verified Google Maps Card */}
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Gimnasio+La+Hacienda+Torrelodones"
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                opacity: charCount > 40 ? 1 : 0.25,
                y: charCount > 40 ? 0 : 6,
              }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.985 }}
              className="p-3.5 sm:p-4 rounded-xl bg-black/60 hover:bg-black/80 border border-[#9E5C6A]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left transition-all group/map cursor-pointer shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 flex items-center justify-center text-[#C27A8A] shrink-0 group-hover/map:scale-110 transition-transform">
                  <Navigation className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover/map:text-[#F7EBED] transition-colors">
                      Gimnasio La Hacienda · Torrelodones
                    </h4>
                    <span className="flex items-center text-xs font-mono text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 mr-0.5" /> 4.9
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans">
                    📍 Av. de la Dehesa / Los Peñascales, 28250 Torrelodones, Madrid
                  </p>
                </div>
              </div>

              <div className="self-end sm:self-center shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#9E5C6A] group-hover:bg-[#854b57] text-white text-xs font-mono font-bold transition-all shadow-md">
                  <span>Abrir en Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          </div>

          {/* Footer Metadata */}
          <div className="pt-1 flex flex-row items-center justify-end gap-2 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2 text-xs text-[#C27A8A] font-semibold">
              <span>✓ GEO-SCORE: 99.8%</span>
              <span>·</span>
              <span>✓ Ficha Maps Verificada</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
