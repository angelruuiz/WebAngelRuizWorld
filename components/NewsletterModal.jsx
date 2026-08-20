"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Mail } from './Icons';

export default function NewsletterModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState("idle");
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeoydngl";

    useEffect(() => {
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
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-xl bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
                    >
                        <button 
                            onClick={handleClose}
                            className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8 md:p-12">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                                    <Sparkles className="w-6 h-6 text-amber-500" />
                                </div>
                                <h2 className="text-2xl md:text-4xl font-[Cinzel] text-white mb-4 uppercase tracking-tighter leading-tight">
                                    ¿Te gustaría vivir<br/><span className="text-amber-500">experiencias únicas?</span>
                                </h2>
                                <p className="text-slate-400 font-light text-sm md:text-base mb-8 leading-relaxed max-w-md mx-auto">
                                    Únete al Círculo Interno de Ángel Ruiz. Recibe ideas exclusivas para tus eventos y sé el primero en conocer mis próximos shows.
                                </p>

                                {status === "success" ? (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-green-500/10 border border-green-500/30 p-6 rounded-2xl"
                                    >
                                        <p className="text-green-400 font-bold tracking-widest uppercase text-sm">¡Bienvenido al Círculo!</p>
                                        <p className="text-slate-300 text-xs mt-1">Tu entrada VIP está confirmada.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input type="hidden" name="_subject" value="NUEVA SUSCRIPCIÓN (POPUP BIENVENIDA)" />
                                        <div className="relative">
                                            <input 
                                                required 
                                                name="email" 
                                                type="email" 
                                                placeholder="Tu mejor email..." 
                                                className="w-full bg-slate-950/50 border border-white/10 rounded-full py-4 px-8 text-white focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                                            />
                                            <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                                        </div>
                                        <button 
                                            disabled={status === "submitting"}
                                            type="submit" 
                                            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-full transition-all uppercase tracking-widest text-xs shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                                        >
                                            {status === "submitting" ? "Enviando..." : "Quiero unirme al círculo"}
                                        </button>
                                        <p className="text-[9px] text-slate-600 uppercase tracking-widest mt-4">
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
