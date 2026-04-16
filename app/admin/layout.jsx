export const metadata = {
    title: 'Control Maestro | Ángel Ruiz',
    description: 'Espacio privado para la gestión de servicios e ilusionismo.',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function AdminLayout({ children }) {
    return (
        <div className="admin-layout">
            {children}
        </div>
    );
}
