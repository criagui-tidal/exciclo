import CheckIcon from "@/components/atoms/CheckIcon";

const features = [
  "Diagnóstico de su negocio y sus procesos",
  "Diseño de la solución con retorno esperado",
  "MVP con IA implementado y funcionando",
  "Capacitación de su equipo",
];

export default function FeatureList() {
  return (
    <div className="grid grid-cols-1 gap-3.5 text-[17px] leading-snug sm:grid-cols-2 sm:gap-x-6">
      {features.map((feature) => (
        <div key={feature} className="flex items-start gap-2.5">
          <CheckIcon />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}
