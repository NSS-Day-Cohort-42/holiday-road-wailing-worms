/*
 *   ParkDropdown component that renders a select HTML element
 *   which lists all parks designated National Parks in the parks.json API
 */
import { useParks, getAllParkData } from "./ParkProvider.js"

const eventHub = document.querySelector(".eventHub")
const contentTarget = document.querySelector(".parkDropdown")


//event listener that is "listening" for a browser-based Change event on the id of parkselect. Which is where the dropdown is at.
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "parkSelect") {
        // Get the name of the selected selected Park
        
        const selectedPark = changeEvent.target.value

        // Define a custom event
        const parkEvent = new CustomEvent("parkSelected", {
            detail: {
                parkCode: selectedPark
            }
        })
        // Dispatch event to event hub
        eventHub.dispatchEvent(parkEvent)
    }
})

//Dropdown HTML Render
const render = parksCollection => {
    contentTarget.innerHTML = `
    <h1>National Parks</h1>
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

//function to trigger API call and render of the dropdown to DOM
export const parkSelect = () => {
    getAllParkData().then(() => {
        const nationalParks = useParks()
        render(nationalParks)
    })
}