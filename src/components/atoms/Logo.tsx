import Image from "next/image";
import Link from "next/link";

const sizeClasses = {
  header: "h-10 w-auto sm:h-12 lg:h-14",
  footer: "h-8 w-auto lg:h-9",
};

export default function Logo({
  size = "header",
  href = "#inicio",
}: {
  size?: keyof typeof sizeClasses;
  href?: string;
}) {
  return (
    <Link href={href} className="shrink-0">
      <Image
        src="/exciclo-logo.png"
        alt="Exciclo"
        width={1328}
        height={362}
        priority={size === "header"}
        className={sizeClasses[size]}
      />
    </Link>
  );
}
