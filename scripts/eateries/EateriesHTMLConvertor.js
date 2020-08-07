const eventHub = document.querySelector('.eventHub')

eventHub.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.id === "eateryDialog") {
        const eateryDetailEvent = new CustomEvent("eateryDetail", {
            detail: {
                eaterydetailid: eateryDialog.id
            }
        })
    
        eventHub.dispatchEvent(eateryDetailEvent)
    }
}) 

export const eateriesToHtmlConverter = (eateryObj) => {
     return `
     <div class="eatery__Container">
    <div class="name__Container">${eateryObj.businessName}</div>
    <div> ${eateryObj.description}</div>
     <div class="details__button">
     <button id="eateryDialog">details</button>
     </div>
    </div>`
}