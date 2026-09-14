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
                    <p><strong className="text-white">Última actualización:</strong> Septiembre 2026</p>

                    <h2 className="text-xl font-[Cinzel] text-white">1. Datos Identificativos</h2>
                    <p>En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilita a continuación la información identificativa y mercantil del titular de este sitio web:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Titular / Prestador del servicio:</strong> Ángel Ruiz García</li>
                        <li><strong>Nombre comercial y marca:</strong> Ángel Ruiz | Mago e Ilusionista (Marca Oficial Registrada)</li>
                        <li><strong>Actividad económica:</strong> Servicios profesionales de ilusionismo, espectáculos de magia, entretenimiento para eventos corporativos y celebraciones privadas</li>
                        <li><strong>N.I.F.:</strong> Disponible para clientes, colaboradores y autoridades mediante solicitud formal por los canales oficiales de contacto</li>
                        <li><strong>Domicilio profesional:</strong> Calle Real, 28250 Torrelodones, Comunidad de Madrid (España)</li>
                        <li><strong>Correo electrónico de contacto directo:</strong> <a href="mailto:info@angelruiz.world" className="text-amber-400 hover:underline">info@angelruiz.world</a></li>
                        <li><strong>Teléfono de atención:</strong> <a href="tel:+34648055636" className="text-amber-400 hover:underline">+34 648 05 56 36</a></li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">2. Objeto y Condiciones Generales de Uso</h2>
                    <p>El presente Aviso Legal regula el acceso, navegación y uso del sitio web <strong>angelruiz.world</strong>. El acceso o utilización del sitio web atribuye la condición de usuario e implica la aceptación plena, expresa y sin reservas de todas y cada una de las disposiciones vigentes en el momento en que se produzca dicho acceso.</p>
                    <p>El usuario se compromete a hacer un uso lícito y diligente del portal, absteniéndose de utilizarlo para fines ilícitos, lesivos de derechos de terceros, que puedan deteriorar o sobrecargar los servidores o que atenten contra la seguridad informática del sitio.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">3. Condiciones de Contratación y Presupuestos</h2>
                    <p>La información contenida en esta web tiene carácter meramente informativo y de presentación de servicios artísticos. La formalización de cualquier contratación se rige por las siguientes condiciones:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Presupuestos personalizados:</strong> Cada espectáculo o actuación se cotiza de forma individualizada atendiendo a variables como la ubicación, el formato (magia de cerca, cóctel, escenario o conferencias corporativas), la duración y el número estimado de asistentes.</li>
                        <li><strong>Validez de las propuestas:</strong> Los presupuestos emitidos por escrito tendrán una validez de 15 días naturales a contar desde su fecha de emisión, salvo pacto expreso en contrario.</li>
                        <li><strong>Precios e Impuestos:</strong> Salvo indicación expresa, las tarifas se expresan en euros (€) y desglosarán preceptivamente los impuestos indirectos aplicables (IVA conforme a la legislación tributaria española).</li>
                        <li><strong>Reserva de fecha:</strong> La fecha y hora solicitadas solo quedarán formalmente reservadas y bloqueadas en la agenda tras la aceptación formal del presupuesto y, en su caso, el abono del depósito o señal estipulado.</li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">4. Derecho de Desistimiento y Excepciones Legales</h2>
                    <p>En virtud de lo dispuesto en el <strong>artículo 103, letra l) del Real Decreto Legislativo 1/2007</strong>, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios, <u>el derecho de desistimiento de 14 días naturales NO será aplicable</u> a los contratos de suministro de servicios relacionados con actividades de esparcimiento cuando el contrato prevea una fecha o un periodo de ejecución específicos (como ocurre en espectáculos contratados para un día, hora y evento determinado).</p>
                    <p>En consecuencia, una vez confirmada la fecha del espectáculo, cualquier modificación o cancelación estará sujeta a las condiciones específicas de reserva pactadas entre las partes.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">5. Propiedad Intelectual e Industrial</h2>
                    <p>Todos los elementos que forman el sitio web (diseños, códigos fuente, logotipos, marcas comerciales, fotografías, creaciones audiovisuales, textos e iconografía) son titularidad de Ángel Ruiz García o de terceros que han concedido la oportuna licencia de uso, estando protegidos por la Ley de Propiedad Intelectual y el régimen de Marcas español e internacional.</p>
                    <p>Queda terminantemente prohibida la reproducción, copia, distribución, comunicación pública o transformación de los contenidos de este sitio web con fines lucrativos o comerciales sin previa autorización expresa y por escrito del titular.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">6. Exclusión de Responsabilidad</h2>
                    <p>El titular no garantiza la inexistencia de interrupciones o errores en el acceso a la web, ni de virus u otros elementos lesivos transmitidos por terceros ajenos a su control. No obstante, se adoptan todas las medidas técnicas de seguridad estándar (protocolos SSL/TLS, cortafuegos y monitorización) para evitar cualquier incidencia.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">7. Resolución de Litigios en Línea (ODR)</h2>
                    <p>De conformidad con el artículo 14.1 del Reglamento (UE) 524/2013 del Parlamento Europeo y del Consejo, se informa a los usuarios y consumidores de que la Comisión Europea facilita una plataforma de resolución de litigios en línea en materia de consumo, accesible a través del siguiente enlace oficial:</p>
                    <p><a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">https://ec.europa.eu/consumers/odr/</a></p>

                    <h2 className="text-xl font-[Cinzel] text-white">8. Legislación Aplicable y Jurisdicción</h2>
                    <p>Las relaciones entre el titular y los usuarios de este sitio web se regirán por la normativa española vigente. En caso de litigio, las partes se someten, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, a los Juzgados y Tribunales de la ciudad de Madrid (España), sin perjuicio de los fueros legales que correspondan con carácter imperativo a los consumidores.</p>
                </div>
            </main>
        </NavFooterClient>
    );
}
