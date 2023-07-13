import React, { useContext } from 'react'
import 'page/Homepage/Homepage.scss';
import CarCard from 'component/CarCard/CarCard';
import ctxStoreValues from 'store/store-context';
import Car from 'model/model-car';
import { TCar } from 'model/model-car';

function Homepage() {

    const cSV = useContext(ctxStoreValues);
    const carListSorted = cSV.val.carList.map((el: TCar) => {
        return el
    }).sort((a: any, b: any) => {
        let typeOfSort = cSV.val.typeOfSort;
        if (cSV.val.typeOfSort === 'id') {
            return a.id - b.id;
        } else {
            if ((a[typeOfSort]).toLowerCase() < b[typeOfSort].toLowerCase()) { return -1; }
            if (a[typeOfSort].toLowerCase() > b[typeOfSort].toLowerCase()) { return 1; }
            return 0;
        }
    });
    const carListFiltered = carListSorted.map((el: TCar) => {
        return el;
    }).filter((el: TCar) => {
        let searchForString = cSV.val.searchCarInputVal;
        return (el.carBrand.toLowerCase() + el.carModel.toLowerCase()).startsWith(searchForString.toLowerCase());
    });
    const carListToBeDisplayed = () => {
        const arrToBeDisplayed = cSV.val.searchCarInputVal ? carListFiltered : carListSorted;
        return arrToBeDisplayed.map((el) => {
            return <CarCard
                carInfo={new Car(el)}
                key={el.id} />
        });
    }

    return (
        <div className="grid">
            {carListToBeDisplayed()}
        </div>
    )
}

export default Homepage;