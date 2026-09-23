import type { MetadataRoute } from "next";

import { hreflangs, locales, routes, type RouteKey } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

// Una entrada por página y por idioma, cada una declarando su alternativa en
// el otro idioma. Las páginas están ordenadas por prioridad comercial, no
// alfabéticamente.
const priorities: Record<RouteKey, number> = {
  home: 1,
  solve: 0.9,
  assessment: 0.9,
  enterprise: 0.8,
  aiValue: 0.8,
  cases: 0.7,
  caseComex: 0.6,
  colombia: 0.6,
  about: 0.5,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    (Object.keys(routes) as RouteKey[]).map((key) => ({
      url: `${siteUrl}${routes[key][locale]}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: priorities[key],
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [
            hreflangs[alt],
            `${siteUrl}${routes[key][alt]}`,
          ]),
        ),
      },
    })),
  );
}
