import Image from "next/image";

import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import StatsGrid from "@/components/molecules/StatsGrid";

export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="grid grid-cols-1 gap-10 px-6 py-20 sm:px-10 lg:grid-cols-12 lg:gap-8 lg:px-[120px]"
    >
      <div className="relative h-[320px] overflow-hidden rounded-[20px] bg-[#E1E6E5] lg:col-span-5 lg:h-[600px]">
        <Image
          src="/mifoto.jpg"
          alt="Cristian Aguirre Montes, fundador de Exciclo"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-6 lg:col-span-7 lg:pl-8">
        <Eyebrow>Quién está detrás</Eyebrow>
        <Heading as="h2">
          Veinte años construyendo tecnología para marcas globales. Ahora,
          para la suya.
        </Heading>
        <p className="m-0 text-lg leading-relaxed text-body">
          Soy Cristian Aguirre Montes. Nací en Chile, construí mi carrera en
          Europa y hoy vivo en Medellín con mi familia. Dirigí un centro
          tecnológico en Málaga al servicio de marcas como Ray-Ban y Versace,
          y en Valtech lideré la primera plataforma MACH 100%
          latinoamericana, para Comex en México.
        </p>
        <p className="m-0 text-lg leading-relaxed text-body">
          Fundé Exciclo para que las empresas de la región accedan a ese
          mismo nivel de experiencia, sin esperar meses ni pagar tarifas de
          gran consultora.
        </p>
        <StatsGrid />
      </div>
    </section>
  );
}
