import { useContext, useState } from 'react';
import 'page/UpdateCarList/UpdateCarList.scss';
import { contextStore } from 'store/store-context';
import { checkInputValue } from 'utility/update-car-list-func';
import { observer } from 'mobx-react';

function UpdateCarList() {
    const mainStore = useContext(contextStore);
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
            <button onClick={() => isCarBrandDisplyed ? mainStore.addCarBrand(inputValue) : mainStore.addCarModel(inputValue)}
                disabled={!checkInputValue(inputValue)}
            >Add</button>
            <button onClick={() =>
                isCarBrandDisplyed ? mainStore.deleteCarBrand(inputValue) : mainStore.deleteCarModel(inputValue)}
            >Delete</button>
            <button
                onClick={() => setIsCarBrandDisplyed(!isCarBrandDisplyed)}
                className='reduce-font-size'
            >
                Switch to {isCarBrandDisplyed ? 'model' : 'brand'}
            </button>
        </div>
    )
}

export default observer(UpdateCarList);