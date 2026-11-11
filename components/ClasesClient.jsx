"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, WhatsApp } from '@/components/Icons';
import dynamic from 'next/dynamic';

const ContactFormModal = dynamic(() => import('@/components/Modals').then(mod => mod.ContactFormModal), { ssr: false });
const MagicCursor = dynamic(() => import('@/components/VisualEffects').then(mod => mod.MagicCursor), { ssr: false });
const ParticleBackground = dynamic(() => import('@/components/VisualEffects').then(mod => mod.ParticleBackground), { ssr: false });

const WHATSAPP_CLASES_URL = "https://wa.me/34648055636?text=Hola%20%C3%81ngel,%20quiero%20informaci%C3%B3n%20sobre%20tus%20clases%20particulares%201%20a%201%20online";

const SYLLABUS_STEPS = [
    {
        num: "01",
        title: "Los Cimientos & Contacto con la Baraja",
        subtitle: "De principiante absoluto a tener manos de cartomago",
        tag: "Técnica Base",
        badgeColor: "text-amber-400 bg-amber-500/10 border-amber-400/20",
        description: "Aprenderás cómo coger la baraja correctamente sin tensión ni posturas forzadas. La diferencia entre un truco tosco y verdadera magia está en la naturalidad del agarre.",
        bullets: [
            "Posición de dar (agarre de mecánico), posición Biddle y agarre elevado.",
            "Mezcla americana en mesa, mezcla por hojeo y mezcla en las manos.",
            "Cortes falsos que parecen legítimos y cuadre limpio de la baraja.",
            "Uso de cartas guía (key cards) para localizar cualquier carta al instante."
        ],
        icon: "🂠"
    },
    {
        num: "02",
        title: "El Arsenal Técnico & Manipulación Secreta",
        subtitle: "Los movimientos que engañan incluso a ojos expertos",
        tag: "Nivel Intermedio",
        badgeColor: "text-amber-300 bg-amber-400/10 border-amber-300/20",
        description: "Adentrámonos en la mecánica de la cartomagia de autor. Dominarás los pases secretos que permiten controlar la baraja entera mientras el espectador cree que tiene el control total.",
        bullets: [
            "Controles invisibles al corte, en extensión y bajo el tapete.",
            "Forzajes clásicos y psicológicos que se sienten como elecciones 100% libres.",
            "Doble volteo imperceptible: ritmo, respiración y descarga sin ruido.",
            "Empalmes limpios, enfilajes y cambios de color visuales."
        ],
        icon: "♠"
    },
    {
        num: "03",
        title: "Psicología del Engaño & Misdirection",
        subtitle: "La escuela de Dani DaOrtiz: controlar la atención",
        tag: "Psicología & Timing",
        badgeColor: "text-purple-300 bg-purple-500/10 border-purple-400/20",
        description: "La técnica sin psicología no es magia, es malabarismo. Te enseñaré a dirigir la mirada y la mente del público para que el secreto ocurra a plena vista sin que sospechen.",
        bullets: [
            "Manejo de off-beats (tiempos muertos) y relajación del espectador.",
            "Cómo ser pícaro: romper el hielo con ironía, humor y complicidad.",
            "Dirección de la atención activa y pasiva (dónde miran y por qué).",
            "Gestión del espectador difícil o escéptico sin generar confrontación."
        ],
        icon: "👁"
    },
    {
        num: "04",
        title: "Hablar en Público & Montar tu Propio Show",
        subtitle: "Pierde el miedo escénico y crea un repertorio profesional",
        tag: "Puesta en Escena",
        badgeColor: "text-emerald-300 bg-emerald-500/10 border-emerald-400/20",
        description: "Tener técnica no sirve si te bloqueas al hablar. Te enseñaré a proyectar tu voz, dominar tu lenguaje corporal y estructurar una rutina de 15 a 45 minutos que mantenga a todos pegados a ti.",
        bullets: [
            "Presencia escénica: cómo plantarte ante 5 personas en cóctel o 100 en un salón.",
            "Estructura narrativa: gancho inicial, subida de tensión y clímax imborrable.",
            "Transiciones entre juegos para que tu repertorio fluya como una historia.",
            "Improvisación y seguridad ante imprevistos o errores sin que nadie lo note."
        ],
        icon: "🎙"
    }
];

