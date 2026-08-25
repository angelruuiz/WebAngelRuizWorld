"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Video,
  MessageCircle,
  Sparkles,
  Key,
} from "lucide-react";

interface SecretBentoScrollProps {
  onOpenSecret: () => void;
  isSecretUnlocked: boolean;
}

export function SecretBentoScroll({ onOpenSecret, isSecretUnlocked }: SecretBentoScrollProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={containerRef} className="w-full relative space-y-6">
      {/* 3 Main Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
        {/* Bento 1: Visibilidad */}
        <div className="apple-glass p-6 sm:p-7 rounded-3xl flex flex-col justify-between space-y-6">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 flex items-center justify-center mb-4">
              <Search className="w-5 h-5 text-[#C27A8A]" />
            </div>
            <span className="text-xs font-mono text-[#9E5C6A] font-bold uppercase block mb-1">
              01 · Visibilidad
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Que te encuentren primero</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Optimizamos tu presencia técnica para que ChatGPT, Claude, Perplexity y Google Maps recomienden tu empresa antes que al rival.
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] text-xs text-zinc-400 font-medium">
            ✓ 1er puesto en IA y Maps
          </div>
        </div>

        {/* Bento 2: Contenido */}
        <div className="apple-glass p-6 sm:p-7 rounded-3xl flex flex-col justify-between space-y-6 border-[#9E5C6A]/30">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 flex items-center justify-center mb-4">
              <Video className="w-5 h-5 text-[#C27A8A]" />
            </div>
            <span className="text-xs font-mono text-[#9E5C6A] font-bold uppercase block mb-1">
              02 · Confianza
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Vídeos que convencen</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Venimos 1 día al mes a tu negocio con cámara de cine. Grabamos y editamos todo el contenido vertical para que tu cliente sienta que eres el número uno.
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] text-xs text-zinc-400 font-medium">
            ✓ 1 día de rodaje in situ al mes
          </div>
        </div>

        {/* Bento 3: RRSS ManyChat Lead Capture */}
        <div className="apple-glass p-6 sm:p-7 rounded-3xl flex flex-col justify-between space-y-6">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 flex items-center justify-center mb-4">
              <MessageCircle className="w-5 h-5 text-[#C27A8A]" />
            </div>
            <span className="text-xs font-mono text-[#9E5C6A] font-bold uppercase block mb-1">
              03 · Cierre en RRSS
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Respuestas Automáticas</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Si los seguidores comentan en tus publicaciones o reels de Instagram y TikTok, el sistema les responde al instante por privado para cualificar y entregar clientes listos para tu producto.
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] text-xs text-zinc-400 font-medium">
            ✓ Leads cualificados vía automatización ManyChat
          </div>
        </div>
      </div>

      {/* Spacing buffer with generous separation */}
      <div className="h-6 sm:h-10" />

      {/* Bento 4: THE 4TH SECRET BOX (Entry Door Portal Trigger) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="w-full text-left relative mt-6 sm:mt-10 pb-6"
      >
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#260730] via-[#1A0520] to-[#0E0212] border-2 border-purple-500/60 shadow-[0_0_60px_rgba(168,85,247,0.35)] relative overflow-hidden group">
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 border border-fuchsia-300/40 flex items-center justify-center text-white shadow-lg shadow-purple-900/50">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-fuchsia-300 uppercase font-bold tracking-widest block">
                  04 · La Pieza Definitiva
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  El Cuarto Secreto
                </h3>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(217,70,239,0.7)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenSecret}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-fuchsia-600 text-white text-xs sm:text-sm font-black shadow-[0_0_30px_rgba(217,70,239,0.5)] border border-fuchsia-300/50 flex items-center justify-center gap-2 cursor-pointer transition-all self-start sm:self-auto"
            >
              <Key className="w-4 h-4 text-amber-300" />
              <span>{isSecretUnlocked ? "ENTRAR DE NUEVO AL SECRETO →" : "ENTRAR POR LA PUERTA SECRETA →"}</span>
            </motion.button>
          </div>

          <p className="text-xs sm:text-sm text-purple-200/80 mt-4 leading-relaxed relative z-10">
            La infraestructura oculta de optimización interna que no se publica abiertamente. Pulsa el botón para adentrarte en el cuarto.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
