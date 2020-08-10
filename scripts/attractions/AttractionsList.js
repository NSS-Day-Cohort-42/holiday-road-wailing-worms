import { useAttractions } from "./AttractionProvider.js"
import { attractionModal } from "./AttractionsDetailButton.js"
import { attractionRender } from "./AttractionsDetailHTMLConvertor.js"

const eventHub = document.querySelector(".eventHub")
const modalTarget = document.querySelector('.modalContainer--attraction')

// The eventListener that is listening for the custom attractionSelected event
// It will look for the id of the attraction selected, then print the details of the selected attraction below the dropdown
eventHub.addEventListener("attractionSelected", event => {
    const attractionId = event.detail.attractionId
    const attractions = useAttractions()
    const foundAttraction = attractions.find(attraction => attraction.id === parseInt(attractionId))
    // imported from the attractionsDetailHTML convertor, it has the html tags/ template literals to populate the data from the selected item
    attractionRender(foundAttraction)
})

// This is the portion of the attractionDetail custom event listener that executes the following code when it "hears" the event
// It is responsible for showing a modal with more details about the selected attraction
eventHub.addEventListener('attractionDetail', (attractionButtonClicked) => {
    const attractionId = attractionButtonClicked.detail.attractionId
    const attractionDetails = useAttractions()
    const foundAttractionDetail = attractionDetails.find(found => found.id === parseInt(attractionId))
    attractionDetailRender(foundAttractionDetail)
    const dialog = document.querySelector(`#attractionDialog--${ attractionId }`)
    dialog.showModal()
})

// Custom event listener that will be tied to the detail button on the attractions detail card
// The detail adds an attractionId to the payload so it is tied to the specific attractions JSON object
eventHub.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.id.startsWith("attraction-detail--")) {
        const[prefix, attractionId] = clickEvent.target.id.split('--')
        const attractionDetailEvent = new CustomEvent("attractionDetail", {
            detail: {
                attractionId: attractionId
            }
        })
        eventHub.dispatchEvent(attractionDetailEvent)
    }
})

// This function renders the modal with the HTML for a specific attraction.
const attractionDetailRender = (details) => {
    modalTarget.innerHTML = attractionModal(details)
}