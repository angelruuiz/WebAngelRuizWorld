import SobreMiClient from '@/components/SobreMiClient';

export const metadata = {
    title: 'Sobre Mí | Angel Ruiz Ilusionista Profesional',
    description: 'Conoce la trayectoria de Angel Ruiz, mago ilusionista especializado en magia de cerca exclusiva para eventos y bodas en Madrid. Pasión y asombro desde los 8 años.',
    alternates: {
        canonical: '/sobre-mi',
    },
};

export default function SobreMiPage() {
    return (
        <SobreMiClient>
            <div className="space-y-4 text-white font-medium leading-relaxed text-base">
                <p className="text-xl text-amber-400 font-bold italic mb-4 drop-shadow-sm text-left">
                    "La magia no es solo lo que viste, sino el recuerdo imborrable que te llevas contigo."
                </p>
                
                <p className="text-justify">
                    Como <strong className="text-amber-400 font-bold font-['Playfair_Display']">ilusionista profesional en Madrid</strong>, 
                    mi vida ha estado dedicada al arte de la sorpresa. Me especializo en ofrecer magia exclusiva para bodas y <strong>eventos Madrid</strong> de alto nivel, transformando celebraciones convencionales 
                    en experiencias extraordinarias que quedan grabadas en la retina y la memoria de cada invitado. Mi trayectoria no es solo una lista de trucos, sino una búsqueda constante por perfeccionar la conexión emocional a través de lo imposible.
                </p>
                
                <p className="text-justify">
                    A mis 8 años, inquieto e interesado por todo aquello que no pudiera explicar de forma lógica, fue cuando se cruzó en mi 
                    camino la magia, de la mano del primer ilusionista que tuve la suerte de presenciar: <strong className="text-amber-400 font-bold font-['Playfair_Display'] italic">Paco G</strong>. 
                    Ese encuentro cambió mi percepción del mundo para siempre. Él no solo me enseñó mis primeros efectos, sino que me introdujo en todo este universo de ilusión, elegancia y asombro que hoy, décadas después, comparto con orgullo con todos vosotros.
                </p>
                
                <p className="text-justify">
                    Mi crecimiento como artista ha sido un viaje de disciplina y creatividad. Tras muchos años de lecciones autodidactas, horas interminables frente al espejo y experimentar con métodos propios, decidí dar el salto profesional para realizar lo que más me apasiona: la <strong className="text-amber-400 font-bold">Magia de Cerca (Close-up)</strong>. Esta disciplina exige una técnica pulida al milímetro y una psicología del espectador muy avanzada para que el milagro ocurra literalmente frente a sus ojos.
                </p>
                
                <p className="text-justify">
                    Como <strong className="text-amber-400">mago en Torrelodones</strong>, he tenido el privilegio de actuar en numerosos eventos corporativos y privados en la zona noroeste de Madrid. Esta región se ha convertido en mi centro de operaciones habitual, permitiéndome llevar un servicio de entretenimiento premium a localidades como Las Rozas, Majadahonda, El Escorial y Pozuelo. La cercanía me permite ofrecer una respuesta rápida y personalizada, adaptándome a la sofisticación que los clientes de esta zona demandan.
                </p>

                <p className="text-justify">
                    La esencia de mi trabajo como <strong>mago de cerca Madrid</strong> reside en la proximidad. Es una de las ramas más potentes del ilusionismo, donde el público participa activamente y vive lo imposible en primera persona. No hay cámaras, no hay ediciones ni grandes aparatos; solo la destreza de las manos y el poder de la sugestión a escasos centímetros del espectador, desafiando todos los límites de la física y la lógica.
                </p>

                <p className="text-justify">
                    A lo largo de mi carrera, he aprendido que un buen espectáculo de magia no se basa solo en el secreto, sino en la presentación y la elegancia. Cada actuación es un traje a medida. Ya sea una cena íntima con amigos en una urbanización de <strong>Galapagar</strong> o una convención corporativa de una multinacional en el Paseo de la Castellana, mi objetivo es el mismo: que cada persona se sienta especial y viva un momento de desconexión total de la realidad cotidiana.
                </p>

                <p className="text-justify">
                    Hoy en día, sigo ilusionado con cada proyecto como si fuera el primero. La magia me ha permitido conocer a personas increíbles y ser parte de los días más felices de sus vidas, desde bodas de ensueño hasta éxitos de empresa. Si buscas un profesional que aporte calidad, dinamismo y un toque moderno a tu próximo evento en <strong>Torrelodones</strong> o Madrid, estaré encantado de acompañarte.
                </p>
            </div>
        </SobreMiClient>
    );
}
