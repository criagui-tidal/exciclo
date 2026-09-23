// Catálogo concreto de problemas que caben en un ciclo. Vive dentro de la
// página "Qué resolvemos", debajo de los tres pilares: los pilares dicen a qué
// nivel trabajamos, este catálogo demuestra que sabemos de qué hablamos.
//
// El orden es intencional: primero el grupo donde la experiencia de Exciclo
// —comercio digital, integraciones y arquitectura— diferencia más.

export const catalog = [
  {
    id: "comercio-digital",
    title: "Comercio digital e integraciones",
    description:
      "Veinte años construyendo comercio digital para marcas globales. Aquí reconocemos el problema antes de que termine de contarlo.",
    featured: true,
    services: [
      {
        problem: "Catálogo desordenado y fichas de producto incompletas",
        solution:
          "IA que genera y enriquece descripciones, atributos y traducciones.",
        tech: ["Claude", "OpenAI API", "Akeneo", "Pimcore", "n8n"],
      },
      {
        problem: "Precios y promociones que se actualizan a mano",
        solution: "Motor de precios por eventos, con reglas y alertas.",
        tech: ["commercetools", "VTEX", "Shopify Plus", "Webhooks", "AWS SQS"],
      },
      {
        problem: "Un ecommerce que no conversa con el ERP",
        solution: "Integración de pedidos, inventario y facturación.",
        tech: [
          "SAP",
          "SAP Business One",
          "Siigo",
          "Alegra",
          "n8n",
          "APIs a medida",
        ],
      },
      {
        problem: "Clientes que buscan y no encuentran",
        solution: "Búsqueda inteligente y recomendaciones en el catálogo.",
        tech: ["Algolia", "Coveo", "Búsqueda semántica", "pgvector"],
      },
      {
        problem: "Comunicación masiva que le habla igual a todo el mundo",
        solution: "Mensajes personalizados por segmento, escritos con IA.",
        tech: ["Klaviyo", "Braze", "Twilio", "IA para personalizar contenido"],
      },
    ],
  },
  {
    id: "atencion-y-ventas",
    title: "Atención y ventas",
    description:
      "Lo que pasa antes de la venta: responder rápido, cotizar rápido y no dejar caer ningún interesado.",
    featured: false,
    services: [
      {
        problem: "WhatsApp saturado de preguntas repetidas",
        solution:
          "Agente de IA que responde, cotiza y deriva a una persona cuando hace falta.",
        tech: ["WhatsApp Business API", "Meta", "Twilio", "Claude", "Chatwoot"],
      },
      {
        problem: "Cotizaciones que tardan días en salir",
        solution: "Generador automático de cotizaciones desde el CRM.",
        tech: ["HubSpot", "Pipedrive", "n8n", "Plantillas en PDF"],
      },
      {
        problem: "Leads que se pierden por el camino",
        solution:
          "Calificación automática y seguimiento sin intervención manual.",
        tech: ["HubSpot", "IA para clasificar", "Make", "n8n"],
      },
    ],
  },
  {
    id: "operacion",
    title: "Operación y back office",
    description:
      "El trabajo que nadie ve y que se lleva las horas de su equipo cada semana.",
    featured: false,
    services: [
      {
        problem: "Facturas y documentos digitados a mano",
        solution: "Lectura automática de documentos, con validación humana.",
        tech: ["AWS Textract", "Azure Document Intelligence", "Claude"],
      },
      {
        problem: "Reportes que alguien arma cada lunes",
        solution: "Tableros automáticos con resumen en lenguaje natural.",
        tech: ["Power BI", "Looker Studio", "Metabase", "IA para resúmenes"],
      },
      {
        problem: "Conocimiento interno disperso en carpetas y correos",
        solution:
          "Asistente interno que responde con los documentos de la empresa (RAG).",
        tech: ["Claude", "pgvector", "Pinecone", "Google Drive", "SharePoint"],
      },
      {
        problem: "Tareas repetitivas entre sistemas que no se hablan",
        solution: "Flujos automáticos operados por agentes de IA.",
        tech: ["n8n", "Make", "Zapier", "Conectores MCP"],
      },
    ],
  },
];
