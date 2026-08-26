"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  X,
  Printer,
  Sparkles,
  GraduationCap,
  Workflow,
  SearchCheck,
  DollarSign,
  Key,
} from "lucide-react";
import { ParpellLogo } from "@/components/parpell/ParpellLogo";

const BackgroundMesh = dynamic(
  () => import("@/components/parpell/BackgroundMesh").then((m) => m.BackgroundMesh),
  { ssr: false }
);
const VerticalTimelineNav = dynamic(
  () => import("@/components/parpell/VerticalTimelineNav").then((m) => m.VerticalTimelineNav),
  { ssr: false }
);
const Parpell3DSpin = dynamic(
  () => import("@/components/parpell/Parpell3DSpin").then((m) => m.Parpell3DSpin),
  { ssr: false }
);
const DiscountPopup = dynamic(
  () => import("@/components/parpell/DiscountPopup").then((m) => m.DiscountPopup),
  { ssr: false }
);
const ClaudeScrollSimulator = dynamic(
  () => import("@/components/parpell/ClaudeScrollSimulator").then((m) => m.ClaudeScrollSimulator),
  { ssr: false }
);
const SecretBentoScroll = dynamic(
  () => import("@/components/parpell/SecretBentoScroll").then((m) => m.SecretBentoScroll),
  { ssr: false }
);
const SectorsReviewsCarousel = dynamic(
  () => import("@/components/parpell/SectorsReviewsCarousel").then((m) => m.SectorsReviewsCarousel),
  { ssr: false }
);
const TechStackGrid = dynamic(
  () => import("@/components/parpell/TechStackGrid").then((m) => m.TechStackGrid),
  { ssr: false }
);
const ParpellComparisonTable = dynamic(
  () => import("@/components/parpell/ParpellComparisonTable").then((m) => m.ParpellComparisonTable),
  { ssr: false }
);
const PurpIAMascot = dynamic(
  () => import("@/components/parpell/PurpIAMascot").then((m) => m.PurpIAMascot),
  { ssr: false }
);
const LiquidGlassNavbar = dynamic(
  () => import("@/components/parpell/LiquidGlassNavbar").then((m) => m.LiquidGlassNavbar),
  { ssr: false }
);

