import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    // Check if user's system prefers dark mode
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });

  useEffect(() => {
    // Update the theme when isDarkMode changes
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img
            src={isDarkMode ? logo1 : logo}
            alt="Logo"
            height={150}
            width={150}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <a href="#how-it-works" className="nav-link">
            How It Works
          </a>
          <a href="#why-choose-us" className="nav-link">
            Why Choose Us
          </a>
          <a href="#testimonials" className="nav-link">
            Testimonials
          </a>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="theme-toggle-btn"
            aria-label="Toggle dark mode"
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <a href="#contact" className="btn btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <div className="navbar-mobile-button">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-mobile-menu container"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.a
              href="#how-it-works"
              variants={itemVariants}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              How It Works
            </motion.a>
            <motion.a
              href="#why-choose-us"
              variants={itemVariants}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Why Choose Us
            </motion.a>
            <motion.a
              href="#testimonials"
              variants={itemVariants}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Testimonials
            </motion.a>
            <motion.a
              href="#contact"
              variants={itemVariants}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
            <button
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                setIsOpen(false);
              }}
              className="theme-toggle-btn mobile-theme-toggle"
              aria-label="Toggle dark mode"
              title={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
            <a
              href="#contact"
              className="btn btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
