"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from '@/components/Icons';
import { useRouter } from 'next/navigation';
import MagicSpiral from '@/components/Transitions/MagicSpiral';

const Navbar = ({ onOpenContact, isLight = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleMagicTransition = (e, href) => {
        if (href === '/blog' && pathname !== '/blog') {
            e.preventDefault();
            setIsTransitioning(true);
            setTimeout(() => {
                router.push(href);
                // The transition ends after route change via state or simply finishes
            }, 1800); 
        }
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setIsTransitioning(false); // Reset on route change
    }, [pathname]);

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Sobre Mí', href: '/sobre-mi' },
        { name: 'Particulares', href: '/particulares' },
        { name: 'Empresas', href: '/empresas' },
        { name: 'Sierra Madrid', href: '/mago-sierra-madrid' },
        { name: 'Valoraciones', href: '/valoraciones' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <>
            <MagicSpiral isVisible={isTransitioning} />
            <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center transition-all duration-500 ${isScrolled || isMenuOpen ? (isLight ? 'bg-white/70 backdrop-blur-xl border-b border-slate-200' : 'bg-slate-950/90 backdrop-blur-xl shadow-2xl') : (isLight ? 'bg-white/30 backdrop-blur-md' : 'bg-slate-950/30 backdrop-blur-md')} py-4 px-6 md:px-12`}>
                <Link href="/" className="flex items-center z-50 transition-transform hover:scale-105">
                    <Image 
                        src="/images/logo-pequeño.jpg" 
                        alt="Ángel Ruiz Logo" 
                        width={40} 
                        height={40} 
                        priority
                        className="object-contain rounded-full border border-amber-500/20 shadow-lg shadow-amber-500/10"
                    />
                </Link>
                
                {/* Desktop Menu */}
                <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-[11px] font-bold uppercase tracking-[0.3em] ${isLight ? 'text-slate-800' : 'text-slate-100'}`}>
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            onClick={(e) => handleMagicTransition(e, link.href)}
                            className={`hover:text-amber-400 transition-colors relative group ${pathname === link.href ? 'text-amber-500' : ''}`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full ${pathname === link.href ? 'w-full' : ''}`} />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <button 
                        onClick={onOpenContact} 
                        className="hidden md:flex items-center gap-2 border-2 border-amber-500/30 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 cursor-pointer z-50 transition-all"
                    >
                        Contacto <Sparkles className="w-3 h-3" />
                    </button>

                    {/* Mobile Toggle */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="md:hidden text-amber-500 z-50 p-2 hover:bg-amber-500/10 rounded-lg transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-slate-950 z-40 flex flex-col pt-32 pb-12 px-8 md:hidden"
                    >
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link 
                                        href={link.href}
                                        onClick={(e) => handleMagicTransition(e, link.href)}
                                        className={`text-4xl font-[Cinzel] font-bold ${pathname === link.href ? 'text-amber-500' : 'text-slate-100 hover:text-amber-400'}`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-auto"
                        >
                            <button 
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    onOpenContact();
                                }}
                                className="w-full py-5 bg-amber-500 text-slate-950 font-bold rounded-2xl uppercase tracking-widest text-sm shadow-xl shadow-amber-500/20"
                            >
                                Reservar Ahora
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
