
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-samatva-blue to-samatva-teal">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-6">
            <HeartHandshake size={60} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
            Take the First Step Towards Mental Wellness Today
          </h2>
          
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Whether you're seeking support for yourself or someone you care about, our team is here to help. Your mental health journey matters to us.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-samatva-blue hover:bg-samatva-light text-lg px-8 py-6">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-samatva-blue text-lg px-8 py-6">
              Learn About Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
