import React, { useContext } from 'react';
import { useLocation } from "react-router";
import 'component/Menu/Menu.scss'
import InputSearch from './InputSearch/InputSearch';
import SelectSort from './SelectSort/SelectSort';
import SelectCarBrand from 'component/Menu/SelectCarBrand/SelectCarBrand';
import SelectCarModel from 'component/Menu/SelectCarModel/SelectCarModel';
import Modal from 'component/Modal/Modal';
import { observer, useLocalObservable } from 'mobx-react';
import { contextStore } from 'store/context-store';
import localStore from 'store/localStore';
import HttpClient from 'utility/http-client-class';

function Menu() {
    const mainStore = useContext(contextStore);
    const lStore = useLocalObservable(() => localStore);
    const currLocation = useLocation();
    const httpClient = new HttpClient('https://mono-vehicle-app-default-rtdb.firebaseio.com/');

    return (
        <>
            {mainStore.isDatabaseErrorPOST &&
                <Modal
                    onClick={() => mainStore.setIsDatabaseErrorPOST(false)}
                    message='Something went wrong. The car is not saved to a database.'
                    hasButtonNO={false}
                />
            }
            <div className='menu flex-column'>
                <h1 className='menu__title'>
                    MENU
                </h1>
                <section className='menu__search flex-column'>
                    <label htmlFor='search-input' >search car</label>
                    <InputSearch
                        searchCar={lStore.menuStore.searchCar}
                        setSearchCarInputVal={mainStore.setSearchCarInputVal}
                        currLocation={currLocation.pathname}
                    />
                </section>
                <section className='menu__sort flex-column'>
                    <label htmlFor='sort-select'>sort car</label>
                    <SelectSort
                        setTypeOfSort={mainStore.setTypeOfSort}
                        currLocation={currLocation.pathname}
                    />
                </section>
                <section className='menu__add flex-column'>
                    <label htmlFor='car-brand-select'>Car</label>
                    <SelectCarBrand
                        value={mainStore.carBrandSelectVal}
                        updatedOptionList={mainStore.carBrandList}
                        setCarBrandSelectVal={mainStore.setCarBrandSelectVal}
                        setCarModelSelectVal={mainStore.setCarModelSelectVal}
                        currLocation={currLocation.pathname}
                    />
                    <SelectCarModel
                        value={mainStore.carModelSelectVal}
                        updatedOptionList={mainStore.carModelList[mainStore.carBrandSelectVal]}
                        setCarModelSelectVal={mainStore.setCarModelSelectVal}
                        currLocation={currLocation.pathname}
                    />
                    <button onClick={() => {
                        mainStore.addCarToCarList();
                        httpClient.POST(mainStore.carList[mainStore.carList.length - 1], mainStore.setIsDatabaseErrorPOST);
                    }}
                        className={currLocation.pathname === '/' ? '' : 'buttonIsHidden'}
                    >Create car</button>
                </section>
            </div>
        </>
    )
}

export default observer(Menu)