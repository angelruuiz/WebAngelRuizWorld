import NavFooterClient from '@/components/NavFooterClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';

export const metadata = {
    title: 'Política de Privacidad',
    description: 'Política de privacidad y protección de datos de angelruiz.world. Información sobre el tratamiento de datos personales conforme al RGPD.',
    alternates: {
        canonical: 'https://angelruiz.world/privacidad',
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function PrivacidadPage() {
    return (
        <NavFooterClient>
            <MagicCursor />
            <ParticleBackground />
            <main className="relative z-10 pt-24 pb-16 px-6 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-[Cinzel] text-white mb-8 uppercase">Política de Privacidad</h1>
                <div className="prose prose-invert prose-sm max-w-none text-slate-300 space-y-6">
                    <p><strong className="text-white">Última actualización:</strong> Mayo 2026</p>

                    <h2 className="text-xl font-[Cinzel] text-white">1. Responsable del Tratamiento</h2>
                    <p>El responsable del tratamiento de los datos personales recogidos a través de este sitio web es <strong>Ángel Ruiz García</strong>, con domicilio profesional en Torrelodones (Madrid). Puedes contactar a través del correo electrónico disponible en la sección de contacto de esta web o del teléfono +34 648 05 56 36.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">2. Datos que Recogemos</h2>
                    <p>A través del formulario de contacto y la suscripción a la newsletter, recogemos:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Nombre y apellidos</li>
                        <li>Dirección de correo electrónico</li>
                        <li>Número de teléfono (si se proporciona voluntariamente)</li>
                        <li>Mensaje o consulta</li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">3. Finalidad del Tratamiento</h2>
                    <p>Los datos se utilizan exclusivamente para:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Responder a las consultas y solicitudes de presupuesto recibidas.</li>
                        <li>Gestionar la relación comercial con el cliente.</li>
                        <li>Enviar comunicaciones informativas (newsletter) si el usuario ha dado su consentimiento expreso.</li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">4. Base Legal</h2>
                    <p>El tratamiento de los datos se fundamenta en el consentimiento del interesado (art. 6.1.a RGPD) y en la ejecución de medidas precontractuales (art. 6.1.b RGPD).</p>

                    <h2 className="text-xl font-[Cinzel] text-white">5. Conservación de Datos</h2>
                    <p>Los datos personales se conservarán mientras exista una relación comercial o el interesado no solicite su supresión. En todo caso, los datos se conservarán durante los plazos legales aplicables.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">6. Derechos del Usuario</h2>
                    <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, portabilidad, limitación y oposición al tratamiento de tus datos enviando un correo electrónico a la dirección de contacto indicada, acompañando copia de tu DNI o documento identificativo.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">7. Cookies</h2>
                    <p>Este sitio web utiliza cookies técnicas y de análisis (Vercel Analytics) para mejorar la experiencia del usuario. Puedes obtener más información y gestionar tus preferencias a través del banner de cookies que aparece al visitar la web por primera vez.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">8. Seguridad</h2>
                    <p>Se aplican medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado. La web opera bajo protocolo HTTPS con certificado SSL.</p>
                </div>
            </main>
        </NavFooterClient>
    );
}
