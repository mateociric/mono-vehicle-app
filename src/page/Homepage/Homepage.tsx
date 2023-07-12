import React, { useContext } from 'react'
import 'page/Homepage/Homepage.scss';
import CarCard from 'component/CarCard/CarCard';
import ctxStoreValues from 'store/store-context';
import Car from 'model/model-car';
import { TCar } from 'model/model-car';

function Homepage() {

    const ctxStoreVal = useContext(ctxStoreValues);
    const carListSorted = ctxStoreVal.values.carList.map((el: TCar) => {
        return el
    }).sort((a: any, b: any) => {
        let typeOfSort = ctxStoreVal.values.typeOfSort;
        if (ctxStoreVal.values.typeOfSort === 'id') {
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
        let searchForString = ctxStoreVal.values.searchCarInputVal;
        return (el.carBrand.toLowerCase() + el.carModel.toLowerCase()).startsWith(searchForString.toLowerCase());
    });
    const carListToBeDisplayed = () => {
        const arrToBeDisplayed = ctxStoreVal.values.searchCarInputVal ? carListFiltered : carListSorted;
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