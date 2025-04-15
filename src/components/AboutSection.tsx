
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Group therapy session" 
                className="rounded-lg shadow-md h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Mental health professional" 
                className="rounded-lg shadow-md h-64 object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Community event" 
                className="rounded-lg shadow-md h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Mindfulness practice" 
                className="rounded-lg shadow-md h-64 object-cover mt-8"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <span className="text-samatva-blue font-semibold">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mt-2">Who We Are</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Samatva Awareness is a dedicated organization committed to mental health advocacy and support. Founded in 2015, we have been working tirelessly to break the stigma surrounding mental health and provide accessible resources to those in need.
            </p>
            <p className="text-gray-700 mb-6">
              Our team consists of experienced mental health professionals, psychologists, counselors, and passionate volunteers who are united by a common goal: to create a world where mental health is prioritized and everyone has access to the support they need.
            </p>
            <p className="text-gray-700 mb-6">
              We believe in a holistic approach to mental wellness that encompasses emotional, psychological, and social well-being. Through education, advocacy, and direct support services, we aim to make a meaningful difference in the lives of individuals and communities.
            </p>
            <Button className="bg-samatva-teal hover:bg-samatva-blue text-white">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
