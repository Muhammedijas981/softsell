import React from "react";
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

  return (
    <section id="why-choose-us" className="bg-white section">
      <div className="container">
        <h2 className="section-title">Why Choose SoftSell</h2>
        <div className="grid md-grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="feature-card">
              {reason.icon}
              <h3 className="feature-title">{reason.title}</h3>
              <p className="text-gray">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
