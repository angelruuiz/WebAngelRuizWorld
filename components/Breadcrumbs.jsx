"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(Boolean);
  
  // Mapping of slugs to readable names
  const labels = {
    'particulares': 'Particulares',
    'bodas': 'Mago para Bodas',
    'eventos': 'Mago para Eventos',
    'empresas': 'Mago para Empresas',
    'blog': 'Blog de Magia',
    'valoraciones': 'Valoraciones',
    'sobre-mi': 'Sobre Mí',
    'mago-sierra-madrid': 'Sierra de Madrid',
    'mago-torrelodones': 'Torrelodones',
    'mago-galapagar': 'Galapagar',
    'mago-las-rozas': 'Las Rozas',
    'mago-las-matas': 'Las Matas',
    'mago-majadahonda': 'Majadahonda',
    'mago-pozuelo': 'Pozuelo',
    'mago-boadilla': 'Boadilla',
    'mago-villalba': 'Villalba',
    'mago-el-escorial': 'El Escorial',
    'galeria': 'Galería'
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
        <li>
          <Link href="/" className="hover:text-amber-500 transition-colors">Inicio</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const label = labels[segment] || segment.replace(/-/g, ' ');

          return (
            <li key={segment} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="text-amber-500/80" aria-current="page">{label}</span>
              ) : (
                <Link href={href} className="hover:text-amber-500 transition-colors">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
