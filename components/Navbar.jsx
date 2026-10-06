"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Sparkles, X } from '@/components/Icons';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
const MagicSpiral = dynamic(() => import('@/components/Transitions/MagicSpiral'), { ssr: false });
const MobileBookingDrawer = dynamic(() => import('@/components/MobileBookingDrawer'), { ssr: false });

const Navbar = ({ onOpenContact, isLight = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
    const [isBookingDrawerOpen, setIsBookingDrawerOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleMagicTransition = (e, href) => {
        if (href === '/blog' && pathname !== '/blog') {
            e.preventDefault();
            setIsTransitioning(true);
            setTimeout(() => {
                router.push(href);
            }, 300); 
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
                { name: 'Cenas de Empresa & Navidad', href: '/empresas/mago-cenas-empresa-madrid' },
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
            {isTransitioning && <MagicSpiral isVisible={isTransitioning} />}
            <nav aria-label="Navegación principal" className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-3 lg:py-2.5 px-4 sm:px-6 lg:px-8 ${isScrolled ? 'bg-[rgba(3,7,18,0.85)] backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent backdrop-blur-none'}`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" aria-label="Ángel Ruiz - Inicio" className="flex items-center shrink-0 z-50 transition-transform hover:scale-105">
                        <img 
                            src="/images/logo-pequeno.webp" 
                            alt="Ángel Ruiz mago ilusionista profesional Madrid - logo" 
                            width={38} 
                            height={38} 
                            className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-full border border-white/10 shadow-[0_0_15px_rgba(212,168,83,0.15)]"
                        />
                    </Link>
                    
                    {/* Desktop Menu - Responsive Flex without Absolute Overlaps */}
                    <div className="hidden md:flex items-center justify-center gap-2 lg:gap-4 xl:gap-6 2xl:gap-7 text-[9px] lg:text-[10px] xl:text-[10.5px] font-bold uppercase tracking-[0.08em] lg:tracking-[0.16em] xl:tracking-[0.22em]">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group py-2">
                                <Link 
                                    href={link.href}
                                    onClick={(e) => link.href !== '#' && handleMagicTransition(e, link.href)}
                                    className={`transition-colors relative inline-block text-slate-300 hover:text-[#d4a853] whitespace-nowrap ${pathname === link.href ? 'text-[#d4a853]' : ''}`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-[#d4a853] to-[#c9956b] transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </Link>
                                
                                {link.children && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                                        <div className="flex flex-col bg-[rgba(3,7,18,0.95)] backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 min-w-[210px]">
                                            {link.children.map(child => (
                                                <Link 
                                                    key={child.name} 
                                                    href={child.href}
                                                    onClick={(e) => handleMagicTransition(e, child.href)}
                                                    className="px-5 py-2.5 text-slate-300 hover:text-[#d4a853] hover:bg-white/5 transition-colors whitespace-nowrap flex items-center gap-2 text-xs"
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

                    {/* Desktop Contact Button */}
                    <div className="hidden md:flex items-center shrink-0 relative group">
                        <div 
                            className="absolute inset-0 bg-amber-500/30 blur-[15px] rounded-full pointer-events-none group-hover:bg-amber-500/60 transition-all duration-500"
                        />

                        <button 
                            type="button"
                            onClick={onOpenContact} 
                            aria-label="Abrir formulario de contacto"
                            className="relative px-3.5 lg:px-4 py-2 overflow-hidden rounded-full cursor-pointer border border-amber-300/50 shadow-[0_0_15px_rgba(245,158,11,0.3)] z-10 bg-[rgba(3,7,18,0.5)] hover:bg-[#d4a853] backdrop-blur-md text-[11px] lg:text-xs text-slate-100 hover:text-slate-950 font-bold tracking-[0.1em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 lg:gap-2 group"
                        >
                            <span className="relative z-10">Contacto</span>
                            <Sparkles className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300 relative z-10" />
                        </button>
                    </div>

                    {/* Mobile Quick Contact Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <button 
                            type="button"
                            onClick={onOpenContact}
                            aria-label="Abrir formulario de contacto rápido"
                            className="px-3.5 py-1.5 rounded-full border border-amber-400/40 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-amber-500/20 transition-colors"
                        >
                            <span>Contacto</span>
                            <Sparkles className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Apple Liquid Glass Floating Dock — Mobile Thumb Navigation */}
            <div className="md:hidden">
                <nav 
                    aria-label="Dock de navegación móvil Liquid UI" 
                    className="bottom-tab-bar grid grid-cols-3 items-center max-w-sm mx-auto shadow-2xl"
                >
                    {/* Botón Menú / Explorar (Columna 1: alineado a la izquierda/centro) */}
                    <div className="flex justify-center">
                        <button 
                            type="button" 
                            aria-label="Abrir menú de navegación" 
                            onClick={() => setIsMoreMenuOpen(true)} 
                            className={`tab-item w-full py-1.5 px-1 rounded-full transition-all text-slate-300 hover:text-white flex flex-col items-center justify-center ${isMoreMenuOpen ? 'text-amber-300 bg-white/[0.08]' : ''}`}
                        >
                            <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.8} stroke='currentColor' className='w-4 h-4'>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                            <span className="text-[9px] font-semibold tracking-wider uppercase mt-0.5">Explorar</span>
                        </button>
                    </div>

                    {/* Botón Central de Alta Conversión (Columna 2: Exactamente al 50% Matemático) */}
                    <div className="flex justify-center">
                        <button 
                            type="button"
                            aria-label="Pedir presupuesto inmediato"
                            onClick={() => setIsBookingDrawerOpen(true)}
                            className="relative group active:scale-95 transition-transform w-full max-w-[125px]"
                        >
                            {/* Brillo aura ambiental */}
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600 rounded-full blur-md opacity-75 group-hover:opacity-100 animate-pulse" />
                            
                            {/* Cápsula líquida dorada */}
                            <div className="relative py-2.5 px-3 rounded-full bg-gradient-to-r from-[#d4a853] via-[#f7e7c4] to-[#b8860b] text-[#030712] font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(212,168,83,0.5)] border border-amber-200/50">
                                <Sparkles className="w-3.5 h-3.5 text-[#030712] shrink-0" />
                                <span className="whitespace-nowrap font-black">Reservar</span>
                            </div>
                        </button>
                    </div>

                    {/* Botón WhatsApp Directo (Columna 3: simétrico a la columna 1) */}
                    <div className="flex justify-center">
                        <a 
                            href="https://wa.me/34648055636?text=Hola%20Ángel,%20quisiera%20consultar%20disponibilidad%20y%20tarifas%20para%20un%20evento%20en%20Madrid" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Contactar por WhatsApp directamente con Ángel Ruiz" 
                            className="tab-item w-full py-1.5 px-1 rounded-full transition-all text-emerald-400 hover:text-emerald-300 flex flex-col items-center justify-center"
                        >
                            <div className="relative w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                                {/* Ping dot en línea */}
                                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-slate-950" />
                                </span>
                                <svg className="w-4 h-4 fill-emerald-400" viewBox="0 0 448 512">
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                                </svg>
                            </div>
                            <span className="text-[9px] font-semibold tracking-wider uppercase mt-0.5 text-emerald-400">WhatsApp</span>
                        </a>
                    </div>
                </nav>

                {/* Mobile Booking Drawer (Apple Liquid Sheet) */}
                <MobileBookingDrawer 
                    isOpen={isBookingDrawerOpen} 
                    onClose={() => setIsBookingDrawerOpen(false)} 
                />
            </div>

            {/* Mobile "Más" Backdrop */}
            {isMoreMenuOpen && (
                <div 
                    onClick={() => setIsMoreMenuOpen(false)} 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[109] md:hidden transition-opacity duration-300"
                />
            )}

            {/* Mobile "Más" Sheet */}
            <div 
                className={`fixed inset-x-0 bottom-0 z-[110] bg-slate-900/95 backdrop-blur-xl border-t border-white/10 rounded-t-3xl pt-6 pb-safe-bottom max-h-[85vh] overflow-y-auto md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out will-change-transform ${
                    isMoreMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
                }`}
            >
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full" />
                <button type="button" aria-label="Cerrar panel de opciones" onClick={() => setIsMoreMenuOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white p-2">
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
                            <Link href="/empresas/mago-cenas-empresa-madrid" onClick={() => setIsMoreMenuOpen(false)} className="text-sm text-slate-300 hover:text-white">Cenas de Empresa y Navidad</Link>
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
            </div>
        </>
    );
};

export default Navbar;
