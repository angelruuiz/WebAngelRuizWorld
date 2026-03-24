"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame, AnimatePresence } from 'framer-motion';
import Chatbot from '@/components/Chatbot';

// --- ICONOS ---
const Sparkles = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 5H5"/><path d="M19 17v4"/><path d="M21 19h-4"/></svg>);
const GlassWater = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15.2 22a3 3 0 0 0 3-3V5H5.8v14a3 3 0 0 0 3 3h6.4Z"/><path d="M6 8h12"/></svg>);
const Heart = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>);
const Users = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const ArrowRight = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>);
const Star = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const Quote = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>);
const X = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="M6 6 18 18"/></svg>);
const CheckCircle2 = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>);
const Calendar = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>);
const Mail = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
const Phone = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
const MessageSquare = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>);
const User = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>);

const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const MagicCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    useEffect(() => {
        const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
        const handleMouseOver = (e) => setIsHovering(e.target.closest('button, a, input, textarea, select, .cursor-pointer') !== null);
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);
    return (
        <motion.div className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-screen hidden md:block"
            animate={{ x: mousePosition.x - (isHovering ? 32 : 16), y: mousePosition.y - (isHovering ? 32 : 16), scale: isHovering ? 1.5 : 1 }}
            transition={{ x: { duration: 0 }, y: { duration: 0 }, scale: { type: 'spring', stiffness: 500, damping: 28 } }}>
            <div className={`rounded-full bg-amber-400 blur-xl opacity-40 transition-all duration-300 ${isHovering ? 'w-16 h-16' : 'w-8 h-8'}`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/50 transition-all duration-300 ${isHovering ? 'w-12 h-12' : 'w-4 h-4'}`} />
        </motion.div>
    );
};

const ParticleBackground = () => {
    const [particles] = useState(() => Array.from({ length: 20 }).map((_, i) => ({ id: i, x: Math.random() * 100, y: Math.random() * 100, size: Math.random() * 3 + 1, duration: Math.random() * 10 + 10 })));
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <motion.div key={p.id} className="absolute rounded-full bg-amber-500/20 blur-sm" style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }} animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0] }} transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }} />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 z-0" />
        </div>
    );
};

const MagicModal = ({ isOpen, onClose, children }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { 
        setMounted(true);
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; }; 
    }, [isOpen]);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[9998] flex items-center justify-center cursor-pointer" />
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none p-4">
                        <motion.div initial={{ opacity: 0, scale: 0.9, y: 30, rotateX: 10 }} animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30, rotateX: -10 }} transition={{ type: "spring", duration: 0.6, bounce: 0.3 }} className="bg-slate-900/95 border border-amber-500/30 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative flex flex-col max-h-[85vh]">
                            <button onClick={onClose} aria-label="Cerrar ventana emergente" className="absolute top-3 right-3 text-slate-400 hover:text-amber-400 transition-colors z-10 bg-slate-900/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-slate-800 border border-transparent hover:border-amber-500/30 cursor-pointer"><X className="w-5 h-5" /></button>
                            <div className="overflow-y-auto custom-scrollbar h-full">{children}</div>
                            <div className="absolute inset-0 border border-amber-500/20 rounded-2xl pointer-events-none" />
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

const ContactFormModal = ({ isOpen, onClose }) => {
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
                                <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
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

const SplitText = ({ text }) => {
    return (<span className="inline-block">{text.split("").map((char, index) => (<motion.span key={index} initial={{ opacity: 0, y: 50, rotateX: -90 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 0.8, delay: index * 0.1, ease: "backOut" }} className="inline-block">{char === " " ? "\u00A0" : char}</motion.span>))}</span>);
};

const Hero = ({ onOpenModal }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/spring.webm" type="video/webm" /><source src="/spring.mp4" type="video/mp4" />
                    <div className="w-full h-full bg-slate-950"></div>
                </video>
                <div className="absolute inset-0 bg-slate-950/70" />
            </div>
            <motion.div style={{ y: y1, opacity }} className="text-center px-4 relative z-10 flex flex-col items-center w-full">
                <h1 className="sr-only">Angel Ruiz - Ilusionista Profesional y Magia exclusiva para Eventos y Bodas</h1>
                <p className="font-[Cinzel] text-5xl md:text-8xl font-bold mb-8 tracking-wider drop-shadow-lg leading-tight" aria-hidden="true">
                    <span className="text-amber-400 block mb-2"><SplitText text="ANGEL" /></span>
                    <span className="text-white block"><SplitText text="RUIZ" /></span>
                </p>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0, duration: 1 }} className="my-6">
                    <h2 className="text-lg md:text-2xl text-slate-200 tracking-[0.1em] uppercase border-y border-amber-500/30 py-4 px-4 md:px-8 inline-block backdrop-blur-sm bg-slate-900/20 text-center leading-relaxed font-[Playfair_Display]">
                        Ilusionista profesional con más de <span className="font-[Cinzel] font-bold text-lg md:text-xl lg:text-3xl">10</span> años de experiencia
                    </h2>
                </motion.div>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1 }} className="text-slate-400 text-xl font-light italic mt-6">
                    "LA MAGIA ES EL ENGAÑO MÁS HONESTO."
                </motion.p>
                
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8, duration: 1 }} className="mt-10">
                    <motion.button animate={{ scale: [1, 1.03, 1], boxShadow: ["0px 0px 0px rgba(245,158,11,0)", "0px 0px 20px rgba(245,158,11,0.5)", "0px 0px 0px rgba(245,158,11,0)"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} onClick={onOpenModal} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group px-8 md:px-12 py-4 bg-transparent overflow-hidden rounded-full cursor-pointer">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-400 opacity-90 group-hover:opacity-100 transition-opacity" />
                        <span className="relative flex items-center justify-center gap-3 text-slate-950 font-bold tracking-widest uppercase text-xs md:text-sm">Reservar Experiencia <Sparkles className="w-4 h-4" /></span>
                        <div className="absolute inset-0 rounded-full blur-xl bg-amber-400/50 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

const TrustedBrands = () => {
    const brands = [
        { name: "Movistar Estudiantes", logo: "/images/logo-movistar.png" },
        { name: "Peña La Escombrera Torrelodones", logo: "/images/logo-escombrera.png" },
        { name: "Colegio Gondomar Galapagar", logo: "/images/logo-gondomar.png" },
        { name: "Catering Senescal Torrelodones", logo: "/images/logo-senescal.png" },
        { name: "Alcampo", logo: "/images/logo-alcampo.png" },
        { name: "Ahorramás", logo: "/images/logo-ahorramas.png" }
    ];
    return (
        <section className="py-12 bg-slate-950/80 border-y border-white/5 overflow-hidden relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-xs font-bold tracking-[0.3em] text-amber-500 uppercase mb-10 font-[Cinzel]">Empresas que han vivido la experiencia</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {brands.map((brand, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 flex flex-col items-center">
                            <img src={brand.logo} alt={brand.name} loading="lazy" className="h-12 md:h-16 w-auto object-contain drop-shadow-lg" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const MagicalCarousel = () => {
    const images = ["/images/foto-bio.png", "/images/foto-bio-2.png"];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => { setIndex((prev) => (prev + 1) % images.length); }, 3000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="popLayout">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt="Angel Ruiz Mago"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1, filter: "brightness(1)" }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none rounded-xl" />
        </div>
    );
};

const Biography = () => (
    <section id="bio" className="py-20 md:py-24 relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative order-2 md:order-1 max-w-sm mx-auto w-full h-[500px]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-amber-600/20 to-purple-600/20 rounded-2xl blur-xl rotate-3" />
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 border-none"><MagicalCarousel /></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
                <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-4 flex items-center gap-3"><span className="w-8 h-[1px] bg-amber-500"></span> Sobre Mí <span className="w-8 h-[1px] bg-amber-500"></span></h2>
                <div className="space-y-6 text-slate-300 font-light leading-relaxed text-base md:text-lg text-justify mt-8">
                    <p>A mis 8 años, inquieto e interesado por todo aquello que no pudiera explicar, fue cuando se cruzó en mi camino la magia, de la mano del primer mago que presencié, <span className="text-amber-300 font-medium font-['Playfair_Display'] italic">Paco G</span>. El cual me acabó introduciendo en todo este mundo de ilusión y asombro.</p>
                    <p>Tras muchos años de lecciones autodidactas y experimentar métodos propios, decidí dar el salto a escena y realizar lo que más me gusta: Magia de Cerca (Close-up).</p>
                    <p>Una de las más fuertes que existen en mi opinión, y en la que el público participa y se vive todo en primera persona. Magia a escasos centímetros del espectador, en la que se llega a límites insospechados.</p>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="flex gap-4 mt-10">
                    <a href="https://instagram.com/angellruuiz" target="_blank" rel="noopener noreferrer" aria-label="Visita el perfil oficial de Instagram de Angel Ruiz" className="w-12 h-12 rounded-full border border-amber-500/50 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-all hover:scale-110 shadow-[0_0_15px_rgba(245,158,11,0.1)] group">
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a href="https://tiktok.com/@angellruuiz" target="_blank" rel="noopener noreferrer" aria-label="Visita el perfil oficial de TikTok de Angel Ruiz" className="w-12 h-12 rounded-full border border-amber-500/50 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-all hover:scale-110 shadow-[0_0_15px_rgba(245,158,11,0.1)] group">
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                    </a>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

const ServiceCard = ({ title, shortDesc, icon: Icon, delay, bgClass, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={onClick} className="relative group h-[400px] w-full cursor-pointer flex flex-col">
            <div className={`absolute inset-0 bg-gradient-to-br ${bgClass} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
            <div className="relative h-full w-full bg-slate-900/40 border border-slate-800/50 p-8 rounded-xl overflow-hidden group-hover:border-amber-500/30 flex flex-col justify-between">
                <div>
                    <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-all"><Icon className="w-8 h-8 text-amber-400" /></div>
                    <h3 className="text-2xl font-[Cinzel] font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{title}</h3>
                    <div className="w-12 h-[2px] bg-amber-500/50 mb-4 group-hover:w-full transition-all duration-500" />
                    <p className="text-slate-300 font-light mt-8 text-lg leading-relaxed">{shortDesc}</p>
                </div>
                <div className="flex items-center gap-2 text-amber-500 font-bold uppercase text-xs tracking-[0.2em] mt-auto group-hover:translate-x-2 transition-transform">
                    <span>Ver más</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </motion.div>
    );
};

const Services = ({ selectedService, setSelectedService, disabled }) => {
    const servicesData = [
        { id: 1, title: "Bodas Mágicas", shortDesc: "Rompe el hielo y conecta a tus invitados.", fullDesc: "Vuestro gran día merece un toque de distinción que lo haga verdaderamente inolvidable. La magia durante el cóctel actúa como el nexo perfecto entre vuestros invitados, creando una atmósfera de asombro que rompe el hielo al instante. Familias y amigos compartirán una experiencia imposible desde el primer minuto.", details: ["Magia itinerante grupo a grupo", "Duración ideal: Cóctel (1.5 - 2h)", "Efecto especial personalizado para los novios", "Recuerdo imposible para los invitados"], icon: Heart, bgClass: "from-pink-500/20 to-purple-500/20" },
        { id: 2, title: "Particulares & VIP", shortDesc: "Desde cenas íntimas hasta grandes fiestas privadas.", fullDesc: "Vive la magia en su estado más puro y exclusivo. Olvida los escenarios lejanos; aquí el milagro sucede justo delante de tus ojos e incluso en tus propias manos. Un espectáculo diseñado para la distancia corta, sin grandes cajas ni cortinas, solo habilidad pura e interacción constante para sorprender a los invitados más exigentes.", details: ["Show de Salón o Close-up (Magia de cerca)", "Duración flexible: 1 - 1.5 horas", "Participación activa de todos los asistentes", "Mentalismo y magia de alto impacto", "Adaptable a salón, jardín o reservado"], icon: Users, bgClass: "from-amber-500/20 to-orange-500/20" },
        { id: 3, title: "Hoteles & Empresas", shortDesc: "Eleva la experiencia de tu marca o local corporativo.", fullDesc: "La magia es una herramienta de comunicación potente capaz de reforzar el mensaje de tu marca y hacer que tu evento destaque. Ya sea para dinamizar una cena de empresa, atraer atención en un stand o crear un ambiente relajado para el networking, diseñamos ilusiones que conectan con tu audiencia y dejan huella.", details: ["Dinamización de Cenas de Empresa", "Magia promocional para marcas", "Duración adaptable al formato del evento", "Refuerzo de valores corporativos"], icon: GlassWater, bgClass: "from-blue-500/20 to-indigo-500/20" }
    ];
    return (
        <section id="services" className={`py-20 relative px-4 max-w-7xl mx-auto ${selectedService ? 'z-40' : 'z-10'} ${disabled ? 'pointer-events-none opacity-50' : ''}`}>
            <div className="text-center mb-12"><h3 className="text-3xl md:text-5xl font-[Cinzel] text-white">El Arte de lo Imposible</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {servicesData.map((s, i) => <ServiceCard key={s.id} {...s} delay={i * 0.2} onClick={() => setSelectedService(s)} />)}
            </div>
            <MagicModal isOpen={!!selectedService} onClose={() => setSelectedService(null)}>
                {selectedService && (
                    <div className="p-8 md:p-12 text-left">
                        <div className="w-16 h-16 rounded-full bg-slate-800 border border-amber-500/30 flex items-center justify-center mb-6"><selectedService.icon className="w-8 h-8 text-amber-400" /></div>
                        <h3 className="text-3xl font-[Cinzel] text-white mb-4">{selectedService.title}</h3>
                        <p className="text-slate-300 font-light mb-8">{selectedService.fullDesc}</p>
                        <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800"><h4 className="text-amber-500 text-xs md:text-sm font-bold uppercase mb-4 flex items-center gap-2"><Sparkles className="w-4 h-4" /> Qué incluye la experiencia</h4><ul className="space-y-3">{selectedService.details.map((detail, i) => (<li key={i} className="flex items-start gap-3 text-slate-300 text-sm md:text-base"><CheckCircle2 className="w-5 h-5 text-amber-500/70 mt-0.5 flex-shrink-0" /><span>{detail}</span></li>))}</ul></div>
                        <button onClick={() => setSelectedService(null)} className="w-full mt-10 py-3 bg-slate-900 border border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-all uppercase tracking-[0.2em] font-bold text-xs rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.1)]">Cerrar Detalles</button>
                    </div>
                )}
            </MagicModal>
        </section>
    );
};

const Reviews = () => {
    const [selectedReview, setSelectedReview] = useState(null);
    const reviewsData = [
        { text: "Contratamos a Ángel para dirigir un taller de magia para nuestro campus y la experiencia superó todas las expectativas.", author: "Movistar Estudiantes" },
        { text: "Contratamos a Ángel para nuestra boda y fue la clave para que el cóctel fuera espectacular. La magia de cerca que hace es de otro nivel.", author: "Sofía y David" },
        { text: "Ángel transformó la comunión de nuestro sobrino en algo verdaderamente excepcional.", author: "Comunión de Marcos" },
        { text: "Ángel fue el que inauguró nuestra peña, ¡y lo hizo a lo grande! Nos dejó a todos clavados en el asiento.", author: "Peña 'La Escombrera' (Torrelodones)" },
        { text: "Un espectáculo de magia de salón impecable para la fiesta de cumpleaños.", author: "Ana P. (Fiesta Privada)" },
        { text: "Una experiencia absolutamente mágica. Hizo que nuestra cena de empresa se convirtiera en un evento único.", author: "Carlos M. (Cena de Empresa)" }
    ];
    const ParallaxReview = ({ children, baseVelocity = 5 }) => {
        const baseX = useMotionValue(0);
        const { scrollY } = useScroll();
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
        const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
        const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
        const directionFactor = useRef(1);
        useAnimationFrame((t, delta) => {
            let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
            if (velocityFactor.get() < 0) directionFactor.current = -1; else if (velocityFactor.get() > 0) directionFactor.current = 1;
            moveBy += directionFactor.current * moveBy * velocityFactor.get();
            baseX.set(baseX.get() + moveBy);
        });
        return (<div className="flex flex-nowrap gap-8 overflow-hidden py-10"><motion.div style={{ x }} className="flex flex-nowrap gap-8">{children}{children}{children}{children}</motion.div></div>);
    };
    return (
        <section id="reviews" className={`py-16 relative overflow-hidden bg-slate-950/50 ${selectedReview ? 'z-50' : 'z-10'}`}>
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-4 flex items-center justify-center gap-3"><span className="w-8 h-[1px] bg-amber-500"></span> LA VOZ DE NUESTROS CLIENTES <span className="w-8 h-[1px] bg-amber-500"></span></h2>
                <h3 className="text-2xl md:text-4xl font-[Cinzel] text-white">La mejor prueba de un evento inolvidable.</h3>
                <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-sm font-light">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>Haz click en una reseña para leerla completa</span>
                </div>
            </div>
            <ParallaxReview baseVelocity={-1}>
                {reviewsData.map((review, index) => (
                    <motion.div key={index} className="w-[85vw] md:w-[450px] flex-shrink-0 bg-slate-900/40 border border-slate-800 backdrop-blur-md p-8 rounded-xl relative group hover:border-amber-500/30 transition-colors cursor-pointer" whileHover={{ scale: 1.02, y: -5 }} onClick={() => setSelectedReview(review)}>
                        <Quote className="w-8 h-8 text-amber-500/20 absolute top-6 right-6" />
                        <div className="mb-4"><div className="flex gap-1 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />))}</div></div>
                        <p className="text-slate-300 font-light italic mb-6 leading-relaxed line-clamp-4">"{review.text}"</p>
                        <div className="flex items-center gap-3 mt-auto"><div className="w-8 h-[1px] bg-amber-500/50" /><p className="text-white font-[Cinzel] text-sm font-bold uppercase">{review.author}</p></div>
                    </motion.div>
                ))}
            </ParallaxReview>
            <MagicModal isOpen={!!selectedReview} onClose={() => setSelectedReview(null)}>
                {selectedReview && (
                    <div className="p-8 md:p-14 text-center">
                        <Quote className="w-10 h-10 md:w-12 md:h-12 text-amber-500/40 mx-auto mb-4" />
                        <p className="text-lg md:text-2xl font-light italic text-slate-200 leading-relaxed mb-6">"{selectedReview.text}"</p>
                        <div className="w-16 h-[2px] bg-amber-500/50 mx-auto mb-6" />
                        <div className="flex flex-col items-center gap-2"><div className="flex gap-1 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />))}</div><h4 className="text-white font-[Cinzel] text-base font-bold uppercase">{selectedReview.author}</h4></div>
                        <button onClick={() => setSelectedReview(null)} className="w-full mt-10 py-3 bg-slate-900 border border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-all uppercase tracking-[0.2em] font-bold text-xs rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.1)]">Cerrar Reseña</button>
                    </div>
                )}
            </MagicModal>
        </section>
    );
};

const EmotionalSection = () => {
    return (
        <section className="py-24 relative z-10 overflow-hidden flex items-center justify-center min-h-[50vh]">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-80">
                    <source src="/cambio-carta.mp4" type="video/mp4" />
                    <div className="w-full h-full bg-slate-950"></div>
                </video>
                <div className="absolute inset-0 bg-slate-950/50" />
            </div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: "-20%" }} transition={{ duration: 1 }}>
                    <p className="text-xl md:text-4xl font-[Cinzel] text-slate-200 leading-tight mb-8 drop-shadow-lg">"La gente olvidará lo que dijiste, olvidará lo que hiciste, pero <span className="text-amber-400">nunca olvidará cómo les hiciste sentir</span>."</p>
                    <p className="text-slate-500 uppercase tracking-widest text-xs md:text-sm">— Angel Ruiz</p>
                </motion.div>
            </div>
        </section>
    );
};

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "EntertainmentBusiness",
        "name": "Angel Ruiz Ilusionista",
        "url": "https://angelruiz.world",
        "image": "https://angelruiz.world/images/foto-bio.png",
        "description": "Ilusionista profesional especializado en Magia de Cerca y Magia de Cóctel para eventos corporativos, bodas y fiestas VIP.",
        "telephone": "+34648055636",
        "email": "angellruuiz@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "ES"
        },
        "sameAs": [
            "https://instagram.com/angellruuiz",
            "https://tiktok.com/@angellruuiz"
        ]
    };

    return (
        <div className="bg-slate-950 min-h-screen text-slate-200">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <MagicCursor />
            <ParticleBackground />
            
            <nav className={`fixed top-0 left-0 w-full z-40 flex justify-between items-center transition-all ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 px-6 md:px-12 shadow-lg' : 'p-6 md:px-12 mix-blend-difference'}`}>
                <div className="flex items-center text-xl font-[Cinzel] font-bold text-amber-500 tracking-widest z-10">AR</div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-sm uppercase tracking-widest text-slate-300"><a href="#bio" className="hover:text-amber-400 transition-colors">Sobre Mí</a><a href="#services" className="hover:text-amber-400 transition-colors">Servicios</a><a href="#reviews" className="hover:text-amber-400 transition-colors">Clientes</a></div>
                <button onClick={() => setIsContactOpen(true)} className="hidden md:block border border-amber-500/50 px-6 py-2 rounded-full text-xs uppercase hover:bg-amber-500 hover:text-slate-950 cursor-pointer z-10 transition-colors">Contacto</button>
            </nav>

            <main>
                <Hero onOpenModal={() => setIsContactOpen(true)} />
                <TrustedBrands />
                <Biography />
                <Services selectedService={selectedService} setSelectedService={setSelectedService} disabled={isChatOpen} />
                <Reviews />
                <EmotionalSection />
            </main>

            <footer className="mt-20 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm text-left relative z-10">
                <div className="w-full px-6 py-12 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6 text-left">
                            <h3 className="text-3xl font-[Cinzel] text-white font-bold">Angel Ruiz</h3>
                            <p className="text-slate-300 text-lg leading-relaxed max-w-lg">Ilusionista profesional para eventos corporativos,<br />celebraciones y bodas.</p>
                            <button onClick={() => setIsContactOpen(true)} className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full border border-amber-500 text-amber-500 font-bold uppercase tracking-widest text-xs hover:text-slate-950 transition-colors mt-6">
                                <span className="relative z-10 flex items-center justify-center gap-2">Reservar Experiencia <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                                <div className="absolute inset-0 bg-amber-500 w-0 group-hover:w-full transition-all duration-300 ease-out z-0" />
                            </button>
                        </div>
                        <div className="space-y-6 md:text-right text-left">
                            <h4 className="text-xl font-bold tracking-widest text-amber-500 uppercase">CONTACTO:</h4>
                            <div className="flex flex-col md:items-end items-start gap-3 text-slate-300 text-base md:text-lg">
                                <a href="tel:+34648055636" className="hover:text-amber-400 transition-colors">+34 648 05 56 36</a>
                                <a href="mailto:angellruuiz@gmail.com" className="hover:text-amber-400 transition-colors">angellruuiz@gmail.com</a>
                                <a href="https://instagram.com/angellruuiz" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Instagram</a>
                                <a href="https://tiktok.com/@angellruuiz" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">TikTok</a>
                            </div>
                            <div className="pt-8 text-sm text-slate-500"><p>© 2026 Angel Ruiz. Todos los derechos reservados.</p></div>
                        </div>
                    </div>
                </div>
            </footer>

            <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            
            <Chatbot hidden={!!selectedService || isContactOpen} isOpenExternal={isChatOpen} setIsOpenExternal={setIsChatOpen} />
        </div>
    );
}
