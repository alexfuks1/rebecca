import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  let location = useLocation();
  return (
    <div className="footer">
      {location.pathname === "/contact" && location.pathname === "/contact" ? (
        <div className="d-flex flex-row align-items-center footer-container">
          <div className="col-6 col-sm-3">
            <span className="ms-2">© 2021 Sehnsucht atelier</span>
          </div>
          <div className="d-none col-6 d-sm-flex flex-row justify-content-between">
            <Link to="/">
              <span>Contact</span>
            </Link>
            <Link to="/">
              <span>Terms of Service</span>
            </Link>
            <Link to="/">
              <span>Shipping and Returns</span>
            </Link>
            <Link to="/">
              <span>Privacy Policy</span>
            </Link>
            <Link to="/">
              <span>Instagram</span>
            </Link>
          </div>
          <div className="col-6 col-sm-3 d-flex flex-row align-items-center justify-content-end text-center text-sm-end">
            <span className="me-2">Design by @peach.blossom_studio</span>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-row align-items-center footer-container">
          <div className="col-6 ps-2">
            <span>© 2021 Sehnsucht atelier</span>
          </div>
          <div className="col-6 text-end pe-2">
            <Link to="/contact">
              <span>Contact 1/20</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
{
}
