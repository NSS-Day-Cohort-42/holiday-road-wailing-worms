
const eventHub = document.querySelector(".container")

/* This function will fetch new data from the API very quickly since we are searching only for a parkCode
and we are using a search query of National Park */
// export const getParks = () => {
// return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${/* parkCode goes here */}&q=National%20Park&api_key=vniJVYwidFSxLAZ7pGhHnp1eG7LmPx5zpYAHEd5a`)
//             //convert response to JSON
//             .then (response => response.json())
//             .then (currentParkDetails => {
//                 console.table(currentParkDetails)
//                 parkDetails = currentParkDetails
//             }
//         )
//     }
    


// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", (event) => {
    
    // Only do this if the `parkSelect` element was changed
    if (event.target.id === "parkSelect") {
        console.log("custom event recognized")
        // Create custom event. Provide an appropriate name.
        const parkEvent = new CustomEvent("parkSelected", {
            detail: {
                parkCode: selectedPark
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(parkEvent)
    }
})