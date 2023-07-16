import React, { useContext, useEffect } from 'react'
import 'page/Homepage/Homepage.scss';
import CarCard from 'component/CarCard/CarCard';
import ctxStoreValues from 'store/store-context';
import Car from 'model/model-car';
import { searchCarCard, sortCarCard } from 'utility/hompeage-func';
import { getCarListFromDatabase } from 'utility/databse-func';

function Homepage() {
    const cSV = useContext(ctxStoreValues);
    useEffect(() => {
        if (cSV.val.appIsRunFirstTime) {
            getCarListFromDatabase(cSV.func.setCarList)
        }
        cSV.func.setAppIsRunFirstTime(false);
    });
    const carListSorted = sortCarCard(cSV.val.carList, cSV.val.typeOfSort);
    const carListFiltered = searchCarCard(carListSorted, cSV.val.searchCarInputVal);
    const displayedCarList = () => {
        const arrToBeDisplayed = cSV.val.searchCarInputVal ? carListFiltered : carListSorted;
        return arrToBeDisplayed.map((el) => {
            return <CarCard
                carInfo={new Car(el)}
                key={el.id} />
        });
    }

    return (
        <div className="grid">
            {displayedCarList()}
        </div>
    )
}

export default Homepage;