import SobreMiClient from '@/components/SobreMiClient';

export const metadata = {
    title: 'Ángel Ruiz · Mago Profesional en Madrid | Close-up y Cartomagia',
    description: 'Conoce a Ángel Ruiz, mago close-up de Madrid especializado en cartomagia. Disponible para bodas, empresas y eventos en toda la Comunidad de Madrid. Contacta hoy.',
    alternates: {
        canonical: 'https://angelruiz.world/sobre-mi',
    },
};

export default function SobreMiPage() {
    return (
        <SobreMiClient>
            <div className="space-y-8 text-white font-medium leading-relaxed text-sm md:text-base">
                <p className="text-xl md:text-2xl text-amber-400 font-[Cinzel] font-bold italic mb-8 drop-shadow-sm text-left leading-tight border-l-4 border-amber-500 pl-6 py-2 bg-white/5 rounded-r-lg">
                    "La magia no es solo lo que viste, sino el recuerdo imborrable que te llevas contigo al cerrar los ojos."
                </p>
                
                <div className="space-y-6">
                    <p className="text-justify first-letter:text-5xl first-letter:font-bold first-letter:text-amber-500 first-letter:mr-3 first-letter:float-left">
                        Como <strong className="text-amber-400 font-bold font-['Playfair_Display'] underline decoration-amber-500/30">experto en magia en Madrid</strong>, tengo muy claro que mi trabajo es mucho más que hacer trucos: se trata de crear emociones reales. Me dedico por completo a hacer posible lo imposible, ofreciendo <strong className="text-amber-400 font-bold">magia premium para bodas</strong> y eventos de empresa exclusivos que buscan destacar.
                    </p>
                    
                    <p className="text-justify">
                        Mi pasión por la magia empezó cuando tenía solo 8 años. Mientras otros niños jugaban, yo aprendía los grandes secretos de la mano de <strong className="text-amber-400 font-bold italic">Paco G</strong>, quien me contagió la curiosidad y las ganas de mejorar cada día. Esos primeros años me enseñaron no solo a practicar, sino a entender cómo piensa el espectador y a valorar el misterio.
                    </p>

                    <p className="text-justify bg-amber-500/5 p-6 rounded-2xl border border-amber-500/10 shadow-inner">
                        Un gran paso en mi carrera fue formarme en la <strong className="text-amber-400 font-bold">Escuela de Dani DaOrtiz</strong>, reconocido como uno de los mejores magos con cartas del mundo. Con él no solo mejoré mi técnica, sino que aprendí a ver la magia como algo muy libre y sorprendente. Por eso mi estilo actual es directo y moderno, alejándome del clásico "mago con chistera" para conectar de verdad y de cerca con el público de hoy.
                    </p>
                    
                    <p className="text-justify">
                        Mi gran especialidad es la <strong className="text-amber-400 font-bold">Magia con Cartas</strong> de alto nivel. Para mí, una baraja ofrece un mundo de posibilidades increíbles a escasos centímetros de tus ojos. En mis sesiones de <strong className="text-amber-400 font-bold italic">Magia de Cerca (Close-up)</strong>, los milagros suceden en tus propias manos. Es algo tan cercano y visual que resulta imposible no sorprenderse.
                    </p>
                    
                    <p className="text-justify">
                        Como <strong className="text-amber-400">mago en Torrelodones</strong>, trabajo desde la <u>Sierra de Madrid</u>, lo que me permite desplazarme fácilmente por toda la zona noroeste y la capital. Mi objetivo es sencillo: ofrecer un <strong>entretenimiento VIP</strong> que llene de buena energía cualquier fiesta o evento. No quiero que solo aplaudas un truco, quiero que te olvides de todo por un rato y disfrutes de una experiencia única.
                    </p>

                    <p className="text-justify text-slate-400 italic border-t border-white/5 pt-6">
                        A lo largo de mi carrera como <strong>mago para empresas en Madrid</strong> y eventos privados, he aprendido que el éxito está en cuidar los detalles y en ofrecer un trato elegante y cercano. <u>La magia es la ilusión más bonita</u> que existe, y mi compromiso es compartir ese momento contigo con el mayor nivel de profesionalidad.
                    </p>
                </div>
            </div>
        </SobreMiClient>
    );
}
