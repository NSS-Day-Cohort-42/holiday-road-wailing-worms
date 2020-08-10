import { saveTripHTML } from "./SaveIteneraryButton.js";
import { useParks } from "../parks/ParkProvider.js";
import { useEateries } from "../eateries/EateryProvider.js";
// import { useAttractions } from "./attractions/AttractionProvider.js";

const eventHub = document.querySelector(".eventHub")
const contentTarget = document.querySelector(".saveTripContainer")
let selectedPark = 0
let selectedEatery = 1
let selectedAttraction = 1
let nameEntered =  1

// Creating an event listener that listens for a click event.
// The event we're listening for is on the saveItinerary button.
eventHub.addEventListener("click", event => {
  if (event.target.id === "saveItinerary") {
    // creating a variable to target the .value of a particular class on the DOM
    const selectedParkCode = document.querySelector("#parkSelect").value
    const selectedEateryId = document.querySelector("#eateries").value
    // const selectedAttractionId = document.querySelector("#attractions").value
    console.log(selectedEateryId)
    const foundParkObject = useParks().find(
      (park) => {
        return selectedParkCode === park.parkCode
      })
      console.log(foundParkObject)
      
    const foundEateryObject = useEateries().find(
      (eatery) => {
        return parseInt(selectedEateryId) === eatery.id
      })
    console.log(selectedEateryId) 
     
    console.log(foundEateryObject)
    // const foundAttractionObject = useAttractions().find(
    // (attraction) => {
    //   return selectedAttractionId === attraction.businessName
    // })
      
    
    
  }
      
})




// eventHub.addEventListener("parkSelected", () => {
//   const saveTarget = document.querySelector(".saveButton")
//   console.log(`PreValue${selectedPark}`)
//   if (selectedParkValue !== "") {
//     selectedPark = 1    
//   }
//   console.log(`PostValue${selectedPark}`)
  
//   if (selectedPark === 1 && selectedEatery === 1 && selectedAttraction === 1 && nameEntered === 1 ) {
//     console.log("WORKING")
//     saveTarget.disabled = false
//   } else {
//     console.log("NOT WORKING")
//     saveTarget.disabled = true
//   }
  
// })





export const render = () => {
  let stringToPrint = ""

  stringToPrint = saveTripHTML()

  contentTarget.innerHTML = stringToPrint
}