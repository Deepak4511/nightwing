import React from 'react';


const categories = [
  "Fitness", "Gaming", "Music", "Fashion", "Lifestyle", "Travel", "Photography",
  "Food", "Cosplay", "Tech", "Art", "Dance", "Comedy", "Education", "Motivation",
  "Movies", "DIY", "Design", "Coding", "AI", "Makeup", "Nature", "Sports",
  "Business", "Science", "Health", "News", "Cars", "History", "Finance",
  "Architecture", "Podcasts", "Spirituality", "Books", "Culture", "Memes", "Pets"
];

const ExploreModel = ({heading, subHeading}) => {
  return (
    <div className='mb-5 mt-5'>
      <div className='container'>
        <h4 className='text-white fw-bold mb-2'>{heading}</h4>
        <p className='text-secondary mb-5'>{subHeading}</p>

        <div className='category_box d-flex flex-wrap gap-3'>
          {categories.map((cat, index) => (
            <button key={index} className='category_btn'>{cat}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreModel;
