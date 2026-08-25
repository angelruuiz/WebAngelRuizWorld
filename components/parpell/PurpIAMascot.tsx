"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SectionDialogue {
  id: string;
  tag: string;
  message: string;
}

const sectionDialogues: Record<string, SectionDialogue> = {
  inicio: {
    id: "inicio",
    tag: "Bienvenido",
    message: "Hola, soy Purp.IA. Te acompaño a descubrir cómo multiplicamos tus clientes con inteligencia artificial.",
  },
  problema: {
    id: "problema",
    tag: "El Cambio",
    message: "vaya que si no sales el primero, mucha gente ni te va a conocer....",
  },
  areas: {
    id: "areas",
    tag: "El Ecosistema",
    message: "Tres motores interconectados: posicionamiento GEO, producción audiovisual de cine y automatizaciones a medida.",
  },
  comparativa: {
    id: "comparativa",
    tag: "Transparencia",
    message: "Compara con criterio , aquí no hay plantillas ni soluciones genéricas",
  },
  stack: {
    id: "stack",
    tag: "Mi Terreno",
    message: "eeeh! ese soy yo!",
  },
  equipo: {
    id: "equipo",
    tag: "Los Fundadores",
    message: "Conoce a los que me han dado vida!! Saben un montón del sector",
  },
  sectores: {
    id: "sectores",
    tag: "Casos Reales",
    message: "Clinicas , restaurantes , despachos y comercios... y el siguiente eres tú!",
  },
  contacto: {
    id: "contacto",
    tag: "Siguiente Paso",
    message: "¿Hablamos 30 minutos? Te entregamos el diagnóstico de visibilidad de tu empresa sin coste alguno.",
  },
};

const sectionOrder = [
  "inicio",
  "problema",
  "areas",
  "comparativa",
  "stack",
  "equipo",
  "sectores",
  "contacto",
];

interface PurpIAMascotProps {
  isSecretChamberOpen?: boolean;
}

export function PurpIAMascot({ isSecretChamberOpen = false }: PurpIAMascotProps) {
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [isBubbleVisible, setIsBubbleVisible] = useState<boolean>(true);
  const [customQuoteIdx, setCustomQuoteIdx] = useState<number | null>(null);

  const funQuotes = [
    "Más del sesenta por ciento de las decisiones locales ya se toman mediante consultas en ChatGPT y Gemini.",
    "Si quieres agendar una sesión, puedes pulsar en cualquier momento el botón de Contacto directo.",
    "Nuestros rodajes se realizan con cámaras de cine profesional y corrección de color en DaVinci Resolve.",
    "Purp.IA optimiza tu presencia digital para que los motores generativos recomienden tu marca en primer lugar.",
  ];

  // Auto show bubble and reset quotes when secret chamber opens
  useEffect(() => {
    if (isSecretChamberOpen) {
      setIsBubbleVisible(true);
      setCustomQuoteIdx(null);
    }
  }, [isSecretChamberOpen]);

  // Scroll detection to update active section dialogue
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const isAtBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 150;

        if (isAtBottom) {
          setActiveSection("contacto");
          return;
        }

        const scrollPos = window.scrollY + window.innerHeight * 0.35;

        for (let i = sectionOrder.length - 1; i >= 0; i--) {
          const secId = sectionOrder[i];
          const el = document.getElementById(secId);
          if (el) {
            const top = el.offsetTop;
            if (scrollPos >= top) {
              if (activeSection !== secId) {
                setActiveSection(secId);
                setCustomQuoteIdx(null);
                setIsBubbleVisible(true);
              }
              break;
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const currentDialogue = isSecretChamberOpen
    ? {
        tag: "Top Secret",
        message: "oye! que se supone que esto era secreto",
      }
    : customQuoteIdx !== null
    ? {
        tag: "Tip de Purp.IA",
        message: funQuotes[customQuoteIdx],
      }
    : sectionDialogues[activeSection] || sectionDialogues.inicio;

  const handleMascotClick = () => {
    setIsBubbleVisible(true);
    setCustomQuoteIdx((prev) =>
      prev === null ? 0 : (prev + 1) % funQuotes.length
    );
  };

  return (
    <aside
      className={`fixed bottom-7 sm:bottom-10 right-4 sm:right-8 flex items-end gap-3.5 select-none pointer-events-auto flex-row-reverse transition-all ${
        isSecretChamberOpen ? "z-[100002]" : "z-50"
      }`}
    >
      
      {/* Mascot Avatar (Pure Floating Character, No Box / No Card) */}
      <div className="relative flex flex-col items-center">
        {/* Soft Ambient Purple Glow Behind Pure Mascot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-[#A855F7]/30 via-[#C084FC]/20 to-transparent rounded-full blur-2xl -z-10 pointer-events-none" />

        {/* Pure Levitating Mascot GIF without any bounding box */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -1.5, 1.5, 0] }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.15, rotate: 3 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleMascotClick}
          className="relative w-16 h-16 sm:w-20 sm:h-20 cursor-pointer flex items-center justify-center filter drop-shadow-[0_10px_25px_rgba(168,85,247,0.55)] transition-transform"
          title="Soy Purp.IA, ¡haz clic para interactuar!"
        >
          <Image
            src="/bloub-default-cycle.gif"
            alt="Purp.IA Mascot"
            width={80}
            height={80}
            unoptimized
            loading="lazy"
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </motion.div>
      </div>

      {/* Dynamic Floating Speech Bubble (Elevated with extra breathing room) */}
      <AnimatePresence mode="wait">
        {isBubbleVisible && (
          <motion.div
            key={customQuoteIdx !== null ? `quote-${customQuoteIdx}` : activeSection}
            initial={{ opacity: 0, scale: 0.85, y: 12, x: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10, x: 8 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="relative max-w-[240px] sm:max-w-[280px] p-3.5 sm:p-4 rounded-2xl bg-[#140618]/95 border border-[#C084FC]/40 shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(168,85,247,0.25)] backdrop-blur-2xl text-left mb-2 sm:mb-3"
          >
            {/* Crisp Triangular Tail pointing directly right towards Mascot */}
            <svg
              className="absolute -right-3 bottom-5 w-3.5 h-4 text-[#140618] overflow-visible pointer-events-none"
              viewBox="0 0 14 16"
              fill="none"
            >
              <path
                d="M0 1 L13 8 L0 15 Z"
                fill="#140618"
                stroke="rgba(192, 132, 252, 0.45)"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              {/* Clean seam cover */}
              <rect x="-2" y="1.5" width="4" height="13" fill="#140618" />
            </svg>

            {/* Bubble Header */}
            <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-white/[0.08]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC] animate-ping" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E9D5FF]">
                  {currentDialogue.tag}
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBubbleVisible(false);
                }}
                className="w-4 h-4 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                title="Ocultar mensaje"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* Message Body */}
            <p className="text-xs sm:text-[13px] text-zinc-100 font-sans leading-snug font-medium">
              {currentDialogue.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
