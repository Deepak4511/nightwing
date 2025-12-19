import React from "react";

const stats = [
  { label: "Users", value: "1.2M+", subtext: "Worldwide reach" },
  { label: "Projects", value: "980K", subtext: "Completed successfully" },
  { label: "Support", value: "24/7", subtext: "Always available" },
  { label: "Creators", value: "500+", subtext: "Active partnerships" },
];

const StatsSection = () => {
  return (
    <section className="stats-section position-relative">
      <div className="container">
        <div className="stats-wrapper">
          <div className="row text-center g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-subtext">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
