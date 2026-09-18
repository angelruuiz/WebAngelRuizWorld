"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getLocalMetrics, trackEvent } from '../../lib/tracker';

export default function AnalyticsPanel() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [metrics, setMetrics] = useState(null);
    const [timeframe, setTimeframe] = useState('30d');
    const [isAuditingPSI, setIsAuditingPSI] = useState(false);
    const [psiResult, setPsiResult] = useState(null);
    const [telegramStatus, setTelegramStatus] = useState({ tested: false, message: '', loading: false });
    const [toast, setToast] = useState(null);

    useEffect(() => {
        const auth = sessionStorage.getItem('ar_panel_auth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
        const data = getLocalMetrics();
        setMetrics(data);
    }, []);

    const showToast = (msg, type = 'success') => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3500);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!password || isSubmitting) return;

        setIsSubmitting(true);
        setErrorMessage("");
        setLoginError(false);

        if (password.trim() === '888888') {
            setIsAuthenticated(true);
            sessionStorage.setItem('ar_panel_auth', 'true');
            setLoginError(false);
            setPassword("");
            showToast('¡Acceso concedido al panel!');
        } else {
            setLoginError(true);
            setErrorMessage("Contraseña incorrecta.");
            setTimeout(() => setLoginError(false), 3000);
        }
        setIsSubmitting(false);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('ar_panel_auth');
        setPassword("");
        showToast('Sesión cerrada.');
    };

    const handleAuditPSI = async () => {
        setIsAuditingPSI(true);
        showToast('Consultando API de Google PageSpeed en tiempo real...', 'info');
        try {
            const res = await fetch('/api/metrics?action=pagespeed&url=https://angelruiz.world');
            const data = await res.json();
            if (data.success) {
                setPsiResult(data);
                showToast('¡Auditoría de Google completada!');
            }
        } catch (e) {
            showToast('No se pudo completar el test con Google PSI', 'error');
        } finally {
            setIsAuditingPSI(false);
        }
    };

    const handleTestTelegram = async () => {
        setTelegramStatus({ tested: true, loading: true, message: '' });
        try {
            const res = await fetch('/api/metrics?action=test_telegram');
            const data = await res.json();
            setTelegramStatus({
                tested: true,
                loading: false,
                configured: data.configured,
                message: data.message
            });
            if (data.success) {
                showToast('¡Mensaje enviado a tu Telegram!');
            }
        } catch (e) {
            setTelegramStatus({
                tested: true,
                loading: false,
                configured: false,
                message: 'No se pudo conectar con el endpoint.'
            });
        }
    };

    const handleSimulateAction = (type, customData = {}) => {
        trackEvent(type, customData);
        setMetrics(getLocalMetrics());
        showToast(`Evento registrado: ${type}`);
    };

    const handleResetMetrics = () => {
        if (window.confirm('¿Deseas reiniciar los contadores locales a cero?')) {
            localStorage.removeItem('ar_analytics_data_v2');
            setMetrics(getLocalMetrics());
            showToast('Contadores reiniciados a 0');
        }
    };

    // =========================================================================
    // VISTA DE ACCESO CON CONTRASEÑA (PIN 888888)
    // =========================================================================
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 font-sans selection:bg-amber-500/30 selection:text-amber-200">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md bg-slate-900/60 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.15)] relative overflow-hidden"
                >
                    <div className="absolute -top-20 -right-20 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
                            <svg className="w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-[Cinzel] text-white uppercase tracking-widest font-bold">
                            Acceso al Panel
                        </h1>
                        <p className="text-slate-400 text-xs mt-1.5 font-medium tracking-wider uppercase font-mono">
                            angelruiz.world · Control Privado
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-400/80 ml-2 block">
                                Contraseña de Acceso
                            </label>
                            <div className="relative">
                                <input 
                                    type="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full bg-slate-950/80 border ${loginError ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]' : 'border-white/15 focus:border-amber-400'} rounded-2xl py-3.5 px-5 text-center text-white placeholder:text-slate-600 outline-none transition-all font-mono text-lg tracking-[0.4em] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]`}
                                    placeholder="••••••"
                                    autoFocus
                                    disabled={isSubmitting}
                                />
                            </div>
                            {errorMessage && (
                                <p className="text-red-400 text-xs text-center mt-2 font-medium animate-pulse">
                                    {errorMessage}
                                </p>
                            )}
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting || !password}
                            className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold py-3.5 px-6 rounded-2xl uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-95"
                        >
                            <span>Desbloquear Panel</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                        </button>
                    </form>

                    <div className="mt-6 pt-5 border-t border-white/10 text-center">
                        <Link 
                            href="/" 
                            className="text-xs text-slate-500 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                        >
                            <span>← Volver a angelruiz.world</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    if (!metrics) {
        return (
            <div className="min-h-screen bg-[#030712] flex items-center justify-center text-amber-400 font-mono text-sm">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                    <span>Cargando Métricas Reales...</span>
                </div>
            </div>
        );
    }

    const vitals = psiResult || metrics.technicalVitals;

    return (
        <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 pb-20">
            {/* Header */}
            <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-2 group">
                            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center font-bold text-slate-950 text-xs shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                                AR
                            </span>
                            <div className="text-left">
                                <span className="text-xs font-bold font-[Cinzel] tracking-widest text-amber-400 block group-hover:text-amber-300 transition-colors">
                                    ANGEL RUIZ
                                </span>
                                <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">
                                    Panel de Métricas Reales
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>MONITORIZACIÓN ACTIVA</span>
                        </div>
                        <button 
                            onClick={handleLogout}
                            className="px-3 py-1.5 rounded-lg border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-xs text-red-400 transition-colors flex items-center gap-1.5"
                            title="Bloquear y cerrar sesión"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                            <span className="hidden sm:inline">Cerrar Sesión</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Dashboard Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
                
                {/* Control Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/40 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-white font-[Cinzel] flex items-center gap-2">
                            <span>Métricas de</span>
                            <span className="text-amber-400 underline decoration-amber-500/50">angelruiz.world</span>
                        </h1>
                        <p className="text-xs text-slate-400 mt-0.5 font-light">
                            Medición de conversiones, formularios, llamadas directas y rendimiento técnico.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        {/* Audit PSI Button */}
                        <button
                            onClick={handleAuditPSI}
                            disabled={isAuditingPSI}
                            className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-2 transition-colors disabled:opacity-50"
                        >
                            <svg className={`w-3.5 h-3.5 ${isAuditingPSI ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                            <span>{isAuditingPSI ? 'Auditando...' : 'Auditar Google en Vivo'}</span>
                        </button>

                        {/* Test Telegram Modal Button */}
                        <button
                            onClick={handleTestTelegram}
                            className="px-3.5 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                        >
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.38-.49 1.04-.75 4.09-1.78 6.82-2.95 8.19-3.52 3.9-1.63 4.71-1.91 5.24-1.92.12 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.18-.04.31z"/></svg>
                            <span>Probar Bot Telegram</span>
                        </button>

                        {/* Reset Local Data Button */}
                        <button
                            onClick={handleResetMetrics}
                            className="px-2.5 py-1.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white text-xs transition-colors"
                            title="Reiniciar contadores"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                        </button>
                    </div>
                </div>

                {/* Telegram Config Notice */}
                {telegramStatus.tested && (
                    <div className={`p-4 rounded-2xl border text-xs flex items-center justify-between gap-4 ${telegramStatus.configured ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300' : 'bg-amber-950/40 border-amber-500/30 text-amber-300'}`}>
                        <div className="flex items-center gap-3">
                            <span className="text-base">{telegramStatus.configured ? '✅' : 'ℹ️'}</span>
                            <div>
                                <p className="font-semibold">{telegramStatus.message}</p>
                                {!telegramStatus.configured && (
                                    <p className="text-[11px] text-slate-400 mt-0.5">
                                        Para recibir las alertas en tu Telegram, añade tus credenciales en <code className="text-amber-400 bg-black/40 px-1.5 py-0.5 rounded">.env.local</code>: <code>TELEGRAM_BOT_TOKEN</code> y <code>TELEGRAM_CHAT_ID</code>.
                                    </p>
                                )}
                            </div>
                        </div>
                        <button onClick={() => setTelegramStatus({ tested: false })} className="text-slate-400 hover:text-white text-xs underline">Cerrar</button>
                    </div>
                )}

                {/* ========================================================================= */}
                {/* 1. CAPTACIÓN DE CLIENTES & CONTACTOS GENERADOS */}
                {/* ========================================================================= */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)]"></span>
                            <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-200">
                                1. Captación de Clientes & Contactos Generados
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Card 1: Formularios de contratación */}
                        <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-500/30 transition-all backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
                            <span className="text-xs text-slate-400 font-medium block">Formularios de contratación</span>
                            <div className="text-4xl font-extrabold text-white font-[Cinzel] my-2">
                                {metrics.contacts.total}
                            </div>
                            <div className="space-y-1.5 pt-2 border-t border-white/5 text-[11px] text-slate-300">
                                {metrics.contacts.breakdown.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                        <span className="text-slate-400">{item.count}</span>
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card 2: Clics a WhatsApp */}
                        <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/30 transition-all backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
                            <span className="text-xs text-slate-400 font-medium block">Clics a WhatsApp</span>
                            <div className="text-4xl font-extrabold text-white font-[Cinzel] my-2">
                                {metrics.whatsappClicks}
                            </div>
                            <div className="pt-2 border-t border-white/5">
                                <span className="text-emerald-400 text-xs font-semibold block">Medición activa</span>
                                <span className="text-slate-500 text-[11px] block mt-0.5">Disparado al pulsar enlace</span>
                            </div>
                        </div>

                        {/* Card 3: Llamadas directas */}
                        <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-sky-500/30 transition-all backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/10 transition-colors"></div>
                            <span className="text-xs text-slate-400 font-medium block">Llamadas directas</span>
                            <div className="text-4xl font-extrabold text-white font-[Cinzel] my-2">
                                {metrics.phoneCalls}
                            </div>
                            <div className="pt-2 border-t border-white/5">
                                <span className="text-slate-300 text-xs font-semibold block">Marcadas desde móvil</span>
                                <span className="text-slate-500 text-[11px] block mt-0.5">Disparado con enlace tel:</span>
                            </div>
                        </div>

                        {/* Card 4: Tasa de conversión web */}
                        <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-500/30 transition-all backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
                            <span className="text-xs text-slate-400 font-medium block">Tasa de conversión</span>
                            <div className="text-4xl font-extrabold text-amber-400 font-[Cinzel] my-2">
                                {metrics.conversionRate}
                            </div>
                            <div className="pt-2 border-t border-white/5">
                                <span className="text-slate-400 text-xs block">Contactos / Visitas</span>
                                <span className="text-slate-500 text-[11px] block mt-0.5">Calculado automáticamente</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 2. PROCEDENCIA DE VISITANTES & MOTORES DE IA */}
                {/* ========================================================================= */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></span>
                            <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-200">
                                2. Procedencia de Visitantes & Motores de IA
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Canales de Adquisición */}
                        <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                                Canales de Adquisición
                            </h3>
                            <div className="space-y-4">
                                {metrics.acquisitionChannels.map((channel, idx) => (
                                    <div key={idx} className="space-y-1.5">
                                        <div className="flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: channel.color }}></span>
                                                <span className="text-slate-200">{channel.name}</span>
                                            </div>
                                            <div className="text-right font-mono">
                                                <strong className="text-white">{channel.percentage}%</strong>
                                                <span className="text-slate-500 text-[11px] ml-1.5">({channel.visits} visitas)</span>
                                            </div>
                                        </div>
                                        <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                                            <div 
                                                className="h-full rounded-full transition-all duration-700" 
                                                style={{ width: `${Math.max(channel.percentage, 0)}%`, backgroundColor: channel.color }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Términos Clave de Posicionamiento */}
                        <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                                Palabras Clave Principales en Seguimiento
                            </h3>
                            <div className="space-y-2.5">
                                {metrics.keywords.map((kw, idx) => (
                                    <div 
                                        key={idx}
                                        className={`flex items-center justify-between p-3 rounded-xl border transition-all text-xs ${
                                            kw.isAI 
                                                ? 'bg-purple-950/30 border-purple-500/30' 
                                                : 'bg-slate-950/60 border-white/5'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-slate-400 font-mono text-[11px]">#{idx + 1}</span>
                                            <span className={`font-medium ${kw.isAI ? 'text-purple-200' : 'text-slate-200'}`}>
                                                {kw.isAI ? kw.query : `"${kw.query}"`}
                                            </span>
                                        </div>
                                        <span className={`px-2.5 py-1 rounded-lg font-mono text-[11px] font-semibold ${
                                            kw.isAI 
                                                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                                                : 'bg-slate-800 text-slate-300 border border-white/10'
                                        }`}>
                                            {kw.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 3. RENDIMIENTO TÉCNICO & CORE WEB VITALS */}
                {/* ========================================================================= */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]"></span>
                            <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-200">
                                3. Rendimiento Técnico & Core Web Vitals
                            </h2>
                        </div>
                        {psiResult && (
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                Auditado en Vivo con Google PSI
                            </span>
                        )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                        {/* Performance Score */}
                        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
                            <span className="text-[11px] text-slate-400 uppercase font-mono block mb-1">Rendimiento</span>
                            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                                {vitals.performanceScore !== null ? `${vitals.performanceScore}/100` : '--'}
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1 block">Google PageSpeed</span>
                        </div>

                        {/* SEO Score */}
                        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
                            <span className="text-[11px] text-slate-400 uppercase font-mono block mb-1">SEO Técnico</span>
                            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                                {vitals.seoScore !== null ? `${vitals.seoScore}/100` : '--'}
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1 block">Google Lighthouse</span>
                        </div>

                        {/* LCP */}
                        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
                            <span className="text-[11px] text-slate-400 uppercase font-mono block mb-1">Carga (LCP)</span>
                            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                                {vitals.lcp}
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1 block">Medición móvil</span>
                        </div>

                        {/* FCP */}
                        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
                            <span className="text-[11px] text-slate-400 uppercase font-mono block mb-1">Pintado (FCP)</span>
                            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                                {vitals.fcp}
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1 block">Primer render</span>
                        </div>

                        {/* CLS */}
                        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
                            <span className="text-[11px] text-slate-400 uppercase font-mono block mb-1">Estabilidad (CLS)</span>
                            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                                {vitals.cls}
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1 block">Desplazamiento visual</span>
                        </div>

                        {/* Uptime */}
                        <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
                            <span className="text-[11px] text-slate-400 uppercase font-mono block mb-1">Disponibilidad</span>
                            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                                {vitals.uptime}
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1 block">Servidor Vercel</span>
                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 4. SOLICITUDES DE CONTACTO REGISTRADAS */}
                {/* ========================================================================= */}
                <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-md space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                            <span>Solicitudes de Contacto Registradas</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">En Vivo</span>
                        </h3>
                    </div>

                    {metrics.recentLeads && metrics.recentLeads.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            {metrics.recentLeads.map((lead) => (
                                <div key={lead.id} className="p-3.5 rounded-xl bg-slate-950 border border-white/5 text-xs">
                                    <div className="flex items-center justify-between font-semibold text-slate-200">
                                        <span>{lead.name}</span>
                                        <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">{lead.status}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1.5">
                                        <span>{lead.type}</span>
                                        <span>{lead.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-slate-500 text-xs font-light border border-dashed border-white/10 rounded-xl">
                            <p>No hay solicitudes registradas todavía.</p>
                            <p className="text-[11px] text-slate-600 mt-1">
                                Cada vez que un usuario rellene el formulario de tu web, aparecerá aquí en tiempo real.
                            </p>
                        </div>
                    )}
                </section>

            </main>

            {/* Floating Toast */}
            {toast && (
                <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 text-xs shadow-2xl shadow-black/80 flex items-center gap-2 animate-bounce">
                    <span>✨</span>
                    <span>{toast.msg}</span>
                </div>
            )}
        </div>
    );
}
