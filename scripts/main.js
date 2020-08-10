import { eateriesSelect, eateriesRender } from "../scripts/eateries/EateriesDropdown.js";
import "../scripts/eateries/EateriesList.js";
import "./parks/ParkList.js"
import { parkSelect } from "./parks/ParkDropdown.js"
import "../scripts/parks/ParkDetailButton.js"
import "./weather/WeatherList.js"
import { render } from "./SaveItineraryList.js";

parkSelect()
eateriesSelect();
render()


