"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Megaphone, Cpu, Zap } from "lucide-react";
import Image from "next/image";

interface LogoNode {
  name: string;
  color: string;
  glow: string;
  x: number;
  y: number;
  size?: number;
  logo: string;
}

const marketingLogos: LogoNode[] = [
  { name: "DaVinci Resolve", color: "#FF5733", glow: "rgba(255,87,51,0.45)", x: 3, y: -5, size: 48, logo: "/logos/davinci-resolve.svg" },
  { name: "Higgsfield AI", color: "#A3E635", glow: "rgba(163,230,53,0.45)", x: -22, y: -20, size: 40, logo: "/logos/higgsfield.svg" },
  { name: "Instagram", color: "#E1306C", glow: "rgba(225,48,108,0.45)", x: 20, y: -22, size: 40, logo: "/logos/instagram.svg" },
  { name: "TikTok", color: "#00F2FE", glow: "rgba(0,242,254,0.45)", x: -10, y: 26, size: 40, logo: "/logos/tiktok.svg" },
  { name: "Google Search Console", color: "#4285F4", glow: "rgba(66,133,244,0.45)", x: 28, y: 8, size: 40, logo: "/logos/google-search-console.svg" },
  { name: "ManyChat", color: "#0CB4F0", glow: "rgba(12,180,240,0.45)", x: -28, y: 4, size: 40, logo: "/logos/manychat.svg" },
  { name: "Google Ads", color: "#FBBC04", glow: "rgba(251,188,4,0.45)", x: 10, y: 24, size: 40, logo: "/logos/google-ads.svg" },
  { name: "Meta Ads", color: "#0866FF", glow: "rgba(8,102,255,0.45)", x: -16, y: 14, size: 40, logo: "/logos/meta.svg" },
  { name: "Facebook", color: "#0866FF", glow: "rgba(8,102,255,0.45)", x: 6, y: -28, size: 40, logo: "/logos/facebook.svg" },
];

const techLogos: LogoNode[] = [
  { name: "ChatGPT", color: "#10A37F", glow: "rgba(16,163,127,0.45)", x: 2, y: -2, size: 48, logo: "/logos/chatgpt.svg" },
  { name: "Java", color: "#EA2D2E", glow: "rgba(234,45,46,0.45)", x: 3, y: -30, size: 38, logo: "/logos/java.svg" },
  { name: "Claude", color: "#D97706", glow: "rgba(217,119,6,0.45)", x: -14, y: -16, size: 40, logo: "/logos/claude.svg" },
  { name: "Gemini", color: "#8B5CF6", glow: "rgba(139,92,246,0.45)", x: 18, y: -18, size: 40, logo: "/logos/gemini.svg" },
  { name: "Shell", color: "#4EAA25", glow: "rgba(78,170,37,0.45)", x: -32, y: -24, size: 36, logo: "/logos/shell.svg" },
  { name: "DeepSeek", color: "#4D6BFE", glow: "rgba(77,107,254,0.45)", x: -30, y: 0, size: 38, logo: "/logos/deepseek.svg" },
  { name: "Python", color: "#3776AB", glow: "rgba(55,118,171,0.45)", x: 30, y: -2, size: 40, logo: "/logos/python.svg" },
  { name: "React", color: "#61DAFB", glow: "rgba(97,218,251,0.45)", x: -10, y: 14, size: 40, logo: "/logos/react.svg" },
  { name: "JavaScript", color: "#F7DF1E", glow: "rgba(247,223,30,0.45)", x: 14, y: 11, size: 38, logo: "/logos/javascript.svg" },
  { name: "Node.js", color: "#339933", glow: "rgba(51,153,51,0.45)", x: -28, y: 28, size: 38, logo: "/logos/nodejs.svg" },
  { name: "HTML5", color: "#E34F26", glow: "rgba(227,79,38,0.45)", x: 2, y: 30, size: 38, logo: "/logos/html5.svg" },
  { name: "CSS3", color: "#1572B6", glow: "rgba(21,114,182,0.45)", x: 30, y: 22, size: 36, logo: "/logos/css3.svg" },
];

