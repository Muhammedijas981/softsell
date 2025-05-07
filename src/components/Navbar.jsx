import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <span className="text-secondary">Soft</span>
          <span className="text-primary">Sell</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <a href="#how-it-works" className="text-gray">
            How It Works
          </a>
          <a href="#why-choose-us" className="text-gray">
            Why Choose Us
          </a>
          <a href="#testimonials" className="text-gray">
            Testimonials
          </a>
          <a href="#contact" className="btn btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <div className="navbar-mobile-button">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="navbar-mobile-menu container">
          <a
            href="#how-it-works"
            className="text-gray"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#why-choose-us"
            className="text-gray"
            onClick={() => setIsOpen(false)}
          >
            Why Choose Us
          </a>
          <a
            href="#testimonials"
            className="text-gray"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="btn btn-primary text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
