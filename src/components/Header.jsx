import React from "react";
import { Link, useLocation } from "react-router-dom";
import useNavbar from "../hooks/useNavbar";

const Header = () => {
  useNavbar();
  const location = useLocation(); // Permet de récupérer l'URL actuelle

  return (
    <header id="header" className="header d-flex align-items-center light-background sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        
        {/* Logo */}
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Hencelle</h1>
        </Link>

        {/* Menu de navigation */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link></li>
            <li><Link to="/a-propos" className={location.pathname === "/a-propos" ? "active" : ""}>A propos</Link></li>
            <li><Link to="/cv" className={location.pathname === "/cv" ? "active" : ""}>Mon CV</Link></li>
            <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
            <li><Link to="/portfolio" className={location.pathname === "/portfolio" ? "active" : ""}>Portfolio</Link></li>
            <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
          </ul>
          {/* Icône du menu mobile */}
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        {/* Liens sociaux */}
        <div className="header-social-links">
          {/* <Link href="#" className="twitter"><i className="bi bi-twitter-x"></i></Link> */}
          <Link to="https://www.facebook.com/hencellegerda.massande" className="facebook"><i className="bi bi-facebook"></i></Link>
          <Link to="https://www.instagram.com/hencelle241" className="instagram"><i className="bi bi-instagram"></i></Link>
          <Link to="https://www.tiktok.com/@hencellemassande" className="tiktok"><i className="bi bi-tiktok"></i></Link>
        </div>

      </div>
    </header>
  );
};

export default Header;