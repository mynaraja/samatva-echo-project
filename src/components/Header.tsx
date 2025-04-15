
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-samatva-teal font-bold text-2xl font-montserrat">Samatva</span>
          <span className="text-samatva-blue font-medium">Awareness</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium text-samatva-dark hover:text-samatva-teal transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium text-samatva-dark hover:text-samatva-teal transition-colors">
            About Us
          </Link>
          <Link to="/services" className="font-medium text-samatva-dark hover:text-samatva-teal transition-colors">
            Services
          </Link>
          <Link to="/events" className="font-medium text-samatva-dark hover:text-samatva-teal transition-colors">
            Events
          </Link>
          <Link to="/blog" className="font-medium text-samatva-dark hover:text-samatva-teal transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="font-medium text-samatva-dark hover:text-samatva-teal transition-colors">
            Contact
          </Link>
        </nav>

        {/* Contact Button */}
        <Button className="hidden md:flex bg-samatva-blue hover:bg-samatva-teal text-white">
          Get Help Now
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="font-medium text-samatva-dark hover:text-samatva-teal transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-samatva-dark hover:text-samatva-teal transition-colors py-2"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="font-medium text-samatva-dark hover:text-samatva-teal transition-colors py-2"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/events" 
              className="font-medium text-samatva-dark hover:text-samatva-teal transition-colors py-2"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link 
              to="/blog" 
              className="font-medium text-samatva-dark hover:text-samatva-teal transition-colors py-2"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-samatva-dark hover:text-samatva-teal transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            <Button 
              className="w-full bg-samatva-blue hover:bg-samatva-teal text-white mt-2"
              onClick={toggleMenu}
            >
              Get Help Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
