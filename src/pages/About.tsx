
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import CtaSection from "@/components/CtaSection";

const About = () => {
  return (
    <div className="font-poppins min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-samatva-blue/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">About Us</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Learn about our mission, vision, and the dedicated team behind Samatva Awareness.
            </p>
          </div>
        </div>
        
        <AboutSection />
        <TeamSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
