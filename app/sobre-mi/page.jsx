"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import { ContactFormModal } from '@/components/Modals';
import Chatbot from '@/components/Chatbot';

const MagicalCarousel = () => {
    const images = ["/images/foto-bio.png", "/images/foto-bio-2.png"];
    const [index, setIndex] = useState(0);
    useState(() => {
        const timer = setInterval(() => { setIndex((prev) => (prev + 1) % images.length); }, 3000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1, filter: "brightness(1)" }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={images[index]}
                        alt="Angel Ruiz Mago"
                        fill
                        className="object-cover rounded-xl shadow-2xl"
                        sizes="(max-w-768px) 100vw, 50vw"
                        priority={index === 0}
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none rounded-xl" />
        </div>
    );
};

export default function SobreMiPage() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    
    return (
        <div className="bg-slate-950 min-h-screen text-slate-200">
            <MagicCursor />
            <ParticleBackground />
            <Navbar onOpenContact={() => setIsContactOpen(true)} />

            <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center font-bold">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} 
                        animate={{ opacity: 1, x: 0 }}
                        className="relative max-w-md mx-auto w-full h-[600px] z-10"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-amber-600/20 to-purple-600/20 rounded-2xl blur-xl rotate-3" />
                        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-slate-800">
                            <MagicalCarousel />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }} 
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8 relative z-20"
                    >
                        <div className="inline-block border-b-2 border-amber-500 pb-2 mb-4">
                            <h1 className="text-5xl md:text-7xl font-[Cinzel] font-bold text-white tracking-widest drop-shadow-lg">SOBRE MÍ</h1>
                        </div>
                        
                        <div className="space-y-6 text-white font-medium leading-loose text-lg md:text-xl">
                            <p className="text-2xl text-amber-400 font-bold italic mb-8 drop-shadow-sm">
                                "La magia no es solo lo que ves, sino cómo te hace sentir."
                            </p>
                            
                            <p>Como <span className="text-amber-400 font-bold font-['Playfair_Display']">ilusionista profesional</span>, me especializo en ofrecer magia exclusiva para eventos y bodas, transformando celebraciones ordinarias en experiencias extraordinarias que quedan grabadas en la memoria.</p>
                            
                            <p>A mis 8 años, inquieto e interesado por todo aquello que no pudiera explicar, fue cuando se cruzó en mi camino la magia, de la mano del primer mago que presencié, <span className="text-amber-400 font-bold font-['Playfair_Display'] italic">Paco G</span>. El cual me acabó introduciendo en todo este mundo de ilusión y asombro.</p>
                            
                            <p>Tras muchos años de lecciones autodidactas y experimentar métodos propios, decidí dar el salto a escena y realizar lo que más me gusta: <span className="text-amber-400 font-bold">Magia de Cerca (Close-up)</span>.</p>
                            
                            <p>Una de las más fuertes que existen en mi opinión, y en la que el público participa y se vive todo en primera persona. Magia a escasos centímetros del espectador, en la que se llega a límites insospechados.</p>
                        </div>

                        <div className="flex gap-4 pt-10">
                            {[
                                { url: "https://instagram.com/angellruuiz", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> },
                                { url: "https://tiktok.com/@angellruuiz", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg> },
                                { url: "https://x.com/angellruuizz", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768" /><path d="M13.277 10.723l6.723 -6.723" /></svg> },
                                { url: "https://facebook.com/angellruuiz", icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> }
                            ].map((social, i) => (
                                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-amber-500/50 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-all hover:scale-110 shadow-[0_0_15px_rgba(245,158,11,0.2)] group">
                                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer onOpenContact={() => setIsContactOpen(true)} />
            <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <Chatbot />
        </div>
    );
}
