import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark nightwing-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <div className="brand-icon">N</div>
          <span className="brand-text">NIGHTWING</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Creators
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
               Categories
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Trending
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Trending
              </a>
            </li>

          </ul>

          <div className="d-flex align-items-center gap-3 justify-content-center mt-3 mt-md-0">
            <li className="nav-item">
              <Link href="/auth/login" className="nav-link">
                Login/Signup
              </Link>
            </li>
            <div className="profile-icon">D</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

