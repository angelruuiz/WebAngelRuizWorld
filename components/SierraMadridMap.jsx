"use client";
import { motion } from 'framer-motion';

export default function SierraMadridMap() {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[650px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group"
        >
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200000.344476685!2d-3.98!3d40.50!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDMwJzAwLjAiTiAzwrA1NScwMC4wIlc!5e0!3m2!1ses!2ses!4v1712754890000!5m2!1ses!2ses" 
                className="w-full h-full grayscale invert opacity-70 contrast-125 border-0 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700 select-none pb-8" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-3xl" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-950/90 backdrop-blur-xl px-6 py-3 rounded-full border border-amber-500/40 text-[11px] text-amber-400 font-bold uppercase tracking-[0.3em] whitespace-nowrap shadow-2xl">
                Zona de Actuación
            </div>
        </motion.div>
    );
}
