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
            title: "Empresas & Cenas B2B",
            badge: "Corporativo",
            description: "Ilusionismo de alto impacto para cenas de gala, stands en IFEMA y team building.",
            href: "/empresas",
            icon: "🏢",
            cta: "Ver Magia Corporativa"
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
        <div className="w-full mb-12">
            <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-semibold">
                        Servicios a Medida
                    </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-[Cinzel] font-bold text-white tracking-wide uppercase">
                    ¿Qué tipo de evento estás organizando?
                </h2>
                <p className="text-slate-400 text-xs md:text-sm font-light mt-1 max-w-md mx-auto">
                    Selecciona tu formato para consultar disponibilidad y detalles de la experiencia:
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                {categories.map((cat, idx) => (
                    <Link
                        key={idx}
                        href={cat.href}
                        className="group relative rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(212,168,83,0.15)] hover:-translate-y-1"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-3xl">{cat.icon}</span>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full font-bold">
                                    {cat.badge}
                                </span>
                            </div>
                            <h3 className="text-lg font-[Cinzel] font-bold text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight mb-2">
                                {cat.title}
                            </h3>
                            <p className="text-slate-400 text-xs leading-relaxed font-light mb-6">
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
        </div>
    );
}
