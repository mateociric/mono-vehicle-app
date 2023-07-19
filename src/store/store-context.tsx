import React, { useState } from 'react'
import TCtxValues from 'model/model-ctx-store';
import { TCar } from 'model/model-car';

const ctxValues: TCtxValues = {
    val: {
        carBrandList: ['Mercedes-Benz', 'BMW'],
        carModelList: [['S Class'], ['X1']],
        carBrandSelectVal: 0,
        carModelSelectVal: 0,
        carList: [],
        typeOfSort: 'id',
        searchCarInputVal: '',
        appIsRunFirstTime: true,
        isCarCardFailedToDeleteFromDatabase: false,
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
        setIsCarCardFailedToDeleteFromDatabase: () => { },
    },
}

const ctxStoreValues = React.createContext(ctxValues);

export function CtxStoreValuesProvider(props: { children: React.ReactNode }) {
    const [carBrandList, setCarBrandList] = useState<string[]>(['Mercedes-Benz', 'BMW']);
    const [carModelList, setCarModelList] = useState<string[][]>([['S Class'], ['X1']]);
    const [carBrandSelectVal, setCarBrandSelectVal] = useState<number>(0);
    const [carModelSelectVal, setCarModelSelectVal] = useState<number>(0);
    const [carList, setCarList] = useState<TCar[]>([]);
    const [typeOfSort, setTypeOfSort] = useState<string>('id');
    const [searchCarInputVal, setSearchCarInputVal] = useState<string>('');
    const [appIsRunFirstTime, setAppIsRunFirstTime] = useState<boolean>(true);
    const [isCarCardFailedToDeleteFromDatabase, setIsCarCardFailedToDeleteFromDatabase] = useState<boolean>(false);

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
                    isCarCardFailedToDeleteFromDatabase,
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
                    setIsCarCardFailedToDeleteFromDatabase,
                }
            }}>
                {props.children}
            </ctxStoreValues.Provider >
        </>
    )
}

export default ctxStoreValues;