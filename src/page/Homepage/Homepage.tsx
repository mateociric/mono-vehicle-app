import React, { useContext, useEffect } from 'react'
import 'page/Homepage/Homepage.scss';
import CarCard from 'component/CarCard/CarCard';
import Modal from 'component/Modal/Modal';
import { observer, useLocalObservable } from 'mobx-react';
import { contextStore } from 'store/context-store';
import localStore from 'store/localStore';
import TCar from 'model/model-car';
import Car from 'utility/car-class';
import HttpClient from 'utility/http-client-class';

function Homepage() {
    const mainStore = useContext(contextStore);
    const lStore = useLocalObservable(() => localStore);
    const httpClient = new HttpClient('https://mono-vehicle-app-default-rtdb.firebaseio.com/');

    useEffect(() => {
        if (mainStore.appIsRunFirstTime) {
            httpClient.GET(mainStore.setCarListFromDatabase, mainStore.setIsDatabaseErrorGET);
            mainStore.setAppIsRunFirstTime(false);
        }
    });

    const carListSorted: TCar[] = lStore.homepageStore.getSortedCarCard(mainStore.carList, mainStore.typeOfSort);
    const carListFiltered: TCar[] = lStore.homepageStore.getSearchedCarCard(carListSorted, mainStore.searchCarInputVal);
    const displayedCarList = () => {
        const arrToBeDisplayed = mainStore.searchCarInputVal ? carListFiltered : carListSorted;
        return arrToBeDisplayed.map((el: TCar) => {
            return <CarCard
                carInfo={new Car(el)}
                key={el.id} />
        });
    }

    return (
        <>
            {(mainStore.isDatabaseErrorGET || mainStore.isDatabaseErrorDELETE) &&
                <Modal
                    onClick={() => {
                        mainStore.setIsDatabaseErrorGET(false);
                        mainStore.setIsDatabaseErrorDELETE(false);
                    }}
                    message={mainStore.isDatabaseErrorGET ?
                        'Something went wrong. The car list can not be loaded from the database.' :
                        'Something went wrong. The car is not deleted from the database.'
                    }
                    hasButtonNO={false}
                />
            }
            <div className="grid">
                {displayedCarList()}
            </div>
        </>
    )
}

export default observer(Homepage);