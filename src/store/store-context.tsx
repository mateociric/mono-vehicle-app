import React, { useState } from 'react'
import TCtxValues from 'model/model-ctxStore';

const ctxValues: TCtxValues = {
    values: {
        carBrand: ['Mercedes-Benz', 'BMW'],
        carModel: [['M1', 'M2'], ['B1', 'B2']],
        selectedCarBrand: 0,
    },
    func: {
        addCarBrand: () => { },
        removeCarBrand: () => { },
        setSelectedCarBrand: () => { },
    }
}

const ctxStoreValues = React.createContext(ctxValues);

export function CtxStoreValuesProvider(props: { children: React.ReactNode }) {
    const [carBrand, modifieCarBrand] = useState<string[]>(['Mercedes-Benz', 'BMW']);
    const [carModel, modifieCarModel] = useState<string[][]>([['M1', 'M2'], ['B1', 'B2']]);
    const [selectedCarBrand, setSelectedCarBrand] = useState<number>(0);

    return (
        <>
            <ctxStoreValues.Provider value={{
                values: {
                    carBrand,
                    carModel,
                    selectedCarBrand,
                },
                func: {
                    addCarBrand: (carBrandInputValue: string) => {
                        const carBrandIsAlreadyExist = carBrand.some((el) => {
                            return el.toLowerCase() === carBrandInputValue.toLowerCase();
                        });
                        if (!carBrandIsAlreadyExist) {
                            modifieCarBrand((prevState) => {
                                return [...prevState, carBrandInputValue]
                            });
                            //when new car brand created update <option> for new car model
                            modifieCarModel((prevState) => {
                                return [...prevState, []]
                            });
                            setSelectedCarBrand(carBrand.length)
                            //later to display modal
                        }
                    },
                    removeCarBrand: (carBrandInputValue: string) => {
                        if (carBrand.length > 1) {
                            const removedCarBrend = carBrand.filter((el) => {
                                return el.toLowerCase() !== carBrandInputValue.toLowerCase();
                            });
                            const indexToBeRemovedCarModel = carBrand.indexOf(carBrandInputValue);
                            const removedCarModel = carModel.filter((el, index) => {
                                return index !== indexToBeRemovedCarModel
                            })
                            modifieCarModel(removedCarModel)
                            modifieCarBrand(removedCarBrend);
                            setSelectedCarBrand(0)
                        }
                        //later to display modal
                    },
                    setSelectedCarBrand,
                }
            }}>
                {props.children}
            </ctxStoreValues.Provider >
        </>
    )
}

export default ctxStoreValues;