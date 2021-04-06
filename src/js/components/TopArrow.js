const template = document.createElement("template");
template.innerHTML = `
  <style>
    .up-arr {
      cursor: pointer;
      position: fixed;
      bottom: 5px;
      left: 20px;
      z-index: 100;
      width: 40px;
    }


    .up-arr svg {
      width: 100%;
    }

    #arrow-container {
      fill: rgba(255,255,255,0.4);
    }
    #arrow-icon {
      fill: #333;
    }

    .up-arr svg:hover #arrow-icon {
      fill: #ccc;
    }
  </style>

  <div class="up-arr">
    <a href="#">
      <svg width="121" height="121" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="up-arrow">
          <circle id="arrow-container" cx="60.5" cy="60.5" r="60.5"/>
          <path id="arrow-icon" d="M53.2213 49.2457V102.968C53.2213 106.711 56.2557 109.746 59.999 109.746C63.7422 109.746 66.7767 106.711 66.7767 102.968V49.2457H80.1252C84.3975 49.2457 86.7019 44.2338 83.9206 40.9907L66.7767 21C63.3823 16.4926 56.6157 16.4926 53.2213 21L36.721 41.0704C34.0388 44.333 36.3597 49.2457 40.5834 49.2457H53.2213Z" />
        </g>
      </svg>
    </a>

  </div>
`;

class TopArrow extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("top-arrow", TopArrow);
