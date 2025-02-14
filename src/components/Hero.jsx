import React from "react";
// import heroImage from "../assets/img/hero-bg.jpg"; // Assure-toi d'ajouter cette image dans `assets/img`
import heroImage from "../assets/img/profile.jpeg"; // Assure-toi d'ajouter cette image dans `assets/img`
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <img src={heroImage} alt="Hero" data-aos="fade-in" />
      <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 style={{ color: 'white' }}>Hencelle Gerda MASSANDE</h2>
            <p style={{ color: '#34b7a7' }}>Je suis journaliste (Décris ça toi-même Hens)</p>
            <Link to="/a-propos" className="btn-get-started">A Propos de Moi</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
