"use client";
import { useEffect, useState } from 'react';

export default function LanguageSwitcher({ className = "" }) {
    const [currentLang, setCurrentLang] = useState('es');

    useEffect(() => {
        // Read language from cookie
        const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
        if (match && match[1].includes('/en')) {
            setCurrentLang('en');
        } else {
            setCurrentLang('es');
        }

        // Initialize Google Translate script if cookie was set to en
        if (match && match[1].includes('/en')) {
            loadGoogleTranslate();
        }
    }, []);

    const loadGoogleTranslate = () => {
        if (window.google && window.google.translate) {
            return;
        }

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: 'es', includedLanguages: 'en,es', autoDisplay: false },
                'google_translate_element'
            );
        };

        if (!document.getElementById('google-translate-script')) {
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        }
    };

    const changeLanguage = (lang) => {
        if (lang === currentLang) return;

        const val = lang === 'en' ? '/es/en' : '/es/es';
        
        // Set cookie for both domain and localhost
        document.cookie = `googtrans=${val}; path=/;`;
        const hostname = window.location.hostname;
        if (hostname.includes('angelruiz.world')) {
            document.cookie = `googtrans=${val}; path=/; domain=.angelruiz.world;`;
        }

        setCurrentLang(lang);

        if (lang === 'en') {
            loadGoogleTranslate();
            setTimeout(() => {
                window.location.reload();
            }, 150);
        } else {
            // Revert to Spanish
            document.cookie = 'googtrans=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            if (hostname.includes('angelruiz.world')) {
                document.cookie = 'googtrans=; Path=/; domain=.angelruiz.world; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }
            window.location.reload();
        }
    };

    return (
        <div className={`inline-flex items-center rounded-full bg-white/5 border border-white/10 p-1 text-xs font-semibold backdrop-blur-md ${className}`}>
            <div id="google_translate_element" className="hidden" aria-hidden="true"></div>
            
            <button
                type="button"
                onClick={() => changeLanguage('es')}
                aria-label="Cambiar idioma a Español"
                className={`px-2 py-0.5 rounded-full transition-all text-[11px] uppercase tracking-wider ${
                    currentLang === 'es'
                        ? 'bg-[#d4a853] text-[#030712] font-black shadow-sm'
                        : 'text-slate-400 hover:text-white'
                }`}
            >
                ES
            </button>
            <span className="text-white/20 text-[10px] mx-0.5">/</span>
            <button
                type="button"
                onClick={() => changeLanguage('en')}
                aria-label="Switch language to English"
                className={`px-2 py-0.5 rounded-full transition-all text-[11px] uppercase tracking-wider ${
                    currentLang === 'en'
                        ? 'bg-[#d4a853] text-[#030712] font-black shadow-sm'
                        : 'text-slate-400 hover:text-white'
                }`}
            >
                EN
            </button>
        </div>
    );
}
