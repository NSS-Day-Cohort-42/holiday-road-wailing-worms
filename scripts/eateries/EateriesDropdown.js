import { getEateries, useEateries } from "./EateryProvider.js";

const contentTarget = document.querySelector('.eatery-dropdown')
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", (changeEvent) => {

    // Construct the event based on agreement with Steve
    const eateryEvent = new CustomEvent("eaterySelected", {
        detail: {
            eateryid: changeEvent.target.value
        }
    })

    eventHub.dispatchEvent(eateryEvent)
})

export const eateriesRender = (eateriesCollection) => {
    contentTarget.innerHTML = `<select>
    <option value="0"> please select an eatery</option>
    ${
        eateriesCollection.map(eateriesObj => `<option value="${eateriesObj.id}"> ${eateriesObj.name}</option>` ).join('')
        }    
    </select>`
}

export const eateriesSelect = () => {
    getEateries().then(() => {
        const eateries = useEateries()
        eateriesRender(eateries);
    
    })
}