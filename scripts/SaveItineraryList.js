import { saveTripHTML } from "./SaveIteneraryButton.js";

const contentTarget = document.querySelector(".saveTripContainer")
const selectedPark = 1
const selectedEatery = 1
const selectedAttraction = 1
let nameEntered =  0

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