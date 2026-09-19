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

                    <h2 className="text-xl font-[Cinzel] text-white">2. Compromiso de navegación sin rastreo (Cookieless)</h2>
                    <p>En <strong>angelruiz.world</strong> priorizamos tu privacidad y una experiencia de navegación limpia y rápida. Por ello, este sitio web <strong>no utiliza cookies publicitarias, ni cookies de seguimiento de terceros, ni elabora perfiles de usuario</strong>.</p>
                    <p>La medición de audiencia y rendimiento se realiza de forma totalmente anónima y agregada (sin almacenar identificadores personales ni rastrear entre sitios web), por lo que no se requiere la instalación de cookies de seguimiento en tu dispositivo conforme a las directrices de la AEPD y el RGPD.</p>

                    <h2 className="text-xl font-[Cinzel] text-white">3. Cookies técnicas y almacenamiento</h2>
                    <p>Únicamente se pueden utilizar elementos de almacenamiento local estrictamente necesarios para funciones técnicas esenciales (como recordar si has cerrado una ventana informativa o mantener la seguridad de la navegación).</p>

                    <h2 className="text-xl font-[Cinzel] text-white">4. Gestión de cookies en tu navegador</h2>
                    <p>Si deseas restringir o bloquear cualquier cookie o dato local en este o en cualquier otro sitio web, puedes hacerlo directamente desde la configuración de tu navegador:</p>
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
