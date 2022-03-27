export default class Element {
	#node;

	constructor(name, attributes, className, textContent) {
		this.#node = document.createElement(name);

		this.addAttributes(attributes);
		this.addClass(className);
		this.setTextContent(textContent);
	}

	addAttributes(attributes) {
		attributes.forEach((attr) =>
			this.#node.setAttribute(attr.getName(), attr.getValue())
		);
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

	getNode() {
		return this.#node;
	}
}
