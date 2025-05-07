import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Turn Unused Software into Cash</h1>
          <p className="hero-subtitle">
            SoftSell helps businesses recoup costs by reselling unused software
            licenses at competitive prices. Fast, secure, and simple.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-secondary">
              Sell My Licenses
            </a>
            <a href="#how-it-works" className="btn btn-light">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="flex flex-col gap-4">
            <div className="bg-gray p-4 rounded">
              <div className="flex mb-2">
                <div
                  className="mr-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#10B981",
                  }}
                >
                  ✓
                </div>
                <span style={{ fontWeight: 600, color: "#374151" }}>
                  Adobe Creative Cloud
                </span>
              </div>
              <div style={{ color: "#10B981", fontWeight: 600 }}>
                Estimated value: $350
              </div>
            </div>
            <div className="bg-gray p-4 rounded">
              <div className="flex mb-2">
                <div
                  className="mr-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#10B981",
                  }}
                >
                  ✓
                </div>
                <span style={{ fontWeight: 600, color: "#374151" }}>
                  Microsoft Office 365
                </span>
              </div>
              <div style={{ color: "#10B981", fontWeight: 600 }}>
                Estimated value: $220
              </div>
            </div>
            <a href="#contact" className="btn btn-primary text-center">
              Get Your Quote Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
