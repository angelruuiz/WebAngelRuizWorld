import Link from 'next/link';
import InteractiveCardDeck from '@/components/InteractiveCardDeck';
import { ParticleBackground, MagicCursor } from '@/components/VisualEffects';

export const metadata = {
    title: { absolute: 'Experiencia 3D - Ángel Ruiz' },
    description: 'Prototipo interactivo de galería 3D con físicas realistas.',
    robots: {
        index: false,
        follow: false
    }
};

export default function Galeria2Page() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-200 relative overflow-hidden flex flex-col">
            <ParticleBackground />
            <MagicCursor />
            
            {/* Header / Nav minimalista */}
            <header className="w-full p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-20">
                <div className="text-center md:text-left">
                    <h1 className="text-xl md:text-3xl font-[Cinzel] text-white font-bold tracking-widest uppercase">
                        VALORACIONES <span className="text-[#d4a853]">3D</span>
                    </h1>
                    <p className="text-slate-400 text-xs tracking-[0.1em] uppercase mt-2 max-w-md">
                        Puedes mover y tirar las cartas libremente por la mesa. <strong className="text-amber-500">Haz clic</strong> en cualquiera de ellas para leer la reseña completa.
                    </p>
                </div>
                <Link 
                    href="/" 
                    className="glass-pill text-[#d4a853] hover:text-white transition-colors whitespace-nowrap"
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
