import Link from 'next/link';
import GabineteCuriosidades from '@/components/GabineteCuriosidades';

export const metadata = {
    title: 'Gabinete 3D | Prueba',
    robots: {
        index: false,
        follow: false
    }
};

export default function GabinetePage() {
    return (
        <main className="bg-[#0a0a0a] h-screen w-full relative flex flex-col overflow-hidden">
            {/* Header Mínimo */}
            <header className="absolute top-0 w-full p-8 flex justify-between items-center z-20 pointer-events-none">
                <div className="flex flex-col gap-1">
                    <h1 className="text-[#d4a853] font-[Cinzel] text-xl font-bold tracking-[0.2em] pointer-events-auto">
                        GABINETE 3D
                    </h1>
                    <p className="text-slate-500 text-xs tracking-widest uppercase">Prueba Técnica (Three.js)</p>
                </div>
                <Link 
                    href="/" 
                    className="glass-pill text-[#d4a853] hover:text-white transition-colors text-xs uppercase tracking-widest pointer-events-auto"
                >
                    Volver
                </Link>
            </header>

            {/* Escena 3D */}
            <div className="w-full h-full relative z-10 cursor-move">
                <GabineteCuriosidades />
            </div>

            {/* Footer Informativo */}
            <div className="absolute bottom-0 w-full p-8 flex flex-col md:flex-row justify-center md:justify-between items-end z-20 pointer-events-none gap-4">
                <div className="text-slate-400 text-xs font-mono space-y-1">
                    <p>RENDER: WebGL / R3F</p>
                    <p>SHADING: MeshPhysicalMaterial</p>
                    <p>LIGHTING: Volumetric SpotLight + Environment Map</p>
                </div>
                
                <div className="flex gap-8 text-center">
                    <div className="flex flex-col items-center opacity-70">
                        <span className="text-white font-[Cinzel] tracking-widest text-sm">SHOW</span>
                        <span className="text-[#d4a853] text-[10px] tracking-widest">LA CARTA</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-white font-[Cinzel] tracking-widest text-sm">EMPRESAS</span>
                        <span className="text-[#d4a853] text-[10px] tracking-widest">LA VARITA</span>
                    </div>
                    <div className="flex flex-col items-center opacity-70">
                        <span className="text-white font-[Cinzel] tracking-widest text-sm">BODAS</span>
                        <span className="text-[#d4a853] text-[10px] tracking-widest">LOS ANILLOS</span>
                    </div>
                </div>
            </div>
            
            {/* Viñeteado oscuro en los bordes para más misterio */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#050505_100%)] pointer-events-none z-15"></div>
        </main>
    );
}
