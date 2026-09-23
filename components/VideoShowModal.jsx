"use client";

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from './Icons';

export default function VideoShowModal({ isOpen, onClose, onOpenContact }) {
    const [mounted, setMounted] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(() => {
                    // Autoplay with sound might require user gesture on some mobile browsers
                });
            }
        } else {
            document.body.style.overflow = 'unset';
            if (videoRef.current) {
                videoRef.current.pause();
            }
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted) return null;

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100003] flex items-center justify-center p-3 sm:p-4 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#030712]/90 backdrop-blur-xl z-[-1] cursor-pointer"
                    />

                    {/* Modal Card with vertical flex layout: Header, Video (controls fully accessible), Footer CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                        className="relative h-[88vh] sm:h-[90vh] max-h-[820px] w-full max-w-[420px] bg-slate-950 rounded-[1.5rem] sm:rounded-[2rem] border border-[#d4a853]/40 shadow-[0_0_60px_rgba(0,0,0,0.95),0_0_30px_rgba(212,168,83,0.2)] overflow-hidden z-10 flex flex-col"
                    >
                        {/* Top Bar Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-white/10 shrink-0 z-30">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[11px] font-semibold text-[#d4a853] uppercase tracking-wider font-accent">
                                    Show en Directo · Badulaque
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                aria-label="Cerrar vídeo"
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#d4a853] text-slate-300 hover:text-slate-950 flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#d4a853] cursor-pointer shadow-md"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Video Container: Controls are completely unobstructed */}
                        <div className="relative flex-1 min-h-0 w-full bg-black flex items-center justify-center overflow-hidden">
                            <video
                                ref={videoRef}
                                src="/videos/show-badulaque.mp4"
                                poster="/videos/show-badulaque-poster.webp"
                                controls
                                loop
                                playsInline
                                preload="metadata"
                                className="w-full h-full object-cover block"
                            />
                        </div>

                        {/* Dedicated Bottom CTA Bar below video controls */}
                        <div className="p-3 sm:p-3.5 bg-slate-950 border-t border-[#d4a853]/25 shrink-0 z-30">
                            <button
                                onClick={() => {
                                    onClose();
                                    if (onOpenContact) onOpenContact();
                                }}
                                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#d4a853] to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Pedir presupuesto para mi evento</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
}
