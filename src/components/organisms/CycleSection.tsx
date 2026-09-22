import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import CycleCard from "@/components/molecules/CycleCard";

const cards = [
  {
    index: "01",
    numberColor: "#1AA0AB",
    week: "SEMANA 1",
    title: "Diagnóstico",
    description:
      "Entendemos su negocio y encontramos los procesos que más tiempo y dinero le cuestan.",
  },
  {
    index: "02",
    numberColor: "#58BD8C",
    week: "SEMANA 2",
    title: "Diseño y decisión",
    description:
      "Proponemos la solución con su retorno esperado. Usted aprueba el alcance antes de construir.",
  },
  {
    index: "03",
    numberColor: "#FBBD0C",
    week: "SEMANAS 3 Y 4",
    title: "MVP funcionando",
    description:
      "Implementamos la solución con IA, la dejamos en marcha y capacitamos a su equipo.",
  },
  {
    index: "∞",
    numberColor: "#DFF1F2",
    week: "DESPUÉS",
    title: "Plan Evolución",
    description:
      "Soporte y mejora continua mensual, para que la solución crezca con su negocio.",
    highlight: true,
  },
];

export default function CycleSection() {
  return (
    <section
      id="ciclo"
      className="flex flex-col gap-10 px-6 py-20 sm:px-10 lg:px-[120px]"
    >
      <div className="flex max-w-[760px] flex-col gap-3.5">
        <Eyebrow>El Ciclo de Éxito</Eyebrow>
        <Heading as="h2">
          Diagnosticar bien. Decidir juntos. Construir rápido.
        </Heading>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <CycleCard key={card.index} {...card} />
        ))}
      </div>
      <div className="flex flex-col items-start gap-4 rounded-2xl bg-surface-alt p-6 sm:flex-row sm:items-center sm:gap-6">
        <div className="whitespace-nowrap font-serif text-[22px] font-bold">
          ¿Y si el problema es más grande?
        </div>
        <div className="text-[17px] leading-snug text-body">
          Se lo mostramos con datos. Entregamos funcionando la parte más
          crítica y usted decide si seguimos con otro ciclo, con el mismo
          formato y el mismo precio.
        </div>
      </div>
    </section>
  );
}
