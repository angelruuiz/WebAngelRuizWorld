import { ArrowRight, Share2, WhatsApp } from './Icons';

const Footer = ({ onOpenContact, isLight = false }) => {
    return (
        <>
        <div className="divider-animated"></div>
        <footer className={`mt-0 bg-gradient-to-b from-[#030712] via-[#070b14] to-[#030712] text-slate-200 backdrop-blur-sm text-left relative z-10 font-[Inter]`}>
            <div className="w-full px-6 py-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 text-left">
                        <h3 className={`text-3xl font-[Cinzel] text-gradient-gold font-bold`}>Ángel Ruiz | Mago e Ilusionista</h3>
                        <p className={`text-slate-300 text-lg leading-relaxed max-w-lg`}>Ilusionista profesional para eventos corporativos,<br />celebraciones y bodas.</p>
                        <button onClick={onOpenContact} className="btn-glass mt-6 flex items-center justify-center gap-2">
                            <span>Contratar a Ángel Ruiz</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className={`mt-10 p-6 rounded-2xl glass-surface text-sm leading-relaxed`}>
                            <p className={`text-slate-400 italic text-justify`}>
                                <strong className="text-[#d4a853]">Nota de Servicio:</strong> Con residencia y estudio principal en <strong className="text-white">Torrelodones</strong>, Ángel Ruiz ofrece sus servicios de ilusionismo profesional y magia de cerca en toda la <strong className="text-white">Sierra de Madrid y Zona Noroeste</strong>. Disponibilidad total para eventos exclusivos, bodas y empresas con la cercanía y confianza de un mago local.
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5">
                            <p className="text-[#d4a853]/60 uppercase tracking-[0.2em] text-[10px] font-bold mb-4">Compartir Experiencia:</p>
                            <div className="flex gap-4">
                                <a 
                                    href={`https://wa.me/?text=${encodeURIComponent('Mira la magia de Ángel Ruiz | Mago e Ilusionista: https://angelruiz.world')}`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`glass-pill group`}
                                    title="Compartir por WhatsApp"
                                >
                                    <WhatsApp className="w-4 h-4" />
                                </a>
                                <button 
                                    onClick={() => {
                                        if (navigator.share) {
                                            navigator.share({
                                                title: 'Ángel Ruiz | Mago e Ilusionista',
                                                text: 'Descubre la magia de Ángel Ruiz en Madrid.',
                                                url: 'https://angelruiz.world',
                                            });
                                        } else {
                                            navigator.clipboard.writeText('https://angelruiz.world');
                                            alert('Enlace copiado al portapapeles');
                                        }
                                    }}
                                    className={`glass-pill group`}
                                    title="Compartir enlace"
                                >
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 text-center md:text-right">
                        <h4 className="text-xl font-bold tracking-widest text-[#d4a853] uppercase">CONTACTO:</h4>
                        <div className={`flex flex-col items-center md:items-end gap-3 text-slate-300 text-base md:text-lg`}>
                            <a href="tel:+34648055636" className="py-2 md:py-0 hover:text-[#d4a853] transition-colors">+34 648 05 56 36</a>
                            <a href="mailto:info@angelruiz.world" className="py-2 md:py-0 hover:text-[#d4a853] transition-colors">info@angelruiz.world</a>
                            <div className="flex flex-wrap justify-center md:justify-end gap-2 mt-4">
                                <a href="https://instagram.com/angellruuiz" target="_blank" rel="noopener noreferrer" className="glass-pill">Instagram</a>
                                <a href="https://tiktok.com/@angellruuiz" target="_blank" rel="noopener noreferrer" className="glass-pill">TikTok</a>
                                <a href="https://youtube.com/@angellruuiz" target="_blank" rel="noopener noreferrer" className="glass-pill">YouTube</a>
                                <a href="https://x.com/angellruuizz" target="_blank" rel="noopener noreferrer" className="glass-pill">X</a>
                                <a href="https://facebook.com/angellruuiz" target="_blank" rel="noopener noreferrer" className="glass-pill">Facebook</a>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-end gap-2 mt-6">
                                <a href="/mago-madrid" className="glass-pill text-[#d4a853] font-bold">Mago en Madrid</a>
                                <a href="/empresas" className="glass-pill text-[#d4a853] font-bold">Mago para Empresas Madrid</a>
                                <a href="/particulares/bodas" className="glass-pill text-[#d4a853] font-bold">Mago para Bodas Madrid</a>
                                <a href="/particulares/fiestas-cumpleanos-madrid" className="glass-pill text-[#d4a853]">Mago para Cumpleaños Madrid</a>
                                <a href="/mago-sierra-madrid" className="glass-pill text-[#e8cc8a]">Mago Sierra de Madrid</a>
                                <a href="/mago-torrelodones" className="glass-pill">Mago en Torrelodones</a>
                                <a href="/mago-galapagar" className="glass-pill">Mago en Galapagar</a>
                                <a href="/mago-las-rozas" className="glass-pill">Mago en Las Rozas</a>
                                <a href="/mago-las-matas" className="glass-pill">Mago en Las Matas</a>
                                <a href="/mago-majadahonda" className="glass-pill">Mago en Majadahonda</a>
                                <a href="/mago-pozuelo" className="glass-pill">Mago en Pozuelo</a>
                                <a href="/mago-boadilla" className="glass-pill">Mago en Boadilla</a>
                                <a href="/mago-villalba" className="glass-pill">Mago en Villalba</a>
                                <a href="/mago-el-escorial" className="glass-pill">Mago en El Escorial</a>
                            </div>
                        </div>
                        <div className="pt-8 text-sm text-slate-600"><p>© 2026 Ángel Ruiz | Mago e Ilusionista. Todos los derechos reservados.</p></div>
                    </div>
                </div>
            </div>
            {/* Spacer for bottom tab bar on mobile */}
            <div className="h-20 md:h-0 w-full" />
        </footer>

            {/* WhatsApp Floating Action Button - Mobile only */}
            <a
                href="https://wa.me/34648055636"
                target="_blank"
                rel="noopener noreferrer"
                className="fab-whatsapp fixed bottom-24 right-6 z-[100] md:hidden bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors"
                aria-label="Contactar por WhatsApp"
            >
                <WhatsApp className="w-7 h-7 text-white" />
            </a>
        </>
    );
};

export default Footer;
