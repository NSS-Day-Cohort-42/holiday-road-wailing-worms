import { useWeather, getWeather } from "./WeatherProvider.js";
import { weatherHTMLRep } from "./WeatherHTMLConvertor.js";

const contentTarget = document.querySelector(".weatherContainer")
// just need to change these variables below to coincide with the data travis extracts from api
const name = "selected park var"
const lat = "36.1627"
const long = "-86.7816"



const render = (weatherArr) => {
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

export const weatherList = () => {
  getWeather(lat, long)
    .then(() => {
      const weather = useWeather()
      render(weather)
    })
}