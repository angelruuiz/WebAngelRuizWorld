"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { ParpellLogo } from "./ParpellLogo";

interface NavItem {
  name: string;
  href: string;
  num?: string;
}

const navItems: NavItem[] = [
  { name: "Inicio", href: "#inicio", num: "00" },
  { name: "El Problema", href: "#problema", num: "01" },
  { name: "Las 3 Áreas", href: "#areas", num: "02" },
  { name: "Comparativa", href: "#comparativa", num: "03" },
  { name: "Especialidades", href: "#stack", num: "04" },
  { name: "Equipo", href: "#equipo", num: "05" },
  { name: "Sectores", href: "#sectores", num: "06" },
  { name: "Contacto", href: "#contacto", num: "07" },
];

export function LiquidGlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const id = navItems[i].href.replace("#", "");
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const lenisInstance = typeof window !== "undefined" ? (window as unknown as { __parpellLenis?: { scrollTo: (target: string, opts?: { offset?: number; duration?: number }) => void } }).__parpellLenis : null;
    if (lenisInstance) {
      lenisInstance.scrollTo(href, { offset: -20, duration: 1.2 });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none select-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between w-full max-w-4xl px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "apple-glass shadow-2xl shadow-black/80 border-[#9E5C6A]/40 bg-[#170815]/90 backdrop-blur-2xl"
            : "bg-[#170815]/50 border border-white/[0.08] backdrop-blur-md"
        }`}
      >
        {/* Brand Logo & Name */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#inicio");
          }}
          className="flex items-center gap-2.5 pl-1 group cursor-pointer"
        >
          <ParpellLogo size={24} />
          <div className="flex flex-col text-left">
            <span className="font-bold tracking-widest text-[#F8F4F2] text-xs sm:text-sm uppercase font-mono">
              PARPELL
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase font-mono tracking-widest text-[#C27A8A] -mt-0.5 font-semibold">
              Brand &amp; Growth
            </span>
          </div>
        </a>

        {/* Quick CTA on Mobile & Desktop */}
        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contacto");
            }}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold text-white bg-[#9E5C6A] hover:bg-[#854b57] shadow-md shadow-[#9E5C6A]/30 transition-all cursor-pointer active:scale-95"
          >
            <Sparkles className="w-3 h-3 text-[#F7EBED]" />
            <span className="hidden xs:inline sm:inline">Pedir 30 min</span>
            <span className="xs:hidden sm:hidden">Contacto</span>
          </a>

          {/* Mobile Menu Toggle Button (Visible on mobile/tablet < lg) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Abrir menú de navegación"
            type="button"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto absolute top-16 left-3 right-3 apple-glass rounded-3xl p-5 border border-[#9E5C6A]/40 bg-[#160618]/98 backdrop-blur-3xl shadow-2xl flex flex-col gap-3 lg:hidden z-50 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                Navegación Parpell
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-[#9E5C6A] text-white shadow-md shadow-[#9E5C6A]/30 font-bold"
                        : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono ${isActive ? "text-white/80" : "text-[#C27A8A]"}`}>
                        {item.num}
                      </span>
                      <span>{item.name}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between gap-3">
              <span className="text-[11px] text-zinc-400">2 socios · Trato directo</span>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contacto");
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#9E5C6A] to-[#B26474] flex items-center gap-1.5 shadow-md"
              >
                <span>Diagnóstico Gratis</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
