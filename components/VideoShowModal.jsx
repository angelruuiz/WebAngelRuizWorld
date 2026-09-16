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

                    {/* Modal Card 9:16 aspect-ratio */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                        className="relative w-full max-w-[360px] sm:max-w-[400px] h-[85vh] max-h-[740px] bg-slate-950/90 rounded-[2rem] border border-[#d4a853]/30 shadow-[0_0_60px_rgba(0,0,0,0.9),0_0_30px_rgba(212,168,83,0.15)] flex flex-col overflow-hidden z-10"
                    >
                        {/* Header bar with title and close button */}
                        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-[#030712]/90 via-[#030712]/60 to-transparent">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[11px] font-semibold text-[#d4a853] uppercase tracking-wider font-accent">
                                    Show en Directo · Badulaque
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                aria-label="Cerrar vídeo"
                                className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#d4a853] text-slate-300 hover:text-slate-950 flex items-center justify-center transition-all duration-200 backdrop-blur-md border border-white/10 hover:border-[#d4a853] cursor-pointer"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Video Container */}
                        <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
                            <video
                                ref={videoRef}
                                src="/videos/show-badulaque.mp4"
                                poster="/videos/show-badulaque-poster.webp"
                                controls
                                playsInline
                                preload="metadata"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Bottom CTA Overlay */}
                        <div className="p-3.5 bg-gradient-to-t from-[#030712] via-[#030712]/95 to-transparent border-t border-[#d4a853]/20 flex flex-col gap-2 z-30">
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
