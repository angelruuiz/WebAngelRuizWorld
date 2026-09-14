"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck, ChevronDown, ChevronUp, ExternalLink, Check, X } from 'lucide-react';

export default function CookieBanner() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

    useEffect(() => {
        if (pathname?.startsWith('/parpell')) return;

        // Comprobar estado de consentimiento almacenado
        const storedConsent = localStorage.getItem('cookie_consent');
        const legacyAccepted = localStorage.getItem('cookies_accepted');

        if (storedConsent === 'accepted' || (storedConsent === null && legacyAccepted === 'true')) {
            setAnalyticsEnabled(true);
        } else if (storedConsent === 'denied' || legacyAccepted === 'false') {
            setAnalyticsEnabled(false);
        }

        // Si el usuario aún no ha decidido, mostrar tras 1 segundo
        if (!storedConsent && legacyAccepted === null) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }

        // Permitir abrir el gestor desde cualquier parte (Footer, página de cookies, etc.)
        const handleOpenSettings = () => {
            const currentConsent = localStorage.getItem('cookie_consent');
            setAnalyticsEnabled(currentConsent === 'accepted');
            setShowSettings(true);
            setIsVisible(true);
        };

        window.addEventListener('open_cookie_settings', handleOpenSettings);
        window.openCookieSettings = handleOpenSettings;

        return () => {
            window.removeEventListener('open_cookie_settings', handleOpenSettings);
        };
    }, [pathname]);

    // No mostrar en la ruta /parpell
    if (pathname?.startsWith('/parpell')) {
        return null;
    }

    const saveConsent = (consentType, analyticsAllowed) => {
        try {
            localStorage.setItem('cookie_consent', consentType);
            localStorage.setItem('cookie_analytics', analyticsAllowed ? 'true' : 'false');
            localStorage.setItem('cookies_accepted', analyticsAllowed ? 'true' : 'false');
            localStorage.setItem('cookie_consent_date', new Date().toISOString());
        } catch (e) {
            console.error('Error guardando preferencia de cookies', e);
        }

        setIsVisible(false);
        setShowSettings(false);

        // Notificar a AnalyticsLoader y al resto de la aplicación
        if (typeof window !== 'undefined') {
            window.dispatchEvent(
                new CustomEvent('cookie_consent_updated', {
                    detail: { consent: consentType, analytics: analyticsAllowed }
                })
            );
        }
    };

    const handleAcceptAll = () => {
        setAnalyticsEnabled(true);
        saveConsent('accepted', true);
    };

    const handleDenyAll = () => {
        setAnalyticsEnabled(false);
        saveConsent('denied', false);
    };

    const handleSaveCustom = () => {
        saveConsent(analyticsEnabled ? 'accepted' : 'denied', analyticsEnabled);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.aside
                    role="dialog"
                    aria-modal="false"
                    aria-labelledby="cookie-title"
                    aria-describedby="cookie-desc"
                    initial={{ y: 60, opacity: 0, scale: 0.96 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 60, opacity: 0, scale: 0.96 }}
                    transition={{ type: "spring", damping: 26, stiffness: 260 }}
                    className="fixed bottom-4 left-4 right-4 z-[999] md:bottom-6 md:right-6 md:left-auto md:max-w-lg"
                >
                    <div className="bg-slate-950/95 backdrop-blur-2xl border border-amber-500/25 p-5 md:p-6 rounded-3xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.85),0_0_35px_rgba(212,168,83,0.12)] text-slate-200">
                        {/* Cabecera */}
                        <div className="flex items-start gap-3.5 mb-3">
                            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-400">
                                <Cookie className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <h2 id="cookie-title" className="text-white font-[Cinzel] text-sm md:text-base font-bold uppercase tracking-wider">
                                        Gestión de Cookies
                                    </h2>
                                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400/90 font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                        <ShieldCheck className="w-3 h-3" />
                                        RGPD
                                    </span>
                                </div>
                                <p id="cookie-desc" className="text-slate-300 text-xs leading-relaxed mt-1">
                                    Utilizamos cookies técnicas indispensables para el funcionamiento y seguridad de la web, y cookies analíticas para conocer cómo interactúas con el sitio y optimizar nuestros servicios.
                                </p>
                            </div>
                        </div>

                        {/* Enlace destacado para Consultar la Política de Cookies */}
                        <div className="mb-4 pl-[52px]">
                            <Link 
                                href="/cookies" 
                                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4 decoration-amber-500/40 hover:decoration-amber-300 transition-colors"
                            >
                                <span>Consultar la política de cookies</span>
                                <ExternalLink className="w-3 h-3" />
                            </Link>
                        </div>

                        {/* Panel desplegable de configuración granular */}
                        <AnimatePresence>
                            {showSettings && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="overflow-hidden border-t border-white/10 pt-3 mb-4 space-y-3"
                                >
                                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                        Configuración de preferencias
                                    </div>

                                    {/* Cookies Técnicas (Obligatorias) */}
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-start justify-between gap-3">
                                        <div className="text-xs space-y-0.5">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-white">Cookies Técnicas</span>
                                                <span className="text-[10px] px-2 py-0.2 rounded-full bg-slate-800 text-slate-300 border border-white/10">
                                                    Siempre activas
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-slate-400">
                                                Necesarias para navegar, la seguridad del sitio y memorizar tus preferencias de privacidad.
                                            </p>
                                        </div>
                                        <div className="w-9 h-5 bg-amber-500/30 rounded-full flex items-center justify-end px-1 flex-shrink-0 cursor-not-allowed opacity-75">
                                            <div className="w-3.5 h-3.5 bg-amber-400 rounded-full flex items-center justify-center">
                                                <Check className="w-2.5 h-2.5 text-slate-950 stroke-[3]" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cookies Analíticas (Opcionales) */}
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-start justify-between gap-3">
                                        <div className="text-xs space-y-0.5">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-white">Cookies Analíticas</span>
                                                <span className="text-[10px] px-2 py-0.2 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                                                    Opcionales
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-slate-400">
                                                Permiten elaborar estadísticas anónimas sobre las visitas (Google Analytics con IP anonimizada y Vercel Analytics).
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                                            role="switch"
                                            aria-checked={analyticsEnabled}
                                            className={`w-10 h-6 rounded-full transition-colors relative flex-shrink-0 p-0.5 cursor-pointer ${
                                                analyticsEnabled ? 'bg-amber-500' : 'bg-slate-700'
                                            }`}
                                        >
                                            <span
                                                className={`w-5 h-5 rounded-full bg-white block transition-transform shadow-md ${
                                                    analyticsEnabled ? 'translate-x-4' : 'translate-x-0'
                                                }`}
                                            />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Botones de acción principales */}
                        <div className="flex flex-col gap-2 pt-1 border-t border-white/10">
                            <div className="grid grid-cols-2 gap-2.5">
                                <button
                                    type="button"
                                    onClick={handleDenyAll}
                                    className="w-full py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/15 hover:border-white/30 transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
                                >
                                    <X className="w-3.5 h-3.5" />
                                    <span>Denegar</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={handleAcceptAll}
                                    className="w-full py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
                                >
                                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                    <span>Aceptar cookies</span>
                                </button>
                            </div>

                            {/* Fila secundaria: Configurar / Guardar selección */}
                            <div className="flex items-center justify-between pt-1 text-xs">
                                <button
                                    type="button"
                                    onClick={() => setShowSettings(!showSettings)}
                                    className="text-slate-400 hover:text-white text-[11px] font-medium tracking-wide flex items-center gap-1 py-1 transition-colors"
                                >
                                    <span>{showSettings ? 'Ocultar ajustes' : 'Personalizar configuración'}</span>
                                    {showSettings ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                                </button>

                                {showSettings && (
                                    <button
                                        type="button"
                                        onClick={handleSaveCustom}
                                        className="text-amber-400 hover:text-amber-300 text-[11px] font-bold uppercase tracking-wider underline underline-offset-4 py-1 transition-colors"
                                    >
                                        Guardar preferencias
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.aside>
            )}
        </AnimatePresence>
    );
}
