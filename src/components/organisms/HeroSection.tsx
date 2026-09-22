import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";
import CycleRing from "@/components/molecules/CycleRing";
import PriceBadge from "@/components/molecules/PriceBadge";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="grid grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-[120px] lg:py-0 lg:min-h-[760px]"
    >
      <div className="flex flex-col gap-7">
        <Eyebrow>Consultoría de IA aplicada a procesos</Eyebrow>
        <Heading as="h1">
          Experiencia de marcas globales.{" "}
          <span className="text-accent">Al alcance de su empresa.</span>
        </Heading>
        <p className="m-0 max-w-[560px] text-lg leading-relaxed text-body sm:text-xl">
          Durante 20 años construí tecnología para Ray-Ban, Versace y Comex.
          Hoy aplico esa experiencia a su negocio: en un ciclo de 4 semanas
          mejoramos y optimizamos sus procesos con inteligencia artificial, a
          precio fijo.
        </p>
        <div className="flex flex-wrap items-center gap-3.5">
          <Button href="#contacto">Agendar una conversación</Button>
          <Button href="#ciclo" variant="outline-dark">
            Cómo funciona el Ciclo
          </Button>
        </div>
      </div>
      <div className="relative flex items-center justify-center py-6 lg:h-[560px] lg:py-0">
        <CycleRing className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px]" />
        <PriceBadge className="absolute bottom-2 right-0 sm:bottom-6" />
      </div>
    </section>
  );
}
