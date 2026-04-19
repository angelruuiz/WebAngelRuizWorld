"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MapPin, CheckCircle2, Star } from 'lucide-react';
import { Sparkles } from '@/components/Icons';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Image from 'next/image';

const slides = [
    {
        id: 'inicio',
        type: 'hero',
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
        id: 'perfil',
        type: 'about',
        quote: '«La magia es el engaño más honesto que existe»',
        label: 'Sobre Mí',
        title: 'Ilusionista Profesional',
        text: 'Formado en la Escuela de Dani DaOrtiz — uno de los mejores cartomagos del mundo — mi especialidad es el Close-Up y la Cartomagia de Élite. No ejecuto trucos. Diseño atmósferas de asombro inteligente que transforman eventos corporativos y bodas en experiencias que tus invitados recordarán para siempre.',
        badges: ['Cartomagia Purista', 'Close-Up', 'Mentalismo', 'Protocolo Corporativo', 'Escuela DaOrtiz', 'Madrid Noroeste']
    },
    {
        id: 'servicios',
        type: 'services',
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
        id: 'proceso',
        type: 'process',
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
        id: 'tarifas',
        type: 'pricing',
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
        id: 'referencias',
        type: 'testimonials',
        label: 'Referencias',
        title: 'Lo que Dicen',
        reviews: [
            { text: '«Los directivos aún hablan de la magia que ocurrió esa noche. La integración de nuestra marca en los efectos fue absolutamente impresionante.»', author: 'Director de RRHH', company: 'Empresa tecnológica · Madrid' },
            { text: '«Fue la mejor decisión para nuestra boda. Sus actuaciones rompieron el hielo entre las dos familias de una forma que nunca imaginamos posible.»', author: 'Pareja de novios', company: 'Finca exclusiva · Torrelodones' }
        ]
    },
    {
        id: 'contacto',
        type: 'contact',
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
    return (
        <div className="relative min-h-screen w-full bg-slate-950 text-slate-200 font-inter">
            <div className="no-print">
                <MagicCursor />
                <ParticleBackground />
            </div>
            
            {/* Navbar for Dossier */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-slate-950/40 border-b border-white/5 no-print">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/30">
                        <Image src="/images/logo-pequeno.jpg" width={40} height={40} alt="Logo" className="object-cover" />
                    </div>
                    <span className="font-[Cinzel] text-lg font-bold tracking-widest text-white uppercase">ANGEL RUIZ</span>
                </div>
                <div className="hidden lg:flex gap-6">
                    {slides.map((slide) => (
                        <a 
                            key={slide.id} 
                            href={`#${slide.id}`}
                            className="text-[10px] uppercase tracking-[0.2em] text-slate-400 hover:text-amber-500 transition-colors"
                        >
                            {slide.id}
                        </a>
                    ))}
                </div>
                <div className="flex gap-4">
                    <button onClick={() => window.print()} className="hidden sm:block text-[10px] font-bold uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
                        Descargar PDF
                    </button>
                    <a href="/" className="bg-amber-500 text-slate-950 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
                        Ver Web
                    </a>
                </div>
            </nav>

            <main className="relative z-10">
                {slides.map((slide, i) => (
                    <section 
                        key={slide.id} 
                        id={slide.id}
                        className="min-h-screen w-full flex items-center justify-center px-6 md:px-24 py-24 border-b border-white/5 relative overflow-hidden page-break"
                    >
                        {/* Glows for desktop view */}
                        <div className="absolute inset-0 pointer-events-none no-print">
                            <div className={`absolute ${i % 2 === 0 ? 'top-[-10%] right-[-5%]' : 'bottom-[-10%] left-[-5%]'} w-[40%] h-[40%] bg-amber-500/5 blur-[120px] rounded-full`} />
                        </div>
                        
                        <div className="w-full max-w-7xl relative z-10">
                            {renderSlide(slide)}
                        </div>
                    </section>
                ))}
            </main>

            {/* Print Only Styles */}
            <style dangerouslySetInnerHTML={{ __html: `
                @media print {
                    .no-print { display: none !important; }
                    body, html { 
                        background: #020617 !important; 
                        color: #f8fafc !important; 
                        margin: 0 !important; 
                        padding: 0 !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                        overflow: visible !important;
                        height: auto !important;
                    }
                    .page-break { 
                        page-break-after: always !important; 
                        break-after: page !important;
                        min-height: 100vh !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        background: #020617 !important;
                        padding: 20px !important;
                        border: none !important;
                    }
                    * { 
                        opacity: 1 !important; 
                        visibility: visible !important; 
                        transform: none !important; 
                        animation: none !important;
                        transition: none !important;
                    }
                    h1, h2, h3 { color: #f59e0b !important; }
                    .text-white { color: #ffffff !important; }
                    .text-amber-500 { color: #f59e0b !important; }
                    img { max-height: 60vh !important; width: auto !important; margin: 0 auto !important; display: block !important; }
                }
            ` }} />
        </div>
    );
}

function renderSlide(slide) {
    switch (slide.type) {
        case 'hero':
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 order-2 md:order-1">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                        >
                            <div className="h-[1px] w-12 bg-amber-500" />
                            <span className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold">{slide.tag}</span>
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="font-[Cinzel] text-6xl md:text-8xl font-bold leading-none"
                        >
                            <span className="text-white block">{slide.title.main}</span>
                            <span className="text-amber-500 block">{slide.title.sub}</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-slate-400 font-[Playfair_Display] italic"
                        >
                            {slide.subtitle}
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="text-slate-500 max-w-md leading-relaxed"
                        >
                            {slide.desc}
                        </motion.p>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="flex gap-12 pt-4"
                        >
                            {slide.stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="font-[Cinzel] text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-slate-500">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-[60vh] md:h-[80vh] w-full order-1 md:order-2"
                    >
                        <Image 
                            src={slide.image} 
                            alt="Angel Ruiz" 
                            fill 
                            className="object-contain object-bottom filter contrast-125 drop-shadow-[0_0_50px_rgba(245,158,11,0.2)]"
                            priority
                        />
                    </motion.div>
                </div>
            );
        case 'about':
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }}
                        className="relative"
                    >
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
                                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-slate-300">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            );
        case 'services':
            return (
                <div className="w-full">
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
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 rounded-[2rem] border transition-all duration-500 relative overflow-hidden group ${item.featured ? 'bg-amber-500/10 border-amber-500/30' : 'bg-white/5 border-white/10'}`}
                            >
                                <div className="text-amber-500/10 text-7xl font-bold absolute -top-4 -right-4">{item.id}</div>
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
        case 'process':
            return (
                <div className="w-full">
                    <div className="text-center mb-20">
                        <span className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold">{slide.label}</span>
                        <h2 className="font-[Cinzel] text-4xl md:text-6xl font-bold text-white mt-4">{slide.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {slide.steps.map((step, i) => (
                            <motion.div 
                                key={step.num}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center font-[Cinzel] text-xl font-bold text-amber-500 mb-6">
                                    {step.num}
                                </div>
                                <h3 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">{step.title}</h3>
                                <p className="text-slate-500 text-[11px] leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            );
        case 'pricing':
            return (
                <div className="w-full">
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
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-10 rounded-[2.5rem] border flex flex-col h-full relative ${pack.featured ? 'bg-amber-500/10 border-amber-500/40' : 'bg-white/5 border-white/10'}`}
                            >
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
                                <div className="pt-6 border-t border-white/10 mt-auto">
                                    <div className="text-[10px] uppercase tracking-widest text-amber-500 font-bold mb-2">Ideal para:</div>
                                    <div className="text-slate-300 text-sm italic">{pack.ideal}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            );
        case 'testimonials':
            return (
                <div className="w-full">
                    <div className="text-center mb-16">
                        <span className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold">{slide.label}</span>
                        <h2 className="font-[Cinzel] text-4xl md:text-6xl font-bold text-white mt-4">{slide.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {slide.reviews.map((review, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-12 rounded-[3rem] bg-white/5 border border-white/10 relative"
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            );
        case 'contact':
            return (
                <div className="w-full text-center">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <span className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold">{slide.label}</span>
                        <h2 className="font-[Cinzel] text-6xl md:text-8xl font-bold text-white mt-6 mb-8 leading-tight">
                            Hagamos Algo <span className="text-amber-500">Imposible</span>
                        </h2>
                        <p className="text-slate-400 font-[Playfair_Display] text-xl md:text-2xl italic mb-16">
                            {slide.subtitle}
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 max-w-4xl mx-auto">
                        {slide.links.map((link, i) => (
                            <motion.a 
                                key={i}
                                href={link.href}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500 hover:bg-amber-500/5 transition-all"
                            >
                                <link.icon className="w-6 h-6 text-amber-500 mb-4" />
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{link.label}</span>
                                <span className="text-white font-bold">{link.val}</span>
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex justify-center gap-10">
                        {['Instagram', 'TikTok', 'YouTube', 'X / Twitter'].map((social, i) => (
                            <a key={i} href="#" className="text-[10px] uppercase tracking-[0.2em] text-slate-500 hover:text-amber-500 transition-colors">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            );
        default:
            return null;
    }
}
