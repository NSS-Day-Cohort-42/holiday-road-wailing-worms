import { saveTripHTML } from "./SaveIteneraryButton.js";

const contentTarget = document.querySelector(".saveTripContainer")
const selectedPark = 1
const selectedEatery = 1
const selectedAttraction = 1
let nameEntered =  

export const renderItinObject = () => {

  if (selectedPark === 1 && selectedEatery === 1 && selectedAttraction === 1 && nameEntered === 1 ) {
    console.log("WORKING")
  } else {
    console.log("NOT WORKING")
  }

}


export const render = () => {
  let stringToPrint = ""

  stringToPrint = saveTripHTML()

  contentTarget.innerHTML = stringToPrint
}