import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// Smooth scroll to different sections of page
const header = document.querySelector(".header");
const home = document.getElementById("home");
const navLinks = document.querySelectorAll("nav button");
const triangles = document.getElementById("triangles-btn");
const heroBtn = document.querySelector(".hero-buttons_btn");

// change bg on header
gsap.to(header, {
  scrollTrigger: {
    trigger: home,
    end: "50%",
    onToggle: ({ isActive }) => {
      isActive
        ? header.classList.remove("scrolled")
        : header.classList.add("scrolled");
    },
    onRefresh: ({ isActive }) => {
      isActive
        ? header.classList.remove("scrolled")
        : header.classList.add("scrolled");
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
    scrollTo: { y: "#portfolio" },
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

const nav = document.querySelector("nav");
const menuBtn = document.querySelector("menu-btn");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("mobile");
  console.log("clicked", window.innerWidth);
});
