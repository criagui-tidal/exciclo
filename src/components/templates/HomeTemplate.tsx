import SiteHeader from "@/components/organisms/SiteHeader";
import HeroSection from "@/components/organisms/HeroSection";
import BrandsBar from "@/components/organisms/BrandsBar";
import ComparisonSection from "@/components/organisms/ComparisonSection";
import CycleSection from "@/components/organisms/CycleSection";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import PricingSection from "@/components/organisms/PricingSection";
import CtaSection from "@/components/organisms/CtaSection";
import SiteFooter from "@/components/organisms/SiteFooter";

export default function HomeTemplate() {
  return (
    <div className="flex flex-col">
      <SiteHeader />
      <HeroSection />
      <BrandsBar />
      <ComparisonSection />
      <CycleSection />
      <ExperienceSection />
      <PricingSection />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
