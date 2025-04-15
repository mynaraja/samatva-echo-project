
import { Linkedin, Twitter, Mail } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Ananya Sharma",
      role: "Clinical Psychologist, Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "With over 15 years of experience in clinical psychology, Dr. Sharma founded Samatva Awareness with a vision to make mental health support accessible to all.",
    },
    {
      name: "Dr. Rajat Mehta",
      role: "Psychiatrist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Specializing in mood disorders and anxiety, Dr. Mehta brings a compassionate approach to psychiatric care with a focus on holistic treatment methods.",
    },
    {
      name: "Priya Desai",
      role: "Counselor & Therapist",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Priya specializes in cognitive behavioral therapy and has helped hundreds of clients navigate through depression, anxiety, and life transitions.",
    },
    {
      name: "Arjun Nair",
      role: "Community Outreach Director",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "With a background in social work, Arjun leads our community initiatives and works tirelessly to spread mental health awareness across India.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-samatva-blue font-semibold">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mt-2">
            Meet Our Experts
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Our team of dedicated professionals brings expertise, compassion, and a genuine commitment to improving mental health outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-samatva-blue font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-samatva-blue transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-samatva-blue transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-samatva-blue transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
