import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "aos/dist/aos.css";
import "swiper/css";
import "glightbox/dist/css/glightbox.min.css";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import GLightbox from "glightbox";
import AOS from "aos";

// Importation des images
// import img1 from "../assets/img/masonry-portfolio/masonry-portfolio-1.jpg";
// import img2 from "../assets/img/masonry-portfolio/masonry-portfolio-2.jpg";
// import img3 from "../assets/img/masonry-portfolio/masonry-portfolio-3.jpg";
// import img4 from "../assets/img/masonry-portfolio/masonry-portfolio-4.jpg";
// import img5 from "../assets/img/masonry-portfolio/masonry-portfolio-5.jpg";
// import img6 from "../assets/img/masonry-portfolio/masonry-portfolio-6.jpg";
// import img7 from "../assets/img/masonry-portfolio/masonry-portfolio-7.jpg";
// import img8 from "../assets/img/masonry-portfolio/masonry-portfolio-8.jpg";
// import img9 from "../assets/img/masonry-portfolio/masonry-portfolio-9.jpg";

import img1 from "../assets/img/masonry-portfolio/hens_img1.jpeg";
import img2 from "../assets/img/masonry-portfolio/hens_img2.jpeg";
import img3 from "../assets/img/masonry-portfolio/hens_img3.jpeg";
import img4 from "../assets/img/masonry-portfolio/hens_img4.jpeg";
import img5 from "../assets/img/masonry-portfolio/hens_img5.jpeg";
import img6 from "../assets/img/masonry-portfolio/hens_img6.jpeg";
import img7 from "../assets/img/masonry-portfolio/hens_img7.jpeg";
import img8 from "../assets/img/masonry-portfolio/hens_img8.jpeg";
import img9 from "../assets/img/masonry-portfolio/hens_img9.jpeg";

const Portfolio = () => {
  const isotopeRef = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Initialisation de GLightbox
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    // Vérification que les images sont bien chargées avant d'initialiser Isotope
    imagesLoaded(document.querySelector(".isotope-container"), function () {
      isotopeRef.current = new Isotope(".isotope-container", {
        itemSelector: ".portfolio-item",
        layoutMode: "masonry",
      });
    });

    // Gestion du filtrage des éléments du portfolio
    const filters = document.querySelectorAll(".portfolio-filters li");
    filters.forEach((filter) => {
      filter.addEventListener("click", function () {
        document.querySelector(".portfolio-filters .filter-active")?.classList.remove("filter-active");
        this.classList.add("filter-active");

        let filterValue = this.getAttribute("data-filter");
        isotopeRef.current.arrange({ filter: filterValue === "*" ? "*" : filterValue });
      });
    });

    // Cleanup : éviter les erreurs de mémoire
    return () => {
      lightbox.destroy();
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
    };
  }, []);

  const portfolioItems = [
    { id: 1, category: "filter-app", title: "App 1", image: img1 },
    { id: 2, category: "filter-product", title: "Product 1", image: img2 },
    { id: 3, category: "filter-branding", title: "Branding 1", image: img3 },
    { id: 4, category: "filter-app", title: "App 2", image: img4 },
    { id: 5, category: "filter-product", title: "Product 2", image: img5 },
    { id: 6, category: "filter-branding", title: "Branding 2", image: img6 },
    { id: 7, category: "filter-app", title: "App 3", image: img7 },
    { id: 8, category: "filter-product", title: "Product 3", image: img8 },
    { id: 9, category: "filter-branding", title: "Branding 3", image: img9 },
  ];

  const portfolioFilters = [
    { filter: "*", label: "Tous" },
    { filter: ".filter-app", label: "1" },
    { filter: ".filter-product", label: "2" },
    { filter: ".filter-branding", label: "3" },
  ];

  return (
    <main className="main">
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container">
          {/* Filtres du Portfolio */}
          <ul ref={filterRef} className="portfolio-filters isotope-filters" data-aos="fade-up">
            {portfolioFilters.map((filter) => (
              <li key={filter.filter} data-filter={filter.filter} className={filter.filter === "*" ? "filter-active" : ""}>
                {filter.label}
              </li>
            ))}
          </ul>

          {/* Portfolio Items */}
          <div className="row gy-4 isotope-container" data-aos="fade-up">
            {portfolioItems.map((item) => (
              <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}>
                <img src={item.image} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href={item.image} title={item.title} className="glightbox preview-link">
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link to="/portfolio-details" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;