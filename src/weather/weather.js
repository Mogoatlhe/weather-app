import "regenerator-runtime/runtime";

/* eslint-disable lines-between-class-members */
export default class Weather {
	#weather;
	#location;

	constructor(location) {
		this.#location = location;
	}

	setLocation(location) {
		this.#location = location;
	}

	getLocation() {
		return this.#location;
	}

	async setWeather() {
		try {
			this.#weather = await fetch(
				"https://api.openweathermap.org/data/2.5/weather?q=Pretoria&APPID=cdb642150b8871cb21adf69e7bd3ddd6",
				{
					mode: "cors",
				}
			);

			this.#weather = await this.#weather.json();
		} catch (e) {
			console.log(e);
		}
	}
}
