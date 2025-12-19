import React from "react";
import CreatorCard from "../commonComponents/CreatorCard";

const trendingCreators = [
  { id: "5", name: "Neon Dreams", handle: "@NeonDreams", imageUrl: "https://picsum.photos/600/400?random=20", followers: "1.2M", category: "Digital Art", isTrending: true},
  { id: "6", name: "Sara Cooks", handle: "@SaraCooks", imageUrl: "https://picsum.photos/600/400?random=21", followers: "890K", category: "Food", isTrending: true },
  { id: "7", name: "Tech Talk", handle: "@TechTalk", imageUrl: "https://picsum.photos/600/400?random=22", followers: "2.5M", category: "Technology"  },
  { id: "8", name: "FitLife", handle: "@FitLifePro", imageUrl: "https://picsum.photos/600/400?random=23", followers: "500K", category: "Fitness" },
];

const NewCreator = () => {
  return (
    <section id="trending" className="new-creator ">
      <div className="container">

        {/* Header */}
        <div className="d-flex align-items-center gap-3 mb-4">
          <div className="trend-icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="trend-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <div>
            <h2 className="trending-title">New Creators</h2>
            <p className="trending-subtext">Most engaging creators this week</p>
          </div>
        </div>

        {/* Creators Grid */}
        <div className="row g-4">
          {trendingCreators.map((creator) => (
            <div key={creator.id} className="col-12 col-md-6 col-lg-3">
              <CreatorCard creator={creator} variant="info" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewCreator;

