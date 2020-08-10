const eventHub = document.querySelector('.eventHub')

eventHub.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.id.startsWith("eateryDialog--") ) {
  const[prefix, eateryId] = clickEvent.target.id.split('--')     
  const eateryDetailEvent = new CustomEvent("eateryDetail", {
      detail: {
          eateryId: eateryId
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
     <button id="eateryDialog--${eateryObj.id}">details</button>
     </div>
    </div>`
}