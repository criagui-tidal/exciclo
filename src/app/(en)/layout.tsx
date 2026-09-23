import type { Metadata } from "next";

import RootDocument from "@/components/templates/RootDocument";
import { siteName, siteUrl } from "@/lib/site";

import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Exciclo | Business optimization with technology and AI · 4-week cycles",
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

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
