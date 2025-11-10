import React from "react";


const trendingCreators = [
  {
    id: 1,
    name: "@JaxTeller",
    followers: "1.8M Followers",
    image: "/assets/creator/aiony-haust-Nsze2HlxoZo-unsplash.jpg",
  },
  {
    id: 2,
    name: "@AmberXOXO",
    followers: "2.1M Followers",
    image: "/assets/creator/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg",
  },
  {
    id: 3,
    name: "@TheDuoLife",
    followers: "430K Followers",
    image: "/assets/creator/jayson-hinrichsen-xr2Mt6zIdU8-unsplash.jpg",
  },
  {
    id: 4,
    name: "@StyleMuse",
    followers: "3.4M Followers",
    image: "/assets/creator/kateryna-hliznitsova-N3npWnOj2S8-unsplash.jpg",
  },
];

const TrendingCreators = () => {
  return (
    <section className="trending-section py-5">
      <div className="container">
        {/* Section Heading */}
        <div className=" mb-5 d-flex justify-content-between align-items-center">
            <div>
          <h2 className="section-heading mb-2">
            <span>🔥 Trending Now</span>
          </h2>
          <p className="section-subtitle">Most engaging creators this week</p>
          </div>
          <a href="#" className="view_more_btn">View More</a>
        </div>

        {/* Grid Layout */}
        <div className="row g-4">
          {trendingCreators.map((creator) => (
            <div key={creator.id} className="col-12 col-sm-6 col-lg-3">
              <div className="creator-card">
                <div className="creator-img-wrapper">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className=" creator-img"
                  />
                </div>
                <div className="creator-info">
                  <h5 className="creator-name">{creator.name}</h5>
                  <p className="creator-followers">{creator.followers}</p>
                  <button className="btn btn-outline-light w-100 mt-3 follow-btn">
                    View Profile
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

export default TrendingCreators;
