import { eateriesSelect, eateriesRender } from "../scripts/eateries/EateriesDropdown.js"
import "../scripts/eateries/EateriesList.js"
import "./parks/ParkList.js"
import { parkSelect } from "./parks/ParkDropdown.js"
import "../scripts/parks/ParkDetailButton.js"
import "./weather/WeatherList.js"
import { render } from "./Itinerary/SaveItineraryList.js"
import { attractionSelect } from "./attractions/AttractionsDropdown.js"
import "./attractions/AttractionsList.js"

parkSelect()
eateriesSelect()
render()


// Entry point for attractions which is called on AttractionsDropdown.js
attractionSelect()