
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-samatva-light to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight mb-6">
              <span className="text-samatva-blue">Mental Health</span> Matters. <br />
              <span className="text-samatva-teal">Your Wellbeing</span> Matters.
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              At Samatva Awareness, we're committed to breaking the stigma around mental health and providing compassionate support when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-samatva-blue hover:bg-samatva-teal text-white text-lg px-8 py-6">
                Talk to Someone Now
              </Button>
              <Button variant="outline" className="border-samatva-blue text-samatva-blue hover:bg-samatva-blue hover:text-white text-lg px-8 py-6">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-samatva-green/20 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 md:w-40 md:h-40 bg-samatva-blue/20 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
                alt="Mental health support" 
                className="rounded-lg shadow-xl object-cover w-full h-[400px] md:h-[500px] relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
