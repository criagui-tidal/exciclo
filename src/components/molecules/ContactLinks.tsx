import Button from "@/components/atoms/Button";

export default function ContactLinks() {
  return (
    <div className="flex min-w-[280px] flex-col gap-3.5">
      <Button href="https://wa.me/573244975093" variant="solid-light" external>
        Escribir por WhatsApp
      </Button>
      <Button href="mailto:cristian@exciclo.com" variant="outline-light" external>
        Enviar un correo
      </Button>
    </div>
  );
}
