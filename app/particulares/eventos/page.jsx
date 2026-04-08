import Image from 'next/image';
import NavFooterClient from '@/components/NavFooterClient';
import ContactButtonClient from '@/components/ContactButtonClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';

export default function EventosDetailPage() {
    return (
        <NavFooterClient>
            <MagicCursor />
            <ParticleBackground />

            <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    <div>
                        <p className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-4 drop-shadow-md">
                            Celebraciones Únicas
                        </p>
                        <h1 className="text-5xl md:text-8xl font-[Cinzel] text-white mb-8 border-b-2 border-amber-500 pb-4 font-bold">
                            Mago para Eventos Privados en Madrid
                        </h1>

                        <div className="space-y-6 text-white text-base md:text-lg font-medium leading-relaxed text-justify">
                            <p>
                                <span className="text-amber-400 font-bold">
                                    Añade algo diferente en tu celebración.
                                </span>{' '}
                                Aniversarios, bautizos, cenas entre amigos, cumpleaños... Como{' '}
                                <strong className="text-amber-400">
                                    mago para eventos privados en Madrid
                                </strong>
                                , convierto cualquier espacio en un teatro de prestigio donde lo imposible
                                ocurre a escasos centímetros de tus ojos.
                            </p>

                            <p>
                                Si tu celebración es multitudinaria podemos realizar{' '}
                                <span className="text-white font-bold italic underline decoration-amber-500/50">
                                    magia de cóctel entre los invitados
                                </span>
                                ; de esta forma el evento seguirá su curso mientras la magia sucede de
                                forma natural en cada grupo.
                            </p>

                            <p>
                                Si sois un grupo reducido, puedo llevar a tu domicilio mi espectáculo del
                                teatro Houdini,{' '}
                                <span className="text-amber-400 font-bold italic">
                                    "Reina de corazones"
                                </span>
                                . El teatro en tu casa, sin necesidad de escenario ni equipamiento especial.
                            </p>

                            <p>
                                Me especializo en{' '}
                                <strong className="text-amber-400">
                                    magia de cerca para fiestas y eventos privados en Madrid
                                </strong>
                                , ofreciendo un show versátil que se adapta a cumpleaños, aniversarios,
                                comuniones o simplemente una reunión de amigos que buscan algo fuera de
                                lo común. Disfrutarás de un show familiar-adulto en el que prácticamente
                                todos participaréis activamente.
                            </p>

                            <p>
                                Mi enfoque combina un{' '}
                                <strong className="text-amber-400 italic">
                                    humor inteligente y refinado
                                </strong>{' '}
                                con efectos de ilusionismo que desafían la lógica. No es solo ver trucos;
                                es participar en una experiencia emocional donde la sorpresa es el plato
                                fuerte. Ya sea en el salón de un restaurante, en el jardín de tu casa o
                                en un local privado, mi{' '}
                                <strong className="text-amber-400">magia de cerca profesional</strong> está
                                diseñada para funcionar en cualquier espacio de Madrid y alrededores.
                            </p>

                            <p>
                                Me encargo de leer la energía del grupo y subir el nivel de asombro de
                                forma progresiva, desde juegos visuales impactantes hasta sesiones de
                                mentalismo que dejarán a todos sin palabras. Anillos, monedas, cartas y
                                algunos objetos no tan comunes serán los culpables de trasladarte a un
                                mundo increíble lleno de misterio, humor y mucha sorpresa.
                            </p>

                            <p className="italic text-amber-500/90 font-bold border-l-2 border-amber-500 pl-4 py-2 mt-4">
                                Verás cosas nunca vistas: magia moderna, cercana y participativa.
                                Disponible para eventos en Madrid capital, Torrelodones, Las Rozas,
                                Majadahonda, Pozuelo de Alarcón y toda la Comunidad de Madrid.
                            </p>
                        </div>

                        <div className="mt-12 flex justify-start">
                            <ContactButtonClient label="Consúltame sin compromiso" />
                        </div>
                    </div>

                    <div className="relative md:sticky md:top-32 h-[450px] md:h-[500px] rounded-3xl overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <Image
                            src="/images/fiesta-eventos-madrid.webp"
                            alt="Mago para eventos privados en Madrid Ángel Ruiz ilusionista especializado en cumpleaños y fiestas"
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
