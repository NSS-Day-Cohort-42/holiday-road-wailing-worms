const contentTarget = document.querySelector('.eateryCard')

export const eateriesToHtmlConverter = (eateryObj) => {
     return `<div> 
     ${eateryObj.businessName}
    </div>`
}