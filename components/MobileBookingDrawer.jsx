"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone, UserIcon, Calendar, Sparkles, WhatsApp, ArrowRight } from './Icons';
import { trackEvent } from '@/lib/tracker';

const EVENT_PRESETS = [
    { id: 'boda', label: 'Boda', icon: '💍', badge: '450€ - 650€', sub: 'Cóctel & Banquete' },
    { id: 'empresa', label: 'Empresa', icon: '🏢', badge: '500€ - 750€', sub: 'Cenas & Team Building' },
    { id: 'cumpleanos', label: 'Cumpleaños / Fiesta', icon: '🎂', badge: 'Desde 300€', sub: 'Adultos & Exclusivo' },
    { id: 'comunion', label: 'Comunión', icon: '🕊️', badge: 'Desde 300€', sub: 'Familiar & Niños' },
    { id: 'otro', label: 'Otro Evento', icon: '✨', badge: 'A medida', sub: 'Personalizado' },
];

export default function MobileBookingDrawer({ isOpen, onClose }) {
    const [mounted, setMounted] = useState(false);
    const [step, setStep] = useState(1);
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [selectedEvent, setSelectedEvent] = useState(EVENT_PRESETS[0]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [minDate, setMinDate] = useState('');

    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeoydngl";

    useEffect(() => {
        setMounted(true);
        setMinDate(new Date().toISOString().split('T')[0]);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            trackEvent('mobile_drawer_open', { source: 'liquid_bottom_bar' });
        } else {
            document.body.style.overflow = 'unset';
            // Reset state al cerrar tras un pequeño delay
            const t = setTimeout(() => {
                setStep(1);
                setStatus('idle');
            }, 300);
            return () => clearTimeout(t);
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!mounted) return null;

    const handlePhoneChange = (e) => {
        const cleaned = e.target.value.replace(/[^0-9+]/g, '');
        setPhone(cleaned.slice(0, 15));
    };

    const handleSelectEvent = (preset) => {
        setSelectedEvent(preset);
        trackEvent('mobile_drawer_event_select', { eventType: preset.label });
        setStep(2);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim()) return;

        setStatus('submitting');
        const formData = new FormData();
        formData.append('name', name.trim());
        formData.append('phone', phone.trim());
        formData.append('eventType', selectedEvent.label);
        if (date) formData.append('date', date);
        formData.append('source', 'Mobile Liquid Drawer (iOS Native)');
        formData.append('_subject', `Reserva Móvil Express: ${selectedEvent.label} - ${name} (${phone})`);

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' },
            });

            if (res.ok) {
                trackEvent('mobile_drawer_submit_success', {
                    name,
                    phone,
                    eventType: selectedEvent.label
                });
                setStatus('success');
                setTimeout(() => {
                    onClose();
                }, 3200);
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    const getWhatsAppUrl = () => {
        const msg = `¡Hola Ángel! Quiero consultar disponibilidad para ${selectedEvent.label}${date ? ` el ${date}` : ''}. Mi nombre es ${name || '...'}. ¿Tienes fecha libre?`;
        return `https://wa.me/34648055636?text=${encodeURIComponent(msg)}`;
    };

    const drawerContent = (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100000] md:hidden flex flex-col justify-end">
                    {/* Backdrop estilo Apple Liquid Glass con desenfoque profundo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/65 backdrop-blur-md"
                    />

                    {/* Bottom Sheet estilo Apple iOS 18 / Liquid UI */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 300, mass: 0.8 }}
                        drag="y"
                        dragConstraints={{ top: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, info) => {
                            if (info.offset.y > 100 || info.velocity.y > 500) {
                                onClose();
                            }
                        }}
                        className="relative z-10 w-full max-h-[92vh] flex flex-col rounded-t-[2.25rem] bg-[#070b14]/95 backdrop-blur-2xl border-t border-x border-white/[0.12] shadow-[0_-20px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.18)] overflow-hidden"
                    >
                        {/* Dynamic Island Pill / Drag Handle superior */}
                        <div className="pt-3 pb-2 flex justify-center items-center cursor-grab active:cursor-grabbing">
                            <div className="w-12 h-1.5 rounded-full bg-white/25 active:bg-white/40 transition-colors" />
                        </div>

                        {/* Cabecera del Drawer */}
                        <div className="px-6 pt-1 pb-3 flex items-center justify-between border-b border-white/[0.06]">
                            <div>
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d4a853]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Presupuesto Express · 2h
                                </span>
                                <h3 className="font-[Cinzel] text-xl font-bold text-white tracking-wide">
                                    {step === 1 ? '¿Qué evento organizas?' : 'Datos de Contacto'}
                                </h3>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Cerrar modal de reserva"
                                className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white active:scale-90 transition-transform"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Contenido con scroll nativo fluido */}
                        <div className="p-6 overflow-y-auto overscroll-contain flex-1">
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="py-10 flex flex-col items-center text-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                                        <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                                    </div>
                                    <h4 className="font-[Cinzel] text-2xl font-bold text-white mb-2">¡Petición Recibida!</h4>
                                    <p className="text-sm text-slate-300 max-w-xs mb-6">
                                        Ángel Ruiz se pondrá en contacto contigo en menos de 2 horas con disponibilidad exacta y tarifas.
                                    </p>
                                    <a
                                        href={getWhatsAppUrl()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 active:scale-95 transition-transform"
                                    >
                                        <WhatsApp className="w-4 h-4" />
                                        <span>Escribir ahora por WhatsApp</span>
                                    </a>
                                </motion.div>
                            ) : step === 1 ? (
                                /* PASO 1: Selección en 1 Toque */
                                <div className="space-y-4">
                                    <p className="text-xs text-slate-400">
                                        Selecciona tu tipo de celebración para ver tarifas estimadas y reservar sin compromiso:
                                    </p>

                                    <div className="grid grid-cols-1 gap-2.5">
                                        {EVENT_PRESETS.map((preset) => {
                                            const isSelected = selectedEvent.id === preset.id;
                                            return (
                                                <button
                                                    key={preset.id}
                                                    type="button"
                                                    onClick={() => handleSelectEvent(preset)}
                                                    className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group active:scale-[0.98] ${
                                                        isSelected
                                                            ? 'bg-amber-500/15 border-amber-400/60 shadow-[0_0_20px_rgba(212,168,83,0.18)]'
                                                            : 'bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08]'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-2xl p-2 rounded-xl bg-white/[0.06] border border-white/5 flex items-center justify-center shrink-0">
                                                            {preset.icon}
                                                        </span>
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-semibold text-white text-sm">
                                                                    {preset.label}
                                                                </span>
                                                            </div>
                                                            <span className="text-[11px] text-slate-400 block">
                                                                {preset.sub}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-end gap-1">
                                                        <span className="text-[11px] font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                                                            {preset.badge}
                                                        </span>
                                                        <span className="text-[10px] text-slate-400 group-hover:text-amber-300 flex items-center gap-1 transition-colors">
                                                            Elegir <ArrowRight className="w-3 h-3" />
                                                        </span>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Opción rápida directa a WhatsApp */}
                                    <div className="pt-2 text-center">
                                        <div className="flex items-center gap-3 my-3">
                                            <div className="flex-1 h-px bg-white/10" />
                                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">o si tienes prisa</span>
                                            <div className="flex-1 h-px bg-white/10" />
                                        </div>
                                        <a
                                            href="https://wa.me/34648055636?text=Hola%20Ángel,%20quisiera%20consultar%20disponibilidad%20y%20tarifas%20para%20un%20evento%20en%20Madrid"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => trackEvent('mobile_drawer_quick_wa')}
                                            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-lg shadow-emerald-950/40"
                                        >
                                            <WhatsApp className="w-4 h-4 text-emerald-400" />
                                            <span>Consultar por WhatsApp en 1 toque</span>
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                /* PASO 2: Formulario Ultra-Rápido sin Zoom (fontSize >= 16px) */
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Selector de evento ya escogido (con botón para cambiar) */}
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-amber-500/10 border border-amber-500/25">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xl">{selectedEvent.icon}</span>
                                            <div>
                                                <span className="text-xs font-bold text-white block">{selectedEvent.label}</span>
                                                <span className="text-[10px] text-amber-300 font-medium">{selectedEvent.badge}</span>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="text-[11px] text-amber-400 underline font-semibold px-2 py-1"
                                        >
                                            Cambiar
                                        </button>
                                    </div>

                                    {/* Campo Nombre */}
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 ml-1">
                                            Tu Nombre *
                                        </label>
                                        <div className="relative">
                                            <UserIcon className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                                            <input
                                                type="text"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Ej. Carmen o Carlos"
                                                style={{ fontSize: '16px' }} // Evita auto-zoom en iOS Safari
                                                className="w-full bg-white/[0.05] border border-white/[0.12] focus:border-amber-400 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Campo Teléfono / WhatsApp */}
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 ml-1">
                                            Teléfono / WhatsApp *
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                                            <input
                                                type="tel"
                                                inputMode="tel"
                                                required
                                                value={phone}
                                                onChange={handlePhoneChange}
                                                placeholder="612 34 56 78"
                                                style={{ fontSize: '16px' }} // Evita auto-zoom en iOS Safari
                                                className="w-full bg-white/[0.05] border border-white/[0.12] focus:border-amber-400 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Campo Fecha (Opcional) */}
                                    <div className="space-y-1.5 w-full">
                                        <div className="flex items-center justify-between px-1">
                                            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                                                Fecha aproximada
                                            </label>
                                            <span className="text-[10px] text-slate-500 font-normal">Opcional</span>
                                        </div>
                                        <div className="relative w-full">
                                            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none z-10" />
                                            <input
                                                type="date"
                                                min={minDate}
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                style={{ fontSize: '16px' }}
                                                className="w-full box-border block max-w-full bg-white/[0.05] border border-white/[0.12] focus:border-amber-400 rounded-xl py-3 pl-10 pr-3 text-white [color-scheme:dark] outline-none transition-colors min-h-[46px]"
                                            />
                                        </div>
                                    </div>

                                    {/* Consentimiento de privacidad */}
                                    <p className="text-[10px] text-slate-400 leading-tight pt-1">
                                        Al enviar aceptas el contacto para enviarte el presupuesto sin compromiso. Tus datos están 100% seguros.
                                    </p>

                                    {status === 'error' && (
                                        <p className="text-xs text-rose-400 text-center font-medium bg-rose-500/10 border border-rose-500/20 p-2 rounded-lg">
                                            Hubo un problema de conexión. Puedes pulsar abajo y escribirle directamente por WhatsApp.
                                        </p>
                                    )}

                                    {/* Botón Primario: Enviar Solicitud */}
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4a853] via-[#f5e6c8] to-[#b8860b] text-[#030712] font-black text-sm uppercase tracking-widest shadow-[0_4px_25px_rgba(212,168,83,0.35)] flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                                    >
                                        {status === 'submitting' ? (
                                            <span>Comprobando disponibilidad...</span>
                                        ) : (
                                            <>
                                                <span>Confirmar y Pedir Presupuesto</span>
                                                <Sparkles className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>

                                    {/* Botón Alternativo: Enviar por WhatsApp con mensaje pre-rellenado */}
                                    <a
                                        href={getWhatsAppUrl()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => trackEvent('mobile_drawer_submit_wa_direct', { eventType: selectedEvent.label })}
                                        className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-slate-200 text-xs font-semibold active:scale-95 transition-all"
                                    >
                                        <WhatsApp className="w-4 h-4 text-emerald-400" />
                                        <span>Prefiero enviar mis datos por WhatsApp</span>
                                    </a>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    return createPortal(drawerContent, document.body);
}
