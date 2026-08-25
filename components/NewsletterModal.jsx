"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Mail } from './Icons';

export default function NewsletterModal() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState("idle");
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeoydngl";

    useEffect(() => {
        if (pathname?.startsWith('/parpell')) return;
        // Verificar si ya se ha mostrado o si el usuario lo cerró
        const hasShown = localStorage.getItem('newsletter_modal_v1');
        
        if (!hasShown) {
            // Esperar 8 segundos antes de mostrarlo para no ser intrusivo
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('newsletter_modal_v1', 'true');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");
        
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setStatus("success");
                setTimeout(handleClose, 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-40 max-w-sm sm:max-w-md w-[calc(100%-3rem)] pointer-events-none">
                    {/* Floating Card Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="pointer-events-auto relative w-full bg-slate-900/95 backdrop-blur-xl border border-amber-500/30 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.7)] overflow-hidden"
                    >
                        <button 
                            onClick={handleClose}
                            aria-label="Cerrar aviso"
                            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-1.5 transition-colors z-10 cursor-pointer"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="p-6 sm:p-7">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 mb-3">
                                    <Sparkles className="w-5 h-5 text-amber-500" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-[Cinzel] text-white mb-2 uppercase tracking-tight leading-tight">
                                    ¿Te gustaría vivir<br/><span className="text-amber-500">experiencias únicas?</span>
                                </h2>
                                <p className="text-slate-400 font-light text-xs sm:text-sm mb-5 leading-relaxed max-w-xs mx-auto">
                                    Únete al Círculo Interno de Ángel Ruiz. Recibe ideas exclusivas para tus eventos y sé el primero en conocer mis próximos shows.
                                </p>

                                {status === "success" ? (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl"
                                    >
                                        <p className="text-green-400 font-bold tracking-widest uppercase text-xs">¡Bienvenido al Círculo!</p>
                                        <p className="text-slate-300 text-[11px] mt-1">Tu entrada VIP está confirmada.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        <input type="hidden" name="_subject" value="NUEVA SUSCRIPCIÓN (POPUP BIENVENIDA)" />
                                        <div className="relative">
                                            <input 
                                                required 
                                                name="email" 
                                                type="email" 
                                                placeholder="Tu mejor email..." 
                                                aria-label="Correo electrónico para suscripción"
                                                className="w-full bg-slate-950/60 border border-white/10 rounded-full py-3 pl-5 pr-10 text-white focus:outline-none focus:border-amber-500/50 transition-all text-xs"
                                            />
                                            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        </div>
                                        <button 
                                            disabled={status === "submitting"}
                                            type="submit" 
                                            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3 rounded-full transition-all uppercase tracking-widest text-[11px] shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            {status === "submitting" ? "Enviando..." : "Quiero unirme al círculo"}
                                        </button>
                                        <p className="text-[9px] text-slate-500 uppercase tracking-widest mt-2">
                                            Sin spam. Solo magia real. Puedes darte de baja cuando quieras.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
