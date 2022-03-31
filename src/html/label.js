import Element from "./element";

export default class Label extends Element {
	constructor(textContent, attr = [], className = undefined) {
		super("label", attr, className, textContent);
	}

	getLabel() {
		return this.getNode();
	}
}
