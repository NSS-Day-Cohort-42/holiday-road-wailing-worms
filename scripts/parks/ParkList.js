import { useParks, getAllParkData } from "./ParkProvider.js"

getAllParkData().then( () => {
    let allParksData = useParks()
    console.log(allParksData)
    
    
 const  designationFilter = allParksData.filter(
        parkType => {
            return parkType.designation === "National Park"
             
        })  
        console.log(designationFilter)
    })