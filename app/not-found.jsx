import Link from 'next/link';

export const metadata = {
  title: { absolute: 'Página no encontrada (404) | Ángel Ruiz Ilusionista' },
  description: 'La página solicitada no está disponible. Explora los espectáculos de magia para bodas, empresas y eventos en Madrid de Ángel Ruiz.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-[Cinzel] flex flex-col items-center justify-center text-center px-4 py-16 relative overflow-hidden">
      {/* Fondo animado sutil */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/20 via-slate-950 to-slate-950" />
      
      <div className="relative z-10 space-y-8 max-w-3xl">
        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 drop-shadow-lg mb-2">404</h1>
        <h2 className="text-2xl md:text-4xl text-white tracking-widest font-bold leading-relaxed">
          Vaya... esta página ha<br />desaparecido por arte de magia.
        </h2>
        <p className="text-slate-400 font-sans text-base md:text-lg font-light max-w-lg mx-auto pt-2 leading-relaxed">
          Parece que el truco salió mal o la dirección que buscas ha cambiado. Aquí tienes los accesos directos a los espectáculos principales:
        </p>

        {/* Accesos rápidos transaccionales para recuperar Crawl Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto pt-4 text-left font-sans">
          <Link 
            href="/particulares/bodas" 
            className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.08] transition-all group"
          >
            <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block mb-1">💍 Bodas</span>
            <span className="text-sm font-[Cinzel] font-bold text-white block mb-1 group-hover:text-amber-300 transition-colors">Magia en Cóctel</span>
            <span className="text-slate-400 text-xs block">Para celebraciones y fincas en Madrid.</span>
          </Link>
          <Link 
            href="/empresas" 
            className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.08] transition-all group"
          >
            <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block mb-1">🏢 Empresas</span>
            <span className="text-sm font-[Cinzel] font-bold text-white block mb-1 group-hover:text-amber-300 transition-colors">Eventos & Cenas</span>
            <span className="text-slate-400 text-xs block">Networking y team building corporativo.</span>
          </Link>
          <Link 
            href="/contratar-mago-madrid" 
            className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.08] transition-all group"
          >
            <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block mb-1">⚡ Tarifas</span>
            <span className="text-sm font-[Cinzel] font-bold text-white block mb-1 group-hover:text-amber-300 transition-colors">Precios Directos</span>
            <span className="text-slate-400 text-xs block">Sin agencias ni intermediarios.</span>
          </Link>
        </div>
        
        <div className="pt-6 flex flex-wrap justify-center gap-4">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold rounded-full hover:from-amber-500 hover:to-amber-400 transition-all uppercase tracking-widest text-xs shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Volver al Inicio
          </Link>
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 border border-white/15 transition-all uppercase tracking-widest text-xs hover:scale-105"
          >
            Explorar el Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
