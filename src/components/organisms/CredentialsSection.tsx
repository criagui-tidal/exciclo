import Eyebrow from "@/components/atoms/Eyebrow";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import StatsGrid from "@/components/molecules/StatsGrid";
import type { Content } from "@/content";

export default function CredentialsSection({ content }: { content: Content }) {
  const { credentials } = content.home;

  return (
    <Section className="grid grid-cols-1 gap-10 lg:grid-cols-12">
      <div className="flex flex-col gap-3.5 lg:col-span-5">
        <Eyebrow>{credentials.eyebrow}</Eyebrow>
        <Heading as="h2">{credentials.title}</Heading>
      </div>
      <div className="lg:col-span-7">
        <StatsGrid stats={credentials.stats} />
      </div>
    </Section>
  );
}
