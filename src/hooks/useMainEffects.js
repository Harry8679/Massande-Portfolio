import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from "swiper";
import "swiper/css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import PureCounter from "@srexi/purecounterjs";

const useMainEffects = () => {
  useEffect(() => {
    /** 🟢 Animation AOS */
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    /** 🟢 Gestion de la classe "scrolled" */
    const toggleScrolled = () => {
      const body = document.querySelector("body");
      const header = document.querySelector("#header");
      if (!header) return;
      window.scrollY > 100 ? body.classList.add("scrolled") : body.classList.remove("scrolled");
    };
    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    /** 🟢 Mobile Nav */
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("mobile-nav-active");
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      });
    }

    /** 🟢 Preloader */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => preloader.remove());
    }

    /** 🟢 Scroll Top */
    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
      const toggleScrollTop = () => {
        window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
      };
      document.addEventListener("scroll", toggleScrollTop);
      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    /** 🟢 Initialisation Swiper */
    const initSwiper = () => {
      document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
        const config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());
        new Swiper(swiperElement, config);
      });
    };
    window.addEventListener("load", initSwiper);

    /** 🟢 Initialisation Glightbox */
    // const glightbox = GLightbox({ selector: ".glightbox" });
    GLightbox({ selector: ".glightbox" });

    /** 🟢 Initialisation Isotope */
    document.querySelectorAll(".isotope-layout").forEach((isotopeItem) => {
      let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
      let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
      let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
        initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        });
      });

      isotopeItem.querySelectorAll(".isotope-filters li").forEach((filters) => {
        filters.addEventListener("click", function () {
          isotopeItem.querySelector(".isotope-filters .filter-active").classList.remove("filter-active");
          this.classList.add("filter-active");
          initIsotope.arrange({ filter: this.getAttribute("data-filter") });
          if (typeof AOS.init === "function") {
            AOS.init();
          }
        });
      });
    });

    /** 🟢 Initialisation PureCounter */
    new PureCounter();

    return () => {
      document.removeEventListener("scroll", toggleScrolled);
    };
  }, []);
};

export default useMainEffects;