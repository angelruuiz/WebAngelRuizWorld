"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({ onOpenContact }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = pathname === '/';

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Particulares', href: '/particulares' },
        { name: 'Empresas', href: '/empresas' },
        { name: 'Valoraciones', href: '/valoraciones' },
        { name: 'Sobre Mí', href: '/sobre-mi' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-40 flex justify-between items-center transition-all ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 px-6 md:px-12 shadow-lg' : 'p-6 md:px-12 mix-blend-difference'}`}>
            <Link href="/" className="flex items-center text-xl font-[Cinzel] font-bold text-amber-500 tracking-widest z-10 transition-transform hover:scale-105">AR</Link>
            
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-sm uppercase tracking-widest text-slate-300">
                {navLinks.map((link) => (
                    <Link 
                        key={link.name} 
                        href={link.href} 
                        className={`hover:text-amber-400 transition-colors ${pathname === link.href ? 'text-amber-500' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <button 
                onClick={onOpenContact} 
                className="hidden md:block border border-amber-500/50 px-6 py-2 rounded-full text-xs uppercase hover:bg-amber-500 hover:text-slate-950 cursor-pointer z-10 transition-colors"
            >
                Contacto
            </button>
        </nav>
    );
};

export default Navbar;
