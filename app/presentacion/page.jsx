import Link from 'next/link';
import SpinningCard from '@/components/SpinningCard';
import { ParticleBackground, MagicCursor } from '@/components/VisualEffects';

export const metadata = {
    title: 'Presentación Oficial | Ángel Ruiz',
    description: 'Conoce a Ángel Ruiz, mago e ilusionista profesional. Descubre el impacto de la verdadera magia.',
};

export default function PresentacionPage() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-200 relative overflow-hidden flex flex-col">
            <ParticleBackground />
            <MagicCursor />
            
            {/* Nav minimalista */}
            <header className="w-full p-6 md:p-10 flex justify-between items-center relative z-20">
                <Link href="/" className="group flex items-center gap-2">
                    <span className="text-[#d4a853] font-[Cinzel] text-xl font-bold tracking-widest">ÁNGEL RUIZ</span>
                </Link>
                <Link 
                    href="/contacto" 
                    className="glass-pill text-[#d4a853] hover:text-white transition-colors text-sm uppercase tracking-widest"
                >
                    Contactar
                </Link>
            </header>

            {/* Layout Principal de 3 Columnas */}
            <div className="flex-grow w-full max-w-[1800px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-center gap-8 relative z-10 py-10">
                
                {/* Columna Izquierda: Video Presentación */}
                <div className="w-full lg:w-1/4 h-[400px] lg:h-[600px] glass-surface rounded-3xl border border-white/5 flex flex-col items-center justify-center p-8 text-center group hover:border-[#d4a853]/30 transition-colors relative overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-[#d4a853]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#d4a853]">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="font-[Cinzel] text-xl text-white mb-2 tracking-widest">El Ilusionista</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">Espacio reservado para vídeo de presentación (Talking Head).</p>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#d4a853]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Columna Central: Carta 3D Giratoria */}
                <div className="w-full lg:w-2/4 flex items-center justify-center relative">
                    <SpinningCard />
                </div>

                {/* Columna Derecha: Reel / Reacciones */}
                <div className="w-full lg:w-1/4 h-[400px] lg:h-[600px] glass-surface rounded-3xl border border-white/5 flex flex-col items-center justify-center p-8 text-center group hover:border-[#d4a853]/30 transition-colors relative overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-[#d4a853]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#d4a853]">
                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="font-[Cinzel] text-xl text-white mb-2 tracking-widest">Reacciones</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">Espacio reservado para recopilatorio de reacciones reales.</p>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#d4a853]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

            </div>

            {/* Fondo decorativo Liquid Glass */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-[#d4a853] rounded-full opacity-[0.02] blur-[120px] pointer-events-none"></div>
        </main>
    );
}
