import Div from "./html/div";
import Weather from "./weather/weather";
import Attribute from "./html/attribute";

const content = document.getElementById("content");

const locationDivIdAttr = new Attribute("id", "location-div");
const locationDivAttrArr = [locationDivIdAttr];
const locationDiv = new Div(undefined, locationDivAttrArr);
const locationDivNode = locationDiv.getDiv();

const weather = new Weather();
weather.setWeather();

content.append(locationDivNode);
