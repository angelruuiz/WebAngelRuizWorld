"use client";
import { useState, useEffect, useRef } from 'react';

export const MagicCursor = ({ isLight = false }) => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) {
                return;
            }
        }

        document.body.classList.add('has-magic-cursor');
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
            document.body.classList.remove('has-magic-cursor');
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
                <div className={`rounded-full blur-md transition-all duration-300 ${isLight ? 'bg-slate-950/20' : 'bg-[#c8a265] opacity-35'} ${isHovering ? 'w-12 h-12' : 'w-6 h-6'}`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c8a265] shadow-[0_0_15px_rgba(200,162,101,0.4)] transition-all duration-300 ${isHovering ? 'w-8 h-8 border-[#e2cca0]' : 'w-3 h-3'}`} />
            </div>
        </div>
    );
};

export const ReadingProgress = () => {
    const progressRef = useRef(null);

    useEffect(() => {
        let ticking = false;
        const updateProgress = () => {
            const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollTotal <= 0) return;
            const progress = Math.min(Math.max(window.scrollY / scrollTotal, 0), 1);
            if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${progress})`;
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateProgress);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateProgress();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/10 z-[100006] pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div
                ref={progressRef}
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#8f6532] via-[#c8a265] to-[#e2cca0] origin-left shadow-[0_0_25px_rgba(200,162,101,0.4)] w-full will-change-transform"
                style={{ transform: 'scaleX(0)' }}
            />
        </div>
    );
};

export const ParticleBackground = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth >= 768) {
            setIsDesktop(true);
        }
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
            <div className="absolute inset-0 bg-[#030712] z-0" />
            {isDesktop && (
                <div className="absolute inset-0 overflow-hidden">
                    {[
                        { id: 1, x: 15, y: 20, size: 2, duration: 18, delay: 0, color: 'bg-[#d4a853]/20' },
                        { id: 2, x: 75, y: 35, size: 3, duration: 22, delay: 2, color: 'bg-[#c9956b]/15' },
                        { id: 3, x: 45, y: 70, size: 2, duration: 16, delay: 4, color: 'bg-[#e8cc8a]/12' },
                        { id: 4, x: 85, y: 80, size: 2.5, duration: 20, delay: 1, color: 'bg-[#d4a853]/20' },
                        { id: 5, x: 30, y: 40, size: 1.5, duration: 24, delay: 3, color: 'bg-[#c9956b]/15' },
                        { id: 6, x: 60, y: 15, size: 2, duration: 19, delay: 5, color: 'bg-[#e8cc8a]/12' }
                    ].map((p) => (
                        <div 
                            key={p.id} 
                            className={`absolute rounded-full ${p.color}`}
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
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712] z-10" />
        </div>
    );
};

export const FadeIn = ({ children, className = "" }) => {
    return (
        <div className={`transition-all duration-500 ease-out ${className}`}>
            {children}
        </div>
    );
};
