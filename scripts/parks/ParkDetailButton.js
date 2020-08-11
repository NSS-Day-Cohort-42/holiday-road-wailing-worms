//import the array or park data from the provider module
import { useParks } from "./ParkProvider.js"

//establish where the eventhub is "looking" and where content will be targeted.
const eventHub = document.querySelector(".eventHub")
const contentTarget = document.querySelector(".parkCard")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("parkSelected", () => {
    getParkCard()
})

//on the event hub, list for a "click" event.
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showParkDetails") {
        const detailEvent = new CustomEvent("showParkDetailsClicked")
        eventHub.dispatchEvent(detailEvent)   
    }
    if (clickEvent.target.id === "close") {
        const dialog = event.target.parentNode;
    dialog.close()
    }
})

//A function that renders a button
export const ShowParkDetailsButton = () => {
    contentTarget.innerHTML += `<button id= 'showParkDetails'>Show Park Details</button>`
}


/* This function finds the park code that was established in the dropdown and then declares a value of parksArray for the parks data that was imported on line 2.
Using the find method, the park code is matched to the one that is in each JSON object in the array. The return value of that function is passed into the the showParkCard function.
The function that renders the park details button is also called. */
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
    
 /* This function takes in a single JSON object from the parks array and then checks if it's image property is greater than zero. Essentially, ensuring data is there to work with.
 Next we store the number of images that are in the images array in a variable. To create variety, a variable is created that randomly selects a number that is between 0 and the n-1 numbers of images in the images property.
 lastly, values of the URL and it's alt text are interpolated into an HTML img tag. To handle if there are no images, a locally stored version of the NPS logo will be displayed. */   
    export const showParkCard = (selectedParkObject) => {
        if (selectedParkObject.images.length > 0) {
        let numberOfImagesInAPI = selectedParkObject.images.length
        let randomImageSelector = Math.floor(Math.random() * (numberOfImagesInAPI))
        contentTarget.innerHTML = 
        `<div id="parkName">${ selectedParkObject.fullName }</div>
        <img class="parkImage" src="${selectedParkObject.images[randomImageSelector].url}" alt="${selectedParkObject.images[randomImageSelector].altText}" onerror="this.onerror=null;this.src='./images/512px-US-NationalParkService-Logo.svg.png';" width= 300px height= 300px>`
        } 
    }