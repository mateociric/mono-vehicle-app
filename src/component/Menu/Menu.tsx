import React, { useContext } from 'react';
import 'component/Menu/Menu.scss'
import SelectCarBrand from 'component/Menu/SelectCarBrand/SelectCarBrand';
import SelectCarModel from 'component/Menu/SelectCarModel/SelectCarModel';
import ctxStoreValues from 'store/store-context';

function Menu() {
    const ctxStoreVal = useContext(ctxStoreValues);

    return (
        <>
            <div className='menu'>
                <section className='menu__title'>
                    <p>MENU</p>
                </section>

                <section className='menu__search'>
                    <label>search vehicle</label>
                    <input type="text" />
                </section>

                <section className='menu__sort'>
                    <label>sort vehicle</label>
                    <select name="" id="">
                        <option value="id">sort by ID</option>
                        <option value="type">sort by TYPE</option>
                        <option value="name">sort by NAME</option>
                    </select>
                </section>

                <section className='menu__add'>
                    <label>add vehicle</label>
                    <SelectCarBrand
                        value={ctxStoreVal.values.carBrandSelectVal}
                        updatedOptionList={ctxStoreVal.values.carBrandList}
                        setCarBrandSelectVal={ctxStoreVal.func.setCarBrandSelectVal} />
                    <SelectCarModel
                        value={ctxStoreVal.values.carModelSelectVal}
                        updatedOptionList={ctxStoreVal.values.carModelList[ctxStoreVal.values.carBrandSelectVal]}
                        setCarModelSelectVal={ctxStoreVal.func.setCarModelSelectVal} />
                    <button>add vehicle</button>
                </section>
            </div>
        </>
    )
}

export default Menu;