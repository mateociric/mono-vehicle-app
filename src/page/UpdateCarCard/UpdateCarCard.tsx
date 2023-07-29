import React, { useContext } from 'react'
import { useParams } from "react-router";
import 'page/UpdateCarCard/UpdateCarCard.scss';
import Modal from 'component/Modal/Modal';
import { contextStore } from 'store/context-store';
import { observer, useLocalObservable } from 'mobx-react';
import localStore from 'store/localStore';
import TCar from 'model/model-car';

function UpdateCarCard() {
    const mainStore = useContext(contextStore);
    const lStore = useLocalObservable(() => localStore);
    const { id } = useParams();

    const carBrand = mainStore.carBrandList[mainStore.carBrandSelectVal];
    const carModel = mainStore.carModelList[mainStore.carBrandSelectVal][mainStore.carModelSelectVal];
    const carToBeUpadted = mainStore.carList.filter((el: TCar) => {
        return el.id === Number(id);
    });

    return (
        <>
            {lStore.modal.isModalOpen && <Modal
                onClick={() => {
                    mainStore.updateCarInCarList(lStore.updateCarCardStore.carImageInputVal, Number(id), lStore.modal.toggleModalDataBaseError);
                    lStore.modal.toggleModal();
                }}
                message={`Car card updated to ${carBrand} - ${carModel}`}
                hasButtonNO={false}
            />}
            {lStore.modal.isModalOpenForDatabaseError && <Modal
                onClick={lStore.modal.toggleModalDataBaseError}
                message='Something went wrong. Car is not updated to database.'
                hasButtonNO={false}
            />}
            <div className='update-car-card flex-column'>
                <label htmlFor='carImage'>{carToBeUpadted.length ?
                    `${carToBeUpadted[0].carBrand} - ${carToBeUpadted[0].carModel}` :
                    'NO CAR CARD CREATED'}</label>
                <input
                    onChange={(event: any) => { lStore.updateCarCardStore.setCarImageInputVal(event.target.value) }}
                    id='carImage'
                    type="text"
                    defaultValue={carToBeUpadted.length ? carToBeUpadted[0].carImage : ''}
                    placeholder='enter url of car image'
                />
                <button
                    onClick={() => lStore.modal.toggleModal()}
                    className='reduce-font-size'
                >Submit update</button>
            </div>
        </>
    );
}

export default observer(UpdateCarCard);