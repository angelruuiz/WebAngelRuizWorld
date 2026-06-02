import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
    title: 'Mago para Restaurantes en Madrid 🍷 Aumenta tu Ticket Medio',
    description: '¿Buscas mago para tu restaurante en Madrid? Magia de mesa en mesa (table hopping) para fidelizar clientes, amenizar esperas y destacar tu local.',
    alternates: {
        canonical: 'https://angelruiz.world/empresas/mago-para-restaurantes-madrid',
    },
    keywords: 'mago para restaurantes madrid, magia en restaurantes madrid, ilusionista restaurantes madrid, entretenimiento para restaurantes, cenas con espectaculo madrid, fidelizar clientes restaurante, mago hosteleria',
    openGraph: {
        title: 'Mago para Restaurantes en Madrid 🍷 Aumenta tu Ticket Medio',
        description: 'Aumenta el ticket medio y la fidelización de tus clientes con magia de mesa en mesa. El entretenimiento perfecto para restaurantes en Madrid.',
        images: [{ url: '/images/foto-spring-cartas.webp' }],
    }
};

export default function RestaurantPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mago para Restaurantes en Madrid",
        "provider": {
            "@type": "Person",
            "name": "Ángel Ruiz"
        },
        "areaServed": "Madrid",
        "description": "Servicio de mago ilusionista para restaurantes en Madrid. Magia de proximidad de mesa en mesa para amenizar esperas, fidelizar comensales y aportar valor añadido a cenas de empresa y eventos en el local.",
        "serviceType": "Hospitality Entertainment",
        "url": "https://angelruiz.world/empresas/mago-para-restaurantes-madrid"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Cómo funciona la magia en un restaurante?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La magia para restaurantes funciona mediante el formato de 'Magia de Cerca' o 'Table Hopping'. Me acerco de mesa en mesa entre los platos o en la sobremesa, ofreciendo micro-shows exclusivos de 5-10 minutos a cada grupo de comensales. No requiere escenario ni interrumpe el servicio de camareros."
                }
            },
            {
                "@type": "Question",
                "name": "¿Interfiere el mago con el trabajo de los camareros?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "En absoluto. Mi experiencia trabajando en hostelería me permite 'leer la sala'. Sé perfectamente cuándo acercarme a una mesa (normalmente mientras esperan el primer plato o antes del postre) y me aparto inmediatamente cuando los camareros llegan con la comida, facilitando su labor."
                }
            },
            {
                "@type": "Question",
                "name": "¿Es rentable contratar un mago para mi restaurante en Madrid?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, es una inversión con retorno directo. Un mago para restaurantes ayuda a que los tiempos de espera en cocina pasen volando (reduciendo quejas), fomenta que los clientes pidan más consumiciones de sobremesa (aumentando el ticket medio) y genera un boca a boca espectacular que atrae nuevas reservas."
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
            { "@type": "ListItem", "position": 2, "name": "Empresas", "item": "https://angelruiz.world/empresas" },
            { "@type": "ListItem", "position": 3, "name": "Mago Restaurantes", "item": "https://angelruiz.world/empresas/mago-para-restaurantes-madrid" }
        ]
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema]) }} 
            />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="bg-[#0A0A0A] text-[#EAEAEA] font-mono selection:bg-amber-500 selection:text-black">
                    <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative z-10">
                        <Breadcrumbs />
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-amber-500/20 border border-amber-500/30 mt-12">
                            
                            <div className="md:col-span-8 bg-[#0A0A0A] p-10 lg:p-16">
                                <div className="text-amber-500 uppercase tracking-widest text-[10px] font-black border-l-2 border-amber-500 pl-3 mb-8">
                                    /// HORECA_ROI_OPTIMIZATION
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-sans font-black uppercase tracking-tighter leading-none mb-10 text-white">
                                    Mago para <br/><span className="text-amber-500">Restaurantes</span>
                                </h1>
                                
                                <p className="text-sm md:text-base leading-relaxed text-[#EAEAEA]/80 mb-12 max-w-2xl">
                                    El sector hostelero en Madrid exige diferenciación. El ilusionismo <em>Table Hopping</em> no solo aporta valor experiencial; incrementa el <strong className="text-amber-500">ticket medio</strong>, neutraliza quejas por esperas y catapulta las métricas de fidelización y <strong className="text-amber-500">engagement</strong> del comensal. Alto <strong>Retorno de Inversión</strong> por cada mesa cubierta.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#EAEAEA]/10 border border-[#EAEAEA]/20 p-px">
                                    <div className="bg-[#0A0A0A] p-6 hover:bg-[#121212] transition-colors">
                                        <div className="text-amber-500 text-2xl font-black mb-2">+25%</div>
                                        <h4 className="font-sans font-black uppercase text-sm mb-1 text-white">Aumento Consumo Mesa</h4>
                                        <p className="text-[10px] text-[#EAEAEA]/60 uppercase tracking-widest">Postres & Sobremesa</p>
                                    </div>
                                    <div className="bg-[#0A0A0A] p-6 hover:bg-[#121212] transition-colors">
                                        <div className="text-amber-500 text-2xl font-black mb-2">0</div>
                                        <h4 className="font-sans font-black uppercase text-sm mb-1 text-white">Fricción en Sala</h4>
                                        <p className="text-[10px] text-[#EAEAEA]/60 uppercase tracking-widest">Coordinación Total Maître</p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-4 bg-[#121212] flex flex-col justify-between">
                                <div className="relative h-64 md:h-auto md:flex-1 w-full filter grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src="/images/foto-spring-cartas.webp"
                                        alt="Mago actuando en un restaurante en Madrid"
                                        fill
                                        className="object-cover opacity-80 mix-blend-luminosity"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-[#0A0A0A]/30 mix-blend-multiply"></div>
                                </div>
                                <div className="p-8 border-t border-amber-500/30">
                                    <ContactButtonClient label="EVALUAR_VIABILIDAD_LOCAL" className="w-full bg-amber-500 text-black font-black uppercase text-xs py-4 rounded-none tracking-widest hover:bg-white transition-colors" />
                                </div>
                            </div>

                        </div>

                        <div className="mt-24 pt-16 border-t-[1px] border-[#EAEAEA]/20">
                            <h2 className="text-2xl font-sans font-black text-white mb-12 uppercase tracking-widest text-center">
                                DATOS TÉCNICOS & FAQ
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                                {faqSchema.mainEntity.map((faq, index) => (
                                    <div key={index} className="border border-[#EAEAEA]/20 bg-[#0A0A0A] p-6 relative group">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                        <h3 className="text-amber-500 font-sans font-black mb-3 text-sm uppercase">{faq.name}</h3>
                                        <p className="text-[#EAEAEA]/70 text-xs leading-relaxed">{faq.acceptedAnswer.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </section>
                </main>
            </NavFooterClient>
        </>
    );
}
