
class HTMLElement {
    constructor(className, id) {
        console.log("---- HTMLElement constructor ----", this);
        this.className = className;
        this.id = id;
    }

    render() {
        return "Tag rendered from HTMLElement.prototype";
    }

    rotate() {
        console.log("Common rotate", this);
    }
}

class HTMLAnchor extends HTMLElement {
    constructor(x, y, width, height, className, id) {
        super(className, id);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    render() {
        return `<a href="#" class="${this.className}" id="${this.id}" style="position: absolute; left: ${this.x}px; top: ${this.y}px; width: ${this.width}px; height: ${this.height}px;"></a>`;
    }
}

class HTMLElementInput extends HTMLAnchor {
    constructor(x, y, width, height, className, id, type, disabled) {
        super(x, y, width, height, className, id);
        this.type = type;
        this.disabled = disabled;
    }

    render() {
        const disabledClass = this.disabled ? "disabled" : "";
        return `<input type="${this.type}" class="${this.className} ${disabledClass}" id="${this.id}" style="position: absolute; left: ${this.x}px; top: ${this.y}px; width: ${this.width}px; height: ${this.height}px;" />`;
    }

    rotate() {
        console.log("Input rotate", this);
    }
}

const input = new HTMLElementInput(10, 20, 30, 90, "input-class", "input-id", "text", true);
console.log(input.render());


  