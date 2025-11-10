import React from "react";


const Footer = () => {
  return (
    <footer className="footer text-center text-md-start py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="fw-bold text-white">NIGHTWING</h5>
            <p className=" text-white small mb-0">Discover extraordinary creators</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="footer-link">
              About Us
            </a>
            <a href="#" className="footer-link">
              Support
            </a>
            <a href="#" className="footer-link">
              Terms
            </a>
            <a href="#" className="footer-link">
              Privacy
            </a>
          </div>
        </div>
        <hr className="mt-4 mb-3 border-purple" />
        <p className="text-center copyright_text  small mb-0">&copy; 2025 NIGHTWING. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
