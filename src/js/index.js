import "./components/TopArrow";
import "./components/Triangles";

// GSAP
import "./gsap/navigation";

// cycle color on Hero section
(function changeHi() {
  const hi = document.getElementById("hi");
  const colors = ["#75c7f4", "#4373d1", "#ff00c7", "#7326ad"];
  hi.style.transition = "all 1s ease-in-out";

  setInterval(() => {
    hi.style.color = colors[Math.floor(Math.random() * 4)];
  }, 1000);
})();
