import React from "react";
import { BadgeCheck, Share2 } from "lucide-react";


const HeroSection = () => {
  return (
    <section className="hero-section position-relative overflow-hidden">
      {/* Background Decor */}
      <div className="hero-bg-blur"></div>

      <div className="container py-5">
        <div className="row align-items-center ">
          {/* Text Side */}
          <div className="col-lg-6">
            <span className="featured-tag">Featured Creator</span>

            <h1 className="hero-title">
              @LunaBlaise
              <BadgeCheck className="ms-3 badge-icon" />
            </h1>

            <p className="followers-text">5.2M Followers</p>

            <p className="hero-description">
              Award-winning content creator specializing in lifestyle and digital
              culture. Join millions of followers discovering fresh perspectives
              daily through exclusive vlogs and streams.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <button className="btn follow-btn">Follow Now</button>

              <button className="btn share-btn d-flex align-items-center gap-2">
                <Share2 size={20} />
                Share Profile
              </button>
            </div>

            {/* Followers row */}
            <div className="d-flex align-items-center gap-3 mt-4">
              <div className="followers-stack">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/50/50?random=${i + 10}`}
                    className="follower-img"
                    alt="follower"
                  />
                ))}
              </div>

              <p className="followers-info">
                Followed by <span className="text-white fw-semibold">JaxTeller</span> and{" "}
                <span className="text-white fw-semibold">98 others</span>
              </p>
            </div>
          </div>

          {/* Image Side */} {/* Image Side */}
          <div className="col-lg-6 position-relative hero-image-group">

              <img
                src="/assets/portrait-woman-holding-device.png"
                className="img-fluid hero-main-img"
                alt="Featured Creator"
              />

              {/* Bottom Gradient Text */}
              <div className="hero-bottom-gradient">
                <span className="live-badge">Live Now</span>
              </div>

            {/* Floating Stats Card */}
            <div className="floating-card d-none d-md-block">
              <p className="floating-small-text">New Subscribers</p>
              <p className="floating-big-text">
                +1,240 <span className="up-arrow">↑</span>
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;
