import React, { useState } from "react";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const licenseTypes = [
    "Microsoft Office",
    "Adobe Creative Cloud",
    "Autodesk",
    "Oracle",
    "SAP",
    "Salesforce",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-primary">
      <div className="container">
        <h2 className="section-title animate-fade-in">Get Started</h2>
        <div className="form-container animate-slide-up">
          {submitSuccess ? (
            <div className="form-success animate-fade-in">
              <div className="form-success-icon">
                <FaCheckCircle />
              </div>
              <h3 className="form-success-title">Thank You!</h3>
              <p className="form-success-message">
                We've received your inquiry and will get back to you within 24
                hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group animate-slide-up delay-100">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group animate-slide-up delay-200">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group animate-slide-up delay-300">
                <label htmlFor="company" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Enter your company name"
                />
              </div>

              <div className="form-group animate-slide-up delay-400">
                <label htmlFor="licenseType" className="form-label">
                  License Type
                </label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select a license type</option>
                  <option value="adobe">Adobe Creative Cloud</option>
                  <option value="microsoft">Microsoft Office 365</option>
                  <option value="autodesk">Autodesk</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group animate-slide-up delay-500">
                <label htmlFor="message" className="form-label">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="4"
                  placeholder="Tell us more about your software licenses..."
                ></textarea>
              </div>

              {error && (
                <div className="form-error animate-fade-in">{error}</div>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-full animate-slide-up delay-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
