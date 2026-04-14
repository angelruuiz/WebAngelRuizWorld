"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verificar si ya se ha aceptado
        const hasAccepted = localStorage.getItem('cookies_accepted');
        if (!hasAccepted) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        setIsVisible(false);
        localStorage.setItem('cookies_accepted', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-6 left-6 right-6 z-[200] md:left-auto md:max-w-md"
                >
                    <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl">🍪</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-[Cinzel] text-sm uppercase tracking-widest font-bold mb-1">Aviso de Cookies</h4>
                                    <p className="text-slate-400 text-[11px] leading-relaxed">
                                        Utilizamos cookies para mejorar tu experiencia y analizar el tráfico. Al continuar navegando, aceptas nuestra política de privacidad.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between gap-4 pt-2">
                                <button 
                                    onClick={() => setIsVisible(false)}
                                    className="text-slate-500 hover:text-white text-[10px] uppercase font-bold tracking-widest transition-colors"
                                >
                                    Configurar
                                </button>
                                <button 
                                    onClick={handleAccept}
                                    className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 transition-all shadow-lg"
                                >
                                    Aceptar todo
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
