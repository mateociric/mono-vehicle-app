import { useContext, useState } from 'react';
import 'page/Update/Update.scss';
import ctxStoreValues from 'store/store-context';

function Update() {
    const ctxStoreVal = useContext(ctxStoreValues);
    const [isCarBrandDisplyed, setIsCarBrandDisplyed] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState<string>('');

    return (
        <div className='update'>
            <label>{isCarBrandDisplyed ? 'Car brand' : 'Car model'}</label>
            <input onKeyUp={(event: React.KeyboardEvent) => setInputValue((event.target as HTMLInputElement).value)} type="text" />
            <button onClick={() => isCarBrandDisplyed ? ctxStoreVal.func.addCarBrand(inputValue) : ctxStoreVal.func.addCarModel(inputValue)}>Add</button>
            <button onClick={() => isCarBrandDisplyed ? ctxStoreVal.func.removeCarBrand(inputValue) : null}>Remove</button>
            <button onClick={() => setIsCarBrandDisplyed(!isCarBrandDisplyed)}>Switch to {isCarBrandDisplyed ? 'model' : 'brand'}</button>
        </div>
    )
}

export default Update;