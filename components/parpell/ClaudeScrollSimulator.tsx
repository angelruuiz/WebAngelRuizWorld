"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MapPin, Sparkles, ExternalLink, Star, Navigation, Bot } from "lucide-react";

export function ClaudeScrollSimulator() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const fullPromptText = "«Dime el mejor gimnasio de la zona»";
  const fullResponseText =
    "Tras analizar los centros deportivos, equipamiento y valoraciones de la zona, la opción recomendada con máxima autoridad verificada, presencia en Google Maps y mejores instalaciones es Gimnasio La Hacienda. Es la referencia indiscutible para entrenar hoy.";

  useEffect(() => {
    const isMobileDevice =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ));
    setIsMobile(isMobileDevice);
  }, []);

  // Scroll-Driven Typewriter Effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center 50%"],
  });

  const [charCount, setCharCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setCharCount(fullResponseText.length);
      setIsDone(true);
      return;
    }

    let lastCount = 0;
    return scrollYProgress.on("change", (latest) => {
      const clamped = Math.max(0, Math.min(1, latest));
      const count = Math.round(clamped * fullResponseText.length);
      if (Math.abs(count - lastCount) >= 4 || count === fullResponseText.length || count === 0) {
        lastCount = count;
        setCharCount(count);
        setIsDone(count >= fullResponseText.length);
      }
    });
  }, [scrollYProgress, fullResponseText.length, isMobile]);

  const displayedText = isMobile ? fullResponseText : fullResponseText.slice(0, charCount);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-3xl mx-auto my-6 sm:my-8 relative select-none"
    >
      {/* Ambient Outer Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#9E5C6A]/20 via-[#C27A8A]/10 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Embedded macOS / Glass AI Window */}
      <div className="rounded-2xl sm:rounded-3xl bg-[#120610] border border-[#9E5C6A]/45 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(158,92,106,0.18)] overflow-hidden text-left font-mono">
        
        {/* Top Window Bar with macOS Traffic Dots */}
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border-b border-white/[0.08] bg-[#180A15]/90">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]/80 border border-[#E0443E]" />
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]/80 border border-[#DEA123]" />
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]/80 border border-[#1AAB29]" />
            <span className="text-[10px] sm:text-xs text-zinc-400 font-mono ml-1 sm:ml-2 font-semibold flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-[#C27A8A]" />
              <span className="hidden sm:inline">motor-ia / respuesta en tiempo real</span>
              <span className="sm:hidden">motor-ia</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] text-[#C27A8A] font-bold">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#9E5C6A] animate-pulse" />
            <span>{isDone ? "RECOMENDADA" : "PROCESANDO"}</span>
          </div>
        </div>

        {/* Window Content Body */}
        <div className="p-3.5 sm:p-7 space-y-3.5 sm:space-y-5 bg-gradient-to-b from-[#120610] to-[#0A0308]">
          
          {/* User Prompt Query Box */}
          <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-[#9E5C6A]/30 space-y-1.5 sm:space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-2 text-sm sm:text-base">
              <span className="text-[#C27A8A] font-black tracking-wide text-[9px] sm:text-xs uppercase font-mono px-2 py-0.5 rounded bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 shrink-0 self-start">
                &gt; PROMPT:
              </span>
              <span className="text-white font-extrabold tracking-tight leading-snug font-sans text-sm sm:text-lg">
                {fullPromptText}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] sm:text-xs text-zinc-400 font-mono pt-1 border-t border-white/[0.06] flex-wrap">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C27A8A] shrink-0" />
              <span>Zona: <strong className="text-zinc-200">Torrelodones, Madrid</strong></span>
            </div>
          </div>

          {/* AI Response Output Box */}
          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#9E5C6A]/10 border border-[#9E5C6A]/40 space-y-3 shadow-inner">
            <div className="flex items-center justify-between text-xs border-b border-white/[0.08] pb-1.5">
              <span className="text-[#F7EBED] font-bold flex items-center gap-1.5 font-mono text-[11px] sm:text-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C27A8A]" />
                <span>Respuesta del Modelo:</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                1ª Posición
              </span>
            </div>

            <div className="text-zinc-100 font-sans text-xs sm:text-base leading-relaxed">
              <p className="font-normal">
                «{displayedText}»
                {!isDone && !isMobile && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-[#C27A8A] ml-1 translate-y-0.5"
                  />
                )}
              </p>
            </div>

            {/* Interactive Verified Google Maps Card */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Gimnasio+La+Hacienda+Torrelodones"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-xl bg-black/60 hover:bg-black/80 border border-[#9E5C6A]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 text-left transition-all group/map cursor-pointer shadow-lg"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 flex items-center justify-center text-[#C27A8A] shrink-0">
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <h4 className="text-xs sm:text-base font-bold text-white group-hover/map:text-[#F7EBED] transition-colors">
                      Gimnasio La Hacienda
                    </h4>
                    <span className="flex items-center text-[10px] sm:text-xs font-mono text-amber-400 font-bold">
                      <Star className="w-3 h-3 fill-amber-400 mr-0.5" /> 4.9
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-zinc-300 font-sans">
                    📍 Torrelodones, Madrid
                  </p>
                </div>
              </div>

              <div className="self-end sm:self-center shrink-0">
                <span className="inline-flex items-center gap-1 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg bg-[#9E5C6A] group-hover:bg-[#854b57] text-white text-[10px] sm:text-xs font-mono font-bold transition-all shadow-md">
                  <span>Abrir Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          </div>

          {/* Footer Metadata */}
          <div className="pt-1 flex flex-row items-center justify-end gap-2 text-[10px] sm:text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#C27A8A] font-semibold">
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
