import React, { useContext, useState } from 'react'
import { useParams } from "react-router";
import 'page/UpdateCarCard/UpdateCarCard.scss';
import Modal from 'component/Modal/Modal';
import { contextStore } from 'store/store-context';
import TCar from 'model/model-car';
import { observer } from 'mobx-react';

function UpdateCarCard() {
    const mainStore = useContext(contextStore);
    const [carImageInputVal, setCarImageInputVal] = useState<string>('')
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
    const [modalIsVisibleForDatabaseError, setModalIsVisibleForDatabaseError] = useState<boolean>(false);
    const { id } = useParams();
    const carToBeUpadted = mainStore.carList.filter((el: TCar) => {
        return el.id === Number(id);
    });
    const carBrand = mainStore.carBrandList[mainStore.carBrandSelectVal];
    const carModel = mainStore.carModelList[mainStore.carBrandSelectVal][mainStore.carModelSelectVal];

    function updateCarCardHandler() {
        mainStore.updateCarInCarList(carImageInputVal, Number(id), setModalIsVisibleForDatabaseError);
        setModalIsVisible(false)
    }

    function onCloseModalHandler() {
        setModalIsVisibleForDatabaseError(false)
    }

    return (
        <>
            {modalIsVisible && <Modal
                onClick={updateCarCardHandler}
                message={`Car card updated to ${carBrand} - ${carModel}`}
                hasButtonNO={false}
            />}
            {modalIsVisibleForDatabaseError && <Modal
                onClick={onCloseModalHandler}
                message='Something went wrong. Car is not updated to database.'
                hasButtonNO={false}
            />}
            <div className='update-car-card flex-column'>
                <label htmlFor='carImage'>{carToBeUpadted.length ?
                    `${carToBeUpadted[0].carBrand} - ${carToBeUpadted[0].carModel}` :
                    'NO CAR CARD CREATED'}</label>
                <input
                    onChange={(event: any) => { setCarImageInputVal(event.target.value) }}
                    id='carImage'
                    type="text"
                    defaultValue={carToBeUpadted.length ? carToBeUpadted[0].carImage : ''}
                    placeholder='enter url of car image'
                />
                <button
                    onClick={() => setModalIsVisible(true)}
                    className='reduce-font-size'
                >Submit update</button>
            </div>
        </>
    );
}

export default observer(UpdateCarCard);