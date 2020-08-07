import key from "../Settings.js"

// need to import knowledge of selected park to ref lat and long to interpolate below

let weatherArray = []

export const useWeather = () => weatherArray.slice()

export const getWeather = (lat, long) => {
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly&appid=${key.weatherKey}`)
  .then(res => res.json())
  .then(
    parsedWeather => {
      weatherArray = parsedWeather.daily
    }
  )
}

