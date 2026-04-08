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
        images: [{ url: '/images/foto-bio.png' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mago para Bodas en Madrid | Angel Ruiz',
        description: 'Momentos imposibles para el día más importante de tu vida.',
        images: ['/images/foto-bio.png'],
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

                        <div className="space-y-4 text-white text-sm md:text-base leading-relaxed text-justify opacity-90">
                            <p>
                                <span className="text-amber-400 font-bold">
                                    Personaliza tu boda de la forma más mágica.
                                </span>{' '}
                                Ángel Ruiz, mago profesional especializado en bodas en Madrid y experto en <strong>eventos Madrid</strong> de lujo, se encargará
                                de acompañaros en vuestro día para hacer del cóctel o del banquete un momento
                                único e irrepetible para todos vuestros invitados. Su presencia garantiza que no haya momentos muertos, transformando cada rincón de la celebración en un foco de asombro y alegría.
                            </p>

                            <p>
                                Si buscas un <strong>mago para bodas en Torrelodones</strong> o la zona noroeste, Angel Ruiz ofrece un servicio de proximidad con la máxima calidad artística. La magia de cerca es la herramienta perfecta para romper el hielo entre invitados que no se conocen, creando un tema de conversación inmediato que perdura durante toda la cena. Es, sin duda, la mejor inversión para asegurar que el ambiente sea eléctrico desde el primer minuto.
                            </p>

                            <p>
                                Durante el <strong className="text-amber-400">cóctel de bienvenida</strong>, 
                                <span className="text-white font-bold italic underline decoration-amber-500/50 ml-1">
                                    me infiltraré entre tus invitados como uno más
                                </span>{' '}
                                e iré realizando mini-shows de magia por grupos. Esta modalidad de "mago de cerca Madrid" permite que el milagro ocurra a escasos centímetros de los ojos de tus seres queridos, utilizando objetos cotidianos como cartas, monedas o incluso los propios teléfonos móviles de los invitados. No hay escenario, no hay barreras; solo asombro puro en estado líquido.
                            </p>

                            <p>
                                Si prefieres contar conmigo durante el <strong>banquete</strong>, amenizaré las esperas entre plato y plato. Es el momento ideal para realizar magia en las mesas, adaptándome al ritmo de la cocina para que la energía nunca decaiga. El objetivo como <strong className="text-amber-400">ilusionista para bodas en Madrid</strong> es complementar la excelente gastronomía con un entretenimiento de primer nivel que respete los tiempos y la elegancia del evento.
                            </p>

                            <p>
                                Tu gran día merece un toque de distinción que tus invitados no olviden jamás.
                                Me especializo en crear esos instantes de asombro que sirven para conectar a familiares y amigos. He actuado en las fincas más exclusivas de la comunidad, desde el centro de la capital hasta entornos naturales en <strong>El Escorial o Majadahonda</strong>, adaptando siempre mi repertorio a la estética y el tono de cada enlace matrimonial.
                            </p>

                            <p>
                                La <strong className="text-amber-400">magia de cerca durante el cóctel</strong> es
                                la opción más demandada por parejas en Madrid y alrededores. Mientras los novios
                                realizan su sesión fotográfica, me encargo de que el ritmo no decaiga,
                                moviéndome entre los grupos con efectos de{' '}
                                <strong className="text-amber-400 italic">ilusionismo de impacto</strong>. Cada efecto está diseñado para provocar una reacción emocional, desde la risa más sincera hasta el silencio más absoluto ante lo imposible. Es una experiencia interactiva donde el invitado es el verdadero protagonista.
                            </p>

                            <p>
                                Además de la recepción, también ofrezco intervenciones personalizadas para el momento de la barra libre o incluso un show central antes del baile nupcial. Cada detalle cuenta, por lo que coordino con los wedding planners y los responsables de sala para que la integración sea perfecta. Ya sea una boda íntima de estilo rústico en <strong>Galapagar</strong> o un evento multitudinario en un hotel de lujo, la magia de Angel Ruiz aporta ese factor "wow" que marca la diferencia.
                            </p>

                            <p>
                                Como <strong className="text-amber-400">ilusionista para bodas en la
                                Comunidad de Madrid</strong>, cubro celebraciones en toda la región:
                                Madrid capital, <strong>Torrelodones, Las Rozas, Majadahonda, Pozuelo de Alarcón,
                                Boadilla del Monte, Collado Villalba y El Escorial</strong>. Entiendo que organizar una boda es un proceso complejo, por eso ofrezco un trato personalizado y cercano desde la primera llamada hasta el día del "sí, quiero".
                            </p>

                            <p>
                                Contratar a un <strong>mago profesional en Torrelodones</strong> no solo es añadir un espectáculo, es garantizar que vuestra boda sea recordada como el evento más original y divertido del año. La magia elegante y moderna de Angel Ruiz es el sello de calidad que tu celebración necesita para ser verdaderamente inolvidable. Mi compromiso es total: desde la puntualidad y la imagen impecable hasta la flexibilidad para adaptarme a cualquier imprevisto de última hora en la planificación.
                            </p>

                            <p>
                                Finalmente, recordad que la magia es uno de los pocos entretenimientos que une a todas las edades. Desde los más pequeños hasta los abuelos, todos se verán envueltos en una atmósfera de misterio y alegría. Si buscáis un <strong>mago para bodas en la Comunidad de Madrid</strong> que entienda la importancia de los detalles y la elegancia, no dudéis en contactar. Estaré encantado de escuchar vuestras ideas y proponer la mejor estructura mágica para vuestro día especial.
                            </p>

                            <p className="italic text-amber-500/90 font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4 text-sm md:text-base">
                                Magia adulta, sofisticada y con participación intensa. Con más de 10 años de experiencia en
                                celebraciones exclusivas en la zona noroeste de Madrid, te garantizo un éxito total. ¡Contáctame y diseñemos juntos el momento perfecto para tu boda!
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
                            className="object-cover"
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
