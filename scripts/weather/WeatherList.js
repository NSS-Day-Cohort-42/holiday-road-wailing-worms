import { useWeather, getWeather } from "./WeatherProvider.js";
import { weatherHTMLRep } from "./WeatherHTMLConvertor.js";
import { useParks } from "../parks/ParkProvider.js";

// Defined 2 variables.  One contains EventHub locatrion and the other is the container for weather
const eventHub = document.querySelector(".eventHub")
const contentTarget = document.querySelector(".weatherContainer")

// Listening for a park to be selected.  When one is selected the following executes.
eventHub.addEventListener("parkSelected", () => {
  // looking to the DOM to see the value of the park select ID
  // Stored it in a variable called selectedParkCode
  const selectedParkCode = document.querySelector("#parkSelect").value
  
  // Now using that park code loop through the park.json file and and return the park that matches
  const parkArray = useParks()
  const foundParkObject = parkArray.find(
    (park) => {
      return selectedParkCode === park.parkCode
    })
    
    const lat = foundParkObject.latitude
    const long = foundParkObject.longitude
    const name = foundParkObject.name
    
    getWeather(lat, long)
    .then(() => {
      const weather = useWeather()
      render(weather, name)
    })

      
  })
    
    
  const render = (weatherArr, name) => {
    let weatherHTMLString = ""

  for (let i = 1; i < 6; i++) {
    const element = weatherArr[i];
    weatherHTMLString += weatherHTMLRep(element)
    
  }
  
  contentTarget.innerHTML = `
  <div class="weatherHeading">5 day forecast for ${name}</div>
  <div class="weatherString">${weatherHTMLString}</div>
  `

}
