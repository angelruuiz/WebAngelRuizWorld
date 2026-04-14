"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail } from './Icons';

export default function NewsletterForm({ isCompact = false }) {
    const [status, setStatus] = useState("idle");
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeoydngl";

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
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-green-500/10 border border-green-500/30 p-8 rounded-[2rem] text-center my-12">
                <p className="text-green-400 font-bold tracking-widest uppercase text-sm">¡Bienvenido al Círculo!</p>
                <p className="text-slate-300 text-xs mt-2">Pronto recibirás mis secretos mejor guardados en tu bandeja de entrada.</p>
            </div>
        );
    }

    return (
        <div className={`relative group ${isCompact ? 'my-8' : 'my-16'}`}>
            <div className={`absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-amber-400/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000`}></div>
            <div className={`relative bg-slate-900/50 border border-white/5 backdrop-blur-xl ${isCompact ? 'p-6 md:p-8' : 'p-8 md:p-12'} rounded-[2.5rem] overflow-hidden`}>
                <div className={`${isCompact ? 'flex flex-col md:flex-row items-center gap-8 justify-between max-w-5xl mx-auto' : 'max-w-xl mx-auto text-center'}`}>
                    
                    <div className={isCompact ? 'text-left flex-1' : ''}>
                        <div className={`inline-flex items-center justify-center ${isCompact ? 'w-10 h-10 mb-4' : 'w-12 h-12 mb-6'} rounded-full bg-amber-500/10 border border-amber-500/20`}>
                            <Mail className={`${isCompact ? 'w-4 h-4' : 'w-5 h-5'} text-amber-500`} />
                        </div>
                        <h3 className={`${isCompact ? 'text-lg md:text-xl' : 'text-2xl md:text-3xl'} font-[Cinzel] text-white mb-2 uppercase tracking-tighter`}>
                            Únete al Círculo
                        </h3>
                        {!isCompact && (
                            <p className="text-slate-400 font-light text-sm md:text-base mb-8 leading-relaxed italic">
                                "Recibe ideas originales para tus eventos y secretos del ilusionismo directamente en tu email."
                            </p>
                        )}
                        {isCompact && (
                            <p className="text-slate-500 font-light text-[10px] md:text-xs uppercase tracking-widest italic opacity-60">
                                Secretos del ilusionismo en tu email
                            </p>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className={`relative flex flex-col sm:flex-row gap-3 ${isCompact ? 'flex-[1.5]' : 'flex-row'}`}>
                        {/* Campo para identificar la fuente en Formspree */}
                        <input type="hidden" name="_subject" value={`NUEVA SUSCRIPCIÓN NEWSLETTER (${isCompact ? 'BLOG HOME' : 'ARTÍCULO'})`} />
                        
                        <input 
                            required 
                            name="email" 
                            type="email" 
                            placeholder="Tu email..." 
                            className={`flex-1 bg-slate-950/50 border border-white/10 rounded-full ${isCompact ? 'py-3 px-6' : 'py-4 px-8'} text-white focus:outline-none focus:border-amber-500/50 transition-all text-xs`}
                        />
                        <button 
                            disabled={status === "submitting"}
                            type="submit" 
                            className={`bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold ${isCompact ? 'py-3 px-8' : 'py-4 px-10'} rounded-full transition-all uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 group/btn shadow-lg shadow-amber-500/10`}
                        >
                            {status === "submitting" ? "..." : (
                                <>
                                    {isCompact ? "Unirme" : "Suscribirme"} <Sparkles className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
                {!isCompact && (
                    <p className="text-[10px] text-slate-600 mt-6 uppercase tracking-widest text-center">Cero Spam. Solo Magia Real.</p>
                )}
            </div>
        </div>
    );
}
