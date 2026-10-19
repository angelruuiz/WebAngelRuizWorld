import Image from 'next/image';

export default function GalleryGrid({ images }) {
    return (
        <div className="columns-2 lg:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
            {images.map((img, idx) => (
                <div 
                    key={idx} 
                    className="relative overflow-hidden rounded-xl md:rounded-2xl border border-white/[0.03] group bg-[var(--surface-1)] break-inside-avoid shadow-2xl transition-all duration-500 hover:border-[#d4a853]/30 cursor-pointer"
                >
                    <div className={`relative w-full ${img.aspect} bg-neutral-900/60 overflow-hidden`}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            quality={75}
                            className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${img.position || ''}`}
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 420px"
                            priority={idx < 6}
                            loading={idx < 6 ? "eager" : "lazy"}
                            placeholder={img.blurDataURL ? "blur" : "empty"}
                            blurDataURL={img.blurDataURL}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
