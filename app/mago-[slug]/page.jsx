import { locations } from '@/lib/locations';
import LocationPageClient from './LocationPageClient';

export function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) return {};

  return {
    title: `${location.title} | Angel Ruiz Ilusionista`,
    description: location.description,
    alternates: {
      canonical: `/${location.slug}`,
    },
    keywords: location.keywords,
  };
}

export default function Page({ params }) {
  const { slug } = params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) return null;

  return <LocationPageClient location={location} />;
}
