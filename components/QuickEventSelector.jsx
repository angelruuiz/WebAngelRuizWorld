import Link from 'next/link';
import { Sparkles } from '@/components/Icons';

export default function QuickEventSelector() {
    const categories = [
        {
            title: "Bodas & Cócteles",
            badge: "Especialidad",
            description: "Magia de cerca íntima para romper el hielo en el cóctel y unir a los invitados.",
            href: "/particulares/bodas",
            icon: "💍",
            cta: "Ver Magia para Bodas"
        },
        {
            title: "Cenas de Empresa & Navidad",
            badge: "Temporada Alta",
            description: "Ilusionismo corporativo para cenas de empresa, galas de fin de año y team building en Madrid.",
            href: "/empresas/mago-cenas-empresa-madrid",
            icon: "🏢",
            cta: "Ver Cenas de Empresa"
        },
        {
            title: "Fiestas & Particulares",
            badge: "Eventos VIP",
            description: "Cumpleaños, aniversarios privados y celebraciones familiares inolvidables.",
            href: "/particulares/eventos",
            icon: "🎩",
            cta: "Ver Fiestas y Eventos"
        }
    ];

    return (
        <div className="w-full mb-8 sm:mb-12">
            <div className="text-center mb-5 sm:mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-2 sm:mb-3">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-semibold">
                        Servicios a Medida
                    </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-[Cinzel] font-bold text-white tracking-wide uppercase">
                    ¿Qué evento estás organizando?
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm font-light mt-1 max-w-md mx-auto">
                    Selecciona tu formato para consultar disponibilidad:
                </p>
            </div>

            {/* En móvil: Carrusel horizontal con snap para evitar abrumar con scroll vertical infinito */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:overflow-visible no-scrollbar">
                {categories.map((cat, idx) => (
                    <Link
                        key={idx}
                        href={cat.href}
                        className="group relative rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(212,168,83,0.15)] hover:-translate-y-1 w-[82vw] max-w-[320px] shrink-0 snap-center sm:w-auto sm:max-w-none"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <span className="text-2xl sm:text-3xl">{cat.icon}</span>
                                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 sm:px-2.5 py-0.5 rounded-full font-bold">
                                    {cat.badge}
                                </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-[Cinzel] font-bold text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight mb-1.5 sm:mb-2">
                                {cat.title}
                            </h3>
                            <p className="text-slate-400 text-xs leading-relaxed font-light mb-4 sm:mb-6">
                                {cat.description}
                            </p>
                        </div>
                        <div className="flex items-center text-amber-400 text-xs font-bold uppercase tracking-wider group-hover:text-amber-300 pt-3 border-t border-white/5">
                            <span>{cat.cta}</span>
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Micro-pista de deslizamiento táctil solo en móvil */}
            <div className="sm:hidden flex items-center justify-center gap-1.5 text-[9px] text-slate-500 uppercase tracking-widest mt-1.5">
                <span>← Desliza para ver opciones →</span>
            </div>
        </div>
    );
}
