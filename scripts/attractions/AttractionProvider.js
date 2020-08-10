let attractions = []

// This function returns a copy of the attractions array.
export const useAttractions = () => {
    return attractions.slice()
}

// This function fetched data from the bizarreries api
export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(
            parsedAttractions => {
                attractions = parsedAttractions
            }
        )
}