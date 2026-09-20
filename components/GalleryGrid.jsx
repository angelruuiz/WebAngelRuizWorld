"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function GalleryGrid({ images }) {
    const [visibleCount, setVisibleCount] = useState(12);

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 12, images.length));
    };

    return (
        <>
            <div className="columns-2 lg:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
                {images.slice(0, visibleCount).map((img, idx) => (
                    <div 
                        key={idx} 
                        className="relative overflow-hidden rounded-xl md:rounded-2xl border border-white/[0.03] group bg-[var(--surface-1)] break-inside-avoid shadow-2xl transition-all duration-500 hover:border-[#d4a853]/30 cursor-pointer"
                    >
                        <div className={`relative w-full ${img.aspect}`}>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                quality={82}
                                className={`object-cover transition-transform duration-1000 group-hover:scale-110 ${img.position || ''}`}
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                                priority={idx < 2}
                                loading={idx < 2 ? "eager" : "lazy"}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < images.length && (
                <div className="mt-12 text-center">
                    <button 
                        onClick={loadMore}
                        className="px-8 py-3 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-full text-xs font-bold hover:bg-amber-500 hover:text-black transition-colors uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:scale-105"
                    >
                        Cargar más
                    </button>
                </div>
            )}
        </>
    );
}
