import React from "react";

const CategoryCard = ({ image, title, followers }) => {
  return (
    <div className="category-card text-center p-3 rounded-4">
      <div className="category-img-wrapper mb-3">
        <img src={image} alt={title} className="category-img" />
      </div>
      <h6 className="category-title mb-1">{title}</h6>
      <p className="category-followers mb-0">{followers} Followers</p>
    </div>
  );
};

export default CategoryCard;
