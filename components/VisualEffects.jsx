"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const MagicCursor = () => {
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
        <motion.div className="fixed top-0 left-0 pointer-events-none z-[100001] mix-blend-screen hidden md:block"
            animate={{ x: mousePosition.x - (isHovering ? 32 : 16), y: mousePosition.y - (isHovering ? 32 : 16), scale: isHovering ? 1.5 : 1 }}
            transition={{ x: { duration: 0 }, y: { duration: 0 }, scale: { type: 'spring', stiffness: 500, damping: 28 } }}>
            <div className={`rounded-full bg-amber-400 blur-xl opacity-40 transition-all duration-300 ${isHovering ? 'w-16 h-16' : 'w-8 h-8'}`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/50 transition-all duration-300 ${isHovering ? 'w-12 h-12' : 'w-4 h-4'}`} />
        </motion.div>
    );
};

export const ParticleBackground = () => {
    const [particles] = useState(() => Array.from({ length: 20 }).map((_, i) => ({ id: i, x: Math.random() * 100, y: Math.random() * 100, size: Math.random() * 3 + 1, duration: Math.random() * 10 + 10 })));
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <motion.div key={p.id} className="absolute rounded-full bg-amber-500/20 blur-sm" style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }} animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0] }} transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }} />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 z-0" />
        </div>
    );
};
