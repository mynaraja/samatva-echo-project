
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-samatva-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Samatva Awareness</h3>
            <p className="text-gray-300 mb-4">
              Dedicated to promoting mental health awareness and providing support to those in need. Creating a world where mental health is prioritized and stigma-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-samatva-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-samatva-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-samatva-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-samatva-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-samatva-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-samatva-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-samatva-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-samatva-teal transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-samatva-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-samatva-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-samatva-teal transition-colors">
                Individual Counseling
              </li>
              <li className="text-gray-300 hover:text-samatva-teal transition-colors">
                Group Therapy
              </li>
              <li className="text-gray-300 hover:text-samatva-teal transition-colors">
                Workshops & Seminars
              </li>
              <li className="text-gray-300 hover:text-samatva-teal transition-colors">
                Corporate Training
              </li>
              <li className="text-gray-300 hover:text-samatva-teal transition-colors">
                Crisis Support
              </li>
              <li className="text-gray-300 hover:text-samatva-teal transition-colors">
                Mental Health Education
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-samatva-teal mt-1" />
                <p className="text-gray-300">
                  123 Mental Health Avenue, Wellness District, 
                  Mumbai, Maharashtra, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-samatva-teal" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-samatva-teal transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-samatva-teal" />
                <a href="mailto:info@samatvaawareness.in" className="text-gray-300 hover:text-samatva-teal transition-colors">
                  info@samatvaawareness.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Samatva Awareness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
