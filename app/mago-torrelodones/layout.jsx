export const metadata = {
    title: 'Mago en Torrelodones | Ilusionismo para Bodas y Eventos | Angel Ruiz',
    description: '¿Buscas un mago en Torrelodones? Angel Ruiz ofrece el mejor ilusionismo y magia de cerca para tu boda o evento en la zona noroeste de Madrid. ¡Reserva hoy y sorprende!',
    alternates: {
        canonical: '/mago-torrelodones',
    },
    openGraph: {
        title: 'Mago en Torrelodones | Angel Ruiz Ilusionista',
        description: 'Ilusionismo exclusivo y magia de cerca en Torrelodones y zona noroeste de Madrid. Especialista en eventos y bodas.',
        images: [{ url: '/images/foto-bio.png' }],
    },
};

export default function MagoTorrelodonesLayout({ children }) {
    return <>{children}</>;
}
