export const ParkDetailTMLConverter = (parkObject) => {
  let parkFees = "";
  if (parkObject.entranceFees.length > 0) {
    const parkFeesInfo = parkObject.entranceFees
      .map((fee) => {
        return `<div>${fee.title}</div>
                <div>${Math.round(fee.cost)}</div>`;
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
  return `
    <section class="modalContainer--park">
    ${parkFees}
    ${parkOperatingHours}
    <h5>Address</h5>
    <div class= "park--addressLocation">${parkObject.addresses[0].line2}</div>
    <div class= "park--streetAddress">${parkObject.addresses[0].line1}</div>
    <div class= "park--cityAddress">${parkObject.addresses[0].city}</div>
    <div class= "park--state">${parkObject.addresses[0].stateCode}</div>
    <div class= "park--latitude">${parkObject.latitude}</div>
    <div class= "park--longitude">${parkObject.longitude}</div>
    <div class= "park--phone">${parkObject.contacts.phoneNumbers[0].phoneNumber}</div>      
    </section>
    `;
};
