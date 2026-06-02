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
        { 
            name: 'Especialidades', 
            href: '#',
            children: [
                { name: 'Magia Close-Up', href: '/mago-close-up-madrid' },
                { name: 'Contratar Mago', href: '/contratar-mago-madrid' }
            ]
        },
        { 
            name: 'Particulares', 
            href: '#',
            children: [
                { name: 'Bodas', href: '/particulares/bodas' },
                { name: 'Comuniones', href: '/particulares/comuniones' },
                { name: 'Fiestas y Eventos', href: '/particulares/eventos' }
            ]
        },
        { 
            name: 'Empresas', 
            href: '/empresas',
            children: [
                { name: 'Eventos Corporativos', href: '/empresas' },
                { name: 'Restaurantes', href: '/empresas/mago-para-restaurantes-madrid' }
            ]
        },
        { name: 'Sobre Mí', href: '/sobre-mi' },
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
                        <div key={link.name} className="relative group">
                            <Link 
                                href={link.href}
                                onClick={(e) => link.href !== '#' && handleMagicTransition(e, link.href)}
                                className={`transition-colors relative inline-block text-slate-300 hover:text-[#d4a853] ${pathname === link.href ? 'text-[#d4a853]' : ''}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-[#d4a853] to-[#c9956b] transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                            </Link>
                            
                            {link.children && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <div className="flex flex-col bg-[rgba(3,7,18,0.95)] backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 min-w-[220px]">
                                        {link.children.map(child => (
                                            <Link 
                                                key={child.name} 
                                                href={child.href}
                                                onClick={(e) => handleMagicTransition(e, child.href)}
                                                className="px-5 py-3 text-slate-300 hover:text-[#d4a853] hover:bg-white/5 transition-colors whitespace-nowrap flex items-center gap-2"
                                            >
                                                <span className="w-1 h-1 bg-amber-500 rounded-full opacity-50"></span>
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-6 relative group">
                    <motion.div 
                        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }} 
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-amber-500 blur-[15px] rounded-full pointer-events-none"
                    />

                    <motion.button 
                        onClick={onOpenContact} 
                        initial="rest"
                        animate="rest"
                        whileHover="hover" 
                        whileTap="tap" 
                        variants={{
                            rest: { scale: 1 },
                            hover: { scale: 1.05, y: -2 },
                            tap: { scale: 0.95, y: 0 }
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="relative px-5 py-2.5 overflow-hidden rounded-full cursor-pointer border border-amber-300/50 shadow-[0_0_15px_rgba(245,158,11,0.3)] z-10 bg-[rgba(3,7,18,0.5)] backdrop-blur-md"
                    >
                        <motion.div 
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                            style={{ 
                                background: "linear-gradient(90deg, rgba(212,168,83,0.9), rgba(245,158,11,0.9), rgba(251,191,36,0.9), rgba(212,168,83,0.9))",
                                backgroundSize: "200% 200%"
                            }}
                        />
                        
                        <motion.div
                            variants={{
                                hover: { x: ["-150%", "350%"], transition: { repeat: Infinity, duration: 1.2, ease: "linear" } },
                                rest: { x: "-150%" },
                                tap: { x: "350%" }
                            }}
                            className="absolute inset-0 w-[50%] bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[30deg] pointer-events-none"
                        />

                        <motion.div 
                            variants={{
                                tap: { scale: 2.5, opacity: 0, transition: { duration: 0.6, ease: "easeOut" } },
                                hover: { scale: 1, opacity: 0 },
                                rest: { scale: 1, opacity: 0 }
                            }}
                            className="absolute inset-0 rounded-full border-[2px] border-white pointer-events-none"
                        />
                        
                        <motion.span 
                            variants={{
                                tap: { filter: "blur(2px)", scale: 0.95 },
                                hover: { filter: "blur(0px)", scale: 1 },
                                rest: { filter: "blur(0px)", scale: 1 }
                            }}
                            className="relative z-10 flex items-center justify-center gap-2 text-slate-100 group-hover:text-slate-950 font-bold tracking-[0.1em] uppercase text-xs transition-colors duration-300"
                        >
                            Contacto 
                            <motion.div variants={{
                                hover: { rotate: 180, scale: 1.2, transition: { duration: 0.4 } },
                                rest: { rotate: 0, scale: 1 },
                                tap: { rotate: -45, scale: 0.8 }
                            }}>
                                <Sparkles className="w-3 h-3" />
                            </motion.div>
                        </motion.span>
                    </motion.button>
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
                <button onClick={() => setIsMoreMenuOpen(true)} className={`tab-item flex-1 ${pathname.startsWith('/particulares') || pathname.startsWith('/empresas') ? 'active' : ''}`}>
                    <Sparkles className="w-5 h-5" />
                    <span>Servicios</span>
                </button>
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
                        className="fixed inset-x-0 bottom-0 z-[110] bg-slate-900/95 backdrop-blur-xl border-t border-white/10 rounded-t-3xl pt-6 pb-safe-bottom max-h-[85vh] overflow-y-auto md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
                    >
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full" />
                        <button onClick={() => setIsMoreMenuOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white p-2">
                            <X className="w-5 h-5" />
                        </button>
                        <div className="flex flex-col px-6 mt-6 mb-8">
                            <details className="group border-b border-white/5">
                                <summary className="py-4 text-lg font-[Cinzel] font-bold text-amber-400 cursor-pointer list-none flex justify-between items-center outline-none">
                                    Especialidades y Contratación
                                    <span className="text-sm opacity-50 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="flex flex-col gap-4 pb-4 pl-4 border-l border-amber-500/20 ml-2 mt-2">
                                    <Link href="/mago-close-up-madrid" onClick={() => setIsMoreMenuOpen(false)} className="text-sm text-slate-300 hover:text-white">Magia Close-Up (De cerca)</Link>
                                    <Link href="/mago-mentalista-madrid" onClick={() => setIsMoreMenuOpen(false)} className="text-sm text-slate-300 hover:text-white">Mentalismo</Link>
                                    <Link href="/contratar-mago-madrid" onClick={() => setIsMoreMenuOpen(false)} className="text-sm text-amber-500 font-bold hover:text-amber-400">Contratar Mago en Madrid</Link>
                                </div>
                            </details>

                            <details className="group border-b border-white/5">
                                <summary className="py-4 text-lg font-[Cinzel] font-bold text-slate-200 cursor-pointer list-none flex justify-between items-center outline-none">
                                    Particulares
                                    <span className="text-sm opacity-50 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="flex flex-col gap-4 pb-4 pl-4 border-l border-white/10 ml-2 mt-2">
                                    <Link href="/particulares/bodas" onClick={() => setIsMoreMenuOpen(false)} className="text-sm text-slate-300 hover:text-white">Bodas</Link>
                                    <Link href="/particulares/comuniones" onClick={() => setIsMoreMenuOpen(false)} className="text-sm text-slate-300 hover:text-white">Comuniones</Link>
                                    <Link href="/particulares/eventos" onClick={() => setIsMoreMenuOpen(false)} className="text-sm text-slate-300 hover:text-white">Cumpleaños y Fiestas</Link>
                                </div>
                            </details>

                            <details className="group border-b border-white/5">
                                <summary className="py-4 text-lg font-[Cinzel] font-bold text-slate-200 cursor-pointer list-none flex justify-between items-center outline-none">
                                    Empresas
                                    <span className="text-sm opacity-50 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="flex flex-col gap-4 pb-4 pl-4 border-l border-white/10 ml-2 mt-2">
                                    <Link href="/empresas/mago-ferias-congresos-madrid" onClick={() => setIsMoreMenuOpen(false)} className="text-sm text-slate-300 hover:text-white">Ferias y Congresos</Link>
                                    <Link href="/empresas/mago-cenas-empresa-madrid" onClick={() => setIsMoreMenuOpen(false)} className="text-sm text-slate-300 hover:text-white">Cenas de Empresa</Link>
                                    <Link href="/empresas/mago-team-building-madrid" onClick={() => setIsMoreMenuOpen(false)} className="text-sm text-slate-300 hover:text-white">Team Building</Link>
                                    <Link href="/empresas/mago-para-restaurantes-madrid" onClick={() => setIsMoreMenuOpen(false)} className="text-sm text-slate-300 hover:text-white">Restaurantes</Link>
                                </div>
                            </details>

                            <Link href="/sobre-mi" onClick={() => setIsMoreMenuOpen(false)} className="py-4 border-b border-white/5 text-lg font-[Cinzel] font-bold text-slate-200 flex justify-between items-center">
                                Sobre Mí
                                <span className="text-amber-500/50">→</span>
                            </Link>

                            <Link href="/valoraciones" onClick={() => setIsMoreMenuOpen(false)} className="py-4 border-b border-white/5 text-lg font-[Cinzel] font-bold text-slate-200 flex justify-between items-center">
                                Valoraciones
                                <span className="text-amber-500/50">→</span>
                            </Link>

                            <button onClick={() => { setIsMoreMenuOpen(false); onOpenContact(); }} className="py-4 text-left text-lg font-[Cinzel] font-bold text-[#d4a853] mt-2 flex justify-between items-center">
                                Contacto Directo
                                <Sparkles className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
