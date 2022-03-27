import Element from "./element";

export default class Paragraph extends Element {
	constructor(attr = [], textContent = "", className = undefined) {
		super("p", attr, className, textContent);
	}

	getParagraph() {
		return this.getNode();
	}
}
