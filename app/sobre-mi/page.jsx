import SobreMiClient from '@/components/SobreMiClient';

export const metadata = {
    title: 'Ángel Ruiz · Mago Profesional en Madrid | Close-up y Cartomagia',
    description: 'Conoce a Ángel Ruiz, mago close-up de Madrid especializado en cartomagia. Disponible para bodas, empresas y eventos en toda la Comunidad de Madrid. Contacta hoy.',
    alternates: {
        canonical: '/sobre-mi',
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
                        Como <strong className="text-amber-400 font-bold font-['Playfair_Display'] underline decoration-amber-500/30">ilusionista profesional en Madrid</strong>, 
                        entiendo que mi oficio va más allá de la simple técnica; se trata de gestionar emociones. Mi vida se dedica por completo al arte de lo imposible, especializándome en experiencias de <strong className="text-amber-400 font-bold">magia premium para bodas</strong> y eventos corporativos de alto standing donde la distinción es la norma.
                    </p>
                    
                    <p className="text-justify">
                        Mi historia con el asombro comenzó a los 8 años. Mientras otros niños jugaban, yo descubría los secretos de las manos de <strong className="text-amber-400 font-bold italic">Paco G</strong>, quien me inoculó el virus de la curiosidad y la disciplina. Aquellos primeros años no fueron solo de práctica, sino de aprendizaje sobre la psicología del espectador y el respeto por el secreto.
                    </p>

                    <p className="text-justify bg-amber-500/5 p-6 rounded-2xl border border-amber-500/10 shadow-inner">
                        Un punto de inflexión radical en mi trayectoria fue mi formación en la <strong className="text-amber-400 font-bold">Escuela de Dani DaOrtiz</strong>, considerado unánimemente uno de los mejores cartomagos del mundo. Bajo su tutela, no solo perfeccioné mi técnica, sino que aprendí a entender la <u>cartomagia como un lenguaje de libertad y caos controlado</u>. Esta influencia es la que hoy define mi estilo: una magia directa, impactante y profundamente moderna que huye de los clichés del "mago de chistera" para conectar de tú a tú con el público actual.
                    </p>
                    
                    <p className="text-justify">
                        Me he especializado en la <strong className="text-amber-400 font-bold">Cartomagia (Magia con Cartas)</strong> de élite. Para mí, la baraja no es un objeto, sino un universo de infinitas posibilidades que ocurren a escasos centímetros de tus ojos. En el formato de <strong className="text-amber-400 font-bold italic">Magia de Cerca (Close-up)</strong>, los milagros se producen en tus propias manos, desafiando las leyes de la física y la lógica de una forma tan íntima que resulta inquietante y fascinante a partes iguales.
                    </p>
                    
                    <p className="text-justify">
                        Como <strong className="text-amber-400">mago en Torrelodones</strong>, mi centro de operaciones se encuentra en la <u>Sierra de Madrid</u>, cubriendo con total fluidez toda la zona noroeste y la capital. Mi propuesta de valor es clara: <strong>entretenimiento VIP</strong> que aporta una atmósfera eléctrica a cualquier celebración. No busco que el público aplauda un truco, busco que vivan una experiencia de desconexión total de la realidad.
                    </p>

                    <p className="text-justify text-slate-400 italic border-t border-white/5 pt-6">
                        A lo largo de mi trayectoria como <strong>mago para empresas en Madrid</strong> y eventos privados, he aprendido que el éxito de una actuación reside en la elegancia del trato y la meticulosidad en los detalles. <u>La magia es el engaño más honesto</u> que existe, y mi compromiso es entregarte ese regalo con la máxima excelencia profesional.
                    </p>
                </div>
            </div>
        </SobreMiClient>
    );
}
