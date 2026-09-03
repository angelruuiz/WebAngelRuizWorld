"use client";
import { usePathname } from 'next/navigation';
import { ArrowRight, Share2, WhatsApp } from './Icons';

const Footer = ({ onOpenContact, isLight = false }) => {
    const pathname = usePathname() || '';
    
    let waMessage = 'Hola Ángel, quisiera consultar disponibilidad y presupuesto para un evento';
    if (pathname.includes('/bodas')) {
        waMessage = '¡Hola Ángel! Nos casamos y nos gustaría consultar disponibilidad y presupuesto para nuestra boda';
    } else if (pathname.includes('/empresas') || pathname.includes('navidad') || pathname.includes('cenas')) {
        waMessage = 'Hola Ángel, quisiera consultar disponibilidad y tarifas para un evento de empresa / cena corporativa';
    } else if (pathname.includes('/comuniones')) {
        waMessage = 'Hola Ángel, me gustaría consultar disponibilidad y presupuesto para una comunión familiar';
    } else if (pathname.includes('/cumpleanos') || pathname.includes('fiestas')) {
        waMessage = 'Hola Ángel, me gustaría consultar disponibilidad para una fiesta de cumpleaños privada';
    } else if (pathname.startsWith('/mago-') && !pathname.includes('close-up') && !pathname.includes('madrid')) {
        const slug = pathname.replace('/mago-', '').replace(/-/g, ' ');
        const city = slug.charAt(0).toUpperCase() + slug.slice(1);
        waMessage = `Hola Ángel, organizamos un evento en ${city} y nos gustaría consultar fechas y tarifas`;
    }
    
    const waUrl = `https://wa.me/34648055636?text=${encodeURIComponent(waMessage)}`;
    return (
        <>
        <div className="divider-animated"></div>
        <footer className={`mt-0 bg-gradient-to-b from-[#030712] via-[#070b14] to-[#030712] text-slate-200 backdrop-blur-sm text-left relative z-10 font-[Inter]`}>
            <div className="w-full px-6 py-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
                    
                    {/* Column 1: Marca */}
                    <div className="space-y-6">
                        <h3 className={`text-2xl font-[Cinzel] text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] to-[#f3e5c8] font-bold`}>
                            Ángel Ruiz | Mago e Ilusionista
                        </h3>
                        <p className={`text-slate-400 text-sm leading-relaxed`}>
                            Ilusionista profesional para eventos corporativos exclusivos, celebraciones privadas y bodas en Madrid.
                        </p>
                        <button onClick={onOpenContact} className="text-[#d4a853] hover:text-[#f3e5c8] transition-colors flex items-center gap-2 text-sm font-semibold tracking-wider uppercase mt-4 group">
                            <span>Contratar a Ángel Ruiz</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a href="https://instagram.com/angellruuiz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#d4a853] transition-colors text-sm">Instagram</a>
                            <a href="https://tiktok.com/@angellruuiz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#d4a853] transition-colors text-sm">TikTok</a>
                            <a href="https://youtube.com/@angellruuiz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#d4a853] transition-colors text-sm">YouTube</a>
                            <a href="https://x.com/angellruuizz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#d4a853] transition-colors text-sm">X</a>
                            <a href="https://facebook.com/angellruuiz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#d4a853] transition-colors text-sm">Facebook</a>
                        </div>
                    </div>

                    {/* Column 2: Servicios & Eventos */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-[Cinzel] text-white tracking-wider">Servicios & Eventos</h4>
                        <div className="flex flex-col gap-3 text-sm text-slate-400">
                            <a href="/mago-madrid" className="hover:text-[#d4a853] transition-colors w-fit">Mago en Madrid</a>
                            <a href="/particulares/bodas" className="hover:text-[#d4a853] transition-colors w-fit">Mago para Bodas</a>
                            <a href="/empresas" className="hover:text-[#d4a853] transition-colors w-fit">Mago para Empresas</a>
                            <a href="/empresas/mago-cenas-empresa-madrid" className="hover:text-[#d4a853] transition-colors w-fit">Cenas de Navidad</a>
                            <a href="/mago-close-up-madrid" className="hover:text-[#d4a853] transition-colors w-fit">Magia de Cerca Close-Up</a>
                            <a href="/particulares/fiestas-cumpleanos-madrid" className="hover:text-[#d4a853] transition-colors w-fit">Fiestas y Cumpleaños</a>
                            <a href="/particulares/comuniones" className="hover:text-[#d4a853] transition-colors w-fit">Comuniones</a>
                            <a href="/contratar-mago-madrid" className="hover:text-[#d4a853] transition-colors w-fit">Tarifas y Dossier</a>
                        </div>
                    </div>

                    {/* Column 3: Zonas de Madrid */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-[Cinzel] text-white tracking-wider">Zonas de Madrid</h4>
                        <div className="space-y-4 text-sm text-slate-400">
                            <div>
                                <h5 className="text-[#d4a853] font-semibold mb-2">Sierra & Noroeste</h5>
                                <div className="leading-relaxed">
                                    <a href="/mago-torrelodones" className="hover:text-white transition-colors">Torrelodones</a>, <a href="/mago-las-rozas" className="hover:text-white transition-colors">Las Rozas</a>, <a href="/mago-majadahonda" className="hover:text-white transition-colors">Majadahonda</a>, <a href="/mago-pozuelo" className="hover:text-white transition-colors">Pozuelo</a>, <a href="/mago-boadilla" className="hover:text-white transition-colors">Boadilla</a>, <a href="/mago-villalba" className="hover:text-white transition-colors">Collado Villalba</a>, <a href="/mago-galapagar" className="hover:text-white transition-colors">Galapagar</a>, <a href="/mago-el-escorial" className="hover:text-white transition-colors">El Escorial</a>, <a href="/mago-las-matas" className="hover:text-white transition-colors">Las Matas</a>, <a href="/mago-sierra-madrid" className="hover:text-white transition-colors">Sierra de Madrid</a>.
                                </div>
                            </div>
                            <div>
                                <h5 className="text-[#d4a853] font-semibold mb-2 mt-4">Madrid Centro & Sur</h5>
                                <div className="leading-relaxed">
                                    <a href="/mago-alcorcon" className="hover:text-white transition-colors">Alcorcón</a>, <a href="/mago-leganes" className="hover:text-white transition-colors">Leganés</a>, <a href="/mago-mostoles" className="hover:text-white transition-colors">Móstoles</a>, <a href="/mago-getafe" className="hover:text-white transition-colors">Getafe</a>, <a href="/mago-alcobendas" className="hover:text-white transition-colors">Alcobendas</a>.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Contacto Directo */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-[Cinzel] text-white tracking-wider">Contacto Directo</h4>
                        <div className="flex flex-col gap-4 text-sm text-slate-400">
                            <a href="tel:+34648055636" className="hover:text-[#d4a853] transition-colors flex items-center gap-2 w-fit">
                                +34 648 05 56 36
                            </a>
                            <a href="mailto:info@angelruiz.world" className="hover:text-[#d4a853] transition-colors flex items-center gap-2 w-fit">
                                info@angelruiz.world
                            </a>
                            <p className="flex items-start gap-2">
                                Torrelodones · Comunidad de Madrid
                            </p>
                            
                            <a 
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors w-fit px-5 py-2.5 rounded-full font-medium"
                            >
                                <WhatsApp className="w-5 h-5" />
                                Contactar por WhatsApp
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Subfooter */}
            <div className="border-t border-white/10 w-full">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© 2026 Ángel Ruiz | Marca Oficial Registrada. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="/aviso-legal" className="hover:text-[#d4a853] transition-colors">Aviso Legal</a>
                        <a href="/privacidad" className="hover:text-[#d4a853] transition-colors">Política de Privacidad</a>
                        <a href="/cookies" className="hover:text-[#d4a853] transition-colors">Política de Cookies</a>
                    </div>
                </div>
            </div>
            
            {/* Spacer for bottom tab bar on mobile */}
            <div className="h-20 md:h-0 w-full" />
        </footer>

            {/* WhatsApp Floating Action Button - Mobile only */}
            <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fab-whatsapp fixed bottom-24 right-6 z-[100] md:hidden bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors active:scale-95"
                aria-label="Contactar por WhatsApp"
            >
                <WhatsApp className="w-7 h-7 text-white" />
            </a>
        </>
    );
};

export default Footer;
