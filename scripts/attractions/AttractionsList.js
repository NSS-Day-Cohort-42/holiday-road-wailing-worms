import { getAttractions, useAttractions } from "./AttractionProvider.js";

const contentTarget = document.querySelector(".attractionDropdown")
const eventHub = document.querySelector(".eventHub")

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