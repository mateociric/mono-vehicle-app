import React, { useContext, useState, useEffect } from 'react'
import 'page/Homepage/Homepage.scss';
import CarCard from 'component/CarCard/CarCard';
import Modal from 'component/Modal/Modal';
import ctxStoreValues from 'store/store-context';
import Car from 'model/model-car';
import { searchCarCard, sortCarCard } from 'utility/hompeage-func';
import { getCarListFromDatabase } from 'utility/databse-func';

function Homepage() {
    const cSV = useContext(ctxStoreValues);
    const [modalIsVisibleForDatabaseError, setModalIsVisibleForDatabaseError] = useState<boolean>(false);
    useEffect(() => {
        if (cSV.val.appIsRunFirstTime) {
            getCarListFromDatabase(cSV.func.setCarList, setModalIsVisibleForDatabaseError);
        }
        cSV.func.setAppIsRunFirstTime(false);
    }, [cSV.val.appIsRunFirstTime, cSV.func]);
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

    function onClickHandler() {
        setModalIsVisibleForDatabaseError(false);
        cSV.func.setIsCarCardDeletedFromDatabase(false);
    }

    return (
        <>
            {(modalIsVisibleForDatabaseError || cSV.val.isCarCardDeletedFromDatabase) && <Modal
                onClick={onClickHandler}
                message={cSV.val.isCarCardDeletedFromDatabase ? 'Something went wrong. Car is not deleted from database.' : 'Something went wrong. Car list can not be loaded from database.'}
                hasButtonNO={false} />}
            <div className="grid">
                {displayedCarList()}
            </div>
        </>
    )
}

export default Homepage;