const eventHub = document.querySelector('.eventHub')

// click event that closes the modal when clicked
eventHub.addEventListener('click', event => {
    if (event.target.id === 'close') {
        const dialog = event.target.parentNode
        dialog.close()
    }
})

// HTML to be printed to the modal window when the details button is clicked
export const attractionModal = (detailsObj) => {
    return `
    <dialog id="attractionDialog--${ detailsObj.id }">
        <div>City: ${ detailsObj.city }</div>
        <div>State: ${ detailsObj.state }</div>
        <div>Souvenirs: ${ detailsObj.ameneties.souvenirs }</div>
        <div>Restrooms: ${ detailsObj.ameneties.restrooms }</div>
        <button id="close">Close</button>
    </dialog>
    `
}