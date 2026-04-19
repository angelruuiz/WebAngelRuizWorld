"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, Globe, MapPin, CheckCircle2, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { Sparkles } from '@/components/Icons';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Image from 'next/image';

const slides = [
    {
        id: 'Inicio',
        type: 'Inicio',
        tag: 'Dossier Corporativo · 2026',
        title: { main: 'ANGEL', sub: 'RUIZ' },
        subtitle: 'Mago · Ilusionista · Cartomagia de Élite',
        desc: 'Ilusionismo premium para empresas y bodas en Madrid. Formado en la Escuela de Dani DaOrtiz. El milagro ocurre a escasos centímetros de tus ojos.',
        stats: [
            { label: 'Años de Experiencia', value: '10+' },
            { label: 'Eventos Realizados', value: '100+' },
            { label: 'Satisfacción', value: '100%' }
        ],
        image: '/images/foto-profesional-mirando-carta.png'
    },
    {
        id: 'Perfil',
        type: 'Perfil',
        quote: '«La magia es el engaño más honesto que existe»',
        label: 'Sobre Mí',
        title: 'Ilusionista Profesional',
        text: 'Formado en la Escuela de Dani DaOrtiz — uno de los mejores cartomagos del mundo — mi especialidad es el Close-Up y la Cartomagia de Élite. No ejecuto trucos. Diseño atmósferas de asombro inteligente que transforman eventos corporativos y bodas en experiencias que tus invitados recordarán para siempre.',
        badges: ['Cartomagia Purista', 'Close-Up', 'Mentalismo', 'Protocolo Corporativo', 'Escuela DaOrtiz', 'Madrid Noroeste']
    },
    {
        id: 'Servicios',
        type: 'Servicios',
        label: 'Qué Ofrezco',
        title: 'Servicios de Élite',
        subtitle: 'Cada actuación, diseñada a medida para su empresa',
        items: [
            { id: '01', icon: '◈', title: 'Cóctel & Networking', desc: 'Magia de cerca que rompe barreras entre invitados. El asombro compartido crea conversaciones que el catering no puede.', tags: ['Close-Up', 'Networking'], featured: true },
            { id: '02', icon: '◉', title: 'Ferias & Stands', desc: 'Parada de tráfico garantizada. Integramos su mensaje de marca en la rutina mágica. De transeúnte a lead en 90 segundos.', tags: ['IFEMA', 'Lead Gen'] },
            { id: '03', icon: '◆', title: 'Cenas de Gala', desc: 'Magia entre platos en hoteles exclusivos y fincas. Entretenimiento no invasivo que eleva la calidad percibida del evento.', tags: ['Gala', 'VIP'] },
            { id: '04', icon: '◎', title: 'Presentación de Producto', desc: 'Su lanzamiento aparece literalmente de la nada. Alto impacto visual, perfecto para prensa y redes sociales. Imposible e imborrable.', tags: ['Marketing', 'Prensa'] }
        ]
    },
    {
        id: 'Proceso',
        type: 'Proceso',
        label: 'Sin Complicaciones',
        title: 'Proceso de Contratación',
        steps: [
            { num: '01', title: 'Contacto', desc: 'Cuéntame tu evento sin compromiso' },
            { num: '02', title: 'Propuesta', desc: 'Presupuesto cerrado en 24h' },
            { num: '03', title: 'Contrato', desc: 'Confirmación formal y señal' },
            { num: '04', title: 'Briefing', desc: 'Coordinación previa al evento' },
            { num: '05', title: 'El Show', desc: 'Solo queda disfrutar' }
        ]
    },
    {
        id: 'Tarifas',
        type: 'Tarifas',
        label: 'Inversión',
        title: 'Tarifas & Packs',
        subtitle: 'Transparencia total · Sin letra pequeña',
        packs: [
            { name: 'Cóctel', sub: 'Magia de Cerca', price: '300 – 400€', duration: '1 – 1,5 horas', items: ['Close-Up itinerante', 'Coordinación previa'], ideal: 'Bodas · Comuniones · Recepciones' },
            { name: 'Show Central', sub: 'Magia de Escenario', price: '400 – 550€', duration: '50 min / 1h 15 min', items: ['Show de escenario completo', 'Coordinación técnica'], ideal: 'Galas · Aniversarios', featured: true },
            { name: 'Pack Evento', sub: 'Cóctel + Show', price: '600 – 750€', duration: '40 min Close-Up + 40 min Show', items: ['Close-Up itinerante', 'Show central de gala', 'Descuento pack incluido'], ideal: 'Bodas Premium · Galas' }
        ]
    },
    {
        id: 'Referencias',
        type: 'Referencias',
        label: 'Referencias',
        title: 'Lo que Dicen',
        reviews: [
            { text: '«Los directivos aún hablan de la magia que ocurrió esa noche. La integración de nuestra marca en los efectos fue absolutamente impresionante.»', author: 'Director de RRHH', company: 'Empresa tecnológica · Madrid' },
            { text: '«Fue la mejor decisión para nuestra boda. Sus actuaciones rompieron el hielo entre las dos familias de una forma que nunca imaginamos posible.»', author: 'Pareja de novios', company: 'Finca exclusiva · Torrelodones' }
        ]
    },
    {
        id: 'Contacto',
        type: 'Contacto',
        label: '¿Hablamos?',
        title: 'Hagamos Algo Imposible',
        subtitle: 'Respuesta en menos de 24 horas · Sin compromiso',
        links: [
            { label: 'Teléfono', val: '+34 648 05 56 36', icon: Phone, href: 'tel:+34648055636' },
            { label: 'Email', val: 'angellruuiz@gmail.com', icon: Mail, href: 'mailto:angellruuiz@gmail.com' },
            { label: 'Web', val: 'angelruiz.world', icon: Globe, href: 'https://angelruiz.world' },
            { label: 'Ubicación', val: 'Torrelodones · Madrid', icon: MapPin, href: '#' }
        ]
    }
];

