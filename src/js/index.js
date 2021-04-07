import "./components/TopArrow";
import "./components/Triangles";
import "./components/MenuBtn";

// GSAP
import "./gsap/navigation";

// cycle color on Hero section
(function changeColor() {
  const hi = document.getElementById("hi");
  const heroBtn = document.querySelector(".hero-buttons_btn");
  const colors = ["#75c7f4", "#4373d1", "#ff00c7", "#7326ad"];
  hi.style.transition = "all 1s ease-in-out";
  heroBtn.style.transition = "all .5s ease-in-out";

  setInterval(() => {
    const randomColor = colors[Math.floor(Math.random() * 4)];
    hi.style.color = randomColor;
    heroBtn.style.borderColor = randomColor;
  }, 1000);
})();
