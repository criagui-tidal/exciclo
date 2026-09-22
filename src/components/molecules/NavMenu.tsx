import NavLink from "@/components/atoms/NavLink";
import Button from "@/components/atoms/Button";

const links = [
  { href: "#ciclo", label: "El Ciclo" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#precio", label: "Precio" },
];

export default function NavMenu() {
  return (
    <nav className="flex items-center gap-10">
      <div className="hidden items-center gap-10 md:flex">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </div>
      <Button href="#contacto" size="md">
        Agendar 30 minutos
      </Button>
    </nav>
  );
}
