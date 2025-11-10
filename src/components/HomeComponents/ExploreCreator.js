import React from "react";

const exploreCategories = [
  {
    id: 1,
    title: "🎮 Gaming",
    description: "Top streamers and esports pros.",
    image: "/assets/creator/pouriya-kafaei-30v47COVn9A-unsplash.jpg",
  },
  {
    id: 2,
    title: "🎨 Art & Design",
    description: "Creative illustrators & designers.",
    image: "/assets/creator/nora-hutton-tCJ44OIqceU-unsplash.jpg",
  },
  {
    id: 3,
    title: "🎵 Music",
    description: "Musicians & vocal artists rising fast.",
    image: "/assets/creator/nora-hutton-mx-ukEhDpHo-unsplash.jpg",
  },
  {
    id: 4,
    title: "💡 Tech Innovators",
    description: "Developers & tech influencers.",
    image: "/assets/female-beauty-creator.jpg",
  },
];

const ExploreCreator = () => {
  return (
    <section className="explore-section py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="mb-5 d-flex justify-content-between align-items-center">
          <div>
          <h2 className="section-heading mb-2">
            <span>🌍 Explore Creators</span>
          </h2>
          <p className="section-subtitle">
            Discover creators across different passions
          </p>
          </div>
          <a href="#" className="view_more_btn">View More</a>
        </div>

        {/* Category Grid */}
        <div className="row g-4">
          {exploreCategories.map((category) => (
            <div key={category.id} className="col-12 col-sm-6 col-lg-3">
              <div className="explore-card position-relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="img-fluid explore-img"
                />
                <div className="explore-overlay d-flex flex-column justify-content-center align-items-center text-center">
                  <h4 className="explore-title">{category.title}</h4>
                  <p className="explore-desc">{category.description}</p>
                  <button className="btn btn-outline-light mt-2 explore-btn">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCreator;
