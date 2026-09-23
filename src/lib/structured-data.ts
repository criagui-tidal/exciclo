// Grafo de datos estructurados del sitio. Describe a Exciclo como un servicio
// profesional y a Cristian como la persona detrás, que es lo que hace que
// buscadores y asistentes entiendan quién responde de este trabajo.
//
// Solo se declara aquí lo que la web ya afirma en su texto visible.

import { getContent } from "@/content";
import { href, hreflangs, locales, type Locale } from "@/lib/i18n";
import { contact, siteName, siteUrl } from "@/lib/site";

const founderId = `${siteUrl}/#cristian`;
const organizationId = `${siteUrl}/#organization`;

export function siteJsonLd(locale: Locale) {
  const content = getContent(locale);
  const homeUrl = `${siteUrl}${href("home", locale)}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": organizationId,
        name: siteName,
        url: siteUrl,
        description: content.home.meta.description,
        slogan: content.home.hero.titleAccent,
        email: contact.emailLabel,
        telephone: contact.whatsappLabel,
        areaServed: [
          { "@type": "Country", name: "Colombia" },
          { "@type": "Place", name: "Latin America" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Medellín",
          addressCountry: "CO",
        },
        founder: { "@id": founderId },
        sameAs: [contact.linkedin],
        knowsLanguage: ["es", "en"],
        makesOffer: content.home.pillars.items.map((pillar) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: pillar.title,
            description: pillar.body,
          },
        })),
      },
      {
        "@type": "Person",
        "@id": founderId,
        name: "Cristian Aguirre Montes",
        jobTitle: content.about.hero.eyebrow,
        description: content.home.about.paragraphs[0],
        worksFor: { "@id": organizationId },
        sameAs: [contact.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": `${homeUrl}#website`,
        url: homeUrl,
        name: siteName,
        inLanguage: hreflangs[locale],
        publisher: { "@id": organizationId },
      },
    ],
  };
}

// El ciclo como oferta con precio: es la información que más se consulta y la
// que conviene que quede explícita para buscadores y asistentes.
export function cycleOfferJsonLd(locale: Locale) {
  const { pricing, cycle } = getContent(locale).home;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: cycle.eyebrow,
    description: cycle.lead,
    provider: { "@id": organizationId },
    serviceType: cycle.title,
    availableLanguage: locales.map((loc) => hreflangs[loc]),
    offers: {
      "@type": "Offer",
      price: "9000",
      priceCurrency: "USD",
      description: pricing.per,
      url: `${siteUrl}${href("home", locale)}`,
    },
  };
}
