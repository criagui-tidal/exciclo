import type { ReactNode } from "react";

import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";

// Encabezado de sección a dos columnas. Antes cada organismo resolvía esto con
// `justify-between` y dos `max-w`, y en pantallas anchas el resultado era un
// título estrecho, un párrafo estrecho y un hueco muerto enorme en medio.
// Con una rejilla de 12 el reparto es fijo: 6 para el titular, 5 para el
// cuerpo, y el aire queda entre ambos en lugar de repartirse por los lados.

export default function SectionHeader({
  eyebrow,
  title,
  children,
  align = "start",
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  // `end` alinea el cuerpo con la última línea del titular; sirve cuando el
  // texto de apoyo es corto.
  align?: "start" | "end";
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 ${
        align === "end" ? "lg:items-end" : ""
      }`}
    >
      <div className="flex flex-col gap-3.5 lg:col-span-6">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Heading as="h2">{title}</Heading>
      </div>
      {children ? (
        <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8">
          {children}
        </div>
      ) : null}
    </div>
  );
}
