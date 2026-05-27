import Link from 'next/link';
import InteractiveCardDeck from '@/components/InteractiveCardDeck';
import { ParticleBackground } from '@/components/VisualEffects';

export const metadata = {
    title: 'Experiencia 3D - Ángel Ruiz',
    description: 'Prototipo interactivo de galería 3D con físicas realistas.',
    robots: {
        index: false, // Ocultar a Google por ahora por ser un prototipo
        follow: false
    }
};

export default function Galeria2Page() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-200 relative overflow-hidden flex flex-col">
            <ParticleBackground />
            
            {/* Header / Nav minimalista */}
            <header className="w-full p-6 md:p-10 flex justify-between items-center relative z-20">
                <div>
                    <h1 className="text-xl md:text-3xl font-[Cinzel] text-white font-bold tracking-widest uppercase">
                        LAB <span className="text-[#d4a853]">3D</span>
                    </h1>
                    <p className="text-slate-500 text-xs tracking-[0.2em] uppercase mt-1">Prototipo Interactivo</p>
                </div>
                <Link 
                    href="/" 
                    className="glass-pill text-[#d4a853] hover:text-white transition-colors"
                >
                    Volver al Inicio
                </Link>
            </header>

            {/* Canvas 3D */}
            <div className="flex-grow w-full relative z-10 flex items-center justify-center">
                <InteractiveCardDeck />
            </div>

            {/* Fondo decorativo Liquid Glass */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#d4a853] rounded-full opacity-[0.03] blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10"></div>
        </main>
    );
}
