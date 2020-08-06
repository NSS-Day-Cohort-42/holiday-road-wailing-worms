import { useEateries, getEateries } from './EateryProvider.js';
import { eateriesToHtmlConverter } from "./EateriesHTMLConvertor.js";


const contentTarget = document.querySelector('.eateryCard')
const eventHub = document.querySelector('.container')


eventHub.addEventListener('eaterySelected', (eaterySelectedEvent) => {

    const eateryThatWasSelected = eaterySelectedEvent.detail.eateryid

    const arrayOfEateries = useEateries();
    const foundEateryObject = arrayOfEateries.find((eatery) => {
        return parseInt(eateryThatWasSelected) === eatery.id;
    })


    
   eateryRender(foundEateryObject);
   
})

export const eateryList = () => {

    getEateries()
        .then(() => {
            const eateries = useEateries()
            eateryRender(eateries)

        })
}



    const eateryRender = (eateryArray) => {

       
        
           contentTarget.innerHTML  = eateriesToHtmlConverter(eateryArray)
        };



