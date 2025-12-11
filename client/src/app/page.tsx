import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesPreview from "@/components/ServicesPreview";
import ProcessSection from "@/components/ProcessSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesPreview />
      <ProcessSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
