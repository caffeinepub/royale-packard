import AboutSection from "../components/sections/AboutSection";
import CTASection from "../components/sections/CTASection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import InteriorSection from "../components/sections/InteriorSection";
import ProcessSection from "../components/sections/ProcessSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ServicesSection from "../components/sections/ServicesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhyChooseSection from "../components/sections/WhyChooseSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <InteriorSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
