import React, { useContext } from 'react';
import { useLocation } from "react-router";
import 'component/Menu/Menu.scss'
import SelectSort from './SelectSort/SelectSort';
import SelectCarBrand from 'component/Menu/SelectCarBrand/SelectCarBrand';
import SelectCarModel from 'component/Menu/SelectCarModel/SelectCarModel';
import ctxStoreValues from 'store/store-context';
import { addNewCar } from 'utility/add-button-func';

function Menu() {
    const cSV = useContext(ctxStoreValues);
    const currLocation = useLocation();

    return (
        <>
            <div className='menu'>
                <section className='menu__title'>
                    <p>MENU</p>
                </section>

                <section className='menu__search'>
                    <label>search car</label>
                    <input type="text" onKeyUp={(event: any) => cSV.func.setSearchCarInputVal(event.target.value)} />
                </section>

                <section className='menu__sort'>
                    <label>sort car</label>
                    <SelectSort setTypeOfSort={cSV.func.setTypeOfSort} />
                </section>

                <section className='menu__add'>
                    <label>car</label>
                    <SelectCarBrand
                        value={cSV.val.carBrandSelectVal}
                        updatedOptionList={cSV.val.carBrandList}
                        setCarBrandSelectVal={cSV.func.setCarBrandSelectVal} />
                    <SelectCarModel
                        value={cSV.val.carModelSelectVal}
                        updatedOptionList={cSV.val.carModelList[cSV.val.carBrandSelectVal]}
                        setCarModelSelectVal={cSV.func.setCarModelSelectVal} />
                    <button onClick={() => addNewCar(
                        cSV.val.carBrandList,
                        cSV.val.carBrandSelectVal,
                        cSV.val.carModelList,
                        cSV.val.carModelSelectVal,
                        cSV.val.carList,
                        cSV.func.addNewCarToCarList)}
                        className={currLocation.pathname === '/' ? '' : 'buttonIsHidden'}>add car</button>
                </section>
            </div >
        </>
    )
}

export default Menu;