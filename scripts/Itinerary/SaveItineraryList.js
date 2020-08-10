import { saveTripHTML } from "./SaveIteneraryButton.js";
import { useParks } from "../parks/ParkProvider.js";
import { useEateries } from "../eateries/EateryProvider.js";
import { useAttractions } from "../attractions/AttractionProvider.js";
import { saveItin, useItineraries } from "./itineraryProvider.js";
import { itinHTMLObject } from "./ItineraryHTMLConverter.js";


const eventHub = document.querySelector(".eventHub")
const contentTarget = document.querySelector(".saveTripContainer")
const itinTarget = document.querySelector(".mainContainer--Right")
let selectedPark = 0
let selectedEatery = 1
let selectedAttraction = 1
let nameEntered =  1

// Creating an event listener that listens for a click event.
// The event we're listening for is on the saveItinerary button.
eventHub.addEventListener("click", event => {
  if (event.target.id === "saveItineraryButton") {
    // creating a variable to target the .value of a particular class on the DOM
    const selectedParkCode = document.querySelector("#parkSelect").value
    const selectedEateryId = document.querySelector("#eateries").value
    const selectedAttractionId = document.querySelector("#attractionSelect").value
    const itinName = document.querySelector("#saveItineraryName").value
    

    const foundParkObject = useParks().find(
      (park) => {
        return selectedParkCode === park.parkCode
      })
      console.log(foundParkObject.name)
      
    const foundEateryObject = useEateries().find(
      (eatery) => {
        return parseInt(selectedEateryId) === eatery.id
      })
      console.log(foundEateryObject.businessName)

    const foundAttractionObject = useAttractions().find(
      (attraction) => {
        return parseInt(selectedAttractionId) === attraction.id
      })
      console.log(foundAttractionObject.name)

    const foundItinName = itinName
      console.log(foundItinName)
      
    const newItinEntry = {
      name: foundItinName,
      location: foundParkObject.name,
      attraction: foundAttractionObject.name,
      eatery: foundEateryObject.businessName
    }

    
    saveItin(newItinEntry)
    
  }
      
})

eventHub.addEventListener("itinStateChanged", () => {
  const newItins = useItineraries()
  renderItineraries(newItins)
})

const renderItineraries = (itinArr) => {
  let itinHTMLRep = ""
    for (const itin of itinArr) {
      itinHTMLRep += itinHTMLObject(itin)
    }
  itinTarget.innerHTML = `
  <div class="importedItin">
    ${itinHTMLRep}
  </div>
  `
}


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