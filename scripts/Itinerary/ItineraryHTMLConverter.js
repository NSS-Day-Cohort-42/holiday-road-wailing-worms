export const itinHTMLObject = (itinObj) => {
  return `
  <div class="itinCard">
    <div class="tripName"><strong>${itinObj.name}'s</strong> Vacation Getaway</div>
    <div class="tripLocation">Our destination is <br><strong>${itinObj.location}!!</strong></div>
    <div class="tripAttraction">On the way we'll visit <br> <strong>${itinObj.attraction}</strong></div>
    <div class="tripEatery">When it's time to eat we'll stop at<br><strong>${itinObj.eatery}</strong></div>
  </div>
  `
  }