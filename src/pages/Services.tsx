
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";

const Services = () => {
  return (
    <div className="font-poppins min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-samatva-green/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">Our Services</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the comprehensive mental health services we offer to individuals and organizations.
            </p>
          </div>
        </div>
        
        <ServicesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
