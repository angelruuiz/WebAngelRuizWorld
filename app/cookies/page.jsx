import NavFooterClient from '@/components/NavFooterClient';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';

export const metadata = {
    title: 'Política de Cookies',
    description: 'Información sobre el uso de cookies en angelruiz.world conforme a la normativa de la AEPD y la Directiva ePrivacy.',
    alternates: {
        canonical: 'https://angelruiz.world/cookies',
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function CookiesPage() {
    return (
        <NavFooterClient>
            <MagicCursor />
            <ParticleBackground />
            <main className="relative z-10 pt-24 pb-16 px-6 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-[Cinzel] text-white mb-8 uppercase">Política de Cookies</h1>
                <div className="prose prose-invert prose-sm max-w-none text-slate-300 space-y-6">
                    <p><strong className="text-white">Última actualización:</strong> Mayo 2026</p>

                    <h2 className="text-xl font-[Cinzel] text-white">1. ¿Qué son las cookies?</h2>
                    <p>Una cookie es un pequeño fichero de texto que se descarga en tu navegador al acceder a determinadas páginas web. Permite a una web, entre otras cosas, recordar tus preferencias, almacenar información sobre tus hábitos de navegación y garantizar el correcto funcionamiento del sitio.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">2. ¿Qué tipos de cookies utiliza este sitio web?</h2>
                    <p>En <strong>angelruiz.world</strong> utilizamos las siguientes tipologías de cookies:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Cookies técnicas (necesarias):</strong> Son aquellas indispensables para permitir la navegación a través del sitio web y la utilización de sus diferentes opciones o servicios (por ejemplo, recordar la aceptación del aviso de cookies o la seguridad de la sesión).</li>
                        <li><strong>Cookies analíticas:</strong> Son aquellas que nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios de la web (Vercel Analytics y Google Analytics con IP anonimizada). Su finalidad es puramente estadística y de mejora del servicio.</li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">3. Detalle de cookies utilizadas</h2>
                    <div className="overflow-x-auto my-4">
                        <table className="min-w-full text-xs text-left border border-white/10">
                            <thead className="bg-white/5 text-amber-400 uppercase">
                                <tr>
                                    <th className="p-3 border-b border-white/10">Cookie</th>
                                    <th className="p-3 border-b border-white/10">Tipo</th>
                                    <th className="p-3 border-b border-white/10">Finalidad</th>
                                    <th className="p-3 border-b border-white/10">Duración</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-slate-300">
                                <tr>
                                    <td className="p-3 font-mono">cookie_consent</td>
                                    <td className="p-3">Técnica</td>
                                    <td className="p-3">Recuerda la preferencia del usuario sobre cookies</td>
                                    <td className="p-3">1 año</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-mono">_va_*</td>
                                    <td className="p-3">Analítica</td>
                                    <td className="p-3">Vercel Analytics: rendimiento anónimo de carga</td>
                                    <td className="p-3">Sesión</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-mono">_ga, _ga_*</td>
                                    <td className="p-3">Analítica</td>
                                    <td className="p-3">Google Analytics 4: métricas agregadas y anónimas</td>
                                    <td className="p-3">2 años</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-xl font-[Cinzel] text-white">4. ¿Cómo configurar o revocar las cookies?</h2>
                    <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador web:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Apple Safari</a></li>
                        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Microsoft Edge</a></li>
                    </ul>

                    <h2 className="text-xl font-[Cinzel] text-white">5. Contacto</h2>
                    <p>Si tienes cualquier duda sobre nuestra política de cookies, puedes contactar con nosotros en <strong>info@angelruiz.world</strong>.</p>
                </div>
            </main>
        </NavFooterClient>
    );
}
