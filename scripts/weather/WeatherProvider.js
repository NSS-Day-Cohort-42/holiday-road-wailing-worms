// Used import statement to gain access to the API keys stored in Settings.js
import key from "../Settings.js"

// Created an empty array below which will hold a copy of API call for specific lat,long.
let weatherArray = []

// Function created to make a call to the open weather API for a specific location.
// 2 parameters are passed in which will hold the values of the latitude and logitude of the selected park.
export const getWeather = (lat, long) => {
  //Fetches data by interpolating lat and long along with imported api key
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly&appid=${key.weatherKey}`)
  .then(res => res.json())
  .then(
    parsedWeather => {
      // API return in this case is an object.
      // instead of just pulling in the object I used .notation to drill in to the daily section of the object.
      // This returned an array of days I was able to then store as the above weatherArray.
      weatherArray = parsedWeather.daily
    }
    )
  }
  
  // This function simply returns a copy of that array data for later use.
  export const useWeather = () => weatherArray.slice()
