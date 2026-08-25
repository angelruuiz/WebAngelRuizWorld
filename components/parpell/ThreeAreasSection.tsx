"use client";

import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { Search, Video, TrendingUp, UserCheck, Sparkles, CheckCircle2 } from "lucide-react";

export function ThreeAreasSection() {
  const areas = [
    {
      num: "04 · Área 1",
      title: "Visibilidad IA & Local",
      phrase: "Que te encuentren",
      desc: "Trabajamos para que, cuando alguien pregunte por tu sector, tu nombre esté en la respuesta de las IA y en mapas locales.",
      icon: Search,
      tasks: [
        "Posicionamiento en IA (GEO): ChatGPT, Perplexity, Gemini, Claude.",
        "Datos estructurados (Schema): Etiquetas invisibles para máquinas.",
        "Google Business Profile y SEO local ordenado y completo.",
        "Citaciones y menciones en prensa y directorios con reputación.",
        "Estrategia legal de reseñas para clientes contentos.",
        "Informe mensual con capturas reales de consultas a las IA.",
      ],
      enCristiano: "Una IA es como un alumno que se ha leído internet para un examen. Nuestro trabajo es meter tu negocio en esos libros para que escriba tu nombre.",
      executor: "Nuestro socio ingeniero de software. No se subcontrata.",
      colSpan: "md:col-span-1",
    },
    {
      num: "05 · Área 2",
      title: "Contenido que Convierte",
      phrase: "Que te elijan",
      desc: "Que quien te encuentre entienda en diez segundos por qué eres tú y no el de al lado.",
      icon: Video,
      tasks: [
        "Rodaje mensual: Un día entero de grabación al mes en tu negocio.",
        "Guion con gancho: Diseñado para retener desde el primer segundo.",
        "Edición, montaje y calendario de publicaciones.",
        "Vídeo vertical: Formato móvil (Reels, TikTok, Shorts).",
        "Automatización de captación («comenta GUÍA y te la envío»).",
        "Conexión con CRM: Cada persona entra ordenada a tu lista.",
      ],
      enCristiano: "Un vídeo es un vendedor que trabaja mientras duermes y atiende a mil personas a la vez. Lo que decide si funciona es el guion, no la cámara.",
      executor: "Nuestro socio filmmaker, en persona (cámara, guion y montaje).",
      colSpan: "md:col-span-1",
    },
    {
      num: "06 · Área 3",
      title: "Máquina de Ventas",
      phrase: "Que compren y repitan",
      desc: "La parte que casi nadie te ofrece, y la que de verdad convierte la atención en dinero.",
      icon: TrendingUp,
      tasks: [
        "Formación de equipos comerciales en IA (Bonificable por FUNDAE).",
        "Estrategia comercial, argumentario y tratamiento de objeciones.",
        "Copilotos de venta y cualificación automática de leads.",
        "Email marketing y ciclo de vida (bienvenida, seguimiento, oferta).",
        "Campañas de retención y aumento de LTV.",
        "Re-enganche de clientes inactivos tras varios meses.",
      ],
      enCristiano: "Conseguir un cliente nuevo cuesta varias veces más que vender al que ya te compró. Esta área es dejar de tirar dinero.",
      executor: "Nuestro socio comercial y formador. Es su oficio de origen.",
      colSpan: "md:col-span-1",
    },
  ];

  return (
    <section id="areas" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      {/* Centered Section Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-mono text-[#9E5C6A] mb-5 border border-[#9E5C6A]/30">
          <span>04, 05 & 06 · LAS TRES ÁREAS DE PARPELL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4F2] leading-tight">
          Un servicio integral sobre todo el recorrido de tu cliente.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#F8F4F2]/70 max-w-xl mx-auto">
          Tres piezas interconectadas para construir un negocio sólido, visible y rentable.
        </p>
      </div>

      {/* Bento Grid: 3 Area Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-6">
        {areas.map((area, idx) => {
          const Icon = area.icon;
          return (
            <SpotlightCard
              key={area.num}
              className="p-8 border-white/[0.08] bg-[#2B1A20]/70 flex flex-col justify-between"
              delay={idx * 0.15}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.08]">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9E5C6A] block">
                      {area.num}
                    </span>
                    <h3 className="text-xl font-bold text-[#F8F4F2] mt-0.5">{area.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#9E5C6A]/15 border border-[#9E5C6A]/30 flex items-center justify-center text-[#9E5C6A]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#9E5C6A]/20 text-[11px] font-semibold text-[#F7EBED] mb-4">
                  {area.phrase}
                </div>

                <p className="text-xs text-[#F8F4F2]/80 leading-relaxed mb-6">
                  {area.desc}
                </p>

                {/* Tasks list */}
                <div className="space-y-2 mb-6">
                  {area.tasks.map((task) => (
                    <div key={task} className="flex items-start gap-2 text-xs text-[#F8F4F2]/85">
                      <span className="text-[#9E5C6A] font-bold mt-0.5 shrink-0">■</span>
                      <span>{task}</span>
                    </div>
                  ))}
                </div>

                {/* Mini En Cristiano Box */}
                <div className="p-4 rounded-xl bg-[#F7EBED] text-[#2B1A20] mb-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E5C6A] block mb-1">
                    En cristiano
                  </span>
                  <p className="text-xs text-[#2B1A20] leading-snug">
                    {area.enCristiano}
                  </p>
                </div>
              </div>

              {/* Executor Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-[11px] font-mono text-[#F7EBED]">
                <UserCheck className="w-3.5 h-3.5 text-[#9E5C6A] shrink-0" />
                <span>{area.executor}</span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* FUNDAE Bonus Highlight Box */}
      <SpotlightCard className="p-6 md:p-8 bg-[#6E3844]/20 border-[#9E5C6A]/30 text-left max-w-4xl mx-auto" delay={0.4}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E5C6A] block mb-1">
              Un apunte útil sobre la formación a comerciales (Área 3)
            </span>
            <p className="text-xs sm:text-sm text-[#F8F4F2]/90 leading-relaxed">
              Las formaciones a equipos comerciales suelen poder bonificarse a través de <strong>FUNDAE</strong>, el sistema público español que devuelve a las empresas parte del dinero invertido en formación. Buena parte del coste puede recuperarse.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#9E5C6A]/20 text-xs font-mono text-[#F7EBED] shrink-0 border border-[#9E5C6A]/40">
            Bonificable FUNDAE
          </span>
        </div>
      </SpotlightCard>
    </section>
  );
}