export default function DossierPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const containerRef = useRef(null);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const handleWheel = (e) => {
            if (Math.abs(e.deltaY) > 50) {
                if (e.deltaY > 0) nextSlide();
                else prevSlide();
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
        };

        window.addEventListener('wheel', handleWheel);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="relative h-screen w-full bg-slate-950 text-slate-200 overflow-hidden font-inter">
            <MagicCursor />
            <ParticleBackground />
            
            {/* Navbar for Dossier */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-slate-950/20 border-b border-white/5 no-print">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/30">
                        <Image src="/images/logo-pequeno.jpg" width={40} height={40} alt="Logo" className="object-cover" />
                    </div>
                    <span className="font-[Cinzel] text-lg font-bold tracking-widest text-white">ANGEL RUIZ</span>
                </div>
                <div className="hidden md:flex gap-8">
                    {slides.map((slide, idx) => (
                        <button 
                            key={slide.id} 
                            onClick={() => setCurrentSlide(idx)}
                            className={`text-[10px] uppercase tracking-[0.2em] transition-all ${currentSlide === idx ? 'text-amber-500 font-bold' : 'text-slate-500 hover:text-white'}`}
                        >
                            {slide.id}
                        </button>
                    ))}
                </div>
                <div className="flex gap-4">
                    <button onClick={() => window.print()} className="hidden sm:block text-[10px] font-bold uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
                        PDF
                    </button>
                    <a href="/" className="bg-amber-500 text-slate-950 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
                        Ver Web
                    </a>
                </div>
            </nav>

            {/* Slides Container */}
            <div className="relative h-full w-full no-print">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full w-full flex items-center justify-center px-6 md:px-24 pt-20"
                    >
                        {renderSlide(slides[currentSlide])}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Print Container (Hidden on screen, visible on print) */}
            <div className="hidden print:block absolute inset-0 bg-white text-black p-0 m-0">
                {slides.map((slide, i) => (
                    <div key={i} className="min-h-screen w-full p-20 flex items-center justify-center border-b border-gray-100 page-break-after-always">
                        {renderSlide(slide)}
                    </div>
                ))}
            </div>

            {/* Global Styles for PDF Generation */}
            <style dangerouslySetInnerHTML={{ __html: `
                @media print {
                    .no-print { display: none !important; }
                    body, html { background: white !important; color: black !important; margin: 0 !important; padding: 0 !important; }
                    .page-break-after-always { page-break-after: always; }
                    h1, h2, h3 { color: #b45309 !important; } 
                    p, span, div { color: #1e293b !important; }
                    .bg-amber-500\\/10 { background: #fef3c7 !important; border: 1px solid #f59e0b !important; }
                    .border-white\\/10 { border-color: #e2e8f0 !important; }
                    img { filter: none !important; position: relative !important; }
                    .grid { display: grid !important; }
                }
            ` }} />

            {/* Navigation Controls */}
            <div className="fixed bottom-10 left-0 w-full flex justify-between items-center px-10 z-50">
                <div className="flex gap-2">
                    {slides.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`h-1 transition-all duration-500 ${currentSlide === idx ? 'w-10 bg-amber-500' : 'w-4 bg-slate-800'}`}
                        />
                    ))}
                </div>
                <div className="flex gap-4">
                    <button onClick={prevSlide} className="p-3 rounded-full border border-white/10 hover:border-amber-500 hover:text-amber-500 transition-all">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={nextSlide} className="p-3 rounded-full border border-white/10 hover:border-amber-500 hover:text-amber-500 transition-all">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-amber-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>
        </div>
    );
}

