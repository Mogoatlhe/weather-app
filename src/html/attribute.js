export default class Attribute {
	#name;

	#value;

	constructor(name, value) {
		this.setName(name);
		this.setValue(value);
	}

	setName(name) {
		this.#name = name;
	}

	setValue(value) {
		this.#value = value;
	}

	getName() {
		return this.#name;
	}

	getValue() {
		return this.#value;
	}
}
