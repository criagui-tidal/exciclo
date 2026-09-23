// Dos idiomas, dos árboles de rutas. El español es el idioma principal y vive
// en la raíz del dominio; el inglés cuelga de /en. Las rutas no son
// traducciones literales: cada idioma usa el slug que le sirve para SEO.
//
// Todo el sitio referencia páginas por su clave (`home`, `assessment`…), nunca
// por su URL. Así el menú, el footer, los CTA y el sitemap siguen apuntando al
// sitio correcto cuando un slug cambia.

export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

// El `hreflang` que ve Google. El español se declara regional porque el
// mercado objetivo es Colombia y LATAM; el inglés se deja sin región.
export const hreflangs: Record<Locale, string> = {
  es: "es-CO",
  en: "en",
};

export const routes = {
  home: { es: "/", en: "/en" },
  solve: { es: "/servicios", en: "/en/what-we-solve" },
  assessment: { es: "/evaluacion", en: "/en/assessment" },
  aiValue: { es: "/ia-y-valor", en: "/en/ai-value" },
  enterprise: { es: "/empresas", en: "/en/enterprise" },
  cases: { es: "/casos", en: "/en/cases" },
  caseComex: { es: "/casos/comex", en: "/en/cases/comex" },
  colombia: { es: "/colombia", en: "/en/colombia" },
  about: { es: "/sobre-exciclo", en: "/en/about" },
} as const;

export type RouteKey = keyof typeof routes;

// Las secciones ancladas de la home. Cada idioma tiene su propio id para que
// la URL no mezcle idiomas (/en#contact, no /en#contacto).
export const anchors = {
  cycle: { es: "ciclo", en: "cycle" },
  pricing: { es: "precio", en: "pricing" },
  contact: { es: "contacto", en: "contact" },
  about: { es: "experiencia", en: "experience" },
} as const;

export type AnchorKey = keyof typeof anchors;

export function href(key: RouteKey, locale: Locale): string {
  return routes[key][locale];
}

export function anchorId(key: AnchorKey, locale: Locale): string {
  return anchors[key][locale];
}

// Ancla de la home usable desde cualquier página del sitio.
export function anchorHref(key: AnchorKey, locale: Locale): string {
  const home = routes.home[locale];
  return `${home === "/" ? "" : home}/#${anchors[key][locale]}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}
