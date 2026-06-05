import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Magia para Particulares en Madrid | Ángel Ruiz',
  description: 'Servicios de magia e ilusionismo para celebraciones privadas en Madrid: bodas, comuniones, cumpleaños y despedidas de soltera. Ángel Ruiz, ilusionista profesional.',
  alternates: {
    canonical: 'https://angelruiz.world/particulares',
  }
};

export default function ParticularesPage() {
  // Redirect to bodas as the primary particular service
  redirect('/particulares/bodas');
}
