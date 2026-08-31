"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Folder,
  Sparkles,
  Wand2,
  ExternalLink,
  CheckCircle,
  FileText,
  Terminal as TerminalIcon,
  Volume2,
  VolumeX,
  Zap,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  ArrowUpRight,
  Download,
  Send,
  Home,
  FolderGit2,
  FileBadge,
  Wand,
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  Cpu,
  Bot,
  Palette,
  Eye,
  Shuffle
} from "lucide-react";

export default function CvPersonalPage() {
  // Sound Synthesis State
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Persona Switcher State
  const [activePersona, setActivePersona] = useState<"dev" | "sys" | "ai" | "magic">("dev");

  // Project Filter State
  const [projectFilter, setProjectFilter] = useState<"all" | "client" | "ai">("all");

  // Gallery Slider State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Magic Deck State
  const [activeMagicCard, setActiveMagicCard] = useState<number | null>(null);
  const [magicSecretText, setMagicSecretText] = useState("Toca cualquier carta para revelarla...");
  const [isShuffling, setIsShuffling] = useState(false);

  // Modals State
  const [activeProjectKey, setActiveProjectKey] = useState<string | null>(null);
  const [isExpressModalOpen, setIsExpressModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Toast State
  const [toast, setToast] = useState<{ visible: boolean; title: string; msg: string }>({
    visible: false,
    title: "",
    msg: "",
  });

  // Terminal State
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: "cmd" | "resp"; text: string }>>([
    { type: "resp", text: "Terminal UNIX interactivo de Ángel Ruiz García." },
    { type: "resp", text: "Escribe 'help' o pulsa los botones rápidos para ejecutar comandos." },
    { type: "cmd", text: "whoami" },
    { type: "resp", text: "> Ángel Ruiz García | ASIR Titulado + DAM en curso | Especialista IA & Web Full Deploy." },
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const terminalScreenRef = useRef<HTMLDivElement>(null);

  // Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Audio Player Function
  const playTone = (freq: number, type: OscillatorType = "sine", duration = 0.07, gainVal = 0.04) => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);

      gain.gain.setValueAtTime(gainVal, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);

      osc.start();
      osc.stop(audioCtxRef.current.currentTime + duration);
    } catch {
      // Audio handled
    }
  };

  const soundHover = () => playTone(440, "sine", 0.03, 0.015);
  const soundClick = () => playTone(820, "triangle", 0.05, 0.04);
  const soundSuccess = () => {
    playTone(523.25, "sine", 0.07, 0.03);
    setTimeout(() => playTone(659.25, "sine", 0.07, 0.03), 45);
    setTimeout(() => playTone(783.99, "sine", 0.1, 0.04), 90);
  };
  const soundMagic = () => {
    [900, 1200, 1500, 1900, 2400].forEach((freq, idx) => {
      setTimeout(() => playTone(freq, "triangle", 0.07, 0.02), idx * 35);
    });
  };

  const triggerToast = (title: string, msg: string) => {
    soundSuccess();
    setToast({ visible: true, title, msg });
    setTimeout(() => {
      setToast({ visible: false, title: "", msg: "" });
    }, 2800);
  };

  const copyToClipboard = (text: string, successMsg: string) => {
    navigator.clipboard.writeText(text).then(() => {
      triggerToast("¡COPIADO!", successMsg);
    });
  };

  // Gallery Slides
  const gallerySlides = [
    {
      title: "angelruiz.world — Web de Cartomago Profesional",
      tag: "PRODUCCIÓN LIVE",
      tagColor: "#CCFF00",
      src: "/cv-personal/angelruiz.world.png",
    },
    {
      title: "Parpell — Agencia de IA y Redes Sociales",
      tag: "EMPRESA / B2B",
      tagColor: "#00F0FF",
      src: "/cv-personal/parpell.com.png",
    },
    {
      title: "Marina Godar — Portfolio de Marketing & Visual",
      tag: "CLIENTE REAL",
      tagColor: "#8B5CF6",
      src: "/cv-personal/marinagodar.com.png",
    },
    {
      title: 'Peña "La Escombrera" — Web Torrelodones',
      tag: "EN CONSTRUCCIÓN",
      tagColor: "#CCFF00",
      src: "/cv-personal/laescombrera.com.png",
    },
  ];

  // Persona Data
  const personaDetails = {
    dev: {
      avatar: "⚡",
      title: "Creative Web Developer",
      subtitle: "Despliegue integral, GSAP & SEO/GEO",
      objective: "Webs Rápidas & Visuales",
      highlight: "100% Optimizado",
    },
    sys: {
      avatar: "🛡️",
      title: "Administrador de Sistemas (ASIR)",
      subtitle: "Servidores Linux, Redes & Seguridad",
      objective: "Infraestructuras Robustas",
      highlight: "Active Directory & Linux",
    },
    ai: {
      avatar: "🤖",
      title: "AI Agents Developer",
      subtitle: "Certificado DeepLearning.AI & Racks",
      objective: "Automatización Inteligente",
      highlight: "LangChain & RAG",
    },
    magic: {
      avatar: "🪄",
      title: "Cartomago Profesional",
      subtitle: "Ingeniería de la Percepción & Escenario",
      objective: "Experiencias Memorables",
      highlight: "angelruiz.world",
    },
  };

  // Project Dossiers
  const projectDetails: Record<
    string,
    { tag: string; title: string; body: string; tech: string[]; cta: React.ReactNode }
  > = {
    angelruiz: {
      tag: "WEB 1 · SERVICIOS PROFESIONALES",
      title: "angelruiz.world — Web de Cartomago Profesional",
      body: "Es mi página web comercial para contratación de espectáculos. Diseñada y programada 100% por mí desde cero, con SEO/GEO local e internacional optimizado para captar clientes en Madrid y toda España.",
      tech: ["HTML/CSS", "Tailwind", "SEO/GEO", "Despliegue", "Dominio Propio"],
      cta: (
        <a
          href="https://angelruiz.world"
          target="_blank"
          rel="noopener"
          className="px-4 py-2 bg-[#CCFF00] text-black font-space font-extrabold text-xs rounded-xl border-2 border-black shadow-brutal flex items-center gap-1.5 hover:bg-[#00F0FF] transition-all"
        >
          VISITAR LA WEB <ExternalLink className="w-3.5 h-3.5" />
        </a>
      ),
    },
    parpell: {
      tag: "WEB 2 · EMPRESA & AGENCIA",
      title: "Parpell — Agencia de IA y Redes Sociales",
      body: "Sitio web corporativo creado desde cero para una agencia tecnológica. Despliegue completo, estructuración de marca e implementación de SEO y GEO de alto rendimiento.",
      tech: ["Diseño Web", "Tailwind CSS", "SEO & GEO", "Despliegue", "AI Agency"],
      cta: (
        <span className="text-xs font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-3 py-1.5 rounded-lg border border-[#00F0FF]/30">
          ✓ Proyecto Desplegado
        </span>
      ),
    },
    marinagodar: {
      tag: "WEB 3 · CLIENTE REAL",
      title: "Marina Godar — Portfolio Creativo",
      body: "Portfolio interactivo diseñado y animado a medida para una graduada en Marketing y Dirección de Arte. Adaptado a su propio lenguaje visual para destacar sus proyectos de moda y cultura.",
      tech: ["Diseño Creativo", "Animaciones", "HTML/CSS", "UX Visual", "Marketing"],
      cta: (
        <span className="text-xs font-mono text-[#8B5CF6] bg-[#8B5CF6]/10 px-3 py-1.5 rounded-lg border border-[#8B5CF6]/30">
          ✓ Producción Lista
        </span>
      ),
    },
    armariovia: {
      tag: "TFG ASIR · PROYECTO FIN DE GRADO",
      title: "Armario Virtual con IA — Proyecto TFG",
      body: "Mi Proyecto Fin de Grado de ASIR. Aplicación web inteligente que digitaliza tu armario y te sugiere combinaciones de ropa óptimas en base al clima y la ocasión, con base de datos SQL y API propia en Linux.",
      tech: ["Base de Datos SQL", "API Propia", "Inteligencia Artificial", "Linux Server"],
      cta: (
        <span className="text-xs font-mono text-[#FFB800] bg-[#FFB800]/10 px-3 py-1.5 rounded-lg border border-[#FFB800]/30">
          ★ Proyecto Fin de Grado ASIR
        </span>
      ),
    },
    laescombrera: {
      tag: "EN DESARROLLO · TORRELODONES (MADRID)",
      title: 'Peña "La Escombrera" — Web Oficial',
      body: 'Página web oficial para la peña "La Escombrera" de Torrelodones. Punto de encuentro digital para miembros, avisos de fiestas patronales, galería y gestión comunitaria.',
      tech: ["Torrelodones", "Diseño Web", "Gestión de Eventos", "HTML/CSS/JS", "Comunidad"],
      cta: (
        <span className="text-xs font-mono text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1.5 rounded-lg border border-[#CCFF00]/30">
          🚀 En Construcción Activa
        </span>
      ),
    },
  };

  // Magic Cards Definitions
  const magicCards = [
    {
      id: 1,
      name: "A♠",
      symbol: "♠",
      colorClass: "text-[#CCFF00]",
      borderClass: "border-[#CCFF00]",
      secret: "💡 As de Picas: Buscas código limpio, arquitectura sólida y despliegues sin fallos.",
    },
    {
      id: 2,
      name: "A♥",
      symbol: "♥",
      colorClass: "text-[#00F0FF]",
      borderClass: "border-[#00F0FF]",
      secret: "✨ As de Corazones: Buscas impacto visual, animaciones fluidas y enamorar al usuario.",
    },
    {
      id: 3,
      name: "A♣",
      symbol: "♣",
      colorClass: "text-white",
      borderClass: "border-[#0051FF]",
      secret: "🛡️ As de Tréboles: Buscas robustez técnica en servidores Linux, redes y ciberseguridad.",
    },
    {
      id: 4,
      name: "A♦",
      symbol: "♦",
      colorClass: "text-[#CCFF00]",
      borderClass: "border-[#CCFF00]",
      secret: "🤖 As de Diamantes: Buscas el futuro: Inteligencia Artificial, Agentes autónomos y RAG.",
    },
  ];

  // Canvas Particle Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];
    const count = Math.min(45, Math.floor(window.innerWidth / 28));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.6 + 0.8,
        color: ["#CCFF00", "#00F0FF", "#0051FF"][Math.floor(Math.random() * 3)],
      });
    }

    let animId: number;
    const renderCanvas = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 85) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 85)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(renderCanvas);
    };
    renderCanvas();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Spotlight on Neo-Cards
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-card-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-card-y", `${y}px`);
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--mouse-card-x", `-500px`);
    e.currentTarget.style.setProperty("--mouse-card-y", `-500px`);
  };

  // Terminal Command Executor
  const handleTerminalSubmit = (cmdRaw: string) => {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    soundClick();
    if (cmd === "clear") {
      setTerminalHistory([{ type: "resp", text: "Terminal reiniciado. Escribe 'help'." }]);
      return;
    }

    const responses: Record<string, string> = {
      help: "Comandos disponibles: whoami, skills, projects, tfg, matrix, clear",
      whoami: "> Ángel Ruiz García | ASIR Titulado + DAM en curso | Especialista IA & Cartomagia.",
      skills: "> HTML5, CSS3, Tailwind, JS, GSAP, Linux, Docker, SQL, LangChain, RAG, SEO & GEO.",
      projects: "> 1. angelruiz.world | 2. Parpell | 3. Marina Godar | 4. Armario Virtual IA (TFG) | 5. Peña La Escombrera.",
      tfg: "> Armario Virtual con IA: SQL + API REST + Algoritmos IA + Servidor Linux.",
      matrix: "Wake up, Neo... The Matrix has you. Follow the white rabbit: Ángel Ruiz García.",
    };

    const newHistory = [
      ...terminalHistory,
      { type: "cmd" as const, text: cmdRaw },
      { type: "resp" as const, text: responses[cmd] || `Comando '${cmd}' no reconocido. Prueba con 'help'.` },
    ];
    setTerminalHistory(newHistory);
    setTerminalInput("");

    setTimeout(() => {
      if (terminalScreenRef.current) {
        terminalScreenRef.current.scrollTop = terminalScreenRef.current.scrollHeight;
      }
    }, 10);
  };

  return (
    <div className="relative z-10">
      {/* Background Canvas & Grid */}
      <div className="fixed inset-0 cyber-grid-bg pointer-events-none z-0 opacity-20"></div>
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-45"></canvas>

      {/* Ambient Living Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="ambient-blob blob-1 absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#0051FF]/15 blur-[140px]"></div>
        <div className="ambient-blob blob-2 absolute top-1/2 -right-40 w-[30rem] h-[30rem] rounded-full bg-[#CCFF00]/12 blur-[140px]"></div>
      </div>

      {/* Toast Notification */}
      <div
        className={`fixed top-5 right-5 z-50 transition-transform duration-400 ease-out liquid-glass px-5 py-3 rounded-xl border border-white/20 shadow-2xl flex items-center gap-3 ${
          toast.visible ? "translate-y-0" : "-translate-y-48"
        }`}
      >
        <div className="w-8 h-8 rounded-lg bg-[#CCFF00] text-black flex items-center justify-center font-bold font-mono text-sm border border-black shadow-brutal-sm">
          ✓
        </div>
        <div>
          <h4 className="font-space font-bold text-sm text-white">{toast.title}</h4>
          <p className="text-xs text-slate-300 font-mono">{toast.msg}</p>
        </div>
      </div>

      {/* Top Header */}
      <header className="relative z-30 w-full border-b-2 border-black bg-[#0a0c13]/90 backdrop-blur-xl px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <a href="#hub-hero" className="flex items-center gap-2 group" onClick={soundClick}>
              <div className="w-7 h-7 rounded-lg bg-[#CCFF00] text-black font-black font-space flex items-center justify-center border border-black shadow-brutal-sm group-hover:rotate-12 transition-transform">
                ÁR
              </div>
              <span className="font-syne font-black text-sm text-white tracking-tight hidden sm:inline">
                ÁNGEL RUIZ
              </span>
            </a>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-[#CCFF00]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse"></span>
              <span>DISPONIBLE MADRID / REMOTO</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={() => {
                soundClick();
                setIsExpressModalOpen(true);
              }}
              className="interactive-btn flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#CCFF00]/15 hover:bg-[#CCFF00] hover:text-black border border-[#CCFF00]/30 text-[#CCFF00] text-[11px] font-mono font-bold transition-all shadow-brutal-sm"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>RESUMEN 30s</span>
            </button>

            <button
              onClick={() => {
                soundClick();
                setIsPdfModalOpen(true);
              }}
              className="interactive-btn flex items-center gap-1 px-2.5 py-1.5 bg-white/5 hover:bg-[#00F0FF] hover:text-black border border-white/10 text-slate-300 text-[11px] font-mono rounded-lg transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span className="hidden md:inline">VER CV</span>
            </button>

            <button
              onClick={() => {
                soundClick();
                setIsTerminalOpen(true);
              }}
              className="interactive-btn flex items-center gap-1 px-2.5 py-1.5 bg-white/5 hover:bg-white hover:text-black border border-white/10 text-slate-300 text-[11px] font-mono rounded-lg transition-all"
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">CONSOLA</span>
            </button>

            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                triggerToast("AUDIO SFX", !soundEnabled ? "Efectos sonoros activados" : "Efectos desactivados");
              }}
              className="interactive-btn flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#CCFF00] hover:text-black border border-white/10 text-slate-300 text-[11px] font-mono transition-all"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#CCFF00]" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
              <span className="hidden lg:inline">{soundEnabled ? "SFX: ON" : "SFX: OFF"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-32 space-y-12">
        {/* HERO SECTION */}
        <section id="hub-hero" className="pt-2 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#CCFF00]">
                <span>👋 ¡HOLA! BIENVENIDO A MI CV INTERACTIVO</span>
              </div>

              <h1 className="font-syne font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-white">
                CREATIVE DEV, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] via-[#00F0FF] to-[#0051FF]">
                  SISTEMAS & MAGIA.
                </span>
              </h1>

              <p className="font-space text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                Soy <strong>Ángel Ruiz García</strong>. Desarrollo webs completas de principio a fin, administro
                infraestructuras en sistemas (<span className="text-[#CCFF00] font-bold">ASIR + DAM</span>), implemento{" "}
                <span className="text-[#00F0FF] font-bold">SEO/GEO</span> y creo{" "}
                <span className="text-[#8B5CF6] font-bold">Agentes de IA</span>. Además, soy{" "}
                <strong>cartomago profesional</strong>.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 text-xs font-space font-bold">
                <a
                  href="#modulo-proyectos"
                  onClick={soundClick}
                  className="interactive-btn px-4 py-2.5 bg-[#CCFF00] text-black rounded-xl border-2 border-black shadow-brutal flex items-center gap-1.5 hover:bg-white hover:-translate-y-0.5 transition-all"
                >
                  <Folder className="w-4 h-4" />
                  <span>MIS 3 WEBS + PROYECTOS</span>
                </a>
                <a
                  href="#modulo-preview"
                  onClick={soundClick}
                  className="interactive-btn px-4 py-2.5 bg-[#00F0FF] text-black rounded-xl border-2 border-black shadow-brutal flex items-center gap-1.5 hover:bg-white hover:-translate-y-0.5 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>GALERÍA DE CAPTURAS</span>
                </a>
                <a
                  href="#modulo-magia"
                  onClick={soundClick}
                  className="interactive-btn px-4 py-2.5 bg-[#0e111a] text-[#00F0FF] rounded-xl border-2 border-black shadow-brutal flex items-center gap-1.5 hover:bg-[#0051FF] hover:text-white hover:-translate-y-0.5 transition-all"
                >
                  <Wand2 className="w-4 h-4 text-[#CCFF00]" />
                  <span>BARAJA & TRUCO</span>
                </a>
              </div>
            </div>

            {/* 3D Persona Card */}
            <div className="lg:col-span-4">
              <div
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="neo-card bg-[#0e1018] border-3 border-black shadow-brutal-lg rounded-2xl p-5 relative overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-bold text-[#CCFF00]">¿QUÉ FACETA QUIERES VER?</span>
                  <span className="text-[10px] font-mono text-slate-500">Haz clic:</span>
                </div>

                <div className="grid grid-cols-4 gap-1 mt-3 bg-black/60 p-1 rounded-xl border border-white/10 font-mono text-[11px]">
                  {(["dev", "sys", "ai", "magic"] as const).map((pKey) => (
                    <button
                      key={pKey}
                      onClick={() => {
                        soundClick();
                        setActivePersona(pKey);
                      }}
                      className={`persona-tab py-1.5 rounded-lg font-bold ${
                        activePersona === pKey ? "active" : ""
                      }`}
                    >
                      {pKey === "dev" && "💻 DEV"}
                      {pKey === "sys" && "🛡️ ASIR"}
                      {pKey === "ai" && "🤖 IA"}
                      {pKey === "magic" && "🪄 MAGO"}
                    </button>
                  ))}
                </div>

                <div className="mt-4 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-[#CCFF00] to-[#00F0FF] text-black font-black text-2xl rounded-2xl flex items-center justify-center border-2 border-black shadow-brutal-sm">
                    {personaDetails[activePersona].avatar}
                  </div>
                  <div>
                    <h3 className="font-space font-extrabold text-base text-white">
                      {personaDetails[activePersona].title}
                    </h3>
                    <p className="font-mono text-xs text-[#00F0FF]">
                      {personaDetails[activePersona].subtitle}
                    </p>
                  </div>
                  <div className="bg-black/70 p-3 rounded-xl text-left font-mono text-xs space-y-1 border border-white/5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Objetivo:</span>
                      <span className="text-white font-bold">{personaDetails[activePersona].objective}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Clave:</span>
                      <span className="text-[#CCFF00] font-bold">{personaDetails[activePersona].highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MÓDULO 1: PROYECTOS */}
        <section id="modulo-proyectos" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-black pb-4">
            <div>
              <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-bold">
                ★ MIS TRABAJOS DESTACADOS
              </span>
              <h2 className="font-syne font-black text-3xl sm:text-4xl text-white">PROYECTOS & CASOS REALES</h2>
            </div>

            <div className="flex gap-2 p-1 bg-black/60 rounded-xl border border-white/10 font-space text-xs font-bold">
              <button
                onClick={() => {
                  soundClick();
                  setProjectFilter("all");
                }}
                className={`project-filter-btn px-3 py-1.5 rounded-lg ${
                  projectFilter === "all" ? "active" : "text-slate-400 hover:text-white"
                }`}
              >
                TODOS (4+1)
              </button>
              <button
                onClick={() => {
                  soundClick();
                  setProjectFilter("client");
                }}
                className={`project-filter-btn px-3 py-1.5 rounded-lg ${
                  projectFilter === "client" ? "active" : "text-slate-400 hover:text-white"
                }`}
              >
                WEBS DE CLIENTES
              </button>
              <button
                onClick={() => {
                  soundClick();
                  setProjectFilter("ai");
                }}
                className={`project-filter-btn px-3 py-1.5 rounded-lg ${
                  projectFilter === "ai" ? "active" : "text-slate-400 hover:text-white"
                }`}
              >
                IA & TFG
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Proyecto 1: angelruiz.world */}
            {(projectFilter === "all" || projectFilter === "client") && (
              <div
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="project-card neo-card bg-[#0e1018] border-3 border-black shadow-brutal rounded-2xl p-5 flex flex-col justify-between group hover:border-[#CCFF00] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#CCFF00] text-black font-mono font-black text-[11px] px-2.5 py-0.5 rounded border border-black shadow-brutal-sm">
                      WEB 1 · LIVE
                    </span>
                    <span className="text-xs font-mono text-[#CCFF00] font-bold">angelruiz.world</span>
                  </div>
                  <h3 className="font-syne font-black text-xl text-white group-hover:text-[#CCFF00] transition-colors">
                    Web de Cartomago Profesional
                  </h3>
                  <p className="text-slate-300 text-xs font-space leading-relaxed">
                    Mi propia web comercial. <strong>Diseñada y programada 100% por mí</strong>, desplegada con
                    dominio propio y optimizada para captar clientes con <strong>SEO y GEO local e internacional</strong>.
                  </p>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[#CCFF00] border border-white/10">HTML/CSS</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">Tailwind</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[#00F0FF] border border-white/10">SEO & GEO</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-white border border-white/10">Deploy</span>
                  </div>
                </div>
                <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      soundClick();
                      setActiveProjectKey("angelruiz");
                    }}
                    className="interactive-btn text-xs font-space font-bold text-[#CCFF00] hover:underline flex items-center gap-1"
                  >
                    <span>Ver explicación fácil</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="https://angelruiz.world"
                    target="_blank"
                    rel="noopener"
                    className="interactive-btn p-2 rounded-lg bg-white/10 hover:bg-[#CCFF00] hover:text-black transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* Proyecto 2: Parpell */}
            {(projectFilter === "all" || projectFilter === "client") && (
              <div
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="project-card neo-card bg-[#0e1018] border-3 border-black shadow-brutal rounded-2xl p-5 flex flex-col justify-between group hover:border-[#00F0FF] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#00F0FF] text-black font-mono font-black text-[11px] px-2.5 py-0.5 rounded border border-black shadow-brutal-sm">
                      WEB 2 · EMPRESA
                    </span>
                    <span className="text-xs font-mono text-[#00F0FF] font-bold">Parpell</span>
                  </div>
                  <h3 className="font-syne font-black text-xl text-white group-hover:text-[#00F0FF] transition-colors">
                    Agencia de IA y RRSS
                  </h3>
                  <p className="text-slate-300 text-xs font-space leading-relaxed">
                    Sitio web corporativo creado desde cero para una agencia tecnológica. Despliegue completo,
                    estructuración de marca e implementación de <strong>SEO & GEO</strong>.
                  </p>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[#00F0FF] border border-white/10">Diseño Web</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">SEO/GEO</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[#CCFF00] border border-white/10">Despliegue</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-white border border-white/10">AI Agency</span>
                  </div>
                </div>
                <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      soundClick();
                      setActiveProjectKey("parpell");
                    }}
                    className="interactive-btn text-xs font-space font-bold text-[#00F0FF] hover:underline flex items-center gap-1"
                  >
                    <span>Ver explicación fácil</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="p-2 rounded-lg bg-white/5 text-[#00F0FF]">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                </div>
              </div>
            )}

            {/* Proyecto 3: Marina Godar */}
            {(projectFilter === "all" || projectFilter === "client") && (
              <div
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="project-card neo-card bg-[#0e1018] border-3 border-black shadow-brutal rounded-2xl p-5 flex flex-col justify-between group hover:border-[#8B5CF6] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#8B5CF6] text-white font-mono font-black text-[11px] px-2.5 py-0.5 rounded border border-black shadow-brutal-sm">
                      WEB 3 · CLIENTE
                    </span>
                    <span className="text-xs font-mono text-[#8B5CF6] font-bold">Marina Godar</span>
                  </div>
                  <h3 className="font-syne font-black text-xl text-white group-hover:text-[#8B5CF6] transition-colors">
                    Portfolio de Marketing & Visual
                  </h3>
                  <p className="text-slate-300 text-xs font-space leading-relaxed">
                    Portfolio creativo e interactivo diseñado y animado a medida para una graduada en Marketing.
                    Adaptado a su propio lenguaje visual para destacar sus trabajos.
                  </p>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[#8B5CF6] border border-white/10">Diseño Creativo</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">Animaciones</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[#CCFF00] border border-white/10">HTML/CSS</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-white border border-white/10">UX Visual</span>
                  </div>
                </div>
                <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      soundClick();
                      setActiveProjectKey("marinagodar");
                    }}
                    className="interactive-btn text-xs font-space font-bold text-[#8B5CF6] hover:underline flex items-center gap-1"
                  >
                    <span>Ver explicación fácil</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="p-2 rounded-lg bg-white/5 text-[#8B5CF6]">
                    <Sparkles className="w-4 h-4" />
                  </span>
                </div>
              </div>
            )}

            {/* Proyecto 4: Armario Virtual */}
            {(projectFilter === "all" || projectFilter === "ai") && (
              <div
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="project-card neo-card bg-[#0e1018] border-3 border-black shadow-brutal rounded-2xl p-5 flex flex-col justify-between group hover:border-[#FFB800] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#FFB800] text-black font-mono font-black text-[11px] px-2.5 py-0.5 rounded border border-black shadow-brutal-sm">
                      TFG ASIR · IA
                    </span>
                    <span className="text-xs font-mono text-[#FFB800] font-bold">Armario Virtual IA</span>
                  </div>
                  <h3 className="font-syne font-black text-xl text-white group-hover:text-[#FFB800] transition-colors">
                    App de Armario Digital con IA
                  </h3>
                  <p className="text-slate-300 text-xs font-space leading-relaxed">
                    Mi Proyecto Fin de Grado de ASIR. Una aplicación web que digitaliza tu ropa y te recomienda{" "}
                    <strong>qué ponerte automáticamente según ocasión y clima gracias a la IA</strong>.
                  </p>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[#FFB800] border border-white/10">Base de Datos SQL</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[#00F0FF] border border-white/10">API Propia</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[#CCFF00] border border-white/10">Sugerencias IA</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-white border border-white/10">Servidor Linux</span>
                  </div>
                </div>
                <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      soundClick();
                      setActiveProjectKey("armariovia");
                    }}
                    className="interactive-btn text-xs font-space font-bold text-[#FFB800] hover:underline flex items-center gap-1"
                  >
                    <span>Ver cómo funciona</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="p-2 rounded-lg bg-white/5 text-[#FFB800]">
                    <Cpu className="w-4 h-4" />
                  </span>
                </div>
              </div>
            )}

            {/* Proyecto 5: Peña La Escombrera */}
            {(projectFilter === "all" || projectFilter === "client") && (
              <div
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="project-card neo-card bg-[#0e1018] border-3 border-black shadow-brutal rounded-2xl p-5 flex flex-col justify-between group md:col-span-2 lg:col-span-2 hover:border-[#CCFF00] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#CCFF00] text-black font-mono font-black text-[11px] px-2.5 py-0.5 rounded border border-black shadow-brutal-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-black animate-ping"></span>
                      EN CONSTRUCCIÓN · TORRELODONES
                    </span>
                    <span className="text-xs font-mono text-[#CCFF00] font-bold">Peña &quot;La Escombrera&quot;</span>
                  </div>
                  <h3 className="font-syne font-black text-2xl text-white group-hover:text-[#CCFF00] transition-colors">
                    Web Oficial — Peña &quot;La Escombrera&quot;
                  </h3>
                  <p className="text-slate-300 text-xs font-space leading-relaxed">
                    Actualmente diseñando y desarrollando desde cero la página web oficial para la peña{" "}
                    <strong>&quot;La Escombrera&quot; de Torrelodones</strong>. Una plataforma moderna como punto de encuentro
                    digital para los miembros, galería de eventos, fiestas del pueblo y comunidad.
                  </p>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-black/60 text-[#CCFF00] border border-white/10">Torrelodones</span>
                    <span className="px-2 py-0.5 rounded bg-black/60 text-[#00F0FF] border border-white/10">Diseño Web & Identidad</span>
                    <span className="px-2 py-0.5 rounded bg-black/60 text-slate-200 border border-white/10">Gestión de Eventos</span>
                    <span className="px-2 py-0.5 rounded bg-black/60 text-white border border-white/10">HTML/CSS/JS</span>
                    <span className="px-2 py-0.5 rounded bg-black/60 text-[#8B5CF6] border border-white/10">Comunidad</span>
                  </div>
                </div>
                <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <button
                    onClick={() => {
                      soundClick();
                      setActiveProjectKey("laescombrera");
                    }}
                    className="interactive-btn text-xs font-space font-bold text-[#CCFF00] hover:underline flex items-center gap-1"
                  >
                    <span>Ver detalles del proyecto</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[#CCFF00] font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#00F0FF]" />
                    Torrelodones (Madrid)
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* MÓDULO PREVIEW: GALERÍA DE CAPTURAS REALES */}
        <section id="modulo-preview" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-black pb-4">
            <div>
              <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-bold">
                ★ CAPTURAS DIRECTAS
              </span>
              <h2 className="font-syne font-black text-3xl sm:text-4xl text-white">GALERÍA DE WEBS REALES</h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#CCFF00] font-bold bg-black/60 px-3 py-1.5 rounded-xl border border-white/10">
                {currentSlideIndex + 1} / {gallerySlides.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    soundClick();
                    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : gallerySlides.length - 1));
                  }}
                  className="interactive-btn w-10 h-10 rounded-xl bg-[#0e1018] hover:bg-[#CCFF00] hover:text-black text-white border-2 border-black shadow-brutal flex items-center justify-center transition-all"
                  title="Anterior Web"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    soundClick();
                    setCurrentSlideIndex((prev) => (prev < gallerySlides.length - 1 ? prev + 1 : 0));
                  }}
                  className="interactive-btn w-10 h-10 rounded-xl bg-[#0e1018] hover:bg-[#CCFF00] hover:text-black text-white border-2 border-black shadow-brutal flex items-center justify-center transition-all"
                  title="Siguiente Web"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="neo-card bg-[#0b0d14] border-3 border-black shadow-brutal-lg rounded-3xl p-4 sm:p-5 space-y-3 max-w-4xl mx-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse"></span>
                <h3 className="font-syne font-black text-base sm:text-lg text-white truncate">
                  {gallerySlides[currentSlideIndex].title}
                </h3>
              </div>
              <span
                className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border shrink-0"
                style={{
                  color: gallerySlides[currentSlideIndex].tagColor,
                  backgroundColor: `${gallerySlides[currentSlideIndex].tagColor}15`,
                  borderColor: `${gallerySlides[currentSlideIndex].tagColor}40`,
                }}
              >
                {gallerySlides[currentSlideIndex].tag}
              </span>
            </div>

            <div id="preview-image-container" className="relative w-full rounded-xl overflow-hidden border-2 border-black shadow-inner">
              <img
                src={gallerySlides[currentSlideIndex].src}
                alt={gallerySlides[currentSlideIndex].title}
                className="w-full h-auto block rounded-lg transition-all duration-300"
              />
            </div>

            <div className="flex items-center justify-between pt-1 font-mono text-xs">
              <button
                onClick={() => {
                  soundClick();
                  setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : gallerySlides.length - 1));
                }}
                className="interactive-btn px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#CCFF00] hover:text-black text-slate-300 border border-white/15 flex items-center gap-1.5 transition-all text-[11px] font-bold"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Anterior</span>
              </button>

              <div className="flex items-center justify-center gap-1.5">
                {gallerySlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      soundClick();
                      setCurrentSlideIndex(idx);
                    }}
                    className={`preview-dot h-2.5 rounded-full border border-black transition-all ${
                      idx === currentSlideIndex ? "w-6 bg-[#CCFF00]" : "w-2.5 bg-white/20 hover:bg-white/50"
                    }`}
                  ></button>
                ))}
              </div>

              <button
                onClick={() => {
                  soundClick();
                  setCurrentSlideIndex((prev) => (prev < gallerySlides.length - 1 ? prev + 1 : 0));
                }}
                className="interactive-btn px-3 py-1.5 rounded-lg bg-[#CCFF00] text-black hover:bg-white border border-black font-space font-extrabold shadow-brutal-sm flex items-center gap-1.5 transition-all text-[11px]"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* MÓDULO 2: TRAYECTORIA & ESTUDIOS */}
        <section id="modulo-trayectoria" className="space-y-6">
          <div className="border-b-2 border-black pb-4">
            <span className="text-xs font-mono text-[#CCFF00] uppercase tracking-wider font-bold">
              ★ MI HISTORIAL & FORMACIÓN
            </span>
            <h2 className="font-syne font-black text-3xl sm:text-4xl text-white">TRAYECTORIA & ESTUDIOS</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-space font-extrabold text-lg text-[#CCFF00] flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                EXPERIENCIA PROFESIONAL
              </h3>

              <div className="space-y-3">
                <div
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  className="neo-card bg-[#0e1018] p-4 rounded-xl border-2 border-black shadow-brutal"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-space font-bold text-base text-white">Marketing & Visibilidad &quot;EMESTUDIOS&quot;</h4>
                      <p className="text-xs text-[#00F0FF] font-mono">Estrategia, Identidad Visual & Redes Sociales</p>
                    </div>
                    <span className="font-mono text-xs bg-[#CCFF00] text-black font-bold px-2 py-0.5 rounded">2025</span>
                  </div>
                  <p className="text-slate-300 text-xs mt-2 font-space">
                    Campañas de posicionamiento para marca de moda, gestión de identidad visual y entrega autónoma de
                    activos creativos.
                  </p>
                </div>

                <div
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  className="neo-card bg-[#0e1018] p-4 rounded-xl border-2 border-black shadow-brutal"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-space font-bold text-base text-white">Técnico Informático (Prácticas)</h4>
                      <p className="text-xs text-[#00F0FF] font-mono">Ayuntamiento de Torrelodones</p>
                    </div>
                    <span className="font-mono text-xs bg-[#00F0FF] text-black font-bold px-2 py-0.5 rounded">2025</span>
                  </div>
                  <p className="text-slate-300 text-xs mt-2 font-space">
                    Administración de Active Directory, redes Windows/Linux, resolución de incidencias de usuarios y
                    documentación de backups.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-space font-extrabold text-lg text-[#00F0FF] flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                TITULACIONES & CERTIFICACIONES OFICIALES
              </h3>

              <div className="space-y-3">
                <div
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  className="neo-card bg-[#0e1018] p-4 rounded-xl border-2 border-black shadow-brutal"
                >
                  <div>
                    <span className="text-[10px] font-mono bg-[#CCFF00]/15 text-[#CCFF00] px-2 py-0.5 rounded font-bold">
                      EN CURSO (2025 - ACT)
                    </span>
                    <h4 className="font-space font-bold text-sm text-white mt-1">
                      C.F.G.S. Desarrollo de Aplicaciones Multiplataforma (DAM)
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">IES Lázaro Cárdenas</p>
                  </div>
                </div>

                <div
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  className="neo-card bg-[#0e1018] p-4 rounded-xl border-2 border-black shadow-brutal"
                >
                  <div>
                    <span className="text-[10px] font-mono bg-[#00F0FF]/15 text-[#00F0FF] px-2 py-0.5 rounded font-bold">
                      TITULADO (2023 - 2025)
                    </span>
                    <h4 className="font-space font-bold text-sm text-white mt-1">
                      C.F.G.S. Administración de Sistemas Informáticos en Red (ASIR)
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">IES Infanta Elena · TFG: Armario Virtual con IA</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[10px] text-center">
                  <div className="p-2 rounded-lg bg-black/60 border border-white/10">
                    <span className="text-[#8B5CF6] font-bold block">ESPECIALISTA IA</span>
                    <span className="text-slate-400">Racks Academy &apos;26</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/60 border border-white/10">
                    <span className="text-[#CCFF00] font-bold block">AI AGENTS DEV</span>
                    <span className="text-slate-400">DeepLearning.AI &apos;25</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/60 border border-white/10">
                    <span className="text-[#00F0FF] font-bold block">CIBERSEGURIDAD</span>
                    <span className="text-slate-400">INCIBE &apos;24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MÓDULO 3: BARAJA MÁGICA */}
        <section
          id="modulo-magia"
          className="neo-card bg-gradient-to-br from-[#0c0e17] via-[#090b12] to-[#121626] border-3 border-black shadow-brutal-lg rounded-3xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-[#0051FF] text-white px-2.5 py-0.5 rounded font-mono text-xs font-bold border border-black shadow-brutal-sm">
                <Wand2 className="w-3.5 h-3.5" />
                CARTOMAGIA PROFESIONAL & CÓDIGO
              </div>

              <h2 className="font-syne font-black text-2xl sm:text-4xl text-white">
                TRUCO INTERACTIVO: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-[#00F0FF]">
                  ¿ADIVINAMOS LO QUE BUSCAS?
                </span>
              </h2>

              <p className="font-space text-slate-300 text-sm leading-relaxed">
                Hacer magia profesional exige{" "}
                <strong>
                  diseñar la atención al milímetro, ensayar miles de horas para no fallar jamás y resolver imprevistos
                  bajo presión
                </strong>
                . Esas mismas cualidades son las que aplico cuando programo webs y sistemas.
              </p>

              <div className="p-4 rounded-xl bg-black/70 border border-white/10 space-y-2 mt-2">
                <span className="text-xs font-mono text-[#CCFF00] font-bold block">
                  🔮 Minijuego: Elige una carta de la baraja o pulsa el botón:
                </span>
                <button
                  onClick={() => {
                    soundMagic();
                    setActiveMagicCard(4);
                    setMagicSecretText("🔮 Conectando con el foco del visitante... leyendo intenciones...");
                    setTimeout(() => {
                      setMagicSecretText(
                        "🔮 ¡MENTE LEÍDA! Sé exactamente lo que buscas: un desarrollador con rigor técnico en sistemas, capacidad de entrega real y creatividad visual inolvidable."
                      );
                      soundSuccess();
                    }, 700);
                  }}
                  className="interactive-btn px-4 py-2 bg-[#CCFF00] text-black font-space font-extrabold text-xs rounded-xl border-2 border-black shadow-brutal hover:bg-white transition-all flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>LEER LA MENTE DEL VISITANTE</span>
                </button>
              </div>
            </div>

            {/* Fan Card Deck */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div
                id="magic-deck"
                className={`relative w-60 h-44 flex items-center justify-center ${
                  isShuffling ? "magic-deck-shuffling" : ""
                }`}
              >
                {magicCards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => {
                      soundMagic();
                      if (activeMagicCard === card.id) {
                        setActiveMagicCard(null);
                        setMagicSecretText("Toca cualquier carta para revelarla...");
                      } else {
                        setActiveMagicCard(card.id);
                        setMagicSecretText(card.secret);
                      }
                    }}
                    className={`magic-card card-${card.id} absolute w-28 h-40 rounded-xl bg-[#080a10] text-white p-3 border-2 ${
                      card.borderClass
                    } shadow-brutal cursor-pointer select-none flex flex-col justify-between ${
                      activeMagicCard === card.id ? "is-active" : ""
                    }`}
                  >
                    <div className={`font-bold font-mono text-xs ${card.colorClass}`}>{card.name}</div>
                    <div className={`text-center text-2xl font-black ${card.colorClass}`}>{card.symbol}</div>
                    <div className={`font-bold font-mono text-xs text-right ${card.colorClass}`}>{card.name}</div>
                  </div>
                ))}
              </div>

              <div
                id="magic-reveal-box"
                className="mt-4 w-full p-3 bg-black/80 border border-[#CCFF00]/40 rounded-xl text-center font-mono text-xs text-[#CCFF00] min-h-[42px] flex items-center justify-center"
              >
                {magicSecretText}
              </div>

              <button
                onClick={() => {
                  soundMagic();
                  setActiveMagicCard(null);
                  setIsShuffling(true);
                  setMagicSecretText("Barajando las cartas...");
                  setTimeout(() => {
                    setIsShuffling(false);
                    setMagicSecretText("¡Lista! Elige una carta o pulsa Leer la Mente.");
                  }, 700);
                }}
                className="interactive-btn mt-2 px-3 py-1 bg-white/10 hover:bg-[#CCFF00] hover:text-black text-slate-300 border border-white/20 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Barajar cartas</span>
              </button>
            </div>
          </div>
        </section>

        {/* MÓDULO 4: CONTACTO DIRECTO */}
        <section
          id="modulo-contacto"
          className="neo-card bg-[#0e1018] border-3 border-black shadow-brutal-lg rounded-3xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="bg-[#CCFF00] text-black font-mono font-bold text-xs px-3 py-1 rounded border border-black shadow-brutal-sm inline-block">
                RESPUESTA EN MENOS DE 24 HORAS
              </span>
              <h2 className="font-syne font-black text-3xl sm:text-5xl text-white">¿HABLAMOS?</h2>
              <p className="font-space text-slate-300 text-sm">
                Escríbeme para ofertas de trabajo, proyectos web a medida o consultoría en IA.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-3 bg-black/60 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#CCFF00]" />
                    <span className="font-mono text-xs text-white">angellruuiz@gmail.com</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard("angellruuiz@gmail.com", "Email copiado")}
                    className="interactive-btn px-2.5 py-1 bg-[#CCFF00] text-black font-space font-bold text-[11px] rounded-lg shadow-brutal-sm"
                  >
                    COPIAR
                  </button>
                </div>

                <div className="p-3 bg-black/60 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#00F0FF]" />
                    <span className="font-mono text-xs text-white">+34 648 055 636</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard("+34648055636", "Teléfono copiado")}
                    className="interactive-btn px-2.5 py-1 bg-[#00F0FF] text-black font-space font-bold text-[11px] rounded-lg shadow-brutal-sm"
                  >
                    COPIAR
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <div className="grid grid-cols-2 gap-3 font-space font-bold text-xs">
                <a
                  href="https://linkedin.com/in/ángel-ruiz-garcía-b94bb9298"
                  target="_blank"
                  rel="noopener"
                  onClick={soundClick}
                  className="interactive-btn p-3 rounded-xl bg-black/60 border border-white/15 hover:bg-[#0077B5] hover:text-white transition-all flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/angelruuiz"
                  target="_blank"
                  rel="noopener"
                  onClick={soundClick}
                  className="interactive-btn p-3 rounded-xl bg-black/60 border border-white/15 hover:bg-white hover:text-black transition-all flex items-center justify-between"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://angelruiz.world"
                  target="_blank"
                  rel="noopener"
                  onClick={soundClick}
                  className="interactive-btn p-3 rounded-xl bg-black/60 border border-white/15 hover:bg-[#CCFF00] hover:text-black transition-all flex items-center justify-between"
                >
                  <span>angelruiz.world</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="/cv-personal/CV - ANGEL RUIZ.pdf"
                  target="_blank"
                  download="CV - ANGEL RUIZ.pdf"
                  onClick={soundClick}
                  className="interactive-btn p-3 rounded-xl bg-black/60 border border-white/15 hover:bg-[#00F0FF] hover:text-black transition-all flex items-center justify-between"
                >
                  <span>Descargar CV</span>
                  <Download className="w-4 h-4" />
                </a>
              </div>

              <a
                href="mailto:angellruuiz@gmail.com?subject=Contacto%20desde%20CV%20-%20%C3%81ngel%20Ruiz"
                onClick={soundClick}
                className="interactive-btn w-full py-3.5 bg-[#CCFF00] text-black font-space font-extrabold text-center rounded-xl border-2 border-black shadow-brutal hover:bg-white transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>ENVIAR CORREO DIRECTO</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Liquid Dock Navigation */}
      <nav
        id="liquid-dock"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-2xl liquid-glass border border-white/20 shadow-liquid-glow flex items-center gap-1 sm:gap-2"
      >
        <a
          href="#hub-hero"
          onClick={soundClick}
          className="dock-item interactive-btn p-2.5 rounded-xl text-slate-300 hover:text-black hover:bg-[#CCFF00] transition-all relative group"
          title="Inicio"
        >
          <Home className="w-4 h-4" />
          <span className="dock-tooltip">Inicio</span>
        </a>

        <a
          href="#modulo-proyectos"
          onClick={soundClick}
          className="dock-item interactive-btn p-2.5 rounded-xl text-slate-300 hover:text-black hover:bg-[#00F0FF] transition-all relative group"
          title="Proyectos"
        >
          <FolderGit2 className="w-4 h-4" />
          <span className="dock-tooltip">Proyectos</span>
        </a>

        <a
          href="#modulo-preview"
          onClick={soundClick}
          className="dock-item interactive-btn p-2.5 rounded-xl text-slate-300 hover:text-black hover:bg-[#FFB800] transition-all relative group"
          title="Previews"
        >
          <Eye className="w-4 h-4" />
          <span className="dock-tooltip">Previews</span>
        </a>

        <a
          href="#modulo-trayectoria"
          onClick={soundClick}
          className="dock-item interactive-btn p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-[#0051FF] transition-all relative group"
          title="Trayectoria"
        >
          <FileBadge className="w-4 h-4" />
          <span className="dock-tooltip">Trayectoria</span>
        </a>

        <a
          href="#modulo-magia"
          onClick={soundClick}
          className="dock-item interactive-btn p-2.5 rounded-xl text-slate-300 hover:text-black hover:bg-[#CCFF00] transition-all relative group"
          title="Magia"
        >
          <Wand className="w-4 h-4" />
          <span className="dock-tooltip">Magia</span>
        </a>

        <span className="w-[1px] h-5 bg-white/20 mx-0.5"></span>

        <a
          href="#modulo-contacto"
          onClick={soundClick}
          className="dock-item interactive-btn px-3 py-2 rounded-xl bg-[#CCFF00] text-black font-space font-extrabold text-xs border border-black shadow-brutal-sm hover:scale-105 transition-transform flex items-center gap-1"
        >
          <Mail className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">CONTACTO</span>
        </a>
      </nav>

      {/* MODAL 1: PROYECTO DETALLE */}
      {activeProjectKey && projectDetails[activeProjectKey] && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="neo-card bg-[#0b0d14] border-3 border-black shadow-brutal-lg rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-5">
            <div className="flex items-start justify-between border-b border-white/10 pb-3">
              <div>
                <span className="font-mono text-xs text-[#00F0FF] uppercase font-bold">
                  {projectDetails[activeProjectKey].tag}
                </span>
                <h3 className="font-syne font-black text-2xl text-white mt-0.5">
                  {projectDetails[activeProjectKey].title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectKey(null)}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-red-500 hover:text-white border border-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="font-space text-slate-200 text-sm leading-relaxed">
              {projectDetails[activeProjectKey].body}
            </p>

            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1 font-mono text-xs">
                {projectDetails[activeProjectKey].tech.map((t) => (
                  <span key={t} className="bg-white/10 text-white px-2 py-0.5 rounded text-[11px] font-mono border border-white/15">
                    {t}
                  </span>
                ))}
              </div>
              <div>{projectDetails[activeProjectKey].cta}</div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: MODO EXPRESS RRHH (30 SEGUNDOS) */}
      {isExpressModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="neo-card bg-[#0b0d14] border-3 border-black shadow-brutal-lg rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-5">
            <div className="flex items-start justify-between border-b border-white/10 pb-3">
              <div>
                <span className="font-mono text-xs text-[#CCFF00] font-bold">FICHA EJECUTIVA RÁPIDA</span>
                <h3 className="font-syne font-black text-2xl sm:text-3xl text-white mt-0.5">
                  ÁNGEL RUIZ EN 30 SEGUNDOS
                </h3>
              </div>
              <button
                onClick={() => setIsExpressModalOpen(false)}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-red-500 hover:text-white border border-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 bg-black/60 rounded-xl border border-white/10">
                <span className="text-slate-400 block text-[10px]">PERFIL TÉCNICO</span>
                <strong className="text-[#CCFF00]">ASIR + DAM en curso</strong>
              </div>
              <div className="p-3 bg-black/60 rounded-xl border border-white/10">
                <span className="text-slate-400 block text-[10px]">UBICACIÓN</span>
                <strong className="text-white">Madrid (Remoto/Híbrido)</strong>
              </div>
              <div className="p-3 bg-black/60 rounded-xl border border-white/10">
                <span className="text-slate-400 block text-[10px]">DISPONIBILIDAD</span>
                <strong className="text-[#00F0FF]">Inmediata</strong>
              </div>
            </div>

            <div className="space-y-2 font-space text-xs text-slate-200">
              <h4 className="font-bold text-white font-mono text-xs text-[#CCFF00]">RESUMEN DE CAPACIDADES:</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>
                  <strong>Desarrollo Web End-to-End:</strong> Creación desde cero, maquetación avanzada (Tailwind/CSS),
                  animaciones GSAP y despliegue real en servidores.
                </li>
                <li>
                  <strong>SEO & GEO Posicionamiento:</strong> Indexación para clientes locales y marcas (probado en{" "}
                  <em>angelruiz.world</em> y <em>Parpell</em>).
                </li>
                <li>
                  <strong>Sistemas, Redes & Linux:</strong> Administración corporativa de Active Directory, GPOs,
                  backups y servidores seguros (Titulado ASIR).
                </li>
                <li>
                  <strong>Inteligencia Artificial:</strong> Formación en Agentes Autónomos, RAG y LLMs (Certificado
                  DeepLearning.AI y Racks Academy 2026).
                </li>
              </ul>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2 items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setIsExpressModalOpen(false);
                    setIsPdfModalOpen(true);
                  }}
                  className="px-3 py-2 bg-[#00F0FF] text-black font-space font-extrabold text-xs rounded-xl border border-black shadow-brutal-sm hover:bg-white transition-all flex items-center gap-1.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Ver CV PDF</span>
                </button>
                <a
                  href="/cv-personal/CV - ANGEL RUIZ.pdf"
                  download
                  className="px-3 py-2 bg-white/10 hover:bg-white hover:text-black text-white font-space font-bold text-xs rounded-xl border border-white/20 transition-all flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar</span>
                </a>
              </div>
              <a
                href="mailto:angellruuiz@gmail.com"
                className="px-4 py-2 bg-[#CCFF00] text-black font-space font-extrabold text-xs rounded-xl border-2 border-black shadow-brutal-sm hover:bg-white transition-all"
              >
                Contactar Ahora
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: VISOR DE CV PDF INTEGRADO */}
      {isPdfModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
          <div className="neo-card bg-[#0b0d14] border-3 border-black shadow-brutal-lg rounded-3xl max-w-4xl w-full h-[88vh] flex flex-col overflow-hidden">
            <div className="bg-[#121520] px-4 py-3 border-b-2 border-black flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#00F0FF]" />
                <span className="font-space font-bold text-sm text-white">CV Oficial — Ángel Ruiz García</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/cv-personal/CV - ANGEL RUIZ.pdf"
                  download
                  className="px-3 py-1 bg-[#CCFF00] text-black font-space font-bold text-xs rounded-lg border border-black shadow-brutal-sm flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar</span>
                </a>
                <button
                  onClick={() => setIsPdfModalOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-red-500 hover:text-white flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full bg-[#181920] relative">
              <iframe src="/cv-personal/CV - ANGEL RUIZ.pdf" className="w-full h-full border-none" />
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: TERMINAL UNIX */}
      {isTerminalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="neo-card bg-[#07090e] border-3 border-black shadow-brutal-lg rounded-2xl max-w-2xl w-full overflow-hidden font-mono text-xs">
            <div className="bg-[#121520] px-4 py-3 border-b-2 border-black flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#FF5F56] border border-black inline-block"></span>
                <span className="w-3 h-3 bg-[#FFBD2E] border border-black inline-block"></span>
                <span className="w-3 h-3 bg-[#27C93F] border border-black inline-block"></span>
                <span className="ml-2 text-slate-300 font-bold text-[11px]">
                  angel@ruiz-server: ~ (Terminal SysAdmin)
                </span>
              </div>
              <button onClick={() => setIsTerminalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div ref={terminalScreenRef} className="p-4 h-72 overflow-y-auto space-y-2 text-slate-300 custom-scrollbar">
              {terminalHistory.map((item, idx) =>
                item.type === "cmd" ? (
                  <div key={idx} className="text-[#00F0FF] mt-1 font-mono text-xs">
                    └─$ {item.text}
                  </div>
                ) : (
                  <div key={idx} className="text-white pl-2 border-l-2 border-[#CCFF00] my-0.5 font-mono text-xs">
                    {item.text}
                  </div>
                )
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleTerminalSubmit(terminalInput);
              }}
              className="bg-[#0e111a] px-4 py-2.5 border-t-2 border-black flex items-center gap-2"
            >
              <span className="text-[#CCFF00] font-bold">angel@ruiz:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Escribe 'help', 'skills', 'tfg', 'matrix'..."
                className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-slate-600"
              />
              <button
                type="submit"
                className="px-2.5 py-1 bg-[#CCFF00] text-black font-bold rounded text-[11px] hover:bg-[#00F0FF] transition-colors border border-black"
              >
                EJECUTAR
              </button>
            </form>

            <div className="bg-[#080a10] px-4 py-2 border-t border-white/10 flex flex-wrap gap-1 items-center text-[10px]">
              <span className="text-slate-500 font-bold mr-1">Rápido:</span>
              {["skills", "projects", "tfg", "matrix", "clear"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleTerminalSubmit(cmd)}
                  className="quick-cmd px-2 py-0.5 bg-white/5 hover:bg-[#CCFF00] hover:text-black text-[#CCFF00] rounded transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
