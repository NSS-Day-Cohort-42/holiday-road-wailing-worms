let itineraries = []

const eventHub = document.querySelector(".eventHub")

const dispatchStateChangeEvent = () => {
  const itinStateChangeEvent = new CustomEvent("itinStateChanged")
  eventHub.dispatchEvent(itinStateChangeEvent)
}

export const getItineraries = () => {
  return fetch ("http://localhost:7088/itineraries")
  .then(res => res.json())
  .then(parsedItin => {
    itineraries = parsedItin
  })
}

export const useItineraries = () => {
  return itineraries.slice()
}

export const saveItin = (itinObj) => {
  fetch("http://localhost:7088/itineraries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(itinObj)
  })
  .then(getItineraries)
  .then(dispatchStateChangeEvent)
}