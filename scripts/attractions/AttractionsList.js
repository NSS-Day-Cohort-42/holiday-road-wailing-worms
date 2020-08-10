import { useAttractions } from "./AttractionProvider.js"
import { attractionModal } from "./AttractionsDetailButton.js"
import { attractionRender } from "./AttractionsDetailHTMLConvertor.js"

const contentTarget = document.querySelector(".attractionCard")
const eventHub = document.querySelector(".eventHub")
const modalTarget = document.querySelector('.attractionCard')

eventHub.addEventListener("attractionSelected", event => {
    const attractionId = event.detail.attractionId
    const attractions = useAttractions()
    const foundAttraction = attractions.find(attraction => attraction.id === parseInt(attractionId))
    attractionRender(foundAttraction)
})

eventHub.addEventListener('attractionDetail', (attractionButtonClicked) => {
    const attractionId = attractionButtonClicked.detail.attractionId
    const attractionDetails = useAttractions()
    const foundAttractionDetail = attractionDetails.find(found => found.id === parseInt(attractionId))
    attractionDetailRender(foundAttractionDetail)
    const dialog = document.querySelector(`#attractionDialog--${ attractionId }`)
    dialog.showModal()
})

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

const attractionDetailRender = (details) => {
    modalTarget.innerHTML = attractionModal(details)
}

// const render = (attractionObj) => {
//     contentTarget.innerHTML = `
//         <div class="attractionDetail">
//             <h3>${attractionObj.name}</h3>
//             <div>${attractionObj.city}, ${attractionObj.state}</div>
//             <button class="attractionDetailButton" id="attraction-detail--${attractionObj.id}">Details</button>
//     `
// }