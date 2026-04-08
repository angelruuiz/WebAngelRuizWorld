"use client";
import { useState } from 'react';
import { ContactFormModal } from '@/components/Modals';

export default function ContactButtonClient({ label = "Reservar Fecha", className }) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsContactOpen(true)}
                className={className || "px-10 py-5 bg-amber-500 text-slate-950 font-bold rounded-full uppercase tracking-widest hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 w-full md:w-auto"}
            >
                {label}
            </button>
            <ContactFormModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </>
    );
}
