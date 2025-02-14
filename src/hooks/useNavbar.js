import { useEffect } from "react";

const useNavbar = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    const navMenu = document.querySelector(".navmenu");

    if (mobileNavToggleBtn && navMenu) {
      const toggleMobileNav = () => {
        body.classList.toggle("mobile-nav-active");
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
        navMenu.classList.toggle("active");
      };

      mobileNavToggleBtn.addEventListener("click", toggleMobileNav);

      return () => {
        mobileNavToggleBtn.removeEventListener("click", toggleMobileNav);
      };
    }
  }, []);
};

export default useNavbar;