// The English inner pages. Mirrors src/content/es/pages.ts.

export const pages = {
  // ────────────────────────────────────────────────────────── What We Solve
  solve: {
    meta: {
      title: "What We Solve · Operations, technology and AI",
      description:
        "Three business problems and one way of solving them: optimize operations, simplify technology and turn AI into measurable value. Each one fits a 4-week cycle at a fixed price.",
    },
    hero: {
      eyebrow: "What we solve",
      titleLead: "Three problems.",
      titleAccent: "One way of solving them.",
      paragraphs: [
        "We don't start with the technology. We start with the problem: where capacity is lost, where cost accumulates and where technology stopped returning what was invested in it.",
      ],
      ctaPrimary: "Book a conversation",
      ctaSecondary: "How the Cycle works",
    },
    pillars: {
      outcomeLabel: "Outcome",
      signalsLabel: "Signs this is you",
      items: [
        {
          index: "01",
          color: "#1AA0AB",
          title: "Optimize operations",
          body: "We identify processes consuming too much time, money or capacity and redesign how they should work.",
          outcome: "More capacity, less manual work and more efficient operations.",
          signals: [
            "Headcount grows at the same rate as volume",
            "Tasks repeated between systems that don't talk to each other",
            "Information someone consolidates by hand every week",
          ],
        },
        {
          index: "02",
          color: "#58BD8C",
          title: "Simplify technology",
          body: "We identify complexity, duplication, unnecessary integrations and modernization opportunities.",
          outcome:
            "Less friction, better architecture and greater control over technology investment.",
          signals: [
            "Vendors and licenses nobody has reviewed in years",
            "Integrations only one person understands",
            "Simple changes that take weeks to ship",
          ],
        },
        {
          index: "03",
          color: "#FBBD0C",
          title: "Turn AI into value",
          body: "We identify where AI can create meaningful impact and build the first use cases with clear metrics.",
          outcome: "AI solutions connected to the business, not isolated pilots.",
          signals: [
            "Pilots that never reached production",
            "Tools bought without a business case behind them",
            "Nobody can say how much value AI has created so far",
          ],
        },
      ],
    },
    catalog: {
      eyebrow: "Concretely",
      title: "What fits into a 4-week cycle.",
      lead: "The pillars explain the level we work at. This is the concrete list of problems we see most often, and what we solve them with. If yours resembles one of them, we've solved it before.",
      problemLabel: "The problem",
      solutionLabel: "In one cycle",
      featuredEyebrow: "Where our experience makes the most difference",
      closingTitle: "Your problem isn't on the list?",
      closingBody:
        "It almost always resembles one. Week 1 of the cycle exists precisely for that: we diagnose your operation and tell you with data what can be solved, before building anything.",
    },
  },

  // ────────────────────────────────────── Technology & AI Value Assessment
  assessment: {
    media: {
      alt: "Server racks and network cabling in a technical room",
      caption:
        "Architecture, integrations, vendors and cost: what accumulates when nobody reviews the whole picture.",
    },
    meta: {
      title: "Technology & AI Value Assessment",
      description:
        "An executive assessment for businesses that need to understand where to invest, where to optimize and where to simplify before adding more technology. Includes a value map and a prioritized 12-24 month roadmap.",
    },
    hero: {
      eyebrow: "Executive assessment",
      titleLead: "How much value is your technology",
      titleAccent: "really creating?",
      paragraphs: [
        "An assessment for businesses that need to understand where to invest, where to optimize and where to simplify before adding more technology.",
      ],
      note: "For CIOs, CTOs, CFOs and COOs",
      ctaPrimary: "Request an assessment",
      ctaSecondary: "Talk to Exciclo first",
    },
    dimensions: {
      eyebrow: "What we assess",
      title: "Four dimensions. One reading of the business.",
      items: [
        {
          title: "Technology",
          items: [
            "Architecture",
            "Applications",
            "Integrations",
            "Cloud",
            "Vendors",
          ],
          color: "#1AA0AB",
        },
        {
          title: "Operations",
          items: ["Processes", "Productivity", "Friction", "Automation"],
          color: "#58BD8C",
        },
        {
          title: "Economics",
          items: [
            "Cost",
            "Licensing",
            "Capacity",
            "Investment",
            "Run vs. change",
          ],
          color: "#FBBD0C",
        },
        {
          title: "AI",
          items: ["Data", "Use cases", "Readiness", "Agents", "Governance"],
          color: "#102A50",
        },
      ],
    },
    deliverable: {
      eyebrow: "You receive",
      title: "Technology & AI Value Map",
      lead: "An executive view of:",
      items: [
        "where complexity exists",
        "where value is being lost",
        "what should be optimized",
        "what should be modernized",
        "where AI makes business sense",
        "which initiatives should come first",
      ],
      closing:
        "Plus a prioritized 12-24 month roadmap, with the investment decision each initiative calls for.",
    },
    next: {
      title: "The assessment doesn't end in a report.",
      body: "When one of the identified opportunities is worth solving, it goes straight into a 4-week Exciclo Cycle and comes out working.",
      cta: "See the Cycle",
    },
  },

  // ───────────────────────────────────────────────────────────────AI Value
  aiValue: {
    meta: {
      title: "AI Value · Where artificial intelligence changes the business",
      description:
        "AI is moving from experiments into operations. We identify where the combination of AI, data, processes and technology produces a measurable result, and we build the first use case.",
    },
    hero: {
      eyebrow: "AI value",
      titleLead: "The question isn't what AI can do.",
      titleAccent: "It's where it can change your business.",
      paragraphs: [
        "AI is moving from experiments into being part of operations. But implementing a tool doesn't guarantee creating value.",
        "Exciclo identifies opportunities where the combination of AI, data, processes and technology can produce a measurable result.",
      ],
      ctaPrimary: "Assess an opportunity",
      ctaSecondary: "See the Value Assessment",
    },
    columns: {
      eyebrow: "How we work with AI",
      title: "Identify. Build. Measure.",
      items: [
        {
          title: "We identify",
          color: "#1AA0AB",
          items: [
            "Candidate processes",
            "Available data",
            "Automation opportunities",
            "Agent use cases",
            "Risks and dependencies",
            "Success metrics",
          ],
        },
        {
          title: "We build",
          color: "#58BD8C",
          items: [
            "Prototypes",
            "MVPs",
            "Automations",
            "Agents",
            "Integrations",
            "New workflows",
          ],
        },
        {
          title: "We measure",
          color: "#FBBD0C",
          items: [
            "Time",
            "Cost",
            "Capacity",
            "Productivity",
            "Revenue",
            "Quality",
          ],
        },
      ],
    },
    statement: {
      lead: "We don't do AI for the sake of AI.",
      emphasis: "We do it when it solves a problem that matters.",
    },
  },

  // ───────────────────────────────────────────────────────── For Enterprise
  enterprise: {
    media: {
      alt: "Glass facade of a corporate office building at dusk",
      caption:
        "Enterprise experience, without the machinery of a large consultancy.",
    },
    meta: {
      title: "For Enterprise · Operations, technology and AI at executive level",
      description:
        "The experience you expect from a large consultancy, with the speed a large consultancy can't always offer. Exciclo works directly with CEOs, CFOs, COOs, CIOs and CTOs on concrete problems.",
    },
    hero: {
      eyebrow: "For enterprise",
      titleLead: "The experience you expect from a large consultancy.",
      titleAccent: "The speed a large consultancy can't always offer.",
      paragraphs: [
        "Exciclo works directly with business leaders to solve concrete problems across operations, technology and AI. No intermediate layers and no teams that change along the way.",
      ],
      ctaPrimary: "Talk to Exciclo",
      ctaSecondary: "See the Value Assessment",
    },
    roles: {
      eyebrow: "Depending on where the problem sits",
      title: "A different conversation for every seat.",
      items: [
        {
          role: "For CEOs",
          body: "Turn technology and operational complexity into capacity for growth.",
          color: "#1AA0AB",
        },
        {
          role: "For CFOs",
          body: "Understand where technology budget is being consumed and where optimization opportunity exists.",
          color: "#58BD8C",
        },
        {
          role: "For COOs",
          body: "Redesign operations to increase capacity without growing the structure proportionally.",
          color: "#FBBD0C",
        },
        {
          role: "For CIOs",
          body: "Simplify the technology landscape and connect technology investment to business results.",
          color: "#102A50",
        },
        {
          role: "For CTOs",
          body: "Modernize architecture, integration and platforms without losing sight of the business.",
          color: "#1AA0AB",
        },
        {
          role: "For AI leaders",
          body: "Turn AI experiments into measurable operational capabilities.",
          color: "#58BD8C",
        },
      ],
    },
    closing: {
      title: "One conversation. One concrete problem. One first cycle.",
      body: "You don't need the diagnosis settled before calling us. You need to know what is costing you more than it should.",
      cta: "Talk to Exciclo",
    },
  },

  // ─────────────────────────────────────────────────────────────────  Cases
  cases: {
    media: {
      alt: "Warehouse aisle lined with industrial racking full of stock",
      caption:
        "Large-scale operations: thousands of SKUs, thousands of points of sale, never stopping.",
    },
    meta: {
      title: "Cases · Technology delivered at enterprise scale",
      description:
        "Architecture, digital commerce and technology transformation projects delivered for global brands and organizations, carrying the commercial and operational complexity of a large business.",
    },
    hero: {
      eyebrow: "Cases",
      titleLead: "Technology delivered",
      titleAccent: "at enterprise scale.",
      paragraphs: [
        "These are projects I've worked on over the past twenty years, in architecture, technical leadership and transformation roles. Scale matters: what you learn holding up a large operation is exactly what prevents expensive mistakes in a mid-sized one.",
      ],
      ctaPrimary: "Book a conversation",
    },
    readMore: "Read the case",
    scaleLabel: "The scale",
    items: [
      {
        slug: "comex" as const,
        client: "Comex — PPG",
        title: "Modernizing commerce at enterprise scale.",
        summary:
          "A large-scale operation needed to evolve its digital platform while keeping the commercial and operational complexity of the business.",
        scale: [
          { value: "8M+", label: "prices managed" },
          { value: "6,500", label: "stores" },
          { value: "MACH", label: "architecture" },
          { value: "Mexico", label: "market" },
        ],
        tech: ["Architecture", "Commerce", "Cloud", "Integration", "Delivery"],
        hasPage: true,
      },
      {
        slug: "retail-global" as const,
        client: "Global fashion and eyewear retail",
        title: "A technology center serving global brands.",
        summary:
          "Leading a technology center in Málaga serving brands with worldwide reach, with distributed teams and continuous operation.",
        scale: [
          { value: "5", label: "continents" },
          { value: "20+", label: "years of track record" },
          { value: "2025", label: "Team of the Year, Valtech" },
        ],
        tech: ["Ray-Ban", "Versace", "Persol", "Sunglass Hut", "Kering"],
        hasPage: false,
      },
    ],
  },

  comex: {
    media: {
      alt: "Warehouse aisle lined with industrial racking full of stock",
      caption: "",
    },
    meta: {
      title: "Comex — PPG · From technology complexity to enterprise platform",
      description:
        "Architecture, integration model and technology platform to support a large-scale commerce operation in Mexico: 8M+ prices and 6,500 stores on MACH architecture.",
    },
    eyebrow: "Case · Comex — PPG",
    title: "From technology complexity to enterprise platform.",
    sections: [
      {
        label: "The challenge",
        body: "A large-scale operation needed to evolve its digital platform while keeping the commercial and operational complexity of the business: thousands of points of sale, extensive pricing structures and processes that could not stop during the transition.",
      },
      {
        label: "The intervention",
        body: "We designed the architecture, the integration model and the technology platform needed to support the operation at scale, on MACH principles: decoupled services, APIs as the contract and independent deployment per domain.",
      },
      {
        label: "The result",
        body: "A platform ready to support the digital evolution of the business and new commercial capabilities, without rebuilding the existing operation to get there.",
      },
    ],
    scaleLabel: "The scale",
    scale: [
      { value: "8M+", label: "prices managed" },
      { value: "6,500", label: "stores" },
      { value: "MACH", label: "architecture" },
      { value: "Mexico", label: "market" },
    ],
    techLabel: "Disciplines",
    tech: ["Architecture", "Commerce", "Cloud", "Integration", "Delivery"],
    closing: {
      title: "Your operation doesn't need this size to need this judgment.",
      body: "The decisions that hold up a 6,500-store platform are the same ones that keep a mid-sized operation from getting stuck three years from now.",
      cta: "Book a conversation",
    },
    backLabel: "All cases",
  },

  // ──────────────────────────────────────────────────────────────── Colombia
  colombia: {
    media: {
      alt: "View over Medellín: El Poblado high-rises with the Aburrá valley mountains behind",
      caption:
        "From Medellín, we work with businesses across Colombia and Latin America.",
    },
    meta: {
      title: "Colombia · Enterprise technology for the next stage of growth",
      description:
        "Colombian businesses are accelerating their adoption of technology, automation and AI. Exciclo helps optimize operations, simplify technology, prioritize investment and turn AI into results.",
    },
    hero: {
      eyebrow: "Colombia",
      titleLead: "Enterprise technology for the",
      titleAccent: "next stage of Colombia's growth.",
      paragraphs: [
        "Colombian businesses are accelerating their adoption of technology, automation and AI.",
        "The challenge is no longer only to digitize. It is to make the investments already made produce more productivity, capacity and growth.",
      ],
      ctaPrimary: "Talk to Exciclo",
      ctaSecondary: "See the Value Assessment",
    },
    help: {
      eyebrow: "Where we help",
      title: "Exciclo helps Colombian businesses to:",
      items: [
        { title: "Optimize operations", color: "#1AA0AB" },
        { title: "Simplify technology", color: "#58BD8C" },
        { title: "Prioritize investment", color: "#FBBD0C" },
        { title: "Turn AI into results", color: "#102A50" },
      ],
    },
    closing: {
      title: "From Medellín, we work with businesses across Colombia and Latin America.",
      body: "The conversation starts the same way in any city: what the problem is, what it is costing, and what can be solved in four weeks.",
      cta: "Talk to Exciclo",
    },
  },

  // ─────────────────────────────────────────────────────────────────  About
  about: {
    meta: {
      title: "About Exciclo · Experience built at enterprise scale",
      description:
        "Cristian Aguirre Montes, architect and technology transformation leader with more than 20 years working with global organizations and brands. Exciclo brings that experience directly to businesses in the region.",
    },
    hero: {
      eyebrow: "About Exciclo",
      titleLead: "Experience built",
      titleAccent: "at enterprise scale.",
      paragraphs: [
        "I'm Cristian Aguirre Montes, an architect and technology transformation leader with more than 20 years working with global organizations and brands.",
        "I've led teams, architectures and transformations across Europe, Latin America and other markets, from building technology centers to digital platforms used by thousands of stores.",
      ],
      ctaPrimary: "Book a conversation",
      ctaSecondary: "See the cases",
    },
    imageAlt: "Cristian Aguirre Montes, founder of Exciclo",
    story: {
      eyebrow: "The track record",
      title: "From a technology center in Málaga to businesses across the region.",
      paragraphs: [
        "I led a technology center in Málaga serving brands such as Ray-Ban and Versace. At Valtech I led the first 100% Latin American MACH platform, for Comex in Mexico.",
        "Projects I've worked on include Ray-Ban, Versace, Persol, Sunglass Hut and Comex.",
        "I founded Exciclo so businesses in the region could reach that same level of experience without waiting months or paying large-consultancy rates. No unnecessary layers. No interchangeable teams. Straight to the experience the problem calls for.",
      ],
    },
    statsLabel: "Built at enterprise scale",
    stats: [
      { value: "20+", label: "years leading technology" },
      { value: "5", label: "continents with delivered projects" },
      { value: "6,500", label: "stores on a single platform" },
      { value: "2025", label: "Team of the Year, Valtech Global Awards" },
    ],
  },
};
