import React, { useState } from 'react'
import TCtxValues from 'model/model-ctx-store';
import { TCar } from 'model/model-car';

const ctxValues: TCtxValues = {
    val: {
        carBrandList: ['Mercedes-Benz', 'BMW'],
        carModelList: [['M1', 'M2'], ['B1', 'B2']],
        carBrandSelectVal: 0,
        carModelSelectVal: 0,
        carList: [],
        typeOfSort: 'id',
        searchCarInputVal: '',
        appIsRunFirstTime: true,
        isCarCardDeletedFromDatabase: false,
    },
    func: {
        setCarBrandList: () => { },
        setCarModelList: () => { },
        setCarBrandSelectVal: () => { },
        setCarModelSelectVal: () => { },
        setTypeOfSort: () => { },
        setSearchCarInputVal: () => { },
        setCarList: () => { },
        setAppIsRunFirstTime: () => { },
        setIsCarCardDeletedFromDatabase: () => { },
    },
}

const ctxStoreValues = React.createContext(ctxValues);

export function CtxStoreValuesProvider(props: { children: React.ReactNode }) {
    const [carBrandList, setCarBrandList] = useState<string[]>(['Mercedes-Benz', 'BMW']);
    const [carModelList, setCarModelList] = useState<string[][]>([['M1', 'M2'], ['B1', 'B2']]);
    const [carBrandSelectVal, setCarBrandSelectVal] = useState<number>(0);
    const [carModelSelectVal, setCarModelSelectVal] = useState<number>(0);
    const [carList, setCarList] = useState<TCar[]>([]);
    const [typeOfSort, setTypeOfSort] = useState<string>('id');
    const [searchCarInputVal, setSearchCarInputVal] = useState<string>('');
    const [appIsRunFirstTime, setAppIsRunFirstTime] = useState<boolean>(true);
    const [isCarCardDeletedFromDatabase, setIsCarCardDeletedFromDatabase] = useState<boolean>(false);

    return (
        <>
            <ctxStoreValues.Provider value={{
                val: {
                    carBrandList,
                    carModelList,
                    carBrandSelectVal,
                    carModelSelectVal,
                    carList,
                    typeOfSort,
                    searchCarInputVal,
                    appIsRunFirstTime,
                    isCarCardDeletedFromDatabase,
                },
                func: {
                    setCarBrandList,
                    setCarModelList,
                    setCarBrandSelectVal,
                    setCarModelSelectVal,
                    setTypeOfSort,
                    setSearchCarInputVal,
                    setCarList,
                    setAppIsRunFirstTime,
                    setIsCarCardDeletedFromDatabase,
                }
            }}>
                {props.children}
            </ctxStoreValues.Provider >
        </>
    )
}

export default ctxStoreValues;