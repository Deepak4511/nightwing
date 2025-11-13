import CategoryCard from '@/components/category/CategoryCard';
import ExploreModel from '@/components/category/exploreModel';
import ExploreCreator from '@/components/HomeComponents/ExploreCreator';
import React from 'react'

const categories = () => {

      const categories = [
    { image: "/assets/female-beauty-creator.jpg", title: "Fitness", followers: "30M" },
    { image: "/assets/female-beauty-creator.jpg", title: "Gaming", followers: "51M" },
    { image: "/assets/female-beauty-creator.jpg", title: "Music", followers: "20M" },
    { image: "/assets/female-beauty-creator.jpg", title: "Fashion", followers: "26M" },
    { image: "/assets/female-beauty-creator.jpg", title: "Lifestyle", followers: "18M" },
    { image: "/assets/female-beauty-creator.jpg", title: "Fashion", followers: "26M" },
  ];

  return (
   <div className="explore-page min-vh-100 py-5">
      <div className="container">

        <div className="creator-header d-flex align-items-center justify-content-between flex-wrap p-4 mb-5 rounded-4">
          <div className="d-flex align-items-center hero_card_sec">
            <img
              src="/assets/lifestyle-creator-female.jpg"
              alt="profile"
              className="profile-img rounded-circle me-3"
              style={{ width: "150px" }}
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

        {/* Top Navbar */}
        {/* <div className="top-navbar d-flex justify-content-between align-items-center mb-5 flex-wrap">
          <ul className="nav-links list-unstyled d-flex gap-4 mb-0">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Creators</a></li>
            <li><a href="#">Categories</a></li>
          </ul>
          <div className="d-flex align-items-center gap-3 mt-3 mt-md-0">
            <input
              type="text"
              placeholder="Search"
              className="form-control search-input"
            />
            <i className="bi bi-search search-icon"></i>
          </div>
        </div> */}

        {/* Explore Header */}
        <div className="text-start mb-4">
          <h4 className="text-white mb-2">Explore Categories</h4>
          <p className="text-secondary small">
            Discover trending creators and content from different worlds.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons mb-5">
          <button className="btn btn-sm btn-primary neon-btn me-2">All</button>
          <button className="btn btn-sm btn-outline-light me-2 neon-btn">
            New
          </button>
          <button className="btn btn-sm btn-outline-light me-2 neon-btn">
            Popular
          </button>
          <button className="btn btn-sm btn-outline-light neon-btn">
            Following
          </button>
        </div>

        {/* Category Cards Grid */}
        <div className="row g-4">
          {categories.map((cat, index) => (
            <div key={index} className="col-6 col-md-3 col-lg-2">
              <CategoryCard {...cat} />
            </div>
          ))}
        </div>

        <ExploreModel
        heading="Explore Models by Categories"
        subHeading="Find creators based on your interests"/>

        <ExploreModel
        heading="Explore Models by Location"
        subHeading="Discover creators from around the world"/>

        {/* Footer */}
        {/* <footer className="text-center mt-5 text-secondary small">
          <a href="#" className="footer-link mx-2">About</a>|
          <a href="#" className="footer-link mx-2">Support</a>|
          <a href="#" className="footer-link mx-2">Terms</a>|
          <a href="#" className="footer-link mx-2">Privacy</a>
        </footer> */}
      </div>
    </div>
  );
};
export default categories
