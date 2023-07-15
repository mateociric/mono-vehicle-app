import React, { useContext, useState } from 'react'
import { useParams } from "react-router";
import 'page/UpdateCarCard/UpdateCarCard.scss';
import ctxStoreValues from 'store/store-context';
import { TCar } from 'model/model-car';
import updateCarCard from 'utility/update-car-car-func';

function UpdateCarCard() {
    const cSV = useContext(ctxStoreValues);
    const [carImageInputVal, setCarImageInputVal] = useState<string>('')
    const { id } = useParams();
    const carToBeUpadted = cSV.val.carList.filter((el: TCar) => {
        return el.id === Number(id);
    });

    return (
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
            <button onClick={
                () => updateCarCard(cSV.val.carBrandList,
                    cSV.val.carBrandSelectVal,
                    cSV.val.carModelList,
                    cSV.val.carModelSelectVal,
                    carImageInputVal,
                    Number(id),
                    cSV.val.carList,
                    cSV.func.setCarList)}>Submit car update</button>
        </div>
    );
}

export default UpdateCarCard;