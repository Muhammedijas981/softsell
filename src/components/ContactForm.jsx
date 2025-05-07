import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // In a real app, you would send this data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-white">
      <div className="section">
        <h2 className="section-title">Get Your Software Valuation</h2>

        <div className="form-container">
          {isSubmitted ? (
            <div className="form-success">
              <div className="form-success-icon">
                <FaPaperPlane size={24} />
              </div>
              <h3 className="text-dark mb-2">Thank You!</h3>
              <p className="text-gray mb-4">
                We've received your information and will get back to you with a
                valuation shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn btn-primary"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`form-input ${
                    errors.company ? "border-red-500" : ""
                  }`}
                  placeholder="Acme Inc."
                />
                {errors.company && (
                  <p className="form-error">{errors.company}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="licenseType" className="form-label">
                  License Type
                </label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className={`form-select ${
                    errors.licenseType ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Select License Type</option>
                  {licenseTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.licenseType && (
                  <p className="form-error">{errors.licenseType}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`form-textarea ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Tell us about your software licenses (quantity, purchase date, etc.)"
                ></textarea>
                {errors.message && (
                  <p className="form-error">{errors.message}</p>
                )}
              </div>

              <div className="mt-4">
                <button type="submit" className="btn btn-primary btn-full">
                  Get Valuation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
