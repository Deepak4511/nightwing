import React from "react";
import { Share2 } from "lucide-react";


const HeroSection = () => {
  return (
    <section className="container pt-5">
      <div className="row align-items-center gy-4">
        <div className="col-md-6">
          <div className="hero-img position-relative">
            <img
              src="/assets/valerie-elash-G3wBRsVfulU-unsplash-removebg-preview.png"
              alt="Featured Creator"
              className="img-fluid rounded-4"
            />
            <div className="accent-line"></div>
          </div>
        </div>
        <div className="col-md-6 text-light">
          <p className="text-purple fw-semibold text-uppercase small">Featured Creator</p>
          <h1 className="display-5 fw-bold">@LunaBlaise</h1>
          <p className="text-secondary mb-1">5.2M Followers</p>
          <hr className="gradient-line" />
          <p className="">
            Award-winning content creator specializing in lifestyle and digital culture. Join millions of followers
            discovering fresh perspectives daily.
          </p>
          <div className="d-flex gap-3 mt-3">
            <button className="btn btn-purple-gradient px-4 py-2">Follow</button>
            <button className="btn btn-outline-purple px-4 py-2">
              <Share2 size={16} className="me-2" /> Share
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
