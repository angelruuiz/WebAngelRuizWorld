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
                    <p><strong className="text-white">Última actualización:</strong> Septiembre 2026</p>

                    <p>En <strong>angelruiz.world</strong> nos tomamos muy en serio la privacidad y confidencialidad de tus datos personales. La presente Política de Privacidad describe cómo se recopilan, tratan y protegen los datos personales de conformidad con el <strong>Reglamento (UE) 2016/679 (RGPD)</strong> y la <strong>Ley Orgánica 3/2018 (LOPDGDD)</strong>.</p>

                    {/* Resumen Informativo de Primera Capa */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 my-6 not-prose text-xs text-slate-300 space-y-3">
                        <h3 className="font-[Cinzel] text-sm text-amber-400 font-bold uppercase tracking-wider">
                            Información Básica sobre Protección de Datos
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-[11px] leading-relaxed">
                            <div className="border-b md:border-b-0 md:border-r border-white/10 pb-2 md:pb-0 md:pr-4">
                                <p><strong className="text-white">Responsable:</strong> Ángel Ruiz García (Torrelodones, Madrid).</p>
                                <p><strong className="text-white">Finalidad:</strong> Gestión de presupuestos, respuesta a consultas y envío de novedades si se autoriza.</p>
                                <p><strong className="text-white">Legitimación:</strong> Consentimiento inequívoco del interesado y ejecución de medidas precontractuales.</p>
                            </div>
                            <div className="md:pl-2">
                                <p><strong className="text-white">Destinatarios:</strong> No se ceden datos a terceros salvo obligación legal expresa.</p>
                                <p><strong className="text-white">Derechos:</strong> Acceso, rectificación, supresión, limitación, portabilidad y oposición (info@angelruiz.world).</p>
                                <p><strong className="text-white">Autoridad de control:</strong> Agencia Española de Protección de Datos (AEPD - www.aepd.es).</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-xl font-[Cinzel] text-white">1. Responsable del Tratamiento</h2>
                    <p>El responsable del tratamiento de los datos personales recabados a través de este portal web es:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Identidad:</strong> Ángel Ruiz García</li>
                        <li><strong>Domicilio profesional:</strong> Calle Real, 28250 Torrelodones, Madrid (España)</li>
                        <li><strong>Correo electrónico de privacidad:</strong> <a href="mailto:info@angelruiz.world" className="text-amber-400 hover:underline">info@angelruiz.world</a></li>
                        <li><strong>Teléfono de contacto:</strong> <a href="tel:+34648055636" className="text-amber-400 hover:underline">+34 648 05 56 36</a></li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">2. Datos Personales que Recogemos y Procedencia</h2>
                    <p>Los datos personales recabados proceden directamente del usuario a través de los formularios de contacto, solicitud de presupuesto, suscripción a la newsletter o comunicación por WhatsApp. Las categorías de datos tratados son:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Datos identificativos y de contacto:</strong> Nombre y apellidos, correo electrónico y número de teléfono.</li>
                        <li><strong>Datos de la solicitud o evento:</strong> Fecha estimada, tipología de evento (boda, fiesta privada, evento corporativo) y detalles facilitados voluntariamente en el mensaje.</li>
                        <li><strong>Datos de navegación:</strong> Dirección IP anonimizada, identificadores de sesión y métricas de rendimiento recopiladas únicamente si se ha otorgado consentimiento de cookies analíticas.</li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">3. Finalidades del Tratamiento</h2>
                    <p>Tus datos son tratados con las siguientes finalidades explícitas y legítimas:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Atención de solicitudes y presupuestos:</strong> Tramitar y responder a tus consultas sobre disponibilidad de fechas, tarifas y formatos de espectáculo.</li>
                        <li><strong>Gestión precontractual y contractual:</strong> Gestionar la relación comercial, la formalización de reservas y la emisión de presupuestos y facturas correspondientes.</li>
                        <li><strong>Comunicaciones informativas (Newsletter):</strong> Remitir por correo electrónico artículos del blog, nuevos proyectos o novedades sobre espectáculos de Ángel Ruiz, únicamente cuando el usuario haya marcado expresamente la casilla de suscripción.</li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">4. Base Jurídica de Legitimación</h2>
                    <p>La base jurídica que legitima el tratamiento de tus datos depende de la finalidad:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Respuesta a consultas y elaboración de presupuestos:</strong> Aplicación de medidas precontractuales a petición del propio interesado (artículo 6.1.b del RGPD).</li>
                        <li><strong>Suscripción a la newsletter y comunicaciones comerciales:</strong> Consentimiento libre, específico, informado e inequívoco del usuario (artículo 6.1.a del RGPD).</li>
                        <li><strong>Cumplimiento de obligaciones fiscales y legales:</strong> Cumplimiento de una obligación legal aplicable al responsable (artículo 6.1.c del RGPD).</li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">5. Plazos de Conservación de los Datos</h2>
                    <p>Los datos personales se conservarán durante el tiempo estrictamente necesario para cumplir con la finalidad para la que fueron recabados:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Los datos de solicitudes de presupuesto o información sin contratación posterior se conservarán durante un plazo máximo de 1 año.</li>
                        <li>Los datos derivados de una contratación de servicios se conservarán durante el plazo legal obligatorio aplicable en materia contable, fiscal y mercantil (generalmente entre 4 y 6 años).</li>
                        <li>Los datos para el envío de newsletters se conservarán hasta que el usuario revoque su consentimiento o solicite la baja a través del enlace habilitado al pie de cada correo.</li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">6. Destinatarios y Transferencias Internacionales</h2>
                    <p>No se cederán datos personales a terceros, salvo obligación legal expresa o cuando resulte imprescindible para la prestación del servicio a través de encargados de tratamiento debidamente auditados:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Alojamiento web y CDN:</strong> Vercel Inc., con servidores e infraestructura acogida al marco de privacidad de datos <em>EU-US Data Privacy Framework</em> con garantías adecuadas de seguridad.</li>
                        <li><strong>Analítica web anonimizada:</strong> Google Ireland Limited (Google Analytics 4), configurado con anonimización estricta de IP y solo activo con consentimiento previo del usuario.</li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">7. Derechos del Usuario y Cómo Ejercerlos</h2>
                    <p>La normativa de protección de datos garantiza al usuario el ejercicio de los siguientes derechos en cualquier momento y de forma totalmente gratuita:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Acceso:</strong> Conocer qué datos personales tuyos estamos tratando.</li>
                        <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
                        <li><strong>Supresión ("derecho al olvido"):</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
                        <li><strong>Limitación del tratamiento:</strong> Solicitar que suspendamos cautelarmente el tratamiento de tus datos en determinadas circunstancias.</li>
                        <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado y de uso común para transmitirlos a otro responsable.</li>
                        <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos por motivos relacionados con tu situación particular.</li>
                        <li><strong>Revocación del consentimiento:</strong> Retirar el consentimiento otorgado previamente en cualquier momento, sin efectos retroactivos.</li>
                    </ul>
                    <p>Para ejercitar cualquiera de estos derechos, basta con enviar una comunicación escrita acompañada de copia de tu DNI o documento equivalente que acredite tu identidad a <a href="mailto:info@angelruiz.world" className="text-amber-400 hover:underline">info@angelruiz.world</a> indicando en el asunto "Protección de Datos - Ejercicio de Derechos".</p>
                    <p>Asimismo, si consideras que tus derechos no han sido debidamente atendidos, tienes derecho a presentar una reclamación ante la autoridad de control competente: la <strong>Agencia Española de Protección de Datos (AEPD)</strong>, en calle Jorge Juan, 6, 28001 Madrid o a través de su sede electrónica en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">www.aepd.es</a>.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">8. Cookies y Tecnologías de Rastreo</h2>
                    <p>Este portal web utiliza cookies técnicas necesarias y cookies analíticas para optimizar el servicio. Puedes consultar la descripción detallada, finalidades, plazos de duración y configurar o revocar tu consentimiento en nuestra <a href="/cookies" className="text-amber-400 hover:underline">Política de Cookies</a>.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">9. Medidas de Seguridad</h2>
                    <p>Ángel Ruiz García aplica las medidas técnicas, organizativas y de seguridad necesarias para garantizar la integridad, disponibilidad y confidencialidad de la información, impidiendo su alteración, pérdida o acceso no autorizado. Las comunicaciones se transmiten cifradas mediante certificado de seguridad SSL/TLS (HTTPS).</p>
                </div>
            </main>
        </NavFooterClient>
    );
}
