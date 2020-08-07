import { ParkDetailTMLConverter } from "./ParkDetailHTMLConvertor.js"
import { useParks } from "./ParkProvider.js"

const contentTarget = document.querySelector(".parkCard") 
const eventHub = document.querySelector(".eventHub")


const showModalDialog = () => { 
    document.getElementById("parkDetailDialog").showModal();
}

eventHub.addEventListener("showParkDetailsClicked", () => {
    getParkDetailData()    
    
})

export const getParkDetailData = () => {
    const nationalParkCode = document.querySelector("#parkSelect").value
    
    const parksArray = useParks()
    
    const matchedPark = parksArray.find(
        selectedPark => {
            return nationalParkCode === selectedPark.parkCode
        })
        
        render(matchedPark)
        console.table(matchedPark)
        showModalDialog()
        
    }
            
    
export const render = parkDataObject => {
             
            contentTarget.innerHTML = `<dialog id="parkDetailDialog">${ ParkDetailTMLConverter(parkDataObject) }</dialog>`
        }


