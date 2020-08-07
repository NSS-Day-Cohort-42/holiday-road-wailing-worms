import { useEateries, getEateries } from './EateryProvider.js';
import { eateriesToHtmlConverter } from "./EateriesHTMLConvertor.js";


const contentTarget = document.querySelector('.eateryCard')
const eventHub = document.querySelector('.eventHub')


eventHub.addEventListener('eaterySelected', (eaterySelectedEvent) => {

    const eateryThatWasSelected = eaterySelectedEvent.detail.eateryid
    // value of the change

    const arrayOfEateries = useEateries();
    const foundEateryObject = arrayOfEateries.find((eatery) => {
        return parseInt(eateryThatWasSelected) === eatery.id;
        // returns the id that matches the value of the change

    })
    console.log(eateryThatWasSelected)


    eateryRender(foundEateryObject);

})
eventHub.addEventListener
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



