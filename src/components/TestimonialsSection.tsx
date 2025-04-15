
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Samatva Awareness has been a lifeline for me. The counseling sessions helped me navigate a difficult period in my life with compassion and professional guidance.",
      author: "Meera K.",
      title: "Client",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      quote: "The workshops conducted by Samatva have transformed our workplace culture. Our team now has a better understanding of mental health and supports each other more effectively.",
      author: "Vikram S.",
      title: "HR Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      quote: "As a parent, I was struggling to understand my teenager's anxiety. The family counseling at Samatva provided us with tools to communicate better and support each other.",
      author: "Neha P.",
      title: "Parent",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-samatva-teal/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-samatva-blue font-semibold">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mt-2">
            What People Say About Us
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Read how our services have positively impacted the lives of individuals and organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="absolute top-4 left-4 text-samatva-blue/20">
              <Quote size={60} />
            </div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                {testimonials[currentIndex].quote}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                  <p className="text-samatva-blue">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-samatva-blue hover:bg-samatva-blue hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-samatva-blue hover:bg-samatva-blue hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-samatva-blue" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
