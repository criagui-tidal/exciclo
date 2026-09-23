import type { Metadata } from "next";

import RootDocument from "@/components/templates/RootDocument";
import { siteName, siteUrl } from "@/lib/site";

import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    // Las páginas aportan su propio título; la home aporta el completo.
    default:
      "Exciclo | Optimización empresarial con tecnología e IA · Ciclos de 4 semanas",
    template: `%s | ${siteName}`,
  },
  applicationName: siteName,
  creator: "Cristian Aguirre Montes",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootDocument locale="es">{children}</RootDocument>;
}
