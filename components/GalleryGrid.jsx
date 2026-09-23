import Image from 'next/image';

export default function GalleryGrid({ images }) {
    return (
        <div className="columns-2 lg:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
            {images.map((img, idx) => (
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
                            priority={idx < 4}
                            loading={idx < 4 ? "eager" : "lazy"}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
