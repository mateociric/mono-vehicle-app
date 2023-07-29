import React, { useContext } from 'react'
import 'page/Homepage/Homepage.scss';
import CarCard from 'component/CarCard/CarCard';
import Modal from 'component/Modal/Modal';
import { contextStore } from 'store/context-store';
import Car from 'utility/car-class';
import { observer, useLocalObservable } from 'mobx-react';
import localStore from 'store/localStore';

function Homepage() {
    const mainStore = useContext(contextStore);
    const lStore = useLocalObservable(() => localStore);
    const carListSorted = lStore.homepageStore.getSortedCarCard(mainStore.carList, mainStore.typeOfSort);
    const carListFiltered = lStore.homepageStore.getSearchedCarCard(carListSorted, mainStore.searchCarInputVal);

    const displayedCarList = () => {
        const arrToBeDisplayed = mainStore.searchCarInputVal ? carListFiltered : carListSorted;
        return arrToBeDisplayed.map((el) => {
            return <CarCard
                carInfo={new Car(el)}
                key={el.id} />
        });
    }

    return (
        <>
            {(lStore.modal.isModalOpenForDatabaseError || mainStore.isCarCardFailedToDeleteFromDatabase) &&
                <Modal
                    onClick={() => {
                        lStore.modal.toggleModal();
                        mainStore.setIsCarCardFailedToDeleteFromDatabase(false);
                    }}
                    message={mainStore.isCarCardFailedToDeleteFromDatabase ?
                        'Something went wrong. The car is not deleted from the database.' :
                        'Something went wrong. The car list can not be loaded from the database.'}
                    hasButtonNO={false}
                />}
            <div className="grid">
                {displayedCarList()}
            </div>
        </>
    )
}

export default observer(Homepage);