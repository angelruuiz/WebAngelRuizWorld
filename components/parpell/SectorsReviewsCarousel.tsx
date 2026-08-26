import React from "react";
import { Star } from "lucide-react";

interface GoogleReview {
  id: number;
  author: string;
  avatarUrl?: string;
  avatarBg: string;
  guideInfo: string;
  date: string;
  sector: string;
  text: string;
  rating: number;
}

const googleReviews: GoogleReview[] = [
  {
    id: 1,
    author: "Valeria Morales",
    avatarUrl: "https://images.unsplash.com/photo-1594824813501-4838e15494d1?auto=format&fit=crop&w=120&h=120&q=80",
    avatarBg: "from-rose-500 to-pink-700",
    guideInfo: "Local Guide · 28 reseñas",
    date: "Hace 4 días",
    sector: "Clínica Estética",
    text: "Increíble cómo ha cambiado la visibilidad de la clínica. Desde que salimos recomendados en ChatGPT cuando la gente busca tratamientos faciales y medicina estética en la zona, las consultas de pacientes de calidad no paran de llegar.",
    rating: 5,
  },
  {
    id: 2,
    author: "Marcos Romero",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    avatarBg: "from-amber-500 to-orange-700",
    guideInfo: "12 reseñas",
    date: "Hace 2 semanas",
    sector: "Gimnasio & CrossFit",
    text: "El día de rodaje con cámara de cine fue una pasada. Los vídeos tienen una calidad brutal de documental y por Instagram no paran de pedir información para apuntarse. Muy buen trabajo.",
    rating: 4,
  },
  {
    id: 3,
    author: "Víctor Chen",
    avatarUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=120&h=120&q=80",
    avatarBg: "from-red-500 to-rose-700",
    guideInfo: "Local Guide · 45 reseñas",
    date: "Hace 1 mes",
    sector: "Restaurante Asiático",
    text: "El trato con los dos socios es impecable. Grabaron nuestros platos y la barra de sushi con una calidad de cine. En dos meses salimos recomendados en ChatGPT cuando buscan dónde cenar ramen o sushi por la zona.",
    rating: 5,
  },
  {
    id: 4,
    author: "Javier Gómez",
    avatarBg: "from-emerald-600 to-teal-800",
    guideInfo: "Local Guide · 19 reseñas",
    date: "Hace 7 meses",
    sector: "Taberna & Restaurante",
    text: "Llevábamos años dependiendo solo del boca a boca. Entre el posicionamiento en ChatGPT cuando buscan dónde comer bien en el sector y los vídeos que nos hicieron, los fines de semana tenemos el comedor completo.",
    rating: 5,
  },
  {
    id: 5,
    author: "Sandra Vidal",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
    avatarBg: "from-purple-500 to-indigo-700",
    guideInfo: "8 reseñas",
    date: "Hace 3 semanas",
    sector: "Peluquería & Color",
    text: "Qué gusto da trabajar con gente tan cercana. No te marean con palabras raras: vienen, graban con un estilazo que flipas y las clientas lo notan nada más entrar.",
    rating: 4,
  },
  {
    id: 6,
    author: "David Parejo",
    avatarUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=120&h=120&q=80",
    avatarBg: "from-blue-500 to-cyan-700",
    guideInfo: "Local Guide · 31 reseñas",
    date: "Hace 5 meses",
    sector: "Barbería",
    text: "Antes la gente se iba a las franquicias de centro comercial. Ahora cuando buscan cortes y arreglo de barba en ChatGPT o Maps salimos los primeros y nos llega gente nueva todas las semanas.",
    rating: 5,
  },
  {
    id: 7,
    author: "Elena Martí",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
    avatarBg: "from-fuchsia-500 to-pink-700",
    guideInfo: "15 reseñas",
    date: "Hace 6 días",
    sector: "Tienda de Ropa",
    text: "Los vídeos verticales tienen un gancho que no había visto en ninguna agencia. Se nota mucho que no delegan en becarios, el trato de tú a tú es de 10.",
    rating: 5,
  },
  {
    id: 8,
    author: "Carlos Barroso",
    avatarUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&h=120&q=80",
    avatarBg: "from-cyan-500 to-blue-700",
    guideInfo: "Local Guide · 52 reseñas",
    date: "Hace 4 meses",
    sector: "Productos Electrónicos",
    text: "Nos auditaron las fugas de clientes y nos configuraron todo para salir en ChatGPT cuando alguien pide presupuestos de equipos. Un acierto absoluto.",
    rating: 4,
  },
  {
    id: 9,
    author: "Ignacio Lledó",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
    avatarBg: "from-slate-500 to-zinc-700",
    guideInfo: "9 reseñas",
    date: "Hace 11 meses",
    sector: "Bufete de Abogados",
    text: "En la abogacía la reputación y la sobriedad lo son todo. El posicionamiento en IA y los vídeos nos han consolidado como despacho de referencia.",
    rating: 5,
  },
  {
    id: 10,
    author: "Tomás Hernández",
    avatarBg: "from-amber-600 to-yellow-800",
    guideInfo: "Local Guide · 16 reseñas",
    date: "Hace 8 meses",
    sector: "Carpintería a Medida",
    text: "Gente seria y trabajadora. Nos montaron la presencia en IA y los vídeos del taller y ahora nos llegan encargos de cocinas y muebles a medida con presupuestos muy buenos.",
    rating: 4,
  },
  {
    id: 11,
    author: "Manuel Ruz",
    avatarUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=120&h=120&q=80",
    avatarBg: "from-orange-500 to-red-700",
    guideInfo: "22 reseñas",
    date: "Hace 1 año",
    sector: "Ferretería Industrial",
    text: "Pensábamos que la IA era solo para empresas de software. Nos equivocamos: los profesionales del sector nos encuentran antes que a los almacenes grandes.",
    rating: 5,
  },
  {
    id: 12,
    author: "Antonio Castillo",
    avatarBg: "from-stone-600 to-neutral-800",
    guideInfo: "Local Guide · 38 reseñas",
    date: "Hace 2 meses",
    sector: "Albañilería & Reformas",
    text: "Trato impecable. Nos grabaron en obra con cámara de cine y la imagen que damos ahora nos permite cerrar presupuestos más altos sin que nos regateen.",
    rating: 5,
  },
  {
    id: 13,
    author: "Santiago Fuentes",
    avatarBg: "from-amber-700 to-yellow-900",
    guideInfo: "11 reseñas",
    date: "Hace 1 año",
    sector: "Ebanistería",
    text: "La delicadeza con la que mostraron nuestro taller y cómo nos encuentra la gente en Google y ChatGPT cuando buscan restaurar muebles antiguos no tiene precio. Muy agradecido a los dos socios.",
    rating: 4,
  },
];

