
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="font-poppins min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-samatva-teal/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Reach out to us for support, information, or to schedule an appointment.
            </p>
          </div>
        </div>
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
