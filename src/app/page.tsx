import { Hero } from "@/components/sections/hero";
import { DashboardSection } from "@/components/dashboard/DashboardSection";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <DashboardSection />
      {/* <Logos /> */}
      <FeaturesSection />
      {/* <Stats /> */}
      {/* <Architecture /> */}
      <TestimonialsSection />
      <PricingSection />
      {/* <FAQ /> */}
    </>
  );
}

