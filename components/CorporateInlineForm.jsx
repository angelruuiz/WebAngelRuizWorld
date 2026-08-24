"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, UserIcon, Phone, Mail, Calendar, MessageSquare, WhatsApp } from './Icons';

export default function CorporateInlineForm({ title = "Solicitar Propuesta para Empresas", subtitle = "Respuesta y presupuesto personalizado en menos de 24h" }) {
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
        data.append("_subject", `B2B Corporativo: ${data.get('company') || 'Empresa'} - ${data.get('name')} (${data.get('eventType') || 'Evento'})`);

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
                className="w-full relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-slate-950/70 border border-amber-500/30 p-8 sm:p-10 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)]"
            >
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4 border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                    <CheckCircle2 className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-[Cinzel] font-bold text-white mb-2 tracking-wide">¡Solicitud de Empresa Recibida!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Hemos recibido los datos de tu evento corporativo. En menos de 24 horas te enviaremos una propuesta técnica y económica adaptada a los objetivos de tu marca.
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
            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-amber-300/10 to-amber-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 pointer-events-none" />

            <div className="relative rounded-3xl backdrop-blur-2xl bg-slate-950/60 border border-white/15 p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.15)] overflow-hidden">
                <div className="mb-6 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-2.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-semibold">
                            Propuesta B2B Exclusiva
                        </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-[Cinzel] font-bold text-white tracking-tight">
                        {title}
                    </h3>
                    <p className="text-slate-400 text-xs font-light mt-0.5">
                        {subtitle}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                    <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" aria-hidden="true" />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="space-y-1">
                            <label className="text-[11px] sm:text-[10px] uppercase tracking-wider text-amber-400/90 font-medium ml-1 block">
                                Nombre y Cargo *
                            </label>
                            <div className="relative">
                                <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder="Ej. Laura Gómez (Event Manager)"
                                    aria-label="Nombre y Cargo"
                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] sm:text-[10px] uppercase tracking-wider text-amber-400/90 font-medium ml-1 block">
                                Empresa / Marca *
                            </label>
                            <div className="relative">
                                <input
                                    required
                                    name="company"
                                    type="text"
                                    placeholder="Nombre de tu empresa"
                                    aria-label="Empresa o Marca"
                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 px-4 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="space-y-1">
                            <label className="text-[11px] sm:text-[10px] uppercase tracking-wider text-amber-400/90 font-medium ml-1 block">
                                Teléfono Directo *
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                <input
                                    required
                                    name="phone"
                                    type="tel"
                                    placeholder="600123456"
                                    aria-label="Teléfono corporativo"
                                    onInput={handlePhoneInput}
                                    minLength="9"
                                    maxLength="9"
                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] sm:text-[10px] uppercase tracking-wider text-amber-400/90 font-medium ml-1 block">
                                Email Corporativo *
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="contacto@empresa.com"
                                    aria-label="Email corporativo"
                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="space-y-1">
                            <label className="text-[11px] sm:text-[10px] uppercase tracking-wider text-amber-400/90 font-medium ml-1 block">
                                Formato de Evento
                            </label>
                            <div className="relative">
                                <select
                                    name="eventType"
                                    aria-label="Formato de evento corporativo"
                                    className="w-full bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 px-3.5 text-slate-200 text-sm sm:text-xs focus:outline-none transition-all appearance-none cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                                >
                                    <option value="Cena de Empresa / Gala">Cena de Empresa / Gala</option>
                                    <option value="Feria / Congreso (IFEMA)">Feria / Congreso (IFEMA)</option>
                                    <option value="Team Building / Taller">Team Building / Taller</option>
                                    <option value="Conferencia / Kick-off">Conferencia / Kick-off</option>
                                    <option value="Restaurante / Local">Restaurante / Local</option>
                                    <option value="Presentación de Producto">Presentación de Producto</option>
                                    <option value="Otro Formato Corporativo">Otro Formato Corporativo</option>
                                </select>
                                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none border-l-[4px] border-l-transparent border-t-[5px] border-t-slate-400 border-r-[4px] border-r-transparent" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[11px] sm:text-[10px] uppercase tracking-wider text-amber-400/90 font-medium ml-1 block">
                                Fecha Prevista
                            </label>
                            <div className="relative">
                                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                <input
                                    name="date"
                                    type="date"
                                    min={dateMin}
                                    aria-label="Fecha prevista del evento"
                                    className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all [color-scheme:dark] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[11px] sm:text-[10px] uppercase tracking-wider text-amber-400/90 font-medium ml-1 block">
                            Detalles u Objetivos del Evento
                        </label>
                        <div className="relative">
                            <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                            <textarea
                                name="message"
                                rows="2"
                                placeholder="Nº aproximado de asistentes, ubicación, mensaje o producto a destacar..."
                                aria-label="Detalles u objetivos del evento"
                                className="w-full bg-slate-900/90 sm:bg-white/[0.04] hover:bg-white/[0.07] focus:bg-slate-900 border border-white/15 focus:border-amber-400 rounded-xl py-3 sm:py-2.5 pl-10 pr-3 text-slate-100 text-sm sm:text-xs focus:outline-none transition-all placeholder:text-slate-500 resize-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                            ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full relative overflow-hidden bg-gradient-to-r from-[#d4a853] via-[#f59e0b] to-[#d4a853] bg-[length:200%_auto] hover:bg-right text-slate-950 font-bold py-3.5 px-6 rounded-xl uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all duration-300 flex items-center justify-center gap-2 mt-3 cursor-pointer"
                    >
                        {status === "submitting" ? (
                            <span>Enviando requerimientos...</span>
                        ) : (
                            <>
                                <span>Solicitar Dossier y Presupuesto</span>
                                <Sparkles className="w-4 h-4" />
                            </>
                        )}
                    </button>

                    <div className="pt-2 text-center border-t border-white/10 mt-3">
                        <a
                            href="https://wa.me/34648055636?text=Hola%20Ángel%2C%20quisiera%20consultar%20disponibilidad%20para%20un%20evento%20de%20empresa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 text-[11px] text-emerald-400 hover:text-emerald-300 transition-colors py-1.5 px-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 font-medium"
                        >
                            <WhatsApp className="w-3.5 h-3.5 fill-current" />
                            <span>¿Consulta rápida de empresa? Escríbeme por WhatsApp</span>
                        </a>
                    </div>

                    {status === "error" && (
                        <p className="text-red-400 text-[11px] text-center mt-1">
                            Hubo un error al enviar. Por favor, contáctame directamente por WhatsApp o teléfono.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
