import Div from "./html/div";
import Weather from "./weather/weather";
import Attribute from "./html/attribute";
import "./style/style.css";

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

const weather = new Weather();
weather.setWeather();
locationDivNode.addEventListener("click", () => {
	weather.setWeather();
});

weatherDivNode.append(iconDetailsDivNode);
content.append(locationDivNode);
content.append(weatherDivNode);
