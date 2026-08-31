import type { Metadata } from "next";
import "./cv-personal.css";

export const metadata: Metadata = {
  title: "Ángel Ruiz García — CV Interactivo | Web, IA & Magia",
  description:
    "Portfolio interactivo y CV personal de Ángel Ruiz García. Desarrollador Web, Administrador de Sistemas (ASIR + DAM) y Cartomago Profesional.",
  keywords: [
    "Ángel Ruiz García",
    "CV Ángel Ruiz",
    "Desarrollador Web Madrid",
    "ASIR DAM Madrid",
    "Agentes IA",
    "Cartomago Profesional",
  ],
  openGraph: {
    title: "Ángel Ruiz García — CV Interactivo | Web, IA & Magia",
    description:
      "Desarrollador Web, Administrador de Sistemas (ASIR + DAM) y Cartomago Profesional. Experiencia visual con Liquid Glass UI y Neo-brutalismo.",
    url: "https://angelruiz.world/cv-personal",
    siteName: "Ángel Ruiz",
    images: [
      {
        url: "/cv-personal/angelruiz.world.png",
        width: 1200,
        height: 630,
        alt: "Ángel Ruiz García CV Interactivo",
      },
    ],
    locale: "es_ES",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ángel Ruiz García — CV Interactivo",
    description:
      "Desarrollador Web, Administrador de Sistemas (ASIR + DAM) y Cartomago Profesional.",
    images: ["/cv-personal/angelruiz.world.png"],
  },
};

export default function CvPersonalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="cv-personal-root min-h-screen bg-[#07080b] text-[#e2e8f0] antialiased overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">
      {children}
    </div>
  );
}
