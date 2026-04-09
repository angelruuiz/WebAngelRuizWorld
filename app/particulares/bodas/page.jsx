import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';

export const metadata = {
    title: 'Mago para Bodas en Madrid | Angel Ruiz Ilusionista',
    description: 'Haz que tu cóctel y banquete de boda sean inolvidables con magia de cerca exclusiva. Angel Ruiz, mago experto en bodas en Madrid y alrededores.',
    alternates: {
        canonical: '/particulares/bodas',
    },
    openGraph: {
        title: 'Mago para Bodas en Madrid | Angel Ruiz',
        description: 'La magia perfecta para tu cóctel de boda. Conecta a tus invitados y crea recuerdos inolvidables.',
        images: [{ url: '/images/foto-bio-2.png' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago para Bodas en Madrid | Angel Ruiz',
        description: 'Momentos imposibles para el día más importante de tu vida.',
        images: ['/images/foto-bio-2.png'],
    },
};

export default function BodasDetailPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Magia para Bodas en Madrid",
        "provider": {
            "@type": "Person",
            "name": "Angel Ruiz"
        },
        "description": "Servicio de ilusionismo y magia de cerca para cócteles y banquetes de boda en la Comunidad de Madrid.",
        "areaServed": "Madrid"
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} 
            />
            <NavFooterClient>
                <MagicCursor />
                <ParticleBackground />

                <main className="relative z-10 pt-24 pb-16 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    <div>
                        <p className="text-amber-500 uppercase tracking-widest text-[10px] font-bold mb-2 drop-shadow-md">
                            Especialista en Bodas
                        </p>
                        <h1 className="text-4xl md:text-5xl font-[Cinzel] text-white mb-4 border-b border-amber-500/50 pb-2 font-bold leading-tight">
                            Mago para Bodas
                        </h1>

                        <div className="space-y-6 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                            <p>
                                <span className="text-amber-400 font-bold">Personaliza tu boda de la forma más mágica.</span>{' '}
                                Ángel Ruiz, mago profesional especializado en bodas en Madrid y experto en <strong>eventos Madrid</strong> de lujo, se encargará de hacer del cóctel o del banquete un momento único. Durante el <strong className="text-amber-400">cóctel de bienvenida</strong>, me infiltraré entre tus invitados realizando mini-shows de <strong>mago de cerca Madrid</strong> a escasos centímetros de sus ojos, eliminando tiempos muertos y rompiendo el hielo al instante.
                            </p>

                            <p>
                                Si prefieres contar conmigo durante el <strong>banquete</strong>, amenizaré las esperas entre plato y plato con magia en las mesas, adaptándome al ritmo de la cocina. Como <strong className="text-amber-400">ilusionista para bodas en Madrid</strong>, complemento la gastronomía con un entretenimiento de primer nivel que respeta la elegancia del evento en las fincas más exclusivas, desde el centro de la capital hasta <strong>El Escorial o Majadahonda</strong>.
                            </p>

                            <p>
                                Como referente como <strong>mago para bodas en Torrelodones</strong> y zona noroeste, cubro celebraciones en toda la región: <strong>Las Rozas, Pozuelo, Boadilla y Collado Villalba</strong>. La magia elegante y moderna es el sello de calidad que tu celebración necesita para ser inolvidable, uniendo a todas las edades en una atmósfera de misterio y alegría compartida.
                            </p>

                            <p className="italic text-amber-500/90 font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4 text-sm md:text-base">
                                Magia adulta, sofisticada y con participación intensa. Con más de 10 años de experiencia en celebraciones exclusivas en la zona noroeste de Madrid, te garantizo un éxito total. ¡Contáctame y diseñemos el momento perfecto!
                            </p>
                        </div>

                        <div className="mt-12 flex justify-start">
                            <ContactButtonClient label="Reservar Fecha" />
                        </div>
                    </div>

                    <div className="relative md:sticky md:top-32 h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                        <Image
                            src="/images/boda-magia-madrid.jpg"
                            alt="Mago de bodas en Madrid Ángel Ruiz ilusionista profesional para cócteles y banquetes"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                    </div>
                </div>
            </main>
        </NavFooterClient>
        </>
    );
}
