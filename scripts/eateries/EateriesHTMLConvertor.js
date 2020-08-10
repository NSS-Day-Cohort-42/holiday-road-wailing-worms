const eventHub = document.querySelector('.eventHub')

eventHub.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.id.startsWith("eateryDialog--") ) {
  const[prefix, eateryId] = clickEvent.target.id.split('--')     
//   this splits the id name from the interpolated section which is the value of whatever restaurants the user selects.
      // prefix = eateryDialog, eateryId = ${eateryObj.id}. [eateryDialog, eateryObj.id]
  const eateryDetailEvent = new CustomEvent("eateryDetail", {
      detail: {
          eateryId: eateryId
        //   the value or id of what is selected
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
// ${eateryObj.id} stores the actual id from whatever object is selected