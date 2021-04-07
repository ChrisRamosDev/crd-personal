const template = document.createElement("template");
template.innerHTML = `
<style>
  #triangles-component {
    cursor: pointer;
    position: absolute;
    bottom: 5%;
    left: 50%;
    right: 50%;
  }
  
  #triangle-group > path {
    transition: all 1s ease;
  }
  #triangle-1 {
    fill: var(--clr-secondary_lt);
  }
  #triangle-2 {
    fill: var(--clr-secondary_dk);
  }
  #triangle-3 {
    fill: var(--clr-primary_dk);
  }
  #triangle-4 {
    transform: translateY(-100%);
    fill: var(--clr-primary_lt);
    opacity: 0;
  }
  
  #triangle-5 {
    transform: translateY(-200%);
    fill: #fff;
    opacity: 0;
  }

  svg:hover #triangle-1 {
    transform: translateY(200%);
    opacity: 0;
  }
  svg:hover #triangle-2 {
    transform: translateY(100%);
    opacity: 0;
  }
  svg:hover #triangle-3 {
    transform: translateY(27.7px);
  }
  svg:hover #triangle-4,
  svg:hover #triangle-5 {
    transform: translateY(0%);
    opacity: 1;
  }
</style>
<div id="triangles-component">
  <svg
  width="30"
  height="45"
  viewBox="0 0 30 45"
  fill="none"
  >
  <g id="triangle-group">
    <path
      id="triangle-1"
      d="M2.87011 31.1102C1.74724 29.8151 2.66714 27.8 4.3812 27.8H25.6188C27.3329 27.8 28.2528 29.8151 27.1299 31.1102L16.5111 43.3572C15.7136 44.2769 14.2864 44.2769 13.4889 43.3572L2.87011 31.1102Z"
    />
    <path
      id="triangle-2"
      d="M2.87011 17.2102C1.74724 15.9151 2.66714 13.9 4.3812 13.9H25.6188C27.3329 13.9 28.2528 15.9151 27.1299 17.2102L16.5111 29.4572C15.7136 30.3769 14.2864 30.3769 13.4889 29.4572L2.87011 17.2102Z"
    />
    <path
      id="triangle-3"
      d="M2.87011 3.31019C1.74724 2.01515 2.66714 0 4.3812 0H25.6188C27.3329 0 28.2528 2.01515 27.1299 3.31019L16.5111 15.5572C15.7136 16.477 14.2864 16.477 13.4889 15.5572L2.87011 3.31019Z"
    />
    <path
      id="triangle-4"
      d="M2.87011 17.2102C1.74724 15.9151 2.66714 13.9 4.3812 13.9H25.6188C27.3329 13.9 28.2528 15.9151 27.1299 17.2102L16.5111 29.4572C15.7136 30.3769 14.2864 30.3769 13.4889 29.4572L2.87011 17.2102Z"
    />
    <path
      id="triangle-5"
      d="M2.87011 3.31019C1.74724 2.01515 2.66714 0 4.3812 0H25.6188C27.3329 0 28.2528 2.01515 27.1299 3.31019L16.5111 15.5572C15.7136 16.477 14.2864 16.477 13.4889 15.5572L2.87011 3.31019Z"
    />
  </g>
  </svg>
</div>
`;

class Triangles extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("triangles-component", Triangles);
