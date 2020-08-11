export const itinHTMLObject = (itinObj) => {
  return `
  <div class="itinCard">
    <div class="tripName">${itinObj.name}'s Vacation Getaway</div>
    <div class="tripLocation">Our destination is ${itinObj.location}!!</div>
    <div class="tripAttraction">On the way we'll visit ${itinObj.attraction}</div>
    <div class="tripEatery">When it's time to eat we'll stop at ${itinObj.eatery}</div>
  </div>
  `
  }