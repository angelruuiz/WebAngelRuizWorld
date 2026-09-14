"use client";

import { Cookie } from 'lucide-react';

export default function CookieSettingsTrigger({ className = "" }) {
    const handleClick = () => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('open_cookie_settings'));
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 border border-amber-500/30 hover:border-amber-500/50 text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 ${className}`}
        >
            <Cookie className="w-4 h-4" />
            <span>Abrir panel de configuración de cookies</span>
        </button>
    );
}
