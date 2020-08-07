


export const eateryModal = (detailsObj) => {
    return `  
<dialog open id="eateryDialog>"
  <div>${detailsObj.state} </div>
  <div>${detailsObj.city}</div>
  <div>${detailsObj.ameneties}</div>
</dialog>`
}