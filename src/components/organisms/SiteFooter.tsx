import Link from "next/link";
import Logo from "@/components/atoms/Logo";

const links = [
  { href: "mailto:cristian@exciclo.com", label: "cristian@exciclo.com" },
  { href: "https://wa.me/573244975093", label: "+57 324 497 5093" },
  {
    href: "https://www.linkedin.com/in/cristianaguirremontes/",
    label: "LinkedIn",
  },
];

export default function SiteFooter() {
  return (
    <footer className="flex flex-col gap-6 border-t border-border px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-[120px]">
      <div className="flex flex-col gap-1">
        <Logo size="footer" />
        <div className="text-sm text-muted">
          Cada ciclo, un éxito · Medellín, Colombia · Proyectos en toda
          Latinoamérica
        </div>
      </div>
      <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="no-underline">
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
