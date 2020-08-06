//import settings from "../Settings.js"

let parks = []


export const getAllParkData = () => {
    return fetch('http://localhost:8088/parks')
    .then(response => response.json())
    .then(parsedParkData => {
        parks = parsedParkData
        console.log(parks)
    })
}

export const useParks = () => {
    return parks.slice()
}



export const getParks = () => {
return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=acad&q=National%20Park&api_key=vniJVYwidFSxLAZ7pGhHnp1eG7LmPx5zpYAHEd5a`)
        //convert response to JSON
        .then (response => response.json())
        //Makes date equal to empty array on line 1
        .then (parsedParks => {
            //console.table(parsedCriminals)
            parks = parsedParks
        }
    )
    
    
}

// parks.filter("parkDesigantion")
//returns the 60ish national parks
//map.fullName


