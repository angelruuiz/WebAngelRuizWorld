"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from '@/components/Icons';
import { useRouter } from 'next/navigation';
import MagicSpiral from '@/components/Transitions/MagicSpiral';

const Navbar = ({ onOpenContact, isLight = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleMagicTransition = (e, href) => {
        if (href === '/blog' && pathname !== '/blog') {
            e.preventDefault();
            setIsTransitioning(true);
            setTimeout(() => {
                router.push(href);
            }, 1800); 
        }
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsTransitioning(false);
        setIsMoreMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Sobre Mí', href: '/sobre-mi' },
        { name: 'Particulares', href: '/particulares' },
        { name: 'Empresas', href: '/empresas' },
        { name: 'Galería', href: '/galeria' },
        { name: 'Valoraciones', href: '/valoraciones' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <>
            <MagicSpiral isVisible={isTransitioning} />
            <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center transition-all duration-500 py-4 px-6 md:px-12 ${isScrolled ? 'bg-[rgba(3,7,18,0.8)] backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]' : 'bg-transparent backdrop-blur-none'}`}>
                <Link href="/" className="flex items-center z-50 transition-transform hover:scale-105">
                    <Image 
                        src="/images/logo-pequeno.webp" 
                        alt="Ángel Ruiz mago ilusionista profesional Madrid - logo" 
                        width={40} 
                        height={40} 
                        priority
                        className="object-contain rounded-full border border-white/10 shadow-[0_0_15px_rgba(212,168,83,0.15)]"
                    />
                </Link>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-[11px] font-bold uppercase tracking-[0.3em]">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            onClick={(e) => handleMagicTransition(e, link.href)}
                            className={`transition-colors relative group text-slate-300 hover:text-[#d4a853] ${pathname === link.href ? 'text-[#d4a853]' : ''}`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-[#d4a853] to-[#c9956b] transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <button 
                        onClick={onOpenContact} 
                        className="btn-glass flex items-center gap-2 border border-[#d4a853]/30"
                    >
                        Contacto <Sparkles className="w-3 h-3" />
                    </button>
                </div>
            </nav>

            {/* Mobile Bottom Tab Bar */}
            <div className="md:hidden bottom-tab-bar flex justify-around items-center">
                <Link href="/" className={`tab-item flex-1 ${pathname === '/' ? 'active' : ''}`}>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
                        <path d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
                    </svg>
                    <span>Inicio</span>
                </Link>
                <Link href="/particulares" className={`tab-item flex-1 ${pathname.startsWith('/particulares') ? 'active' : ''}`}>
                    <Sparkles className="w-5 h-5" />
                    <span>Servicios</span>
                </Link>
                <Link href="/galeria" className={`tab-item flex-1 ${pathname === '/galeria' ? 'active' : ''}`}>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
                        <path d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z' /> <path d='M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z' /> <path d='M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z' /> <path d='M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
                    </svg>
                    <span>Galería</span>
                </Link>
                <Link href="/blog" className={`tab-item flex-1 ${pathname.startsWith('/blog') ? 'active' : ''}`} onClick={(e) => handleMagicTransition(e, '/blog')}>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
                        <path d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                    </svg>
                    <span>Blog</span>
                </Link>
                <button onClick={() => setIsMoreMenuOpen(true)} className="tab-item flex-1">
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
                        <circle cx='12' cy='5' r='1' /> <circle cx='12' cy='12' r='1' /> <circle cx='12' cy='19' r='1' />
                    </svg>
                    <span>Más</span>
                </button>
            </div>

            {/* Mobile "Más" Sheet */}
            <AnimatePresence>
                {isMoreMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-x-0 bottom-0 z-[110] bg-slate-900/95 backdrop-blur-xl border-t border-white/10 rounded-t-3xl pt-6 pb-safe-bottom md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
                    >
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full" />
                        <button onClick={() => setIsMoreMenuOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white p-2">
                            <X className="w-5 h-5" />
                        </button>
                        <div className="flex flex-col gap-2 px-6 mt-4">
                            <Link href="/sobre-mi" className="py-4 border-b border-white/5 text-lg font-[Cinzel] font-bold text-slate-200">Sobre Mí</Link>
                            <Link href="/empresas" className="py-4 border-b border-white/5 text-lg font-[Cinzel] font-bold text-slate-200">Empresas</Link>
                            <Link href="/valoraciones" className="py-4 border-b border-white/5 text-lg font-[Cinzel] font-bold text-slate-200">Valoraciones</Link>
                            <button onClick={() => { setIsMoreMenuOpen(false); onOpenContact(); }} className="py-4 text-left text-lg font-[Cinzel] font-bold text-[#d4a853]">Contacto</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
