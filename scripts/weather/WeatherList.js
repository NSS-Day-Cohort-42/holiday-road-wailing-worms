import { useWeather, getWeather } from "./WeatherProvider.js";
import { weatherHTMLRep } from "./WeatherHTMLConvertor.js";

const contentTarget = document.querySelector(".weatherContainer")

const render = (weatherArr) => {
  
  contentTarget.innerHTML = weatherHTMLRep(weatherArr)

}

export const weatherList = () => {
  getWeather()
    .then(() => {
      const weather = useWeather()
      render(weather)
    })
}