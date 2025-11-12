import CreatorCard from "@/components/commonComponents/CreatorCard";
import React from "react";


const CreatorPage = () => {
  const creators = [
    { image: "", name: "AnyaBlade", followers: "5.2M", likes: "890.1K" },
    { image: "", name: "TheDuoLife", followers: "2.1M", likes: "320K" },
    { image: "", name: "CyberNova", followers: "980K", likes: "140K" },
    { image: "", name: "ShadowX", followers: "950K", likes: "410K" },
  ];

  return (
    <div className="creator-page min-vh-100 py-5">
      <div className="container">
        {/* Profile Header */}
        <div className="creator-header d-flex align-items-center justify-content-between flex-wrap p-4 mb-5 rounded-4">
          <div className="d-flex align-items-center">
            <img
              src=""
              alt="profile"
              className="profile-img rounded-circle me-3"
            />
            <div>
              <h4 className="text-white mb-1">@AnyaBlade</h4>
              <p className="text-secondary mb-1">
                Cyber artist, lyrical nomad, and futurist.
              </p>
              <p className="stats mb-0 text-light">
                5.2M Followers • 890.1K Likes • 350 Posts
              </p>
            </div>
          </div>
          <div className="d-flex gap-3 mt-3 mt-md-0">
            <button className="btn btn-outline-light neon-btn">Subscribe</button>
            <button className="btn btn-primary neon-btn">Follow</button>
          </div>
        </div>

        {/* Explore Section */}
        <h5 className="text-uppercase text-light mb-3">Explore Creators</h5>
        <div className="row g-4">
          {creators.map((creator, index) => (
            <div key={index} className="col-6 col-md-3">
              <CreatorCard {...creator} />
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default CreatorPage;
