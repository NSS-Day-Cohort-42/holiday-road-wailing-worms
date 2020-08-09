
import { useParks } from "./ParkProvider.js"
const eventHub = document.querySelector(".eventHub")
const contentTarget = document.querySelector(".parkCard")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("parkSelected", () => {
    getParkCard()
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showParkDetails") {
        const detailEvent = new CustomEvent("showParkDetailsClicked")
        eventHub.dispatchEvent(detailEvent)   
    }
    if (clickEvent.target.id === "parkDetailDialog") {
        closeModalDialog()
    }
})

export const ShowParkDetailsButton = () => {
    contentTarget.innerHTML += `<button id= 'showParkDetails'>Show Park Details</button>`
}


const closeModalDialog = () => { 
    document.getElementById("parkDetailDialog").close();
}


export const getParkCard = () => {
    const nationalParkCode = document.querySelector("#parkSelect").value
    const parksArray = useParks()
    
    const matchedPark = parksArray.find(
        selectedPark => {
            return nationalParkCode === selectedPark.parkCode
        })        
        
        showParkCard(matchedPark)    
        ShowParkDetailsButton()
    }
    
    export const showParkCard = (selectedParkObject) => {
        let numberOfImagesInAPI = selectedParkObject.images.length
        let randomImageSelector = Math.floor(Math.random() * (numberOfImagesInAPI + 1))
        contentTarget.innerHTML = 
        `<div>${ selectedParkObject.fullName }</div>
        <img src="${selectedParkObject.images[randomImageSelector].url}" alt="${selectedParkObject.images[randomImageSelector].altText}" width= 300px height= 300px SameSite=None; Secure> `
    }