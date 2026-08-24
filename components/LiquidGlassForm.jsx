"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserIcon, Phone, Mail, Calendar, MessageSquare, Sparkles, CheckCircle2 } from './Icons';

export default function LiquidGlassForm({ title = "Pide Presupuesto Sin Compromiso", subtitle = "Respuesta inmediata en menos de 24h" }) {
    const [status, setStatus] = useState("idle");
    const [dateMin, setDateMin] = useState("");

    useEffect(() => {
        setDateMin(new Date().toISOString().split('T')[0]);
    }, []);

    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeoydngl";

    const handlePhoneInput = (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        if (e.target.value.length > 9) e.target.value = e.target.value.slice(0, 9);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");
        const form = e.target;
        const data = new FormData(form);
        data.append("_subject", `Presupuesto Home: ${data.get('eventType') || 'Evento'} - ${data.get('name')} (${data.get('date') || 'Sin fecha'})`);
        
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
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-slate-950/60 border border-amber-500/30 p-8 sm:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)] flex flex-col items-center justify-center text-center min-h-[380px]"
            >
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-5 border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                    <CheckCircle2 className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-[Cinzel] font-bold text-white mb-2 tracking-wide">¡Solicitud Recibida!</h3>
                <p className="text-slate-300 text-sm max-w-xs leading-relaxed">
                    Gracias por tu interés. Me pondré en contacto contigo a la mayor brevedad para diseñar una experiencia inolvidable.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-xs text-amber-400 underline uppercase tracking-widest hover:text-amber-300 transition-colors"
                >
                    Enviar otra consulta
                </button>
            </motion.div>
        );
    }

    return (
        <div className="w-full relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-amber-300/10 to-amber-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 pointer-events-none" />

            {/* Liquid Glass Container */}
            <div className="relative rounded-3xl backdrop-blur-2xl bg-slate-950/50 border border-white/15 p-5 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.15)] overflow-hidden">
                {/* Header */}
                <div className="mb-5 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-semibold">
                            Disponibilidad 2026
                        </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-[Cinzel] font-bold text-white tracking-tight leading-snug">
                        {title}
                    </h3>
                    <p className="text-slate-400 text-xs font-light mt-0.5">
                        {subtitle}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" aria-hidden="true" />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider text-amber-400/90 font-medium ml-1">
                                Nombre *
                            </label>
                            <div className="relative">
                                <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder="Tu nombre"
                                    aria-label="Tu nombre"
                                    className="w-full bg-white/[0.04] hover:bg-white/[0.07] focus:bg-white/[0.08] border border-white/10 focus:border-amber-400/70 rounded-xl py-2.5 pl-10 pr-3 text-slate-100 text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider text-amber-400/90 font-medium ml-1">
                                Teléfono *
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                <input
                                    required
                                    name="phone"
                                    type="tel"
                                    placeholder="600123456"
                                    aria-label="Teléfono de contacto"
                                    onInput={handlePhoneInput}
                                    minLength="9"
                                    maxLength="9"
                                    className="w-full bg-white/[0.04] hover:bg-white/[0.07] focus:bg-white/[0.08] border border-white/10 focus:border-amber-400/70 rounded-xl py-2.5 pl-10 pr-3 text-slate-100 text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider text-amber-400/90 font-medium ml-1">
                            Email *
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="tu@email.com"
                                aria-label="Correo electrónico"
                                className="w-full bg-white/[0.04] hover:bg-white/[0.07] focus:bg-white/[0.08] border border-white/10 focus:border-amber-400/70 rounded-xl py-2.5 pl-10 pr-3 text-slate-100 text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider text-amber-400/90 font-medium ml-1">
                                Tipo de Evento
                            </label>
                            <div className="relative">
                                <select
                                    name="eventType"
                                    aria-label="Tipo de evento"
                                    className="w-full bg-slate-900 border border-white/10 focus:border-amber-400/70 rounded-xl py-2.5 px-3 text-slate-200 text-xs focus:outline-none transition-all appearance-none cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                                >
                                    <option value="Boda">Boda</option>
                                    <option value="Evento de Empresa">Evento de Empresa</option>
                                    <option value="Fiesta Privada / Cumpleaños">Fiesta Privada / Cumpleaños</option>
                                    <option value="Comunión">Comunión</option>
                                    <option value="Restaurante / Local">Restaurante / Local</option>
                                    <option value="Otro">Otro Evento</option>
                                </select>
                                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none border-l-[3.5px] border-l-transparent border-t-[4px] border-t-slate-400 border-r-[3.5px] border-r-transparent" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider text-amber-400/90 font-medium ml-1">
                                Fecha Estimada
                            </label>
                            <div className="relative">
                                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                <input
                                    name="date"
                                    type="date"
                                    min={dateMin}
                                    aria-label="Fecha estimada del evento"
                                    className="w-full bg-white/[0.04] hover:bg-white/[0.07] focus:bg-white/[0.08] border border-white/10 focus:border-amber-400/70 rounded-xl py-2.5 pl-10 pr-3 text-slate-100 text-xs focus:outline-none transition-all [color-scheme:dark] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider text-amber-400/90 font-medium ml-1">
                            Detalles del Evento
                        </label>
                        <div className="relative">
                            <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                            <textarea
                                name="message"
                                rows="2"
                                placeholder="Lugar, número aprox. de invitados, horario..."
                                aria-label="Detalles adicionales del evento"
                                className="w-full bg-white/[0.04] hover:bg-white/[0.07] focus:bg-white/[0.08] border border-white/10 focus:border-amber-400/70 rounded-xl py-2.5 pl-10 pr-3 text-slate-100 text-xs focus:outline-none transition-all placeholder:text-slate-500 resize-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                            ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full relative overflow-hidden bg-gradient-to-r from-[#d4a853] via-[#f59e0b] to-[#d4a853] bg-[length:200%_auto] hover:bg-right text-slate-950 font-bold py-3 px-6 rounded-xl uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all duration-300 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                    >
                        {status === "submitting" ? (
                            <span>Enviando solicitud...</span>
                        ) : (
                            <>
                                <span>Solicitar Presupuesto Mágico</span>
                                <Sparkles className="w-4 h-4" />
                            </>
                        )}
                    </button>

                    {status === "error" && (
                        <p className="text-red-400 text-[11px] text-center mt-1">
                            Hubo un error al enviar. Por favor, inténtalo de nuevo o contáctame por WhatsApp.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
