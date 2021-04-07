import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// Smooth scroll to different sections of page
const nav = document.querySelector(".header");
const home = document.getElementById("home");
const navLinks = document.querySelectorAll("nav button");

// scroll to top on page refresh
(function refreshScroll() {
  window.addEventListener("load", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: home },
      ease: "power2",
    });
  });
})();

gsap.to(nav, {
  scrollTrigger: {
    trigger: home,
    markers: true,
    onToggle: ({ isActive }) => {
      console.log(isActive);
      isActive
        ? nav.classList.remove("scrolled")
        : nav.classList.add("scrolled");
      console.log(nav.classList);
    },
  },
});
navLinks.forEach((link) => {
  const href = link.innerText;

  link.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${href}` },
      ease: "power2",
    });
  });
});
