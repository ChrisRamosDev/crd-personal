const template = document.createElement("template");
template.innerHTML = `
  <style>
    #project {
      margin: 3rem auto;
      max-width: 1100px;
    }
    
    .project-content {
      --margin: 1rem;
      --multiplier: calc(60rem - 100%);

      background-color: darkgray;
      margin: calc(var(--margin) * -1);
      padding: min(4%, 2rem);
      display: flex;
      flex-wrap: wrap;
    }

    .project-preview {
      margin: 0 auto;
    }

    .project-links {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    
    .project-info {
      flex: 1 1 60%;
      padding: 1rem;
    }
    .project-heading {
      text-align: center;
    }
    .project-description {
      padding: min(4%, 2rem);
    }

  </style>
  <div id="project">
    <div class="project-content">
      <div class="project-preview">
        <slot name="image"></slot>
        <div class="project-links">
          <slot name="github"></slot>
          <slot name="demo"></slot>
        </div>
      </div>
      <div class="project-info">
        <div class="project-heading">
          <slot name="title"></slot>
        </div>
        <div class="project-description">
          <slot name="description"></slot>
        </div>
      </div>
    </div>
  </div>
`;

class Project extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("project-component", Project);
