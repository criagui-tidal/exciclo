import Button from "@/components/atoms/Button";
import { contact } from "@/lib/site";

export default function ContactLinks({
  labels,
  tone = "light",
}: {
  labels: { whatsapp: string; email: string };
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex min-w-[280px] flex-col gap-3.5">
      <Button
        href={contact.whatsapp}
        variant={tone === "light" ? "solid-light" : "primary"}
        external
      >
        {labels.whatsapp}
      </Button>
      <Button
        href={contact.email}
        variant={tone === "light" ? "outline-light" : "outline-dark"}
        external
      >
        {labels.email}
      </Button>
    </div>
  );
}
