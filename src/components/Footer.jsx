import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer light-background">
      <div className="container text-center">
        {/* <p>© <strong className="px-1 sitename">Kelly</strong> All Rights Reserved</p> */}
        <div className="social-links d-flex justify-content-center">
          <Link to="https://www.facebook.com/hencellegerda.massande"><i className="bi bi-facebook"></i></Link>
          <Link to="https://www.instagram.com/hencelle241"><i className="bi bi-instagram"></i></Link>
          <Link to="https://www.tiktok.com/@hencellemassande"><i className="bi bi-tiktok"></i></Link>
        </div>
      </div>
    </footer>
  );
}
