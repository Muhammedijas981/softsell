import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Turn Unused Software into Cash
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            SoftSell helps businesses recoup costs by reselling unused software
            licenses at competitive prices. Fast, secure, and simple.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sell My Licenses
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="btn btn-light"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="license-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex mb-2">
              <div className="license-icon">✓</div>
              <span className="license-name">Adobe Creative Cloud</span>
            </div>
            <div className="license-value">Estimated value: $350</div>
          </motion.div>
          <motion.div
            className="license-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex mb-2">
              <div className="license-icon">✓</div>
              <span className="license-name">Microsoft Office 365</span>
            </div>
            <div className="license-value">Estimated value: $220</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
