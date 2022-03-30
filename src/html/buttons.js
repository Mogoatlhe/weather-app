import Element from "./element";

export default class Button extends Element {
	constructor(attr = [], textContent = undefined, className = undefined) {
		super("button", attr, className, textContent);
	}

	getButton() {
		return this.getNode();
	}
}
