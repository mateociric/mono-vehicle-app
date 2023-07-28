import TCar from "model/model-car";

export function sortCarCard(carList: TCar[], typeOfSort: string) {
    const carListSorted = carList.map((el: TCar) => {
        return el
    }).sort((a: any, b: any) => {
        if (typeOfSort === 'id') {
            return a.id - b.id;
        } else {
            if ((a[typeOfSort]).toLowerCase() < b[typeOfSort].toLowerCase()) { return -1; }
            if (a[typeOfSort].toLowerCase() > b[typeOfSort].toLowerCase()) { return 1; }
            return 0;
        }
    });

    return carListSorted;
}

export function searchCarCard(carListSorted: TCar[], searchCarInputVal: string) {
    const carListFiltered = carListSorted.map((el: TCar) => {
        return el;
    }).filter((el: TCar) => {
        return (`${el.carBrand} ${el.carModel}`).toLowerCase().startsWith(searchCarInputVal.toLowerCase());
    });

    return carListFiltered;
}
