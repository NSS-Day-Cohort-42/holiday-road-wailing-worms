import { getAttractions, useAttractions } from "./AttractionProvider.js"

const contentTarget = document.querySelector(".attractionDropdown")
const eventHub = document.querySelector(".eventHub")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "attractionSelect") {
        const customEvent = new CustomEvent("attractionSelected", {
            detail: {
                attractionId: changeEvent.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const attractionSelect = () => {
    getAttractions()
        .then(() => {
            const attractions = useAttractions()
            render(attractions)
        })
}

const render = (attractions) => {
    contentTarget.innerHTML += `
    <h1>Attractions</h1>
    <select class="dropdown dropdown--attraction" id="attractionSelect">
        <option value="0">Select an attraction...</option>
        ${
            attractions.map(attraction => {
                return `<option value="${attraction.id}">${attraction.name}</option>`
            }).join("")
        }
    </select>`
}