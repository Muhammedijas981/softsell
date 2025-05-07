import React from "react";
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

  return (
    <section id="how-it-works" className="bg-light section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="grid md-grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              {step.icon}
              <div className="step-number">{index + 1}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="text-gray">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#contact" className="btn btn-primary">
            Start Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
