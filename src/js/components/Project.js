const template = document.createElement("template");
template.innerHTML = `
  <style>
    #project {
      margin: 0 auto;
      max-width: 1100px;
    }
    
    .project-content {
      --margin: 1rem;
      --multiplier: calc(60rem - 100%);

      background-color: darkgray;
      margin: calc(var(--margin) * -1);
      padding: min(8%, 2rem);
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
      padding: 0 2rem;
    }

    h3, h2 {
      margin: .5rem 0;
    }

  </style>
  <div id="project">
    <div class="project-content">
      <div class="project-preview">
        <img
        src="https://dummyimage.com/300x200"
        alt="project thumb placeholder"
        />
        <div class="project-links">
          <a href="#" class="code-link">Github</a>
          <a href="#" class="demo-link">Demo</a>
        </div>
      </div>
      <div class="project-info">
        <div class="project-heading">
          <h2>Title</h2>
          <h3>caption</h3>
        </div>
        <div class="project-description">
          <p>
            Lorem ipsum dolor sit amet consectetadipisicing elit. Quas,
            aut.
          </p>
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
