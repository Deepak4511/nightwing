import React from "react";

const RelatedCreatorCard = ({ avatar, name }) => {
  return (
    <div className="related-card text-center mx-2">
      <img src={avatar} className="related-avatar" />
      <p className="related-name mt-2">{name}</p>
    </div>
  );
};

export default RelatedCreatorCard;
