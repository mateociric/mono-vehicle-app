import React, { useContext, useState } from 'react'
import 'page/Homepage/Homepage.scss';
import CarCard from 'component/CarCard/CarCard';
import Modal from 'component/Modal/Modal';
import { contextStore } from 'store/store-context';
import Car from 'utility/car-class';
import { searchCarCard, sortCarCard } from 'utility/hompeage-func';
import { observer } from 'mobx-react';

function Homepage() {
    const mainStore = useContext(contextStore);
    const [modalIsVisibleForDatabaseError, setModalIsVisibleForDatabaseError] = useState<boolean>(false);
    const carListSorted = sortCarCard(mainStore.carList, mainStore.typeOfSort);
    const carListFiltered = searchCarCard(carListSorted, mainStore.searchCarInputVal);
    const displayedCarList = () => {
        const arrToBeDisplayed = mainStore.searchCarInputVal ? carListFiltered : carListSorted;
        return arrToBeDisplayed.map((el) => {
            return <CarCard
                carInfo={new Car(el)}
                key={el.id} />
        });
    }

    function onCloseModalHandler() {
        setModalIsVisibleForDatabaseError(false);
        mainStore.setIsCarCardFailedToDeleteFromDatabase(false);
    }

    return (
        <>
            {(modalIsVisibleForDatabaseError || mainStore.isCarCardFailedToDeleteFromDatabase) &&
                <Modal
                    onClick={onCloseModalHandler}
                    message={mainStore.isCarCardFailedToDeleteFromDatabase ? 'Something went wrong. The car is not deleted from the database.' : 'Something went wrong. The car list can not be loaded from the database.'}
                    hasButtonNO={false}
                />}
            <div className="grid">
                {displayedCarList()}
            </div>
        </>
    )
}

export default observer(Homepage);