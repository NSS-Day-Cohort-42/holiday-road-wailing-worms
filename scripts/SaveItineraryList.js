import { saveTripHTML } from "./SaveIteneraryButton.js";

const eventHub = document.querySelector(".eventHub")
const contentTarget = document.querySelector(".saveTripContainer")
let selectedPark = 0
let selectedEatery = 1
let selectedAttraction = 1
let nameEntered =  1

eventHub.addEventListener("parkSelected", () => {
  const selectedPark = document.querySelector("#parkSelect").value
  if (selectedPark !== "") {
    selectedPark = 1    
  }
})



export const renderItinObject = () => {
  const saveTarget = document.querySelector(".saveButton")
  
  if (selectedPark === 1 && selectedEatery === 1 && selectedAttraction === 1 && nameEntered === 1 ) {
    console.log("WORKING")
    saveTarget.disabled = false
  } else {
    console.log("NOT WORKING")
    saveTarget.disabled = true
  }

}


export const render = () => {
  let stringToPrint = ""

  stringToPrint = saveTripHTML()

  contentTarget.innerHTML = stringToPrint
}