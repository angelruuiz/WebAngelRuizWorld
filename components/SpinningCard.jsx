"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Componente para emitir chispas que caen simulando gravedad
const SparkleTrail = () => {
    const [sparks, setSparks] = useState([]);

    useEffect(() => {
        let sparkId = 0;
        const interval = setInterval(() => {
            // Generar chispas en un radio alrededor del centro (donde las esquinas de la carta barren el aire)
            const angle = Math.random() * Math.PI * 2;
            const radius = 50 + Math.random() * 80;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            
            // Altura variable (la carta barre desde el medio hasta arriba)
            const startY = -50 - Math.random() * 150; 
            
            setSparks(prev => {
                // Mantener máximo 30 chispas activas para rendimiento
                const current = prev.length > 30 ? prev.slice(1) : prev;
                return [...current, { id: sparkId++, x, z, startY, duration: 1.5 + Math.random() * 2 }];
            });
        }, 150); // Emitir nueva chispa cada 150ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none transform-style-3d">
            <AnimatePresence>
                {sparks.map(spark => (
                    <motion.div
                        key={spark.id}
                        initial={{ opacity: 0, x: spark.x, y: spark.startY, z: spark.z, scale: 0 }}
                        animate={{ 
                            opacity: [0, 1, 0], 
                            y: spark.startY + 100 + Math.random() * 50, // Caen hacia abajo (gravedad)
                            x: spark.x + (Math.random() - 0.5) * 40, // Deriva por el viento
                            scale: [0, Math.random() * 1.5 + 0.5, 0],
                            rotate: Math.random() * 360
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: spark.duration, ease: "easeOut" }}
                        className="absolute left-1/2 top-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#d4a853] rounded-full shadow-[0_0_10px_rgba(212,168,83,0.8)]"
                        style={{ transformStyle: 'preserve-3d' }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default function SpinningCard() {
    // Dimensiones de la carta
    const w = 240;
    const h = 360;
    
    // Matemáticas para balancear la carta sobre su vértice inferior izquierdo
    // Ángulo de la diagonal = atan(width / height)
    const angleRad = Math.atan(w / h);
    const angleDeg = angleRad * (180 / Math.PI); // ~33.69 grados
    
    // Distancia desde el centro hasta el vértice inferior izquierdo (la mitad de la diagonal)
    const diagonalHalf = Math.sqrt(Math.pow(w/2, 2) + Math.pow(h/2, 2)); // ~216.33 px

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center perspective-[1500px]">
            
            {/* Contenedor Giratorio Global (Gira sobre el eje Y) */}
            <motion.div 
                animate={{ rotateY: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="relative flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
            >
                
                {/* Rastro de chispas globales (giran con la carta y caen) */}
                <SparkleTrail />

                {/* La Carta en sí, posicionada para que su vértice quede exactamente en el centro (0,0) */}
                <div 
                    className="relative transform-style-3d shadow-2xl"
                    style={{ 
                        width: w, 
                        height: h,
                        // 1. Inclinamos la carta para que la diagonal sea completamente vertical
                        // 2. La subimos exactamente la mitad de su diagonal para que el vértice inferior toque el "suelo" (centro del eje de rotación)
                        transform: `rotateZ(${angleDeg}deg) translateY(${-diagonalHalf}px)`,
                    }}
                >
                    {/* Frontal: Reina de Corazones (Diseño CSS Puro tipo Bicycle) */}
                    <div 
                        className="absolute inset-0 backface-hidden bg-slate-100 rounded-xl overflow-hidden"
                        style={{ border: '8px solid white' }}
                    >
                        {/* Patrón interior sutil para darle textura de carta real */}
                        <div className="absolute inset-0 border-2 border-red-500 m-2 rounded-lg opacity-80 flex flex-col justify-between p-2">
                            {/* Esquina Sup Izq */}
                            <div className="text-red-600 font-[Cinzel] font-bold text-2xl flex flex-col items-center leading-none">
                                <span>Q</span>
                                <span className="text-xl">♥</span>
                            </div>
                            
                            {/* Centro (Arte de la Reina minimalista/elegante) */}
                            <div className="flex-grow flex items-center justify-center relative">
                                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                    <span className="text-[10rem] text-red-600">♥</span>
                                </div>
                                <div className="z-10 text-center">
                                    <span className="text-5xl md:text-6xl text-red-600 drop-shadow-md block mb-2">♕</span>
                                    <div className="h-px w-16 bg-red-600 mx-auto opacity-50"></div>
                                    <span className="text-5xl md:text-6xl text-red-600 drop-shadow-md block mt-2 rotate-180">♕</span>
                                </div>
                            </div>

                            {/* Esquina Inf Der */}
                            <div className="text-red-600 font-[Cinzel] font-bold text-2xl flex flex-col items-center leading-none rotate-180">
                                <span>Q</span>
                                <span className="text-xl">♥</span>
                            </div>
                        </div>
                    </div>

                    {/* Dorso: Logo minimalista */}
                    <div 
                        className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]"
                        style={{ 
                            transform: 'rotateY(180deg)',
                            border: '8px solid white'
                        }}
                    >
                        {/* Patrón de dorso clásico bicycle (usando un borde ornamental CSS) */}
                        <div className="absolute inset-2 border-2 border-[#d4a853] rounded-lg opacity-30"></div>
                        <div className="absolute inset-3 border border-[#d4a853] rounded-md opacity-20"></div>
                        
                        {/* Logo en el centro */}
                        <img 
                            src="/images/logo-pequeno.webp" 
                            alt="Logo Dorso" 
                            className="w-24 h-24 object-contain brightness-150 contrast-125 sepia-[0.3]"
                        />
                    </div>
                    
                    {/* Brillo 3D (Capa superpuesta que refleja luz según el giro) */}
                    <motion.div 
                        className="absolute inset-0 rounded-xl pointer-events-none opacity-50 mix-blend-overlay"
                        style={{
                            background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.8) 25%, transparent 30%)',
                            transform: 'translateZ(1px)' // Mantenerlo por encima de ambas caras
                        }}
                        animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                    />
                </div>
                
                {/* Sombra en el suelo para anclarla visualmente */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-black/60 blur-md rounded-[100%] shadow-[0_0_20px_rgba(212,168,83,0.3)]"></div>
            </motion.div>
        </div>
    );
}
