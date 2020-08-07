import { getAttractions, useAttractions, useAttractionById } from "./AttractionProvider.js";

const contentTarget = document.querySelector(".attractionDropdown")
const eventHub = document.querySelector(".eventHub")

eventHub.addEventListener("change", (event) => {
    if(event.target.id === "attractionSelect"){
        const attractionId = event.target.value
        const attractionName = useAttractionById(attractionId).name
        const customEvent = new CustomEvent("attractionSelected", {
            detail: {
                attractionId: attractionId,
                attractionName: attractionName
            }
        })
        eventHub.dispatchEvent(customEvent)
        console.log("custom event triggered", customEvent)
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
    <select class="dropdown dropdown--attraction" id="attractionSelect">
        <option value="0">Select an attraction...</option>
        ${
            attractions.map(attraction => {
                return `<option value="${attraction.id}">${attraction.name}</option>`
            }).join("")
        }
    </select>`
}