import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StatsSection = () => {
  const stats = [
    { number: "1.2M+", label: "Users", description: "Worldwide reach" },
    { number: "980K", label: "Projects", description: "Completed successfully" },
    { number: "24/7", label: "Support", description: "Always available" },
    { number: "500+", label: "Creators", description: "Active partnerships" },
  ];

  return (
    <section className="mx-auto w-100 px-4 py-5">
      <div
        className="mx-auto rounded-4 border p-4 p-md-5"
        style={{
          maxWidth: "1200px",
          borderColor: "rgba(168,85,247,0.3) !important",
          background:
            "linear-gradient(to right, rgba(88,28,135,0.4), rgba(162,28,175,0.4), rgba(88,28,135,0.4))",
        }}
      >
        <div className="row gy-4 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center">
              <div
                className="fw-bold mb-3"
                style={{
                  fontSize: "2rem",
                  background: "linear-gradient(to right, #c084fc, #e879f9)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {stat.number}
              </div>
              <p className="text-light mb-0" style={{ fontSize: "0.95rem", color: "#d1d5db" }}>
                {stat.label}
              </p>
              <p className=" mb-0" style={{ fontSize: "0.8rem", color: "#a855f7 !important" }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
