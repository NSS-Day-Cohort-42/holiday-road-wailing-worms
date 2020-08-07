import key from "../Settings.js"

let weatherArray = []

export const useWeather = () => weatherArray.slice()

export const getWeather = () => {
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly&appid=${key.weatherKey}`)
  .then(res => res.json())
  .then(
    parsedWeather => {
      weatherArray = parsedWeather.daily
      console.log(weatherArray)
    }
  )
}

