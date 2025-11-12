import React from "react";


const CreatorCard = ({ image, name, followers, likes }) => {
  return (
    <div className="creator-card text-center p-3 rounded-4">
      <img src="" alt={name} className="creator-img mb-3" />
      <h6 className="creator-name mb-1">@{name}</h6>
      <p className="creator-followers mb-0">{followers} Followers</p>
      {likes && <p className="creator-likes mb-0">{likes} Likes</p>}
    </div>
  );
};

export default CreatorCard;
