import { useContext } from 'react';
import 'page/UpdateCarList/UpdateCarList.scss';
import { contextStore } from 'store/context-store';
import localStore from 'store/localStore';
import { observer, useLocalObservable } from 'mobx-react';

function UpdateCarList() {
    const mainStore = useContext(contextStore);
    const lStore = useLocalObservable(() => localStore);

    return (
        <div className='update-car-list flex-column'>
            <label htmlFor='inputBrandModel'>{lStore.updateCarList.isCarBrandSwitched ? 'Car brand' : 'Car model'}</label>
            <input
                onKeyUp={(event: React.KeyboardEvent) => lStore.updateCarList.setInputValue((event.target as HTMLInputElement).value)}
                id='inputBrandModel'
                type="text"
                placeholder={lStore.updateCarList.isCarBrandSwitched ? 'eneter car brand name' : 'eneter car model name'}
            />
            <button onClick={() => lStore.updateCarList.isCarBrandSwitched ? mainStore.addCarBrand(lStore.updateCarList.inputValue) : mainStore.addCarModel(lStore.updateCarList.inputValue)}
                disabled={!lStore.updateCarList.checkInputValue(lStore.updateCarList.inputValue)}
            >Add</button>
            <button onClick={() =>
                lStore.updateCarList.isCarBrandSwitched ? mainStore.deleteCarBrand(lStore.updateCarList.inputValue) : mainStore.deleteCarModel(lStore.updateCarList.inputValue)}
            >Delete</button>
            <button
                onClick={() => lStore.updateCarList.setIsCarBrandSwitched(!lStore.updateCarList.isCarBrandSwitched)}
                className='reduce-font-size'
            >
                Switch to {lStore.updateCarList.isCarBrandSwitched ? 'model' : 'brand'}
            </button>
        </div>
    )
}

export default observer(UpdateCarList);