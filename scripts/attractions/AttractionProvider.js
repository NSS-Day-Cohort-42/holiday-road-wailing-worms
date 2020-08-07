let attractions = []

export const useAttractions = () => {
    return attractions.slice()
}

export const useAttractionById = attractionId => {
    return attractions.find(attraction => attraction.id === parseInt(attractionId))
}

export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(
            parsedAttractions => {
                attractions = parsedAttractions
            }
        )
}