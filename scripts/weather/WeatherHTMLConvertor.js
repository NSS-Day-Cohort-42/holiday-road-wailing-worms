
export const weatherHTMLRep = (weatherObj) => {
  const kelvinConvert = Math.round(((`${weatherObj.temp.day}`-273.15)*1.8)+32)
  return`
  <div class="weatherContainerOutput">
    <div>${new Date((weatherObj.dt*1000)).toLocaleDateString()}</div>
    <div>Avg. Temp:</div>
    <div>${kelvinConvert}&degF</div>
    <div>${weatherObj.weather[0].main}</div>
  </div>
  `
}
