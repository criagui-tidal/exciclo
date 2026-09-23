import { Instrument_Sans, Inter } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import type { Locale } from "@/lib/i18n";

// El sitio tiene dos root layouts —uno por idioma— porque `<html lang>` se fija
// en el layout raíz y no puede cambiarlo un layout anidado. Todo lo que ambos
// comparten vive aquí para que no se separen con el tiempo.

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  // Variable: los titulares usan 600-700 y el eyebrow 600, sin pedir ficheros
  // extra por cada peso.
  axes: [],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <html
      lang={locale}
      className={`${instrument.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        {children}
        {/* Metricool. El snippet inyecta be.js en el <head> por su cuenta.
            La guarda de `beTracker` evita un error no capturado en consola
            cuando un bloqueador de rastreo responde be.js vacío. */}
        <Script id="metricool-tracker" strategy="afterInteractive">
          {`function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){typeof beTracker!=="undefined"&&beTracker.t({hash:"271bbb88fd571da3ebf05060ac3a9af6"})});`}
        </Script>
      </body>
    </html>
  );
}
