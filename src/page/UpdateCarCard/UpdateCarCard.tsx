import React, { useContext } from 'react'
import { useParams } from "react-router";
import 'page/UpdateCarCard/UpdateCarCard.scss';
import Modal from 'component/Modal/Modal';
import { observer, useLocalObservable } from 'mobx-react';
import { contextStore } from 'store/context-store';
import localStore from 'store/localStore';
import TCar from 'model/model-car';
import HttpClient from 'utility/http-client-class';

function UpdateCarCard() {
    const mainStore = useContext(contextStore);
    const lStore = useLocalObservable(() => localStore);
    const { id } = useParams();
    const httpClient = new HttpClient('https://mono-vehicle-app-default-rtdb.firebaseio.com/');
    const carBrand = mainStore.carBrandList[mainStore.carBrandSelectVal];
    const carModel = mainStore.carModelList[mainStore.carBrandSelectVal][mainStore.carModelSelectVal];
    const carToBeUpadted = mainStore.carList.filter((el: TCar) => {
        return el.id === Number(id);
    });

    return (
        <>
            {lStore.modal.isModalOpen && <Modal
                onClick={() => {
                    mainStore.updateCarInCarList(lStore.updateCarCardStore.carImageInputVal, Number(id));
                    lStore.modal.setIsModalOpen(false);
                }}
                message={`Car card updated to ${carBrand} - ${carModel}`}
                hasButtonNO={false}
            />}
            {mainStore.isDatabaseErrorPUT && <Modal
                onClick={() => mainStore.setIsDatabaseErrorPUT(false)}
                message='Something went wrong. Car is not updated to database.'
                hasButtonNO={false}
            />}
            <div className='update-car-card flex-column'>
                <label htmlFor='carImage'>{carToBeUpadted.length ?
                    `${carToBeUpadted[0].carBrand} - ${carToBeUpadted[0].carModel}` :
                    'NO CAR CARD CREATED'}</label>
                <input
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => { lStore.updateCarCardStore.setCarImageInputVal(event.target.value) }}
                    id='carImage'
                    type="text"
                    defaultValue={carToBeUpadted.length ? carToBeUpadted[0].carImage : ''}
                    placeholder='enter url of car image'
                />
                <button
                    onClick={() => {
                        lStore.modal.setIsModalOpen(true);
                        lStore.updateCarCardStore.carImageInputVal || lStore.updateCarCardStore.setCarImageInputVal(carToBeUpadted[0].carImage);
                        httpClient.PUT(Number(id), carToBeUpadted[0], mainStore.setIsDatabaseErrorPUT);
                    }}
                    className={`reduce-font-size ${!carToBeUpadted.length ? 'buttonIsHidden' : ''}`}
                >Submit update</button>
            </div>
        </>
    );
}

export default observer(UpdateCarCard);