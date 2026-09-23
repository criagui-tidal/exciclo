import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import ServiceCard from "@/components/molecules/ServiceCard";
import SectionHeader from "@/components/molecules/SectionHeader";
import ServiceIndex from "@/components/molecules/ServiceIndex";
import type { Content } from "@/content";

// El catálogo concreto, debajo de los tres pilares. Los pilares dicen a qué
// nivel se trabaja; esto demuestra que detrás hay oficio, y da la cola larga
// de búsquedas que los pilares por sí solos no capturan.
export default function CatalogSection({ content }: { content: Content }) {
  const labels = content.solve.catalog;

  return (
    <Section className="flex flex-col gap-14">
      <SectionHeader eyebrow={labels.eyebrow} title={labels.title} align="end">
        <p className="m-0 text-lg leading-relaxed text-body">{labels.lead}</p>
      </SectionHeader>

      <ServiceIndex groups={content.catalog} />

      {content.catalog.map((group) => (
        <div
          key={group.id}
          id={group.id}
          className={`flex scroll-mt-24 flex-col gap-8 ${
            group.featured
              ? "rounded-[28px] bg-surface-alt p-7 sm:p-10 lg:p-12"
              : ""
          }`}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="flex flex-col gap-3.5 lg:col-span-6">
              {group.featured ? (
                <Eyebrow>{labels.featuredEyebrow}</Eyebrow>
              ) : null}
              <Heading as="h3" className="text-[26px] lg:text-[32px]">
                {group.title}
              </Heading>
            </div>
            <p className="m-0 text-lg leading-relaxed text-body lg:col-span-5 lg:col-start-8">
              {group.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.services.map((service) => (
              <ServiceCard
                key={service.problem}
                service={service}
                problemLabel={labels.problemLabel}
                solutionLabel={labels.solutionLabel}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="flex flex-col items-start gap-4 rounded-2xl bg-surface-alt p-7 lg:flex-row lg:items-center lg:gap-8">
        <div className="shrink-0 font-display text-[22px] font-bold">
          {labels.closingTitle}
        </div>
        <div className="text-[17px] leading-snug text-body">
          {labels.closingBody}
        </div>
      </div>
    </Section>
  );
}