function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let isVisible = false;
    const size = 420;
    canvas.width = size;
    canvas.height = size;
    const centerX = size / 2;
    const centerY = size / 2;
    const maxRadius = 185;

    const baseColors = [
      "#FACC15", "#38BDF8", "#818CF8", "#C084FC",
      "#4ADE80", "#22D3EE", "#F472B6",
    ];

    const nodeCount = 22;
    const nodes: Array<{
      baseAngle: number;
      baseRadius: number;
      speed: number;
      size: number;
      color: string;
      x: number;
      y: number;
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      const isRing = i < 10;
      const angle = (i / (isRing ? 10 : nodeCount - 10)) * Math.PI * 2;
      const r = isRing
        ? maxRadius + (Math.random() - 0.5) * 6
        : Math.pow(Math.random(), 0.6) * (maxRadius * 0.85);

      const color = baseColors[i % baseColors.length];

      nodes.push({
        baseAngle: angle,
        baseRadius: r,
        speed: (Math.random() - 0.5) * 0.0012 + 0.0004,
        size: Math.random() < 0.3 ? 2 : 1,
        color,
        x: centerX + Math.cos(angle) * r,
        y: centerY + Math.sin(angle) * r,
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animId);
          render(0);
        } else {
          cancelAnimationFrame(animId);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    let time = 0;
    let lastRenderTime = 0;
    const frameBudget = 33; // 30fps is silky smooth for ambient node orbits

    const render = (timestamp: number = 0) => {
      if (!isVisible) return;
      animId = requestAnimationFrame(render);

      if (timestamp - lastRenderTime < frameBudget) return;
      lastRenderTime = timestamp;

      time += 0.033;
      ctx.clearRect(0, 0, size, size);

      const grad = ctx.createRadialGradient(
        centerX, centerY, 10,
        centerX, centerY, maxRadius * 1.05
      );
      grad.addColorStop(0, "rgba(56, 189, 248, 0.12)");
      grad.addColorStop(0.5, "rgba(139, 92, 246, 0.04)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, maxRadius * 1.05, 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.baseAngle += node.speed * 2;
        const currentR = node.baseRadius + Math.sin(time + node.baseAngle * 2) * 1.2;
        node.x = centerX + Math.cos(node.baseAngle) * currentR;
        node.y = centerY + Math.sin(node.baseAngle) * currentR;

        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

function MeshGlobe({
  title,
  icon,
  logos,
}: {
  title: string;
  icon: React.ReactNode;
  logos: LogoNode[];
}) {
  return (
    <div className="flex flex-col items-center w-full max-w-full overflow-hidden sm:overflow-visible">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-8 h-8 rounded-xl flex items-center justify-center border bg-cyan-500/15 border-cyan-400/35 text-cyan-300">
          {icon}
        </div>
        <div className="text-left">
          <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>

      <div className="scale-[0.78] xs:scale-[0.88] sm:scale-100 origin-center my-[-25px] sm:my-0">
        <div
          className="relative w-[380px] h-[380px] md:w-[420px] md:h-[420px] rounded-full flex items-center justify-center bg-[#070A12]/95 border border-cyan-500/25 shadow-[0_0_55px_rgba(56,189,248,0.18)] overflow-visible group animate-[spin_160s_linear_infinite]"
        >
          <ConstellationCanvas />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            {logos.map((logo) => {
              const size = logo.size || 42;

              return (
                <div
                  key={logo.name}
                  title={logo.name}
                  style={{
                    left: `calc(50% + ${logo.x * 3.6}px - ${size / 2}px)`,
                    top: `calc(50% + ${logo.y * 3.6}px - ${size / 2}px)`,
                    width: `${size}px`,
                    height: `${size}px`,
                    boxShadow: `0 0 25px ${logo.glow}`,
                  }}
                  className="absolute rounded-full bg-[#0D1322] hover:bg-[#152038] border border-cyan-400/30 hover:border-cyan-300 flex items-center justify-center p-2 shadow-xl transition-all cursor-pointer group/node animate-[spin_160s_linear_infinite_reverse] hover:scale-125 z-20"
                >
                  <div className="shrink-0 flex items-center justify-center transition-transform group-hover/node:scale-110 w-5 h-5 sm:w-6 sm:h-6 relative">
                    <Image
                      src={logo.logo}
                      alt={logo.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>

                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-black/95 text-white text-[10px] font-mono whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity pointer-events-none border border-cyan-500/20 z-40">
                    {logo.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TechStackGrid() {
  const [activeMobileTab, setActiveMobileTab] = useState<"marketing" | "tech">("marketing");

  return (
    <section
      id="stack"
      className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 text-center select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[360px] bg-gradient-to-tr from-cyan-950/20 via-purple-950/20 to-transparent rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>ESPECIALIDADES</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
          Dos especialidades interconectadas.
        </h2>
        <p className="text-xs sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
          Toda nuestra arquitectura audiovisual, algoritmos de captación y modelos de IA operando bajo un mismo ecosistema.
        </p>
      </div>

      {/* Mobile Friendly Segmented Layout (Visible on screens < md) */}
      <div className="flex md:hidden flex-col items-center gap-6 max-w-lg mx-auto">
        {/* Glowing Purp.IA Badge Header */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#140618] border border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.3)] w-full justify-center">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-[1.5px] flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-[#0D0412] rounded-xl flex items-center justify-center">
              <Zap className="w-4 h-4 text-[#C084FC]" />
            </div>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black font-mono text-white">Purp.IA Core</span>
              <span className="text-[9px] font-mono uppercase text-[#C084FC] bg-[#C084FC]/10 px-1.5 py-0.5 rounded border border-[#C084FC]/30 font-bold">
                Motor Propio
              </span>
            </div>
            <span className="text-[11px] text-zinc-400">Orquesta y conecta ambas áreas</span>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] w-full">
          <button
            type="button"
            onClick={() => setActiveMobileTab("marketing")}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeMobileTab === "marketing"
                ? "bg-[#9E5C6A] text-white shadow-lg shadow-[#9E5C6A]/30"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Megaphone className="w-3.5 h-3.5" />
            <span>Audiovisual & RRSS</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveMobileTab("tech")}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeMobileTab === "tech"
                ? "bg-[#9E5C6A] text-white shadow-lg shadow-[#9E5C6A]/30"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>IA & Stack Tech</span>
          </button>
        </div>

        {/* Mobile Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full">
          {(activeMobileTab === "marketing" ? marketingLogos : techLogos).map((item) => (
            <div
              key={item.name}
              className="p-3 rounded-xl bg-[#0D1322]/90 border border-white/[0.08] flex items-center gap-2.5 text-left"
            >
              <div className="w-7 h-7 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center shrink-0 relative p-1">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="text-xs font-semibold text-zinc-200 truncate">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Orbital Spheres Layout (Hidden on mobile) */}
      <div className="hidden md:flex flex-row items-center justify-center gap-10 lg:gap-14 max-w-5xl mx-auto">
        <MeshGlobe
          title="Marketing & Audiovisual"
          icon={<Megaphone className="w-4 h-4" />}
          logos={marketingLogos}
        />

        <div className="relative z-20 flex flex-col items-center justify-center shrink-0 my-4 md:my-0">
          <div className="hidden md:block absolute w-[260px] h-[2px] bg-gradient-to-r from-cyan-500/50 via-[#A855F7] to-cyan-500/50 -z-10 blur-[1px]" />

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.15 }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#6366F1] via-[#A855F7] to-[#EC4899] p-[2px] shadow-[0_0_40px_rgba(168,85,247,0.55)] cursor-pointer group flex items-center justify-center"
          >
            <div className="w-full h-full rounded-full bg-[#0D0412] flex flex-col items-center justify-center text-center p-2">
              <Zap className="w-4 h-4 text-[#C084FC] mb-0.5 animate-pulse" />
              <span className="text-xs sm:text-sm font-black font-mono tracking-wider text-white">
                Purp.IA
              </span>
              <span className="text-[8px] font-mono uppercase text-[#E9D5FF] font-bold tracking-widest">
                Core IA
              </span>
            </div>
          </motion.div>

          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C084FC] mt-2 block">
            IA PROPIA
          </span>
        </div>

        <MeshGlobe
          title="IA & Stack Tecnológico"
          icon={<Cpu className="w-4 h-4" />}
          logos={techLogos}
        />
      </div>

      {/* Explanation Box */}
      <div className="mt-8 sm:mt-14 max-w-2xl mx-auto p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0C1220] via-[#100717] to-[#0C1220] border border-cyan-500/30 shadow-[0_0_30px_rgba(56,189,248,0.12)] text-center">
        <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
          Gracias a <strong className="text-[#C084FC] font-bold">Purp.IA</strong>, nuestro motor propio de inteligencia artificial desarrollado internamente, orquestamos, interconectamos y optimizamos todas estas herramientas a una velocidad y precisión matemática que ninguna agencia tradicional o generalista puede igualar.
        </p>
      </div>
    </section>
  );
}
