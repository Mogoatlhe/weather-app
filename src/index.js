import Div from "./html/div";
import Weather from "./weather/weather";
import Attribute from "./html/attribute";
import "./style/style.css";
import Image from "./html/image";
import Paragraph from "./html/paragraph";
import Button from "./html/buttons";

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
const { unit } = temperatureDivNode.dataset;

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

const weather = new Weather();
weather.fetchWeather(icon, iconText, temperature, unit);
locationDivNode.addEventListener("click", () => {
	weather.fetchWeather(icon, iconText, temperature, unit);
});

const unitBtns = [celsiusNode, fahrenheitNode];

unitBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		weather.changeUnit(btn, temperatureDivNode, temperature);
	});
});

temperatureDivNode.append(temperatureNode);
temperatureDivNode.append(celsiusNode);
temperatureDivNode.append(fahrenheitNode);
iconDetailsDivNode.append(iconNode);
iconDetailsDivNode.append(iconTextNode);
weatherDivNode.append(iconDetailsDivNode);
weatherDivNode.append(temperatureDivNode);
content.append(locationDivNode);
content.append(weatherDivNode);
