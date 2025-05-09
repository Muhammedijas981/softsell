import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaMoneyBillWave,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaMoneyBillWave className="feature-icon" />,
      title: "Best Market Rates",
      description:
        "We analyze the market to ensure you get top dollar for your software licenses.",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Secure Transactions",
      description:
        "End-to-end encryption and thorough verification protect your data and licenses.",
    },
    {
      icon: <FaClock className="feature-icon" />,
      title: "Quick Process",
      description:
        "Get valuations in minutes and payments within 48 hours of acceptance.",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Transparent Pricing",
      description:
        "No hidden fees. See exactly how we calculate your software's value.",
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
    <section id="why-choose-us" className="section bg-primary">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose SoftSell
        </motion.h2>
        <motion.div
          className="grid md-grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {reason.icon}
              </motion.div>
              <h3 className="feature-title">{reason.title}</h3>
              <p className="feature-description">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
