
import { 
  Users, 
  UserPlus, 
  Calendar, 
  Briefcase, 
  PhoneCall, 
  BookOpen 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Individual Counseling",
      description: "One-on-one sessions with our experienced counselors to address personal challenges and mental health concerns.",
      icon: UserPlus,
      color: "bg-samatva-blue",
    },
    {
      title: "Group Therapy",
      description: "Supportive group settings where individuals can share experiences and learn from others facing similar challenges.",
      icon: Users,
      color: "bg-samatva-green",
    },
    {
      title: "Workshops & Seminars",
      description: "Educational events focused on various aspects of mental health, coping strategies, and personal growth.",
      icon: Calendar,
      color: "bg-samatva-teal",
    },
    {
      title: "Corporate Training",
      description: "Programs designed for workplaces to promote mental wellness, stress management, and healthier work environments.",
      icon: Briefcase,
      color: "bg-samatva-orange",
    },
    {
      title: "Crisis Support",
      description: "Immediate assistance for individuals experiencing acute mental health crises or emergencies.",
      icon: PhoneCall,
      color: "bg-samatva-blue",
    },
    {
      title: "Mental Health Education",
      description: "Resources and programs aimed at spreading awareness and understanding of mental health issues.",
      icon: BookOpen,
      color: "bg-samatva-green",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-samatva-blue font-semibold">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mt-2">
            How We Can Help You
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            We offer a comprehensive range of mental health services designed to support individuals at every stage of their mental wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105"
            >
              <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
