import React, { useContext, useState } from 'react'
import { useParams } from "react-router";
import 'page/UpdateCarCard/UpdateCarCard.scss';
import Modal from 'component/Modal/Modal';
import ctxStoreValues from 'store/store-context';
import { TCar } from 'model/model-car';
import { updateCar } from 'utility/update-car-func';

function UpdateCarCard() {
    const cSV = useContext(ctxStoreValues);
    const [carImageInputVal, setCarImageInputVal] = useState<string>('')
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
    const [modalIsVisibleForDatabaseError, setModalIsVisibleForDatabaseError] = useState<boolean>(false);
    const { id } = useParams();
    const carToBeUpadted = cSV.val.carList.filter((el: TCar) => {
        return el.id === Number(id);
    });
    const carBrand = cSV.val.carBrandList[cSV.val.carBrandSelectVal];
    const carModel = cSV.val.carModelList[cSV.val.carBrandSelectVal][cSV.val.carModelSelectVal];

    function updateCarCardHandler() {
        updateCar(cSV.val.carBrandList,
            cSV.val.carBrandSelectVal,
            cSV.val.carModelList,
            cSV.val.carModelSelectVal,
            carImageInputVal,
            Number(id),
            cSV.val.carList,
            cSV.func.setCarList,
            setModalIsVisibleForDatabaseError);
        setModalIsVisible(false)
    }

    function onClickHandler() {
        setModalIsVisibleForDatabaseError(false)
    }

    return (
        <>
            {modalIsVisible && <Modal
                onClick={updateCarCardHandler}
                message={`Car card updated to ${carBrand} - ${carModel}`}
                hasButtonNO={false} />}
            {modalIsVisibleForDatabaseError && <Modal
                onClick={onClickHandler}
                message='Something went wrong. Car is not updated to database.'
                hasButtonNO={false} />}
            <div className='update-car-card flex-column'>
                <label htmlFor='carImage'>{carToBeUpadted.length ?
                    `${carToBeUpadted[0].carBrand} - ${carToBeUpadted[0].carModel}` :
                    'NO CAR CARD CREATED'}</label>
                <input
                    onChange={(event: any) => { setCarImageInputVal(event.target.value) }}
                    id='carImage'
                    type="text"
                    defaultValue={carToBeUpadted.length ? carToBeUpadted[0].carImage : ''}
                    placeholder='enter url of car image' />
                <button
                    onClick={() => setModalIsVisible(true)}
                    className='reduce-font-size'
                >Submit update</button>
            </div>
        </>
    );
}

export default UpdateCarCard;