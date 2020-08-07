import { useAttractionById } from "./AttractionProvider"

const eventHub = document.querySelector(".eventHub")
const contentTarget = document.querySelector(".attractionCard")

eventHub.addEventListener("attractionSelected", (event) => {
    const attractionId = event.detail.attractionId

    if(attractionId !== "0") {
        const attractionChosen = useAttractionById(attractionId)
        render(attractionChosen)
    } else {
        reset()
    }
})

const render = (attractionObj) => {
    contentTarget.innerHTML = `
        <div class="attractionDetail">
            <h3>${attractionObj.name}</h3>
            <div>${attractionObj.city}, ${attractionObj.state}</div>
            <button class="attractionDetailButton" id="attraction-detail--${attractionObj.id}">Details</button>
    `
}

const reset = () => {
    contentTarget.innerHTML = ""
}