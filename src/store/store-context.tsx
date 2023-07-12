import React, { useState } from 'react'
import TCtxValues from 'model/model-ctx-store';
import { TCar } from 'model/model-car';

const ctxValues: TCtxValues = {
    values: {
        carBrandList: ['Mercedes-Benz', 'BMW'],
        carModelList: [['M1', 'M2'], ['B1', 'B2']],
        carBrandSelectVal: 0,
        carModelSelectVal: 0,
        carList: [],
        typeOfSort: 'id',
        searchCarInputVal: '',
    },
    func: {
        addCarBrand: () => { },
        removeCarBrand: () => { },
        setCarBrandSelectVal: () => { },
        addCarModel: () => { },
        removeCarModel: () => { },
        setCarModelSelectVal: () => { },
        addNewCarToCarList: () => { },
        setTypeOfSort: () => { },
        setSearchCarInputVal: () => {},
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

    return (
        <>
            <ctxStoreValues.Provider value={{
                values: {
                    carBrandList,
                    carModelList,
                    carBrandSelectVal,
                    carModelSelectVal,
                    carList,
                    typeOfSort,
                    searchCarInputVal,
                },
                func: {
                    addCarBrand: (carBrandInputValue: string) => {
                        const carBrandIsAlreadyExist = carBrandList.some((el) => {
                            return el.toLowerCase() === carBrandInputValue.toLowerCase();
                        });
                        if (!carBrandIsAlreadyExist) {
                            setCarBrandList((prevState) => {
                                return [...prevState, carBrandInputValue]
                            });
                            //when new car brand created update <option> for new car model
                            setCarModelList((prevState) => {
                                return [...prevState, []]
                            });
                            setCarBrandSelectVal(carBrandList.length);
                        }
                    },
                    removeCarBrand: (carBrandInputValue: string) => {
                        if (carBrandList.length > 1) {
                            const removedCarBrend = carBrandList.filter((el) => {
                                return el.toLowerCase() !== carBrandInputValue.toLowerCase();
                            });
                            const indexToBeRemovedCarModel = carBrandList.indexOf(carBrandInputValue);
                            const removedCarModel = carModelList.filter((el, index) => {
                                return index !== indexToBeRemovedCarModel
                            });
                            setCarModelList(removedCarModel)
                            setCarBrandList(removedCarBrend);
                            setCarBrandSelectVal(0)
                        }
                    },
                    setCarBrandSelectVal,
                    addCarModel: (carModelInputValue: string) => {
                        const carModelIsAlreadyExist = carModelList[carBrandSelectVal].some((el) => {
                            return el.toLowerCase() === carModelInputValue.toLowerCase();
                        });
                        if (!carModelIsAlreadyExist) {
                            //!!!always to make copy of array, not refernce (arr = carModelList)
                            const arr = carModelList.map((el) => { return el });
                            arr[carBrandSelectVal] = [...arr[carBrandSelectVal], carModelInputValue]
                            setCarModelList(arr)
                            setCarModelSelectVal(carModelList[carBrandSelectVal].length)
                        }
                    },
                    removeCarModel: (carModelInputValue: string) => {
                        const removedCarModel = carModelList[carBrandSelectVal].filter((el) => {
                            return el.toLowerCase() !== carModelInputValue.toLowerCase();
                        });
                        const arr = carModelList.map((el) => { return el });
                        arr[carBrandSelectVal] = removedCarModel;
                        setCarModelList(arr);
                        setCarModelSelectVal(0);
                    },
                    setCarModelSelectVal,
                    addNewCarToCarList: (newCar: TCar) => {
                        setCarList((prevState: TCar[]) => {
                            return [...prevState, newCar];
                        });
                    },
                    setTypeOfSort,
                    setSearchCarInputVal,

                }
            }}>
                {props.children}
            </ctxStoreValues.Provider >
        </>
    )
}

export default ctxStoreValues;