// Shared across every English page: site identity, navigation, contact, footer.
// Mirrors src/content/es/common.ts and is type-checked against it.

export const common = {
  site: {
    name: "Exciclo",
    tagline: "Every cycle, an outcome",
    ogAlt:
      "Exciclo · Business optimization with technology and AI. One 4-week cycle at a fixed price.",
    location: "Medellín, Colombia · Projects across Latin America",
  },

  nav: {
    links: [
      { key: "solve" as const, label: "What We Solve" },
      { key: "cases" as const, label: "Cases" },
      { key: "enterprise" as const, label: "For Enterprise" },
      { key: "about" as const, label: "About" },
    ],
    cycleLabel: "The Cycle",
    cta: "Book a conversation",
    switchTo: "Español",
    switchLabel: "Ver el sitio en español",
  },

  contact: {
    whatsapp: "Message on WhatsApp",
    email: "Send an email",
  },

  footer: {
    navLabel: "The site",
    moreLabel: "More",
    contactLabel: "Contact",
    moreLinks: [
      { key: "assessment" as const, label: "Value Assessment" },
      { key: "aiValue" as const, label: "AI Value" },
      { key: "colombia" as const, label: "Colombia" },
    ],
  },
};
