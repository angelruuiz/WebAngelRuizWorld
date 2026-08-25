"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ParpellLogo } from "./ParpellLogo";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "El Problema", href: "#problema" },
  { name: "Las 3 Áreas", href: "#areas" },
  { name: "Nuestra Marca", href: "#marca" },
  { name: "GEO", href: "#geo" },
  { name: "Cómo Trabajamos", href: "#como-trabajamos" },
  { name: "Quiénes Somos", href: "#quienes-somos" },
  { name: "Diccionario", href: "#diccionario" },
];

export function LiquidGlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 py-2.5 rounded-full transition-all duration-500",
          scrolled
            ? "liquid-glass-elevated shadow-2xl shadow-black/70 border-[#9E5C6A]/25 bg-[#2B1A20]/90 backdrop-blur-2xl"
            : "liquid-glass border-white/[0.08] bg-[#2B1A20]/40"
        )}
      >
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 pl-2 group">
          <ParpellLogo size={32} />
          <div className="flex flex-col text-left">
            <span className="font-bold tracking-tight text-[#F8F4F2] text-sm uppercase">
              PARPELL
            </span>
            <span className="text-[9px] uppercase font-mono tracking-widest text-[#9E5C6A] -mt-0.5">
              Brand & Growth Orchestrator
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-0.5 bg-[#190E13]/60 border border-white/[0.06] px-2 py-1 rounded-full">
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative px-3 py-1.5 text-xs font-medium text-[#F8F4F2]/80 hover:text-[#F8F4F2] transition-colors duration-200"
            >
              {hoveredIdx === idx && (
                <motion.div
                  layoutId="navHover"
                  className="absolute inset-0 bg-[#9E5C6A]/20 rounded-full border border-[#9E5C6A]/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#F8F4F2] bg-[#9E5C6A] hover:bg-[#854b57] shadow-lg shadow-[#9E5C6A]/25 transition-all duration-300 active:scale-95"
          >
            <span>Siguiente Paso</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#F8F4F2]/80 hover:text-[#F8F4F2] transition-colors"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 liquid-glass-elevated rounded-3xl p-6 border border-[#9E5C6A]/30 bg-[#2B1A20]/98 backdrop-blur-3xl shadow-2xl flex flex-col gap-4 lg:hidden z-50"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-2xl text-sm font-medium text-[#F8F4F2]/90 hover:bg-[#9E5C6A]/20 hover:text-[#F8F4F2] transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#9E5C6A]" />
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-white/[0.08]">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-[#F8F4F2] bg-[#9E5C6A] shadow-lg shadow-[#9E5C6A]/30"
              >
                <span>Siguiente Paso (Conversación 30 min)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
