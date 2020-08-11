
const eventHub = document.querySelector('.eventHub')

eventHub.addEventListener('click', event => {
  if (event.target.id === 'close') {
    const dialog = event.target.parentNode; 
    // targets the parent node of the close button ( which is the dialog elememnt )
    dialog.close()
  }
})


export const eateryModal = (detailsObj) => {
  function isAmenityAvailable(detailsProperty) {
    return (detailsProperty ? "✅" : "❌");
  }

  return `  
<dialog class="dialog-background"  id="eateryDialog--${detailsObj.id}">
  <div>City: ${detailsObj.city}</div>
  <div>Wheelchair access: ${isAmenityAvailable(detailsObj.ameneties.wheelchairAccessible)}</div>
  <div>Pet Friendly: ${isAmenityAvailable(detailsObj.ameneties.petFriendly)}</div>
  <div>wifi: ${isAmenityAvailable(detailsObj.ameneties.wifi)}</div>
  <div>restrooms: ${isAmenityAvailable(detailsObj.ameneties.restrooms)}</div>
  <button id="close">exit</button>
</dialog>`
}