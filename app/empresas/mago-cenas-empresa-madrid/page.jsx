import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
    title: 'Mago para Cenas de Empresa en Madrid | Animación Exclusiva',
    description: 'Transforma la cena de Navidad o celebración de tu empresa en Madrid con magia de cerca. Entretenimiento premium para restaurantes y reservados VIP.',
    alternates: {
        canonical: 'https://angelruiz.world/empresas/mago-cenas-empresa-madrid',
    },
    openGraph: {
        title: 'Mago para Cenas de Empresa en Madrid | Ángel Ruiz',
        description: 'Entretenimiento exclusivo para cenas de empresa en restaurantes y espacios de Madrid. Magia que une equipos y rompe el hielo.',
        images: [{ url: '/images/mago-empresas-madrid-angel-ruiz.svg' }],
    }
};

export default function CenasEmpresaPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mago para Cenas de Empresa en Madrid",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Comunidad de Madrid",
        "description": "Servicio de magia de cerca e ilusionismo exclusivo para amenizar cenas de empresa, eventos de Navidad y reuniones corporativas en Madrid.",
        "serviceType": "Entertainment",
        "url": "https://angelruiz.world/empresas/mago-cenas-empresa-madrid"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Empresas", "item": "https://angelruiz.world/empresas" },
            { "@type": "ListItem", "position": 3, "name": "Cenas de Empresa Madrid", "item": "https://angelruiz.world/empresas/mago-cenas-empresa-madrid" }
        ]
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }} 
            />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="bg-[#0A0A0A] text-[#EAEAEA] font-mono selection:bg-amber-500 selection:text-black min-h-screen border-t-[8px] border-amber-500">
                    <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto relative z-10">
                        <Breadcrumbs />
                        
                        <div className="mt-16 bg-[#121212] border border-[#EAEAEA]/20 shadow-[8px_8px_0_0_#F59E0B]">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                
                                <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#EAEAEA]/20">
                                    <div className="flex justify-between items-center mb-12">
                                        <div className="px-2 py-1 bg-amber-500 text-black text-[10px] font-black uppercase tracking-[0.3em]">
                                            ANIMACIÓN_PREMIUM
                                        </div>
                                        <div className="text-[10px] text-[#EAEAEA]/40 uppercase tracking-widest">
                                            ID: CENA_CORP_MADRID
                                        </div>
                                    </div>
                                    
                                    <h1 className="text-4xl md:text-5xl font-sans font-black uppercase tracking-tighter leading-none mb-8 text-white">
                                        Mago para <br/><span className="text-transparent flex-1 text-amber-500">Cenas de Empresa</span> <br/>en Madrid
                                    </h1>
                                    
                                    <div className="text-sm md:text-base leading-relaxed text-[#EAEAEA]/80 mb-8 border-l-2 border-amber-500 pl-4">
                                        Las cenas corporativas demandan una dinamización sutil pero de impacto extremo. Evita la monotonía del protocolo tradicional introduciendo un <strong className="text-amber-500">ilusionista B2B</strong>, garantizando un aumento medible en el <strong className="text-amber-500">Engagement</strong> de directivos y empleados, consolidando equipos de trabajo con un <strong>alto Retorno de Inversión (ROI)</strong> emocional y relacional.
                                    </div>

                                    <div className="space-y-6 text-xs mt-12 border-t border-[#EAEAEA]/20 pt-8">
                                        <div className="flex gap-4 items-start">
                                            <div className="text-amber-500 font-bold">[ 01 ]</div>
                                            <div>
                                                <h4 className="font-sans font-black uppercase text-sm mb-1 text-white">Networking de Cóctel</h4>
                                                <p className="text-[#EAEAEA]/60 leading-relaxed">Operaciones de micromagia itinerante para romper el hielo inicial y acelerar la cohesión social previa a la mesa.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="text-amber-500 font-bold">[ 02 ]</div>
                                            <div>
                                                <h4 className="font-sans font-black uppercase text-sm mb-1 text-white">Dinamización Mesa a Mesa</h4>
                                                <p className="text-[#EAEAEA]/60 leading-relaxed">Intervenciones calculadas de magia de cerca de alto impacto entre platos, sin fricción con el servicio de hostelería.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-12">
                                        <ContactButtonClient label="CONSULTAR DISPONIBILIDAD OPERATIVA" className="w-full md:w-auto bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-black uppercase text-[10px] tracking-widest px-8 py-4 rounded-none transition-all" />
                                    </div>
                                </div>

                                <div className="relative min-h-[400px] lg:min-h-full">
                                    <Image
                                        src="/images/evento-angel-ruiz-magia.webp"
                                        alt="Cenas de empresa en Madrid con Ángel Ruiz"
                                        fill
                                        className="object-cover object-center filter grayscale opacity-70 contrast-125"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-[#0A0A0A]/40 mix-blend-multiply"></div>
                                    
                                    <div className="absolute bottom-8 right-8 left-8 bg-[#0A0A0A]/90 border border-amber-500/50 p-6 backdrop-blur-sm">
                                        <div className="text-[10px] text-amber-500 uppercase tracking-widest mb-2 border-b border-amber-500/30 pb-2">
                                            TELEMETRÍA DE EVENTO
                                        </div>
                                        <p className="text-sm italic text-[#EAEAEA]/90 mt-3">
                                            "La cena iba a ser rutinaria; la intervención mágica le dio un giro espectacular y se convirtió en el tema principal de la oficina."
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </main>
            </NavFooterClient>
        </>
    );
}
