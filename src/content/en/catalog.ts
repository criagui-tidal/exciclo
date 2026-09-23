// Concrete catalog of problems that fit inside a cycle. It lives inside the
// "What We Solve" page, below the three pillars: the pillars say what level we
// work at, this catalog proves we know what we are talking about.

export const catalog = [
  {
    id: "digital-commerce",
    title: "Digital commerce and integrations",
    description:
      "Twenty years building digital commerce for global brands. Here we recognize the problem before you finish describing it.",
    featured: true,
    services: [
      {
        problem: "Messy catalog and incomplete product pages",
        solution:
          "AI that generates and enriches descriptions, attributes and translations.",
        tech: ["Claude", "OpenAI API", "Akeneo", "Pimcore", "n8n"],
      },
      {
        problem: "Prices and promotions updated by hand",
        solution: "Event-driven pricing engine, with rules and alerts.",
        tech: ["commercetools", "VTEX", "Shopify Plus", "Webhooks", "AWS SQS"],
      },
      {
        problem: "An ecommerce that doesn't talk to the ERP",
        solution: "Order, inventory and invoicing integration.",
        tech: [
          "SAP",
          "SAP Business One",
          "Siigo",
          "Alegra",
          "n8n",
          "Custom APIs",
        ],
      },
      {
        problem: "Customers who search and don't find",
        solution: "Intelligent search and recommendations across the catalog.",
        tech: ["Algolia", "Coveo", "Semantic search", "pgvector"],
      },
      {
        problem: "Mass communication that speaks to everyone the same way",
        solution: "Messages personalized by segment, written with AI.",
        tech: ["Klaviyo", "Braze", "Twilio", "AI for content personalization"],
      },
    ],
  },
  {
    id: "sales-and-service",
    title: "Sales and customer service",
    description:
      "What happens before the sale: answer fast, quote fast and let no prospect fall through.",
    featured: false,
    services: [
      {
        problem: "WhatsApp flooded with repeated questions",
        solution:
          "AI agent that answers, quotes and hands over to a person when needed.",
        tech: ["WhatsApp Business API", "Meta", "Twilio", "Claude", "Chatwoot"],
      },
      {
        problem: "Quotes that take days to go out",
        solution: "Automatic quote generation from the CRM.",
        tech: ["HubSpot", "Pipedrive", "n8n", "PDF templates"],
      },
      {
        problem: "Leads lost along the way",
        solution: "Automatic qualification and follow-up with no manual work.",
        tech: ["HubSpot", "AI for classification", "Make", "n8n"],
      },
    ],
  },
  {
    id: "operations",
    title: "Operations and back office",
    description:
      "The work nobody sees, and that takes your team's hours every week.",
    featured: false,
    services: [
      {
        problem: "Invoices and documents keyed in by hand",
        solution: "Automatic document reading, with human validation.",
        tech: ["AWS Textract", "Azure Document Intelligence", "Claude"],
      },
      {
        problem: "Reports someone assembles every Monday",
        solution: "Automatic dashboards with a natural-language summary.",
        tech: ["Power BI", "Looker Studio", "Metabase", "AI for summaries"],
      },
      {
        problem: "Internal knowledge scattered across folders and email",
        solution:
          "Internal assistant that answers from the company's own documents (RAG).",
        tech: ["Claude", "pgvector", "Pinecone", "Google Drive", "SharePoint"],
      },
      {
        problem: "Repetitive tasks between systems that don't talk",
        solution: "Automated workflows operated by AI agents.",
        tech: ["n8n", "Make", "Zapier", "MCP connectors"],
      },
    ],
  },
];
