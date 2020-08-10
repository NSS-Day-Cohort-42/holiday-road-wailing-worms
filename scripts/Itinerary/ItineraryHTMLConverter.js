export const itinHTMLObject = (itinObj) => {
  return `
  <div class ="tripName">${itinObj.name}</div>
  <div class ="tripLocation">${itinObj.location}</div>
  <div class ="tripAttraction">${itinObj.attraction}</div>
  <div class ="tripEatery">${itinObj.eatery}</div>
  `
  }