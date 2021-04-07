const template = document.createElement("template");
template.innerHTML = `
  <style>
    .menu-icon {
      width: 30px;
      height: 20px;
      background-color: transparent;
      position: relative;
    }
    
    .line {
      height: 3px;
      width: 100%;
      background-color: white;
      transform-origin: center center;
      position: absolute;
      border-radius: 10px;
      transition: all 0.25s ease-in .25s;
    }
    
    .line-1 {
      top: 0;
    }
    .line-2 {
      top: 8px;
    }
    .line-3 {
      top: 16px;
    }
    
    .menu-open.line-1 {
      transform: translateY(8px) scaleX(0.09);
    }
    .menu-open.line-2 {
      transform: scaleX(0.09);
    }
    .menu-open.line-3 {
      transform: translateY(-8px) scaleX(0.09);
    }
    
    
    .xline-1,
    .xline-2{
      top: 7.5px;
      transition: all 0.25s ease-in .25s;
    }
    
    .menu-open.xline-1 {
      transform: rotate(45deg) scaleX(1);
    }
    .menu-open.xline-2 {
      transform: rotate(-45deg) scaleX(1);
    }

    @media (min-width: 768px) {
      .menu-icon {
        display: none;
      }
    }
  </style>
  <div class="menu-icon">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
    <div class="line xline-1"></div>
    <div class="line xline-2"></div>
  </div>
`;

class Hamburger extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const menu = this.shadowRoot.querySelector(".menu-icon");
    const lines = this.shadowRoot.querySelectorAll(".line");

    menu.addEventListener("click", () => {
      lines.forEach((line) => {
        line.classList.toggle("menu-open");
      });
    });
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(".menu-icon").removeEventListener("click");
  }
}

window.customElements.define("menu-btn", Hamburger);
