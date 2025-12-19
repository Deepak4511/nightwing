import React from "react";

import { Home, Search, PlusSquare, Heart, User } from "lucide-react";
import ReelFeed from "@/components/ReelsComponent/ReelFeed";

const Watch = () => {
  return (
    <div className="app-container d-flex justify-content-center">
      
      {/* Desktop Sidebar */}
      <div className="sidebar d-none d-md-flex flex-column">
        <h1 className="logo-text">ReelFlow</h1>

        <nav className="nav-items">
          <NavItem icon={<Home />} label="Home" active />
          <NavItem icon={<Search />} label="Explore" />
          <NavItem icon={<PlusSquare />} label="Create" />
          <NavItem icon={<Heart />} label="Notifications" />
          <NavItem icon={<User />} label="Profile" />
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="reel-wrapper position-relative">
        <ReelFeed />

        {/* Mobile Bottom Nav */}
        <div className="bottom-nav d-md-none">
          <Home className="nav-icon" />
          <Search className="nav-icon dim" />
          <PlusSquare className="nav-icon-large" />
          <Heart className="nav-icon dim" />
          <User className="nav-icon dim" />
        </div>
      </div>

      {/* Desktop right spacer */}
      <div className="right-spacer d-none d-lg-block"></div>
    </div>
  );
};

const NavItem = ({ icon, label, active }) => (
  <div className={`nav-item ${active ? "active" : ""}`}>
    {React.cloneElement(icon, { className: "nav-icon" })}
    <span className="nav-label">{label}</span>
  </div>
);

export default Watch;
