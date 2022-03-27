import Element from "./element";

export default class Div extends Element {
	constructor(attr = [], className = undefined) {
		super("div", attr, className);
	}

	getDiv() {
		return this.getNode();
	}
}
