import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";

// Cierre de página interior: una idea, una frase de apoyo y una salida hacia
// el ciclo o la conversación.

export default function ClosingBlock({
  title,
  body,
  cta,
  href,
}: {
  title: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <Section space="md">
      <div className="flex flex-col items-start gap-6 rounded-[28px] border-[1.5px] border-ink bg-surface px-8 py-10 sm:px-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-[720px] flex-col gap-3">
          <Heading as="h2">{title}</Heading>
          <p className="m-0 text-lg leading-relaxed text-body">{body}</p>
        </div>
        <Button href={href} className="shrink-0">
          {cta}
        </Button>
      </div>
    </Section>
  );
}
