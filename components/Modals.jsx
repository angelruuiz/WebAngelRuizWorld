"use client";
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, UserIcon, Phone, Mail, Calendar, MessageSquare, Sparkles } from './Icons';

export const MagicModal = ({ isOpen, onClose, children }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { 
        setMounted(true);
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; }; 
    }, [isOpen]);

    if (!mounted) return null;

    const modalContent = (
        <AnimatePresence mode="wait">
            {isOpen && (
                <div className="fixed inset-0 z-[100002] flex items-center justify-center pointer-events-none p-4">
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        onClick={onClose} 
                        className="fixed inset-0 bg-[#030712]/85 backdrop-blur-xl z-[-1] cursor-pointer pointer-events-auto" 
                    />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 30, rotateX: 10 }} 
                        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }} 
                        exit={{ opacity: 0, scale: 0.9, y: 30, rotateX: -10 }} 
                        transition={{ type: "spring", duration: 0.7, bounce: 0.25 }} 
                        className="bg-[rgba(7,11,20,0.95)] border border-[#d4a853]/20 w-full max-w-2xl rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.8),0_0_40px_rgba(212,168,83,0.05)] overflow-hidden pointer-events-auto relative flex flex-col max-h-[85vh] z-10"
                    >
                        <button onClick={onClose} aria-label="Cerrar ventana emergente" className="absolute top-3 right-3 text-slate-400 hover:text-[#d4a853] transition-colors z-20 bg-slate-900/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-slate-800 border border-transparent hover:border-[#d4a853]/30 cursor-pointer">
                            <X className="w-5 h-5" />
                        </button>
                        <div className="overflow-y-auto custom-scrollbar h-full">{children}</div>
                        <div className="absolute inset-0 border border-[#d4a853]/20 rounded-2xl pointer-events-none" />
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4a853] to-transparent opacity-50" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
};

export const ContactFormModal = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState("idle");
    const [dateMin, setDateMin] = useState("");
    
    useEffect(() => { setDateMin(new Date().toISOString().split('T')[0]); }, []);

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
        data.append("_subject", `Reserva: ${data.get('eventType')} - ${data.get('name')} (${data.get('date')})`);
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
            if (response.ok) {
                setStatus("success");
                form.reset(); 
                setTimeout(() => { onClose(); setStatus("idle"); }, 3000);
            } else { setStatus("error"); }
        } catch (error) { setStatus("error"); }
    };

    if (status === "success") {
        return (
            <MagicModal isOpen={isOpen} onClose={onClose}>
                <div className="p-8 md:p-16 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#d4a853]/20 flex items-center justify-center mb-6 border border-[#d4a853]/50">
                        <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-[#d4a853]" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-[Cinzel] text-white mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-slate-300">Gracias por contactar. La magia está en camino.</p>
                </div>
            </MagicModal>
        );
    }

    return (
        <MagicModal isOpen={isOpen} onClose={onClose}>
            <div className="p-6 md:p-10 text-left">
                <div className="text-center mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-[Cinzel] text-white mb-2">Reserva tu Fecha</h3>
                    <p className="text-slate-400 text-xs md:text-sm font-light">Cuéntame sobre tu evento y creemos algo inolvidable.</p>
                    <p className="text-emerald-400/90 text-[11px] md:text-xs mt-2 font-medium flex items-center justify-center gap-1.5">
                        <span>↓</span>
                        <span>Si deslizas hacia abajo encontrarás mi contacto directo en WhatsApp si así lo prefieres</span>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" aria-hidden="true" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-[#d4a853] ml-1">Nombre</label>
                            <div className="relative">
                                <UserIcon className="absolute left-3 top-3.5 w-4 h-4 text-slate-600" />
                                <input required name="name" type="text" placeholder="Tu nombre" aria-label="Nombre completo para la reserva" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-[#d4a853] ml-1">Teléfono</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-600" />
                                <input required name="phone" type="tel" placeholder="600123456" aria-label="Número de teléfono de contacto" onInput={handlePhoneInput} minLength="9" maxLength="9" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-[#d4a853] ml-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-600" />
                            <input required name="email" type="email" placeholder="tu@email.com" aria-label="Correo electrónico de contacto" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-[#d4a853] ml-1">Tipo de Evento</label>
                            <div className="relative">
                                <select name="eventType" aria-label="Selector del tipo de evento" className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 px-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50 appearance-none cursor-pointer text-sm">
                                    <option>Boda</option><option>Evento de Empresa</option><option>Fiesta Privada</option><option>Comunión</option><option>Otro</option>
                                </select>
                                <div className="absolute right-4 top-4 pointer-events-none border-l-[4px] border-l-transparent border-t-[5px] border-t-slate-500 border-r-[4px] border-r-transparent"></div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-[#d4a853] ml-1">Fecha Estimada</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-600" />
                                <input name="date" type="date" aria-label="Fecha estimada del evento" min={dateMin} className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50 [color-scheme:dark] text-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-[#d4a853] ml-1">Mensaje</label>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-600" />
                            <textarea required name="message" rows="4" aria-label="Detalles adicionales del evento que solicitas" placeholder="Cuéntame más detalles sobre lo que buscas..." className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#d4a853]/50 resize-none text-sm"></textarea>
                        </div>
                    </div>
                    <button type="submit" disabled={status === "submitting"} className="w-full bg-gradient-to-r from-[#d4a853] to-[#b8860b] text-[#030712] font-bold py-3 md:py-4 rounded-xl hover:from-[#e8cc8a] transition-all uppercase tracking-widest text-xs md:text-sm shadow-lg shadow-[#d4a853]/10 flex items-center justify-center gap-2 mt-4 cursor-pointer">
                        {status === "submitting" ? (<>Enviando...</>) : (<>Enviar Solicitud <Sparkles className="w-4 h-4" /></>)}
                    </button>

                    <div className="pt-2 text-center">
                        <div className="flex items-center gap-3 my-2.5">
                            <div className="flex-1 h-px bg-white/10"></div>
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">o si prefieres</span>
                            <div className="flex-1 h-px bg-white/10"></div>
                        </div>
                        <a
                            href="https://wa.me/34648055636?text=Hola%20Ángel,%20quiero%20consultar%20disponibilidad%20para%20un%20evento."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-400 font-semibold text-xs transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] group cursor-pointer"
                        >
                            <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                            </svg>
                            <span>Consultar directamente por WhatsApp</span>
                        </a>
                    </div>
                    {status === "error" && (<p className="text-red-400 text-xs text-center mt-2">Hubo un error al enviar. Revisa tu conexión o vuelve a intentar.</p>)}
                </form>
            </div>
        </MagicModal>
    );
};
