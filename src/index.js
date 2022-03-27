import Div from "./html/div";
import Weather from "./weather/weather";
import Attribute from "./html/attribute";
import "./style/style.css";
import Image from "./html/image";
import Paragraph from "./html/paragraph";

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

const weather = new Weather();
weather.fetchWeather(icon, iconText);
locationDivNode.addEventListener("click", () => {
	weather.fetchWeather(icon, iconText);
});

iconDetailsDivNode.append(iconNode);
iconDetailsDivNode.append(iconTextNode);
weatherDivNode.append(iconDetailsDivNode);
content.append(locationDivNode);
content.append(weatherDivNode);
