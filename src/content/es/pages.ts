// Las páginas interiores en español. Cada clave corresponde a una ruta de
// `@/lib/i18n`; el `meta` de cada una alimenta el <head> de su page.tsx.

export const pages = {
  // ───────────────────────────────────────────────────────── Qué resolvemos
  solve: {
    meta: {
      title: "Qué resolvemos · Operaciones, tecnología e IA",
      description:
        "Tres problemas empresariales y una forma de resolverlos: optimizar operaciones, simplificar tecnología y convertir la IA en valor medible. Cada uno cabe en un ciclo de 4 semanas a precio fijo.",
    },
    hero: {
      eyebrow: "Qué resolvemos",
      titleLead: "Tres problemas.",
      titleAccent: "Una forma de resolverlos.",
      paragraphs: [
        "No empezamos por la herramienta. Empezamos por el problema: dónde se pierde capacidad, dónde se acumula coste y dónde la tecnología dejó de devolver lo que se invirtió en ella.",
      ],
      ctaPrimary: "Agendar una conversación",
      ctaSecondary: "Cómo funciona el Ciclo",
    },
    pillars: {
      outcomeLabel: "Resultado",
      signalsLabel: "Señales de que le pasa",
      items: [
        {
          index: "01",
          color: "#1AA0AB",
          title: "Optimizar operaciones",
          body: "Encontramos procesos que consumen demasiado tiempo, dinero o capacidad y rediseñamos cómo deberían funcionar.",
          outcome:
            "Más capacidad, menos trabajo manual y operaciones más eficientes.",
          signals: [
            "El equipo crece al mismo ritmo que el volumen",
            "Tareas que se repiten entre sistemas que no se hablan",
            "Información que alguien consolida a mano cada semana",
          ],
        },
        {
          index: "02",
          color: "#58BD8C",
          title: "Simplificar tecnología",
          body: "Identificamos complejidad, duplicación, integraciones innecesarias y oportunidades de modernización.",
          outcome:
            "Menos fricción, mejor arquitectura y mayor control sobre la inversión tecnológica.",
          signals: [
            "Proveedores y licencias que nadie ha revisado en años",
            "Integraciones que solo entiende una persona",
            "Cambios simples que tardan semanas en salir",
          ],
        },
        {
          index: "03",
          color: "#FBBD0C",
          title: "Convertir IA en valor",
          body: "Identificamos dónde la IA puede producir un impacto real y construimos los primeros casos de uso con métricas claras.",
          outcome: "Soluciones de IA conectadas al negocio, no pilotos aislados.",
          signals: [
            "Pilotos que no llegaron a producción",
            "Herramientas contratadas sin un caso de negocio detrás",
            "Nadie sabe decir cuánto valor ha generado la IA hasta hoy",
          ],
        },
      ],
    },
    catalog: {
      eyebrow: "Concretamente",
      title: "Qué cabe en un ciclo de 4 semanas.",
      lead: "Los pilares explican el nivel al que trabajamos. Esta es la lista concreta de problemas que más vemos, y con qué los resolvemos. Si el suyo se parece a alguno, ya lo hemos resuelto antes.",
      problemLabel: "El problema",
      solutionLabel: "En un ciclo",
      featuredEyebrow: "Donde nuestra experiencia marca la diferencia",
      closingTitle: "¿Su problema no está en la lista?",
      closingBody:
        "Casi siempre se parece a alguno. La semana 1 del ciclo existe justamente para eso: diagnosticamos su operación y le decimos con datos qué se puede resolver, antes de construir nada.",
    },
  },

  // ────────────────────────────────────── Evaluación de valor de tecnología
  assessment: {
    media: {
      alt: "Racks de servidores y cableado de red en una sala técnica",
      caption:
        "Arquitectura, integraciones, proveedores y coste: lo que se acumula cuando nadie lo revisa entero.",
    },
    meta: {
      title: "Evaluación de valor de tecnología e IA",
      description:
        "Evaluación ejecutiva para entender dónde invertir, dónde optimizar y dónde simplificar antes de seguir aumentando su stack tecnológico. Incluye un mapa de valor y un roadmap priorizado a 12-24 meses.",
    },
    hero: {
      eyebrow: "Evaluación ejecutiva",
      titleLead: "¿Cuánto valor está generando",
      titleAccent: "realmente su tecnología?",
      paragraphs: [
        "Una evaluación para empresas que necesitan entender dónde invertir, dónde optimizar y dónde simplificar antes de seguir aumentando su stack tecnológico.",
      ],
      note: "Para CIO, CTO, CFO y COO",
      ctaPrimary: "Solicitar evaluación",
      ctaSecondary: "Hablar antes con Exciclo",
    },
    dimensions: {
      eyebrow: "Qué analizamos",
      title: "Cuatro dimensiones. Una sola lectura del negocio.",
      items: [
        {
          title: "Tecnología",
          items: [
            "Arquitectura",
            "Aplicaciones",
            "Integraciones",
            "Cloud",
            "Proveedores",
          ],
          color: "#1AA0AB",
        },
        {
          title: "Operaciones",
          items: [
            "Procesos",
            "Productividad",
            "Puntos de fricción",
            "Automatización",
          ],
          color: "#58BD8C",
        },
        {
          title: "Economía",
          items: [
            "Costes",
            "Licencias",
            "Capacidad",
            "Inversión",
            "Run vs. change",
          ],
          color: "#FBBD0C",
        },
        {
          title: "IA",
          items: ["Datos", "Casos de uso", "Preparación", "Agentes", "Gobierno"],
          color: "#102A50",
        },
      ],
    },
    deliverable: {
      eyebrow: "Qué recibe",
      title: "Technology & AI Value Map",
      lead: "Un mapa ejecutivo que muestra:",
      items: [
        "dónde existe complejidad",
        "dónde se está perdiendo valor",
        "qué debería optimizarse",
        "qué debería modernizarse",
        "dónde tiene sentido aplicar IA",
        "qué iniciativas deberían venir primero",
      ],
      closing:
        "Y un roadmap priorizado para los próximos 12-24 meses, con la decisión de inversión que corresponde a cada iniciativa.",
    },
    next: {
      title: "La evaluación no termina en un informe.",
      body: "Cuando una de las oportunidades identificadas merece resolverse, entra directamente en un Ciclo Exciclo de 4 semanas y sale funcionando.",
      cta: "Conocer el Ciclo",
    },
  },

  // ───────────────────────────────────────────────────────────── IA y valor
  aiValue: {
    meta: {
      title: "IA y valor · Dónde la inteligencia artificial cambia el negocio",
      description:
        "La IA está pasando de los experimentos a formar parte de las operaciones. Identificamos dónde la combinación de IA, datos, procesos y tecnología produce un resultado medible, y construimos el primer caso de uso.",
    },
    hero: {
      eyebrow: "IA y valor",
      titleLead: "La pregunta no es qué puede hacer la IA.",
      titleAccent: "Es dónde puede cambiar su negocio.",
      paragraphs: [
        "La IA está pasando de los experimentos a formar parte de las operaciones. Pero implementar una herramienta no garantiza crear valor.",
        "Exciclo identifica oportunidades donde la combinación de IA, datos, procesos y tecnología puede producir un resultado medible.",
      ],
      ctaPrimary: "Evaluar una oportunidad",
      ctaSecondary: "Ver la evaluación de valor",
    },
    columns: {
      eyebrow: "Cómo trabajamos la IA",
      title: "Identificar. Construir. Medir.",
      items: [
        {
          title: "Identificamos",
          color: "#1AA0AB",
          items: [
            "Procesos candidatos",
            "Datos disponibles",
            "Oportunidades de automatización",
            "Casos de uso de agentes",
            "Riesgos y dependencias",
            "Métricas de éxito",
          ],
        },
        {
          title: "Construimos",
          color: "#58BD8C",
          items: [
            "Prototipos",
            "MVPs",
            "Automatizaciones",
            "Agentes",
            "Integraciones",
            "Nuevos flujos de trabajo",
          ],
        },
        {
          title: "Medimos",
          color: "#FBBD0C",
          items: [
            "Tiempo",
            "Coste",
            "Capacidad",
            "Productividad",
            "Ingresos",
            "Calidad",
          ],
        },
      ],
    },
    statement: {
      lead: "No hacemos IA por hacer IA.",
      emphasis: "La hacemos cuando resuelve un problema que importa.",
    },
  },

  // ─────────────────────────────────────────────────────────── Para empresas
  enterprise: {
    media: {
      alt: "Fachada acristalada de un edificio corporativo al atardecer",
      caption:
        "Experiencia enterprise, sin la maquinaria de una gran consultora.",
    },
    meta: {
      title: "Para empresas · Operaciones, tecnología e IA a nivel ejecutivo",
      description:
        "La experiencia que espera de una gran consultora, con la velocidad que una gran consultora no siempre puede ofrecer. Exciclo trabaja directamente con CEO, CFO, COO, CIO y CTO sobre problemas concretos.",
    },
    hero: {
      eyebrow: "Para empresas",
      titleLead: "La experiencia que espera de una gran consultora.",
      titleAccent:
        "La velocidad que una gran consultora no siempre puede ofrecer.",
      paragraphs: [
        "Exciclo trabaja directamente con líderes empresariales para resolver problemas concretos de operación, tecnología e IA. Sin capas intermedias y sin equipos que cambian en el camino.",
      ],
      ctaPrimary: "Hablar con Exciclo",
      ctaSecondary: "Ver la evaluación de valor",
    },
    roles: {
      eyebrow: "Según dónde esté el problema",
      title: "Una conversación distinta para cada silla.",
      items: [
        {
          role: "Para CEOs",
          body: "Convierta complejidad tecnológica y operacional en capacidad de crecimiento.",
          color: "#1AA0AB",
        },
        {
          role: "Para CFOs",
          body: "Entienda dónde se está consumiendo presupuesto tecnológico y dónde existe oportunidad de optimización.",
          color: "#58BD8C",
        },
        {
          role: "Para COOs",
          body: "Rediseñe operaciones para aumentar capacidad sin aumentar proporcionalmente la estructura.",
          color: "#FBBD0C",
        },
        {
          role: "Para CIOs",
          body: "Simplifique el landscape tecnológico y conecte inversión tecnológica con resultados empresariales.",
          color: "#102A50",
        },
        {
          role: "Para CTOs",
          body: "Modernice arquitectura, integración y plataformas sin perder de vista el negocio.",
          color: "#1AA0AB",
        },
        {
          role: "Para líderes de IA",
          body: "Convierta experimentos de IA en capacidades operativas medibles.",
          color: "#58BD8C",
        },
      ],
    },
    closing: {
      title: "Una conversación. Un problema concreto. Un primer ciclo.",
      body: "No necesita tener resuelto el diagnóstico antes de llamarnos. Necesita saber qué le está costando más de lo que debería.",
      cta: "Hablar con Exciclo",
    },
  },

  // ─────────────────────────────────────────────────────────────────── Casos
  cases: {
    media: {
      alt: "Pasillo de un almacén con estanterías industriales llenas de mercancía",
      caption:
        "Operaciones de gran escala: miles de referencias, miles de puntos de venta, sin parar.",
    },
    meta: {
      title: "Casos · Tecnología entregada a escala empresarial",
      description:
        "Proyectos de arquitectura, comercio digital y transformación tecnológica entregados para marcas y organizaciones globales, con la complejidad comercial y operacional de un negocio grande.",
    },
    hero: {
      eyebrow: "Casos",
      titleLead: "Tecnología entregada",
      titleAccent: "a escala empresarial.",
      paragraphs: [
        "Estos son proyectos en los que he trabajado durante los últimos veinte años, en roles de arquitectura, liderazgo técnico y transformación. La escala importa: lo que se aprende sosteniendo una operación grande es exactamente lo que evita errores caros en una mediana.",
      ],
      ctaPrimary: "Agendar una conversación",
    },
    readMore: "Ver el caso",
    scaleLabel: "La escala",
    items: [
      {
        slug: "comex" as const,
        client: "Comex — PPG",
        title: "Modernizar el comercio a escala empresarial.",
        summary:
          "Una operación de gran escala necesitaba evolucionar su plataforma digital manteniendo la complejidad comercial y operacional del negocio.",
        scale: [
          { value: "8M+", label: "precios gestionados" },
          { value: "6.500", label: "tiendas" },
          { value: "MACH", label: "arquitectura" },
          { value: "México", label: "mercado" },
        ],
        tech: ["Arquitectura", "Commerce", "Cloud", "Integración", "Delivery"],
        hasPage: true,
      },
      {
        slug: "retail-global" as const,
        client: "Retail global de moda y óptica",
        title: "Un centro tecnológico al servicio de marcas globales.",
        summary:
          "Dirección de un centro tecnológico en Málaga que daba servicio a marcas de alcance mundial, con equipos distribuidos y operación continua.",
        scale: [
          { value: "5", label: "continentes" },
          { value: "20+", label: "años de trayectoria" },
          { value: "2025", label: "Team of the Year, Valtech" },
        ],
        tech: ["Ray-Ban", "Versace", "Persol", "Sunglass Hut", "Kering"],
        hasPage: false,
      },
    ],
  },

  comex: {
    media: {
      alt: "Pasillo de un almacén con estanterías industriales llenas de mercancía",
      caption: "",
    },
    meta: {
      title: "Comex — PPG · De complejidad tecnológica a plataforma empresarial",
      description:
        "Arquitectura, modelo de integración y plataforma tecnológica para soportar una operación de comercio de gran escala en México: 8M+ precios y 6.500 tiendas sobre arquitectura MACH.",
    },
    eyebrow: "Caso · Comex — PPG",
    title: "De complejidad tecnológica a plataforma empresarial.",
    sections: [
      {
        label: "El desafío",
        body: "Una operación de gran escala necesitaba evolucionar su plataforma digital manteniendo la complejidad comercial y operacional del negocio: miles de puntos de venta, estructuras de precio extensas y procesos que no podían detenerse durante la transición.",
      },
      {
        label: "La intervención",
        body: "Diseñamos la arquitectura, el modelo de integración y la plataforma tecnológica necesarios para soportar la operación a escala, sobre principios MACH: servicios desacoplados, APIs como contrato y despliegue independiente por dominio.",
      },
      {
        label: "El resultado",
        body: "Una plataforma preparada para soportar la evolución digital del negocio y nuevas capacidades comerciales, sin rehacer la operación existente para conseguirlo.",
      },
    ],
    scaleLabel: "La escala",
    scale: [
      { value: "8M+", label: "precios gestionados" },
      { value: "6.500", label: "tiendas" },
      { value: "MACH", label: "arquitectura" },
      { value: "México", label: "mercado" },
    ],
    techLabel: "Disciplinas",
    tech: ["Arquitectura", "Commerce", "Cloud", "Integración", "Delivery"],
    closing: {
      title: "Su operación no necesita este tamaño para necesitar este criterio.",
      body: "Las decisiones que sostienen una plataforma de 6.500 tiendas son las mismas que evitan que una operación mediana se quede atascada dentro de tres años.",
      cta: "Agendar una conversación",
    },
    backLabel: "Todos los casos",
  },

  // ──────────────────────────────────────────────────────────────── Colombia
  colombia: {
    media: {
      alt: "Vista de Medellín: edificios de El Poblado con las montañas del valle de Aburrá al fondo",
      caption:
        "Desde Medellín, trabajamos con empresas en Colombia y Latinoamérica.",
    },
    meta: {
      title: "Colombia · Tecnología empresarial para la próxima etapa",
      description:
        "Las empresas colombianas están acelerando la adopción de tecnología, automatización e IA. Exciclo ayuda a optimizar operaciones, simplificar tecnología, priorizar inversiones y convertir la IA en resultados.",
    },
    hero: {
      eyebrow: "Colombia",
      titleLead: "Tecnología empresarial para la",
      titleAccent: "próxima etapa de crecimiento de Colombia.",
      paragraphs: [
        "Las empresas colombianas están acelerando la adopción de tecnología, automatización e IA.",
        "El reto ya no es solamente digitalizar. Es conseguir que las inversiones realizadas generen más productividad, capacidad y crecimiento.",
      ],
      ctaPrimary: "Hablar con Exciclo",
      ctaSecondary: "Ver la evaluación de valor",
    },
    help: {
      eyebrow: "En qué ayudamos",
      title: "Exciclo ayuda a las empresas colombianas a:",
      items: [
        { title: "Optimizar operaciones", color: "#1AA0AB" },
        { title: "Simplificar tecnología", color: "#58BD8C" },
        { title: "Priorizar inversiones", color: "#FBBD0C" },
        { title: "Convertir IA en resultados", color: "#102A50" },
      ],
    },
    closing: {
      title: "Desde Medellín, trabajamos con empresas en Colombia y Latinoamérica.",
      body: "La conversación empieza igual en cualquier ciudad: cuál es el problema, cuánto está costando y qué se puede resolver en cuatro semanas.",
      cta: "Hablar con Exciclo",
    },
  },

  // ─────────────────────────────────────────────────────────── Sobre Exciclo
  about: {
    meta: {
      title: "Sobre Exciclo · Experiencia construida a escala enterprise",
      description:
        "Cristian Aguirre Montes, arquitecto y líder de transformación tecnológica con más de 20 años trabajando con organizaciones y marcas globales. Exciclo lleva esa experiencia directamente a empresas de la región.",
    },
    hero: {
      eyebrow: "Sobre Exciclo",
      titleLead: "Experiencia construida",
      titleAccent: "a escala enterprise.",
      paragraphs: [
        "Soy Cristian Aguirre Montes, arquitecto y líder de transformación tecnológica con más de 20 años trabajando con organizaciones y marcas globales.",
        "He liderado equipos, arquitecturas y transformaciones en Europa, Latinoamérica y otros mercados, desde la creación de centros tecnológicos hasta plataformas digitales utilizadas por miles de tiendas.",
      ],
      ctaPrimary: "Agendar una conversación",
      ctaSecondary: "Ver los casos",
    },
    imageAlt: "Cristian Aguirre Montes, fundador de Exciclo",
    story: {
      eyebrow: "La trayectoria",
      title: "De un centro tecnológico en Málaga a las empresas de la región.",
      paragraphs: [
        "Dirigí un centro tecnológico en Málaga al servicio de marcas como Ray-Ban y Versace. En Valtech lideré la primera plataforma MACH 100% latinoamericana, para Comex en México.",
        "Entre los proyectos en los que he trabajado se encuentran Ray-Ban, Versace, Persol, Sunglass Hut y Comex.",
        "Fundé Exciclo para que las empresas de la región accedan a ese mismo nivel de experiencia, sin esperar meses ni pagar tarifas de gran consultora. Sin capas innecesarias. Sin equipos intercambiables. Directamente con la experiencia que necesita el problema.",
      ],
    },
    statsLabel: "Construido a escala enterprise",
    stats: [
      { value: "20+", label: "años liderando tecnología" },
      { value: "5", label: "continentes con proyectos entregados" },
      { value: "6.500", label: "tiendas en una sola plataforma" },
      { value: "2025", label: "Team of the Year, Valtech Global Awards" },
    ],
  },
};
