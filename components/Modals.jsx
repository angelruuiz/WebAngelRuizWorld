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
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[-1] cursor-pointer pointer-events-auto" 
                    />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 30, rotateX: 10 }} 
                        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }} 
                        exit={{ opacity: 0, scale: 0.9, y: 30, rotateX: -10 }} 
                        transition={{ type: "spring", duration: 0.6, bounce: 0.3 }} 
                        className="bg-slate-900/95 border border-amber-500/30 w-full max-w-2xl rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto relative flex flex-col max-h-[85vh] z-10"
                    >
                        <button onClick={onClose} aria-label="Cerrar ventana emergente" className="absolute top-3 right-3 text-slate-400 hover:text-amber-400 transition-colors z-20 bg-slate-900/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-slate-800 border border-transparent hover:border-amber-500/30 cursor-pointer">
                            <X className="w-5 h-5" />
                        </button>
                        <div className="overflow-y-auto custom-scrollbar h-full">{children}</div>
                        <div className="absolute inset-0 border border-amber-500/20 rounded-2xl pointer-events-none" />
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
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
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/50">
                        <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-green-400" />
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
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" aria-hidden="true" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-amber-500 ml-1">Nombre</label>
                            <div className="relative">
                                <UserIcon className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                                <input required name="name" type="text" placeholder="Tu nombre" aria-label="Nombre completo para la reserva" className="w-full bg-slate-950/50 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-amber-500/50" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-amber-500 ml-1">Teléfono</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                                <input required name="phone" type="tel" placeholder="600123456" aria-label="Número de teléfono de contacto" onInput={handlePhoneInput} minLength="9" maxLength="9" className="w-full bg-slate-950/50 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-amber-500/50" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-amber-500 ml-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                            <input required name="email" type="email" placeholder="tu@email.com" aria-label="Correo electrónico de contacto" className="w-full bg-slate-950/50 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-amber-500/50" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-amber-500 ml-1">Tipo de Evento</label>
                            <div className="relative">
                                <select name="eventType" aria-label="Selector del tipo de evento" className="w-full bg-slate-950/50 border border-slate-700 rounded-lg py-3 px-4 text-slate-200 focus:outline-none focus:border-amber-500/50 appearance-none cursor-pointer text-sm">
                                    <option>Boda</option><option>Evento de Empresa</option><option>Fiesta Privada</option><option>Comunión</option><option>Otro</option>
                                </select>
                                <div className="absolute right-4 top-4 pointer-events-none border-l-[4px] border-l-transparent border-t-[5px] border-t-slate-500 border-r-[4px] border-r-transparent"></div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-amber-500 ml-1">Fecha Estimada</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                                <input name="date" type="date" aria-label="Fecha estimada del evento" min={dateMin} className="w-full bg-slate-950/50 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-amber-500/50 [color-scheme:dark] text-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-amber-500 ml-1">Mensaje</label>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                            <textarea required name="message" rows="4" aria-label="Detalles adicionales del evento que solicitas" placeholder="Cuéntame más detalles sobre lo que buscas..." className="w-full bg-slate-950/50 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-amber-500/50 resize-none text-sm"></textarea>
                        </div>
                    </div>
                    <button type="submit" disabled={status === "submitting"} className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold py-3 md:py-4 rounded-lg hover:from-amber-500 transition-all uppercase tracking-widest text-xs md:text-sm shadow-lg flex items-center justify-center gap-2 mt-4">
                        {status === "submitting" ? (<>Enviando...</>) : (<>Enviar Solicitud <Sparkles className="w-4 h-4" /></>)}
                    </button>
                    {status === "error" && (<p className="text-red-400 text-xs text-center mt-2">Hubo un error al enviar. Revisa tu conexión o vuelve a intentar.</p>)}
                </form>
            </div>
        </MagicModal>
    );
};
