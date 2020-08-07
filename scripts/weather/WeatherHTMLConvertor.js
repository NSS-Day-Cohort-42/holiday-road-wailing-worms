
export const weatherHTMLRep = (weatherObj) => {
  const kelvinConvert = Math.round(((`${weatherObj[2].temp.day}`-273.15)*1.8)+32)
  return`
  <div>Date:</div>
  <div>${new Date((weatherObj[0].dt*1000)).toLocaleDateString()}</div>
  <div>Avg. Temp:</div>
  <div>${kelvinConvert}&deg Fahrenheit</div>

  <div>Date:</div>
  <div>${new Date((weatherObj[5].dt*1000)).toLocaleDateString()}</div>
  <div>Avg. Temp:</div>
  <div>${kelvinConvert}&deg Fahrenheit</div>
  `
}
