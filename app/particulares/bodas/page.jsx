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

                <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    <div>
                        <p className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4 drop-shadow-md">
                            Especialista en Bodas
                        </p>
                        <h1 className="text-5xl md:text-8xl font-[Cinzel] text-white mb-8 border-b-2 border-amber-500 pb-4 font-bold">
                            Mago para Bodas en Madrid
                        </h1>

                        <div className="space-y-6 text-white text-base md:text-lg font-medium leading-relaxed text-justify">
                            <p>
                                <span className="text-amber-400 font-bold">
                                    Personaliza tu boda de la forma más mágica.
                                </span>{' '}
                                Ángel Ruiz, mago profesional especializado en bodas en Madrid, se encargará
                                de acompañarte en vuestro día para hacer del cóctel o del banquete un momento
                                único e irrepetible para todos vuestros invitados.
                            </p>

                            <p>
                                Si me quieres durante el cóctel,{' '}
                                <span className="text-white font-bold italic underline decoration-amber-500/50">
                                    me infiltraré entre tus invitados como uno más
                                </span>{' '}
                                e iré realizando mini-shows de magia por grupos. Si me quieres durante el
                                banquete, amenizaré las esperas entre plato y plato y romperé el hielo con
                                tus invitados para que participen activamente.
                            </p>

                            <p>
                                Tu gran día merece un toque de distinción que tus invitados no olviden jamás.
                                Como <strong className="text-amber-400">mago de bodas en Madrid</strong>,
                                me especializo en crear esos instantes de asombro que sirven para romper el
                                hielo y conectar a familiares y amigos que acaban de conocerse.
                            </p>

                            <p>
                                La <strong className="text-amber-400">magia de cerca durante el cóctel</strong> es
                                la opción más demandada por parejas en Madrid y alrededores. Mientras los novios
                                realizan su sesión fotográfica, me encargo de que el ritmo no decaiga,
                                moviéndome entre los grupos con efectos de{' '}
                                <strong className="text-amber-400 italic">ilusionismo de impacto</strong> que
                                ocurren directamente en las manos de los asistentes. No es solo un espectáculo,
                                es una herramienta social que genera risas, conversaciones y un ambiente eléctrico.
                            </p>

                            <p>
                                Además de la recepción, ofrezco intervenciones personalizadas durante el
                                banquete o incluso un show central antes del baile. Cada boda es única,
                                por lo que adapto mi repertorio para que encaje con el estilo de vuestro
                                enlace, ya sea una celebración íntima en Torrelodones o un gran evento de
                                gala en Madrid capital. Mi objetivo es que, cuando la gente recuerde vuestro
                                enlace, mencione lo increíble que fue ese momento en el que lo imposible
                                ocurrió frente a sus ojos.
                            </p>

                            <p>
                                Como <strong className="text-amber-400">ilusionista para bodas en la
                                Comunidad de Madrid</strong>, cubro celebraciones en toda la región:
                                Madrid capital, Torrelodones, Las Rozas, Majadahonda, Pozuelo de Alarcón,
                                Boadilla del Monte, El Escorial y alrededores. Los presupuestos varían
                                según la ubicación y duración.
                            </p>

                            <p className="italic text-amber-500/90 font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4">
                                Magia adulta y participación intensa. Con más de 10 años de experiencia en
                                celebraciones exclusivas, te garantizo un éxito total. ¡Contáctame y
                                hablamos sin compromiso!
                            </p>
                        </div>

                        <div className="mt-12 flex justify-start">
                            <ContactButtonClient label="Reservar Fecha" />
                        </div>
                    </div>

                    <div className="relative md:sticky md:top-32 h-[450px] md:h-[500px] rounded-3xl overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <Image
                            src="/images/boda-magia-madrid.jpg"
                            alt="Mago de bodas en Madrid Ángel Ruiz ilusionista profesional para cócteles y banquetes"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                    </div>
                </div>
            </main>
        </NavFooterClient>
    );
}
