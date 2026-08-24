export const metadata = {
  title: 'Dossier Corporativo 2026 | Ángel Ruiz Mago Madrid',
  description: 'Dossier profesional de Ángel Ruiz, ilusionista y mago corporativo en Madrid para eventos de empresa, galas y bodas.',
  alternates: {
    canonical: 'https://angelruiz.world/dossier',
  },
  openGraph: {
    title: 'Dossier Corporativo 2026 | Ángel Ruiz Mago Madrid',
    description: 'Dossier profesional de Ángel Ruiz, ilusionista y mago corporativo en Madrid.',
    url: 'https://angelruiz.world/dossier',
    images: [{ url: '/images/foto-bio.webp' }],
  },
};

export default function DossierLayout({ children }) {
  return <>{children}</>;
}
