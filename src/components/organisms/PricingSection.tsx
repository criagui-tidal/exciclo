import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";
import FeatureList from "@/components/molecules/FeatureList";

export default function PricingSection() {
  return (
    <section
      id="precio"
      className="flex flex-col gap-10 px-6 py-20 sm:px-10 lg:px-[120px]"
    >
      <Heading as="h2">Un precio claro, desde el primer día.</Heading>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="flex flex-col gap-6 rounded-[20px] border-[1.5px] border-ink bg-surface p-8 sm:p-10 lg:col-span-7">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="flex flex-col gap-1.5">
              <div className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                Ciclo de Éxito
              </div>
              <div className="font-serif text-5xl font-bold leading-none sm:text-[64px]">
                USD 9.000
              </div>
            </div>
            <div className="text-[17px] text-body sm:pb-2">
              por ciclo de 4 semanas
            </div>
          </div>
          <FeatureList />
          <Button href="#contacto" className="self-start">
            Empezar mi ciclo
          </Button>
        </div>
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="flex flex-1 flex-col gap-2.5 rounded-[20px] bg-surface-alt p-8">
            <div className="font-serif text-2xl font-bold">
              Sin sorpresas
            </div>
            <p className="m-0 text-[17px] leading-relaxed text-body">
              Si el problema es más grande, se lo decimos con datos en la
              semana 2. Usted decide si continuamos con otro ciclo, al mismo
              precio.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-2.5 rounded-[20px] bg-accent p-8 text-white">
            <div className="text-sm font-semibold uppercase tracking-[0.12em] text-accent-tint">
              Después del ciclo
            </div>
            <div className="font-serif text-2xl font-bold">
              Plan Evolución
            </div>
            <p className="m-0 text-[17px] leading-relaxed">
              Soporte y mejora continua mensual, por el 20% del valor del
              ciclo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
