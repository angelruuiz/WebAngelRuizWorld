"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const MagicCursor = ({ isLight = false }) => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        let mouseX = -100;
        let mouseY = -100;
        let currentX = -100;
        let currentY = -100;
        let rafId;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const onMouseOver = (e) => {
            const isClickable = e.target.closest('button, a, input, textarea, select, .cursor-pointer, [role="button"]') !== null;
            setIsHovering(isClickable);
        };

        const render = () => {
            // Smooth lerp (linear interpolation) for ultra-luxury buttery feel with 0 React re-renders
            currentX += (mouseX - currentX) * 0.35;
            currentY += (mouseY - currentY) * 0.35;
            cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            rafId = requestAnimationFrame(render);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mouseover', onMouseOver, { passive: true });
        rafId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div 
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-[9999999] hidden md:block will-change-transform"
            style={{ transform: 'translate3d(-100px, -100px, 0)' }}
        >
            <div className={`relative -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ${isHovering ? 'scale-150' : 'scale-100'}`}>
                <div className={`rounded-full blur-md transition-all duration-300 ${isLight ? 'bg-slate-950/20' : 'bg-[#d4a853] opacity-35'} ${isHovering ? 'w-12 h-12' : 'w-6 h-6'}`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d4a853] shadow-[0_0_15px_rgba(212,168,83,0.5)] transition-all duration-300 ${isHovering ? 'w-8 h-8 border-amber-300' : 'w-3 h-3'}`} />
            </div>
        </div>
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
        const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 16;
        const colors = ['bg-[#d4a853]/15', 'bg-[#c9956b]/12', 'bg-[#e8cc8a]/10'];
        return Array.from({ length: count }).map((_, i) => ({ 
            id: i, 
            x: Math.random() * 100, 
            y: Math.random() * 100, 
            size: Math.random() * 2 + 1, 
            duration: Math.random() * 14 + 10,
            delay: Math.random() * 8,
            color: colors[Math.floor(Math.random() * colors.length)]
        }));
    });
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
            <div className="absolute inset-0 bg-[#030712] z-0" />
            {particles.map((p) => (
                <div 
                    key={p.id} 
                    className={`absolute rounded-full ${p.color} blur-[1px]`}
                    style={{ 
                        left: `${p.x}%`, 
                        top: `${p.y}%`, 
                        width: p.size, 
                        height: p.size, 
                        animation: `floatParticle ${p.duration}s linear infinite`,
                        animationDelay: `${p.delay}s`,
                        willChange: 'transform, opacity' 
                    }} 
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712] z-10" />
        </div>
    );
};

export const FadeIn = ({ children, delay = 0, y = 20, className = "", scale = 1 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: y, scale: scale }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