const duplicatedReviews = [...googleReviews, ...googleReviews];

export function SectorsReviewsCarousel() {
  return (
    <section
      id="sectores"
      className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 select-none"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-gradient-to-tr from-[#9E5C6A]/15 via-[#C27A8A]/10 to-purple-950/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-8 sm:mb-14">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#9E5C6A] block mb-3">
          Opiniones Reales en Google
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
          Sectores en los que ya hemos impactado.
        </h2>
        <p className="text-xs sm:text-base text-zinc-300 max-w-lg mx-auto leading-relaxed">
          Desde clínicas y restaurantes hasta talleres artesanos y despachos. Negocios reales que ya reciben clientes gracias a la IA y el vídeo.
        </p>
      </div>

      {/* Mobile Horizontal Touch-Swipe List (< md) */}
      <div className="flex md:hidden flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-zinc-400 px-1 font-mono">
          <span>Desliza para ver más reseñas →</span>
          <span>{googleReviews.length} Casos</span>
        </div>
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 px-1 touch-pan-x scrollbar-none">
          {googleReviews.map((review) => (
            <div key={review.id} className="snap-center shrink-0">
              <GoogleReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Perpetual Track (>= md) with GPU Hardware Compositor Marquee */}
      <div className="hidden md:block relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl group p-1">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#080306] via-[#080306]/85 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#080306] via-[#080306]/85 to-transparent z-20 pointer-events-none" />

        <div className="flex gap-4 sm:gap-5 animate-marquee hover:[animation-play-state:paused] py-3 will-change-transform">
          {duplicatedReviews.map((review, idx) => (
            <GoogleReviewCard key={`${review.id}-${idx}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GoogleReviewCard({ review }: { review: GoogleReview }) {
  const initial = review.author.charAt(0).toUpperCase();

  return (
    <div className="w-[260px] sm:w-[285px] md:w-[295px] shrink-0 p-5 rounded-2xl bg-[#FBF9F5] hover:bg-[#FFFFFF] border border-[#E8E1D5] hover:border-[#9E5C6A]/50 shadow-xl shadow-black/50 transition-all flex flex-col justify-between text-left select-none">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {review.avatarUrl ? (
              <img
                src={review.avatarUrl}
                alt={review.author}
                className="w-10 h-10 rounded-full object-cover shadow-sm shrink-0 border border-zinc-300"
                loading="lazy"
              />
            ) : (
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-tr ${review.avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0`}
              >
                {initial}
              </div>
            )}

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                  {review.author}
                </span>
              </div>
              <span className="text-[11px] text-zinc-500 font-medium block leading-tight">
                {review.guideInfo}
              </span>
            </div>
          </div>

          <div className="w-5 h-5 shrink-0 flex items-center justify-center" title="Reseña verificada de Google">
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < review.rating
                    ? "fill-[#F59E0B] text-[#F59E0B]"
                    : "fill-zinc-300 text-zinc-300"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-zinc-500 font-medium">{review.date}</span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-normal">
          «{review.text}»
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[#EBE3D7] flex items-center justify-between">
        <span className="text-xs font-bold text-[#883C4D] font-mono uppercase tracking-wider">
          {review.sector}
        </span>
        <span className="text-[10px] font-mono text-zinc-500 font-medium flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Verificada</span>
        </span>
      </div>
    </div>
  );
}
