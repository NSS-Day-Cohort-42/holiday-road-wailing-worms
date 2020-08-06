import { useWeather, getWeather } from "./WeatherProvider.js";
import { weatherHTMLRep } from "./WeatherHTMLConvertor.js";

const contentTarget = document.querySelector(".weatherContainer")

const render = (weatherArr) => {
  let weatherString = "8"
  
  weatherString += weatherHTMLRep(weatherArr)
  contentTarget.innerHTML = weatherString

}

export const weatherList = () => {
  getWeather()
    .then(() => {
      const weather = useWeather()
      render(weather)
    })
}