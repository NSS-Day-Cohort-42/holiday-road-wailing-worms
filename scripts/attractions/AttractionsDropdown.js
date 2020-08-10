import { getAttractions, useAttractions } from "./AttractionProvider.js"

const contentTarget = document.querySelector(".attractionDropdown")
const eventHub = document.querySelector(".eventHub")

// new event listener that is activated by a change in the attractions dropdown
eventHub.addEventListener("change", changeEvent => {
    // attractionSelect is the id of the dropdown that the change is being listened for on
    if (changeEvent.target.id === "attractionSelect") {
        // the name of the new CustomEvent is attractionSelected
        const customEvent = new CustomEvent("attractionSelected", {
            // adds a detail of attractionId to the JSON object
            detail: {
                attractionId: changeEvent.target.value
            }
        })
        // dispatches the new custom event to the eventHub
        eventHub.dispatchEvent(customEvent)
    }
})

// This function is called in main.js as the entry point to the attractions portion it will get all of the attractions from the api.
// It will then set the attractions variable to useAttractions() which is a copy of attractions. 
// It then renders that array to the dropdown selector.
export const attractionSelect = () => {
    getAttractions()
        .then(() => {
            const attractions = useAttractions()
            render(attractions)
        })
}

// This function is responsible for printing each item from the attractions array to the dropdown selector
const render = (attractions) => {
    contentTarget.innerHTML += `
    <h1>Attractions</h1>
    <select class="dropdown dropdown--attraction" id="attractionSelect">
        <option value="0">Select an attraction...</option>
        ${
            attractions.map(attraction => {
                return `<option value="${ attraction.id }">${ attraction.name }</option>`
            }).join("")
        }
    </select>`
}