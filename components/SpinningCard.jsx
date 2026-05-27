"use client";

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Sistema de Chispas Mágicas ──────────────────────────────────────────
const SparkleTrail = () => {
    const [sparks, setSparks] = useState([]);

    useEffect(() => {
        let sparkId = 0;
        // Emitir chispas cada 60ms (unas 16 chispas/segundo)
        const interval = setInterval(() => {
            const newSparks = [];
            // Emitir 2-3 chispas a la vez para un trail denso
            const count = 2 + Math.floor(Math.random() * 2);
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const radius = 30 + Math.random() * 120;
                newSparks.push({
                    id: sparkId++,
                    x: Math.cos(angle) * radius,
                    y: -60 - Math.random() * 200,
                    size: Math.random() * 4 + 1,
                    duration: 1 + Math.random() * 2.5,
                    glow: Math.random() > 0.6, // 40% de las chispas tienen glow extra
                });
            }
            setSparks(prev => {
                const current = prev.length > 60 ? prev.slice(prev.length - 40) : prev;
                return [...current, ...newSparks];
            });
        }, 60);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
            <AnimatePresence>
                {sparks.map(spark => (
                    <motion.div
                        key={spark.id}
                        initial={{ 
                            opacity: 0, 
                            x: spark.x, 
                            y: spark.y, 
                            scale: 0 
                        }}
                        animate={{ 
                            opacity: [0, 1, 0.8, 0], 
                            y: spark.y + 80 + Math.random() * 60,
                            x: spark.x + (Math.random() - 0.5) * 60,
                            scale: [0, 1.2, 0.6, 0],
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: spark.duration, ease: "easeOut" }}
                        className="absolute left-1/2 top-1/2 rounded-full"
                        style={{
                            width: spark.size,
                            height: spark.size,
                            backgroundColor: spark.glow ? '#e8cc8a' : '#d4a853',
                            boxShadow: spark.glow 
                                ? `0 0 ${spark.size * 4}px rgba(212,168,83,0.9), 0 0 ${spark.size * 8}px rgba(232,204,138,0.4)` 
                                : `0 0 ${spark.size * 3}px rgba(212,168,83,0.6)`,
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

// ─── Cara Frontal: Reina de Corazones Bicycle ────────────────────────────
const QueenFront = () => (
    <div className="absolute inset-0 bg-white rounded-xl overflow-hidden" style={{ border: '6px solid white' }}>
        {/* Borde interior rojo clásico Bicycle */}
        <div className="absolute inset-1 border border-red-700/30 rounded-lg">
            {/* Esquina Superior Izquierda */}
            <div className="absolute top-2 left-3 flex flex-col items-center leading-none">
                <span className="text-red-600 font-serif font-bold text-lg">Q</span>
                <span className="text-red-600 text-sm -mt-0.5">♥</span>
            </div>

            {/* Esquina Superior Derecha */}
            <div className="absolute top-2 right-3 flex flex-col items-center leading-none">
                <span className="text-red-600 font-serif font-bold text-lg">Q</span>
                <span className="text-red-600 text-sm -mt-0.5">♥</span>
            </div>
            
            {/* Centro - Diseño clásico de la reina */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                    
                    {/* Marco decorativo central */}
                    <div className="relative w-[70%] h-[75%] border border-red-600/20 rounded-sm overflow-hidden bg-gradient-to-b from-red-50 to-amber-50/50">
                        
                        {/* Mitad superior - Reina */}
                        <div className="h-1/2 flex flex-col items-center justify-center border-b border-red-600/20 relative overflow-hidden">
                            {/* Fondo decorativo */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute top-1 left-1 text-red-600 text-[3rem]">♥</div>
                                <div className="absolute top-1 right-1 text-red-600 text-[3rem]">♥</div>
                            </div>
                            
                            {/* Corona */}
                            <div className="text-amber-500 text-2xl mb-0 drop-shadow-sm">👑</div>
                            
                            {/* Cara de la reina (estilizada) */}
                            <div className="relative">
                                <span className="text-3xl text-red-600 font-serif font-bold drop-shadow-sm">Q</span>
                            </div>
                            
                            {/* Corazón central */}
                            <span className="text-red-600 text-xl mt-0">♥</span>
                            
                            {/* Detalles laterales */}
                            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-40">
                                <span className="text-red-600 text-[8px]">♥</span>
                                <span className="text-red-600 text-[8px]">♥</span>
                            </div>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-40">
                                <span className="text-red-600 text-[8px]">♥</span>
                                <span className="text-red-600 text-[8px]">♥</span>
                            </div>
                        </div>
                        
                        {/* Mitad inferior - Reina invertida (espejo) */}
                        <div className="h-1/2 flex flex-col items-center justify-center relative overflow-hidden rotate-180">
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute top-1 left-1 text-red-600 text-[3rem]">♥</div>
                                <div className="absolute top-1 right-1 text-red-600 text-[3rem]">♥</div>
                            </div>
                            <div className="text-amber-500 text-2xl mb-0 drop-shadow-sm">👑</div>
                            <div className="relative">
                                <span className="text-3xl text-red-600 font-serif font-bold drop-shadow-sm">Q</span>
                            </div>
                            <span className="text-red-600 text-xl mt-0">♥</span>
                            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-40">
                                <span className="text-red-600 text-[8px]">♥</span>
                                <span className="text-red-600 text-[8px]">♥</span>
                            </div>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-40">
                                <span className="text-red-600 text-[8px]">♥</span>
                                <span className="text-red-600 text-[8px]">♥</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Esquina Inferior Izquierda (invertida) */}
            <div className="absolute bottom-2 left-3 flex flex-col items-center leading-none rotate-180">
                <span className="text-red-600 font-serif font-bold text-lg">Q</span>
                <span className="text-red-600 text-sm -mt-0.5">♥</span>
            </div>

            {/* Esquina Inferior Derecha (invertida) */}
            <div className="absolute bottom-2 right-3 flex flex-col items-center leading-none rotate-180">
                <span className="text-red-600 font-serif font-bold text-lg">Q</span>
                <span className="text-red-600 text-sm -mt-0.5">♥</span>
            </div>
        </div>
    </div>
);

// ─── Dorso: Negro puro + Logo grande ─────────────────────────────────────
const CardBack = () => (
    <div 
        className="absolute inset-0 rounded-xl overflow-hidden flex items-center justify-center"
        style={{ 
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            backgroundColor: '#000000',
            border: '6px solid #1a1a1a'
        }}
    >
        {/* Borde ornamental sutil */}
        <div className="absolute inset-2 border border-[#d4a853]/15 rounded-lg"></div>
        
        {/* Logo centrado, grande */}
        <img 
            src="/images/logo-pequeno.webp" 
            alt="Ángel Ruiz" 
            className="w-32 h-32 md:w-36 md:h-36 object-contain drop-shadow-[0_0_20px_rgba(212,168,83,0.3)]"
        />
    </div>
);

// ─── Componente Principal: Carta girando sobre su esquina ────────────────
export default function SpinningCard() {
    const cardW = 200;
    const cardH = 300;
    
    return (
        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
            
            {/* Emisor de chispas mágicas */}
            <SparkleTrail />
            
            {/* 
                Estructura de la rotación:
                1. Contenedor exterior: posiciona el punto de anclaje en el centro de la pantalla
                2. Contenedor de giro: rota infinitamente sobre Y (el eje vertical real)
                3. Contenedor de inclinación: inclina la carta para que se apoye en su esquina
                4. La carta: las dos caras (front + back)
            */}
            
            {/* Contenedor de giro sobre Y (el giro de peonza) */}
            <motion.div
                animate={{ rotateY: 360 }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                style={{ 
                    transformStyle: 'preserve-3d',
                    // El origen de la transformación es el punto donde la esquina toca el suelo
                    transformOrigin: 'center center',
                }}
            >
                {/* Contenedor de inclinación: la carta se inclina ~33.7° para apoyarse en la esquina */}
                <div style={{
                    width: cardW,
                    height: cardH,
                    transformStyle: 'preserve-3d',
                    // Primero movemos el origen al vértice inferior izquierdo de la carta
                    transformOrigin: '0% 100%',
                    // Luego inclinamos: rotateZ pone la diagonal vertical
                    // y translateY sube la carta para que la esquina quede en el punto de giro
                    transform: `translateX(-${cardW/2}px) translateY(-${cardH}px) rotateZ(${Math.atan(cardW / cardH) * (180 / Math.PI)}deg)`,
                }}>
                    {/* Cara frontal: Reina de Corazones */}
                    <div style={{ backfaceVisibility: 'hidden' }}>
                        <QueenFront />
                    </div>
                    
                    {/* Dorso: Logo */}
                    <CardBack />
                    
                    {/* Reflejo de luz que barre la superficie */}
                    <div 
                        className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <motion.div
                            className="absolute inset-0 opacity-30"
                            style={{
                                background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.5) 40%, transparent 45%)',
                            }}
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                        />
                    </div>
                </div>
            </motion.div>

            {/* Sombra proyectada en el suelo */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(50%-10px)]">
                <motion.div 
                    className="bg-black/50 rounded-[100%] blur-lg"
                    style={{ width: 60, height: 12 }}
                    animate={{ 
                        scaleX: [1, 1.3, 1],
                        opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                />
                {/* Punto de luz dorado bajo la carta */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#d4a853] rounded-full blur-sm opacity-40"></div>
            </div>
        </div>
    );
}
