import "./style/style.css";
import Div from "./html/div";
import WindSymbol from "./images/extra-data-symbols/wind-symbol.png";
import HumiditySymbol from "./images/extra-data-symbols/humidity-symbol.png";
import PressureSymbol from "./images/extra-data-symbols/pressure-symbol.png";
import Image from "./html/image";
import Button from "./html/buttons";
import Weather from "./weather/weather";
import Attribute from "./html/attribute";
import Paragraph from "./html/paragraph";
import Form from "./html/form";
import Label from "./html/label";
import Element from "./html/element";

const content = document.getElementById("content");

const locationDivIdAttr = new Attribute("id", "location-div");
const locationDivAttrArr = [locationDivIdAttr];
const locationDiv = new Div(locationDivAttrArr);
const locationDivNode = locationDiv.getDiv();

const weatherDivIdAttr = new Attribute("id", "weather-div");
const weatherDivIdAttrArr = [weatherDivIdAttr];
const weatherDiv = new Div(weatherDivIdAttrArr);
const weatherDivNode = weatherDiv.getDiv();

const iconDetailsDivIdAttr = new Attribute("id", "icon-details-div");
const iconDetailsDivAttrArr = [iconDetailsDivIdAttr];
const iconDetailsDiv = new Div(iconDetailsDivAttrArr);
const iconDetailsDivNode = iconDetailsDiv.getDiv();

const iconIdAttr = new Attribute("id", "weather-icon");
const iconAltAttr = new Attribute("alt", "weather icon");
const iconAttrArr = [iconIdAttr, iconAltAttr];
const icon = new Image(iconAttrArr);
const iconNode = icon.getImage();

const iconTextIdAttr = new Attribute("id", "icon-details-text");
const iconTextAttrArr = [iconTextIdAttr];
const iconText = new Paragraph(iconTextAttrArr);
const iconTextNode = iconText.getParagraph();

const temperatureDivIdAttr = new Attribute("id", "temperature-div");
const temperatureDivAttrArr = [temperatureDivIdAttr];
const temperatureDiv = new Div(temperatureDivAttrArr);
const temperatureDivNode = temperatureDiv.getDiv();
temperatureDivNode.dataset.unit = "celsius";
let { unit } = temperatureDivNode.dataset;

const temperatureId = new Attribute("id", "temperature");
const temperatureAttrArr = [temperatureId];
const temperature = new Paragraph(temperatureAttrArr);
const temperatureNode = temperature.getParagraph();

const celsiusId = new Attribute("id", "celsius");
const celsiusAttrArr = [celsiusId];
const celsius = new Button(celsiusAttrArr, "\u2103", "selected-unit");
const celsiusNode = celsius.getButton();

const fahrenheitId = new Attribute("id", "fahrenheit");
const fahrenheitAttrArr = [fahrenheitId];
const fahrenheit = new Button(fahrenheitAttrArr, "\u2109", "unselected-unit");
const fahrenheitNode = fahrenheit.getButton();

const extraDataDivId = new Attribute("id", "extra-data-div");
const extraDataAttrArr = [extraDataDivId];
const extraDataDiv = new Div(extraDataAttrArr);
const extraDataDivNode = extraDataDiv.getDiv();

const symbolIds = ["wind-symbol", "humidity-symbol", "pressure-symbol"];
const symbols = [WindSymbol, HumiditySymbol, PressureSymbol];
const symbolAlts = ["wind symbol", "humidity symbol", "pressure symbol"];

(() => {
	for (let i = 0; i < 3; i += 1) {
		const itemDiv = new Div([], "extra-data-item-div");

		const symbolId = new Attribute("id", symbolIds[i]);
		const symbolSrc = new Attribute("src", symbols[i]);
		const symbolAlt = new Attribute("alt", symbolAlts[i]);
		const symbolAttrArr = [symbolId, symbolSrc, symbolAlt];
		const symbol = new Image(symbolAttrArr, "symbol");

		const itemName = new Paragraph([], symbolAlts[i].split(" ")[0]);
		const itemNameNode = itemName.getParagraph();

		const itemStatId = new Attribute(
			"id",
			`${symbolAlts[i].split(" ")[0]}-stat`
		);
		const itemStat = new Paragraph([itemStatId]);

		const itemDivNode = itemDiv.getDiv();

		itemDivNode.append(symbol.getImage());
		itemDivNode.append(itemNameNode);
		itemDivNode.append(itemStat.getParagraph());
		extraDataDivNode.append(itemDivNode);
	}
})();

const formMethod = new Attribute("method", "get");
const formAction = new Attribute("action", "./");
const formAttrArr = [formMethod, formAction];
const form = new Form(formAttrArr);
const formNode = form.getForm();

const labelFor = new Attribute("for", "location-input");
const labelAttrArr = [labelFor];
const label = new Label("Get weather for: ", labelAttrArr);
const labelNode = label.getLabel();

const inputId = new Attribute("id", "location-input");
const inputType = new Attribute("type", "text");
const inputPlaceHolder = new Attribute("placeholder", "Enter a city");
const inputAttrArr = [inputId, inputType, inputPlaceHolder];
const input = new Element("input", inputAttrArr);
const inputNode = input.getNode();

const submitId = new Attribute("id", "submit");
const submitValue = new Attribute("value", "submit");
const submitType = new Attribute("type", "submit");
const submitAttrArr = [submitId, submitValue, submitType];
const submit = new Element("input", submitAttrArr);
const submitNode = submit.getNode();

const weather = new Weather();
weather.fetchWeather(icon, iconText, temperature, unit);
submitNode.addEventListener("click", () => {
	const location = inputNode.value;
	weather.fetchWeather(icon, iconText, temperature, unit, location);

	if (unit === "fahrenheit") {
		celsiusNode.click();
		fahrenheitNode.click();
	}
});

const unitBtns = [celsiusNode, fahrenheitNode];

unitBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		weather.changeUnit(btn, temperatureDivNode, temperature);
		unit = btn.getAttribute("id");
	});
});

formNode.append(labelNode);
formNode.append(inputNode);
formNode.append(submitNode);
locationDivNode.append(formNode);
temperatureDivNode.append(temperatureNode);
temperatureDivNode.append(celsiusNode);
temperatureDivNode.append(fahrenheitNode);
iconDetailsDivNode.append(iconNode);
iconDetailsDivNode.append(iconTextNode);
weatherDivNode.append(iconDetailsDivNode);
weatherDivNode.append(temperatureDivNode);
weatherDivNode.append(extraDataDivNode);
content.append(locationDivNode);
content.append(weatherDivNode);
