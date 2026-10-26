import Image from 'next/image';

const corporateLogos = [
    { name: "Movistar Estudiantes", src: "/images/logos/cards-dark/logo-movistar.webp", width: 144, height: 161 },
    { name: "Alcampo", src: "/images/logos/cards-dark/logo-alcampo.webp", width: 121, height: 136 },
    { name: "Ahorramás", src: "/images/logos/cards-dark/logo-ahorramas.webp", width: 210, height: 52, customClass: "max-h-6 sm:max-h-9 md:max-h-11 max-w-[80px] sm:max-w-[120px] md:max-w-[140px]" },
    { name: "Grupo Index", src: "/images/logos/cards-dark/logo-index.webp", width: 675, height: 310, customClass: "max-h-8 sm:max-h-11 md:max-h-13 max-w-[75px] sm:max-w-[115px] md:max-w-[135px]" },
    { name: "Zeppelin TV", src: "/images/logos/cards-dark/logo-zeppelin.webp", width: 1051, height: 483, customClass: "max-h-8 sm:max-h-11 md:max-h-13 max-w-[80px] sm:max-w-[120px] md:max-w-[140px]" },
    { name: "Catering Senescal", src: "/images/logos/cards-dark/logo-senescal.webp", width: 166, height: 110 },
    { name: "Makaa Eventos", src: "/images/logos/cards-dark/logo-makaa.webp", width: 662, height: 250, customClass: "max-h-6 sm:max-h-8 md:max-h-10 max-w-[70px] sm:max-w-[105px] md:max-w-[125px]" }
];

export default function CorporateLogosBar({ 
    title = "Empresas que confían en mi magia",
    subtitle = "¡Y siguen confiando!",
    className = "" 
}) {
    return (
        <section aria-label="Empresas que confían en Ángel Ruiz" className={`w-full py-8 sm:py-12 md:py-16 px-3 sm:px-6 relative z-20 ${className}`}>
            <div className="max-w-6xl mx-auto bg-[#070b16] rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-14 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                {/* Cabecera optimizada para móvil y desktop */}
                <div className="text-center mb-6 sm:mb-10 md:mb-12">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-[Cinzel] font-extrabold text-white tracking-wide mb-1 sm:mb-2 uppercase leading-tight">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-xs sm:text-base font-semibold text-[#d4a853] tracking-wider sm:tracking-widest uppercase">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Muro de logos optimizado para móvil: 2-3 columnas en smartphone, 4 en tablet y 7 en desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-6 md:gap-8 items-center justify-items-center">
                    {corporateLogos.map((logo, idx) => (
                        <div 
                            key={`logo-${idx}`} 
                            className="w-full h-16 sm:h-24 md:h-28 flex items-center justify-center p-1 sm:p-2 hover:scale-105 active:scale-95 transition-transform duration-200"
                        >
                            <Image
                                src={logo.src}
                                alt={`Logo corporativo de ${logo.name}`}
                                width={logo.width}
                                height={logo.height}
                                loading="lazy"
                                className={`w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] ${logo.customClass || 'max-h-10 sm:max-h-16 md:max-h-20 max-w-[85px] sm:max-w-[135px] md:max-w-[160px]'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