function renderSlide(slide) {
    switch (slide.type) {
        case 'Inicio':
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl w-full">
                    <div className="space-y-8 order-2 md:order-1">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3">
                            <div className="h-[1px] w-12 bg-amber-500" />
                            <span className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold">{slide.tag}</span>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-[Cinzel] text-6xl md:text-8xl font-bold leading-none">
                            <span className="text-white block">{slide.title.main}</span>
                            <span className="text-amber-500 block">{slide.title.sub}</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-xl md:text-2xl text-slate-400 font-[Playfair_Display] italic">
                            {slide.subtitle}
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-slate-500 max-w-md leading-relaxed">
                            {slide.desc}
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex gap-12 pt-4">
                            {slide.stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="font-[Cinzel] text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-slate-500">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }} 
                        animate={{ opacity: 1, scale: 1, rotate: 0 }} 
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative h-[60vh] md:h-[80vh] w-full order-1 md:order-2"
                    >
                        <Image 
                            src={slide.image} 
                            alt="Angel Ruiz" 
                            fill 
                            className="object-contain object-bottom filter contrast-125 drop-shadow-[0_0_50px_rgba(245,158,11,0.2)]"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    </motion.div>
                </div>
            );
        case 'Perfil':
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-6xl w-full">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="relative">
                        <div className="text-amber-500/20 text-9xl font-[Cinzel] absolute -top-20 -left-10 select-none">“</div>
                        <p className="font-[Playfair_Display] text-3xl md:text-5xl italic text-slate-200 leading-tight relative z-10">
                            {slide.quote}
                        </p>
                    </motion.div>
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-8 bg-amber-500" />
                            <span className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold">{slide.label}</span>
                        </div>
                        <h2 className="font-[Cinzel] text-4xl md:text-5xl font-bold text-white">{slide.title}</h2>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            {slide.text}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-4">
                            {slide.badges.map((badge, i) => (
                                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-slate-300 hover:border-amber-500/50 transition-colors">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            );
        case 'Servicios':
            return (
                <div className="w-full max-w-7xl">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold">{slide.label}</span>
                        <h2 className="font-[Cinzel] text-4xl md:text-6xl font-bold text-white">{slide.title}</h2>
                        <p className="text-slate-500 font-[Playfair_Display] italic">{slide.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {slide.items.map((item, i) => (
                            <motion.div 
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={`p-8 rounded-[2rem] border transition-all duration-500 relative overflow-hidden group ${item.featured ? 'bg-amber-500/10 border-amber-500/30' : 'bg-white/5 border-white/10'}`}
                            >
                                <div className="text-amber-500/10 text-7xl font-bold absolute -top-4 -right-4 group-hover:text-amber-500/20 transition-all">{item.id}</div>
                                <span className="text-4xl mb-6 block text-amber-500">{item.icon}</span>
                                <h3 className="font-[Cinzel] text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, j) => (
                                        <span key={j} className="text-[8px] uppercase tracking-widest text-amber-500/80 border border-amber-500/20 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            );
        case 'Proceso':
            return (
                <div className="w-full max-w-6xl">
                    <div className="text-center mb-20">
                        <span className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold">{slide.label}</span>
                        <h2 className="font-[Cinzel] text-4xl md:text-6xl font-bold text-white mt-4">{slide.title}</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent hidden md:block" />
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
                            {slide.steps.map((step, i) => (
                                <motion.div 
                                    key={step.num}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center font-[Cinzel] text-xl font-bold text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500 mb-6 shadow-xl shadow-amber-500/0 group-hover:shadow-amber-500/20">
                                        {step.num}
                                    </div>
                                    <h3 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">{step.title}</h3>
                                    <p className="text-slate-500 text-[11px] leading-relaxed max-w-[150px]">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        case 'Tarifas':
            return (
                <div className="w-full max-w-7xl">
                    <div className="text-center mb-12">
                        <span className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold">{slide.label}</span>
                        <h2 className="font-[Cinzel] text-4xl md:text-5xl font-bold text-white mt-4">{slide.title}</h2>
                        <p className="text-slate-500 font-[Playfair_Display] italic mt-2">{slide.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {slide.packs.map((pack, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-10 rounded-[2.5rem] border flex flex-col h-full relative ${pack.featured ? 'bg-amber-500/10 border-amber-500/40 shadow-2xl shadow-amber-500/10' : 'bg-white/5 border-white/10'}`}
                            >
                                {pack.featured && (
                                    <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[8px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-bl-xl rounded-tr-[2.5rem]">
                                        Más Popular
                                    </div>
                                )}
                                <div className="mb-8">
                                    <h3 className="font-[Cinzel] text-2xl font-bold text-white mb-1">{pack.name}</h3>
                                    <p className="text-amber-500 text-[10px] uppercase tracking-widest font-bold">{pack.sub}</p>
                                </div>
                                <div className="mb-8">
                                    <div className="text-4xl font-bold text-white mb-1">{pack.price}</div>
                                    <p className="text-slate-500 text-xs">{pack.duration}</p>
                                </div>
                                <div className="space-y-4 mb-10 flex-grow">
                                    {pack.items.map((item, j) => (
                                        <div key={j} className="flex items-center gap-3 text-slate-400 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6 border-t border-white/10">
                                    <div className="text-[10px] uppercase tracking-widest text-amber-500 font-bold mb-2">Ideal para:</div>
                                    <div className="text-slate-300 text-sm italic">{pack.ideal}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            );
        case 'Referencias':
            return (
                <div className="w-full max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold">{slide.label}</span>
                        <h2 className="font-[Cinzel] text-4xl md:text-6xl font-bold text-white mt-4">{slide.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {slide.reviews.map((review, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="p-12 rounded-[3rem] bg-white/5 border border-white/10 relative group hover:border-amber-500/30 transition-all duration-500"
                            >
                                <div className="flex gap-1 mb-8">
                                    {[...Array(5)].map((_, star) => (
                                        <Star key={star} className="w-4 h-4 fill-amber-500 text-amber-500" />
                                    ))}
                                </div>
                                <p className="font-[Playfair_Display] text-2xl italic text-slate-200 leading-relaxed mb-8">
                                    {review.text}
                                </p>
                                <div className="space-y-1">
                                    <div className="text-white font-bold uppercase tracking-widest text-xs">{review.author}</div>
                                    <div className="text-amber-500 text-[10px] uppercase tracking-widest">{review.company}</div>
                                </div>
                                <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Sparkles className="w-12 h-12 text-amber-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            );
        case 'Contacto':
            return (
                <div className="w-full max-w-4xl text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                        <span className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold">{slide.label}</span>
                        <h2 className="font-[Cinzel] text-6xl md:text-8xl font-bold text-white mt-6 mb-8 leading-tight">
                            Hagamos Algo <span className="text-amber-500">Imposible</span>
                        </h2>
                        <p className="text-slate-400 font-[Playfair_Display] text-xl md:text-2xl italic mb-16">
                            {slide.subtitle}
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                        {slide.links.map((link, i) => (
                            <motion.a 
                                key={i}
                                href={link.href}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500 hover:bg-amber-500/5 transition-all group"
                            >
                                <link.icon className="w-6 h-6 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{link.label}</span>
                                <span className="text-white font-bold">{link.val}</span>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex justify-center gap-10">
                        {['Instagram', 'TikTok', 'YouTube', 'X / Twitter'].map((social, i) => (
                            <a key={i} href="#" className="text-[10px] uppercase tracking-[0.2em] text-slate-500 hover:text-amber-500 transition-colors">
                                {social}
                            </a>
                        ))}
                    </motion.div>
                </div>
            );
        default:
            return null;
    }
}
