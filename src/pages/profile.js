import ProfileMediaCard from "@/components/profile/ProfileMediaCard";
import RelatedCreatorCard from "@/components/profile/RelatedCreatorCard";
import React from "react";



const ProfilePage = () => {
  const mediaItems = [
    { image: "/assets/creator/jayson-hinrichsen-xr2Mt6zIdU8-unsplash.jpg", title: "Photo" },
    { image: "/assets/creator/jayson-hinrichsen-xr2Mt6zIdU8-unsplash.jpg", title: "Video" },
    { image: "/assets/creator/jayson-hinrichsen-xr2Mt6zIdU8-unsplash.jpg", title: "Vistra" },
    { image: "/assets/creator/jayson-hinrichsen-xr2Mt6zIdU8-unsplash.jpg", title: "Motion" },
    { image: "/assets/creator/jayson-hinrichsen-xr2Mt6zIdU8-unsplash.jpg", title: "Futura" },
    { image: "/assets/creator/jayson-hinrichsen-xr2Mt6zIdU8-unsplash.jpg", title: "Neon" },
  ];

  const relatedCreators = [
    { avatar: "/assets/creator/jayson-hinrichsen-xr2Mt6zIdU8-unsplash.jpg", name: "@CyberPunkAlex" },
    { avatar: "/assets/creator/jayson-hinrichsen-xr2Mt6zIdU8-unsplash.jpg", name: "@NeoSam" },
    { avatar: "/assets/creator/jayson-hinrichsen-xr2Mt6zIdU8-unsplash.jpg", name: "@SynthGirl" },
  ];

  return (
    <div className="profile-section py-5">
      <div className="container">

        {/* TOP PROFILE SECTION */}
        <div className="profile-header d-flex align-items-center gap-4 pb-4">
          <img src="/assets/creator/jayson-hinrichsen-xr2Mt6zIdU8-unsplash.jpg" className="profile-avatar" />

          <div>
            <h2 className="profile-name">Hazey Haley</h2>
            <p className="text-light opacity-75">
              Digital artist, cyberfx enthusiast, and content creator.
            </p>
            <p className="followers">4.2M Followers</p>
          </div>

          <div className="ms-auto d-flex gap-3">
            <button className="btn btn-primary neon-btn">Follow</button>
            <button className="btn btn-pink neon-btn">Subscribe</button>
          </div>
        </div>

        {/* TABS */}
        <ul className="nav nav-tabs neon-tabs mb-4">
          <li className="nav-item"><a className="nav-link active">Photos</a></li>
          <li className="nav-item"><a className="nav-link">Videos</a></li>
          <li className="nav-item"><a className="nav-link">About</a></li>
        </ul>

        {/* MEDIA GRID */}
        <div className="row g-4">
          {mediaItems.map((item, idx) => (
            <div className="col-md-4 col-lg-3" key={idx}>
              <ProfileMediaCard image={item.image} title={item.title} />
            </div>
          ))}
        </div>

        {/* RELATED CREATORS */}
        <h4 className="mt-5 mb-3 text-light">Related Creators</h4>
        <div className="related-scroll d-flex overflow-auto pb-3">
          {relatedCreators.map((c, i) => (
            <RelatedCreatorCard key={i} avatar={c.avatar} name={c.name} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
