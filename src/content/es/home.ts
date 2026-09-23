// La home en español, en el orden en que se renderiza. Cada clave de primer
// nivel es una sección del HomeTemplate.

export const home = {
  meta: {
    title:
      "Exciclo | Optimización empresarial con tecnología e IA · Ciclos de 4 semanas",
    description:
      "Convertimos complejidad empresarial en capacidad para crecer. Optimizamos operaciones, tecnología e IA para que su empresa reduzca costes y obtenga resultados medibles. 20+ años de experiencia enterprise.",
  },

  hero: {
    eyebrow: "Operaciones · Tecnología · IA",
    titleLead: "Convierta la complejidad en",
    titleAccent: "capacidad para crecer.",
    paragraphs: [
      "Su empresa no necesita más tecnología por sí misma. Necesita que la tecnología, las operaciones y la IA trabajen juntas para generar resultados.",
      "Exciclo identifica dónde se está perdiendo valor y convierte las oportunidades prioritarias en soluciones funcionando.",
    ],
    note: "20+ años de experiencia empresarial · Ciclos de 4 semanas · Precio fijo",
    ctaPrimary: "Agendar una conversación",
    ctaSecondary: "Cómo funciona el Ciclo",
  },

  brands: {
    label: "Experiencia construida junto a marcas como",
    items: ["Ray-Ban", "Versace", "Persol", "Sunglass Hut", "Kering", "Comex"],
  },

  problem: {
    eyebrow: "El punto de partida",
    title: "La complejidad crece. El presupuesto también. El valor no siempre.",
    paragraphs: [
      "Las empresas han acumulado sistemas, proveedores, procesos, integraciones y nuevas herramientas de IA durante años.",
      "El resultado puede ser una operación más difícil de gestionar, tecnología más costosa y equipos que dedican demasiado tiempo a mantener lo existente.",
      "Exciclo ayuda a encontrar dónde está esa fricción y qué hacer con ella.",
    ],
    cards: [
      {
        title: "Operaciones",
        body: "Procesos manuales, lentos o costosos que limitan la capacidad del equipo.",
        color: "#1AA0AB",
      },
      {
        title: "Tecnología",
        body: "Sistemas, integraciones, proveedores y costes que se han acumulado con el tiempo.",
        color: "#58BD8C",
      },
      {
        title: "IA",
        body: "Oportunidades que parecen prometedoras, pero necesitan un caso de negocio, datos y una forma concreta de medir el resultado.",
        color: "#FBBD0C",
      },
    ],
    closing: "No empezamos por la herramienta. Empezamos por el problema.",
  },

  pillars: {
    eyebrow: "Qué resolvemos",
    title: "Tres problemas. Una forma de resolverlos.",
    outcomeLabel: "Resultado",
    items: [
      {
        index: "01",
        color: "#1AA0AB",
        title: "Optimizar operaciones",
        body: "Encontramos procesos que consumen demasiado tiempo, dinero o capacidad y rediseñamos cómo deberían funcionar.",
        outcome:
          "Más capacidad, menos trabajo manual y operaciones más eficientes.",
      },
      {
        index: "02",
        color: "#58BD8C",
        title: "Simplificar tecnología",
        body: "Identificamos complejidad, duplicación, integraciones innecesarias y oportunidades de modernización.",
        outcome:
          "Menos fricción, mejor arquitectura y mayor control sobre la inversión tecnológica.",
      },
      {
        index: "03",
        color: "#FBBD0C",
        title: "Convertir IA en valor",
        body: "Identificamos dónde la IA puede producir un impacto real y construimos los primeros casos de uso con métricas claras.",
        outcome: "Soluciones de IA conectadas al negocio, no pilotos aislados.",
      },
    ],
    cta: "Ver los problemas que resolvemos",
  },

  differentiator: {
    title: "Experiencia enterprise. Sin la maquinaria de una gran consultora.",
    lead: "Durante más de 20 años hemos trabajado en transformaciones tecnológicas para marcas y organizaciones globales. Exciclo pone esa experiencia directamente a disposición de su empresa.",
    points: [
      "Sin equipos junior para preparar el diagnóstico.",
      "Sin meses de propuestas antes de empezar.",
      "Sin contratos abiertos desde el primer día.",
    ],
    closing: "Un problema. Un ciclo. Un resultado.",
    cta: "Conocer el Ciclo",
  },

  cycle: {
    eyebrow: "El Ciclo Exciclo",
    title: "Entender. Priorizar. Resolver.",
    lead: "4 semanas para convertir una oportunidad empresarial en una solución funcionando.",
    cards: [
      {
        index: "01",
        color: "#1AA0AB",
        week: "SEMANA 1",
        title: "Entender",
        description:
          "Analizamos el negocio, la operación, los procesos, los datos y la tecnología involucrada. Identificamos dónde existe mayor oportunidad de impacto.",
        highlight: false,
      },
      {
        index: "02",
        color: "#58BD8C",
        week: "SEMANA 2",
        title: "Priorizar",
        description:
          "Evaluamos las oportunidades según impacto, inversión, viabilidad y riesgo. Diseñamos la solución y acordamos qué merece ser construido.",
        highlight: false,
      },
      {
        index: "03",
        color: "#FBBD0C",
        week: "SEMANAS 3 Y 4",
        title: "Resolver",
        description:
          "Construimos e implementamos la primera solución. Su equipo la prueba, recibe capacitación y comienza a utilizarla.",
        highlight: false,
      },
      {
        index: "∞",
        color: "#DFF1F2",
        week: "DESPUÉS",
        title: "Exciclo Continuo",
        description:
          "Un ciclo resuelve una oportunidad. Varios ciclos transforman una operación. Cada mes, la siguiente prioridad.",
        highlight: true,
      },
    ],
    footnoteTitle: "Al final del ciclo",
    footnoteBody:
      "No recibe solamente un informe. Recibe una solución funcionando y una decisión clara sobre el siguiente paso.",
    cta: "Empezar un ciclo",
    // Rótulos del anillo del hero. Son cuatro porque el anillo tiene cuatro
    // cuadrantes: "Resolver" ocupa las semanas 3 y 4.
    ring: {
      ariaLabel: "El Ciclo Exciclo: cuatro semanas",
      weeks: [
        { title: "Semana 1", subtitle: "Entender" },
        { title: "Semana 2", subtitle: "Priorizar" },
        { title: "Semana 3", subtitle: "Resolver" },
        { title: "Semana 4", subtitle: "Funcionando" },
      ],
      unit: "SEMANAS",
      tagline: "Cada ciclo, un éxito",
    },
  },

  deliverable: {
    lead: "No entregamos recomendaciones para que otro las implemente.",
    emphasis: "Entregamos una primera solución funcionando.",
  },

  pricing: {
    eyebrow: "Inversión",
    title: "Un precio claro. Un ciclo definido.",
    amount: "USD 9.000",
    per: "por ciclo de 4 semanas",
    includesLabel: "Incluye",
    includes: [
      "Diagnóstico de negocio y operación",
      "Identificación y priorización de oportunidades",
      "Diseño de la solución",
      "Primera solución implementada y funcionando",
      "Capacitación del equipo",
      "Recomendación de evolución",
    ],
    note: "Sin horas facturables. Sin presupuestos abiertos. Sin sorpresas.",
    cta: "Agendar conversación",
    asideTitle: "Si el problema es más grande",
    asideBody:
      "Se lo decimos con datos en la semana 2. Entregamos funcionando la parte más crítica y usted decide si sigue otro ciclo, con el mismo formato y el mismo precio.",
    continuousEyebrow: "Después del primer ciclo",
    continuousTitle: "Exciclo Continuo",
    continuousBody:
      "Un ciclo resuelve una oportunidad. Varios ciclos transforman una operación. Cada mes, la siguiente prioridad, sin contratos largos y sin comprometer todo el roadmap desde el principio.",
    continuousPrice: "20% del valor del ciclo, mensual",
  },

  credentials: {
    eyebrow: "Construido a escala enterprise",
    title: "La experiencia no se improvisa. Se acumula.",
    stats: [
      { value: "20+", label: "años liderando tecnología" },
      { value: "5", label: "continentes con proyectos entregados" },
      { value: "6.500", label: "tiendas en una sola plataforma" },
      { value: "2025", label: "Team of the Year, Valtech Global Awards" },
    ],
  },

  cases: {
    eyebrow: "Casos",
    title: "De complejidad tecnológica a plataforma empresarial.",
    lead: "Proyectos entregados a escala real, con la complejidad comercial y operacional que tiene un negocio grande.",
    cta: "Ver los casos",
  },

  idealClient: {
    eyebrow: "Con quién trabajamos",
    title: "¿Es Exciclo para su empresa?",
    lead: "Trabajamos mejor con organizaciones que:",
    items: [
      "tienen operaciones complejas",
      "tienen una inversión tecnológica significativa",
      "han acumulado sistemas y proveedores",
      "están buscando aumentar productividad",
      "están explorando IA más allá de pilotos",
      "necesitan demostrar retorno de sus inversiones",
      "quieren avanzar sin iniciar una transformación de años",
    ],
    closingLead: "No necesita tener claro qué tecnología necesita.",
    closingEmphasis: "Necesita tener claro qué problema quiere resolver.",
    cta: "Cuéntenos el problema",
  },

  about: {
    eyebrow: "Quién está detrás",
    title: "Experiencia construida a escala enterprise.",
    paragraphs: [
      "Soy Cristian Aguirre Montes, arquitecto y líder de transformación tecnológica con más de 20 años trabajando con organizaciones y marcas globales.",
      "He liderado equipos, arquitecturas y transformaciones en Europa, Latinoamérica y otros mercados, desde la creación de centros tecnológicos hasta plataformas digitales utilizadas por miles de tiendas.",
      "En Exciclo llevo esa experiencia directamente a empresas de la región. Sin capas innecesarias. Sin equipos intercambiables. Directamente con la experiencia que necesita el problema.",
    ],
    imageAlt: "Cristian Aguirre Montes, fundador de Exciclo",
    cta: "Conocer mi experiencia",
  },

  signature: {
    lead: "No vendemos tecnología.",
    emphasis: "Resolvemos problemas empresariales con ella.",
  },

  cta: {
    title: "¿Dónde está perdiendo valor su empresa?",
    lead: "Cuéntenos el problema. En 30 minutos determinaremos si existe una oportunidad concreta para trabajar juntos y cuál debería ser el siguiente paso.",
    note: "Sin compromiso. Sin propuesta genérica. Hablamos de un problema real.",
  },
};
