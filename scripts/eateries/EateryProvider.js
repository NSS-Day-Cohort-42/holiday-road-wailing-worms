let eateries = [];



export const useEateries = () => {
    return eateries.slice();
}


export const getEateries =  async () => {
    const response = await fetch('http://holidayroad.nss.team/eateries');
    const parsedEateries = await response.json();
    eateries = parsedEateries;
            
        }