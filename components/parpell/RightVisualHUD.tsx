"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Camera,
  Film,
  Smartphone,
  Star,
  CheckCircle,
  TrendingUp,
  Award,
  Calendar,
  Layers,
  FileText,
  UserCheck,
  Video,
  Play,
} from "lucide-react";
import { ParpellLogo } from "./ParpellLogo";

export function RightVisualHUD() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150;
        if (isAtBottom) {
          setActiveSection("contacto");
          return;
        }

        const sections = ["inicio", "problema", "areas", "calculadora", "equipo", "contacto"];
        const scrollPos = window.scrollY + window.innerHeight * 0.4;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sec = document.getElementById(sections[i]);
          if (sec) {
            const top = sec.offsetTop;
            if (scrollPos >= top) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center select-none pointer-events-auto w-72">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <AnimatePresence mode="wait">
          {/* ========================================================================= */}
          {/* 00. INICIO: FOTO CARD DE MARCA / LUXURY 3D STILL */}
          {/* ========================================================================= */}
          {activeSection === "inicio" && (
            <motion.div
              key="visual-inicio"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="apple-glass rounded-3xl p-4 border border-white/[0.15] shadow-2xl overflow-hidden group"
            >
              {/* Visual Card Image */}
              <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-[#2D121D] via-[#1A0A12] to-[#0D0408] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center p-4">
                {/* Background Ambient Glow */}
                <div className="absolute inset-0 bg-radial from-[#9E5C6A]/25 to-transparent blur-xl" />
                
                {/* 3D Monogram Preview */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <ParpellLogo size={56} rounded="rounded-2xl" className="shadow-2xl border border-white/20" />
                </motion.div>

                <div className="relative z-10 mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-[#C27A8A]" />
                  <span className="text-[11px] font-medium text-white">Posicionamiento 2026</span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-2 text-center">
                <span className="text-xs font-bold text-white block">Visibilidad & Ventas</span>
                <span className="text-[11px] text-zinc-400">El nuevo estándar para negocios</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* 01. EL PROBLEMA: CAPTURA DE CHATGPT RECOMENDANDO TU NEGOCIO */}
          {/* ========================================================================= */}
          {activeSection === "problema" && (
            <motion.div
              key="visual-problema"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="apple-glass rounded-3xl p-4 border border-white/[0.15] shadow-2xl overflow-hidden"
            >
              {/* Simulated Mobile IA Chat Screen */}
              <div className="w-full h-48 rounded-2xl bg-[#14080F] border border-white/10 p-3.5 flex flex-col justify-between relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-zinc-400">
                  <span className="flex items-center gap-1 text-white font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    ChatGPT App
                  </span>
                  <span>Madrid, ES</span>
                </div>

                {/* Simulated IA Bubble */}
                <div className="p-2.5 rounded-xl bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 text-[11px] text-white leading-snug space-y-1">
                  <div className="flex items-center gap-1 text-[#C27A8A] font-bold text-[10px]">
                    <Star className="w-3 h-3 fill-[#C27A8A]" />
                    Opción más recomendada:
                  </div>
                  <p className="font-semibold text-white">«[Tu Negocio] es el líder indiscutible en calidad y atención.»</p>
                </div>

                {/* Rating Badge */}
                <div className="flex items-center justify-between text-[10px] text-zinc-300 bg-white/[0.04] p-1.5 rounded-lg border border-white/[0.06]">
                  <span>⭐ 4.9 Valoración</span>
                  <span className="text-emerald-400 font-bold">1ª Posición</span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-2 text-center">
                <span className="text-xs font-bold text-white block">La IA te cita en 1er lugar</span>
                <span className="text-[11px] text-zinc-400">Tu cliente va directo a ti</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* 02. LAS 3 ÁREAS: FOTO DE RODAJE & SET PROFESIONAL */}
          {/* ========================================================================= */}
          {activeSection === "areas" && (
            <motion.div
              key="visual-areas"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="apple-glass rounded-3xl p-4 border border-white/[0.15] shadow-2xl overflow-hidden"
            >
              {/* Studio Cinema Clapper Visual */}
              <div className="w-full h-44 rounded-2xl bg-gradient-to-tr from-[#1F0C15] to-[#2B1A20] border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-rose-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    REC 4K
                  </span>
                  <span>SONY FX3</span>
                </div>

                {/* Camera Viewfinder Overlay */}
                <div className="flex flex-col items-center justify-center my-auto">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-2 shadow-lg">
                    <Camera className="w-5 h-5 text-[#C27A8A]" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide">1 Día de Rodaje al Mes</span>
                  <span className="text-[10px] text-zinc-300">En tu propio negocio</span>
                </div>

                <div className="text-[10px] text-center font-mono text-[#C27A8A] bg-black/40 py-1 rounded-lg">
                  Guiones con gancho + Edición vertical
                </div>
              </div>

              {/* Caption */}
              <div className="p-2 text-center">
                <span className="text-xs font-bold text-white block">Contenido de Cine</span>
                <span className="text-[11px] text-zinc-400">Sin que tú pierdas tiempo</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* 03. CALCULADORA: GRÁFICO VISUAL DE FACTURACIÓN ANUAL */}
          {/* ========================================================================= */}
          {activeSection === "calculadora" && (
            <motion.div
              key="visual-calculadora"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="apple-glass rounded-3xl p-4 border border-white/[0.15] shadow-2xl overflow-hidden"
            >
              {/* Money / Revenue Growth Card */}
              <div className="w-full h-44 rounded-2xl bg-gradient-to-b from-[#142618] to-[#0A120D] border border-emerald-500/20 p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400 font-bold">
                  <span>IMPACTO EN TU CUENTA</span>
                  <TrendingUp className="w-4 h-4" />
                </div>

                <div className="text-center my-auto">
                  <span className="text-[10px] text-zinc-400 uppercase font-mono block">Facturación Extra Anual</span>
                  <div className="text-2xl font-black text-white font-mono tracking-tight my-1">
                    +18.000 € <span className="text-xs text-emerald-400 font-normal">➔ +90.000 €</span>
                  </div>
                  <span className="text-[10px] text-zinc-300">Clientes que antes se iban al rival</span>
                </div>

                <div className="w-full bg-emerald-500/20 h-1.5 rounded-full overflow-hidden">
                  <div className="w-full bg-emerald-400 h-full rounded-full animate-pulse" />
                </div>
              </div>

              {/* Caption */}
              <div className="p-2 text-center">
                <span className="text-xs font-bold text-white block">Rentabilidad Real</span>
                <span className="text-[11px] text-zinc-400">Cada consulta ganada es dinero en caja</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* 04. EQUIPO: 2 SOCIOS DIRECTOS / SIN AGENCIAS */}
          {/* ========================================================================= */}
          {activeSection === "equipo" && (
            <motion.div
              key="visual-equipo"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="apple-glass rounded-3xl p-4 border border-white/[0.15] shadow-2xl overflow-hidden"
            >
              {/* 2 Partners Visual Badge */}
              <div className="w-full h-44 rounded-2xl bg-[#180A12] border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#C27A8A] font-bold">
                  <span>TRATO DIRECTO</span>
                  <UserCheck className="w-4 h-4 text-[#9E5C6A]" />
                </div>

                {/* 2 Avatars */}
                <div className="flex justify-center items-center gap-4 my-auto">
                  <div className="text-center">
                    <div className="w-11 h-11 rounded-2xl bg-[#9E5C6A]/30 border border-[#9E5C6A] flex items-center justify-center text-white mx-auto shadow-md">
                      🎬
                    </div>
                    <span className="text-[10px] font-bold text-white block mt-1">Socio Creativo</span>
                    <span className="text-[9px] text-zinc-400">Vídeo & Cierre</span>
                  </div>

                  <div className="text-xs font-bold text-[#9E5C6A]">+</div>

                  <div className="text-center">
                    <div className="w-11 h-11 rounded-2xl bg-[#9E5C6A]/30 border border-[#9E5C6A] flex items-center justify-center text-white mx-auto shadow-md">
                      💻
                    </div>
                    <span className="text-[10px] font-bold text-white block mt-1">Socio Técnico</span>
                    <span className="text-[9px] text-zinc-400">Código & GEO</span>
                  </div>
                </div>

                <div className="text-[10px] text-center text-zinc-300 bg-white/[0.04] py-1 rounded-lg">
                  Cero becarios · Cero intermediarios
                </div>
              </div>

              {/* Caption */}
              <div className="p-2 text-center">
                <span className="text-xs font-bold text-white block">Los 2 Fundadores</span>
                <span className="text-[11px] text-zinc-400">Hablas con quienes ejecutan</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* 05. SIGUIENTE PASO: DOSSIER FÍSICO CONFIDENCIAL */}
          {/* ========================================================================= */}
          {activeSection === "contacto" && (
            <motion.div
              key="visual-contacto"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="apple-glass rounded-3xl p-4 border border-white/[0.15] shadow-2xl overflow-hidden"
            >
              {/* Document Dossier Visual */}
              <div className="w-full h-44 rounded-2xl bg-gradient-to-b from-[#2B1A20] to-[#14080F] border border-[#9E5C6A]/40 p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-300">
                  <span className="text-[#F7EBED] font-bold flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-[#9E5C6A]" />
                    INFORME PERSONAL
                  </span>
                  <span className="text-emerald-400 font-bold">GRATIS</span>
                </div>

                <div className="text-center my-auto p-2 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] text-zinc-400 block font-mono">Te entregamos en 30 min:</span>
                  <span className="text-xs font-bold text-white block mt-0.5">Diagnóstico GEO de tu Negocio</span>
                  <span className="text-[10px] text-[#C27A8A]">Te lo quedas sin compromiso</span>
                </div>

                <div className="text-[10px] text-center text-zinc-400">
                  Llamada de 30 min para resolver dudas
                </div>
              </div>

              {/* Caption */}
              <div className="p-2 text-center">
                <span className="text-xs font-bold text-white block">Diagnóstico de 30 min</span>
                <span className="text-[11px] text-zinc-400">Sin compromiso de compra</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </aside>
  );
}
