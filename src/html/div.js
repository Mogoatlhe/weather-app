import Element from "./element";

export default class Div extends Element {
	constructor(className, attr = []) {
		super("div", attr, className);
	}

	getDiv() {
		return this.getNode();
	}
}
