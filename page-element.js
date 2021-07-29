class PageElement extends HTMLElement {
  constructor() {
    super();
    this._shadow = this.attachShadow({mode: "open"});

    const input = document.createElement("text-input");
    input.setAttribute("name", "Label");
    this._shadow.appendChild(input);

    const button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.setAttribute("disabled", "");
    this._shadow.appendChild(button);

    input.addEventListener("input", () => {
      button.removeAttribute("disabled");
    });
  }
}

customElements.define("page-element", PageElement);
  
