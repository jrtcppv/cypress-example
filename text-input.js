class TextInput extends HTMLElement {
  constructor() {
    super();
    this._shadow = this.attachShadow({mode: "open"});

    this.label = document.createElement("label");
    this.label.setAttribute("class", "d-flex flex-justify-between flex-items-center py-1");
    this._shadow.appendChild(this.label);

    this._name = document.createTextNode("");
    this.label.appendChild(this._name);

    this._input = document.createElement("input");
    this._input.setAttribute("type", "text");
    this.label.appendChild(this._input);
  }

  static get observedAttributes() {
    return ["name"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "name":
        this._name.nodeValue = newValue;
        break;
    }
  }
}

customElements.define("text-input", TextInput);
