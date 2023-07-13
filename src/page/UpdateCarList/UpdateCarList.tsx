import { useContext, useState } from 'react';
import 'page/UpdateCarList/UpdateCarList.scss';
import ctxStoreValues from 'store/store-context';

function UpdateCarList() {
    const cSV = useContext(ctxStoreValues);
    const [isCarBrandDisplyed, setIsCarBrandDisplyed] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState<string>('');

    return (
        <div className='update-car-list'>
            <label>{isCarBrandDisplyed ? 'Car brand' : 'Car model'}</label>
            <input onKeyUp={(event: React.KeyboardEvent) => setInputValue((event.target as HTMLInputElement).value)} type="text" />
            <button onClick={() => isCarBrandDisplyed ? cSV.func.addCarBrand(inputValue) : cSV.func.addCarModel(inputValue)}>Add</button>
            <button onClick={() => isCarBrandDisplyed ? cSV.func.removeCarBrand(inputValue) : cSV.func.removeCarModel(inputValue)}>Remove</button>
            <button onClick={() => setIsCarBrandDisplyed(!isCarBrandDisplyed)}>Switch to {isCarBrandDisplyed ? 'model' : 'brand'}</button>
        </div>
    )
}

export default UpdateCarList;