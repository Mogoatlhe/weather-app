import "regenerator-runtime/runtime";

export default class Weather {
	#weather;
	#bodyNode;
	#location;

	constructor(location) {
		this.#location = location;
		this.#bodyNode = document.querySelector("body");
	}

	setLocation(location) {
		this.#location = location;
	}

	getLocation() {
		return this.#location;
	}

	async setWeather() {
		try {
			const childNodes = this.#removeChildNodes();
			this.#bodyNode.classList.add("loader");
			this.#weather = await fetch(
				"https://api.openweathermap.org/data/2.5/weather?q=Pretoria&APPID=cdb642150b8871cb21adf69e7bd3ddd6",
				{
					mode: "cors",
				}
			);

			this.#weather = await this.#weather.json();
			this.#addChildren(childNodes);
			this.#bodyNode.classList.remove("loader");
		} catch (e) {
			console.log(e);
		}
	}

	#removeChildNodes() {
		const children = this.#bodyNode.childNodes;
		const childNodes = [];

		[...children].forEach((child) =>
			childNodes.push(this.#bodyNode.removeChild(child))
		);

		return childNodes;
	}

	#addChildren(children) {
		[...children].forEach((child) => this.#bodyNode.append(child));
	}
}
