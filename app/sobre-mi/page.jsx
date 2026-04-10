import SobreMiClient from '@/components/SobreMiClient';

export const metadata = {
    title: 'Sobre Mí | Ángel Ruiz | Mago e Ilusionista',
    description: 'Conoce la trayectoria de Ángel Ruiz | Mago e Ilusionista, especializado en magia de cerca exclusiva para eventos y bodas en Madrid. Pasión y asombro profesional.',
    alternates: {
        canonical: '/sobre-mi',
    },
};

export default function SobreMiPage() {
    return (
        <SobreMiClient>
            <div className="space-y-6 text-white font-medium leading-relaxed text-sm md:text-base">
                <p className="text-xl text-amber-400 font-bold italic mb-6 drop-shadow-sm text-left leading-relaxed">
                    "La magia no es solo lo que viste, sino el recuerdo imborrable que te llevas contigo."
                </p>
                
                <p className="text-justify">
                    Como <strong className="text-amber-400 font-bold font-['Playfair_Display']">ilusionista profesional en Madrid</strong>, 
                    mi vida se dedica al arte de la sorpresa. Me especializo en magia exclusiva para bodas y <strong>eventos Madrid</strong> de alto nivel, transformando celebraciones convencionales en experiencias extraordinarias que quedan grabadas para siempre en la memoria de cada invitado.
                </p>
                
                <p className="text-justify">
                    Mi pasión nació a los 8 años de la mano de <strong className="text-amber-400 font-bold font-['Playfair_Display'] italic">Paco G</strong>. Tras años de disciplina y una técnica pulida al milímetro, di el salto profesional a la <strong className="text-amber-400 font-bold">Magia de Cerca (Close-up)</strong>, donde el asombro ocurre a escasos centímetros de tus ojos, desafiando todos los límites de la física y la lógica.
                </p>
                
                <p className="text-justify">
                    Como <strong className="text-amber-400">mago en Torrelodones</strong> y referente de entretenimiento premium en la zona noroeste, mi objetivo como <strong>mago de cerca Madrid</strong> es que cada asistente viva un momento de desconexión total, aportando calidad y dinamismo moderno a tu próximo evento de gala o celebración privada.
                </p>
            </div>
        </SobreMiClient>
    );
}
