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
        <section aria-label="Empresas que confían en Ángel Ruiz" className={`w-full relative z-20 ${className}`}>
            {/* Versión Móvil: Cinta fluida y minimalista que no abruma al usuario */}
            <div className="sm:hidden w-full py-5 px-4 overflow-hidden">
                <p className="text-center text-[10px] uppercase font-bold tracking-[0.22em] text-[#d4a853]/90 mb-3">
                    {title}
                </p>
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)]">
                    <div className="flex shrink-0 items-center gap-7 animate-marquee py-1">
                        {corporateLogos.map((logo, idx) => (
                            <div 
                                key={`m-logo-1-${idx}`} 
                                className="h-9 flex items-center shrink-0 opacity-80"
                            >
                                <Image
                                    src={logo.src}
                                    alt={`Logo corporativo de ${logo.name}`}
                                    width={logo.width}
                                    height={logo.height}
                                    loading="lazy"
                                    className="max-h-7 max-w-[85px] w-auto object-contain filter grayscale contrast-125 brightness-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex shrink-0 items-center gap-7 animate-marquee py-1" aria-hidden="true">
                        {corporateLogos.map((logo, idx) => (
                            <div 
                                key={`m-logo-2-${idx}`} 
                                className="h-9 flex items-center shrink-0 opacity-80"
                            >
                                <Image
                                    src={logo.src}
                                    alt={`Logo corporativo de ${logo.name}`}
                                    width={logo.width}
                                    height={logo.height}
                                    loading="lazy"
                                    className="max-h-7 max-w-[85px] w-auto object-contain filter grayscale contrast-125 brightness-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Versión Tablet / Desktop: Muro tradicional completo */}
            <div className="hidden sm:block py-10 md:py-16 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto bg-[#070b16] rounded-3xl p-8 md:p-14 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-5xl font-[Cinzel] font-extrabold text-white tracking-wide mb-2 uppercase leading-tight">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-sm md:text-base font-semibold text-[#d4a853] tracking-widest uppercase">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center">
                        {corporateLogos.map((logo, idx) => (
                            <div 
                                key={`d-logo-${idx}`} 
                                className="w-full h-20 md:h-28 flex items-center justify-center p-2 hover:scale-105 active:scale-95 transition-transform duration-200"
                            >
                                <Image
                                    src={logo.src}
                                    alt={`Logo corporativo de ${logo.name}`}
                                    width={logo.width}
                                    height={logo.height}
                                    loading="lazy"
                                    className={`w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] ${logo.customClass || 'max-h-14 md:max-h-20 max-w-[120px] md:max-w-[160px]'}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
