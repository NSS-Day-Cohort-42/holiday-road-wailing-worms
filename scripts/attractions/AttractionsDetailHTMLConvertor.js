const contentTarget = document.querySelector(".attractionCard")

// The render function that prints the info about the chosen attraction to the page below the dropdown
export const attractionRender = (attractionObj) => {
    contentTarget.innerHTML = `
        <div class="attractionDetail">
            <h3>${ attractionObj.name }</h3>
            <div>${ attractionObj.city }, ${ attractionObj.state }</div>
            <div>${ attractionObj.description }</div>
            <div class="details__button">
            <button class="attractionDetailButton" id="attraction-detail--${ attractionObj.id }">Details</button>
            </div>   `  
}