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

                    {/* Modal Card strictly 9:16 aspect-ratio matching the video */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                        className="relative h-[80vh] sm:h-[84vh] max-h-[760px] aspect-[9/16] max-w-[94vw] bg-black rounded-[1.5rem] sm:rounded-[2rem] border border-[#d4a853]/40 shadow-[0_0_60px_rgba(0,0,0,0.95),0_0_30px_rgba(212,168,83,0.2)] overflow-hidden z-10 flex flex-col"
                    >
                        {/* Top Bar Floating Overlay */}
                        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-3 sm:p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none">
                            <div className="flex items-center gap-2 pointer-events-auto">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[11px] font-semibold text-[#d4a853] uppercase tracking-wider font-accent drop-shadow">
                                    Show en Directo · Badulaque
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                aria-label="Cerrar vídeo"
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-[#d4a853] text-slate-300 hover:text-slate-950 flex items-center justify-center transition-all duration-200 backdrop-blur-md border border-white/20 hover:border-[#d4a853] cursor-pointer pointer-events-auto shadow-lg"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Video: 100% full width and height with object-cover so there are ZERO black bars */}
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

                        {/* Bottom CTA Floating Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none z-30">
                            <button
                                onClick={() => {
                                    onClose();
                                    if (onOpenContact) onOpenContact();
                                }}
                                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#d4a853] to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer pointer-events-auto"
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
