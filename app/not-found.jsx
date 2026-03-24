import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-[Cinzel] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Fondo animado sutil */}
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/20 via-slate-950 to-slate-950"></div>
        
        <div className="relative z-10 space-y-8 max-w-2xl">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 drop-shadow-lg mb-2">404</h1>
            <h2 className="text-2xl md:text-4xl text-white tracking-widest font-bold leading-relaxed">Vaya... esta página ha<br/>desaparecido por arte de magia.</h2>
            <p className="text-slate-400 font-sans text-lg font-light max-w-md mx-auto pt-4 leading-relaxed">Parece que el truco salió mal o el enlace que buscas ya no existe en este universo. No te preocupes, yo te devuelvo al escenario principal.</p>
            
            <div className="pt-10">
                <Link href="/" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold rounded-full hover:from-amber-500 hover:to-amber-400 transition-all uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                    Volver a la Portada Mágica
                </Link>
            </div>
        </div>
    </div>
  );
}
