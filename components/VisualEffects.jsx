"use client";
import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const MagicCursor = ({ isLight = false }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    useEffect(() => {
        const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
        const handleMouseOver = (e) => setIsHovering(e.target.closest('button, a, input, textarea, select, .cursor-pointer') !== null);
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);
    return (
        <motion.div className={`fixed top-0 left-0 pointer-events-none z-[9999999] hidden md:block`}
            animate={{ x: mousePosition.x - (isHovering ? 28 : 12), y: mousePosition.y - (isHovering ? 28 : 12), scale: isHovering ? 1.5 : 1 }}
            transition={{ x: { duration: 0 }, y: { duration: 0 }, scale: { type: 'spring', stiffness: 500, damping: 28 } }}>
            <div className={`rounded-full blur-xl transition-all duration-300 ${isLight ? 'bg-slate-950/20' : 'bg-[#d4a853] opacity-40'} ${isHovering ? 'w-14 h-14' : 'w-6 h-6'}`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ${isLight ? 'border-slate-950' : 'border-[#d4a853] shadow-[0_0_20px_rgba(212,168,83,0.4)]'} ${isHovering ? 'w-10 h-10' : 'w-3 h-3'}`} />
        </motion.div>
    );
};

export const ReadingProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/10 z-[100006]">
            {/* The Laser Track Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <motion.div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#b8860b] via-[#d4a853] to-[#e8cc8a] origin-left shadow-[0_0_25px_rgba(212,168,83,0.5)]"
                style={{ scaleX, width: '100%' }}
            />
            
            {/* Moving Sparkle across the bottom edge */}
            <motion.div 
                className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/90 to-transparent blur-[6px] pointer-events-none"
                style={{ 
                    left: useTransform(scaleX, [0, 1], ["-15%", "100%"]),
                }}
            />
        </div>
    );
};

export const ParticleBackground = () => {
    const [particles] = useState(() => {
        const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 25;
        const colors = ['bg-[#d4a853]/15', 'bg-[#c9956b]/12', 'bg-[#e8cc8a]/10'];
        return Array.from({ length: count }).map((_, i) => ({ 
            id: i, 
            x: Math.random() * 100, 
            y: Math.random() * 100, 
            size: Math.random() * 2.5 + 0.5, 
            duration: Math.random() * 18 + 12,
            delay: Math.random() * 10,
            color: colors[Math.floor(Math.random() * colors.length)]
        }));
    });
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[#030712] z-0" />
            {particles.map((p) => (
                <motion.div 
                    key={p.id} 
                    className={`absolute rounded-full ${p.color} blur-[1px]`}
                    style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, willChange: 'transform, opacity' }} 
                    animate={{ 
                        y: [0, -250], 
                        x: [0, (Math.random() - 0.5) * 40],
                        opacity: [0, 0.35, 0],
                        scale: [0.8, 1.3, 0.8]
                    }} 
                    transition={{ 
                        duration: p.duration, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: p.delay
                    }} 
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712] z-10" />
        </div>
    );
};

export const FadeIn = ({ children, delay = 0, y = 30, className = "", scale = 1 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: y, scale: scale }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
