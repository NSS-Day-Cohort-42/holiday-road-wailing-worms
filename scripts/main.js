import { weatherList } from "./weather/WeatherList.js";
import { render, renderItinObject } from "./SaveItineraryList.js";
import "./parks/ParkList.js"
import { parkSelect } from "./parks/ParkDropdown.js"
import "../scripts/parks/ParkDetailButton.js"

parkSelect()
weatherList()
render()
renderItinObject()

