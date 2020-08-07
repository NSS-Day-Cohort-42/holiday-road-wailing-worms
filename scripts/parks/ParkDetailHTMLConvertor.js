export const ParkDetailTMLConverter = parkObject => {
    return `
        <section class="parkCard">
        <h5>Address</h5>
        <div class= "park--addressLocation">${parkObject.addresses[0].line2}</div>
        <div class= "park--streetAddress">${parkObject.addresses[0].line1}</div>
        <div class= "park--cityAddress">${parkObject.addresses[0].city}</div>
        <div class= "park--state">${parkObject.addresses[0].stateCode}</div>
        <div class= "park--latitude">${parkObject.latitude}</div>
        <div class= "park--longitude">${parkObject.longitude}</div>
        <div class= "park--phone">${parkObject.contacts.phoneNumbers[0].phoneNumber}</div>      
        </section>
    `
        
        // <h5>Fees</h5>
        // <div class= "park--fee1">${parkObject.entranceFees[0].cost}</div>
        // <div class= "park--fee1">${parkObject.entranceFees[0].title}</div>
        
        // <div class= "park--fee2">${parkObject.entranceFees[1].cost}</div>
        // <div class= "park--fee2">${parkObject.entranceFees[1].title}</div>
        
        // <div class= "park--fee3">${parkObject.entranceFees[2].cost}</div>
        // <div class= "park--fee3">${parkObject.entranceFees[2].title}</div>
        
        
        // <h5>Hours</h5>
        // <div class= "park--hours">${parkObject.operatingHours[0].exceptions}</div>
        // <div class= "park--hours">${parkObject.operatingHours[0].description}</div>
        // <div class= "park--hours">${parkObject.operatingHours[0].standardHours.monday}</div>
        // <div class= "park--hours">${parkObject.operatingHours[0].standardHours.tuesday}</div>
        // <div class= "park--hours">${parkObject.operatingHours[0].standardHours.wednesday}</div>
        // <div class= "park--hours">${parkObject.operatingHours[0].standardHours.thursday}</div>
        // <div class= "park--hours">${parkObject.operatingHours[0].standardHours.friday}</div>
        // <div class= "park--hours">${parkObject.operatingHours[0].standardHours.saturday}</div>
        // <div class= "park--hours">${parkObject.operatingHours[0].standardHours.sunday}</div>
        
        // <h6>Exceptions</h6>
        // <div class= "park--hours">${parkObject.operatingHours[0].exceptions[0].name}</div>
        // <div class= "park--hours">${parkObject.operatingHours[0].exceptions[0].startDate}</div>
        // <div class= "park--hours">${parkObject.operatingHours[0].exceptions[0].endDate}</div>
        
        
}