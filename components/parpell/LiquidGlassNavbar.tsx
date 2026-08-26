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
    // 1. IntersectionObserver for active section tracking (zero reflows)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    // 2. Ultra-lightweight scroll listener only for background blur toggle
    let lastScrolled = false;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
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
    <header className="fixed top-0 left-0 right-0 z-40 flex lg:hidden justify-center px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none select-none">
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
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#9E5C6A] to-[#B26474] hover:brightness-110 shadow-md shadow-[#9E5C6A]/25 transition-all cursor-pointer active:scale-95 shrink-0"
          >
            <Sparkles className="w-3 h-3 text-[#F7EBED]" />
            <span className="hidden xs:inline sm:inline">Pedir 30 min</span>
            <span className="xs:hidden sm:hidden">30 min</span>
          </a>

          {/* Mobile Menu Toggle Button (Visible on mobile/tablet < lg) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.1] text-zinc-200 hover:text-white transition-all flex items-center justify-center cursor-pointer active:scale-90 shrink-0"
            aria-label="Abrir menú de navegación"
            type="button"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-[#F3B0BE]" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu with Elegant Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay for focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="pointer-events-auto fixed inset-0 bg-black/60 lg:hidden -z-10"
            />

            {/* Premium Mobile Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto absolute top-14 left-3 right-3 rounded-2xl p-4 sm:p-5 border border-white/[0.12] bg-[#110513] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(158,92,106,0.2)] flex flex-col gap-3 lg:hidden z-50 max-h-[82vh] overflow-y-auto"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <ParpellLogo size={18} />
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-zinc-300">
                    MENÚ
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Navigation links stack */}
              <div className="grid grid-cols-2 gap-1.5 py-1">
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
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between cursor-pointer active:scale-98 ${
                        isActive
                          ? "bg-[#9E5C6A] text-white font-bold shadow-sm shadow-[#9E5C6A]/40"
                          : "text-zinc-300 hover:bg-white/[0.05] hover:text-white bg-white/[0.02] border border-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className={`text-[9px] font-mono shrink-0 ${isActive ? "text-white/80" : "text-[#C27A8A]"}`}>
                          {item.num}
                        </span>
                        <span className="truncate">{item.name}</span>
                      </div>
                      <ArrowRight className={`w-3 h-3 shrink-0 ${isActive ? "text-white" : "text-zinc-500 opacity-60"}`} />
                    </a>
                  );
                })}
              </div>

              {/* Bottom Direct CTA */}
              <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between gap-2">
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-white leading-tight">2 Socios Directos</span>
                  <span className="text-[9px] text-zinc-400 font-mono">Sin intermediarios</span>
                </div>
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contacto");
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#9E5C6A] via-[#B26474] to-[#9E5C6A] flex items-center gap-1.5 shadow-md shadow-[#9E5C6A]/30 active:scale-95 transition-transform shrink-0"
                >
                  <Sparkles className="w-3 h-3 text-[#F7EBED]" />
                  <span>Diagnóstico Gratis</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
