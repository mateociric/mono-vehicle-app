import React, { useContext, useState } from 'react';
import { useLocation } from "react-router";
import 'component/Menu/Menu.scss'
import SelectSort from './SelectSort/SelectSort';
import SelectCarBrand from 'component/Menu/SelectCarBrand/SelectCarBrand';
import SelectCarModel from 'component/Menu/SelectCarModel/SelectCarModel';
import Modal from 'component/Modal/Modal';
import ctxStoreValues from 'store/store-context';
import { addCarToCarList, searchCar } from 'utility/menu-func';

function Menu() {
    const cSV = useContext(ctxStoreValues);
    const [modalIsVisibleForDatabaseError, setModalIsVisibleForDatabaseError] = useState<boolean>(false);
    const currLocation = useLocation();

    function onClickHandler() {
        setModalIsVisibleForDatabaseError(false);
    }

    return (
        <>
            {modalIsVisibleForDatabaseError && <Modal
                onClick={onClickHandler}
                message='Something went wrong. Car is not saved to database.'
                hasButtonNO={false} />}
            <div className='menu flex-column'>
                <section className='menu__title flex-column'>
                    <p>MENU</p>
                </section>

                <section className='menu__search flex-column'>
                    <label htmlFor='search-input' >search car</label>
                    <input
                        onKeyUp={(event: React.KeyboardEvent) => searchCar(event, cSV.func.setSearchCarInputVal)}
                        id='search-input'
                        type="text"
                        placeholder='eneter car brand & car name' />
                </section>

                <section className='menu__sort flex-column'>
                    <label htmlFor='sort-select'>sort car</label>
                    <SelectSort setTypeOfSort={cSV.func.setTypeOfSort} />
                </section>

                <section className='menu__add flex-column'>
                    <label htmlFor='car-brand-select'>Car</label>

                    <SelectCarBrand
                        value={cSV.val.carBrandSelectVal}
                        updatedOptionList={cSV.val.carBrandList}
                        setCarBrandSelectVal={cSV.func.setCarBrandSelectVal} />

                    <SelectCarModel
                        value={cSV.val.carModelSelectVal}
                        updatedOptionList={cSV.val.carModelList[cSV.val.carBrandSelectVal]}
                        setCarModelSelectVal={cSV.func.setCarModelSelectVal} />

                    <button onClick={() => addCarToCarList(
                        cSV.val.carBrandList,
                        cSV.val.carBrandSelectVal,
                        cSV.val.carModelList,
                        cSV.val.carModelSelectVal,
                        cSV.val.carList,
                        cSV.func.setCarList,
                        setModalIsVisibleForDatabaseError)}
                        className={currLocation.pathname === '/' ? '' : 'buttonIsHidden'}>Create car</button>
                </section>
            </div >
        </>
    )
}

export default Menu;