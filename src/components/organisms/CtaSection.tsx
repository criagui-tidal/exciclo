import Heading from "@/components/atoms/Heading";
import ContactLinks from "@/components/molecules/ContactLinks";

export default function CtaSection() {
  return (
    <section id="contacto" className="px-6 py-10 sm:px-10 lg:px-[120px]">
      <div className="flex flex-col items-start justify-between gap-10 rounded-[28px] bg-accent px-8 py-14 text-white sm:px-12 md:flex-row md:items-center">
        <div className="flex max-w-[700px] flex-col gap-4">
          <Heading as="h2" tone="white">
            Su próximo ciclo de éxito empieza con una conversación.
          </Heading>
          <p className="m-0 text-lg leading-relaxed text-accent-tint">
            30 minutos para entender su negocio y ver si Exciclo es para
            usted.
          </p>
        </div>
        <ContactLinks />
      </div>
    </section>
  );
}
