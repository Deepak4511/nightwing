import React from "react";
import { UserPlus, Star } from "lucide-react";

const CreatorCard = ({ creator, variant = "info" }) => {
  if (variant === "portrait") {
    return (
      <div className="creator-portrait-card position-relative">
        <img
          src={creator.imageUrl}
          alt={creator.name}
          className="creator-portrait-img"
        />

        {/* Gradient Overlay */}
        <div className="creator-portrait-overlay"></div>

        {/* Bottom Text */}
        <div className="creator-portrait-text">
          <h3 className="creator-name">{creator.name}</h3>
          <p className="creator-category">{creator.category}</p>
        </div>

        {/* Follow Button */}
        <button className="creator-follow-btn">
          <UserPlus size={18} />
        </button>
      </div>
    );
  }

  /**************  INFO VARIANT (detailed card) **************/
  return (
    <div className="creator-info-card">
      {/* Image Section */}
      <div className="creator-info-image-wrapper">
        <img
          src={creator.imageUrl}
          alt={creator.name}
          className="creator-info-img"
        />

        <div className="creator-rating-badge">
          <Star size={10} className="rating-star" />
          4.9
        </div>
      </div>

      {/* Content */}
      <div className="creator-info-content">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <h3 className="creator-handle">{creator.handle}</h3>
            <p className="creator-followers">
              {creator.followers} Followers
            </p>
          </div>

          {creator.isTrending && (
            <span className="trending-badge">Hot</span>
          )}
        </div>

        <p className="creator-bio">
          {creator.bio || "Creating amazing content for the world to see."}
        </p>

        <button className="btn view-profile-btn">View Profile</button>
      </div>
    </div>
  );
};

export default CreatorCard;
