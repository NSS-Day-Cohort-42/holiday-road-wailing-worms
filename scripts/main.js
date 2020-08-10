import { attractionSelect } from "./attractions/AttractionsDropdown.js"
import "./attractions/AttractionsList.js"
import { eateriesSelect, eateriesRender } from "../scripts/eateries/EateriesDropdown.js"
import "../scripts/eateries/EateriesList.js"
import { weatherList } from "./weather/WeatherList.js"
import "./parks/ParkList.js"
import { parkSelect } from "./parks/ParkDropdown.js"
import "../scripts/parks/ParkDetailButton.js"

parkSelect()
weatherList()

// entry point for attractions
attractionSelect()
eateriesSelect()