const FAQS_CLASES = [
    {
        q: "¿Necesito saber de magia o tener experiencia previa?",
        a: "Para nada. Las clases son 100% personalizadas e individuales. Si nunca has tocado una baraja, empezamos desde cómo sujetarla de forma natural. Y si ya tienes nivel o llevas años practicando, iremos directos a pulir detalles técnicos avanzados, psicología o puesta en escena."
    },
    {
        q: "¿Qué material necesito para empezar?",
        a: "Únicamente una baraja de cartas de calidad estándar (como Bicycle, Tally-Ho o similar) y una superficie plana o tapete de magia. No necesitas ningún aparato raro ni gastar dinero en trucos de tienda."
    },
    {
        q: "¿Cómo son las clases online y cómo se ve lo que hago?",
        a: "Las sesiones se realizan por videollamada privada en alta definición (Zoom o Google Meet). Utilizo un sistema de cámara cenital para que veas al milímetro la posición de mis dedos desde tu perspectiva, y tú solo necesitas enfocar tus manos para que te corrija al instante."
    },
    {
        q: "¿Qué horarios y flexibilidad hay?",
        a: "Total flexibilidad. Al ser sesiones privadas 1 a 1, coordinamos los días y horas que mejor se adapten a tu agenda (tardes, fines de semana, etc.) de mutuo acuerdo a través de WhatsApp."
    },
    {
        q: "¿Puedo enfocar las clases en aprender a hablar en público y perder el miedo?",
        a: "¡Totalmente! Muchos alumnos utilizan la magia como herramienta para ganar seguridad al hablar delante de gente, mejorar su comunicación y carisma en su trabajo diario o reuniones sociales."
    }
];

