class HTMLAnchor {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
  
    render() {
        return `<a href="#"></a>`;
    }
  
    rotate(angle) {
        this.x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        this.y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
    }
  
  }
  
  class HTMLElementInput extends HTMLAnchor {
  
    constructor(x, y, width, height, type, disabled) {
        super(x, y, width, height);
        this.type = type;
        this.disabled = disabled;
    }
  
    render() {
        const disabledClass = this.disabled ? "disabled" : "";
  
        return `<input type="${this.type}" class="${disabledClass}" x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" />`;
    }
  
  }
  
  const input = new HTMLElementInput(35, 20, 102, 90, "text", true);
  console.log(input.render());
  