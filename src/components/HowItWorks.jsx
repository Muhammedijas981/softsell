import React from "react";
import { motion } from "framer-motion";
import { FaUpload, FaCalculator, FaMoneyBillWave } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUpload className="step-icon" />,
      title: "Upload Your License",
      description:
        "Submit your software license details through our secure portal.",
    },
    {
      icon: <FaCalculator className="step-icon" />,
      title: "Get a Valuation",
      description:
        "Our algorithm calculates the best market price for your unused licenses.",
    },
    {
      icon: <FaMoneyBillWave className="step-icon" />,
      title: "Get Paid Fast",
      description: "Accept our offer and receive payment within 48 hours.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="how-it-works" className="section bg-secondary">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <motion.div
          className="grid md-grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </motion.div>
              <div className="step-number">{index + 1}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
