"use client";

import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { XCircle } from "lucide-react";

export function WhatWeDontDoSection() {
  const items = [
    {
      action: "Publicidad de pago (Google Ads, Meta Ads)",
      reason: "Es un oficio propio y a jornada completa. Trabajamos con especialistas externos si hace falta.",
    },
    {
      action: "Organización de eventos",
      reason: "Consume días enteros, tiene mucho riesgo legal y no es nuestro oficio. Si lo necesitas, coordinamos con productora.",
    },
    {
      action: "Escribir reseñas o comprarlas",
      reason: "Es ilegal en España y puede costar sanciones altas. Ayudamos a pedirlas bien, nunca las escribimos nosotros.",
    },
    {
      action: "Garantizar posiciones",
      reason: "No controlamos ni Google ni las IA. Quien lo garantiza, miente.",
    },
    {
      action: "Retener cuentas o accesos",
      reason: "Todo está a tu nombre. Si un día te vas, te lo llevas completo y sin discusión.",
    },
    {
      action: "Aceptar clientes de más",
      reason: "Somos dos. Hay un límite y lo respetamos.",
    },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      {/* Centered Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-mono text-[#9E5C6A] mb-5 border border-[#9E5C6A]/30">
          <span>10 · LO QUE NO HACEMOS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4F2] leading-tight">
          Decir que sí a todo es la forma más rápida de hacerlo todo regular.
        </h2>
      </div>

      {/* Bento Grid (6 Tiles) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        {items.map((item, idx) => (
          <SpotlightCard key={item.action} className="p-6 md:p-7" delay={idx * 0.08}>
            <div>
              <div className="flex items-center gap-2.5 text-[#9E5C6A] mb-3">
                <XCircle className="w-4 h-4 shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold text-[#F8F4F2] leading-snug">{item.action}</h3>
              </div>
              <p className="text-xs text-[#F8F4F2]/75 leading-relaxed pl-6">
                {item.reason}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
