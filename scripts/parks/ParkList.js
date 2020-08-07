import { ParkDetailTMLConverter } from "./ParkDetailHTMLConvertor.js"
import { useParks } from "./ParkProvider.js"

const contentTarget = document.querySelector(".modalContainer--park") 
const eventHub = document.querySelector(".eventHub")

//function that triggers Modal to display
const showModalDialog = () => { 
    document.getElementById("parkDetailDialog").showModal();
}

/* event listener that is listening for browser-based click event on the park detail button. 
On click, a function is triggered that uses the parkCode to find that park's object in an array of parks. That object is then rendered to the DOM, and the modal function is triggered. */
eventHub.addEventListener("showParkDetailsClicked", () => {
    getParkDetailData()    
    
})

export const getParkDetailData = () => {
    const nationalParkCode = document.querySelector("#parkSelect").value
    
    const parksArray = useParks()
    
    const matchedPark = parksArray.find(
        selectedPark => {
            return nationalParkCode === selectedPark.parkCode
        })        
        render(matchedPark)
        showModalDialog()      
    }
            
    
export const render = parkDataObject => {
             
            contentTarget.innerHTML = `<dialog id="parkDetailDialog">${ ParkDetailTMLConverter(parkDataObject) }</dialog>`
        }