export default function ParpellLanding() {
  const [activeTab, setActiveTab] = useState<1 | 2 | 3 | 4>(1);

  // Parpell Brand Loading Screen State
  const [loadProgress, setLoadProgress] = useState(0);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsAppLoaded(true);
          return 100;
        }
        const delta = prev < 50 ? 25 : prev < 85 ? 18 : 12;
        const next = Math.min(100, prev + delta);
        if (next === 100) {
          clearInterval(timer);
          setTimeout(() => setIsAppLoaded(true), 120);
        }
        return next;
      });
    }, 20);

    const failsafe = setTimeout(() => {
      setLoadProgress(100);
      setIsAppLoaded(true);
      clearInterval(timer);
    }, 500);

    return () => {
      clearInterval(timer);
      clearTimeout(failsafe);
    };
  }, []);


  // Section 02 - The 4th Secret Box (Full-page 3D Zoom Portal)
  const [isSecretChamberOpen, setIsSecretChamberOpen] = useState(false);
  const [isSecretUnlocked, setIsSecretUnlocked] = useState(false);

  // Handle ESC and body scroll lock for Secret Chamber
  useEffect(() => {
    if (isSecretChamberOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSecretChamberOpen) {
        setIsSecretChamberOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSecretChamberOpen]);

  // Estimador de Clientes Perdidos State
  const [busquedasZona, setBusquedasZona] = useState<number>(450);
  const [competidores, setCompetidores] = useState<number>(3);

  // Interactive Modals
  const [modalType, setModalType] = useState<"diccionario" | "no-hacemos" | "metodo" | "one-pager" | null>(null);
  const [dictSearch, setDictSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    web: "",
    sector: "",
  });

  const dictionary = [
    { word: "Posicionamiento en IA (GEO)", def: "Conseguir que ChatGPT, Gemini, Perplexity y Claude recomienden tu negocio cuando alguien busca tus servicios." },
    { word: "Vídeos con Gancho", def: "Vídeos cortos grabados en tu negocio que atrapan la atención en los primeros 3 segundos y generan confianza inmediata." },
    { word: "Respuestas Automáticas en RRSS", def: "Automatización de mensajes directos en Instagram y TikTok (ManyChat) cuando comentan tus posts, entregando leads cualificados." },
    { word: "Ficha Google Maps", def: "Tu perfil local con ubicación y reseñas reales para aparecer el primero en tu ciudad." },
    { word: "Auditoría de Empresa", def: "Análisis integral para optimizar procesos internos, formar al equipo comercial y detectar fugas de dinero." },
  ];

  const faqItems = [
    {
      q: "¿Cuánto tiempo tengo que dedicarle yo o mi equipo al mes?",
      a: "Solo 1 jornada al mes para el rodaje presencial en tu negocio. Toda la parte técnica de optimización para ChatGPT, la edición de los vídeos y la configuración del sistema de leads la ejecutamos nosotros al 100%.",
    },
    {
      q: "¿Hay permanencia?",
      a: "Sí, hay una permanencia de 3 meses para que puedas empezar a ver resultados (lo normal en este sector es 8 a 10 semanas para ver resultados en los motores de búsqueda de Google).",
    },
    {
      q: "¿Qué ocurre exactamente en la llamada de 30 minutos?",
      a: "Te mostramos una auditoría real de qué dice la IA de tu negocio frente a tus 3 principales competidores de la zona. Te quedas el informe gratis aunque decidas no trabajar con nosotros.",
    },
  ];

  const openDictWithWord = (word: string) => {
    setDictSearch(word);
    setModalType("diccionario");
  };

  const filteredDict = dictionary.filter(
    (item) =>
      item.word.toLowerCase().includes(dictSearch.toLowerCase()) ||
      item.def.toLowerCase().includes(dictSearch.toLowerCase())
  );


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.correo || !form.web) return;
    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.7 },
        colors: ["#9E5C6A", "#C27A8A", "#F8F4F2", "#6E3844"],
      });
    } catch {
      // Graceful fallback if canvas-confetti fails
    }
    setSubmitted(true);
  };

  // Realistic Lost Clients Calculations (Up to 5k local searches)
  const clientesPerdidosMes = Math.min(25, Math.max(2, Math.round((busquedasZona * 0.0035) + (competidores * 0.7))));
  const clientesPerdidosAnio = clientesPerdidosMes * 12;
  const isCriticalNeed = clientesPerdidosMes >= 4;

  const navLinks = [
    { name: "El Problema", href: "#problema" },
    { name: "Las 3 Áreas", href: "#areas" },
    { name: "Calculadora", href: "#calculadora" },
    { name: "Quiénes Somos", href: "#equipo" },
  ];

  return (
    <div className="min-h-screen bg-[#080306] text-[#F8F4F2] font-sans relative overflow-x-hidden selection:bg-[#9E5C6A]/40 pb-32 sm:pb-40">
      
      {/* Fullscreen Brand Loading Screen with Standard Clean Larger Progress Bar */}
      <AnimatePresence>
        {!isAppLoaded && (
          <motion.div
            key="parpell-preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999999] bg-[#080306] flex flex-col items-center justify-center select-none overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#9E5C6A]/30 via-[#C27A8A]/15 to-purple-950/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-6 max-w-sm sm:max-w-md w-full px-8">
              {/* Brand Title */}
              <div className="text-center">
                <span className="text-base sm:text-lg font-mono font-black tracking-[0.4em] text-[#F8F4F2] uppercase block">
                  PARPELL
                </span>
              </div>

              {/* Standard Clean Larger Progress Bar */}
              <div className="w-full flex flex-col items-center gap-3">
                <div className="w-full h-2.5 sm:h-3 rounded-full bg-white/[0.08] p-[1.5px] overflow-hidden relative shadow-inner border border-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#9E5C6A] via-[#C27A8A] to-[#F3B0BE] rounded-full shadow-[0_0_20px_rgba(194,122,138,0.9)]"
                    style={{ width: `${loadProgress}%` }}
                    transition={{ ease: "easeOut", duration: 0.15 }}
                  />
                </div>
                <div className="w-full flex justify-between items-center text-xs font-mono text-zinc-400">
                  <span className="text-[11px] text-zinc-500 uppercase tracking-wider">Cargando experiencia</span>
                  <span className="font-bold text-[#E598A8] text-xs sm:text-sm">
                    {loadProgress}%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 15% Discount Pop-up */}
      <DiscountPopup />

      {/* Sleek Floating Glass Mobile Header & Nav Drawer */}
      <LiquidGlassNavbar />

      {/* Background Subtle Constellation Mesh */}
      <BackgroundMesh />

      {/* Vertical Interactive Scroll Timeline Nav (Left Side, Desktop only) */}
      <VerticalTimelineNav />

      {/* Floating Interactive Purp.IA Mascot (Bottom-Right) */}
      <PurpIAMascot isSecretChamberOpen={isSecretChamberOpen} />

      {/* Dynamic 3D Camera Zoom Wrapper (Slow cinematic travel into the secret chamber) */}
      <motion.div
        animate={
          isSecretChamberOpen
            ? {
                opacity: 0.15,
                pointerEvents: "none" as const,
              }
            : {
                opacity: 1,
                pointerEvents: "auto" as const,
              }
        }
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full"
      >




      {/* ========================================================================= */}
      {/* 00. HERO (Apple Style + 3D Spinning Parpell Logo) */}
      {/* ========================================================================= */}
      <section
        id="inicio"
        className="relative z-30 w-full max-w-4xl mx-auto px-4 sm:px-8 min-h-[90vh] sm:min-h-screen flex flex-col justify-between items-center text-center pt-20 sm:pt-24 lg:pt-12 pb-8 sm:pb-16"
      >
        <div className="flex-1 flex flex-col justify-center items-center">
          {/* 3D Spinning Parpell Logo (Top Layer) */}
          <Parpell3DSpin onLoaded={() => setLoadProgress(100)} />

          {/* Sized Headline with generous breathing room */}
          <h1 className="text-2xl sm:text-4xl md:text-[42px] lg:text-[46px] font-extrabold tracking-tight text-white mt-2 sm:mt-3 mb-2 leading-[1.2] sm:leading-[1.22]">
            Que la IA te recomiende. <br />
            <span className="shimmer-text">Que el vídeo te haga irresistible.</span> <br />
            Que tu equipo venda.
          </h1>
        </div>

        {/* Scroll Down Prompt Indicator (Prominent, High-Visibility Pill) */}
        <motion.button
          onClick={() => {
            const el = document.getElementById("hero-detalles");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="flex flex-col items-center gap-2 group cursor-pointer mt-3 mb-2"
          title="Deslizar para descubrir más"
        >
          <div className="flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-[#1A0A16] hover:bg-[#281022] border border-[#9E5C6A]/60 hover:border-[#C27A8A] text-xs sm:text-sm font-mono tracking-wider text-[#F8F4F2] font-bold shadow-[0_0_25px_rgba(158,92,106,0.35)] group-hover:shadow-[0_0_35px_rgba(158,92,106,0.6)] transition-all">
            <span>Desliza para ver más</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#9E5C6A]/35 border border-[#9E5C6A]/70 flex items-center justify-center text-[#F3B0BE]"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.div>
          </div>
        </motion.button>
      </section>

      {/* ========================================================================= */}
      {/* 00.1 HERO DETALLES & PILARES (Aparece tras deslizar) */}
      {/* ========================================================================= */}
      <motion.div
        id="hero-detalles"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-30 w-full max-w-4xl mx-auto px-4 sm:px-8 pt-8 sm:pt-14 pb-8 sm:pb-12 flex flex-col items-center text-center space-y-8 sm:space-y-12"
      >
        {/* Human, Friendly Subtitle with clear separation */}
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-base sm:text-xl font-bold text-white tracking-tight">
            No somos una agencia de marketing cualquiera.
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
            Aplicamos <strong className="text-[#C27A8A] font-semibold">GEO (Generative Engine Optimization)</strong>: el posicionamiento en motores de IA para que modelos como ChatGPT citen tu negocio como la opción recomendada nº1 en tu zona.
          </p>
        </div>

        {/* FACT: Exclusividad y Trato Directo (Compact & high prestige) */}
        <div className="w-full max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#1D0A16] via-[#14080F] to-[#1D0A16] border border-[#9E5C6A]/40 shadow-[0_0_35px_rgba(158,92,106,0.22)] text-left flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#9E5C6A] text-white text-[10px] font-mono font-black uppercase tracking-wider shrink-0 self-start sm:self-auto shadow-md shadow-[#9E5C6A]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>FACT</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
            <strong className="text-white">Somos 2 socios y trabajamos directamente contigo, sin becarios ni intermediarios.</strong> Para asegurar rodajes con cámara de cine y soluciones a medida de máxima calidad, <strong className="text-[#E598A8]">aceptamos un cupo limitado de clientes a la vez</strong>.
          </p>
        </div>

        {/* Secondary Navigation CTA */}
        <div className="flex justify-center items-center">
          <a
            href="#comparativa"
            className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] transition-all flex items-center gap-2"
          >
            <span>¿Por qué elegirnos?</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C27A8A]" />
          </a>
        </div>

        {/* 4 Apple-Style Clean Pillars */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl pt-2">
          {[
            { title: "Sin intermediarios", desc: "Hablas con los 2 socios" },
            { title: "Cámara de cine", desc: "Grabamos en tu negocio" },
            { title: "Todo es tuyo", desc: "Cuentas y vídeos propios" },
            { title: "Pruebas reales", desc: "Seguimiento de IA real" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center"
            >
              <span className="text-xs font-bold text-white block mb-1">{item.title}</span>
              <span className="text-[10px] sm:text-[11px] text-zinc-400">{item.desc}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 01. EL PROBLEMA (Simulación de Búsqueda por IA) */}
      {/* ========================================================================= */}
      <motion.section
        id="problema"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 pt-8 sm:pt-12 pb-8 sm:pb-12 text-center"
      >
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#9E5C6A] block mb-3">
          El Cambio de Época
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          La gente ya no lee 10 enlaces. <br />
          <span className="text-zinc-400 font-medium">Pregunta a la IA y llama al primer nombre.</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-lg mx-auto mb-10 leading-relaxed">
          Comprueba cómo responde un motor de inteligencia artificial en tiempo real:
        </p>

        {/* Interactive Claude Live Search Simulator with Scroll-Driven Real-time Generation */}
        <div className="my-6 sm:my-8">
          <ClaudeScrollSimulator />
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* 02. LAS 3 ÁREAS + EL CUARTO SECRETO DESPLAZABLE */}
      {/* ========================================================================= */}
      <motion.section
        id="areas"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 pt-8 sm:pt-12 pb-8 sm:pb-12 text-center"
      >
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#9E5C6A] block mb-3">
          El Sistema Completo
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Tres piezas que trabajan juntas.
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-lg mx-auto mb-12 leading-relaxed">
          No vendemos servicios sueltos. Conectamos los motores que necesita tu empresa para dominar su mercado.
        </p>

        {/* Dynamic Horizontal Sliding Bento Track (Slides left on scroll to reveal El Cuarto Secreto) */}
        <SecretBentoScroll
          onOpenSecret={() => {
            setIsSecretChamberOpen(true);
            setIsSecretUnlocked(true);
          }}
          isSecretUnlocked={isSecretUnlocked}
        />
      </motion.section>

      {/* ========================================================================= */}
      {/* 03. ¿POR QUÉ PARPELL? (Tabla Comparativa de Valor) */}
      {/* ========================================================================= */}
      <ParpellComparisonTable />

      {/* ========================================================================= */}
      {/* 04. ESPECIALIDADES E INFRAESTRUCTURA (Dual Mesh + Purp.IA) */}
      {/* ========================================================================= */}
      <TechStackGrid />

      {/* ========================================================================= */}
      {/* 05. QUIÉNES SOMOS (Dos Socios) */}
      {/* ========================================================================= */}
      <motion.section
        id="equipo"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 pt-8 sm:pt-12 pb-8 sm:pb-12 text-center"
      >
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#9E5C6A] block mb-3">
          Quiénes Somos
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
          Dos socios. Cero intermediarios.
        </h2>
        <p className="text-sm text-zinc-300 max-w-md mx-auto mb-12 leading-relaxed">
          La persona con la que hablas por teléfono es exactamente la que rueda en tu local y programa tu sistema.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="apple-glass p-7 rounded-3xl space-y-3">
            <span className="text-[10px] font-mono text-[#9E5C6A] font-bold uppercase block">Vídeo & Ventas</span>
            <h3 className="text-lg font-bold text-white">Socio Comercial</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Exdirector de marketing en venta de ticket alto. Se encarga de rodar en tu local con cámara de cine y guiones diseñados para que tus clientes confíen al instante.
            </p>
          </div>

          <div className="apple-glass p-7 rounded-3xl space-y-3">
            <span className="text-[10px] font-mono text-[#9E5C6A] font-bold uppercase block">Tecnología & IA</span>
            <h3 className="text-lg font-bold text-white">Socio Técnico</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Ingeniero de software. Se encarga de que tu web y presencia digital estén optimizadas para que los algoritmos de ChatGPT y Claude elijan a tu empresa.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* PREGUNTAS FRECUENTES (Apple Accordion) */}
      {/* ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-8 pt-8 sm:pt-12 pb-8 sm:pb-12 text-center"
      >
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#9E5C6A] block mb-3">
          Dudas Clave
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight">
          Preguntas Frecuentes
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 mb-12">
          Respuestas transparentes antes de solicitar la conversación.
        </p>

        <div className="space-y-4 text-left">
          {faqItems.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={item.q}
                className="apple-glass rounded-2xl border border-white/[0.08] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#9E5C6A] text-white border-transparent" : "text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/[0.04]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* 04.5 SECTORES EN LOS QUE YA HEMOS IMPACTADO (3D Layered Carousel) */}
      {/* ========================================================================= */}
      <SectorsReviewsCarousel />

      {/* ========================================================================= */}
      {/* 05. SIGUIENTE PASO (Llamada de 30 min) */}
      {/* ========================================================================= */}
      <motion.section
        id="contacto"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24 text-center"
      >
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#9E5C6A] block mb-3">
          Siguiente Paso
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
          Una conversación de 30 minutos.
        </h2>
        <p className="text-sm text-zinc-300 max-w-md mx-auto mb-12 leading-relaxed">
          Te preparamos un diagnóstico gratuito de qué dice la IA de tu negocio antes de la llamada.
        </p>

        <div className="apple-glass rounded-3xl p-7 sm:p-9 text-left grid grid-cols-1 md:grid-cols-2 gap-8 shadow-2xl">
          {/* Left: Commitments */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase font-bold text-[#9E5C6A] block">
                Lo que recibirás en la videollamada:
              </span>
              <div className="space-y-2.5 text-xs sm:text-sm text-zinc-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9E5C6A] shrink-0 mt-0.5" />
                  <span><strong>Auditoría de tu negocio en IA:</strong> Capturas reales de qué ocurre cuando buscan tus servicios.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9E5C6A] shrink-0 mt-0.5" />
                  <span><strong>Análisis de tus competidores:</strong> A quién recomienda hoy la IA en tu zona.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9E5C6A] shrink-0 mt-0.5" />
                  <span><strong>Plan de 90 días:</strong> Hoja de ruta clara para captar más clientes.</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F7EBED] text-[#2B1A20] text-xs font-medium">
              «Si tras 30 minutos decides no trabajar con nosotros, <strong>te quedas el informe gratis</strong>.»
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="py-10 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#9E5C6A]/20 border border-[#9E5C6A]/40 flex items-center justify-center text-[#9E5C6A] mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Solicitud Recibida</h3>
                <p className="text-xs text-zinc-300">Te contactaremos para coordinar los 30 minutos.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 mb-1">NOMBRE O EMPRESA</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#9E5C6A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 mb-1">CORREO ELECTRÓNICO</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@tuempresa.com"
                      value={form.correo}
                      onChange={(e) => setForm({ ...form, correo: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#9E5C6A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 mb-1">TELÉFONO / WHATSAPP</label>
                    <input
                      type="tel"
                      required
                      placeholder="+34 600 000 000"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#9E5C6A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 mb-1">WEB O INSTAGRAM ACTUAL</label>
                  <input
                    type="text"
                    required
                    placeholder="www.tuempresa.com"
                    value={form.web}
                    onChange={(e) => setForm({ ...form, web: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#9E5C6A]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#9E5C6A] hover:bg-[#854b57] shadow-lg shadow-[#9E5C6A]/30 transition-all mt-2"
                >
                  Solicitar conversación de 30 minutos
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* SIMPLE CONCEPT & ONE-PAGER MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="w-full max-w-2xl apple-glass rounded-3xl p-6 sm:p-8 border border-white/[0.18] shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.1]">
                <span className="text-sm font-bold text-white">
                  {modalType === "diccionario" && "Conceptos Explicados en Cristiano"}
                  {modalType === "one-pager" && "Resumen Ejecutivo para Socios"}
                </span>
                <button
                  onClick={() => setModalType(null)}
                  className="p-1 rounded-lg hover:bg-white/[0.08] text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* DICCIONARIO */}
              {modalType === "diccionario" && (
                <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                  {filteredDict.map((item) => (
                    <div key={item.word} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                      <strong className="text-xs font-bold text-[#C27A8A] block mb-1">{item.word}</strong>
                      <p className="text-xs text-zinc-200 leading-relaxed">{item.def}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* ONE-PAGER PDF SUMMARY */}
              {modalType === "one-pager" && (
                <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <ParpellLogo size={22} />
                        <span className="font-bold text-white text-sm">PARPELL</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">RESUMEN EJECUTIVO</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <strong className="text-white block mb-0.5">01 · Visibilidad en IA (Que te encuentren primero)</strong>
                        <p className="text-zinc-300">Optimizamos tu presencia técnica para que ChatGPT, Claude, Perplexity y Google Maps recomienden tu empresa en primer lugar.</p>
                      </div>

                      <div>
                        <strong className="text-white block mb-0.5">02 · Contenido con Gancho (1 día de rodaje al mes)</strong>
                        <p className="text-zinc-300">Grabamos en tu local con cámara de cine y guiones de alta retención. Todo el material vertical listo para publicar.</p>
                      </div>

                      <div>
                        <strong className="text-white block mb-0.5">03 · Cierre en RRSS (Respuestas automáticas)</strong>
                        <p className="text-zinc-300">Automatización de mensajes directos para cualificar a los seguidores que comentan en Instagram/TikTok y entregarte clientes listos.</p>
                      </div>

                      <div>
                        <strong className="text-white block mb-0.5">04 · El Cuarto Secreto (Auditoría & Formación)</strong>
                        <p className="text-zinc-300">Formación comercial, optimización de workflows con IA y detección de fugas de dinero.</p>
                      </div>

                      <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-2 text-[10px] text-zinc-400 font-mono">
                        <span>✓ Permanencia 3 Meses</span>
                        <span>✓ Trato con 2 Socios</span>
                        <span>✓ Material 100% Tuyo</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      onClick={() => {
                        window.print();
                      }}
                      className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-semibold text-white flex items-center gap-2 transition-all"
                    >
                      <Printer className="w-3.5 h-3.5 text-[#C27A8A]" />
                      <span>Imprimir / Guardar PDF</span>
                    </button>

                    <button
                      onClick={() => {
                        setModalType(null);
                        const el = document.getElementById("contacto");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-4 py-2 rounded-xl bg-[#9E5C6A] hover:bg-[#854b57] text-xs font-bold text-white transition-all"
                    >
                      Pedir llamada de 30 min →
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      </motion.div>

      {/* ========================================================================= */}
      {/* ULTRA MINIMAL FOOTER */}
      {/* ========================================================================= */}
      <footer className="relative z-10 w-full max-w-4xl mx-auto px-6 py-2 border-t border-white/[0.04] flex items-center justify-between text-[9px] text-zinc-500 font-mono">
        <div className="flex items-center gap-1.5">
          <ParpellLogo size={14} rounded="rounded-sm" />
          <span className="font-bold text-zinc-400">PARPELL</span>
          <span>·</span>
          <span>Brand & Growth</span>
        </div>
        <span>© {new Date().getFullYear()} Parpell</span>
      </footer>

      {/* ========================================================================= */}
      {/* FULLSCREEN 3D SECRET CHAMBER OVERLAY (The room you enter through the zoom) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isSecretChamberOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Deep Velvet Obsidian Backdrop with smooth seamless fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsSecretChamberOpen(false)}
              className="fixed inset-0 bg-[#060109]/97"
            />

            {/* Ambient Radial Lighting Expanding Portal in the Secret Chamber */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.4, opacity: 0.8 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-gradient-to-tr from-purple-800/50 via-fuchsia-600/30 to-transparent rounded-full blur-3xl pointer-events-none"
            />

            {/* The Chamber Interior */}
            <motion.div
              initial={{
                scale: 0.9,
                y: 30,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              exit={{
                scale: 0.9,
                y: 20,
                opacity: 0,
                transition: {
                  duration: 0.25,
                },
              }}
              className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto p-5 sm:p-8 md:p-10 rounded-3xl bg-[#14031B] border-2 border-fuchsia-500/70 shadow-[0_0_140px_rgba(217,70,239,0.5)] text-left"
            >
              {/* Header inside the Secret Chamber */}
              <div className="flex items-center justify-between pb-4 mb-5 sm:mb-6 border-b border-fuchsia-500/30 gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 border border-fuchsia-300/60 flex items-center justify-center text-white shadow-[0_0_25px_rgba(217,70,239,0.5)] shrink-0">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono text-fuchsia-300 font-bold uppercase tracking-widest block">
                      Has entrado en
                    </span>
                    <h2 className="text-lg sm:text-3xl font-black text-white tracking-tight">
                      El Cuarto Secreto
                    </h2>
                  </div>
                </div>

                {/* Back / Reverse Zoom-Out Button */}
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setIsSecretChamberOpen(false)}
                  className="px-3 sm:px-4 py-2 rounded-full bg-white/[0.08] hover:bg-fuchsia-600/30 border border-white/[0.15] hover:border-fuchsia-400 text-xs font-bold text-white flex items-center gap-1.5 transition-all cursor-pointer shadow-lg shrink-0"
                >
                  <X className="w-4 h-4 text-fuchsia-300" />
                  <span className="hidden sm:inline">Salir del Secreto (Esc)</span>
                  <span className="sm:hidden">Salir</span>
                </motion.button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                    Auditoría, Formación &amp; Optimización Estructural de Empresa
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Esta pieza no es para principiantes. Es la consultoría e intervención directa que realizamos dentro de tu operativa para multiplicar la facturación y asegurar que ningún lead cualificado se pierda por el camino.
                  </p>
                </div>

                {/* The 4 Architectural Secret Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 1. Formación Comercial */}
                  <div className="p-5 rounded-2xl bg-black/50 border border-fuchsia-500/35 hover:border-fuchsia-400 transition-all space-y-2 group">
                    <div className="flex items-center gap-2.5 text-fuchsia-300 font-bold text-sm sm:text-base">
                      <div className="w-8 h-8 rounded-xl bg-fuchsia-500/20 border border-fuchsia-400/40 flex items-center justify-center text-fuchsia-300">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <span>Formación Comercial de Alto Ticket</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      Entrenamos personalmente a tu equipo de ventas o comerciales para defender tus precios altos, manejar objeciones difíciles y cerrar presupuestos sin rebajar márgenes.
                    </p>
                  </div>

                  {/* 2. Formación en IA */}
                  <div className="p-5 rounded-2xl bg-black/50 border border-fuchsia-500/35 hover:border-fuchsia-400 transition-all space-y-2 group">
                    <div className="flex items-center gap-2.5 text-fuchsia-300 font-bold text-sm sm:text-base">
                      <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                        <Workflow className="w-4 h-4" />
                      </div>
                      <span>Formación en IA para tu Plantilla</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      Configuramos e instruimos a tus empleados en flujos de trabajo (workflows) con IA para automatizar tareas repetitivas y multiplicar por 4 la velocidad operativa.
                    </p>
                  </div>

                  {/* 3. Cadena Operativa */}
                  <div className="p-5 rounded-2xl bg-black/50 border border-fuchsia-500/35 hover:border-fuchsia-400 transition-all space-y-2 group">
                    <div className="flex items-center gap-2.5 text-fuchsia-300 font-bold text-sm sm:text-base">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                        <SearchCheck className="w-4 h-4" />
                      </div>
                      <span>Eliminación de Errores Operativos</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      Auditamos paso a paso tu embudo: desde que entra un lead hasta que se le entrega el servicio. Detectamos atascos en la atención al cliente y fricciones que hacen que la gente abandone.
                    </p>
                  </div>

                  {/* 4. Fugas de Dinero */}
                  <div className="p-5 rounded-2xl bg-black/50 border border-fuchsia-500/35 hover:border-fuchsia-400 transition-all space-y-2 group">
                    <div className="flex items-center gap-2.5 text-fuchsia-300 font-bold text-sm sm:text-base">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                        <DollarSign className="w-4 h-4" />
                      </div>
                      <span>Detección de Fugas de Dinero</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      Analizamos cada euro invertido en herramientas, suscripciones o procesos obsoletos que no generan retorno y cerramos el grifo de inmediato.
                    </p>
                  </div>
                </div>

                {/* Bottom Action inside the Chamber */}
                <div className="pt-4 border-t border-fuchsia-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-fuchsia-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Pieza de alto rendimiento exclusiva para clientes Parpell</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsSecretChamberOpen(false)}
                      className="px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-xs font-bold text-white transition-all cursor-pointer"
                    >
                      ← Salir y Volver a la Web
                    </button>
                    <a
                      href="#contacto"
                      onClick={() => setIsSecretChamberOpen(false)}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 text-xs font-bold text-white shadow-lg shadow-fuchsia-900/50 hover:shadow-fuchsia-600/50 transition-all"
                    >
                      Pedir auditoría de 30 min →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
