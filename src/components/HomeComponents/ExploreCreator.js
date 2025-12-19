import React from "react";
import CreatorCard from "../commonComponents/CreatorCard";

const spotlightCreators = [
  { id: "1", name: "Jax Teller", handle: "@JaxTeller", imageUrl: "https://picsum.photos/400/500?random=10", followers: "1.8M", category: "Photography" },
  { id: "2", name: "Amber XOXO", handle: "@AmberXOXO", imageUrl: "https://picsum.photos/400/500?random=11", followers: "2.1M", category: "Lifestyle" },
  { id: "3", name: "TheDuoLife", handle: "@TheDuoLife", imageUrl: "https://picsum.photos/400/500?random=12", followers: "430K", category: "Travel" },
  { id: "4", name: "StyleMuse", handle: "@StyleMuse", imageUrl: "https://picsum.photos/400/500?random=13", followers: "3.4M", category: "Fashion" },
];

const ExploreCreator = () => {
  return (
     <section id="creators" className="creators-section position-relative">
      
      {/* Background Glow */}
      <div className="creators-bg-glow"></div>

      <div className="container">
        
        {/* Header */}
        <div className="d-flex justify-content-between align-items-end mb-4 creators-header">
          <div>
            <div className="dot-indicator"></div>
            <h2 className="creators-title">Explore Creators</h2>
            <p className="creators-subtext">Discover creators across different passions</p>
          </div>

          <button className="view-more-btn">View More</button>
        </div>

        {/* Grid */}
        <div className="row g-4">
          {spotlightCreators.map((creator) => (
            <div key={creator.id} className="col-6 col-md-3">
              <CreatorCard creator={creator} variant="portrait" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExploreCreator;
