import Link from "next/link";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check for user in localStorage on mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Clear all auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    Cookies.remove("token");
    Cookies.remove("isLoggedIn");

    // Reset state
    setUser(null);
    setShowDropdown(false);

    // Redirect to login
    router.push("/auth/login");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark nightwing-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
          <div className="brand-icon">N</div>
          <span className="brand-text">NIGHTWING</span>
        </Link>

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
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/creators" className="nav-link">
                Creators
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/categories" className="nav-link">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/trending" className="nav-link">
                Trending
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/video" className="nav-link">
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/watch" className="nav-link">
                Reels
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 justify-content-center mt-3 mt-md-0 position-relative">
            {user ? (
              <div className="dropdown">
                <button
                  className="btn btn-dark d-flex align-items-center gap-2 border-0 bg-transparent text-light"
                  onClick={toggleDropdown}
                  style={{ cursor: "pointer" }}
                >
                  <div className="profile-icon">
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <span className="d-none d-md-inline">
                    {user.name || "User"}
                  </span>
                  <i
                    className={`bi bi-chevron-${
                      showDropdown ? "up" : "down"
                    } small`}
                  ></i>
                </button>

                {showDropdown && (
                  <div
                    className="dropdown-menu show position-absolute end-0 mt-2 p-2 shadow-lg nightwing-dropdown"
                    style={{ minWidth: "200px", right: 0, left: "auto" }}
                  >
                    <div className="px-3 py-2 border-bottom border-secondary mb-2">
                      <p className="mb-0 fw-bold">{user.name}</p>
                      <small
                        className="text-muted"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {user.email}
                      </small>
                    </div>
                    <Link
                      href="/profile"
                      className="dropdown-item rounded py-2 d-flex align-items-center gap-2 text-light"
                      onClick={() => setShowDropdown(false)}
                    >
                      <i className="bi bi-person"></i> Profile
                    </Link>
                    <button
                      className="dropdown-item rounded py-2 d-flex align-items-center gap-2 text-danger w-100 text-start"
                      onClick={handleLogout}
                    >
                      <i className="bi bi-box-arrow-right"></i> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/auth/login" className="nav-link text-light">
                  Login/Signup
                </Link>
                <div className="profile-icon">D</div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
