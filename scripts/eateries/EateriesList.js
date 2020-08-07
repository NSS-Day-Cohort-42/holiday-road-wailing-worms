import { useEateries, getEateries } from './EateryProvider.js';
import { eateriesToHtmlConverter } from "./EateriesHTMLConvertor.js";
import { eateryModal } from './EateriesDetailButton.js'


const contentTarget = document.querySelector(".eateryCard")
const eventHub = document.querySelector('.eventHub')
const modalTarget = document.querySelector('.eateryCard')


eventHub.addEventListener('eaterySelected', (eaterySelectedEvent) => {

    const eateryThatWasSelected = eaterySelectedEvent.detail.eateryId
    // value of the change

    const arrayOfEateries = useEateries();
    const foundEateryObject = arrayOfEateries.find((eatery) => {
        return parseInt(eateryThatWasSelected) === eatery.id;
        // returns the id that matches the value of the change

    })


    console.log(eateryThatWasSelected);
    eateryRender(foundEateryObject);





})
eventHub.addEventListener('eateryDetail', (eateryButtonClicked) => {
    const eateryId = eateryButtonClicked.detail.eateryId
    console.log(eateryId)
    const eaterDeets = useEateries()
    const foundEateryDetail = eaterDeets.find(found => found.id === parseInt(eateryId))
    eateryDetailRender(foundEateryDetail)
    const dialog = document.querySelector(`#eateryDialog--${eateryId}`)
    dialog.showModal()
});

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



