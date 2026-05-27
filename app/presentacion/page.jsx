import Link from 'next/link';
import SpinningCard from '@/components/SpinningCard';
import { ParticleBackground, MagicCursor } from '@/components/VisualEffects';

export const metadata = {
    title: 'Presentación Oficial | Ángel Ruiz',
    description: 'Conoce a Ángel Ruiz, mago e ilusionista profesional. Descubre el impacto de la verdadera magia.',
};

export default function PresentacionPage() {
    return (
        <main className="bg-slate-950 h-screen text-slate-200 relative overflow-hidden flex flex-col">
            <ParticleBackground />
            <MagicCursor />
            
            {/* Nav minimalista - compacto */}
            <header className="w-full px-6 md:px-12 py-4 flex justify-between items-center relative z-20 shrink-0">
                <Link href="/" className="group flex items-center gap-2">
                    <span className="text-[#d4a853] font-[Cinzel] text-lg md:text-xl font-bold tracking-widest">ÁNGEL RUIZ</span>
                </Link>
                <Link 
                    href="/contacto" 
                    className="glass-pill text-[#d4a853] hover:text-white transition-colors text-xs uppercase tracking-widest"
                >
                    Contactar
                </Link>
            </header>

            {/* Layout Principal - 100% del viewport restante, sin scroll */}
            <div className="flex-grow w-full max-w-[1900px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 relative z-10 pb-4">
                
                {/* Columna Izquierda: Vídeo Presentación */}
                <div className="w-full lg:w-[22%] h-[160px] lg:h-[75vh] glass-surface rounded-2xl lg:rounded-3xl border border-white/5 flex flex-col items-center justify-center p-6 text-center group hover:border-[#d4a853]/30 transition-all duration-500 relative overflow-hidden shrink-0">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#d4a853]/10 flex items-center justify-center mb-3 lg:mb-6 group-hover:scale-110 transition-transform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 lg:w-8 lg:h-8 text-[#d4a853]">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="font-[Cinzel] text-base lg:text-lg text-white mb-1 lg:mb-2 tracking-widest">El Ilusionista</h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed hidden lg:block">Vídeo de presentación</p>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#d4a853]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Columna Central: Carta 3D */}
                <div className="w-full lg:w-[56%] h-[350px] lg:h-[75vh] flex items-center justify-center relative shrink-0">
                    <SpinningCard />
                </div>

                {/* Columna Derecha: Reel */}
                <div className="w-full lg:w-[22%] h-[160px] lg:h-[75vh] glass-surface rounded-2xl lg:rounded-3xl border border-white/5 flex flex-col items-center justify-center p-6 text-center group hover:border-[#d4a853]/30 transition-all duration-500 relative overflow-hidden shrink-0">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#d4a853]/10 flex items-center justify-center mb-3 lg:mb-6 group-hover:scale-110 transition-transform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 lg:w-8 lg:h-8 text-[#d4a853]">
                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="font-[Cinzel] text-base lg:text-lg text-white mb-1 lg:mb-2 tracking-widest">Reacciones</h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed hidden lg:block">Recopilatorio de momentos</p>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#d4a853]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

            </div>

            {/* Fondo decorativo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-[#d4a853] rounded-full opacity-[0.02] blur-[120px] pointer-events-none"></div>
        </main>
    );
}
