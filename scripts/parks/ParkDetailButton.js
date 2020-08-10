const eventHub = document.querySelector(".eventHub")
const contentTarget = document.querySelector(".parkCard")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("parkSelected", () => {
    ShowParkDetailsButton()
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showParkDetails") {
        const detailEvent = new CustomEvent("showParkDetailsClicked")
        eventHub.dispatchEvent(detailEvent)   
    }
})

export const ShowParkDetailsButton = () => {
    contentTarget.innerHTML = "<button id= 'showParkDetails'>Show Park Details</button>"
}