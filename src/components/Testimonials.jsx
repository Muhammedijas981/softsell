import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechVision Inc.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content:
        "SoftSell helped us recover over $15,000 from unused licenses after our company downsized. The process was incredibly straightforward, and the team was professional throughout.",
    },
    {
      name: "Michael Chen",
      role: "CFO",
      company: "Nexus Innovations",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content:
        "As we transitioned to new software solutions, we had a surplus of premium licenses. SoftSell provided competitive valuations and quick payment, helping us optimize our IT budget efficiently.",
    },
  ];

  return (
    <section id="testimonials" className="bg-light section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="grid md-grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
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
              <p className="text-dark">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
