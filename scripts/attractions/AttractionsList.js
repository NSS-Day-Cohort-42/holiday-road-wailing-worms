import { useAttractions } from "./AttractionProvider.js";

const contentTarget = document.querySelector(".attractionCard")
const eventHub = document.querySelector(".eventHub")

eventHub.addEventListener("attractionSelected", event => {
    const attractionId = event.detail.attractionId
    const attractions = useAttractions()
    const foundAttraction = attractions.find(attraction => attraction.id === parseInt(attractionId))
    render(foundAttraction)
})

const render = (attractionObj) => {
    contentTarget.innerHTML = `
        <div class="attractionDetail">
            <h3>${attractionObj.name}</h3>
            <div>${attractionObj.city}, ${attractionObj.state}</div>
            <button class="attractionDetailButton" id="attraction-detail--${attractionObj.id}">Details</button>
    `
}