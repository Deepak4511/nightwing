
import React from "react";

import { FaCamera, FaMusic, FaPaintBrush, FaFilm } from "react-icons/fa";

const Categories = () => {
  const categories = [
    { name: "Photography", count: "120K Creators", icon: <FaCamera /> },
    { name: "Music", count: "90K Creators", icon: <FaMusic /> },
    { name: "Art & Design", count: "150K Creators", icon: <FaPaintBrush /> },
    { name: "Film & Media", count: "200K Creators", icon: <FaFilm /> },
    { name: "Film & Media", count: "200K Creators", icon: <FaFilm /> },
  ];

  return (
    <section className="mx-auto px-4 py-5" style={{ maxWidth: "1200px" }}>
      {/* Heading */}
      <div className="mb-5 d-flex justify-content-between align-items-center">
        <div>
        <h2 className="fw-bold text-white" style={{ fontSize: "1.8rem" }}>
          <span className="gradient-text">Creator Categories</span>
        </h2>
        <p className="mt-2 text-secondary">Explore creators by niche</p>
        </div>
        <a href="#" className="view_more_btn">View More</a>
      </div>

      {/* Category Buttons */}
      <div className="d-flex gap-3 flex-wrap pb-3 justify-content-center">
        {categories.map((category, idx) => (
          <button key={idx} className="category-btn ">
            <div className="d-flex align-items-center gap-3">
              <span className="fs-3">{category.icon}</span>
              <div className="text-start">
                <p className="fw-semibold text-white mb-0">{category.name}</p>
                <p className=" small mb-0" style={{ color: "#a855f7" }}>{category.count}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;

