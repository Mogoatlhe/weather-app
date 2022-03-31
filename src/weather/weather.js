import "regenerator-runtime/runtime";
import Swal from "sweetalert2";
import Attribute from "../html/attribute";

export default class Weather {
	#weather;
	#bodyNode;
	#location;
	#childNodes;

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

	async fetchWeather(icon, iconText, temp, unit, location) {
		try {
			this.#bodyNode.classList.add("loader");

			this.#childNodes = this.#removeChildNodes();
			await this.#getWeather(location, icon, iconText, temp, unit);
			this.#location = location;
		} catch (e) {
			this.#location =
				this.#location === undefined ? "Pretoria" : this.#location;
			Swal.fire({
				icon: "error",
				title: `${e}: Invalid city name`,
				text: `showing ${this.#location} weather instead`,
			});
			await this.#getWeather(this.#location, icon, iconText, temp, unit);
		} finally {
			this.#setExtraItemData();
			this.#bodyNode.classList.remove("loader");
		}
	}

	setCelsius(temp) {
		const kelvin = this.#weather.main.temp;
		const celsius = Math.round(kelvin - 273.15);
		temp.setTextContent(celsius);
		this.#setExtraItemData();
	}

	setFahrenheit(temp) {
		const kelvin = this.#weather.main.temp;
		const fahrenheit = Math.round(((kelvin - 273.15) * 9) / 5 + 32);
		temp.setTextContent(fahrenheit);
	}

	changeUnit(btn, temperatureDivNode, temp) {
		let otherBtn;
		const id = btn.getAttribute("id");

		if (temperatureDivNode.dataset.unit === id) {
			return;
		}

		btn.classList.add("selected-unit");
		btn.classList.remove("unselected-unit");

		if (btn.nextSibling !== null) {
			otherBtn = btn.nextSibling;
			this.setCelsius(temp);
		} else {
			otherBtn = btn.previousSibling;
			this.setFahrenheit(temp);
		}

		otherBtn.classList.remove("selected-unit");
		otherBtn.classList.add("unselected-unit");

		// eslint-disable-next-line no-param-reassign
		temperatureDivNode.dataset.unit = id;
	}

	async #getWeather(location, icon, iconText, temp, unit) {
		this.#weather = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=cdb642150b8871cb21adf69e7bd3ddd6`,
			{
				mode: "cors",
			}
		);

		if (this.#weather.status !== 200) {
			throw this.#weather.statusText;
		}

		this.#weather = await this.#weather.json();

		if (this.#weather.message !== undefined) {
			throw this.#weather.message;
		}

		const iconId = this.#weather.weather[0].icon;
		const iconSrcAttr = new Attribute(
			"src",
			` http://openweathermap.org/img/wn/${iconId}@2x.png`
		);

		icon.addAttributes([iconSrcAttr]);
		iconText.setTextContent(this.#weather.weather[0].description);

		if (unit === "celsius") {
			this.setCelsius(temp);
		} else {
			this.setFahrenheit(temp);
		}

		this.#addChildren(this.#childNodes);
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

	#setExtraItemData() {
		if (document.getElementById("wind-stat") === null) {
			return;
		}

		document.getElementById("wind-stat").textContent = `${
			this.#weather.wind.speed
		} m/s`;

		document.getElementById("humidity-stat").textContent = `${
			this.#weather.main.humidity
		}%`;

		document.getElementById("pressure-stat").textContent = `${
			this.#weather.main.pressure
		} hPa`;
	}
}
