import Heading from "@/components/atoms/Heading";
import ComparisonRow from "@/components/molecules/ComparisonRow";

const rows = [
  {
    label: "Tiempo hasta ver resultados",
    traditional: "Meses de propuestas y planeación",
    cycle: "4 semanas",
  },
  {
    label: "Precio",
    traditional: "Presupuestos abiertos que crecen",
    cycle: "USD 9.000 fijo por ciclo",
  },
  {
    label: "Qué recibe",
    traditional: "Informes y presentaciones",
    cycle: "Una solución funcionando",
  },
  {
    label: "Quién lo hace",
    traditional: "Equipos que cambian en el camino",
    cycle: "Experiencia senior de principio a fin",
  },
  {
    label: "Compromiso",
    traditional: "Contratos largos desde el inicio",
    cycle: "Usted decide ciclo a ciclo",
  },
];

export default function ComparisonSection() {
  return (
    <section className="flex flex-col gap-10 px-6 py-20 sm:px-10 lg:px-[120px]">
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <Heading as="h2" className="max-w-[720px]">
          Lo que antes solo tenían las grandes empresas, ahora a su alcance.
        </Heading>
        <p className="m-0 max-w-[380px] text-lg leading-relaxed text-body">
          Una fórmula basada en experiencia y conocimiento, no en horas
          facturables.
        </p>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
        <div className="min-w-[640px]">
          <div className="grid grid-cols-3 bg-surface-alt text-[13px] font-semibold uppercase tracking-[0.12em] text-muted sm:text-sm">
            <div className="px-4 py-4 sm:px-7 sm:py-5" />
            <div className="px-4 py-4 sm:px-7 sm:py-5">
              El camino tradicional
            </div>
            <div className="bg-accent px-4 py-4 text-white sm:px-7 sm:py-5">
              El Ciclo Exciclo
            </div>
          </div>
          {rows.map((row) => (
            <ComparisonRow key={row.label} {...row} />
          ))}
        </div>
      </div>
    </section>
  );
}
