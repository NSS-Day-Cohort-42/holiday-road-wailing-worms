/*
 *   ParkDropdown component that renders a select HTML element
 *   which lists all parks designated National Parks in the parks.json API
 */
import { useParks, getAllParkData } from "./ParkProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".park-dropdown")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "parkSelect") {
        // Get the name of the selected selected Park
        
        console.log("ParkDropdown: User chose a park option")
        const selectedPark = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("parkSelected", {
            detail: {
                officer: selectedPark
            }
        })
        console.log("ParkDropdown: Dispatch custom parkSelected event")
        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

const render = parksCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="parkSelect">
            <option value="0">Please select a National Park...</option>
            ${
                parksCollection.map(
                    parkObject => {
                        return `<option value="${parkObject.parkCode}">${parkObject.fullName}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

export const parkSelect = () => {
    getAllParkData().then(() => {
        // Get all officers from application state
        const nationalParks = useParks()
        
        render(nationalParks)
    })
}