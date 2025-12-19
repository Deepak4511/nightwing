import React from "react";

const CTASection = () => {
  return (
    <section className="cta-section position-relative overflow-hidden">
      {/* Soft Background Tint */}
      <div className="cta-bg-tint"></div>

      {/* Blurred Glow Background */}
      <div className="cta-blur-glow"></div>

      <div className="container position-relative text-center cta-content">
        <h2 className="cta-title">
          Ready to start your journey?
        </h2>

        <p className="cta-subtext mx-auto">
          Join the fastest growing creator economy platform and turn your passion into a profession.
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
          <button className="cta-btn-primary">
            Get Started Free
          </button>

          <button className="cta-btn-secondary">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
