"use client";
import { useState, useEffect } from 'react';

export default function DesktopHeroVideo() {
    const [shouldPlay, setShouldPlay] = useState(false);

    useEffect(() => {
        // Only load video stream if screen is desktop (>= 768px) and not mobile touch
        if (typeof window !== 'undefined' && window.innerWidth >= 768 && !window.matchMedia('(pointer: coarse)').matches) {
            setShouldPlay(true);
        }
    }, []);

    if (!shouldPlay) return null;

    return (
        <div className="hidden md:block absolute inset-0">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="none"
                poster="/images/hero-poster.webp"
                className="w-full h-full object-cover"
            >
                <source src="/spring.webm" type="video/webm" />
                <source src="/spring.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
