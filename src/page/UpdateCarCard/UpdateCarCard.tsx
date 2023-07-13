import React, { useContext, useState } from 'react'
import { useParams } from "react-router";
import 'page/UpdateCarCard/UpdateCarCard.scss';
import ctxStoreValues from 'store/store-context';
import { updateCarCard } from 'utility/add-button-func';
import { TCar } from 'model/model-car';

function UpdateCarCard() {
    const cSV = useContext(ctxStoreValues);
    const { id } = useParams();
    const carFromArray = cSV.val.carList.filter((el: TCar) => {
        return el.id === Number(id);
    });
    const [carImageInputVal, setCarImageInputVal] = useState<string>('')

    return (
        <div className='update-car-card'>
            <p>{carFromArray.length ? carFromArray[0].carBrand : 'NO CAR CARD'}</p>
            <p>{carFromArray.length ? carFromArray[0].carModel : 'CREATED'}</p>
            <input
                onChange={(event: any) => { setCarImageInputVal(event.target.value) }}
                type="text" />
            <button onClick={
                () => updateCarCard(
                    cSV.val.carBrandList,
                    cSV.val.carBrandSelectVal,
                    cSV.val.carModelList,
                    cSV.val.carModelSelectVal,
                    carImageInputVal,
                    Number(id),
                    cSV.val.carList,
                    cSV.func.updateCarToCarList)
            }>Submit car update</button>
        </div>
    );
}

export default UpdateCarCard;