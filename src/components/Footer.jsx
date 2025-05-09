import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo animate-fade-in">
              <span className="text-secondary">Soft</span>
              <span className="text-primary">Sell</span>
            </div>
            <p className="footer-description animate-slide-up delay-100">
              Maximize the value of your unused software licenses with our
              secure, efficient resale platform.
            </p>
            <div className="footer-social animate-slide-up delay-200">
              <a href="#" aria-label="Twitter" className="hover-scale">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover-scale">
                <FaLinkedin size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover-scale">
                <FaFacebook size={20} />
              </a>
              <a href="#" aria-label="Email" className="hover-scale">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links-section animate-slide-up delay-300">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="animated-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="animated-underline">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="animated-underline">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="animated-underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="animated-underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-contact-section animate-slide-up delay-400">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact">
              <p className="contact-item">
                <span className="contact-label">Address:</span>
                <span className="contact-value">
                  123 Software Lane, San Francisco, CA 94107
                </span>
              </p>
              <p className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">info@softsell.com</span>
              </p>
              <p className="contact-item">
                <span className="contact-label">Phone:</span>
                <span className="contact-value">(555) 123-4567</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom animate-fade-in delay-500">
          <p className="copyright">
            &copy; {new Date().getFullYear()} SoftSell. Made with{" "}
            <FaHeart className="heart-icon" /> All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="animated-underline">
              Privacy Policy
            </a>
            <a href="#" className="animated-underline">
              Terms of Service
            </a>
            <a href="#" className="animated-underline">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
