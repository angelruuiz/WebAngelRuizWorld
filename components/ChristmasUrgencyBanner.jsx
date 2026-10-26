"use client";

import React from 'react';
import Link from 'next/link';
import { Sparkles, WhatsApp, Calendar } from '@/components/Icons';
import { trackEvent } from '@/lib/tracker';

export default function ChristmasUrgencyBanner({
  title = "Campaña Navidad & Cierre de Año 2026",
  subtitle = "Últimas 4 fechas disponibles en noviembre y diciembre para cenas de empresa y eventos corporativos en Madrid.",
  waCustomMessage = "Hola Ángel, quisiera consultar disponibilidad para nuestra cena de empresa / evento de Navidad en Madrid. ¿Qué fechas te quedan libres en nov-dic?",
  className = ""
}) {
  const waUrl = `https://wa.me/34648055636?text=${encodeURIComponent(waCustomMessage)}`;

  const handleWhatsAppClick = () => {
    trackEvent('christmas_banner_whatsapp_click', {
      title,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-slate-900/90 to-amber-500/5 p-5 sm:p-6 md:p-8 backdrop-blur-xl shadow-2xl shadow-amber-500/5 my-8 ${className}`}>
      {/* Glow decorative effect */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{title}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-[Cinzel] font-bold text-white tracking-wide mb-2">
            Asegura el entretenimiento de tu cena o evento antes de que se agote la agenda
          </h3>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-amber-200/80">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" /> Formatos: Cóctel & Mesa en Mesa
            </span>
            <span className="hidden sm:inline text-amber-500/40">•</span>
            <span>Respuesta en &lt;15 minutos</span>
            <span className="hidden sm:inline text-amber-500/40">•</span>
            <span>Sin agencias ni intermediarios</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto shrink-0">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40 active:scale-95 group text-center"
          >
            <WhatsApp className="w-4 h-4 fill-current group-hover:scale-110 transition-transform duration-200" />
            <span>Consultar Fechas por WhatsApp</span>
          </a>

          <Link
            href="/dossier"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/15 hover:border-amber-400/40 text-slate-300 hover:text-white text-xs font-light tracking-wide transition-all duration-200 text-center"
          >
            Ver Dossier Corporativo PDF
          </Link>
        </div>
      </div>
    </div>
  );
}
