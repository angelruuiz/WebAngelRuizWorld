import { ArrowRight, Share2, WhatsApp } from './Icons';

const Footer = ({ onOpenContact, isLight = false }) => {
    return (
        <footer className={`mt-20 border-t ${isLight ? 'border-slate-200 bg-white/50 text-slate-800' : 'border-slate-800 bg-slate-900/50 text-slate-200'} backdrop-blur-sm text-left relative z-10`}>
            <div className="w-full px-6 py-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 text-left">
                        <h3 className={`text-3xl font-[Cinzel] ${isLight ? 'text-slate-950' : 'text-white'} font-bold`}>Angel Ruiz</h3>
                        <p className={`${isLight ? 'text-slate-700' : 'text-slate-300'} text-lg leading-relaxed max-w-lg`}>Ilusionista profesional para eventos corporativos,<br />celebraciones y bodas.</p>
                        <button onClick={onOpenContact} className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full border border-amber-500 text-amber-500 font-bold uppercase tracking-widest text-xs hover:text-slate-950 transition-colors mt-6">
                            <span className="relative z-10 flex items-center justify-center gap-2">Reservar Experiencia <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                            <div className="absolute inset-0 bg-amber-500 w-0 group-hover:w-full transition-all duration-300 ease-out z-0" />
                        </button>

                        <div className="mt-8 pt-8 border-t border-white/5">
                            <p className="text-amber-500/60 uppercase tracking-[0.2em] text-[10px] font-bold mb-4">Compartir Experiencia:</p>
                            <div className="flex gap-4">
                                <a 
                                    href={`https://wa.me/?text=${encodeURIComponent('Mira la magia de Angel Ruiz: https://angelruiz.world')}`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`p-2 rounded-full ${isLight ? 'bg-slate-200/50' : 'bg-slate-800/50'} border border-white/5 hover:border-amber-500/50 hover:text-amber-400 transition-all group`}
                                    title="Compartir por WhatsApp"
                                >
                                    <WhatsApp className="w-4 h-4" />
                                </a>
                                <button 
                                    onClick={() => {
                                        if (navigator.share) {
                                            navigator.share({
                                                title: 'Angel Ruiz - Ilusionista Profesional',
                                                text: 'Descubre la magia de Angel Ruiz en Madrid.',
                                                url: 'https://angelruiz.world',
                                            });
                                        } else {
                                            navigator.clipboard.writeText('https://angelruiz.world');
                                            alert('Enlace copiado al portapapeles');
                                        }
                                    }}
                                    className={`p-2 rounded-full ${isLight ? 'bg-slate-200/50' : 'bg-slate-800/50'} border border-white/5 hover:border-amber-500/50 hover:text-amber-400 transition-all group`}
                                    title="Compartir enlace"
                                >
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 md:text-right text-left">
                        <h4 className="text-xl font-bold tracking-widest text-amber-500 uppercase">CONTACTO:</h4>
                        <div className={`flex flex-col md:items-end items-start gap-3 ${isLight ? 'text-slate-800' : 'text-slate-300'} text-base md:text-lg`}>
                            <a href="tel:+34648055636" className="hover:text-amber-400 transition-colors">+34 648 05 56 36</a>
                            <a href="mailto:angellruuiz@gmail.com" className="hover:text-amber-400 transition-colors">angellruuiz@gmail.com</a>
                            <a href="https://instagram.com/angellruuiz" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Instagram</a>
                            <a href="https://tiktok.com/@angellruuiz" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">TikTok</a>
                            <a href="https://youtube.com/@angellruuiz" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">YouTube</a>
                            <a href="https://x.com/angellruuizz" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">X</a>
                            <a href="https://facebook.com/angellruuiz" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Facebook</a>
                            <div className="flex flex-wrap md:justify-end gap-x-4 gap-y-2 mt-2 text-xs opacity-70">
                                <a href="/mago-torrelodones" className="hover:text-amber-400 transition-colors font-bold">Mago en Torrelodones</a>
                                <a href="/mago-galapagar" className="hover:text-amber-400 transition-colors">Galapagar</a>
                                <a href="/mago-las-rozas" className="hover:text-amber-400 transition-colors">Las Rozas</a>
                                <a href="/mago-las-matas" className="hover:text-amber-400 transition-colors">Las Matas</a>
                                <a href="/mago-majadahonda" className="hover:text-amber-400 transition-colors">Majadahonda</a>
                                <a href="/mago-pozuelo" className="hover:text-amber-400 transition-colors">Pozuelo</a>
                                <a href="/mago-boadilla" className="hover:text-amber-400 transition-colors">Boadilla</a>
                            </div>
                        </div>
                        <div className="pt-8 text-sm text-slate-500"><p>© 2026 Angel Ruiz. Todos los derechos reservados.</p></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
