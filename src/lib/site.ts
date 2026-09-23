// Datos del sitio compartidos por el metadata de cada página y la imagen Open
// Graph. El texto vive en `@/content`; aquí solo está lo que no se traduce.

import type { Metadata } from "next";

import {
  hreflangs,
  href,
  locales,
  otherLocale,
  type Locale,
  type RouteKey,
} from "@/lib/i18n";

// En producción apunta al dominio real; NEXT_PUBLIC_SITE_URL permite probar
// las tarjetas sociales desde un deploy de preview.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://exciclo.com"
).replace(/\/$/, "");

export const siteName = "Exciclo";

export const contact = {
  email: "mailto:cristian@exciclo.com",
  emailLabel: "cristian@exciclo.com",
  whatsapp: "https://wa.me/573244975093",
  whatsappLabel: "+57 324 497 5093",
  linkedin: "https://www.linkedin.com/in/cristianaguirremontes/",
};

export const ogImageAlt =
  "Exciclo · Optimización empresarial con tecnología e IA. Un ciclo de 4 semanas a precio fijo.";

const ogLocales: Record<Locale, string> = {
  es: "es_CO",
  en: "en_US",
};

// Un único sitio en dos idiomas: cada página declara su canónica y apunta a su
// equivalente en el otro idioma. `x-default` va al español, que es el principal.
function languageAlternates(key: RouteKey) {
  const languages = Object.fromEntries(
    locales.map((locale) => [hreflangs[locale], href(key, locale)]),
  );

  return { ...languages, "x-default": href(key, "es") };
}

/**
 * Metadata de una página. Next mezcla el metadata de forma superficial: una
 * página que declara `openGraph` reemplaza el del layout entero, incluida la
 * imagen que aporta opengraph-image.tsx. Por eso cada página construye el suyo
 * completo desde aquí en lugar de heredar a medias.
 */
export function pageMetadata({
  locale,
  routeKey,
  title,
  description,
}: {
  locale: Locale;
  routeKey: RouteKey;
  title: string;
  description: string;
}): Metadata {
  const url = href(routeKey, locale);
  // `title.template` del layout no se aplica al segmento que lo declara, y la
  // home es justo ese segmento en español. Por eso su título se declara
  // absoluto —ya trae la marca— y el resto lo recibe de la plantilla.
  const isHome = routeKey === "home";
  const fullTitle = isHome ? title : `${title} | ${siteName}`;

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(routeKey),
    },
    openGraph: {
      type: "website",
      url,
      siteName,
      title: fullTitle,
      description,
      locale: ogLocales[locale],
      alternateLocale: ogLocales[otherLocale(locale)],
      images: [
        { url: "/opengraph-image", width: 1200, height: 630, alt: ogImageAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}
