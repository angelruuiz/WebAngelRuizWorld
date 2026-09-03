import NavFooterClient from '@/components/NavFooterClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';

export const metadata = {
    title: 'Aviso Legal',
    description: 'Aviso legal y condiciones de uso del sitio web angelruiz.world. Información legal sobre el titular conforme a la LSSI-CE.',
    alternates: {
        canonical: 'https://angelruiz.world/aviso-legal',
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function AvisoLegalPage() {
    return (
        <NavFooterClient>
            <MagicCursor />
            <ParticleBackground />
            <main className="relative z-10 pt-24 pb-16 px-6 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-[Cinzel] text-white mb-8 uppercase">Aviso Legal</h1>
                <div className="prose prose-invert prose-sm max-w-none text-slate-300 space-y-6">
                    <p><strong className="text-white">Última actualización:</strong> Mayo 2026</p>

                    <h2 className="text-xl font-[Cinzel] text-white">1. Datos Identificativos</h2>
                    <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Titular:</strong> Ángel Ruiz García</li>
                        <li><strong>Nombre comercial:</strong> Ángel Ruiz | Mago e Ilusionista</li>
                        <li><strong>Actividad:</strong> Ilusionismo profesional y espectáculos de magia para eventos corporativos y privados</li>
                        <li><strong>Domicilio profesional:</strong> Torrelodones, Comunidad de Madrid (España)</li>
                        <li><strong>Email de contacto:</strong> info@angelruiz.world</li>
                        <li><strong>Teléfono de atención:</strong> +34 648 05 56 36</li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">2. Objeto y Ámbito de Aplicación</h2>
                    <p>El presente Aviso Legal regula el uso y acceso al sitio web <strong>angelruiz.world</strong>, a través del cual se facilita información sobre los servicios profesionales de ilusionismo y magia ofrecidos por Ángel Ruiz.</p>
                    <p>El acceso al sitio web atribuye la condición de usuario e implica la aceptación plena de todas las disposiciones incluidas en este documento.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">3. Condiciones de Uso</h2>
                    <p>El usuario se compromete a hacer un uso adecuado y lícito de los contenidos y servicios del sitio web, evitando en todo momento:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
                        <li>Provocar daños en los sistemas físicos o lógicos del sitio web, de sus proveedores o de terceras personas.</li>
                        <li>Intentar acceder y utilizar las cuentas de correo electrónico de otros usuarios o manipular sus mensajes.</li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">4. Propiedad Intelectual e Industrial</h2>
                    <p>Todos los contenidos del sitio web (textos, fotografías, vídeos, logotipos, marcas, diseño gráfico, código fuente y estructura de navegación) son titularidad de Ángel Ruiz García o de terceros que han autorizado expresamente su uso, estando protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.</p>
                    <p>Queda expresamente prohibida la reproducción, distribución, comunicación pública y transformación de la totalidad o parte de los contenidos de este sitio web con fines comerciales sin la autorización previa y por escrito del titular.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">5. Exclusión de Responsabilidad</h2>
                    <p>El titular no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo del sistema electrónico provocadas por causas ajenas a su control.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">6. Enlaces a Terceros</h2>
                    <p>Este sitio web puede contener enlaces a sitios web de terceros (como plataformas de redes sociales). El titular no asume ninguna responsabilidad derivada de los contenidos o políticas de privacidad de dichos sitios web externos.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">7. Legislación Aplicable y Jurisdicción</h2>
                    <p>Para la resolución de cualquier controversia o cuestión litigiosa relativa a este sitio web o las actividades desarrolladas en él, será de aplicación la legislación española, siendo competentes los Juzgados y Tribunales de la ciudad de Madrid.</p>
                </div>
            </main>
        </NavFooterClient>
    );
}
