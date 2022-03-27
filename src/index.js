import Div from "./html/div";
import Weather from "./weather/weather";
import Attribute from "./html/attribute";
import "./style/style.css";

const content = document.getElementById("content");

const locationDivIdAttr = new Attribute("id", "location-div");
const locationDivAttrArr = [locationDivIdAttr];
const locationDiv = new Div(undefined, locationDivAttrArr);
const locationDivNode = locationDiv.getDiv();

const weatherDivIdAttr = new Attribute("id", "weather-div");
const weatherDivIdAttrArr = [weatherDivIdAttr];
const weatherDiv = new Div(undefined, weatherDivIdAttrArr);
const weatherDivNode = weatherDiv.getDiv();

const weather = new Weather();
weather.setWeather();
locationDivNode.addEventListener("click", () => {
	weather.setWeather();
});

content.append(locationDivNode);
content.append(weatherDivNode);
