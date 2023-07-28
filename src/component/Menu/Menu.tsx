import React, { useContext, useState } from 'react';
import { useLocation } from "react-router";
import 'component/Menu/Menu.scss'
import InputSearch from './InputSearch/InputSearch';
import SelectSort from './SelectSort/SelectSort';
import SelectCarBrand from 'component/Menu/SelectCarBrand/SelectCarBrand';
import SelectCarModel from 'component/Menu/SelectCarModel/SelectCarModel';
import Modal from 'component/Modal/Modal';
import { contextStore } from 'store/store-context';
import { observer } from 'mobx-react';

function Menu() {
    const mainStore = useContext(contextStore);
    const [modalIsVisibleForDatabaseError, setModalIsVisibleForDatabaseError] = useState<boolean>(false);
    const currLocation = useLocation();

    function onCloseModalHandler() {
        setModalIsVisibleForDatabaseError(false);
    }

    return (
        <>
            {modalIsVisibleForDatabaseError && <Modal
                onClick={onCloseModalHandler}
                message='Something went wrong. The car is not saved to a database.'
                hasButtonNO={false} />}
            <div className='menu flex-column'>
                <h1 className='menu__title'>
                    MENU
                </h1>

                <section className='menu__search flex-column'>
                    <label htmlFor='search-input' >search car</label>
                    <InputSearch
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

                    <button onClick={() => mainStore.addCarToCarList(setModalIsVisibleForDatabaseError)}
                        className={currLocation.pathname === '/' ? '' : 'buttonIsHidden'}
                    >Create car</button>
                </section>
            </div >
        </>
    )
}

export default observer(Menu);