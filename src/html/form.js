import Element from "./element";

export default class Form extends Element {
	constructor(attr = [], className = undefined) {
		super("form", attr, className);
	}

	getForm() {
		return this.getNode();
	}
}
