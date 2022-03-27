export default class Element {
	#node;

	constructor(name, attributes, className, textContent) {
		this.#node = document.createElement(name);

		attributes.forEach((attr) =>
			this.#node.setAttribute(attr.getName(), attr.getValue())
		);

		this.addClass(className);
		this.setTextContent(textContent);
	}

	addClass(className) {
		if (className === undefined) {
			return;
		}

		if (!className(className.contains(" "))) {
			this.#node.classList.add(className);
			return;
		}

		const classNames = className.split(" ");
		[...classNames].forEach((classname) => this.#node.classList.add(classname));
	}

	setTextContent(textContent) {
		if (textContent === undefined) {
			return;
		}

		this.#node.textContent = textContent;
	}
}
