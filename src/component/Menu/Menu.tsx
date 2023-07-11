import React, { useContext } from 'react';
import 'component/Menu/Menu.scss'
import SelectCarBrand from 'component/Menu/SelectCarBrand/SelectCarBrand';
import SelectCarModel from 'component/Menu/SelectCarModel/SelectCarModel';
import ctxStoreValues from 'store/store-context';
import { TCar } from 'model/model-car';

function Menu() {
    const ctxStoreVal = useContext(ctxStoreValues);

    return (
        <>
            <div className='menu'>
                <section className='menu__title'>
                    <p>MENU</p>
                </section>

                <section className='menu__search'>
                    <label>search car</label>
                    <input type="text" />
                </section>

                <section className='menu__sort'>
                    <label>sort car</label>
                    
                </section>

                <section className='menu__add'>
                    <label>car</label>
                    <SelectCarBrand
                        value={ctxStoreVal.values.carBrandSelectVal}
                        updatedOptionList={ctxStoreVal.values.carBrandList}
                        setCarBrandSelectVal={ctxStoreVal.func.setCarBrandSelectVal} />
                    <SelectCarModel
                        value={ctxStoreVal.values.carModelSelectVal}
                        updatedOptionList={ctxStoreVal.values.carModelList[ctxStoreVal.values.carBrandSelectVal]}
                        setCarModelSelectVal={ctxStoreVal.func.setCarModelSelectVal} />
                    <button onClick={() => {
                        const newCar: TCar = {
                            carBrand: ctxStoreVal.values.carBrandList[ctxStoreVal.values.carBrandSelectVal],
                            carModel: ctxStoreVal.values.carModelList[ctxStoreVal.values.carBrandSelectVal][ctxStoreVal.values.carModelSelectVal],
                            carImage: '',
                            id: !ctxStoreVal.values.carList.length ? 1 : ctxStoreVal.values.carList[ctxStoreVal.values.carList.length - 1].id + 1,
                        }
                        ctxStoreVal.func.addCarList(newCar);
                    }}>add car</button>
                </section>
            </div>
        </>
    )
}

export default Menu;