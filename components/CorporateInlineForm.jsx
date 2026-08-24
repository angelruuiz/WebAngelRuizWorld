"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from './Icons';

export default function CorporateInlineForm({ title = "SOLICITAR PROPUESTA B2B", subtitle = "Respuesta y propuesta técnica en < 24h" }) {
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
        data.append("_subject", `B2B Corporativo: ${data.get('company') || 'Empresa'} - ${data.get('name')} (${data.get('eventType')})`);

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
                className="w-full bg-[#111111]/90 backdrop-blur-xl border border-amber-500/40 p-8 text-center"
            >
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4 border border-amber-500/50">
                    <CheckCircle2 className="w-6 h-6 text-amber-500" />
                </div>
                <div className="text-amber-500 font-mono text-xs mb-2">[ TRANSMISIÓN_COMPLETADA ]</div>
                <h3 className="text-xl font-bold font-sans text-white uppercase mb-2">Propuesta en Proceso</h3>
                <p className="text-slate-400 font-mono text-xs max-w-sm mx-auto leading-relaxed">
                    Hemos recibido los requerimientos de tu empresa. Prepararemos un dossier a medida con opciones técnicas y de impacto.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-[10px] text-amber-500 uppercase tracking-widest hover:underline"
                >
                    [ Enviar otra solicitud ]
                </button>
            </motion.div>
        );
    }

    return (
        <div className="w-full bg-[#0A0A0A]/90 backdrop-blur-xl border border-amber-500/30 p-6 md:p-8 relative">
            <div className="flex items-center gap-3 mb-6 border-b border-amber-500/20 pb-4">
                <span className="w-8 h-px bg-amber-500"></span>
                <span className="text-amber-500 font-mono text-xs tracking-widest uppercase">[ PROTOCOLO_CONTACTO_B2B ]</span>
            </div>

            <div className="mb-6 text-left">
                <h3 className="text-xl md:text-2xl font-sans font-black uppercase tracking-tight text-white mb-1">
                    {title}
                </h3>
                <p className="text-slate-400 font-mono text-xs">
                    {subtitle}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" aria-hidden="true" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-amber-500">
                            Nombre y Cargo *
                        </label>
                        <input
                            required
                            name="name"
                            type="text"
                            placeholder="Ej. Laura Gómez (Event Manager)"
                            aria-label="Nombre y Cargo"
                            className="w-full bg-[#121212] border border-white/10 focus:border-amber-500 text-slate-200 text-xs font-mono py-2.5 px-3 focus:outline-none transition-colors"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-amber-500">
                            Empresa / Entidad *
                        </label>
                        <input
                            required
                            name="company"
                            type="text"
                            placeholder="Nombre de la empresa"
                            aria-label="Nombre de la empresa"
                            className="w-full bg-[#121212] border border-white/10 focus:border-amber-500 text-slate-200 text-xs font-mono py-2.5 px-3 focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-amber-500">
                            Teléfono Corporativo *
                        </label>
                        <input
                            required
                            name="phone"
                            type="tel"
                            placeholder="600123456"
                            aria-label="Teléfono corporativo"
                            onInput={handlePhoneInput}
                            minLength="9"
                            maxLength="9"
                            className="w-full bg-[#121212] border border-white/10 focus:border-amber-500 text-slate-200 text-xs font-mono py-2.5 px-3 focus:outline-none transition-colors"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-amber-500">
                            Email Corporativo *
                        </label>
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="contacto@empresa.com"
                            aria-label="Email corporativo"
                            className="w-full bg-[#121212] border border-white/10 focus:border-amber-500 text-slate-200 text-xs font-mono py-2.5 px-3 focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-amber-500">
                            Vector de Evento
                        </label>
                        <select
                            name="eventType"
                            aria-label="Tipo de evento corporativo"
                            className="w-full bg-[#121212] border border-white/10 focus:border-amber-500 text-slate-200 text-xs font-mono py-2.5 px-3 focus:outline-none transition-colors cursor-pointer"
                        >
                            <option value="Cena de Empresa">Cena de Empresa / Gala</option>
                            <option value="Feria / Stand IFEMA">Feria / Stand (IFEMA, etc.)</option>
                            <option value="Team Building">Taller Team Building</option>
                            <option value="Conferencia / Keynote">Mago Conferenciante / Keynote</option>
                            <option value="Cóctel Networking">Cóctel de Networking</option>
                            <option value="Otro">Otro Formato Corporativo</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-amber-500">
                            Fecha Prevista
                        </label>
                        <input
                            name="date"
                            type="date"
                            min={dateMin}
                            aria-label="Fecha prevista del evento"
                            className="w-full bg-[#121212] border border-white/10 focus:border-amber-500 text-slate-200 text-xs font-mono py-2.5 px-3 focus:outline-none transition-colors [color-scheme:dark]"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-amber-500">
                        Detalles / Objetivos de la Empresa
                    </label>
                    <textarea
                        name="message"
                        rows="2"
                        placeholder="Nº de asistentes, objetivos de marca, espacio del evento..."
                        aria-label="Detalles adicionales del evento corporativo"
                        className="w-full bg-[#121212] border border-white/10 focus:border-amber-500 text-slate-200 text-xs font-mono py-2.5 px-3 focus:outline-none transition-colors resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-amber-500 bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-black font-mono font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer text-xs md:text-sm"
                >
                    {status === "submitting" ? (
                        <span>[ PROCESANDO_SOLICITUD... ]</span>
                    ) : (
                        <>
                            <span>[ SOLICITAR DOSSIER Y PRESUPUESTO ]</span>
                            <Sparkles className="w-4 h-4" />
                        </>
                    )}
                </button>

                {status === "error" && (
                    <p className="text-red-400 font-mono text-[10px] text-center mt-2">
                        [ ERROR_RED ]: Por favor vuelve a intentarlo o escribe directamente a WhatsApp.
                    </p>
                )}
            </form>
        </div>
    );
}
