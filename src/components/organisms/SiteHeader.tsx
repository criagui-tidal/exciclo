import Logo from "@/components/atoms/Logo";
import NavMenu from "@/components/molecules/NavMenu";

export default function SiteHeader() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-border px-6 sm:h-24 sm:px-10 lg:px-[120px]">
      <Logo />
      <NavMenu />
    </header>
  );
}
