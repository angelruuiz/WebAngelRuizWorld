import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
    title: 'Mago para Ferias y Congresos en IFEMA Madrid | Atrae más Clientes',
    description: 'Multiplica la visibilidad de tu stand en IFEMA Madrid. Ángel Ruiz, ilusionista especializado en Trade Show Magic para captar leads y comunicar tu marca.',
    alternates: {
        canonical: 'https://angelruiz.world/empresas/mago-ferias-congresos-madrid',
    },
    openGraph: {
        title: 'Mago para Ferias en Madrid (IFEMA) | Ángel Ruiz',
        description: 'Trade Show Magic para congresos en Madrid. Capta la atención de los asistentes y transmite tu mensaje corporativo con ilusionismo.',
        images: [{ url: '/images/mago-empresas-madrid-angel-ruiz.svg' }],
    }
};

export default function FeriasCongresosPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Trade Show Magic - Mago para Ferias en IFEMA Madrid",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Madrid",
        "description": "Ilusionismo corporativo enfocado en ferias comerciales, congresos y exposiciones en IFEMA Madrid. Estrategias de captación de leads mediante magia.",
        "serviceType": "Marketing Event Entertainment",
        "url": "https://angelruiz.world/empresas/mago-ferias-congresos-madrid"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Empresas", "item": "https://angelruiz.world/empresas" },
            { "@type": "ListItem", "position": 3, "name": "Ferias IFEMA Madrid", "item": "https://angelruiz.world/empresas/mago-ferias-congresos-madrid" }
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

                <main className="bg-[#0A0A0A] text-[#EAEAEA] font-mono selection:bg-amber-500 selection:text-black">
                    <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative z-10">
                        <Breadcrumbs />
                        
                        <div className="mt-12 mb-20">
                            <header className="border-b-[4px] border-amber-500 pb-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                                <div className="max-w-3xl">
                                    <div className="inline-block bg-amber-500 text-black px-3 py-1 font-black uppercase text-[10px] tracking-widest mb-6">
                                        MÓDULO: TRADE SHOW MAGIC
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-sans font-black uppercase tracking-tighter leading-none text-[#EAEAEA]">
                                        Mago para <span className="text-amber-500">Ferias y Congresos</span> en Madrid
                                    </h1>
                                </div>
                                <div className="bg-[#121212] border border-[#EAEAEA]/20 p-4 text-xs">
                                    <div className="text-amber-500 mb-1 tracking-widest uppercase">KPI Proyectado</div>
                                    <div className="text-3xl font-black font-sans">+300% <span className="text-sm font-mono font-normal">Captación de Leads</span></div>
                                </div>
                            </header>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
                                <div className="md:col-span-7 space-y-8">
                                    <div className="text-lg leading-relaxed text-[#EAEAEA]/80 font-sans border-l border-amber-500 pl-6">
                                        Asistir a <strong>IFEMA Madrid</strong> requiere una inversión sustancial. El ilusionismo B2B no es ocio; es un catalizador táctico diseñado para <strong className="text-amber-500">frenar el tráfico en el pasillo</strong>, capturar la atención de los asistentes e incrementar drásticamente tu <strong>Retorno de Inversión (ROI)</strong>.
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#EAEAEA]/10 border border-[#EAEAEA]/20 p-px">
                                        <div className="bg-[#0A0A0A] p-6">
                                            <div className="text-amber-500 text-xs mb-2 tracking-widest">/// 01</div>
                                            <h3 className="font-sans font-black uppercase text-xl mb-3">Atracción de Tráfico</h3>
                                            <p className="text-xs text-[#EAEAEA]/60">Dinamización in-situ. Multiplicamos la densidad de público agrupado frente a tu exposición, generando efecto llamada inmediato.</p>
                                        </div>
                                        <div className="bg-[#0A0A0A] p-6">
                                            <div className="text-amber-500 text-xs mb-2 tracking-widest">/// 02</div>
                                            <h3 className="font-sans font-black uppercase text-xl mb-3">Mensaje de Marca</h3>
                                            <p className="text-xs text-[#EAEAEA]/60">Integración de atributos de producto directamente dentro de los efectos visuales. El mensaje no se escucha, se experimenta.</p>
                                        </div>
                                        <div className="bg-[#0A0A0A] p-6 sm:col-span-2">
                                            <div className="text-amber-500 text-xs mb-2 tracking-widest">/// 03</div>
                                            <h3 className="font-sans font-black uppercase text-xl mb-3">Cualificación de Leads</h3>
                                            <p className="text-xs text-[#EAEAEA]/60">Retención de la audiencia el tiempo suficiente para que tu equipo comercial intercepte leads de alto valor ya receptivos y fascinados. Maximizamos el <strong>Engagement</strong> general del stand.</p>
                                        </div>
                                    </div>

                                    <div className="bg-amber-500/10 border border-amber-500/30 p-6 mt-8">
                                        <blockquote className="text-sm italic text-[#EAEAEA]/80 border-l-2 border-amber-500 pl-4">
                                            "No dimos abasto escaneando acreditaciones. Ángel conseguía reunir a decenas de personas en nuestro stand cada hora, entregándonos una audiencia ya fascinada y receptiva."
                                        </blockquote>
                                    </div>
                                </div>

                                <div className="md:col-span-5 relative">
                                    <div className="aspect-[4/5] relative border border-amber-500/30 bg-[#121212] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                        <Image
                                            src="/images/evento-angel-ruiz-magia.webp"
                                            alt="Mago para Ferias Comerciales en IFEMA Madrid"
                                            fill
                                            className="object-cover opacity-70 mix-blend-screen"
                                            priority
                                        />
                                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent">
                                            <ContactButtonClient label="DESPLEGAR ESTRATEGIA STAND" className="w-full bg-amber-500 hover:bg-[#EAEAEA] text-[#0A0A0A] font-black uppercase tracking-widest text-xs py-4 rounded-none transition-colors" />
                                        </div>
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
