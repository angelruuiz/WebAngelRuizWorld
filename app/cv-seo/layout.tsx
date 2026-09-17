import type { Metadata } from 'next'
import './cv-seo.css'

export const metadata: Metadata = {
  title: { absolute: "David contra Goliat: Mi experimento SEO | FCT DAM — Ángel Ruiz" },
  description:
    "Caso de estudio real de SEO técnico y WPO: cómo un estudiante de DAM + ASIR posicionó su web en el competitivo sector de eventos en Madrid sin presupuesto de publicidad.",
  keywords: [
    "Ángel Ruiz",
    "FCT DAM Madrid",
    "SEO Técnico",
    "ASIR DAM",
    "Caso de Estudio SEO",
    "Desarrollador Web Madrid",
    "WPO",
    "Schema JSON-LD",
  ],
  openGraph: {
    title: "David contra Goliat: Mi experimento SEO | Ángel Ruiz",
    description:
      "De 0 a Top 3 en Madrid sin invertir 1€ en Ads. Estructura semántica, WPO radical y 100/100 PageSpeed.",
    url: "https://angelruiz.world/cv-seo",
    siteName: "Ángel Ruiz",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David contra Goliat: Mi experimento SEO | Ángel Ruiz",
    description:
      "Caso real de SEO y WPO de un estudiante de DAM para conseguir prácticas FCT.",
  },
}

export default function CvSeoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="cv-seo-root min-h-screen bg-[#070b14] text-slate-100 antialiased selection:bg-[#d4af37]/30 selection:text-[#f3d078]">
      {children}
    </div>
  )
}
