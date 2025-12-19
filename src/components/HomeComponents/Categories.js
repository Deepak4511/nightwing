import React from "react";
import { Camera, Music, PenTool, Video, Gamepad2 } from "lucide-react";

const categories = [
  { id: "1", name: "Photography", count: "120K Creators", icon: <Camera size={24} />, gradient: "blue-cyan" },
  { id: "2", name: "Music", count: "90K Creators", icon: <Music size={24} />, gradient: "purple-pink" },
  { id: "3", name: "Art & Design", count: "150K Creators", icon: <PenTool size={24} />, gradient: "orange-red" },
  { id: "4", name: "Film & Media", count: "200K Creators", icon: <Video size={24} />, gradient: "green-emerald" },
  { id: "5", name: "Gaming", count: "300K Creators", icon: <Gamepad2 size={24} />, gradient: "indigo-purple" },
  { id: "1", name: "Photography", count: "120K Creators", icon: <Camera size={24} />, gradient: "blue-cyan" },
];

const Categories = () => {
  return (
    <section id="categories" className="categories-section">
      <div className="container">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 className="categories-title">Creator Categories</h2>
            <p className="categories-subtext">Explore creators by their specific niche</p>
          </div>

          <button className="view-all-btn">View All Categories</button>
        </div>

        {/* Categories Grid */}
        <div className="row g-3">
          {categories.map((cat) => (
            <div key={cat.id} className="col-12 col-sm-6 col-lg-2">
              <div className="category-card">
                <div className={`category-icon ${cat.gradient}`}>
                  {cat.icon}
                </div>

                <h3 className="category-name">{cat.name}</h3>
                <p className="category-count">{cat.count}</p>
              </div>
            </div>
          ))}

          {/* Fix Bootstrap: last column empty adjustment for 5 items */}
          <div className="d-none d-lg-block col-lg-1"></div>
        </div>

      </div>
    </section>
  );
};

export default Categories;
