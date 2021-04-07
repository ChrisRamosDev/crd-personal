import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// Smooth scroll to different sections of page
const nav = document.querySelector(".header");
const home = document.getElementById("home");
const navLinks = document.querySelectorAll("nav button");
const triangles = document.getElementById("triangles-btn");
const heroBtn = document.querySelector(".hero-buttons_btn");

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

// change bg on header
gsap.to(nav, {
  scrollTrigger: {
    trigger: home,
    onToggle: ({ isActive }) => {
      isActive
        ? nav.classList.remove("scrolled")
        : nav.classList.add("scrolled");
    },
  },
});

// smooth scrolling for sections
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
heroBtn.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#projects" },
    ease: "power2",
  });
});

triangles.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#about" },
    ease: "power3",
  });
});