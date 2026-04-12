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
        <motion.div className={`fixed top-0 left-0 pointer-events-none z-[100005] hidden md:block ${isLight ? '' : 'mix-blend-screen'}`}
            animate={{ x: mousePosition.x - (isHovering ? 32 : 16), y: mousePosition.y - (isHovering ? 32 : 16), scale: isHovering ? 1.5 : 1 }}
            transition={{ x: { duration: 0 }, y: { duration: 0 }, scale: { type: 'spring', stiffness: 500, damping: 28 } }}>
            <div className={`rounded-full blur-xl transition-all duration-300 ${isLight ? 'bg-slate-950/20' : 'bg-amber-400 opacity-40'} ${isHovering ? 'w-16 h-16' : 'w-8 h-8'}`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ${isLight ? 'border-slate-950 shadow-[0_0_15px_rgba(0,0,0,0.1)]' : 'border-amber-200/50'} ${isHovering ? 'w-12 h-12' : 'w-4 h-4'}`} />
        </motion.div>
    );
};

export const ReadingProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const sparkleTop = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const topPercent = useTransform(sparkleTop, [0, 1], ["0%", "100%"]);

    return (
        <div className="fixed right-8 top-1/4 bottom-1/4 w-[2px] bg-slate-200/20 rounded-full z-[100006] hidden lg:block">
            <motion.div
                className="absolute top-0 left-0 right-0 bg-amber-500 rounded-full origin-top shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                style={{ scaleY, height: '100%' }}
            />
            {/* Sparkle particle at the tip of the progress */}
            <motion.div 
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full blur-[2px] shadow-[0_0_15px_#fff]"
                style={{ 
                    top: topPercent,
                }}
            />
        </div>
    );
};

export const ParticleBackground = () => {
    const [particles] = useState(() => Array.from({ length: 35 }).map((_, i) => ({ 
        id: i, 
        x: Math.random() * 100, 
        y: Math.random() * 100, 
        size: Math.random() * 2 + 1, 
        duration: Math.random() * 15 + 15,
        delay: Math.random() * 10
    })));
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[#020617] z-0" />
            {particles.map((p) => (
                <motion.div 
                    key={p.id} 
                    className="absolute rounded-full bg-amber-500/20 blur-[1px]" 
                    style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }} 
                    animate={{ 
                        y: [0, -200], 
                        opacity: [0, 0.4, 0],
                        scale: [1, 1.5, 1]
                    }} 
                    transition={{ 
                        duration: p.duration, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: p.delay
                    }} 
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617] z-10" />
        </div>
    );
};
