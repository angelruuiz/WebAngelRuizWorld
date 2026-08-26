"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SectionMarker {
  id: string;
  num: string;
  label: string;
}

const sections: SectionMarker[] = [
  { id: "inicio", num: "00", label: "Inicio" },
  { id: "problema", num: "01", label: "El Problema" },
  { id: "areas", num: "02", label: "Las 3 Áreas" },
  { id: "comparativa", num: "03", label: "¿Por qué Parpell?" },
  { id: "stack", num: "04", label: "Especialidades" },
  { id: "equipo", num: "05", label: "Equipo" },
  { id: "sectores", num: "06", label: "Sectores" },
  { id: "contacto", num: "07", label: "Siguiente Paso" },
];

export function VerticalTimelineNav() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop, { passive: true });
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!isDesktop) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isDesktop]);

  const scrollToSection = (id: string) => {
    const lenisInstance = typeof window !== "undefined" ? (window as unknown as { __parpellLenis?: { scrollTo: (target: string, opts?: { offset?: number; duration?: number }) => void } }).__parpellLenis : null;
    
    if (lenisInstance) {
      lenisInstance.scrollTo(`#${id}`, { offset: -20, duration: 1.4 });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (!isDesktop) return null;

  return (
    <aside className="fixed left-6 sm:left-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-start select-none pointer-events-auto opacity-80 hover:opacity-100 backdrop-blur-[2px] transition-all duration-400">
      
      {/* Timeline Guide & Markers Track */}
      <div className="relative flex flex-col items-center">
        {/* Background Vertical Guide Track Line */}
        <div className="relative w-[3px] h-[380px] bg-white/[0.08] rounded-full overflow-hidden">
          {/* Animated Liquid Wine Glow Progress Fill */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#C27A8A] via-[#9E5C6A] to-[#6E3844] shadow-[0_0_18px_rgba(158,92,106,0.9)]"
          />
        </div>

        {/* Markers Container */}
        <div className="absolute top-0 bottom-0 flex flex-col justify-between items-center -my-3">
          {sections.map((sec, idx) => {
            const activeIdx = sections.findIndex((s) => s.id === activeSection);
            const isPassed = idx < activeIdx;
            const isActive = activeSection === sec.id;
            const isHovered = hoveredIdx === idx;
            const isHighlighted = isActive || isHovered;

            return (
              <div
                key={sec.id}
                className="relative flex items-center group cursor-pointer py-2 px-1"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => scrollToSection(sec.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    scrollToSection(sec.id);
                  }
                }}
                title={`Ir a sección ${sec.num} - ${sec.label}`}
              >
                {/* Timeline Indicator Node (Filled when passed by line) */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.5 : isHovered ? 1.3 : isPassed ? 1.15 : 1,
                    backgroundColor: isActive
                      ? "#9E5C6A"
                      : isPassed
                      ? "#9E5C6A"
                      : isHovered
                      ? "#C27A8A"
                      : "#120510",
                    borderColor: isActive
                      ? "#F7EBED"
                      : isPassed
                      ? "#C27A8A"
                      : "rgba(255, 255, 255, 0.2)",
                  }}
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center cursor-pointer ${
                    isActive
                      ? "shadow-[0_0_20px_rgba(158,92,106,1)] ring-4 ring-[#9E5C6A]/25"
                      : isPassed
                      ? "shadow-[0_0_12px_rgba(158,92,106,0.7)]"
                      : "hover:border-[#9E5C6A]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeGlow"
                      className="w-2 h-2 rounded-full bg-white animate-ping opacity-80"
                    />
                  )}
                  {isPassed && !isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F7EBED] opacity-95" />
                  )}
                </motion.div>

                {/* Dynamic Angled / Straight Text Label */}
                <motion.div
                  animate={{
                    rotate: isHighlighted ? 0 : -6,
                    scale: isHighlighted ? 1.15 : 0.95,
                    x: isHighlighted ? 12 : 6,
                    opacity: isHighlighted ? 1 : 0.45,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="absolute left-6 pl-2 flex items-center gap-2.5 whitespace-nowrap origin-left cursor-pointer"
                >
                  {/* Number Badge */}
                  <span
                    className={`text-xs font-mono font-bold tracking-wider px-2 py-0.5 rounded-lg border transition-all duration-300 ${
                      isHighlighted
                        ? "text-white bg-[#9E5C6A] border-[#F7EBED]/40 shadow-lg shadow-[#9E5C6A]/40"
                        : "text-zinc-400 bg-white/[0.04] border-white/[0.06] italic"
                    }`}
                  >
                    {sec.num}
                  </span>

                  {/* Section Title */}
                  <span
                    className={`font-semibold tracking-tight transition-all duration-300 ${
                      isHighlighted
                        ? "text-sm text-white font-bold drop-shadow-[0_0_12px_rgba(158,92,106,0.8)] not-italic"
                        : "text-xs text-zinc-400 italic"
                    }`}
                  >
                    {sec.label}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Primary CTA Button: Contacto Directo (Larger, Placed Below Index) */}
      <motion.a
        whileHover={{ scale: 1.06, x: 4 }}
        whileTap={{ scale: 0.96 }}
        href="#contacto"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("contacto");
        }}
        className="mt-7 h-12 sm:h-13 px-6 rounded-full text-xs sm:text-sm font-black text-white bg-gradient-to-r from-[#9E5C6A] via-[#B26474] to-[#7D3E4C] hover:from-[#B86B7B] hover:to-[#924B5A] shadow-[0_0_28px_rgba(158,92,106,0.55)] border border-white/25 flex items-center gap-2.5 backdrop-blur-2xl transition-all cursor-pointer whitespace-nowrap"
      >
        <span>Contacto directo</span>
        <ArrowRight className="w-4 h-4" />
      </motion.a>
    </aside>
  );
}
