//import settings from "../Settings.js"

let parks = []

export const useParks = () => {
    return parks.slice()
}




export const getParks = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?api_key=vniJVYwidFSxLAZ7pGhHnp1eG7LmPx5zpYAHEd5a", sett)
        //convert response to JSON
        .then (response => response.json())
        //Makes date equal to empty array on line 1
        .then (parsedParks => {
            //console.table(parsedCriminals)
            parks = parsedParks
            console.table(parks)
        }
    )
    
}


