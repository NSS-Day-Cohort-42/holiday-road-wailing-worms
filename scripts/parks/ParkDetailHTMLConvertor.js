/* This function interpolates data from a JSON object into HTML strings. 
Many can be directly interpolated, but some properties in each object needed to be evaluated before there values could be interpolated and rendered.
For example: entrance fees is an array property on the JSON object that varies from park to park. So first we check and see if the array has any values in it at all.
If it does, the property is iterated on using the map method and we return interpolated strings that contain specific values we want to display. 
Each time time the map method finds values in the array, it appends them to a string that started out as empty. This string value is then interpolated into the HTML to be rendered.
 */

export const ParkDetailTMLConverter = (parkObject) => {
  let parkFees = "";
  if (parkObject.entranceFees.length > 0) {
    const parkFeesInfo = parkObject.entranceFees
      .map((fee) => {
        return `<div> ${fee.title}</div> <div>$${Math.round(fee.cost)}</div>`;
      })
      .join("");
    parkFees += parkFeesInfo;
  }

  let parkOperatingHours = "";
  if (parkObject.operatingHours.length > 0) {
    const parkHoursInfo = parkObject.operatingHours
      .map((hours) => {
        return `<div>${hours.description}</div>`;
      })
      .join("");
    parkOperatingHours += parkHoursInfo;
  }
  
  let parkPhoneNumber = parkObject.contacts.phoneNumbers[0].phoneNumber
   
  const formatPhoneNumber = (parkPhoneNumber) => {
    //Filter only numbers from the input
    let cleaned = ('' + parkPhoneNumber).replace(/\D/g, '');
    
    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };
  
    return null
  };

  return `<section class="modalContainer--park">
<h3><b>Address</b></h3>
<div class= "park--addressLocation">${parkObject.addresses[0].line2}</div>
<div class= "park--streetAddress">${parkObject.addresses[0].line1}</div>
<div class= "park--cityAddress">${parkObject.addresses[0].city}</div>
<div class= "park--state">${parkObject.addresses[0].stateCode}</div>
<div class= "park--latitude">${parkObject.latitude}</div>
<div class= "park--longitude">${parkObject.longitude}</div>
<div class= "park--phone">${formatPhoneNumber(parkPhoneNumber)}</div>      
<h3><b>Fees</b></h3>
${parkFees}
<h3><b>Operating Hours</b></h3>
${parkOperatingHours}
</section>`;
};
