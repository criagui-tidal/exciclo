import type { ReactNode } from "react";

// El ritmo horizontal del sitio vive aquí. Antes estaba repetido en cada
// organismo, que es justo donde se desincroniza en cuanto se añaden páginas.

const toneClasses = {
  base: "",
  // Mismo aspecto que `base`, pero queda fuera del separador automático de
  // abajo: lo usan los bloques que ya traen su propio contenedor con color
  // (StatementBand, MediaBand), donde una línea encima sobra.
  bare: "",
  alt: "bg-surface-alt border-y border-border",
  accent: "bg-accent text-white",
};

const spaceClasses = {
  sm: "py-10",
  md: "py-16",
  lg: "py-20",
};

export default function Section({
  id,
  tone = "base",
  space = "lg",
  className = "",
  children,
}: {
  id?: string;
  tone?: keyof typeof toneClasses;
  space?: keyof typeof spaceClasses;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      // `data-tone` es lo que lee la regla de globals.css para dibujar una
      // línea cuando dos secciones del mismo fondo quedan pegadas.
      data-tone={tone}
      className={`px-6 sm:px-10 lg:px-[120px] ${spaceClasses[space]} ${toneClasses[tone]} ${id ? "scroll-mt-24" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
