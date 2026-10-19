"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Mail, 
  Globe, 
  Sparkles, 
  Download, 
  Check, 
  ArrowUpRight,
  ShieldCheck,
  Radio
} from 'lucide-react';
import { WhatsApp } from '@/components/Icons';

export default function DigitalCard() {
  const cardRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Motion values for smooth 3D tilt & glare
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 260 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Tilt transformation (-14 deg to 14 deg)
  const rotateX = useTransform(smoothMouseY, [0, 1], [14, -14]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-14, 14]);

  // Glare position (percentage)
  const glareX = useTransform(smoothMouseX, [0, 1], [0, 100]);
  const glareY = useTransform(smoothMouseY, [0, 1], [0, 100]);

  const handlePointerMove = (e) => {
    if (!cardRef.current || isDragging) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(Math.max(0, Math.min(1, x)));
    mouseY.set(Math.max(0, Math.min(1, y)));
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handleSaveContact = () => {
    setCopied(true);
    const link = document.createElement('a');
    link.href = '/api/vcard';
    link.download = 'Angel-Ruiz-Ilusionista.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setCopied(false), 2600);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center select-none py-6 sm:py-10 perspective-[1200px]">
      
      {/* Dynamic ambient backglow */}
      <div 
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-transparent blur-3xl pointer-events-none transition-all duration-700 -z-10"
        style={{
          transform: isHovered ? 'scale(1.15)' : 'scale(0.95)',
          opacity: isHovered ? 0.9 : 0.6
        }}
      />

      {/* DRAGGABLE & TILT 3D CARD */}
      <motion.div
        ref={cardRef}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.28}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 22 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false);
          mouseX.set(0.5);
          mouseY.set(0.5);
        }}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative w-full max-w-[350px] sm:max-w-[370px] rounded-[32px] p-6 sm:p-7 
          bg-gradient-to-b from-[#181a24] via-[#0d0f16] to-[#06070a]
          border border-amber-400/25
          shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(212,168,83,0.12),inset_0_1px_1px_rgba(255,255,255,0.15)]
          transition-shadow duration-300
          ${isDragging ? 'cursor-grabbing scale-[1.02]' : 'cursor-grab'}
        `}
      >

        {/* METALLIC / HOLOGRAPHIC GLARE OVERLAY */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[32px] overflow-hidden mix-blend-color-dodge transition-opacity duration-300"
          style={{ opacity: isHovered || isDragging ? 0.65 : 0.25 }}
        >
          <motion.div 
            className="w-full h-full"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([x, y]) => `
                  radial-gradient(circle at ${x}% ${y}%, rgba(255, 240, 190, 0.45) 0%, rgba(212, 168, 83, 0.18) 28%, transparent 65%),
                  linear-gradient(${Number(x) * 1.8}deg, rgba(255,255,255,0.08) 0%, transparent 40%, rgba(212,168,83,0.12) 65%, transparent 100%)
                `
              )
            }}
          />
        </motion.div>

        {/* INNER METALLIC BEZEL LINE */}
        <div className="pointer-events-none absolute inset-[1px] rounded-[31px] border border-white/[0.07]" />

        {/* CARD CONTENT */}
        <div className="relative z-10 flex flex-col justify-between h-full">

          {/* TOP BAR: SMART CHIP & STATUS */}
          <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              {/* Luxury Contactless / Chip motif */}
              <div className="w-8 h-6 rounded-md bg-gradient-to-tr from-amber-600/40 via-amber-300/30 to-amber-500/20 border border-amber-400/40 flex items-center justify-center p-0.5 shadow-inner">
                <div className="w-full h-full border border-amber-300/30 rounded-[3px] flex items-center justify-center">
                  <div className="w-2.5 h-[1px] bg-amber-300/60" />
                </div>
              </div>
              <Radio className="w-3.5 h-3.5 text-amber-400/70 animate-pulse" />
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-[10px] font-semibold tracking-wider text-amber-300/90 uppercase">
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              <span>Madrid · España</span>
            </div>
          </div>

          {/* IDENTITY SECTION */}
          <div className="flex flex-col items-center text-center pt-6 pb-6">
            <div className="relative mb-3 group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-amber-200 rounded-full blur-sm opacity-50 group-hover:opacity-80 transition duration-500" />
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-amber-400/60 shadow-xl bg-slate-950 flex items-center justify-center">
                <Image
                  src="/images/logo-pequeno.webp"
                  alt="Ángel Ruiz Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain p-1.5"
                  priority
                />
              </div>
              <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center shadow-md" title="Disponible para eventos">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
              </div>
            </div>

            <h1 className="text-2xl font-bold tracking-[0.08em] text-white uppercase font-cinzel">
              Ángel Ruiz
            </h1>
            
            <div className="mt-1 flex items-center gap-2">
              <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-amber-400/60" />
              <span className="text-[11px] font-bold tracking-[0.28em] text-amber-400 uppercase">
                Ilusionista
              </span>
              <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-amber-400/60" />
            </div>
          </div>

          {/* ACTION BUTTONS (4 TARGETS) */}
          <div className="space-y-2.5 my-2">

            {/* 1. WHATSAPP DIRECTO (SIN MENSAJE PREDETERMINADO) */}
            <a
              href="https://wa.me/34648055636"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-emerald-500/15 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <WhatsApp className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">WhatsApp</p>
                  <p className="text-sm font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">648 055 636</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* 2. EMAIL */}
            <a
              href="mailto:info@angelruiz.world"
              className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-amber-500/15 border border-white/[0.08] hover:border-amber-400/40 transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Correo</p>
                  <p className="text-sm font-semibold text-slate-100 group-hover:text-amber-200 transition-colors">info@angelruiz.world</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* 3. INSTAGRAM */}
            <a
              href="https://instagram.com/angellruuiz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-pink-500/15 border border-white/[0.08] hover:border-pink-500/40 transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Instagram</p>
                  <p className="text-sm font-semibold text-slate-100 group-hover:text-pink-300 transition-colors">@angellruuiz</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-pink-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* 4. WEB */}
            <a
              href="https://angelruiz.world"
              className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-cyan-500/15 border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Sitio Web</p>
                  <p className="text-sm font-semibold text-slate-100 group-hover:text-cyan-200 transition-colors">angelruiz.world</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

          </div>

          {/* BOTTOM BUTTON: GUARDAR CONTACTO (.vcf) */}
          <div className="pt-3">
            <button
              onClick={handleSaveContact}
              className="w-full relative group overflow-hidden py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-[#c9956b] text-slate-950 font-bold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(212,168,83,0.35)] hover:shadow-[0_6px_25px_rgba(212,168,83,0.5)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-slate-950 stroke-[3]" />
                  <span>¡Contacto Descargado!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                  <span>Guardar en Contactos</span>
                </>
              )}
            </button>
            <p className="text-[10px] text-center text-slate-500 mt-2 font-medium">
              Toca para añadir directamente a la agenda de tu móvil
            </p>
          </div>

        </div>
      </motion.div>

      {/* SUBTLE INTERACTION HINT */}
      <div className="mt-4 flex items-center gap-2 text-slate-500 text-xs font-medium">
        <Sparkles className="w-3.5 h-3.5 text-amber-400/80 animate-spin" style={{ animationDuration: '6s' }} />
        <span>Arrastra la tarjeta para moverla e interactuar</span>
      </div>

    </div>
  );
}
