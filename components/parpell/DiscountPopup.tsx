"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Tag, Sparkles, CheckCircle2, ArrowRight, Mail, Phone } from "lucide-react";

export function DiscountPopup() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email");
  const [inputValue, setInputValue] = useState("");
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Pops up every time someone enters the website after 1.2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when discount popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClaim = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;

    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 140,
        spread: 85,
        origin: { y: 0.6 },
        colors: ["#9E5C6A", "#C27A8A", "#F8F4F2", "#D4AF37", "#FFFFFF"],
      });
    } catch {
      // Graceful fallback if canvas-confetti fails
    }

    setClaimed(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2800);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="parpell-portal fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none" style={{ cursor: "auto" }}>
          {/* Dark Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#060109]/90 cursor-pointer"
            style={{ cursor: "pointer" }}
          />

          {/* Centered Modal Popup */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 320, damping: 25 }}
            className="relative z-[100000] w-full max-w-lg rounded-3xl p-5 sm:p-8 md:p-9 bg-gradient-to-b from-[#1C0D15] via-[#14080F] to-[#0A0307] border-2 border-[#9E5C6A]/60 shadow-[0_30px_100px_rgba(158,92,106,0.4)] text-left max-h-[92vh] overflow-y-auto select-auto"
            style={{ cursor: "default" }}
          >
            {/* Ambient Wine Radial Flare */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#9E5C6A]/30 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.2] text-zinc-300 hover:text-white transition-all cursor-pointer z-10 shadow-md"
              title="Cerrar ventana"
              type="button"
              style={{ cursor: "pointer" }}
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {!claimed ? (
              <div className="space-y-4 sm:space-y-5 pt-1 sm:pt-0">
                {/* 15% Badge */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#9E5C6A]/20 border border-[#9E5C6A]/50 text-[11px] sm:text-xs font-mono text-[#F7EBED]">
                  <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C27A8A]" />
                  <span className="font-bold tracking-wider">PROMOCIÓN EXCLUSIVA WEB</span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    Reclama un <span className="text-[#C27A8A]">15% de Descuento</span> en tu Auditoría o Setup
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1.5 sm:mt-2 leading-relaxed">
                    Déjanos tu contacto preferido para congelar tu tarifa reducida antes de reservar tu llamada de 30 minutos.
                  </p>
                </div>

                {/* Switcher: Email vs Phone */}
                <div className="flex items-center gap-2 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => setContactMethod("email")}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      contactMethod === "email"
                        ? "bg-[#9E5C6A] text-white shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Correo Electrónico</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactMethod("phone")}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      contactMethod === "phone"
                        ? "bg-[#9E5C6A] text-white shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Teléfono / WhatsApp</span>
                  </button>
                </div>

                {/* Input Form */}
                <form onSubmit={handleClaim} className="space-y-3">
                  <div className="relative">
                    <input
                      type={contactMethod === "email" ? "email" : "tel"}
                      required
                      placeholder={
                        contactMethod === "email"
                          ? "tu.email@empresa.com"
                          : "+34 600 000 000 (WhatsApp)"
                      }
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="w-full h-12 pl-4 pr-12 rounded-xl bg-white/[0.05] border border-white/[0.15] focus:border-[#9E5C6A] text-sm text-white placeholder:text-zinc-500 focus:outline-none transition-all shadow-inner"
                      style={{ cursor: "text" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-[#9E5C6A] hover:bg-[#854b57] text-white text-sm font-bold shadow-lg shadow-[#9E5C6A]/40 flex items-center justify-center gap-2 transition-all cursor-pointer group"
                    style={{ cursor: "pointer" }}
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Reclamar mi 15% de Descuento</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <p className="text-[11px] text-zinc-400 text-center font-mono">
                  Sin compromiso ni permanencia. Te contactamos en menos de 24h.
                </p>
              </div>
            ) : (
              /* Success Confirmation View */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-white">¡15% Descuento Aplicado!</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-xs mx-auto">
                    Hemos registrado tu contacto ({inputValue}). Te aplicaremos el descuento directamente en tu presupuesto.
                  </p>
                </div>
                <div className="pt-2 text-xs font-mono text-[#C27A8A]">
                  Cerrando automáticamente...
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
