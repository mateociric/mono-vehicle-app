import { useContext, useState } from 'react';
import 'page/UpdateCarList/UpdateCarList.scss';
import ctxStoreValues from 'store/store-context';
import { addCarBrand, deleteCarBrand, addCarModel, deleteCarModel } from 'utility/update-car-list-func';

function UpdateCarList() {
    const cSV = useContext(ctxStoreValues);
    const [isCarBrandDisplyed, setIsCarBrandDisplyed] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState<string>('');
    
    return (
        <div className='update-car-list flex-column'>
            <label htmlFor='inputBrandModel'>{isCarBrandDisplyed ? 'Car brand' : 'Car model'}</label>
            <input
                onKeyUp={(event: React.KeyboardEvent) => setInputValue((event.target as HTMLInputElement).value)}
                id='inputBrandModel'
                type="text"
                placeholder={isCarBrandDisplyed ? 'eneter car brand name' : 'eneter car model name'}
            />
            <button onClick={() => isCarBrandDisplyed ?
                addCarBrand(
                    inputValue,
                    cSV.val.carBrandList,
                    cSV.func.setCarBrandList,
                    cSV.func.setCarModelList,
                    cSV.func.setCarBrandSelectVal) :
                addCarModel(
                    inputValue,
                    cSV.val.carModelList,
                    cSV.val.carBrandSelectVal,
                    cSV.func.setCarModelList,
                    cSV.func.setCarModelSelectVal)
            }>Add</button>
            <button onClick={() =>
                isCarBrandDisplyed ?
                    deleteCarBrand(
                        inputValue,
                        cSV.val.carBrandList,
                        cSV.val.carModelList,
                        cSV.func.setCarModelList,
                        cSV.func.setCarBrandList,
                        cSV.func.setCarBrandSelectVal) :
                    deleteCarModel(
                        inputValue,
                        cSV.val.carModelList,
                        cSV.val.carBrandSelectVal,
                        cSV.func.setCarModelList,
                        cSV.func.setCarModelSelectVal)
            }>Remove</button>
            <button onClick={() => setIsCarBrandDisplyed(!isCarBrandDisplyed)}>Switch to {isCarBrandDisplyed ? 'model' : 'brand'}</button>
        </div >
    )
}

export default UpdateCarList;