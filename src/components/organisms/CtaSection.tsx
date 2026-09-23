import Heading from "@/components/atoms/Heading";
import ContactLinks from "@/components/molecules/ContactLinks";
import type { Content } from "@/content";
import { anchorId, type Locale } from "@/lib/i18n";

export default function CtaSection({
  content,
  locale,
}: {
  content: Content;
  locale: Locale;
}) {
  const cta = content.home.cta;

  return (
    <section
      id={anchorId("contact", locale)}
      className="scroll-mt-24 px-6 py-10 sm:px-10 lg:px-[120px]"
    >
      <div className="flex flex-col items-start justify-between gap-10 rounded-[28px] bg-accent px-8 py-14 text-white sm:px-12 md:flex-row md:items-center">
        <div className="flex max-w-[700px] flex-col gap-4">
          <Heading as="h2" tone="white">
            {cta.title}
          </Heading>
          <p className="m-0 text-lg leading-relaxed text-accent-tint">
            {cta.lead}
          </p>
          <p className="m-0 text-[15px] font-medium text-accent-tint">
            {cta.note}
          </p>
        </div>
        <ContactLinks labels={content.contact} />
      </div>
    </section>
  );
}
