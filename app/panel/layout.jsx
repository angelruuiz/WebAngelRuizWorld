export const metadata = {
    title: { absolute: 'Panel de Control | Ángel Ruiz' },
    description: 'Espacio privado para métricas y analíticas.',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
        },
    },
};

export default function PanelLayout({ children }) {
    return (
        <div className="panel-layout">
            {children}
        </div>
    );
}
