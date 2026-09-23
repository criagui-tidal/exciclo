// Textos compartidos por todas las páginas en español: identidad del sitio,
// navegación, contacto y footer. El inglés se tipa contra este objeto.

export const common = {
  site: {
    name: "Exciclo",
    tagline: "Cada ciclo, un éxito",
    ogAlt:
      "Exciclo · Optimización empresarial con tecnología e IA. Un ciclo de 4 semanas a precio fijo.",
    location: "Medellín, Colombia · Proyectos en toda Latinoamérica",
  },

  nav: {
    // Las claves son rutas de `@/lib/i18n`; el menú visible se queda en cuatro
    // entradas a propósito, el resto del sitio se alcanza desde el footer.
    links: [
      { key: "solve" as const, label: "Qué resolvemos" },
      { key: "cases" as const, label: "Casos" },
      { key: "enterprise" as const, label: "Para empresas" },
      { key: "about" as const, label: "Sobre Exciclo" },
    ],
    cycleLabel: "El Ciclo",
    cta: "Agendar conversación",
    switchTo: "English",
    switchLabel: "Ver el sitio en inglés",
  },

  contact: {
    whatsapp: "Escribir por WhatsApp",
    email: "Enviar un correo",
  },

  footer: {
    navLabel: "El sitio",
    moreLabel: "Más",
    contactLabel: "Contacto",
    // Páginas que no caben en el menú del header pero sí deben ser rastreables.
    moreLinks: [
      { key: "assessment" as const, label: "Evaluación de valor" },
      { key: "aiValue" as const, label: "IA y valor" },
      { key: "colombia" as const, label: "Colombia" },
    ],
  },
};
