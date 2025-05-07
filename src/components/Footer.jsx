import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* First column - Brand & Social */}
          <div>
            <div className="footer-logo">
              <span className="text-secondary">Soft</span>
              <span className="text-primary">Sell</span>
            </div>
            <p className="footer-description">
              Maximize the value of your unused software licenses with our
              secure, efficient resale platform.
            </p>
            <div className="footer-social">
              <a href="#">
                <FaTwitter size={20} />
              </a>
              <a href="#">
                <FaLinkedin size={20} />
              </a>
              <a href="#">
                <FaFacebook size={20} />
              </a>
              <a href="#">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Second column - Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="#why-choose-us">Why Choose Us</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Third column - Contact Info */}
          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <address className="footer-contact">
              <p>123 Software Lane</p>
              <p>San Francisco, CA 94107</p>
              <p className="mt-2">info@softsell.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
