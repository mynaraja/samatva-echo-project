
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-poppins min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
