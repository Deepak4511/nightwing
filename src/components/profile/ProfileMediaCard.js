import React from "react";

const ProfileMediaCard = ({ image, title }) => {
  return (
    <div className="media-card p-2">
      <div className="media-thumb">
        <img src={image} alt={title} className="img-fluid rounded" />
        <span className="play-icon">▶</span>
      </div>
      <p className="media-title mt-2">{title}</p>
    </div>
  );
};

export default ProfileMediaCard;
