"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail } from './Icons';

export default function NewsletterForm() {
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
        <div className="relative group my-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-amber-400/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900/50 border border-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] overflow-hidden">
                <div className="max-w-xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                        <Mail className="w-5 h-5 text-amber-500" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-[Cinzel] text-white mb-4 uppercase tracking-tighter">Únete al Círculo Interno</h3>
                    <p className="text-slate-400 font-light text-sm md:text-base mb-8 leading-relaxed italic">
                        "Recibe ideas originales para tus eventos y secretos del ilusionismo directamente en tu email."
                    </p>

                    <form onSubmit={handleSubmit} className="relative flex flex-col md:flex-row gap-4">
                        {/* Campo para identificar la fuente en Formspree */}
                        <input type="hidden" name="_subject" value="NUEVA SUSCRIPCIÓN NEWSLETTER (BLOG)" />
                        
                        <input 
                            required 
                            name="email" 
                            type="email" 
                            placeholder="Tu mejor email..." 
                            className="flex-1 bg-slate-950/50 border border-white/10 rounded-full py-4 px-8 text-white focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                        />
                        <button 
                            disabled={status === "submitting"}
                            type="submit" 
                            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 px-10 rounded-full transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 group/btn shadow-lg shadow-amber-500/10"
                        >
                            {status === "submitting" ? "Enviando..." : (
                                <>
                                    Suscribirme <Sparkles className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                    
                    {status === "error" && (
                        <p className="text-red-400 text-[10px] mt-4 uppercase tracking-widest font-bold">Vaya, algo ha fallado. Inténtalo de nuevo.</p>
                    )}
                    
                    <p className="text-[10px] text-slate-600 mt-6 uppercase tracking-widest">Cero Spam. Solo Magia Real.</p>
                </div>
            </div>
        </div>
    );
}
