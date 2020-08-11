import { getEateries, useEateries } from "./EateryProvider.js";

const contentTarget = document.querySelector('.eateryDropdown')
const eventHub = document.querySelector(".eventHub")

eventHub.addEventListener("change", (changeEvent) => {
     if (changeEvent.target.id === 'eateries') {
  
    const eateryEvent = new CustomEvent("eaterySelected", {
        detail: {
            eateryId: changeEvent.target.value
            // this actually gives you the value(the id) of what eatery is selected
        }
    })

    eventHub.dispatchEvent(eateryEvent)
    }
})

export const eateriesRender = (eateriesCollection) => {
    contentTarget.innerHTML = `<h1 class="eateryHeader">Choose an eatery</h1>
    <select id="eateries">
    <option value="0"> select an eatery...</option>
    
    ${                                          
        eateriesCollection.map(eateriesObj => `<option value="${eateriesObj.id}"> ${eateriesObj.businessName}</option>` ).join('')
        }                                                       
    </select>
   `
}
// loops over the the eateries and returns the id of each option & displays the business names on the dom.


export const eateriesSelect = () => {
    getEateries().then(() => {
        const eateries = useEateries()
        eateriesRender(eateries);
    
    })
}