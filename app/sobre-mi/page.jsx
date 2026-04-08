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
            <div className="space-y-6 text-white font-medium leading-loose text-lg md:text-xl">
                <p className="text-2xl text-amber-400 font-bold italic mb-8 drop-shadow-sm text-left">
                    "La magia no es solo lo que ves, sino cómo te hace sentir."
                </p>
                
                <p className="text-justify">
                    Como <strong className="text-amber-400 font-bold font-['Playfair_Display']">ilusionista profesional</strong>, 
                    me especializo en ofrecer magia exclusiva para eventos y bodas, transformando celebraciones ordinarias 
                    en experiencias extraordinarias que quedan grabadas en la memoria de cada invitado.
                </p>
                
                <p className="text-justify">
                    A mis 8 años, inquieto e interesado por todo aquello que no pudiera explicar, fue cuando se cruzó en mi 
                    camino la magia, de la mano del primer mago que presencié, <strong className="text-amber-400 font-bold font-['Playfair_Display'] italic">Paco G</strong>. 
                    Él fue quien me introdujo en todo este mundo de ilusión y asombro que hoy comparto con vosotros.
                </p>
                
                <p className="text-justify">
                    Tras muchos años de lecciones autodidactas y experimentar métodos propios, decidí dar el salto a escena 
                    para realizar lo que más me apasiona: la <strong className="text-amber-400 font-bold">Magia de Cerca (Close-up)</strong>.
                </p>
                
                <p className="text-justify">
                    Es una de las ramas más potentes del ilusionismo, donde el público participa activamente y vive lo imposible 
                    en primera persona. Magia a escasos centímetros del espectador, desafiando los límites de la lógica.
                </p>
            </div>
        </SobreMiClient>
    );
}
