import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Manager",
      company: "TechCorp Inc.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content:
        "SoftSell made selling our unused licenses incredibly easy. The process was smooth and we received payment within 24 hours!",
    },
    {
      name: "Michael Chen",
      role: "Director",
      company: "Global Solutions",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      content:
        "The best platform for software license resale. Their valuation was fair and the customer service was exceptional.",
    },
  ];

  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title animate-fade-in">
          What Our Customers Say
        </h2>
        <div className="grid md-grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FaQuoteLeft className="testimonial-quote" />
              <div className="testimonial-header">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <div>
                  <h3 className="testimonial-author">{testimonial.name}</h3>
                  <p className="testimonial-position">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
