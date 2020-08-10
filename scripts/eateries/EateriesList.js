import { useEateries, getEateries } from './EateryProvider.js';
import { eateriesToHtmlConverter } from "./EateriesHTMLConvertor.js";
import { eateryModal } from './EateriesDetailButton.js'


const contentTarget = document.querySelector(".eateryCard")
const eventHub = document.querySelector('.eventHub')
const modalTarget = document.querySelector('.eateryCard')


eventHub.addEventListener('eaterySelected', (eaterySelectedEvent) => {

    const eateryThatWasSelected = eaterySelectedEvent.detail.eateryId
    // value of the change (which is an id)

    const arrayOfEateries = useEateries();
    const foundEateryObject = arrayOfEateries.find((eatery) => {
        return parseInt(eateryThatWasSelected) === eatery.id;
        // returns the object that is equal to the id selected
      
    
    })

    // console.log(eateryThatWasSelected)
    // console.log(foundEateryObject)
    eateryRender(foundEateryObject);





})
eventHub.addEventListener('eateryDetail', (eateryButtonClicked) => {
    const eateryId = eateryButtonClicked.detail.eateryId 
    // eateryId is the id of whatever eatery that was selected from the dropDown.
    // the button exists inside of the html coverter that is looped over and rendered inside of the select event

    // console.log(eateryId)
    const eaterDeets = useEateries()
    const foundEateryDetail = eaterDeets.find(found => found.id === parseInt(eateryId))
    console.log(foundEateryDetail)
    // loops through the eateries array and finds the first id or (obj) that is equal to the eatery selected.
    eateryDetailRender(foundEateryDetail)
    const dialog = document.querySelector(`#eateryDialog--${eateryId}`)
    dialog.showModal()
});
// this functions just like the above eventListener
export const eateryDetailRender = (details) => {

    modalTarget.innerHTML = eateryModal(details)
};



export const eateryList = () => {

    getEateries()
        .then(() => {
            const eateries = useEateries()
            eateryRender(eateries)


        })
}



const eateryRender = (eateryArray) => {

    contentTarget.innerHTML = eateriesToHtmlConverter(eateryArray)
};



