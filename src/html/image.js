import Element from "./element";

export default class Image extends Element {
	constructor(attrs = [], className = undefined) {
		super("img", attrs, className);
	}

	getImage() {
		return this.getNode();
	}
}
