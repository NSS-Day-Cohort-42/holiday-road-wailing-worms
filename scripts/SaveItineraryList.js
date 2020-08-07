import { saveTripHTML } from "./SaveIteneraryButton.js";

const contentTarget = document.querySelector(".saveTripContainer")

export const render = () => {
  let stringToPrint = ""

  stringToPrint = saveTripHTML()

  contentTarget.innerHTML = stringToPrint
}