export default function ClasesClient() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="bg-[var(--surface-0)] min-h-screen text-slate-200 selection:bg-amber-500/30 selection:text-amber-200 relative overflow-hidden">
            <MagicCursor />
            <ParticleBackground />
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main className="relative z-10 pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* ── HERO DE CLASES ── */}
                <section className="relative text-center max-w-4xl mx-auto mb-20 sm:mb-28 pt-4 sm:pt-8">
                    {/* Badge ambiental con pulso */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                        <span>Formación Particular 1 a 1 · 100% Online</span>
                    </div>

                    {/* H1 Principal con tipografía Biro Script */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                        Aprende <span className="font-biro text-[#d4a853] text-5xl sm:text-7xl md:text-8xl block sm:inline font-normal pr-2">Magia Real</span>
                        <span className="block text-2xl sm:text-4xl md:text-5xl font-[Cinzel] mt-2 text-slate-100">
                            Técnica, Psicología & Puesta en Escena
                        </span>
                    </h1>

                    {/* Subtítulo enfocado en la propuesta de valor */}
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-8">
                        Clases particulares en directo, sin moverte de tu casa y a tu propio ritmo. Desde cómo sujetar la baraja por primera vez hasta construir tu propio espectáculo y hablar con soltura ante el público.
                    </p>

                    {/* Botones de acción principales */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                        <a 
                            href={WHATSAPP_CLASES_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer group"
                        >
                            <WhatsApp className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
                            <span>Pedir Info por WhatsApp</span>
                        </a>

                        <a 
                            href="#temario"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white text-sm font-semibold tracking-wider uppercase backdrop-blur-md transition-all active:scale-95"
                        >
                            <span>Ver el Temario ↓</span>
                        </a>
                    </div>

                    {/* Píldoras de credenciales */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10 text-xs text-slate-400 font-medium">
                        <span className="flex items-center gap-2">
                            <span className="text-amber-400">✓</span> Cualquier Nivel (De 0 a Pro)
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="text-amber-400">✓</span> Cámara Cenital HD en Directo
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="text-amber-400">✓</span> Escuela DaOrtiz (+12 Años)
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="text-amber-400">✓</span> Horarios Flexibles
                        </span>
                    </div>
                </section>

                {/* ── BENTO GRID: CÓMO FUNCIONA EL FORMATO ONLINE ── */}
                <section className="mb-24 sm:mb-32">
                    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-bold mb-2">Método de Formación</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-[Cinzel] font-bold text-white tracking-wide">
                            Una Experiencia 1 a 1 Pensada para que Progreses Rápido
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* Tarjeta 1: Cámara cenital */}
                        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-xl backdrop-blur-md relative overflow-hidden group">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl font-bold mb-5 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                📹
                            </div>
                            <h3 className="text-lg sm:text-xl font-[Cinzel] font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                                Doble Cámara Cenital HD
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                                Ves mis manos y la baraja desde tu propia perspectiva visual. Cada ángulo, dedo y micro-movimiento queda a la vista para que no te pierdas ningún detalle.
                            </p>
                        </div>

                        {/* Tarjeta 2: Corrección al segundo */}
                        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-xl backdrop-blur-md relative overflow-hidden group">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl font-bold mb-5 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                🎯
                            </div>
                            <h3 className="text-lg sm:text-xl font-[Cinzel] font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                                Corrección al Segundo
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                                Olvídate de ver vídeos grabados donde nadie te dice si lo estás haciendo bien. Te corrijo la postura, la presión y los vicios en directo antes de que se conviertan en errores.
                            </p>
                        </div>

                        {/* Tarjeta 3: Hablar en público y soltura */}
                        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-xl backdrop-blur-md relative overflow-hidden group">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-xl font-bold mb-5 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                🗣️
                            </div>
                            <h3 className="text-lg sm:text-xl font-[Cinzel] font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                                Hablar sin Miedo ante la Gente
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                                La magia es la mejor escuela de comunicación del mundo. Aprenderás a mirar a los ojos, proyectar confianza, romper el hielo y enganchar a cualquier tipo de audiencia.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── TEMARIO / PROGRAMA FORMATIVO PASO A PASO ── */}
                <section id="temario" className="mb-24 sm:mb-32 relative">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-bold mb-2">Recorrido de Aprendizaje</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[Cinzel] font-bold text-white tracking-wide mb-4">
                            Lo que Aprenderás Paso a Paso
                        </h2>
                        <p className="text-sm sm:text-base text-slate-300 font-light">
                            Un itinerario estructurado pero 100% adaptable a tus objetivos personales. Tú marcas el ritmo y las áreas en las que prefieres profundizar.
                        </p>
                    </div>

                    {/* Timeline de 4 Fases con diseño editorial premium */}
                    <div className="relative max-w-4xl mx-auto">
                        <div className="hidden md:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-500/40 via-amber-400/20 to-transparent" />

                        <div className="space-y-10 sm:space-y-14">
                            {SYLLABUS_STEPS.map((step, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <div 
                                        key={step.num}
                                        className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${
                                            isEven ? 'md:flex-row-reverse' : ''
                                        }`}
                                    >
                                        {/* Tarjeta de contenido */}
                                        <div className="w-full md:w-1/2">
                                            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 shadow-xl backdrop-blur-md relative overflow-hidden group">
                                                <div className="flex items-center justify-between gap-3 mb-4">
                                                    <span className={`text-[11px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border ${step.badgeColor}`}>
                                                        {step.tag}
                                                    </span>
                                                    <span className="font-mono text-2xl font-bold text-white/20 group-hover:text-amber-400/40 transition-colors">
                                                        {step.num}
                                                    </span>
                                                </div>

                                                <h3 className="text-xl sm:text-2xl font-[Cinzel] font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                                                    {step.title}
                                                </h3>
                                                <p className="text-xs text-amber-200/80 italic mb-4 font-serif">
                                                    {step.subtitle}
                                                </p>

                                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-5">
                                                    {step.description}
                                                </p>

                                                <ul className="space-y-2 border-t border-white/[0.06] pt-4 text-xs text-slate-300">
                                                    {step.bullets.map((b, bIdx) => (
                                                        <li key={bIdx} className="flex items-start gap-2">
                                                            <span className="text-amber-400 font-bold shrink-0">✦</span>
                                                            <span className="leading-relaxed font-light">{b}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Icono central de conexión */}
                                        <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-slate-900 border-2 border-amber-400/50 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                                            <span>{step.icon}</span>
                                        </div>

                                        {/* Espaciador simétrico para desktop */}
                                        <div className="hidden md:block w-1/2" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── SECCIÓN EL MENTOR: ÁNGEL RUIZ ── */}
                <section className="mb-24 sm:mb-32">
                    <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-r from-amber-500/10 via-white/[0.02] to-transparent border border-white/[0.08] backdrop-blur-md relative overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8 space-y-4">
                                <p className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-bold">Tu Profesor & Mentor</p>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-[Cinzel] font-bold text-white">
                                    Aprende con Ángel Ruiz · Escuela Dani DaOrtiz
                                </h2>
                                <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-light">
                                    Llevo más de 12 años dedicado profesionalmente al ilusionismo y la magia de cerca en Madrid. Me formé en la prestigiosa <strong>Escuela de Magia de Dani DaOrtiz</strong>, donde aprendí que la verdadera magia ocurre en la psicología, en la respiración y en cómo tratas al público.
                                </p>
                                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-light">
                                    En mis clases no te soltaré un manual rígido ni te obligaré a memorizar movimientos sin sentido: <strong>te enseñaré los atajos reales, cómo evitar vicios técnicos y los secretos de cómo se comporta la gente cuando estás delante</strong>.
                                </p>

                                <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                                    <span className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-amber-300">
                                        +12 Años de Trayectoria
                                    </span>
                                    <span className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-amber-300">
                                        Especialista en Cartomagia
                                    </span>
                                    <span className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-amber-300">
                                        Formador 1 a 1
                                    </span>
                                </div>
                            </div>

                            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-black/40 border border-white/10">
                                <span className="text-amber-400 text-3xl font-bold font-[Cinzel] block mb-1">5.0 ★</span>
                                <span className="text-xs text-slate-300 font-medium mb-3">+60 Reseñas Reales en Google Maps</span>
                                <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                                    "La pasión y cercanía con la que explica cada detalle hace que avances en una sola sesión lo que tardarías meses por tu cuenta."
                                </p>
                                <a 
                                    href={WHATSAPP_CLASES_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                                >
                                    <span>Consultar mi caso</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── PREGUNTAS FRECUENTES (HTML SEMÁNTICO - NUNCA JSON-LD FAQPAG) ── */}
                <section className="mb-24 sm:mb-32 max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-bold mb-2">Dudas Habituales</p>
                        <h2 className="text-2xl sm:text-3xl font-[Cinzel] font-bold text-white">
                            Preguntas Frecuentes sobre las Clases
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {FAQS_CLASES.map((faq, idx) => (
                            <details 
                                key={idx}
                                className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-400/30 transition-all [&_summary::-webkit-details-marker]:hidden"
                            >
                                <summary className="flex items-center justify-between cursor-pointer text-sm sm:text-base font-semibold text-white group-hover:text-amber-300 transition-colors list-none">
                                    <span>{faq.q}</span>
                                    <span className="text-amber-400 group-open:rotate-180 transition-transform duration-200 ml-4 shrink-0 text-sm">↓</span>
                                </summary>
                                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-white/[0.06] pt-3">
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ── BANNER FINAL DE CONVERSIÓN WHATSAPP ── */}
                <section className="relative rounded-3xl p-8 sm:p-12 lg:p-16 text-center bg-gradient-to-b from-amber-500/15 via-white/[0.02] to-transparent border border-amber-400/30 shadow-[0_0_50px_rgba(245,158,11,0.15)] overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-bold mb-3">Empieza a tu Ritmo</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[Cinzel] font-bold text-white mb-4 leading-tight">
                            ¿Listo para Aprender Magia de Verdad?
                        </h2>
                        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8">
                            Escríbeme directamente por WhatsApp. Cuéntame cuál es tu nivel, qué te gustaría aprender o qué objetivos tienes y te explicaré el formato, disponibilidad y tarifas sin ningún compromiso.
                        </p>

                        <a 
                            href={WHATSAPP_CLASES_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 text-slate-950 font-bold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_35px_rgba(16,185,129,0.45)] hover:shadow-[0_0_50px_rgba(16,185,129,0.65)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        >
                            <WhatsApp className="w-5 h-5 text-slate-950" />
                            <span>Solicitar Información de las Clases</span>
                        </a>

                        <p className="text-[11px] text-slate-400 mt-4 flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Respuesta rápida por WhatsApp · Trato directo con Ángel Ruiz</span>
                        </p>
                    </div>
                </section>
            </main>

            <Footer onOpenContact={() => setIsContactOpen(true)} />
            <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </div>
    );
}
